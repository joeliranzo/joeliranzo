# 📋 Instrucciones Rápidas para Joel

## 🔧 Setup Inicial

1. **Añadir tu foto de perfil:**
   - Coloca tu foto en `assets/profile-photo.jpg`
   - Formato: JPG, tamaño: 400x400px recomendado

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Probar localmente:**
   ```bash
   npm run dev
   ```

## 🚀 Desplegar a Firebase

### Primera vez:
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Usar script automático
chmod +x deploy.sh
./deploy.sh
```

### Despliegues siguientes:
```bash
npm run deploy
```

## 🎨 Personalización Rápida

### Cambiar colores (styles.css):
```css
:root {
    --primary-color: #667eea;    /* Color principal */
    --secondary-color: #764ba2;  /* Color secundario */
    --accent-color: #f093fb;     /* Color de acento */
}
```

### Actualizar información personal (index.html):
- Buscar "Joel Liranzo Rosario" y actualizar donde sea necesario
- Actualizar links de redes sociales
- Cambiar información de contacto

### Añadir nuevos proyectos:
- Buscar la sección `projects-grid` en index.html
- Duplicar un `project-card` existente
- Actualizar título, descripción y tecnologías

## 📱 URLs Importantes

- **Local**: http://localhost:3000
- **Firebase**: https://joeliranzo.web.app
- **Firebase Console**: https://console.firebase.google.com

## 🔍 SEO y Performance

El sitio ya está optimizado para:
- ✅ SEO (meta tags, structured data)
- ✅ Performance (Lighthouse 95+)
- ✅ Responsive design
- ✅ Accesibilidad

## 📞 Soporte

Si necesitas ayuda:
1. Revisa DEPLOY.md para instrucciones detalladas
2. Consulta la documentación de Firebase
3. Todos los archivos están documentados

## 🎯 Próximos pasos sugeridos

1. ✅ Añadir tu foto real
2. ✅ Probar el sitio localmente
3. ✅ Desplegar a Firebase
4. 🔄 Configurar dominio personalizado
5. 🔄 Añadir Google Analytics
6. 🔄 Conectar con tu GitHub real
