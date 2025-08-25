import React from 'react';
import { Clock, ShieldCheck, CalendarX, CalendarCheck, FileLock, Receipt, MessageSquareQuote } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-6 text-right">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-foggy-amethyst">
              האם זה מוכר לך?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-3">
                <Clock className="w-8 h-8 text-lusty-lavender" />
                <p className="text-base font-semibold">שעות אבודות על אדמיניסטרציה?</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <ShieldCheck className="w-8 h-8 text-lusty-lavender" />
                <p className="text-base font-semibold">חשש מאבטחת מידע רגיש?</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <CalendarX className="w-8 h-8 text-lusty-lavender" />
                <p className="text-base font-semibold">כאוס בניהול תורים וביטולים?</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-right md:border-r-2 border-onsen md:pr-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foggy-amethyst">
              הפתרון: אפליקציה אישית לקליניקה שלך
            </h2>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              תאר/י לעצמך עולם שבו הטכנולוגיה עובדת בשבילך, מפנה לך זמן יקר ומאפשרת לך להתרכז במה שאת/ה עושה הכי טוב. האפליקציה האישית שאני בונה עבורך היא לא רק כלי - היא שותפה אסטרטגית לניהול הקליניקה שלך.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-start space-y-2 text-right">
                <CalendarCheck className="w-10 h-10 text-lusty-lavender" />
                <h3 className="text-md font-bold">יומן חכם שמונע תורים כפולים</h3>
              </div>
              <div className="flex flex-col items-start space-y-2 text-right">
                <FileLock className="w-10 h-10 text-lusty-lavender" />
                <h3 className="text-md font-bold">תיעוד מאובטח של מפגשים ומידע</h3>
              </div>
              <div className="flex flex-col items-start space-y-2 text-right">
                <Receipt className="w-10 h-10 text-lusty-lavender" />
                <h3 className="text-md font-bold">חיובים אוטומטיים וניהול פשוט</h3>
              </div>
              <div className="flex flex-col items-start space-y-2 text-right">
                <MessageSquareQuote className="w-10 h-10 text-lusty-lavender" />
                <h3 className="text-md font-bold">תקשורת ישירה ומוצפנת עם מטופלים</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
