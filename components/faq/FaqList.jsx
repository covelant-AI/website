
'use client';
import React from 'react';
import {useTranslations} from 'next-intl';

// Add your keys here (q1, q2, ...). Keep it simple.
const KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

export default function FaqList({ className = '' }) {
  const t = useTranslations('components.faq.faqList');
  const [open, setOpen] = React.useState({});
  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <section
      className={[
        'mx-auto w-full max-w-3xl rounded-3xl bg-white/95 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5'
      ].join(' ')}
    >
      <ul className="divide-y divide-gray-200">
        {KEYS.map((k, i) => {
          const isOpen = !!open[k];
          return (
            <li key={k} className="overflow-hidden pt-6">
              <button
                onClick={() => toggle(k)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left hover:bg-gray-50/60"
              >
                <h3 className=" text-base md:text-lg  font-medium text-gray-900">
                  {t(`${k}.title`)}
                </h3>
                <span className="relative grid h-6 w-6 place-items-center">
                  <span className="absolute h-[2px] w-5 rounded bg-black " />
                  <span
                    className={[
                      'absolute w-[2px] h-5 rounded bg-black origin-center transition-transform',
                      isOpen ? 'scale-y-0' : 'scale-y-100',
                    ].join(' ')}
                  />
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                className={[
                  'grid transition-all duration-300 ease-in-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}
              >
                <div className="overflow-hidden px-6 pb-6 pr-10">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {t(`${k}.description`)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
