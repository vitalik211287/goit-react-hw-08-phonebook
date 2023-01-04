import { InputContainer } from 'components/RegisterForm/RegisterForm.styled';
import { Filters, FineContainer } from './Filter.styled';
import { ReactComponent as Search } from '../../img/search-svgrepo-com (1).svg';
import { Label } from 'components/Form/Form.styled';

const Filter = ({ onChange, value }) => {
  return (
    <FineContainer>
      <Filters>
        <InputContainer>
          <Label>
            Finde contacts by name
            <input
              className="input__form-input"
              type="text"
              onChange={onChange}
              name="filter"
              value={value}
            ></input>
            <span className="span__icon-container">
              <Search className="icon" width="20" height="20"></Search>
            </span>
          </Label>
        </InputContainer>
      </Filters>
    </FineContainer>
  );
};

export default Filter;
