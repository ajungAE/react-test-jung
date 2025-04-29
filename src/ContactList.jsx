import React, { useState, useEffect } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Laden der Kontakte aus localStorage (beim Mounten)
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  // Speichern der Kontakte im localStorage (bei jeder Änderung)
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = () => {
    if (name.trim() && phone.trim()) {
      const newContact = { name, phone };
      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
    }
  };

  return (
    <div className="contact-list">
      <h3>Kontaktliste</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefonnummer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addContact}>Hinzufügen</button>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            📞 {contact.name} – {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
