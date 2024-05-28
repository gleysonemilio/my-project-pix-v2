import Hearder from '@/components/Hearder'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col min-h-screen content-center">
      <Hearder />
      {children}
    </article>
  )
}
