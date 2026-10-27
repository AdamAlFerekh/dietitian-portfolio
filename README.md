# Dietitian Portfolio Demo

A responsive, single-page portfolio website concept for a fictional dietitian and wellness coach. Built with Next.js and TypeScript, this project showcases a polished frontend experience using illustrative content and demo-safe interactions.

## Demo Disclaimer

This is a fictional portfolio concept. The profile, qualifications, timeline entries, and contact information are illustrative and do not represent verified professional credentials, real client data, or live business details.

## Features

- Hero section with brand positioning and calls to action
- About section presenting a client-focused wellness philosophy
- Expertise and service cards covering nutrition coaching, programming, and private training
- Timeline section featuring illustrative professional milestones
- Certificates section with clearly labeled sample content
- FAQ accordion for common client questions
- Contact section with demo-safe interactions rather than live integrations
- Responsive layout with motion-based transitions and reduced-motion support

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **UI:** React 19 and Tailwind CSS
- **Animations:** Motion
- **Icons:** Lucide React

## Architecture

Selected page sections use a Model–View–ViewModel (MVVM) structure to separate data, application logic, and UI presentation.

The architecture includes models for data types, repositories for accessing data, and ViewModels for managing section-specific UI state and actions. This is a frontend-only implementation; no backend or API integration is currently included.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and navigate to the project directory, then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation and Production Commands

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Project Structure

- `app/` — Application entry point, page, global styles, and root layout
- `components/layout/` — Shared layout components, including the navbar, footer, and floating WhatsApp action
- `components/sections/` — Page sections and supporting data, models, repositories, and ViewModels
- `public/` — Static assets

## Current Limitations

This project is intentionally frontend-only. It does not include a backend, authentication, payment processing, or live contact integrations. The profile and professional details are sample content and must be replaced with verified information before the website is used as a real professional portfolio.
