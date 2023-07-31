import Navbar from "../components/Navbar";
import Button from "../components/Button";
import KendallImage from "../components/Kendall-component/KendallImage";
import KendallQuotes from "../components/Kendall-component/KendallQuotes";

function KendallRoy() {
  return (
    <div>
        <Navbar />
      <h1>Kendall says</h1>
      <KendallImage />
      <KendallQuotes />
      <Button />
    </div>
  );
}

export default KendallRoy;
