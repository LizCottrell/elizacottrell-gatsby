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
    this.thanks = React.createRef()
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
              {/* <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.rsvp)
                }}
              >
                RSVP
              </button> */}
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
              <button
                className="blockparty-nav--btn"
                onClick={() => {
                  this.scroll(this.thanks)
                }}
              >
                Thanks!
              </button>
            </div>
            <div className="blockparty-nav--social">
              <a
                href="https://www.instagram.com/norrisneighbors/"
                target="_blank"
              >
                <i className="fa fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:myblockcaptain@gmail.com" target="_blank">
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
          <div className="blockparty-hero--right">
            <p>With games, food, music, bounce house + summer fun</p>
            <br />
            <hr />
            <br />
            <ul>
              <li>SAT 8/13</li>
              <li>8AM - 8:30PM</li>
              <li className="small">
                <button
                  className="button-link"
                  onClick={() => {
                    this.scroll(this.itinerary)
                  }}
                >
                  Check out the itinerary
                </button>{" "}
                for the play-by-play of the day!
              </li>
            </ul>
            <img
              className="sun"
              src={sun}
              alt="Smiling sun giving a double thumbs-up"
            />
          </div>
        </div>

        {/* <section className="blockparty-rsvp container" ref={this.rsvp}>
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
        </section> */}

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
          <ul>
            <li>
              ☀️ The events/activities listed are available to enhance the day
              with family &amp; friends!
            </li>
            <li>
              All fur friends enjoying the day outside should be friendly &amp;
              on-leash 🐕
            </li>
            <li>
              Please set-up your own trash/recyle station for the day - you will
              need to hold until Thursday 🚮
            </li>
          </ul>
          <br />
          <hr />
          <br /> <br />
          <p>
            Thanks to Fishtown Pharmacy for providing face masks and thanks to
            the City of Philadelphia for providing neighbors with 🦠 COVID 😷
            test kits (kits will be distributed on 8/12). Let's stay safe today!
          </p>
          <p className="center">💜💙💚💛🧡❤️</p>
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
                      ☀️ GOOD MORNING! The street will now be blocked from
                      traffic. Please sweep/clean your pavement &amp; sidewalk
                      and help with street clean-up 🧹
                    </li>
                    <li>
                      ☕️ AVAILABLE: Coffee, Juice, Donuts &amp; Munchkins
                    </li>
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
                      📸 Take a photo in front of our backdrop! Tag{" "}
                      <a
                        href="https://www.instagram.com/explore/tags/norrisneighbors/"
                        target="_blank"
                      >
                        #NorrisNeighbors
                      </a>{" "}
                      for{" "}
                      <a
                        href="https://www.instagram.com/norrisneighbors/"
                        target="_blank"
                      >
                        our IG page.
                      </a>{" "}
                      (thanks to Katie for creating this)
                    </li>
                    <li>
                      Name tags for everyone (thanks to Ian for creating
                      these!).
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>10:30PM</td>
                <td>
                  <ul>
                    <li>
                      🐟 KID WOODEN CRAFT KITS - Fishtown kids can make a
                      Fishtown Tank! (courtesy of Home Depot)
                    </li>
                    <li>
                      Cornhole (adult &amp; kids), kid ropes, bubbles, chalk
                      available
                    </li>
                    <li>
                      Face Painting Materials &amp; Kids Water Tattoos Available
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>11:15AM</td>
                <td>
                  <ul>
                    <li>BOUNCE HOUSE FOR KIDS IS SETTING UP...</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>11:30AM</td>
                <td>
                  <ul>
                    <li>🚒 FIRE TRUCK VISIT FOR KIDS.</li>
                    <li>👮‍♀️ 26th PRECINCT OFFICER VISIT</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>12:00PM to 12:30PM</td>
                <td>
                  <ul>
                    <li>✅ BOUNCE HOUSE OPEN</li>
                    <li>
                      HELP YOURSELF TO SOME...
                      <br />
                      <br />
                      🌭 Hot dogs, hot dog &amp; hamburger rolls, plates, chips,
                      pretzels, tastycakes &amp; water courtesy of IGA &amp;
                      Schmidt's bakery
                      <br />
                      <br />
                      🔥 Special thanks Neighbor GRILLMASTERS - Ian, Derek &amp;
                      Scott
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>12:30PM to 1:00PM</td>
                <td>
                  <ul>
                    <li>
                      🥁 BATALA DRUM PERFORMANCE (featuring Neighbors Jenn &amp;
                      Liz)
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>4:00PM</td>
                <td>
                  <ul>
                    <li>❌ BOUNCE HOUSE CLOSED</li>
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
                    <li>Time to break-down the set-ups &amp; clean up 🧹</li>
                    <li>
                      8:30PM - Street opens back up to traffic, bus, pedestrians
                      &amp; parking
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="last" colSpan="2">
                  👋 Goodnight, all! --- Hope you had a great day with your
                  neighbors
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <p>Throughout the day...</p>
          <ul>
            <li>
              🏙 Useful information related to city services &amp; your district
              councilperson will be available
            </li>
            <li>
              📚 Sign-up for a Fishtown Community Branch Library card &amp; free
              library information available
            </li>
            <li>
              ♻️ Will have a handful of recycle buckets to give away! If you
              don't get one, sign up and Lisa will get it for you!
            </li>
            <li>
              🚗 🚐 🚙 Let's talk 2 hour parking for our block - I think its
              time y'all! Petition available to sign
            </li>
            <li>
              🌳 Need a free rain barrel or tree? Info will be available - also,
              learn more about future block events 😊
            </li>
          </ul>
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
              🤷‍♀️ <span>WHERE</span>: This block party is on our block only -
              Norris Street between Belgrade &amp; Gaul
            </li>
            <li>
              🚗 <span>PARKING</span>: Please park elsewhere the day before so
              we can have an open and safe play street
            </li>
            <li>
              🚙 <span>OTHER CARS</span>: Signs will be posted in advance asking
              others to park elsewhere (city guidelines have changes and we
              can't force folks to move their cars, let's hope they do so out of
              courtesy - our signs will be posted)
            </li>
            <li>
              🌭 <span>FOOD &amp; STUFF</span>: You will be responsible for your
              guests &amp; your own set-up outside of your home (i.e.
              umbrella/canopy, grill, pool, tables &amp; chairs, food, drinks).
              We will have some donated food items that will be available for
              everyone such as rolls, water, hotdogs and some other items.
            </li>
            <li>
              🦠 <span>COVID</span>: It's still a thing &amp; now monkeypox!
              Friends/family should be COVID-free and not pose a risk to others
            </li>
            <li>
              🥳 <span>AFTER</span>: If you wish to continue socializing after
              8:30PM, please do so on your property - keeping your guests safe
              from the street since it will be back open to traffic. We are on a
              bus route!
            </li>
            <li>
              🗣 <span>NOISE</span>: Please keep noise and music down after 10PM
              if you are still outside
            </li>
            <li>
              🗑 <span>TRASH &amp; RECYCLING</span>: Please set-up your own
              trash/recyle station for the day - you will need to hold until
              Thursday
            </li>
            <li>
              ❓ <span>QUESTIONS</span>: Anytime you have questions/concerns,
              want to help, or can contribute in some other way
              (activity/game/other donation) please email{" "}
              <a href="mailto:myblockcaptain@gmail.com">
                myblockcaptain@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section className="blockparty-thanks container" ref={this.thanks}>
          <header>
            <h2>Thank you!</h2>
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
          <p>From your block captain, Lisa...</p>
          <p>
            The block party was extra special with the help of some AMAZING
            neighbors! The generosity of these donors really speaks to the
            community we have here in Fishtown! Everyone I reached out to was
            supportive &amp; willing to collborate! We truly live in a special
            pocket of the city!!
          </p>
          <ul>
            <li>
              💊{" "}
              <a
                href="https://fishtownpharmacy.com/"
                target="_blank"
                title="Fishtown Pharmacy"
              >
                FISHTOWN PHARMACY
              </a>
              : wants us to stay safe! Stop by &amp; say hi to Chris &amp; his
              team at 1802 Frankford Avenuel Consider transferring your scripts
              to them &amp; get that personal service you might be missing at
              your current pharmacy. Chris &amp; his team are welcoming &amp;
              super friendly! They provided face masks for all of us today!
            </li>
            <li>
              ☕️{" "}
              <a
                href="https://www.reanimatorcoffee.com/"
                target="_blank"
                title="Reanimator Coffee"
              >
                REANIMATOR COFFEE
              </a>
              : The team at Reanimator Coffee were happy to provide a nice brew
              for our morning crew! Located so close you can smell the flavor of
              the day - they provided the much-needed morning coffee today! Not
              just coffee but creamers, cups, cup sleeves, stir sticks, the
              whole shabang! You really should get your moming kick or mid-day
              pick-up at Reanimator! They care about the community &amp; its
              local!
            </li>
            <li>
              🌭{" "}
              <a
                href="https://www.therichmondshops.com/"
                target="_blank"
                title="IGA"
              >
                IGA
              </a>
              : contributed in a major way today! Thanks to Manager Don &amp;
              IGA at 2497 Aramingo Avenue for providing hotdogs, water, chips,
              pretzels, tastycakes &amp; plates for us to enjoy our day. IGA is
              convenient &amp; has been a part of this community for a very long
              time. Loyalty matters to them &amp; they didn't hesitate to
              contribute! They hire local &amp; contribute local! When you go to
              IGA be sure to say hi to Don!
            </li>
            <li>
              🛠{" "}
              <a
                href="https://www.homedepot.com/l/Port-Richmond/PA/Philadelphia/19134/4150"
                target="_blank"
                title="Home Depot"
              >
                HOME DEPOT
              </a>
              : thanks to Manager Pedro over at Home Depot on 2539 Castor Avenue
              for providing the kid DIY kits today! Home Depot cares about the
              community &amp; hopes you will visit them for the next kid DIY
              event (happens each month) &amp; for all your home repair needs!
            </li>
            <li>
              🍦{" "}
              <a
                href="https://www.coldstonecreamery.com/stores/22014"
                target="_blank"
                title="Cold Stone Creamery"
              >
                COLD STONE CREAMERY
              </a>
              : Diane &amp; her team over at our local Cold Stone at 2530
              Aramingo Avenue provided an ice cream cake today! They have many
              types of ice cream treats - not just summer but all year long!
              Stop by &amp; say hi!
            </li>
            <li>
              🍩{" "}
              <a
                href="https://locations.dunkindonuts.com/en/pa/philadelphia/917-w-girard-ave/331955"
                target="_blank"
                title="Dunkin Donuts"
              >
                DUNKIN DONUTS
              </a>
              : Both DD near us contributed to make our morning &amp; start of
              the day special! Say hi to Jenny over at the Girard store at 717
              E. Girard Avenue &amp; Lexus at the 2530 Aramingo store! Dunkin
              wanted to be sure we got a sweet start to our day!
            </li>
            <li>
              🍉{" "}
              <a
                href="https://www.riverwardsproduce.com/"
                target="_blank"
                title="Riverwards Produce"
              >
                RIVERWARDS PRODUCE
              </a>
              : Have you been to 2200 E. Norris Street for fresh produce &amp;
              so much more?! They have it all! It's so close &amp; nothing beats
              buying fresh from your local grocer! Riverwards wanted to join in
              on the fun &amp; supplied beautiful watermelons for us today!!
              Visit when you get a chance, there's so much in store! Shop local!
            </li>
            <li>
              📚{" "}
              <a
                href="https://libwww.freelibrary.org/locations/fishtown-community-library"
                target="_blank"
                title="Fishtown Free Community Library"
              >
                FISHTOWN FREE COMMUNITY LIBRARY
              </a>
              : Take that library card application you picked up today &amp;
              hand deliver it to Amy over at Fishtown Free Community Library at
              1217 E. Montgomery Ave to get your library card. Amy &amp; staff
              can help you find a good book or share info on upcoming
              events/activities! They have a cute kid section too!
            </li>
            <li>
              💜 <span>THANKS TO NEIGHBORS</span>: Ian, Derek, Tori, Katie, Jen
              &amp; Lauren for helping to make this day special! Super big
              thanks to Liz for serving as Block Party Treasurer &amp; keeping
              funds on track &amp; making us our very own ✨ WEBSITE ✨. Thanks
              to Katie for making{" "}
              <a
                href="https://www.instagram.com/norrisneighbors/"
                target="_blank"
              >
                our IG
              </a>{" "}
              photo backdrop which looked amazing &amp; will be used again &amp;
              again
            </li>
            <li>
              🙌 <span>ALSO BIG THANKS TO</span>:
              <ul>
                <li>
                  Block Co-Captain Karen for always looking out for our street
                  &amp; keeping it clean
                </li>
                <li>
                  <a
                    href="https://phlcouncil.com/DarrellClarke/"
                    target="_blank"
                    title="Councilman Clark's Office"
                  >
                    Councilman Clark's Office
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.phila.gov/"
                    target="_blank"
                    title="the City of Philadelphia"
                  >
                    the City of Philadelphia
                  </a>
                </li>
                <li>
                  Our Firefighters at local Firehouse at 2601 Belgrade Street
                </li>
                <li>
                  Our Police Officers at{" "}
                  <a
                    href="https://nkcdc.org/business-arts/business-directory/26th-police-district/"
                    target="_blank"
                    title="the 26th Police District"
                  >
                    the 26th Police District
                  </a>{" "}
                  at 615 E. Girard Avenue
                </li>
                <li>
                  AND TO <u>YOU</u> NEIGHBOR! For caing about your block, your
                  neighbors &amp; your community &amp; participating today!
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr />
          <br /> <br />
          <p className="center">
            "When one neighbors helps another, we strengthen our community"{" "}
            <br />- your block captain, Lisa
            <br />
            <br />
            💛
          </p>
        </section>

        <footer className="blockparty-footer container">
          <div className="blockparty-footer--top">
            <img
              className="sun"
              src={sun}
              alt="Smiling sun giving a double thumbs-up"
            />

            <nav className="blockparty-nav">
              <div className="blockparty-nav--social">
                <a
                  href="https://www.instagram.com/norrisneighbors/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="mailto:myblockcaptain@gmail.com" target="_blank">
                  <i className="fa fa-envelope-o" />
                  <span className="sr-only">Email</span>
                </a>
                <button
                  className="button-icon"
                  onClick={() => {
                    this.scroll(this.top)
                  }}
                >
                  <i className="fa fa-arrow-up" />
                  <span className="sr-only">Back to top</span>
                </button>
              </div>
            </nav>
          </div>
        </footer>
      </main>
    )
  }
}

export default BlockParty
