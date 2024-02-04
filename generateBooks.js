const fs = require('fs');
const faker = require('@faker-js/faker/locale/en');



const data = faker.faker
const categories = [
  'Fantasy',
  'Science Fiction',
  'Mystery',
  'Thriller',
  'Romance',
  'Western',
  'Dystopian',
  'Memoir',
  'Biography',
  'Self-help',
  'Health',
  'History',
  'Travel',
  'Cookbooks'
];

function generateBooks(numBooks) {
  const books = [];

  for (let id = 1; id <= numBooks; id++) {
    const title = data.lorem.words();
    const issueYear = data.date.anytime();
    const rating = data.number.int({ min: 1, max: 5 });
    const authors = data.person.fullName();
    const image = {
      url: data.image.url()
    };
    const bookCategories = data.helpers.arrayElement(categories, data.number.int({ min: 1, max: 3 }))
    books.push({
      id,
      title,
      issueYear,
      rating,
      authors,
      image,
      categories: bookCategories
    });
  }

  return books;
}

const booksData = generateBooks(60);

fs.writeFile('db.json', JSON.stringify({ books: booksData }, null, 2), (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('db.json has been created with 60 unique books.');
});



