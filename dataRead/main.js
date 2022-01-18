//C:\Gits\k6-learning\dataRead\test.json
import http from 'k6/http';
import { SharedArray } from "k6/data";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { sleep } from 'k6';

export const options = {
    vus: 2,
    duration: '2s',
};

export function setup() {
    const onlyonce = http.get(`https://example.com`);
    console.log("Only once status: " + onlyonce.status);
}

const csvRead = new SharedArray("credentials", function() {
    return papaparse.parse(open('./data.csv'), {header: true}).data; 
});

//read json
let payload = JSON.parse(open('./testdata_v1.json'));

export default function() {
    var datapcIds = csvRead[Math.floor(Math.random() * csvRead.length)]['pcIds'];
    var datapatientId = csvRead[Math.floor(Math.random() * csvRead.length)]['patientId'];

    console.log(datapcIds + '=======' + datapatientId);

    //read json
    console.log("My payload: " + payload);
    let user = payload;
    
    console.log(`${user.pcIds}`);
    console.log(`${user.patientId}`);
    user.pcIds = datapcIds;
    user.patientId = datapatientId;
    console.log(`${user.pcIds}`);
    console.log(`${user.patientId}`);
    console.log(`${user}`);

    //replace it with body payload
    let f = JSON.stringify(user);
    console.log(f);
    sleep(1);

    //Sending http request
    const res = http.post(`https://echo.hoppscotch.io`, f);
    console.log("HTTP Status:" + res.status);
    console.log("Sent Data:" + res.request.body);
}