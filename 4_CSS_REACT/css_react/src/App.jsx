
import './App.css'
import MyComponents from './components/MyComponents'



function App() {
    // 4 - css inline dinamico
  const n = 15
  return (
   
      <div>
        {/* 1 - Css global */}
        <h1>CSS no React</h1>
        {/* 2 - css de componente */}
        <MyComponents />
    <p>Pegou o CSS do componente</p>
    {/* 3 - online style */}
    <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
    {/* 4 - inline style dinamico */}
    <h2 style={n > 10 ? {color: "purple"} : { color: "magenta" }}>CSS dinâmico</h2>
    <h2 style={n > 20 ? {color: "purple"} : { color: "magenta" }}>CSS dinâmico 2</h2>
     </div>
  )
}

export default App
