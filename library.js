const library = []

function Book(book, author, words, chaps, status){
    this.id = crypto.randomUUID()
    this.bookName = book
    this.authorName = author
    this.wordCount = words
    this.chapCount = chaps
    this.status = status
}

const add = document.querySelector("#addNovel") /* submit button */

const bName = document.querySelector("#bName")
const aName = document.querySelector("#author")
const noChaps = document.querySelector("#chaps")
const noWord = document.querySelector("#wordCount")
const state = document.querySelector("#status")

const grid = document.querySelector("#gridContainer")
const form = document.querySelector("form")
form.addEventListener("submit", (e)=>{

        e.preventDefault()
        const books = new Book (bName.value, aName.value, noWord.value, noChaps.value, state.value)
        library.push(books)
        console.log(library)

        const cell = document.createElement("div")
        cell.style.height = "400px"
        cell.style.width = "auto"
        cell.style.backgroundColor = "blanchedalmond"
        cell.style.border = "1px solid black"
        cell.style.borderRadius = "5px"
        cell.style.boxShadow = "3px 3px 5px black"
        cell.style.display = "flex"
        cell.style.flexDirection ="column"
        cell.style.gap = "10px"
        cell.style.margin = "10px"

        grid.append(cell)

        const novelName = document.createElement("div")
        const writerName = document.createElement("div")
        const chapter = document.createElement("div")
        const word = document.createElement("div")
        const status = document.createElement("div")

        novelName.textContent = bName.value
            novelName.style.fontSize = "3rem"
            novelName.style.textDecoration = "bold"
            novelName.style.textShadow = "4px 4px 5px gray"
            novelName.style.marginBottom = "10px"
            novelName.style.padding = "5px"
            novelName.style.textAlign = "center"
            cell.append(novelName)

        writerName.textContent = "Author Name:" + aName.value
            writerName.style.fontSize = "2rem"
            writerName.style.padding = "5px"
            writerName.style.textAlign = "left"
            cell.append(writerName)

        chapter.textContent = "Chapters:" + noChaps.value
            chapter.style.fontSize = "2rem"
            chapter.style.padding = "5px"
            chapter.style.textAlign = "left"
            cell.append(chapter)

        word.textContent = "Word Count:" + noWord.value
            word.style.fontSize = "2rem"
            word.style.padding = "5px"
            word.style.textAlign = "left"
            cell.append(word)

        status.textContent = "Status:" + state.value
            status.style.fontSize = "2rem"
            status.style.padding = "5px"
            status.style.textAlign = "left"
            cell.append(status)

        const contain = document.createElement("div")
            contain.style.display = "flex"
            contain.style.justifyContent = "space-evenly"
            contain.style.alignItems = "center"
            contain.style.marginTop = "auto"
            cell.append(contain)

        const remove = document.createElement("button")
            remove.textContent = "remove"
            remove.style.border = "1px solid snow"
            remove.style.display = "flex"
            remove.style.flexDirection = "column"
            remove.style.marginBottom = "10px"
            remove.style.height = "2em"
            remove.style.width = "5em"
            remove.style.borderRadius = "5px"

            contain.append(remove)
})


