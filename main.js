
let list = [
    {
        quote : " “Be yourself; everyone else is already taken.” ",
        author : " ― Oscar Wilde "
    },
    {
        quote : " “So many books, so little time.” ",
        author : " ― Frank Zappa "
    },
    {
        quote : " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        author : " ― Albert Einstein "
    },
    {
        quote : " “A room without books is like a body without a soul.” ",
        author : " ― Marcus Tullius Cicero "
    },
    {
        quote : " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        author : " ― Bernard M. Baruch "
    },
    {
        quote : " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        author : " ― Dr. Seuss "
    },
    {
        quote : " “You only live once, but if you do it right, once is enough.” ",
        author : " ― Mae West "
    },
    {
        quote : " “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” ",
        author : " ― Albert Camus "
    },
    {
        quote : " “Be the change that you wish to see in the world.” ",
        author : " ― Mahatma Gandhi "
    }
];

let eleQuote = document.getElementById('quote');
let eleAuthor = document.getElementById('author');

function quoteOutput(){
    let counter = Number.parseInt(Math.random()*list.length + 1);
    eleQuote.innerHTML= `${list[counter].quote}`;
    eleAuthor.innerHTML= `${list[counter].author}`;
}