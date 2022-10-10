import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCDYbJw-vCjUlJpeo6M77oEHjumky0aWUA',
  authDomain: 'club-eccomerce.firebaseapp.com',
  projectId: 'club-eccomerce',
  storageBucket: 'club-eccomerce.appspot.com',
  messagingSenderId: '354555350297',
  appId: '1:354555350297:web:5a728705b2f54270d9c988'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
