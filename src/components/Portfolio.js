import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Retweet from "../assets/images/portfolio/retweet.gif";
import Unfollow from "../assets/images/portfolio/unfollow.gif";
import Cart from "../assets/images/portfolio/shopping_cart.gif";
import RaceCar from "../assets/images/portfolio/autocar.gif";
import SortNum from "../assets/images/portfolio/icon_math_1.gif";
import Instagram from "../assets/images/portfolio/unfollow2.gif";
import Fortune from "../assets/images/portfolio/top100.gif";


const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Projects!</h1>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="SortNum" title="">  
                <img alt="" src={SortNum} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>SortNum</h5>
                    <p>A mobile game made using Unity Game Engine</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus/>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="Autonomous-Race-Cars" title="">
                <img alt="" src={RaceCar} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>F1/10 Autonomous Race Car</h5>
                    <p>Making my dreams a reality one step at a time</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="Universal-Shopping-Cart" title="">
                <img alt="" src={Cart} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Universal Shopping Cart</h5>
                    <p>Focusing on the Human-Computer Interaction</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="Twitter-Undo-Retweets" title="">
                <img alt="" src={Retweet} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Twitter: Undo Retweets and Likes</h5>
                    <p>Undo recent retweets and favorites</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>


          <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="Twitter-Unfollow-List" title="">
                  <img alt="" src={Unfollow} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Twitter: Unfollow List</h5>
                      <p>Generate a file with the names of twitter handles that don't follow you back</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <FaPlus />
                  </div>
                </a>
              </div>
            </div>         

          <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="Instagram-Unfollow-List" title="">
                  <img alt="" src={Instagram} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Instagram: Unfollow List</h5>
                      <p>Photography</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <FaPlus />
                  </div>
                </a>
              </div>
            </div>         

            <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="Fortune-Best" title="">
                      <img alt="" src={Fortune} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Fortune Top 100 Places to Work</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <FaPlus />
                      </div>
                    </a>
                  </div>
                </div>         


         

        </div>
      </div>

      {/* 


         <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-05" title="">
                <img alt="" src={Farmerboy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Farmer Boy</h5>
                    <p>Branding</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-06" title="">
                <img alt="" src={Girl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Girl</h5>
                    <p>Photography</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

        <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-07" title="">
                        <img alt="" src={Origami} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Origami</h5>
                            <p>Illustrration</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <FaPlus />
                        </div>
                      </a>
                    </div>
                  </div>


       <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title="">
                    <img alt="" src={Retrocam} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <FaPlus />
                    </div>
                  </a>
                </div>
              </div>


















      <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-coffee.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Coffee Cup</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag /> Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-console.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Console</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-intothelight.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-farmerboy.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-girl.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Girl</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-origami.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Origami</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Illustration
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-retrocam.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div> */}
    </div>
  </section>
);

export default Portfolio;
