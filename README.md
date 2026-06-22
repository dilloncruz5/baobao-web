# BaoBao Web2

Welcome to the Baobao Web2 project. This project is built using modern web technologies including React, Vite, TanStack Router/Start, and Tailwind CSS.

## Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine. You can also use Node.js and `npm`/`yarn`/`pnpm` if preferred, but `bun` is recommended as this project uses a `bun.lock` file.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dilloncruz5/baobao-web2.git
   cd baobao-web2
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```
   *(If you use npm, run `npm install` instead)*

3. **Run the development server:**
   ```bash
   bun run dev
   ```
   This will start the Vite development server. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `bun run dev` - Starts the development server.
- `bun run build` - Builds the project for production.
- `bun run preview` - Previews the production build locally.
- `bun run lint` - Runs ESLint to find issues in the code.
- `bun run format` - Runs Prettier to format the code.

## Tech Stack

- **Framework:** React + Vite
- **Routing:** TanStack Router / TanStack Start
- **Styling:** Tailwind CSS + Radix UI Primitives
- **Animations:** Framer Motion (`motion`)
- **Package Manager:** Bun
