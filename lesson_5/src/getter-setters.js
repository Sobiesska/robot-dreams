const obj = {
    _name: 'Lilia',
    _surname: 'Podolska',
    _age: 37,
    _isRobotDreamsStudent: true,
    _city: 'Kyiv',
    _skills: {
        _cooking: true,
        _reading: true,
        _numberOfPets: 1,
        _favoriteBooks: [
            {
                _authorName: 'Colleen Hoover',
                _bookName: 'It Ends with Us',
                _bookGenre: 'Romance'
            },
            {
                _authorName: 'Ilarion Pavliuk',
                _bookName: 'I see that you are interested in darkness',
                _bookGenre: 'Horror'
            }
        ],

        get favoriteBooks() {
            return this._favoriteBooks;
        },

        set favoriteBooks(value) {
            this._favoriteBooks = value;
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
    _authorName: 'Colleen Hoover',
    _bookName: 'November 9',
    _bookGenre: 'Romance'
}];
console.log(obj.skills.favoriteBooks);
