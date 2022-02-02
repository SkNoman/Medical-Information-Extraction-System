const username1 = document.querySelector('#username');
const id1 = document.querySelector('#id');
const email1 = document.querySelector('#email');
const password1 = document.querySelector('#password');
const confirmpassword1 = document.querySelector('#confirmpassword');

const form = document.querySelector('#signup');
console.log(form);

const checkUsername = () =>
{

	let valid = false;
	const min = 3;
	const max = 10;

	const username = username1.value.trim();

	if(!isRequired(username))
	{
		showError(username1, 'Username cannot be blank.')
	}
	else if(!isBetween(username.length, min, max))
	{
		showError(username1, `Username must be between ${min} and ${max}  characters.`)
	}
	else 
	{
		showSuccess(username1);
		valid = true
	}
	return valid


}

const checkId = () =>
{

	let valid = false;
	const min = 3;
	const max = 10;

	const id = id1.value.trim();

	if(!isRequired(id))
	{
		showError(id1, 'Your Id cannot be blank.')
	}
	else if(!isBetween(id.length, min, max))
	{
		showError(id1, `Id must be between ${min} and ${max}  characters.`)
	}
	else 
	{
		showSuccess(username1);
		valid = true
	}
	return valid


}


const checkEmail = () =>
{
	let valid = false;


	const email = email1.value.trim();

	if(!isRequired(email))
	{
		showError(email1, 'Email cannot be blank.')
	}
	else if(!isEmailValid (email))
	{
		showError(email1, `Email is not valid.`)
	}
	else 
	{
		showSuccess(email1);
		valid = true
	}
	return valid
}
const checkPassword = () =>
{
	let valid = false;


	const password = password1.value.trim();

	if(!isRequired(password))
	{
		showError(password1, 'Password cannot be blank.')
	}
	else if(!isPasswordSecure(password))
	{
		showError(password1, `Password must has small letter, capital letter,.......`)
	}
	else 
	{
		showSuccess(password1);
		valid = true
	}
	return valid
	
}
const checkConfirmPassword = () =>
{
	let valid = false;


	const password = password1.value.trim();
	const confirmpassword = confirmpassword1.value.trim();
	if(!isRequired(confirmpassword))
	{
		showError(confirmpassword1, 'Password cannot be blank.')
	}
	else if(password !== confirmpassword)
	{
		showError(confirmpassword1, `Password doesnot match.`)
	}
	else 
	{
		showSuccess(confirmpassword1);
		valid = true
	}
	return valid
	
}
const showError = (input, message) =>
{
	const formField = input.parentElement;
	formField.classList.remove('success')
	formField.classList.add('error')
	const error = formField.querySelector('small');
	error.textContent = message
} 
const showSuccess = (input) =>
{
	const formField = input.parentElement;
	formField.classList.remove('error')
	formField.classList.add('success')
	const error = formField.querySelector('small');
	error.textContent = ''
} 




const isRequired = value => value === ''? false:true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

form.addEventListener('submit', function (e) {
	// body...
	e.preventDefault()
	let isUsernameValid = checkUsername();
	let isIdValid = checkId();
	let isEmailValid = checkEmail();
	let isPasswordValid = checkPassword();
	let isCheckPasswordValid = checkConfirmPassword()


	let isFormValid = isUsernameValid && isIdValid && isEmailValid && isPasswordValid && isCheckPasswordValid;
	console.log(isFormValid)
	if (isFormValid) 
	{
		alert("Successfully Registered. Welcome " + username1.value + " to our page.")
	}


})