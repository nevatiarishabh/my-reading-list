import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import books_data from './data/data.js';

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(createHomepageTemplate());
});

app.get('/books' ,(req, res) =>{
    res.send(createListTemplate());
});

app.post('/submit', (req, res) => {
    const id = Math.random().toString();
    const title = req.body.title;
    const author = req.body.author;
    
    books_data.push({id,title,author});
    res.redirect(`/books/${id}`);
});

app.get('/books/:id', (req, res)=>{
    const id = req.params.id;
    const book = books_data.find((b)=>b.id===id);
    res.send(createBookTemplate(book));
})

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});