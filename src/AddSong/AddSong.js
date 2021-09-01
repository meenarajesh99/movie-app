import { useRef, useState } from 'react';

function AddSong({ title, artist, createSong }) {
  const [titleInput, setTitleInput] = useState(null);

  const titleRef = useRef(null);
  const artistRef = useRef(null);

  const handleAddSongClick = () => {
    const newTitle = titleRef.current.value;
    const newArtist = artistRef.current.value;

    createSong(newTitle, newArtist);
  }

  // Example
  const handleTitleInput = () => {
    console.log('titleREf is ', titleRef.current.value);
    setTitleInput(titleRef.current.value);
  }

  return (
    <div>
      <p>Title INPUT: {titleInput}</p>
      <label>Song title:</label>
      <input ref={titleRef} onChange={handleTitleInput}></input>

      <label>Song artist:</label>
      <input ref={artistRef} ></input>
      <button onClick={handleAddSongClick}>Add song</button>
    </div>
  );
}

export default AddSong;
