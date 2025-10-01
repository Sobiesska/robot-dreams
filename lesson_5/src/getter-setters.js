const obj = {
    _name: 'Lilia',
    _surname: 'Podolska',
    _age: 37,
    _isRobotDreamsStudent: true,
    _city: 'Kyiv',
    _skills: {
        _cooking: true,
        _reading: true,
        _number_of_pets: 1,
        _favorite_books: [
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
        ],

        get favoriteBooks() {
            return this._favorite_books;
        },

        set favoriteBooks(value) {
            this._favorite_books = value;
        }
    },

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    },

    get surname() {
        return this._surname;
    },

    set surname(value) {
        this._surname = value;
    },

    get skills() {
        return this._skills;
    },

    set skills(value) {
        this._skills = value;
    }
};

console.log(obj.name);
console.log(obj.surname);
obj.surname = 'Pervak';
console.log(obj.surname);

console.log(obj.skills.favoriteBooks);
obj.skills.favoriteBooks = [...obj.skills.favoriteBooks, {
    author_name: 'Colleen Hoover',
    book_name: 'November 9',
    book_genre: 'Romance'
}];
console.log(obj.skills.favoriteBooks);
