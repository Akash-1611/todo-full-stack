async function registerUser() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    console.log(username,email,password)
    try {
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        console.log(data)

        if (response.ok) {
            document.getElementById("message").textContent = "Successful registration!";
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").textContent = `Registration failed: ${data.error || "Unknown error"}`;
            document.getElementById("message").style.color = "red";
        }
    } catch (error) {
        console.error("Error registering user:", error);
        document.getElementById("message").textContent = "An error occurred. Please try again.";
        document.getElementById("message").style.color = "red";
    }
}
