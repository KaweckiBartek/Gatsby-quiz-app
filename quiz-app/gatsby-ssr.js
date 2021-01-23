import React from 'react'
import { ScoreProvider } from './src/context'

export const wrapRootElement = ({ element }) => {
  return (
    <ScoreProvider>
      {element}
    </ScoreProvider>
  )
}