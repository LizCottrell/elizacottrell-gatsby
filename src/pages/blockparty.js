import React, { Component } from "react"
import "../styles/main.scss"
import SEO from "../components/seo"
import blockparty1 from "../assets/images/blockparty-1.png"
import sun from "../assets/images/sun.png"

class BlockParty extends Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
    this.party = React.createRef()
    this.rsvp = React.createRef()
    this.itinerary = React.createRef()
    this.faq = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    return (
      <main className="blockparty" ref={this.top}>
        <SEO title="Block Party" />
        <header className="blockparty-header container">
          <h1>Block Party!</h1>
          <nav className="blockparty-nav">
            <div className="blockparty-nav--btn-list">
              <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.party)
                }}
              >
                Party Info
              </button>
              <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.rsvp)
                }}
              >
                RSVP
              </button>
              <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.itinerary)
                }}
              >
                Itinerary
              </button>
              <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.faq)
                }}
              >
                FAQ
              </button>
            </div>
            <div className="blockparty-nav--social">
              <a
                href="https://www.instagram.com/norrisneighbors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="mailto:myblockcaptain@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope-o" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </nav>
        </header>

        <p className="container cta">
          <span>🙌</span> Let's get ready to rock the block! <span>🙌</span>
        </p>

        <div className="blockparty-hero" ref={this.party}>
          <img
            className="blockparty-hero--left"
            src={blockparty1}
            alt="2500-2529 East Norris Street Block Party"
          />
          <div
            className="blockparty-hero--right"
            // style={{ backgroundImage: `url(${blockparty2})` }}
          >
            <p>With games, food, music, bounce house + summer fun</p>
            <ul>
              <li>SAT 8/13</li>
              <li>8AM - 8:30PM</li>
              <li className="small">*RAIN DATE: SUN 8/14</li>
              <li className="small">
                <button
                  className="button-link"
                  onClick={() => {
                    this.scroll(this.rsvp)
                  }}
                >
                  RSVP with your block captains
                </button>{" "}
                <br /> (Lisa @2520 &amp; Karen @2524) <br /> at
                myblockcaptain@gmail.com
              </li>
            </ul>
            <img
              className="sun"
              src={sun}
              alt="Smiling sun giving a double thumbs-up"
            />
          </div>
        </div>

        <section className="blockparty-rsvp container" ref={this.rsvp}>
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
          <p>
            Please RSVP via email to:{" "}
            <a href="mailto:myblockcaptain@gmail.com">
              myblockcaptain@gmail.com
            </a>{" "}
            by WEDNESDAY - AUGUST 3RD
          </p>
          <p>Please include:</p>
          <ul>
            <li>Your address</li>
            <li>
              A general headcount of how many from your household will be
              participating as well as expected family/friends
            </li>
            <li>
              How many children and the age ranges of children attending (for
              activity-planning purposes)
            </li>
            <li>
              Names of heads of household (for nametag purposes) - no need to
              supply names of guests
            </li>
          </ul>
          <br />
          <hr />
          <br /> <br />
          <p>
            <u>Money will be collected on THURSDAY - AUGUST 4th</u>
          </p>
          <p>Amount to be determined (should be $50 or less)</p>
        </section>

        <section
          className="blockparty-itinerary container"
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
          <p>
            The events/activities listed are available to enhance the day with
            family &amp; friends! All fur friends enjoying the day outside
            should be friendly &amp; on-leash.
          </p>
          <p>
            Thanks to Fishtown Pharmacy for providing face masks and thanks to
            the City of Philadelphia for providing neighbors with COVID test
            kits (kits will be distributed on 8/12). Let's stay safe today!
          </p>

          <table>
            <thead>
              <tr>
                <td>Time</td>
                <td>Event/Activity</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00AM to 9:30AM</td>
                <td>
                  <ul>
                    <li>
                      GOOD MORNING! The street will now be blocked from traffic.
                      Please sweep/clean your pavement &amp; sidewalk and help
                      with street clean-up.
                    </li>
                    <li>ENJOY: Coffee, Donuts &amp; Fruit</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>9:30AM to 11:30AM</td>
                <td>
                  <ul>
                    <li>
                      TIME TO SET-UP FOR THE DAY! Set-up your umbrellas, chairs
                      &amp; other items for the day!
                    </li>
                    <li>
                      Take a photo in front of our backdrop! Tag{" "}
                      <a
                        href="https://www.instagram.com/explore/tags/norrisneighbors/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        #NorrisNeighbors
                      </a>{" "}
                      for{" "}
                      <a
                        href="https://www.instagram.com/norrisneighbors/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        our IG page.
                      </a>
                    </li>
                    <li>
                      Name tags will be distributed for everyone (thanks to
                      Neighbor Ian for creating these!).
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>10:00AM to 11:00AM</td>
                <td>
                  <ul>
                    <li>11:00AM - BOUNCE HOUSE FOR KIDS SET UP</li>
                    <li>
                      Fishtown Branch Free Library Card Applications &amp; Other
                      Info Available
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>11:00AM to 12:00PM</td>
                <td>
                  <ul>
                    <li>
                      Face Painting Materials &amp; Water Tattoos Available
                    </li>
                    <li>
                      Child &amp; Adult Cornhole set-up for use - kids chalk,
                      bubbles, etc. available.
                    </li>
                    <li>Ice Cream Cake (courtesy of Cold Stone Creamery)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>11:30AM</td>
                <td>
                  <ul>
                    <li>FIRE TRUCK VISIT FOR KIDS.</li>
                    <li>26th PRECINCT OFFICER VISIT</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>12:00PM to 12:30PM</td>
                <td>
                  <ul>
                    <li>
                      EVERYONE WELCOME TO A FREE HOTDOG
                      <br />
                      <br />
                      Special thanks Neighbor GRILLMASTERS - Ian, Derek &amp;
                      Scott
                      <br />
                      <br />
                      Our block is receiving 120 Hotdog Rolls &amp; 120
                      Hamburger Rolls courtesy of Schmidts Rolls
                      <br />
                      <br />
                      Hotdogs, plates, chips, pretzels, tastycakes &amp; water
                      courtesy of IGA
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>12:30PM to 1:00PM</td>
                <td>
                  <ul>
                    <li>
                      BATALA DRUM PERFORMANCE (featuring Neighbors Jenn &amp;
                      Liz)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>2:00PM</td>
                <td>
                  <ul>
                    <li>
                      DIY Kid Wooden Kits - Fishtown kids can make a Fishtown
                      Tank! (courtesy of Home Depot)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3:30PM</td>
                <td>
                  <ul>
                    <li>Water Balloon Toss &amp; Limbo</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>7:30PM to 8:30PM</td>
                <td>
                  <ul>
                    <li>
                      BLOCK PARTY IS OFFICIALLY OVER - Thank you for
                      participating!!!
                    </li>
                    <li>Time to break-down the set-ups &amp; clean up</li>
                    <li>
                      8:30PM - Street opens back up to traffic, bus, pedestrians
                      &amp; parking
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="last" colSpan="2">
                  Goodnight, all! --- Hope you had a great day with your
                  neighbors
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>To Be Added: DJ Start &amp; Finish Time</p>
        </section>

        <section className="blockparty-faq container" ref={this.faq}>
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
              <span>ITINERARY</span>: is in-progress and the most accurate list
              regarding group events, activities, visitors is above
            </li>
            <li>
              <span>WHERE</span>: This block party is on our block only - Norris
              Street between Belgrade &amp; Gaul
            </li>
            <li>
              <span>HOW MUCH</span>: Amout to be determined based on number of
              houses participating - money will be collected (money will be used
              for group things like bounce house, dunk tank, etc. - it's
              important that everyone participating contribute
            </li>
            <li>
              <span>PARKING</span>: Please park elsewhere the day before so we
              can have an open and safe play street
            </li>
            <li>
              <span>OTHER CARS</span>: Signs will be posted in advance asking
              others to park elsewhere (city guidelines have changes and we
              can't force folks to move their cars, let's hope they do so out of
              courtesy - our signs will be posted)
            </li>
            <li>
              <span>FOOD &amp; STUFF</span>: You will be responsible for your
              guests &amp; your own set-up outside of your home (i.e.
              umbrella/canopy, grill, pool, tables &amp; chairs, food, drinks).
              We will have some donated food items that will be available for
              everyone such as rolls, water, possibly hotdogs and hamburgers and
              some other items. More info to come!
            </li>
            <li>
              <span>COVID</span>: It's still a thing &amp; now monkeypox!
              Friends/family should be COVID-free and not pose a risk to others
            </li>
            <li>
              <span>TIME</span>: The street will be blocked off at 8AM and will
              need to reopen at 8:30PM
            </li>
            <li>
              <span>AFTER</span>: If you wish to continue socializing after
              8:30PM, please do so on your property - keeping your guests safe
              from the street since it will be back open to traffic. We are on a
              bus route!
            </li>
            <li>
              <span>NOISE</span>: Please keep noise and music down after 10PM if
              you are still outside
            </li>
            <li>
              <span>TRASH &amp; RECYCLING</span>: Bags will be set-up at various
              locations on the street on the day of the event
            </li>
            <li>
              <span>QUESTIONS</span>: Anytime you have questions/concerns, want
              to help, or can contribute in some other way (activity/game/other
              donation) please email{" "}
              <a href="mailto:myblockcaptain@gmail.com">
                myblockcaptain@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <footer className="blockparty-footer container">
          <img
            className="sun"
            src={sun}
            alt="Smiling sun giving a double thumbs-up"
          />
          <button
            className="button-icon"
            onClick={() => {
              this.scroll(this.top)
            }}
          >
            <i className="fa fa-arrow-up" />
            <span className="sr-only">Back to top</span>
          </button>
        </footer>
      </main>
    )
  }
}

export default BlockParty
