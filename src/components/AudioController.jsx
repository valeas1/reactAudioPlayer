import React, { useContext } from 'react';
import { AudioListContext } from '../context/AudioListContext';
import nextPrev from '../img/nextprev.svg';
import play from '../img/play.svg';
import pause from '../img/pause.svg';

const AudioController = ({ toggleHandler, isPlaying, currentTime, duration, onScrub }) => {
    const { nextTrackHandler, prevTrackHandler } = useContext(AudioListContext);

    return (
        <div className="audio-player__controllers">
            <input
                type="range"
                value={currentTime}
                step="1"
                min="0"
                max={duration ? duration : '0'}
                onChange={(e) => onScrub(e.target.value)}
                className="audio-player__range"
            ></input>
            <div>
                <button className="audio-player__btn audio-player__btn--prev" onClick={prevTrackHandler}>
                    <img src={nextPrev} alt="prev" />
                </button>
                <button className="audio-player__btn" onClick={toggleHandler}>
                    {isPlaying ? <img src={pause} alt="pause" /> : <img src={play} alt="play" />}
                </button>
                <button className="audio-player__btn" onClick={nextTrackHandler}>
                    <img src={nextPrev} alt="next" />
                </button>
            </div>
        </div>
    );
};

export default AudioController;
