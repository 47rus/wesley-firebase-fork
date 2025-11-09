const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();

const clients = [
    { fileName: "clients-1.png", altText: "Client 1", order: 1 },
    { fileName: "clients-2.png", altText: "Client 2", order: 2 },
    { fileName: "clients-3.png", altText: "Client 3", order: 3 },
    { fileName: "clients-4.png", altText: "Client 4", order: 4 },
    { fileName: "clients-5.png", altText: "Client 5", order: 5 },
    { fileName: "clients-6.png", altText: "Client 6", order: 6 },
    { fileName: "clients-7.png", altText: "Client 7", order: 7 },
    { fileName: "clients-8.png", altText: "Client 8", order: 8 },
    { fileName: "clients-9.png", altText: "Client 9", order: 9 },
    { fileName: "clients-10.png", altText: "Client 10", order: 10 },
    { fileName: "clients-11.png", altText: "Client 11", order: 11 },
    { fileName: "clients-12.png", altText: "Client 12", order: 12 },
];

async function migrateClients() {
  const clientsCollection = db.collection("clients");
  const snapshot = await clientsCollection.get();
  if (!snapshot.empty) {
    console.log("Clients collection already exists. Skipping migration.");
    return;
  }

  for (const client of clients) {
    await clientsCollection.add(client);
    console.log(`Added client: ${client.fileName}`);
  }
}

migrateClients();
