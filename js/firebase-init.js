  import { initializeApp }    from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js';
  import { getAnalytics }     from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js';
  import {
    getFirestore,
    collection,
    doc,
    setDoc,
    serverTimestamp,
    query,
    where,
    getDocs
  } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js';
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
  } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js';

  const firebaseConfig = {
    apiKey:            "AIzaSyAPz6HiFOELhGtzWtBGF637s8LD6xm5CEA",
    authDomain:        "quraan-arabi-academy.firebaseapp.com",
    projectId:         "quraan-arabi-academy",
    storageBucket:     "quraan-arabi-academy.firebasestorage.app",
    messagingSenderId: "609818069913",
    appId:             "1:609818069913:web:9c8beff9f225925e272108",
    measurementId:     "G-TF9019KSLD"
  };

  const app      = initializeApp(firebaseConfig);
  const db       = getFirestore(app);
  const storage  = getStorage(app);

  getAnalytics(app);

  // Expose everything submitForm() needs via a single clean namespace
  window._QAA_DB      = db;
  window._QAA_STORAGE = storage;
  window._QAA_FIREBASE = {
    db, storage,
    collection, doc, setDoc, serverTimestamp,
    query, where, getDocs,
    ref, uploadBytes, getDownloadURL
  };

  console.log('✅ Quraan Arabi Academy — Firebase ready (Firestore + Storage)');
