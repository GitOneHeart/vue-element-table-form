// 1、引入mockjs
const Mock = require("mockjs");

// 2、获取 mock.Random 对象
const random = Mock.Random;
console.log(random);

// 3、基本用法 Mock.mock(url, type, data) // 参数文档 https://github.com/nuysoft/Mock/wiki
Mock.mock("/user/list", "get", {
  code: 200,
  message: "成功",
  data: {
    result: {
      datals: [
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31356858",
          dealDate: 20230324,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 0,
          isCancel: "",
          ROW_NUMBER: 1,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113636",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31356860,
          dealTime: 183733,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31356851",
          dealDate: 20230324,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 0,
          isCancel: "",
          ROW_NUMBER: 2,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113635",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31356853,
          dealTime: 183512,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31356772",
          dealDate: 20230324,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 10,
          isCancel: "",
          ROW_NUMBER: 3,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113634",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31356774,
          dealTime: 181936,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31356615",
          dealDate: 20230324,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 6,
          isCancel: "",
          ROW_NUMBER: 4,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113633",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31356617,
          dealTime: 162722,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31356608",
          dealDate: 20230324,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 5,
          isCancel: "",
          ROW_NUMBER: 5,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113632",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31356610,
          dealTime: 162423,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31355907",
          dealDate: 20230323,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: 25,
          exchangePrice: 3,
          isCancel: "",
          ROW_NUMBER: 6,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113623",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31355909,
          dealTime: 141121,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
        {
          memo: "",
          instrument: "COMMFWD",
          productName: "商品远期",
          points: 0,
          customerDealId: 0,
          businessNo: "31355900",
          dealDate: 20230323,
          strategyId: "002",
          cpty: "JPMogan",
          exchangeOutdate: 0,
          res: "F",
          strategyName: "002",
          quantity: -25,
          exchangePrice: 0,
          isCancel: "",
          ROW_NUMBER: 7,
          underlying: "MAL",
          resmsg: "未链接到平盘接口，请联系管理员",
          COUNTNUM: 7,
          pair: "USD",
          rescode: "1111",
          exchangeId: "11113622",
          instrumentName: "商品远期",
          productCode: "PRD_COMFORWARD",
          instrumentDealId: 31355902,
          dealTime: 141041,
          echoTimes: 1,
          exchangeOuttime: 0,
        },
      ],
      pageCtrl: true,
      pageSize: 10,
      start: 1,
      total: 7,
    },
    messageId: "/tradeQuery.action",
  },
  success: true,
});
