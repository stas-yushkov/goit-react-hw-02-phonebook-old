import ListItem from './ListItem/ListItem';

import { StyledList } from './ContactsList.styled';

const ContactsList = ({ contacts, handleDel }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          id={contact.id}
          contact={contact.name}
          phone={contact.phone}
          handleDel={handleDel}
        />
      ))}
    </StyledList>
  );
};

export { ContactsList };
