const findTheOldest = function(arr) {

    const findDate = (array, property) => {
        array.forEach(element => {
            if (!element[property]) {
                return element[property] = new Date().getFullYear();
            };
        });
    };

    findDate(arr, "yearOfDeath");

    const orderedByAge = arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)
    
    return orderedByAge[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
      yearOfDeath: 2020,
    },
    {
      name: "Ray",
      yearOfBirth: 1062,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
