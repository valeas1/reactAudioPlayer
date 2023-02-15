import React from 'react';
import LibraryListItem from './LibraryListItem';
import useChillHop from '../API/useChillHop';
import '../style/library.css';

const Library = () => {
    const chillHop = useChillHop();
    return (
        <React.Fragment>
            <div className="library">
                <h1 className="library__title">Library</h1>
                <ul className="library__list">
                    {chillHop.map((item) => (
                        <LibraryListItem
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            img={item.cover}
                            artist={item.artist}
                        />
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Library;
