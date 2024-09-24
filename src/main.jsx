import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Musicas from './routes/Musicas.jsx'

//criando a função brouser router

const router =createBrowserRouter([
  {
    //chamando o elemento pai
    path:'/',element:<App/>,
    errorElement:<Error/>,
    //elementos filhos
    children:[
      {path:'/', element:<Home/>},
      {path:'/musicas', element:<Musicas/>},
      {path:'/login', element:<Login/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
