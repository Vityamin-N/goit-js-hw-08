import throttle from 'lodash.throttle';
const items = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form [name="email"]'),
  message: document.querySelector('.feedback-form [name="message"]'),
};
const STORAGE_FEEDBACK_FORM = 'feedback-form-state';
const throttledOnFeedbackFormInput = throttle(onFeedbackFormInput, 500);
let formState = {};

if (localStorage[STORAGE_FEEDBACK_FORM]) {
  try {
    formState = JSON.parse(localStorage[STORAGE_FEEDBACK_FORM]);
  } catch {
    formState.email = '';
    formState.message = '';
  }
  items.email.value = formState.email ? formState.email : '';

  items.message.value = formState.message ? formState.message : '';
}

items.form.addEventListener('input', throttledOnFeedbackFormInput);
items.form.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(evt) {
  formState[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_FEEDBACK_FORM, JSON.stringify(formState));
}
function onFeedbackFormSubmit(evt) {
  evt.preventDefault();
  const feedbackFormData = {
    email: evt.target.email.value,
    message: evt.target.message.value,
  };
  console.log(feedbackFormData);
  localStorage.removeItem(STORAGE_FEEDBACK_FORM);
  evt.target.reset();
}
