import { getApps, initializeApp, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin_firestore";
import { getAuth } from "firebase-admin/auth";

let app: App;

if(!getApps().length) {
    const projectId = process.env.FIREBASE_PROJECT_ID!;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
    const rawKey = process.env.FIREBASE_PRIVATE_KEY!;
    const privateKey = rawKey.replace(/\\n/g, "n");

    app = initializeApp({
        credential: cert({ projectId, clientEmail, privateKey }),
        projectId,
    });
} else {
    app = getApps()[0]!;
}

export const adminDB = getFirestore(app);
export const adminAuth = getAuth(app);