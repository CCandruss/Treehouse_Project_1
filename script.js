//array of quotes available for selection
let quotes = [
  {
    quote: `Our capacity to draw happiness from aesthetic objects or material 
    goods in fact seems critically dependent on our first satisfying a more important 
    range of emotional or psychological needs, among them the need for understanding, 
    for love, expression and respect.` ,
    source: "Alain De Botton",
  },  
  {
    quote: `When a man is denied the right to live the life he believes in, he has no 
    choice but to become an outlaw.`,
    source: 'Nelson Mandela',
    citation: `Mandela's Way`,
    year: 2009 
  }, 
  {
    quote: `I learned that courage was not the absence of fear, but the triumph over it. 
    The brave man is not he who does not feel afraid, but he who conquers that fear.`,
    source: 'Nelson Mandela',
  },
  {
    quote: `As people spin faster and faster in the pursuit of merely personal happiness, 
    they become exhausted in the futile effort of chasing themselves.`,
    source: 'Andrew Delbanco',
  },
  {
    quote: `To enjoy good health, to bring true happiness to one's family, to bring peace 
    to all, one must first learn to discipline and control one's own mind. if a man can 
    control his mind he can find the key to Enlightenment, and all wisdom and virtue will 
    naturally come to him.`,
    source: 'Buddha' 
  },
  {
    quote: 'There is no education like adversity.',
    source: 'Benjamin Disraeli'
  }
];
let number;
let selectedQuote;
//function gathering a random number to select a quote object from array
function getRandomQuote(){
  function randomNum () {
    number = Math.floor(Math.random()*quotes.length);
    return number;
  }
  selectedQuote = quotes[randomNum()];
  return selectedQuote;
}
//print function identifying what values are present in the object and adding those values to the HTML
function printQuote (message){
  let obj = getRandomQuote();
  let output = '';
  if(obj.quote){
    output += '<p class = "quote" >' + obj.quote + '</p>';
  }
  if(obj.source){
    output += '<p class = "source" >' + obj.source;
  }
  if(obj.citation){
    output += '<span class = "citation" >' + obj.citation + '</span>';
  } 
  if(obj.year){
    output += '<span class= "year">' + obj.year + '</span>';
  }
  output += '</p>'
  document.getElementById("quote-box").innerHTML = output;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
//timer to initiate quote change
var intervalID = window.setInterval(printQuote, 10000);