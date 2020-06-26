import React from "react";
import { SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    overflow: "visible",
  },
});

export default function BarChartIcon() {
  const classes = useStyles();

  return (
    <SvgIcon className={classes.logo}>
      <path
        id="path"
        d="M3,19.333H23V17.111H3v2.222Zm0-5.556H23V11.556H3v2.222ZM3,6V8.222H23V6Z"
        transform="translate(0 0)"
        fill="#fff"
        fillRule="evenodd"
        opacity="0.836"
      />
    </SvgIcon>
  );
}
