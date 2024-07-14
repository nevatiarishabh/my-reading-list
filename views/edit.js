const createEditFormTemplate = (book) =>/*html*/`
    <form hx-post="/books/edit/${book.id}" hx-target="closest li" hx-swap="outerHTML">
        <input type="text" name="title" placeholder="title" value="${book.title}" required/>
        <input type="text" name="author" placeholder="author" value="${book.author}" required/>
        <button>Add Book</button>
    </form>
`;

export default createEditFormTemplate;