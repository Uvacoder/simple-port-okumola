import React from 'react'
import { motion } from 'framer-motion'

import Card from './Card'
import { data } from '../assets/data/project-data'

const initial = {opacity: 0,scale: 0.5}
const animate = {opacity: 1,scale: 1}
const transition = {default: {duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
const scale = {type: 'spring',stiffness: 100,dumping: 5,restDelta: 0.001}

const initialDiv = {x: '-100%',opacity: 0,scale: 0.5}
const animateDiv = {x: 0, opacity: 1,scale: 1,transition: {duration: 2, ease: 'easeInOut'}}

const Projects = () => {

    return (
        <div className='flex flex-col items-center text-center bg-black px-6 py-10' id="projects">
            <motion.div initial={initialDiv} whileInView={animateDiv} className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-primary outline-text'>
                    PROJECTS
                </p>
            </motion.div>
           <p className='text-2xl text-white'>
                These are some of the projects I've worked on.
            </p>

           <div className='flex flex-wrap items-center justify-center gap-8 mt-12'>
                {data.map((item) => (
                    <motion.div initial={initial} whileInView={animate} transition={{default: transition, scale: scale}} key={item.name}>
                        <Card {...item} />
                    </motion.div>
                ))}
            </div>
       </div>
    )
}

export default Projects