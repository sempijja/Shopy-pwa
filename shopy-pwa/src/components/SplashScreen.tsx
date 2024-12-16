'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SplashScreen() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleAuth = () => {
    setIsLoading(true)
    // Implement Google authentication logic here
    setTimeout(() => {
      router.push('/setup-store')
    }, 1000)
  }

  const handleWhatsAppAuth = () => {
    router.push('/whatsapp-auth')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-6"
    >
      <motion.img
        src="/logo.svg"
        alt="Shopy Logo"
        className="w-32 h-32"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <Button
        onClick={handleGoogleAuth}
        disabled={isLoading}
        className="w-64 bg-white text-black hover:bg-gray-100"
      >
        {isLoading ? 'Loading...' : 'Continue with Google'}
      </Button>
      <Button
        onClick={handleWhatsAppAuth}
        className="w-64 bg-green-500 hover:bg-green-600"
      >
        Continue with WhatsApp
      </Button>
    </motion.div>
  )
}
