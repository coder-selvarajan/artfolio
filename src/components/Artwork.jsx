import { useState } from "react";
import Skeleton from "@material-ui/core/Skeleton";

const Artwork = (props) => {
  const [loaded, setloaded] = useState(false);
  const { skeletonWidth, skeletonHeight, onClickEvent } = props;

  const { item } = props;
  return (
    <>
      <img
        src={`images/${item.img}`}
        className={`handIcon`}
        alt={item.title}
        loading='lazy'
        width='100%'
        height='100%'
        onLoad={() => setloaded(true)}
        onClick={() => onClickEvent(item)}
      />
      {loaded || (
        <Skeleton
          variant='rectangular'
          width={skeletonWidth}
          height={skeletonHeight}
        />
      )}
    </>
  );
};

export default Artwork;
