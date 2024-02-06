let booksArray = [];
let currentIndex = 0;

function openModal() {
  const openButton = document.querySelector(".add-button");
  const formModal = document.querySelector("#popupForm");
  openButton.addEventListener("click", () => {
    formModal.showModal();
  });
}

function closeModalButton() {
  const closeButton = document.querySelector(".close-button");
  const formModal = document.querySelector("#popupForm");
  const allInputFields = document.querySelectorAll(".input-field");
  closeButton.addEventListener("click", () => {
    allInputFields.forEach((singleInputField) => (singleInputField.value = ""));
    formModal.close();
  });
}

// function submitFormButton() {
//   const submitButton = document.querySelector(".submit-button");
//   const formModal = document.querySelector("#popupForm");
//   const allInputFields = document.querySelectorAll(".input-field");
//   submitButton.addEventListener("click", () => {
//     allInputFields.forEach((singleInputField) => (singleInputField.value = ""));
//     formModal.close();
//   });
// }

function submitForm(event) {
  event.preventDefault();

  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;
  const readStatus = document.getElementById("book-status");
  const formModal = document.querySelector("#popupForm");
  const allInputFields = document.querySelectorAll(".input-field");

  let bookStatus = readStatus.checked ? "Read" : "Unread";

  const newBookObject = {
    index: currentIndex,
    title: title,
    author: author,
    pages: pages,
    bookStatus: bookStatus,
  };

  currentIndex++;

  allInputFields.forEach((singleInputField) => (singleInputField.value = ""));
  formModal.close();

  booksArray.push(newBookObject);

  displayBooks();
}

function deleteBook(index) {
  booksArray = booksArray.filter((book) => {
    return book.index !== index;
  });

  displayBooks();
}

function displayBooks() {
  let cardContainer = document.querySelector(".card-container");

  cardContainer.innerHTML = "";

  booksArray.forEach((book) => {
    let card = document.createElement("div");
    card.className = "card-element";

    let bookTitle = document.createElement("div");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement("div");
    bookAuthor.className = "book-author";
    bookAuthor.textContent = book.author;

    let bookPages = document.createElement("div");
    bookPages.className = "book-pages";
    bookPages.textContent = book.pages;

    let bookStatus = document.createElement("div");
    bookStatus.className = "book-status";
    bookStatus.textContent = book.bookStatus;

    let singleBookRemoveBtn = document.createElement("button");
    singleBookRemoveBtn.className = "remove-btn";
    singleBookRemoveBtn.textContent = "Delete";
    singleBookRemoveBtn.addEventListener("click", () => {
      deleteBook(book.index);
    });

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(singleBookRemoveBtn);

    cardContainer.appendChild(card);
  });
}

openModal();
