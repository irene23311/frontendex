const categories = [
  {
    title: "Immersive installations",
    summary:
      "Large-scale environments blending kinetic sculpture, light, and responsive audio.",
    items: [
      { name: "Echo Garden", year: "2024" },
      { name: "Tidal Loop", year: "2023" },
      { name: "Breath Field", year: "2022" },
    ],
  },
  {
    title: "XR + spatial media",
    summary:
      "Realtime projections, volumetric capture, and spatial narrative design.",
    items: [
      { name: "Threshold Room", year: "2024" },
      { name: "Phase Portrait", year: "2023" },
      { name: "Mirror Chorus", year: "2021" },
    ],
  },
  {
    title: "Generative systems",
    summary:
      "Data-informed visuals and living systems that evolve over time.",
    items: [
      { name: "Alluvial", year: "2024" },
      { name: "Weatherline", year: "2022" },
      { name: "Lumen Stack", year: "2020" },
    ],
  },
  {
    title: "Film + projection",
    summary:
      "Editorial, music, and stage visuals with layered motion treatments.",
    items: [
      { name: "Glasshouse", year: "2023" },
      { name: "Signal Bloom", year: "2022" },
      { name: "Nocturne", year: "2019" },
    ],
  },
];

function Projects() {
  return (
    <main className="page">
      <section className="section projects-hero">
        <div className="section-heading">
          <h1>Projects</h1>
          <p>
            A catalogue of commissions and personal studies across interactive
            media. Each category includes process notes, system diagrams, and
            installation documentation.
          </p>
        </div>
      </section>

      <section className="section projects-grid">
        {categories.map((category) => (
          <article className="project-category" key={category.title}>
            <div className="category-heading">
              <h2>{category.title}</h2>
              <p>{category.summary}</p>
            </div>
            <div className="project-cards">
              {category.items.map((item) => (
                <div className="project-card" key={item.name}>
                  <div className="project-swatch"></div>
                  <div className="project-info">
                    <h3>{item.name}</h3>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
