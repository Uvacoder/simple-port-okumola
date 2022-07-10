import React, { useEffect, useState } from 'react'
import { FiCodepen, FiGithub, FiLinkedin, FiMail ,FiTwitter } from 'react-icons/fi'

import { Button, IconButton } from '.'

const Contact = () => {
    const [showSection, setShowSection] = useState(false)
    const [lastYPosition, setLastYPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const positionY = window.scrollY
            const isScrolling = positionY > lastYPosition

            setShowSection(isScrolling)
            setLastYPosition(positionY)
        }
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPosition])

    return (
        <div className='flex flex-col items-center text-center bg-main-bg dark:bg-main-dark-bg px-6 py-10' id="contact">
            <p className='text-6xl font-medium text-primary mb-10'>
                Get In Touch
            </p>

            <p className='text-3xl text-gray-600 dark:text-white my-4'>
                Looking to hire? Have a project?
            </p>

            <p className='text-xl text-gray-600 dark:text-white my-4'>
                I&apos;m currently open to junior developer roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I&apos;ll try to get back as soon as possible.
            </p>

            <Button to='mailto:smsnmicheal@gamil' text='GET IN TOUCH' icon={<FiMail />} mt={64} mb={64} />
            <ul className='flex items-center justify-between'>
                <li className='mx-4'>
                    <IconButton to='https://codepen.io/pablo-clueless' icon={<FiCodepen />} large />
                </li>
                <li className='mx-4'>
                    <IconButton to='https://github.com/pablo-clueless' icon={<FiGithub />} large />
                </li>
                <li className='mx-4'>
                    <IconButton to='https://linkedin.com/in/samson-okunola/' icon={<FiLinkedin />} large />
                </li>
                <li className='mx-4'>
                    <IconButton to='https://twitter.com/pablo_clueless' icon={<FiTwitter />} large />
                </li>
            </ul>
        </div>
    )
}

export default Contact