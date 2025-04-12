// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSEAGEINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCxqXg7ARo6bjAJB44rkkLnmx6iTaBTSNs",
//   authDomain: "mhkm-programmer.firebaseapp.com",
//   projectId: "mhkm-programmer",
//   storageBucket: "mhkm-programmer.appspot.com",
//   messagingSenderId: "772332396401",
//   appId: "1:772332396401:web:36a075e3d8c6afe36860d0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);