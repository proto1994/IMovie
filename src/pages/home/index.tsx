import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

import LocalMovies from '@material-ui/icons/LocalMovies';

import { getRecommendMovieTypeListAction } from '../../ducks/home';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        HF.SHI & YT.YU
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  searchIconButton: {
    position: 'absolute',
    right: 0,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 300,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default connect(
  ({ home }) => {
    const { recommendMovieTypeList, loading } = home;
    return {
      recommendMovieTypeList,
      loading,
    };
  },
  {
    getRecommendMovieTypeListAction,
  },
)(Album);
function Album(props) {
  console.log(props, 'props');
  const classes = useStyles({});
  const history = useHistory();
  //
  useEffect(() => {
    // console.log(props, 'props');
    props.getRecommendMovieTypeListAction();
  }, []);

  const [keywords, setKeywords] = useState('');

  function gotoListPage(type, keywords) {
    history.push(`list?type=${type}&keywords=${keywords}`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalMovies className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            IMovie
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              IMovie
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              爱电影，爱生活
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container justify="center" style={{ position: 'relative' }}>
                <TextField
                  autoComplete="off"
                  value={keywords}
                  onChange={e => {
                    setKeywords(e.target.value);
                  }}
                  style={{ width: '100%' }}
                  id="standard-basic"
                  label="导演、演员、电影"
                />
                <IconButton
                  onClick={() => {
                    gotoListPage('', keywords);
                  }}
                  type="submit"
                  className={classes.searchIconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {props.loading ? (
            <Grid container alignItems="center" justify="center">
              <CircularProgress />
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {(props.recommendMovieTypeList || []).map(card => (
                <Grid item key={card.type} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => {
                      gotoListPage(card.type, '');
                    }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.cover}
                      title={card.typeName}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.typeName}
                      </Typography>
                      <Typography>{card.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          爱电影，爱生活
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
