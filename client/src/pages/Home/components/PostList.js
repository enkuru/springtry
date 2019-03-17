import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  postsContainer: {
    padding: theme.spacing.unit * 2,
  },
  postItem: {
    marginBottom: theme.spacing.unit * 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

class PostList extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {};

  render() {
    const {classes, postList} = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16} className={classes.postsContainer}>
          {postList.map(post => (
            <Grid key={post.id} className={classes.postItem} item xs={4}>
              <Paper className={classes.paper}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={0}>
                      <Grid item xs={6}>
                        <Typography gutterBottom variant="subtitle1">{post.subject}</Typography>
                      </Grid>
                      <Grid item>
                        <HTMLEllipsis unsafeHTML={post.content} maxLine='6' ellipsis='...' basedOn='letters'/>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom>{new Date(post.lastModifiedDate).toLocaleString()}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} container spacing={8}>
                    <Grid item xs>
                      <Typography variant="subtitle1">{post.tags.map(tag => tag.name).join(", ")}</Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="subtitle1" align={"right"}>{post.categoryName}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PostList);