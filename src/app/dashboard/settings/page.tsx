'use client'
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Avatar,
  Stack
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import EditIcon from '@mui/icons-material/Edit';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Settings
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
            <Avatar sx={{ width: 60, height: 60, mr: 2 }}>DU</Avatar>
            <Typography variant="h5">Demo User</Typography>
          </Box>

          <List>
            <ListItem>
              <ListItemText primary="Dark Mode" />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={toggleDarkMode}
                  checked={darkMode}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Doctor's Contact" 
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      Email: doctor@example.com
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.primary">
                      Phone: (123) 456-7890
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem>
              <Stack spacing={2} width="100%">
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Edit Username
                </Button>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Edit Password
                </Button>
              </Stack>
            </ListItem>
          </List>
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="outlined" color="error">
            Log Out
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}