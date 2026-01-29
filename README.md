# Multi-Vendor Mini Sites (Frontend)

A modern, responsive frontend application built with **Next.js 14+ (App Router)** that simulates multi-tenant storefronts. It allows users to view vendor-specific product pages with search, sorting, and pagination capabilities.

## 🚀 Features

- **Multi-Vendor Routing:** Dynamic routing (`/vendors/[vendorSlug]`) to render unique storefronts for each vendor.
- **Product Display:**
  - Responsive product grid.
  - Vendor branding (Logo, Name, Hero Image).
- **Interactivity:**
  - **Search:** Real-time product filtering.
  - **Sorting:** Price (Low/High) and Recency.
  - **Pagination:** Efficient data navigation.
- **UI/UX:**
  - Loading skeletons and error states.
  - Modern design using **Tailwind CSS**.
  - Interactive components with **Ant Design** and **Framer Motion**.
- **State Management:** Server state management using **TanStack Query**.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Components:** [Ant Design](https://ant.design/)
- **Animations:** Framer Motion
- **Forms:** Formik + Yup
- **Data Fetching:** TanStack Query (React Query) + Axios

## 📋 Prerequisites

- Node.js (v18 or later)
- npm or yarn

## ⚙️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mminuwaali/multivendor-product-system-frontend.git
    cd nextjs-product-system
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env.local` file in the root directory.

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

    _Note: Ensure this matches your backend's running port._

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

## 🧭 Project Structure

```
src/
├── app/
│   ├── (main)/
│   │   └── sites/
│   │       └── [vendorSlug]/   # Dynamic vendor storefront page
│   └── layout.tsx              # Root layout
├── components/
│   ├── cards/                  # Product and UI cards
│   ├── forms/                  # Form components
│   ├── primary/                # Core UI elements (Buttons, Inputs)
│   └── shared/                 # Shared layout components
├── constants/                  # App-wide constants and settings
├── hooks/                      # Custom React hooks
├── services/                   # API service calls
├── styles/                     # Global styles and Tailwind config
└── types/                      # TypeScript definitions
```

## 📄 License

This project is licensed under the MIT License.
