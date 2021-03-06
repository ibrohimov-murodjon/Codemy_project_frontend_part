import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "../../../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: "50px",
    height: "50px",
    marginRight: "1rem",
    userSelect: "none",
  },
}));

function StaffItem(props) {
  const classes = useStyles();
  
  return (
    <div className="staffComponent">
      <div className="staffhhhh">
        <Avatar className={classes.large} alt="Travis Howard" src={props.img} />
        <div className="staffNames">
          <h3 className="staffName">{props.name}</h3>
          <span className="staffDesgn">{props.surname}</span>
        </div>
      </div>
      <div>
        <p className="staffPrgrph">
          {props.experience}
        </p>
      </div>
    </div>
  );
}

export default StaffItem;
