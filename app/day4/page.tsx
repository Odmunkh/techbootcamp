'use client'

import React, { useEffect, useState } from 'react'
import { Reorder, motion, useMotionValue, useSpring } from 'framer-motion'

const Day4 = () => {
  const [items, setitems] = useState([
    'MStars',
    'Anungoo',
    'Selbe',
    'DDish',
    'Unitel'
  ])
  return (
    <motion.div className='bg-[#2a385c] w-screen min-h-screen text-white flex flex-col items-center justify-center gap-5'>
      {items.map((item) => (
        <Eachbox item={item} key={item} />
      ))}
    </motion.div>
  )
}
const Eachbox = ({ item }: { item: any }) => {
  // const opacity = useMotionValue(0)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x)
  const ySpring = useSpring(y)
  const handleMouseMove = (event: any) => {
    const boxEvent = event.currentTarget!.getBoundingClientRect()
    const mouseY = event.clientY
    const mouseX = event.clientX
    const boxWidth = boxEvent.width
    const boxHeight = boxEvent.height
    const mouseYOnBox = mouseY - boxEvent.top
    const mouseXOnBox = mouseX - boxEvent.left
    const isMouseAtTop = mouseYOnBox < boxHeight / 2
    const isMouseAtBottom = mouseYOnBox > boxHeight / 2
    const isMouseAtLeft = mouseXOnBox < boxWidth / 2
    const isMouseAtRight = mouseXOnBox > boxWidth / 2
    if (isMouseAtTop) {
      y.set(5)
    }
    if (isMouseAtBottom) {
      y.set(-5)
    }

    if (isMouseAtLeft) {
      x.set(5)
    }
    if (isMouseAtRight) {
      x.set(-5)
    }
    // const boxacity = mouseXOnBox / boxEvent.height
    // opacity.set(boxacity)
    // console.log(boxacity)
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
    <motion.div
      key={item}
      className='flex'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 1,
        bounce: 1,
        velocity: 100
      }}
      viewport={{ once: false }}
      onMouseMove={handleMouseMove}
      style={{ x: xSpring, y: ySpring }}
    >
      <>
        <motion.div
          className='flex'
          variants={splitParentVariants}
          initial='initial'
          whileHover='hover'
        >
          {item.split('').map((eachAlphabet: any) => (
            <motion.span
              variants={splitChildrenVariants}
              // initial={{ clipPath: 'circle(100%)' }}
              // whileHover={{ clipPath: 'circle(10%)' }}
              className='h-wull w-full text-4xl border-2 bg-gradient-to-r from-cyan-600 to-blue-900 p-4 rounded-full'
            >
              {eachAlphabet}
            </motion.span>
          ))}{' '}
        </motion.div>
      </>
    </motion.div>
  )
}
export default Day4
