"use client";

import React from 'react';
import Link from "next/link";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { Person, Email, Bloodtype, MonitorWeight, Cake, LocalHospital } from '@mui/icons-material';

interface Profile {
  name: string;
  email: string;
  bloodType: string;
  weight: string;
  age: string;
  doctor: string;
}

const ProfilePage: React.FC = () => {
  const profile: Profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    bloodType: "A+",
    weight: "70",
    age: "35",
    doctor: "Dr. Jane Smith"
  };

  const renderInfoItem = (icon: React.ReactNode, label: string, value: string, unit?: string) => (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {value} {unit && <span style={{ marginLeft: '4px', fontSize: '0.9em' }}>{unit}</span>}
        </Typography>
      </Box>
    </ListItem>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, black, #788F5D)",
        color: "white",
      }}
    >
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                transform: "skewX(-6deg)",
              }}
            >
              MPMS
            </Typography>
            <Link href="/dashboard" passHref>
              <Button color="inherit" component="a">Dashboard</Button>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Card sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
          <CardContent>
            <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
              Profile Information
            </Typography>
            <List>
              {renderInfoItem(<Person sx={{ color: 'white' }} />, "Name", profile.name)}
              {renderInfoItem(<Email sx={{ color: 'white' }} />, "Email", profile.email)}
              {renderInfoItem(<Bloodtype sx={{ color: 'white' }} />, "Blood Type", profile.bloodType)}
              {renderInfoItem(<MonitorWeight sx={{ color: 'white' }} />, "Weight", profile.weight, "kg")}
              {renderInfoItem(<Cake sx={{ color: 'white' }} />, "Age", profile.age, "years")}
              {renderInfoItem(<LocalHospital sx={{ color: 'white' }} />, "Doctor", profile.doctor)}
            </List>
          </CardContent>
        </Card>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          mt: 'auto',
          bgcolor: "rgba(255,255,255,0.1)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Button href="#" color="inherit">About Us</Button>
          <Button href="#" color="inherit">Services</Button>
          <Button href="#" color="inherit">Contact</Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ProfilePage;