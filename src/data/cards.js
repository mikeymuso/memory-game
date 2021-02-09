function Card(id, image, text) {
  this.id = id;
  this.image = `./images/${image}.png`;
  this.text = text;
  this.alt = text;
  this.clicked = false;
}

let cardArray = [
  new Card(0, 'angel', 'Angel'),
  new Card(1, 'angry', 'Angry'),
  new Card(2, 'beaming', 'Beaming'),
  new Card(3, 'blushing', 'Blushing'),
  new Card(4, 'cheesy-grin', 'Cheesy'),
  new Card(5, 'cool', 'Cool', ''),
  new Card(6, 'crazy', 'Crazy'),
  new Card(7, 'crying', 'Crying'),
  new Card(8, 'curious', 'Curious'),
  new Card(9, 'cute', 'Cute'),
  new Card(10, 'embarassed', 'Embarassed'),
  new Card(11, 'goofy', 'Goofy'),
  new Card(12, 'grin-big-eyes', 'Big-eyed Grin'),
  new Card(13, 'grin-little-eyes', 'Small-eyed Grin'),
  new Card(14, 'grin', 'Grin'),
  new Card(15, 'happy', 'Happy'),
  new Card(16, 'laughter', 'Laughter'),
  new Card(17, 'lick', 'Lick'),
  new Card(18, 'lmfao', 'LMFAO'),
  new Card(19, 'love', 'Love'),
  new Card(20, 'oh-dear', 'Oh Dear!'),
  new Card(21, 'party', 'Party'),
  new Card(22, 'side-laughter', 'Laughing'),
  new Card(23, 'sneaky', 'Sneaky'),
  new Card(24, 'stars', 'Star Struck'),
  new Card(25, 'sweaty', 'Sweaty'),
  new Card(26, 'undercover', 'Undercover'),
  new Card(27, 'upside-down', 'Upside-Down'),
  new Card(28, 'whoops', 'Whoops'),
  new Card(29, 'wink', 'Wink'),
  new Card(30, 'worried', 'Worried'),
];

export default cardArray;
