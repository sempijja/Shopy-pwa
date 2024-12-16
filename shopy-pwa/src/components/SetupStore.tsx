'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function SetupStore() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-6 text-center"
    >
      <h1 className="text-4xl font-bold">Turn viewers into real buyers</h1>
      <h3 className="text-xl">Set up your store and start taking orders immediately</h3>
      <motion.img
        src="/store-illustration.svg"
        alt="Store Illustration"
        className="w-64 h-64"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <Button className="w-64">
        Set-up Store
      </Button>
    </motion.div>
  )
}
