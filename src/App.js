import "./App.css";
import Header from "./components/Header/Header";
import LandingImage from "./images/landing-image.jpg";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="wrap">
    
      <div className="landing-wrap">
        <img src={LandingImage} />
        <h1>BIG NEWS: Summer Camps 2021</h1>
        <h1 className="summer"> SUMMER REGISTRATION IS OPEN!</h1>
        <Button
          onClick={() =>
            (window.location =
              "https://www.ultracamp.com/clientlogin.aspx?idCamp=662&campCode=cha")
          }
          variant="contained"
          color="secondary"
          size="large"
        >
          Register Now
        </Button>
      </div>
      <div className="second-section">
        <div className="divider">
          <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-pool-jump-600x.jpg" />
          <p>
            A Place Apart… “Come with me by yourselves to a quiet place and get
            some rest.” We know the importance of time away, apart from the
            constant blur of the everyday. Camp Hanover is one of those “quiet
            places.” Things are different here. This is a place where community
            is nurtured. Where you can experience your presence in the natural
            world. And where central Virginians have a unique opportunity to
            gather in “a place apart.” Come, your invitation awaits…
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
