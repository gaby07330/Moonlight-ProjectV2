import React from 'react';
import AudioPlayer from "react-modular-audio-player";
import './lecteur.css';


let rearrangedPlayer = [

    {
        className: "top",
        innerComponents: [
            {
                type: "rewind",
                style: {
                    width: "33%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.8",
                    color: "#ffffff"
                }
            },
            {
                type: "play",
                style: {
                    width: "33%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.9",
                    color: '#ffffff'
                }
            },
            {
                type: "forward",
                style: {
                    width: "33%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.8",

                }
            }
        ]
    },
    {
        className: "bottom",
        innerComponents: [
            {
                type: "name",
                style: {
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "2%",
                    color: "rgb(204 204 204)",
                    paddingLeft: "auto",
                    paddingRight: "auto",

                }
            },
        ]
    },
    {
        className: "volume",
        innerComponents: [
            {
                type: "volume",
                style: {
                    width: "100%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "1",
                }
            }

        ]
    }

];

let playlist = [
    {
        src: "sound/old.mp3",
        title: "Old good song",
        artist: "Fabien Coll"
    },
    {
        src: "sound/ost.mp3",
        title: "Opening",
        artist: "Fabien Coll"
    }
];

function AudioPlayerPage(props) {
    return (
        <div>
            <AudioPlayer
                audioFiles={playlist}
                rearrange={rearrangedPlayer}
                playerWidth="10rem"
            />
        </div>
    );
}

export default AudioPlayerPage;