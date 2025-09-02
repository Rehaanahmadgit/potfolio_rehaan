# Overview

This is a modern, dark-themed portfolio website for Rehaan Ahmad, a Software Developer and B.Tech candidate at Kanpur Institute of Technology. The application is built as a full-stack solution using React for the frontend and Express.js for the backend, featuring smooth animations, interactive components, and a contact form system. The portfolio showcases professional experience, technical skills, projects, and provides a way for visitors to get in touch.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with custom dark theme variables and Radix UI components for consistent design system
- **Animation**: Framer Motion for smooth transitions, scroll reveals, and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Data Storage**: In-memory storage with interface for easy database migration
- **Schema Validation**: Zod for runtime type validation of API requests
- **Development**: Hot module replacement with Vite integration for seamless full-stack development

## Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom dark theme with neon accent colors (blue/purple/teal)
- **Typography**: Inter for body text and JetBrains Mono for code elements
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Database Schema
- **Users Table**: Basic user authentication structure with username and password
- **Contact Messages Table**: Stores form submissions with name, email, message, and timestamp
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions and type generation

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe SQL toolkit for database operations and migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Animation Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Framer Motion**: Production-ready motion library for React animations
- **React Icons**: Popular icon libraries (Lucide, Simple Icons) for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

## Development Tools
- **TanStack Query**: Powerful data synchronization for server state management
- **React Hook Form**: Performant forms with easy validation
- **Wouter**: Minimalist routing library for single-page applications
- **TypeScript**: Static type checking for enhanced developer experience and code reliability

## Build & Development
- **Vite**: Next generation frontend tooling for fast development and builds
- **ESBuild**: Extremely fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility