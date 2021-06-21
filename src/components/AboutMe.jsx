import * as React from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import { blue, grey, indigo } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import PanToolIcon from "@material-ui/icons/PanTool";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const notMobile = useMediaQuery("(min-width:600px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant='text'
        style={{ color: "grey", fontSize: 12 }}
        onClick={handleClick}>
        <PanToolIcon sx={{ fontSize: 20, color: blue["400"] }} />
        &nbsp;&nbsp; {notMobile ? "About Me | Connect" : "About Me"}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Box>
          <Card sx={{ maxWidth: 320 }}>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              height='250'
              image='images/me.jpg'
              title='Selvarajan'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Selvarajan Thangavel
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Self-taught Artist | Techie | Spiritual Seeker
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                component='h6'
                variant='body2'
                color='inherit'
                align='right'
                noWrap>
                &nbsp;&nbsp;CONNECT :&nbsp;
              </Typography>
              {/* <ArrowRightIcon style={{ fontSize: 30, color: "gray" }} /> */}
              <Link
                href='https://instagram.com/selvarajan.t'
                target='_blank'
                title='Instagram'
                color='inherit'>
                <InstagramIcon style={{ color: "e4405f", fontSize: 30 }} />
              </Link>

              <Link
                href='https://twitter.com/selvarajant'
                target='_blank'
                title='Twitter'
                color='inherit'>
                <TwitterIcon style={{ color: blue[500], fontSize: 30 }} />
              </Link>

              <Link
                href='https://www.facebook.com/selvarajan.thangavelu'
                target='_blank'
                title='Facebook'
                color='inherit'>
                <FacebookIcon style={{ color: indigo[500], fontSize: 30 }} />
              </Link>

              <Link
                href='https://github.com/coder-selvarajan'
                target='_blank'
                title='GitHub'
                color='inherit'>
                <GitHubIcon style={{ color: grey[700], fontSize: 25 }} />
              </Link>
            </CardActions>
          </Card>
        </Box>
      </Popover>
    </div>
  );
}
