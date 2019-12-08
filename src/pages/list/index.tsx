import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MovieCard from '../../components/MovieCard';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'IMDB TOP 250', url: '#' },
  { title: '喜剧', url: '#' },
  { title: '科幻', url: '#' },
  { title: '悬疑', url: '#' },
  { title: '动画', url: '#' },
  { title: '爱情', url: '#' },
  { title: '犯罪', url: '#' },
  { title: '动作', url: '#' },
  { title: '社会', url: '#' },
];

// const posts = [post1, post2, post3];

export default function List() {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="IMovie" sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
            {/* {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} sm={6} md={3}>
              <MovieCard image={'/assets/actor.jpg'} title="测试" desc="测试" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MovieCard image={'/assets/actor.jpg'} title="测试" desc="测试" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MovieCard image={'/assets/actor.jpg'} title="测试" desc="测试" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MovieCard image={'/assets/actor.jpg'} title="测试" desc="测试" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MovieCard image={'/assets/actor.jpg'} title="测试" desc="测试" />
            </Grid>
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}
