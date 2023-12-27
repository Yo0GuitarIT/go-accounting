"use client";

import { useAuth } from "@clerk/nextjs";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect, useState } from "react";
import {app} from "../../lib/firebaseConfig"

function TestPage() {
  const { getToken } = useAuth();
  const [uid, setUid] = useState("");

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token);
      const uid = userCredentials.user.uid;
      console.log("user ::", uid);
      return uid;
    };

    signInWithClerk().then((userUid) => setUid(userUid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>userID</p>
      <p>{uid}</p>
    </div>
  );
}

export default TestPage;
