import React, { useState } from "react";
//import CustomDialog from "../components/Dialog";
import { AlertDialog } from "../components/AlertDialog";

export const UsoDialog = () => {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleOpenDialog1 = () => {
    setOpenDialog1(true);
  };

  const handleCloseDialog1 = () => {
    setOpenDialog1(false);
  };

  const handleOpenDialog2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };

  const dialog1Actions = [{ label: "Cerrar", handler: handleCloseDialog1 }];

  const dialog2Actions = [{ label: "Cerrar", handler: handleCloseDialog2 }];

  return (
    <div>
      <button onClick={handleOpenDialog1}>Abrir Dialog 1</button>
      <button onClick={handleOpenDialog2}>Abrir Dialog 2</button>
      <AlertDialog
        open={openDialog1}
        handleClose={handleCloseDialog1}
        title="Dialog 1"
        content="Contenido del diálogo 1 aquí..."
        actions={dialog1Actions}
      />

      <AlertDialog
        open={openDialog2}
        handleClose={handleCloseDialog2}
        title="Dialog 2"
        content="Contenido del diálogo 2 aquí..."
        actions={dialog2Actions}
      />
    </div>
  );
};
