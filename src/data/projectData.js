import reactLogo from "../assets/icons/react.svg";
import tailwindLogo from "../assets/icons/tailwind.svg";
import typescript from "../assets/icons/typescript.svg";
import terrenos from "../assets/projects/terrenos_oaxaca.png";
import pokemon from "../assets/projects/poketeambuilder.png";
import daylybread from "../assets/projects/daylybread.png";
export const projectData = [
  {
    title: "DaylyBread",
    description:
      "An e-commerce website that sells nfc tap devices to churches and other organizations.",
    image: daylybread,
    icons: [reactLogo, typescript, tailwindLogo],
    iconName: ["React", "TypeScript", "Tailwind"],
    link: "https://daylybread-page.vercel.app/",
  },
  {
    title: "ALFA Inmobiliaria",
    description:
      "Landing page for a real estate company in Oaxaca, Mexico that shows off listings for sale.",
    image: terrenos,
    icons: [reactLogo, typescript, tailwindLogo],
    iconName: ["React", "TypeScript", "Tailwind"],
    link: "https://alfa-inmobiliaria.vercel.app/",
  },
  {
    title: "Pokemon Team Builder",
    description:
      "A team builder that lets you build a team for a specific mainline Pokemon game and see their strengths and weaknesses.",
    image: pokemon,
    icons: [reactLogo, tailwindLogo],
    iconName: ["React", "Tailwind"],
    link: "https://poketeambuild.netlify.app/",
  },
];
