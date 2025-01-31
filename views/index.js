const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-swap="innerHTML" hx-target=".book-list">Show Books!</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
           <form hx-on::after-request="document.querySelector('form').reset()"
           hx-on:click="console.log('Clicked',event)" hx-post="/submit" hx-target=".book-list ul" hx-swap="beforeend">
            <input type="text" name="title" placeholder="title" required/>
            <input type="text" name="author" placeholder="author" required/>
            <button>Add Book</button>
           </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;