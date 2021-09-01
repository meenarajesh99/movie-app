import Song from '../Song/Song';

function Playlist({ songs }) {
  return (
    <div> 
      {
        songs.map(
          (song, index) => <Song title={song.title} artist={song.artist} key={index} />
        )
      }
    </div>
  );
}

export default Playlist;
