"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { app, db } from "../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

function TestPage() {
  const { getToken } = useAuth();
  const [uid, setUid] = useState();

  const signInWithClerk = async () => {
    const auth = getAuth();
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token);
    const uid = userCredentials.user.uid;
    setUid(uid);
    console.log("user ::", uid);
  };

  useEffect(() => {
    signInWithClerk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (uid) => {
    try {
      const docRef = await addDoc(collection(db, uid), {
        item: "lunch",
        cost: 800,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      {/* <div>
        <button
          className="mb-2 hover:text-rose-600"
          onClick={() => handleClick(uid)}
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-4 px-2 bg-rose-300 w-full">
        <p>userID</p>
        <p>{uid}</p>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Total</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default TestPage;
