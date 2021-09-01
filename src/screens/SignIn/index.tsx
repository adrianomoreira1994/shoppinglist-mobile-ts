import React, { useRef, useState } from 'react';
import { RectButton } from "react-native-gesture-handler";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, StatusBar, Alert } from 'react-native';

import styles from './styles';

const SignIn = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLoginSubmit = () => {
    setEmailFocus(false);
    setPasswordFocus(false);

    Alert.alert(email);
  }

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="#3C5350" />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <View style={styles.header}>
          <FontAwesome name="opencart" size={72} color="#FFCEA3" />
          <Text style={styles.logoLabel}>Shopping List</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <View style={!emailFocus ? styles.containerIcon : styles.containerIconActiveEmail}>
              <Entypo name="email" size={16} color="#FFCEA3" />
            </View>

            <View style={!emailFocus ? styles.containerInput : styles.containerInputActiveEmail}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef?.current?.focus()}
                style={styles.input}
                placeholderTextColor="#FFF"
                onChangeText={(value) => setEmail(value)}
                onFocus={() => {
                  setEmailFocus(true);
                  setPasswordFocus(false);
                }}
              />
            </View>
          </View>

          <View style={styles.formGroup}>
            <View style={!passwordFocus ? styles.containerIcon : styles.containerIconActivePassword}>
              <AntDesign name="lock" size={17} color="#FFCEA3" />
            </View>

            <View style={!passwordFocus ? styles.containerInput : styles.containerInputActivePassword}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                ref={passwordInputRef}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={handleLoginSubmit}
                style={styles.input}
                placeholderTextColor="#FFF"
                onChangeText={(value) => setPassword(value)}
                onFocus={() => {
                  setPasswordFocus(true);
                  setEmailFocus(false);
                }}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <RectButton style={styles.button} onPress={handleLoginSubmit}>
              <Text style={styles.labelButton}>Log in</Text>
            </RectButton>

            <View
              style={styles.containerNotMember}
            >
              <Text style={styles.notMember}>
                Not a member?
              </Text>

              <TouchableOpacity style={styles.notMemberButton}>
                <Text style={styles.notMemberButtonLabel}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignIn;