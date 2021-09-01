import PropTypes from 'prop-types';

function Song({ title, artist }) {
  return (
    <div> 
      <h4>{title}</h4>
      <p>{artist}</p>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
}

export default Song;
