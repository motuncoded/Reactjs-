import React,{useState, useEffect} from 'React'

function Toggle() {
    const [toggling, setToggle] = useState(false)
    const clickToggle = () => {
        setToggle(!toggling)
    }
useEffect(()=>{
  document.title = toggling ? "Hello" : " hi";
}, [toggling])

  return (
    <div>
      <button onClick={clickToggle}>Toggle</button>
    {toggling && <h1>Welcome</h1>}
      </div>
  )
}

export default Toggle
