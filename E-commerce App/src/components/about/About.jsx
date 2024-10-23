import Footer from "../home/footer/Footer";
import "./About.css";

function About() {
    return(
        <div className="about-us">
        <section className="about-section">
          <div></div>
        </section>
  
        <section className="features-section">
          <div className="feature">
            <div className="feature-icon">🛍️</div>
            <h3 className="feature-title">SHOPING</h3>
            <p className="feature-text">
              When our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📷</div>
            <h3 className="feature-title">ABOUT</h3>
            <p className="feature-text">
              When our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">✈️</div>
            <h3 className="feature-title">TRAVEL</h3>
            <p className="feature-text">
              When our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    );
  };
export default About;