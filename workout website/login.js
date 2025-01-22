import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6W7rMyu35OvhLyfVU6XTJnO06o8RsTBY",
    authDomain: "gym-app-16653.firebaseapp.com",
    projectId: "gym-app-16653",
    storageBucket: "gym-app-16653.firebasestorage.app",
    messagingSenderId: "296812362978",
    appId: "1:296812362978:web:433fc7c9f24e43f44032bb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const email = document.getElementById('email');
const password = document.getElementById('password-input');
const submitButton = document.querySelector('button[type="submit"]');
const forgotPasswordLink = document.getElementById('forgot-password');

// Form submission handler
submitButton.addEventListener("click", function(event) {
    event.preventDefault();  

const emailValue = email.value;
const passwordValue = password.value;

signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "home.html"; // Redirect to home page afte login
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage}`);  
    });
});


// Forgot password?
forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value; // Get email value from the input field

    if (!emailValue) {
        alert('Enter your email address to reset your password.');
        return;
    }

    sendPasswordResetEmail(auth, emailValue)
        .then(() => {
            alert('Password reset has been sent to your email.');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});