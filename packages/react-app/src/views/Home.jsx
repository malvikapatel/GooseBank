import HomeCard from "../components/HomeCard";
import walletimg from "../img/wallet.png";
import profilesettingimg from "../img/profilesetting.png";
import resourcesimg from "../img/resources.png";
import shopimg from "../img/shop.png";
import Grid from "@material-ui/core/Grid";
//import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ lg: 1, sm: 2, md: 3 }}>
        <Grid item lg="auto">
          <HomeCard route="/MyWallet" title="MyWallet" img={walletimg} />
        </Grid>
        <Grid item lg="auto">
          <HomeCard route="/Shop" title="Shop" img={shopimg} />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ lg: 1, sm: 2, md: 3 }}>
        <Grid item lg="auto">
          <HomeCard route="/Resources" title="Resources" img={resourcesimg} />
        </Grid>
        <Grid item lg="auto">
          <HomeCard route="/ProfileSettings" title="Profile" img={profilesettingimg} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
