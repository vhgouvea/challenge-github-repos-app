import React from "react";
import { HeaderContainer, HeaderText, RightComponentContainer } from "./styles";
import { TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface Props {

}

export function CustomHeader() {


  function onClick() {
    console.log('Cliquei na engrenagem')
  }

  return (
    <HeaderContainer>
      <HeaderText>Teste</HeaderText>
      <RightComponentContainer>
        <TouchableOpacity onPress={onClick}>
          <FontAwesome6 name="gear" size={24} />
        </TouchableOpacity>
      </RightComponentContainer>
    </HeaderContainer>
  );
}