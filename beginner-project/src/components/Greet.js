import react, {useState} from "React"



function Greet() {
      const [greeting, setGreeting] = useState({
    greet: "Hello, World",
    count: 0

      });
    function updateGreeting() {
    setGreeting((prevState) => {
      return {
        ...greeting,
        greet: "Welcome",
        count: greeting.count + 2
      }
    })
  }
    return (
     <>
      {/*<HeaderApp/>*/}
      <h1>{greeting.greet}</h1>
      <p>{greeting.count}</p>
      <button onClick={updateGreeting}>Greet</button>
    </>
)
}

export default Greet