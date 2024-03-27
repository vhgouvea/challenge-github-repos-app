import React, { useCallback, useMemo, useRef } from "react";

import { 
  Container, 
  Content,
  HeaderText, 
  Icon, 
  IconButton,
} from "./styles";
import { useBottomSheet } from "@context/useBottomSheet";


export function CustomHeader() {
  const { setOpen } = useBottomSheet();
  

  const handlePresentModalPress = useCallback(() => {
    setOpen(true);
  }, []);


  return (
    <Container>

      <Content>
        <HeaderText>Wefit</HeaderText>
      </Content>

      <IconButton onPress={handlePresentModalPress}>
        <Icon name="gear"/>
      </IconButton>

    </Container>
  );
}