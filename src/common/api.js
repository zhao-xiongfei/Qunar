import jsonp from './jsonp';
// 度假首页目的地
export function dj1() {
  const url = 'https://touch.dujia.qunar.com/golfz/destination/appHomeArrive?'
  const data = {
    version: 1,
    width: 190,
    height: 250,
    count: 14,
    uid: 'ezu0rVrcEYNrVROhItY1Ag==',
    userName: '',
    dep: '北京',
    depType: 100,
    // callback: 'jsonp_1524403024752_96271'
  }
  return jsonp(url, data);
}
// 度假首页轮播
export function dj2() {
  const url = 'https://a.qunar.com/vataplan?'
  const data = {
    framId: 'index_slider',
    vataposition: 'QNR_MmM=_CN',
    tag: 99,
    rows: 6,
    cur_page_num: 0,
    rep: 1,
    f: 's',
    tile: 15244118007104461888,
    city: '北京'
    // callback: 'jsonp_1524403024752_96271'
  }
  return jsonp(url, data);
}
// 度假首页分类游
export function dj3() {
  const url = 'https://touch.dujia.qunar.com/idx/config_v1.json?'
  return jsonp(url);
}

//度假详情页默认数据

export function dj4(page,name,query) {
  const url = 'https://touch.dujia.qunar.com/list?'
  const data = {
    modules: 'list,bookingInfo,activityDetail',
    dep: '北京',
    query: name,
    type: 'all',
    dappDealTrace: false,
    it: 'n_index_desti_recom',
    date: '',
    configDepNew: '',
    ddf: true,
    needNoResult: true,
    originalquery: query,
    lowPrice: 'other',
    limit: `${page},20`,
    includeAD: true,
    qsact: 'search',
  }
  return jsonp(url, data)
}

// 度假详情页面
export function dj5(id){
  const url = 'https://touch.dujia.qunar.com/item?'
  const data = {
    date: '',
    id: id,
    tuId: ''
  }
  return jsonp(url,data)
}

