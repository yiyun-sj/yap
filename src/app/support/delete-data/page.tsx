'use client'
import { User } from '@supabase/supabase-js'
import { AlertTriangleIcon, Loader, RotateCcwIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCountdown, useLoadable } from '../../../../database/hooks'
import { supabase } from '../../../../database/supabase'

const validateEmail = (email: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

export default function Support() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')
  const [otpEmail, setOtpEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [countdown, setCountdown] = useCountdown()
  const [signInError, setSignInError] = useState('')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  const [isSendLoading, sendOTP] = useLoadable(async () => {
    const trimmedEmail = email.trim()
    if (!validateEmail(trimmedEmail))
      return setSignInError('Please enter a valid email address')
    setOtpEmail(trimmedEmail)
    const { error } = await supabase.auth.signInWithOtp({
      email: trimmedEmail,
      options: { shouldCreateUser: false },
    })
    if (error) {
      console.log(error)
      if (error.message.includes('Signups not allowed')) {
        setSignInError('This email does not belong to a Yap user.')
      } else {
        setSignInError(
          'Unexpected authentication error, please email us instead.'
        )
      }
    } else {
      setSent(true)
      setCountdown(60)
    }
  })

  const [isVerifyLoading, verifyOTP] = useLoadable(async () => {
    let data: User | null = null
    if (!user) {
      const { data: userData, error } = await supabase.auth.verifyOtp({
        email: otpEmail,
        token: otp,
        type: 'email',
      })
      data = userData.user
      if (error) {
        setSignInError(error.message)
      } else if (!data) {
        setSignInError(
          'Unexpected authentication error, please email us instead.'
        )
      } else {
        setUser(data)
      }
    }
    if (data) {
      const { error } = await supabase.from('supports').insert({
        type: 'deletion',
        message: `Data deletion request from ${data?.email}.`,
      })
      if (error) {
        setSignInError('Unexpected submission error, please email us instead.')
      } else {
        router.replace('/support/request-received')
      }
    }
  })

  const isLoading = isSendLoading || isVerifyLoading

  return (
    <main className='flex flex-1 flex-col items-center gap-4 p-8'>
      <text className='text-md font-body font-light'>
        Request for Data Deletion - Yap
      </text>
      <text className='text-xs font-body font-light max-w-96'>
        Note: To prevent spam, please use the same email you use to login to YAP
        to login here and create a data deletion request. Alternatively, you can
        email information.yap@gmail.com for support. Thanks!
      </text>
      <form
        className='flex flex-col gap-4 w-full max-w-80'
        onSubmit={(e) => {
          e.preventDefault()
          if (user || sent) {
            verifyOTP()
          } else {
            sendOTP()
          }
        }}
      >
        <div>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>
          <input
            id='email'
            type='email'
            className='text-sm  p-2 focus:outline-none w-full text-dark'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setSignInError('')
            }}
          />
        </div>
        {sent && !user && (
          <div>
            <label htmlFor='password' className='text-sm font-medium'>
              One-Time Password
            </label>
            <div className='flex gap-1 max-w-96'>
              <input
                id='password'
                type='password'
                className='text-sm p-2 focus:outline-none flex-1 text-dark'
                placeholder='One-Time Password'
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value)
                  setSignInError('')
                }}
              />
              <button
                className='bg-brand focus:outline-none h-9 w-9'
                disabled={countdown > 0}
              >
                {countdown > 0 ? (
                  countdown
                ) : (
                  <RotateCcwIcon size={20} className='m-2' />
                )}
              </button>
            </div>
          </div>
        )}
        {signInError && (
          <text className='flex items-center gap-2 text-error text-sm'>
            <AlertTriangleIcon size={16} className='text-error' />
            {signInError}
          </text>
        )}
        <button
          type='submit'
          className='bg-brand focus:outline-none font-medium text-sm w-full p-2 '
        >
          {isLoading ? (
            <Loader className='animate-spin' />
          ) : user ? (
            'Submit Request'
          ) : sent ? (
            'Verify & Submit'
          ) : (
            'Send OTP'
          )}
        </button>
      </form>
    </main>
  )
}
