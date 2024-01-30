/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        igGradient1: "hsl(37, 97%, 70%)",
        igGradient2: "hsl(329, 70%, 58%)",
        youTube: "hsl(348, 97%, 39%)",

        // dark theme
        vDarkBlueBg: "hsl(230, 17%, 14%)",
        vDarkBlueTopBgPattern: "hsl(232, 19%, 15%)",
        darkDesaturatedBlueCardBg: "hsl(228, 28%, 20%)",
        desaturatedBlueText: "hsl(228, 34%, 66%)",
        whiteText: "hsl(0, 0%, 100%)",
        darkbtnToggleOne: "hsl(210, 78%, 56%)",
        darkbtnToggleTwo: "hsl(146, 68%, 55%)",

        // light theme
        whiteBg: "hsl(0, 0%, 100%)",
        lvPaleBlueTopBgPattern: "hsl(225, 100%, 98%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        lDarkGrayishBlueText: "hsl(228, 12%, 44%)",
        lVeryDarkBlueText: "hsl(230, 17%, 14%)",
        lightBtnToggle: "hsl(230, 22%, 74%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
