import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Container, Content, Background } from "./styles";

import logoImg from "../../assets/logo.svg";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input type="text" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="newAccount">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
