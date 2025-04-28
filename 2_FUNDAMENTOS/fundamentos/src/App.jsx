import './App.css'
import Events from './components/Events';
// 2- importando componente
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpression from './components/TemplateExpression';




function App() {
  // 3- comentários
  return (
    <div className='App'>
      {/* 4- comentário jsx*/}
      <h1>Dashboard</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App;

