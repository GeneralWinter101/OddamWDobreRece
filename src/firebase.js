import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
		apiKey: "AIzaSyDzr9mJQ3E0WJh3S13Yl3jFJOgQ9LDlNBM",
		authDomain: "oddamwdobrerece-e3c21.firebaseapp.com",
		databaseURL: "https://oddamwdobrerece-e3c21-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "oddamwdobrerece-e3c21",
		storageBucket: "oddamwdobrerece-e3c21.appspot.com",
		messagingSenderId: "959734605807",
		appId: "1:959734605807:web:24a03a5aedd16a099db81a"
})

var db = firebaseApp.firestore();

export { db };