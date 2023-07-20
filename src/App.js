import "./App.css";
import Button from "./components/Button";
import KanyeImage from "./components/KanyeImage";
import Quotes from "./components/Quotes";

function App() {
  return (
    
      <div className="App">
        <h1 className="title">Kanye says</h1>
        <KanyeImage />
        <Quotes />
        <Button />
      </div>
   
  );
}

export default App;
