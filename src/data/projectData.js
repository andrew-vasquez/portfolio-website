import reactLogo from "../assets/icons/react.svg";
import tailwindLogo from "../assets/icons/tailwind.svg";
import typescript from "../assets/icons/typescript.svg";
import alfa from "../assets/projects/alfa.webp";
import pokemon from "../assets/projects/poketeambuilder.webp";
import daylybread from "../assets/projects/daylybread.webp";
export const projectData = [
  {
    title: "DaylyBread",
    description:
      "An e-commerce website that sells nfc tap devices to churches and other organizations.",
    image: daylybread,
    icons: [reactLogo, typescript, tailwindLogo],
    iconName: ["React", "TypeScript", "Tailwind"],
    link: "https://daylybread.com",
  },
  {
    title: "ALFA Inmobiliaria",
    description:
      "Landing page for a real estate company in Oaxaca, Mexico that shows off listings for sale.",
    image: alfa,
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
