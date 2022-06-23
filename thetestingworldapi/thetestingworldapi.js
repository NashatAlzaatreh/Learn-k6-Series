import {
    sleep,
    check,
} from "k6";
import { SharedArray } from "k6/data";

import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";

import http from "k6/http";

export let options = {
    vus: 2,
    duration: '5s',
    iterations: 2,
};

const csvRead = new SharedArray("data", function () {
    return papaparse.parse(open('./data.csv'), { header: true }).data; // returning array
});

export default function () {
    //get
    const baseURL = 'http://www.thetestingworldapi.com/api/studentsDetails';
    for (let id = 2663157; id <= 2663206; id++) {
        let res = http.get(`${baseURL}/${id}`);
        check(res, {
            'is status 200': r => r.status === 200,
        })
        // sleep(1);
    }



    // post
    for (let id = 0; id <= 7; id++) {
        let first_name = csvRead[id]['first_name'];
        console.log("first_name", first_name);
        let middle_name = csvRead[id]['middle_name'];
        let payload = {
            "first_name": first_name,
            "middle_name": middle_name,
            "last_name": "za",
            "date_of_birth": "date"
        }
        let res = http.post(baseURL, JSON.stringify(payload), {
        headers: {
            "Content-Type": "application/json"
        }});
    console.log("POST Method: The name is " + res.json().first_name);


        // sleep(1);
    }
}