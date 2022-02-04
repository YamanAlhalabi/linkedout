import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Restore() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card>
          <Box
            sx={{
              marginTop: 8,
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Restore Account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Restoration Email
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link onClick={handleSignIn} href="#" variant="body2">
                  Sign In
                </Link>
              </Grid>
              <Grid item xs>
                <Link onClick={handleSignUp} href="#" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
