import { useState, useEffect } from 'react';

// Defining a functional component named SelectedContact
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // Using the useState hook to manage the 'selectedContact' state
  const [selectedContact, setSelectedContact] = useState(null);

  // Using the useEffect hook to fetch contact details when the component mounts
  useEffect(() => {
    // Defining an asynchronous function to fetch contact details by 'id'
    async function getDetails(id) {
      try {
        // Constructing the URL for the specific contact using 'id'
        const url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`;

        // Sending a GET request to the constructed URL
        const response = await fetch(url);

        // Checking if the response status is OK; otherwise, throwing an error
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }

        // Parsing the JSON response to obtain contact details
        const contactData = await response.json();

        // Updating the 'selectedContact' state with the fetched contact data
        setSelectedContact(contactData);
      } catch (error) {
        // Handling and logging any errors that occur during the fetch
        console.error('Error fetching contact data:', error);
      }
    }

    // Calling the getDetails function when the component mounts (empty dependency array)
    getDetails(selectedContactId);
  }, []);

  // Rendering the selected contact's information or a message if none is selected
  return (
    <div>
      <h2>Selected Contact</h2>
      {selectedContact ? ( // Conditional rendering based on whether a contact is selected
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
        </div>
      ) : (
        <p>No contact selected.</p>
      )}
      {/* Button to go back to the contact list by setting 'selectedContactId' to null */}
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}
