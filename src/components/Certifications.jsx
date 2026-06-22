import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import styles from "../style";
import { LinkPreview } from "./LinkPreview";

const CertificationCard = (props) => (
  <motion.div
    className="flex flex-row items-center justify-between px-6 py-4 rounded-[20px] transition-colors transition-shadow duration-300 border hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20 dark:border-gray-700 dark:hover:border-transparent feature-card"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="flex flex-col">
      <p className="font-poppins font-semibold text-white text-[16px] leading-[26px]">
        {props.title}
      </p>
      <p className="font-poppins italic font-normal text-dimWhite text-[14px] leading-[24px]">
        {props.issuer}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[13px] leading-[24px]">
        {props.date}
      </p>
    </div>

    {props.link && (
      <LinkPreview url={props.link}>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-dimWhite hover:text-teal-200 hover:scale-110 transition-all ml-4 shrink-0"
        >
          <BsLink45Deg size="1.5rem" className="inline" />
        </a>
      </LinkPreview>
    )}
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certifications">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Certifications
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
