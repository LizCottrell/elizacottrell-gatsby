import React, { Component } from "react"
import "../styles/main.scss"
import SEO from "../components/seo"
import boatLeft from "../assets/images/boat-left.jpg"
import boatRight from "../assets/images/boat-right.jpg"

class Birthday extends Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
    this.party = React.createRef()
    this.rsvp = React.createRef()
    this.itinerary = React.createRef()
    this.faq = React.createRef()
    this.accommodations = React.createRef()
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
              Over the Hill - On a Boat!
              <span className="sub-heading">
                Scott &amp; Elizabeth's Joint 40th Birthday Bash
              </span>
            </h1>
            <hr />
            <p>Cruising, Dancing, Dinner, Drinks, After-Party &amp; more!</p>
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
              <li className="large">5 PM - 1 AM</li>
              <li className="small">Penn's Landing + Fishtown</li>
              <li className="small">
                <button
                  className="button-link"
                  onClick={() => {
                    this.scroll(this.itinerary)
                  }}
                >
                  Check out the itinerary
                </button>{" "}
                <br />
                for the play-by-play of the day!
              </li>
            </ul>
            <a
              href="https://forms.gle/Nq6HNkQaNfXttxQ3A"
              class="rsvp-button"
              target="_blank"
            >
              RSVP
            </a>
            <p className="small">Please RSVP no later than Sept-1</p>
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
                  <td>5:15 PM</td>
                  <td>
                    <ul>
                      <li>
                        🌅 GOOD EVENING! Meet at Penn's Landing at{" "}
                        <a href="https://g.co/kgs/y1hJW5W" target="_blank">
                          the Chart House
                        </a>{" "}
                        at 5:15PM for a sunset cocktail hour on the waterfront
                        <span class="indent">
                          555 S Christopher Columbus Blvd | PHL, PA 19147
                        </span>
                      </li>
                      <li>🚙 PARKING: Parking at the dock is $20</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>6:15 PM</td>
                  <td>
                    <ul>
                      <li>
                        Head to{" "}
                        <a
                          href="https://maps.app.goo.gl/u7tu4GcaXvM3iUjx6"
                          target="_blank"
                        >
                          the City Cruises Philadelphia dock
                        </a>{" "}
                        at 6:15PM to prepare to board 🛥 the Spirit of
                        Philadelphia 💦
                        <span class="indent">
                          401 S. Columbus Boulevard | PHL, PA 19106
                        </span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>6:30 PM</td>
                  <td>
                    <ul>
                      <li>Board the boat!</li>
                      <li>📸 Sign the guestbook</li>
                      <li>🍾 Grab a drink</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>7 - 9:30 PM</td>
                  <td>
                    <ul>
                      <li>🐟 CRUISING</li>
                      <li>Multi-course Dinner</li>
                      <li>Dancing</li>
                      <li>Deck games</li>
                      <li>Open bar</li>
                      <li>Birthday cake</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>9:45 PM</td>
                  <td>
                    <ul>
                      <li>
                        Take a shuttle to the AFTER-PARTY at{" "}
                        <a href="https://g.co/kgs/79nGwPX" target="_blank">
                          Starboard Side Tavern
                        </a>
                        <span class="indent">
                          2500 E Norris St | PHL, PA 19125
                        </span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>10 PM - 1 AM</td>
                  <td>
                    <ul>
                      <li>
                        AFTER-PARTY at{" "}
                        <a href="https://g.co/kgs/79nGwPX" target="_blank">
                          Starboard Side Tavern
                        </a>
                      </li>
                      <li>🕺 Dancing</li>
                      <li>🍕 Pizza</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>1 AM</td>
                  <td>
                    <ul>
                      <li>
                        THE PARTY IS OFFICIALLY OVER - Thank you for
                        participating!!!
                      </li>
                      <li>Feel free to hang out in Fishtown</li>
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
            <hr />
          </section>

          <section
            className="birthday-accommodations"
            ref={this.accommodations}
          >
            <div className="container">
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
                We recommend the following hotels since they're extremely
                walkable to the event locations:
              </p>
              <p>
                <span className="title">
                  ⛵️ Would you rather stay near the BOAT party?
                  <br />
                  <br />
                </span>
                <ul>
                  <li>
                    <p>
                      <a
                        href="https://www.hilton.com/en/hotels/phlpnhh-hilton-philadelphia-at-penns-landing/"
                        target="_blank"
                        title="Hilton at Penn's Landing"
                      >
                        Hilton Philadelpia at Penn's Landing
                      </a>{" "}
                      201 S Christopher Columbus Blvd | PHL, PA 19106
                      <br />
                      <span>
                        The Hilton is an excellent waterfront hotel with
                        incredible views right in Penn's Landing - the boat dock
                        is a 6 minute walk south of the hotel through Spruce
                        Street Harbor Park.
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="https://www.hilton.com/en/hotels/phlpnhh-hilton-philadelphia-at-penns-landing/"
                        target="_blank"
                        title="Hilton at Penn's Landing"
                      >
                        Philadelphia Marriott Old City
                      </a>{" "}
                      One Dock St | PHL, PA 19106
                      <br />
                      <span>
                        The Marriot is located in Old City and is a short 11
                        minute walk from the dock.
                      </span>
                    </p>
                  </li>
                </ul>
              </p>
              <p>
                <span className="title">
                  🐟 Would you rather stay near the AFTER party?
                  <br />
                  <br />
                </span>
                <ul>
                  <li>
                    <p>
                      <a
                        href="https://annaandbel.com/"
                        target="_blank"
                        title="Hotel Anna &amp; Bel"
                      >
                        Hotel Anna &amp; Bel in Fishtown
                      </a>{" "}
                      1401 E Susquehanna Ave | PHL, PA 19125
                      <br />
                      <span>
                        Hotel Anna &amp; Bel is a ✨ BRAND NEW ✨ 50-room
                        full-service boutique hotel (very swanky) located in the
                        heart of Fishtown - the after-party at Starboard Side
                        Tavern is on the same block.
                      </span>
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </section>

          <section className="birthday-quote">
            <hr />
            <br /> <br />
            <p className="center">
              "Always go to other people's funerals, otherwise they won't come
              to yours." <br />- Yogi Berra
              <br />
              <br />
              💛
            </p>
            <hr />
          </section>

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
                  <span>🤷‍♀️ WHERE:</span>
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
                  <span>
                    🛌 I'M COMING FROM OUT OF TOWN, WHICH HOTEL SHOULD I STAY
                    AT:
                  </span>
                  This party is going to be split between Penn's Landing and
                  Fishtown. If you're not interested in the after-party at
                  Starboard Side Tavern, staying in a hotel near the waterfront
                  might be best. It's perfectly located to take advantage of Old
                  City and all the attractions, restaurants, and sights historic
                  Philly has to offer.
                </p>
                <p>
                  {" "}
                  If you're planning on hanging out at the after-party, then
                  definitely stay at Hotel Anna &amp; Bell - it's a beautiful,
                  unique boutique hotel with a restaurant &amp; bar in a great
                  location in Fishtown.
                </p>
              </li>
              <li>
                <p>
                  <span>🚗 PARKING:</span> It depends! Please park either at
                  Penn's Landing if you do not plan on going to the after-party
                  OR if you DO plan on going to the after-party, park in
                  Fishtown and take an Uber to the dock (you will be shuttled
                  back to Fishtown after the boat cruise).
                </p>
                <ul>
                  <li>
                    <p>
                      Parking at Penn's Landing: ~$20 local parking is available
                      at Lombard Circle Parking Lot on Columbus Boulevard and
                      Lombard Circle, and the other locations noted below.{" "}
                      <br />
                      <br />
                      <img
                        className="parking-map"
                        src="https://assets.cityexperiences.com/wp-content/uploads/2024/04/Parking_in_philadelphia.jpeg?_ga=2.253936333.450730816.1723250379-1078449767.1723250379&_gl=1*1kx11xa*_gcl_au*MTc5Mzk0OTMwNi4xNzIzMjUwMzc5*_ga*MTA3ODQ0OTc2Ny4xNzIzMjUwMzc5*_ga_02K95TL8Q2*MTcyMzU4MTA3Mi4yLjEuMTcyMzU4MTEzMS4xLjAuMA.."
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      Parking in Fishtown: This is a little trickier because
                      you'll have to find unpermited street parking or get 2 day
                      parking passes (you can request these in your RSVP form).
                      If you're staying at Hotel Anna &amp; Bel, they have a lot
                      you can use.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <span>🌭 FOOD &amp; DRINKS:</span> There will be appetizers
                  and snacks at the Chart House for the cocktail hour. Buffet
                  dinner will be provided on the cruise. And we'll have pizza
                  delivered around 11 PM at Starboard. Open bars everywhere! 🍻
                </p>
              </li>
              <li>
                <p>
                  <span>🥳 IS THIS REALLY JUST A SECRET WEDDING?:</span> Guess
                  you'll have to come and find out!
                </p>
              </li>
              <li>
                <p>
                  <span>👗 DRESS CODE:</span> Boat fancy
                </p>
              </li>
              <li>
                <p>
                  <span>❓QUESTIONS:</span> Send any questions/concerns to Liz
                  at{" "}
                  <a href="mailto:elizabeth.cottrell@gmail.com">
                    elizabeth.cottrell@gmail.com
                  </a>
                </p>
              </li>
            </ul>
            <hr />
          </section>

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
              class="rsvp-button"
              target="_blank"
            >
              RSVP NOW
            </a>
            <p>
              Please <span>RSVP</span> no later than
              <br /> <span>SUNDAY - SEPTEMBER 1ST!</span>
            </p>
            <hr />
          </section>

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
