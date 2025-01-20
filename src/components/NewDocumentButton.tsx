'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useTransition } from 'react'
import { createNewDocument } from '../../actions/actions'
import { useState } from 'react'
import { useAuth } from '@clerk/nextjs'

const NewDocumentButton = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { isSignedIn, isLoaded } = useAuth()

  const handleCreateNewDocument = async () => {
    setErrorMessage(null)

    if (!isLoaded) return
    if (!isSignedIn) {
      window.location.href = `https://accounts.clarity-capture.com/sign-in?redirect_url=${encodeURIComponent(
        window.location.href
      )}`
      return
    }

    startTransition(async () => {
      const response = await createNewDocument()

      if (response.error) {
        setErrorMessage(response.error)
      } else {
        const { docId } = response
        router.push(`/doc/${docId}`)
      }
    })
  }

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? 'Creating...' : 'Create a new document'}
      </Button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default NewDocumentButton