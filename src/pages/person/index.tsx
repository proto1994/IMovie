import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';

// xs: 0,
// sm: 600,
// md: 960,
// lg: 1280,
// xl: 1920,

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

  personCover: {
    display: 'block',
    width: 280,
    borderWidth: 0,
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: theme.shadows[3],
  },

  personInfo: {
    // paddingTop: theme.spacing(4),
  },
  personDesc: {
    paddingTop: theme.spacing(5),
    background: 'transparent',
  },

  movieBox: {
    width: 150,
  },

  movieCover: {
    width: '100%',
    height: 225,
    display: 'block',
    boxShadow: theme.shadows[3],
    borderRadius: 5,
    marginBottom: theme.spacing(1),
  },
  movieName: {
    textAlign: 'center',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  personCoverBox: {},
  '@media screen and (max-width: 960px)': {
    personCoverBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

export default function Person(props: any) {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          IMovie
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>

      <div className={classes.root}>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.personCoverBox} lg={3} md={4} sm={12} xs={12}>
              <img
                className={classes.personCover}
                src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/opEemSnjnN4hbwymHz5P0VVuk4F.jpg"
              />
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Typography
                style={{ marginTop: 20 }}
                variant="h4"
                className={classes.personCoverBox}
                component="h1"
                gutterBottom
              >
                Scarlett Johansson
              </Typography>
              <Grid container spacing={3} className={classes.personCoverBox}>
                <Grid item md={2} sm={3} xs={6}>
                  <Typography variant="h6" component="p">
                    Known For
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Acting
                  </Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                  <Typography variant="h6" component="p">
                    Birthday
                  </Typography>
                  <Typography component="p" gutterBottom>
                    1984-11-22
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" style={{ marginTop: 10 }} component="h2" gutterBottom>
                Biography
              </Typography>
              <Typography gutterBottom>
                Scarlett Johansson, born November 22, 1984, is an American actress, model and
                singer. She made her film debut in North (1994) and was later nominated for the
                Independent Spirit Award for Best Female Lead for her performance in Manny & Lo
                (1996), garnering further acclaim and prominence with roles in The Horse Whisperer
                (1998) and Ghost World (2001). She shifted to adult roles with her performances in
                Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for
                which she won a BAFTA award for Best Actress in a Leading Role; both films earned
                her Golden Globe Award nominations as well…
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" style={{ marginTop: 20 }} component="h2">
            作品
          </Typography>
          <Divider style={{ margin: '2px 0 20px 0' }} />
          {/* There is already an h1 in the page, let's not duplicate it. */}

          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map(item => {
              return (
                <Grid item xs={6} sm={3} md={2} key={item}>
                  <div className={classes.movieBox}>
                    <img
                      className={classes.movieCover}
                      src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg"
                    />
                    <Typography className={classes.movieName} gutterBottom>
                      Biography
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
