import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function School() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">School Name</Typography>
        <Typography>Student Survey</Typography>

        <Typography>Parent Survey</Typography>
        <Typography>Graduation Rate</Typography>
      </CardContent>
    </Card>
  );
}
