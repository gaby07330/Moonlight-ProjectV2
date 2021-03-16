import {createMuiTheme} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {

        type: "dark",

        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: green[700],
        },
    },

});

export default theme;