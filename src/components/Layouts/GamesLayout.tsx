
import { FC } from 'react'
import { Navbar, Sidebar } from '../ui'

interface Props{
    children: React.ReactNode,
}


export const GamesLayout:FC<Props> = ({ children }) => {
  return (
   <div >
   
    <nav>
        <Navbar />
    </nav>


      
    <main style={{
        
        display: 'flex'
    }}>
        <Sidebar />
        { children }
    </main>
   
   
    <footer>
        {/* TODO custom footer */}
    </footer>
   
   </div>
  )
}