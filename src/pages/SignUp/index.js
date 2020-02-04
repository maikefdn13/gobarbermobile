import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Sua senha secreta"
          />

          <SubitButton onPress={() => {}}>Acessar</SubitButton>

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SignUp.defaultProps = {
  navigation: {},
};
