"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { db } from "../../lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "../../components/ui/button";

function TestPage() {
  const { getToken } = useAuth();
  
  const signInWithClerk = async () => {
    const auth = getAuth();
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token);
    const uid = userCredentials.user.uid;
    console.log("user :: ", uid);
    return uid;
  };

  

  const handleLoad = async () => {
    const loadedUid = await signInWithClerk();
    // loadData(loadedUid);
  };

  return (
    <div className="flex flex-col  justify-center w-full">
      <div className="flex justify-center gap-2">
        <Button onClick={handleLoad}>Load Data</Button>
      </div>
    </div>
  );
}

export default TestPage;


