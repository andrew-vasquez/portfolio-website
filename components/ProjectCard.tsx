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
}

const ProjectCard = ({
  title,
  description,
  image,
  icons,
  iconName,
  link,
}: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...transitions.spring, delay: 0.1 },
    },
  };

  const hoverVariants = shouldReduceMotion
    ? {}
    : {
        y: -4,
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        transition: { duration: 0.3, ease: easing.smooth },
      };

  return (
    <motion.article
      className="bg-gradient-to-br from-gray-500/10 to-transparent h-full"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="border border-zinc-600 p-8 rounded-lg flex flex-col-reverse md:flex-row justify-between mb-7 shadow-xl h-full min-h-[400px] md:min-h-[200px]"
        whileHover={hoverVariants}
        style={{ willChange: "transform, box-shadow" }}
      >
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <motion.a
              className="text-xl inline-flex items-center gap-2 hover:opacity-60 transition mb-2"
              target="_blank"
              href={link}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 5,
                      transition: { duration: 0.2, ease: easing.smooth },
                    }
              }
              style={{ willChange: "transform" }}
            >
              <h3 className="text-xl font-semibold inline-block">{title}</h3>
              <motion.span
                className="text-zinc-400"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 45,
                        scale: 1.1,
                        transition: { duration: 0.2, ease: easing.bounce },
                      }
                }
                style={{ willChange: "transform" }}
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
                style={{ willChange: "transform" }}
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
            alt={title}
            width={208}
            height={128}
            className="w-full h-48 mb-5 shadow-xl rounded-lg md:w-52 md:h-32 md:mb-0 object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
