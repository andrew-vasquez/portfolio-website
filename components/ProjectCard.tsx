"use client";

import { motion, useReducedMotion } from "motion/react";
import { SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import { easing, transitions } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  icons: string[];
  iconName: string[];
  link: string;
  number: number;
}

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.spring, delay: 0.1 },
  },
};

const hoverVariantsEnabled = {
  y: -4,
  borderColor: "rgba(255, 255, 255, 0.1)",
  backgroundColor: "#161619",
  transition: { duration: 0.3, ease: easing.smooth },
};

const ProjectCard = ({
  title,
  description,
  image,
  icons,
  iconName,
  link,
  number,
}: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  const hoverVariants = shouldReduceMotion ? {} : hoverVariantsEnabled;

  return (
    <motion.article
      className="h-full"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="border border-white/[0.06] bg-[#111116] p-8 rounded-lg flex flex-col-reverse md:flex-row justify-between mb-7 h-full min-h-[400px] md:min-h-[200px] relative"
        whileHover={hoverVariants}
      >
        <span
          className="absolute top-4 left-4 text-zinc-700 text-[10px] font-sans tracking-[0.25em] select-none"
          aria-hidden="true"
        >
          {String(number).padStart(2, "0")}
        </span>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <motion.a
              className="text-xl inline-flex items-center gap-2 hover:opacity-60 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded transition-opacity mb-2"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              aria-label={`View ${title} project`}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 5,
                      transition: { duration: 0.2, ease: easing.smooth },
                    }
              }
            >
              <h3 className="text-xl font-semibold inline-block">{title}</h3>
              <motion.span
                className="text-zinc-400"
                aria-hidden="true"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 45,
                        scale: 1.1,
                        transition: { duration: 0.2, ease: easing.bounce },
                      }
                }
                >
                <SquareArrowUpRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
            <motion.p
              className="text-zinc-400 text-sm text-pretty pr-2 mb-4 line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {icons.map((icon, index) => (
              <motion.div
                key={`${title}-icon-${index}`}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.1,
                        transition: { duration: 0.2, ease: easing.smooth },
                      }
                }
                >
                <Image
                  src={icon}
                  alt={iconName[index]}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing.smooth }}
        >
          <Image
            src={image}
            alt={`Screenshot of ${title} project`}
            width={208}
            height={128}
            className="w-full h-48 mb-5 shadow-xl rounded-lg md:w-52 md:h-32 md:mb-0 object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
