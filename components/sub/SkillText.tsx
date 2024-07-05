"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium mt-[100px] text-center mb-[75px]'
        >
           Ski
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {""}
            lls{" "}
          </span>
           
        </motion.div>
        
    </div>
  )
}

export default SkillText