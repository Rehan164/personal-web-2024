/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
          animation: {
            "meteor-effect": "meteor 5s linear infinite",
          },
          keyframes: {
    
            meteor: {
                "0%": { transform: "translateX(150vw)", opacity: 1 }, // Starts from full opacity
                "90%": { opacity: 1 }, // Stay visible for most of the animation
                "100%": { transform: "translateX(-150vw)", opacity: 0 }, // Fade out at the end
              },
          },
        },
      },
    plugins: [],
}

