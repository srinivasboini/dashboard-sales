"use client"

import { SWRConfig } from 'swr'

export function SWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig 
      value={{
        onError: (error, key) => {
          console.error(`SWR Error for ${key}:`, error)
        }
      }}
    >
      {children}
    </SWRConfig>
  )
} 