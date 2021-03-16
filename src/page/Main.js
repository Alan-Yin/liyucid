import { Box, Container, makeStyles } from "@material-ui/core";
import Bar from "../component/Bar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {[...new Array(120)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
    </div>
  );
}

export default Main;
