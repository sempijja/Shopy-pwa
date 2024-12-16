'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function WhatsAppAuth() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handleVerify = () => {
    if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
      setError('Please enter a valid phone number')
      return
    }
    router.push('/verify-code')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-6"
    >
      <h1 className="text-2xl font-bold">Enter your WhatsApp number</h1>
      <Input
        type="tel"
        placeholder="e.g., +1234567890"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-64"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleVerify} className="w-64">
        Verify
      </Button>
    </motion.div>
  )
}
