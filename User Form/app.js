
// event listeners for blur

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatephone);

// 

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }

}



function validateEmail() {
  const email = document.getElementById('email');
  const re = /^[A-Za-z]([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

}

function validatephone() {
  const phone = document.getElementById('phone');
  const re = /^\+(\d{1,3})[ ]?(\d{9,10})$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }

}

