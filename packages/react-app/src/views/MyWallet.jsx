import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";
import { PieChart } from "react-minimal-pie-chart";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Address, Balance, Wallet, TransactionsTable } from "../components";
import Grid from "@material-ui/core/Grid";
export default function MyWallet({
  purpose,
  address,
  mainnetProvider,
  userSigner,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");
  const { currentTheme } = useThemeSwitcher();
  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <Grid container rowSpacing={1} columnSpacing={{ lg: 1, sm: 2, md: 3 }}>
        <Grid item lg={4} sm={3}>
          <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
            <h2>Transactions:</h2>
            <TransactionsTable />
          </div>
        </Grid>
        <Grid item lg={4} sm={3}>
          <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
            <h2>MyWallet</h2>
            <Divider />
            Your Address:
            <Address address={address} ensProvider={mainnetProvider} fontSize={16} />
            <Divider />
            {/* use utils.formatEther to display a BigNumber: */}
            <h2>Your Balance: {yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</h2>
            <div>OR</div>
            <Balance address={address} provider={localProvider} price={price} />
            <Divider />
            Your Contract Address:
            <Address
              address={readContracts && readContracts.YourContract ? readContracts.YourContract.address : null}
              ensProvider={mainnetProvider}
              fontSize={16}
            />
            <Divider />
            <Wallet
              address={address}
              provider={localProvider}
              signer={userSigner}
              ensProvider={mainnetProvider}
              price={price}
              color={currentTheme === "light" ? "#1890ff" : "#2caad9"}
              size={22}
              padding={"0px"}
            />
            <Divider />
          </div>
        </Grid>
        <Grid item lg={4} sm={3}>
          <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
            <h2>Spending</h2>
            <Divider />
            <PieChart
              data={[
                { title: "Food", value: 21, color: "#E38627" },
                { title: "Books", value: 36, color: "#C13C37" },
                { title: "Merch", value: 43, color: "#FFFACD" },
              ]}
              radius={40}
              labelStyle={{
                fontSize: "5px",
                fontWeight: "100",
                fontColor: "FFFFFF",
              }}
              label={data => data.dataEntry.title + ", " + data.dataEntry.value + "%"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
