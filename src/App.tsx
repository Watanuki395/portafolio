import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https:www.wataguonky.com/">
        Wataguonky
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          A page about me - under construction
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}