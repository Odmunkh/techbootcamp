'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Бидний глобал дата
const squareData = [
  {
    id: 1,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/438980405_754060176857499_3222022777755802911_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=39qIhoqFDlEAb6fXYmQ&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAwrJA1xkTlsC1UPBkj9sRbcgoEiSBvRGgBC4iOc8dEtg&oe=662CB5D4'
  },
  {
    id: 2,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439032757_754060216857495_5430304203174801696_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7xC7_kswTMQAb6tp54G&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD05LNpb6upDx1KSPL1w05LlvBPsdLd1F2NGZQ56E9uYg&oe=662CAA74'
  },
  {
    id: 3,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439008074_754060220190828_2216783336742786970_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fRgYs91Z2oQAb5eMvye&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCnQ0Q-Cf-Y9qi5dEzqu34v-Z_sxTxZwj0ztR1vzLOw-A&oe=662CCEC8'
  },
  {
    id: 4,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439018298_754060200190830_3950449197090820872_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Y6Im99Sb6gAb4pEhZy&_nc_ht=scontent.fuln1-2.fna&oh=00_AfB2Yl-xTaGlO9-rAdqpihju-kFE1yoy_8cIKbbDELdl5g&oe=662CB446'
  },
  {
    id: 5,
    src: 'https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/439007869_751938747069642_6573661404727469830_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xa5_sHGXWvEAb6YUpFT&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAean6yxSOeO9ezuFLiexNiHjKEswx2_FbDp5iz9uk_ig&oe=662CA1E8'
  },
  {
    id: 6,
    src: 'https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/438037219_751262297137287_5008828732657572349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OHtRwX63q18Ab6yxbAw&_nc_ht=scontent.fuln1-1.fna&oh=00_AfClrlVALSzWoL6gSdmfprav1QfNtRElc647xGwp6wTI4A&oe=662CB23A'
  },
  {
    id: 7,
    src: 'https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/434945737_743232034606980_6819753158179944912_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=japIUvbfQBAAb5T2JqV&_nc_oc=AdiogPSwOxBhQEaW4vC-9nUJPAhlsDiMh7KD1HK7SBjqsEWoRBVApXnxgYAhlp3yeZ0&_nc_ht=scontent.fuln1-1.fna&oh=00_AfDZEweqR1561QC_RibO38TsPMdvzkBUtKNC5ggJKKNUYg&oe=662CA2B2'
  },
  {
    id: 8,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/434936783_743232067940310_1666311171942767203_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXhan4o-O8AAb4E-hyq&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCLE3Xzp939NeVG_3ZBebtn3f6Jbzl1sroa8e9BJypsVw&oe=662CA184'
  },
  {
    id: 9,
    src: 'https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/434202708_739420188321498_5392928617375706692_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Z8QfEsCtUyEAb4RyPTs&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAGKmrG5eimivU_LsVZt3DXPZkPw_UOPjWHFCtFo1I91w&oe=662CD14F'
  },
  {
    id: 10,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/434275260_739420161654834_8880485077164389997_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9uvGcAqh7QIAb5c2iQh&_nc_ht=scontent.fuln1-2.fna&oh=00_AfBuqaaeszkRgJiiH3xBxgcK8fwijMTZHrSP9w8K1wngdA&oe=662CA307'
  },
  {
    id: 11,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/434198251_739420134988170_1066939533847871022_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yHSbefobfUwAb4pXczE&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD3WSH2GjDzXlFLMiAo2aNFLNWCvMYXW0PWGMj3mO0UfQ&oe=662CA1B8'
  },
  {
    id: 12,
    src: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/434569552_739076751689175_6950771016344881054_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VQ-RvcZfBYAAb6_PtmC&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD5S6fF8TFpV4D8koml2MFrFvBF-mb0si4rGs73psLPrQ&oe=662CBC8F'
  }
]

// Датагаа энд тэнд оруулаад индексээр нь солино
const shuffle = (array: any) => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }
  ;[]

  return array
}

const Day2 = () => {
  const [squares, setSquares] = useState(shuffle(squareData)) // Дотоод дата

  // 5 секунд тутам shuffle ийг ажиллуулах буюу дахин энд тэнд нь оруулна
  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prevSquares: any) => shuffle(prevSquares.slice()))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
    <div className='h-screen z-10 relative grid grid-cols-4 grid-rows-4 gap-1 w-screen p-5 text-black'>
      <motion.div
        className='col-span-4 whitespace-nowrap w-full justify-center text-2xl font-bold flex items-center'
        variants={splitParentVariants}
        initial='initial'
        whileHover='hover'
      >
        {'Our BOOTCAMP memory '.split('').map((eachAlphabet: any) => (
          <motion.div
            className='flex'
            variants={splitParentVariants}
            initial='initial'
            whileHover='hover'
          >
            {eachAlphabet.split('').map((eachAlphabet: any) => (
              <motion.span variants={splitChildrenVariants}>
                {eachAlphabet === ' ' ? (
                  <span className='w-2 inline-flex'></span>
                ) : (
                  eachAlphabet
                )}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
      {squares.map((square: any) => (
        <motion.img
          src={square.src}
          key={square.id}
          layout
          className='w-full z-20 relative h-full object-cover'
          transition={{
            type: 'spring',
            duration: 3
          }}
        />
      ))}
    </div>
  )
}

export default Day2
