// Creator: k6 Browser Recorder 0.6.2
import { SharedArray } from "k6/data";
import { sleep, group, check } from 'k6'
import http from 'k6/http'
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { Trend } from 'k6/metrics';
import { Counter } from 'k6/metrics';



import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "testingworldreport5.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

const csvRead = new SharedArray("credentials", function () {
  return papaparse.parse(open('./usersTestingWorld.csv'), { header: true }).data; // returning array
});

const myTrend = new Trend('waiting_time');
const myCounter = new Counter('my_counter');


// console.log("csvRead",csvRead);
// [{"username":"nnnsssttt","password":"nnnsssttt"},{"username":"ahmadSamer","password":"12345678"},{"username":"yuhjtrdschwd","password":"yuhjtrdschwd"},{"username":"kjhiuyrfvmk","password":"kjhiuyrfvmk"},{"username":"qazrfvoijhgf","password":"qazrfvoijhgf"},{"username":""}]

// export const options = {
//     vus: 1,
//     duration: '5s',
//     iterations: 1,
// batch: 4,
// discardResponseBodies: true,
// maxRedirects: 10,
// noCookiesReset: true,
// setupTimeout: '30s',
// systemTags: ['status', 'method', 'url'],
// summaryTimeUnit: 'ms',
// summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
// tags: {
//   name: 'value',
// },
// };

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
  stages: [
    { duration: '30s', target: 30, tags: { name: '0 -> 30',}  },
    { duration: '10s', target: 30, tags: { name: '30 -> 30',} },
    { duration: '30s', target: 50, tags: { name: '30 -> 50',} },
    { duration: '10s', target: 50, tags: { name: '50 -> 50',} },
    { duration: '10s', target: 30, tags: { name: '50 -> 30',} },
    { duration: '10s', target: 30, tags: { name: '30 -> 30',} },
    { duration: '10s', target: 0,  tags: { name: '30 -> 0',}  },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2500'], // 95% of requests must complete below 1.5s
  },
};



export default function main() {
  let response
  let PHPSESSID
  myCounter.add(1);
  const vars = {}

  let randomUser = Math.floor(Math.random() * (csvRead.length - 1));
  var username = csvRead[randomUser]['username'];
  var password = csvRead[randomUser]['password'];

  console.log(
    "user: ", username, " , pass: ", password, " , randomUser: ", randomUser
  );

  group('page_1 - open_login_page', function () {
    response = http.get('https://performancetestingpractice.com/login.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    // console.log("open_login_page response: ",response);

    vars['_hidCheckSubmit'] = response
      .html()
      .find('input[name=_hidCheckSubmit]')
      .first()
      .attr('value')

    vars['_txtSession_Id'] = response
      .html()
      .find('input[name=_txtSession_Id]')
      .first()
      .attr('value')

    vars['csrf_token'] = response.html().find('input[name=csrf_token]').first().attr('value')

    PHPSESSID = response.cookies.PHPSESSID[0].value;

    // console.log("PHPSESSID: ", PHPSESSID);

    sleep(1)

    // console.log(" vars: ",vars);
    // {"_hidCheckSubmit":"1","_txtSession_Id":"tw-6403797598191824896wor","csrf_token":"4NFheqHG6uGjyLk9Wit+gURgyLSkVLyXIYhuOmH78ME="}



    response = http.post(
      'https://performancetestingpractice.com/login.php',
      {
        _hidCheckSubmit: `${vars['_hidCheckSubmit']}`,
        _txtSession_Id: `${vars['_txtSession_Id']}`,
        // _txtUserName: 'ahmadSamer',
        _txtUserName: username,
        // _txtPassword: '12345678',
        _txtPassword: password,
        csrf_token: `${vars['csrf_token']}`,
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://performancetestingpractice.com',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
      , {
        cookies: {
          PHPSESSID: PHPSESSID,
        },
      }
      )

      // console.log("1111111", response.request.cookies.PHPSESSID[0].value);
    myTrend.add(response.timings.waiting);
    sleep(0.5)

    check(response, {
      'is status 200': r => r.status === 200,
      'is not status 404': r => r.status !== 404,
      "has cookie 'PHPSESSID'": (r) => r.request.cookies.PHPSESSID[0].value != null,
      // 'has data': r => (JSON.parse(r.body)).length > 0,
    });

  })

  group('page_2 - add_customer_page', function () {
    response = http.get('https://performancetestingpractice.com/add_customer.php',
      {
        _hidCheckSubmit: `${vars['_hidCheckSubmit']}`,
        _txtSession_Id: `${vars['_txtSession_Id']}`,
        // _txtUserName: 'ahmadSamer',
        _txtUserName: username,
        // _txtPassword: '12345678',
        _txtPassword: password,
        csrf_token: `${vars['csrf_token']}`,
      },
      {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
    sleep(1)

    check(response, {
      'is status 200': r => r.status === 200,
      'is not status 404': r => r.status !== 404,
      // 'has data': r => (JSON.parse(r.body)).length > 0,
    });
  })

  group('page_3 - dashboard', function () {
    response = http.get('https://performancetestingpractice.com/dashboard.php',
      {
        _hidCheckSubmit: `${vars['_hidCheckSubmit']}`,
        _txtSession_Id: `${vars['_txtSession_Id']}`,
        // _txtUserName: 'ahmadSamer',
        _txtUserName: username,
        // _txtPassword: '12345678',
        _txtPassword: password,
        csrf_token: `${vars['csrf_token']}`,
      },
      {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
    sleep(1)

    check(response, {
      'is status 200': r => r.status === 200,
      'is not status 404': r => r.status !== 404,
      // 'has data': r => (JSON.parse(r.body)).length > 0,
    });
  })

  group('page_4 - logout', function () {
    response = http.get('https://performancetestingpractice.com/logout.php',
      {
        _hidCheckSubmit: `${vars['_hidCheckSubmit']}`,
        _txtSession_Id: `${vars['_txtSession_Id']}`,
        // _txtUserName: 'ahmadSamer',
        _txtUserName: username,
        // _txtPassword: '12345678',
        _txtPassword: password,
        csrf_token: `${vars['csrf_token']}`,
      },
      {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
    check(response, {
      'is status 200': r => r.status === 200,
      'is not status 404': r => r.status !== 404,
      // 'has data': r => (JSON.parse(r.body)).length > 0,
    });
  })
}