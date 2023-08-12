document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContainer');
    const errorMessages = document.getElementById('errorMessages');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameInput = form.querySelector('input[name = "name"]');
        const bankSelect = form.querySelector('select[name="bank"]');
        const accountNumberInput = form.querySelector('#accountNumber');
        const secretCodeInput = form.querySelector('#secretCode');
        errorMessages.textContent = '';

        if (nameInput.value.trim() === '') {
            errorMessages.textContent = "Please enter your name."
            return;
        }
        if (bankSelect.value === '') {
            errorMessages.textContent = "Please select a bank"
            return;
        }
        if (accountNumberInput.value.trim() === '') {
            errorMessages.textContent = "Please enter your account number."
            return;
        }
        if (isNaN(accountNumberInput.value)) {

            errorMessages.textContent = "Account number must be a numerical value."
            return;
        }
        if (secretCodeInput.value.trim() === "") {
            errorMessages.textContent= "Please enter your sectet code"
            return;

        }
        form.submit();
        
})

})
