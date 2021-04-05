import React, { useEffect, useState } from "react";
import apiMovie from "../../api/movieApi";

const ImageActor = ({ actor }) => {
  const [urlActor, setUrlActor] = useState("");

  useEffect(() => {
    const fetchActor = async (actorName) => {
      const { data } = await apiMovie.get("/search/person", {
        params: {
          query: actorName,
        },
      });
      const urlActor = `https://image.tmdb.org/t/p/w92/${data.results[0].profile_path}`;
      setUrlActor(urlActor);
    };
    if (actor) {
      const actorName = actor[Object.keys(actor)[0]];
      fetchActor(actorName);
    }
  }, [actor]);

  return (
    <React.Fragment>
      <img src={urlActor} alt="actor" />
    </React.Fragment>
  );
};

export default ImageActor;
