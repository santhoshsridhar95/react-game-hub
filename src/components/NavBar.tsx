import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
