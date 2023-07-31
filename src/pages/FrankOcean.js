import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FrankImage from "../components/Frank-Ocean-Component/FrankImage";
import FrankQuotes from "../components/Frank-Ocean-Component/FrankQuotes";


function FrankOcean() {
  return (
    <div>
        <Navbar />
      <h1>Frank says</h1>
      <FrankImage />
      <FrankQuotes />
      <Button />
    </div>
  );
}

export default FrankOcean;