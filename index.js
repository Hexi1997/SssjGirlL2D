//let width = document.documentElement.clientWidth
// let height = document.documentElement.clientHeight
//moc3模型的在线地址，使用jsdelivr加速github仓库访问
//可以自建gitHub仓库，将moc3 l2d提交到仓库（注意一个仓库最多只有50M）
//因为jsdelivr对超过50M的仓库不予加速
//jsdelivr的使用请自行百度

//全局模型
let v;

//角色所有
let charaIndex = 0;

//模型配置
const configArr = [
  {
    name: "无瑕_快餐厅",
    motions: [
      "Egirl09_yihuo",
      "Mgirl09_baogao",
      "Mgirl09_baoxiong",
      "Mgirl09_baoxiong2",
      "Mgirl09_baoxiong_a",
      "Mgirl09_baoxiong_c",
      "Mgirl09_dahaqian",
      "Mgirl09_dahaqian_c",
      "Mgirl09_dangao",
      "Mgirl09_dangao2",
      "Mgirl09_diantoushiyi",
      "Mgirl09_diantoushiyi_c",
      "Mgirl09_diantouweixiao_a",
      "Mgirl09_diantouweixiao_a2",
      "Mgirl09_dianxiongkou",
      "Mgirl09_dianxiongkou_a",
      "Mgirl09_dianxiongkou_c",
      "Mgirl09_fuqiezheng_c",
      "Mgirl09_haixiu",
      "Mgirl09_haixiu_a",
      "Mgirl09_haixiu_a2",
      "Mgirl09_haoqi",
      "Mgirl09_haoqi2",
      "Mgirl09_lahudiejie",
      "Mgirl09_lahudiejie_a",
      "Mgirl09_lahudiejie_c",
      "Mgirl09_landuokechi",
      "Mgirl09_landuokechi2",
      "Mgirl09_liaofasikao",
      "Mgirl09_liaofasikao_a",
      "Mgirl09_luanxieluanhua_c",
      "Mgirl09_motoujinzhang",
      "Mgirl09_motoujinzhang2",
      "Mgirl09_motouweixiao",
      "Mgirl09_motouwushi_c",
      "Mgirl09_motouyihuo",
      "Mgirl09_motouyihuo_a",
      "Mgirl09_ningshi",
      "Mgirl09_shengqi_c",
      "Mgirl09_shihao_a",
      "Mgirl09_shihao_a2",
      "Mgirl09_shiyi",
      "Mgirl09_stand",
      "Mgirl09_stand2",
      "Mgirl09_stand_a",
      "Mgirl09_stand_c",
      "Mgirl09_tanqi",
      "Mgirl09_tuoyeganga",
      "Mgirl09_tuoyehuangzhang_a",
      "Mgirl09_tuoyehuangzhang_a2",
      "Mgirl09_vowchaojia",
      "Mgirl09_vowerguang",
      "Mgirl09_vowkuanxin",
      "Mgirl09_vowshangxin",
      "Mgirl09_weixiao",
      "Mgirl09_wushi_c",
      "Mgirl09_wuyu",
      "Mgirl09_wuyu2",
      "Mgirl09_wuyu_c",
      "Mgirl09_xiangbeimotou",
      "Mgirl09_xianqunzi",
      "Mgirl09_xianqunzi2",
      "Mgirl09_xianqunzi_a",
      "Mgirl09_xianqunzi_c",
      "Mgirl09_xiebudongle",
      "Mgirl09_xiebudongle2",
      "Mgirl09_xiexiehuahua",
      "Mgirl09_xiexiexiaoxiao_a",
      "Mgirl09_xiezi10",
      "Mgirl09_xiezi7",
      "Mgirl09_xiuse",
      "Mgirl09_xiuse2",
      "Mgirl09_yingtao",
      "Mgirl09_yingtao2",
      "Mgirl09_yingye",
      "Mgirl09_yingye2",
      "Mgirl09_zeguai_a",
      "Mgirl09_zhengqiefu_a",
    ],
    repo: "gcj-lost-l2d-1",
  },
  {
    name: "朱诺_快餐厅",
    motions: [
      "Mgirl03_baonu_c",
      "Mgirl03_dahaqian_c",
      "Mgirl03_dazhaohu",
      "Mgirl03_dazhaohu_a",
      "Mgirl03_erxuanyi",
      "Mgirl03_ezuoju",
      "Mgirl03_gaoao_c",
      "Mgirl03_hepijiu_a",
      "Mgirl03_huiwen_a",
      "Mgirl03_huixie_a",
      "Mgirl03_jiezhang",
      "Mgirl03_jinzhihejiu",
      "Mgirl03_jiujie",
      "Mgirl03_laiyibei",
      "Mgirl03_motouweixiao",
      "Mgirl03_motouwushi_c",
      "Mgirl03_motouxiao_a",
      "Mgirl03_sajiao_a",
      "Mgirl03_shengqi",
      "Mgirl03_stand",
      "Mgirl03_stand_a",
      "Mgirl03_stand_c",
      "Mgirl03_tiaojiaobian_a",
      "Mgirl03_tiaokan",
      "Mgirl03_tiaoxiao_a",
      "Mgirl03_tuoyeheixian_c",
      "Mgirl03_tuoyexiangshou_a",
      "Mgirl03_tuoyeyiwen",
      "Mgirl03_weixiao",
      "Mgirl03_wuliao_c",
      "Mgirl03_wumei_a",
      "Mgirl03_wuyu_c",
      "Mgirl03_xiu",
      "Mgirl03_xunwen",
      "Mgirl03_yanfan",
      "Mgirl03_yanfan_c",
      "Mgirl03_youhuo",
      "Mgirl03_zhedang",
      "Mgirl03_zhoumei_a",
      "Mgirl03_zixin",
    ],
    repo: "gcj-lost-l2d-1",
  },
  {
    name: "沐恩_快餐厅",
    motions: [
      "Mgirl04_baoxiong",
      "Mgirl04_butong",
      "Mgirl04_dahaqian_c",
      "Mgirl04_dazhaohu_a",
      "Mgirl04_dianduzi",
      "Mgirl04_dianxianglian",
      "Mgirl04_diluo_c",
      "Mgirl04_fuyanjing",
      "Mgirl04_ganga_c",
      "Mgirl04_haixiu_a",
      "Mgirl04_heihua_c",
      "Mgirl04_hengge_a",
      "Mgirl04_huachi",
      "Mgirl04_huachi_a",
      "Mgirl04_huiwujiaobian_a",
      "Mgirl04_jiaqi",
      "Mgirl04_jingxi",
      "Mgirl04_kanshuhei",
      "Mgirl04_kending",
      "Mgirl04_motouhaixiu",
      "Mgirl04_motouweixiao",
      "Mgirl04_motouwushi_c",
      "Mgirl04_motouxiao_a",
      "Mgirl04_ningshi",
      "Mgirl04_qidai_a",
      "Mgirl04_qingpu",
      "Mgirl04_qingwenshouzhi",
      "Mgirl04_shengqi",
      "Mgirl04_shengqi_a",
      "Mgirl04_shihao_a",
      "Mgirl04_sikao",
      "Mgirl04_sisuo",
      "Mgirl04_stand",
      "Mgirl04_stand_a",
      "Mgirl04_stand_c",
      "Mgirl04_touteng_c",
      "Mgirl04_tuoyehaixiu",
      "Mgirl04_tuoyehaixiu_a",
      "Mgirl04_tuoyeheihua_c",
      "Mgirl04_tuoyeyihuo",
      "Mgirl04_weixiao",
      "Mgirl04_welcome",
      "Mgirl04_xianqunzi",
      "Mgirl04_xianqunzi_a",
      "Mgirl04_xinxi_a",
      "Mgirl04_zhamao_c",
      "Mgirl04_zhanshiCD_a",
    ],
    repo: "gcj-lost-l2d-3",
  },
  {
    name: "朱诺_共枕",
    motions: [
      "Mgirl03_chuchang",
      "Mgirl03_dazhaohuR",
      "Mgirl03_diandatui",
      "Mgirl03_diandatuiR",
      "Mgirl03_dianshouji",
      "Mgirl03_dianshoujiR",
      "Mgirl03_dianxiong",
      "Mgirl03_dianxiongR",
      "Mgirl03_ganshouningjing",
      "Mgirl03_mengzhonghejiu",
      "Mgirl03_motouhuiying",
      "Mgirl03_motouhuiyingR",
      "Mgirl03_motouweixiao",
      "Mgirl03_motouweixiaoR",
      "Mgirl03_ninan",
      "Mgirl03_shenlanyaoR",
      "Mgirl03_shuijiao",
      "Mgirl03_songli",
      "Mgirl03_songliR",
      "Mgirl03_stand",
      "Mgirl03_standR",
      "Mgirl03_tiaowangR",
      "Mgirl03_tuiyehaixiu",
      "Mgirl03_tuoyehaixiuR",
      "Mgirl03_xianchuangdan",
      "Mgirl03_xianchuangdanR",
      "Mgirl03_xianchuangdanR2",
      "Mgirl03_zhanshi1",
      "Mgirl03_zhanshi2",
      "Mgirl03_zhanshi3",
      "Mgirl03_zhuziR",
    ],
    repo: "gcj-lost-l2d-1",
  },
  {
    name: "朱诺_童话",
    motions: [
      "Mgirl03_baoxiong",
      "Mgirl03_chuixin",
      "Mgirl03_huiwen_a",
      "Mgirl03_huixie_a",
      "Mgirl03_koushui",
      "Mgirl03_motouxiu",
      "Mgirl03_pinguo",
      "Mgirl03_qiaoping",
      "Mgirl03_sajiao_a",
      "Mgirl03_stand",
      "Mgirl03_stand02",
      "Mgirl03_stand_a",
      "Mgirl03_stand_c",
      "Mgirl03_tuoyexiu",
      "Mgirl03_wanbianzi",
      "Mgirl03_wanpingguo",
      "Mgirl03_wumei_a",
      "Mgirl03_wuyu_c",
    ],
    repo: "gcj-lost-l2d-1",
  },
  {
    name: "沐恩_泳装",
    motions: [
      "Mgirl04_fuyanjing",
      "Mgirl04_jiaqi",
      "Mgirl04_jingxi",
      "Mgirl04_kending",
      "Mgirl04_motouweixiao",
      "Mgirl04_shengqi",
      "Mgirl04_stand",
      "Mgirl04_stand_a",
      "Mgirl04_stand_c",
      "Mgirl04_tianbingbang",
      "Mgirl04_touteng_c",
      "Mgirl04_tuoyeyihuo",
      "Mgirl04_wanshoushudao",
      "Mgirl04_weixiao",
      "Mgirl04_wunai",
      "Mgirl04_youheihua",
      "Mgirl04_zuoheihua",
    ],
    repo: "gcj-lost-l2d-2",
  },
  {
    name: "千姬_睡衣",
    motions: [
      "Mgirl06_cashi",
      "Mgirl06_dahaqian",
      "Mgirl06_daizhi",
      "Mgirl06_duishouzhi",
      "Mgirl06_ganxie",
      "Mgirl06_jingxi",
      "Mgirl06_motouhaixiu",
      "Mgirl06_motouhaixiu15",
      "Mgirl06_shengqi",
      "Mgirl06_shishenzhendong1",
      "Mgirl06_shishenzhendong2",
      "Mgirl06_shishenzhendong3",
      "Mgirl06_shunvxiao",
      "Mgirl06_sisuo",
      "Mgirl06_stand",
      "Mgirl06_stand_a",
      "Mgirl06_stand_c",
      "Mgirl06_tuoyedaizhi",
      "Mgirl06_wanmaozi",
      "Mgirl06_xiuse",
      "Mgirl06_yaotou",
    ],
    repo: "gcj-lost-l2d-2",
  },
  {
    name: "诗柔_污染者",
    motions: [
      "Mgirl14_bixin",
      "Mgirl14_bixin02",
      "Mgirl14_feiwen",
      "Mgirl14_feiwen02",
      "Mgirl14_kaixin",
      "Mgirl14_kaixin02",
      "Mgirl14_keai",
      "Mgirl14_keai02",
      "Mgirl14_luolei",
      "Mgirl14_luolei02",
      "Mgirl14_motouhaixiu",
      "Mgirl14_motouhaixiu02",
      "Mgirl14_paishou",
      "Mgirl14_paishou02",
      "Mgirl14_shengqi",
      "Mgirl14_shengqi02",
      "Mgirl14_stand",
      "Mgirl14_stand02",
      "Mgirl14_stand_a",
      "Mgirl14_stand_c",
      "Mgirl14_tanqi",
      "Mgirl14_tanqi02",
      "Mgirl14_tuoyeweixiao",
      "Mgirl14_tuoyeweixiao02",
      "Mgirl14_wangzhili",
      "Mgirl14_wangzhili02",
      "Mgirl14_weixiao",
      "Mgirl14_xiuse",
      "Mgirl14_xiuse02",
      "Mgirl14_yansu",
      "Mgirl14_yiwen",
      "Mgirl14_yiwen02",
      "Mgirl14_zhongerbing",
      "Mgirl14_zhuangku",
      "Mgirl14_zhuangku02",
    ],
    repo: "gcj-lost-l2d-2",
  },
  {
    name: "唯_结晶",
    motions: [
      "Mgirl16_deng",
      "Mgirl16_duibi",
      "Mgirl16_feiwen",
      "Mgirl16_ganga",
      "Mgirl16_jizhong",
      "Mgirl16_liliang",
      "Mgirl16_manzu",
      "Mgirl16_motoubiyan",
      "Mgirl16_stand",
      "Mgirl16_tiaoxiao",
      "Mgirl16_tuoyehaixiu",
      "Mgirl16_tushe",
      "Mgirl16_wannonghudie",
      "Mgirl16_wannongqiuqiu",
      "Mgirl16_wawajujue",
      "Mgirl16_zhayan",
      "Mgirl16_zhiyi",
    ],
    repo: "gcj-lost-l2d-2",
  },
  {
    name: "洛可可_泳装",
    motions: [
      "Mgirl01_dazhaohu",
      "Mgirl01_dazhaohu_a",
      "Mgirl01_deyi_a",
      "Mgirl01_duishouzhi_a",
      "Mgirl01_ganga_c",
      "Mgirl01_helengyin",
      "Mgirl01_jingkong",
      "Mgirl01_jingxi_a",
      "Mgirl01_Ldaihualuo",
      "Mgirl01_motouxiao_a",
      "Mgirl01_Rdaihualuo",
      "Mgirl01_sajiao_a",
      "Mgirl01_shuai",
      "Mgirl01_stand",
      "Mgirl01_tiaopi_a",
      "Mgirl01_tuoyehaixiu_a",
      "Mgirl01_xiunu_a",
    ],
    repo: "gcj-lost-l2d-3",
  },
  {
    name: "沐恩_旗袍",
    motions: [
      "Mgirl04_baoxiong",
      "Mgirl04_dianduzi",
      "Mgirl04_dianyoushou",
      "Mgirl04_dianzuoshou",
      "Mgirl04_haixiu_a",
      "Mgirl04_huachi",
      "Mgirl04_jinsheng",
      "Mgirl04_kiss",
      "Mgirl04_motouhaixiu",
      "Mgirl04_qidai_a",
      "Mgirl04_shihao_a",
      "Mgirl04_stand",
      "Mgirl04_touteng_c",
      "Mgirl04_tuoyehaixiu",
      "Mgirl04_xianqunzi",
      "Mgirl04_xinxi_a",
    ],
    repo: "gcj-lost-l2d-3",
  },
  {
    name: "沐恩_群青",
    motions: [
      "Mgirl04_baoxiong",
      "Mgirl04_dahaqian_c",
      "Mgirl04_dazhaohu_a",
      "Mgirl04_diluo_c",
      "Mgirl04_fuyanjing",
      "Mgirl04_ganga_c",
      "Mgirl04_haixiu_a",
      "Mgirl04_heihua_c",
      "Mgirl04_hengge_a",
      "Mgirl04_huachi",
      "Mgirl04_huachi_a",
      "Mgirl04_huiwujiaobian_a",
      "Mgirl04_jiaqi",
      "Mgirl04_jingxi",
      "Mgirl04_kanpuzi",
      "Mgirl04_kanshuhei",
      "Mgirl04_kending",
      "Mgirl04_motouhaixiu",
      "Mgirl04_motouweixiao",
      "Mgirl04_motouwushi_c",
      "Mgirl04_motouxiao_a",
      "Mgirl04_pinwei",
      "Mgirl04_qidai_a",
      "Mgirl04_qingpu",
      "Mgirl04_qingwenshouzhi",
      "Mgirl04_shengqi",
      "Mgirl04_shengqi_a",
      "Mgirl04_shihao_a",
      "Mgirl04_sikao",
      "Mgirl04_stand",
      "Mgirl04_stand02",
      "Mgirl04_stand_a",
      "Mgirl04_stand_c",
      "Mgirl04_touteng_c",
      "Mgirl04_tuoyehaixiu",
      "Mgirl04_tuoyehaixiu_a",
      "Mgirl04_tuoyeheihua_c",
      "Mgirl04_tuoyeyihuo",
      "Mgirl04_weixiao",
      "Mgirl04_wenshou",
      "Mgirl04_xianqunzi",
      "Mgirl04_xianqunzi_a",
      "Mgirl04_xinxi_a",
      "Mgirl04_yaotou",
      "Mgirl04_youtiqi",
      "Mgirl04_zhamao_c",
      "Mgirl04_zhanshiCD_a",
      "Mgirl04_zuotiqi",
    ],
    repo: "gcj-lost-l2d-3",
  },
  {
    name: "艾琳_泳装",
    motions: [
      "Mgirl07_baishou2",
      "Mgirl07_chibingqiling",
      "Mgirl07_diantou",
      "Mgirl07_ganga_c",
      "Mgirl07_haixiu",
      "Mgirl07_jiashengqi",
      "Mgirl07_jingya",
      "Mgirl07_lakudai",
      "Mgirl07_motouweixiao",
      "Mgirl07_nu",
      "Mgirl07_roulian",
      "Mgirl07_shuzhan",
      "Mgirl07_stand",
      "Mgirl07_tuoyehaixiu_a",
      "Mgirl07_yihuo",
    ],
    repo: "gcj-lost-l2d-4",
  },
  {
    name: "格兰妮_污染者",
    motions: [
      "Mgirl08_dakeshui_c",
      "Mgirl08_dapenti_c",
      "Mgirl08_daqi",
      "Mgirl08_dazhaohu",
      "Mgirl08_dazhaohu_a",
      "Mgirl08_dazhaohu_a02",
      "Mgirl08_fuhei",
      "Mgirl08_fuhei02",
      "Mgirl08_ganga_c",
      "Mgirl08_haixiu_a",
      "Mgirl08_heilian",
      "Mgirl08_heilian02",
      "Mgirl08_huaxiaolian_a",
      "Mgirl08_jingxi_a",
      "Mgirl08_jingya",
      "Mgirl08_jingya02",
      "Mgirl08_juyizhen",
      "Mgirl08_juyizhen_a",
      "Mgirl08_kending",
      "Mgirl08_kending02",
      "Mgirl08_kuangqi",
      "Mgirl08_ladingdai",
      "Mgirl08_ladingdai_a",
      "Mgirl08_motouweixiao",
      "Mgirl08_motouweixiao02",
      "Mgirl08_motouwushi_c",
      "Mgirl08_motouxiao_a",
      "Mgirl08_normal",
      "Mgirl08_qiaoda1",
      "Mgirl08_qiaoda102",
      "Mgirl08_qiaoda2",
      "Mgirl08_qiaoda202",
      "Mgirl08_qidai_a",
      "Mgirl08_shengqi",
      "Mgirl08_shengqi02",
      "Mgirl08_shengqi_a",
      "Mgirl08_shengqi_c",
      "Mgirl08_stand",
      "Mgirl08_stand02",
      "Mgirl08_stand_a",
      "Mgirl08_stand_c",
      "Mgirl08_touyun_c",
      "Mgirl08_tuoyeganga_c",
      "Mgirl08_tuoyehaixiu_a",
      "Mgirl08_tuoyeyihuo",
      "Mgirl08_tuoyeyihuo02",
      "Mgirl08_weixiao",
      "Mgirl08_wenrouzhufu",
      "Mgirl08_wenshouli_a",
      "Mgirl08_xiangshou_a",
      "Mgirl08_xiuxiuqieqie",
      "Mgirl08_xiuxiuqieqie02",
      "Mgirl08_yihuo",
      "Mgirl08_yihuo02",
      "Mgirl08_yihuo2",
      "Mgirl08_yihuo202",
      "Mgirl08_yumendamaoyi_c",
      "Mgirl08_zhimaoyidapenti_a",
    ],
    repo: "gcj-lost-l2d-4",
  },
  {
    name: "卡萝_结晶",
    motions: [
      "Mgirl13_bianxing",
      "Mgirl13_cabiti",
      "Mgirl13_chailiwu",
      "Mgirl13_chajue",
      "Mgirl13_chaokaixin",
      "Mgirl13_diantou",
      "Mgirl13_digu",
      "Mgirl13_ditoukan",
      "Mgirl13_haoyun",
      "Mgirl13_hengheng",
      "Mgirl13_heshi",
      "Mgirl13_kaixin",
      "Mgirl13_kaixin_cartoon",
      "Mgirl13_keai",
      "Mgirl13_motoubiyan",
      "Mgirl13_motouhaixiu",
      "Mgirl13_nuanhuo",
      "Mgirl13_qidai",
      "Mgirl13_qiuqiufeiwu",
      "Mgirl13_shengqi",
      "Mgirl13_shiwang",
      "Mgirl13_stand",
      "Mgirl13_stand02",
      "Mgirl13_tuoyeganga",
      "Mgirl13_tuoyeyihuo",
      "Mgirl13_weixiao",
      "Mgirl13_wink",
      "Mgirl13_wuyu",
      "Mgirl13_xiangkan",
      "Mgirl13_yansu",
      "Mgirl13_yaohuangnaodai",
      "Mgirl13_yihuo",
      "Mgirl13_yunxuan",
      "Mgirl13_zhennu",
      "Mgirl13_zixin",
    ],
    repo: "gcj-lost-l2d-4",
  },
  {
    name: "丽达_泳装",
    motions: [
      "Egirl11_jingxiu",
      "Egirl11_sikao",
      "Egirl11_xiunu",
      "Mgirl11_bishi_c",
      "Mgirl11_chayao",
      "Mgirl11_chayao_a",
      "Mgirl11_chuipaopaotang",
      "Mgirl11_chuipaopaotang_a",
      "Mgirl11_dahaqian",
      "Mgirl11_dahaqian_c",
      "Mgirl11_daomei",
      "Mgirl11_duqi",
      "Mgirl11_duqi_a",
      "Mgirl11_fuqiezheng_c",
      "Mgirl11_ganga2",
      "Mgirl11_ganga2_a",
      "Mgirl11_ganga3",
      "Mgirl11_ganga3_a",
      "Mgirl11_gangayou",
      "Mgirl11_gangazuo",
      "Mgirl11_ganga_c",
      "Mgirl11_hahadaxiao",
      "Mgirl11_haixiu",
      "Mgirl11_haixiu_a",
      "Mgirl11_jingxi",
      "Mgirl11_jinzhang",
      "Mgirl11_liaofa",
      "Mgirl11_motouhaixiu",
      "Mgirl11_motouweixiao",
      "Mgirl11_motouweixiao_a",
      "Mgirl11_motouwushi_c",
      "Mgirl11_motouyihuo",
      "Mgirl11_motouyihuo_a",
      "Mgirl11_shengqi",
      "Mgirl11_shengqi_a",
      "Mgirl11_shengqi_c",
      "Mgirl11_stand",
      "Mgirl11_stand_a",
      "Mgirl11_stand_c",
      "Mgirl11_tuoyeganga_c",
      "Mgirl11_tuoyehuangzhang",
      "Mgirl11_weixiao",
      "Mgirl11_woquan",
      "Mgirl11_woquan_a",
      "Mgirl11_wuliao_c",
      "Mgirl11_wunai",
      "Mgirl11_wunai_a",
      "Mgirl11_wushi_c",
      "Mgirl11_xiangbeimotou",
      "Mgirl11_xiangbeimotou_a",
      "Mgirl11_xiuyouhuijuan",
      "Mgirl11_xiuyouhuijuan_a",
      "Mgirl11_yanre",
      "Mgirl11_zenmela1",
      "Mgirl11_zenmela2",
      "Mgirl11_zhayan_a",
      "Mgirl11_zhengqiefu_a",
    ],
    repo: "gcj-lost-l2d-4",
  },
  {
    name: "艾琳_品枫",
    motions: [
      "Mgirl07_bunengchi",
      "Mgirl07_chuchang",
      "Mgirl07_dazhaohu",
      "Mgirl07_dianduzi",
      "Mgirl07_diankongbai",
      "Mgirl07_dianlingshi",
      "Mgirl07_dianxiong",
      "Mgirl07_dianyoushou",
      "Mgirl07_dianzuoshou",
      "Mgirl07_duanqilingshi",
      "Mgirl07_hecha",
      "Mgirl07_motouhuiying",
      "Mgirl07_motouweixiao",
      "Mgirl07_songli",
      "Mgirl07_stand",
      "Mgirl07_tiaowang",
      "Mgirl07_xianqunzi",
      "Mgirl07_xiuxi",
      "Mgirl07_zhanshi1",
      "Mgirl07_zhanshi2",
      "Mgirl07_zhanshi3",
      "Mgirl07_zhanshi4",
      "Mgirl07_zhanshi5",
      "Mgirl07_zhaohu",
      "Mgirl07_zuijiao",
    ],
    repo: "gcj-lost-l2d-5",
  },
  {
    name: "格兰妮_童话",
    motions: [
      "Mgirl08_dazhaohu_a",
      "Mgirl08_duishouzhi",
      "Mgirl08_gongwu",
      "Mgirl08_jingya",
      "Mgirl08_kending",
      "Mgirl08_motouweixiao",
      "Mgirl08_shengqi",
      "Mgirl08_shuijingxie",
      "Mgirl08_stand",
      "Mgirl08_stand02",
      "Mgirl08_stand_a",
      "Mgirl08_stand_c",
      "Mgirl08_tuoyeyihuo",
      "Mgirl08_weixiao",
      "Mgirl08_wuye",
      "Mgirl08_xianqunzi",
      "Mgirl08_xiuxiuqieqie",
      "Mgirl08_yihuo",
    ],
    repo: "gcj-lost-l2d-5",
  },
  {
    name: "奈乐_泳装",
    motions: [
      "Mgirl02_dapenti",
      "Mgirl02_ditou1",
      "Mgirl02_ditou2",
      "Mgirl02_jingya",
      "Mgirl02_jujue_c",
      "Mgirl02_motouweixiao",
      "Mgirl02_shuangqiang",
      "Mgirl02_stand",
      "Mgirl02_tanqi_c",
      "Mgirl02_tidao",
      "Mgirl02_tuoyehuangzhang",
      "Mgirl02_waitoushiyi",
      "Mgirl02_yihuo",
      "Mgirl02_yu",
      "Mgirl02_zuzhou",
    ],
    repo: "gcj-lost-l2d-5",
  },
  {
    name: "苏小真_泳装",
    motions: [
      "Mgirl05_changge1",
      "Mgirl05_dandu1",
      "Mgirl05_dazhaohu_a",
      "Mgirl05_ganga_c",
      "Mgirl05_haixiu",
      "Mgirl05_kaixin",
      "Mgirl05_motouweixiao",
      "Mgirl05_shengqi",
      "Mgirl05_stand",
      "Mgirl05_stand_a",
      "Mgirl05_stand_c",
      "Mgirl05_tuoyeyiwen",
      "Mgirl05_weixiao",
      "Mgirl05_wuyu_c",
      "Mgirl05_xunwen",
      "Mgirl05_yangyangxiao",
      "Mgirl05_yingyuan_a",
    ],
    repo: "gcj-lost-l2d-5",
  },
  {
    name: "无瑕_泳装",
    motions: [
      "Mgirl09_0",
      "Mgirl09_10",
      "Mgirl09_5",
      "Mgirl09_buhaoyisi",
      "Mgirl09_chuifeng",
      "Mgirl09_dahaqian",
      "Mgirl09_dahaqian_c",
      "Mgirl09_dianduzi",
      "Mgirl09_diantoushiyi",
      "Mgirl09_diantoushiyi_c",
      "Mgirl09_diantouweixiao_a",
      "Mgirl09_dianxiongkou",
      "Mgirl09_dianxiongkou_a",
      "Mgirl09_dianxiongkou_c",
      "Mgirl09_fanyue",
      "Mgirl09_fuqiezheng_c",
      "Mgirl09_haixiu",
      "Mgirl09_haixiu_a",
      "Mgirl09_liaofasikao",
      "Mgirl09_liaofasikao_a",
      "Mgirl09_luanxieluanhua_c",
      "Mgirl09_motouweixiao",
      "Mgirl09_motouwushi_c",
      "Mgirl09_motouyihuo",
      "Mgirl09_motouyihuo_a",
      "Mgirl09_shengqi",
      "Mgirl09_shengqi_c",
      "Mgirl09_shihao_a",
      "Mgirl09_stand",
      "Mgirl09_stand_a",
      "Mgirl09_stand_c",
      "Mgirl09_tuoyeganga",
      "Mgirl09_tuoyehuangzhang_a",
      "Mgirl09_weixiao",
      "Mgirl09_wushi_c",
      "Mgirl09_wuyu",
      "Mgirl09_wuyu_c",
      "Mgirl09_xiangbeimotou",
      "Mgirl09_xianqunzi",
      "Mgirl09_xianqunzi_a",
      "Mgirl09_xianqunzi_c",
      "Mgirl09_xiexiehuahua",
      "Mgirl09_xiexiexiaoxiao_a",
      "Mgirl09_xiezhi3",
      "Mgirl09_zeguai_a",
      "Mgirl09_zhengqiefu_a",
    ],
    repo: "gcj-lost-l2d-5",
  },
  {
    name: "阿尼娅_少女星辰",
    motions: [
      "Mgirl15_baishou",
      "Mgirl15_biaixin",
      "Mgirl15_buganzhixin",
      "Mgirl15_bukaixing",
      "Mgirl15_chuoqi",
      "Mgirl15_duishouzhi",
      "Mgirl15_haixiu1",
      "Mgirl15_haixiu2",
      "Mgirl15_huahua",
      "Mgirl15_jiehuiqu",
      "Mgirl15_jingxia",
      "Mgirl15_juanL",
      "Mgirl15_juanR",
      "Mgirl15_jugong",
      "Mgirl15_kaixin",
      "Mgirl15_lianxi",
      "Mgirl15_motoubiyan",
      "Mgirl15_shengqi",
      "Mgirl15_stand",
      "Mgirl15_stand02",
      "Mgirl15_stand_a",
      "Mgirl15_stand_c",
      "Mgirl15_taozui",
      "Mgirl15_tuoyeganga",
      "Mgirl15_weiqu",
      "Mgirl15_weixiao",
      "Mgirl15_yansu",
    ],
    repo: "gcj-lost-l2d-6",
  },
  {
    name: "丽达_万圣节",
    motions: [
      "Mgirl11_dianzan",
      "Mgirl11_ganga_c",
      "Mgirl11_haixiu",
      "Mgirl11_heyinliao",
      "Mgirl11_huodongjingu",
      "Mgirl11_kaixin",
      "Mgirl11_motouweixiao",
      "Mgirl11_motouyihuo",
      "Mgirl11_shengqi",
      "Mgirl11_stand",
      "Mgirl11_tiaoxi",
      "Mgirl11_tuoyeyihuo",
      "Mgirl11_wanshengjie",
      "Mgirl11_wanshengjie2",
      "Mgirl11_weixiao",
      "Mgirl11_wuliaokan",
      "Mgirl11_wunai",
    ],
    repo: "gcj-lost-l2d-6",
  },
  {
    name: "沐恩_净化者",
    motions: [
      "Mgirl04_dahaqian_c",
      "Mgirl04_dazhaohu_a",
      "Mgirl04_diluo_c",
      "Mgirl04_fuyanjing",
      "Mgirl04_ganga_c",
      "Mgirl04_haixiu_a",
      "Mgirl04_haowan",
      "Mgirl04_heihua_c",
      "Mgirl04_hengge_a",
      "Mgirl04_huachi_a",
      "Mgirl04_huaxia",
      "Mgirl04_huiwujiaobian_a",
      "Mgirl04_jiaqi",
      "Mgirl04_jingxi",
      "Mgirl04_kanshuhei",
      "Mgirl04_kending",
      "Mgirl04_kunrao",
      "Mgirl04_motouweixiao",
      "Mgirl04_motouwushi_c",
      "Mgirl04_motouxiao_a",
      "Mgirl04_pengxin",
      "Mgirl04_qidai_a",
      "Mgirl04_qingpu",
      "Mgirl04_qingwenshouzhi",
      "Mgirl04_shengqi",
      "Mgirl04_shengqi_a",
      "Mgirl04_shihao_a",
      "Mgirl04_sikao",
      "Mgirl04_stand",
      "Mgirl04_stand_a",
      "Mgirl04_stand_c",
      "Mgirl04_touteng_c",
      "Mgirl04_tuoyehaixiu_a",
      "Mgirl04_tuoyeheihua_c",
      "Mgirl04_tuoyeyihuo",
      "Mgirl04_weixiao",
      "Mgirl04_wunai",
      "Mgirl04_xianqunzi",
      "Mgirl04_xianqunzi_a",
      "Mgirl04_xinxi_a",
      "Mgirl04_zhamao_c",
      "Mgirl04_zhanshiCD_a",
    ],
    repo: "gcj-lost-l2d-6",
  },
  {
    name: "无瑕_万圣节",
    motions: [
      "Mgirl09_buhaoyisi",
      "Mgirl09_diantoushiyi",
      "Mgirl09_dianxiongkou_c",
      "Mgirl09_haixiu",
      "Mgirl09_huanghuang",
      "Mgirl09_huangpingzi",
      "Mgirl09_jueze",
      "Mgirl09_mopipi",
      "Mgirl09_motouweixiao",
      "Mgirl09_motouyihuo",
      "Mgirl09_stand",
      "Mgirl09_tuoyehuangzhang",
      "Mgirl09_weixiao",
      "Mgirl09_wuyu",
      "Mgirl09_xiexie",
      "Mgirl09_xiezi10",
      "Mgirl09_yaoqing",
    ],
    repo: "gcj-lost-l2d-6",
  },
  // {
  //   name: "沐恩_圣诞",
  //   motions: [
  //     "Mgirl04_fuyanjing",
  //     "Mgirl04_fuyanjing2",
  //     "Mgirl04_heihua_c",
  //     "Mgirl04_heihua_c2",
  //     "Mgirl04_jiaqi",
  //     "Mgirl04_jiaqi2",
  //     "Mgirl04_jingxi",
  //     "Mgirl04_jingxi2",
  //     "Mgirl04_kaojin",
  //     "Mgirl04_kaojin2",
  //     "Mgirl04_kending",
  //     "Mgirl04_kending2",
  //     "Mgirl04_mofa",
  //     "Mgirl04_mofa2",
  //     "Mgirl04_motouweixiao",
  //     "Mgirl04_motouweixiao2",
  //     "Mgirl04_shengqi",
  //     "Mgirl04_shengqi2",
  //     "Mgirl04_stand",
  //     "Mgirl04_stand02",
  //     "Mgirl04_taoyanyou",
  //     "Mgirl04_taoyanyou2",
  //     "Mgirl04_taoyanzuo",
  //     "Mgirl04_taoyanzuo2",
  //     "Mgirl04_touteng_c",
  //     "Mgirl04_touteng_c2",
  //     "Mgirl04_tuoyeyihuo",
  //     "Mgirl04_tuoyeyihuo2",
  //     "Mgirl04_weixiao",
  //     "Mgirl04_weixiao2",
  //     "Mgirl04_yancong",
  //     "Mgirl04_yancong2",
  //     "Mgirl04_zhamao_c",
  //     "Mgirl04_zhamao_c2",
  //   ],
  //   repo: "gcj-lost-l2d-7",
  // },
];

function motionChange() {
  var nSel = document.getElementById("motion-select");
  var motionIndex = nSel.selectedIndex; // 选中索引
  //播放指定L2d
  v.startAnimation(configArr[charaIndex].motions[motionIndex], "base");
}

function setMotions(index) {
  //移除原来的Motions
  document.getElementById("motion-select").innerHTML = "";
  //使用文档碎片添加新的motions
  //使用文档碎片避免更新太多次
  var temp = document.createDocumentFragment();
  for (let i in configArr) {
    const op = document.createElement("option");
    if (i == 0) {
      op.selected = true;
    }
    op.value = configArr[index].motions[i];
    op.innerText = configArr[index].motions[i];
    //附加在文档碎片中
    temp.appendChild(op);
  }
  //一次性添加到document中
  document.getElementById("motion-select").appendChild(temp);
}

/**
 * 填充下拉框内容
 * @param {number} rand 当前选中的索引
 */
function addOptionsToSelect(rand) {
  //使用文档碎片避免更新太多次
  var temp = document.createDocumentFragment();
  for (let index in configArr) {
    const op = document.createElement("option");
    if (rand == index) {
      op.selected = true;
      setMotions(index);
    }
    op.value = configArr[index].name;
    op.innerText = configArr[index].name;
    //附加在文档碎片中
    temp.appendChild(op);
  }
  //一次性添加到document中
  document.getElementById("char-select").appendChild(temp);
}

function charChange() {
  var nSel = document.getElementById("char-select");
  var index = nSel.selectedIndex; // 选中索引
  charaIndex = index;
  //设置motions菜单内容
  setMotions(index);

  //更新L2d
  const { name, motions, repo, width, height } = configArr[index];
  var config = {
    width: 500,
    height: 800,
    right: "0px",
    bottom: "-250px",
    basePath: `https://cdn.jsdelivr.net/gh/Hexi1997/${repo}@master/assets`,
    role: name,
    background: false,
    opacity: 1,
    mobile: false,
    motions,
  };
  v = new Viewer(config);
}

document.addEventListener("DOMContentLoaded", () => {
  //初始化时随机一个l2d
  let rand = Math.floor(Math.random() * configArr.length);
  const { name, motions, repo, width, height } = configArr[rand];
  charaIndex = rand;
  addOptionsToSelect(rand);

  var config = {
    width: 500,
    height: 800,
    right: "0px",
    bottom: "-250px",
    basePath: `https://cdn.jsdelivr.net/gh/Hexi1997/${repo}@master/assets`,
    role: name,
    background: false,
    opacity: 1,
    mobile: false,
    motions,
  };
  v = new Viewer(config);
});
