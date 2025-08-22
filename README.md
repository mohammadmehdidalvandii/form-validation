# Register Form with Realtime Validation

A clean registration form built with **HTML, CSS, and JavaScript** featuring **realtime validation**.

---

## 🔹 Features

- Realtime input validation as the user types
- Validation rules for username, email, password, confirm password
- Shows error ❌ or success ✅ messages
- Clears form and messages after successful submission
- Responsive and simple design

---

## 🔹 HTML Structure

```html
<form id="form">
  <div class="form_group">
    <label for="username">Username</label>
    <input type="text" id="username" placeholder="Enter username">
    <small></small>
  </div>
  <div class="form_group">
    <label for="email">Email</label>
    <input type="text" id="email" placeholder="Enter email">
    <small></small>
  </div>
  <div class="form_group">
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter password">
    <small></small>
  </div>
  <div class="form_group">
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" placeholder="Repeat password">
    <small></small>
  </div>
  <button type="submit">Register</button>
</form>
```
```js
// 1️⃣ Get form elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// 2️⃣ Realtime validation for username
username.addEventListener('input', () => {
  if(username.value.trim().length < 3){
    showError(username, 'Username must be at least 3 characters long ❌');
  } else {
    showSuccess(username, 'Username is valid ✅');
  }
});

// 3️⃣ Realtime validation for email
email.addEventListener('input', () => {
  if(!validateEmail(email.value)){
    showError(email, 'Email is not valid ❌');
  } else {
    showSuccess(email, 'Email is valid ✅');
  }
});

// 4️⃣ Realtime validation for password
password.addEventListener('input', () => {
  if(password.value.length < 6){
    showError(password, 'Password must be at least 6 characters long ❌');
  } else {
    showSuccess(password, 'Password is valid ✅');
  }
});

// 5️⃣ Realtime validation for confirm password
confirmPassword.addEventListener('input', () => {
  if(password.value !== confirmPassword.value){
    showError(confirmPassword, 'Passwords do not match ❌');
  } else {
    showSuccess(confirmPassword, 'Confirm password is valid ✅');
  }
});

// 6️⃣ Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(
    username.value.trim().length >= 3 &&
    validateEmail(email.value) &&
    password.value.length >= 6 &&
    password.value === confirmPassword.value
  ){
    alert("Register is successfully ✅");
    form.reset();
    clearAllMessages();
  } else {
    alert("Please fix the errors ❌");
  }
});

// 7️⃣ Show error message
function showError(input, message){
  const error = input.nextElementSibling;
  error.textContent = message;
  error.classList.remove('success');
  error.classList.add('error');
  error.style.display = 'block';
  input.style.borderColor = "red";
}

// 8️⃣ Show success message
function showSuccess(input, message){
  const error = input.nextElementSibling;
  error.textContent = message;
  error.classList.remove('error');
  error.classList.add('success');
  error.style.display = 'block';
  input.style.borderColor = "green";
}

// 9️⃣ Clear all messages
function clearAllMessages(){
  document.querySelectorAll('small.error, small.success').forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}

// 🔟 Validate email format
function validateEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
```


## 🔹 How It Works
- Realtime validation: Each input field listens for input events and validates immediately.
- Error/Success feedback: Displays messages under each field with colors.
- Submit check: Form checks all fields one last time before alerting success.
- Reset form: Clears all fields and messages after successful submission.

**Made with ❤️ using HTML, CSS, and JavaScript**