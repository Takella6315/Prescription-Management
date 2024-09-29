import React from 'react';
import StatCardContacts from './StatCardContacts';
import Copyright from '../internals/components/Copyright';
import { Tooltip } from '@mui/material';
import { Info } from 'lucide-react';


const myContact = [
  {
    name: "Teja Akella",
    phoneNumber: "+1 (614)-123-4567",
    email: "takella6315@gmail.com",
    relationship: "personal"
  }
]

const contactsData = [
  {
    name: "Mike Johnson",
    phoneNumber: "+1 (555) 246-8135",
    email: "mike.johnson@example.com",
    relationship: "Guardian"
  },
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
  
];

export default function MainGridContacts() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-3xl">My Contact</h2>
          <Tooltip title="You will recieve a message reminding you to take your medication at your scheduled times." arrow={true} placement='top'>
            <Info className="ml-2 text-red-400 cursor-pointer" size={20} />
          </Tooltip>
        </div>
        
        {myContact.map((contact, index) => (
          <StatCardContacts 
            key={index}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
            relationship={contact.relationship}
          />
        ))}

        <div className="flex items-center mb-4">
          <h2 className="font-bold text-3xl">Friends/Family Contact</h2>
          <Tooltip title="Friends and Family will receive notifications about your prescription cycle. " arrow={true} placement='top'>
            <Info className="ml-2 text-red-400 cursor-pointer" size={20} />
          </Tooltip>
        </div>
        
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
