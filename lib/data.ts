import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import weatherAppImage from '@/public/weatherApp.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Lawrence Livermore Lab Internship',
    location: 'Livermore, CA',
    description:
      'I interned for eight months as a software engineer primarily working with front-end technologies.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Expected Graduation',
    location: 'Pomona, CA',
    description:
      'I will be graduating with a BS in Computer Science from Cal Poly Pomona in December 2024.',
    icon: React.createElement(CgWorkAlt),
    date: '2024',
  },
  {
    title: 'Looking for Work as a Full-Stack Developer',
    location: 'Irvine, CA',
    description:
      "I'm now looking for an internship or work as a full-stack developer. I've worked with React.js, Next.js, Vue.js, TypeScript, Routing, Pinia, Redux, Node.js, Supabase, and more.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'instagram-clone',
    description:
      'An Instagram clone created with Vue.js, JavaScript, Vite, Pinia, Ant Design Vue, Vue-Router, Vitest, and Supabase. (In-Progress)',
    tags: ['Vue.js', 'JavaScript', 'Vite', 'Pinia', 'Supabase'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'weather-app',
    description:
      'A weather app created with HTML, CSS, JavaScript, and the OpenWeatherMap API.',
    tags: ['JavaScript', 'CSS', 'HTML', 'OpenWeatherMap API'],
    imageUrl: weatherAppImage,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'React Router',
  'Node.js',
  'Git',
  'Tailwind',
  'SCSS',
  'Bootstrap',
  'MongoDB',
  'GraphQL',
  'Vue.js',
  'Pinia',
  'Vuex',
  'Express.js',
  'SQL',
  'Python',
  'Java',
  'Framer Motion',
  'Docker',
] as const;
