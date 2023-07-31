const quotes = [
    "Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.",
    "They have money for war but can't feed the poor.",
    "I mean, why have 52 rooms and you know there's somebody with no room? It just don't make sense to me.",
    "Reality is wrong. Dreams are for real.",
    "Behind every sweet smile, there is a bitter sadness that no one can see and feel.",
    "Should I just stop trying and give up? But then, that's exactly what they're waiting for me to do.",
    "The world moves fast and it would rather pass by than to stop— and see what makes you cry.",
    "Pay no mind to those who talk behind your back, it simply means that you are two steps ahead.",
    "Life is a wheel of fortune and it's my turn to spin it.",
    "Ain't a woman alive that could take my mama's place.",
    "If you can make it through the night, there's a brighter day.",
    "You know nothing can stop me but loss of breath, and I'm still breathing so it's still on.",
    "Do everything you can to make it around the system, over the system, or out the system.",
    "I hate the man in the mirror 'cause his reflection makes the pain turn realer.",
    "I feel like role models today are not meant to be put on a pedestal. But more like angels with broken wings.",
    "One thing we all adore, something worth dying for, nothing but pain, stuck in this game, searchin’ for fortune and fame.",
    "This fast life soon shatters, 'cause after all the lights and screams, nothing but my dreams matter.",
    "When you do rap albums, you got to train yourself. You got to constantly be in character.",
    "Always do your best, don’t let the pressure make you panic.",
    "Long live the rose that grew from concrete when no one else even cared.",
    "The seed must grow regardless of the fact that it's planted in stone.",
    "Just cause you live in the ghetto doesn't mean you can't grow.",
    "I don't see why everybody feel as though that they gotta tell me how to live my life.",
    "We can never go nowhere unless we share with each other.",
    "Tomorrow I wake with second wind and strong because of pride. I know I fought with all my heart to keep the dream alive.",
    "All I'm trying to do is survive and make good out of the dirty, nasty, unbelievable lifestyle that they gave me.",
    "Our future is our confidence and self-esteem.",
    "We was young and we was dumb, but we had heart.",
    "I am not a perfectionist, but still I seek perfection. I am not a great romantic, but yet I yearn for affection.",
    "I'm not saying girls are perfect cause we all know that's not true. But why be unfaithful to her if she was true to you?",
    "I would rather be stricken blind than to live without expression of mind.",
    "Don't change on me. Don't extort me unless you intend to do it forever.",
    "I make mistakes but learn from every one.",
    "Watch for phonies, keep your enemies close, watch your homies.",
    "Everybody's at war with different things. I'm at war with my own heart sometimes.",
    "I set goals, take control, drink out my own bottle.",
    "If they take half the buildings that they use to praise God and give it to the motherf***ers who need God we'd be 'aight.",
    "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for.'",
    "When I was a little baby, I remember that one moment of calm, peace. And three minutes after that, it was on.",
    "I might just be my mother's child, but in all reality, I'm everybody's child. Nobody raised me. I was raised in this society.",
    "When times are dim, say as I say, 'When there's a will, there's a way!'",
    "You gotta make a change. You see the old way wasn't working, so it's on us to do what we gotta do to survive.",
    "During your life, never stop dreaming. No one can take away your dreams.",
    "The only time I have problems is when I sleep.",
    "Real eyes realize real lies.",
    "I don't have no fear of death. My only fear is coming back reincarnated.",
    "Every time I speak, I want the truth to come out. Every time I speak I want a shiver.",
    "I'm not saying I'm gonna change the world, but I guarantee that I will spark the brain that will change the world.",
    "No matter how hard it gets, stick your chest out, keep ya' head up and handle it.",
    "We're made to grow. You either evolve or you disappear.",
    "We wouldn't ask why a rose that grew from the concrete for having damaged petals. In turn, we would all celebrate its tenacity, we would all love its will to reach the sun.",
    "There's gonna be some stuff you gonna see that's gonna make it hard to smile in the future, but through whatever you see, through all the rain and the pain, you gotta keep your sense of humor.",
]
  
  
  function TupacQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default TupacQuotes;