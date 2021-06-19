import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Skeleton from "@material-ui/core/Skeleton";

const Artwork = (props) => {
  const notMobile = useMediaQuery("(min-width:600px)");
  const [loaded, setloaded] = useState(false);
  const { skeletonWidth, skeletonHeight, onClickEvent } = props;

  const { item } = props;
  return (
    <>
      <img
        src={`images/${item.img}`}
        className={`handIcon ${!notMobile ? "mobileImage" : ""}`}
        alt={item.title}
        loading='lazy'
        width={`${!notMobile ? window.innerWidth - 20 : 300}`}
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
