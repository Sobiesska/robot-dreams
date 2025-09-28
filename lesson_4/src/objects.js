const obj = {};
let newObj = {};

obj.name = 'Lilia';
obj.surname = 'Podolska';
obj.age = 37;
obj.isRobotDreamsStudent = true;
obj.city = 'Kyiv';
obj.skills = {
    cooking: true,
    reading: true,
    number_of_pets: 1,
    favorite_books: [
        {
            author_name: 'Colleen Hoover',
            book_name: 'It Ends with Us',
            book_genre: 'Romance'
        },
        {
            author_name: 'Ilarion Pavliuk',
            book_name: 'I see that you are interested in darkness',
            book_genre: 'Horror'
        }
    ]
};

newObj = structuredClone(obj);
newObj.nameAndSurname = function () {
    console.log('Hi, my name is', this.name, this.surname);
};
newObj.nameAndSurname();

newObj.ageAndCity = function () {
    console.log('I\'m', this.age, 'years old and I live in', this.city);
};
newObj.ageAndCity();

newObj.favoriteBooks = function () {
    const booksAsString = this.skills.favorite_books
        .map((book) => `${book.author_name}: "${book.book_name}" (${book.book_genre})`)
        .join(', ');
    console.log('My favorite books are', booksAsString);
};

newObj.skills.favorite_books.push({
    author_name: 'Colleen Hoover',
    book_name: 'November 9',
    book_genre: 'Romance'
});

newObj.favoriteBooks();
