import type { Platform } from "@/hooks/usePlatforms";
import { Icon, Wrap, WrapItem } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    // playstation4: FaPlaystation,
    // playstation5: FaPlaystation,
    xbox: FaXbox,
    // "xbox-one": FaXbox,
    // "xbox-series-x": FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <Wrap marginY="10px" spacing="10px">
      {platforms.map((platform) => (
        <>
          <WrapItem key={platform.id}>
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color="gray.500"
              boxSize="20px"
            ></Icon>
          </WrapItem>
        </>
      ))}
    </Wrap>
  );
};

export default PlatformIconList;
