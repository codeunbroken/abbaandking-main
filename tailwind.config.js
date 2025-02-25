/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        desktop: "url('assets/bg-image-D.png')",
        mobile: "url('assets/Mobile-BG.png')",
        desktopLogo: "url('assets/Desktop-logos.png')",
        mobileLogo: "url('assets/mobile-logo.png')",
        buildSoftware: "url('assets/build-software.png')",
        footerImg: "url('assets/footerBg.png')",
        policiesBg: "url('assets/policies.png')",
      },
    },
    plugins: [],
  },
};
