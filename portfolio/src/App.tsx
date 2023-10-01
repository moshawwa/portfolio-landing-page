import "./App.css";
import FeaturdWork from "./components/homepage/FeaturdWork";
import FrontPage from "./components/homepage/FrontPage";
import RecentPosts from "./components/homepage/RecentPosts";

function App() {
  return (
    <>
      <FrontPage />
      <RecentPosts />
      <FeaturdWork />
    </>
  );
}

export default App;
