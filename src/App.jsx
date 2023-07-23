// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Search from './components/Search.jsx'
import Table from './components/Table.jsx'
import './App.css'

function App() {
  return (
    <div className="container">
      <div>
        <p className='section-title'>Pokemon List</p>
      </div>
      <Search />
      <Table />
    </div>
  )
}

export default App
