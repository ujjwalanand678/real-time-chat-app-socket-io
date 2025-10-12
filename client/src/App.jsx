
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Routing from './routes/Routing'

function App() {
 

  return (
    <>
    <div className="bg-[radial-gradient(circle,rgba(55,10,140,1)_0%,rgba(0,0,0,1)_40%)]">
      <Routing/>
     <Home />
     
     </div>
    </>
  )
}

export default App
