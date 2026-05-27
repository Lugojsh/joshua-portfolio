# Blueprint: Portfolio Personal — Joshua Lugo Gutiérrez
**Versión:** 2.0  
**Archetype:** marketing-site / portfolio  
**Modo:** Single Page, Astro 5, contenido en JSON (sin CMS externo)  
**Generado por:** The Architect

---

## 1. Resumen del Proyecto

Portfolio personal de **Joshua Lugo Gutiérrez** — diseñador digital, fotógrafo, cineasta, motion designer y especialista en branding. 5+ años de experiencia. Egresado Universidad Iberoamericana León.

**Referencia visual principal:** Studio Namma  
**Estilo:** Minimalista editorial. Tipografía masiva. Monocromático con secciones dark/light. Grain sutil. Fotos que siguen el cursor en el hero.

**Principio de actualización:** Todo el contenido vive en archivos JSON en el repositorio de GitHub. El dueño puede agregar proyectos, fotos y videos desde la interfaz web de GitHub sin instalar nada. Vercel redeploya automático en ~30 segundos.

---

## 2. Información del Propietario

```
Nombre:    Joshua Lugo Gutiérrez
Email:     joshualugogutierrez@gmail.com
Teléfono:  55-8422-7474
Ciudad:    León, Gto. / CDMX, México
```

**Disciplinas:** Diseño Digital · Fotografía · Edición de Video · Cortometraje · Branding · Motion Graphics

**Formación:** Universidad Iberoamericana León  
**Experiencia actual:** Talentist — diseño, redes sociales, impresión  
**Experiencia previa:** Emmet (hasta 2026)

---

## 3. Arquitectura del Sitio

### Tipo
Single Page — todo en `index.astro`. Sin rutas secundarias en v1.

### Secciones (en orden de scroll)

| # | ID | Nombre | Fondo | Texto |
|---|---|---|---|---|
| 1 | `#nav` | Navegación | Transparente → blur | `#111111` / `#EDEDEA` en dark |
| 2 | `#hero` | Hero | `#EDEDEA` | `#111111` |
| 3 | `#about` | About | `#EDEDEA` | `#111111` |
| 4 | `#work` | Trabajo | `#EDEDEA` | `#111111` |
| 5 | `#branding` | Branding | `#0D0D0D` | `#EDEDEA` |
| 6 | `#showreel` | Showreel | `#0D0D0D` | `#EDEDEA` |
| 7 | `#contact` | Contacto | `#0D0D0D` | `#EDEDEA` |
| 8 | `#footer` | Footer | `#0D0D0D` | `#EDEDEA` |

---

## 4. Stack Tecnológico

| Capa | Tecnología | Por qué |
|---|---|---|
| Framework | **Astro 5** | Estático, carga instantánea, ideal para portfolios |
| Lenguaje | TypeScript strict | Sin `any`, siempre |
| Styling | Tailwind CSS v4 | Utility-first |
| Animaciones | **GSAP + ScrollTrigger** | Estándar industria para este nivel |
| Smooth scroll | **Lenis** | Scroll cinematográfico, integra con GSAP |
| Cursor trail | GSAP (custom) | Fotos que siguen el cursor — solo en hero |
| Video | Vimeo embed + HTML5 | Showreel en Vimeo, loops nativos en branding |
| Formulario | **Resend** | Email directo, sin backend complejo |
| Validación | Zod | Schema del form |
| Contenido | **JSON files** | Sin CMS externo — actualizable desde GitHub web |
| Deploy | **Vercel** | Auto-deploy en cada push, URL gratis `*.vercel.app` |
| Package manager | pnpm | — |

---

## 5. Sistema de Diseño

### Colores

```css
--color-bg:           #EDEDEA;   /* Off-white cálido — secciones light */
--color-text:         #111111;   /* Texto en secciones light */
--color-text-muted:   #888888;   /* Meta, fechas, labels */
--color-border:       #D4D4D0;   /* Líneas divisorias */
--color-bg-dark:      #0D0D0D;   /* Secciones oscuras */
--color-text-dark:    #EDEDEA;   /* Texto en dark — mismo que bg light */
--color-text-dark-muted: #555555;/* Meta en dark */
```

### Tipografía

```css
--font-display: 'Space Grotesk', sans-serif;   /* Hero, títulos, proyectos */
--font-body:    'Inter', sans-serif;            /* Body, nav, meta */

--text-hero:    clamp(5rem, 12vw, 14rem);       /* Nombre en hero */
--text-section: clamp(3rem, 7vw, 8rem);         /* Títulos de sección */
--text-project: clamp(1.8rem, 3.5vw, 4rem);    /* Items de trabajo */
--text-body:    1rem;
--text-meta:    0.75rem;

--weight-black:  900;
--weight-bold:   700;
--weight-regular:400;
--weight-light:  300;

--tracking-wide: 0.15em;
--tracking-tight:-0.02em;
```

### Grain (solo hero)

```css
.hero-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence */
  opacity: 0.035;
  pointer-events: none;
  z-index: 1;
}
```

---

## 6. Sistema de Contenido (JSON)

### Estructura de archivos de contenido

```
public/
├── images/
│   ├── hero/              ← Fotos del cursor trail (8–12 JPGs)
│   │   ├── foto-01.jpg
│   │   ├── foto-02.jpg
│   │   └── ...
│   └── projects/          ← Thumbnails de proyectos (1 por proyecto)
│       ├── proyecto-01.jpg
│       └── ...
├── videos/
│   └── branding/          ← MP4 cortos de branding (loop, max 5MB c/u)
│       ├── branding-01.mp4
│       └── ...
└── cv/
    └── JoshuaLugo_CV.pdf

src/
└── data/
    ├── projects.json      ← Lista de proyectos (trabajo, foto, video, etc.)
    ├── branding.json      ← Proyectos de branding con video
    └── content.json       ← Bio, disciplinas, stats
```

---

### `src/data/projects.json`

```json
[
  {
    "id": "proyecto-01",
    "title": "NOMBRE DEL PROYECTO",
    "category": "Fotografía",
    "year": 2025,
    "client": "Cliente",
    "thumbnail": "proyecto-01.jpg",
    "description": "Descripción breve del proyecto."
  },
  {
    "id": "proyecto-02",
    "title": "NOMBRE DEL PROYECTO",
    "category": "Motion",
    "year": 2024,
    "client": "Cliente",
    "thumbnail": "proyecto-02.jpg"
  }
]
```

**Para agregar un proyecto:** agregar un objeto al array. Para quitar: borrar el objeto.

---

### `src/data/branding.json`

```json
[
  {
    "id": "branding-01",
    "title": "NOMBRE DE MARCA",
    "year": 2025,
    "description": "Identidad visual para...",
    "thumbnail": "branding-01.jpg",
    "video": "branding-01.mp4"
  },
  {
    "id": "branding-02",
    "title": "NOMBRE DE MARCA",
    "year": 2024,
    "description": "Identidad visual para...",
    "thumbnail": "branding-02.jpg",
    "video": "branding-02.mp4"
  },
  {
    "id": "branding-03",
    "title": "NOMBRE DE MARCA",
    "year": 2024,
    "description": "Identidad visual para...",
    "thumbnail": "branding-03.jpg",
    "video": "branding-03.mp4"
  }
]
```

---

### `src/data/content.json`

```json
{
  "name": "Joshua Lugo",
  "tagline": "Diseñador · Fotógrafo · Cineasta",
  "bio": "Soy Joshua Lugo, diseñador digital y cineasta con más de 5 años creando desde León, México. Me muevo entre el diseño, la fotografía y el video con un ojo puesto en los detalles y el otro en el impacto.",
  "location": "León, Gto. / CDMX",
  "email": "joshualugogutierrez@gmail.com",
  "stats": {
    "years": 5,
    "disciplines": 6
  },
  "disciplines": [
    "Diseño Digital",
    "Fotografía",
    "Edición de Video",
    "Cortometraje",
    "Branding",
    "Motion Graphics"
  ],
  "social": {
    "instagram": "",
    "vimeo": "",
    "linkedin": ""
  },
  "showreel": {
    "vimeoId": "",
    "poster": "showreel-poster.jpg"
  }
}
```

---

## 7. Estructura de Archivos del Proyecto

```
joshua-portfolio/
├── public/
│   ├── images/
│   │   ├── hero/            # Fotos cursor trail (8–12 JPGs)
│   │   └── projects/        # Thumbnails proyectos
│   ├── videos/
│   │   └── branding/        # MP4 loops de branding
│   └── cv/
│       └── JoshuaLugo_CV.pdf
│
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro         # Tipografía + cursor trail
│   │   ├── CursorTrail.astro  # Componente fotos cursor (solo hero)
│   │   ├── About.astro
│   │   ├── Work.astro         # Lista proyectos con hover preview
│   │   ├── ProjectItem.astro
│   │   ├── Branding.astro     # Grid 3 brandings con video
│   │   ├── BrandingCard.astro # Card individual con video autoplay hover
│   │   ├── Showreel.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       └── Grain.astro
│   │
│   ├── layouts/
│   │   └── Base.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── contact.ts
│   │
│   ├── scripts/
│   │   ├── animations.ts
│   │   ├── lenis.ts
│   │   ├── cursor-trail.ts   # Lógica fotos cursor
│   │   └── contact.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── data/                 # ← CONTENIDO EDITABLE
│       ├── projects.json
│       ├── branding.json
│       └── content.json
│
├── astro.config.mjs
├── tsconfig.json
├── .env
├── .env.example
└── CLAUDE.md
```

---

## 8. Cursor Trail — Especificación

Solo activo dentro de `#hero`. Se desactiva al salir del hero.

```typescript
// src/scripts/cursor-trail.ts
// Lee las imágenes del hero desde el DOM (data attributes)
// Al mover el mouse: posiciona imagen en coords del cursor
// Cicla entre las imágenes disponibles
// Cada imagen: aparece con GSAP (scale 0.8→1, opacity 0→1)
// y desaparece después de ~800ms (opacity 1→0)
// Max 6 imágenes visibles simultáneamente
// En mobile: efecto desactivado (no hay cursor)

interface TrailImage {
  el: HTMLElement
  isActive: boolean
}

// Implementar con:
// - Array de elementos img pre-renderizados (ocultos por defecto)
// - position: fixed, pointer-events: none
// - z-index: 10 (sobre el texto del hero)
// - Tamaño: entre 200px y 320px, variado por índice
// - Rotación: leve aleatoria (-8deg a +8deg)
```

**Imágenes del hero:** Astro lee automáticamente todos los archivos de `/public/images/hero/` al buildear. Para agregar fotos: subir JPG a esa carpeta en GitHub → rebuild automático.

---

## 9. Secciones — Especificación Detallada

### Nav
```
[JOSHUA LUGO]          [DARK MODE]     [MENU]    [HABLEMOS →]
```
- Fixed top, `z-index: 50`
- Fondo: transparent → `rgba(237,237,234,0.92)` + `backdrop-blur` al hacer scroll
- En secciones dark: texto cambia a `#EDEDEA`
- MENU: overlay fullscreen con links anchor
- Toggle dark mode: cambia clase en `<html>` (opcional v2)

### Hero
- Fondo: `#EDEDEA` (igual que Studio Namma — SIN foto de fondo)
- Nombre "JOSHUA LUGO" en tipografía masiva (`--text-hero`)
- Tagline debajo: `"Diseñador · Fotógrafo · Cineasta"` en meta uppercase
- Bottom-left: frase corta (ej: `"DISEÑO, IMAGEN & MOVIMIENTO."`)
- Bottom-right: ciudad + reloj en tiempo real
- Grain overlay sutil
- Cursor trail activo solo en esta sección
- Cursor custom: punto pequeño `#111111` reemplaza cursor nativo

### About
- Dos columnas: texto izquierda, stats + disciplinas derecha
- Bio de Joshua
- Stats animados con GSAP countUp: `5+` años · `6` disciplinas
- Lista de disciplinas con línea separadora entre cada una
- Botón: `↓ Descargar CV` → `/cv/JoshuaLugo_CV.pdf` con atributo `download`

### Work (Proyectos)
- Lista vertical: `[01]` `[TÍTULO]` `[CATEGORÍA]` `[AÑO]`
- Preview thumbnail aparece a la derecha al hover (GSAP)
- Datos desde `projects.json`
- Stagger de entrada con ScrollTrigger

### Branding
- Fondo: `#0D0D0D`, texto: `#EDEDEA`
- Título sección: `"BRANDING"` en `--text-section`
- Grid: 3 cards (o columnas según cantidad en `branding.json`)
- Cada card: thumbnail + título + año
- Al hover: video MP4 hace autoplay en loop (muted, sin controles)
- Al salir hover: pausa y vuelve al thumbnail
- Datos desde `branding.json` — agregar/quitar cards editando el JSON

### Showreel
- Fondo: `#0D0D0D`
- Label: `"SHOWREEL"` en meta
- Vimeo embed full-width, `aspect-ratio: 16/9`
- Play button custom centrado
- Poster frame mientras no reproduce
- ID del video desde `content.json → showreel.vimeoId`

### Contacto
- Fondo: `#0D0D0D`, texto: `#EDEDEA`
- Tipografía masiva: `"HABLEMOS"` 
- Subtexto: `"¿Tienes un proyecto en mente? Escríbeme."`
- Form: Nombre · Email · Mensaje · `[Enviar →]`
- Inputs: solo línea inferior, fondo transparente, texto `#EDEDEA`
- Submit → API endpoint → Resend → Gmail de Joshua

### Footer
- Fondo: `#0D0D0D`, texto: `#EDEDEA`
- Izquierda: `JOSHUA LUGO © 2026`
- Centro: Instagram · Vimeo · LinkedIn
- Derecha: `↓ CV` · email

---

## 10. Animaciones GSAP

### Config Lenis + GSAP

```typescript
// src/scripts/lenis.ts
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)

export default lenis
```

### Timelines

**Hero (on load):**
```typescript
gsap.timeline()
  .from('.hero-name .char', {
    y: 120, opacity: 0, stagger: 0.04, duration: 0.9, ease: 'power3.out'
  })
  .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero-meta', { opacity: 0, duration: 0.5 }, '-=0.2')
```

**Proyectos (ScrollTrigger):**
```typescript
gsap.from('.project-item', {
  scrollTrigger: { trigger: '.work-list', start: 'top 80%' },
  y: 50, opacity: 0, stagger: 0.07, duration: 0.7, ease: 'power2.out'
})
```

**Branding cards:**
```typescript
gsap.from('.branding-card', {
  scrollTrigger: { trigger: '.branding-grid', start: 'top 75%' },
  y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out'
})
```

**Hover preview proyectos:**
```typescript
// mouseenter → scale: 0.92→1, opacity: 0→1, duration: 0.35
// mouseleave → opacity: 1→0, duration: 0.25
```

---

## 11. API de Contacto

```typescript
// src/pages/api/contact.ts
import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const result = schema.safeParse(body)

  if (!result.success) {
    return new Response(JSON.stringify({ error: 'Datos inválidos' }), { status: 400 })
  }

  const { name, email, message } = result.data

  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',  // dominio sandbox hasta tener dominio propio
    to: 'joshualugogutierrez@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    html: `<p><strong>De:</strong> ${name} (${email})</p><p>${message}</p>`,
  })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
```

**Nota sobre dominio en Resend:** Sin dominio propio, usar `onboarding@resend.dev` como `from` en modo sandbox — funciona para recibir emails. Al tener dominio propio, cambiar a `portfolio@tudominio.com`.

---

## 12. Cómo Actualizar el Sitio (Guía para Joshua)

### Agregar un proyecto nuevo
1. Ir a GitHub → `public/images/projects/`
2. Arrastrar el thumbnail JPG
3. Ir a `src/data/projects.json`
4. Agregar al inicio del array:
```json
{
  "id": "proyecto-nuevo",
  "title": "NOMBRE",
  "category": "Fotografía",
  "year": 2026,
  "thumbnail": "nombre-del-archivo.jpg"
}
```
5. Guardar → Vercel despliega en 30s

### Agregar fotos al cursor trail
1. GitHub → `public/images/hero/`
2. Subir JPG
3. Listo — aparece automáticamente

### Actualizar un branding
1. Subir nuevo MP4 a `public/videos/branding/`
2. Editar `src/data/branding.json` → cambiar `"video"` al nuevo nombre
3. Guardar

### Cambiar el CV
1. GitHub → `public/cv/`
2. Subir nuevo PDF con el nombre exacto `JoshuaLugo_CV.pdf`
3. Reemplaza el anterior automáticamente

---

## 13. Environment Setup

### Variables de entorno

| Variable | Descripción | Dónde obtener |
|---|---|---|
| `RESEND_API_KEY` | API key para emails | resend.com → API Keys |
| `PUBLIC_VIMEO_ID` | ID del showreel | URL de Vimeo |

### `.env.example`
```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
PUBLIC_VIMEO_ID=000000000
```

### Comandos iniciales
```bash
npm install -g pnpm
pnpm create astro@latest joshua-portfolio -- --template minimal --typescript strict
cd joshua-portfolio
pnpm astro add tailwind vercel
pnpm add gsap lenis resend zod
pnpm dev
```

---

## 14. Build Order ⚡

**SEGUIR EN ESTE ORDEN EXACTO.**

**Paso 1 — Scaffold**
```bash
pnpm create astro@latest joshua-portfolio -- --template minimal --typescript strict
cd joshua-portfolio
pnpm astro add tailwind vercel
pnpm add gsap lenis resend zod
```
Estado: servidor en `localhost:4321`, TypeScript configurado.

**Paso 2 — Tokens y CSS global**
- `src/styles/global.css` con todas las variables CSS
- Google Fonts: Space Grotesk (400,700,900) + Inter (300,400)
- Tailwind v4 configurado con tokens
- Reset CSS

Estado: variables disponibles, fuentes cargando.

**Paso 3 — Archivos de contenido JSON**
- Crear `src/data/projects.json` con 3 proyectos placeholder
- Crear `src/data/branding.json` con 3 brandings placeholder
- Crear `src/data/content.json` con info de Joshua
- Crear carpetas: `public/images/hero/`, `public/images/projects/`, `public/videos/branding/`, `public/cv/`

Estado: estructura de contenido lista, fácil de editar.

**Paso 4 — Layout Base**
- `src/layouts/Base.astro`: HTML shell, meta SEO, importar CSS, fuentes
- Slot para contenido

Estado: estructura HTML correcta.

**Paso 5 — Nav**
- `src/components/Nav.astro`
- Wordmark + links + hamburger menu overlay
- Script: scroll detection → background change
- Script: detectar sección dark → cambiar color texto

Estado: nav funcional y responsivo.

**Paso 6 — Hero + Cursor Trail**
- `src/components/Hero.astro`: tipografía masiva, grain, meta bottom
- `src/components/CursorTrail.astro`: renders imágenes pre-cargadas, ocultas
- `src/scripts/cursor-trail.ts`: lógica GSAP del trail
- Cursor custom CSS (punto pequeño)
- Lee imágenes de `public/images/hero/` dinámicamente

Estado: hero visual correcto, cursor trail funcionando solo en hero.

**Paso 7 — GSAP + Lenis**
- `src/scripts/lenis.ts`: smooth scroll
- `src/scripts/animations.ts`: timelines hero, about, work, branding
- Script en `Base.astro` para inicializar
- Animación de entrada del hero (chars)

Estado: scroll suave, hero se anima al cargar.

**Paso 8 — About**
- `src/components/About.astro`
- Bio desde `content.json`
- Stats con GSAP countUp
- Disciplinas desde `content.json`
- Botón descarga CV

Estado: sección about animada.

**Paso 9 — Work**
- `src/components/Work.astro` + `ProjectItem.astro`
- Lee `projects.json` automáticamente
- Lista con número, título, categoría, año
- Preview thumbnail al hover (GSAP)
- ScrollTrigger stagger

Estado: lista de proyectos dinámica — agregar item en JSON = aparece en el sitio.

**Paso 10 — Branding**
- `src/components/Branding.astro` + `BrandingCard.astro`
- Lee `branding.json` automáticamente
- Grid de cards (cantidad dinámica según JSON)
- Video MP4 en hover (autoplay muted loop)
- ScrollTrigger entrada

Estado: sección branding funcional con video en hover.

**Paso 11 — Showreel**
- `src/components/Showreel.astro`
- Vimeo embed desde `content.json → showreel.vimeoId`
- Play button custom

Estado: showreel reproducible.

**Paso 12 — Contacto + API**
- `src/components/Contact.astro`
- `src/pages/api/contact.ts` con Resend + Zod
- Form con estados: idle / loading / success / error
- `.env` con `RESEND_API_KEY`

Estado: formulario envía emails reales.

**Paso 13 — Footer + Ensamble**
- `src/components/Footer.astro`
- Ensamblar todas las secciones en `index.astro`
- Responsividad mobile (375px, 768px, 1280px)
- Optimizar imágenes con `<Image>` de Astro
- Verificar CV en `/public/cv/JoshuaLugo_CV.pdf`

Estado: sitio completo.

**Paso 14 — Deploy**
```bash
git init && git add . && git commit -m "init: portfolio joshua lugo"
gh repo create joshua-portfolio --public --push
```
→ Importar repo en vercel.com → agregar env vars → deploy  
URL: `joshua-portfolio.vercel.app`

Estado: sitio live, sin dominio custom (funcional igual).

---

## 15. Dependencies

### Core
| Package | Propósito |
|---|---|
| `astro` | Framework |
| `gsap` | Animaciones + cursor trail + ScrollTrigger |
| `lenis` | Smooth scroll |
| `resend` | Emails del form de contacto |
| `zod` | Validación del form |

### Dev
| Package | Propósito |
|---|---|
| `tailwindcss` | Styling |
| `@astrojs/tailwind` | Integración Astro-Tailwind |
| `@astrojs/vercel` | Adaptador deploy |
| `typescript` | Tipado |

---

## 16. Skills a Usar en el Build

| Skill | En qué pasos | Por qué |
|---|---|---|
| `/frontend-design` | 2, 5, 6, 9, 10 | Sistema visual de alta calidad |

---

## 17. CLAUDE.md para el Proyecto

```markdown
# Joshua Lugo Portfolio

Portfolio personal de Joshua Lugo Gutiérrez. Single page, Astro 5, GSAP + Lenis.
Sin CMS externo — todo el contenido en JSON, actualizable desde GitHub web.

## Comandos
- `pnpm dev`      — Dev server localhost:4321
- `pnpm build`    — Build producción
- `pnpm preview`  — Preview del build

## Stack
Astro 5 + TypeScript + Tailwind CSS v4 + GSAP + Lenis + Resend + Vercel

## Estructura de contenido
- `src/data/projects.json`  — Lista de proyectos (work section)
- `src/data/branding.json`  — Proyectos de branding con video
- `src/data/content.json`   — Bio, disciplinas, social, showreel ID
- `public/images/hero/`     — Fotos para cursor trail (8–12 JPGs)
- `public/images/projects/` — Thumbnails de proyectos
- `public/videos/branding/` — MP4 loops para cards de branding
- `public/cv/`              — CV descargable PDF

## Arquitectura
### Componentes
- `Nav.astro`          — Sticky nav con dark detection
- `Hero.astro`         — Tipografía masiva + grain + cursor trail
- `CursorTrail.astro`  — Fotos que siguen el cursor (SOLO en hero)
- `About.astro`        — Bio + stats + disciplinas + CV download
- `Work.astro`         — Lista proyectos desde projects.json
- `Branding.astro`     — Grid brandings desde branding.json
- `Showreel.astro`     — Vimeo embed
- `Contact.astro`      — Form → API endpoint
- `Footer.astro`       — Links + CV

### Scripts
- `lenis.ts`          — Smooth scroll, sincronizado con GSAP ticker
- `animations.ts`     — Todas las timelines GSAP centralizadas
- `cursor-trail.ts`   — Lógica fotos cursor (activo SOLO en hero)
- `contact.ts`        — Submit handler del form

## Colores
- BG light:       #EDEDEA
- Text light:     #111111
- BG dark:        #0D0D0D
- Text dark:      #EDEDEA   ← igual que bg light
- Muted light:    #888888
- Muted dark:     #555555

## Tipografía
- Display: Space Grotesk 700/900
- Body: Inter 300/400
- Hero: clamp(5rem, 12vw, 14rem)

## Animaciones
- Ease entrada:   power3.out
- Ease salida:    power2.inOut
- Duración base:  0.8s
- Stagger listas: 0.07s

## Variables de entorno
| Variable | Descripción |
|---|---|
| RESEND_API_KEY | API key Resend (form contacto) |
| PUBLIC_VIMEO_ID | ID video showreel en Vimeo |

## Reglas
1. TypeScript strict. No `any`.
2. Variables CSS para colores — nunca hex hardcodeado en componentes.
3. No commitear `.env`.
4. Mobile-first responsive (375px base).
5. GSAP + Lenis siempre sincronizados via `gsap.ticker.add`.
6. Cursor trail SOLO dentro del hero — desactivar fuera.
7. Imágenes con `<Image>` de Astro (WebP automático).
8. Contenido siempre desde JSON — nunca hardcodeado en componentes.
```

---

## 18. Reglas No Negociables

1. TypeScript strict. No `any`.
2. Variables CSS para colores — nunca hex hardcodeado en componentes.
3. No commitear `.env`.
4. Mobile-first responsive (375px base).
5. Contenido siempre desde JSON — nunca hardcodeado en componentes.
6. Cursor trail desactivado fuera del hero y en mobile.
7. GSAP + Lenis sincronizados via `gsap.ticker.add`.
8. Imágenes con `<Image>` de Astro (WebP automático).
9. Videos de branding: MP4, muted, loop, max 5MB por archivo.
10. Al agregar item al JSON → aparece en el sitio. Sin tocar componentes.
