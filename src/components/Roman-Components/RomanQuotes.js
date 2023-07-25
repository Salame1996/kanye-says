const quotes = [
    "You look tired and your face is giving me a headache.",
    "Frank! It hasn't been the same without you. It's been better.",
    "He's afraid of needles. He's not a real junkie.",
    "What comes after 9? 9B?",
    "You have to stop this.",
    "Hey, Buddha, nice Tom Fords.",
    "I thought I smelled dairy.",
    "I think our position must be that we're just done cornholing our dad.",
    "I think we have to drink a couple of martini passive aggressives.",
    "You're totally fine, just throw her another ten grand. Or a snowmobile and some teeth-whitening vouchers.",
    "He was a king once. Now look at him. Eating sh*t with feet of clay, a f*cking neutered hound-dog. Elvis on the f*cking toilet! Like, he doesn’t come back from this, right? He just walked around the New York Stock Exchange with his severed d*ck in his hand asking where was good for free soup. He just ate the big dog d*ck. Sucked that pooch bone dry!",
    "What I think he meant to say was that he wished mom gave birth to a can opener, because at least then it would be useful.",
    "Oh, wings! I wonder from which particular creature they snipped these wings! Perhaps a mammal!",
    "You inhuman f*cking dog man.",
    "Aw, what’s wrong? You all wedgied up because Rhea stood on your back and worked your arms like an elliptical?",
    "Ooh, nice vest, Wambsgans. It’s so puffy. What’s it stuffed with, your hopes and dreams?",
    "He’s like a sex robot for Dad to f*ck.",
    "I was never a corporate c*ck-suck anyway. Besides, I never made it this high in the f*cking building! They stuck me in LA with Old Father Time right here. We were the pool boys, right, Frank? F*ckin’ banana cabana?",
    "Ken did great. It was Tom who farted in his s*it.",
    "‘Control the narrative.’ You probably yell that when you c*m. ‘Oh, control the narrative! Oh, control it. Control the narrative!’",
    "Where do you buy your suits by the way, Tom? Like, maybe that’s why I’m just not moving as fast as you. I just don’t have that, like, boxy, corporate look, right? I mean, I’m sorry, but like, what the f*ck? You look like a Transformer. Like, wh—what’s wrong with your body, man?",
    "Look at you, scanning for influence like a yuppie Robocop.",
    "It’s dirty, it’s weird, and it’s evidence of precisely the kind of disgusting liberal metro butt-love that makes our viewership angry enough to buy pharmaceuticals.",
    "What the f*ck is this obsession with milk? You know who drinks milk? Kittens and perverts.",
    "I'm going to take a sh*t. Want me to livestream it?",
    "We just made a night of good TV.",
    "I am King Dong. I am King of Dong. Bow down to me.",
    "Discord makes me d*ck-hord.",
  ];
  
  function RomanQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default RomanQuotes;