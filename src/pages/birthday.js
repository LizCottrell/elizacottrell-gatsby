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
                </p>
                <div>
                  <p className="title">
                    🛥 Would you rather stay near the BOAT party?
                  </p>
                  <ul>
                    <li>
                      <div className="hotel-with-img">
                        <div>
                          <a
                            href="https://www.hilton.com/en/hotels/phlpnhh-hilton-philadelphia-at-penns-landing/"
                            target="_blank"
                            title="Hilton at Penn's Landing"
                          >
                            Hilton Philadelpia at Penn's Landing
                          </a>
                          <p>201 S Columbus Blvd, Old City</p>
                          <hr />
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
                        <hr />
                        <p>
                          The Marriot is located in Old City and is a short 11
                          minute walk from the dock.
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
                      <div className="hotel-with-img">
                        <div>
                          <a
                            href="https://annaandbel.com/"
                            target="_blank"
                            title="Hotel Anna &amp; Bel"
                          >
                            Hotel Anna &amp; Bel
                          </a>
                          <p>1401 E Susquehanna Ave, Fishtown</p>
                          <hr />
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
                <p></p>
                <p> </p>
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
