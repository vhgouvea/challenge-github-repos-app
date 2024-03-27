import React, { useCallback, useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

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

import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";

interface Props {
  getRepos: (param: string) => void;
  setParamGetRepos: (param: string) => void;
  paramGetRepos: string;
}

export function CustomHeader({ getRepos, setParamGetRepos, paramGetRepos }: Props) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);


  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const updateRepository = useCallback(async() => {
    getRepos(paramGetRepos)
    bottomSheetModalRef.current?.close()
  }, [paramGetRepos])


  return (
    <Container>

      <Content>
        <HeaderText>Wefit</HeaderText>
      </Content>

      <IconButton onPress={handlePresentModalPress}>
        <Icon name="gear"/>
      </IconButton>


      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <ContentBottomSheet>

          <TitleBottomSheet>Alterar usuário selecionado</TitleBottomSheet>

          <CustomInput 
            onChangeText={setParamGetRepos}
            value={paramGetRepos}
            placeholder="Nome do usuário"
            keyboardType="default"
          />
          <ContentButtonBottomSheet>
            <CustomButton width={`${48.5}%`} loading={false} onPress={() => {bottomSheetModalRef.current?.close()}} title="Cancelar" invertColors={true}/>
            <CustomButton width={`${48.5}%`} loading={false} onPress={updateRepository} title="Salvar" invertColors={false}/>
          </ContentButtonBottomSheet>
        </ContentBottomSheet>
        
      </BottomSheetModal>
    </Container>
  );
}