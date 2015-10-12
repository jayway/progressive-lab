  var bookId = 0;


  function Book(title, author, price, cover) {
    this.id = bookId++;
    this.title = title;
    this.author = author;
    this.price = price;
    this.cover = cover;
  }


  module.exports = (function(books) {

    return {
      all: function() {
        return books;
      },

      find: function(id) {
        return books[id];
      }
    };
  })([
    new Book('The Laughing Monsters', 'Denis Johnson', 132,
      'https://timedotcom.files.wordpress.com/2014/11/laughing-monsters.jpg?quality=75&strip=color&w=814'),
    new Book('A Brief History of Seven Killings', 'Marlon James', 140,
      'https://timedotcom.files.wordpress.com/2014/11/marlon-james-a-brief-history-of-seven-killings.jpg?quality=75&strip=color&w=814'),
    new Book('Euphoria', 'Lily King', 98,
      'https://timedotcom.files.wordpress.com/2014/11/lily-king-euphoria.jpg?quality=75&strip=color&w=814'),
    new Book('Station Eleven', 'Emily St. John Mandel', 132,
      'https://timedotcom.files.wordpress.com/2014/11/emily-st-john-mandel-station-eleven.jpg?quality=75&strip=color&w=814'),
    new Book('Whiskey Tango Foxtrot', 'David Shafer', 105,
      'https://timedotcom.files.wordpress.com/2014/11/david-shafer-whiskey-tango-foxtrot.jpg?quality=75&strip=color&w=323'),
    new Book('Wonderland', "Stacey D'Erasmo", 200,
      'https://timedotcom.files.wordpress.com/2014/11/stacey-erasmo-wonderland.jpg?quality=75&strip=color&w=348'),
    new Book('Redeployment', 'Phil Klay', 150,
      'https://timedotcom.files.wordpress.com/2014/11/phil-klay-redeployment.jpg?quality=75&strip=color&w=673'),
    new Book('The Zone of Interest', 'Martin Amis', 132, 'https://timedotcom.files.wordpress.com/2014/11/martin-amis-the-zone-of-interest.jpg?quality=75&strip=color&w=300'),
    new Book('The Bone Clocks', 'David Mitchell', 98,
      'https://timedotcom.files.wordpress.com/2014/11/david-mitchell-the-bone-clocks.jpg?quality=75&strip=color&w=814'),
    new Book('The Secret Place', 'Tana French', 150,
      'https://timedotcom.files.wordpress.com/2014/11/tania-french-the-secret-place.jpg?quality=75&strip=color&w=814')
  ]);
