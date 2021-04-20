import React, { useState } from 'react'
import { CSSReset, ChakraProvider, Button } from '@chakra-ui/react'
import { ColorModeScript, useColorMode } from '@chakra-ui/color-mode';

import PrettyForm from './PrettyForm';
import theme from './theme'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <PrettyForm />
    </ChakraProvider>
  );
}

export default App;
