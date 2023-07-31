import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ThomYorkeImage from "../components/Thome-Yorke/ThomYorkeImages";
import ThomQuotes from "../components/Thome-Yorke/ThomQuotes";



function ThomYorke() {
  return (
    <div>
        <Navbar />
      <h1>Thom Yorke says</h1>
      <ThomYorkeImage />
      <ThomQuotes />
      <Button />
    </div>
  );
}

export default ThomYorke;