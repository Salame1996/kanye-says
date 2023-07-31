const quotes = [
    "Sometimes the nicest thing to do with a guitar is just look at it. - Thom Yorke",
    "One of the interesting things here is that the people who should be shaping the future are politicians. But the political framework itself is so dead and closed that people look to other sources, like artists, because art and music allow people a certain freedom. - Thom Yorke",
    "Someone needs to tell the truth, but it shouldn't be my job. - Thom Yorke",
    "I had a series of mini-breakdowns where the public persona - this thing, this face, this person who writes this music... I would walk past that person in the mirror or listen to that person playing guitar and I didn't know who they were. - Thom Yorke",
    "I think artists can influence only through making music that challenges people, excites them and flips them out. Music that repeats what you know in ever-decreasing derivation, that's unchallenging and unstimulating, deadens our minds, our imagination and our ability to see beyond the hell we find ourselves in. - Thom Yorke",
    "We toyed with the idea of making it a double album, but I think that would only have confused everybody even more, so we decided to stick with the songs we picked. - Thom Yorke",
    "Generally speaking, if people are prepared to stick their heads above the power pit, like Zinn says, and absorb what's going on around them, it makes them think. - Thom Yorke",
    "I think no artist can claim to have any access to the truth, or an authentic version of an event. But obviously they have slightly better means at their disposal because they have their art to energize whatever it is they're trying to write about. They have music. - Thom Yorke",
    "I wrote a lot of stuff quickly: pages and pages of notes that seemed pretty incoherent at first. Most of it was taken from the radio because -suddenly being a parent- I'd be confronted by the radio giving a news report every hour of the day. - Thom Yorke",
    "It is difficult to make political art work. - Thom Yorke",
    "My dad spent his whole life getting into fights for telling what he believed to be the truth. Basically it comes from my dad-and he's screaming right-wing, so there you are. - Thom Yorke",
    "The people in charge, globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future. - Thom Yorke",
    "I think the most important thing about music is the sense of escape. - Thom Yorke",
    "I grew up believing that I was fundamentally powerless. - Thom Yorke",
    "I'm not afraid of computers taking over the world. - Thom Yorke",
    "Well, I've been reading a lot about the fifty years since the Second World War, about Western foreign policy and all that. I try not to let it get to me, but sometimes I just think that there's no hope. - Thom Yorke",
    "My songs are my kids. Some of them stay with me, some others I have to send out, out to the war. It might sound stupid and it might even sound naive, but that's just the way it is. - Thom Yorke",
    "Well, my son really loves wildlife. And every time he draws a polar bear I want to tell him there probably won't be any by the time... he's my age. That's kinda hard to deal with. - Thom Yorke",
    "I don't see it in terms of changing things, but rather using language and music as weapons for fighting a mainstream media which is predominantly right-wing, and loyal to the political framework and its corporate interests. - Thom Yorke",
    "I think sometimes all the charities are doing is mopping up the blood. It's a shame. - Thom Yorke",
    "I've never believed that pop music is escapist trash. There's always a darkness in it, even amidst great pop music. - Thom Yorke",
    "Music is more difficult - try naming a political band. The Dead Kennedys. The Dead Kennedys are political, but they are more funny than they are political. - Thom Yorke",
    "So ultimately, it's idealistic to think that artists are able to step away from the power of the media and the way it controls things, and go on doing their own things. - Thom Yorke",
    "This was something that was obsessing me and creating writer's block. To get involved and get stuck in, get the proper information about what's going on has really helped. - Thom Yorke",
    "You think I have the responsibility... I have the responsibility to give the fans a good time! - Thom Yorke",
    "I feel like, as musicians, we need to fight the Spotify thing. I feel that in some ways what's happening in the mainstream is the last gasp of the old industry. Once that does finally die, which it will, something else will happen. - Thom Yorke",
    "And I know I'm paranoid and neurotic, I've made a career out of it. - Thom Yorke",
    "At home, I've got a very puerile, juvenile sense of humor. - Thom Yorke",
    "I think we're entering a very dangerous time. The West has set itself up, decided it's in charge, not for good intentions, not for the benefit of mankind. - Thom Yorke",
    "I grew up under Thatcher. I grew up believing that I was fundamentally powerless. Then gradually over the years it occurred to me that this was actually a very convenient myth for the state. - Thom Yorke",
    "Being in a band turns you into a child and keeps you there. - Thom Yorke",
    "Coming from Britain, I was terrified of meeting all these other artists because artists over there tend to fight with each other a lot, the premise being that there's not enough room for everybody. - Thom Yorke",
    "I think maybe since there isn't a great deal of access to the mainstream media and people don't understand the language of mainstream media, if you put music out there with lyrics that are loosely political, people absorb some of it and spit it back out. - Thom Yorke",
    "If we got into a situation where people start burning our records, then bring it on. That's the whole point. The gloaming has begun. We're in the darkness. This has happened before. Go read some history. - Thom Yorke",
    "My argument would be that I don't think there is much that's genuinely political art that is good art. - Thom Yorke",
]
  
  
  function ThomQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    return (
        <div>
        <h2>{randomQuote}</h2>
      </div>
    );
  }
  
  export default ThomQuotes;