import { RewardsCarousel, ShopCarousel } from "../components";
import { Divider } from "antd";
export default function Shop() {
  return (
    <>
      <div>
        <h2>Shop:</h2>
        <ShopCarousel />
      </div>
      <Divider />
      <div>
        <h2>Rewards:</h2>
        <RewardsCarousel />
      </div>
    </>
  );
}
