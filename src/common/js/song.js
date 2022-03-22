class Song {
  constructor({id,title,singer_name,pic,vid,avatar}) {
    this.id = id
    this.title = title
    this.singer_name = singer_name
    this.pic=pic
    this.vid=vid
    this.avatar = avatar || 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002W2TWi0e4Gek.jpg?max_age=2592000'
  }
}
export function createSong(musicData,avatar) {
  return new Song({
    id: musicData.id,
    title: musicData.title,
    singer_name: musicData.singer_name,
    pic: musicData.pic,
    vid: musicData.vid,
    avatar:avatar
  })
}

export function createTopSong(musicData) {
  return new Song({
    id: musicData.songid,
    title: musicData.songname,
    singer_name: filterSinger(musicData.singer),
    pic: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    vid: musicData.vid
  })
}

// 多个歌手合并
function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}