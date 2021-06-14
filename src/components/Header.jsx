import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import stlogo from "../assets/st-logo.png";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid silver`,
  },
  toolbarLink: {
    padding: 2,
    flexShrink: 0,
  },
}));

const Header = () => {
  const classes = useStyles();
  const title = "Artfolio";

  return (
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
  );
};

export default Header;
