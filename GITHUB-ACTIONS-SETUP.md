# Configuración de GitHub Actions para Despliegue Automático

## 1. Configuración del Proyecto Firebase

### Crear proyecto en Firebase Console
1. Ve a https://console.firebase.google.com
2. Crea un nuevo proyecto llamado `joeliranzo`
3. Habilita Firebase Hosting
4. Configura el dominio personalizado `joeliranzo.com`

### Configurar Firebase CLI local
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Autenticarse
firebase login

# Verificar proyecto
firebase projects:list

# Seleccionar proyecto
firebase use joeliranzo
```

## 2. Configuración de GitHub Secrets

### Generar Service Account Key
1. Ve a https://console.cloud.google.com
2. Selecciona el proyecto `joeliranzo`
3. Ve a IAM & Admin > Service Accounts
4. Crea una nueva cuenta de servicio:
   - Nombre: `github-actions-deploy`
   - Rol: `Firebase Admin` y `Cloud Storage Admin`
5. Genera una clave JSON privada
6. Copia todo el contenido del archivo JSON

### Configurar Secrets en GitHub
1. Ve a tu repositorio en GitHub
2. Settings > Secrets and variables > Actions
3. Añade estos secrets:

#### FIREBASE_SERVICE_ACCOUNT_JOELIRANZO
```json
{
  "type": "service_account",
  "project_id": "joeliranzo",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "github-actions-deploy@joeliranzo.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-deploy%40joeliranzo.iam.gserviceaccount.com"
}
```

#### GITHUB_TOKEN
- Este secret se crea automáticamente por GitHub
- No necesitas configurarlo manualmente

## 3. Verificación de Workflows

### Workflow de Despliegue (merge a master)
- **Archivo**: `.github/workflows/firebase-hosting-merge.yml`
- **Trigger**: Push a branch `master`
- **Función**: Despliega a producción en Firebase Hosting

### Workflow de Preview (Pull Requests)
- **Archivo**: `.github/workflows/firebase-hosting-pull-request.yml`
- **Trigger**: Creación/actualización de PR
- **Función**: Crea preview temporal para revisión

## 4. Comandos de Verificación

### Verificar configuración local
```bash
# Verificar proyecto actual
firebase projects:list
firebase use --add

# Probar despliegue local
firebase serve
firebase deploy
```

### Verificar workflows
```bash
# En tu repositorio local
git add .
git commit -m "Update workflows for joeliranzo"
git push origin master
```

## 5. Configuración del Dominio Personalizado

### En Firebase Console
1. Ve a Hosting en Firebase Console
2. Añade dominio personalizado: `joeliranzo.com`
3. Sigue las instrucciones para configurar DNS
4. Añade también `www.joeliranzo.com`

### Configuración DNS (en tu proveedor)
```
Tipo: A
Nombre: @
Valor: 151.101.1.195
TTL: 3600

Tipo: A  
Nombre: @
Valor: 151.101.65.195
TTL: 3600

Tipo: CNAME
Nombre: www
Valor: joeliranzo.com
TTL: 3600
```

## 6. Monitoreo y Troubleshooting

### Verificar despliegue
- Actions tab en GitHub para ver logs
- Firebase Console > Hosting para ver deploys
- Logs en Google Cloud Console

### URLs de verificación
- **Producción**: https://joeliranzo.com
- **Firebase**: https://joeliranzo.web.app
- **Preview**: URLs temporales en PRs

## 7. Seguridad

### Permisos mínimos para Service Account
- `Firebase Admin SDK Administrator Service Agent`
- `Firebase Hosting Admin`
- `Cloud Storage Admin` (si usas assets)

### Variables de entorno seguras
- Todas las credenciales en GitHub Secrets
- Nunca hardcodear APIs keys
- Rotación periódica de service accounts

## 8. Automatización Completa

### Flujo de trabajo típico
1. **Desarrollo**: Crear feature branch
2. **Pull Request**: Se crea preview automático
3. **Review**: Revisar en URL temporal
4. **Merge**: Despliegue automático a producción
5. **Verify**: Verificar en joeliranzo.com

### Notificaciones
- GitHub Actions envía notificaciones por email
- Firebase Console muestra historial de deploys
- Slack/Discord integration opcional

## 9. Backup y Rollback

### Rollback rápido
```bash
# Ver versiones anteriores
firebase hosting:releases:list

# Rollback a versión anterior
firebase hosting:releases:rollback <RELEASE_ID>
```

### Backup automático
- GitHub mantiene historial completo
- Firebase mantiene versiones de hosting
- Configurar backup de configuración
