function openModal() {
  const openButton = document.querySelector(".add-button");
  const formModal = document.querySelector("#popupForm");
  openButton.addEventListener("click", () => {
    formModal.showModal();
  });
}

function closeModal() {
  const closeButton = document.querySelector(".close-button");
  const formModal = document.querySelector("#popupForm");
  const allInputFields = document.querySelectorAll(".input-field");
  closeButton.addEventListener("click", () => {
    allInputFields.forEach((singleInputField) => (singleInputField.value = ""));
    formModal.close();
  });
}

openModal();
