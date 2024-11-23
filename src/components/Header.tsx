import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/skills" className="hover:text-blue-500 transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
