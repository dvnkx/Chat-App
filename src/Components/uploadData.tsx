import {
  collection,
  setDoc,
  doc,
  getDoc,
  DocumentData,
  getDocs,
} from 'firebase/firestore';
import {db, auth} from '../firebase/firebase';
import {query, where} from 'firebase/firestore';

const usersColRef = collection(db, 'Users');

export const uploadEmailToServer = async () => {
  await setDoc(doc(usersColRef, `user${auth.currentUser!.uid}`), {
    email: auth.currentUser!.email,
    onlineStatus: true,
  });
};

export const uploadFStatusToServer = async () => {
  const usersDocRef = doc(db, 'Users', `user${auth.currentUser!.uid}`);
  await setDoc(usersDocRef, {onlineStatus: false}, {merge: true});
};

export const uploadTStatusToServer = async () => {
  const usersDocRef = doc(db, 'Users', `user${auth.currentUser!.uid}`);
  await setDoc(usersDocRef, {onlineStatus: true}, {merge: true});
};

export const uploadProfileDataToServer = async () => {
  const usersDocRef = doc(db, 'Users', `user${auth.currentUser!.uid}`);
  await setDoc(
    usersDocRef,
    {
      name: auth.currentUser!.displayName,
    },
    {merge: true},
  );
};

export const getData = getDocs(usersColRef);

export const getAllUsers = getDocs(usersColRef);
