'use client'
import React, { startTransition } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  stagger,
  useMotionValue,
  useSpring
} from 'framer-motion'
import { transcode } from 'buffer'

function Day1() {
  const inputDevScale = useMotionValue(1)
  const inputDevScaleSpring = useSpring(inputDevScale)
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 1
    },
    animate: {
      opacity: 0.5,
      transition: {
        duration: 1,
        delay: 0.5,
        delayChildren: 1,
        // when : 'beforeChildren'
        staggerChildren: 0.5,
        staggerDirection: -1
      }
    },
    whileHover: {
      opacity: 1,
      transition: {
        duration: 5
      }
    },
    whileTap: {
      scale: 5
    }
  }
  const buttonVariants = {
    initial: {
      scale: 1
    },

    hover: {
      scale: 1.2,
      transition: {
        type: 'spring'
      }
    },
    tap: {
      scale: 0.7,
      transition: {
        type: 'spring'
      }
    }
  }
  const imageVar = {
    initial: {
      scale: 0.5
    },
    animate: {
      scale: 1
    }
  }
  return (
    // <div className="from-blue-500 to-blue-700 bg-gradient-to-r w-2/3 h-60 rounded-xl my-20 mx-10 px-5 py-3 ring-[20px] flex justify-center items-center text-center text-white">
    <div className='flex justify-center'>
      <motion.div
        className='relative w-full h-full flex justify-center'
        // drag
        // // dragTransition={ {

        // //   max : 100,
        // //   min : -100,
        // //   timeConstant :5,
        // //   bounceDamping : 10
        // // }}
        // transition = {{
        //   type : "inertia",
        //   velocity : 0.1,
        //   mass : 1000
        // }}
      >
        <div className='from-blue-500 to-blue-700 bg-gradient-to-r w-2/3 h-60 rounded-xl my-20 mx-10 px-5 py-3 ring-[20px] flex justify-center items-center text-center text-white'>
          <div className='flex flex-col gap-3 items-center'>
            <span
              className='text:sm transition-all text-5xl font-bold'
              id='first-span'
            >
              Already working together?
            </span>
            <span className='text-xs font-thin' id='second-span'>
              Log into your account and connect with others , your Lorems
            </span>
            <span className='text-xs font-thin' id='third-span'>
              Lorem ipsum dolor sit amet.
            </span>
            <motion.div
              style={{
                scale: inputDevScaleSpring
              }}
              transition={{
                type: 'spring'
              }}
              className='flex justify-between items-center h-10 w-96 text-black rounded-3xl text-center bg-blue-300/40 px-1 ring-2'
            >
              <input
                className='bg-transparent px-2 outline-none'
                placeholder='example@example.com'
                id='input'
              ></input>
              <motion.button
                variants={buttonVariants}
                initial='initial'
                whileHover='hover'
                whileTap='tap'
                transition={{
                  type: 'spring'
                }}
                onClick={() => {
                  animate('#input', { opacity: 0 }, { duration: 2 })
                  animate('#first-span', { opacity: 0 }, { duration: 2 })
                  animate('#second-span', { rotate: 360 }, { duration: 2 })
                  animate(
                    '#third-span',
                    { scale: 2, color: 'red' },
                    { duration: 2 }
                  )
                }}
                className='size-8 rounded-[30px] bg-white flex items-center justify-center'
                // onClick={() => {
                //   window.open("https://www.facebook.com")
                // }}
              >
                <img src='/arrowright.svg' className='w-5' />
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={imageVariants}
          className='absolute group bottom-3 flex gap-10 items-shadow-xl justify-center *:rounded-full size-20 border border-black'
          initial='initial'
          animate='animate'
          whileHover='whileHover'
          whileTap='whileTap'
        >
          <motion.img
            variants={imageVar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgFGRCL5etayoPvFybAaBa5GQkkSQ_19iOOHgKqwYA&s'
            className='group-hover:border-black border-white rounded-full peer'
          />
          <motion.img
            variants={imageVar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgFGRCL5etayoPvFybAaBa5GQkkSQ_19iOOHgKqwYA&s'
            className='group-hover:border-yellow-500 border-white hover:cursor-size'
          />
          <motion.img
            variants={imageVar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgFGRCL5etayoPvFybAaBa5GQkkSQ_19iOOHgKqwYA&s'
            className=''
          />
          <motion.img
            variants={imageVar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgFGRCL5etayoPvFybAaBa5GQkkSQ_19iOOHgKqwYA&s'
            className='group-hover:border-blue-500 border-4 border-white hover:cursor-wait'
          />
          <motion.img
            variants={imageVar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbgFGRCL5etayoPvFybAaBa5GQkkSQ_19iOOHgKqwYA&s'
            className='group-hover:border-green-500 border-4 border-white hover:cursor-ns-resize'
          />
        </motion.div>
      </motion.div>
      <motion.div
        className='border border-black-400 bg bg-black w-1/3 h-20 fixed : bottom-16'
        drag
        dragTransition={{
          max: 100,
          min: 50
        }}
        transition={{
          type: 'inertia'
        }}
      >
        {' '}
      </motion.div>
      <motion.div className='rounded-full1'> </motion.div>
    </div>
  )
}

export default Day1
