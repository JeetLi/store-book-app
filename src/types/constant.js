const db = require("../../db.json");

let categories = db.books.map(book => book.categories).sort();

let categoryCounts = categories.reduce((acc, category) => {
    if (acc[category]) {
        acc[category]++;
    } else {
        acc[category] = 1;
    }
    return acc;
}, []);

console.log(categoryCounts);



let uniqueCategories = Array.from(new Set(categories));
console.log(uniqueCategories);