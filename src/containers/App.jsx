import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import stlogo from "../assets/st-logo.png";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { picsDB, categories } from "../data/constants";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid silver`,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: 2,
    flexShrink: 0,
  },
}));

function App() {
  const classes = useStyles();
  const title = "Artfolio";

  const [filteredPics, setFilteredPics] = useState(picsDB);

  const handleFilterClick = (cat) => {
    if (cat.toLowerCase().startsWith("all")) {
      setFilteredPics(picsDB);
      return;
    }
    setFilteredPics(
      picsDB.filter((item) => item.category.indexOf(cat.toLowerCase()) > -1)
    );
  };

  return (
    <>
      <Container maxWidth='lg'>
        <Toolbar className={classes.toolbar}>
          {/* <Button size='small'>ART</Button> */}
          <img src={stlogo} className='logo' alt='' />
          <Typography
            component='h2'
            variant='h4'
            color='inherit'
            align='left'
            noWrap
            className='toolbarTitle'>
            {title}
          </Typography>
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <Button
            size='small'
            className='topbarButton'
            // variant='outlined'
            // color='primary'
            startIcon={<PanToolOutlinedIcon color='inherit' />}>
            About me
          </Button>
          &nbsp;
          <Button
            size='small'
            className='topbarButton'
            // variant='outlined'
            color='primary'
            startIcon={<WhatsAppIcon color='inherit' />}>
            Contact
          </Button>
          {/* <Button variant='outlined' size='small'>
            Sign up
          </Button> */}
        </Toolbar>
        <br />
        <Toolbar
          component='nav'
          variant='dense'
          className={classes.toolbarSecondary}>
          {categories.map((category) => (
            <Button
              onClick={() => handleFilterClick(category.key)}
              variant='outlined'
              className='filterButton'
              size='small'
              color='primary'>
              {category.title}
            </Button>
          ))}
        </Toolbar>

        <Box>
          <ImageList variant='masonry' cols={4} gap={16}>
            {filteredPics &&
              filteredPics.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    // src='images/portrait1.png'
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
      </Container>
    </>
  );
}

export default App;
