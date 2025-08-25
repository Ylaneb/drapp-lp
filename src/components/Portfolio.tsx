'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "מערכת לניהול חופשות ודיווחים עבור מרפאת 'הרמוניה'",
    catchphrase: "החזרנו את הסדר ליומנים, בלחיצת כפתור.",
    description: "מרפאת 'הרמוניה' התמודדה עם אתגר בניהול בקשות חופשה וסידור הצוות. בנינו עבורם מערכת מותאמת אישית המאפשרת לרופאים להגיש בקשות בקלות ולמנהלים לאשר ולצפות בדיווח היעדרויות חודשי בצורה ויזואלית וברורה.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "/img/orharmony1.jpg"
  },
  {
    title: "פרויקט לדוגמה 2: ניהול תיקי מטופלים",
    catchphrase: "מידע רגיש, מאובטח ונגיש.",
    description: "תיאור קצר על פרויקט הדוגמה השני, המתאר כיצד האפליקציה פתרה בעיה ספציפית עבור קליניקה אחרת, תוך התמקדות באבטחת מידע ונוחות שימוש.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "/placeholder.svg" 
  }
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[linear-gradient(0deg,rgba(241,250,246,1)_10%,rgba(255,255,255,1)_70%)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foggy-amethyst">
            הצצה לתיק העבודות
          </h2>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => (
              <div className="embla__slide" key={index}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center">
                    <Image
                      src={project.image}
                      alt={`${project.title} Mockup`}
                      width={700}
                      height={450}
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col space-y-6 text-right">
                    <h3 className="text-2xl font-bold text-foggy-amethyst">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 italic">
                      "{project.catchphrase}"
                    </p>
                    <p className="text-gray-500 md:text-lg dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex justify-end gap-2 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-lavender-lace text-foggy-amethyst text-sm font-semibold px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-10" onClick={scrollPrev}>
        <ChevronLeft className="h-6 w-6 text-foggy-amethyst" />
      </button>
      <button className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-10" onClick={scrollNext}>
        <ChevronRight className="h-6 w-6 text-foggy-amethyst" />
      </button>
    </section>
  );
};

export default Portfolio;
