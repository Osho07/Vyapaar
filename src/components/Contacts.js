import React from 'react';

const contacts = [
  { name: 'Shwetha', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'Isha', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'Priyanshu', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'Rahul', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'OSHO RAJ', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'PADMA M', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'Kusum', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
];

const Contacts = () => {
  return (
    <div className="mt-6">
      <div className="text-lg mb-4">People</div>
      <div className="flex space-x-4">
        {contacts.map((contact) => (
          <div key={contact.name} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
              <img src={contact.img} alt={contact.name} />
            </div>
            <div className="text-sm">{contact.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
