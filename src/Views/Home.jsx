import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Immersive · Experimental · Spatial</p>
          <h1>
            I craft interactive media that
          </h1>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View projects
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-core"></div>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="section-heading">
          <h2>Selected Projects</h2>
          <p>
            Recent explorations spanning immersive installations, real-time
            visuals, and responsive sculpture.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <p className="feature-label">Immersive</p>
            <h3>Echo Garden</h3>
            <p>
              A sensor-driven light garden translating movement into layered
              color and spatial sound.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-label">XR</p>
            <h3>Threshold Room</h3>
            <p>
              A mixed-reality performance where dancers trigger volumetric
              projections in real time.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-label">Generative</p>
            <h3>Alluvial</h3>
            <p>
              Generative visuals that shift with weather APIs, displayed on a
              20-foot LED wall.
            </p>
          </article>
        </div>
      </section>

      <section className="section category-preview">
        <div className="section-heading">
          <h2>Project categories</h2>
          <p>
            Browse by practice area to see case studies, process notes, and
            commissioned work.
          </p>
        </div>
        <div className="category-grid">
          <div className="category-card">
            <h3>Immersive installations</h3>
            <p>Site-specific environments with light, sound, and spatial UI.</p>
          </div>
          <div className="category-card">
            <h3>XR + spatial media</h3>
            <p>AR activations, live XR performances, and volumetric studies.</p>
          </div>
          <div className="category-card">
            <h3>Generative systems</h3>
            <p>Code-driven visuals informed by data, motion, and behavior.</p>
          </div>
          <div className="category-card">
            <h3>Film + projection</h3>
            <p>Projection design and interactive video for editorial sets.</p>
          </div>
        </div>
        <Link className="button primary" to="/projects">
          Explore all projects
        </Link>
      </section>
    </main>
  );
}

export default Home;
