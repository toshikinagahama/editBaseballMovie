import React from 'react';
import { video_oprationAction, video_currentTimeChange } from '../actions'
import "../../node_modules/video-react/dist/video-react.css";
import { useDispatch, useSelector } from "react-redux";


function VideoArea() {
    const dispatch = useDispatch();
    let playerRef = React.createRef();
    let canvasRef = React.createRef();
    // const prop = useSelector(state => state.videoChange.player);
    let player = useSelector(state => state.videoChange.player);
    let src = useSelector(state => state.videoChange.src);
    // if(!src){
    //     src = "Z:/Toshiki/Movie/2019-12-01/20191201100432__.mp4";
    // }
    let currentTime = useSelector(state => state.resultTableChange.currentTime);
    console.log(currentTime);
    console.log(player);
    if(currentTime !== null && player !== undefined){
        player.currentTime = currentTime;
        console.log(currentTime);
    }

    React.useEffect(() => {
        let player = playerRef.current;
        dispatch(video_oprationAction(player));

        const onKeyDown = (e) => {

            // let player = playerRef.current;
            // let canvas = canvasRef.current;
            // console.log(player);
            // console.log(canvas);

            // player.style.position = "absolute";
            // canvas.style.position = "absolute";
            // dispatch(video_oprationAction(player));
            // let ctx = canvas.getContext("2d");
            // ctx.fillStyle = "rgba(255,0,255,0.5)"; 
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            // ctx.save();
        };

        const onTimeUpdate = (e) => {
            console.log(e.target.currentTime);
            dispatch(video_currentTimeChange(e.target.currentTime));
        }

        playerRef.current.addEventListener("keydown", onKeyDown);
        playerRef.current.addEventListener("timeupdate", onTimeUpdate);
    });

    return (
        <div>
            <video width={800} controls muted ref={playerRef} src={src}>
            </video>
            {/* <canvas width={800} height={400} ref={canvasRef}></canvas> */}
        </div>
    );
}

export default VideoArea;
