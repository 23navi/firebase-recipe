import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();

const createDocument = async (collectionName, document) => {
  firestore.collection(collectionName).add(document);
};

const FirebaseFireStoreService = {
  createDocument,
};

export default FirebaseFireStoreService;
