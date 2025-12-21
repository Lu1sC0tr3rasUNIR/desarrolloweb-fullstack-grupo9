# Proyecto React + Vite + React Router

Este proyecto ha sido migrado de Next.js a React con Vite y React Router.

## 🚀 Tecnologías

- **React 18.3** - Biblioteca de interfaz de usuario
- **Vite 6.0** - Build tool y servidor de desarrollo ultra rápido
- **React Router 7.1** - Enrutamiento del lado del cliente
- **TypeScript 5.6** - Tipado estático
- **SASS** - Preprocesador CSS

## 📁 Estructura del Proyecto

```
├── index.html           # Punto de entrada HTML
├── src/
│   ├── main.tsx        # Punto de entrada de la aplicación
│   ├── App.tsx         # Componente principal con rutas
│   ├── pages/          # Páginas/Vistas
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Cart.tsx
│   │   ├── Pay.tsx
│   │   └── Components.tsx
│   ├── components/     # Componentes reutilizables
│   │   ├── Layout.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── header.tsx
│   │   └── ...
│   ├── context/        # Contextos de React
│   ├── hooks/          # Custom hooks
│   ├── interfaces/     # Interfaces TypeScript
│   ├── lib/           # Funciones auxiliares
│   ├── providers/     # Providers de contexto
│   ├── styles/        # Estilos SCSS
│   └── vite-env.d.ts  # Tipos de Vite
├── vite.config.ts     # Configuración de Vite
├── tsconfig.json      # Configuración de TypeScript
└── package.json
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
```

## 🎮 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🔄 Cambios de Migración

### De Next.js a Vite + React Router

1. **Rutas**: 
   - ❌ Antes: Carpeta `app/` con sistema de archivos de Next.js
   - ✅ Ahora: React Router en `App.tsx` con rutas declarativas

2. **Servidor de desarrollo**:
   - ❌ Antes: `next dev` (puerto 3000)
   - ✅ Ahora: `vite` (puerto 5173)

3. **Directivas de cliente**:
   - ❌ Antes: `"use client"` requerido para interactividad
   - ✅ Ahora: No necesario, todos los componentes son del cliente por defecto

4. **Navegación**:
   - ❌ Antes: `<Link>` de `next/link` y `useRouter` de `next/navigation`
   - ✅ Ahora: `<Link>` y `useNavigate` de `react-router-dom`

5. **Alias de rutas**:
   - Mantenido: `@/*` apunta a `./src/*`

## 📦 Dependencias Principales

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "sass": "^1.93.3"
}
```

## 🔧 Configuración

### Vite Config (`vite.config.ts`)

- Plugin de React configurado
- Alias `@` apunta a `./src`
- Soporte para SASS con API moderna

### TypeScript Config (`tsconfig.json`)

- Target: ES2020
- JSX: react-jsx
- Strict mode habilitado
- Path aliases configurados

## 🌐 Rutas Disponibles

- `/` - Página principal (Home)
- `/login` - Página de inicio de sesión
- `/cart` - Carrito de compras
- `/pay` - Página de pago
- `/components` - Galería de componentes

## 📝 Notas

- El proyecto usa SASS para los estilos
- Todos los componentes están tipados con TypeScript
- El contexto de autenticación está configurado pero actualmente `isAuthenticated` está en `true` por defecto
- Los estilos globales se importan en `main.tsx`

## 🐛 Desarrollo

Para abrir el proyecto en el navegador automáticamente:

```bash
npm run dev
# Luego presiona 'o + enter' en la terminal
```

## 📄 Licencia

Este es un proyecto privado.

