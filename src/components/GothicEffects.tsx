import { useEffect } from 'react'

// Particle effect for gothic atmosphere
export function ParticleEffect() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.className = 'particle-canvas'
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.3;
    `
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(139, 0, 0, 0.5)'

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.remove()
    }
  }, [])

  return null
}

// Cursor trail effect
export function CursorTrail() {
  useEffect(() => {
    const trail: Array<{ x: number; y: number; opacity: number }> = []
    const trailLength = 10

    const handleMouseMove = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY, opacity: 1 })

      if (trail.length > trailLength) {
        trail.shift()
      }

      // Update trail elements
      trail.forEach((point, index) => {
        point.opacity = index / trailLength
      })

      // Create or update trail visual
      let trailElement = document.getElementById('cursor-trail')
      if (!trailElement) {
        trailElement = document.createElement('div')
        trailElement.id = 'cursor-trail'
        trailElement.style.cssText = `
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 0, 0, 0.7) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: opacity 0.1s;
        `
        document.body.appendChild(trailElement)
      }

      if (trail.length > 0) {
        const lastPoint = trail[trail.length - 1]
        trailElement.style.left = `${lastPoint.x}px`
        trailElement.style.top = `${lastPoint.y}px`
        trailElement.style.opacity = `${lastPoint.opacity}`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      const trailElement = document.getElementById('cursor-trail')
      if (trailElement) trailElement.remove()
    }
  }, [])

  return null
}

// Glitch text effect
export function GlitchText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`glitch-text ${className}`} data-text={children}>
      {children}
    </span>
  )
}

