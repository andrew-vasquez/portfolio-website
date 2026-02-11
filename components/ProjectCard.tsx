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
  featured?: boolean;
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

const iconHoverEnabled = {
  scale: 1.1,
  transition: { duration: 0.2, ease: easing.smooth },
};

const ProjectCard = ({
  title,
  description,
  image,
  icons,
  iconName,
  link,
  number,
  featured = false,
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
        className={`border border-white/[0.06] bg-[#111116] rounded-lg flex flex-col relative ${
          featured ? "p-0 overflow-hidden mb-5" : "p-6 mb-5 h-full"
        }`}
        whileHover={hoverVariants}
      >
        {/* Screenshot */}
        <motion.div
          className={featured ? "" : "mb-4"}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing.smooth }}
        >
          <Image
            src={image}
            alt={`Screenshot of ${title} project`}
            width={672}
            height={featured ? 384 : 300}
            className={`w-full object-cover shadow-xl ${
              featured
                ? "h-48 sm:h-64"
                : "h-40 rounded-lg"
            }`}
            loading={featured ? "eager" : "lazy"}
          />
        </motion.div>

        {/* Content */}
        <div className={`flex-1 min-w-0 flex flex-col ${featured ? "p-6 pt-4" : ""}`}>
          <span
            className="text-zinc-700 text-[10px] font-sans tracking-[0.25em] select-none tabular-nums mb-2"
            aria-hidden="true"
          >
            {String(number).padStart(2, "0")}
          </span>
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
            className="flex items-center gap-3 mt-auto"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {icons.map((icon, index) => (
              <motion.div
                key={`${title}-icon-${index}`}
                whileHover={shouldReduceMotion ? {} : iconHoverEnabled}
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
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
