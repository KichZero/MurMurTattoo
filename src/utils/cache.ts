/**
 * Система кэширования для быстрой работы приложения
 * Кэширует загруженные модули, изображения и другие ресурсы
 */

import React from "react";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiry: number;
}

class AppCache {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly DEFAULT_TTL = 1000 * 60 * 60; // 1 час

  /**
   * Сохраняет данные в кэш
   */
  set<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + ttl,
    });
  }

  /**
   * Получает данные из кэша
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    // Проверяем срок годности
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Проверяет наличие данных в кэше
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  /**
   * Удаляет данные из кэша
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Очищает весь кэш
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Очищает устаревшие записи
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiry) {
        this.cache.delete(key);
      }
    }
  }
}

// Глобальный экземпляр кэша
export const appCache = new AppCache();

/**
 * Кэширует результат функции
 */
export function cacheFunction<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string,
  ttl?: number
): T {
  return (async (...args: Parameters<T>) => {
    const key = keyGenerator 
      ? keyGenerator(...args)
      : `${fn.name}_${JSON.stringify(args)}`;
    
    const cached = appCache.get(key);
    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    appCache.set(key, result, ttl);
    return result;
  }) as T;
}

/**
 * Кэширует загрузку изображения
 */
export async function cacheImage(src: string): Promise<HTMLImageElement> {
  const cacheKey = `image_${src}`;
  const cached = appCache.get<HTMLImageElement>(cacheKey);
  
  if (cached) {
    return cached;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      appCache.set(cacheKey, img, 1000 * 60 * 60 * 24); // 24 часа
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Создает обертку для lazy loading с кэшированием
 */
export function cachedLazy<T extends React.ComponentType<any>>(
  moduleLoader: () => Promise<{ default: T }>,
  moduleName: string
): () => Promise<{ default: T }> {
  const cacheKey = `module_${moduleName}`;
  
  return async () => {
    const cached = appCache.get<{ default: T }>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const module = await moduleLoader();
    appCache.set(cacheKey, module, 1000 * 60 * 60 * 24); // 24 часа
    return module;
  };
}

// Очистка кэша при запуске приложения
if (typeof window !== "undefined") {
  // Очищаем кэш каждые 30 минут
  setInterval(() => {
    appCache.cleanup();
  }, 1000 * 60 * 30);

  // Сохраняем кэш в localStorage для персистентности
  const CACHE_STORAGE_KEY = "murmur_app_cache";
  
  // Загружаем кэш из localStorage при запуске
  try {
    const savedCache = localStorage.getItem(CACHE_STORAGE_KEY);
    if (savedCache) {
      const parsed = JSON.parse(savedCache);
      const now = Date.now();
      for (const [key, entry] of Object.entries(parsed)) {
        const cacheEntry = entry as CacheEntry<any>;
        if (now < cacheEntry.expiry) {
          appCache.set(key, cacheEntry.data, cacheEntry.expiry - now);
        }
      }
    }
  } catch (e) {
    console.warn("Failed to load cache from localStorage", e);
  }

  // Сохраняем кэш в localStorage периодически
  setInterval(() => {
    try {
      const cacheData: Record<string, CacheEntry<any>> = {};
      appCache.cleanup();
      // Здесь нужно будет добавить метод для экспорта кэша
    } catch (e) {
      console.warn("Failed to save cache to localStorage", e);
    }
  }, 1000 * 60 * 5); // Каждые 5 минут
}

