// Утилита для получения правильных путей к изображениям
// В Vite файлы из src/assets нужно импортировать или использовать через специальные пути

export function getImagePath(path: string): string {
  // Если это внешний URL, возвращаем как есть
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Если путь начинается с /src/assets, используем динамический импорт
  if (path.startsWith('/src/assets/')) {
    // Убираем /src и используем относительный путь
    const relativePath = path.replace('/src/', '');
    try {
      // В Vite для динамических импортов используем специальный синтаксис
      // Но для простоты используем путь относительно public или импортируем
      return new URL(`../${relativePath}`, import.meta.url).href;
    } catch {
      // Fallback - возвращаем исходный путь
      return path;
    }
  }
  
  return path;
}

