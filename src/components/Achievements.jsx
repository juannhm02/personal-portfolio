import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { motion } from "framer-motion";
import { achievements } from "../constants";
import styles from "../style";
import { LinkPreview } from "./LinkPreview";

const AchievementIcon = ({ src, alt }) => (
  <div className="w-[52px] h-[52px] mt-1 mb-1 rounded-full bg-dimBlue flex items-center justify-center overflow-hidden shrink-0">
    <img src={src} alt={alt} className="w-[78%] h-[78%] object-contain" />
  </div>
);

const Achievements = () => {
  return (
    <section
      className="bg-primary text-white mt-5 md:mt-10 relative"
      id="achievements"
    >
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
            Highlights
          </h1>
        </div>
      </div>

      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <div className="container px-2 py-10 mx-auto mb-8">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  index={index}
                  {...achievement}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-around px-6 py-4 rounded-[20px] transition-colors transition-shadow duration-300 border hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20 dark:border-gray-700 dark:hover:border-transparent"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AchievementIcon src={props.icon} alt={props.event} />

      <div className="flex flex-col justify-end mt-4 mb-1">
        <p className="font-poppins font-normal text-xl text-white leading-[24px] mb-2">
          {props.event}
        </p>
        <p className="font-poppins italic font-normal text-lg text-gradient mb-3">
          {props.position}
        </p>

        {props.content1 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            • {props.content1}
          </p>
        )}
        {props.content2 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            • {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-4">
            • {props.content3}
          </p>
        )}
      </div>

      <div className="flex flex-row mb-2 font-poppins font-normal text-dimWhite gap-3">
        {props.article && (
          <LinkPreview url={props.article}>
            <a
              href={props.article}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
            >
              <TiNews size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}

        {props.github && (
          <LinkPreview url={props.github}>
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
            >
              <AiFillGithub size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}

        {props.project && (
          <LinkPreview url={props.project}>
            <a
              href={props.project}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
            >
              <BsLink45Deg size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
