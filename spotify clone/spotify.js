console.log('ffff')
let songIndex = 1
let audioElement = new Audio('Songs/0.mp3')
// audioElement.play()
let MasterPlay = document.getElementById('masterPlay')
let range = document.getElementById('range')
let songItem = Array.from(document.getElementsByClassName('song-item'))
// console.log(songItem)

let mySongs = [
  {
    songName: 'perfect',
    filePath: 'Songs/0.mp3',
    coverPath: 'Songs/perfect',
  },
  {
    songName: 'photograph',
    filePath: 'Songs/1.mp3',
    coverPath: 'Songs/Photograph.mp3',
  },
  {
    songName: 'Maan meri Jaan',
    filePath: 'Songs/2.mp3',
    coverPath: 'Songs/Maan Meri Jaan.mp3',
  },
  {
    songName: 'pasoori',
    filePath: 'Songs/3.mp3',
    coverPath: 'Songs/Pasoori.mp3',
  },
  {
    songName: 'What Makes You Beautiful',
    filePath: 'Songs/4.mp3',
    coverPath: 'Songs/What_Makes_You_Beautiful).mp3',
  },
  {
    songName: 'Treat You Better',
    filePath: 'Songs/5.mp3',
    coverPath: 'Songs/Treat You Better.mp3',
  },
  {
    songName: 'Night Changes',
    filePath: 'Songs/6.mp3',
    coverPath: 'Songs/Night-Changes.mp3',
  },
  {
    songName: 'pillowtalk',
    filePath: 'Songs/7.mp3',
    coverPath: 'Songs/Pillow_Talk.mp3',
  },
  {
    songName: 'Befikar',
    filePath: 'Songs/8.mp3',
    coverPath: 'Songs/Befikar.mp3',
  },
  {
    songName: 'sajna',
    filePath: 'Songs/9.mp3',
    coverPath: 'Songs/Sajna.mp3',
  },
  {
    songName: 'Tum se hi',
    filePath: 'Songs/10.mp3',
    coverPath: 'Songs/Tum-Se-Hi.mp3',
  },
  {
    songName: 'Love Story ',
    filePath: 'Songs/11.mp3',
    coverPath: 'Songs/Love-Story.mp3',
  },
  {
    songName: 'TUne JO Na Kaha',
    filePath: 'Songs/12.mp3',
    coverPath: 'Songs/Tune -Jo-Na-Kaha.mp3',
  },
  {
    songName: 'Bazigar',
    filePath: 'Songs/13.mp3',
    coverPath: 'Songs/Bazigar.mp3',
  },
  {
    songName: 'Industry Baby',
    filePath: 'Songs/14.mp3',
    coverPath: 'Songs/INDUSTRY-BABY.mp3',
  },
  { songName: 'Baby', filePath: 'Songs/15.mp3', coverPath: 'Songs/Baby.mp3' },
]

MasterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    MasterPlay.classList.remove('fa-circle-play')
    MasterPlay.classList.add('fa-circle-pause')
    document.getElementById('gif').style.opacity = '1'
  } else {
    audioElement.pause()
    MasterPlay.classList.remove('fa-circle-pause')
    MasterPlay.classList.add('fa-circle-play')
    document.getElementById('gif').style.opacity = '0'
  }
})

audioElement.addEventListener('timeupdate', () => {
  //   console.log('timupdate')
  progress = Math.floor(
    (audioElement.currentTime / audioElement.duration) * 100,
  )
  //   console.log(progress)
  range.value = progress

  //   duration = (progress / audioElement.currentTime) * 100
})

range.addEventListener('change', () => {
  audioElement.currentTime = (range.value * audioElement.duration) / 100
})

const makeAllPause = () => {
  Array.from(document.getElementsByClassName('songs-play')).forEach(
    (Element) => {
      Element.classList.remove('fa-play-circle')
      Element.classList.add('fa-pause-circle')
    },
  )
}

Array.from(document.getElementsByClassName('songs-play')).forEach((Element) => {
  Element.addEventListener('click', (e) => {
    makeAllPause()
    songIndex = parseInt(e.target.id)
    console.log(songIndex)
    e.target.classList.remove('fa-pause-circle')
    e.target.classList.add('fa-play-circle')
    audioElement.currentTime = 0
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play()
    document.getElementById('gif').style.opacity = '1'
    console.log(e.target)
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play()
      MasterPlay.classList.remove('fa-circle-play')
      MasterPlay.classList.add('fa-circle-pause')
      document.getElementById('gif').style.opacity = '1'
    } else {
      audioElement.pause()
      MasterPlay.classList.remove('fa-circle-pause')
      MasterPlay.classList.add('fa-circle-play')
      document.getElementById('gif').style.opacity = '0'
    }
    let gifText = document.getElementById('gif-text')
    gifText.innerText = mySongs[songIndex].songName
  })
})

let backward = document.getElementById('backward')
backward.addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  } else {
    songIndex -= 1
  }
  ;(audioElement.currentTime = 0), (audioElement.src = `songs/${songIndex}.mp3`)
  audioElement.play()
  let gifText = document.getElementById('gif-text')
  gifText.innerText = mySongs[songIndex].songName
})

let forward = document.getElementById('forward')
forward.addEventListener('click', () => {
  if (songIndex >= 14) {
    songIndex = 14
  } else {
    songIndex += 1
  }
  ;(audioElement.currentTime = 0), (audioElement.src = `songs/${songIndex}.mp3`)
  audioElement.play()
  let gifText = document.getElementById('gif-text')
  gifText.innerText = mySongs[songIndex].songName
  document.getElementById('gif').style.opacity = '1'
})
// shuffleNumber = Math.floor(Math.random() * 14)
// songShuffleNumber = shuffleNumber <= 14
// console.log(shuffleNumber)

let shuffleSongs = document.getElementById('shuffle')
shuffleSongs.addEventListener('click', () => {
  // for (let i = 0; i <= 24; i++) {
  shuffleNumber = Math.floor(Math.random() * 14)
  console.log(shuffleNumber)
  ;(audioElement.currentTime = 0),
    (audioElement.src = `songs/${shuffleNumber}.mp3`)
  audioElement.play()
  let gifText = document.getElementById('gif-text')
  gifText.innerText = mySongs[songIndex].songName
  document.getElementById('gif').style.opacity = '1'
})
