import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfAssu0WzL4lpaXmCTeJIKacqhDUiUvAM",
  authDomain: "vrindasfarm.firebaseapp.com",
  projectId: "vrindasfarm",
  storageBucket: "vrindasfarm.firebasestorage.app",
  messagingSenderId: "768518251628",
  appId: "1:768518251628:web:b8fe1c89766572b768e449",
  measurementId: "G-RKEM9ZLEFZ"
};

const app = initializeApp(firebaseConfig);

export default app;