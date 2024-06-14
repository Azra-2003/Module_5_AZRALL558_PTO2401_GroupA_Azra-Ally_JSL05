// Array of Song objects. Added 5 songs with titles, artists, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Arab pop" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Arab pop" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Arab pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Arab pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Arab pop" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Levitating", "artist": "Dua Lipa", "genre": "Arab Pop" },
    { title: "Blinding Lights", "artist": "The Weeknd", "genre": "Arab pop" },
    { title: "Watermelon Sugar", "artist": "Harry Styles", "genre": "Arab Pop" },
    { title: "Heat Waves", "artist": "Glass Animals", "genre": "Arab pop" },
    { title: "good 4 u", "artist": "Olivia Rodrigo", "genre": "Wolrdnation" }
];

// Each of the Guardians' preferred genres
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Special",
    "Groot": "Special"
};

// Special playlists for specific guardians
const specialPlaylists = {
    "Drax": [
        { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye  & Tammi Terrell", genre: "R&B" }
    ],
    "Rocket": [
        { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
        { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
        { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }
    ],
    "Groot": [
        { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
        { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" }
    ]
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardian) {
    let playlist;
    if (specialPlaylists[guardian]) {
        playlist = specialPlaylists[guardian];
      } else {
        playlist = songs.filter(song => song.genre === guardians[guardian]);
      }

    const playlistDiv = document.createElement('div');
    playlistDiv.classList.add('playlist');
    const heading = document.createElement('h2');
    heading.textContent = `${guardian}'s Playlist:`;
    playlistDiv.appendChild(heading);

    playlist.forEach(song => {
         const songElement = document.createElement('p');
         songElement.classList.add('song');

           const titleElement = document.createElement('span');
           titleElement.textContent = `${song.title}`;
           titleElement.classList.add('song-title');
           songElement.appendChild(titleElement);

           const artistElement = document.createElement('span');
           artistElement.textContent = ` by ${song.artist}`;
           artistElement.classList.add('song-artist');
           songElement.appendChild(artistElement);

           playlistDiv.appendChild(songElement);
    });

         return playlistDiv;
}

// Call generatePlaylist and display playlists for each Guardian
    document.addEventListener('DOMContentLoaded', function () {
       const playlistsDiv = document.getElementById('playlists');
    Object.keys(guardians).forEach(guardian => {
          const playlistDiv = generatePlaylist(guardian);
          playlistsDiv.appendChild(playlistDiv);
    });
});