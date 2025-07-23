# Project Structure

## App Router Organization

The project uses Next.js App Router with route groups for logical separation:

### Route Groups

- **`(app)`** - Main application routes (currently contains legacy page)
- **`(frontend)`** - Public-facing website pages
- **`(payload)`** - PayloadCMS admin interface and API routes

### Frontend Routes (`src/app/(frontend)/`)

```
/                 # Homepage
/about            # About the club
/teams            # Team information
/schedule         # Game schedules
/contact          # Contact form
/faq              # Frequently asked questions
/sponsors         # Sponsor information
/store            # Online store
/testimonials     # Member testimonials
/news             # Club news and updates
```

### API Routes

- **`/api/auth/[...nextauth]`** - NextAuth.js authentication endpoints
- **`/api/[...slug]`** - PayloadCMS REST API
- **`/api/graphql`** - PayloadCMS GraphQL API
- **`/api/graphql-playground`** - GraphQL playground interface

## Directory Structure

### Core Application (`src/`)

- **`app/`** - Next.js App Router pages and layouts
- **`components/`** - Reusable React components
  - **`ui/`** - shadcn/ui component library
- **`lib/`** - Utility functions and configurations
- **`styles/`** - Global CSS and styling

### Backend & Data (`src/`)

- **`server/`** - Server-side code
  - **`auth.ts`** - NextAuth configuration
  - **`db/`** - Database schema and connection
- **`collections/`** - PayloadCMS collection definitions
- **`payload.config.ts`** - PayloadCMS configuration
- **`payload-types.ts`** - Generated TypeScript types

### Configuration Files

- **`env.js`** - Environment variable validation
- **`drizzle.config.ts`** - Database ORM configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`next.config.js`** - Next.js configuration with Payload integration

## Naming Conventions

### Files & Components

- **Components**: PascalCase (e.g., `Navbar.tsx`, `Footer.tsx`)
- **Pages**: lowercase with hyphens (e.g., `page.tsx`, `not-found.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Configuration**: kebab-case (e.g., `next.config.js`)

### Import Aliases

- **`~/`** - Points to `src/` directory for clean imports
- **`@/`** - Alternative alias for components (shadcn/ui convention)

## Component Organization

### UI Components (`src/components/ui/`)

- Atomic design principles
- Reusable, accessible components built on Radix UI
- Consistent styling with Tailwind CSS variants

### Layout Components

- **`navbar.tsx`** - Main navigation with responsive design
- **`footer.tsx`** - Site footer
- Separate layouts for different route groups

## PayloadCMS Structure

### Collections (`src/collections/`)

- **`Users.ts`** - User management and authentication
- **`Media.ts`** - File and image management

### Admin Interface

- Auto-generated admin UI at `/admin`
- Custom styling via `custom.scss`
- Import map for component resolution

## Development Patterns

### Route Group Layouts

Each route group has its own layout file for specific styling and structure:

- `(frontend)/layout.tsx` - Public site layout
- `(payload)/layout.tsx` - Admin interface layout
- `(app)/layout.tsx` - Main application layout

### Environment Configuration

- Type-safe environment variables using `@t3-oss/env-nextjs`
- Validation schema in `src/env.js`
- Separate client and server-side variable handling
