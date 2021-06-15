import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Artwork from "./Artwork";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const ArtworkList = (props) => {
  const { filteredPics } = props;
  return (
    <Box>
      <ImageList variant='masonry' cols={4} gap={16}>
        {filteredPics &&
          filteredPics.map((item) => (
            <ImageListItem key={item.img}>
              <Artwork item={item} />
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
    </Box>
  );
};

export default ArtworkList;
