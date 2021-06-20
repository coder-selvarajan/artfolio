import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ArtworkPopupMobile = (props) => {
  const { openArtwork, setOpenArtwork, artwork } = props;

  const handleClose = () => {
    setOpenArtwork(false);
  };

  return (
    <Dialog
      fullScreen
      open={openArtwork}
      onClose={handleClose}
      TransitionComponent={Transition}>
      <Typography
        component='h6'
        variant='h6'
        color='inherit'
        align='center'
        noWrap>
        {artwork && artwork.title}
        {"  "}
      </Typography>
      <Typography
        component='p'
        variant='caption'
        color='inherit'
        align='center'
        noWrap>
        <span className='mediumText'>
          (Medium : {artwork && artwork.medium})
        </span>
      </Typography>

      <img
        src={`images/${artwork && artwork.img}`}
        alt='window'
        loading='lazy'
        width='100%'
        height='auto'
      />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArtworkPopupMobile;
