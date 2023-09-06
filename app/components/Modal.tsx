'use client';
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, IconButton, FormControl, Input, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: "319px"
  }
}));

const initUser = {
  username: "",
  password: ""
}
export default function ModLogin() {
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);
  const [login, setLogin] = useState(initUser);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSend(false);
  };
  const handleInput = (e:any) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e:any) => {
    e.preventDefault()
    setSend(true)
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Ingresar a tu Cuenta
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {!send ? 
            <form onSubmit={(e)=> {handleSubmit(e)}} style={{  display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
              <FormControl sx={{ width: "100%", marginTop: "5px" }} >
                <TextField label="Username" data-testid="username-login" name="username" onChange={(e) => handleInput(e)} autoComplete="off" />
              </FormControl>
              <FormControl sx={{ width: "100%", marginTop: "25px" }} >
                <TextField label="Password" data-testid="password-login" name="password" onChange={(e) => handleInput(e)} autoComplete="off" type='password'/>
              </FormControl>
              <div style={{ marginTop: 40 }} >
                <Button variant="contained" className="btn-primary form-btn" data-testid="send-login" type="submit">
                  Ingresar
                </Button>
              </div>
            </form> 
            :
            <div>
              { login.username == "Carlos" && login.password == "HolaMundo!"  ? 
                <div>
                  <h1 className='title'>Exito!</h1>
                  <h2 data-testid="modal_result">Ingreso Exitoso</h2>
                </div>
                :
                <div>
                  <h1 className='title'>Error!</h1>
                  <h2 data-testid="modal_result">Ingreso Errado</h2>
                </div>
              }
            </div>
          }
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}