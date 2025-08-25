import React from 'react';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-precious-pearls shadow-md">
      <a className="flex items-center justify-center" href="#">
        <span className="text-2xl font-bold text-foggy-amethyst">DrApp</span>
      </a>
      <nav className="mr-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          מאפיינים
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          תמחור
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          אודות
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          צור קשר
        </a>
      </nav>
    </header>
  );
};

export default Header;
