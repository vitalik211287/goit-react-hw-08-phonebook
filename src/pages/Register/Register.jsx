import { Button, Input } from '@mui/material';
import { Forma, Label } from 'pages/Login/Login.styled';
import telephoneImg from '../../img/telephone.png';
import { Img, StyledLink, Title, Container } from './Register.styled';


export const Register = () => {
 

   return (
     <div>
       <Forma>
         {/* //   onSubmit={handleSubmit}> */}
         <Img src={telephoneImg} alt="telephone"></Img>
         <Title>Create account</Title>
         <Container>
           <p>Already have an account?</p>
           <StyledLink to="/login">Log in</StyledLink>
         </Container>

         <Label>
           Name
           <Input
             name="name"
             // value={number}
             // onChange={handleInputChange}
             type="tel"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
         </Label>
         <Label>
           Email
           <Input
             name="email"
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
         <Button type="submit">Sign up</Button>
       </Forma>
     </div>
   );
};
