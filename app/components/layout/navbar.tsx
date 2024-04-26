'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const texts = ['MStars Hub', 'Bootcamp #1', 'Framer Motion', 'Tailwind CSS']
const menuTexts = ['Home', 'Services', 'About us']

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTextIndex, setActiveTextIndex] = useState(0)

  useEffect(() => {
    const textInterval = setInterval(() => {
      const newIndex = (activeTextIndex + 1) % texts.length

      setActiveTextIndex(newIndex)
    }, 5000)

    return () => clearInterval(textInterval)
  }, [activeTextIndex])

  const textParentVariants = {
    initial: {},
    animate: {},
    exit: {}
  }
  const textChildrenVariants = {
    initial: {
      y: 40
    },
    animate: {
      y: 0
    },
    exit: {
      y: -40
    }
  }

  const splitParentVariants = {
    initial: {
      x: 0
    },
    hover: {
      x: 20,
      transition: {
        type: 'spring',
        staggerChildren: 0.1
      }
    }
  }

  const splitChildrenVariants = {
    initial: {
      x: 0
    },
    hover: {
      x: -20
    }
  }

  return (
    <div className='fixed w-full z-20 top-0 start-0 border-b border-gray-200 bg-slate-100 shadow-xl'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex relative z-50 text-3xl font-bold mb-6'>
          <AnimatePresence>
            <motion.div
              key={'parent-' + activeTextIndex}
              variants={textParentVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='flex whitespace-nowrap overflow-hidden absolute left-0'
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                type: 'spring'
              }}
            >
              <span> 🚀 </span>
              {texts[activeTextIndex].split('').map((eachAlphabet, index) => (
                <motion.span
                  className='ml-2 inline-flex'
                  key={'children-' + activeTextIndex + eachAlphabet + index}
                  variants={textChildrenVariants}
                >
                  {eachAlphabet === ' ' ? (
                    <span className='w-1.5 inline-flex'></span>
                  ) : (
                    eachAlphabet
                  )}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className='flex flex-col gap-2 size-8 z-50'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <motion.img
            src='/svgs/bar.svg'
            className='w-8'
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? 6.5 : 0
            }}
          />
          <motion.img
            src='/svgs/bar.svg'
            className='w-8'
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? -6.5 : 0
            }}
          />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key={'menu'}
              className='absolute inset-0 w-screen h-screen text-7xl gap-20 *:border-b-2 *:pb-5 *:border-black bg-menu bg-white z-40 flex flex-col justify-center p-20'
              initial={{ y: -1000 }}
              animate={{
                y: 0
              }}
              exit={{
                y: 1000
              }}
              transition={{
                duration: 1.5,
                type: 'spring'
              }}
            >
              {menuTexts.map((eachMenuText) => (
                <motion.div
                  className='flex'
                  variants={splitParentVariants}
                  initial='initial'
                  whileHover='hover'
                >
                  {eachMenuText.split('').map((eachAlphabet: any) => (
                    <motion.span variants={splitChildrenVariants}>
                      {eachAlphabet}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
