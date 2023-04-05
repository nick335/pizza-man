import React from 'react'
import { motion,  HTMLMotionProps, createMotionComponent, AnimatePresence } from 'framer-motion'
import Home from './Home/Home'
import Intro from './intro/Intro'


export default function PageTemplate() {
  return (
      <div>
        {/* <Intro /> */}
        <Home />
      </div>
  )
}
