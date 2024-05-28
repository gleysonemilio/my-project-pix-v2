import Card from '@/components/Card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRightIcon, ChevronLeftIcon, FileTextIcon } from '@radix-ui/react-icons'

//bg-white
export default function Raffle() {
  return (
    <div className="flex flex-col max-w-screen-sm gap-3 mb-5">
      <div className="bg-[url('https://lojadojosias.com/uploads/rifas/HYBRID.jpg')] imgx h-96" />
      <div className="flex flex-col gap-3 mt-[-40px]">
        <div className="bg-neutral-900 rounded-2xl mx-2 p-4 shadow-lg">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            CARRO ZERO KM OU 60K NA CONTA
          </h4>
          <p className="text-sm text-muted-foreground text-zinc-600">
            Oganizado por Gleyson Emilio
          </p>
        </div>

        <div className="flex justify-between px-5">
          <p className="text-sm text-muted-foreground">
            participe por apenas <Badge>R$ 0,90</Badge>
          </p>
          <p className="text-sm text-muted-foreground">
            Sorteio <Badge>☘️ Loteria Federal</Badge>
          </p>
        </div>

        <Card title="Promoção 😱" subTitle="compre mais barato">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 5 }).map(() => (
              <Button variant="secondary" className="">
                <small className="text-sm font-medium leading-none">▶️ 1.000 por R$ 3,00 </small>
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Selecione a quantidade de bilheters">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map(() => (
              <Button variant="secondary" className="p-10">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">+10</p>
                  <p className="text-sm text-muted-foreground">selecionar</p>
                </div>
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="w-[20%]">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            <Input className="text-center" type="number" placeholder="0" />

            <Button variant="outline" size="icon" className="w-[20%]">
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Button variant="secondary" className="bg-green-400">
          <div className="flex justify-between w-[100%]">
            <span> Participar do sorteio</span>
            <span> R$ 3,00</span>
          </div>
        </Button>

        <Card title="Descrição 📝" subTitle="Detalhe sobre a premiação">
          <div>
            <h2>1 premio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti neque iure ratione,
              fugit a tempora. Voluptate nulla excepturi molestiae officia? Mollitia asperiores
              quisquam molestiae sunt expedita, temporibus aliquid pariatur non.
            </p>
          </div>

          <div>
            <h2>2 premio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti neque iure ratione,
              fugit a tempora. Voluptate nulla excepturi molestiae officia? Mollitia asperiores
              quisquam molestiae sunt expedita, temporibus aliquid pariatur non.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
