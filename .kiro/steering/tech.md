# Technology Stack

## Framework & Runtime

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Database & ORM

- **PostgreSQL** - Primary database
- **Drizzle ORM** - Type-safe database toolkit
- **MongoDB** - PayloadCMS database (via Mongoose adapter)

## Content Management

- **PayloadCMS 3** - Headless CMS with admin interface
- **Lexical Editor** - Rich text editing
- **GraphQL** - API layer for content queries

## Authentication & Security

- **NextAuth.js** - Authentication solution
- **@t3-oss/env-nextjs** - Environment variable validation with Zod

## Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Geist Font** - Typography
- **shadcn/ui** - Component library built on Radix UI

## Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Drizzle Kit** - Database migrations and introspection

## Package Management

- **pnpm** - Fast, disk space efficient package manager

## Common Commands

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Database Operations

```bash
pnpm db:generate  # Generate Drizzle migrations
pnpm db:migrate   # Run database migrations
pnpm db:push      # Push schema changes to database
pnpm db:studio    # Open Drizzle Studio (database GUI)
```

### Database Setup

```bash
# Start local PostgreSQL (if using Docker)
./start-database.sh
```

## Environment Setup

- Copy `.env.example` to `.env` and configure required variables
- Ensure PostgreSQL and MongoDB connections are properly configured
- Set up NextAuth secret and URL for authentication
