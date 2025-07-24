#!/bin/bash

# Script de despliegue para el portfolio de Joel Liranzo
# Ejecutar con: ./deploy.sh

echo "🚀 Iniciando proceso de despliegue..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo primero."
    exit 1
fi

# Verificar si Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "📦 Firebase CLI no encontrado. Instalando..."
    npm install -g firebase-tools
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Construir el proyecto
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar si el usuario está logueado en Firebase
echo "🔐 Verificando autenticación de Firebase..."
firebase projects:list > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "🔐 Necesitas iniciar sesión en Firebase..."
    firebase login
fi

# Desplegar a Firebase
echo "🚀 Desplegando a Firebase..."
firebase deploy

# Verificar si el despliegue fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue exitoso!"
    echo "🌐 Tu portfolio está disponible en:"
    echo "   📍 Firebase: https://joeliranzo.web.app"
    echo "   📍 Dominio personalizado: https://joeliranzo.com"
    echo ""
    echo "🔗 URLs útiles:"
    echo "   📊 Firebase Console: https://console.firebase.google.com"
    echo "   📈 Analytics: https://console.firebase.google.com/project/joeliranzo/analytics"
else
    echo "❌ Error en el despliegue. Revisa los logs arriba."
    exit 1
fi

echo "🎉 ¡Proceso completado!"
