'use client'
import { ObjectLanguageProps, titlesPt, titlesUSA } from '@/core'
import React, { createContext, useContext, useEffect, useState } from 'react'

type AppContextProps = {
  language: string
  setLanguage: any
  selectedLanguage: ObjectLanguageProps
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>('pt-br')
  const [selectedLanguage, setSelectedLanguage] = useState(titlesPt)

  useEffect(() => {
    setSelectedLanguage(language === 'pt-br' ? titlesPt : titlesUSA)
  }, [setLanguage, language])

  return (
    <AppContext.Provider
      value={{
        setLanguage,
        language,
        selectedLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export { AppContext, AppProvider, useAppContext }
