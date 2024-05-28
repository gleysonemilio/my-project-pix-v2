'use client'

import { useTheme } from 'next-themes'

export default function Card({
  children,
  title,
  subTitle
}: {
  children: React.ReactNode
  title: string
  subTitle?: string
}) {
  const { theme } = useTheme()

  return (
    <section
      className={`flex flex-col gap-3  rounded-2xl mx-2 p-4 shadow-lg ${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-200'
      }`}
    >
      <div className="flex flex-row gap-1">
        <h3 className="text-sm text-muted-foreground">{title}</h3>
        {subTitle && <p className="text-sm italic text-zinc-600"> {subTitle}</p>}
      </div>

      {children}
    </section>
  )
}
