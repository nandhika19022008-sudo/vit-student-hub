import { useState } from "react";
import "./App.css";

const links = [
  {
    name: "VTOP",
    category: "Academic",
    description:
      "Check attendance, marks, timetable and other student services.",
    url: "https://vtopcc.vit.ac.in/vtop/login"
  },
  {
    name: "LMS",
    category: "Academic",
    description:
      "Access course material, assignments, quizzes and submissions.",
    url: "https://lms.vit.ac.in/login/index.php"
  },
  {
    name: "VIT Online Courses - CC1",
    category: "Courses",
    description:
      "Access VIT online graded courses.",
    url: "https://vitolcc1.vit.ac.in/"
  },
  {
    name: "VITColab",
    category: "Practice",
    description:
      "Practice coding and technical problems.",
    url: "https://admin.vitcolab945.examly.io/"
  },
  {
    name: "VIT EventHub",
    category: "Events",
    description:
      "Find and register for VIT events.",
    url: "https://eventhubcc.vit.ac.in/EventHub/"
  },
  {
    name: "V Help",
    category: "Student Life",
    description:
      "Study materials, campus services, clubs and more.",
    url: "https://www.vhelpcc.com/"
  }
];

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredLinks = links.filter(function (link) {
    return (
      link.name.toLowerCase().includes(searchText.toLowerCase()) ||
      link.category.toLowerCase().includes(searchText.toLowerCase()) ||
      link.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="app">

      {/* Header */}
      <header>
        <div className="logo">🎓</div>

        <h1>VIT Student Hub</h1>

        <p>
          One page. All your important VIT links.
        </p>
      </header>


      {/* Search */}
      <div className="search-area">
        <input
          type="text"
          placeholder="Search for a portal..."
          value={searchText}
          onChange={function (event) {
            setSearchText(event.target.value);
          }}
        />
      </div>


      {/* Portal Cards */}
      <main>
        <h2>Quick Access</h2>

        <div className="cards">

          {filteredLinks.map(function (link) {
            return (
              <div className="card" key={link.name}>

                <div className="card-icon">

                  {link.category === "Academic" && "📚"}

                  {link.category === "Courses" && "📖"}

                  {link.category === "Practice" && "💻"}

                  {link.category === "Events" && "🎉"}

                  {link.category === "Student Life" && "🏫"}

                </div>


                <div className="card-content">

                  <p className="category">
                    {link.category}
                  </p>

                  <h3>
                    {link.name}
                  </h3>

                  <p>
                    {link.description}
                  </p>

                </div>


                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open →
                </a>

              </div>
            );
          })}


          {/* No Search Result */}
          {filteredLinks.length === 0 && (
            <p className="no-result">
              No portal found.
            </p>
          )}

        </div>
      </main>


      {/* About Section */}
      <section className="about">

        <h2>
          Why VIT Student Hub?
        </h2>

        <p>
          VIT students use different portals for academics,
          assignments, courses, practice, events and student
          services. This website keeps the important links
          together in one simple place.
        </p>

      </section>


      {/* Footer */}
      <footer>

        <p>
          Developed by Nandhika S | VIT Student ✨
        </p>

        <p>
          VIT Student Hub
        </p>

      </footer>

    </div>
  );
}

export default App;