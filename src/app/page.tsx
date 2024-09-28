import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from "@mui/material";

const hero = "/assets/images/photo.png";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, black, #4CAF50)", // Updated gradient
        color: "white", // Changed text color to white for better contrast
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
                color: "white", // Changed to white for better visibility
                display: "flex",
                transform: "skewX(-6deg)",
              }}
            >
              <span style={{ animationDelay: "0ms" }}>M</span>
              <span style={{ animationDelay: "100ms" }}>P</span>
              <span style={{ animationDelay: "200ms" }}>M</span>
              <span style={{ animationDelay: "300ms" }}>S</span>
            </Typography>
            <Box>
              <Button color="inherit" href="/login" sx={{ mr: 2 }}>
                Login
              </Button>
              <Button variant="contained" color="primary" href="/signup">
                Signup
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container component="main" sx={{ flexGrow: 1 }}>
        {/* Left Column: Image */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", inset: 0 }}>
            <Image
              src={hero}
              alt="MPMS logo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </Box>
        </Grid>

        {/* Right Column: Text content */}
        <Grid item xs={12} md={6} sx={{ p: 4, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom color="white">
            Welcome to MPMS
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: "1.25rem", color: "white" }}>
            Your trusted partner in modern healthcare management.
          </Typography>
          <ol style={{ fontSize: "1.125rem", color: "white" }}>
            <li style={{ marginBottom: "1rem" }}>
              Streamline your medical practice with our intuitive software.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              Improve patient care with our integrated health management tools.
            </li>
          </ol>
          <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: "50px", px: 4 }}
              href="#"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ borderRadius: "50px", px: 4, borderColor: "white" }}
              href="#"
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          mt: 4,
          bgcolor: "rgba(255,255,255,0.1)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Button href="#" color="inherit">
            About Us
          </Button>
          <Button href="#" color="inherit">
            Services
          </Button>
          <Button href="#" color="inherit">
            Contact
          </Button>
        </Container>
      </Box>
    </Box>
  );
}