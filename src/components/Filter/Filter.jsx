import PropTypes from 'prop-types';
import { H2, Input } from './Filter.styled';
export const Filter = ({ setFilterName, value }) => (
  <>
    <H2>Find by Name</H2>
    <Input
      onChange={e => setFilterName(e)}
      value={value}
      type="text"
      name="filter"
    />
  </>
);
Filter.prototype = {
  setFilterName: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
