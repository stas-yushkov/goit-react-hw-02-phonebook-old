import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'components/';

import {
  StyledListItem,
  ContactName,
  ContactPhone,
  Contact,
} from './StyledListItem';

const ListItem = props => {
  const handleDel = () => props.handleDel(props.id);

  return (
    <StyledListItem>
      <Contact>
        <ContactName>
          <FontAwesomeIcon icon={faUser} />
          {props.contact}
        </ContactName>

        <ContactPhone>
          <FontAwesomeIcon icon={faPhone} />
          {props.phone}
        </ContactPhone>
      </Contact>
      <Button type="button" onClick={handleDel}>
        Delete
      </Button>
    </StyledListItem>
  );
};

export default ListItem;
