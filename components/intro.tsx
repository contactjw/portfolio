'use client';

import Image from 'next/image';
import React from 'react';
import profile_pic from '@/public/profilepic.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm John. `}</span>
        {`I'm a`} <span className="font-bold">full-stack developer</span> and{' '}
        <span className="font-bold">student</span>. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js) and Vue.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/John_West_Resume.pdf"
          download={true}
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex items-center justify-center gap-3">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
            href="https://www.linkedin.com/in/johnjw1/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10"
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
