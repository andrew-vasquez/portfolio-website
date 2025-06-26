import reactLogo from "../assets/icons/react.svg"
import tailwindLogo from "../assets/icons/tailwind.svg"
import typescript from "../assets/icons/typescript.svg"
import terrenos from "../assets/projects/terrenos_oaxaca.png" 
import pokemon from "../assets/projects/poketeambuilder.png"
export const projectData = [
    {
            title: "Terrenos Oaxaca",
            description: "Landing page for a real estate company in Oaxaca, Mexico that shows off listings for sale.",
            image: terrenos,
            icons: [reactLogo, typescript, tailwindLogo],
            iconName: ["React", "TypeScript", "Tailwind"],
            link: "https://terrenos-oaxaca.vercel.app/"
        },
        {
          title: "Pokemon Team Builder",
          description: "A team builder that lets you build a team for a specific mainline Pokemon game and see their strengths and weaknesses.",
          image: pokemon,
          icons: [reactLogo,tailwindLogo],
          iconName: ["React", "Tailwind"],
          link: "https://poketeambuild.netlify.app/"
        }
]