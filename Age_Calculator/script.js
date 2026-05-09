const  UserDate = document.getElementById('birth-date');
const displayAge = document.querySelector('.display-age')

function calculateAge() {
    let Age = UserDate.value;

    let currentDate = new Date();
    let birthDate = new Date(Age);

    let ageDifference = currentDate.getFullYear() - birthDate.getFullYear()
    let monthDifference = currentDate.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        ageDifference--;
    }

    if (Age === '') {
        displayAge.innerHTML = `Please enter your date of birth.`;
        return;
    }

    displayAge.innerHTML = `YOO!, You're: ${ageDifference} years old`;
      
    
}