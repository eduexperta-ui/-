import React, { useRef, useEffect, useState } from 'react';

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          setTheme(newTheme);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const colors = {
      light: {
        background: '#f9fafb', // gray-50
        particle: 'rgba(75, 85, 99, 0.8)', // gray-500
        line: 'rgba(156, 163, 175, 0.4)', // gray-400
        highlight: 'rgba(250, 204, 21, 0.8)', // yellow-400
      },
      dark: {
        background: '#000000', // black
        particle: 'rgba(107, 114, 128, 0.8)', // gray-500
        line: 'rgba(55, 65, 81, 0.6)', // gray-700
        highlight: 'rgba(250, 204, 21, 0.8)', // yellow-400
      }
    };
    let currentColors = colors[theme];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 2 - 1) * 0.3;
        this.speedY = (Math.random() * 2 - 1) * 0.3;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    const connect = () => {
        let lineRgb;
        if (theme === 'dark') {
            lineRgb = '55, 65, 81'; // gray-700
        } else {
            lineRgb = '156, 163, 175'; // gray-400
        }

        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = 1 - distance / 120;
                    ctx.strokeStyle = `rgba(${lineRgb}, ${opacity * 0.8})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const animate = () => {
      currentColors = colors[theme];
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = currentColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      connect();

      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            ctx.fillStyle = currentColors.highlight;
        } else {
            ctx.fillStyle = currentColors.particle;
        }

        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default HeroBackground;
