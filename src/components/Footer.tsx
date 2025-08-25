import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-precious-pearls">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DrApp. כל הזכויות שמורות.</p>
      <nav className="sm:mr-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="#">
          תנאי שירות
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          פרטיות
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
