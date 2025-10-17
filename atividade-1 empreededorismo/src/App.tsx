import "./App.css";
import Navbar from "./template/navbar";
import Sidebar from "@/template/sidebar";

function App() {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
