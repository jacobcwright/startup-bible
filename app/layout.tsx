import './globals.css'

export const metadata = {
  title: 'Startup Bible',
  description: 'The holy texts for startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <main className='min-h-screen bg-background flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
