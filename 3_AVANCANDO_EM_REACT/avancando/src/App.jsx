import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 2 imagem em assets
import dw from './assets/image.png';

// 3 useState
import Data from './components/Data';


// 4 - Renderização de lista
import ListRender from './components/ListRender';

// 7 render condicional
import ConditionalRender
 from './components/ConditionalRender';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{ paddingBottom: "500px"}}>
       <h1>Dasbhoard DW Elevadores </h1>   
       {/* 1 - imagem em public */}  
       <img src='/imagem.jpg' alt ='Imagem DW Elevadores' />
       {/* 2 - imagem em assets */}
       <img src={dw} alt='Imagem' />

       {/* 3 - useState */}
<Data />

{/* 4 List Render */}
<ListRender />

{/* 7 drender condiconal */}
 <ConditionalRender />
        </div>
    
    </>
  )
}

export default App
