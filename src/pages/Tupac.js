import Navbar from "../components/Navbar";
import Button from "../components/Button";
import TupacImage from "../components/Tupac/TupacImage";
import TupacQuotes from "../components/Tupac/TupacQuotes";



function Tupac() {
  return (
    <div>
        <Navbar />
      <h1>Tupac says</h1>
      <TupacImage />
      <TupacQuotes />
      <Button />
    </div>
  );
}

export default Tupac;
