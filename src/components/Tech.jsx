import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const SkillBox = ({ index, icon, name }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className='w-28 h-28 rounded-xl border-2 border-[#915eff] p-4 flex flex-col items-center justify-center gap-2 hover:shadow-card cursor-pointer transition-all'
  >
    <img src={icon} alt={name} className='w-16 h-16 object-contain' />
    <p className='text-white text-[12px] text-center font-bold'>{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <SkillBox 
            key={technology.name}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
