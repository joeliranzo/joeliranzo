# 🚀 Guía de Despliegue en Firebase

## Paso 1: Preparar el entorno

### Instalar Node.js
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

### Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

## Paso 2: Configurar Firebase

### Iniciar sesión
```bash
firebase login
```

### Crear proyecto en Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Clic en "Add project"
3. Nombra tu proyecto (ej: "joeliranzo")
4. Habilita Google Analytics (opcional)
5. Selecciona o crea una cuenta de Analytics

### Inicializar proyecto local
```bash
firebase init hosting
```

Selecciona:
- ✅ Use an existing project
- Elige tu proyecto recién creado
- Public directory: `.` (punto)
- Single-page app: `y` (yes)
- Overwrite index.html: `n` (no)

## Paso 3: Desplegar

### Opción A: Script automático
```bash
chmod +x deploy.sh
./deploy.sh
```

### Opción B: Manual
```bash
# Instalar dependencias
npm install

# Construir proyecto
npm run build

# Desplegar
firebase deploy
```

## Paso 4: Configurar dominio personalizado (opcional)

1. En Firebase Console, ve a Hosting
2. Clic en "Add custom domain"
3. Ingresa tu dominio (ej: joelliranzo.dev)
4. Sigue las instrucciones para configurar DNS

### Configuración DNS para dominio personalizado
```
Tipo: A
Nombre: @
Valor: 151.101.1.195

Tipo: A  
Nombre: @
Valor: 151.101.65.195

Tipo: CNAME
Nombre: www
Valor: joeliranzo.web.app
```

## URLs del proyecto

- **Firebase URL**: https://joeliranzo.web.app
- **Custom Domain**: https://joelliranzo.dev (cuando configures)

## Comandos útiles

```bash
# Ver logs de despliegue
firebase hosting:sites:list

# Cancelar despliegue
firebase hosting:disable

# Ver uso y límites
firebase projects:list

# Desplegar solo hosting
firebase deploy --only hosting

# Vista previa local
firebase serve

# Ver versiones desplegadas
firebase hosting:releases:list
```

## Troubleshooting

### Error: "Project not found"
```bash
firebase use --add
# Selecciona tu proyecto
```

### Error: "Permission denied"
```bash
firebase login --reauth
```

### Error: "Quota exceeded"
- Verifica los límites en Firebase Console
- Considera upgrade a plan Blaze si es necesario

### Error: "Build failed"
```bash
# Limpiar cache
npm run clean
rm -rf node_modules
npm install
npm run build
```

## Automatización con GitHub Actions (opcional)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: 'joeliranzo'
```

## Monitoreo

### Analytics
- Visitas y usuarios únicos
- Páginas más vistas
- Tiempo en el sitio
- Dispositivos y ubicaciones

### Performance
- Core Web Vitals
- Tiempo de carga
- Errores de JavaScript

Accede a métricas en:
- Firebase Console > Analytics
- Firebase Console > Performance
- Google Search Console (para SEO)
