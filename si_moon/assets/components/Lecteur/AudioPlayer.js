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
                    opacity: "0.4"
                }
            },
            {
                type: "play",
                style: {
                    width: "33%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.4",
                }
            },
            {
                type: "forward",
                style: {
                    width: "33%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.4",

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
                    marginTop: "5%",
                    color: "#787e84",
                    paddingLeft: "auto",
                    paddingRight: "auto",

                }
            },

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
        src: "ost.mp3",
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