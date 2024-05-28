'use client'

import { useTheme } from 'next-themes'
import { Badge } from '../ui/badge'

export default function CardRaffle({
  grid,
  title,
  winners,
  status,
  awardsDate,
  numberDrawn
}: {
  grid: boolean
  title: string
  winners: string
  status: number
  awardsDate: string
  numberDrawn: number
}) {
  const { theme } = useTheme()

  const filterStatus = () => {
    switch (status) {
      case 0:
        return <Badge variant="outline">Em andamento</Badge>
      case 1:
        return <Badge>Sortei Realizado</Badge>
      case 2:
        return <Badge variant="destructive">Cancelado</Badge>

      default:
        break
    }
  }

  return grid ? (
    <section
      className={`grid grid-cols-2 overflow-hidden rounded-2xl shadow-lg ´ ${
        theme === 'dark' ? 'bg-neutral-900 h-36 ' : 'bg-gray-200 h-32'
      }`}
    >
      <div className="grid bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="grid p-3">
        <div>{title}</div>

        <div>
          <p className="text-sm text-muted-foreground">
            N sorteado: <span className="text-sm font-bold">{numberDrawn}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Ganhador: <span className="text-sm font-bold">{winners}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Data da Premiação: <span className="text-sm font-bold">{awardsDate}</span>
          </p>
        </div>

        <div>{filterStatus()}</div>
      </div>
    </section>
  ) : (
    <section
      className={`grid grid-cols-2 overflow-hidden rounded-2xl shadow-lg ´ ${
        theme === 'dark' ? 'bg-neutral-900 h-32' : 'bg-gray-200 h-32'
      }`}
    ></section>
  )
}
