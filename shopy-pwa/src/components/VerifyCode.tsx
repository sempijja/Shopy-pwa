'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function VerifyCode() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleVerify = () => {
    if (code.length !== 6) {
      setError('Please enter a valid 6-digit code')
      return
    }
    // Implement code verification logic here
    router.push('/setup-store')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-6"
    >
      <h1 className="text-2xl font-bold">Enter verification code</h1>
      <Input
        type="text"
        placeholder="6-digit code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-64"
        maxLength={6}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleVerify} className="w-64">
        Verify
      </Button>
    </motion.div>
  )
}
