# copilot.md

**Propósito**
Guía técnica breve para refactor del proyecto Astro + Tailwind. Documento maestro que registra decisiones y cambios.

**Resumen (1 línea)**n+- App estática Astro que presenta módulos y lecciones; objetivo: centralizar contenido, extraer componentes y estandarizar imports/deps.

**Cómo ejecutar**
- Instalar: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

**Objetivos de refactor (prioridad)**
1. Centralizar contenido en `src/content` (MDX/MD) y usar `astro:content`.
2. Eliminar duplicación de `moduleData` y `lessons` embebidos.
3. Extraer componentes reutilizables en `src/components/`.
4. Estandarizar aliases de import (`@layouts`, `@components`) y corregir imports rotos.
5. Auditar deps (`react`/`@astrojs/react`) y añadir CI básica.

**Checklist rápida**
- [ ] Migrar lecciones a `src/content/lessons/*.mdx`
- [ ] Refactor páginas: `/modules`, `/modules/[module]`, `/modules/[module]/[lesson]`
- [ ] Crear `ModuleCard.astro`, `LessonCard.astro`, `Header.astro`, `Footer.astro`
- [ ] Actualizar `tsconfig.json` y `astro.config.mjs` si hace falta
- [ ] Ejecutar `npm run build` y añadir workflow CI

**Tabla: archivos a editar (prioridad, archivo, acción)**
- 1 — `src/pages/modules/index.astro` — convertir a listado que consume `getCollection('lessons')`.
- 1 — `src/pages/modules/[module]/index.astro` — filtrar colección por `module` slug; renderizar cards.
- 1 — `src/pages/modules/[module]/[lesson].astro` — render MDX lesson via `render()`.
- 2 — `src/layouts/BaseLayout.astro` — extraer header/footer y usar `@components`.
- 2 — `src/pages/index.astro`, `src/pages/dashboard.astro` — usar `ModuleCard` y aliases.
- 3 — `src/components/ModuleCard.astro`, `src/components/LessonCard.astro` — crear y sustituir markup repetido.
- 4 — `package.json`, `astro.config.mjs` — auditar y limpiar integraciones.
- 5 — `.github/workflows/ci.yml`, `README.md` — añadir CI y documentación.

**Convenciones rápidas**
- Frontmatter de lecciones: `title`, `module`, `order`, `duration`, `xp`, `description`.
- Preferir `.mdx` si se requiere interactividad; sino `.md`.
- Usar aliases definidos en `tsconfig.json` y evitar imports relativos inconsistentes.

**Verificación**
- `npm run dev` muestra `/modules` sin 404.
- `npm run build` pasa sin errores.
- Las lecciones se editan desde `src/content`.
