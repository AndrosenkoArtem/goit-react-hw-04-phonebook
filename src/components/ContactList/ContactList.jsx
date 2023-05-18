import PropTypes from 'prop-types';
import { Ul, Button, Li } from './ContactList.styled';
export const ContactList = ({ contacts, deleteContact }) => (
  <Ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id}>
        <div>
          {name}: {number}
        </div>
        <Button onClick={() => deleteContact(id)} type="button">
          Delete
        </Button>
      </Li>
    ))}
  </Ul>
);
ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
