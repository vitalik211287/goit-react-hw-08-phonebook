import { Button, Input } from '@mui/material';
import { Forma, Label } from './Login.styled';

export const Login = () => {
    return (
      <Forma>
        {/* //   onSubmit={handleSubmit}> */}

        <Label>
          Name
          <Input
            name="number"
            // value={number}
            // onChange={handleInputChange}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            name="number"
            // value={number}
            // onChange={handleInputChange}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Log in</Button>
      </Forma>
    );
};
