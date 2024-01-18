'use client';

import Image from 'next/image';
import React from 'react';
import profile_pic from '@/public/profilepic.png';
import cloud_pic from '@/public/cloud.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.h1
        className="mb-8 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hey, I'm John! `}</span>
      </motion.h1>

      <motion.div
        animate={{ x: ['6%', '100%', '6%'] }}
        transition={{
          duration: 77,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="z-5 absolute left-[-8rem] top-[4rem] !w-screen"
      >
        <Image
          src={cloud_pic}
          alt="cloud"
          quality="95"
          priority={true}
          className="opacity-70 absolute left-[0] h-36 w-36 object-cover"
        />
      </motion.div>

      <motion.p
        className="mb-12 mt-5 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {`I'm a`} full-stack developer and student who loves to create
        websites and apps. My focus is React (Next.js) and Vue.js
      </motion.p>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={profile_pic}
              alt="Photo of John West"
              quality="95"
              priority={true}
              className="border-solid border-2 border-white mb-14 h-36 w-36 rounded-full object-cover shadow-xl"
            />
          </motion.div>
          <motion.div
            animate={{ x: ['106%', '0%', '106%'] }}
            transition={{
              duration: 111,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="z-5 absolute right-[-40rem] top-[15rem] !w-screen"
          >
            <Image
              src={cloud_pic}
              alt="cloud"
              quality="95"
              priority={true}
              className="opacity-70 absolute left-[0] h-36 w-36 object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/John_West_Resume.pdf"
          download={true}
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex items-center justify-center gap-3">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/johnjw1/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/contactjw"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
