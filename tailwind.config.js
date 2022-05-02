module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"]
            },
            colors: {
                primary: "#33ccff"
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};
