<template>
  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
</template>

<script type="text/ecmascript-6">
import MusicList from "components/music-list/music-list";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      songs: [],
    };
  },
  created() {
    this._getSongList();
  },
  computed: {
    title() {
      return this.disc.dissname;
    },
    bgImage() {
      return this.disc.imgurl;
    },
    ...mapGetters(["disc"]),
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push("/recommend");
        return;
      }
      // 接口不能用,假数据
      this.songs = [
        {
          id: "1570016",
          title: "火星人来过 (音浪合伙人 第二期)",
          singer_name: "薛之谦",
          pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M000001jPACQ2Js2zt.jpg",
          vid: "h0032lukua7",
          avatar:
            "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
        },
        {
          id: "1570015",
          title: "动物世界 (音浪合伙人 第二期)",
          singer_name: "薛之谦",
          pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M000000SiC4t0IUhVg.jpg",
          vid: "z0032a26blu",
          avatar:
            "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
        },
        {
          id: "1568958",
          title: "病态",
          singer_name: "薛之谦",
          pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M103003hegVS4POciX.jpg",
          vid: "r003250gf4o",
          avatar:
            "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
        },
        {
          id: "1568705",
          title: "我好像在哪见过你 (综艺大爆炸)",
          singer_name: "薛之谦",
          pic: "http://y.gtimg.cn/music/photo_new/T015R640x360M101004VrUQ62mlXob.jpg",
          vid: "g00325u7ntg",
          avatar:
            "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
        },
      ];
    },
  },
  components: {
    MusicList,
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>