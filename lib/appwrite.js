import { Client, Account, ID, Databases, Storage } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "675b15b8002198ca353b",
  platform: "com.ambulanceService.nas",
  databaseId: "",
  userCollectionId: "",
  storageId: "",
};

const {
  endpoint,
  projectId,
  platform,
  storageId,
  databaseId,
  userCollectionId,
} = config;

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const storage = new Storage(client);
const database = new Databases(client);
