import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const ArtworkPopup = (props) => {
  const { openArtwork, setOpenArtwork, artwork } = props;
  const [maxWidth] = React.useState("lg");

  const handleClose = () => {
    setOpenArtwork(false);
  };

  return (
    <Dialog
      maxWidth={maxWidth}
      open={openArtwork}
      onClose={handleClose}
      aria-labelledby='max-width-dialog-title'>
      <DialogTitle id='max-width-dialog-title'>
        {artwork && artwork.title}
        {"  "}
        <span className='mediumText'>
          (Medium : {artwork && artwork.medium})
        </span>
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Medium : {artwork && artwork.medium}
        </DialogContentText> */}

        <img
          src={`images/${artwork && artwork.img}`}
          style={{ width: 550 }}
          alt='window'
          loading='lazy'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArtworkPopup;
