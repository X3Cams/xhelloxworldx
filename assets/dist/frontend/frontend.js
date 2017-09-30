import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ion": {
        "color": "red"
    },
    "br": {
        "clear": "both"
    },
    "h1": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10
    },
    "h2": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h3": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h4": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h5": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h6": {
        "float": "left",
        "lineHeight": 1.1,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h1::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "h2::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "h3::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "h4::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "h5::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "h6::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px rgb(59, 255, 0)"
    },
    "body": {
        "background": "url('/assets/dist/images/cheshire_cat_bg.png')",
        "fontSize": 14
    },
    "bodyprimarylayout": {
        "background": "url('/assets/dist/images/cheshire_cat_bg.png')",
        "fontSize": 14
    },
    "anavbar-brand:hover": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "anavbar-brand:after": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "dropdown-menu > li > a:hover": {
        "textShadow": "1px 1px 1px #000000"
    },
    "carousel-example-generic": {
        "marginBottom": 20
    },
    "toolbar-tool-icons": {
        "float": "left",
        "width": "75%",
        "textAlign": "center"
    },
    "toolbar-tool-icons img": {
        "maxHeight": 30,
        "minWidth": 20,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "anavbar-brand": {
        "textShadow": "0 0 1px #a8ffff",
        "color": "#a8ffff"
    },
    "tagline": {
        "clear": "right",
        "textShadow": "0 0 2px rgb(116, 255, 8)",
        "fontStyle": "italic",
        "lineHeight": 1.5
    },
    "navbar": {
        "boxShadow": "0 0 8px #a8ffff"
    }
});