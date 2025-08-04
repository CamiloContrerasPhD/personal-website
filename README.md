# Camilo Rojas Contreras - Sitio Web Personal

Sitio web profesional para el Dr. Camilo Rojas Contreras, PhD en Marketing y Profesor Asistente en la Universidad de los Andes.

## 🎯 Descripción

Este sitio web presenta el perfil profesional completo del Dr. Camilo Rojas Contreras, especialista en:
- Inteligencia Artificial en Marketing
- Comportamiento del Consumidor
- Estudios Interculturales
- Business Intelligence y Analytics

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Navegación Suave**: Scroll suave entre secciones con navegación fija
- **Animaciones**: Transiciones y animaciones elegantes con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica para mejor posicionamiento
- **Accesibilidad**: Cumple con estándares WCAG 2.1
- **Performance**: Imágenes optimizadas y código minificado

## 📋 Secciones

1. **Inicio**: Presentación principal con hero section
2. **Sobre Mí**: Biografía profesional y formación académica
3. **Investigación**: Áreas de especialización y proyectos
4. **Publicaciones**: Lista completa de artículos y conferencias
5. **Docencia**: Experiencia educativa y metodologías
6. **Experiencia**: Timeline de trayectoria profesional
7. **Contacto**: Información de contacto y áreas de colaboración

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework de JavaScript
- **Vite**: Build tool y servidor de desarrollo
- **Tailwind CSS**: Framework de CSS
- **Framer Motion**: Librería de animaciones
- **Lucide React**: Iconos
- **shadcn/ui**: Componentes de UI

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/[usuario]/camilo-rojas-website.git

# Instalar dependencias
cd camilo-rojas-website
pnpm install

# Ejecutar en modo desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Vista previa de la build
pnpm run preview
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions

1. Crear un repositorio en GitHub
2. Subir el código al repositorio
3. Ir a Settings > Pages
4. Seleccionar "GitHub Actions" como fuente
5. El sitio se desplegará automáticamente en cada push

### Opción 2: Despliegue Manual

1. Ejecutar `pnpm run build`
2. Subir el contenido de la carpeta `dist/` a la rama `gh-pages`
3. Configurar GitHub Pages para usar la rama `gh-pages`

## 📁 Estructura del Proyecto

```
camilo-website/
├── public/                 # Archivos públicos
├── src/
│   ├── assets/            # Imágenes y recursos
│   ├── components/        # Componentes React
│   │   └── ui/           # Componentes de UI
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principales
│   └── main.jsx          # Punto de entrada
├── dist/                  # Build de producción
├── package.json          # Dependencias y scripts
└── README.md            # Este archivo
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `src/App.css`:
- Azul académico: `#1e3a8a`
- Gris oscuro: `#374151`
- Acento dorado: `#f59e0b`

### Contenido
El contenido se encuentra en `src/App.jsx` en las siguientes variables:
- `researchAreas`: Áreas de investigación
- `publications`: Lista de publicaciones
- `experience`: Experiencia profesional
- `education`: Formación académica

### Imágenes
Las imágenes se encuentran en `src/assets/` y se importan en `App.jsx`

## 📊 SEO y Analytics

- Meta tags configurados para SEO
- Schema markup para perfiles académicos
- Preparado para Google Analytics
- Sitemap automático

## 🔧 Configuración para GitHub Pages

El proyecto incluye configuración automática para GitHub Pages:
- Base URL configurada para GitHub Pages
- Rutas relativas para recursos
- Optimización de imágenes
- Minificación de código

## 📞 Contacto

**Dr. Camilo Rojas Contreras**
- Email: caa.rojasc@uniandes.edu.co
- ORCID: 0000-0002-2729-1560
- Institución: Universidad de los Andes, Bogotá, Colombia

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Universidad de los Andes
- Université Grenoble Alpes
- Colaboradores internacionales en investigación

---

**Desarrollado con ❤️ para GitHub Pages**

