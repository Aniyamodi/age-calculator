document.getElementById("calculateBtn").addEventListener("click", calculateAge);

function calculateAge() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    // Validate input
    if (!day!month!year) {
        alert("Please enter a valid date.");
        return;
    }

    // Get current date
    var currentDate = new Date();

    // Create a Date object with the provided input
    var dob = new Date(year, month - 1, day);

    // Calculate age
    var age = currentDate.getFullYear() - dob.getFullYear();

    // Check if birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display result
    document.getElementById("result").innerText = "You are " + age + " years old.";
}
