import React, { Component } from "react"
import "../styles/main.scss"
import SEO from "../components/seo"
import boatLeft from "../assets/images/boat-left.jpg"
import hotelAnnaAndBel from "../assets/images/hotelAnnaAndBel.jpeg"
import hotelHilton from "../assets/images/hotelHilton.jpeg"
import ship from "../assets/images/ship.png"
import chartHouse from "../assets/images/charthouse.png"
import spiritOfPhiladelphia from "../assets/images/spiritofphiladelphia.jpeg"
import starboard from "../assets/images/starboard.jpeg"
import sushi from "../assets/images/sushi.png"
import ipd from "../assets/images/ipd.png"

class Birthday extends Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
    this.party = React.createRef()
    this.rsvp = React.createRef()
    this.itinerary = React.createRef()
    this.faq = React.createRef()
    this.accommodations = React.createRef()
    this.todo = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    return (
      <main className="birthday" ref={this.top}>
        <SEO title="40th Birthday" />
        <div className="blue-background top">
          <header className="birthday-header container">
            <nav className="birthday-nav">
              <div className="birthday-nav--btn-list">
                <button
                  className="birthday-nav--btn"
                  onClick={() => {
                    this.scroll(this.party)
                  }}
                >
                  Party Info
                </button>

                <button
                  className="birthday-nav--btn"
                  onClick={() => {
                    this.scroll(this.itinerary)
                  }}
                >
                  Itinerary
                </button>
                <button
                  className="birthday-nav--btn"
                  onClick={() => {
                    this.scroll(this.accommodations)
                  }}
                >
                  Accommodations
                </button>
                <button
                  className="birthday-nav--btn"
                  onClick={() => {
                    this.scroll(this.faq)
                  }}
                >
                  FAQ
                </button>
                <a
                  className="birthday-nav--btn"
                  href="https://forms.gle/Nq6HNkQaNfXttxQ3A"
                  target="_blank"
                >
                  RSVP
                </a>
              </div>
            </nav>
            <h1>
              Over the Hill<span className="hyphen"> - </span>On a Boat!
              <span className="sub-heading">
                Scott &amp; Elizabeth's Joint 40th Birthday Bash
              </span>
            </h1>
            <hr />
            <p>Cruising, Dancing, Dinner, Drinks, After-Party &amp; more!</p>
            <p>
              <button
                className="button-link"
                onClick={() => {
                  this.scroll(this.itinerary)
                }}
              >
                Check out the itinerary below
              </button>{" "}
              <br />
              for the play-by-play of the day!
              <br />
              <br />
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.itinerary)
                }}
              >
                <i className="fa fa-arrow-down" />
                <span className="sr-only">Go to itinerary</span>
              </button>
            </p>
          </header>
        </div>

        <div className="birthday-hero" ref={this.party}>
          <img
            className="birthday-hero--left"
            src={boatLeft}
            alt="Boat Party!"
          />
          <div className="birthday-hero--right">
            <ul>
              <li className="large">Saturday, October 12</li>
              <li className="large">5:30 PM - 2 AM</li>
              <li className="small">Penn's Landing + Fishtown</li>
            </ul>
            <p className="small">Please RSVP by Sept-4</p>
            <a
              href="https://forms.gle/Nq6HNkQaNfXttxQ3A"
              className="rsvp-button"
              target="_blank"
            >
              RSVP
            </a>
          </div>
        </div>

        <div className="blue-background bottom">
          <section
            className="birthday-itinerary container"
            ref={this.itinerary}
          >
            <header>
              <h2>Itinerary</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>

            <table>
              <thead>
                <tr>
                  <td>Time</td>
                  <td>Event/Activity</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5:30 - 6:30&nbsp;PM</td>
                  <td>
                    <h3>Cocktail Hour &amp; Announcements</h3>
                    <p>
                      <a href="https://g.co/kgs/y1hJW5W" target="_blank">
                        Chart House
                      </a>
                      <br />
                      555 S Columbus Blvd | PHL, PA 19147
                    </p>
                    <ul className="indent">
                      <li>
                        🌅 Meet at the Chart House in Penn's Landing at 5:30 PM
                        for a sunset cocktail hour on the waterfront 🍸
                      </li>
                      <li>
                        🚙 PARKING: see{" "}
                        <button
                          className="birthday-nav--btn button-link"
                          onClick={() => {
                            this.scroll(this.faq)
                          }}
                        >
                          the FAQ section
                        </button>{" "}
                        for more info
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>6:30 - 7&nbsp;PM</td>
                  <td>
                    <h3>All Aboard!</h3>
                    <p>
                      <a
                        href="https://maps.app.goo.gl/u7tu4GcaXvM3iUjx6"
                        target="_blank"
                      >
                        City Cruises Philadelphia
                      </a>
                      <br />
                      401 S Columbus Blvd | PHL, PA 19106
                    </p>
                    <ul className="indent">
                      <li>
                        🛥 Head to the City Cruises Philadelphia dock before 7 PM
                        to board the Spirit of Philadelphia 💦
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>7 - 9:30&nbsp;PM</td>
                  <td>
                    <h3>Dinner Cruise</h3>
                    <div className="with-image">
                      <div>
                        <p>
                          <strong>Spirit of Philadelphia</strong>
                        </p>
                        <ul className="indent">
                          <li>📸 Sign the guestbook &amp; grab a drink 🍾</li>
                          <li>🛥 Get cruising!</li>
                          <li>🍽 Multi-course Dinner</li>
                          <li>💃 Dancing</li>
                          <li>🎳 Deck games</li>
                          <li>🍻 Beverages</li>
                          <li>🎂 Birthday cake</li>
                        </ul>
                      </div>
                      <img src={ship} alt="Cruise ship" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9:45&nbsp;PM</td>
                  <td>
                    <h3>Shuttle Bus</h3>
                    <p>
                      <strong>
                        Philadelphia Trolley Works ('76 Carriage Company)
                      </strong>
                    </p>
                    <ul className="indent">
                      <li>
                        🚌 Take the shuttle to Fishtown if you're staying there
                        or wish to continue hanging out at the after party 🐟
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>10&nbsp;PM - 2&nbsp;AM</td>
                  <td>
                    <h3>After Party</h3>
                    <p>
                      <a href="https://g.co/kgs/79nGwPX" target="_blank">
                        Starboard Side Tavern
                      </a>
                      <br />
                      2500 E Norris St | PHL, PA 19125
                    </p>
                    <ul className="indent">
                      <li>🎉 🍕 Dancing, pizza, good times 🕺 </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="last" colSpan="2">
                    👋 Goodbye, all! - Hope you had a great day with Scott &amp;
                    Liz
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <hr />

          <section className="birthday-images">
            <div className="container">
              <div className="birthday-image-container">
                <img src={chartHouse} alt="Chart House" />
                <img src={spiritOfPhiladelphia} alt="Spirit of Philadelphia" />
                <img src={starboard} alt="Starboard" />
              </div>
            </div>
          </section>
          <hr />

          <section
            className="birthday-accommodations"
            ref={this.accommodations}
          >
            <div className="container">
              <div className="pink-panel">
                <header>
                  <h2>Accommodations</h2>
                  <button
                    className="button-icon"
                    onClick={() => {
                      this.scroll(this.top)
                    }}
                  >
                    <i className="fa fa-arrow-up" />
                    <span className="sr-only">Back to top</span>
                  </button>
                </header>
                <p>
                  We recommend staying wherever you are most comfortable - there
                  are a plethora of options in the city for a place to stay,
                  from AirBnBs to hotels big and small.
                </p>
                <p>
                  For quick reference, following hotels are walkable to the
                  event locations but there are cheaper options not listed:
                  <br />
                  <br />
                </p>
                <div>
                  <p className="title">
                    🛥 Would you rather stay near the BOAT party?
                  </p>
                  <ul>
                    <li>
                      <div className="list-item-with-img">
                        <div>
                          <a
                            href="https://www.hilton.com/en/hotels/phlpnhh-hilton-philadelphia-at-penns-landing/"
                            target="_blank"
                            title="Hilton at Penn's Landing"
                          >
                            Hilton Philadelpia at Penn's Landing
                          </a>
                          <p>201 S Columbus Blvd, Old City</p>

                          <p>
                            The Hilton is a waterfront hotel right in Penn's
                            Landing and adjacent to Spruce Street Harbor Park -
                            the boat dock is a 6 minute walk south through the
                            park.
                          </p>
                        </div>
                        <img src={hotelHilton} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <a
                          href="https://www.marriott.com/en-us/hotels/phlmo-philadelphia-marriott-old-city/overview/"
                          target="_blank"
                          title="Marriott Old City"
                        >
                          Philadelphia Marriott Old City
                        </a>
                        <p>One Dock Street, Old City</p>
                        <p>
                          The Marriot is located in Old City and is a short 11
                          minute walk from the dock.
                          <br />
                          <br />
                          <br />
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="title">
                    🐟 Would you rather stay near the AFTER party?
                  </p>
                  <ul>
                    <li>
                      <div className="list-item-with-img">
                        <div>
                          <a
                            href="https://annaandbel.com/"
                            target="_blank"
                            title="Hotel Anna &amp; Bel"
                          >
                            Hotel Anna &amp; Bel
                          </a>
                          <p>1401 E Susquehanna Ave, Fishtown</p>
                          <p>
                            Hotel Anna &amp; Bel is a ✨ BRAND NEW ✨ 50-room
                            full-service boutique hotel (very swanky) located in
                            the heart of Fishtown - the after-party at Starboard
                            Side Tavern is on the same block.
                          </p>
                        </div>
                        <img src={hotelAnnaAndBel} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="birthday-quote">
            <p className="center">
              "Always go to other people's funerals, otherwise they won't come
              to yours." <br />- Yogi Berra
              <br />
              <br />
              💛
            </p>
          </section>

          <hr />

          <section className="birthday-faq container" ref={this.faq}>
            <header>
              <h2>Frequently Asked Questions</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>
            <ul>
              <li>
                <p>
                  <span>🤷‍♀️ WHERE EXACTLY IS THIS HAPPENING?</span>
                  <a
                    href="https://www.google.com/maps/d/edit?mid=1jtptBVMwzfck7buJ1Oh2lvCwu8nk2a4&usp=sharing"
                    target="blank"
                  >
                    Check out this Google Map for all the event + accomodation
                    locations
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <span>⏰ WHEN/WHERE DOES IT START?</span>
                  5:30 PM at the{" "}
                  <a
                    href="https://www.google.com/maps/place/555+S+Christopher+Columbus+Blvd,+Philadelphia,+PA+19106/@39.9411542,-75.1404917,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c890d2d4753f:0x8d961f8b23eb0853!8m2!3d39.9411542!4d-75.1404917!16s%2Fg%2F11bw4m9vvv?entry=ttu"
                    target="_blank"
                  >
                    Chart House | 555 S Christopher Columbus Blvd
                  </a>
                </p>
              </li>
              <li>
                <span>🚗 WHERE SHOULD I PARK?</span>
                <p>
                  Chart House has a free lot where you can park. If it fills up
                  there is the Lombard Street Lot (#8 on the map below | 401 S
                  Columbus Ave) and other options nearby:
                  <br />
                  <br />
                  <img
                    className="parking-map"
                    src="https://assets.cityexperiences.com/wp-content/uploads/2024/04/Parking_in_philadelphia.jpeg?_ga=2.253936333.450730816.1723250379-1078449767.1723250379&_gl=1*1kx11xa*_gcl_au*MTc5Mzk0OTMwNi4xNzIzMjUwMzc5*_ga*MTA3ODQ0OTc2Ny4xNzIzMjUwMzc5*_ga_02K95TL8Q2*MTcyMzU4MTA3Mi4yLjEuMTcyMzU4MTEzMS4xLjAuMA.."
                  />
                  <br />
                  <br />
                  Parking in Fishtown is trickier since most streets are
                  permitted (2hr max limit) and you want to avoid that to avoid
                  getting ticketed. If staying at the Hotel Anna &amp; Bel, they
                  have a lot available at Almond &amp; York.
                </p>
              </li>
              <li>
                <p>
                  <span>🛌 WHICH HOTEL SHOULD I STAY AT?</span>
                  This party is going to be split between Penn's Landing and
                  Fishtown. If you only planning on participating in the
                  cocktail hour &amp; cruise, stay in Old City since it's
                  walkable. If you're planning on hanging out at the
                  after-party, then staying in Fishtown might be more
                  convenient.
                </p>
              </li>
              <li>
                <p>
                  <span>🏙 WHAT ELSE IS THERE TO DO IN PHILLY?</span>
                  So much. Check out this additional section below of
                  restaurants, places, and seasonal events happening in Philly
                  over the weekend:{" "}
                  <button
                    className="birthday-nav--btn button-link"
                    onClick={() => {
                      this.scroll(this.todo)
                    }}
                  >
                    "What to do in Philly?"
                  </button>
                </p>
              </li>
              <li>
                <p>
                  <span>🌭 WILL THERE BE FOOD &amp; DRINKS?</span> Light
                  bites/appetizers will be served at the cocktail hour. Buffet
                  dinner will be provided on the cruise. And we'll have pizza
                  delivered around 11 PM at Starboard. Beverages are covered. 🍻
                </p>
              </li>
              <li>
                <p>
                  <span>🥳 IS THIS REALLY JUST A SECRET WEDDING?</span> Guess
                  you'll have to come and find out!
                </p>
              </li>
              <li>
                <p>
                  <span>👶 ARE KIDS INVITED?</span> While we highly recommend
                  enjoying the evening as an adults' night out, we can
                  accommodate children for the cocktail hour and dinner boat
                  cruise. You will be responsible for your own family throughout
                  the event, which involves supervision on a boat. However,
                  children are <strong>not</strong> permitted at the after
                  party. Please reach out to Liz and/or make mention of any
                  children as guests when you RSVP!
                </p>
              </li>
              <li>
                <p>
                  <span>👗 WHAT IS THE DRESS CODE?</span> Boat fancy
                </p>
              </li>
              <li>
                <p>
                  <span>🎁 SHOULD I BRING A GIFT?</span> The best gift would be
                  your presence 🤗
                </p>
              </li>
              <li>
                <p>
                  <span>❓ HAVE A QUESTION?</span> Send any questions/concerns
                  to Liz at{" "}
                  <a href="mailto:elizabeth.cottrell@gmail.com">
                    elizabeth.cottrell@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </section>

          <hr />

          <section className="birthday-todo" ref={this.todo}>
            <div className="container">
              <div className="pink-panel">
                <header>
                  <h2>What else is there to do in Philly?</h2>
                  <button
                    className="button-icon"
                    onClick={() => {
                      this.scroll(this.top)
                    }}
                  >
                    <i className="fa fa-arrow-up" />
                    <span className="sr-only">Back to top</span>
                  </button>
                </header>
                <p>
                  Are you spending the weekend in Philadelphia and looking for
                  other things to do and places to explore? <br />
                  <br />
                  There are plenty of museums and well-known historical spots to
                  enjoy - a personal favorite is any{" "}
                  <a
                    href="https://www.tripadvisor.com/Attraction_Products-g60795-t12058-zfg11873-a_contentId.129029781267+14161074930-Philadelphia_Pennsylvania.html"
                    target="_blank"
                  >
                    hop-on-hop-off city tour bus
                  </a>{" "}
                  right when you get to the city to get a lay of the land. But
                  if you're still wondering what to do, check out some of these
                  suggestions below:
                  <br />
                  <br />
                </p>
                <hr />
                <br />
                <div>
                  <div className="todo-section">
                    <ul className="todo-list">
                      <li className="todo-list-item">
                        <div>
                          <h3>
                            <a
                              href="https://www.visitphilly.com/articles/philadelphia/award-winning-critically-acclaimed/"
                              target="_self"
                            >
                              Dine at a critically acclaimed restaurant (or two,
                              or three...){" "}
                            </a>
                          </h3>
                          <h4>Philly does good food right...</h4>
                        </div>
                        <div className="list-item-with-img">
                          <div>
                            <div>
                              <p>
                                There’s no way around it: Philly’s{" "}
                                <a href="https://www.visitphilly.com/food-drink/">
                                  dining scene
                                </a>{" "}
                                is special. Philly restaurants regularly make{" "}
                                <a href="https://www.visitphilly.com/articles/philadelphia/award-winning-critically-acclaimed/#food-drink">
                                  ”best of” lists
                                </a>{" "}
                                from <em>The New York Times</em>,{" "}
                                <em>Bon Appétit</em>,{" "}
                                <em>Condé Nast Traveler</em> and more. Some of
                                the latest critically acclaimed spots:
                              </p>
                              <ul>
                                <li>
                                  Royal Sushi &amp; Izakaya (
                                  <a href="https://www.visitphilly.com/features/james-beard-awards-finalist-2024/">
                                    Best Chef: Mid-Atlantic finalist
                                  </a>
                                  , James Beard Foundation)
                                </li>
                                <li>
                                  Bloomsday (
                                  <a
                                    href="https://www.usatoday.com/story/life/food-dining/2024/07/29/best-bars-2024/73989737007/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-describedby="audioeye_new_window_message"
                                  >
                                    The Best Bars in America
                                  </a>
                                  , <em>USA Today</em>)
                                </li>
                                <li>
                                  San Lucas Pizzeria (
                                  <a
                                    href="https://www.nytimes.com/article/best-pizza.html"
                                    target="_blank"
                                    rel="noopener"
                                    aria-describedby="audioeye_new_window_message"
                                  >
                                    22 of the Best Pizza Places in the United
                                    States
                                  </a>
                                  , <em>The New York Times</em>), and
                                </li>
                                <li>
                                  Oyster House (
                                  <a
                                    href="https://www.esquire.com/food-drink/restaurants/a60861336/best-oyster-bars-america/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-describedby="audioeye_new_window_message"
                                  >
                                    The 10 Best Oyster Bars in America Right Now
                                  </a>
                                  , <em>Esquire</em>).
                                </li>
                              </ul>
                              <p>
                                Find more about Philly’s award-winning
                                restaurants{" "}
                                <a href="https://www.visitphilly.com/articles/philadelphia/award-winning-critically-acclaimed/#restaurants-eateries-markets">
                                  here
                                </a>
                                .
                              </p>
                            </div>

                            <div class="vp-article-section__details">
                              <p class="vp-article-section__detail-item">
                                <strong>Where:</strong>{" "}
                                <a
                                  href="https://maps.google.com/?cid=7564578590319575702"
                                  target="_blank"
                                  aria-describedby="audioeye_new_window_message"
                                >
                                  Various locations including Royal Sushi &amp;
                                  Izakaya, 780 S. 2nd Street
                                  <i class="vp-icon vp-icon-link"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          <img
                            alt="Photo by Jesse Ito in Royal Izakaya."
                            src={sushi}
                          />
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <h3>
                            <a
                              href="https://www.visitphilly.com/articles/philadelphia/best-things-to-eat-at-reading-terminal-market/"
                              target="_self"
                            >
                              Chow down on food from dozens of vendors at
                              Reading Terminal Market{" "}
                            </a>
                          </h3>
                          <h4>
                            One of America's oldest farmers market and current
                            food paradise...
                          </h4>
                        </div>
                        <div className="list-item-with-img">
                          <div>
                            <p>
                              Set below a former railroad terminal, Center
                              City's 127-year-old{" "}
                              <a href="https://www.visitphilly.com/articles/philadelphia/best-things-to-eat-at-reading-terminal-market/">
                                Reading Terminal Market
                              </a>{" "}
                              serves as both a dazzling tourist destination and
                              a trusted source for fresh produce, seafood, meats
                              and cheese for locals. The public space also
                              provides open seating where customers can enjoy a
                              world of cuisines from dozens of restaurants,
                              including Pennsylvania Dutch vendors and sandwich
                              slingers like the acclaimed DiNic's, serving up
                              hot roast pork sandwiches that rival the city's
                              much-lauded cheesesteaks. Retail merchants sell
                              housewares, jewelry, linens and more.
                            </p>
                            <p class="vp-article-section__detail-item">
                              <strong>Where:</strong>{" "}
                              <a
                                href="https://maps.google.com/?cid=340801453161322366"
                                target="_blank"
                              >
                                Reading Terminal Market, 51 N. 12th Street
                              </a>
                            </p>
                          </div>
                          <img src="https://www.visitphilly.com/wp-content/uploads/2018/02/ReadingTerminalMarket-R-Kennedy-2200VP.jpg" />
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <h3>
                            <a
                              href="https://chinatown-pcdc.org/yeshi-chinatown-night-market-2024%E5%8D%8E%E5%9F%A0%E5%A4%9C%E5%B8%82/"
                              target="_blank"
                            >
                              YèShì Chinatown Night Market{" "}
                            </a>
                          </h3>
                          <h4>Thursday, October 10, 2024 | 6-10 p.m.</h4>
                        </div>
                        <div className="list-item-with-img">
                          <div>
                            <p>
                              This{" "}
                              <a
                                href="https://chinatown-pcdc.org/yeshi-chinatown-night-market-2024%E5%8D%8E%E5%9F%A0%E5%A4%9C%E5%B8%82/"
                                target="_blank"
                              >
                                street festival
                              </a>{" "}
                              huts down 10th Street between Arch Street and
                              Winter Street and the surrounding streets for a
                              night of food, live performance, arts, crafts and
                              shopping. Drawing over 60 vendors and 20,000
                              festival-goers, the annual event is one of the
                              biggest in{" "}
                              <a href="https://www.visitphilly.com/areas/philadelphia-neighborhoods/chinatown/">
                                Chinatown
                              </a>{" "}
                              and a prime opportunity to explore the
                              neighborhood's rich culture and chow down on some
                              of the city's best eats.
                            </p>
                            <p>
                              <strong>Where:</strong>{" "}
                              <a
                                href="https://maps.google.com/?q=Arch+Street+%26+North+10th+Street&amp;ftid=0x89c6c62a215c0553:0x4e76da378ac675a7"
                                target="_blank"
                              >
                                10th Street between Arch and Winter streets
                              </a>
                            </p>
                          </div>
                          <img src="https://chinatown-pcdc.org/wp-content/uploads/2023/07/IMG_8810-1-scaled.jpg" />
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <div>
                            <h3>
                              <a
                                href="https://peddlersvillage.com/event/octoberfeast/"
                                target="_blank"
                              >
                                OctoberFeast at Peddler's Village{" "}
                              </a>
                            </h3>
                            <h4>October 12-13, 2024 </h4>
                          </div>
                          <div className="list-item-with-img">
                            <div>
                              <p>
                                Prost! Transport yourself to Germany without
                                leaving{" "}
                                <a href="https://www.visitphilly.com/areas/bucks-county/">
                                  Bucks County
                                </a>{" "}
                                as{" "}
                                <a href="https://www.visitphilly.com/things-to-do/attractions/peddlers-village/">
                                  Peddler's Village
                                </a>{" "}
                                hosts its annual{" "}
                                <a
                                  href="https://peddlersvillage.com/event/octoberfeast/"
                                  target="_blank"
                                >
                                  OctoberFeast
                                </a>{" "}
                                in mid-October. Over the course of two days,
                                visitors can sample beers in the beer garden,
                                enjoy fare from food trucks, and delight in
                                German brass music and folk dances.
                              </p>

                              <p>
                                <strong>Where:</strong>{" "}
                                <a
                                  href="https://maps.google.com/?cid=16429573404433012892"
                                  target="_blank"
                                >
                                  Peddler's Village, 100 Peddlers Village,
                                  Lahaska
                                  <i class="vp-icon vp-icon-link"></i>
                                </a>
                              </p>
                            </div>
                            <img
                              alt="People dancing in front of a band at Peddler's Village"
                              src="https://www.visitphilly.com/wp-content/uploads/2023/08/octoberfeast-crtsy-peddlers-village-1200x900px-1044x781.jpg"
                            />
                          </div>
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <div>
                            <h3>
                              <a
                                href="https://www.philadelphiazoo.org/events/boo-at-the-zoo/"
                                target="_blank"
                              >
                                Boo at the Zoo
                              </a>
                            </h3>
                            <h4>October 12-13, 2024 | 9:30 a.m. - 5 p.m. </h4>
                          </div>

                          <div className="list-item-with-img">
                            <div>
                              <p>
                                Lions &amp; tigers &amp; bears, oh my! Gather
                                your ghosts and goblins, put on your favorite
                                costume, bring a bag, and trick-or-treat
                                throughout the Zoo. Be sure to visit all our
                                animal exhibits to see who might be munching on
                                pumpkins or playing with Halloween-themed
                                enrichment! Enjoy seasonal décor, photo
                                opportunities, festive fall offerings, fun
                                children's activities, and more.
                              </p>

                              <p>
                                <strong>Where:</strong>{" "}
                                <a
                                  href="https://maps.app.goo.gl/cazEaazyurfEZRh89"
                                  target="_blank"
                                >
                                  Philadelphia Zoo, 3400 W Girard Ave,
                                  Philadelphia
                                  <i class="vp-icon vp-icon-link"></i>
                                </a>
                              </p>
                            </div>
                            <img
                              sizes="100vw"
                              src="https://imagedelivery.net/B1cQ25kkcnI58rsV8pY1ng/3ab93465-0dfd-4f6a-ff0f-771480c59100/w=9999"
                              alt="booatthezoo 2 2"
                            />
                          </div>
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <div>
                            <h3>
                              <a href="https://ipdphilly.org/" target="_blank">
                                Indigenous People's Day Philly 2024 at
                                Shackamaxon (Penn Treaty Park){" "}
                              </a>
                            </h3>
                            <h4>Monday, October 14, 2024 </h4>
                          </div>

                          <div className="list-item-with-img">
                            <div>
                              <p>
                                Each year, Philadelphia and Indigenous
                                communities from across the nation gather at
                                Shackamaxon, also known as{" "}
                                <a href="https://www.visitphilly.com/things-to-do/attractions/penn-treaty-park/">
                                  Penn Treaty Park
                                </a>
                                , to mark five-plus centuries of Indigenous
                                history and culture. This year's{" "}
                                <a
                                  href="https://ipdphilly.org/"
                                  target="_blank"
                                >
                                  Philadelphia's Indigenous People's Day
                                </a>{" "}
                                celebration features speakers, performers, and
                                vendors from as far away as Mexico and South
                                America. The event is pay-what-you-wish, though
                                suggested donations of $12 are encouraged.
                              </p>

                              <p>
                                <strong>Where:</strong>{" "}
                                <a
                                  href="https://maps.google.com/?cid=11045384434181876395"
                                  target="_blank"
                                >
                                  Shackamaxon (Penn Treaty Park), 1301 N. Beach
                                  Street<i class="vp-icon vp-icon-link"></i>
                                </a>
                              </p>
                            </div>
                            <img
                              alt="Photo by Jesse Ito in Royal Izakaya."
                              src={ipd}
                            />
                          </div>
                        </div>
                        <hr />
                      </li>
                      <li className="todo-list-item">
                        <div>
                          <div>
                            <h3>
                              <a
                                href="https://www.visitphilly.com/things-to-do/"
                                target="_self"
                              >
                                Bonus: More Things to Do in Greater Philadelphia{" "}
                              </a>
                            </h3>
                            <h4>
                              Award-winning food, dynamic neighborhoods and
                              history-making attractions await...
                            </h4>
                          </div>

                          <div className="list-item-with-img">
                            <div>
                              <p>
                                Looking for even more great{" "}
                                <a href="https://www.visitphilly.com/things-to-do/">
                                  things to do
                                </a>{" "}
                                in Greater Philadelphia? Of course you are! And
                                in Greater Philadelphia, there is so much to
                                explore, discover or rediscover. We’ve got ideas
                                for:
                              </p>
                              <ul>
                                <li>
                                  perfect things to do on your{" "}
                                  <a href="https://www.visitphilly.com/articles/philadelphia/most-essential-things-to-do-in-philadelphia-on-a-return-visit/">
                                    second trip to Philly
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.visitphilly.com/articles/philadelphia/essential-philly-eats-meals-and-dishes/">
                                    12 essential Philly eats
                                  </a>{" "}
                                  from appetizers to desserts
                                </li>
                                <li>
                                  the city’s best{" "}
                                  <a href="https://www.visitphilly.com/articles/philadelphia/phillys-hidden-gems/">
                                    hidden gems
                                  </a>{" "}
                                  you probably don’t know about
                                </li>
                                <li>
                                  the{" "}
                                  <a href="https://www.visitphilly.com/articles/philadelphia/most-beautiful-places/">
                                    most beautiful places
                                  </a>{" "}
                                  in Greater Philadelphia
                                </li>
                                <li>
                                  <a href="https://www.visitphilly.com/media-center/press-releases/hidden-bars-restaurants-in-philadelphia/">
                                    secret bars and restaurants
                                  </a>
                                  , and
                                </li>
                                <li>
                                  <a href="https://www.visitphilly.com/articles/philadelphia/top-attractions-philadelphia-countryside/">
                                    dozens of day-trip ideas
                                  </a>{" "}
                                  out into Philadelphia’s Countryside.
                                </li>
                              </ul>
                              <p>
                                Find more ideas{" "}
                                <a href="https://www.visitphilly.com/things-to-do/">
                                  right this way
                                </a>{" "}
                                for your next exploration — then{" "}
                                <a href="https://www.visitphilly.com/hotels/">
                                  book a stay at one of the city’s great hotels.
                                </a>
                              </p>
                            </div>
                            <img
                              alt=""
                              src="https://www.visitphilly.com/wp-content/uploads/2020/09/philadelphia-skyline-museum-of-art-by-elevated-angles-for-vp-2200x1237px-1044x781.jpg"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="birthday-rsvp container" ref={this.rsvp}>
            <header>
              <h2>RSVP</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>

            <a
              href="https://forms.gle/Nq6HNkQaNfXttxQ3A"
              className="rsvp-button"
              target="_blank"
            >
              RSVP NOW
            </a>
            <p>
              Please <span>RSVP</span> by
              <br /> <span>SEPTEMBER 4!</span>
            </p>
          </section>

          <hr />

          <footer className="birthday-footer container">
            <div className="birthday-footer--top">
              <nav className="birthday-nav">
                <div className="birthday-nav--btn-list">
                  <button
                    className="birthday-nav--btn"
                    onClick={() => {
                      this.scroll(this.party)
                    }}
                  >
                    Party Info
                  </button>

                  <button
                    className="birthday-nav--btn"
                    onClick={() => {
                      this.scroll(this.itinerary)
                    }}
                  >
                    Itinerary
                  </button>
                  <button
                    className="birthday-nav--btn"
                    onClick={() => {
                      this.scroll(this.accommodations)
                    }}
                  >
                    Accommodations
                  </button>
                  <button
                    className="birthday-nav--btn"
                    onClick={() => {
                      this.scroll(this.faq)
                    }}
                  >
                    FAQ
                  </button>
                  <a
                    className="birthday-nav--btn"
                    href="https://forms.gle/Nq6HNkQaNfXttxQ3A"
                    target="_blank"
                  >
                    RSVP
                  </a>
                </div>
              </nav>
            </div>
          </footer>
        </div>
      </main>
    )
  }
}

export default Birthday
