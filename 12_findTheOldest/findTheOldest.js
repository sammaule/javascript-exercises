const findTheOldest = function(arr) {
    return arr
        .map(person => {
            if (!person.yearOfDeath) {
                person.yearOfDeath = new Date().getFullYear();
            }
            person.age = person.yearOfDeath - person.yearOfBirth;
            return person;
        })
        .reduce((oldest, current) => {
            return oldest.age > current.age ? oldest : current;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
