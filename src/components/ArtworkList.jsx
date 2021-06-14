import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const ArtworkList = (props) => {
  const { filteredPics } = props;
  return (
    <Box>
      <ImageList variant='masonry' cols={4} gap={16}>
        {filteredPics &&
          filteredPics.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`images/${item.img}`}
                //   srcSet={`${item.img}?w=600&fit=crop&auto=format 1x,
                // ${item.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default ArtworkList;
