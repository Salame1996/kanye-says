const quotes = [
    "Not to be crude about it, but politics is what comes out the a**hole. Wouldn't you rather be up front, feeding the horse? - On politics.",
    "Romulus, when you laugh, please do it at the same volume as everyone else. We didn’t get you from a hyena farm. - On the social graces of Roman Roy.",
    "If your hands are clean, it’s only because your whorehouse also does manicures. - To poor Karl, the CFO.",
    "Anyone can do deal. It’s getting the right number from the right suit. Getting your d*ck in there is easy. Getting them into bad, that’s hard. - On business negotiations.",
    "Most things don't exist. The Ford Motor Company hardly exists. It's just a time-saving expression for a collection of financial interests. - On corporations.",
    "You're such f**kng dopes. You're not serious figures. I love you, but you are not serious people. - On his kids. Great Dad.",
    "I’m gonna grind his f**king bones to make my bread. - On his son Kendall and his latest betrayal.",
    "I make my nut off what people really want. Don’t tell me about people—I’d go flat broke in a week if I didn’t. - On the media.",
    "People come to us because we don’t sell them on anything. No packet of f**king bleeding heart, United Nations, Volvo, gender-bender horses**t. - On the news business.",
    "Would you like to hear my favorite passage from Shakespeare? Take the f**king money. - On Shakespeare."
  ];
  

function LoganQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default LoganQuotes;