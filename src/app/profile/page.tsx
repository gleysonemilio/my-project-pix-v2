import CardRaffle from '@/components/CardRaffle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ListBulletIcon, TableIcon } from '@radix-ui/react-icons'

const sorteios = [
  {
    title: 'Sorteio 1',
    winners: 'João Silva',
    numberDrawn: 23,
    awardsDate: '2024-06-15',
    status: 0 // Em andamento
  },
  {
    title: 'Sorteio 2',
    winners: 'Maria Oliveira',
    numberDrawn: 45,
    awardsDate: '2024-05-30',
    status: 1 // Sorteio Realizado
  },
  {
    title: 'Sorteio 3',
    winners: 'Carlos Pereira',
    numberDrawn: 11,
    awardsDate: '2024-07-01',
    status: 2 // Cancelado
  },
  {
    title: 'Sorteio 4',
    winners: 'Ana Souza',
    numberDrawn: 7,
    awardsDate: '2024-06-20',
    status: 0 // Em andamento
  },
  {
    title: 'Sorteio 5',
    winners: 'Pedro Lima',
    numberDrawn: 32,
    awardsDate: '2024-05-25',
    status: 1 // Sorteio Realizado
  }
]

export default function Profile() {
  return (
    <div className="flex flex-col max-w-screen-sm gap-3 mb-5 w-[100%] justify-center items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gleyson Emilio </h3>

      <div className="flex gap-2">
        <Button variant="ghost">
          <ListBulletIcon />
        </Button>
        <Button variant="ghost">
          <TableIcon />
        </Button>
      </div>

      <div className="flex flex-col gap-2 p-3 w-[100%]">
        {sorteios.map(({ title, numberDrawn, winners, status, awardsDate }) => (
          <CardRaffle
            grid
            title={title}
            status={status}
            winners={winners}
            awardsDate={awardsDate}
            numberDrawn={numberDrawn}
          />
        ))}
      </div>
    </div>
  )
}
