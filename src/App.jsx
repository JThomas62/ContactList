import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

// Defining the main App component
export default function App() {
  // Using the useState hook to manage the 'selectedContactId' state
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Rendering either the ContactList or SelectedContact component based on 'selectedContactId'
  return (
    <>
      {selectedContactId ? ( // Conditional rendering based on whether a contact is selected
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}