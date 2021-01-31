import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './VideoUploadZone.css';
import { useDispatch, useSelector } from 'react-redux';
import { video_srcChange } from '../actions';
import { Button, TextField } from '@material-ui/core';

function VideoUploadZone() {
  // let player = useSelector(state => state.videoChange.player);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    //最初の1ファイルのみ対象。
    let file = acceptedFiles[0];
    let tmp_url = URL.createObjectURL(file);
    dispatch(video_srcChange(tmp_url));
  }, []);

  function handleChange(e) {
    console.log(url);
    setUrl(e.target.value);
  }

  function btnClicked() {
    dispatch(video_srcChange(url));
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        {...getRootProps()}
        className="VideoUploadZone"
        multiple={false}
      >
        <input {...getInputProps()} />
        <p>ファイル選択</p>
      </Button>
      <input type="text" value={url} onChange={(e) => handleChange(e)} />
      <Button variant="contained" color="secondary" onClick={btnClicked}>
        決定
      </Button>
    </div>
  );
}

export default VideoUploadZone;
