import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "../style";
import { gallery } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Gallery = () => {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8 * direction;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const showPrev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % gallery.length));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, showPrev, showNext]);

  return (
    <section id="gallery">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Gallery
      </h1>

      <div className="relative mt-8 mb-4 py-4">
        <div className="absolute z-[0] w-[40%] h-[80%] -left-[15%] rounded-full blue__gradient top-0 pointer-events-none" />

        <button
          onClick={() => scrollByAmount(-1)}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-3 w-10 h-10 rounded-full bg-black/60 hover:bg-teal-200 hover:text-primary text-white items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <AiOutlineLeft size="1.2rem" />
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar relative z-[1] flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-2"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              className="snap-start flex-shrink-0 w-[150px] sm:w-[200px] md:w-[230px] aspect-square rounded-[14px] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollByAmount(1)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 w-10 h-10 rounded-full bg-black/60 hover:bg-teal-200 hover:text-primary text-white items-center justify-center transition-colors"
          aria-label="Next"
        >
          <AiOutlineRight size="1.2rem" />
        </button>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-6 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-teal-200"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              <AiOutlineClose size="1.8rem" />
            </button>

            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white hover:text-teal-200"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
            >
              <AiOutlineLeft size="2rem" />
            </button>

            <motion.img
              key={selectedIndex}
              src={gallery[selectedIndex].image}
              alt=""
              className="max-h-full max-w-full rounded-[12px] object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white hover:text-teal-200"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
            >
              <AiOutlineRight size="2rem" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
