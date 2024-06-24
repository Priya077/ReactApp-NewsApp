import React, { Component } from 'react'
import {NewsItem } from './NewsItem'
export class News extends Component {
    articles= [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Fourth Tory official reportedly investigated for election bets - BBC.com",
            "description": "A fourth Tory is being investigated for allegedly placing dozens of bets on the general election date.",
            "url": "https://www.bbc.com/news/articles/c511nv3pjd6o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/edb3/live/32606d10-30ec-11ef-90be-b75b34b0bbb2.jpg",
            "publishedAt": "2024-06-23T06:16:44Z",
            "content": "By Helen Catt, Political correspondent  Adam Durbin, BBC News\r\nA fourth Conservative is reportedly being looked into by the Gambling Commission over bets allegedly placed on the date of the general e� [+4522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "There's A 72% Chance That An Asteroid May Hit Earth On This Exact Day - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com/news",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2024-06-23T05:29:57Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Cyber attacks stall business at car dealerships nationwide - NBC News",
            "description": "Thousands of car dealers are reeling from cyber attacks that targeted software used for conducting business. The incidents are slowing sales and raising new ...",
            "url": "https://www.youtube.com/watch?v=WhOH5emalG0",
            "urlToImage": "https://i.ytimg.com/vi/WhOH5emalG0/maxresdefault.jpg",
            "publishedAt": "2024-06-23T03:00:21Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "WFLA"
            },
            "author": "Sara Filips",
            "title": "Human case of dengue fever from mosquito bite confirmed in Hillsborough County - WFLA",
            "description": "The Florida Department of Health in Hillsborough County has confirmed one case of locally acquired dengue fever caused by a mosquito bite.",
            "url": "https://www.wfla.com/news/hillsborough-county/human-case-of-dengue-fever-from-mosquito-bite-confirmed-in-hillsborough-county/",
            "urlToImage": "https://www.wfla.com/wp-content/uploads/sites/71/2023/08/malariamosquito_082123ap.jpg?w=1280",
            "publishedAt": "2024-06-23T02:07:44Z",
            "content": "HILLSBOROUGH COUNTY, Fla. (WFLA) The Florida Department of Health in Hillsborough County has confirmed one case of locally acquired dengue fever caused by a mosquito bite. \r\nOfficials are conducting � [+361 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jon Hoefling, Erick Smith, Jesse Yomtov, Nicole Poell",
            "title": "College World Series live updates: Texas A&M has breakout third inning, leads Tennessee - USA TODAY",
            "description": "SEC rivals Tennessee and Texas A&M clash in Game 1 of the College World Series championship series. Follow along with updates from Saturday's game.",
            "url": "https://www.usatoday.com/story/sports/college/baseball/2024/06/22/college-world-series-tennessee-texas-am-live-updates-highlights/74169934007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/23/USAT/74184397007-slide.jpg?crop=2907,1635,x409,y165&width=2907&height=1635&format=pjpg&auto=webp",
            "publishedAt": "2024-06-23T02:03:45Z",
            "content": "After more than 100 games in the NCAA baseball tournament and more than a week at the College World Series in Nebraska, there are two teams left standing. And it's no surprise it's two teams from the� [+13793 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Trump backs Louisiana law requiring Ten Commandments in schools in address to influential evangelicals - CBS News",
            "description": "Louisiana this week passed a controversial law requiring the Ten Commandments be displayed in every public school classroom in the state.",
            "url": "https://www.cbsnews.com/news/trump-supports-louisiana-ten-commandments-law-in-schools-evangelicals/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/22/5171f2d0-4b4b-4455-98cf-fd31c24596f9/thumbnail/1200x630/576971f907cd67432966f5a5811d2418/gettyimages-2158205597.jpg?v=cb1f2643a8816828741cfb3a3fb2d931",
            "publishedAt": "2024-06-23T01:09:45Z",
            "content": "Former President Donald Trump told a group of evangelicals they \"cannot afford to sit on the sidelines\" of the 2024 election, imploring them at one point to \"go and vote, Christians, please!\"\r\n Trump� [+7963 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Pauline Lockwood, Maija-Liisa Ehlinger",
            "title": "�They saved their whole lives for this�: American woman�s heartbreak as parents die on Hajj - CNN",
            "description": "What was supposed to be the trip of a lifetime turned tragic this week when Saida Wurie learned her parents were among the hundreds of pilgrims who have died amid extreme temperatures in Saudi Arabia.",
            "url": "https://www.cnn.com/2024/06/22/middleeast/american-deaths-hajj-heat-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/hajj1.jpeg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-23T00:51:00Z",
            "content": "Saida Wurie said it was her parents lifelong dream to participate in Hajj, the religious pilgrimage that brings Muslims from around the world to Saudi Arabia each year.\r\nTheyd spent $23,000 on an all� [+5156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC10 Boston"
            },
            "author": "Kaitlin McKinley Becker, Sydney Welch",
            "title": "Increased tornado threat Sunday in New England - NBC Boston",
            "description": "For parts of central New England, there is a 10% tornado threat within 25 miles of a point -- the highest tornado risk for the region in six years, according to�",
            "url": "https://www.nbcboston.com/news/local/increased-tornado-threat-sunday-in-new-england/3407080/",
            "urlToImage": "https://media.nbcboston.com/2024/06/Tornado-Threat-DAY-2.png?resize=1200%2C675&quality=85&strip=all",
            "publishedAt": "2024-06-23T00:39:13Z",
            "content": "Widespread showers and storms rolled through New England Saturday, with severe thunderstorm warnings in several states, and a tornado warning in Connecticut. Still, there is potential for more signif� [+4089 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ian Casselberry",
            "title": "Liberty off to best start in franchise history as Breanna Stewart scores 33 points to lead win over Sparks - Yahoo Sports",
            "description": "Breanna Stewart scored 33 points as the New York Liberty improved their record to a franchise-best 14�3.",
            "url": "https://sports.yahoo.com/liberty-off-to-best-start-in-franchise-history-as-breanna-stewart-scores-33-points-to-lead-win-over-sparks-002703256.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/PQKwkPlWHY..9L2oqQAhbg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/6b39f760-30f0-11ef-bfff-1447213d9b66",
            "publishedAt": "2024-06-23T00:27:00Z",
            "content": "Breanna Stewart scored 33 points to lead the New York Liberty to a 9888 win over the Los Angeles Sparks on Saturday. With the victory, the Liberty improved their record to 143, the best start after 1� [+2355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WHYY"
            },
            "author": "Emily Neil, Carmen Russell-Sluchansky",
            "title": "Pennsylvania election 2024: Trump addresses supporters at Temple�s Liacouras Center - WHYY",
            "description": "Trump was met with protests ahead of the speech. Inside the Liacouras Center, thousands of supporters cheered him on.",
            "url": "http://whyy.org/articles/election-2024-trump-rally-temple-university-protests/",
            "urlToImage": "https://whyy.org/wp-content/uploads/2024/06/trump-rally-temple-e-neil-2024-06-22-trump-12.jpg",
            "publishedAt": "2024-06-23T00:19:40Z",
            "content": "The former president painted a bleak picture of international politics.\r\nOur border is overrun, inflation is raging. Crime is out of control. Europe is in chaos. The Middle East is exploding. Iran is� [+1059 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Jeff Kassouf",
            "title": "USA's Tyler Adams, Josh Sargent available for Copa Am�rica opener - ESPN",
            "description": "USMNT head coach Gregg Berhalter says all 26 players are available for Sunday's Copa Am�rica opener against Bol�via amid concerns over the fitness levels of midfielder Tyler Adams and forward Josh Sargent.",
            "url": "https://www.espn.com/soccer/story/_/id/40410208/copa-america-2024-usa-tyler-adams-josh-sargent-available-bolivia",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0622%2Fr1349249_1296x729_16%2D9.jpg",
            "publishedAt": "2024-06-23T00:12:00Z",
            "content": "Jun 22, 2024, 08:12 PM ET\r\nARLINGTON, Texas -- United States men's national team head coach Gregg Berhalter said all 26 players are available for Sunday's Copa Am�rica opener against Bol�via amid con� [+2851 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Winnie Hsu",
            "title": "Japanese Stocks: Global Investors Turn Cautious - Bloomberg",
            "description": "Japan�s record share market rally earlier this year is looking like a distant memory as foreign investors sell off stocks in a sluggish economy.",
            "url": "https://www.bloomberg.com/news/articles/2024-06-23/global-investors-turn-cautious-on-once-favorite-japanese-stocks",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibdSCrgMNP5Q/v0/1200x800.jpg",
            "publishedAt": "2024-06-23T00:01:00Z",
            "content": "Japans record share market rally earlier this year is looking like a distant memory as foreign investors sell off stocks in a sluggish economy.\r\nCitigroup Inc. and abrdn Plc are among banks that have� [+270 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Mike Barnes",
            "title": "Jamie Kellner, Architect of the Fox Broadcast Network and The WB, Dies at 77 - Hollywood Reporter",
            "description": "He also spent a couple of years overseeing TBS, TNT and CNN at Turner and co-founded the station ownership group ACME Communications.",
            "url": "http://www.hollywoodreporter.com/tv/tv-news/jamie-kellner-dead-executive-fox-the-wb-1235930259/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/Jamie-Kellner-obit-temp-getty-H-2024.jpg?w=1024",
            "publishedAt": "2024-06-23T00:00:00Z",
            "content": "Jamie Kellner, the charismatic and crafty executive who expanded the broadcast television landscape by helping hatch the Fox and WB networks in 1987 and 1995, respectively, had died. He was 77.\r\nKell� [+8723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KELOLAND.com"
            },
            "author": "KELOLAND.com",
            "title": "Governor Kristi Noem signs emergency declaration for storms and flooding - KELOLAND.com",
            "description": "On Saturday, Governor Kristi Noem signed an Executive Order declaring an emergency for the recent storms and associated flooding.",
            "url": "https://www.keloland.com/news/local-news/governor-kristi-noem-signs-emergency-declaration-for-storms-and-flooding/",
            "urlToImage": "https://www.keloland.com/wp-content/uploads/sites/103/2024/05/66355687f379e9.17892565.jpeg?w=1280",
            "publishedAt": "2024-06-22T23:43:49Z",
            "content": "PIERRE, S.D. (KELO) � On Saturday, Governor Kristi Noem signed an Executive Order declaring an emergency for the recent storms and associated flooding.\r\nState agencies have already been responding to� [+528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Dana Kennedy",
            "title": "Boeing Starliner astronauts stuck at International Space Station as engineers on Earth race against time to fix multiple problems - New York Post ",
            "description": "The return trip to Earth for two NASA astronauts who rode to orbit on the trouble-plagued company�s Starliner has been delayed for a third time as of Saturday.",
            "url": "https://nypost.com/2024/06/22/us-news/boeing-starliner-astronauts-stuck-at-international-space-station-as-engineers-on-earth-race-against-time-to-fix-multiple-problems/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/84278035.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-06-22T23:16:00Z",
            "content": "Boeing, we have a problem. \r\nThe return trip to Earth for two NASA astronauts who rode to orbit on the trouble-plagued company�s Starliner has been delayed for a third time as of Saturday � with Butc� [+3052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Des Moines Register"
            },
            "author": "Des Moines Register",
            "title": "Disaster declared as flooding forces evacuations in northwest Iowa - Des Moines Register",
            "description": "Rivers across northwest Iowa experienced record flooding on Saturday after days of heavy rain",
            "url": "https://www.desmoinesregister.com/story/weather/2024/06/22/disaster-declared-as-flooding-forces-evacuations-in-northwest-iowa/74179790007/",
            "urlToImage": "https://www.desmoinesregister.com/gcdn/authoring/authoring-images/2024/06/21/PSIF/74176072007-image-16.jpg?crop=2775,1561,x0,y260&width=2775&height=1561&format=pjpg&auto=webp",
            "publishedAt": "2024-06-22T22:42:23Z",
            "content": "Days of heavy rainfall have pushed rivers to record levels across northwest Iowa, shutting down utilities in several cities and forcing evacuations.\r\nGov. Kim Reynolds issued a disaster declaration S� [+4460 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "Alexander K. Lee",
            "title": "Robert Whittaker vs. Ikram Aliskerov full fight video highlights - MMA Fighting",
            "description": "Get Robert Whittaker vs. Ikram Aliskerov full fight video highlights for the UFC Saudi Arabia main event Saturday.",
            "url": "https://www.mmafighting.com/2024/6/22/24183860/robert-whittaker-vs-ikram-aliskerov-full-fight-video-highlights",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/n61ybis-MYvZ4DZdBmkH02_k3GA=/0x0:5742x3006/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25502078/2158780045.jpg",
            "publishedAt": "2024-06-22T22:07:22Z",
            "content": "Robert Whittaker added another one to the highlight reel on Saturday.\r\nThe Reaper closed out the UFCs first visit to Saudi Arabia in style, needing less than two minutes to put away short-notice oppo� [+743 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Israeli army strapped wounded Palestinian to jeep - BBC.com",
            "description": "The Israeli military says the man was a suspect in a raid in the West Bank, but its forces violated protocol.",
            "url": "https://www.bbc.com/news/articles/cjqq5n8911do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8749/live/166ccbc0-30d9-11ef-84ef-8d2c99b83c76.jpg",
            "publishedAt": "2024-06-22T21:24:48Z",
            "content": "The Israeli military has said its forces violated protocol by strapping a wounded Palestinian man to the front of their vehicle during a raid in the West Bank city of Jenin. \r\nThe Israel Defense Forc� [+1599 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading:false
        }
    }

    render() {
        return (
            <div className="container my-4">
                <h2 className="mx-3">NewsReader - Top Headlines</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {this.state.articles.map((element) =>{
                    return <div className="col" key={element.url }>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url } />
                        </div>
                } )}
             </div>   
            </div>
        )
    }
}