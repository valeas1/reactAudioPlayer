import React, { useContext } from 'react';
import { AudioListContext } from '../context/AudioListContext';

const LibraryListItem = ({ id, name, img, artist }) => {
    const { chill, current, setTrackByIdHandle } = useContext(AudioListContext);

    return (
        <li
            id={id}
            onClick={setTrackByIdHandle}
            style={chill[current].id === id ? { background: 'rgb(185 192 231)' } : null}
        >
            <div className="library__list-item">
                <img className="library__list-item-img" src={img}></img>
                <div>
                    <p>{name}</p>
                    <p className="library__list-item-artist">{artist}</p>
                </div>
            </div>
        </li>
    );
};

export default LibraryListItem;
