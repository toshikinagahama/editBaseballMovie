import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './VideoUploadZone.css';
import { useDispatch, useSelector } from 'react-redux';
import { video_srcChange } from '../actions';

function VideoUploadZone() {
  // let player = useSelector(state => state.videoChange.player);
  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    //最初の1ファイルのみ対象。
    let file = acceptedFiles[0];
    let url = URL.createObjectURL(file);
    dispatch(video_srcChange(url));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="VideoUploadZone" multiple={false} style={{ margin: 0, padding: 0 }}>
      <input {...getInputProps()} />
      <p>　　　　　　　　　ファイル選択　　　　　　　　　</p>
    </div>
  );
}

export default VideoUploadZone;
