import "./App.css";
import { useState } from 'react';

import Title from "./Title/Title";
import Playlist from "./Playlist/Playlist";
import AddSong from "./AddSong/AddSong";

/***
 * -App
 *  - Title
 *    - Playlist
 *      - Song
 *      - Song
 *      - Song
 *  - AddSong
 *    - AddSongForm
 *    - AddSongButton
 */
function App(props) {
  const [songs, setSongs] = useState(props.songs);

  const createSong = (title, artist) => {
    const updatedSongs = songs.concat([{title, artist }]);
    setSongs(updatedSongs);
  }

  return (
    <div className="App">
      <Title />
      <Playlist songs={songs} />
      <AddSong createSong={createSong} />
    </div>
  );
}

export default App;
