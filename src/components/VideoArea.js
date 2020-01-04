import React from 'react';
import { video_oprationAction, video_currentTimeChange } from '../actions'
import "../../node_modules/video-react/dist/video-react.css";
import { useDispatch, useSelector } from "react-redux";


function VideoArea() {
    const dispatch = useDispatch();
    let playerRef = React.createRef();
    let canvasRef = React.createRef();
    let parentRef = React.createRef();
    // const prop = useSelector(state => state.player);
    let player = useSelector(state => state.player);
    let src = useSelector(state => state.src);
    // if(!src){
    //     src = "Z:/Toshiki/Movie/2019-12-01/20191201100432__.mp4";
    // }
    let currentTime = useSelector(state => state.currentTime);
    if (currentTime !== null && player !== undefined) {
        player.currentTime = currentTime;
    }

    React.useEffect(() => {
        let player = playerRef.current;
        let canvas = canvasRef.current;
        let parent = parentRef.current;
        parent.style.width = parent.offsetWidth + "px";
        parent.style.height = parent.offsetHeight + "px";
        player.style.width = parent.offsetWidth + "px";
        player.style.height = Math.round(parseInt(player.style.width) * player.videoHeight / player.videoWidth) + "px";
        canvas.style.width = player.style.width;
        canvas.style.height = player.style.height;
        player.style.position = "absolute";
        canvas.style.position = "absolute";

        dispatch(video_oprationAction(player));
        let ctx = canvas.getContext("2d");
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255,0,255,0.1)";
        ctx.fillRect(0, 0, parent.offsetWidth, parent.offsetHeight);
        ctx.save();

        const onKeyDown = (e) => {
            console.log(e);
            switch (e.keyCode) {
                case 32:
                    console.log(e);
                    if(player){
                        if (player.paused){
                            player.play();
                        }else{
                            player.pause();
                        }
                    }
                    break;
            
                default:
                    break;
            }
        };

        const onKeyUp = (e) => {
            e.preventDefault();
            console.log("hello");
        };

        const onTimeUpdate = (e) => {
            // console.log(e.target.currentTime);
            // dispatch(video_currentTimeChange(e.target.currentTime));
        }

        const onPlay = (e) => {
            console.log(e);
            // dispatch(video_currentTimeChange(e.target.currentTime));
        }
        canvasRef.current.setAttribute('tabindex', 0);
        canvasRef.current.addEventListener("keydown", onKeyDown);
        canvasRef.current.addEventListener("keyup", onKeyUp);
        // canvasRef.current.addEventListener("timeupdate", onTimeUpdate);
    });

    return (
        <div ref={parentRef} style={{ position: "relative", overflow: "hidden", height: "100%", width: "100%"}} >
            <video width={"100%"} controls muted ref={playerRef} src={src}>
            </video>
            <canvas style={{height: "200px", width: "0px" }} ref={canvasRef}></canvas>
        </div>
    );
}

export default VideoArea;
