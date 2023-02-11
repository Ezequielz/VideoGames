
import { FC } from 'react'
import { Footer, Navbar } from '../ui'

interface Props{
    children: React.ReactNode,
}


export const GamesLayout:FC<Props> = ({ children }) => {
  return (
   <div >
   
    <nav>
        <Navbar />
    </nav>

    <main style={{ marginBottom:'30px'}}>  
        { children }
    </main>
   
    <footer>
        <Footer />
    </footer>
   
   </div>
  )
}