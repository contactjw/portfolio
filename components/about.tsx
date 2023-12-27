'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        {`I'm`} currently a junior-year student majoring in{' '}
        <span className="font-medium">Computer Science</span> at{' '}
        <span className="font-medium">Cal Poly Pomona</span> with over a year of
        relevant internship experience. Most recently, I finished an eight-month
        internship with Lawrence Livermore National Laboratory, working as a
        software engineer intern. I have a love for{' '}
        <span className="font-medium">full-stack development</span> and{' '}
        <span className="font-medium">creative problem-solving.</span> My core
        stack is{' '}
        <span className="font-medium">
          React with TypeScript, Next.js, Node.js, and MongoDB
        </span>
        . {`I'm`} also familiar with vanilla JavaScript, Vue.js, Vite,
        Vue-Router, Pinia, Ant Design Vue, Vitest, Supabase, and Docker. I have
        a passion for learning and exploring new technologies, which has
        improved my adaptability as a developer. {`I'm`} currently on the
        lookout for an{' '}
        <span className="font-medium">internship and/or co-op position</span> as
        a software developer.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I enjoy meditating to
        stay present, being physically active, playing video games, watching
        movies, and spending time with family and loved ones. I also enjoy{' '}
        <span className="font-medium">learning new things</span> when{' '}
        {`I'm not`} programming. {`I'm`} currently learning{' '}
        <span className="font-medium">Mandarin Chinese</span>, and though{' '}
        {`I'm`} still at a beginner level (just passing HSK1), I really enjoy
        it. {`I'm`} also trying to add more complex dishes to my cooking
        ventures as well.
      </p>
    </motion.section>
  );
}
