import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyB6W7rMyu35OvhLyfVU6XTJnO06o8RsTBY",
    authDomain: "gym-app-16653.firebaseapp.com",
    projectId: "gym-app-16653",
    storageBucket: "gym-app-16653.firebasestorage.app",
    messagingSenderId: "296812362978",
    appId: "1:296812362978:web:433fc7c9f24e43f44032bb"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form input fields and button
const email = document.getElementById('email');
const name = document.getElementById('name');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');

// Form submission handler
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Get values from input fields
    const emailValue = email.value;
    const passwordValue = password.value;

    // Create a new user with email and password
    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!");
            window.location.href = "login.html";
            // Optionally, redirect to login or dashboard page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});