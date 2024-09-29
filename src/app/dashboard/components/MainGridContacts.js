import React from 'react';
import StatCardContacts from './StatCardContacts';
import Copyright from '../internals/components/Copyright';

const contactsData = [
  {
    name: "John Doe",
    phoneNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    relationship: "Family"
  },
  {
    name: "Jane Smith",
    phoneNumber: "+1 (555) 987-6543",
    email: "jane.smith@example.com",
    relationship: "Friend"
  },
  {
    name: "Mike Johnson",
    phoneNumber: "+1 (555) 246-8135",
    email: "mike.johnson@example.com",
    relationship: "Guardian"
  },
  // Add more contacts as needed
];

export default function MainGridContacts() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-bold mb-4 text-4xl">Contacts</h2>
        <div>
          {contactsData.map((contact, index) => (
            <StatCardContacts 
              key={index}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              email={contact.email}
              relationship={contact.relationship}
            />
          ))}
        </div>
      </div>

      {/* Copyright always at the bottom */}
      <div className="mt-auto py-4">
        <Copyright />
      </div>
    </div>
  );
}