import React from 'react';
import Library from './components/Library';
import AudioPlayer from './components/AudioPlayer';
import { AudioListContextProvider } from './context/AudioListContext';

function App() {
    return (
        <React.Fragment>
            <AudioListContextProvider>
                <Library />
                <AudioPlayer />
            </AudioListContextProvider>
        </React.Fragment>
    );
}

export default App;
