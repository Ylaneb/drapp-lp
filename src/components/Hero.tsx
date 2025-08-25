import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/hands-hero.png"
          alt="Medical background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }} />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[700px] space-y-4 text-right">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                <span className="text-onsen">ניהול קליניקה</span> פשוט וחכם, כדי שתוכל/י להתמקד במה שחשוב באמת: <span className="text-onsen">המטופלים שלך.</span>
              </h1>
              <p className="text-gray-200 md:text-xl dark:text-gray-300">
                אני בונה אפליקציות אישיות ומאובטחות למטפלים, שמחזירות לך את השליטה ביומן, בחיובים ובתיקי המטופלים.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-lusty-lavender px-8 text-sm font-medium text-precious-pearls shadow transition-colors hover:bg-foggy-amethyst focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                שיחת ייעוץ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
