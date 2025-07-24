# 🌐 Configuración de Dominio Personalizado: joeliranzo.com

## Paso 1: Verificar Dominio en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto: `joeliranzo`
3. Ve a Hosting > "Add custom domain"
4. Ingresa: `joeliranzo.com`

## Paso 2: Configurar DNS

### En tu proveedor de DNS (donde compraste joeliranzo.com):

#### Para el dominio raíz (joeliranzo.com):
```
Tipo: A
Nombre: @ (o vacío)
Valor: 151.101.1.195

Tipo: A
Nombre: @ (o vacío)  
Valor: 151.101.65.195
```

#### Para el subdominio www:
```
Tipo: CNAME
Nombre: www
Valor: joeliranzo.web.app
```

#### Opcional - Redirección de www a dominio raíz:
```
Tipo: CNAME
Nombre: www
Valor: joeliranzo.com
```

## Paso 3: Verificar Configuración

### Comandos para verificar DNS:
```bash
# Verificar registros A
dig A joeliranzo.com

# Verificar CNAME de www
dig CNAME www.joeliranzo.com

# Verificar propagación DNS
nslookup joeliranzo.com
```

### URLs a verificar después de la propagación:
- ✅ https://joeliranzo.com
- ✅ https://www.joeliranzo.com
- ✅ https://joeliranzo.web.app (backup)

## Paso 4: SSL/TLS (Automático)

Firebase maneja automáticamente:
- ✅ Certificado SSL/TLS gratuito
- ✅ Redirección HTTP → HTTPS
- ✅ Renovación automática del certificado

## Tiempo de Propagación

- **DNS**: 0-48 horas (usualmente 2-6 horas)
- **SSL**: 24-48 horas después de DNS
- **Verificación**: Usa https://whatsmydns.net para verificar propagación global

## Troubleshooting

### Si el dominio no funciona:
1. Verifica que los registros DNS estén correctos
2. Espera la propagación completa (hasta 48h)
3. Usa modo incógnito para evitar cache
4. Verifica en Firebase Console que el dominio esté "Connected"

### Si hay errores SSL:
1. Espera 24-48 horas después de configurar DNS
2. Verifica que Firebase muestre "Certificate provisioning"
3. Si persiste, re-verifica la configuración DNS

### Comandos útiles:
```bash
# Limpiar cache DNS local (macOS/Linux)
sudo dscacheutil -flushcache

# Limpiar cache DNS (Windows)
ipconfig /flushdns

# Verificar SSL
openssl s_client -connect joeliranzo.com:443 -servername joeliranzo.com
```

## Configuración Avanzada (Opcional)

### Subdominios adicionales:
```
# Para blog.joeliranzo.com
Tipo: CNAME
Nombre: blog
Valor: joeliranzo.web.app

# Para api.joeliranzo.com  
Tipo: CNAME
Nombre: api
Valor: tu-api-backend.herokuapp.com
```

### Redirects en Firebase:
```json
{
  "hosting": {
    "redirects": [
      {
        "source": "/cv",
        "destination": "/assets/Joel-Liranzo-CV.pdf",
        "type": 301
      }
    ]
  }
}
```

## Estado del Dominio

Una vez configurado correctamente:

- 🔗 **Dominio principal**: https://joeliranzo.com
- 🔗 **Con www**: https://www.joeliranzo.com  
- 🔗 **Firebase URL**: https://joeliranzo.web.app
- 🛡️ **SSL**: Habilitado automáticamente
- 🚀 **CDN**: Firebase CDN global activo

## Contacto de Soporte

Si necesitas ayuda con la configuración:
- 📧 Firebase Support
- 📚 [Documentación oficial](https://firebase.google.com/docs/hosting/custom-domain)
- 🎯 Proveedor de tu dominio para configuración DNS
