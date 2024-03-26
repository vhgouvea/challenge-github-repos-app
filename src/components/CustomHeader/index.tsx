import React, { useCallback, useMemo, useRef, useState } from "react";

import { 
  Container, 
  Content, 
  ContentBottomSheet, 
  ContentButtonBottomSheet, 
  HeaderText, 
  Icon, 
  IconButton, 
  Img,
  TitleBottomSheet
} from "./styles";

import Gear from '../../assets/Vectorgear.png';
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface Props {
  getRepos: (param: string) => void;
  setParamGetRepos: (param: string) => void;
  paramGetRepos: string;
}

export function CustomHeader({ getRepos, setParamGetRepos, paramGetRepos }: Props) {

  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  // variables
  // const snapPoints = useMemo(() => ['38%'], []);
  const snapPoints = useMemo(() => ['25%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const updateRepository = useCallback(async() => {
    try {

      getRepos(paramGetRepos)
      bottomSheetRef.current?.close()

    } catch (error) {

    }

  }, [paramGetRepos])


  return (
    <Container>

      <Content>
        <HeaderText>Wefit</HeaderText>
      </Content>

      <IconButton onPress={handlePresentModalPress}>
        <Img source={Gear} resizeMode="contain"/>
      </IconButton>


      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        keyboardBehavior='fillParent'
        children={
          <>
            <ContentBottomSheet>

            <TitleBottomSheet>Alterar usuário selecionado</TitleBottomSheet>

            <CustomInput 
              onChangeText={setParamGetRepos}
              value={paramGetRepos}
              placeholder="Nome do usuário"
              keyboardType="default"
            />
            <ContentButtonBottomSheet>
              <CustomButton width={`${48.5}%`} loading={false} onPress={() => {bottomSheetRef.current?.close()}} title="Cancelar" invertColors={true}/>
              <CustomButton width={`${48.5}%`} loading={false} onPress={updateRepository} title="Salvar" invertColors={false}/>
            </ContentButtonBottomSheet>
            </ContentBottomSheet>
          </>
        }
      >
      </BottomSheet>
    </Container>
  );
}