import axios from "axios";
import { useEffect, useState } from "react";
import MyApiPresenterPage from "./MyApi.presenter";

export default function MyApiContainerPage() {
  const [footBall, setFootBall] = useState("");

  useEffect(() => {
    const footBallApi = async () => {
      const result = await axios.get(
        "https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc"
      );
      console.log(result.data.data);
      setFootBall(result.data.data);
    };
    footBallApi();
  }, []);

  return <MyApiPresenterPage footBall={footBall} />;
}
