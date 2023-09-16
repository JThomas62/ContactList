export default function ContactRow({ setSelectedContactId, contact }) {

  // Rendering a table row with contact information
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>   {/* Displaying the contact's name */}
      <td>{contact.email}</td>  {/* Displaying the contact's email */}
      <td>{contact.phone}</td>  {/* Displaying the contact's phone number */}
    </tr>
  )
}