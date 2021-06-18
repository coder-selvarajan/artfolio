import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";

const ArtworkPopup = (props) => {
  const { openArtwork, setOpenArtwork, artwork } = props;
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleClose = () => {
    setOpenArtwork(false);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <Dialog
      // fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={openArtwork}
      onClose={handleClose}
      aria-labelledby='max-width-dialog-title'>
      <DialogTitle id='max-width-dialog-title'>
        {artwork && artwork.title}
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>{artwork && artwork.title}</DialogContentText> */}

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
