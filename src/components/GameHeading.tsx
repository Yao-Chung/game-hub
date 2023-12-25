import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  // We need to find the selected genre by its id since gameQuery didn't store the whole genre
  const { data: genres } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
