import Navbar from "../components/Navbar";
import Button from "../components/Button";
import RomanQuotes from "../components/Roman-Components/RomanQuotes";
import RomanImage from "../components/Roman-Components/RomanImage";
function RomanRoy() {
  return (
    <div>
        <Navbar />
      <h1>Roman says</h1>
      <RomanImage />
      <RomanQuotes />
      <Button />
    </div>
  );
}

export default RomanRoy;
