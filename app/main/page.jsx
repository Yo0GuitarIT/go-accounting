"use client";
// import { db } from "../../firebase";
// import { collection, addDoc } from "firebase/firestore";



function MainPage() {




  // const handleButtonClick = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "user123"), {
  //       first: "Ado",
  //       last: "Lovelace",
  //       born: 1666,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  return (
    <>
      <p className="text-bold text-2xl">Main Page Here</p>
      {/* <button onClick={handleButtonClick}>OK</button> */}
    </>
  );
}

export default MainPage;
