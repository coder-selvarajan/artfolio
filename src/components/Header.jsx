import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import stlogo from "../assets/st-logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AboutMe from "../components/AboutMe";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid silver`,
    padding: 10,
    paddingBottom: 5,
  },
  toolbarLink: {
    padding: 2,
    flexShrink: 0,
  },
}));

const Header = () => {
  const notMobile = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <img
        src={stlogo}
        className={`${notMobile ? "logo" : "logo4Mobile"}`}
        alt=''
      />
      <Typography
        component='h4'
        variant={`${notMobile ? "h5" : "h5"}`}
        color='inherit'
        align='left'
        noWrap
        className='toolbarTitle'>
        {notMobile ? "Selvarajan Artfolio" : "ST Artfolio"}
      </Typography>
      
      
      <AboutMe />
      {/* {notMobile && (
        <>
          <Typography
            component='h6'
            variant='body2'
            color='inherit'
            align='right'
            noWrap>
            CONNECT WITH ME
          </Typography>
          <ArrowRightIcon style={{ fontSize: 30, color: "gray" }} />
        </>
      )}
      <Link
        href='https://instagram.com/selvarajan.t'
        target='_blank'
        title='Instagram'
        color='inherit'>
        <InstagramIcon
          style={{ color: red[300], fontSize: notMobile ? 40 : 35 }}
        />
      </Link>
      &nbsp;
      <Link
        href='https://twitter.com/selvarajant'
        target='_blank'
        title='Twitter'
        color='inherit'>
        <TwitterIcon
          style={{ color: blue[300], fontSize: notMobile ? 40 : 35 }}
        />
      </Link> */}
    </Toolbar>
  );
};

export default Header;
