import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { Button, Input, Section } from "globalStyles";
import { FormTitle, SignInWrapper } from "./styles";


const SignIn = () => {
  const { user_id, isLoding, setEmail, setPassword, handleSignIn } = useAuth();

  if (user_id) {
    return <Navigate to="/" />;
  }

  return (
    <Section>
      <SignInWrapper>
        <FormTitle>ChatApp</FormTitle>
        <Input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button onClick={handleSignIn}>
          {isLoding ? "Enviando" : "Iniciar Sesión"}
        </Button>
      </SignInWrapper>
    </Section>
  );
};

export default SignIn;
