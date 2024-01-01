import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//     match /messages/(docId){
//        allow read : if request.auth.uid != null ; 
//        allow create: if canCreateMessage();
//        }
//        function canCreateMessages(){
//        let isSignedIn = request.auth.uid != null;
//        let isOwner = request.auth.uid == request.resource.data.uid;
//        let isNotBanned = exists(
//        /databases/$(databases)/documents/banned/$(request.auth.uid)
//        ) == false; 
       
//        return isSignedIn && isOwner && isNotBanned ;
//        }
//   }
// }

