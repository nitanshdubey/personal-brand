import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Courses", href: "#courses" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="text-2xl font-semibold tracking-wide text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Educator<span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileMenu && (
        <nav className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col py-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="py-3 text-gray-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;