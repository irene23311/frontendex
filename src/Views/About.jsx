function About() {
  return (
    <main className="page">
      <section className="section about-hero">
        <div className="section-heading">
          <h1>About</h1>
          <p>
            I am an interactive media artist building worlds that respond to
            movement, data, and touch.
          </p>
        </div>
      </section>

      <section className="section about-grid">
        <div className="about-panel">
          <h2>Artist statement</h2>
          <p>
            I explore how systems can feel alive. My work invites audiences to
            co-author the piece through their presence, revealing new patterns
            in light, sound, and spatial behavior.
          </p>
        </div>
        <div className="about-panel">
          <h2>Selected exhibitions</h2>
          <ul>
            <li>Digital Futures Festival · 2024</li>
            <li>MoMA PS1 Open Studios · 2023</li>
            <li>Lucid Light LA · 2022</li>
            <li>Ars Electronica Campus · 2021</li>
          </ul>
        </div>
        <div className="about-panel">
          <h2>Capabilities</h2>
          <ul>
            <li>Interactive installation direction</li>
            <li>Realtime visuals + creative coding</li>
            <li>Spatial audio + sound design</li>
            <li>Workshops + residencies</li>
          </ul>
        </div>
      </section>

      <section className="section contact-strip">
        <div>
          <h2>Let’s collaborate</h2>
          <p>
            Available for commissions, residencies, and speaking engagements.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@islamoreno.art">
          Start a project
        </a>
      </section>
    </main>
  );
}

export default About;
