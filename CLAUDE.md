# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Farm Commerce (農場商業網站) is a Vue 3 e-commerce platform for selling agricultural products with subscription-based ordering and delivery scheduling. The application supports both one-time purchases and recurring deliveries (weekly, bi-weekly, monthly).

**Key Features:**

- Product catalog with detailed supplier and ingredient information
- Subscription-based ordering system with customizable delivery schedules
- Address validation to check delivery coverage
- Order management (add, edit, cancel orders by date)
- Product search functionality
- AI chatbot customer service (Google Gemini)
- Discount code support

**Technology Stack:**

- Vue 3 with Vite
- Pinia for state management (with persistence via pinia-plugin-persistedstate)
- Vue Router (hash mode)
- Supabase for backend (authentication, database)
- Tailwind CSS + Shadcn-vue UI components
- Vee-validate + Zod for form validation
- Day.js for date handling
- Google Generative AI for chatbot

## Development Commands

```bash
# Start development server (accessible on network via --host)
npm run dev

# Build for production
npm run build:prod

# Build for staging environment
npm run build:stage

# Deploy to GitHub Pages
npm run deploy
```

## Project Architecture

### Directory Structure

```
src/
├── views/              # Route-level page components
├── common/
│   ├── components/     # Feature-specific components organized by domain
│   │   ├── shop/       # Shop pages and product listings
│   │   ├── account/    # User account management (subscriptions, delivery schedule, profile)
│   │   ├── join/       # Registration flow components
│   │   ├── login/      # Authentication components
│   │   ├── product/    # Product detail components
│   │   ├── chatbot/    # AI chatbot interface
│   │   └── ui/         # Reusable UI components
│   └── composables/    # Shadcn-vue composables (drawer, form, etc.)
├── store/modules/      # Pinia stores by domain (cart, order, product, account, etc.)
├── Plugins/            # Utility modules and API clients
├── router/             # Vue Router configuration
├── config/             # Supabase configuration
└── assets/             # Static assets (images, fonts, CSS)
```

### State Management Architecture

Pinia stores are organized by domain in `src/store/modules/`:

- **account**: User authentication, profile, registration status
- **cart**: Shopping cart state, delivery date selection
- **order**: Order creation, subscription management
- **product**: Product data and filtering
- **chatbot**: AI chatbot state
- **search**: Product search functionality
- **profile**: User profile information

Each store is a separate module imported individually. Pinia instance is configured with persistence plugin in `src/store/pinia.js`.

### Router Architecture

Vue Router uses **hash mode** (`createWebHashHistory`) with nested routes for complex pages. Important route guards:

- `requiresAuth`: Protected routes requiring authentication (redirects to home if not logged in)
- `entryControl`: Registration flow pages (prevents direct access)
- `isjoin`: Login/signup pages (blocked if already registered)

**Registration Flow Enforcement:** If user is authenticated but hasn't completed delivery address registration (`regDeliveryaddress`), they're redirected to complete registration before accessing protected routes.

### Supabase Integration

Supabase client is initialized in `src/config/FarmPruductsItemManage.js` using environment variables:

- `VITE_APP_FARM_PRODUCTS_URL`
- `VITE_APP_FARM_PRODUCTS_KEY`

Common Supabase operations are wrapped in `src/Plugins/supabaseClinets.js` with error handling that shows user-friendly toast notifications.

**Authentication Flow:**

1. Sign up with email/password → OTP verification
2. Address validation (zip code check against TwZipCode table)
3. Complete registration (personal info → delivery address → payment info)
4. Email magic link login also supported

### Key Plugin Modules

Located in `src/Plugins/`:

- **supabaseClinets.js**: Authentication and database operations with error handling
- **supabaseOrder.js**: Order and subscription management
- **SupabasePruductsData.js**: Product data fetching
- **zodValidators.js**: Zod validation schemas for forms
- **inputValidation.js**: Custom input validation utilities
- **zipCode.js**: Taiwan zip code validation
- **day.js**: Day.js configuration and date utilities
- **sessionHandler.js**: Session management
- **fadeIn.js**: Custom Vue directive for fade-in animations

### Component Organization

Components are organized by **feature domain** rather than technical type:

- `common/components/shop/` - Shopping and product listing components
- `common/components/account/` - Account management (AccountSubscriptions.vue, AccountDeliveryschedule.vue, AccountProfile.vue, etc.)
- `common/components/join/` - Multi-step registration flow components
- `common/components/ui/` - Reusable UI primitives (buttons, forms, dialogs, etc.)

### Form Validation Pattern

Forms use vee-validate with Zod schemas. Validation schemas are centralized in `src/Plugins/zodValidators.js`. Form components from shadcn-vue are in `src/common/composables/ui/form/` with a custom `useFormField.js` composable.

## Environment Variables

Required in `.env`:

```
VITE_APP_FARM_PRODUCTS_URL=<Supabase URL>
VITE_APP_FARM_PRODUCTS_KEY=<Supabase Anon Key>
VITE_APP_GOOGLEAI_KEY=<Google Generative AI Key>
```

## Deployment

The app is deployed to GitHub Pages with base path `/farm-commerce/` (configured in `vite.config.js`). Deployment happens via `npm run deploy` which runs `gh-pages -d dist`.

## Important Notes

- **ESLint Configuration**: Uses `@babel/eslint-parser` with `@babel/preset-env` in `.babelrc.js`
- **Path Aliases**: `@` is aliased to `./src` in vite.config.js
- **Toast Notifications**: Use `vue-sonner` for user feedback (imported in most stores and plugins)
- **Font**: Uses Galmuri Korean pixel font (imported in main.js)
- **Day.js**: Centralized configuration in `src/Plugins/day.js` for date manipulation
- **Cart Date Selection**: Shopping cart uses a complex date/workday selection system managed in cartStore for choosing delivery dates
