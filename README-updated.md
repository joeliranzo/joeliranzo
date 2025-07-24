# Joel Liranzo Rosario - Portfolio Personal

🌐 **Live Site**: [joeliranzo.com](https://joeliranzo.com)  
📱 **Responsive**: Optimizado para todos los dispositivos  
🌍 **Multiidioma**: Español e Inglés  
🚀 **Despliegue**: Automático con GitHub Actions + Firebase

## 🚀 Inicio Rápido

### Configuración Automática
```bash
# Clonar repositorio
git clone <repository-url>
cd joeliranzo

# Ejecutar configuración automática
./setup.sh
```

### Configuración Manual
```bash
# Instalar dependencias
npm install -g firebase-tools

# Autenticarse en Firebase
firebase login

# Seleccionar proyecto
firebase use joeliranzo

# Servir localmente
firebase serve

# Desplegar
firebase deploy
```

## 📁 Estructura del Proyecto

```
joeliranzo/
├── index.html              # Página principal
├── styles.css              # Estilos principales
├── script.js               # JavaScript principal
├── js/
│   └── i18n.js             # Sistema de internacionalización
├── assets/
│   ├── img/
│   │   └── profile-photo.jpg # Foto de perfil
│   └── README.md           # Instrucciones de assets
├── .github/
│   └── workflows/          # GitHub Actions
├── firebase.json           # Configuración Firebase
├── .firebaserc            # Proyecto Firebase
├── sitemap.xml            # SEO sitemap
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots
└── docs/                  # Documentación
    ├── GITHUB-ACTIONS-SETUP.md
    ├── DOMAIN-SETUP.md
    ├── DEPLOY.md
    └── RESUMEN-FINAL.md
```

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Internacionalización**: Sistema propio de i18n
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions
- **DNS**: Dominio personalizado (joeliranzo.com)
- **SEO**: Open Graph, Twitter Cards, Schema.org

## 🌟 Características

### 🎨 Diseño
- ✅ Diseño moderno y responsivo
- ✅ Animaciones CSS suaves
- ✅ Tema dark/light automático
- ✅ Optimizado para móviles

### 🌍 Internacionalización
- ✅ Español e Inglés
- ✅ Detección automática de idioma
- ✅ URLs SEO-friendly con hreflang
- ✅ Contenido localizado completo

### 🚀 Performance
- ✅ Carga rápida (<2s)
- ✅ Optimización de imágenes
- ✅ CSS y JS minificados
- ✅ PWA ready

### 📱 SEO
- ✅ Meta tags optimizados
- ✅ Open Graph para redes sociales
- ✅ Schema.org structured data
- ✅ Sitemap XML multiidioma

## 🔧 Configuración de Desarrollo

### Variables de Entorno
No se requieren variables de entorno para desarrollo local.

### Scripts Disponibles
```bash
npm run start        # Servidor de desarrollo
npm run build        # Build para producción
npm run deploy       # Desplegar a Firebase
npm run serve        # Servir build local
npm run dev          # Desarrollo con live reload
```

## 🚀 Despliegue

### Despliegue Automático
El sitio se despliega automáticamente cuando:
- ✅ Push a branch `master` → Producción
- ✅ Pull Request → Preview temporal

### Despliegue Manual
```bash
firebase deploy
```

### URLs de Despliegue
- **Producción**: https://joeliranzo.com
- **Firebase**: https://joeliranzo.web.app
- **Preview**: URLs temporales en PRs

## 📋 Configuración Requerida

### 1. Firebase Project
- Proyecto: `joeliranzo`
- Hosting habilitado
- Dominio personalizado configurado

### 2. GitHub Secrets
```
FIREBASE_SERVICE_ACCOUNT_JOELIRANZO
GITHUB_TOKEN (automático)
```

### 3. DNS Configuration
```
A Record: @ → 151.101.1.195
A Record: @ → 151.101.65.195
CNAME: www → joeliranzo.com
```

## 📚 Documentación

- [🔧 GitHub Actions Setup](GITHUB-ACTIONS-SETUP.md)
- [🌐 Domain Setup](DOMAIN-SETUP.md)
- [🚀 Deploy Guide](DEPLOY.md)
- [📝 Final Summary](RESUMEN-FINAL.md)

## 👨‍💻 Información Personal

**Joel Liranzo Rosario**
- 🏢 CEO & Founder at DeepThinking
- 💼 Senior Software Engineer (ex-OCSENI, ex-EGEHID)
- 🎓 INTEC Graduate (Computer Science)
- 📍 Santo Domingo, Dominican Republic
- 📧 joeliranzo@outlook.com

### 🛠️ Tech Stack
- **Backend**: .NET, Python, Node.js
- **Frontend**: React, JavaScript, HTML/CSS
- **Cloud**: Azure, AWS
- **Database**: SQL Server, PostgreSQL, MongoDB
- **DevOps**: Docker, GitHub Actions, CI/CD

## 🤝 Contribución

Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una feature branch
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---

⭐ **Desarrollado con ❤️ por Joel Liranzo Rosario**
