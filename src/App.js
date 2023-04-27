import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import Emails from "./components/Email";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      <div className="flex">
        {/* LeftSidebar */}
        <LeftSide />
        <div className="w-full">
          {/* Inbox */}
          <Inbox />
          {/* Emails */}
          <Emails />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
