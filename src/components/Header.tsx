'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-50 dark:bg-slate-800 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Adytm__
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about"
              className={`font-medium transition-colors ${
                pathname === '/about'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects"
              className={`font-medium transition-colors ${
                pathname === '/projects'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/skills"
              className={`font-medium transition-colors ${
                pathname === '/skills'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-colors ${
                pathname === '/contact'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
