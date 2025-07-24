// Configuración de idiomas para el portfolio
const translations = {
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            greeting: "Hola, soy",
            name: "Joel Liranzo Rosario",
            title: "CEO & Founder DeepThinking | Software Engineer con 10+ años",
            description: "Software Engineer especializado en Rust, Elixir, Go, React y tecnologías cloud (AWS, Azure). CEO & Founder de DeepThinking, creando soluciones AI innovadoras con microservicios escalables.",
            contactBtn: "Contáctame",
            projectsBtn: "Ver Proyectos",
            stats: {
                years: "Años",
                projects: "Proyectos",
                technologies: "Tecnologías"
            }
        },
        
        // About Section
        about: {
            title: "Sobre mí",
            subtitle: "Conoce más sobre mi trayectoria y pasión por el desarrollo",
            paragraph1: "Soy un Software Engineer con más de 10 años de experiencia creando soluciones tecnológicas innovadoras. Como CEO & Founder de DeepThinking, lidero el desarrollo de aplicaciones AI y microservicios escalables. Graduado en Ingeniería de Sistemas del Instituto Tecnológico de Santo Domingo (INTEC).",
            paragraph2: "Mi especialidad incluye tecnologías modernas como Rust, Elixir, Go, React y plataformas cloud (AWS, Azure). Me enfoco en arquitecturas de microservicios, inteligencia artificial y soluciones empresariales escalables que transforman ideas en productos tecnológicos exitosos.",
            highlights: {
                education: {
                    title: "Educación",
                    description: "Ingeniería de Sistemas - INTEC"
                },
                leadership: {
                    title: "Liderazgo",
                    description: "CEO & Founder en DeepThinking"
                },
                ai: {
                    title: "Inteligencia Artificial",
                    description: "Soluciones AI y microservicios"
                }
            }
        },
        
        // Skills Section
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnologías y herramientas que domino",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                database: "Base de Datos",
                cloud: "DevOps & Cloud"
            }
        },
        
        // Experience Section
        experience: {
            title: "Experiencia Laboral",
            subtitle: "Mi trayectoria profesional en el mundo del desarrollo",
            jobs: {
                ceo: {
                    title: "CEO & Founder",
                    company: "DeepThinking",
                    period: "2020 - Presente",
                    description: "Fundé y lidero DeepThinking, desarrollando soluciones AI innovadoras con microservicios escalables. Arquitectura de sistemas distribuidos usando Rust, Elixir, Go y tecnologías cloud (AWS, Azure). Especializado en inteligencia artificial, automatización y transformación digital empresarial."
                },
                ocseni: {
                    title: "Senior Software Engineer",
                    company: "Organismo Coordinador (OCSENI)",
                    period: "2018 - 2023",
                    description: "Mejoré significativamente el rendimiento computacional, reduciendo los tiempos de operación en un 700% mediante técnicas de optimización. Solucioné problemas críticos de procesamiento, resultando en la entrega de un producto completamente optimizado y de alto rendimiento para el sistema eléctrico nacional."
                },
                senior: {
                    title: "Software Engineer",
                    company: "EGEHID",
                    period: "2014 - 2018",
                    description: "Desarrollé aplicaciones empresariales escalables y lideré equipos técnicos. Trabajé en sistemas críticos para la empresa de generación hidroeléctrica más importante de República Dominicana."
                },
                student: {
                    title: "Estudiante de Ingeniería de Sistemas",
                    company: "Instituto Tecnológico de Santo Domingo (INTEC)",
                    period: "2010 - 2014",
                    description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles. Participación en proyectos colaborativos y desarrollo de habilidades técnicas sólidas."
                }
            }
        },
        
        // Projects Section
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Algunos de mis trabajos más representativos",
            items: {
                deepthinking: {
                    title: "DeepThinking AI Platform",
                    description: "Plataforma empresarial de inteligencia artificial con microservicios escalables. Soluciones AI personalizadas desarrolladas con Rust, Elixir y arquitectura distribuida."
                },
                microservices: {
                    title: "Arquitectura de Microservicios",
                    description: "Sistema distribuido de alta disponibilidad desarrollado con Go y Rust, implementando patrones Event Sourcing y CQRS para manejo de eventos complejos."
                },
                analytics: {
                    title: "Plataforma de Analytics en Tiempo Real",
                    description: "Sistema de procesamiento de datos en tiempo real usando Elixir y React, capaz de manejar millones de eventos por segundo con visualización interactiva."
                }
            }
        },
        
        // Contact Section
        contact: {
            title: "Contáctame",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            info: "Información de Contacto",
            form: {
                name: "Nombre",
                email: "Email",
                subject: "Asunto",
                message: "Mensaje",
                send: "Enviar Mensaje"
            },
            details: {
                email: "Email",
                phone: "Teléfono",
                location: "Ubicación",
                locationValue: "San Cristóbal, República Dominicana",
                company: "Empresa"
            }
        },
        
        // Footer
        footer: {
            rights: "Todos los derechos reservados.",
            madeWith: "Hecho con",
            by: "por"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            greeting: "Hi, I'm",
            name: "Joel Liranzo Rosario",
            title: "CEO & Founder DeepThinking | Software Engineer 10+ years",
            description: "Software Engineer specialized in Rust, Elixir, Go, React and cloud technologies (AWS, Azure). CEO & Founder of DeepThinking, creating innovative AI solutions with scalable microservices.",
            contactBtn: "Contact Me",
            projectsBtn: "View Projects",
            stats: {
                years: "Years",
                projects: "Projects",
                technologies: "Technologies"
            }
        },
        
        // About Section
        about: {
            title: "About Me",
            subtitle: "Learn more about my background and passion for development",
            paragraph1: "I'm a Software Engineer with over 10 years of experience creating innovative technological solutions. As CEO & Founder of DeepThinking, I lead the development of AI applications and scalable microservices. Graduate in Systems Engineering from Instituto Tecnológico de Santo Domingo (INTEC).",
            paragraph2: "My expertise includes modern technologies like Rust, Elixir, Go, React and cloud platforms (AWS, Azure). I focus on microservices architectures, artificial intelligence and scalable enterprise solutions that transform ideas into successful technology products.",
            highlights: {
                education: {
                    title: "Education",
                    description: "Systems Engineering - INTEC"
                },
                leadership: {
                    title: "Leadership",
                    description: "CEO & Founder at DeepThinking"
                },
                ai: {
                    title: "Artificial Intelligence",
                    description: "AI solutions and microservices"
                }
            }
        },
        
        // Skills Section
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies and tools I master",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                database: "Database",
                cloud: "DevOps & Cloud"
            }
        },
        
        // Experience Section
        experience: {
            title: "Work Experience",
            subtitle: "My professional journey in the development world",
            jobs: {
                ceo: {
                    title: "CEO & Founder",
                    company: "DeepThinking",
                    period: "2020 - Present",
                    description: "Founded and lead DeepThinking, developing innovative AI solutions with scalable microservices. Distributed systems architecture using Rust, Elixir, Go and cloud technologies (AWS, Azure). Specialized in artificial intelligence, automation and enterprise digital transformation."
                },
                ocseni: {
                    title: "Senior Software Engineer",
                    company: "Coordinating Agency (OCSENI)",
                    period: "2018 - 2023",
                    description: "Significantly improved computational performance, reducing operation times by 700% through optimization techniques. Fixed critical processing issues, resulting in the delivery of a fully optimized and high-performing product for the national electrical system."
                },
                senior: {
                    title: "Software Engineer",
                    company: "EGEHID",
                    period: "2014 - 2018",
                    description: "Developed scalable enterprise applications and led technical teams. Worked on critical systems for the most important hydroelectric generation company in the Dominican Republic."
                },
                student: {
                    title: "Systems Engineering Student",
                    company: "Instituto Tecnológico de Santo Domingo (INTEC)",
                    period: "2010 - 2014",
                    description: "Comprehensive training in software development, databases, system architecture and agile methodologies. Participation in collaborative projects and development of solid technical skills."
                }
            }
        },
        
        // Projects Section
        projects: {
            title: "Featured Projects",
            subtitle: "Some of my most representative work",
            items: {
                deepthinking: {
                    title: "DeepThinking AI Platform",
                    description: "Enterprise artificial intelligence platform with scalable microservices. Custom AI solutions developed with Rust, Elixir and distributed architecture."
                },
                microservices: {
                    title: "Microservices Architecture",
                    description: "High-availability distributed system developed with Go and Rust, implementing Event Sourcing and CQRS patterns for complex event handling."
                },
                analytics: {
                    title: "Real-time Analytics Platform",
                    description: "Real-time data processing system using Elixir and React, capable of handling millions of events per second with interactive visualization."
                }
            }
        },
        
        // Contact Section
        contact: {
            title: "Contact Me",
            subtitle: "Have a project in mind? Let's talk!",
            info: "Contact Information",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message"
            },
            details: {
                email: "Email",
                phone: "Phone",
                location: "Location",
                locationValue: "San Cristóbal, Dominican Republic",
                company: "Company"
            }
        },
        
        // Footer
        footer: {
            rights: "All rights reserved.",
            madeWith: "Made with",
            by: "by"
        }
    }
};

// Configuración de idiomas
const i18nConfig = {
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en'],
    storageKey: 'portfolio-language'
};

// Funciones de internacionalización
class I18n {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.translations = translations;
    }
    
    detectLanguage() {
        // 1. Verificar localStorage
        const stored = localStorage.getItem(i18nConfig.storageKey);
        if (stored && i18nConfig.supportedLanguages.includes(stored)) {
            return stored;
        }
        
        // 2. Verificar parámetro URL
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && i18nConfig.supportedLanguages.includes(urlLang)) {
            return urlLang;
        }
        
        // 3. Detectar idioma del navegador
        const browserLang = navigator.language.slice(0, 2);
        if (i18nConfig.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }
        
        // 4. Usar idioma por defecto
        return i18nConfig.defaultLanguage;
    }
    
    setLanguage(lang) {
        if (i18nConfig.supportedLanguages.includes(lang)) {
            this.currentLanguage = lang;
            localStorage.setItem(i18nConfig.storageKey, lang);
            this.updatePage();
        }
    }
    
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Retornar la clave si no se encuentra la traducción
            }
        }
        
        return value || key;
    }
    
    updatePage() {
        // Actualizar elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
        
        // Actualizar placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // Actualizar alt text
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            element.alt = this.t(key);
        });
        
        // Actualizar el selector de idioma
        this.updateLanguageSelector();
        
        // Actualizar meta tags
        this.updateMetaTags();
    }
    
    updateLanguageSelector() {
        const selector = document.querySelector('#language-selector');
        if (selector) {
            selector.value = this.currentLanguage;
        }
        
        // Actualizar banderas
        document.querySelectorAll('.lang-flag').forEach(flag => {
            flag.classList.remove('active');
        });
        
        const activeFlag = document.querySelector(`.lang-flag[data-lang="${this.currentLanguage}"]`);
        if (activeFlag) {
            activeFlag.classList.add('active');
        }
    }
    
    updateMetaTags() {
        const lang = this.currentLanguage;
        document.documentElement.lang = lang;
        
        // Actualizar title
        const titles = {
            es: "Joel Liranzo Rosario - CEO & Founder DeepThinking | Software Engineer",
            en: "Joel Liranzo Rosario - CEO & Founder DeepThinking | Software Engineer"
        };
        document.title = titles[lang];
        
        // Actualizar meta description
        const descriptions = {
            es: "Joel Liranzo Rosario - Software Engineer con 10+ años de experiencia. CEO & Founder de DeepThinking. Especializado en Rust, Elixir, Go, React, AWS, Azure y soluciones AI con microservicios.",
            en: "Joel Liranzo Rosario - Software Engineer with 10+ years of experience. CEO & Founder of DeepThinking. Specialized in Rust, Elixir, Go, React, AWS, Azure and AI solutions with microservices."
        };
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = descriptions[lang];
        }
    }
}

// Instancia global
const i18n = new I18n();
