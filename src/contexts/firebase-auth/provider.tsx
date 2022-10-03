import * as Firebase from 'firebase/app';
import {FC, ReactNode} from 'react';

import {FirebaseAuthContext} from './context';

interface IProps {
  children: ReactNode;
}

const firebaseCredentials = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  apiKey: 'AIzaSyDWOLwyvdWkbcBqzXAQRMVMN-JPn_32MIk',
  authDomain: 'mmo-tshirt.firebaseapp.com',
  databaseURL: 'https://mmo-tshirt-default-rtdb.firebaseio.com',
  projectId: 'mmo-tshirt',
  storageBucket: 'mmo-tshirt.appspot.com',
  messagingSenderId: '188361230644',
  appId: '1:188361230644:web:bf58f2b097ec4f6f97fd61'
};

Firebase.initializeApp(firebaseCredentials);

// const auth = Firebase.auth();

export const FirebaseAuthProvider: FC<IProps> = ({children}) => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = Firebase.auth.onAuthStateChanged(firebaseUser => {
  //     setUser(firebaseUser);
  //   });

  //   return unsubscribe;
  // }, []);

  return <FirebaseAuthContext.Provider value={{de: 44}}>{children}</FirebaseAuthContext.Provider>;
};
