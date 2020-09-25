import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function EditModal({ userLoan }) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axios({
      method: "patch",
      url: `https://wired-torus-98413.firebaseio.com/users/${userLoan.uid}.json`,
      data: {
        loanStatus: status,
      },
    }).then((res) => {
      setOpen(false);
      window.location.reload(false);
    });
  };

  return (
    <div>
      <FontAwesomeIcon icon={faEdit} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Modificar estado de prestamo
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese el estado nuevo deseado para el prestamo seleccionado. Los
            estados por defecto son:{" "}
            <ul>
              <li>approve</li>
              <li>rejected</li>
              <li>error</li>
            </ul>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nuevo estado de prestamo"
            type="text"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Modificar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
