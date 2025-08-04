import React from "react";

const referencesData = [
  {
    name: "John Doe",
    position: "Senior Manager, LinkedIn",
    text: "Jayraj is a highly skilled engineer with a passion for excellence. His contributions to our team were invaluable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    position: "Director, LinkedIn",
    text: "Jayraj consistently delivered outstanding results and was a pleasure to work with.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const References = () => {
  return (
    <section id="references" style={{ background: "#f8f8f8", padding: "60px 0" }}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>References</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 32 }}>
          {referencesData.map((ref, idx) => (
            <div key={idx} style={{ flex: "1 1 300px", maxWidth: 400, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 24, opacity: 0.7 }}>
              <img src={ref.image} alt={ref.name} style={{ width: 64, height: 64, borderRadius: "50%", marginBottom: 16 }} />
              <h4 style={{ margin: "8px 0 4px 0" }}>{ref.name}</h4>
              <p style={{ fontStyle: "italic", color: "#555", marginBottom: 8 }}>{ref.position}</p>
              <p style={{ fontSize: "1.05rem", color: "#222" }}>&ldquo;{ref.text}&rdquo;</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <h3>Additional Comments</h3>
          <p>
            Jayraj has received multiple recommendations for his technical and leadership skills. His ability to collaborate and innovate is recognized by colleagues and managers alike.
          </p>
          <p>
            For more references, please visit Jayraj's LinkedIn profile or contact his previous employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default References;
