
book = {
    title: "A man called Ove",
    author: "Fredrik Backman",
    genres:"Humorous Fiction",
    published:"August 27, 2012",
    publisher:"Atria books"
}

function showDetails({title,author,genres,published,publisher}){
    console.log(`The book ${title} from the author ${author},a top seller of the genre ${genres} was published on ${published}.This book is available in ${publisher}`);
}

showDetails(book);