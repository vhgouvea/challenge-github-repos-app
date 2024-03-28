import { useEffect, useRef } from "react";
import { ContentBottomSheet, ContentButtonBottomSheet, TitleBottomSheet } from "./styles";
import { CustomInput } from "../CustomInput";
import { useBottomSheet } from "@context/useBottomSheet";
import { Modalize } from "react-native-modalize";
import { useRepository } from "@hooks/useRepository";
import { HeaderComponent } from "./HeaderComponent";
import { CustomButton } from "@components/CustomButton";

export function CustomBottomSheet() { 
  const { isOpen, setOpen, nameOfRepository, setNameOfRepository } = useBottomSheet();
  const { getRepos } = useRepository();

  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if(isOpen) {
      modalizeRef.current?.open();
    }
  }, [isOpen])


  return (
    <Modalize
      ref={modalizeRef}
      handlePosition="inside"
      adjustToContentHeight
      childrenStyle={{ height: 160}}
      HeaderComponent={
        <HeaderComponent />
      }
      handleStyle={{width: 30, height: 6, borderRadius: 12, backgroundColor: '#E0E0E0'}}
      onClose={() => {
        setOpen(false)
      }}
    >
      <ContentBottomSheet>
        <TitleBottomSheet>Alterar usuário selecionado</TitleBottomSheet>
        <CustomInput 
          onChangeText={setNameOfRepository}
          value={nameOfRepository}
          placeholder="Nome do usuário"
          keyboardType="default"
        />
        <ContentButtonBottomSheet>
          <CustomButton 
            title="Cancelar" 
            invertColors 
            loading={false} 
            onPress={() => {
              modalizeRef.current?.close()
            }} 
            width={`${48.5}%`}
          />
          <CustomButton 
            title="Salvar" 
            invertColors={false} 
            loading={false} 
            onPress={async() => {
              modalizeRef.current?.close()
              await getRepos();
            }} 
            width={`${48.5}%`}
          />
        </ContentButtonBottomSheet>
      </ContentBottomSheet>
    </Modalize>
  );
}

