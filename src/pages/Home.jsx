import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fefcf8", color: "#333" }}>
      <header style={{ padding: "2rem", backgroundColor: "#f2e6da", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎶 Welcome to Roadie</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Your local music scene, beautifully organized.
        </p>
      </header>

      <section style={{ padding: "2rem" }}>
        <h2 style={{ color: "#a64ac9" }}>How It Works</h2>
        <p>
          Roadie connects artists and venues with real-time calendars, booking tools, and
          performance profiles. Artists can manage availability, get discovered, and receive
          payments — all from one sleek platform.
        </p>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#fff2cc" }}>
        <h2 style={{ color: "#cc6600" }}>Featured Artists</h2>
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 200px", backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px" }}>
            <h3>The Suntones</h3>
            <p>Indie Folk</p>
            <a href="/artist/suntones">View Profile</a>
          </div>
          <div style={{ flex: "1 1 200px", backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px" }}>
            <h3>Midnight Grove</h3>
            <p>Neo-Soul</p>
            <a href="/artist/midnightgrove">View Profile</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem" }}>
        <h2 style={{ color: "#338833" }}>Sign Up</h2>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button style={{ padding: "1rem 2rem", backgroundColor: "#88cc88", border: "none", borderRadius: "5px" }}>
            Sign up as Artist
          </button>
          <button style={{ padding: "1rem 2rem", backgroundColor: "#88aacc", border: "none", borderRadius: "5px" }}>
            Sign up as Venue
          </button>
        </div>
      </section>
    </div>
  );
}
