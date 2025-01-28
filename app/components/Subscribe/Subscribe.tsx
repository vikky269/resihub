"use client"
import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from "../../../utils/firebase";
import { useState } from 'react'

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // Handle form submission
interface Subscriber {
  email: string;
  timestamp: Date;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault(); // Prevent page reload
  setLoading(true);
  try {
    // Add email to Firestore collection
    const docRef = await addDoc(collection(db, "subscribers"), {
      email: email,
      timestamp: new Date(),
    } as Subscriber);
    console.log("Document written with ID: ", docRef.id);
    setSuccessMessage("You have successfully subscribed to the mailing list!");
    setErrorMessage("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // 30 seconds

    setEmail(""); // Clear the input field
    setLoading(false);
  } catch (error) {
    console.error("Error adding document: ", error);
    setErrorMessage("An error occurred. Please try again.");
    setSuccessMessage("");

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }
};
  return (
    <div>
         <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              required
              className="waitlist-input placeholder:text-sm lg:placeholder:text-lg border-none focus:outline-none"
            />
            <button
              type="submit"
              className="waitlist-btn"
            >
              {loading ?  "Submitting....." : "Submit"}
            </button>
     </form>

      {successMessage && <p className='mt-4' style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p  className="mt-4" style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  )
}

export default Subscribe
