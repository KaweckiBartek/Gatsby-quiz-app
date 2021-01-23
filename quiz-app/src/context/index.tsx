import React, { createContext, useContext, useState } from 'react';

export const ScoreCtx = createContext({
  score: 0,
  setScore: (arg: number) => {}
})

export const ScoreProvider = ({children}) => {
  const [ score, setScore ] = useState(0)
  return (
    <ScoreCtx.Provider value={{score, setScore}}>
      {children}
    </ScoreCtx.Provider>
  )
}

export const useScore = () => useContext(ScoreCtx)

