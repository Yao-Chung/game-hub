import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  // The code will be executed only if the route was succeed
  // We can ensure that the undefined will not happen here: slug! tells compiler it's not null
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) {
    return <Spinner />;
  }
  if (error || !game) {
    throw error;
  }
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
