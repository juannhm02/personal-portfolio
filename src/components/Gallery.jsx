import React, { useState } from "react";
import styles from "../style";
import { gallery } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Gallery
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient top-40" />

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-8 md:mt-16 w-full">
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-[16px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setSelected(item.image)}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full h-auto block rounded-[16px] transition-transform duration-300 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-6 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-teal-200"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <AiOutlineClose size="1.8rem" />
            </button>
            <motion.img
              src={selected}
              alt=""
              className="max-h-full max-w-full rounded-[12px] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
