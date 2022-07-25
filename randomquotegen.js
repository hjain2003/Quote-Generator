quotes=[

    {
        quote:"You know, Hobbes, some days even my lucky rocketship underpants don't help",
        author:"Bill Watterson"
    },
    {
        quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not",
        author:"Oscar Wilde"
    },
    {
        quote:"Everything is hard before it is easy",
        author:"Johann Wolfgang von Goethe"
    },
    {
        quote:"Don't let your happiness depend on something you may lose",
        author:"C.S. Lewis"
    },
    {
        quote:"I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival",
        author:"Audre Lorde"
    },
    {
        quote:"To avoid criticism: say nothing, do nothing, be nothing",
        author:"Aristotle"
    },
    {
        quote:"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
        author:"Mark Twain"
    },
    {
        quote:"A bad day doesn't cancel out a good life. Keep going",
        author:"Richie Norton"
    },
    {
        quote:"Anything worth dying for is certainly worth living for",
        author:"Joseph Heller"
    },
    {
        quote:"'How was your day?' ought to be 'How did you look at your day?'",
        author:"Mokokoma Mokhonoana"
    },
    {
        quote:"The most common way people give up their power is by thinking they don't have any",
        author:"Alice Walker"
    },
    {
        quote:"Today might be shitty, tomorrow might be shitty, the next day might be s****y... but who's to say that one of the next days won't be the best day of your life?",
        author:"Benjamin A. Collier"
    },
    {
        quote:"There is always something left to love",
        author:"Gabriel García Márquez"
    },
    {
        quote:"Each moment is a place you've never been.",
        author:"Mark Strand"
    },
    {
        quote:"We are all in the gutter, but some of us are looking at the stars",
        author:"Oscar Wilde"
    },
    {
        quote:"The air was soft, the stars so fine, the promise of every cobbled alley so great, that I thought I was in a dream",
        author:"Jack Kerouac"
    },
    {
        quote:"Perhaps one did not want to be loved so much as to be understood",
        author:"George Orwell"
    },
    {
        quote:"I'm not afraid of storms, for I'm learning how to sail my ship",
        author:"Louisa May Alcott"
    },
    {
        quote:"As long as you derive inner help and comfort from anything, keep it",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Where there is love there is life",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else",
        author:"Margaret Mead"
    },
    {
        quote:"Whoever is happy will make others happy too",
        author:"Anne Frank"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck",
        author:"A.P.J. Abdul Kalam"
    }, 
]


function generaterandom()
{
    let r=(quotes.length)*Math.random();
    let rand=Math.round(r);

    return rand;
}



function generatequote()
{
    document.querySelector('.quotecontainer').innerHTML+=`<div id="quote">
    </div>
    <br>
    <div id="author">
    </div>`;

    let quoteshow=document.querySelector('#quote');
    let authorshow=document.querySelector('#author');
    
    let random=generaterandom();
    let quoteit=quotes[random];

    quoteshow.innerText=quoteit.quote;
    authorshow.innerText=quoteit.author;


    quotes.splice(random,1);
}