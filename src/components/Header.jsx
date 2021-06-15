import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import stlogo from "../assets/st-logo.png";
// import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { blue, red } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";

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
  const title = " Artfolio";

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
      {/* <Button
        size='small'
        className='topbarButton'
        // variant='outlined'
        // color='primary'
        startIcon={<PanToolOutlinedIcon color='inherit' />}>
        About me
      </Button>
      &nbsp; */}
      <Typography
        component='h6'
        variant='body1'
        color='inherit'
        align='right'
        noWrap>
        CONTACT ME : &nbsp;
      </Typography>
      <Link
        href='https://instagram.com/selvarajan.t'
        target='_blank'
        color='inherit'>
        <InstagramIcon style={{ color: red[300], fontSize: 40 }} />
      </Link>
      &nbsp;
      <Link
        href='https://twitter.com/selvarajant'
        target='_blank'
        color='inherit'>
        <TwitterIcon style={{ color: blue[300], fontSize: 40 }} />
      </Link>
    </Toolbar>
  );
};

export default Header;
