import './App.css'
import Introduction from './components/Introduction'
import StaticPortfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">
          Hi, I'm Tim.
        </h1>
        <Introduction/>
        <StaticPortfolio/>
        <Timeline />
      </div>
    </>
  )
}

export default App
