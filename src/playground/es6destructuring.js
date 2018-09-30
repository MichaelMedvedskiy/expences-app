const book = {
  title: 'Ego is the friend',
  author: 'Michael Medvedskiy',
  publisher: {

  }
};

const {name:publisherName = "Self-published" } = book.publisher;
console.log(publisherName);
