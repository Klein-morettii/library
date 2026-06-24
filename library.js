const library = []

function book(book, author, words, chaps, status){
    this.id = crypto.randomUUID()
    this.bookName = book
    this.authorName = author
    this.wordCount = words
    this.chapCount = chaps
    this.status = status
}
const add = document.querySelector("#addNovel")

const bName = document.querySelector("#bName")
const aName = document.querySelector("#author")
const noChaps = document.querySelector("#chaps")
const noWord = document.querySelector("#wordCount")
const state = document.querySelector("#status")

const grid = document.querySelector("#gridContainer")
const cell = document.createElement("div")

add.addEventListener("click", ()=>{
    cell.style.height = "300px"
    cell.style.width = "220px"
    cell.style.backgroundColor = "blanchedalmond"
    cell.style.border = "1px solid black"
    cell.style.borderRadius = "5px"
    cell.style.boxShadow = "3px 3px 5px black"
    cell.style.gap = "10px"
    cell.style.margin = "10px"

    grid.append(cell)
})
const form = document.querySelector("form")
form.addEventListener("submit", ()=>{
    function addBookToLibrary(){
        const books = new book (bName.value, aName.value, noWord.value, noChaps.value, state.value )
        library.push(books)
}
})


