import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Artwork from "./Artwork";

const ArtworkList = (props) => {
  const { filteredPics } = props;
  return (
    <Box>
      <ImageList variant='masonry' cols={4} gap={16}>
        {filteredPics &&
          filteredPics.map((item) => (
            <ImageListItem key={item.img}>
              <Artwork item={item} />
              {/* <img src={`images/${item.img}`} alt={item.title} loading='lazy' /> */}
              {/* <ImageListItemBar position='below' title={item.title} /> */}
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default ArtworkList;
