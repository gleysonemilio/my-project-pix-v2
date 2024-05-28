'use client'

import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { Button } from '../ui/button'
import IconBrasil from '@/assets/icon_brazil.svg'
import IconUSA from '@/assets/icon_united_states_america.svg'
import { useAppContext } from '@/hooks/AppContext'

interface ArrayLanguage {
  name: string
  icon: string | any
  value: string
}
export default function MenuLanguage() {
  const { language, setLanguage } = useAppContext()

  const arrayLanguage: ArrayLanguage[] = [
    {
      name: 'Portugues',
      icon: IconBrasil,
      value: 'pt-br'
    },
    {
      name: 'English',
      icon: IconUSA,
      value: 'en-us'
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Image
            src={arrayLanguage.find(({ value }) => value === language)?.icon}
            height="20"
            width="20"
            alt="thumbnail"
          />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          {arrayLanguage.map(({ name, icon, value }) => (
            <DropdownMenuRadioItem value={value as string} key={name} className="gap-2">
              <Image src={icon} height="20" width="20" alt="thumbnail" />
              {name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
