module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: " linear-gradient(rgba(5,7,12,0.75),rgba(5,7,12,0.75)), url(/assets/bg.jpg)",
        body: "url(/assets/bg-repeat.png)",
        con: "url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')",
        animation: {
          pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          keyframes: {
            pulse: {
              "0%,100%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0.2,
              },
            },
          },
        },
      },
      colors: {
        bar: "#0B1120",
      },
    },
  },
  plugins: [],
};
