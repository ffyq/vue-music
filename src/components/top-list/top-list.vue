<template>
  <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
</template>

<script type="text/ecmascript-6">
import MusicList from "components/music-list/music-list";
import { mapGetters } from "vuex";
import { getMusicList } from "api/rank";
import { ERR_OK } from "api/config";
import { createTopSong } from "common/js/song";

export default {
  computed: {
    title() {
      return this.topList.topTitle;
    },
    bgImage() {
      if (this.songs.length) {
        return this.songs[0].pic;
      }
      return "";
    },
    ...mapGetters(["topList"]),
  },
  data() {
    return {
      songs: [],
      rank: true,
    };
  },
  created() {
    this._getMusicList();
  },
  methods: {
    _getMusicList() {
      if (!this.topList.id) {
        this.$router.push("/rank");
        return;
      }
      getMusicList(this.topList.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.songlist);
          console.log(this.songs);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach((item) => {
        const musicData = item.data;
        if (musicData.songid && musicData.albummid) {
          ret.push(createTopSong(musicData));
        }
      });
      return ret;
    },
  },
  components: {
    MusicList,
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>