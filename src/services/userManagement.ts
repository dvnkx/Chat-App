import {collection, setDoc, doc, getDocs} from 'firebase/firestore';
import {db, auth} from '../firebase/firebase';

const usersColRef = collection(db, 'Users');

export const uploadEmailToServer = async (uid: string, email: string) => {
  await setDoc(doc(usersColRef, `user${uid}`), {
    email,
    onlineStatus: true,
  });
};

//TODO make one function instead of these two

export const uploadUserOnlineStatus = async (id: string, online: boolean) => {
  const usersDocRef = doc(db, 'Users', `user${id}`);
  await setDoc(usersDocRef, {onlineStatus: online}, {merge: true});
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
