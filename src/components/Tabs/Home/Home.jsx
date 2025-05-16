import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  {
    id: "bn",
    lines: [
      [
        <span className="text-[#c586c0]">হাই,</span>,
        <span className="text-[#ffd602]">আমি</span>,
        <span className="text-[#9cdcfe]">মোহাম্মাদ</span>,
        <span className="text-[#9cdcfe]">আবু</span>,
        <span className="text-[#9cdcfe]">বকর</span>
      ],
      [
        <span className="text-[#ce9178]">আমি</span>,
        <span className="text-[#ce9178]">একজন</span>,
        <span className="text-[#4ec9b0]">মার্ন</span>,
        <span className="text-[#4ec9b0]">স্ট্যাক</span>,
        <span className="text-[#ce9178]">ডেভেলপার</span>,
        <span className="text-[#ce9178]">বাংলাদেশ</span>,
        <span className="text-[#ce9178]">থেকে</span>
      ]
    ]
  },
  {
    id: "en",
    lines: [
      [
        <span className="text-[#c586c0]">hi,</span>,
        <span className="text-[#ffd602]">i</span>,
        <span className="text-[#ffd602]">am</span>,
        <span className="text-[#9cdcfe]">md</span>,
        <span className="text-[#9cdcfe]">abu</span>,
        <span className="text-[#9cdcfe]">bokar</span>
      ],
      [
        <span className="text-[#ce9178]">i</span>,
        <span className="text-[#ce9178]">am</span>,
        <span className="text-[#ce9178]">a</span>,
        <span className="text-[#4ec9b0]">mern</span>,
        <span className="text-[#4ec9b0]">stack</span>,
        <span className="text-[#ce9178]">developer</span>,
        <span className="text-[#ce9178]">from</span>,
        <span className="text-[#ce9178]">bangladesh</span>
      ]
    ]
  },
  {
    id: "zh",
    lines: [
      [
        <span className="text-[#c586c0]">你好,</span>,
        <span className="text-[#ffd602]">我是</span>,
        <span className="text-[#9cdcfe]">穆罕默德</span>,
        <span className="text-[#9cdcfe]">阿布</span>,
        <span className="text-[#9cdcfe]">博卡尔</span>
      ],
      [
        <span className="text-[#ce9178]">我是一个</span>,
        <span className="text-[#4ec9b0]">默恩</span>,
        <span className="text-[#4ec9b0]">斯塔克</span>,
        <span className="text-[#ce9178]">开发商</span>,
        <span className="text-[#ce9178]">来自</span>,
        <span className="text-[#ce9178]">孟加拉国</span>
      ]
    ]
  }
];

const stagger = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25
    }
  })
};

export const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="height w-full text-center border-b-[.5px] flex items-center justify-between text-sm">
      <div className="border-r-[.5px] h-full w-1/6 bg-[#181818]" />

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={languages[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 px-4"
          >
            <div className="flex flex-wrap justify-center gap-x-1">
              {languages[index].lines[0].map((word, i) => (
                <motion.span key={i} custom={i} variants={stagger} initial="hidden" animate="visible">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-1">
              {languages[index].lines[1].map((word, i) => (
                <motion.span key={i} custom={i} variants={stagger} initial="hidden" animate="visible">
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="border-l-[.5px] h-full w-1/6 bg-[#181818]" />
    </div>
  );
};
