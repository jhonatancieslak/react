import React from 'react'

function Events() {
  // Função de Click
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");

  }

// 8 - Função de renderização
const renderSomething = (x) => {
if(x) {
  return <h1>Renderizando isso!</h1>;
}
else {
  return <h1>Renderizando outra coisa!</h1>;
}
};

return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando o Click")}>Clique aqui</button>
        </div>
        {/* evento com função*/}
        <div>
          <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 Função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events