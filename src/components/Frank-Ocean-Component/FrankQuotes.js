const quotes = [
    "Don't confuse my personality with my attitude. My personality is who I am, and my attitude depends on who you are.",
    "I know that we sin, but I do believe we try, we all try.",
    "We met for a reason, either you're a blessing or a lesson.",
    "I'm in this business to be creative - I'll even diminish it and say to be a content provider.",
    "The Internet is just another experiment showing us more sides of us.",
    "Sometimes I'm fascinated with how famous my work could be while I'm not so famous.",
    "I've gotten used to being.",
    "I'm about being the best.",
    "There's just some magic in truth and honesty and openness.",
    "I can operate in half-a-song format.",
    "I'm big on what's in good taste.",
    "I believe that marriage isn't between a man and woman, but between love and love.",
    "It's cool to be recognized by your peers.",
    "I'm not a centerfold.",
    "My TV ain't HD, that's too real.",
    "I believe that I'm one of the best in the world at what I do, and that's all I've ever wanted to be.",
    "Those who are heartless, once cared too much.",
    "I don't have any secrets I need kept anymore.",
    "We'll run to the future, shining like diamonds, in a rocky world, rocky-rocky world.",
    "Distance sometimes lets you know who's worth keeping and who's worth letting go.",
    "Work hard in silence, let your success be your noise.",
    "The hardest thing to say is worth saying.",
    "The work is the work. The work is not me.",
    "I've been thinking about forever.",
    "Never run back to what broke you.",
    "And the best advice I got was keep writing, yeah.",
    "Just remember; someone loves everything you hate about yourself.",
    "I don't fear anybody… at all.",
    "You just do what you can and you have as much fun as possible.",
    "My grandfather was smart and had a whole lot of pride. He didn't speak a terrible amount, but you could tell there was a ton on his mind – like a quiet acceptance of how life had turned out.",
    "Boys do cry, but I don't think I shed a tear for a good chunk of my teenage years.",
    "A friend of mine jokes that I have a painstaking royalty complex. Like maybe I was a Duke in a past life.",
    "I worked my face off.",
    "I guess I'm just inspired to tell stories.",
    "Don't feel sad over someone who gave up on you, feel sorry for them because they gave up on someone who would have never given up on them.",
    "But we’re so okay here, we’re doing fine.",
    "The worst part of being lied to is when you realize you believed it.",
    "Some people focus more on sonics. Some people focus more on story. I focus on both sonics and story.",
    "It's a bad religion to be in love with someone who could never love you.",
    "Those who are heartless, once cared too much.",
    "Of course, awards matter.",
    "My music definitely comes from a place of experience. Everything connects to a truth.",
    "I like the anonymity that directors can have about their films.",
    "It's a bad religion this unrequited love.",
    "I don't intend to stop making music.",
    "Each individual's success as a solo artist is pretty much a win for the whole team.",
    "I play piano every day.",
    "I make pop culture.",
    "It's not always easy to be transparent about your emotions and sometimes the music can get heavy.",
    "I enjoy singing my songs in front of people. I enjoy being involved in making the artwork for albums and stupid stuff like that.",
    "People are just afraid of things too much. Afraid of things that don't necessarily merit fear.",
    "I've written some great things. That's a gift, but there are consequences. Yeah, you get this great work, but you suffer. You really, really suffer.",
    "If you don't want me now, don't miss me later.",
    "We shouldn't care about what others say, and we should always stick to our goals and dreams to make a better life. It is better to find what makes your life worth living and what you want to live a good life. These quotes may give you back the motivation to seize the day!",
    "With my art, it's the one thing that I know will outlive me and outlive my feelings.",
    "I feel like I was writing as I was learning to talk. Writing was always a go-to form of communication.",
    "As a man, I am not a killer. I'm an artist and a modern person. I'll choose sanity.",
    "As a writer, as a creator, I'm giving you my experiences. But just take what I give you. You ain't got to pry beyond that."
  ];
  
  function FrankQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default FrankQuotes;