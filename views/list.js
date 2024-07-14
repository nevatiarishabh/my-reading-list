import books_data from "../data/data.js";
import createBookTemplate from './book.js';

const createListTemplate = () => /*html*/`
    <ul>
        ${books_data.map((book) => createBookTemplate(book)).join('')}
    </ul>
`;

export default createListTemplate;