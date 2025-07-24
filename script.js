// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.querySelector('.back-to-top');
    const header = document.querySelector('.header');
    const contactForm = document.getElementById('contactForm');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Variables para scroll
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Navegación móvil
    function toggleMobileNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Cerrar navegación móvil al hacer clic en un enlace
    function closeMobileNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Scroll suave para enlaces internos
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            closeMobileNav();
        }
    }

    // Actualizar header en scroll
    function updateHeader() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }

    // Mostrar/ocultar botón back to top
    function updateBackToTop() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Animación de barras de habilidades
    function animateSkillBars() {
        const skillsSection = document.getElementById('skills');
        const skillsSectionTop = skillsSection.offsetTop;
        const skillsSectionHeight = skillsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > skillsSectionTop + 200 && 
            window.scrollY < skillsSectionTop + skillsSectionHeight) {
            
            skillBars.forEach(bar => {
                if (!bar.classList.contains('animated')) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                    bar.classList.add('animated');
                }
            });
        }
    }

    // Animaciones en scroll
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Optimizar scroll con requestAnimationFrame
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }

    function updateScroll() {
        updateHeader();
        updateBackToTop();
        animateSkillBars();
        revealOnScroll();
        updateActiveNavLink();
        lastScrollY = window.scrollY;
        ticking = false;
    }

    // Actualizar enlace activo en navegación
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    // Manejar envío del formulario de contacto
    function handleContactForm(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validación básica
        if (!name || !email || !subject || !message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }

        // Simular envío del formulario
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        // Simular delay de envío
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
            showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
        }, 2000);
    }

    // Validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Mostrar notificaciones
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease-in-out;
            max-width: 400px;
        `;

        // Estilos del contenido
        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
        `;

        // Estilos del botón cerrar
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: auto;
            padding: 0;
            font-size: 0.875rem;
        `;

        // Añadir al DOM
        document.body.appendChild(notification);

        // Animación de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Cerrar notificación
        function closeNotification() {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }

        // Event listener para cerrar
        closeBtn.addEventListener('click', closeNotification);

        // Auto cerrar después de 5 segundos
        setTimeout(closeNotification, 5000);
    }

    function getNotificationIcon(type) {
        switch (type) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'warning': return 'fa-exclamation-triangle';
            default: return 'fa-info-circle';
        }
    }

    function getNotificationColor(type) {
        switch (type) {
            case 'success': return '#10b981';
            case 'error': return '#ef4444';
            case 'warning': return '#f59e0b';
            default: return '#3b82f6';
        }
    }

    // Efecto de typing para el título principal
    function typeWriter() {
        const text = "Desarrollador Full Stack & Arquitecto de Software";
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;
        
        subtitle.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                subtitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        setTimeout(type, 1000);
    }

    // Parallax suave para el hero
    function updateParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const scrolled = window.pageYOffset;
        const parallax = hero.querySelector('.hero-content');
        const speed = scrolled * 0.5;
        
        if (scrolled < window.innerHeight) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    }

    // Contador animado para estadísticas
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            if (counter.classList.contains('animated')) return;
            
            const target = parseInt(counter.textContent.replace('+', ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    counter.classList.add('animated');
                }
                counter.textContent = Math.floor(current) + '+';
            }, 16);
        });
    }

    // Intersection Observer para animaciones
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal', 'active');
                    
                    // Animaciones específicas para diferentes secciones
                    if (entry.target.id === 'skills') {
                        animateSkillBars();
                    }
                    
                    if (entry.target.querySelector('.stat-number')) {
                        animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Observar elementos específicos
        document.querySelectorAll('.project-card, .timeline-item, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }

    // Event Listeners
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', smoothScroll);
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Scroll event optimizado
    window.addEventListener('scroll', requestTick, { passive: true });

    // Resize event
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });

    // Click fuera del menú para cerrar en móvil
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileNav();
        }
    });

    // Prevenir scroll horizontal en móvil
    document.addEventListener('touchmove', (e) => {
        if (navMenu.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });

    // Manejo de teclas
    document.addEventListener('keydown', (e) => {
        // Cerrar menú móvil con Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
        }
        
        // Navegación con teclado
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });

    // Efecto hover para project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Lazy loading para imágenes
    function setupLazyLoading() {
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Preloader simple
    function hidePreloader() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    }

    // Theme toggle (opcional para futuras mejoras)
    function initThemeToggle() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Inicialización
    function init() {
        // Configurar observadores
        setupIntersectionObserver();
        setupLazyLoading();
        
        // Inicializar tema
        initThemeToggle();
        
        // Efectos iniciales
        setTimeout(() => {
            typeWriter();
            hidePreloader();
        }, 500);
        
        // Scroll inicial
        updateScroll();
        
        // Mostrar mensaje de bienvenida
        setTimeout(() => {
            showNotification('¡Bienvenido a mi portafolio! 👋', 'info');
        }, 2000);
    }

    // Ejecutar inicialización
    init();

    // Función para actualizar año automáticamente
    function updateYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }
    updateYear();

    // Performance monitoring (opcional)
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`🚀 Página cargada en ${loadTime}ms`);
        });
    }

    // Service Worker registration (para PWA futuro)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(error => console.log('SW registration failed'));
        });
    }

    // Initialize i18n when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize internationalization
        if (typeof i18n !== 'undefined') {
            i18n.updatePage();
        }
    });
});

// Utility functions
const utils = {
    // Debounce function
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },

    // Throttle function
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Format date
    formatDate: function(date) {
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // Copy to clipboard
    copyToClipboard: function(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback para navegadores antiguos
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        }
    }
};

// Exportar utils para uso global
window.portfolioUtils = utils;
