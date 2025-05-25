// JSON (Javascript Object Nation)
    // Convert dari object js ke JSON
        const data = {
            ip: "180.244.134.85",
            country: "Indonesia",
            country_code: "ID",
            is_eu: false,
            city: "Bandung",
            continent: "Asia",
            latitude: -6.92222,
            longitude: 107.60694,
            time_zone: "Asia/Jakarta",
            postal_code: null,
            subdivision: "West Java",
            currency_code: "IDR",
            calling_code: "62",
            network: "180.244.128.0/20",
            asn: "AS7713",
            route: "180.244.128.0/20",
            netname: "TELKOMNET-AS-AP",
            provider_name: "Telekomunikasi Indonesia (PT)",
            domain: "telkom.co.id",
            type: "isp",
            rir: "APNIC",
            is_abuser: false,
            is_anonymous: false,
            is_bogon: false,
            is_hosting: false,
            is_icloud_relay: false,
            is_proxy: false,
            is_tor: false,
            is_vpn: false,
            address: "PT. TELKOM INDONESIA, Menara Multimedia Lt. 7, Jl. Kebonsirih No.12, JAKARTA",
            email: "abuse@telkom.co.id",
            contact_name: "PT Telkom Indonesia Hostmaster",
            phone: "+62-21-3860500"
        };

        const person1 = {
            nama: "Dimas",
            gender: "Male",
            Student: true,
            eyes: 2,
            tambah: function(a, b) {
                return a + b;
            }, 
        };


        const convert = JSON.stringify(data);
        console.log(convert);

        const convert5 = JSON.stringify(person1);
        console.log(convert5);


    
    // Convert dari JSON ke object js
        const data2 = `{
            "_id": "yX4cEGiJZ",
            "content": "Don't let the noise of others opinions drown out your own inner voice.",
            "author": "Steve Jobs",
            "authorSlug": "steve-jobs",
            "length": 68,
            "tags": [
                "inspirational",
                "life",
                "self"
            ],
            "dateAdded": "2019-07-27",
            "dateModified": "2023-04-14"
        }`

        const data3 = `{
            "results": [
                {
                "gender": "female",
                "name": {
                    "title": "Ms",
                    "first": "Marine",
                    "last": "Robin"
                },
                "location": {
                    "street": {
                    "number": 8525,
                    "name": "Avenue Goerges Clémenceau"
                    },
                    "city": "Amiens",
                    "state": "Haut-Rhin",
                    "country": "France",
                    "postcode": 83292,
                    "coordinates": {
                    "latitude": "-16.3426",
                    "longitude": "19.0626"
                    },
                    "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                    }
                },
                "email": "marine.robin@example.com",
                "login": {
                    "uuid": "bef3d105-d7b6-43c8-b635-4ea9d6e3efa4",
                    "username": "goldenfish932",
                    "password": "clemson",
                    "salt": "CRyoUH7A",
                    "md5": "dadeb658080e2541a1b53fcbeeb2aecd",
                    "sha1": "8620dce10aef21d31091097a82b75856b6a14b72",
                    "sha256": "d11c9e52755e921106dbde2654909104227426168ecddfe97ef3522c7c29c5d0"
                },
                "dob": {
                    "date": "1981-04-04T04:43:45.081Z",
                    "age": 44
                },
                "registered": {
                    "date": "2014-07-16T18:14:03.733Z",
                    "age": 10
                },
                "phone": "02-82-89-62-56",
                "cell": "06-38-13-72-48",
                "id": {
                    "name": "INSEE",
                    "value": "2810313422733 83"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/79.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
                },
                "nat": "FR"
                }
            ],
            "info": {
                "seed": "ab637687756ed582",
                "results": 1,
                "page": 1,
                "version": "1.4"
            }
        }`

        const siaranTv = `{
            "id": 3199449,
            "url": "https://www.tvmaze.com/episodes/3199449/vinnie-politan-investigates-2025-03-31-bryan-kohbergers-background",
            "name": "Bryan Kohberger's Background",
            "season": 2025,
            "number": 58,
            "type": "regular",
            "airdate": "2025-03-31",
            "airtime": "00:00",
            "airstamp": "2025-04-01T04:00:00+00:00",
            "runtime": null,
            "rating": {
                "average": null
            },
            "image": null,
            "summary": null,
            "show": {
                "id": 81923,
                "url": "https://www.tvmaze.com/shows/81923/vinnie-politan-investigates",
                "name": "Vinnie Politan Investigates",
                "type": "Reality",
                "language": "English",
                "genres": [],
                "status": "Running",
                "runtime": null,
                "averageRuntime": 60,
                "premiered": "2024-08-05",
                "ended": null,
                "officialSite": "https://www.courttv.com/trials/vinnie-politan-investigates/",
                "schedule": {
                    "time": "00:00",
                    "days": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 5,
                "network": {
                    "id": 2007,
                    "name": "Court TV",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "http://www.courttv.com/"
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 453690,
                    "imdb": null
                },
                "image": null,
                "summary": "<p>Every story, every trial, every case has at least two sides. In this weekday series, Court TV's Vinnie Politan looks at every angle of the cases making headlines. Dive into the latest true crime stories inside and outside of the courtroom in <b>Vinnie Politan Investigates</b>. Starting Monday, you can watch VPI every weeknight at 9/8c on Court TV and CourtTV.com. </p>",
                "updated": 1747202627,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/81923"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/3239963",
                        "name": "Where Are Karen Read's Courthouse Supporters"
                    }
                }
            },
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/3199449"
                },
                "show": {
                    "href": "https://api.tvmaze.com/shows/81923",
                    "name": "Vinnie Politan Investigates"
                }
            }
        }`

        const person = `{
            "nama": "Dimas",
            "gender": "Male",
            "Student": true
        }`;


        const convert2 = JSON.parse(data2);
        console.log(convert2);
        
        const convert3 = JSON.parse(data3);
        console.log(convert3);

        const convert4 = JSON.parse(person);
        console.log(convert4);
        console.log(convert4.nama);
        console.log(convert4.Student);

        const convert6 = JSON.parse(siaranTv);
        console.log(convert6);


