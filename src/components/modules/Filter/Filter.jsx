import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/searchSlice';
import InputName from '../../shared/InputName/InputName';
import { FilterWrapper } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };
  return (
    <FilterWrapper>
      <h2>Contacts</h2>
      <label>
        <InputName text={'Find contacts by name'} />
        <input type="text" onChange={handleSearch} />
      </label>
    </FilterWrapper>
  );
};

export default Filter;
