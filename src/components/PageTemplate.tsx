import React from 'react'
import { motion,  HTMLMotionProps, createMotionComponent, AnimatePresence } from 'framer-motion'
import Home from './Home/Home'
import Intro from './intro/Intro'
import RouteLoader from './Loaders/RouteLoader'


export default function PageTemplate() {
  return (
      <div>
        <Home />
      </div>
  )
}
