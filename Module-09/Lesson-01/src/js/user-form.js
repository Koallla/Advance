import userForm from '../templates/user-form.hbs';

export class UserForm {
  constructor() {
    this.formContainer = document.querySelector('.user-form-container');
    this.renderForm();
    this.form = this.formContainer.querySelector('.user-form');
    this.nameInput = this.form.querySelector('.user-form__name');
    this.descriptionInput = this.form.querySelector('.user-form__description');
  }

  renderForm() {
    this.formContainer.innerHTML = userForm();
  }

  getFormData() {
    return {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
    };
  }

  addUser(user) {
    const userList = JSON.parse(localStorage.getItem('userList'));
    localStorage.setItem('userList', JSON.stringify([...userList, user]));
  }

  addSubmitListener() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.addUser(this.getFormData());
    });
  }

  init() {
    this.addSubmitListener();
  }
}
