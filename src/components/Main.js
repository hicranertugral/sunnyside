import React from "react";
import eggImg from "../foto/egg.jpg";
import standImg from "../foto/stand.jpg";
import cheryyImg from "../foto/cherry.jpg";
import madarinImg from "../foto/mandarin.jpg";
import milkbottlesImg from "../foto/milkbottles.jpg";
import orangeImg from "../foto/orange.jpg";
import coneImg from "../foto/cone.jpg";
import sugarcubesImg from "../foto/sugarcubes.jpg";
import client1 from "../foto/image-emily.jpg";
import client2 from "../foto/image-jennie.jpg";
import client3 from "../foto/image-thomas.jpg";

const Main = () => {
  return (
    <main className="main">
      <section id="brand">
        <div className="grid-two-columns">
          <div class="content">
            <h3>Transform your brand</h3>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <span>
              <a className="link link--yellow" href="">
                Learn more
              </a>
            </span>
          </div>
          <img src={eggImg} alt=""></img>
        </div>
      </section>
      <section id="stand">
        {" "}
        <div className="grid-two-columns">
          <img src={standImg} alt=""></img>
          <div class="content">
            <h3>Stand out to the right audience</h3>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <span>
              <a className="link link--red" href="">
                Learn more
              </a>
            </span>
          </div>
        </div>
      </section>
      <section id="graphic-design">
        <div className="grid-two-columns">
          <div className="column-1">
            <img src={cheryyImg} alt=""></img>
            <div className="two-images-column-content">
              <h3>Graphic design</h3>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className="column-2">
            <img src={madarinImg} alt=""></img>
            <div className="two-images-column-content">
              <h3>Photography</h3>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="client-testimonials">
        <div className="client-reviews">
          <h3>Client Testimonials</h3>
          <div className="grid-three-columns">
            <div className="client">
              <img src={client1} alt="" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div>
                <h4>Emily R.</h4>
                <h5>Marketing Director</h5>
              </div>
            </div>
            <div className="client">
              <img src={client3} alt="" />
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <div>
                {" "}
                <h4>Thomas S.</h4>
                <h5>Chief Operating Officer</h5>
              </div>
            </div>
            <div className="client">
              <img src={client2} alt="" />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended
              </p>
              <div>
                <h4>Jennie F.</h4>
                <h5>Business Owner</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="images">
        <div className="grid-four-columns">
          <img src={milkbottlesImg} alt=""></img>
          <img src={orangeImg} alt=""></img>
          <img src={coneImg} alt=""></img>
          <img src={sugarcubesImg} alt=""></img>
        </div>
      </section>
    </main>
  );
};

export default Main;
