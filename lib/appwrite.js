import { Client, Account, ID, Databases, Storage } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "675b15b8002198ca353b",
  platform: "com.ambulanceService.nas",
  databaseId: "675d64100025467853d1",
  userCollectionId: "675d6611003d5b77afd3",
  preHospitalCareCollectionId: "675d642b003525490735",
  preBillingCollectionId: "675d7e310011f3b72a65",
};

const {
  endpoint,
  projectId,
  platform,
  databaseId,
  userCollectionId,
  preHospitalCareCollectionId,
  preBillingCollectionId,
} = config;

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const storage = new Storage(client);
const databases = new Databases(client);
const account = new Account(client);

export const createUser = async (email, username, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      username,
      password
    );

    if (!newAccount) throw new Error();

    await signIn(email, password);

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.log("email sent:", email);
    console.log("email password:", password);
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};

export const createPreHospitalCare = async (patientInfo) => {
  try {
    const newPatientInfo = await databases.createDocument(
      databaseId,
      preHospitalCareCollectionId,
      ID.unique(),
      patientInfo
    );
    return newPatientInfo;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const createPreBillingForm = async (preBilling) => {
  try {
    const newPatientInfo = await databases.createDocument(
      databaseId,
      preBillingCollectionId,
      ID.unique(),
      preBilling
    );
    return newPatientInfo;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
};
