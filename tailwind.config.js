/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          textblack: "var(--textBlackColor)",
          textWhite: "var(--textWhiteColor)",
          gray: "var(--grayColor)",
        },
      },

      backgroundColor: {
        skin: {
          background: "var(--background)",
          header: "var(--headerColor)",
          footer: "var(--footerColor)",
          bgyellow: "var(--bgYellow)",
          bgLightblue: "var(--bglightBlue)",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        Carnas: ["Carnas W03 Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
