#!/bin/bash

# Script de configuración inicial para Joel Liranzo Portfolio
# Este script ayuda a configurar Firebase y GitHub Actions

set -e

echo "🚀 Configuración de Joel Liranzo Portfolio"
echo "==========================================="

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir en colores
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Verificar dependencias
check_dependencies() {
    print_header "📋 Verificando dependencias..."
    
    if ! command -v firebase &> /dev/null; then
        print_warning "Firebase CLI no está instalado. Instalando..."
        npm install -g firebase-tools
    else
        print_status "Firebase CLI encontrado: $(firebase --version)"
    fi
    
    if ! command -v git &> /dev/null; then
        print_error "Git no está instalado. Por favor instala Git primero."
        exit 1
    else
        print_status "Git encontrado: $(git --version)"
    fi
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js no está instalado. Por favor instala Node.js primero."
        exit 1
    else
        print_status "Node.js encontrado: $(node --version)"
    fi
}

# Configurar Firebase
setup_firebase() {
    print_header "🔥 Configurando Firebase..."
    
    # Verificar si ya está autenticado
    if ! firebase projects:list &> /dev/null; then
        print_status "Autenticando con Firebase..."
        firebase login
    else
        print_status "Ya autenticado en Firebase"
    fi
    
    # Verificar proyecto
    if firebase projects:list | grep -q "joeliranzo"; then
        print_status "Proyecto 'joeliranzo' encontrado"
        firebase use joeliranzo
    else
        print_warning "Proyecto 'joeliranzo' no encontrado"
        echo "Por favor:"
        echo "1. Ve a https://console.firebase.google.com"
        echo "2. Crea un proyecto llamado 'joeliranzo'"
        echo "3. Habilita Firebase Hosting"
        echo "4. Ejecuta este script nuevamente"
        exit 1
    fi
}

# Verificar configuración
verify_config() {
    print_header "🔍 Verificando configuración..."
    
    # Verificar .firebaserc
    if [[ -f ".firebaserc" ]]; then
        if grep -q "joeliranzo" .firebaserc; then
            print_status "Archivo .firebaserc configurado correctamente"
        else
            print_warning "Archivo .firebaserc necesita actualización"
        fi
    else
        print_warning "Archivo .firebaserc no encontrado"
    fi
    
    # Verificar firebase.json
    if [[ -f "firebase.json" ]]; then
        print_status "Archivo firebase.json encontrado"
    else
        print_warning "Archivo firebase.json no encontrado"
    fi
    
    # Verificar workflows
    if [[ -f ".github/workflows/firebase-hosting-merge.yml" ]]; then
        print_status "Workflow de merge encontrado"
    else
        print_warning "Workflow de merge no encontrado"
    fi
    
    if [[ -f ".github/workflows/firebase-hosting-pull-request.yml" ]]; then
        print_status "Workflow de PR encontrado"
    else
        print_warning "Workflow de PR no encontrado"
    fi
}

# Probar despliegue local
test_local_deploy() {
    print_header "🧪 Probando despliegue local..."
    
    print_status "Iniciando servidor local..."
    echo "Presiona Ctrl+C para detener el servidor cuando hayas verificado que funciona"
    firebase serve --port=5000 &
    SERVER_PID=$!
    
    sleep 3
    
    if ps -p $SERVER_PID > /dev/null; then
        print_status "Servidor local funcionando en http://localhost:5000"
        print_status "Verifica que el sitio carga correctamente, luego presiona Ctrl+C"
        wait $SERVER_PID
    else
        print_error "Error al iniciar servidor local"
        exit 1
    fi
}

# Información de next steps
show_next_steps() {
    print_header "📝 Próximos pasos:"
    echo ""
    echo "1. 🔐 Configurar GitHub Secrets:"
    echo "   - Ve a tu repositorio en GitHub"
    echo "   - Settings > Secrets and variables > Actions"
    echo "   - Añade: FIREBASE_SERVICE_ACCOUNT_JOELIRANZO"
    echo ""
    echo "2. 🌐 Configurar dominio personalizado:"
    echo "   - Ve a Firebase Console > Hosting"
    echo "   - Añade dominio: joeliranzo.com"
    echo "   - Configura DNS según las instrucciones"
    echo ""
    echo "3. 🚀 Probar despliegue:"
    echo "   git add ."
    echo "   git commit -m \"Initial setup\""
    echo "   git push origin master"
    echo ""
    echo "4. 📚 Leer documentación completa:"
    echo "   - GITHUB-ACTIONS-SETUP.md"
    echo "   - DOMAIN-SETUP.md"
    echo ""
    print_status "¡Configuración básica completada!"
}

# Función principal
main() {
    echo ""
    check_dependencies
    echo ""
    setup_firebase
    echo ""
    verify_config
    echo ""
    
    read -p "¿Quieres probar el despliegue local? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        test_local_deploy
    fi
    
    echo ""
    show_next_steps
}

# Ejecutar script principal
main "$@"
