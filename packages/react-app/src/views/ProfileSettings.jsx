import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import PasswordIcon from "@mui/icons-material/Password";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SecurityIcon from "@mui/icons-material/Security";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import { Button, Divider } from "antd";

export default function ProfileSettings() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #cccccc",
      }}
    >
      <List
        sx={{ width: "100%", maxWidth: "360px", bgcolor: "background.paper" }}
        subheader={<ListSubheader>Settings</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <PasswordIcon />
          </ListItemIcon>
          <h4>Change Password: </h4>
          <TextField id="standard-basic" label="new password" variant="standard" />
          <Button>Save</Button>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhotoCameraIcon />
          </ListItemIcon>
          <h4>Change Profile Photo</h4>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <h4>Security</h4>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <h4>Payments</h4>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-notif" primary="Notifications" />
          <Switch
            edge="end"
            onChange={handleToggle("notif")}
            checked={checked.indexOf("notif") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-notif",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-acc" primary="Accessibility" />
          <Switch
            edge="end"
            onChange={handleToggle("acc")}
            checked={checked.indexOf("acc") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-acc",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <h4>About</h4>
        </ListItem>
      </List>
    </div>
  );
}
