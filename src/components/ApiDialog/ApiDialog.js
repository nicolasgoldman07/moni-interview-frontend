import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  apiRequestsFulfilled,
  apiResposeStatus,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function setDialogOpen() {
      setOpen(true);
    }
    setDialogOpen();
  }, [apiRequestsFulfilled]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Posibilidad de requerir un prestamo:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {apiResposeStatus === "approve" &&
              "Enhorabuena! Puedes pedir un prestamo"}
            {apiResposeStatus !== "approve" &&
              `${apiResposeStatus} - No es posible realizar un prestamo (Corroborar DNI)`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
