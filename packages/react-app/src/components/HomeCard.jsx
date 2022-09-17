import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
function HomeCard(props) {
  return (
    <>
      <div>
        <Link to={props.route}>
          <Tooltip title={props.title} placement="top">
            <img src={props.img} height={"50%"} width={"50%"} />
          </Tooltip>
        </Link>
      </div>
    </>
  );
}
export default HomeCard;
