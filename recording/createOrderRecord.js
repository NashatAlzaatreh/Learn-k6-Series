// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 2, duration: '20s' }

export default function main() {
    let auth = ''
  let response

  group('page_1 - https://nextjs-ecommerce-six.vercel.app/signin', function () {
    response = http.get('https://nextjs-ecommerce-six.vercel.app/signin', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
    sleep(0.5)

    response = http.get('https://nextjs-ecommerce-six.vercel.app//api/categories', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        authorization: 'undefined',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        accept: '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
    sleep(4.2)

    response = http.post(
      'https://nextjs-ecommerce-six.vercel.app//api/auth/login',
      '{"email":"nashat.alzaatra@yahoo.com","password":"nashat"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization: 'undefined',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://nextjs-ecommerce-six.vercel.app',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
        
      }
    )
    sleep(1)
  

    response = http.get('https://nextjs-ecommerce-six.vercel.app//api/order', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFlYWIzOWY4MTY1MDAwODlkNTlkMyIsImlhdCI6MTY1NDE2NzA1MSwiZXhwIjoxNjU0MTY3OTUxfQ.svuTqIxTN5HfwqMUtX4huBT_scfS27LjSBdMI6CbaMU',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        accept: '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
    sleep(13.1)
    auth = response.authorization
    console.log('111111111111111111111111');

    console.log(auth);

    response = http.get(
      'https://nextjs-ecommerce-six.vercel.app//api/product/600110e7f0013c0aac35ff17',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization: 'undefined',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
    sleep(8.8)

    response = http.get(
      'https://nextjs-ecommerce-six.vercel.app//api/product/600110e7f0013c0aac35ff17',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization: 'undefined',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
    sleep(0.6)

    response = http.post(
      'https://nextjs-ecommerce-six.vercel.app//api/order',
      '{"address":"aaaaa","mobile":"11111","cart":[{"_id":"600110e7f0013c0aac35ff17","title":"brow hair","images":[{"public_id":"nextjs_media/wydoyyamkk6xhc8qmecl","url":"https://res.cloudinary.com/devat-channel/image/upload/v1610682644/nextjs_media/wydoyyamkk6xhc8qmecl.jpg"}],"price":423,"inStock":3359,"sold":1090,"quantity":1}],"total":423}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFlYWIzOWY4MTY1MDAwODlkNTlkMyIsImlhdCI6MTY1NDE2NzA1MSwiZXhwIjoxNjU0MTY3OTUxfQ.svuTqIxTN5HfwqMUtX4huBT_scfS27LjSBdMI6CbaMU',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://nextjs-ecommerce-six.vercel.app',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
  })
}