import React, { useState, useEffect } from 'react';

interface Song {
  title: string;
  artist: string;
  duration: string;
}

const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMobile, setIsMobile] = useState(false);

  const playlist: Song[] = [
    { title: "All Star", artist: "Smash Mouth", duration: "3:20" },
    { title: "Blue (Da Ba Dee)", artist: "Eiffel 65", duration: "3:29" },
    { title: "Tubthumping", artist: "Chumbawamba", duration: "3:34" },
    { title: "Mambo No. 5", artist: "Lou Bega", duration: "3:40" },
    { title: "Barbie Girl", artist: "Aqua", duration: "3:17" },
    { title: "Macarena", artist: "Los Del Rio", duration: "3:58" },
    { title: "Cotton Eye Joe", artist: "Rednex", duration: "3:14" },
    { title: "I'm Gonna Be (500 Miles)", artist: "The Proclaimers", duration: "3:39" },
    { title: "Wannabe", artist: "Spice Girls", duration: "2:53" },
    { title: "MMMBop", artist: "Hanson", duration: "3:58" }
  ];

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(true);//window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
      }, 12000); // Change song every 12 seconds for demo

      return () => clearInterval(interval);
    }
  }, [isPlaying, playlist.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const currentSong = playlist[currentSongIndex];

  // Mobile bottom bar
  if (isMobile) {
    return (
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(45deg, #000, #333)',
        border: '2px solid #00ff00',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        zIndex: 1000,
        fontFamily: 'Courier New, monospace',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        {/* Song Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            color: '#00ff00',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            animation: isPlaying ? 'none' : 'none'
          }}>
            🎵 {currentSong.title}
          </div>
          <div style={{
            color: '#ffff00',
            fontSize: '10px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            👤 {currentSong.artist}
          </div>
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}>
          <button
            onClick={prevSong}
            className="retro-button"
            style={{
              fontSize: '10px',
              padding: '4px 6px',
              minHeight: '28px',
              minWidth: '28px',
              background: '#000',
              color: '#00ff00',
              border: '1px solid #00ff00'
            }}
          >
            ⏮️
          </button>
          
          <button
            onClick={togglePlayPause}
            className="retro-button"
            style={{
              fontSize: '10px',
              padding: '4px 6px',
              minHeight: '28px',
              minWidth: '28px',
              background: '#000',
              color: '#00ff00',
              border: '1px solid #00ff00'
            }}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <button
            onClick={nextSong}
            className="retro-button"
            style={{
              fontSize: '10px',
              padding: '4px 6px',
              minHeight: '28px',
              minWidth: '28px',
              background: '#000',
              color: '#00ff00',
              border: '1px solid #00ff00'
            }}
          >
            ⏭️
          </button>
        </div>

        {/* Status */}
        <div style={{
          color: '#ffff00',
          fontSize: '8px',
          textAlign: 'center',
          minWidth: '40px',
          animation: isPlaying ? 'blink 1s infinite' : 'none'
        }}>
          {isPlaying ? '🎵' : '⏸️'}
        </div>
      </div>
    );
  }

  // Desktop radio player
  return (
    <div className="radio-player">
      <div className="radio-player-header">
        📻 NOW PLAYING - RETRO 2000s RADIO 📻
      </div>
      
      <div className="radio-player-content">
        <div className="radio-player-info">
          <div className="radio-player-title">
            🎵 {currentSong.title}
          </div>
          <div className="radio-player-artist">
            👤 {currentSong.artist}
          </div>
          <div style={{ fontSize: '10px', color: '#00ff00' }}>
            ⏱️ {currentSong.duration} | 🎧 Track {currentSongIndex + 1} of {playlist.length}
          </div>
        </div>

        <div className="radio-player-controls">
          <button 
            className="radio-player-btn" 
            onClick={prevSong}
            style={{ fontSize: '10px' }}
          >
            ⏮️ PREV
          </button>
          <button 
            className="radio-player-btn" 
            onClick={togglePlayPause}
            style={{ fontSize: '10px' }}
          >
            {isPlaying ? '⏸️ PAUSE' : '▶️ PLAY'}
          </button>
          <button 
            className="radio-player-btn" 
            onClick={nextSong}
            style={{ fontSize: '10px' }}
          >
            ⏭️ NEXT
          </button>
        </div>

        <div className="radio-player-progress">
          <div className="radio-player-progress-bar"></div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '10px', color: '#ffff00', marginBottom: '5px' }}>
            🔊 VOLUME: {volume}%
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              background: '#000',
              border: '2px solid #00ff00',
              outline: 'none'
            }}
          />
        </div>

        <div className="radio-player-status">
          {isPlaying ? '🎵 NOW PLAYING' : '⏸️ PAUSED'}
        </div>

        <div style={{ 
          fontSize: '8px', 
          color: '#666', 
          textAlign: 'center', 
          marginTop: '10px',
          borderTop: '1px solid #333',
          paddingTop: '10px'
        }}>
          🎶 RETRO 2000s HITS 🎶
          <br />
          📻 BROADCASTING LIVE 📻
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer; 