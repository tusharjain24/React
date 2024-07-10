
import './App.css'
import Card from './components/Card.jsx'

function App() {

  const newObj = {
    username: "LibbyDan"
  }

  const newArr = [1, 2, 3]



  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Tushar Jain" Obj = {newObj} Arr = {newArr} />
      <Card username = "LibbyDan"/>
      <Card username = "LibbyDan"/>
    </>
  )
}

export default App
