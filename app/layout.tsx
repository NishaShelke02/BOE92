import Navbar from '@/components/Navbar/Navbar'  // ✅ Fixed import path
import './globals.css'
import SocialSidebar from '@/components/SocialSidebar/SocialSidebar'  // ✅ Fixed import path
export const metadata = {
  title: "Bumi Organic Exim",
  description: "Indian exporter",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SocialSidebar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}