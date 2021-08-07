import { useState } from "react";
import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Artwork from "./Artwork";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArtworkPopup from "./ArtworkPopup";
import ArtworkPopupMobile from "./ArtworkPopupMobile";

const ArtworkList = (props) => {
  const notMobile = useMediaQuery("(min-width:600px)");
  const [openArtwork, setOpenArtwork] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const { filteredPics } = props;
  const onImageClick = (artwork) => {
    setSelectedArtwork(artwork);
    setOpenArtwork(true);
  };

  if (!notMobile) {
    return (
      <Box>
        <ImageList variant='masonry' cols={2} gap={12}>
          {filteredPics &&
            filteredPics.map((item) => (
              <ImageListItem key={item.img}>
                <Artwork
                  item={item}
                  skeletonWidth='300'
                  skeletonHeight='200'
                  onClickEvent={onImageClick}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4) 0%, " +
                      "rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position='bottom'
                  actionPosition='left'
                />
              </ImageListItem>
            ))}
        </ImageList>
        <ArtworkPopupMobile
          openArtwork={openArtwork}
          setOpenArtwork={setOpenArtwork}
          artwork={selectedArtwork}
        />
      </Box>
    );
  }
  return (
    <Box>
      <ImageList variant='masonry' cols={4} gap={25}>
        {filteredPics &&
          filteredPics.map((item) => (
            <ImageListItem key={item.img}>
              <Artwork
                item={item}
                skeletonWidth='300'
                skeletonHeight='200'
                onClickEvent={onImageClick}
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, " +
                    "rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position='bottom'
                actionPosition='left'
              />
            </ImageListItem>
          ))}
      </ImageList>
      <ArtworkPopup
        openArtwork={openArtwork}
        setOpenArtwork={setOpenArtwork}
        artwork={selectedArtwork}
      />
    </Box>
  );
};

export default ArtworkList;
