import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <section className={`${styles.hero}`}>
      <div className={styles.grid}>
        <header className={styles.header}>
          <Image src={"/logo.png"} alt="Logo" width={200} height={45} />
          <div className={styles.header_content}>
            <nav className={styles.header_nav}>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">PAGES</a></li>
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="/">ABOUT US</a></li>
                <li><a href="/">CONTACT</a></li>
              </ul>
            </nav>
            <div className={styles.header_icons}>
              <Image src={"/search.svg"} alt="Search" width={24} height={24} />
              <Image src={"/notification.svg"} alt="Notifications" width={24} height={24} />
            </div>
          </div>
        </header>
      </div>
      <div className={styles.hero_content}>
        <h1>ASK EXPERTS</h1>
        <h6>Are you a driven, passionate leader? Join our brilliant consultant team.</h6>
        <button>LEARN MORE</button>
      </div>
    </section>
    <section className={`${styles.workflow} ${styles.grid}`}>
      <div className={`${styles.section_container} ${styles.section_padding}`}>
        <h2 className="section-title">GET THINGS DONE, EASY!</h2>
        <hr className="section-divider"/>
        <p className="section-description">Among the other things Fibonacci introduced to the Western world was a sequence of num
  bers discovered by 6th century Indian mathematicians. In that sequence each number is the
  sum of the previous two numbers</p>
      </div>
      <div className={styles.workflow_showcase}>
        <div className={styles.showcase_card}>
          <div className={styles.card_image_container}>
            <Image src={"/icon-research.png"} alt="Research" width={130} height={130} />
          </div>
          <span className="card-title">Research</span>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.card_image_container}>
            <Image src={"/icon-consulting.png"} alt="Consulting" width={200} height={200} />
          </div>
          <span className="card-title">Consulting</span>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.card_image_container}>
            <Image src={"/icon-improving.png"} alt="Improving" width={130} height={130} />
          </div>
          <span className="card-title">Improving</span>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.card_image_container}>
            <Image src={"/icon-solving.png"} alt="Solving" width={150} height={150} />
          </div>
          <span className="card-title">Solving</span>
        </div>
      </div>
    </section>
    <section className={styles.grid}>
      <div className={`${styles.section_container} ${styles.section_padding}`}>
        <h2 className="section-title">WE MANAGE IT FOR YOU</h2>
        <hr className="section-divider"/>
        <p className="section-description">Among the other things Fibonacci introduced to the Western world was a sequence of num
  bers discovered by 6th century Indian mathematicians. In that sequence each number is the
  sum of the previous two numbers</p>
      </div>
      <div className={styles.features_showcase}>
        <div className="feature-card">
          <Image src={"/documents.png"} alt="Feature 1" width={50} height={50} />
          <div className="feature-card-container">
            <span className="feature-stat">46</span>
            <span className="feature-description">Documents</span>
          </div>
        </div>
        <div className="feature-card">
          <Image src={"/community.png"} alt="Feature 2" width={50} height={50} />
          <div className="feature-card-container">
            <span className="feature-stat">206</span>
            <span className="feature-description">Community</span>
          </div>
        </div>
        <div className="feature-card">
          <Image src={"/connections.png"} alt="Feature 3" width={50} height={50} />
          <div className="feature-card-container">
            <span className="feature-stat">63</span>
            <span className="feature-description">Connections</span>
          </div>
        </div>
        <div className="feature-card">
          <Image src={"/clients.png"} alt="Feature 4" width={50} height={50} />
          <div className="feature-card-container">
            <span className="feature-stat">98</span>
            <span className="feature-description">Clients</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="testimionials-title">
        <Image src={"/quote.svg"} alt="Testimonials" width={30} height={30} />
        <h3>TESTIMONIALS</h3>
      </div>
      <h3>We’ve been working with Matisia since 2006. It’ been an excellent relationship.</h3>
      <div className="testimonial-author">
        <Image src={"/author.jpg"} alt="Author" width={100} height={100} />
        <span>Barney Moore</span>
      </div>
    </section>
    <section>
      <div className="info-card">
        <h2>72</h2>
        <h4>PROJECTS COMPLETED</h4>
        <p>Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Don ec porta, mi ut facilisis ullamcorper, magna risus vehi cula augue, eget faucibus magna massa at justo.</p>
        <button>READ MORE</button>
      </div>
      <div className="info-card">
        <h2>94</h2>
        <h4>CLIENTS SATISFIED</h4>
        <p>Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Don ec porta, mi ut facilisis ullamcorper, magna risus vehi cula augue, eget faucibus magna massa at justo.</p>
        <button>READ MORE</button>
      </div>
    </section>
    <section>
      <h2>Are You Satisfied?</h2>
      <p>Meet the most advanced live website builder on WordPress. Featuring latest web technologies,enjoyable UX and the most beautiful design trends.</p>
    </section>
    <footer>
      <div className="footer-upper">
        <div className="footer-menu footer-component">
          <h6>MENU</h6>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-search footer-component">
          <h6>SEARCH</h6>
          <div>
            <p>Looking for article or guideline for growing your business?</p>
            <input type="text" placeholder="Search" className="footer-searchbar"/>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <Image src={"/light-logo.png"} alt="Logo" width={200} height={50} />
        <p>Copyright - Made with Massive Dynamic</p>
      </div>
    </footer>
  </>
  );
}
