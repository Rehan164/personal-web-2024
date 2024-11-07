"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  const [expandedCard, setExpandedCard] = useState(null);

return (
    <>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto px-8" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    bodyText={card.bodyText}
                    isExpanded={expandedCard === index}
                    onExpand={() => setExpandedCard(index)}
                    onClose={() => setExpandedCard(null)}
                >
                    <CanvasRevealEffect
                        animationSpeed={card.animationSpeed}
                        containerClassName={card.containerClassName}
                        colors={card.colors}
                        dotSize={2}
                        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"
                    />
                </Card>
            ))}
        </div>
    </>
);
}

const cards = [
  {
    title: "Red Hat",
    icon: <img src="/redhat.png" alt="Red Hat Logo" className="w-12" />,
    animationSpeed: 5.1,
    containerClassName: "bg-red-900",
    colors: [[217, 43, 43]],
    bodyText: "Start Date: Summer 2025\nSoftware Engineer Intern\n\nRed Hat Info Coming Soon",
  },
  {
    title: "Boston University IS&T",
    icon: <img src="/bu.png" alt="Red Card Logo" className="w-12" />,
    animationSpeed: 5.1,
    containerClassName: "bg-red-700",
    colors: [[217, 43, 43]],
    bodyText: "July 2024 - Present\nClient Support Specialist\n\nProvide client support and services for Boston University schools and organizations.",
  },
  {
    title: "Falsetto",
    icon: <img src="/falsetto-phone.png" alt="Falsetto Logo" className="w-12" />,
    animationSpeed: 5.1,
    containerClassName: "bg-orange-900",
    colors: [[217, 92, 43]],
    bodyText: "March 2024 - Present\nCo-Founder\n\nB2B software company focused on making Restaurants more labour efficient with advanced natural language understanding and actionable, conversational AI.\n\n - Developing natural language generation and natural language processing models to create a solution that satisfies businesses\n - Leading conversations and pitches with investors. Signed up customers for beta testing",
  },
  {
    title: "Assette",
    icon: <img src="/assette_logo.png" alt="Assette Logo" className="w-12" />,
    animationSpeed: 5.1,
    containerClassName: "bg-green-700",
    colors: [[66, 217, 43]],
    bodyText: "May 2023 - September 2024\nData and AI Engineer Intern\n\n - Applied statistical model building concepts to integrate Azure OpenAI and Azure Cognitive services to develop a sustainable process for continuous improvement of natural language processing and natural language generation models.\n - Applied statistical models and Azure cognitive services capabilities to build a quantitative data analysis model that can be used for natural language generation.\n - Developed python-based applications suitable for a cloud-based architecture which captured the above functionalities and provided proper documentation.",
  },
];

const Card = ({ title, icon, children, bodyText, isExpanded, onExpand, onClose }) => {
  
    return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          className="work-card"
        >
          <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 h-full relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <motion.div className="h-full w-full absolute inset-0">
              {children}
            </motion.div>
            <div className="relative w-5/6 h-5/6 px-5 py-5">
              <h2 className="dark:text-white font-bold text-2xl">{title}</h2>
              <p className="dark:text-white text-gray-800 mt-4 whitespace-pre-wrap">{bodyText}</p>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white-300 px-2 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div
          onClick={onExpand}
          className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative cursor-pointer"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <motion.div className="relative z-20">
            <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
              {icon}
            </div>
            <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {title}
            </h2>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// CSS
// .work-card {
//   display: flex;
//   width: 1400px;
//   height: 700px;
// }
