import Main from "./page/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import logo from "./asset/logo.png";
import Bar from "./component/Bar.js";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Dancing Script"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Bar />
        <img
          style={{ resizeMode: "contain", width: 100 }}
          src={logo}
          alt="Background"
        />

        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
