
import { FC } from 'react'
import { Navbar } from '../ui'

interface Props{
    children: React.ReactNode,
}


export const GamesLayout:FC<Props> = ({ children }) => {
  return (
   <div >
   
    <nav>
        <Navbar />
    </nav>

    <main>  
        { children }
    </main>
   
    <footer>
        {/* TODO custom footer */}
    </footer>
   
   </div>
  )
}