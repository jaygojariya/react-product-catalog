import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import AllRoutes from "./routes";
import { Box, Container, Grid } from "@mui/material";
import NotifySnackbar from "./components/common/NotifySnackbar";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <NotifySnackbar />
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <AllRoutes />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
