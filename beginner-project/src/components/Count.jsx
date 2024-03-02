import { useState } from 'React'

export default function Count() {
  const [counting, setCounting] = useState(0)
  
  const resetCount = () => {
    setCounting(prevCount => 
      prevCount = 0,
      )
  
  
  }
  const handleIncrement = () => {
    setCounting(prevCount =>prevCount + 1)
  }
  const handleDecrement = () => {
  setCounting(prevCount => prevCount - 1)
}
  
  return (
      <div>
      <h1>{counting}</h1>
          <button onClick={resetCount}>REset</button>
              <button onClick={handleIncrement}>ADd</button>
          <button onClick={handleDecrement}>subTRACT</button>

    
    </div>
  )
}
