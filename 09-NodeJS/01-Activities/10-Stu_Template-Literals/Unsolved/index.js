// music should be an object with title, artist, and album properties
const music = {
  title: 'Sky Blue Sky',
  artist: 'Wilco',
  album: 'Sky Blue Sky'
  // code here
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  My favorite song is ${music.title} by ${music.artist} on the album, ${music.album}.
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

