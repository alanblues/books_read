let books = [
    { id: 1, title: 'el millonario instantaneo', author: 'Mark Fisher', leido: false },
    { id: 2, title: 'el talento nunca es suficiente', author: 'Jhn Maxwell', leido: true },
    { id: 3, title: '31 reglas par vivir', author: 'desconocido', leido: false }
];

export const getBooks = () => books;

export const registerBook = (book) => {
    books.push(book);
}