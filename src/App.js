import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Journal</h1>
      </header>
      <main>
        <form action="submit">
          <h2>NEW ENTRY</h2>
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
          <label htmlFor="notes">Notes</label>
          <input type="text" name="motto" id="motto" />
          <button>Create</button>
        </form>

        <div className="counters">
          <h3>All Entries</h3>
          <span>3</span>
          <h3> Favorites</h3>
          <span>1</span>
        </div>

        <section>
          <span>Feb 27, 2028</span>
          <h4>Thats life in the city</h4>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptate neque dolor sapiente, dignissimos saepe velit
            mollitia beatae blanditiis dolorem minus ipsam enim repudiandae cum
            itaque. Corporis minima unde earum?
          </p>
        </section>
      </main>
      <footer>
        <span>Journa App-2028</span>
      </footer>
    </>
  );
}

export default App;
