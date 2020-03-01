import React from 'react';
import './App.css';
import VideoArea from './VideoArea';
import InputScoreArea from './InputScoreArea';
import VideoUploadZone from './VideoUploadZone';
import ResultTab from './ResultTab';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { keyUp } from '../actions';

function App() {
  const dispatch = useDispatch();
  let ref1 = React.createRef();
  React.useEffect(() => {});

  return (
    <div style={{ padding: 0 }}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <VideoUploadZone />
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="center" ref={ref1}>
            <Grid item xs={12}>
              <VideoArea />
            </Grid>
            <Grid item xs={12}>
              <InputScoreArea />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <ResultTab />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
