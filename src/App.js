import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import logo from './logo.png';
import IzariPlayground from './components/IzariPlayground';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 50,
    margin: 'auto',
    display: 'block',
  },
  section: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  playground: {
    height: '200px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <img src={logo} alt="Izari logo" className={classes.logo} /> */}
            <Typography variant="h4" component="h1" gutterBottom>
              Izari
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Izari Filecoin is a comprehensive set of tools designed to interact with Blockchains. With its focus on compatibility, it provides developers with a versatile and flexible solution that can be used across a range of environments, from web projects using React to backend applications using NodeJS. It enables developers to easily manage and access blockchain data, including transactions, smart contracts, and assets.
              Izari Filecoin makes it easy for developers to incorporate blockchain technology into their projects, unlocking new possibilities for innovation and growth.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Some key points:
            </Typography>
            <Typography variant="body1" gutterBottom>
              -It is written in Typescript
            </Typography>
            <Typography variant="body1" gutterBottom>
              -It is composed by pure JS
            </Typography>
            <Typography variant="body1" gutterBottom>
              -It is tested on many environments
            </Typography>

          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Playground
            </Typography>
            <Typography variant="body1" gutterBottom>
              Try out the Izari API with the following code:
            </Typography>
            <IzariPlayground />
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Resources
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Filecoin website: https://filecoin.io/
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Izari GitHub repository: https://github.com/zondax/izari-filecoin
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
