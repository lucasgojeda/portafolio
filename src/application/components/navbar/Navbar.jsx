import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';

import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {


  const navigate = useNavigate();

  return (
    <Box
      id='inicio'
      className="navbarContainer">

      <AppBar position="static"
        sx={{
          backgroundColor: 'unset',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <button
            className="custom-btn btn-3"
            onClick={() => navigate('/')}
          ><span>
              <HomeIcon />
              Inicio
            </span></button>

          <button
            className="custom-btn btn-3"
            onClick={() => navigate('/about')}
          ><span>
              <PersonIcon />
              Acerca de mí
            </span></button>

          <button
            className="custom-btn btn-3"
            onClick={() => navigate('/proyectos')}
          ><span>
              <TerminalIcon />
              Proyectos
            </span></button>

        </Toolbar>
      </AppBar>
    </Box >
  );
}
