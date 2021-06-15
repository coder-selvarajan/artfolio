import { useState } from "react";
import Skeleton from "@material-ui/core/Skeleton";

const Artwork = (props) => {
  const [loaded, setloaded] = useState(false);

  const { item } = props;
  return (
    <>
      <img
        src={`images/${item.img}`}
        alt={item.title}
        loading='lazy'
        onLoad={() => setloaded(true)}
      />
      {loaded || <Skeleton variant='rectangular' width={300} height={200} />}
    </>
  );
};

export default Artwork;
