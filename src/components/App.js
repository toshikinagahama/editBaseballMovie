import React from 'react';
import './App.css';
import VideoArea from "./VideoArea"
import InputScoreArea from "./InputScoreArea"
import VideoUploadZone from "./VideoUploadZone"
import ResultTab from "./ResultTab"
import { useSelector } from 'react-redux'
import { Grid, AppBar, Toolbar, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  let ref1 = React.createRef();
  React.useEffect(() => {

  });

  return (
    <div style={{ padding: 5 }}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                動画編集アプリ
          </Typography>
              <VideoUploadZone />
            </Toolbar>
          </AppBar>
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
