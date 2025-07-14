import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY="10px">
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
