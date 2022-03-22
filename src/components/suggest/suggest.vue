<template>
  <div class="suggest">
    <ul class="suggest-list" v-show="!result">
      <li class="suggest-item">
        <div class="icon">
          <i class="icon-music"></i>
        </div>
        <div class="name">
          <p class="text" v-html="result"></p>
        </div>
      </li>
    </ul>
    <div v-show="result" class="no-result-wrapper">
      <no-result :title="result"></no-result>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { search } from "api/search";
import { ERR_OK } from "api/config";
import NoResult from "base/no-result/no-result";

export default {
  props: {
    showSinger: {
      type: Boolean,
      default: true,
    },
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      page: 1,
      result: "",
    };
  },
  methods: {
    search() {
      search(this.query, this.page, this.showSinger).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.message);
          this.result = res.message;
        }
      });
    },
  },
  watch: {
    query(newQuery) {
      this.search(newQuery);
    },
  },
  components: {
    NoResult
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.suggest
  height: 100%;
  overflow: hidden;

  .suggest-list
    padding: 0 30px;

    .suggest-item
      display: flex;
      align-items: center;
      padding-bottom: 20px;

    .icon
      flex: 0 0 30px;
      width: 30px;

      [class^='icon-']
        font-size: 14px;
        color: $color-text-d;

    .name
      flex: 1;
      font-size: $font-size-medium;
      color: $color-text-d;
      overflow: hidden;

      .text
        no-wrap();

  .no-result-wrapper
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
</style>