# MonibShop - E-Commerce UI

A modern, feature-rich e-commerce platform built with Next.js 16, React 19, and TypeScript. Featuring a seamless shopping experience with product browsing, filtering, cart management, and secure checkout functionality.

## ✨ Features

- **Product Catalog**: Browse and explore a wide range of products with detailed descriptions and images
- **Advanced Filtering**: Filter products by categories and sort by newest/oldest
- **Search Functionality**: Quick product search across the catalog
- **Shopping Cart**: Add/remove products with size and color options, persistent cart storage
- **Checkout Process**: Multi-step checkout with shipping and payment information
- **Form Validation**: Robust validation for shipping and payment details using Zod
- **Responsive Design**: Fully responsive UI that works seamlessly on all devices
- **Toast Notifications**: User-friendly notifications for actions and feedback
- **SEO Optimized**: Built with Next.js for best SEO practices

## 🛠 Tech Stack

### Core Framework

- **Next.js 16.1.3** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development

### State Management & Forms

- **Zustand 5.0.9** - Lightweight state management with persistence
- **React Hook Form 7.69.0** - Efficient form management
- **Zod 4.2.1** - TypeScript-first schema validation

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React 0.562.0** - Beautiful SVG icons
- **React Toastify 11.0.5** - Toast notifications

### Development Tools

- **ESLint 9** - Code quality and consistency
- **Turbopack** - Fast bundler for development

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage with featured banner
│   ├── globals.css              # Global styles
│   ├── cart/
│   │   ├── page.tsx             # Cart page wrapper
│   │   └── CartPageContent.tsx  # Cart management component
│   └── products/
│       ├── page.tsx             # Products listing page
│       └── [id]/
│           └── page.tsx         # Individual product details
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation header
│   ├── Footer.tsx               # Footer component
│   ├── ProductCard.tsx          # Product display card
│   ├── ProductList.tsx          # Products grid/list
│   ├── ProductInteraction.tsx   # Product interaction logic
│   ├── Filter.tsx               # Product filtering
│   ├── Categories.tsx           # Category selector
│   ├── SearchBar.tsx            # Search functionality
│   ├── ShoppingCartIcon.tsx     # Cart icon with badge
│   ├── ShippingForm.tsx         # Shipping information form
│   └── PaymentForm.tsx          # Payment details form
├── stores/
│   └── cartStore.ts             # Zustand cart state management
├── types.ts                      # TypeScript type definitions
└── public/
    ├── products/                # Product images
    └── logo.png                 # Brand logo
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The page will auto-refresh as you make changes.

## 📦 Available Scripts

- **`pnpm run dev`** - Start development server with Turbopack
- **`pnpm run build`** - Build the application for production
- **`pnpm run start`** - Start production server
- **`pnpm run lint`** - Run ESLint for code quality

## 🎯 Key Components Overview

### Navbar

Main navigation component featuring:

- Brand logo and name (TrendMonib)
- Search bar integration
- Home navigation
- Notifications bell
- Shopping cart icon with item count

### ProductCard

Individual product component with:

- Product image showcase
- Size selection
- Color selection
- Add to cart functionality
- Toast notifications for user feedback

### Cart Management

- Persistent storage using Zustand with localStorage
- Smart duplicate detection (same product, size, and color)
- Quantity management
- Clear cart functionality
- Product removal

### Checkout Forms

- **ShippingForm**: Name, email, phone, address, city validation
- **PaymentForm**: Card holder, card number, expiration date, CVV validation
- Full form validation using Zod schemas

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a modern, clean design approach. Responsive breakpoints ensure great user experience on:

- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 💾 State Management

### Cart Store (Zustand)

```typescript
- cart: CartItemType[] - Array of cart items
- addToCart() - Add product with size/color options
- removeFromCart() - Remove specific product variant
- clearCart() - Empty the entire cart
- hasHiddenItems - Flag for hidden items management
```

The cart is automatically persisted to localStorage using Zustand's persist middleware.

## ✅ Form Validation

All forms use Zod schemas for runtime and type-safe validation:

**Shipping Form**

- Name: Required
- Email: Valid email format
- Phone: 10-15 digits, numeric only
- Address: Required
- City: Required

**Payment Form**

- Card Holder: Required
- Card Number: Exactly 16 digits
- Expiration Date: MM/YY format
- CVV: 3-4 digits

## 🌐 Page Routes

- `/` - Homepage with featured banner and product list
- `/products` - Full products catalog with filtering
- `/products/[id]` - Individual product details
- `/cart` - Shopping cart summary and checkout

## 📱 Responsive Design

The UI automatically adapts to different screen sizes:

- Hidden elements on mobile (md: breakpoint)
- Responsive images with Next.js Image optimization
- Touch-friendly button sizes
- Mobile-optimized navigation

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
# Build the project
pnpm run build

# Deploy using Vercel CLI
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private. All rights reserved.

## 👨‍💻 Developer Notes

- The project uses Next.js App Router for modern page routing
- Client components are marked with `'use client'` directive for interactivity
- Server components handle data fetching and rendering
- Images are optimized using Next.js Image component
- Type safety is enforced throughout with TypeScript

---

**Built with ❤️ for a seamless shopping experience**
