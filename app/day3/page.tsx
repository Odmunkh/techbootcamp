'use client'

import { AnimatePresence, delay, motion, useAnimate } from 'framer-motion'
import { useState } from 'react'

const services = ['Animated website', 'UI/UX design', '3D animation']

const imageSources = [
  'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/438980405_754060176857499_3222022777755802911_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=39qIhoqFDlEAb6fXYmQ&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAwrJA1xkTlsC1UPBkj9sRbcgoEiSBvRGgBC4iOc8dEtg&oe=662CB5D4',
  'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439032757_754060216857495_5430304203174801696_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7xC7_kswTMQAb6tp54G&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD05LNpb6upDx1KSPL1w05LlvBPsdLd1F2NGZQ56E9uYg&oe=662CAA74',
  'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439008074_754060220190828_2216783336742786970_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fRgYs91Z2oQAb5eMvye&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCnQ0Q-Cf-Y9qi5dEzqu34v-Z_sxTxZwj0ztR1vzLOw-A&oe=662CCEC8'
]

const Day3 = () => {
  const [activeImage, setActiveImage] = useState(1)
  const [scope, animate] = useAnimate()

  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.5,
        delay: 0.5,
        delayChildren: 0.5
      }
    }
  }

  const eachServiceVariables = {
    initial: {
      x: -1000,
      scale: 1
    },
    animate: {
      x: 0
    }
  }

  const eachImageVariants = {
    initial: {
      opacity: 0,
      x: 1000
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      x: 1000,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <motion.div ref={scope} className='w-screen h-screen grid grid-cols-2'>
      <div className='flex flex-col p-20'>
        <motion.span
          variants={eachServiceVariables}
          initial='initial'
          animate='animate'
          className='text-3xl font-semibold'
        >
          Our services:
        </motion.span>
        <motion.div
          variants={parentVariants}
          initial='initial'
          whileInView='animate'
          className='flex flex-col items-start h-min w-min whitespace-nowrap'
        >
          {services.map((service: any, index: number) => (
            <motion.button
              onClick={() => setActiveImage(index + 1)}
              variants={eachServiceVariables}
              whileHover={{
                scale: 1.5
              }}
            >
              - {service}
            </motion.button>
          ))}
        </motion.div>
      </div>
      <div className='flex flex-col max-h-screen relative overflow-hidden'>
        <AnimatePresence>
          {activeImage !== 0 && (
            <motion.img
              variants={eachImageVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              id={`image-${activeImage}`}
              key={`image-${activeImage}`}
              src={imageSources[activeImage - 1]}
              className='size-full object-cover absolute inset-0'
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Day3
