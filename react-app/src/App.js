import AgeComponent from "./AgeComponent";
import Counter from "./Counter";


function App() {
  return (
    <div>
      <Counter />
      <AgeComponent age={25} />
    </div>
  );
}

export default App;
