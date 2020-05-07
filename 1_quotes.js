let quotes = [
  {
    quote: `Our capacity to draw happiness from aesthetic objects or material goods in fact seems critically dependent on our first satisfying a more important range of emotional or psychological needs, among them the need for understanding, for love, expression and respect.` ,
    author: "Alain De Botton",
    citation: 'keepinspiring.me',
    year: 2002 
  },  
  {
    quote: `When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.`,
    author: 'Nelson Mandela',
    citation: `Mandela's Way`,
    year: 2009 
  }, 
  {
    quote: `I learned that courage was not the absence of fear, but the triumph over it. the brave man is not he who does not feel afraid, but he who conquers that fear`,
    author: 'Nelson Mandela',
    citation: `Mandela's Way`,
    year: 2009
  },
  {
    quote: `As people spin faster and faster in the pursuit of merely personal happiness, they become exhausted in the futile effort of chasing themselves.`,
    author: 'Andrew Delbanco',
    citation: 'keepinspiring.me',
    year: 2000
  },
  {
    quote: `To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first learn to discipline and control one's own mind. if a man can control his mind he can find the key to Enlightenment, and all wisdom and virtue will naturally come to him.`,
    author: 'Buddha' ,
    citation: 'Dharma',
    year: "543 BC"
  }
];
let number;

function randomNum(){
  number = Math.floor(Math.random()*5);
  return number;
}


console.log(quotes[randomNum()]);