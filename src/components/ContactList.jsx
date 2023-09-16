import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

// Dummy data for initial contact list
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

// Exporting a functional component named ContactList
export default function ContactList({ setSelectedContactId }) {
  // Using the useState hook to manage the 'contacts' state
  const [contacts, setContacts] = useState(dummyContacts);

  // Logging the current state of 'contacts'
  console.log("Contacts: ", contacts);

  // Using the useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    // Defining an asynchronous function to fetch contacts
    async function fetchContacts() {
      try {
        // Sending a GET request to the specified API endpoint
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );

        // Checking if the response status is OK; otherwise, throwing an error
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parsing the JSON response
        const result = await response.json();

        // Updating the 'contacts' state with the fetched data
        setContacts(result);
      } catch (error) {
        // Handling and logging any errors that occur during the fetch
        console.error(error);
      }
    }

    // Calling the fetchContacts function when the component mounts (empty dependency array)
    fetchContacts();
  }, []);

  // Rendering a table with contact data
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* Mapping through 'contacts' and rendering ContactRow components */}
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  );
}
