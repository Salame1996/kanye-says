import Navbar from "../components/Navbar";
import Button from "../components/Button";
import LoganImage from "../components/Logan-Roy/LoganImages";
import LoganQuotes from "../components/Logan-Roy/LoganQuotes";


function LoganRoy() {
  return (
    <div>
        <Navbar />
      <h1>Logan says</h1>
      <LoganImage />
      <LoganQuotes />
      <Button />
    </div>
  );
}

export default LoganRoy;
