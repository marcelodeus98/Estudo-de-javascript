/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(`Total categories :${booksByCategory.length}`);

for(let category of booksByCategory){
    console.log(`Total books in ${category.category} = ${category.books.length}`);
}

let  countAuthors = () => {
    let authores = [];
    for(let category of booksByCategory){
        for(let books of category.books){
            if(authores.indexOf(books.author) == -1){
                authores.push(books.author)
            }
        }
    }
    console.log(`Total of authores is: ${authores.length}`);
}

countAuthors();

let  seachBooksOFCurry = () => {
    let booksofCurry = [];
    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author === 'Augusto Cury'){
                booksofCurry.push(books.title)
            }
        }
    }
    console.log(`The books of Augusto Cury is: ${booksofCurry.join(', ')}`);
}

seachBooksOFCurry();

let  seachBooksO


SeachBookOfAuthor = (author) => {
    let booksOfAuthor = [];
    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author === author){
                booksOfAuthor.push(books.title)
            }
        }
    }
    console.log(`The books of ${author} is: ${booksOfAuthor.join(', ')}`)
}    
    
SeachBookOfAuthor('Stephen R. Covey');

