const button = document.querySelector('.btn');
const passwordField = document.querySelector('.password');
const lengthInput = document.querySelector('.length');
const generatePassword = (iteration) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for(let i = 1; i<=iteration; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
console.log(generatePassword(10))
button.addEventListener('click', (event) => {
  event.preventDefault();
  passwordField.textContent = generatePassword(document.querySelector('.length').value);

  if(lengthInput.value === '' || lengthInput.value <= 0){
    passwordField.textContent = 'Please enter a valid length';
  }
})