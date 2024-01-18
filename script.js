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

function submitFormButton() {
  const submitButton = document.querySelector(".submit-button");
  const formModal = document.querySelector("#popupForm");
  const allInputFields = document.querySelectorAll(".input-field");
  submitButton.addEventListener("click", () => {
    allInputFields.forEach((singleInputField) => (singleInputField.value = ""));
    formModal.close();
  });
}

function getFormData() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    for (item of formData) {
      console.log(item);
    }
  });
}

openModal();
submitFormButton();
