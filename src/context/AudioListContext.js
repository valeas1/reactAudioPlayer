import React, { createContext, useState } from 'react';
import useChillHop from '../API/useChillHop';

export const AudioListContext = createContext();

export const AudioListContextProvider = ({ children }) => {
    const chill = useChillHop();

    const [current, setCurrent] = useState(0);

    const nextTrackHandler = () => {
        if (current >= chill.length - 1) {
            setCurrent(() => {
                return 0;
            });
        } else {
            setCurrent((current) => {
                return current + 1;
            });
        }
    };

    const prevTrackHandler = async () => {
        if (current === 0) {
            setCurrent(() => {
                return chill.length - 1;
            });
        } else {
            setCurrent((current) => {
                return current - 1;
            });
        }
    };

    const setTrackByIdHandle = (e) => {
        let idx = chill.findIndex((item) => item.id === +e.currentTarget.id);
        setCurrent(idx);
    };

    return (
        <AudioListContext.Provider
            value={{ chill, current, setCurrent, nextTrackHandler, prevTrackHandler, setTrackByIdHandle }}
        >
            {children}
        </AudioListContext.Provider>
    );
};
