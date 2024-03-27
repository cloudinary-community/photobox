import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full grid grid-rows-[auto_1fr_auto]">
      <Nav />
      { children }
      <Footer className="mt-16" />
    </div>
  )
}
