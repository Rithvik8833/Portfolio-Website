# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing personal projects, skills, and professional experience.

![Portfolio Website](./public/placeholder.svg)

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Interactive Components**: Built with Radix UI primitives for accessibility
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Type Safe**: Full TypeScript support for better developer experience
- **Component Library**: Comprehensive set of reusable UI components with shadcn/ui

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### UI Components
- **Radix UI** - Low-level UI primitives for building accessible components
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React** - Beautiful & consistent icons
- **next-themes** - Theme switching with no flash

### State Management & Forms
- **TanStack Query** - Powerful data synchronization for React
- **React Hook Form** - Performant, flexible forms with easy validation
- **Zod** - TypeScript-first schema validation

### Additional Tools
- **React Router DOM** - Declarative routing for React
- **class-variance-authority** - Creating variants with classes
- **clsx & tailwind-merge** - Utility for constructing className strings

## � Dependencies & Installation Commands

### Core Dependencies

#### React & TypeScript
```bash
# Core React packages
npm install react@^18.3.1 react-dom@^18.3.1
bun add react@^18.3.1 react-dom@^18.3.1

# TypeScript support
npm install typescript@^5.5.3 @types/react@^18.3.23 @types/react-dom@^18.3.0
bun add typescript@^5.5.3 @types/react@^18.3.23 @types/react-dom@^18.3.0
```

#### Build Tools & Development
```bash
# Vite build tool and React plugin
npm install vite@^5.4.1 @vitejs/plugin-react-swc@^3.5.0
bun add vite@^5.4.1 @vitejs/plugin-react-swc@^3.5.0

# Node types
npm install @types/node@^22.5.5
bun add @types/node@^22.5.5
```

#### Styling & CSS
```bash
# Tailwind CSS and plugins
npm install tailwindcss@^3.4.11 autoprefixer@^10.4.20 postcss@^8.4.47
bun add tailwindcss@^3.4.11 autoprefixer@^10.4.20 postcss@^8.4.47

# Tailwind utilities and animations
npm install tailwind-merge@^2.5.2 tailwindcss-animate@^1.0.7 @tailwindcss/typography@^0.5.15
bun add tailwind-merge@^2.5.2 tailwindcss-animate@^1.0.7 @tailwindcss/typography@^0.5.15

# Class utilities
npm install clsx@^2.1.1 class-variance-authority@^0.7.1
bun add clsx@^2.1.1 class-variance-authority@^0.7.1
```

#### UI Components & Radix UI
```bash
# Core Radix UI components
npm install @radix-ui/react-accordion@^1.2.0 @radix-ui/react-alert-dialog@^1.1.1 @radix-ui/react-aspect-ratio@^1.1.0 @radix-ui/react-avatar@^1.1.0 @radix-ui/react-checkbox@^1.1.1 @radix-ui/react-collapsible@^1.1.0 @radix-ui/react-context-menu@^2.2.1 @radix-ui/react-dialog@^1.1.2 @radix-ui/react-dropdown-menu@^2.1.1 @radix-ui/react-hover-card@^1.1.1 @radix-ui/react-label@^2.1.0 @radix-ui/react-menubar@^1.1.1 @radix-ui/react-navigation-menu@^1.2.0 @radix-ui/react-popover@^1.1.1 @radix-ui/react-progress@^1.1.0 @radix-ui/react-radio-group@^1.2.0 @radix-ui/react-scroll-area@^1.1.0 @radix-ui/react-select@^2.1.1 @radix-ui/react-separator@^1.1.0 @radix-ui/react-slider@^1.2.0 @radix-ui/react-slot@^1.1.0 @radix-ui/react-switch@^1.1.0 @radix-ui/react-tabs@^1.1.0 @radix-ui/react-toast@^1.2.1 @radix-ui/react-toggle@^1.1.0 @radix-ui/react-toggle-group@^1.1.0 @radix-ui/react-tooltip@^1.1.4

# Or install them individually as needed:
bun add @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

#### Icons & Themes
```bash
# Icons and theme management
npm install lucide-react@^0.462.0 next-themes@^0.3.0
bun add lucide-react@^0.462.0 next-themes@^0.3.0
```

#### State Management & Data Fetching
```bash
# TanStack Query for data fetching
npm install @tanstack/react-query@^5.56.2
bun add @tanstack/react-query@^5.56.2
```

#### Forms & Validation
```bash
# React Hook Form and validation
npm install react-hook-form@^7.53.0 @hookform/resolvers@^3.9.0 zod@^3.23.8
bun add react-hook-form@^7.53.0 @hookform/resolvers@^3.9.0 zod@^3.23.8
```

#### Routing & Navigation
```bash
# React Router for routing
npm install react-router-dom@^6.26.2
bun add react-router-dom@^6.26.2
```

#### Additional UI Libraries
```bash
# Date picker and calendar
npm install date-fns@^3.6.0 react-day-picker@^8.10.1
bun add date-fns@^3.6.0 react-day-picker@^8.10.1

# Carousel and resizable panels
npm install embla-carousel-react@^8.3.0 react-resizable-panels@^2.1.3
bun add embla-carousel-react@^8.3.0 react-resizable-panels@^2.1.3

# Charts and visualization
npm install recharts@^2.12.7
bun add recharts@^2.12.7

# Toast notifications and modals
npm install sonner@^1.5.0 vaul@^0.9.3
bun add sonner@^1.5.0 vaul@^0.9.3

# Input OTP and command palette
npm install input-otp@^1.2.4 cmdk@^1.0.0
bun add input-otp@^1.2.4 cmdk@^1.0.0
```

#### Development & Linting
```bash
# ESLint and linting tools
npm install --save-dev eslint@^9.9.0 @eslint/js@^9.9.0 eslint-plugin-react-hooks@^5.1.0-rc.0 eslint-plugin-react-refresh@^0.4.9 typescript-eslint@^8.0.1 globals@^15.9.0
bun add -d eslint@^9.9.0 @eslint/js@^9.9.0 eslint-plugin-react-hooks@^5.1.0-rc.0 eslint-plugin-react-refresh@^0.4.9 typescript-eslint@^8.0.1 globals@^15.9.0

# Development tools
npm install --save-dev lovable-tagger@^1.1.7
bun add -d lovable-tagger@^1.1.7
```

### Quick Install All Dependencies

To install all dependencies at once, use:

```bash
# Using Bun (recommended)
bun install

# Using npm
npm install

# Using yarn
yarn install
```

### Installing shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
# Install shadcn/ui CLI
npm install -g @shadcn/ui
# or
bun add -g @shadcn/ui

# Add individual components (examples)
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
```

## �📁 Project Structure

```
portfolio-website/
├── public/                    # Static assets
│   ├── resume-rithvik-aavula.pdf
│   └── robots.txt
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── About.tsx        # About section component
│   │   ├── Contact.tsx      # Contact form component
│   │   ├── Experience.tsx   # Work experience component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills display
│   │   └── ThemeToggle.tsx  # Dark/light mode toggle
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main portfolio page
│   │   └── NotFound.tsx    # 404 error page
│   ├── assets/             # Images and media files
│   └── App.tsx             # Main application component
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **Bun** (recommended) or **npm/yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website.

## 📜 Available Scripts

- `dev` - Start the development server
- `build` - Build the project for production
- `build:dev` - Build the project in development mode
- `lint` - Run ESLint to check for code quality issues
- `preview` - Preview the production build locally

## 🔧 Configuration

### Theme Configuration
The project uses `next-themes` for theme management. You can customize the theme settings in the `ThemeToggle` component and Tailwind CSS configuration.

### Tailwind CSS
Tailwind configuration is located in `tailwind.config.ts`. The project includes:
- Custom color schemes
- Typography plugin support
- Animation utilities
- Responsive design utilities

### Component Library
Components are built using shadcn/ui, which provides:
- Accessible components by default
- Customizable styling with CSS variables
- TypeScript support
- Consistent API across components

## 📱 Sections

The portfolio includes the following sections:

1. **Header/Navigation** - Sticky navigation with smooth scrolling
2. **Hero** - Introduction and call-to-action
3. **About** - Personal information and background
4. **Skills** - Technical skills and competencies
5. **Projects** - Showcase of personal and professional projects
6. **Experience** - Work history and achievements
7. **Contact** - Contact form and social links
8. **Footer** - Additional links and information

## 🎨 Customization

### Adding New Components
1. Create your component in the appropriate directory
2. Use the existing UI components from `src/components/ui/`
3. Follow the TypeScript patterns established in the project
4. Ensure responsive design with Tailwind classes

### Styling
- The project uses Tailwind CSS for styling
- Custom components should follow the design system
- Use CSS variables for theme-aware styling
- Maintain consistency with existing components

### Content Updates
- Update personal information in the respective component files
- Replace placeholder images in the `src/assets/` directory
- Update the resume PDF in the `public/` directory
- Modify project data and descriptions as needed

## 🚀 Deployment

### Build for Production
```bash
bun run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel** - Recommended for React projects
- **Netlify** - Great for static sites with form handling
- **GitHub Pages** - Free hosting for public repositories
- **Firebase Hosting** - Google's hosting solution

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

For any questions or inquiries, please reach out through the contact form on the website or connect via:
- Email: [your-email@example.com]
- LinkedIn: [your-linkedin-profile]
- GitHub: [your-github-username]

---

**Built using React, TypeScript, and Tailwind CSS**
