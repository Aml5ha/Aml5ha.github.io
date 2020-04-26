import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 1250,
  autoplaySpeed: 5000,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Quotes = () => (
  <section id="quotes">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Favorite Quotes</h1>
          <ul>
            <Slider {...settings}>
              

               <li>
                <blockquote>
                  <p>
                  Just because you're trash doesn't mean you can't do great things. It's called trash can, not trash cannot...
                  </p>
                  <cite>Anonymous</cite>
                </blockquote>
              </li>

               <li>
                <blockquote>
                  <p>
                  When Henry Ford made cheap, reliable cars people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked. 
                  </p>
                  <cite>Elon Musk</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                  Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives.
                  </p>
                  <cite>Socrates</cite>
                </blockquote>
              </li>

               <li>
                <blockquote>
                  <p>
                  Prose is an art form, movies and acting in general are art forms, so is music, painting, graphics, sculpture, and so on. Some might even consider classic games like chess to be an art form. Video games use elements of all of these to create something new. Why wouldn't video games be an art form?
                  </p>
                  <cite>Sam Lake, interview, April 25, 2004</cite>
                </blockquote>
              </li>

               <li>
                <blockquote>
                  <p>
                  Software being 'Done' is like a lawn being 'Mowed'.
                  </p>
                  <cite>Jim Benson</cite>
                </blockquote>
              </li>


              <li>
                <blockquote>
                  <p>
                  Solving a problem simply means representing it so as to make the solution transparent. 
                  </p>
                  <cite>Herbert Simon</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    Those who break rules are considered scum. Those who abandon their friends are worse than scum.
                  </p>
                  <cite>Kakashi Hatake </cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  Laziness is the mother of all bad habits. But ultimately she is a mother and we should respect her.
                  </p>
                  <cite>Shikamaru Nara</cite>
                </blockquote>
              </li>


            </Slider>
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Quotes;
