import Header from "@/components/header";
import Footer from "@/components/footer";

import styles from "@/styles/Floasis.module.scss";

export default function Floasis() {
  return (
    <div className={styles.Floasis}>
      <div className="container-wrapper">
        <Header />
        <div className="container">
          <div className={styles.title}>
            <h1>Floasis</h1>
            <p>UX - UI DESIGN</p>
          </div>
          <div className={styles.intro}>
            <div className={styles.project}>
              <h2>The Project</h2>
              <p>
                FloAsis is an app that helps busy people find and purchase
                flowers for themselves or their loved ones, allowing them to
                schedule a specific delivery date to ensure they never miss a
                special occasion.
              </p>
            </div>
            <div className={styles.specs}>
              <div className={styles.role}>
                <span>ROLE</span>
                <p>UX-UI Designer</p>
              </div>
              <div className={styles.duration}>
                <span>DURATION</span>
                <p>July-August 2023</p>
              </div>
            </div>
          </div>

          <img
            className={styles.logo}
            src="/images/floasis-logo2.png"
            alt="floasis logo"
          />

          <div className={styles.problemGoal}>
            <div className={styles.problemText}>
              <div className={styles.problem}>
                {/* <img src="/images/problem.svg" alt="" /> */}
                <span>THE PROBLEM</span>
                <p>
                  Busy workers lack the time necessary to go to local flower
                  stores.
                </p>
              </div>
              <div className={styles.goal}>
                <span>THE GOAL</span>
                <p>
                  Design an app to easily browse and purchase flowers, plants
                  and bouquets quickly and easily with the added convenience of
                  scheduling delivery on a specific date.
                </p>
              </div>
              <div className={styles.goal}>
                <span>RESPONSIBILITIES</span>
                <p>
                  User research, wireframing, low and high fidelity prototyping,
                  conducting usability studies, accounting for accessibility and
                  iterating on designs.
                </p>
              </div>
            </div>

            <img
              className={styles.problemImage}
              src="/images/home-mockup1.png"
              alt="mockup of floasis app"
            />
          </div>
          <div className={styles.designProcess}>
            <h2>My Design Process</h2>

            <img src="/images/design-process.png" alt="design process" />
          </div>
          <div className={styles.phase}>
            {/* <hr /> */}
            <h2>Understanding the user</h2>
            {/* <hr /> */}
          </div>
          <div className={styles.summary}>
            <img src="/images/mockup3.png" alt="floasis logo" />
            <div className={styles.summaryInfo}>
              <h3>User research</h3>
              <p>
                I began conducting <strong>user research</strong>, identifying
                the user demographic that would benefit from this app and
                pinpointing the
                <strong> user pain points</strong> that have arisen. <br />{" "}
                <br />A <strong>primary user group </strong>
                identified through research was busy adults who don’t have time
                to go to the local stores to buy flowers as gifts or for
                themselves.
              </p>
            </div>
          </div>

          <div className={styles.research}>
            {/* <hr /> */}
            <div className={styles.researchTitle}>
              <h3>Pain Points</h3>
            </div>
            <div className={styles.painpointsContainer}>
              <div className={styles.painpoint}>
                <h2>1.</h2>
                <h3>Time</h3>
                <p>
                  Busy professionals are too busy to go to local stores to
                  choose and buy flowers.
                </p>
              </div>
              <div className={styles.painpoint}>
                <h2>2.</h2>
                <h3> Delivery scheduling</h3>
                <p>
                  Users want to make sure their flowers will get to destination
                  on a chosen specific date.
                </p>
              </div>
              <div className={styles.painpoint}>
                <h2>3.</h2>
                <h3>Favourites</h3>
                <p>
                  Users want to be able to save their favourite products in a
                  separate section of the app for later purchases.
                </p>
              </div>
            </div>
            {/* <hr /> */}
            <div className={styles.personasContainer}>
              <div className={styles.persona}>
                <h3>User Persona: Donata</h3>

                <p>
                  Donata is a busy professional who needs a reliable flowers
                  delivery app to help her making presents for her loved ones on
                  their special day because she doesn’t have the time to go to
                  local stores.
                </p>
                <div className={styles.personaImg}>
                  <img src="/images/persona.png" alt="image of a woman" />
                </div>
              </div>
            </div>
            {/* <hr /> */}
            <div className={styles.journeyContainer}>
              <div className={styles.journey}>
                <h3>Donata's user journey</h3>

                <p>
                  Mapping Donata’s user journey revealed how convenient it is to
                  do everything with one app: purchasing, tracking the order and
                  get a notification message for completed delivery.
                </p>
                <div className={styles.journeyImg}>
                  <img src="/images/journey.png" alt="" />
                </div>
              </div>
            </div>
            {/* <hr /> */}
            <div className={styles.storyboards}>
              <h3>User storyboards</h3>
              <div className={styles.storyImg}>
                <img src="/images/storyboard1.jpg" alt="" />
                <img src="/images/storyboard2.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.phase}>
            {/* <hr /> */}
            <h2>Starting the design</h2>
            {/* <hr /> */}
          </div>
          <div className={styles.paperContainer}>
            <div className={styles.paperText}>
              <h3>Paper Wireframes</h3>
              <p>
                Here are the wireframes for the homepage. I aimed to incorporate
                sections that would be most useful for our target users,
                including Categories, a Search bar, Special Occasions, Tracking
                Orders and Most Popular.
              </p>

              <p className={styles.note}>
                * Stars were used to mark the element of each sketch that would
                be used in the initial digital wireframe.
              </p>
            </div>
            <div className={styles.paperImg}>
              <img src="/images/paper.jpg" alt="image of paper wireframes" />
            </div>
          </div>
          <div className={styles.digitalContainer}>
            {/* <hr /> */}
            <h3>Digital Wireframes</h3>
            <div className={styles.digitalWireframe1}>
              <p>
                Here is the refined version of the <strong>Homepage</strong>.{" "}
                <br />
                As the initial design phase progressed, I ensured that screen
                designs were based on user needs and research findings.
              </p>
              <div className={styles.digitalImg}>
                <img src="/images/digital1.png" alt="digital wireframe" />
              </div>
            </div>
            <div className={styles.digitalWireframe2}>
              <p>
                The <strong>Tracking Order page</strong> allows users to easily
                monitor the status and progress of their orders.
              </p>
              <div className={styles.digitalImg}>
                <img src="/images/digital2.png" alt="digital wireframe" />
              </div>
            </div>

            <div className={styles.allWireframes}>
              <img src="./images/wireframes.png" alt="" />
            </div>
          </div>
          <hr />
          <div className={styles.protoAndUsability}>
            <div className={styles.loFiProto}>
              <div className={styles.lofiImg}>
                <img src="/images/lofi.gif.gif" alt="floasis prototype" />
              </div>
            </div>

            <div className={styles.usability}>
              <h3>Usability study </h3>
              <p>
                I conducted <strong>two rounds of usability studies</strong>.
                Findings from the first study helped guided the designs from
                wireframes to mockups. The second study used a high fidelity
                prototype and revealed what aspects of the mockups needed
                refining.
              </p>
              <span>First round:</span>
              <ul>
                <li>
                  Users want to <strong>easily find a specific product</strong>
                </li>
                <li>
                  Users want to find the Tracking Order function in an{" "}
                  <strong>intuitive way</strong>
                </li>
                <li>
                  Users found the <strong>checkout page too long</strong>
                </li>
              </ul>
              <span>Second round</span>
              <ul>
                <li>
                  Users found transitions between screens a bit slow sometimes
                </li>
              </ul>
              <a
                href="https://www.figma.com/proto/lEcrJ991WDK4SfjQmamDw5/FloAsis-digital-wireframes?page-id=0%3A1&type=design&node-id=2-4&viewport=187%2C575%2C0.45&t=EorYFOr18AislXzh-1&scaling=scale-down&starting-point-node-id=3%3A151&show-proto-sidebar=1&mode=design"
                target="_blank"
              >
                👉🏼 Click here to view the Low Fidelity prototype
              </a>
              <a
                href="https://www.figma.com/proto/lEcrJ991WDK4SfjQmamDw5/FloAsis-digital-wireframes?page-id=0%3A1&type=design&node-id=2-4&viewport=187%2C575%2C0.45&t=EorYFOr18AislXzh-1&scaling=scale-down&starting-point-node-id=3%3A151&show-proto-sidebar=1&mode=design"
                target="_blank"
              >
                👉🏼 Click here to view the full Usability Study
              </a>
            </div>
          </div>
          <div className={styles.phase}>
            <h2>Refining the design</h2>
            {/* <hr /> */}
          </div>
          <div className={styles.refineContainer}>
            <div className={styles.refine1}>
              <p>
                Users found the{" "}
                <strong>
                  Tracking Order functionality non intuitive to locate
                </strong>
                , and they felt it could become obscured within the profile
                details. <br />
                <br /> Given its critical importance for the app,{" "}
                <strong>
                  I opted to relocate it to the bottom menu bar
                </strong>{" "}
                for effortless and immediate access.
              </p>
              <div className={styles.refineImg}>
                <img
                  src="/images/profile-usability.png"
                  alt="profile page before and after"
                />
              </div>
            </div>
            <div className={styles.refine2}>
              <p>
                Dividing the checkout process into{" "}
                <strong>two distinct screens</strong> enhances user clarity
                during the journey.
              </p>
              <div className={styles.refineImg}>
                <img
                  src="/images/profile-usability2.png"
                  alt="checkout page before and after"
                />
              </div>
            </div>
            <div className={styles.end}>
              <img src="/images/floasis-banner2.png" alt="floasis screens" />
            </div>
            <div className={styles.sticker}>
              <img src="/images/sticker-sheet.png" alt="sticker sheet" />
            </div>
            <div className={styles.allWireframes2}>
              <img src="/images/mockups.png" alt="final mockups" />
            </div>
          </div>
          <div className={styles.phase}>
            <h2>Final Result</h2>
            {/* <hr /> */}
          </div>
          <div className={styles.result}>
            <div className={styles.resultImg}>
              <img src="/images/floasis-gif.gif" alt="" />
            </div>
            <a
              href="https://www.figma.com/proto/lEcrJ991WDK4SfjQmamDw5/FloAsis-digital-wireframes?page-id=94%3A1210&type=design&node-id=250-4043&viewport=1328%2C780%2C0.92&t=SQg09RcfDYuVxrI0-1&scaling=scale-down&starting-point-node-id=103%3A1818&mode=design"
              target="_blank"
            >
              👉🏼 Go to the Hi-Fi prototype
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
