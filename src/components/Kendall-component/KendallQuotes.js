const quotes = [
    "You can't put a value on a human life. Except in our case, you rather precisely can, because when trading opens tomorrow, we're gonna drop like a stone.",
    "He's a guy we can do business with.",
    "The dinosaur is having one last roar at the meteor before it wipes him out.",
    "I'm better than you. I hate to say this because I love you, but you're kind of evil.",
    "Little Lord Fckleroy has joined the call.",
    "When you say the thing that's not, that's a lie.",
    "I wondered why you looked like a goose about to sht a house brick.",
    "Stay hydrated.",
    "A show about politics called Inside Baseball. How f*cking confusing is that?",
    "My dad is a bastard. They need to know I'm a bastard too.",
    "You couldn’t get a job in a burger joint let alone a Fortune 500 without some nepotism.",
    "You tell yourself you’re a good person, but you're not a good person.",
    "Bitches be catty, but the king's my daddy.",
    ];
    
  function KendallQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default KendallQuotes;