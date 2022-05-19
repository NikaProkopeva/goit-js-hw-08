import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM = 'feedback-form-state';
let formData = {};

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(event) {
  formData[event.target.name] = event.target.value;
  const currentData = JSON.parse(localStorage.getItem(FORM));
  localStorage.setItem(FORM, JSON.stringify({ ...currentData, ...formData }));
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM)));
  localStorage.removeItem(FORM);
  formData = {};
}

function populateEmail() {
  const savedData = JSON.parse(localStorage.getItem(FORM));

  if (savedData?.email) {
    feedbackForm.email.value = savedData.email;
  }
}
function populateMessage() {
  const savedData = JSON.parse(localStorage.getItem(FORM));

  if (savedData?.message) {
    feedbackForm.message.value = savedData.message;
  }
}

populateEmail();
populateMessage();
