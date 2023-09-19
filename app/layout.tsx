import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen bg-background flex flex-col items-center'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
