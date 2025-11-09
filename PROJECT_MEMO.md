# Project Memo

This file contains important notes and context about the project for the AI assistant to remember.

## Project History & Stack
- **Migration:** The project was migrated from a previous stack involving Loveable and Supabase. Any remaining code, dependencies, or configurations related to them are obsolete and should be removed.
- **Framework:** We migrated to Next.js primarily for its Server-Side Rendering (SSR) capabilities. SSR is a critical requirement for this project.
- **Hosting:** The project uses Firebase for hosting, Firestore for the database, and Google Cloud Storage for images. SSR enablement requires the Blaze plan and advanced hosting features.
- **Source Control:** The code is maintained in a GitHub repository and synced periodically.

## Technical Guidelines
- **SSR:** Do not use libraries that interfere with SSR, such as Helmet.
- **Dynamic Content:** The application relies heavily on dynamic content fetched from Firestore.
  - **Logos:** Header and footer logos are managed in the `logos` collection.
  - **Clients:** The clients section on the main page is powered by the `clients` collection.
  - **Events:** The `/event/[slug]` pages are dynamically generated using content from the `seo` and `events` collections.
- **Static Assets:** Images are stored and served from Google Cloud Storage.
  - **URL Format:** When referencing images from Cloud Storage, especially for use with the Next.js `<Image>` component, the URL must be stored in Firestore using the following format: `https://firebasestorage.googleapis.com/v0/b/{BUCKET_NAME}/o/{URL_ENCODED_FULL_PATH}?alt=media`.
  - The `{BUCKET_NAME}` for this project is `wesley-firebase-fork-120-56e79.firebasestorage.app`.
  - The `{URL_ENCODED_FULL_PATH}` is the full path to the file (e.g., `images/clients-1.png`) after being processed by `encodeURIComponent()`.

## Critical Configurations
- **Firebase Client SDK:** The Firebase client-side configuration is essential for connecting to Firestore and other services. The configuration files (`.firebaserc` and `src/integrations/firebase/client.ts`) must NOT be deleted or left empty, as this will break the application's ability to fetch dynamic data and will cause rendering issues.

## Troubleshooting Notes
- **Firestore Query Behavior:**
  - If a Firestore query (e.g., using `getDocs`) returns an empty array (`Docs count: 0`) when you know there is data in the collection, check the following:
    1.  **Security Rules:** Ensure the rules allow `read` access to the collection.
    2.  **`orderBy` Clause:** If you are using an `orderBy` clause in your query, make sure the field you are ordering by *actually exists* in all documents in that collection. If the field is missing, Firestore will return an empty result set without throwing a console error.
    3.  **Indexes:** For more complex queries involving filters (`where`) and sorting (`orderBy`), a composite index in `firestore.indexes.json` is likely required. If an index is missing, the Firebase SDK will usually log a clear error message in the console with a link to create the required index.

*This memo should be reviewed and updated by the AI assistant after significant changes or discoveries.*
