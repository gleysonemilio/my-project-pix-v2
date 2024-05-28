'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import Link from 'next/link'

import MenuLanguage from '../MenuLanguage'
import { useAppContext } from '@/hooks/AppContext'

export default function Hearder() {
  const { setTheme, theme } = useTheme()
  const { selectedLanguage } = useAppContext()

  return (
    <header className="flex align-center justify-between px-12 py-6">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6381801141109234"
        crossOrigin="anonymous"
      ></script>
      <div className="flex center gap-3">
        <Link href={'/'}>PIX</Link>
      </div>

      <div className="grid grid-cols-2 place-content-center gap-3">
        <div>
          <MenuLanguage />
        </div>
        <div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}
