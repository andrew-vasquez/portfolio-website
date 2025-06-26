import { SquareArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, image, icons, iconName, link }) => {
  return (
    <>
      <article className="bg-gradient-to-br from-gray-500/10 to-transparent h-full">
        <div className="border border-zinc-600 p-8 rounded-lg flex flex-col-reverse md:flex-row justify-between mb-7 shadow-xl h-full min-h-[400px] md:min-h-[200px]">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <a
                className="text-xl inline-flex items-center gap-2 hover:opacity-60 transition mb-2"
                target="_blank"
                href={link}
              >
                <h3 className="text-xl font-semibold inline-block">{title}</h3>
                <span className="text-zinc-400">
                  <SquareArrowUpRight className="w-5 h-5" />
                </span>
              </a>
              <p className="text-zinc-400 text-sm text-pretty pr-2 mb-4 line-clamp-3">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt={iconName[index]} className="w-6 h-6" />
              ))}
            </div>
          </div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 mb-5 shadow-xl rounded-lg md:w-52 md:h-32 md:mb-0 object-cover"
          />
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
