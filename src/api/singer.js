import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg'

  const data = Object.assign({}, commonParams, {
    cv: 4747474,
    ct: 24,
    g_tk_new_20200303: 5381,
    uin: 0,
    needNewCode: 1,
    platform: 'yqq.json',
    order: 'time',
    begin: 0,
    num: 80,
    singermid: singerId,
    g_tk: 5381,
    format: 'json',
    cid: 205360581
  })

  return jsonp(url, data, options)
}
