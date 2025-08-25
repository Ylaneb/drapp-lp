import React from 'react';
import Image from 'next/image';

const Workflow = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foggy-amethyst">
            תהליך העבודה: פשוט וברור, מהתחלה ועד הסוף
          </h2>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-lavender-lace -translate-y-1/2" style={{ top: '25%' }}></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/img/building1.svg" alt="איפיון" width={150} height={150} />
              <h3 className="text-2xl font-bold text-foggy-amethyst">איפיון</h3>
              <p className="text-gray-500">
                נבין יחד את הצרכים הייחודיים שלך ונגדיר את המטרות והדרישות מהאפליקציה.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/img/building2.svg" alt="עיצוב" width={150} height={150} />
              <h3 className="text-2xl font-bold text-foggy-amethyst">עיצוב</h3>
              <p className="text-gray-500">
                ניצור עיצוב נקי ומקצועי שמותאם למותג שלך ומספק חווית משתמש אינטואיטיבית.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/img/building3.svg" alt="בנייה" width={150} height={150} />
              <h3 className="text-2xl font-bold text-foggy-amethyst">בנייה</h3>
              <p className="text-gray-500">
                נפתח את האפליקציה באמצעות הטכנולוגיות המתקדמות ביותר, תוך דגש על אבטחה וביצועים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
