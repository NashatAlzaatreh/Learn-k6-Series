// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = { vus: 1, duration: '11s' }

export default function main() {
  let formData, response

  group('page_1 - https://vduat.testvisitdubai.com/en/login', function () {
    response = http.get('https://vduat.testvisitdubai.com/en/login', {
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
    sleep(23.4)

    formData = new FormData()
    formData.boundary = '----WebKitFormBoundaryXMeUSym5maxHdH3e'
    formData.append('client_id', 'web')
    formData.append('client_secret', 'mklUu1XctveEYBn3WHVZHQ9J0xTszcWc')
    formData.append(
      'g-recaptcha-response',
      '03AGdBq279h9RH_NZUvWVRYbvU3RoRG4vyB00z7T3S4V5YlrGKndxPXCP4T2UqT2plyvqyYf7ziee3XDBjYjbC0K9--aLPDZXmJXE-kxEumM8Msm5g9S2oVRpWbp6ZwVnLAcB9C4CNraCIxNIFWA0TIRpqXMDuY8eyAA38MN8HaN-oPwM4HGrj4F3SbADtG-M_duRs9fd1wMRE50IzNf7lx2xbai-rMq9Y4lF8DYKoD04ukw6T-gOJGgeo1x62x0OLyhoXevTl-PEO2JZVIFZyT6WT65mYF5v8HUeR1NNLGevV0R85C4I1-DOj5pasyVeRLCHQBSK0b4YDE_sEN-NHZBk71Q17f8eik44UWbCG_3Qwj7bUEfcDsO15tEYp53eSmY64HKbaejQXAymQjUTC9EnbjIDwi3-q9f7-M3mw2RIJ4pLuY9ATbHkCz3roD_Gng_ZzbqJlkSYY2HoUxs0ZFuQs2VkYMn3fxQ'
    )
    formData.append('grant_type', 'password')
    formData.append('password', 'Nn@12345678')
    formData.append('scope', 'api.read    IdentityServerApi   offline_access')
    formData.append('username', 'nashat.alzaatra@yahoo.com')

    response = http.post('https://fiduat.testvisitdubai.com/connect/token', formData.body(), {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryXMeUSym5maxHdH3e',
        accept: '*/*',
        origin: 'https://vduat.testvisitdubai.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
    sleep(1.4)
  })

  group('page_2 - https://vduat.testvisitdubai.com/en/account/dashboard', function () {
    response = http.get('https://vduat.testvisitdubai.com/en/account/dashboard', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
    sleep(1.6)

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{user{topPicks{itemId}}}","variables":{}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{ userProfile { firstName, lastName } }"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{ userProfile { email } }"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{ userProfile { firstName, lastName } }"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{ user {\\n                                tickets(refresh:false, lang: \\"en\\") {\\n                                    id, title, endDate, startDate, fallbackImage,\\n                                    type { id, title },\\n                                    orders { transNo, performanceDate }\\n                                }\\n                            }}"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
    sleep(21.4)

    response = http.get(
      'https://vduat.testvisitdubai.com/sitecore/api/layout/render/jss?item=%2Faccount%2Fedit-profile&sc_lang=en&sc_apikey=%7B71FEFFB9-6CAA-4009-9F5C-EEAA63F3A94C%7D',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
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
    sleep(2.2)

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{ userProfile { email } }"}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
    sleep(1)

    response = http.post(
      'https://apiuat.testvisitdubai.com/graphql/user',
      '{"query":"{userProfile{ firstName, lastName, email, prefferedLanguage, country, phone, profileImageId, backgroundImageId, marketingCommunicationCheck} }","variables":{}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
    sleep(5.6)

    response = http.post(
      'https://fiduat.testvisitdubai.com/connect/revocation',
      {
        client_id: 'web',
        client_secret: 'mklUu1XctveEYBn3WHVZHQ9J0xTszcWc',
        token: '5c92a2a7b4791a7418b5587fc015e365b853465a61a546c1f61550031859f450',
        token_type_hint: 'refresh_token',
      },
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVBMTZFQkQxMkY1OEJCNTM2Nzk0OEFGMEY1RjBEQTU3RTkxQUE0M0EiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI2aGJyMFM5WXUxTm5sSXJ3OWZEYVYta2FwRG8ifQ.eyJuYmYiOjE2NTU3OTE0ODksImV4cCI6MTY1NTc5NTA4OSwiaXNzIjoiaHR0cHM6Ly9maWR1YXQudGVzdHZpc2l0ZHViYWkuY29tIiwiYXVkIjpbImh0dHBzOi8vZmlkdWF0LnRlc3R2aXNpdGR1YmFpLmNvbS9yZXNvdXJjZXMiLCJyZXNvdXJjZWFwaSIsIklkZW50aXR5U2VydmVyQXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6IjZhYzk2OTllLTI5MGYtNDZlNi05MTBkLTVjNWViMWQzNzEwOSIsImF1dGhfdGltZSI6MTY1NTc5MTQ4OSwiaWRwIjoibG9jYWwiLCJmaXJzdE5hbWUiOiJOYXNoYXQiLCJsYXN0TmFtZSI6IkFsemFhdHJlaCIsImVtYWlsIjoibmFzaGF0LmFsemFhdHJhQHlhaG9vLmNvbSIsInJvbGUiOiJhcHBfdXNlciIsImxhbmciOiJlbiIsIm5hbWUiOiJOYXNoYXQgQWx6YWF0cmVoIiwibmF0aW9uYWxpdHkiOiJlbiIsImNvdW50cnkiOiJKTyIsInNjb3BlIjpbImFwaS5yZWFkIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.q0XF-yieCXhrzTphzzJJ7K_On5IOxMVARYrcnJKJIphqudPfpi8DAsfWUxupG8n4KIwGyq0I0qWuGju6fgq7c6uh8B9xEGemvmIbUYC6Mje0lQtb0gx6waAHw53VSjEm3aQJfOySGJjKQS72xHknxJc1-uYzqN2-nyzAtP1zlz_Deo1St2QotOUMIZQmEinKbPszIOFSiWWT4oWYFDy7lXx6QpNfrU4MkO8OPn1x0APTv1w6ScQKXhfkTWYVBMkEmMohqthc-juE5VMdLv8KM28V_zYkW1K5GSIWzoT67K3e2n9_zoYinoSU7Ut98LkNRiAtP1w9TAKCL9f9ayZuXw',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://vduat.testvisitdubai.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
        },
      }
    )
  })

  group('page_3 - https://vduat.testvisitdubai.com/', function () {
    response = http.get('https://vduat.testvisitdubai.com/', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,ar-JO;q=0.8,ar-AE;q=0.7,ar;q=0.6,en-US;q=0.5',
      },
    })
  })
}