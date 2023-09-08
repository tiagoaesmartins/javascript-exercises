const getTheTitles = function(arr) {
    return arr.map(obj => obj.title);
};

let books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
