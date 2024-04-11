import { useState } from 'react';
import { CssBaseline, Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import reactLogo from './assets/react.svg';

const viteLogo = '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Cat Thompson's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '40vmin' }} />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '40vmin' }} />
            </a>
          </div>
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            Welcome to My Portfolio
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Explore my projects and learn more about me.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Click on the Vite and React logos to learn more about the technologies I use.
      </Typography>
    </>
  );
}

export default App;
