import HomeCard from "../components/HomeCard";
import walletimg from "../img/wallet.png";
import profilesettingimg from "../img/profilesetting.png";
import resourcesimg from "../img/resources.png";
import shopimg from "../img/shop.png";
import Grid from "@material-ui/core/Grid";
import { Divider } from "antd";
//import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item lg={6} md={5} sm={4.5}>
          <HomeCard route="/MyWallet" title="MyWallet" img={walletimg} />
        </Grid>
        <Grid item lg={6} md={5} sm={4.5}>
          <HomeCard route="/Shop" title="Shop" img={shopimg} />
        </Grid>
        <Grid item lg={6} md={5} sm={4.5}>
          <HomeCard route="/Resources" title="Resources" img={resourcesimg} />
        </Grid>
        <Grid item lg={6} md={5} sm={4.5}>
          <HomeCard route="/ProfileSettings" title="Profile" img={profilesettingimg} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
