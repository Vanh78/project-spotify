import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs  } from '../Context';


export default function Playing(){
    const {song,hanldeSetSong} = useContext(Songs)
    const handleClickNext = () =>{
        hanldeSetSong(song.id + 1)

    }

    const handleClickPrevious = () =>{
        hanldeSetSong(song.id -1)
    }
    return(
        <div>
            <AudioPlayer 
            className="player-music" 
            src={song.url}
            layout="stacked-reverse" 
            showSkipControls={true} 
            showJumpControls={false}
            onClickNext = {handleClickNext}
            onClickPrevious = {handleClickPrevious}
            />
        </div>
    )
}