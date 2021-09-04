import React, { useRef, useState } from 'react';
import { Platform, StatusBar, TextInput } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Header,
  LogoLabel,
  Form,
  FormGroup,
  ContainerIcon,
  ContainerIconActiveEmail,
  ContainerIconActivePassword,
  ContainerInput,
  ContainerInputActiveEmail,
  ContainerInputActivePassword,
  Input,
  Label,
  ContainerButton,
  Button,
  LabelButton,
  ContainerNotMember,
  NotMember,
  NotMemberButton,
  NotMemberButtonLabel
} from './styles';

const SignIn = () => {
  const passwordInputRef = useRef<TextInput>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLoginSubmit = () => {
    setEmailFocus(false);
    setPasswordFocus(false);
  }

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="#3C5350" />

      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Header>
          <FontAwesome name="opencart" size={72} color="#FFCEA3" />
          <LogoLabel>Shopping List</LogoLabel>
        </Header>

        <Form>
          <FormGroup>
            <ContainerIcon>
              <Entypo name="email" size={16} color="#FFCEA3" />
            </ContainerIcon>

            <ContainerInput>
              <Label>E-mail</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef?.current?.focus()}
                placeholderTextColor="#FFF"
                onChangeText={(value) => setEmail(value)}
                onFocus={() => {
                  setEmailFocus(true);
                  setPasswordFocus(false);
                }}
              />
            </ContainerInput>
          </FormGroup>

          <FormGroup>
            <ContainerIcon>
              <AntDesign name="lock" size={17} color="#FFCEA3" />
            </ContainerIcon>

            <ContainerInput>
              <Label>Password</Label>
              <Input
                ref={passwordInputRef}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={handleLoginSubmit}
                placeholderTextColor="#FFF"
                onChangeText={(value) => setPassword(value)}
                onFocus={() => {
                  setPasswordFocus(true);
                  setEmailFocus(false);
                }}
              />
            </ContainerInput>
          </FormGroup>

          <ContainerButton>
            <Button onPress={handleLoginSubmit}>
              <LabelButton>Log in</LabelButton>
            </Button>

            <ContainerNotMember>
              <NotMember>
                Not a member?
              </NotMember>

              <NotMemberButton>
                <NotMemberButtonLabel>Join now</NotMemberButtonLabel>
              </NotMemberButton>
            </ContainerNotMember>
          </ContainerButton>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;