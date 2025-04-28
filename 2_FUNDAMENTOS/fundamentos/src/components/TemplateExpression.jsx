// 5- template expression

function TemplateExpression() {
    const name = "Jhonatan";
    const data = {
        ip: "192.168.1.108",
        navegador: "Brave"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem Vindo, {name}</h3>
        <p>Seu IP: {data.ip} e seu navegador é: {data.navegador}</p>
    </div>
  )
}

export default TemplateExpression