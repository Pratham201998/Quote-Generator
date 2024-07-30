

const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Dream big and dare to fail. - Norman Vaughan",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
    "I failed my way to success. - Thomas Edison",
    "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Creativity is intelligence having fun. - Albert Einstein",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "To see what is right and not do it is a lack of courage. - Confucius",
    "Reading is to the mind, as exercise is to the body. - Brian Tracy",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Money and success don’t change people; they merely amplify what is already there. - Will Smith",
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. - Steve Jobs",
    "Not how long, but how well you have lived is the main thing. - Seneca",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. - Henry Ford",
    "In order to write about life first you must live it. - Ernest Hemingway",
    "The big lesson in life, baby, is never be scared of anyone or anything. - Frank Sinatra"
];

 //generates random quote from array
function randomQuote (){
    return Math.floor(Math.random() * motivationalQuotes.length)
}

//getting access  to the elements form DOM
const quote_btn = document.getElementById('quote_btn');
const quote = document.getElementById('quote');

//Manipulating the DOM
quote_btn.addEventListener('click', ()=>{
    quote.textContent = motivationalQuotes[randomQuote()]
})
