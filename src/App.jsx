import './App.css';

function App() {
  const appName = "CycleCare";

  return (
    <div class name = "dashboard">
      <header>
        <h1>{appName}</h1>
        <p>Your personal cycle tracking companion</p>
      </header>

      <main>
        <h2>Welcome to CycleCare</h2>

        <section className = "cycle-summary">
          <h3>Cycle Overview</h3>
          <p>Cycle Day: 12</p>
          <p>Next Period: In 16 days</p>
          <p>Average Cycle Length: 28 days</p>
        </section>

        <section className = "quick-actions">
          <h3>Quick Actions</h3>
          <button>Log Period</button>
          <button>View Calendar</button>
          <button>Track Symptoms</button>
        </section>
      </main>
    </div>
  );
}

export default App;