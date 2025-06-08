import type { ReactNode } from "react";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

// Main layout component that wraps the entire page
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Reusable header component */}
      <Header />

      {/* Page content goes here */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">{children}</main>

      {/* Simple footer with your name and current year */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          ©
          <a
            href="https://github.com/Sauravpant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Saurav Pant
          </a>{" "}
          {new Date().getFullYear()} Movie Explorer
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
