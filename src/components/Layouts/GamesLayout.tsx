
import { Box } from '@mui/material'
import { FC } from 'react'
import { Footer, Navbar } from '../ui'

interface Props{
    children: React.ReactNode,
}


export const GamesLayout:FC<Props> = ({ children }) => {
  return (
   <>
   
    <header >
      

        <Navbar />
       
    </header>

    <main style={{ marginBottom:'30px'}}>  
        { children }
    </main>
   
    <footer style={{position:'relative'}}>
        <Footer />
    </footer>
   
   </>
  )
}