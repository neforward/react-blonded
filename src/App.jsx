import './App.css'

function App() {

  const blondedData = [
    {
      title: 'Nikes',
      AudioURL: '../public/1Nikes.mp3'
    },
    {
      title: 'Ivy',
      AudioURL: '../public/2Ivy.mp3'

    },
    {
      title: 'Pink + White',
      AudioURL: '../public/3Pink+White.mp3'
    },
    {
      title: 'Be Yourself',
      AudioURL: '../public/4BeYourself.mp3'
    },
    {
      title: 'Solo',
      AudioURL: '../public/5Solo.mp3'
    },
    {
      title: 'Skyline To',
      AudioURL: '../public/6SkylineTo.mp3'
    }
    ,
    {
      title: 'Self Control',
      AudioURL: '../public/7SelfControl.mp3'
    }
    ,
    {
      title: 'Good Guy',
      AudioURL: '../public/8GoodGuy.mp3'
    }
    ,
    {
      title: 'Nights',
      AudioURL: '../public/9Nights.mp3'
    },
    {
      title: 'Solo Reprise',
      AudioURL: '../public/10SoloReprise.mp3'
    },
    {
      title: 'Pretty Sweet',
      AudioURL: '../public/11PrettySweet.mp3'
    },
    {
      title: 'Facebook Story',
      AudioURL: '../public/12FacebookStory.mp3'
    },
    {
      title: 'Close To You',
      AudioURL: '../public/13CloseToYou.mp3'
    },
    {
      title: 'White Ferrari',
      AudioURL: '../public/14WhiteFerrari.mp3'
    },
    {
      title: 'Seigfried',
      AudioURL: '../public/15Seigfried.mp3'
    },
    {
      title: 'Godspeed',
      AudioURL: '../public/16GodSpeed.mp3'
    },
    {
      title: 'Futura Free',
      AudioURL: '../public/17FuturaFree.mp3'
    },
  ]
  return (
    <>
      <header className="header">
      </header>
      <div className="flex">
        <div className="audio">
          {blondedData.map((song, i) => (
            <div key={i} className="audio-name">
              <h2>{song.title}</h2>
              <audio controls src={song.AudioURL} className="player"></audio>
            </div>
          ))}
        </div>
        <div className="cover">
          <a href="https://music.apple.com/us/album/blonde/1146195596" target='_blank'>
            <img className='card' src="https://pbs.twimg.com/media/E0uwdA1XEAUNLMU.jpg:large" alt="" />
            <h1>Blonde</h1>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
