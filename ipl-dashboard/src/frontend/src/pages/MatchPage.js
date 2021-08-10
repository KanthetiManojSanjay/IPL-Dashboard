import { React, useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  //const teamName = "Delhi Capitals";
  const {teamName,year} = useParams();
  useEffect(() => {
    const fetchMathes = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMathes();
  }, []);

  return (
    <div className="MatchPage">
      <h1>MatchPage</h1>
      {matches.map((match) => (
        <MatchDetailCard teamName={teamName} match={match} />
      ))}
    </div>
  );
};
