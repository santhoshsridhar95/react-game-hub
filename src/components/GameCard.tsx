import type { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Flex
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          marginBottom={3}
        >
          <Box flexShrink={1} width="100%">
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          </Box>
        </Flex>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
