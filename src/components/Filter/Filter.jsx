
import { Input, Label } from 'components/Form/Form.styled';
import React from 'react';
import { Filters } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice/Slice';


  


const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const setContact = value => {
    dispatch(setFilter(value));
  };
  return (
    <Filters>
      <Label>
        Finde contacts by name
        <Input
          type="text"
          onChange={e => setContact(e.target.value)}
          name="filter"
          value={filter}
        ></Input>
      </Label>
    </Filters>
  );
};


export default Filter;
