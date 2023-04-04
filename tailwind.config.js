/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "104": "30rem"
      },
      height: {
        "102": "27rem"
      },
      spacing: {
        "10%": "10%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      colors: {
        "main-violet": "#635FC7",
        "soft-violet": "#A8A4FF",
        "dark-black": "#000112",
        "grey-black": "#20212C",
        "semi-black": "#2B2C37",
        "dark-gray": "#3E3F4E",
        "light-gray": "#828FA3",
        "light-gray-op": "#00000080",
        "white-azure": "#E4EBFA",
        "s-l-gray": "#AFB6B9",
        "gray-white": "#F4F7FD",
        "dark-red": "#EA5555",
        "light-red": "#FF9898",
      },
      gridTemplateColumns: {
        "1-28": "repeat(1, 280px)",
      },
      gridAutoColumns: {
        "1-28": "280px",
      },
    },
    plugins: [],
  },  
}

