import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import stlogo from "../assets/st-logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { blue, red } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const notMobile = useMediaQuery("(min-width:400px)");
  const classes = useStyles();
  const title = " Artfolio";

  return (
    <Toolbar className={classes.toolbar}>
      <img
        src={stlogo}
        className={`${notMobile ? "logo" : "logo4Mobile"}`}
        alt=''
      />
      <Typography
        component='h2'
        variant={`${notMobile ? "h4" : "h5"}`}
        color='inherit'
        align='left'
        noWrap
        className='toolbarTitle'>
        {title}
      </Typography>
      {notMobile && (
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
        color='inherit'>
        <InstagramIcon
          style={{ color: red[300], fontSize: notMobile ? 40 : 30 }}
        />
      </Link>
      &nbsp;
      <Link
        href='https://twitter.com/selvarajant'
        target='_blank'
        color='inherit'>
        <TwitterIcon
          style={{ color: blue[300], fontSize: notMobile ? 40 : 30 }}
        />
      </Link>
    </Toolbar>
  );
};

export default Header;
