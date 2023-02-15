import React, { useContext, useEffect, useRef, useState } from 'react';
import AudioController from './AudioController';
import { fancyTimeFormat } from '../utils';
import { AudioListContext } from '../context/AudioListContext';
import '../style/audioPlayer.css';

const AudioPlayer = () => {
    const { chill, current, nextTrackHandler } = useContext(AudioListContext);

    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef(new Audio(chill[current].audio));

    const intervalRef = useRef(null);

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime);
        }, 1000);
    };

    const onScrub = (value) => {
        audioRef.current.currentTime = value;

        setCurrentTime(audioRef.current.currentTime);
    };

    const toggleHandler = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (currentTime === audioRef.current.duration && isPlaying) {
            nextTrackHandler();
        }
    }, [currentTime]);

    useEffect(() => {
        setCurrentTime(0);

        audioRef.current.pause();
        clearInterval(intervalRef.current);

        audioRef.current = new Audio(chill[current].audio);

        if (isPlaying) {
            setTimeout(function () {
                audioRef.current.play();
            }, 200);
            startTimer();
        }
    }, [current]);

    return (
        <div className="audio-player">
            <img className="audio-player__img" src={chill[current].cover} alt="" />
            <h2 className="audio-player__name">{chill[current].name}</h2>
            <p className="audio-player__artist">{chill[current].artist}</p>
            <p className="audio-player__time">
                <span>{fancyTimeFormat(currentTime)}</span>
                <span>{fancyTimeFormat(audioRef.current.duration)}</span>
            </p>
            <AudioController
                toggleHandler={toggleHandler}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={audioRef.current.duration}
                onScrub={onScrub}
            />
        </div>
    );
};

export default AudioPlayer;
