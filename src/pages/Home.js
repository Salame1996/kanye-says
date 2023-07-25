import React from "react";
import "../App.css";
import Button from "../components/Button";
import KanyeImage from "../components/KanyeImage";
import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";


function Home() {
  return (
    
      <div className="App">
        <Navbar />
        <h1 className="title">Kanye says</h1>
        <KanyeImage />
        <Quotes />
        <Button />
      </div>
      
  );
}

export default Home;
