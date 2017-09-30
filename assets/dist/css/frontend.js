import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "fontSize": 10,
        "WebkitTapHighlightColor": "transparent",
        "position": "relative",
        "minHeight": "100%",
        "boxSizing": "border-box"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "sans-serif",
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#333",
        "backgroundColor": "#eee",
        "background": "url(\"/assets/dist/images/cheshire_cat_bg.png\") center fixed",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "overflowY": "scroll",
        "overflowX": "hidden",
        "textAlign": "center"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block",
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 60,
        "backgroundColor": "#f5f5f5"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block",
        "marginBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "backgroundColor": "rgba(15,15,15,0.3)"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline",
        "overflow": "hidden",
        "height": 20,
        "marginBottom": 20,
        "backgroundColor": "#0a0a0a",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,0.1)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,0.1)",
        "backgroundImage": "linear-gradient(to bottom, #000 0%, #0a0a0a 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF000000', endColorstr='#FF0A0A0A', GradientType=0)"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#a8ffff",
        "textDecoration": "none"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#ffffff",
        "textDecoration": "underline skip"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #710570",
        "cursor": "help"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 36,
        "marginTop": 20,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000",
        "backgroundColor": "rgba(253,151,31,0.3)",
        "paddingTop": 0.2,
        "paddingRight": 0.2,
        "paddingBottom": 0.2,
        "paddingLeft": 0.2
    },
    "small": {
        "fontSize": "64%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 0,
        "marginTop": 40,
        "marginBottom": 40,
        "border": 0,
        "borderTop": "1px solid #a8ffff",
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Cutive Mono",
        "fontSize": 1,
        "display": "block",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.42857,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "color": "#fff",
        "backgroundColor": "rgba(255,255,255,0)",
        "border": "1px solid #a8ffff",
        "borderRadius": 4,
        "boxShadow": "1px 1px 50px 10px rgba(168,255,255,0.3)",
        "pageBreakInside": "avoid"
    },
    "code": {
        "fontFamily": "Cutive Mono",
        "fontSize": 1,
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#f92672",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4
    },
    "kbd": {
        "fontFamily": "Cutive Mono",
        "fontSize": 1,
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#fff",
        "backgroundColor": "#333",
        "borderRadius": 3,
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,0.25)"
    },
    "samp": {
        "fontFamily": "Cutive Mono",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 8,
        "marginRight": "auto",
        "marginBottom": 1.5,
        "marginLeft": "auto",
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": 1,
        "lineHeight": 2,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "display": "block"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "boxSizing": "content-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625,
        "minWidth": 0
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "block",
        "width": "100%",
        "marginBottom": 20,
        "fontSize": 21,
        "lineHeight": "inherit",
        "color": "#a8ffff",
        "borderBottom": "1px solid #b2b2b2"
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "backgroundColor": "transparent",
        "width": "100%",
        "maxWidth": "100%",
        "marginBottom": 20,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "left"
    },
    "glyphicon": {
        "position": "relative",
        "top": 1,
        "display": "inline-block",
        "fontFamily": "'Glyphicons Halflings'",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "glyphicon-asterisk:before": {
        "content": "\\002a"
    },
    "glyphicon-plus:before": {
        "content": "\\002b"
    },
    "glyphicon-euro:before": {
        "content": "\\20ac"
    },
    "glyphicon-eur:before": {
        "content": "\\20ac"
    },
    "glyphicon-minus:before": {
        "content": "\\2212"
    },
    "glyphicon-cloud:before": {
        "content": "\\2601"
    },
    "glyphicon-envelope:before": {
        "content": "\\2709"
    },
    "glyphicon-pencil:before": {
        "content": "\\270f"
    },
    "glyphicon-glass:before": {
        "content": "\\e001"
    },
    "glyphicon-music:before": {
        "content": "\\e002"
    },
    "glyphicon-search:before": {
        "content": "\\e003"
    },
    "glyphicon-heart:before": {
        "content": "\\e005"
    },
    "glyphicon-star:before": {
        "content": "\\e006"
    },
    "glyphicon-star-empty:before": {
        "content": "\\e007"
    },
    "glyphicon-user:before": {
        "content": "\\e008"
    },
    "glyphicon-film:before": {
        "content": "\\e009"
    },
    "glyphicon-th-large:before": {
        "content": "\\e010"
    },
    "glyphicon-th:before": {
        "content": "\\e011"
    },
    "glyphicon-th-list:before": {
        "content": "\\e012"
    },
    "glyphicon-ok:before": {
        "content": "\\e013"
    },
    "glyphicon-remove:before": {
        "content": "\\e014"
    },
    "glyphicon-zoom-in:before": {
        "content": "\\e015"
    },
    "glyphicon-zoom-out:before": {
        "content": "\\e016"
    },
    "glyphicon-off:before": {
        "content": "\\e017"
    },
    "glyphicon-signal:before": {
        "content": "\\e018"
    },
    "glyphicon-cog:before": {
        "content": "\\e019"
    },
    "glyphicon-trash:before": {
        "content": "\\e020"
    },
    "glyphicon-home:before": {
        "content": "\\e021"
    },
    "glyphicon-file:before": {
        "content": "\\e022"
    },
    "glyphicon-time:before": {
        "content": "\\e023"
    },
    "glyphicon-road:before": {
        "content": "\\e024"
    },
    "glyphicon-download-alt:before": {
        "content": "\\e025"
    },
    "glyphicon-download:before": {
        "content": "\\e026"
    },
    "glyphicon-upload:before": {
        "content": "\\e027"
    },
    "glyphicon-inbox:before": {
        "content": "\\e028"
    },
    "glyphicon-play-circle:before": {
        "content": "\\e029"
    },
    "glyphicon-repeat:before": {
        "content": "\\e030"
    },
    "glyphicon-refresh:before": {
        "content": "\\e031"
    },
    "glyphicon-list-alt:before": {
        "content": "\\e032"
    },
    "glyphicon-lock:before": {
        "content": "\\e033"
    },
    "glyphicon-flag:before": {
        "content": "\\e034"
    },
    "glyphicon-headphones:before": {
        "content": "\\e035"
    },
    "glyphicon-volume-off:before": {
        "content": "\\e036"
    },
    "glyphicon-volume-down:before": {
        "content": "\\e037"
    },
    "glyphicon-volume-up:before": {
        "content": "\\e038"
    },
    "glyphicon-qrcode:before": {
        "content": "\\e039"
    },
    "glyphicon-barcode:before": {
        "content": "\\e040"
    },
    "glyphicon-tag:before": {
        "content": "\\e041"
    },
    "glyphicon-tags:before": {
        "content": "\\e042"
    },
    "glyphicon-book:before": {
        "content": "\\e043"
    },
    "glyphicon-bookmark:before": {
        "content": "\\e044"
    },
    "glyphicon-print:before": {
        "content": "\\e045"
    },
    "glyphicon-camera:before": {
        "content": "\\e046"
    },
    "glyphicon-font:before": {
        "content": "\\e047"
    },
    "glyphicon-bold:before": {
        "content": "\\e048"
    },
    "glyphicon-italic:before": {
        "content": "\\e049"
    },
    "glyphicon-text-height:before": {
        "content": "\\e050"
    },
    "glyphicon-text-width:before": {
        "content": "\\e051"
    },
    "glyphicon-align-left:before": {
        "content": "\\e052"
    },
    "glyphicon-align-center:before": {
        "content": "\\e053"
    },
    "glyphicon-align-right:before": {
        "content": "\\e054"
    },
    "glyphicon-align-justify:before": {
        "content": "\\e055"
    },
    "glyphicon-list:before": {
        "content": "\\e056"
    },
    "glyphicon-indent-left:before": {
        "content": "\\e057"
    },
    "glyphicon-indent-right:before": {
        "content": "\\e058"
    },
    "glyphicon-facetime-video:before": {
        "content": "\\e059"
    },
    "glyphicon-picture:before": {
        "content": "\\e060"
    },
    "glyphicon-map-marker:before": {
        "content": "\\e062"
    },
    "glyphicon-adjust:before": {
        "content": "\\e063"
    },
    "glyphicon-tint:before": {
        "content": "\\e064"
    },
    "glyphicon-edit:before": {
        "content": "\\e065"
    },
    "glyphicon-share:before": {
        "content": "\\e066"
    },
    "glyphicon-check:before": {
        "content": "\\e067"
    },
    "glyphicon-move:before": {
        "content": "\\e068"
    },
    "glyphicon-step-backward:before": {
        "content": "\\e069"
    },
    "glyphicon-fast-backward:before": {
        "content": "\\e070"
    },
    "glyphicon-backward:before": {
        "content": "\\e071"
    },
    "glyphicon-play:before": {
        "content": "\\e072"
    },
    "glyphicon-pause:before": {
        "content": "\\e073"
    },
    "glyphicon-stop:before": {
        "content": "\\e074"
    },
    "glyphicon-forward:before": {
        "content": "\\e075"
    },
    "glyphicon-fast-forward:before": {
        "content": "\\e076"
    },
    "glyphicon-step-forward:before": {
        "content": "\\e077"
    },
    "glyphicon-eject:before": {
        "content": "\\e078"
    },
    "glyphicon-chevron-left:before": {
        "content": "\\e079"
    },
    "glyphicon-chevron-right:before": {
        "content": "\\e080"
    },
    "glyphicon-plus-sign:before": {
        "content": "\\e081"
    },
    "glyphicon-minus-sign:before": {
        "content": "\\e082"
    },
    "glyphicon-remove-sign:before": {
        "content": "\\e083"
    },
    "glyphicon-ok-sign:before": {
        "content": "\\e084"
    },
    "glyphicon-question-sign:before": {
        "content": "\\e085"
    },
    "glyphicon-info-sign:before": {
        "content": "\\e086"
    },
    "glyphicon-screenshot:before": {
        "content": "\\e087"
    },
    "glyphicon-remove-circle:before": {
        "content": "\\e088"
    },
    "glyphicon-ok-circle:before": {
        "content": "\\e089"
    },
    "glyphicon-ban-circle:before": {
        "content": "\\e090"
    },
    "glyphicon-arrow-left:before": {
        "content": "\\e091"
    },
    "glyphicon-arrow-right:before": {
        "content": "\\e092"
    },
    "glyphicon-arrow-up:before": {
        "content": "\\e093"
    },
    "glyphicon-arrow-down:before": {
        "content": "\\e094"
    },
    "glyphicon-share-alt:before": {
        "content": "\\e095"
    },
    "glyphicon-resize-full:before": {
        "content": "\\e096"
    },
    "glyphicon-resize-small:before": {
        "content": "\\e097"
    },
    "glyphicon-exclamation-sign:before": {
        "content": "\\e101"
    },
    "glyphicon-gift:before": {
        "content": "\\e102"
    },
    "glyphicon-leaf:before": {
        "content": "\\e103"
    },
    "glyphicon-fire:before": {
        "content": "\\e104"
    },
    "glyphicon-eye-open:before": {
        "content": "\\e105"
    },
    "glyphicon-eye-close:before": {
        "content": "\\e106"
    },
    "glyphicon-warning-sign:before": {
        "content": "\\e107"
    },
    "glyphicon-plane:before": {
        "content": "\\e108"
    },
    "glyphicon-calendar:before": {
        "content": "\\e109"
    },
    "glyphicon-random:before": {
        "content": "\\e110"
    },
    "glyphicon-comment:before": {
        "content": "\\e111"
    },
    "glyphicon-magnet:before": {
        "content": "\\e112"
    },
    "glyphicon-chevron-up:before": {
        "content": "\\e113"
    },
    "glyphicon-chevron-down:before": {
        "content": "\\e114"
    },
    "glyphicon-retweet:before": {
        "content": "\\e115"
    },
    "glyphicon-shopping-cart:before": {
        "content": "\\e116"
    },
    "glyphicon-folder-close:before": {
        "content": "\\e117"
    },
    "glyphicon-folder-open:before": {
        "content": "\\e118"
    },
    "glyphicon-resize-vertical:before": {
        "content": "\\e119"
    },
    "glyphicon-resize-horizontal:before": {
        "content": "\\e120"
    },
    "glyphicon-hdd:before": {
        "content": "\\e121"
    },
    "glyphicon-bullhorn:before": {
        "content": "\\e122"
    },
    "glyphicon-bell:before": {
        "content": "\\e123"
    },
    "glyphicon-certificate:before": {
        "content": "\\e124"
    },
    "glyphicon-thumbs-up:before": {
        "content": "\\e125"
    },
    "glyphicon-thumbs-down:before": {
        "content": "\\e126"
    },
    "glyphicon-hand-right:before": {
        "content": "\\e127"
    },
    "glyphicon-hand-left:before": {
        "content": "\\e128"
    },
    "glyphicon-hand-up:before": {
        "content": "\\e129"
    },
    "glyphicon-hand-down:before": {
        "content": "\\e130"
    },
    "glyphicon-circle-arrow-right:before": {
        "content": "\\e131"
    },
    "glyphicon-circle-arrow-left:before": {
        "content": "\\e132"
    },
    "glyphicon-circle-arrow-up:before": {
        "content": "\\e133"
    },
    "glyphicon-circle-arrow-down:before": {
        "content": "\\e134"
    },
    "glyphicon-globe:before": {
        "content": "\\e135"
    },
    "glyphicon-wrench:before": {
        "content": "\\e136"
    },
    "glyphicon-tasks:before": {
        "content": "\\e137"
    },
    "glyphicon-filter:before": {
        "content": "\\e138"
    },
    "glyphicon-briefcase:before": {
        "content": "\\e139"
    },
    "glyphicon-fullscreen:before": {
        "content": "\\e140"
    },
    "glyphicon-dashboard:before": {
        "content": "\\e141"
    },
    "glyphicon-paperclip:before": {
        "content": "\\e142"
    },
    "glyphicon-heart-empty:before": {
        "content": "\\e143"
    },
    "glyphicon-link:before": {
        "content": "\\e144"
    },
    "glyphicon-phone:before": {
        "content": "\\e145"
    },
    "glyphicon-pushpin:before": {
        "content": "\\e146"
    },
    "glyphicon-usd:before": {
        "content": "\\e148"
    },
    "glyphicon-gbp:before": {
        "content": "\\e149"
    },
    "glyphicon-sort:before": {
        "content": "\\e150"
    },
    "glyphicon-sort-by-alphabet:before": {
        "content": "\\e151"
    },
    "glyphicon-sort-by-alphabet-alt:before": {
        "content": "\\e152"
    },
    "glyphicon-sort-by-order:before": {
        "content": "\\e153"
    },
    "glyphicon-sort-by-order-alt:before": {
        "content": "\\e154"
    },
    "glyphicon-sort-by-attributes:before": {
        "content": "\\e155"
    },
    "glyphicon-sort-by-attributes-alt:before": {
        "content": "\\e156"
    },
    "glyphicon-unchecked:before": {
        "content": "\\e157"
    },
    "glyphicon-expand:before": {
        "content": "\\e158"
    },
    "glyphicon-collapse-down:before": {
        "content": "\\e159"
    },
    "glyphicon-collapse-up:before": {
        "content": "\\e160"
    },
    "glyphicon-log-in:before": {
        "content": "\\e161"
    },
    "glyphicon-flash:before": {
        "content": "\\e162"
    },
    "glyphicon-log-out:before": {
        "content": "\\e163"
    },
    "glyphicon-new-window:before": {
        "content": "\\e164"
    },
    "glyphicon-record:before": {
        "content": "\\e165"
    },
    "glyphicon-save:before": {
        "content": "\\e166"
    },
    "glyphicon-open:before": {
        "content": "\\e167"
    },
    "glyphicon-saved:before": {
        "content": "\\e168"
    },
    "glyphicon-import:before": {
        "content": "\\e169"
    },
    "glyphicon-export:before": {
        "content": "\\e170"
    },
    "glyphicon-send:before": {
        "content": "\\e171"
    },
    "glyphicon-floppy-disk:before": {
        "content": "\\e172"
    },
    "glyphicon-floppy-saved:before": {
        "content": "\\e173"
    },
    "glyphicon-floppy-remove:before": {
        "content": "\\e174"
    },
    "glyphicon-floppy-save:before": {
        "content": "\\e175"
    },
    "glyphicon-floppy-open:before": {
        "content": "\\e176"
    },
    "glyphicon-credit-card:before": {
        "content": "\\e177"
    },
    "glyphicon-transfer:before": {
        "content": "\\e178"
    },
    "glyphicon-cutlery:before": {
        "content": "\\e179"
    },
    "glyphicon-header:before": {
        "content": "\\e180"
    },
    "glyphicon-compressed:before": {
        "content": "\\e181"
    },
    "glyphicon-earphone:before": {
        "content": "\\e182"
    },
    "glyphicon-phone-alt:before": {
        "content": "\\e183"
    },
    "glyphicon-tower:before": {
        "content": "\\e184"
    },
    "glyphicon-stats:before": {
        "content": "\\e185"
    },
    "glyphicon-sd-video:before": {
        "content": "\\e186"
    },
    "glyphicon-hd-video:before": {
        "content": "\\e187"
    },
    "glyphicon-subtitles:before": {
        "content": "\\e188"
    },
    "glyphicon-sound-stereo:before": {
        "content": "\\e189"
    },
    "glyphicon-sound-dolby:before": {
        "content": "\\e190"
    },
    "glyphicon-sound-5-1:before": {
        "content": "\\e191"
    },
    "glyphicon-sound-6-1:before": {
        "content": "\\e192"
    },
    "glyphicon-sound-7-1:before": {
        "content": "\\e193"
    },
    "glyphicon-copyright-mark:before": {
        "content": "\\e194"
    },
    "glyphicon-registration-mark:before": {
        "content": "\\e195"
    },
    "glyphicon-cloud-download:before": {
        "content": "\\e197"
    },
    "glyphicon-cloud-upload:before": {
        "content": "\\e198"
    },
    "glyphicon-tree-conifer:before": {
        "content": "\\e199"
    },
    "glyphicon-tree-deciduous:before": {
        "content": "\\e200"
    },
    "glyphicon-cd:before": {
        "content": "\\e201"
    },
    "glyphicon-save-file:before": {
        "content": "\\e202"
    },
    "glyphicon-open-file:before": {
        "content": "\\e203"
    },
    "glyphicon-level-up:before": {
        "content": "\\e204"
    },
    "glyphicon-copy:before": {
        "content": "\\e205"
    },
    "glyphicon-paste:before": {
        "content": "\\e206"
    },
    "glyphicon-alert:before": {
        "content": "\\e209"
    },
    "glyphicon-equalizer:before": {
        "content": "\\e210"
    },
    "glyphicon-king:before": {
        "content": "\\e211"
    },
    "glyphicon-queen:before": {
        "content": "\\e212"
    },
    "glyphicon-pawn:before": {
        "content": "\\e213"
    },
    "glyphicon-bishop:before": {
        "content": "\\e214"
    },
    "glyphicon-knight:before": {
        "content": "\\e215"
    },
    "glyphicon-baby-formula:before": {
        "content": "\\e216"
    },
    "glyphicon-tent:before": {
        "content": "\\26fa"
    },
    "glyphicon-blackboard:before": {
        "content": "\\e218"
    },
    "glyphicon-bed:before": {
        "content": "\\e219"
    },
    "glyphicon-apple:before": {
        "content": "\\f8ff"
    },
    "glyphicon-erase:before": {
        "content": "\\e221"
    },
    "glyphicon-hourglass:before": {
        "content": "\\231b"
    },
    "glyphicon-lamp:before": {
        "content": "\\e223"
    },
    "glyphicon-duplicate:before": {
        "content": "\\e224"
    },
    "glyphicon-piggy-bank:before": {
        "content": "\\e225"
    },
    "glyphicon-scissors:before": {
        "content": "\\e226"
    },
    "glyphicon-bitcoin:before": {
        "content": "\\e227"
    },
    "glyphicon-btc:before": {
        "content": "\\e227"
    },
    "glyphicon-xbt:before": {
        "content": "\\e227"
    },
    "glyphicon-yen:before": {
        "content": "\\00a5"
    },
    "glyphicon-jpy:before": {
        "content": "\\00a5"
    },
    "glyphicon-ruble:before": {
        "content": "\\20bd"
    },
    "glyphicon-rub:before": {
        "content": "\\20bd"
    },
    "glyphicon-scale:before": {
        "content": "\\e230"
    },
    "glyphicon-ice-lolly:before": {
        "content": "\\e231"
    },
    "glyphicon-ice-lolly-tasted:before": {
        "content": "\\e232"
    },
    "glyphicon-education:before": {
        "content": "\\e233"
    },
    "glyphicon-option-horizontal:before": {
        "content": "\\e234"
    },
    "glyphicon-option-vertical:before": {
        "content": "\\e235"
    },
    "glyphicon-menu-hamburger:before": {
        "content": "\\e236"
    },
    "glyphicon-modal-window:before": {
        "content": "\\e237"
    },
    "glyphicon-oil:before": {
        "content": "\\e238"
    },
    "glyphicon-grain:before": {
        "content": "\\e239"
    },
    "glyphicon-sunglasses:before": {
        "content": "\\e240"
    },
    "glyphicon-text-size:before": {
        "content": "\\e241"
    },
    "glyphicon-text-color:before": {
        "content": "\\e242"
    },
    "glyphicon-text-background:before": {
        "content": "\\e243"
    },
    "glyphicon-object-align-top:before": {
        "content": "\\e244"
    },
    "glyphicon-object-align-bottom:before": {
        "content": "\\e245"
    },
    "glyphicon-object-align-horizontal:before": {
        "content": "\\e246"
    },
    "glyphicon-object-align-left:before": {
        "content": "\\e247"
    },
    "glyphicon-object-align-vertical:before": {
        "content": "\\e248"
    },
    "glyphicon-object-align-right:before": {
        "content": "\\e249"
    },
    "glyphicon-triangle-right:before": {
        "content": "\\e250"
    },
    "glyphicon-triangle-left:before": {
        "content": "\\e251"
    },
    "glyphicon-triangle-bottom:before": {
        "content": "\\e252"
    },
    "glyphicon-triangle-top:before": {
        "content": "\\e253"
    },
    "glyphicon-console:before": {
        "content": "\\e254"
    },
    "glyphicon-superscript:before": {
        "content": "\\e255"
    },
    "glyphicon-subscript:before": {
        "content": "\\e256"
    },
    "glyphicon-menu-left:before": {
        "content": "\\e257"
    },
    "glyphicon-menu-right:before": {
        "content": "\\e258"
    },
    "glyphicon-menu-down:before": {
        "content": "\\e259"
    },
    "glyphicon-menu-up:before": {
        "content": "\\e260"
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "inherit"
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "inherit"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "inherit"
    },
    "a:focus": {
        "color": "#ffffff",
        "textDecoration": "underline skip",
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "img-responsive": {
        "display": "block",
        "maxWidth": "100%",
        "height": "100%"
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.42857,
        "backgroundColor": "rgba(8,8,8,0.8)",
        "border": "1px solid rgba(0,0,0,0.94)",
        "borderRadius": 4,
        "WebkitTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out",
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto",
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,0.075)",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.075)"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "border": 0
    },
    "sr-only-focusable:active": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "sr-only-focusable:focus": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "[role=\"button\"]": {
        "cursor": "pointer"
    },
    "h2": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 30,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h3": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 24,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h4": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 25,
        "marginBottom": 10,
        "fontSize": 18,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h5": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 14,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h6": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 12,
        "marginRight": 10,
        "marginLeft": 15
    },
    "h1 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "65%"
    },
    "h2 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "65%"
    },
    "h3 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "65%"
    },
    "h4 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "75%"
    },
    "h5 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "75%"
    },
    "h6 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "fontSize": "75%"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "lead": {
        "marginBottom": 20,
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 1.4
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "text-nowrap": {
        "whiteSpace": "nowrap"
    },
    "text-lowercase": {
        "textTransform": "lowercase"
    },
    "text-uppercase": {
        "textTransform": "uppercase"
    },
    "initialism": {
        "textTransform": "uppercase",
        "fontSize": "90%"
    },
    "text-capitalize": {
        "textTransform": "capitalize"
    },
    "text-muted": {
        "color": "rgba(255,255,255,0.11)"
    },
    "text-primary": {
        "color": "#a8ffff"
    },
    "atext-primary:hover": {
        "color": "#75ffff"
    },
    "atext-primary:focus": {
        "color": "#75ffff"
    },
    "text-success": {
        "color": "#6f0"
    },
    "atext-success:hover": {
        "color": "#52cc00"
    },
    "atext-success:focus": {
        "color": "#52cc00"
    },
    "text-info": {
        "color": "#710570"
    },
    "atext-info:hover": {
        "color": "#400340"
    },
    "atext-info:focus": {
        "color": "#400340"
    },
    "text-warning": {
        "color": "#fd971f"
    },
    "atext-warning:hover": {
        "color": "#e77e02"
    },
    "atext-warning:focus": {
        "color": "#e77e02"
    },
    "text-danger": {
        "color": "#f92672"
    },
    "atext-danger:hover": {
        "color": "#e60657"
    },
    "atext-danger:focus": {
        "color": "#e60657"
    },
    "bg-primary": {
        "color": "#fff",
        "backgroundColor": "#a8ffff"
    },
    "abg-primary:hover": {
        "backgroundColor": "#75ffff"
    },
    "abg-primary:focus": {
        "backgroundColor": "#75ffff"
    },
    "bg-success": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "abg-success:hover": {
        "backgroundColor": "rgba(82,204,0,0.3)"
    },
    "abg-success:focus": {
        "backgroundColor": "rgba(82,204,0,0.3)"
    },
    "bg-info": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "abg-info:hover": {
        "backgroundColor": "rgba(64,3,64,0.3)"
    },
    "abg-info:focus": {
        "backgroundColor": "rgba(64,3,64,0.3)"
    },
    "bg-warning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "abg-warning:hover": {
        "backgroundColor": "rgba(231,126,2,0.3)"
    },
    "abg-warning:focus": {
        "backgroundColor": "rgba(231,126,2,0.3)"
    },
    "bg-danger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "abg-danger:hover": {
        "backgroundColor": "rgba(230,6,87,0.3)"
    },
    "abg-danger:focus": {
        "backgroundColor": "rgba(230,6,87,0.3)"
    },
    "page-header": {
        "paddingBottom": 9,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderBottom": "1px solid #a8ffff"
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ol": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ul ul": {
        "marginBottom": 0
    },
    "ul ol": {
        "marginBottom": 0
    },
    "ol ul": {
        "marginBottom": 0
    },
    "ol ol": {
        "marginBottom": 0
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 0,
        "listStyle": "none",
        "marginLeft": -5
    },
    "list-inline>li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "dl": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "dt": {
        "lineHeight": 1.42857,
        "fontWeight": "bold"
    },
    "dd": {
        "lineHeight": 1.42857,
        "marginLeft": 0
    },
    "dl-horizontal dd:before": {
        "content": " ",
        "display": "table"
    },
    "dl-horizontal dd:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #710570"
    },
    "blockquote": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 17.5,
        "borderLeft": "5px solid #b2b2b2",
        "fontFamily": "Cutive Mono",
        "border": "1px solid #a8ffff",
        "pageBreakInside": "avoid"
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote ul:last-child": {
        "marginBottom": 0
    },
    "blockquote ol:last-child": {
        "marginBottom": 0
    },
    "blockquote footer": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857,
        "color": "#b2b2b2"
    },
    "blockquote small": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857,
        "color": "#b2b2b2"
    },
    "blockquote footer:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote-reverse": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #b2b2b2",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquotepull-right": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #b2b2b2",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquote-reverse footer:before": {
        "content": "''"
    },
    "blockquote-reverse small:before": {
        "content": "''"
    },
    "blockquotepull-right footer:before": {
        "content": "''"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquote-reverse footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquote-reverse small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "address": {
        "marginBottom": 20,
        "fontStyle": "normal",
        "lineHeight": 1.42857
    },
    "kbd kbd": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "100%",
        "fontWeight": "bold",
        "boxShadow": "none"
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "inherit",
        "color": "inherit",
        "whiteSpace": "pre-wrap",
        "backgroundColor": "transparent",
        "borderRadius": 0
    },
    "pre-scrollable": {
        "maxHeight": 340,
        "overflowY": "scroll"
    },
    "container": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container:before": {
        "content": " ",
        "display": "table"
    },
    "container:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container-fluid": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container-fluid:before": {
        "content": " ",
        "display": "table"
    },
    "container-fluid:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "row": {
        "marginLeft": -15,
        "marginRight": -15,
        "marginBottom": 20
    },
    "row:before": {
        "content": " ",
        "display": "table"
    },
    "row:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "8.33333%"
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "16.66667%"
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "25%"
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "33.33333%"
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "41.66667%"
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "50%"
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "58.33333%"
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "66.66667%"
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "75%"
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "83.33333%"
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "91.66667%"
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "100%"
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-pull-1": {
        "right": "8.33333%"
    },
    "col-xs-pull-2": {
        "right": "16.66667%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-4": {
        "right": "33.33333%"
    },
    "col-xs-pull-5": {
        "right": "41.66667%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-7": {
        "right": "58.33333%"
    },
    "col-xs-pull-8": {
        "right": "66.66667%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-10": {
        "right": "83.33333%"
    },
    "col-xs-pull-11": {
        "right": "91.66667%"
    },
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-push-1": {
        "left": "8.33333%"
    },
    "col-xs-push-2": {
        "left": "16.66667%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-4": {
        "left": "33.33333%"
    },
    "col-xs-push-5": {
        "left": "41.66667%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-7": {
        "left": "58.33333%"
    },
    "col-xs-push-8": {
        "left": "66.66667%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-10": {
        "left": "83.33333%"
    },
    "col-xs-push-11": {
        "left": "91.66667%"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-offset-0": {
        "marginLeft": "0%"
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66667%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66667%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66667%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66667%"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "caption": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "color": "rgba(255,255,255,0.11)",
        "textAlign": "left"
    },
    "table>thead>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "bottom",
        "borderTop": "1px solid #0b0b0b",
        "borderBottom": "2px solid #0b0b0b"
    },
    "table>thead>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table>tbody>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table>tbody>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table>tfoot>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table>tfoot>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table>caption+thead>tr:first-child>th": {
        "borderTop": 0
    },
    "table>caption+thead>tr:first-child>td": {
        "borderTop": 0
    },
    "table>colgroup+thead>tr:first-child>th": {
        "borderTop": 0
    },
    "table>colgroup+thead>tr:first-child>td": {
        "borderTop": 0
    },
    "table>thead:first-child>tr:first-child>th": {
        "borderTop": 0
    },
    "table>thead:first-child>tr:first-child>td": {
        "borderTop": 0
    },
    "table>tbody+tbody": {
        "borderTop": "2px solid #0b0b0b"
    },
    "table table": {
        "backgroundColor": "#171717"
    },
    "table-condensed>thead>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>thead>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tbody>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tbody>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tfoot>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tfoot>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-bordered": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered>thead>tr>th": {
        "border": "1px solid #0b0b0b",
        "borderBottomWidth": 2
    },
    "table-bordered>thead>tr>td": {
        "border": "1px solid #0b0b0b",
        "borderBottomWidth": 2
    },
    "table-bordered>tbody>tr>th": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered>tbody>tr>td": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered>tfoot>tr>th": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered>tfoot>tr>td": {
        "border": "1px solid #0b0b0b"
    },
    "table-striped>tbody>tr:nth-of-type(odd)": {
        "backgroundColor": "rgba(237,237,237,0.1)"
    },
    "table-hover>tbody>tr:hover": {
        "backgroundColor": "#4a4a4a"
    },
    "table col[class*=\"col-\"]": {
        "position": "static",
        "float": "none",
        "display": "table-column"
    },
    "table td[class*=\"col-\"]": {
        "position": "static",
        "float": "none",
        "display": "table-cell"
    },
    "table th[class*=\"col-\"]": {
        "position": "static",
        "float": "none",
        "display": "table-cell"
    },
    "table>thead>tr>tdactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>thead>tr>thactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>thead>tractive>td": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>thead>tractive>th": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tbody>tr>tdactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tbody>tr>thactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tbody>tractive>td": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tbody>tractive>th": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tfoot>tr>tdactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tfoot>tr>thactive": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tfoot>tractive>td": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table>tfoot>tractive>th": {
        "backgroundColor": "rgba(168,255,255,0.11)"
    },
    "table-hover>tbody>tr>tdactive:hover": {
        "backgroundColor": "rgba(143,255,255,0.11)"
    },
    "table-hover>tbody>tr>thactive:hover": {
        "backgroundColor": "rgba(143,255,255,0.11)"
    },
    "table-hover>tbody>tractive:hover>td": {
        "backgroundColor": "rgba(143,255,255,0.11)"
    },
    "table-hover>tbody>tr:hover>active": {
        "backgroundColor": "rgba(143,255,255,0.11)"
    },
    "table-hover>tbody>tractive:hover>th": {
        "backgroundColor": "rgba(143,255,255,0.11)"
    },
    "table>thead>tr>tdsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>thead>tr>thsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>thead>trsuccess>td": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>thead>trsuccess>th": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tbody>tr>tdsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tbody>tr>thsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tbody>trsuccess>td": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tbody>trsuccess>th": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tfoot>tr>tdsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tfoot>tr>thsuccess": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tfoot>trsuccess>td": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table>tfoot>trsuccess>th": {
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "table-hover>tbody>tr>tdsuccess:hover": {
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "table-hover>tbody>tr>thsuccess:hover": {
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "table-hover>tbody>trsuccess:hover>td": {
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "table-hover>tbody>tr:hover>success": {
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "table-hover>tbody>trsuccess:hover>th": {
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "table>thead>tr>tdinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>thead>tr>thinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>thead>trinfo>td": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>thead>trinfo>th": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tbody>tr>tdinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tbody>tr>thinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tbody>trinfo>td": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tbody>trinfo>th": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tfoot>tr>tdinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tfoot>tr>thinfo": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tfoot>trinfo>td": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table>tfoot>trinfo>th": {
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "table-hover>tbody>tr>tdinfo:hover": {
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "table-hover>tbody>tr>thinfo:hover": {
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "table-hover>tbody>trinfo:hover>td": {
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "table-hover>tbody>tr:hover>info": {
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "table-hover>tbody>trinfo:hover>th": {
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "table>thead>tr>tdwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>thead>tr>thwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>thead>trwarning>td": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>thead>trwarning>th": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tbody>tr>tdwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tbody>tr>thwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tbody>trwarning>td": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tbody>trwarning>th": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tfoot>tr>tdwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tfoot>tr>thwarning": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tfoot>trwarning>td": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table>tfoot>trwarning>th": {
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "table-hover>tbody>tr>tdwarning:hover": {
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "table-hover>tbody>tr>thwarning:hover": {
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "table-hover>tbody>trwarning:hover>td": {
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "table-hover>tbody>tr:hover>warning": {
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "table-hover>tbody>trwarning:hover>th": {
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "table>thead>tr>tddanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>thead>tr>thdanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>thead>trdanger>td": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>thead>trdanger>th": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tbody>tr>tddanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tbody>tr>thdanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tbody>trdanger>td": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tbody>trdanger>th": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tfoot>tr>tddanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tfoot>tr>thdanger": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tfoot>trdanger>td": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table>tfoot>trdanger>th": {
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "table-hover>tbody>tr>tddanger:hover": {
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "table-hover>tbody>tr>thdanger:hover": {
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "table-hover>tbody>trdanger:hover>td": {
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "table-hover>tbody>tr:hover>danger": {
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "table-hover>tbody>trdanger:hover>th": {
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "table-responsive": {
        "overflowX": "auto",
        "minHeight": "0.01%"
    },
    "label": {
        "display": "inline-block",
        "maxWidth": "100%",
        "marginBottom": 5,
        "fontWeight": "bold",
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "fontSize": "75%",
        "lineHeight": 1,
        "color": "inverse()",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "baseline",
        "borderRadius": 0.25
    },
    "input[type=\"file\"]": {
        "display": "block"
    },
    "input[type=\"range\"]": {
        "display": "block",
        "width": "100%"
    },
    "select[multiple]": {
        "height": "auto"
    },
    "select[size]": {
        "height": "auto"
    },
    "input[type=\"file\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"radio\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"checkbox\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "output": {
        "display": "block",
        "paddingTop": 9,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#a8ffff"
    },
    "form-control": {
        "display": "block",
        "width": "100%",
        "height": 38,
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#a8ffff",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "border": "1px solid #303030",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "WebkitTransition": "border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s",
        "OTransition": "border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s",
        "transition": "border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s"
    },
    "form-control:focus": {
        "borderColor": "#a8ffff",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(168,255,255,0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(168,255,255,0.6)"
    },
    "form-control::-moz-placeholder": {
        "color": "rgba(204,204,204,0.3)",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "rgba(204,204,204,0.3)"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "rgba(204,204,204,0.3)"
    },
    "form-control::-ms-expand": {
        "border": 0,
        "backgroundColor": "transparent"
    },
    "form-control[disabled]": {
        "backgroundColor": "transparent",
        "opacity": 1,
        "cursor": "allowed"
    },
    "form-control[readonly]": {
        "backgroundColor": "transparent",
        "opacity": 1
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "transparent",
        "opacity": 1,
        "cursor": "allowed"
    },
    "textareaform-control": {
        "height": "auto"
    },
    "form-group": {
        "marginBottom": 15
    },
    "radio": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "checkbox": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10,
        "cursor": "pointer"
    },
    "radio label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "checkbox label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "radio input[type=\"radio\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "radio-inline input[type=\"radio\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "checkbox input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "checkbox-inline input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "radio+radio": {
        "marginTop": -5
    },
    "checkbox+checkbox": {
        "marginTop": -5
    },
    "radio-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "checkbox-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "radio-inline+radio-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "checkbox-inline+checkbox-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "input[type=\"radio\"][disabled]": {
        "cursor": "allowed"
    },
    "input[type=\"radio\"]disabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] input[type=\"radio\"]": {
        "cursor": "allowed"
    },
    "input[type=\"checkbox\"][disabled]": {
        "cursor": "allowed"
    },
    "input[type=\"checkbox\"]disabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] input[type=\"checkbox\"]": {
        "cursor": "allowed"
    },
    "radio-inlinedisabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] radio-inline": {
        "cursor": "allowed"
    },
    "checkbox-inlinedisabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] checkbox-inline": {
        "cursor": "allowed"
    },
    "radiodisabled label": {
        "cursor": "allowed"
    },
    "fieldset[disabled] radio label": {
        "cursor": "allowed"
    },
    "checkboxdisabled label": {
        "cursor": "allowed"
    },
    "fieldset[disabled] checkbox label": {
        "cursor": "allowed"
    },
    "form-control-static": {
        "paddingTop": 9,
        "paddingBottom": 9,
        "marginBottom": 0,
        "minHeight": 34
    },
    "form-control-staticinput-lg": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>form-control-staticform-control": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>form-control-staticinput-group-addon": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>input-group-btn>form-control-staticbtn": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "form-control-staticinput-sm": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>form-control-staticform-control": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>form-control-staticinput-group-addon": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>input-group-btn>form-control-staticbtn": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-sm": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>form-control": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>input-group-addon": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>input-group-btn>btn": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "selectinput-sm": {
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>selectform-control": {
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>selectinput-group-addon": {
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>input-group-btn>selectbtn": {
        "height": 25,
        "lineHeight": 25
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "input-group-sm>textareaform-control": {
        "height": "auto"
    },
    "input-group-sm>textareainput-group-addon": {
        "height": "auto"
    },
    "input-group-sm>input-group-btn>textareabtn": {
        "height": "auto"
    },
    "select[multiple]input-sm": {
        "height": "auto"
    },
    "input-group-sm>select[multiple]form-control": {
        "height": "auto"
    },
    "input-group-sm>select[multiple]input-group-addon": {
        "height": "auto"
    },
    "input-group-sm>input-group-btn>select[multiple]btn": {
        "height": "auto"
    },
    "form-group-sm form-control": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "form-group-sm selectform-control": {
        "height": 25,
        "lineHeight": 25
    },
    "form-group-sm textareaform-control": {
        "height": "auto"
    },
    "form-group-sm select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-sm form-control-static": {
        "height": 25,
        "minHeight": 29,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5
    },
    "input-lg": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "input-group-lg>form-control": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "input-group-lg>input-group-addon": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "input-group-lg>input-group-btn>btn": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "selectinput-lg": {
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>selectform-control": {
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>selectinput-group-addon": {
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>input-group-btn>selectbtn": {
        "height": 54,
        "lineHeight": 54
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "input-group-lg>textareaform-control": {
        "height": "auto"
    },
    "input-group-lg>textareainput-group-addon": {
        "height": "auto"
    },
    "input-group-lg>input-group-btn>textareabtn": {
        "height": "auto"
    },
    "select[multiple]input-lg": {
        "height": "auto"
    },
    "input-group-lg>select[multiple]form-control": {
        "height": "auto"
    },
    "input-group-lg>select[multiple]input-group-addon": {
        "height": "auto"
    },
    "input-group-lg>input-group-btn>select[multiple]btn": {
        "height": "auto"
    },
    "form-group-lg form-control": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "form-group-lg selectform-control": {
        "height": 54,
        "lineHeight": 54
    },
    "form-group-lg textareaform-control": {
        "height": "auto"
    },
    "form-group-lg select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-lg form-control-static": {
        "height": 54,
        "minHeight": 38,
        "paddingTop": 15,
        "paddingRight": 16,
        "paddingBottom": 15,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33
    },
    "has-feedback": {
        "position": "relative"
    },
    "has-feedback form-control": {
        "paddingRight": 47.5
    },
    "form-control-feedback": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 2,
        "display": "block",
        "width": 38,
        "height": 38,
        "lineHeight": 38,
        "textAlign": "center",
        "pointerEvents": "none"
    },
    "input-lg+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>form-control+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>input-group-addon+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg>input-group-btn>btn+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "form-group-lg form-control+form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-sm+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>form-control+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>input-group-addon+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm>input-group-btn>btn+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "form-group-sm form-control+form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "has-success help-block": {
        "color": "#6f0"
    },
    "has-success control-label": {
        "color": "#6f0"
    },
    "has-success radio": {
        "color": "#6f0"
    },
    "has-success checkbox": {
        "color": "#6f0"
    },
    "has-success radio-inline": {
        "color": "#6f0"
    },
    "has-success checkbox-inline": {
        "color": "#6f0"
    },
    "has-successradio label": {
        "color": "#6f0"
    },
    "has-successcheckbox label": {
        "color": "#6f0"
    },
    "has-successradio-inline label": {
        "color": "#6f0"
    },
    "has-successcheckbox-inline label": {
        "color": "#6f0"
    },
    "has-success form-control": {
        "borderColor": "#6f0",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-success form-control:focus": {
        "borderColor": "#52cc00",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #a3ff66",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #a3ff66"
    },
    "has-success input-group-addon": {
        "color": "#6f0",
        "borderColor": "#6f0",
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "has-success form-control-feedback": {
        "color": "#6f0"
    },
    "has-warning help-block": {
        "color": "#fd971f"
    },
    "has-warning control-label": {
        "color": "#fd971f"
    },
    "has-warning radio": {
        "color": "#fd971f"
    },
    "has-warning checkbox": {
        "color": "#fd971f"
    },
    "has-warning radio-inline": {
        "color": "#fd971f"
    },
    "has-warning checkbox-inline": {
        "color": "#fd971f"
    },
    "has-warningradio label": {
        "color": "#fd971f"
    },
    "has-warningcheckbox label": {
        "color": "#fd971f"
    },
    "has-warningradio-inline label": {
        "color": "#fd971f"
    },
    "has-warningcheckbox-inline label": {
        "color": "#fd971f"
    },
    "has-warning form-control": {
        "borderColor": "#fd971f",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-warning form-control:focus": {
        "borderColor": "#e77e02",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #fec684",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #fec684"
    },
    "has-warning input-group-addon": {
        "color": "#fd971f",
        "borderColor": "#fd971f",
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "has-warning form-control-feedback": {
        "color": "#fd971f"
    },
    "has-error help-block": {
        "color": "#f92672"
    },
    "has-error control-label": {
        "color": "#f92672"
    },
    "has-error radio": {
        "color": "#f92672"
    },
    "has-error checkbox": {
        "color": "#f92672"
    },
    "has-error radio-inline": {
        "color": "#f92672"
    },
    "has-error checkbox-inline": {
        "color": "#f92672"
    },
    "has-errorradio label": {
        "color": "#f92672"
    },
    "has-errorcheckbox label": {
        "color": "#f92672"
    },
    "has-errorradio-inline label": {
        "color": "#f92672"
    },
    "has-errorcheckbox-inline label": {
        "color": "#f92672"
    },
    "has-error form-control": {
        "borderColor": "#f92672",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-error form-control:focus": {
        "borderColor": "#e60657",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #fc89b2",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #fc89b2"
    },
    "has-error input-group-addon": {
        "color": "#f92672",
        "borderColor": "#f92672",
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "has-error form-control-feedback": {
        "color": "#f92672"
    },
    "has-feedback label ~ form-control-feedback": {
        "top": 25
    },
    "has-feedback labelsr-only ~ form-control-feedback": {
        "top": 0
    },
    "help-block": {
        "display": "block",
        "marginTop": 5,
        "marginBottom": 10,
        "color": "#fff"
    },
    "form-horizontal radio": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 9,
        "minHeight": 29
    },
    "form-horizontal checkbox": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 9,
        "minHeight": 29
    },
    "form-horizontal radio-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 9
    },
    "form-horizontal checkbox-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 9
    },
    "form-horizontal form-group": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "form-horizontal form-group:before": {
        "content": " ",
        "display": "table"
    },
    "form-horizontal form-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "form-horizontal has-feedback form-control-feedback": {
        "right": 15
    },
    "btn": {
        "display": "inline-block",
        "marginBottom": 0,
        "fontWeight": "300",
        "textAlign": "center",
        "verticalAlign": "middle",
        "touchAction": "manipulation",
        "cursor": "pointer",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "whiteSpace": "nowrap",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "borderRadius": 4,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "btn:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#999",
        "textDecoration": "none"
    },
    "btnfocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#999",
        "textDecoration": "none"
    },
    "btn:active:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:activefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactive:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactivefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:hover": {
        "color": "#999",
        "textDecoration": "none"
    },
    "btn:active": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btnactive": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btndisabled": {
        "cursor": "allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn[disabled]": {
        "cursor": "allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn": {
        "cursor": "allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "abtndisabled": {
        "pointerEvents": "none"
    },
    "fieldset[disabled] abtn": {
        "pointerEvents": "none"
    },
    "btn-default": {
        "color": "#999",
        "backgroundColor": "#333",
        "borderColor": "#ccc",
        "textShadow": "0 1px 0 #fff",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #333 0%, #141414 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-default:focus": {
        "color": "#999",
        "backgroundColor": "#141414",
        "borderColor": "#000",
        "backgroundPosition": "0 -15px"
    },
    "btn-defaultfocus": {
        "color": "#999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#000"
    },
    "btn-default:hover": {
        "color": "#999",
        "backgroundColor": "#141414",
        "borderColor": "#030303",
        "backgroundPosition": "0 -15px"
    },
    "btn-default:active": {
        "color": "#999",
        "backgroundColor": "#141414",
        "borderColor": "#0f0f0f",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-defaultactive": {
        "color": "#999",
        "backgroundColor": "#141414",
        "borderColor": "#0f0f0f",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-defaultdropdown-toggle": {
        "color": "#999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-default:active:hover": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-default:active:focus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-default:activefocus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-defaultactive:hover": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-defaultactive:focus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-defaultactivefocus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "open>btn-defaultdropdown-toggle:hover": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "open>btn-defaultdropdown-toggle:focus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "open>btn-defaultdropdown-togglefocus": {
        "color": "#999",
        "backgroundColor": "#080808",
        "borderColor": "#000"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "#141414",
        "borderColor": "#222",
        "backgroundImage": "none"
    },
    "btn-default badge": {
        "color": "#333",
        "backgroundColor": "#999",
        "textShadow": "none"
    },
    "btn-primary": {
        "color": "#a8ffff",
        "backgroundColor": "#222",
        "borderColor": "#000",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #222 0%, #030303 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-primary:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#030303",
        "borderColor": "#29ffff",
        "backgroundPosition": "0 -15px"
    },
    "btn-primaryfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#090909",
        "borderColor": "#29ffff"
    },
    "btn-primary:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#030303",
        "borderColor": "#6bffff",
        "backgroundPosition": "0 -15px"
    },
    "btn-primary:active": {
        "color": "#a8ffff",
        "backgroundColor": "#030303",
        "borderColor": "#000",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-primaryactive": {
        "color": "#a8ffff",
        "backgroundColor": "#030303",
        "borderColor": "#000",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-primarydropdown-toggle": {
        "color": "#a8ffff",
        "backgroundColor": "#090909",
        "borderColor": "#6bffff",
        "backgroundImage": "none"
    },
    "btn-primary:active:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primary:active:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primary:activefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primaryactive:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primaryactive:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primaryactivefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "open>btn-primarydropdown-toggle:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "open>btn-primarydropdown-toggle:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "open>btn-primarydropdown-togglefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000",
        "borderColor": "#29ffff"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#030303",
        "borderColor": "#a8ffff",
        "backgroundImage": "none"
    },
    "btn-primary badge": {
        "color": "#222",
        "backgroundColor": "#a8ffff",
        "textShadow": "none"
    },
    "btn-success": {
        "color": "#710570",
        "backgroundColor": "#6f0",
        "borderColor": "#49b800",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #6f0 0%, #4ec200 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-success:focus": {
        "color": "#710570",
        "backgroundColor": "#4ec200",
        "borderColor": "#2d672d",
        "backgroundPosition": "0 -15px"
    },
    "btn-successfocus": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#2d672d"
    },
    "btn-success:hover": {
        "color": "#710570",
        "backgroundColor": "#4ec200",
        "borderColor": "#419641",
        "backgroundPosition": "0 -15px"
    },
    "btn-success:active": {
        "color": "#710570",
        "backgroundColor": "#4ec200",
        "borderColor": "#49b800",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-successactive": {
        "color": "#710570",
        "backgroundColor": "#4ec200",
        "borderColor": "#49b800",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-successdropdown-toggle": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#419641",
        "backgroundImage": "none"
    },
    "btn-success:active:hover": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-success:active:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-success:activefocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successactive:hover": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successactive:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successactivefocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open>btn-successdropdown-toggle:hover": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open>btn-successdropdown-toggle:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open>btn-successdropdown-togglefocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-successdisabledfocus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-success[disabled]focus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-successfocus": {
        "backgroundColor": "#4ec200",
        "borderColor": "#5cb85c",
        "backgroundImage": "none"
    },
    "btn-success badge": {
        "color": "#6f0",
        "backgroundColor": "#710570",
        "textShadow": "none"
    },
    "btn-info": {
        "color": "#6f0",
        "backgroundColor": "#710570",
        "borderColor": "#2d022c",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #710570 0%, #360236 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-info:focus": {
        "color": "#6f0",
        "backgroundColor": "#360236",
        "borderColor": "#000",
        "backgroundPosition": "0 -15px"
    },
    "btn-infofocus": {
        "color": "#6f0",
        "backgroundColor": "#400340",
        "borderColor": "#000"
    },
    "btn-info:hover": {
        "color": "#6f0",
        "backgroundColor": "#360236",
        "borderColor": "#360236",
        "backgroundPosition": "0 -15px"
    },
    "btn-info:active": {
        "color": "#6f0",
        "backgroundColor": "#360236",
        "borderColor": "#2d022c",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-infoactive": {
        "color": "#6f0",
        "backgroundColor": "#360236",
        "borderColor": "#2d022c",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-infodropdown-toggle": {
        "color": "#6f0",
        "backgroundColor": "#400340",
        "borderColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-info:active:hover": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-info:active:focus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-info:activefocus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-infoactive:hover": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-infoactive:focus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-infoactivefocus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "open>btn-infodropdown-toggle:hover": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "open>btn-infodropdown-toggle:focus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "open>btn-infodropdown-togglefocus": {
        "color": "#6f0",
        "backgroundColor": "#1e011e",
        "borderColor": "#000"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-infodisabledfocus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-info[disabled]focus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-infofocus": {
        "backgroundColor": "#360236",
        "borderColor": "#710570",
        "backgroundImage": "none"
    },
    "btn-info badge": {
        "color": "#710570",
        "backgroundColor": "#6f0",
        "textShadow": "none"
    },
    "btn-warning": {
        "color": "#a8ffff",
        "backgroundColor": "#fd971f",
        "borderColor": "#d37302",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #fd971f 0%, #dd7802 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-warning:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#dd7802",
        "borderColor": "#784607",
        "backgroundPosition": "0 -15px"
    },
    "btn-warningfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#784607"
    },
    "btn-warning:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#dd7802",
        "borderColor": "#b66b0b",
        "backgroundPosition": "0 -15px"
    },
    "btn-warning:active": {
        "color": "#a8ffff",
        "backgroundColor": "#dd7802",
        "borderColor": "#d37302",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-warningactive": {
        "color": "#a8ffff",
        "backgroundColor": "#dd7802",
        "borderColor": "#d37302",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-warningdropdown-toggle": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#b66b0b",
        "backgroundImage": "none"
    },
    "btn-warning:active:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warning:active:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warning:activefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningactive:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningactive:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningactivefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open>btn-warningdropdown-toggle:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open>btn-warningdropdown-toggle:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open>btn-warningdropdown-togglefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warningdisabledfocus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]focus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warningfocus": {
        "backgroundColor": "#dd7802",
        "borderColor": "#f08d0e",
        "backgroundImage": "none"
    },
    "btn-warning badge": {
        "color": "#fd971f",
        "backgroundColor": "#a8ffff",
        "textShadow": "none"
    },
    "btn-danger": {
        "color": "#6f0",
        "backgroundColor": "#f92672",
        "borderColor": "#d2064f",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075)",
        "backgroundImage": "linear-gradient(to bottom, #f92672 0%, #dc0653 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "btn-danger:focus": {
        "color": "#6f0",
        "backgroundColor": "#dc0653",
        "borderColor": "#9b043b",
        "backgroundPosition": "0 -15px"
    },
    "btn-dangerfocus": {
        "color": "#6f0",
        "backgroundColor": "#e60657",
        "borderColor": "#9b043b"
    },
    "btn-danger:hover": {
        "color": "#6f0",
        "backgroundColor": "#dc0653",
        "borderColor": "#dc0653",
        "backgroundPosition": "0 -15px"
    },
    "btn-danger:active": {
        "color": "#6f0",
        "backgroundColor": "#dc0653",
        "borderColor": "#d2064f",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-dangeractive": {
        "color": "#6f0",
        "backgroundColor": "#dc0653",
        "borderColor": "#d2064f",
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "open>btn-dangerdropdown-toggle": {
        "color": "#6f0",
        "backgroundColor": "#e60657",
        "borderColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-danger:active:hover": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-danger:active:focus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-danger:activefocus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractive:hover": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractive:focus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractivefocus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open>btn-dangerdropdown-toggle:hover": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open>btn-dangerdropdown-toggle:focus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open>btn-dangerdropdown-togglefocus": {
        "color": "#6f0",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-dangerdisabledfocus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]focus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-dangerfocus": {
        "backgroundColor": "#dc0653",
        "borderColor": "#f92672",
        "backgroundImage": "none"
    },
    "btn-danger badge": {
        "color": "#f92672",
        "backgroundColor": "#6f0",
        "textShadow": "none"
    },
    "btn-link": {
        "color": "#a8ffff",
        "fontWeight": "normal",
        "borderRadius": 0,
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-link:active": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-linkactive": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link[disabled]": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn-link": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link:hover": {
        "borderColor": "transparent",
        "color": "#fff",
        "textDecoration": "underline skip",
        "backgroundColor": "transparent"
    },
    "btn-link:focus": {
        "borderColor": "transparent",
        "color": "#fff",
        "textDecoration": "underline skip",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:hover": {
        "color": "rgba(237,237,237,0.01)",
        "textDecoration": "none"
    },
    "btn-link[disabled]:focus": {
        "color": "rgba(237,237,237,0.01)",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "rgba(237,237,237,0.01)",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "rgba(237,237,237,0.01)",
        "textDecoration": "none"
    },
    "btn-lg": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "btn-group-lg>btn": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "btn-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-group-sm>btn": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-xs": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-group-xs>btn": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-block": {
        "display": "block",
        "width": "100%"
    },
    "btn-block+btn-block": {
        "marginTop": 5
    },
    "input[type=\"submit\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"reset\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"button\"]btn-block": {
        "width": "100%"
    },
    "fade": {
        "opacity": 0,
        "WebkitTransition": "opacity 0.15s linear",
        "OTransition": "opacity 0.15s linear",
        "transition": "opacity 0.15s linear"
    },
    "fadein": {
        "opacity": 1
    },
    "collapse": {
        "display": "none"
    },
    "collapsein": {
        "display": "block"
    },
    "trcollapsein": {
        "display": "table-row"
    },
    "tbodycollapsein": {
        "display": "table-row-group"
    },
    "collapsing": {
        "position": "relative",
        "height": 0,
        "overflow": "hidden",
        "WebkitTransitionProperty": "height,visibility",
        "transitionProperty": "height,visibility",
        "WebkitTransitionDuration": "0.35s",
        "transitionDuration": "0.35s",
        "WebkitTransitionTimingFunction": "ease",
        "transitionTimingFunction": "ease"
    },
    "caret": {
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "marginLeft": 2,
        "verticalAlign": "middle",
        "borderTop": "4px solid \\9",
        "borderRight": "4px solid transparent",
        "borderLeft": "4px solid transparent"
    },
    "dropup": {
        "position": "relative"
    },
    "dropdown": {
        "position": "relative"
    },
    "dropdown-toggle:focus": {
        "outline": 0
    },
    "dropdown-menu": {
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "zIndex": 1000,
        "display": "none",
        "float": "left",
        "minWidth": 160,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "fontSize": 14,
        "textAlign": "left",
        "backgroundColor": "#242424",
        "border": "1px solid #222",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 6px 12px rgba(0,0,0,0.175)",
        "boxShadow": "0 6px 12px rgba(0,0,0,0.175)",
        "backgroundClip": "padding-box"
    },
    "dropdown-menupull-right": {
        "right": 0,
        "left": "auto"
    },
    "dropdown-menu divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#222"
    },
    "dropdown-menu>li>a": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "clear": "both",
        "fontWeight": "normal",
        "lineHeight": 1.42857,
        "color": "#a8ffff",
        "whiteSpace": "nowrap"
    },
    "dropdown-menu>li>a:hover": {
        "textDecoration": "none",
        "color": "#222",
        "backgroundColor": "#8fffff",
        "backgroundImage": "linear-gradient(to bottom, #a8ffff 0%, #8fffff 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFA8FFFF', endColorstr='#FF8FFFFF', GradientType=0)",
        "textShadow": "1px 1px 1px #000000"
    },
    "dropdown-menu>li>a:focus": {
        "textDecoration": "none",
        "color": "#222",
        "backgroundColor": "#8fffff",
        "backgroundImage": "linear-gradient(to bottom, #a8ffff 0%, #8fffff 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFA8FFFF', endColorstr='#FF8FFFFF', GradientType=0)"
    },
    "dropdown-menu>active>a": {
        "color": "#222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#0a0a0a",
        "backgroundImage": "linear-gradient(to bottom, #171717 0%, #0a0a0a 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF171717', endColorstr='#FF0A0A0A', GradientType=0)"
    },
    "dropdown-menu>active>a:hover": {
        "color": "#222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#0a0a0a",
        "backgroundImage": "linear-gradient(to bottom, #171717 0%, #0a0a0a 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF171717', endColorstr='#FF0A0A0A', GradientType=0)"
    },
    "dropdown-menu>active>a:focus": {
        "color": "#222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#0a0a0a",
        "backgroundImage": "linear-gradient(to bottom, #171717 0%, #0a0a0a 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF171717', endColorstr='#FF0A0A0A', GradientType=0)"
    },
    "dropdown-menu>disabled>a": {
        "color": "rgba(237,237,237,0.11)"
    },
    "dropdown-menu>disabled>a:hover": {
        "color": "rgba(237,237,237,0.11)",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "allowed"
    },
    "dropdown-menu>disabled>a:focus": {
        "color": "rgba(237,237,237,0.11)",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "allowed"
    },
    "open>dropdown-menu": {
        "display": "block"
    },
    "open>a": {
        "outline": 0
    },
    "dropdown-menu-right": {
        "left": "auto",
        "right": 0
    },
    "dropdown-menu-left": {
        "left": 0,
        "right": "auto"
    },
    "dropdown-header": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "fontSize": 9,
        "lineHeight": 1.42857,
        "color": "rgba(255,255,255,0.11)",
        "whiteSpace": "nowrap"
    },
    "dropdown-backdrop": {
        "position": "fixed",
        "left": 0,
        "right": 0,
        "bottom": 0,
        "top": 0,
        "zIndex": 990
    },
    "pull-right>dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "dropup caret": {
        "borderTop": 0,
        "borderBottom": "4px solid \\9",
        "content": ""
    },
    "navbar-fixed-bottom dropdown caret": {
        "borderTop": 0,
        "borderBottom": "4px solid \\9",
        "content": ""
    },
    "dropup dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "navbar-fixed-bottom dropdown dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "btn-group": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group-vertical": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group>btn": {
        "position": "relative",
        "float": "left"
    },
    "btn-group-vertical>btn": {
        "position": "relative",
        "float": "none",
        "display": "block",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group>btn:hover": {
        "zIndex": 2
    },
    "btn-group>btn:focus": {
        "zIndex": 2
    },
    "btn-group>btn:active": {
        "zIndex": 2
    },
    "btn-group>btnactive": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:hover": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:focus": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:active": {
        "zIndex": 2
    },
    "btn-group-vertical>btnactive": {
        "zIndex": 2
    },
    "btn-group btn+btn": {
        "marginLeft": -1
    },
    "btn-group btn+btn-group": {
        "marginLeft": -1
    },
    "btn-group btn-group+btn": {
        "marginLeft": -1
    },
    "btn-group btn-group+btn-group": {
        "marginLeft": -1
    },
    "btn-toolbar": {
        "marginLeft": -5
    },
    "btn-toolbar:before": {
        "content": " ",
        "display": "table"
    },
    "btn-toolbar:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "btn-toolbar btn": {
        "float": "left"
    },
    "btn-toolbar btn-group": {
        "float": "left"
    },
    "btn-toolbar input-group": {
        "float": "left"
    },
    "btn-toolbar>btn": {
        "marginLeft": 5
    },
    "btn-toolbar>btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar>input-group": {
        "marginLeft": 5
    },
    "btn-group>btn:not(:first-child):not(:last-child):not(dropdown-toggle)": {
        "borderRadius": 0
    },
    "btn-group>btn:first-child": {
        "marginLeft": 0
    },
    "btn-group>btn:first-child:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn:last-child:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group>dropdown-toggle:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group>btn-group": {
        "float": "left"
    },
    "btn-group>btn-group:not(:first-child):not(:last-child)>btn": {
        "borderRadius": 0
    },
    "btn-group>btn-group:first-child:not(:last-child)>btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn-group:first-child:not(:last-child)>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn-group:last-child:not(:first-child)>btn:first-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group dropdown-toggle:active": {
        "outline": 0
    },
    "btn-groupopen dropdown-toggle": {
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btn-group>btn+dropdown-toggle": {
        "paddingLeft": 8,
        "paddingRight": 8
    },
    "btn-group>btn-lg+dropdown-toggle": {
        "paddingLeft": 12,
        "paddingRight": 12
    },
    "btn-group-lgbtn-group>btn+dropdown-toggle": {
        "paddingLeft": 12,
        "paddingRight": 12
    },
    "btn-groupopen dropdown-togglebtn-link": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn caret": {
        "marginLeft": 0
    },
    "btn-lg caret": {
        "borderWidth": "6px 6px 0",
        "borderBottomWidth": 0
    },
    "btn-group-lg>btn caret": {
        "borderWidth": "6px 6px 0",
        "borderBottomWidth": 0
    },
    "dropup btn-lg caret": {
        "borderWidth": "0 6px 6px"
    },
    "dropup btn-group-lg>btn caret": {
        "borderWidth": "0 6px 6px"
    },
    "btn-group-vertical>btn-group": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical>btn-group>btn": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical>btn-group:before": {
        "content": " ",
        "display": "table"
    },
    "btn-group-vertical>btn-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "btn-group-vertical>btn+btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn+btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn-group+btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn-group+btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "btn-group-vertical>btn:first-child:not(:last-child)": {
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn:last-child:not(:first-child)": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "btn-group-vertical>btn-group:not(:first-child):not(:last-child)>btn": {
        "borderRadius": 0
    },
    "btn-group-vertical>btn-group:first-child:not(:last-child)>btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn-group:first-child:not(:last-child)>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn-group:last-child:not(:first-child)>btn:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group-justified": {
        "display": "table",
        "width": "100%",
        "tableLayout": "fixed",
        "borderCollapse": "separate"
    },
    "btn-group-justified>btn": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified>btn-group": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified>btn-group btn": {
        "width": "100%"
    },
    "btn-group-justified>btn-group dropdown-menu": {
        "left": "auto"
    },
    "[data-toggle=\"buttons\"]>btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"]>btn input[type=\"checkbox\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"]>btn-group>btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"]>btn-group>btn input[type=\"checkbox\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "input-group": {
        "position": "relative",
        "display": "table",
        "borderCollapse": "separate"
    },
    "input-group[class*=\"col-\"]": {
        "float": "none",
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group form-control": {
        "position": "relative",
        "zIndex": 2,
        "float": "left",
        "width": "100%",
        "marginBottom": 0,
        "display": "table-cell"
    },
    "input-group form-control:focus": {
        "zIndex": 3
    },
    "input-group-addon": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "fontSize": 14,
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#a8ffff",
        "textAlign": "center",
        "backgroundColor": "#303030",
        "border": "1px solid #a8ffff",
        "borderRadius": 4
    },
    "input-group-btn": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "position": "relative",
        "fontSize": 0
    },
    "input-group-addon:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group form-control:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-addoninput-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "borderRadius": 3
    },
    "input-group-sm>input-group-btn>input-group-addonbtn": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "borderRadius": 3
    },
    "input-group-addoninput-lg": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "borderRadius": 6
    },
    "input-group-lg>input-group-btn>input-group-addonbtn": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "borderRadius": 6
    },
    "input-group-addon input[type=\"radio\"]": {
        "marginTop": 0
    },
    "input-group-addon input[type=\"checkbox\"]": {
        "marginTop": 0
    },
    "input-group form-control:first-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-addon:first-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0,
        "borderRight": 0
    },
    "input-group-btn:first-child>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0,
        "marginRight": -1
    },
    "input-group-btn:first-child>btn-group>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:first-child>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child>btn:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child>btn-group:not(:last-child)>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group form-control:last-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-addon:last-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "borderLeft": 0
    },
    "input-group-btn:last-child>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "zIndex": 2,
        "marginLeft": -1
    },
    "input-group-btn:last-child>btn-group>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:last-child>dropdown-toggle": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:first-child>btn:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:first-child>btn-group:not(:first-child)>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn>btn": {
        "position": "relative"
    },
    "input-group-btn>btn+btn": {
        "marginLeft": -1
    },
    "input-group-btn>btn:hover": {
        "zIndex": 2
    },
    "input-group-btn>btn:focus": {
        "zIndex": 2
    },
    "input-group-btn>btn:active": {
        "zIndex": 2
    },
    "input-group-btn:first-child>btn-group": {
        "marginRight": -1
    },
    "input-group-btn:last-child>btn-group": {
        "zIndex": 2,
        "marginLeft": -1
    },
    "nav:before": {
        "content": " ",
        "display": "table"
    },
    "nav:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "nav>li": {
        "position": "relative",
        "display": "block"
    },
    "nav>li>a": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "nav>li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#4a4a4a"
    },
    "nav>li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#4a4a4a"
    },
    "nav>lidisabled>a": {
        "color": "rgba(237,237,237,0.11)"
    },
    "nav>lidisabled>a:hover": {
        "color": "#222",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "allowed"
    },
    "nav>lidisabled>a:focus": {
        "color": "#222",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "allowed"
    },
    "nav open>a": {
        "backgroundColor": "#4a4a4a",
        "borderColor": "#a8ffff"
    },
    "nav open>a:hover": {
        "backgroundColor": "#4a4a4a",
        "borderColor": "#a8ffff"
    },
    "nav open>a:focus": {
        "backgroundColor": "#4a4a4a",
        "borderColor": "#a8ffff"
    },
    "nav nav-divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5"
    },
    "nav>li>a>img": {
        "maxWidth": "none"
    },
    "nav-tabs": {
        "borderBottom": "1px solid #a8ffff"
    },
    "nav-tabs>li": {
        "float": "left",
        "marginBottom": -1
    },
    "nav-tabs>li>a": {
        "marginRight": 2,
        "lineHeight": 1.42857,
        "border": "1px solid transparent",
        "borderRadius": "4px 4px 0 0"
    },
    "nav-tabs>li>a:hover": {
        "borderColor": "#a8ffff #a8ffff #a8ffff"
    },
    "nav-tabs>liactive>a": {
        "color": "#222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs>liactive>a:hover": {
        "color": "#222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs>liactive>a:focus": {
        "color": "#222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-pills>li": {
        "float": "left"
    },
    "nav-pills>li>a": {
        "borderRadius": 4
    },
    "nav-pills>li+li": {
        "marginLeft": 2
    },
    "nav-pills>liactive>a": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-pills>liactive>a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-pills>liactive>a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-stacked>li": {
        "float": "none"
    },
    "nav-stacked>li+li": {
        "marginTop": 2,
        "marginLeft": 0
    },
    "nav-justified": {
        "width": "100%"
    },
    "nav-tabsnav-justified": {
        "width": "100%",
        "borderBottom": 0
    },
    "nav-justified>li": {
        "float": "none"
    },
    "nav-tabsnav-justified>li": {
        "float": "none"
    },
    "nav-justified>li>a": {
        "textAlign": "center",
        "marginBottom": 5
    },
    "nav-tabsnav-justified>li>a": {
        "textAlign": "center",
        "marginBottom": 5,
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-justified>dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabs-justified": {
        "borderBottom": 0
    },
    "nav-tabs-justified>li>a": {
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabs-justified>active>a": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabsnav-justified>active>a": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabs-justified>active>a:hover": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabsnav-justified>active>a:hover": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabs-justified>active>a:focus": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabsnav-justified>active>a:focus": {
        "border": "1px solid #a8ffff"
    },
    "tab-content>tab-pane": {
        "display": "none"
    },
    "tab-content>active": {
        "display": "block"
    },
    "nav-tabs dropdown-menu": {
        "marginTop": -1,
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "navbar": {
        "position": "relative",
        "minHeight": 30,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "boxShadow": "0 0 8px #a8ffff",
        "maxHeight": 30
    },
    "navbar:before": {
        "content": " ",
        "display": "table"
    },
    "navbar:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-header:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-collapse": {
        "overflowX": "visible",
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1)",
        "WebkitOverflowScrolling": "touch"
    },
    "navbar-collapse:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-collapse:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-collapsein": {
        "overflowY": "auto"
    },
    "navbar-fixed-top navbar-collapse": {
        "maxHeight": 340
    },
    "navbar-fixed-bottom navbar-collapse": {
        "maxHeight": 340
    },
    "container>navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container>navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid>navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid>navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "navbar-static-top": {
        "zIndex": 1000,
        "borderWidth": "0 0 1px",
        "borderRadius": 0
    },
    "navbar-fixed-top": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "top": 0,
        "borderWidth": "0 0 1px",
        "borderRadius": 0
    },
    "navbar-fixed-bottom": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "bottom": 0,
        "marginBottom": 0,
        "borderWidth": "1px 0 0",
        "borderRadius": 0
    },
    "navbar-brand": {
        "float": "left",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "fontSize": 18,
        "lineHeight": 20,
        "height": 30,
        "textShadow": "0 1px 0 rgba(255,255,255,0.25)"
    },
    "navbar-brand:hover": {
        "textDecoration": "none"
    },
    "navbar-brand:focus": {
        "textDecoration": "none"
    },
    "navbar-brand>img": {
        "display": "block"
    },
    "navbar-toggle": {
        "position": "relative",
        "float": "right",
        "marginRight": 15,
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 10,
        "marginTop": -2,
        "marginBottom": -2,
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "navbar-toggle:focus": {
        "outline": 0
    },
    "navbar-toggle icon-bar": {
        "display": "block",
        "width": 22,
        "height": 2,
        "borderRadius": 1
    },
    "navbar-toggle icon-bar+icon-bar": {
        "marginTop": 4
    },
    "navbar-nav": {
        "marginTop": 2.5,
        "marginRight": -15,
        "marginBottom": 2.5,
        "marginLeft": -15
    },
    "navbar-nav>li>a": {
        "paddingTop": 10,
        "paddingBottom": 10,
        "lineHeight": 20,
        "textShadow": "0 1px 0 rgba(255,255,255,0.25)"
    },
    "navbar-form": {
        "marginLeft": -15,
        "marginRight": -15,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1)",
        "marginTop": -4,
        "marginBottom": -4
    },
    "navbar-nav>li>dropdown-menu": {
        "marginTop": 0,
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "navbar-fixed-bottom navbar-nav>li>dropdown-menu": {
        "marginBottom": 0,
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "navbar-btn": {
        "marginTop": -4,
        "marginBottom": -4
    },
    "navbar-btnbtn-sm": {
        "marginTop": 2.5,
        "marginBottom": 2.5
    },
    "btn-group-sm>navbar-btnbtn": {
        "marginTop": 2.5,
        "marginBottom": 2.5
    },
    "navbar-btnbtn-xs": {
        "marginTop": 4,
        "marginBottom": 4
    },
    "btn-group-xs>navbar-btnbtn": {
        "marginTop": 4,
        "marginBottom": 4
    },
    "navbar-text": {
        "marginTop": 5,
        "marginBottom": 5
    },
    "navbar-default": {
        "backgroundColor": "#242424",
        "borderColor": "#222",
        "backgroundImage": "linear-gradient(to bottom, #3e3e3e 0%, #242424 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 5px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15),0 1px 5px rgba(0,0,0,0.075)"
    },
    "navbar-default navbar-brand": {
        "color": "#0b0b0b"
    },
    "navbar-default navbar-brand:hover": {
        "color": "#0b0b0b",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-brand:focus": {
        "color": "#0b0b0b",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-text": {
        "color": "#b2b2b2,0.11"
    },
    "navbar-default navbar-nav>li>a": {
        "color": "#a8ffff"
    },
    "navbar-default navbar-nav>li>a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav>li>a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav>active>a": {
        "color": "#a8ffff",
        "backgroundColor": "#101010",
        "backgroundImage": "linear-gradient(to bottom, #030303 0%, #0b0b0b 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF030303', endColorstr='#FF0B0B0B', GradientType=0)",
        "WebkitBoxShadow": "inset 0 3px 9px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 3px 9px rgba(0,0,0,0.075)"
    },
    "navbar-default navbar-nav>active>a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav>active>a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav>disabled>a": {
        "color": "rgba(237,237,237,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>disabled>a:hover": {
        "color": "rgba(237,237,237,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>disabled>a:focus": {
        "color": "rgba(237,237,237,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#a8ffff"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#242424"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#242424"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "rgba(153,153,153,0.82)"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "#222"
    },
    "navbar-default navbar-form": {
        "borderColor": "#222"
    },
    "navbar-default navbar-nav>open>a": {
        "backgroundColor": "#101010",
        "color": "#a8ffff",
        "backgroundImage": "linear-gradient(to bottom, #030303 0%, #0b0b0b 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF030303', endColorstr='#FF0B0B0B', GradientType=0)",
        "WebkitBoxShadow": "inset 0 3px 9px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 3px 9px rgba(0,0,0,0.075)"
    },
    "navbar-default navbar-nav>open>a:hover": {
        "backgroundColor": "#101010",
        "color": "#a8ffff"
    },
    "navbar-default navbar-nav>open>a:focus": {
        "backgroundColor": "#101010",
        "color": "#a8ffff"
    },
    "navbar-default navbar-link": {
        "color": "#a8ffff"
    },
    "navbar-default navbar-link:hover": {
        "color": "#a8ffff"
    },
    "navbar-default btn-link": {
        "color": "#a8ffff"
    },
    "navbar-default btn-link:hover": {
        "color": "#a8ffff"
    },
    "navbar-default btn-link:focus": {
        "color": "#a8ffff"
    },
    "navbar-default btn-link[disabled]:hover": {
        "color": "rgba(237,237,237,0.11)"
    },
    "navbar-default btn-link[disabled]:focus": {
        "color": "rgba(237,237,237,0.11)"
    },
    "fieldset[disabled] navbar-default btn-link:hover": {
        "color": "rgba(237,237,237,0.11)"
    },
    "fieldset[disabled] navbar-default btn-link:focus": {
        "color": "rgba(237,237,237,0.11)"
    },
    "navbar-inverse": {
        "backgroundColor": "rgba(237,237,237,0.11)",
        "borderColor": "rgba(212,212,212,0.11)",
        "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,0.11) 0%, rgba(237,237,237,0.11) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "borderRadius": 4
    },
    "navbar-inverse navbar-brand": {
        "color": "rgba(204,204,204,0.11)",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.25)"
    },
    "navbar-inverse navbar-brand:hover": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "none"
    },
    "navbar-inverse navbar-brand:focus": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "none"
    },
    "navbar-inverse navbar-text": {
        "color": "rgba(204,204,204,0.11)"
    },
    "navbar-inverse navbar-nav>li>a": {
        "color": "rgba(204,204,204,0.11)",
        "textShadow": "0 -1px 0 rgba(0,0,0,0.25)"
    },
    "navbar-inverse navbar-nav>li>a:hover": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-nav>li>a:focus": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-nav>active>a": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "rgba(206,206,206,0.11)",
        "backgroundImage": "linear-gradient(to bottom, rgba(206,206,206,0.11) 0%, rgba(212,212,212,0.11) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#1CCECECE', endColorstr='#1CD4D4D4', GradientType=0)",
        "WebkitBoxShadow": "inset 0 3px 9px rgba(0,0,0,0.25)",
        "boxShadow": "inset 0 3px 9px rgba(0,0,0,0.25)"
    },
    "navbar-inverse navbar-nav>active>a:hover": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-nav>active>a:focus": {
        "color": "rgba(255,255,255,0.11)",
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-nav>disabled>a": {
        "color": "rgba(204,204,204,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>disabled>a:hover": {
        "color": "rgba(204,204,204,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>disabled>a:focus": {
        "color": "rgba(204,204,204,0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-toggle": {
        "borderColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-toggle:hover": {
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-toggle:focus": {
        "backgroundColor": "rgba(206,206,206,0.11)"
    },
    "navbar-inverse navbar-toggle icon-bar": {
        "backgroundColor": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse navbar-collapse": {
        "borderColor": "rgba(219,219,219,0.11)"
    },
    "navbar-inverse navbar-form": {
        "borderColor": "rgba(219,219,219,0.11)"
    },
    "navbar-inverse navbar-nav>open>a": {
        "backgroundColor": "rgba(206,206,206,0.11)",
        "color": "rgba(255,255,255,0.11)",
        "backgroundImage": "linear-gradient(to bottom, rgba(206,206,206,0.11) 0%, rgba(212,212,212,0.11) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#1CCECECE', endColorstr='#1CD4D4D4', GradientType=0)",
        "WebkitBoxShadow": "inset 0 3px 9px rgba(0,0,0,0.25)",
        "boxShadow": "inset 0 3px 9px rgba(0,0,0,0.25)"
    },
    "navbar-inverse navbar-nav>open>a:hover": {
        "backgroundColor": "rgba(206,206,206,0.11)",
        "color": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse navbar-nav>open>a:focus": {
        "backgroundColor": "rgba(206,206,206,0.11)",
        "color": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse navbar-link": {
        "color": "rgba(204,204,204,0.11)"
    },
    "navbar-inverse navbar-link:hover": {
        "color": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse btn-link": {
        "color": "rgba(204,204,204,0.11)"
    },
    "navbar-inverse btn-link:hover": {
        "color": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse btn-link:focus": {
        "color": "rgba(255,255,255,0.11)"
    },
    "navbar-inverse btn-link[disabled]:hover": {
        "color": "rgba(204,204,204,0.11)"
    },
    "navbar-inverse btn-link[disabled]:focus": {
        "color": "rgba(204,204,204,0.11)"
    },
    "fieldset[disabled] navbar-inverse btn-link:hover": {
        "color": "rgba(204,204,204,0.11)"
    },
    "fieldset[disabled] navbar-inverse btn-link:focus": {
        "color": "rgba(204,204,204,0.11)"
    },
    "breadcrumb": {
        "paddingTop": 30,
        "paddingRight": 15,
        "paddingBottom": 30,
        "paddingLeft": 15,
        "marginBottom": 20,
        "listStyle": "none",
        "backgroundColor": "transparent",
        "borderRadius": 4
    },
    "breadcrumb>li": {
        "display": "inline-block"
    },
    "breadcrumb>li+li:before": {
        "content": "» ",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#ccc"
    },
    "breadcrumb>active": {
        "color": "#b2b2b2"
    },
    "pagination": {
        "display": "table",
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": 4
    },
    "pagination>li": {
        "display": "inline"
    },
    "pagination>li>a": {
        "position": "relative",
        "float": "left",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "lineHeight": 1.42857,
        "textDecoration": "none",
        "color": "#a8ffff",
        "backgroundColor": "#333",
        "border": "1px solid rgba(0,0,0,0.6)",
        "marginLeft": -1
    },
    "pagination>li>span": {
        "position": "relative",
        "float": "left",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "lineHeight": 1.42857,
        "textDecoration": "none",
        "color": "#a8ffff",
        "backgroundColor": "#333",
        "border": "1px solid rgba(0,0,0,0.6)",
        "marginLeft": -1
    },
    "pagination>li:first-child>a": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination>li:first-child>span": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination>li:last-child>a": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination>li:last-child>span": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination>li>a:hover": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0,0,0,0.6)"
    },
    "pagination>li>a:focus": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0,0,0,0.6)"
    },
    "pagination>li>span:hover": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0,0,0,0.6)"
    },
    "pagination>li>span:focus": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0,0,0,0.6)"
    },
    "pagination>active>a": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>active>a:hover": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>active>a:focus": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>active>span": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>active>span:hover": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>active>span:focus": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "default"
    },
    "pagination>disabled>span": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination>disabled>span:hover": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination>disabled>span:focus": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination>disabled>a": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination>disabled>a:hover": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination>disabled>a:focus": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255,255,255,0.11)",
        "borderColor": "rgba(0,0,0,0.6)",
        "cursor": "allowed"
    },
    "pagination-lg>li>a": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33
    },
    "pagination-lg>li>span": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33
    },
    "pagination-lg>li:first-child>a": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg>li:first-child>span": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg>li:last-child>a": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-lg>li:last-child>span": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-sm>li>a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5
    },
    "pagination-sm>li>span": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5
    },
    "pagination-sm>li:first-child>a": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm>li:first-child>span": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm>li:last-child>a": {
        "borderBottomRightRadius": 3,
        "borderTopRightRadius": 3
    },
    "pagination-sm>li:last-child>span": {
        "borderBottomRightRadius": 3,
        "borderTopRightRadius": 3
    },
    "pager": {
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "pager:before": {
        "content": " ",
        "display": "table"
    },
    "pager:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "pager li": {
        "display": "inline"
    },
    "pager li>a": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#333",
        "border": "1px solid #a8ffff",
        "borderRadius": 15
    },
    "pager li>span": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#333",
        "border": "1px solid #a8ffff",
        "borderRadius": 15
    },
    "pager li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "pager li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "pager next>a": {
        "float": "right"
    },
    "pager next>span": {
        "float": "right"
    },
    "pager previous>a": {
        "float": "left"
    },
    "pager previous>span": {
        "float": "left"
    },
    "pager disabled>a": {
        "color": "rgba(150,150,150,0.41)",
        "backgroundColor": "#333",
        "cursor": "allowed"
    },
    "pager disabled>a:hover": {
        "color": "rgba(150,150,150,0.41)",
        "backgroundColor": "#333",
        "cursor": "allowed"
    },
    "pager disabled>a:focus": {
        "color": "rgba(150,150,150,0.41)",
        "backgroundColor": "#333",
        "cursor": "allowed"
    },
    "pager disabled>span": {
        "color": "rgba(150,150,150,0.41)",
        "backgroundColor": "#333",
        "cursor": "allowed"
    },
    "label:empty": {
        "display": "none"
    },
    "btn label": {
        "position": "relative",
        "top": -1
    },
    "alabel:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "label-default": {
        "backgroundColor": "#333"
    },
    "label-default[href]:hover": {
        "backgroundColor": "#1a1a1a"
    },
    "label-default[href]:focus": {
        "backgroundColor": "#1a1a1a"
    },
    "label-primary": {
        "backgroundColor": "#a8ffff"
    },
    "label-primary[href]:hover": {
        "backgroundColor": "#75ffff"
    },
    "label-primary[href]:focus": {
        "backgroundColor": "#75ffff"
    },
    "label-success": {
        "backgroundColor": "#6f0"
    },
    "label-success[href]:hover": {
        "backgroundColor": "#52cc00"
    },
    "label-success[href]:focus": {
        "backgroundColor": "#52cc00"
    },
    "label-info": {
        "backgroundColor": "#710570"
    },
    "label-info[href]:hover": {
        "backgroundColor": "#400340"
    },
    "label-info[href]:focus": {
        "backgroundColor": "#400340"
    },
    "label-warning": {
        "backgroundColor": "#fd971f"
    },
    "label-warning[href]:hover": {
        "backgroundColor": "#e77e02"
    },
    "label-warning[href]:focus": {
        "backgroundColor": "#e77e02"
    },
    "label-danger": {
        "backgroundColor": "#f92672"
    },
    "label-danger[href]:hover": {
        "backgroundColor": "#e60657"
    },
    "label-danger[href]:focus": {
        "backgroundColor": "#e60657"
    },
    "badge": {
        "display": "inline-block",
        "minWidth": 10,
        "paddingTop": 3,
        "paddingRight": 7,
        "paddingBottom": 3,
        "paddingLeft": 7,
        "fontSize": 9,
        "fontWeight": "bold",
        "color": "#a8ffff",
        "lineHeight": 1,
        "verticalAlign": "middle",
        "whiteSpace": "nowrap",
        "textAlign": "center",
        "backgroundColor": "#b2b2b2",
        "borderRadius": 10
    },
    "badge:empty": {
        "display": "none"
    },
    "btn badge": {
        "position": "relative",
        "top": -1
    },
    "btn-xs badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "btn-group-xs>btn badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "list-group-itemactive>badge": {
        "color": "#a8ffff",
        "backgroundColor": "#b2b2b2"
    },
    "nav-pills>active>a>badge": {
        "color": "#a8ffff",
        "backgroundColor": "#b2b2b2"
    },
    "list-group-item>badge": {
        "float": "right"
    },
    "list-group-item>badge+badge": {
        "marginRight": 5
    },
    "nav-pills>li>a>badge": {
        "marginLeft": 3
    },
    "abadge:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "abadge:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "jumbotron": {
        "paddingTop": 30,
        "paddingBottom": 30,
        "marginBottom": 30,
        "color": "inherit",
        "backgroundColor": "#0a0a0a"
    },
    "jumbotron h1": {
        "color": "#a8ffff"
    },
    "jumbotron p": {
        "marginBottom": 15,
        "fontSize": 21,
        "fontWeight": "200"
    },
    "jumbotron>hr": {
        "borderTopColor": "#000"
    },
    "container jumbotron": {
        "borderRadius": 6,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container-fluid jumbotron": {
        "borderRadius": 6,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "jumbotron container": {
        "maxWidth": "100%"
    },
    "thumbnail": {
        "display": "block",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "marginBottom": 20,
        "lineHeight": 1.42857,
        "backgroundColor": "rgba(8,8,8,0.8)",
        "border": "1px solid rgba(0,0,0,0.94)",
        "borderRadius": 4,
        "WebkitTransition": "border 0.2s ease-in-out",
        "OTransition": "border 0.2s ease-in-out",
        "transition": "border 0.2s ease-in-out",
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,0.075)",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.075)"
    },
    "thumbnail>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "100%",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail a>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "100%",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#ccc"
    },
    "athumbnail:hover": {
        "borderColor": "#a8ffff"
    },
    "athumbnail:focus": {
        "borderColor": "#a8ffff"
    },
    "athumbnailactive": {
        "borderColor": "#a8ffff"
    },
    "alert": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "textShadow": "0 1px 0 rgba(255,255,255,0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,0.25),0 1px 2px rgba(0,0,0,0.05)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25),0 1px 2px rgba(0,0,0,0.05)"
    },
    "alert h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "alert alert-link": {
        "fontWeight": "700"
    },
    "alert>p": {
        "marginBottom": 0
    },
    "alert>ul": {
        "marginBottom": 0
    },
    "alert>p+p": {
        "marginTop": 5
    },
    "alert-dismissable": {
        "paddingRight": 35
    },
    "alert-dismissible": {
        "paddingRight": 35
    },
    "alert-dismissable close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-dismissible close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-success": {
        "backgroundColor": "rgba(102,255,0,0.3)",
        "borderColor": "rgba(71,179,0,0.3)",
        "color": "#710570",
        "backgroundImage": "linear-gradient(to bottom, rgba(102,255,0,0.3) 0%, rgba(87,217,0,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4D66FF00', endColorstr='#4D57D900', GradientType=0)"
    },
    "alert-success hr": {
        "borderTopColor": "#5ce600"
    },
    "alert-success alert-link": {
        "color": "#400340"
    },
    "alert-info": {
        "backgroundColor": "rgba(0,217,255,0.3)",
        "borderColor": "rgba(0,152,179,0.3)",
        "color": "#fd971f",
        "backgroundImage": "linear-gradient(to bottom, rgba(0,217,255,0.3) 0%, rgba(0,184,217,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4D00D9FF', endColorstr='#4D00B8D9', GradientType=0)"
    },
    "alert-info hr": {
        "borderTopColor": "#8fffff"
    },
    "alert-info alert-link": {
        "color": "#e77e02"
    },
    "alert-warning": {
        "backgroundColor": "rgba(253,151,31,0.3)",
        "borderColor": "rgba(206,112,2,0.3)",
        "color": "#a8ffff",
        "backgroundImage": "linear-gradient(to bottom, rgba(253,151,31,0.3) 0%, rgba(244,133,2,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4DFD971F', endColorstr='#4DF48502', GradientType=0)"
    },
    "alert-warning hr": {
        "borderTopColor": "#fd8b06"
    },
    "alert-warning alert-link": {
        "color": "#75ffff"
    },
    "alert-danger": {
        "backgroundColor": "rgba(249,38,114,0.3)",
        "borderColor": "rgba(205,6,77,0.3)",
        "color": "#6f0",
        "backgroundImage": "linear-gradient(to bottom, rgba(249,38,114,0.3) 0%, rgba(242,7,91,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4DF92672', endColorstr='#4DF2075B', GradientType=0)"
    },
    "alert-danger hr": {
        "borderTopColor": "#f80d62"
    },
    "alert-danger alert-link": {
        "color": "#52cc00"
    },
    "progress-bar": {
        "float": "left",
        "width": "0%",
        "height": "100%",
        "fontSize": 9,
        "lineHeight": 20,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#a8ffff",
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0,0,0,0.15)",
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,0.15)",
        "WebkitTransition": "width 0.6s ease",
        "OTransition": "width 0.6s ease",
        "transition": "width 0.6s ease",
        "backgroundImage": "linear-gradient(to bottom, #a8ffff 0%, #75ffff 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFA8FFFF', endColorstr='#FF75FFFF', GradientType=0)"
    },
    "progress-striped progress-bar": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
        "backgroundSize": "40px 40px"
    },
    "progress-bar-striped": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
        "backgroundSize": "40px 40px"
    },
    "progressactive progress-bar": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "OAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-baractive": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "OAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-bar-success": {
        "backgroundColor": "#6f0",
        "backgroundImage": "linear-gradient(to bottom, #6f0 0%, #52cc00 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF66FF00', endColorstr='#FF52CC00', GradientType=0)"
    },
    "progress-striped progress-bar-success": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-info": {
        "backgroundColor": "#710570",
        "backgroundImage": "linear-gradient(to bottom, #710570 0%, #400340 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF710570', endColorstr='#FF400340', GradientType=0)"
    },
    "progress-striped progress-bar-info": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-warning": {
        "backgroundColor": "#fd971f",
        "backgroundImage": "linear-gradient(to bottom, #fd971f 0%, #e77e02 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFD971F', endColorstr='#FFE77E02', GradientType=0)"
    },
    "progress-striped progress-bar-warning": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-danger": {
        "backgroundColor": "#f92672",
        "backgroundImage": "linear-gradient(to bottom, #f92672 0%, #e60657 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF92672', endColorstr='#FFE60657', GradientType=0)"
    },
    "progress-striped progress-bar-danger": {
        "backgroundImage": "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)"
    },
    "media": {
        "marginTop": 15,
        "zoom": 1,
        "overflow": "hidden"
    },
    "media:first-child": {
        "marginTop": 0
    },
    "media-body": {
        "zoom": 1,
        "overflow": "hidden",
        "width": 10000,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media-object": {
        "display": "block"
    },
    "media-objectimg-thumbnail": {
        "maxWidth": "none"
    },
    "media-right": {
        "paddingLeft": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-right": {
        "paddingLeft": 10
    },
    "media-left": {
        "paddingRight": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-left": {
        "paddingRight": 10
    },
    "media-middle": {
        "verticalAlign": "middle"
    },
    "media-bottom": {
        "verticalAlign": "bottom"
    },
    "media-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "media-list": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-group": {
        "marginBottom": 20,
        "paddingLeft": 0,
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,0.075)",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.075)"
    },
    "list-group-item": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginBottom": -1,
        "backgroundColor": "#242424",
        "border": "1px solid #a8ffff"
    },
    "list-group-item:first-child": {
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4
    },
    "list-group-item:last-child": {
        "marginBottom": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "alist-group-item": {
        "color": "#fff"
    },
    "buttonlist-group-item": {
        "color": "#fff",
        "width": "100%",
        "textAlign": "left"
    },
    "alist-group-item list-group-item-heading": {
        "color": "#a8ffff"
    },
    "buttonlist-group-item list-group-item-heading": {
        "color": "#a8ffff"
    },
    "alist-group-item:hover": {
        "textDecoration": "none",
        "color": "#fff",
        "backgroundColor": "#4a4a4a"
    },
    "alist-group-item:focus": {
        "textDecoration": "none",
        "color": "#fff",
        "backgroundColor": "#4a4a4a"
    },
    "buttonlist-group-item:hover": {
        "textDecoration": "none",
        "color": "#fff",
        "backgroundColor": "#4a4a4a"
    },
    "buttonlist-group-item:focus": {
        "textDecoration": "none",
        "color": "#fff",
        "backgroundColor": "#4a4a4a"
    },
    "list-group-itemdisabled": {
        "backgroundColor": "rgba(181,181,181,0.11)",
        "color": "rgba(122,130,136,0.11)",
        "cursor": "allowed"
    },
    "list-group-itemdisabled:hover": {
        "backgroundColor": "rgba(181,181,181,0.11)",
        "color": "rgba(122,130,136,0.11)",
        "cursor": "allowed"
    },
    "list-group-itemdisabled:focus": {
        "backgroundColor": "rgba(181,181,181,0.11)",
        "color": "rgba(122,130,136,0.11)",
        "cursor": "allowed"
    },
    "list-group-itemdisabled list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled list-group-item-text": {
        "color": "rgba(122,130,136,0.11)"
    },
    "list-group-itemdisabled:hover list-group-item-text": {
        "color": "rgba(122,130,136,0.11)"
    },
    "list-group-itemdisabled:focus list-group-item-text": {
        "color": "rgba(122,130,136,0.11)"
    },
    "list-group-itemactive": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#82ffff",
        "textShadow": "0 -1px 0 #171717",
        "backgroundImage": "linear-gradient(to bottom, #313131 0%, #1d1d1d 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF313131', endColorstr='#FF1D1D1D', GradientType=0)"
    },
    "list-group-itemactive:hover": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#82ffff",
        "textShadow": "0 -1px 0 #171717",
        "backgroundImage": "linear-gradient(to bottom, #313131 0%, #1d1d1d 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF313131', endColorstr='#FF1D1D1D', GradientType=0)"
    },
    "list-group-itemactive:focus": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#82ffff",
        "textShadow": "0 -1px 0 #171717",
        "backgroundImage": "linear-gradient(to bottom, #313131 0%, #1d1d1d 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF313131', endColorstr='#FF1D1D1D', GradientType=0)"
    },
    "list-group-itemactive list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-text": {
        "color": "#a8ffff"
    },
    "list-group-itemactive:hover list-group-item-text": {
        "color": "#a8ffff"
    },
    "list-group-itemactive:focus list-group-item-text": {
        "color": "#a8ffff"
    },
    "list-group-item-success": {
        "color": "#6f0",
        "backgroundColor": "rgba(102,255,0,0.3)"
    },
    "alist-group-item-success": {
        "color": "#6f0"
    },
    "buttonlist-group-item-success": {
        "color": "#6f0"
    },
    "alist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-success:hover": {
        "color": "#6f0",
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "alist-group-item-success:focus": {
        "color": "#6f0",
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "buttonlist-group-item-success:hover": {
        "color": "#6f0",
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "buttonlist-group-item-success:focus": {
        "color": "#6f0",
        "backgroundColor": "rgba(92,230,0,0.3)"
    },
    "alist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "alist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "alist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "buttonlist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "buttonlist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "buttonlist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#6f0",
        "borderColor": "#6f0"
    },
    "list-group-item-info": {
        "color": "#710570",
        "backgroundColor": "rgba(113,5,112,0.3)"
    },
    "alist-group-item-info": {
        "color": "#710570"
    },
    "buttonlist-group-item-info": {
        "color": "#710570"
    },
    "alist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-info:hover": {
        "color": "#710570",
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "alist-group-item-info:focus": {
        "color": "#710570",
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "buttonlist-group-item-info:hover": {
        "color": "#710570",
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "buttonlist-group-item-info:focus": {
        "color": "#710570",
        "backgroundColor": "rgba(89,4,88,0.3)"
    },
    "alist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "alist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "alist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "buttonlist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "buttonlist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "buttonlist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "list-group-item-warning": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253,151,31,0.3)"
    },
    "alist-group-item-warning": {
        "color": "#fd971f"
    },
    "buttonlist-group-item-warning": {
        "color": "#fd971f"
    },
    "alist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-warning:hover": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "alist-group-item-warning:focus": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "buttonlist-group-item-warning:hover": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "buttonlist-group-item-warning:focus": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253,139,6,0.3)"
    },
    "alist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "alist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "alist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "buttonlist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "buttonlist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "buttonlist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "list-group-item-danger": {
        "color": "#f92672",
        "backgroundColor": "rgba(249,38,114,0.3)"
    },
    "alist-group-item-danger": {
        "color": "#f92672"
    },
    "buttonlist-group-item-danger": {
        "color": "#f92672"
    },
    "alist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-danger:hover": {
        "color": "#f92672",
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "alist-group-item-danger:focus": {
        "color": "#f92672",
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "buttonlist-group-item-danger:hover": {
        "color": "#f92672",
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "buttonlist-group-item-danger:focus": {
        "color": "#f92672",
        "backgroundColor": "rgba(248,13,98,0.3)"
    },
    "alist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "alist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "alist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "buttonlist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "buttonlist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "buttonlist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "list-group-item-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "list-group-item-text": {
        "marginBottom": 0,
        "lineHeight": 1.3
    },
    "panel": {
        "marginBottom": 20,
        "backgroundColor": "#1f1f1f",
        "border": "1px solid transparent",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,0.05)",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.05)"
    },
    "panel-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "panel-body:before": {
        "content": " ",
        "display": "table"
    },
    "panel-body:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "panel-heading": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "borderBottom": "1px solid transparent",
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel-heading>dropdown dropdown-toggle": {
        "color": "inherit"
    },
    "panel-title": {
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 16,
        "color": "inherit"
    },
    "panel-title>a": {
        "color": "inherit"
    },
    "panel-title>small": {
        "color": "inherit"
    },
    "panel-title>small>a": {
        "color": "inherit"
    },
    "panel-footer": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "backgroundColor": "rgba(237,237,237,0.11)",
        "borderTop": "1px solid #222",
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>list-group": {
        "marginBottom": 0
    },
    "panel>panel-collapse>list-group": {
        "marginBottom": 0
    },
    "panel>list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel>panel-collapse>list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel>list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>panel-collapse>list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>panel-collapse>list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>panel-heading+panel-collapse>list-group list-group-item:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "panel-heading+list-group list-group-item:first-child": {
        "borderTopWidth": 0
    },
    "list-group+panel-footer": {
        "borderTopWidth": 0
    },
    "panel>table": {
        "marginBottom": 0
    },
    "panel>table-responsive>table": {
        "marginBottom": 0
    },
    "panel>panel-collapse>table": {
        "marginBottom": 0
    },
    "panel>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>table-responsive>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>panel-collapse>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>panel-body+table": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel>panel-body+table-responsive": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel>table+panel-body": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel>table-responsive+panel-body": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel>table>tbody:first-child>tr:first-child th": {
        "borderTop": 0
    },
    "panel>table>tbody:first-child>tr:first-child td": {
        "borderTop": 0
    },
    "panel>table-bordered": {
        "border": 0
    },
    "panel>table-responsive>table-bordered": {
        "border": 0
    },
    "panel>table-bordered>thead>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>thead>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tbody>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tbody>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tfoot>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tfoot>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>thead>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>thead>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tbody>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tbody>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tfoot>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tfoot>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>thead>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>thead>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>thead>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>thead>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>tfoot>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tfoot>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive": {
        "border": 0,
        "marginBottom": 0
    },
    "panel-group": {
        "marginBottom": 20
    },
    "panel-group panel": {
        "marginBottom": 0,
        "borderRadius": 4
    },
    "panel-group panel+panel": {
        "marginTop": 5
    },
    "panel-group panel-heading": {
        "borderBottom": 0
    },
    "panel-group panel-heading+panel-collapse>panel-body": {
        "borderTop": "1px solid #222"
    },
    "panel-group panel-heading+panel-collapse>list-group": {
        "borderTop": "1px solid #222"
    },
    "panel-group panel-footer": {
        "borderTop": 0
    },
    "panel-group panel-footer+panel-collapse panel-body": {
        "borderBottom": "1px solid #222"
    },
    "panel-default": {
        "borderColor": "#a8ffff"
    },
    "panel-default>panel-heading": {
        "color": "#ccc",
        "backgroundColor": "#313131",
        "borderColor": "#a8ffff",
        "backgroundImage": "linear-gradient(to bottom, #313131 0%, #242424 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF313131', endColorstr='#FF242424', GradientType=0)"
    },
    "panel-default>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#a8ffff"
    },
    "panel-default>panel-heading badge": {
        "color": "#313131",
        "backgroundColor": "#ccc"
    },
    "panel-default>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#a8ffff"
    },
    "panel-primary": {
        "borderColor": "#a8ffff"
    },
    "panel-primary>panel-heading": {
        "color": "#6f0",
        "backgroundColor": "rgba(168,255,255,0.3)",
        "borderColor": "#a8ffff",
        "backgroundImage": "linear-gradient(to bottom, rgba(168,255,255,0.3) 0%, rgba(143,255,255,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4DA8FFFF', endColorstr='#4D8FFFFF', GradientType=0)"
    },
    "panel-primary>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#a8ffff"
    },
    "panel-primary>panel-heading badge": {
        "color": "rgba(168,255,255,0.3)",
        "backgroundColor": "#6f0"
    },
    "panel-primary>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#a8ffff"
    },
    "panel-success": {
        "borderColor": "#6f0"
    },
    "panel-success>panel-heading": {
        "color": "#710570",
        "backgroundColor": "rgba(102,255,0,0.3)",
        "borderColor": "#6f0",
        "backgroundImage": "linear-gradient(to bottom, rgba(102,255,0,0.3) 0%, rgba(92,230,0,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4D66FF00', endColorstr='#4D5CE600', GradientType=0)"
    },
    "panel-success>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#6f0"
    },
    "panel-success>panel-heading badge": {
        "color": "rgba(102,255,0,0.3)",
        "backgroundColor": "#710570"
    },
    "panel-success>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#6f0"
    },
    "panel-info": {
        "borderColor": "#710570"
    },
    "panel-info>panel-heading": {
        "color": "#6f0",
        "backgroundColor": "rgba(113,5,112,0.3)",
        "borderColor": "#710570",
        "backgroundImage": "linear-gradient(to bottom, rgba(113,5,112,0.3) 0%, rgba(89,4,88,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4D710570', endColorstr='#4D590458', GradientType=0)"
    },
    "panel-info>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#710570"
    },
    "panel-info>panel-heading badge": {
        "color": "rgba(113,5,112,0.3)",
        "backgroundColor": "#6f0"
    },
    "panel-info>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#710570"
    },
    "panel-warning": {
        "borderColor": "#fd971f"
    },
    "panel-warning>panel-heading": {
        "color": "#a8ffff",
        "backgroundColor": "rgba(253,151,31,0.3)",
        "borderColor": "#fd971f",
        "backgroundImage": "linear-gradient(to bottom, rgba(253,151,31,0.3) 0%, rgba(253,139,6,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4DFD971F', endColorstr='#4DFD8B06', GradientType=0)"
    },
    "panel-warning>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#fd971f"
    },
    "panel-warning>panel-heading badge": {
        "color": "rgba(253,151,31,0.3)",
        "backgroundColor": "#a8ffff"
    },
    "panel-warning>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#fd971f"
    },
    "panel-danger": {
        "borderColor": "#f92672"
    },
    "panel-danger>panel-heading": {
        "color": "#fd971f",
        "backgroundColor": "rgba(249,38,114,0.3)",
        "borderColor": "#f92672",
        "backgroundImage": "linear-gradient(to bottom, rgba(249,38,114,0.3) 0%, rgba(248,13,98,0.3) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4DF92672', endColorstr='#4DF80D62', GradientType=0)"
    },
    "panel-danger>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#f92672"
    },
    "panel-danger>panel-heading badge": {
        "color": "rgba(249,38,114,0.3)",
        "backgroundColor": "#fd971f"
    },
    "panel-danger>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#f92672"
    },
    "embed-responsive": {
        "position": "relative",
        "display": "block",
        "height": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "embed-responsive embed-responsive-item": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive iframe": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive embed": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive object": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive video": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive-16by9": {
        "paddingBottom": "56.25%"
    },
    "embed-responsive-4by3": {
        "paddingBottom": "75%"
    },
    "well": {
        "minHeight": 20,
        "paddingTop": 19,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19,
        "marginBottom": 20,
        "backgroundColor": "rgba(9,9,9,0.78)",
        "border": "1px solid #828282",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.05)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.05)",
        "backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(9,9,9,0.78) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#C7000000', endColorstr='#C7090909', GradientType=0)",
        "borderColor": "rgba(0,0,0,0.78)"
    },
    "well blockquote": {
        "borderColor": "rgba(0,0,0,0.15)"
    },
    "well-lg": {
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "borderRadius": 6
    },
    "well-sm": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "borderRadius": 3
    },
    "close": {
        "float": "right",
        "fontSize": 21,
        "fontWeight": "700",
        "lineHeight": 1,
        "color": "#000",
        "textShadow": "0 1px 0 #fff",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "close:hover": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "close:focus": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "buttonclose": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "transparent",
        "border": 0,
        "WebkitAppearance": "none"
    },
    "modal-open": {
        "overflow": "hidden"
    },
    "modal": {
        "display": "none",
        "overflow": "hidden",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1050,
        "WebkitOverflowScrolling": "touch",
        "outline": 0
    },
    "modalfade modal-dialog": {
        "WebkitTransform": "translate(0, -25%)",
        "MsTransform": "translate(0, -25%)",
        "OTransform": "translate(0, -25%)",
        "transform": "translate(0, -25%)",
        "WebkitTransition": "-webkit-transform 0.3s ease-out",
        "MozTransition": "-moz-transform 0.3s ease-out",
        "OTransition": "-o-transform 0.3s ease-out",
        "transition": "transform 0.3s ease-out"
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#1f1f1f",
        "border": "1px solid #a8ffff",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 3px 9px rgba(0,0,0,0.5)",
        "boxShadow": "0 3px 9px rgba(0,0,0,0.5)",
        "backgroundClip": "padding-box",
        "outline": 0
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "backgroundColor": "#000"
    },
    "modal-backdropfade": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "modal-backdropin": {
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "modal-header": {
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "borderBottom": "1px solid #000"
    },
    "modal-header:before": {
        "content": " ",
        "display": "table"
    },
    "modal-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.42857
    },
    "modal-body": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10
    },
    "modal-footer": {
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "textAlign": "right",
        "borderTop": "1px solid #000"
    },
    "modal-footer:before": {
        "content": " ",
        "display": "table"
    },
    "modal-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-footer btn+btn": {
        "marginLeft": 5,
        "marginBottom": 0
    },
    "modal-footer btn-group btn+btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block+btn-block": {
        "marginLeft": 0
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "tooltip": {
        "position": "absolute",
        "zIndex": 1070,
        "display": "block",
        "fontFamily": "Open Sans",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "letterSpacing": "normal",
        "lineBreak": "auto",
        "lineHeight": 1.42857,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "whiteSpace": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "fontSize": 9,
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "tooltipin": {
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "tooltiptop": {
        "marginTop": -3,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "tooltipright": {
        "marginLeft": 3,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "tooltipbottom": {
        "marginTop": 3,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "tooltipleft": {
        "marginLeft": -3,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "tooltip-inner": {
        "maxWidth": 200,
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "color": "#a8ffff",
        "textAlign": "center",
        "backgroundColor": "rgba(0,0,0,0.9)",
        "borderRadius": 4
    },
    "tooltip-arrow": {
        "position": "absolute",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid"
    },
    "tooltiptop tooltip-arrow": {
        "bottom": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#a8ffff"
    },
    "tooltiptop-left tooltip-arrow": {
        "bottom": 0,
        "right": 5,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#a8ffff"
    },
    "tooltiptop-right tooltip-arrow": {
        "bottom": 0,
        "left": 5,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#a8ffff"
    },
    "tooltipright tooltip-arrow": {
        "top": "50%",
        "left": 0,
        "marginTop": -5,
        "borderWidth": "5px 5px 5px 0",
        "borderRightColor": "#a8ffff"
    },
    "tooltipleft tooltip-arrow": {
        "top": "50%",
        "right": 0,
        "marginTop": -5,
        "borderWidth": "5px 0 5px 5px",
        "borderLeftColor": "#a8ffff"
    },
    "tooltipbottom tooltip-arrow": {
        "top": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#a8ffff"
    },
    "tooltipbottom-left tooltip-arrow": {
        "top": 0,
        "right": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#a8ffff"
    },
    "tooltipbottom-right tooltip-arrow": {
        "top": 0,
        "left": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#a8ffff"
    },
    "popover": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1060,
        "display": "none",
        "maxWidth": 276,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "fontFamily": "Open Sans",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "letterSpacing": "normal",
        "lineBreak": "auto",
        "lineHeight": 1.42857,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "whiteSpace": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "fontSize": 14,
        "backgroundColor": "#242424",
        "backgroundClip": "padding-box",
        "border": "1px solid #a8ffff",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 5px 10px rgba(0,0,0,0.2)",
        "boxShadow": "0 5px 10px rgba(0,0,0,0.2)"
    },
    "popovertop": {
        "marginTop": -10
    },
    "popoverright": {
        "marginLeft": 10
    },
    "popoverbottom": {
        "marginTop": 10
    },
    "popoverleft": {
        "marginLeft": -10
    },
    "popover-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 8,
        "paddingRight": 14,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "fontSize": 14,
        "backgroundColor": "#242424",
        "borderBottom": "1px solid #171717",
        "borderRadius": "5px 5px 0 0"
    },
    "popover-content": {
        "paddingTop": 9,
        "paddingRight": 14,
        "paddingBottom": 9,
        "paddingLeft": 14
    },
    "popover>arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 11
    },
    "popover>arrow:after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 10,
        "content": ""
    },
    "popovertop>arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderBottomWidth": 0,
        "borderTopColor": "fadein(#a8ffff, 5%)",
        "bottom": -11
    },
    "popovertop>arrow:after": {
        "content": " ",
        "bottom": 1,
        "marginLeft": -10,
        "borderBottomWidth": 0,
        "borderTopColor": "#242424"
    },
    "popoverright>arrow": {
        "top": "50%",
        "left": -11,
        "marginTop": -11,
        "borderLeftWidth": 0,
        "borderRightColor": "fadein(#a8ffff, 5%)"
    },
    "popoverright>arrow:after": {
        "content": " ",
        "left": 1,
        "bottom": -10,
        "borderLeftWidth": 0,
        "borderRightColor": "#242424"
    },
    "popoverbottom>arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderTopWidth": 0,
        "borderBottomColor": "fadein(#a8ffff, 5%)",
        "top": -11
    },
    "popoverbottom>arrow:after": {
        "content": " ",
        "top": 1,
        "marginLeft": -10,
        "borderTopWidth": 0,
        "borderBottomColor": "#242424"
    },
    "popoverleft>arrow": {
        "top": "50%",
        "right": -11,
        "marginTop": -11,
        "borderRightWidth": 0,
        "borderLeftColor": "fadein(#a8ffff, 5%)"
    },
    "popoverleft>arrow:after": {
        "content": " ",
        "right": 1,
        "borderRightWidth": 0,
        "borderLeftColor": "#242424",
        "bottom": -10
    },
    "carousel": {
        "position": "relative",
        "height": "auto",
        "marginBottom": 60
    },
    "carousel-inner": {
        "position": "relative",
        "overflow": "hidden",
        "width": "100%"
    },
    "carousel-inner>item": {
        "display": "none",
        "position": "relative",
        "WebkitTransition": "0.6s ease-in-out left",
        "OTransition": "0.6s ease-in-out left",
        "transition": "0.6s ease-in-out left"
    },
    "carousel-inner>item>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "100%",
        "lineHeight": 1,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "minWidth": "100%"
    },
    "carousel-inner>item>a>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "100%",
        "lineHeight": 1
    },
    "carousel-inner>active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner>next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner>prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner>nextleft": {
        "left": 0
    },
    "carousel-inner>prevright": {
        "left": 0
    },
    "carousel-inner>activeleft": {
        "left": "-100%"
    },
    "carousel-inner>activeright": {
        "left": "100%"
    },
    "carousel-control": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": "15%",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)",
        "fontSize": 20,
        "color": "#a8ffff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0,0,0,0.6)",
        "backgroundColor": "transparent"
    },
    "carousel-controlleft": {
        "backgroundImage": "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.0001) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)"
    },
    "carousel-controlright": {
        "left": "auto",
        "right": 0,
        "backgroundImage": "linear-gradient(to right, rgba(0,0,0,0.0001) 0%, rgba(0,0,0,0.5) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)"
    },
    "carousel-control:hover": {
        "outline": 0,
        "color": "#a8ffff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control:focus": {
        "outline": 0,
        "color": "#a8ffff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control icon-prev": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "left": "50%",
        "marginLeft": -10,
        "width": 20,
        "height": 20,
        "lineHeight": 1,
        "fontFamily": "serif"
    },
    "carousel-control icon-next": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "right": "50%",
        "marginRight": -10,
        "width": 20,
        "height": 20,
        "lineHeight": 1,
        "fontFamily": "serif"
    },
    "carousel-control glyphicon-chevron-left": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "left": "50%",
        "marginLeft": -10
    },
    "carousel-control glyphicon-chevron-right": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "right": "50%",
        "marginRight": -10
    },
    "carousel-control icon-prev:before": {
        "content": "'\\2039'"
    },
    "carousel-control icon-next:before": {
        "content": "'\\203a'"
    },
    "carousel-indicators": {
        "position": "absolute",
        "bottom": 10,
        "left": "50%",
        "zIndex": 15,
        "width": "60%",
        "marginLeft": "-30%",
        "paddingLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "carousel-indicators li": {
        "display": "inline-block",
        "width": 10,
        "height": 10,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "textIndent": -999,
        "border": "1px solid #a8ffff",
        "borderRadius": 10,
        "cursor": "pointer",
        "backgroundColor": "transparent"
    },
    "carousel-indicators active": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 12,
        "height": 12,
        "backgroundColor": "#a8ffff"
    },
    "carousel-caption": {
        "position": "absolute",
        "left": "15%",
        "right": "15%",
        "bottom": 20,
        "zIndex": 10,
        "paddingTop": 20,
        "paddingBottom": 20,
        "color": "#b5b5b5",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0,0,0,0.6)"
    },
    "carousel-caption btn": {
        "textShadow": "none"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "center-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "pull-right": {
        "float": "right !important"
    },
    "pull-left": {
        "float": "left !important"
    },
    "hide": {
        "display": "none !important"
    },
    "show": {
        "display": "block !important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "hidden": {
        "display": "none !important"
    },
    "affix": {
        "position": "fixed"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-xs": {
        "display": "none !important"
    },
    "visible-sm": {
        "display": "none !important"
    },
    "visible-md": {
        "display": "none !important"
    },
    "visible-lg": {
        "display": "none !important"
    },
    "visible-xs-block": {
        "display": "none !important"
    },
    "visible-xs-inline": {
        "display": "none !important"
    },
    "visible-xs-inline-block": {
        "display": "none !important"
    },
    "visible-sm-block": {
        "display": "none !important"
    },
    "visible-sm-inline": {
        "display": "none !important"
    },
    "visible-sm-inline-block": {
        "display": "none !important"
    },
    "visible-md-block": {
        "display": "none !important"
    },
    "visible-md-inline": {
        "display": "none !important"
    },
    "visible-md-inline-block": {
        "display": "none !important"
    },
    "visible-lg-block": {
        "display": "none !important"
    },
    "visible-lg-inline": {
        "display": "none !important"
    },
    "visible-lg-inline-block": {
        "display": "none !important"
    },
    "visible-print": {
        "display": "none !important"
    },
    "visible-print-block": {
        "display": "none !important"
    },
    "visible-print-inline": {
        "display": "none !important"
    },
    "visible-print-inline-block": {
        "display": "none !important"
    },
    "body>container": {
        "paddingTop": 60,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "container text-muted": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "footer>container": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "i": {
        "fontFamily": "'0065-Licensed-to-Maim' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-heart:before": {
        "content": "♥"
    },
    "icon-zap:before": {
        "content": "⚡"
    },
    "icon-mobile:before": {
        "content": ""
    },
    "icon-laptop:before": {
        "content": ""
    },
    "icon-desktop:before": {
        "content": ""
    },
    "icon-tablet:before": {
        "content": ""
    },
    "icon-phone:before": {
        "content": ""
    },
    "icon-document:before": {
        "content": ""
    },
    "icon-documents:before": {
        "content": ""
    },
    "icon-search:before": {
        "content": ""
    },
    "icon-clipboard:before": {
        "content": ""
    },
    "icon-newspaper:before": {
        "content": ""
    },
    "icon-notebook:before": {
        "content": ""
    },
    "icon-book-open:before": {
        "content": ""
    },
    "icon-browser:before": {
        "content": ""
    },
    "icon-calendar:before": {
        "content": ""
    },
    "icon-presentation:before": {
        "content": ""
    },
    "icon-picture:before": {
        "content": ""
    },
    "icon-pictures:before": {
        "content": ""
    },
    "icon-video:before": {
        "content": ""
    },
    "icon-camera:before": {
        "content": ""
    },
    "icon-printer:before": {
        "content": ""
    },
    "icon-toolbox:before": {
        "content": ""
    },
    "icon-briefcase:before": {
        "content": ""
    },
    "icon-wallet:before": {
        "content": ""
    },
    "icon-gift:before": {
        "content": ""
    },
    "icon-bargraph:before": {
        "content": ""
    },
    "icon-grid:before": {
        "content": ""
    },
    "icon-expand:before": {
        "content": ""
    },
    "icon-focus:before": {
        "content": ""
    },
    "icon-edit:before": {
        "content": ""
    },
    "icon-adjustments:before": {
        "content": ""
    },
    "icon-ribbon:before": {
        "content": ""
    },
    "icon-hourglass:before": {
        "content": ""
    },
    "icon-lock:before": {
        "content": ""
    },
    "icon-megaphone:before": {
        "content": ""
    },
    "icon-shield:before": {
        "content": ""
    },
    "icon-trophy:before": {
        "content": ""
    },
    "icon-flag:before": {
        "content": ""
    },
    "icon-map:before": {
        "content": ""
    },
    "icon-puzzle:before": {
        "content": ""
    },
    "icon-basket:before": {
        "content": ""
    },
    "icon-envelope:before": {
        "content": ""
    },
    "icon-streetsign:before": {
        "content": ""
    },
    "icon-telescope:before": {
        "content": ""
    },
    "icon-gears:before": {
        "content": ""
    },
    "icon-key:before": {
        "content": ""
    },
    "icon-paperclip:before": {
        "content": ""
    },
    "icon-attachment:before": {
        "content": ""
    },
    "icon-pricetags:before": {
        "content": ""
    },
    "icon-lightbulb:before": {
        "content": ""
    },
    "icon-layers:before": {
        "content": ""
    },
    "icon-pencil:before": {
        "content": ""
    },
    "icon-tools:before": {
        "content": ""
    },
    "icon-tools-2:before": {
        "content": ""
    },
    "icon-scissors:before": {
        "content": ""
    },
    "icon-paintbrush:before": {
        "content": ""
    },
    "icon-magnifying-glass:before": {
        "content": ""
    },
    "icon-circle-compass:before": {
        "content": ""
    },
    "icon-linegraph:before": {
        "content": ""
    },
    "icon-mic:before": {
        "content": ""
    },
    "icon-strategy:before": {
        "content": ""
    },
    "icon-beaker:before": {
        "content": ""
    },
    "icon-caution:before": {
        "content": ""
    },
    "icon-recycle:before": {
        "content": ""
    },
    "icon-anchor:before": {
        "content": ""
    },
    "icon-profile-male:before": {
        "content": ""
    },
    "icon-profile-female:before": {
        "content": ""
    },
    "icon-bike:before": {
        "content": ""
    },
    "icon-wine:before": {
        "content": ""
    },
    "icon-hotairballoon:before": {
        "content": ""
    },
    "icon-globe:before": {
        "content": ""
    },
    "icon-genius:before": {
        "content": ""
    },
    "icon-map-pin:before": {
        "content": ""
    },
    "icon-dial:before": {
        "content": ""
    },
    "icon-chat:before": {
        "content": ""
    },
    "icon-heart2:before": {
        "content": ""
    },
    "icon-cloud:before": {
        "content": ""
    },
    "icon-upload:before": {
        "content": ""
    },
    "icon-download:before": {
        "content": ""
    },
    "icon-target:before": {
        "content": ""
    },
    "icon-hazardous:before": {
        "content": ""
    },
    "icon-piechart:before": {
        "content": ""
    },
    "icon-speedometer:before": {
        "content": ""
    },
    "icon-global:before": {
        "content": ""
    },
    "icon-compass:before": {
        "content": ""
    },
    "icon-lifesaver:before": {
        "content": ""
    },
    "icon-clock:before": {
        "content": ""
    },
    "icon-aperture:before": {
        "content": ""
    },
    "icon-quote:before": {
        "content": ""
    },
    "icon-scope:before": {
        "content": ""
    },
    "icon-alarmclock:before": {
        "content": ""
    },
    "icon-refresh:before": {
        "content": ""
    },
    "icon-happy:before": {
        "content": ""
    },
    "icon-sad:before": {
        "content": ""
    },
    "icon-facebook:before": {
        "content": ""
    },
    "icon-twitter:before": {
        "content": ""
    },
    "icon-googleplus:before": {
        "content": ""
    },
    "icon-rss:before": {
        "content": ""
    },
    "icon-tumblr:before": {
        "content": ""
    },
    "icon-linkedin:before": {
        "content": ""
    },
    "icon-dribbble:before": {
        "content": ""
    },
    "icon-type:before": {
        "content": ""
    },
    "icon-box:before": {
        "content": ""
    },
    "icon-archive:before": {
        "content": ""
    },
    "icon-envelope2:before": {
        "content": ""
    },
    "icon-email:before": {
        "content": ""
    },
    "icon-files:before": {
        "content": ""
    },
    "icon-uniE906:before": {
        "content": ""
    },
    "icon-file-settings:before": {
        "content": ""
    },
    "icon-file-add:before": {
        "content": ""
    },
    "icon-file:before": {
        "content": ""
    },
    "icon-align-left:before": {
        "content": ""
    },
    "icon-align-right:before": {
        "content": ""
    },
    "icon-align-center:before": {
        "content": ""
    },
    "icon-align-justify:before": {
        "content": ""
    },
    "icon-file-broken:before": {
        "content": ""
    },
    "icon-browser2:before": {
        "content": ""
    },
    "icon-windows:before": {
        "content": ""
    },
    "icon-window:before": {
        "content": ""
    },
    "icon-folder:before": {
        "content": ""
    },
    "icon-folder-add:before": {
        "content": ""
    },
    "icon-folder-settings:before": {
        "content": ""
    },
    "icon-folder-check:before": {
        "content": ""
    },
    "icon-wifi-low:before": {
        "content": ""
    },
    "icon-wifi-mid:before": {
        "content": ""
    },
    "icon-wifi-full:before": {
        "content": ""
    },
    "icon-connection-empty:before": {
        "content": ""
    },
    "icon-connection-25:before": {
        "content": ""
    },
    "icon-connection-50:before": {
        "content": ""
    },
    "icon-connection-75:before": {
        "content": ""
    },
    "icon-connection-full:before": {
        "content": ""
    },
    "icon-list:before": {
        "content": ""
    },
    "icon-grid2:before": {
        "content": ""
    },
    "icon-uniE920:before": {
        "content": ""
    },
    "icon-battery-charging:before": {
        "content": ""
    },
    "icon-battery-empty:before": {
        "content": ""
    },
    "icon-battery-25:before": {
        "content": ""
    },
    "icon-battery-50:before": {
        "content": ""
    },
    "icon-battery-75:before": {
        "content": ""
    },
    "icon-battery-full:before": {
        "content": ""
    },
    "icon-settings:before": {
        "content": ""
    },
    "icon-arrow-left:before": {
        "content": ""
    },
    "icon-arrow-up:before": {
        "content": ""
    },
    "icon-arrow-down:before": {
        "content": ""
    },
    "icon-arrow-right:before": {
        "content": ""
    },
    "icon-reload:before": {
        "content": ""
    },
    "icon-refresh2:before": {
        "content": ""
    },
    "icon-volume:before": {
        "content": ""
    },
    "icon-volume-increase:before": {
        "content": ""
    },
    "icon-volume-decrease:before": {
        "content": ""
    },
    "icon-mute:before": {
        "content": ""
    },
    "icon-microphone:before": {
        "content": ""
    },
    "icon-microphone-off:before": {
        "content": ""
    },
    "icon-book:before": {
        "content": ""
    },
    "icon-checkmark:before": {
        "content": ""
    },
    "icon-checkbox-checked:before": {
        "content": ""
    },
    "icon-checkbox:before": {
        "content": ""
    },
    "icon-paperclip2:before": {
        "content": ""
    },
    "icon-download2:before": {
        "content": ""
    },
    "icon-tag:before": {
        "content": ""
    },
    "icon-trashcan:before": {
        "content": ""
    },
    "icon-search2:before": {
        "content": ""
    },
    "icon-zoomin:before": {
        "content": ""
    },
    "icon-zoomout:before": {
        "content": ""
    },
    "icon-chat2:before": {
        "content": ""
    },
    "icon-chat-1:before": {
        "content": ""
    },
    "icon-chat-2:before": {
        "content": ""
    },
    "icon-chat-3:before": {
        "content": ""
    },
    "icon-comment:before": {
        "content": ""
    },
    "icon-calendar2:before": {
        "content": ""
    },
    "icon-bookmark:before": {
        "content": ""
    },
    "icon-email2:before": {
        "content": ""
    },
    "icon-heart3:before": {
        "content": ""
    },
    "icon-enter:before": {
        "content": ""
    },
    "icon-cloud2:before": {
        "content": ""
    },
    "icon-book2:before": {
        "content": ""
    },
    "icon-star:before": {
        "content": ""
    },
    "icon-clock2:before": {
        "content": ""
    },
    "icon-printer2:before": {
        "content": ""
    },
    "icon-home:before": {
        "content": ""
    },
    "icon-flag2:before": {
        "content": ""
    },
    "icon-meter:before": {
        "content": ""
    },
    "icon-switch:before": {
        "content": ""
    },
    "icon-forbidden:before": {
        "content": ""
    },
    "icon-lock2:before": {
        "content": ""
    },
    "icon-unlocked:before": {
        "content": ""
    },
    "icon-unlocked2:before": {
        "content": ""
    },
    "icon-users:before": {
        "content": ""
    },
    "icon-user:before": {
        "content": ""
    },
    "icon-users2:before": {
        "content": ""
    },
    "icon-user2:before": {
        "content": ""
    },
    "icon-bullhorn:before": {
        "content": ""
    },
    "icon-share:before": {
        "content": ""
    },
    "icon-screen:before": {
        "content": ""
    },
    "icon-phone2:before": {
        "content": ""
    },
    "icon-phone-portrait:before": {
        "content": ""
    },
    "icon-phone-landscape:before": {
        "content": ""
    },
    "icon-tablet2:before": {
        "content": ""
    },
    "icon-tablet-landscape:before": {
        "content": ""
    },
    "icon-laptop2:before": {
        "content": ""
    },
    "icon-camera2:before": {
        "content": ""
    },
    "icon-microwaveoven:before": {
        "content": ""
    },
    "icon-creditcards:before": {
        "content": ""
    },
    "icon-calculator:before": {
        "content": ""
    },
    "icon-bag:before": {
        "content": ""
    },
    "icon-diamond:before": {
        "content": ""
    },
    "icon-drink:before": {
        "content": ""
    },
    "icon-shorts:before": {
        "content": ""
    },
    "icon-vcard:before": {
        "content": ""
    },
    "icon-sun:before": {
        "content": ""
    },
    "icon-bill:before": {
        "content": ""
    },
    "icon-coffee:before": {
        "content": ""
    },
    "icon-uniE96F:before": {
        "content": ""
    },
    "icon-newspaper2:before": {
        "content": ""
    },
    "icon-stack:before": {
        "content": ""
    },
    "icon-mapmarker:before": {
        "content": ""
    },
    "icon-map2:before": {
        "content": ""
    },
    "icon-support:before": {
        "content": ""
    },
    "icon-uniE975:before": {
        "content": ""
    },
    "icon-barbell:before": {
        "content": ""
    },
    "icon-stopwatch:before": {
        "content": ""
    },
    "icon-atom:before": {
        "content": ""
    },
    "icon-syringe:before": {
        "content": ""
    },
    "icon-health:before": {
        "content": ""
    },
    "icon-bolt:before": {
        "content": ""
    },
    "icon-pill:before": {
        "content": ""
    },
    "icon-bones:before": {
        "content": ""
    },
    "icon-lab:before": {
        "content": ""
    },
    "icon-clipboard2:before": {
        "content": ""
    },
    "icon-mug:before": {
        "content": ""
    },
    "icon-bucket:before": {
        "content": ""
    },
    "icon-select:before": {
        "content": ""
    },
    "icon-graph:before": {
        "content": ""
    },
    "icon-crop:before": {
        "content": ""
    },
    "icon-image:before": {
        "content": ""
    },
    "icon-cube:before": {
        "content": ""
    },
    "icon-bars:before": {
        "content": ""
    },
    "icon-chart:before": {
        "content": ""
    },
    "icon-pencil2:before": {
        "content": ""
    },
    "icon-measure:before": {
        "content": ""
    },
    "icon-eyedropper:before": {
        "content": ""
    },
    "icon-times:before": {
        "content": ""
    },
    "icon-tick:before": {
        "content": ""
    },
    "icon-plus:before": {
        "content": ""
    },
    "icon-minus:before": {
        "content": ""
    },
    "icon-equals:before": {
        "content": ""
    },
    "icon-divide:before": {
        "content": ""
    },
    "icon-chevron-right:before": {
        "content": ""
    },
    "icon-chevron-left:before": {
        "content": ""
    },
    "icon-arrow-right-thick:before": {
        "content": ""
    },
    "icon-arrow-left-thick:before": {
        "content": ""
    },
    "icon-th-small:before": {
        "content": ""
    },
    "icon-th-menu:before": {
        "content": ""
    },
    "icon-th-list:before": {
        "content": ""
    },
    "icon-th-large:before": {
        "content": ""
    },
    "icon-home2:before": {
        "content": ""
    },
    "icon-arrow-forward:before": {
        "content": ""
    },
    "icon-arrow-back:before": {
        "content": ""
    },
    "icon-rss2:before": {
        "content": ""
    },
    "icon-location:before": {
        "content": ""
    },
    "icon-link:before": {
        "content": ""
    },
    "icon-image2:before": {
        "content": ""
    },
    "icon-arrow-up-thick:before": {
        "content": ""
    },
    "icon-arrow-down-thick:before": {
        "content": ""
    },
    "icon-starburst:before": {
        "content": ""
    },
    "icon-starburst-outline:before": {
        "content": ""
    },
    "icon-star2:before": {
        "content": ""
    },
    "icon-flow-children:before": {
        "content": ""
    },
    "icon-export:before": {
        "content": ""
    },
    "icon-delete:before": {
        "content": ""
    },
    "icon-delete-outline:before": {
        "content": ""
    },
    "icon-cloud-storage:before": {
        "content": ""
    },
    "icon-wi-fi:before": {
        "content": ""
    },
    "icon-heart4:before": {
        "content": ""
    },
    "icon-flash:before": {
        "content": ""
    },
    "icon-cancel:before": {
        "content": ""
    },
    "icon-backspace:before": {
        "content": ""
    },
    "icon-attachment2:before": {
        "content": ""
    },
    "icon-arrow-move:before": {
        "content": ""
    },
    "icon-warning:before": {
        "content": ""
    },
    "icon-user3:before": {
        "content": ""
    },
    "icon-radar:before": {
        "content": ""
    },
    "icon-lock-open:before": {
        "content": ""
    },
    "icon-lock-closed:before": {
        "content": ""
    },
    "icon-location-arrow:before": {
        "content": ""
    },
    "icon-info:before": {
        "content": ""
    },
    "icon-user-delete:before": {
        "content": ""
    },
    "icon-user-add:before": {
        "content": ""
    },
    "icon-media-pause:before": {
        "content": ""
    },
    "icon-group:before": {
        "content": ""
    },
    "icon-chart-pie:before": {
        "content": ""
    },
    "icon-chart-line:before": {
        "content": ""
    },
    "icon-chart-bar:before": {
        "content": ""
    },
    "icon-chart-area:before": {
        "content": ""
    },
    "icon-video2:before": {
        "content": ""
    },
    "icon-point-of-interest:before": {
        "content": ""
    },
    "icon-infinity:before": {
        "content": ""
    },
    "icon-globe2:before": {
        "content": ""
    },
    "icon-eye:before": {
        "content": ""
    },
    "icon-cog:before": {
        "content": ""
    },
    "icon-camera3:before": {
        "content": ""
    },
    "icon-upload2:before": {
        "content": ""
    },
    "icon-scissors2:before": {
        "content": ""
    },
    "icon-refresh3:before": {
        "content": ""
    },
    "icon-pin:before": {
        "content": ""
    },
    "icon-key2:before": {
        "content": ""
    },
    "icon-info-large:before": {
        "content": ""
    },
    "icon-eject:before": {
        "content": ""
    },
    "icon-download3:before": {
        "content": ""
    },
    "icon-zoom:before": {
        "content": ""
    },
    "icon-zoom-out:before": {
        "content": ""
    },
    "icon-zoom-in:before": {
        "content": ""
    },
    "icon-sort-numerically:before": {
        "content": ""
    },
    "icon-sort-alphabetically:before": {
        "content": ""
    },
    "icon-input-checked:before": {
        "content": ""
    },
    "icon-calender:before": {
        "content": ""
    },
    "icon-world:before": {
        "content": ""
    },
    "icon-notes:before": {
        "content": ""
    },
    "icon-code:before": {
        "content": ""
    },
    "icon-arrow-sync:before": {
        "content": ""
    },
    "icon-arrow-shuffle:before": {
        "content": ""
    },
    "icon-arrow-repeat:before": {
        "content": ""
    },
    "icon-arrow-minimise:before": {
        "content": ""
    },
    "icon-arrow-maximise:before": {
        "content": ""
    },
    "icon-arrow-loop:before": {
        "content": ""
    },
    "icon-anchor2:before": {
        "content": ""
    },
    "icon-spanner:before": {
        "content": ""
    },
    "icon-puzzle2:before": {
        "content": ""
    },
    "icon-power:before": {
        "content": ""
    },
    "icon-plane:before": {
        "content": ""
    },
    "icon-pi:before": {
        "content": ""
    },
    "icon-phone3:before": {
        "content": ""
    },
    "icon-microphone2:before": {
        "content": ""
    },
    "icon-media-rewind:before": {
        "content": ""
    },
    "icon-flag3:before": {
        "content": ""
    },
    "icon-adjust-brightness:before": {
        "content": ""
    },
    "icon-waves:before": {
        "content": ""
    },
    "icon-social-twitter:before": {
        "content": ""
    },
    "icon-social-facebook:before": {
        "content": ""
    },
    "icon-social-dribbble:before": {
        "content": ""
    },
    "icon-media-stop:before": {
        "content": ""
    },
    "icon-media-record:before": {
        "content": ""
    },
    "icon-media-play:before": {
        "content": ""
    },
    "icon-media-fast-forward:before": {
        "content": ""
    },
    "icon-media-eject:before": {
        "content": ""
    },
    "icon-social-vimeo:before": {
        "content": ""
    },
    "icon-social-tumbler:before": {
        "content": ""
    },
    "icon-social-skype:before": {
        "content": ""
    },
    "icon-social-pinterest:before": {
        "content": ""
    },
    "icon-social-linkedin:before": {
        "content": ""
    },
    "icon-social-last-fm:before": {
        "content": ""
    },
    "icon-social-github:before": {
        "content": ""
    },
    "icon-social-flickr:before": {
        "content": ""
    },
    "icon-at:before": {
        "content": ""
    },
    "icon-times-outline:before": {
        "content": ""
    },
    "icon-plus-outline:before": {
        "content": ""
    },
    "icon-minus-outline:before": {
        "content": ""
    },
    "icon-tick-outline:before": {
        "content": ""
    },
    "icon-th-large-outline:before": {
        "content": ""
    },
    "icon-equals-outline:before": {
        "content": ""
    },
    "icon-divide-outline:before": {
        "content": ""
    },
    "icon-chevron-right-outline:before": {
        "content": ""
    },
    "icon-chevron-left-outline:before": {
        "content": ""
    },
    "icon-arrow-right-outline:before": {
        "content": ""
    },
    "icon-arrow-left-outline:before": {
        "content": ""
    },
    "icon-th-small-outline:before": {
        "content": ""
    },
    "icon-th-menu-outline:before": {
        "content": ""
    },
    "icon-th-list-outline:before": {
        "content": ""
    },
    "icon-news:before": {
        "content": ""
    },
    "icon-home-outline:before": {
        "content": ""
    },
    "icon-arrow-up-outline:before": {
        "content": ""
    },
    "icon-arrow-forward-outline:before": {
        "content": ""
    },
    "icon-arrow-down-outline:before": {
        "content": ""
    },
    "icon-arrow-back-outline:before": {
        "content": ""
    },
    "icon-trash:before": {
        "content": ""
    },
    "icon-rss-outline:before": {
        "content": ""
    },
    "icon-message:before": {
        "content": ""
    },
    "icon-location-outline:before": {
        "content": ""
    },
    "icon-link-outline:before": {
        "content": ""
    },
    "icon-image-outline:before": {
        "content": ""
    },
    "icon-export-outline:before": {
        "content": ""
    },
    "icon-cross:before": {
        "content": ""
    },
    "icon-wi-fi-outline:before": {
        "content": ""
    },
    "icon-star-outline:before": {
        "content": ""
    },
    "icon-media-pause-outline:before": {
        "content": ""
    },
    "icon-mail:before": {
        "content": ""
    },
    "icon-heart-outline:before": {
        "content": ""
    },
    "icon-flash-outline:before": {
        "content": ""
    },
    "icon-cancel-outline:before": {
        "content": ""
    },
    "icon-beaker2:before": {
        "content": ""
    },
    "icon-arrow-move-outline:before": {
        "content": ""
    },
    "icon-watch:before": {
        "content": ""
    },
    "icon-warning-outline:before": {
        "content": ""
    },
    "icon-time:before": {
        "content": ""
    },
    "icon-radar-outline:before": {
        "content": ""
    },
    "icon-lock-open-outline:before": {
        "content": ""
    },
    "icon-location-arrow-outline:before": {
        "content": ""
    },
    "icon-info-outline:before": {
        "content": ""
    },
    "icon-backspace-outline:before": {
        "content": ""
    },
    "icon-attachment-outline:before": {
        "content": ""
    },
    "icon-user-outline:before": {
        "content": ""
    },
    "icon-user-delete-outline:before": {
        "content": ""
    },
    "icon-user-add-outline:before": {
        "content": ""
    },
    "icon-lock-closed-outline:before": {
        "content": ""
    },
    "icon-group-outline:before": {
        "content": ""
    },
    "icon-chart-pie-outline:before": {
        "content": ""
    },
    "icon-chart-line-outline:before": {
        "content": ""
    },
    "icon-chart-bar-outline:before": {
        "content": ""
    },
    "icon-chart-area-outline:before": {
        "content": ""
    },
    "icon-video-outline:before": {
        "content": ""
    },
    "icon-point-of-interest-outline:before": {
        "content": ""
    },
    "icon-map3:before": {
        "content": ""
    },
    "icon-key-outline:before": {
        "content": ""
    },
    "icon-infinity-outline:before": {
        "content": ""
    },
    "icon-globe-outline:before": {
        "content": ""
    },
    "icon-eye-outline:before": {
        "content": ""
    },
    "icon-cog-outline:before": {
        "content": ""
    },
    "icon-camera-outline:before": {
        "content": ""
    },
    "icon-upload-outline:before": {
        "content": ""
    },
    "icon-support2:before": {
        "content": ""
    },
    "icon-scissors-outline:before": {
        "content": ""
    },
    "icon-refresh-outline:before": {
        "content": ""
    },
    "icon-info-large-outline:before": {
        "content": ""
    },
    "icon-eject-outline:before": {
        "content": ""
    },
    "icon-download-outline:before": {
        "content": ""
    },
    "icon-battery-mid:before": {
        "content": ""
    },
    "icon-battery-low:before": {
        "content": ""
    },
    "icon-battery-high:before": {
        "content": ""
    },
    "icon-zoom-outline:before": {
        "content": ""
    },
    "icon-zoom-out-outline:before": {
        "content": ""
    },
    "icon-zoom-in-outline:before": {
        "content": ""
    },
    "icon-tag2:before": {
        "content": ""
    },
    "icon-tabs-outline:before": {
        "content": ""
    },
    "icon-pin-outline:before": {
        "content": ""
    },
    "icon-message-typing:before": {
        "content": ""
    },
    "icon-directions:before": {
        "content": ""
    },
    "icon-battery-full2:before": {
        "content": ""
    },
    "icon-battery-charge:before": {
        "content": ""
    },
    "icon-pipette:before": {
        "content": ""
    },
    "icon-pencil3:before": {
        "content": ""
    },
    "icon-folder2:before": {
        "content": ""
    },
    "icon-folder-delete:before": {
        "content": ""
    },
    "icon-folder-add2:before": {
        "content": ""
    },
    "icon-edit2:before": {
        "content": ""
    },
    "icon-document2:before": {
        "content": ""
    },
    "icon-document-delete:before": {
        "content": ""
    },
    "icon-document-add:before": {
        "content": ""
    },
    "icon-brush:before": {
        "content": ""
    },
    "icon-thumbs-up:before": {
        "content": ""
    },
    "icon-thumbs-down:before": {
        "content": ""
    },
    "icon-pen:before": {
        "content": ""
    },
    "icon-sort-numerically-outline:before": {
        "content": ""
    },
    "icon-sort-alphabetically-outline:before": {
        "content": ""
    },
    "icon-social-last-fm-circular:before": {
        "content": ""
    },
    "icon-social-github-circular:before": {
        "content": ""
    },
    "icon-compass2:before": {
        "content": ""
    },
    "icon-bookmark2:before": {
        "content": ""
    },
    "icon-input-checked-outline:before": {
        "content": ""
    },
    "icon-code-outline:before": {
        "content": ""
    },
    "icon-calender-outline:before": {
        "content": ""
    },
    "icon-business-card:before": {
        "content": ""
    },
    "icon-arrow-up2:before": {
        "content": ""
    },
    "icon-arrow-sync-outline:before": {
        "content": ""
    },
    "icon-arrow-right2:before": {
        "content": ""
    },
    "icon-arrow-repeat-outline:before": {
        "content": ""
    },
    "icon-arrow-loop-outline:before": {
        "content": ""
    },
    "icon-arrow-left2:before": {
        "content": ""
    },
    "icon-flow-switch:before": {
        "content": ""
    },
    "icon-flow-parallel:before": {
        "content": ""
    },
    "icon-flow-merge:before": {
        "content": ""
    },
    "icon-document-text:before": {
        "content": ""
    },
    "icon-clipboard3:before": {
        "content": ""
    },
    "icon-calculator2:before": {
        "content": ""
    },
    "icon-arrow-minimise-outline:before": {
        "content": ""
    },
    "icon-arrow-maximise-outline:before": {
        "content": ""
    },
    "icon-arrow-down2:before": {
        "content": ""
    },
    "icon-gift2:before": {
        "content": ""
    },
    "icon-film:before": {
        "content": ""
    },
    "icon-database:before": {
        "content": ""
    },
    "icon-bell:before": {
        "content": ""
    },
    "icon-anchor-outline:before": {
        "content": ""
    },
    "icon-adjust-contrast:before": {
        "content": ""
    },
    "icon-world-outline:before": {
        "content": ""
    },
    "icon-shopping-bag:before": {
        "content": ""
    },
    "icon-power-outline:before": {
        "content": ""
    },
    "icon-notes-outline:before": {
        "content": ""
    },
    "icon-device-tablet:before": {
        "content": ""
    },
    "icon-device-phone:before": {
        "content": ""
    },
    "icon-device-laptop:before": {
        "content": ""
    },
    "icon-device-desktop:before": {
        "content": ""
    },
    "icon-briefcase2:before": {
        "content": ""
    },
    "icon-stopwatch2:before": {
        "content": ""
    },
    "icon-spanner-outline:before": {
        "content": ""
    },
    "icon-puzzle-outline:before": {
        "content": ""
    },
    "icon-printer3:before": {
        "content": ""
    },
    "icon-pi-outline:before": {
        "content": ""
    },
    "icon-lightbulb2:before": {
        "content": ""
    },
    "icon-flag-outline:before": {
        "content": ""
    },
    "icon-contacts:before": {
        "content": ""
    },
    "icon-archive2:before": {
        "content": ""
    },
    "icon-weather-stormy:before": {
        "content": ""
    },
    "icon-weather-shower:before": {
        "content": ""
    },
    "icon-weather-partly-sunny:before": {
        "content": ""
    },
    "icon-weather-downpour:before": {
        "content": ""
    },
    "icon-weather-cloudy:before": {
        "content": ""
    },
    "icon-plane-outline:before": {
        "content": ""
    },
    "icon-phone-outline:before": {
        "content": ""
    },
    "icon-microphone-outline:before": {
        "content": ""
    },
    "icon-weather-windy:before": {
        "content": ""
    },
    "icon-weather-windy-cloudy:before": {
        "content": ""
    },
    "icon-weather-sunny:before": {
        "content": ""
    },
    "icon-weather-snow:before": {
        "content": ""
    },
    "icon-weather-night:before": {
        "content": ""
    },
    "icon-media-stop-outline:before": {
        "content": ""
    },
    "icon-media-rewind-outline:before": {
        "content": ""
    },
    "icon-media-record-outline:before": {
        "content": ""
    },
    "icon-media-play-outline:before": {
        "content": ""
    },
    "icon-media-fast-forward-outline:before": {
        "content": ""
    },
    "icon-media-eject-outline:before": {
        "content": ""
    },
    "icon-wine2:before": {
        "content": ""
    },
    "icon-waves-outline:before": {
        "content": ""
    },
    "icon-ticket:before": {
        "content": ""
    },
    "icon-tags:before": {
        "content": ""
    },
    "icon-plug:before": {
        "content": ""
    },
    "icon-headphones:before": {
        "content": ""
    },
    "icon-credit-card:before": {
        "content": ""
    },
    "icon-coffee2:before": {
        "content": ""
    },
    "icon-book3:before": {
        "content": ""
    },
    "icon-beer:before": {
        "content": ""
    },
    "icon-volume2:before": {
        "content": ""
    },
    "icon-volume-up:before": {
        "content": ""
    },
    "icon-volume-mute:before": {
        "content": ""
    },
    "icon-volume-down:before": {
        "content": ""
    },
    "icon-social-vimeo-circular:before": {
        "content": ""
    },
    "icon-social-twitter-circular:before": {
        "content": ""
    },
    "icon-social-pinterest-circular:before": {
        "content": ""
    },
    "icon-social-linkedin-circular:before": {
        "content": ""
    },
    "icon-social-facebook-circular:before": {
        "content": ""
    },
    "icon-social-dribbble-circular:before": {
        "content": ""
    },
    "icon-tree:before": {
        "content": ""
    },
    "icon-thermometer:before": {
        "content": ""
    },
    "icon-social-tumbler-circular:before": {
        "content": ""
    },
    "icon-social-skype-outline:before": {
        "content": ""
    },
    "icon-social-flickr-circular:before": {
        "content": ""
    },
    "icon-social-at-circular:before": {
        "content": ""
    },
    "icon-shopping-cart:before": {
        "content": ""
    },
    "icon-messages:before": {
        "content": ""
    },
    "icon-leaf:before": {
        "content": ""
    },
    "icon-feather:before": {
        "content": ""
    },
    "icon-heart5:before": {
        "content": ""
    },
    "icon-cloud3:before": {
        "content": ""
    },
    "icon-star3:before": {
        "content": ""
    },
    "icon-tv:before": {
        "content": ""
    },
    "icon-sound:before": {
        "content": ""
    },
    "icon-video3:before": {
        "content": ""
    },
    "icon-trash2:before": {
        "content": ""
    },
    "icon-user4:before": {
        "content": ""
    },
    "icon-key3:before": {
        "content": ""
    },
    "icon-search3:before": {
        "content": ""
    },
    "icon-settings2:before": {
        "content": ""
    },
    "icon-camera4:before": {
        "content": ""
    },
    "icon-tag3:before": {
        "content": ""
    },
    "icon-lock3:before": {
        "content": ""
    },
    "icon-bulb:before": {
        "content": ""
    },
    "icon-pen2:before": {
        "content": ""
    },
    "icon-diamond2:before": {
        "content": ""
    },
    "icon-display:before": {
        "content": ""
    },
    "icon-location2:before": {
        "content": ""
    },
    "icon-eye2:before": {
        "content": ""
    },
    "icon-bubble:before": {
        "content": ""
    },
    "icon-stack2:before": {
        "content": ""
    },
    "icon-cup:before": {
        "content": ""
    },
    "icon-phone4:before": {
        "content": ""
    },
    "icon-news2:before": {
        "content": ""
    },
    "icon-mail2:before": {
        "content": ""
    },
    "icon-like:before": {
        "content": ""
    },
    "icon-photo:before": {
        "content": ""
    },
    "icon-note:before": {
        "content": ""
    },
    "icon-clock3:before": {
        "content": ""
    },
    "icon-paperplane:before": {
        "content": ""
    },
    "icon-params:before": {
        "content": ""
    },
    "icon-banknote:before": {
        "content": ""
    },
    "icon-data:before": {
        "content": ""
    },
    "icon-music:before": {
        "content": ""
    },
    "icon-megaphone2:before": {
        "content": ""
    },
    "icon-study:before": {
        "content": ""
    },
    "icon-lab2:before": {
        "content": ""
    },
    "icon-food:before": {
        "content": ""
    },
    "icon-t-shirt:before": {
        "content": ""
    },
    "icon-fire:before": {
        "content": ""
    },
    "icon-clip:before": {
        "content": ""
    },
    "icon-shop:before": {
        "content": ""
    },
    "icon-calendar3:before": {
        "content": ""
    },
    "icon-wallet2:before": {
        "content": ""
    },
    "icon-vynil:before": {
        "content": ""
    },
    "icon-truck:before": {
        "content": ""
    },
    "icon-world2:before": {
        "content": ""
    },
    "icon-number:before": {
        "content": ""
    },
    "icon-number2:before": {
        "content": ""
    },
    "icon-number3:before": {
        "content": ""
    },
    "icon-number4:before": {
        "content": ""
    },
    "icon-number5:before": {
        "content": ""
    },
    "icon-number6:before": {
        "content": ""
    },
    "icon-number7:before": {
        "content": ""
    },
    "icon-number8:before": {
        "content": ""
    },
    "icon-number9:before": {
        "content": ""
    },
    "icon-number10:before": {
        "content": ""
    },
    "icon-number11:before": {
        "content": ""
    },
    "icon-number12:before": {
        "content": ""
    },
    "icon-number13:before": {
        "content": ""
    },
    "icon-number14:before": {
        "content": ""
    },
    "icon-number15:before": {
        "content": ""
    },
    "icon-number16:before": {
        "content": ""
    },
    "icon-number17:before": {
        "content": ""
    },
    "icon-number18:before": {
        "content": ""
    },
    "icon-number19:before": {
        "content": ""
    },
    "icon-number20:before": {
        "content": ""
    },
    "icon-quote2:before": {
        "content": ""
    },
    "icon-quote3:before": {
        "content": ""
    },
    "icon-tag4:before": {
        "content": ""
    },
    "icon-tag5:before": {
        "content": ""
    },
    "icon-link2:before": {
        "content": ""
    },
    "icon-link3:before": {
        "content": ""
    },
    "icon-cabinet:before": {
        "content": ""
    },
    "icon-cabinet2:before": {
        "content": ""
    },
    "icon-calendar4:before": {
        "content": ""
    },
    "icon-calendar5:before": {
        "content": ""
    },
    "icon-calendar6:before": {
        "content": ""
    },
    "icon-file2:before": {
        "content": ""
    },
    "icon-file3:before": {
        "content": ""
    },
    "icon-file4:before": {
        "content": ""
    },
    "icon-files2:before": {
        "content": ""
    },
    "icon-phone5:before": {
        "content": ""
    },
    "icon-tablet3:before": {
        "content": ""
    },
    "icon-window2:before": {
        "content": ""
    },
    "icon-monitor:before": {
        "content": ""
    },
    "icon-ipod:before": {
        "content": ""
    },
    "icon-tv2:before": {
        "content": ""
    },
    "icon-camera5:before": {
        "content": ""
    },
    "icon-camera6:before": {
        "content": ""
    },
    "icon-camera7:before": {
        "content": ""
    },
    "icon-film2:before": {
        "content": ""
    },
    "icon-film3:before": {
        "content": ""
    },
    "icon-film4:before": {
        "content": ""
    },
    "icon-microphone3:before": {
        "content": ""
    },
    "icon-microphone4:before": {
        "content": ""
    },
    "icon-microphone5:before": {
        "content": ""
    },
    "icon-drink2:before": {
        "content": ""
    },
    "icon-drink3:before": {
        "content": ""
    },
    "icon-drink4:before": {
        "content": ""
    },
    "icon-drink5:before": {
        "content": ""
    },
    "icon-coffee3:before": {
        "content": ""
    },
    "icon-mug2:before": {
        "content": ""
    },
    "icon-icecream:before": {
        "content": ""
    },
    "icon-cake:before": {
        "content": ""
    },
    "icon-inbox:before": {
        "content": ""
    },
    "icon-download4:before": {
        "content": ""
    },
    "icon-upload3:before": {
        "content": ""
    },
    "icon-inbox2:before": {
        "content": ""
    },
    "icon-checkmark2:before": {
        "content": ""
    },
    "icon-checkmark3:before": {
        "content": ""
    },
    "icon-cancel2:before": {
        "content": ""
    },
    "icon-cancel3:before": {
        "content": ""
    },
    "icon-plus2:before": {
        "content": ""
    },
    "icon-plus3:before": {
        "content": ""
    },
    "icon-minus2:before": {
        "content": ""
    },
    "icon-minus3:before": {
        "content": ""
    },
    "icon-notice:before": {
        "content": ""
    },
    "icon-notice2:before": {
        "content": ""
    },
    "icon-cog2:before": {
        "content": ""
    },
    "icon-cogs:before": {
        "content": ""
    },
    "icon-cog3:before": {
        "content": ""
    },
    "icon-warning2:before": {
        "content": ""
    },
    "icon-health2:before": {
        "content": ""
    },
    "icon-suitcase:before": {
        "content": ""
    },
    "icon-suitcase2:before": {
        "content": ""
    },
    "icon-suitcase3:before": {
        "content": ""
    },
    "icon-picture2:before": {
        "content": ""
    },
    "icon-pictures2:before": {
        "content": ""
    },
    "icon-pictures3:before": {
        "content": ""
    },
    "icon-android:before": {
        "content": ""
    },
    "icon-marvin:before": {
        "content": ""
    },
    "icon-pacman:before": {
        "content": ""
    },
    "icon-cassette:before": {
        "content": ""
    },
    "icon-watch2:before": {
        "content": ""
    },
    "icon-chronometer:before": {
        "content": ""
    },
    "icon-watch3:before": {
        "content": ""
    },
    "icon-alarmclock2:before": {
        "content": ""
    },
    "icon-time2:before": {
        "content": ""
    },
    "icon-time3:before": {
        "content": ""
    },
    "icon-headphones2:before": {
        "content": ""
    },
    "icon-wallet3:before": {
        "content": ""
    },
    "icon-checkmark4:before": {
        "content": ""
    },
    "icon-cancel4:before": {
        "content": ""
    },
    "icon-eye3:before": {
        "content": ""
    },
    "icon-position:before": {
        "content": ""
    },
    "icon-sitemap:before": {
        "content": ""
    },
    "icon-sitemap2:before": {
        "content": ""
    },
    "icon-cloud4:before": {
        "content": ""
    },
    "icon-upload4:before": {
        "content": ""
    },
    "icon-chart2:before": {
        "content": ""
    },
    "icon-chart3:before": {
        "content": ""
    },
    "icon-chart4:before": {
        "content": ""
    },
    "icon-chart5:before": {
        "content": ""
    },
    "icon-chart6:before": {
        "content": ""
    },
    "icon-chart7:before": {
        "content": ""
    },
    "icon-location3:before": {
        "content": ""
    },
    "icon-download5:before": {
        "content": ""
    },
    "icon-basket2:before": {
        "content": ""
    },
    "icon-folder3:before": {
        "content": ""
    },
    "icon-gamepad:before": {
        "content": ""
    },
    "icon-alarm:before": {
        "content": ""
    },
    "icon-alarm-cancel:before": {
        "content": ""
    },
    "icon-phone6:before": {
        "content": ""
    },
    "icon-phone7:before": {
        "content": ""
    },
    "icon-image3:before": {
        "content": ""
    },
    "icon-open:before": {
        "content": ""
    },
    "icon-sale:before": {
        "content": ""
    },
    "icon-direction:before": {
        "content": ""
    },
    "icon-map4:before": {
        "content": ""
    },
    "icon-trashcan2:before": {
        "content": ""
    },
    "icon-vote:before": {
        "content": ""
    },
    "icon-graduate:before": {
        "content": ""
    },
    "icon-lab3:before": {
        "content": ""
    },
    "icon-tie:before": {
        "content": ""
    },
    "icon-football:before": {
        "content": ""
    },
    "icon-eightball:before": {
        "content": ""
    },
    "icon-bowling:before": {
        "content": ""
    },
    "icon-bowlingpin:before": {
        "content": ""
    },
    "icon-baseball:before": {
        "content": ""
    },
    "icon-soccer:before": {
        "content": ""
    },
    "icon-dglasses:before": {
        "content": ""
    },
    "icon-microwave:before": {
        "content": ""
    },
    "icon-refrigerator:before": {
        "content": ""
    },
    "icon-oven:before": {
        "content": ""
    },
    "icon-washingmachine:before": {
        "content": ""
    },
    "icon-mouse:before": {
        "content": ""
    },
    "icon-smiley:before": {
        "content": ""
    },
    "icon-sad2:before": {
        "content": ""
    },
    "icon-mute2:before": {
        "content": ""
    },
    "icon-hand:before": {
        "content": ""
    },
    "icon-radio:before": {
        "content": ""
    },
    "icon-satellite:before": {
        "content": ""
    },
    "icon-medal:before": {
        "content": ""
    },
    "icon-medal2:before": {
        "content": ""
    },
    "icon-switch2:before": {
        "content": ""
    },
    "icon-key4:before": {
        "content": ""
    },
    "icon-cord:before": {
        "content": ""
    },
    "icon-locked:before": {
        "content": ""
    },
    "icon-unlocked3:before": {
        "content": ""
    },
    "icon-locked2:before": {
        "content": ""
    },
    "icon-unlocked4:before": {
        "content": ""
    },
    "icon-magnifier:before": {
        "content": ""
    },
    "icon-zoomin2:before": {
        "content": ""
    },
    "icon-zoomout2:before": {
        "content": ""
    },
    "icon-stack3:before": {
        "content": ""
    },
    "icon-stack4:before": {
        "content": ""
    },
    "icon-stack5:before": {
        "content": ""
    },
    "icon-davidstar:before": {
        "content": ""
    },
    "icon-cross2:before": {
        "content": ""
    },
    "icon-moonandstar:before": {
        "content": ""
    },
    "icon-transformers:before": {
        "content": ""
    },
    "icon-batman:before": {
        "content": ""
    },
    "icon-spaceinvaders:before": {
        "content": ""
    },
    "icon-skeletor:before": {
        "content": ""
    },
    "icon-lamp:before": {
        "content": ""
    },
    "icon-lamp2:before": {
        "content": ""
    },
    "icon-umbrella:before": {
        "content": ""
    },
    "icon-streetlight:before": {
        "content": ""
    },
    "icon-bomb:before": {
        "content": ""
    },
    "icon-archive3:before": {
        "content": ""
    },
    "icon-battery:before": {
        "content": ""
    },
    "icon-battery2:before": {
        "content": ""
    },
    "icon-battery3:before": {
        "content": ""
    },
    "icon-battery4:before": {
        "content": ""
    },
    "icon-battery5:before": {
        "content": ""
    },
    "icon-megaphone3:before": {
        "content": ""
    },
    "icon-megaphone4:before": {
        "content": ""
    },
    "icon-patch:before": {
        "content": ""
    },
    "icon-pil:before": {
        "content": ""
    },
    "icon-injection:before": {
        "content": ""
    },
    "icon-thermometer2:before": {
        "content": ""
    },
    "icon-lamp3:before": {
        "content": ""
    },
    "icon-lamp4:before": {
        "content": ""
    },
    "icon-lamp5:before": {
        "content": ""
    },
    "icon-cube2:before": {
        "content": ""
    },
    "icon-box2:before": {
        "content": ""
    },
    "icon-box3:before": {
        "content": ""
    },
    "icon-diamond3:before": {
        "content": ""
    },
    "icon-bag2:before": {
        "content": ""
    },
    "icon-moneybag:before": {
        "content": ""
    },
    "icon-grid3:before": {
        "content": ""
    },
    "icon-grid4:before": {
        "content": ""
    },
    "icon-list2:before": {
        "content": ""
    },
    "icon-list3:before": {
        "content": ""
    },
    "icon-ruler:before": {
        "content": ""
    },
    "icon-ruler2:before": {
        "content": ""
    },
    "icon-layout:before": {
        "content": ""
    },
    "icon-layout2:before": {
        "content": ""
    },
    "icon-layout3:before": {
        "content": ""
    },
    "icon-layout4:before": {
        "content": ""
    },
    "icon-layout5:before": {
        "content": ""
    },
    "icon-layout6:before": {
        "content": ""
    },
    "icon-layout7:before": {
        "content": ""
    },
    "icon-layout8:before": {
        "content": ""
    },
    "icon-layout9:before": {
        "content": ""
    },
    "icon-layout10:before": {
        "content": ""
    },
    "icon-layout11:before": {
        "content": ""
    },
    "icon-layout12:before": {
        "content": ""
    },
    "icon-layout13:before": {
        "content": ""
    },
    "icon-layout14:before": {
        "content": ""
    },
    "icon-tools2:before": {
        "content": ""
    },
    "icon-screwdriver:before": {
        "content": ""
    },
    "icon-paint:before": {
        "content": ""
    },
    "icon-hammer:before": {
        "content": ""
    },
    "icon-brush2:before": {
        "content": ""
    },
    "icon-pen3:before": {
        "content": ""
    },
    "icon-chat3:before": {
        "content": ""
    },
    "icon-comments:before": {
        "content": ""
    },
    "icon-chat4:before": {
        "content": ""
    },
    "icon-chat5:before": {
        "content": ""
    },
    "icon-volume3:before": {
        "content": ""
    },
    "icon-volume4:before": {
        "content": ""
    },
    "icon-volume5:before": {
        "content": ""
    },
    "icon-equalizer:before": {
        "content": ""
    },
    "icon-resize:before": {
        "content": ""
    },
    "icon-resize2:before": {
        "content": ""
    },
    "icon-stretch:before": {
        "content": ""
    },
    "icon-narrow:before": {
        "content": ""
    },
    "icon-resize3:before": {
        "content": ""
    },
    "icon-download6:before": {
        "content": ""
    },
    "icon-calculator3:before": {
        "content": ""
    },
    "icon-library:before": {
        "content": ""
    },
    "icon-auction:before": {
        "content": ""
    },
    "icon-justice:before": {
        "content": ""
    },
    "icon-stats:before": {
        "content": ""
    },
    "icon-stats2:before": {
        "content": ""
    },
    "icon-attachment3:before": {
        "content": ""
    },
    "icon-hourglass2:before": {
        "content": ""
    },
    "icon-abacus:before": {
        "content": ""
    },
    "icon-pencil4:before": {
        "content": ""
    },
    "icon-pen4:before": {
        "content": ""
    },
    "icon-pin2:before": {
        "content": ""
    },
    "icon-pin3:before": {
        "content": ""
    },
    "icon-discout:before": {
        "content": ""
    },
    "icon-edit3:before": {
        "content": ""
    },
    "icon-scissors3:before": {
        "content": ""
    },
    "icon-profile:before": {
        "content": ""
    },
    "icon-profile2:before": {
        "content": ""
    },
    "icon-profile3:before": {
        "content": ""
    },
    "icon-rotate:before": {
        "content": ""
    },
    "icon-rotate2:before": {
        "content": ""
    },
    "icon-reply:before": {
        "content": ""
    },
    "icon-forward:before": {
        "content": ""
    },
    "icon-retweet:before": {
        "content": ""
    },
    "icon-shuffle:before": {
        "content": ""
    },
    "icon-loop:before": {
        "content": ""
    },
    "icon-crop2:before": {
        "content": ""
    },
    "icon-square:before": {
        "content": ""
    },
    "icon-square2:before": {
        "content": ""
    },
    "icon-circle:before": {
        "content": ""
    },
    "icon-dollar:before": {
        "content": ""
    },
    "icon-dollar2:before": {
        "content": ""
    },
    "icon-coins:before": {
        "content": ""
    },
    "icon-pig:before": {
        "content": ""
    },
    "icon-bookmark3:before": {
        "content": ""
    },
    "icon-bookmark4:before": {
        "content": ""
    },
    "icon-addressbook:before": {
        "content": ""
    },
    "icon-addressbook2:before": {
        "content": ""
    },
    "icon-safe:before": {
        "content": ""
    },
    "icon-envelope3:before": {
        "content": ""
    },
    "icon-envelope4:before": {
        "content": ""
    },
    "icon-radioactive:before": {
        "content": ""
    },
    "icon-music2:before": {
        "content": ""
    },
    "icon-presentation2:before": {
        "content": ""
    },
    "icon-male:before": {
        "content": ""
    },
    "icon-female:before": {
        "content": ""
    },
    "icon-aids:before": {
        "content": ""
    },
    "icon-heart6:before": {
        "content": ""
    },
    "icon-info2:before": {
        "content": ""
    },
    "icon-info3:before": {
        "content": ""
    },
    "icon-piano:before": {
        "content": ""
    },
    "icon-rain:before": {
        "content": ""
    },
    "icon-snow:before": {
        "content": ""
    },
    "icon-lightning:before": {
        "content": ""
    },
    "icon-sun2:before": {
        "content": ""
    },
    "icon-moon:before": {
        "content": ""
    },
    "icon-cloudy:before": {
        "content": ""
    },
    "icon-cloudy2:before": {
        "content": ""
    },
    "icon-car:before": {
        "content": ""
    },
    "icon-bike2:before": {
        "content": ""
    },
    "icon-truck2:before": {
        "content": ""
    },
    "icon-bus:before": {
        "content": ""
    },
    "icon-bike3:before": {
        "content": ""
    },
    "icon-plane2:before": {
        "content": ""
    },
    "icon-paperplane2:before": {
        "content": ""
    },
    "icon-rocket:before": {
        "content": ""
    },
    "icon-book4:before": {
        "content": ""
    },
    "icon-book5:before": {
        "content": ""
    },
    "icon-barcode:before": {
        "content": ""
    },
    "icon-barcode2:before": {
        "content": ""
    },
    "icon-expand2:before": {
        "content": ""
    },
    "icon-collapse:before": {
        "content": ""
    },
    "icon-popout:before": {
        "content": ""
    },
    "icon-popin:before": {
        "content": ""
    },
    "icon-target2:before": {
        "content": ""
    },
    "icon-badge:before": {
        "content": ""
    },
    "icon-badge2:before": {
        "content": ""
    },
    "icon-ticket2:before": {
        "content": ""
    },
    "icon-ticket3:before": {
        "content": ""
    },
    "icon-ticket4:before": {
        "content": ""
    },
    "icon-microphone6:before": {
        "content": ""
    },
    "icon-cone:before": {
        "content": ""
    },
    "icon-blocked:before": {
        "content": ""
    },
    "icon-stop:before": {
        "content": ""
    },
    "icon-keyboard:before": {
        "content": ""
    },
    "icon-keyboard2:before": {
        "content": ""
    },
    "icon-radio2:before": {
        "content": ""
    },
    "icon-printer4:before": {
        "content": ""
    },
    "icon-checked:before": {
        "content": ""
    },
    "icon-error:before": {
        "content": ""
    },
    "icon-add:before": {
        "content": ""
    },
    "icon-minus4:before": {
        "content": ""
    },
    "icon-alert:before": {
        "content": ""
    },
    "icon-pictures4:before": {
        "content": ""
    },
    "icon-atom2:before": {
        "content": ""
    },
    "icon-eyedropper2:before": {
        "content": ""
    },
    "icon-globe3:before": {
        "content": ""
    },
    "icon-globe4:before": {
        "content": ""
    },
    "icon-shipping:before": {
        "content": ""
    },
    "icon-yingyang:before": {
        "content": ""
    },
    "icon-compass3:before": {
        "content": ""
    },
    "icon-zip:before": {
        "content": ""
    },
    "icon-zip2:before": {
        "content": ""
    },
    "icon-anchor3:before": {
        "content": ""
    },
    "icon-lockedheart:before": {
        "content": ""
    },
    "icon-magnet:before": {
        "content": ""
    },
    "icon-navigation:before": {
        "content": ""
    },
    "icon-tags2:before": {
        "content": ""
    },
    "icon-heart7:before": {
        "content": ""
    },
    "icon-heart8:before": {
        "content": ""
    },
    "icon-usb:before": {
        "content": ""
    },
    "icon-clipboard4:before": {
        "content": ""
    },
    "icon-clipboard5:before": {
        "content": ""
    },
    "icon-clipboard6:before": {
        "content": ""
    },
    "icon-switch3:before": {
        "content": ""
    },
    "icon-ruler3:before": {
        "content": ""
    },
    "icon-facebook2:before": {
        "content": ""
    },
    "icon-twitter-old:before": {
        "content": ""
    },
    "icon-share2:before": {
        "content": ""
    },
    "icon-feed:before": {
        "content": ""
    },
    "icon-bird:before": {
        "content": ""
    },
    "icon-chat6:before": {
        "content": ""
    },
    "icon-envelope5:before": {
        "content": ""
    },
    "icon-envelope6:before": {
        "content": ""
    },
    "icon-phone8:before": {
        "content": ""
    },
    "icon-phone9:before": {
        "content": ""
    },
    "icon-phone10:before": {
        "content": ""
    },
    "icon-mobile2:before": {
        "content": ""
    },
    "icon-ipod2:before": {
        "content": ""
    },
    "icon-monitor2:before": {
        "content": ""
    },
    "icon-laptop3:before": {
        "content": ""
    },
    "icon-modem:before": {
        "content": ""
    },
    "icon-speaker:before": {
        "content": ""
    },
    "icon-window3:before": {
        "content": ""
    },
    "icon-server:before": {
        "content": ""
    },
    "icon-hdd:before": {
        "content": ""
    },
    "icon-keyboard3:before": {
        "content": ""
    },
    "icon-mouse2:before": {
        "content": ""
    },
    "icon-cd:before": {
        "content": ""
    },
    "icon-floppy:before": {
        "content": ""
    },
    "icon-hardware:before": {
        "content": ""
    },
    "icon-usb2:before": {
        "content": ""
    },
    "icon-cord2:before": {
        "content": ""
    },
    "icon-socket:before": {
        "content": ""
    },
    "icon-socket2:before": {
        "content": ""
    },
    "icon-socket3:before": {
        "content": ""
    },
    "icon-printer5:before": {
        "content": ""
    },
    "icon-camera8:before": {
        "content": ""
    },
    "icon-pictures5:before": {
        "content": ""
    },
    "icon-eye4:before": {
        "content": ""
    },
    "icon-uniEC70:before": {
        "content": ""
    },
    "icon-film5:before": {
        "content": ""
    },
    "icon-camera9:before": {
        "content": ""
    },
    "icon-movie:before": {
        "content": ""
    },
    "icon-tv3:before": {
        "content": ""
    },
    "icon-camera10:before": {
        "content": ""
    },
    "icon-camera11:before": {
        "content": ""
    },
    "icon-volume6:before": {
        "content": ""
    },
    "icon-music3:before": {
        "content": ""
    },
    "icon-microphone7:before": {
        "content": ""
    },
    "icon-radio3:before": {
        "content": ""
    },
    "icon-ipod3:before": {
        "content": ""
    },
    "icon-headphone:before": {
        "content": ""
    },
    "icon-cassette2:before": {
        "content": ""
    },
    "icon-broadcast:before": {
        "content": ""
    },
    "icon-broadcast2:before": {
        "content": ""
    },
    "icon-calculator4:before": {
        "content": ""
    },
    "icon-gamepad2:before": {
        "content": ""
    },
    "icon-gamepad3:before": {
        "content": ""
    },
    "icon-cog4:before": {
        "content": ""
    },
    "icon-shield2:before": {
        "content": ""
    },
    "icon-skull:before": {
        "content": ""
    },
    "icon-bug:before": {
        "content": ""
    },
    "icon-mine:before": {
        "content": ""
    },
    "icon-earth:before": {
        "content": ""
    },
    "icon-globe5:before": {
        "content": ""
    },
    "icon-planet:before": {
        "content": ""
    },
    "icon-battery6:before": {
        "content": ""
    },
    "icon-battery-low2:before": {
        "content": ""
    },
    "icon-battery7:before": {
        "content": ""
    },
    "icon-battery-full3:before": {
        "content": ""
    },
    "icon-folder4:before": {
        "content": ""
    },
    "icon-search4:before": {
        "content": ""
    },
    "icon-zoomout3:before": {
        "content": ""
    },
    "icon-zoomin3:before": {
        "content": ""
    },
    "icon-binocular:before": {
        "content": ""
    },
    "icon-location4:before": {
        "content": ""
    },
    "icon-pin4:before": {
        "content": ""
    },
    "icon-file5:before": {
        "content": ""
    },
    "icon-tag6:before": {
        "content": ""
    },
    "icon-quote4:before": {
        "content": ""
    },
    "icon-attachment4:before": {
        "content": ""
    },
    "icon-bookmark5:before": {
        "content": ""
    },
    "icon-bookmark6:before": {
        "content": ""
    },
    "icon-newspaper3:before": {
        "content": ""
    },
    "icon-notebook2:before": {
        "content": ""
    },
    "icon-addressbook3:before": {
        "content": ""
    },
    "icon-clipboard7:before": {
        "content": ""
    },
    "icon-clipboard8:before": {
        "content": ""
    },
    "icon-board:before": {
        "content": ""
    },
    "icon-pencil5:before": {
        "content": ""
    },
    "icon-pen5:before": {
        "content": ""
    },
    "icon-user5:before": {
        "content": ""
    },
    "icon-user6:before": {
        "content": ""
    },
    "icon-user7:before": {
        "content": ""
    },
    "icon-trashcan3:before": {
        "content": ""
    },
    "icon-cart:before": {
        "content": ""
    },
    "icon-bag3:before": {
        "content": ""
    },
    "icon-suitcase4:before": {
        "content": ""
    },
    "icon-card:before": {
        "content": ""
    },
    "icon-book6:before": {
        "content": ""
    },
    "icon-gift3:before": {
        "content": ""
    },
    "icon-lamp6:before": {
        "content": ""
    },
    "icon-settings3:before": {
        "content": ""
    },
    "icon-support3:before": {
        "content": ""
    },
    "icon-medicine:before": {
        "content": ""
    },
    "icon-cone2:before": {
        "content": ""
    },
    "icon-locked3:before": {
        "content": ""
    },
    "icon-unlocked5:before": {
        "content": ""
    },
    "icon-key5:before": {
        "content": ""
    },
    "icon-info4:before": {
        "content": ""
    },
    "icon-clock4:before": {
        "content": ""
    },
    "icon-timer:before": {
        "content": ""
    },
    "icon-food2:before": {
        "content": ""
    },
    "icon-drink6:before": {
        "content": ""
    },
    "icon-mug3:before": {
        "content": ""
    },
    "icon-cup2:before": {
        "content": ""
    },
    "icon-drink7:before": {
        "content": ""
    },
    "icon-mug4:before": {
        "content": ""
    },
    "icon-lollipop:before": {
        "content": ""
    },
    "icon-lab4:before": {
        "content": ""
    },
    "icon-puzzle3:before": {
        "content": ""
    },
    "icon-flag4:before": {
        "content": ""
    },
    "icon-star4:before": {
        "content": ""
    },
    "icon-heart9:before": {
        "content": ""
    },
    "icon-badge3:before": {
        "content": ""
    },
    "icon-cup3:before": {
        "content": ""
    },
    "icon-scissors4:before": {
        "content": ""
    },
    "icon-snowflake:before": {
        "content": ""
    },
    "icon-cloud5:before": {
        "content": ""
    },
    "icon-lightning2:before": {
        "content": ""
    },
    "icon-night:before": {
        "content": ""
    },
    "icon-sunny:before": {
        "content": ""
    },
    "icon-droplet:before": {
        "content": ""
    },
    "icon-umbrella2:before": {
        "content": ""
    },
    "icon-truck3:before": {
        "content": ""
    },
    "icon-car2:before": {
        "content": ""
    },
    "icon-gaspump:before": {
        "content": ""
    },
    "icon-factory:before": {
        "content": ""
    },
    "icon-tree2:before": {
        "content": ""
    },
    "icon-leaf2:before": {
        "content": ""
    },
    "icon-flower:before": {
        "content": ""
    },
    "icon-direction2:before": {
        "content": ""
    },
    "icon-thumbsup:before": {
        "content": ""
    },
    "icon-thumbsdown:before": {
        "content": ""
    },
    "icon-pointer:before": {
        "content": ""
    },
    "icon-pointer2:before": {
        "content": ""
    },
    "icon-pointer3:before": {
        "content": ""
    },
    "icon-pointer4:before": {
        "content": ""
    },
    "icon-arrow-up3:before": {
        "content": ""
    },
    "icon-arrow-down3:before": {
        "content": ""
    },
    "icon-arrow-left3:before": {
        "content": ""
    },
    "icon-arrow-right3:before": {
        "content": ""
    },
    "icon-arrow-top-right:before": {
        "content": ""
    },
    "icon-arrow-top-left:before": {
        "content": ""
    },
    "icon-arrow-bottom-right:before": {
        "content": ""
    },
    "icon-arrow-bottom-left:before": {
        "content": ""
    },
    "icon-contract:before": {
        "content": ""
    },
    "icon-enlarge:before": {
        "content": ""
    },
    "icon-refresh4:before": {
        "content": ""
    },
    "icon-chat7:before": {
        "content": ""
    },
    "icon-chat-alt-stroke:before": {
        "content": ""
    },
    "icon-chat-alt-fill:before": {
        "content": ""
    },
    "icon-comment-alt1-stroke:before": {
        "content": ""
    },
    "icon-comment2:before": {
        "content": ""
    },
    "icon-comment-stroke:before": {
        "content": ""
    },
    "icon-comment-fill:before": {
        "content": ""
    },
    "icon-comment-alt2-stroke:before": {
        "content": ""
    },
    "icon-comment-alt2-fill:before": {
        "content": ""
    },
    "icon-checkmark5:before": {
        "content": ""
    },
    "icon-check-alt:before": {
        "content": ""
    },
    "icon-x:before": {
        "content": ""
    },
    "icon-x-altx-alt:before": {
        "content": ""
    },
    "icon-denied:before": {
        "content": ""
    },
    "icon-cursor:before": {
        "content": ""
    },
    "icon-rss3:before": {
        "content": ""
    },
    "icon-rss-alt:before": {
        "content": ""
    },
    "icon-wrench:before": {
        "content": ""
    },
    "icon-dial2:before": {
        "content": ""
    },
    "icon-cog5:before": {
        "content": ""
    },
    "icon-calendar7:before": {
        "content": ""
    },
    "icon-calendar-alt-stroke:before": {
        "content": ""
    },
    "icon-calendar-alt-fill:before": {
        "content": ""
    },
    "icon-share3:before": {
        "content": ""
    },
    "icon-mail3:before": {
        "content": ""
    },
    "icon-heart-stroke:before": {
        "content": ""
    },
    "icon-heart-fill:before": {
        "content": ""
    },
    "icon-movie2:before": {
        "content": ""
    },
    "icon-document-alt-stroke:before": {
        "content": ""
    },
    "icon-document-alt-fill:before": {
        "content": ""
    },
    "icon-document-stroke:before": {
        "content": ""
    },
    "icon-document-fill:before": {
        "content": ""
    },
    "icon-plus4:before": {
        "content": ""
    },
    "icon-plus-alt:before": {
        "content": ""
    },
    "icon-minus5:before": {
        "content": ""
    },
    "icon-minus-alt:before": {
        "content": ""
    },
    "icon-pin5:before": {
        "content": ""
    },
    "icon-link4:before": {
        "content": ""
    },
    "icon-bolt2:before": {
        "content": ""
    },
    "icon-move:before": {
        "content": ""
    },
    "icon-move-alt1:before": {
        "content": ""
    },
    "icon-move-alt2:before": {
        "content": ""
    },
    "icon-equalizer2:before": {
        "content": ""
    },
    "icon-award-fill:before": {
        "content": ""
    },
    "icon-award-stroke:before": {
        "content": ""
    },
    "icon-magnifying-glass2:before": {
        "content": ""
    },
    "icon-trash-stroke:before": {
        "content": ""
    },
    "icon-trash-fill:before": {
        "content": ""
    },
    "icon-beaker-alt:before": {
        "content": ""
    },
    "icon-beaker3:before": {
        "content": ""
    },
    "icon-key-stroke:before": {
        "content": ""
    },
    "icon-key-fill:before": {
        "content": ""
    },
    "icon-new-window:before": {
        "content": ""
    },
    "icon-lightbulb3:before": {
        "content": ""
    },
    "icon-spin-alt:before": {
        "content": ""
    },
    "icon-spin:before": {
        "content": ""
    },
    "icon-curved-arrow:before": {
        "content": ""
    },
    "icon-undo:before": {
        "content": ""
    },
    "icon-reload2:before": {
        "content": ""
    },
    "icon-reload-alt:before": {
        "content": ""
    },
    "icon-loop2:before": {
        "content": ""
    },
    "icon-loop-alt1:before": {
        "content": ""
    },
    "icon-loop-alt2:before": {
        "content": ""
    },
    "icon-loop-alt3:before": {
        "content": ""
    },
    "icon-loop-alt4:before": {
        "content": ""
    },
    "icon-transfer:before": {
        "content": ""
    },
    "icon-move-vertical:before": {
        "content": ""
    },
    "icon-move-vertical-alt1:before": {
        "content": ""
    },
    "icon-move-vertical-alt2:before": {
        "content": ""
    },
    "icon-move-horizontal:before": {
        "content": ""
    },
    "icon-move-horizontal-alt1:before": {
        "content": ""
    },
    "icon-move-horizontal-alt2:before": {
        "content": ""
    },
    "icon-arrow-left4:before": {
        "content": ""
    },
    "icon-arrow-left-alt1:before": {
        "content": ""
    },
    "icon-arrow-left-alt2:before": {
        "content": ""
    },
    "icon-arrow-right4:before": {
        "content": ""
    },
    "icon-arrow-right-alt1:before": {
        "content": ""
    },
    "icon-arrow-right-alt2:before": {
        "content": ""
    },
    "icon-arrow-up4:before": {
        "content": ""
    },
    "icon-arrow-up-alt1:before": {
        "content": ""
    },
    "icon-arrow-up-alt2:before": {
        "content": ""
    },
    "icon-arrow-down4:before": {
        "content": ""
    },
    "icon-arrow-down-alt1:before": {
        "content": ""
    },
    "icon-arrow-down-alt2:before": {
        "content": ""
    },
    "icon-cd2:before": {
        "content": ""
    },
    "icon-steering-wheel:before": {
        "content": ""
    },
    "icon-microphone8:before": {
        "content": ""
    },
    "icon-headphones3:before": {
        "content": ""
    },
    "icon-volume7:before": {
        "content": ""
    },
    "icon-volume-mute2:before": {
        "content": ""
    },
    "icon-play:before": {
        "content": ""
    },
    "icon-pause:before": {
        "content": ""
    },
    "icon-stop2:before": {
        "content": ""
    },
    "icon-eject2:before": {
        "content": ""
    },
    "icon-first:before": {
        "content": ""
    },
    "icon-last:before": {
        "content": ""
    },
    "icon-play-alt:before": {
        "content": ""
    },
    "icon-fullscreen-exit:before": {
        "content": ""
    },
    "icon-fullscreen-exit-alt:before": {
        "content": ""
    },
    "icon-fullscreen:before": {
        "content": ""
    },
    "icon-fullscreen-alt:before": {
        "content": ""
    },
    "icon-iphone:before": {
        "content": ""
    },
    "icon-battery-empty2:before": {
        "content": ""
    },
    "icon-battery-half:before": {
        "content": ""
    },
    "icon-battery-full4:before": {
        "content": ""
    },
    "icon-battery-charging2:before": {
        "content": ""
    },
    "icon-compass4:before": {
        "content": ""
    },
    "icon-box4:before": {
        "content": ""
    },
    "icon-folder-stroke:before": {
        "content": ""
    },
    "icon-folder-fill:before": {
        "content": ""
    },
    "icon-at2:before": {
        "content": ""
    },
    "icon-ampersand:before": {
        "content": ""
    },
    "icon-info5:before": {
        "content": ""
    },
    "icon-question-mark:before": {
        "content": ""
    },
    "icon-pilcrow:before": {
        "content": ""
    },
    "icon-hash:before": {
        "content": ""
    },
    "icon-left-quote:before": {
        "content": ""
    },
    "icon-right-quote:before": {
        "content": ""
    },
    "icon-left-quote-alt:before": {
        "content": ""
    },
    "icon-right-quote-alt:before": {
        "content": ""
    },
    "icon-article:before": {
        "content": ""
    },
    "icon-read-more:before": {
        "content": ""
    },
    "icon-list4:before": {
        "content": ""
    },
    "icon-list-nested:before": {
        "content": ""
    },
    "icon-book7:before": {
        "content": ""
    },
    "icon-book-alt:before": {
        "content": ""
    },
    "icon-book-alt2:before": {
        "content": ""
    },
    "icon-pen6:before": {
        "content": ""
    },
    "icon-pen-alt-stroke:before": {
        "content": ""
    },
    "icon-pen-alt-fill:before": {
        "content": ""
    },
    "icon-pen-alt2:before": {
        "content": ""
    },
    "icon-brush3:before": {
        "content": ""
    },
    "icon-brush-alt:before": {
        "content": ""
    },
    "icon-eyedropper3:before": {
        "content": ""
    },
    "icon-layers-alt:before": {
        "content": ""
    },
    "icon-layers2:before": {
        "content": ""
    },
    "icon-image4:before": {
        "content": ""
    },
    "icon-camera12:before": {
        "content": ""
    },
    "icon-aperture2:before": {
        "content": ""
    },
    "icon-aperture-alt:before": {
        "content": ""
    },
    "icon-chart8:before": {
        "content": ""
    },
    "icon-chart-alt:before": {
        "content": ""
    },
    "icon-bars2:before": {
        "content": ""
    },
    "icon-bars-alt:before": {
        "content": ""
    },
    "icon-eye5:before": {
        "content": ""
    },
    "icon-user8:before": {
        "content": ""
    },
    "icon-home3:before": {
        "content": ""
    },
    "icon-clock5:before": {
        "content": ""
    },
    "icon-lock-stroke:before": {
        "content": ""
    },
    "icon-lock-fill:before": {
        "content": ""
    },
    "icon-unlock-stroke:before": {
        "content": ""
    },
    "icon-unlock-fill:before": {
        "content": ""
    },
    "icon-tag-stroke:before": {
        "content": ""
    },
    "icon-tag-fill:before": {
        "content": ""
    },
    "icon-sun-stroke:before": {
        "content": ""
    },
    "icon-sun-fill:before": {
        "content": ""
    },
    "icon-moon-stroke:before": {
        "content": ""
    },
    "icon-moon-fill:before": {
        "content": ""
    },
    "icon-cloud6:before": {
        "content": ""
    },
    "icon-rain2:before": {
        "content": ""
    },
    "icon-umbrella3:before": {
        "content": ""
    },
    "icon-star5:before": {
        "content": ""
    },
    "icon-map-pin-stroke:before": {
        "content": ""
    },
    "icon-map-pin-fill:before": {
        "content": ""
    },
    "icon-map-pin-alt:before": {
        "content": ""
    },
    "icon-target3:before": {
        "content": ""
    },
    "icon-download7:before": {
        "content": ""
    },
    "icon-upload5:before": {
        "content": ""
    },
    "icon-cloud-download:before": {
        "content": ""
    },
    "icon-cloud-upload:before": {
        "content": ""
    },
    "icon-fork:before": {
        "content": ""
    },
    "icon-paperclip3:before": {
        "content": ""
    },
    "icon-home4:before": {
        "content": ""
    },
    "icon-home5:before": {
        "content": ""
    },
    "icon-home6:before": {
        "content": ""
    },
    "icon-office:before": {
        "content": ""
    },
    "icon-newspaper4:before": {
        "content": ""
    },
    "icon-pencil6:before": {
        "content": ""
    },
    "icon-pencil7:before": {
        "content": ""
    },
    "icon-quill:before": {
        "content": ""
    },
    "icon-pen7:before": {
        "content": ""
    },
    "icon-blog:before": {
        "content": ""
    },
    "icon-eyedropper4:before": {
        "content": ""
    },
    "icon-droplet2:before": {
        "content": ""
    },
    "icon-paint-format:before": {
        "content": ""
    },
    "icon-image5:before": {
        "content": ""
    },
    "icon-images:before": {
        "content": ""
    },
    "icon-camera13:before": {
        "content": ""
    },
    "icon-headphones4:before": {
        "content": ""
    },
    "icon-music4:before": {
        "content": ""
    },
    "icon-play2:before": {
        "content": ""
    },
    "icon-film6:before": {
        "content": ""
    },
    "icon-video-camera:before": {
        "content": ""
    },
    "icon-dice:before": {
        "content": ""
    },
    "icon-pacman2:before": {
        "content": ""
    },
    "icon-spades:before": {
        "content": ""
    },
    "icon-clubs:before": {
        "content": ""
    },
    "icon-diamonds:before": {
        "content": ""
    },
    "icon-bullhorn2:before": {
        "content": ""
    },
    "icon-connection:before": {
        "content": ""
    },
    "icon-podcast:before": {
        "content": ""
    },
    "icon-feed2:before": {
        "content": ""
    },
    "icon-mic2:before": {
        "content": ""
    },
    "icon-book8:before": {
        "content": ""
    },
    "icon-books:before": {
        "content": ""
    },
    "icon-library2:before": {
        "content": ""
    },
    "icon-file-text:before": {
        "content": ""
    },
    "icon-profile4:before": {
        "content": ""
    },
    "icon-file-empty:before": {
        "content": ""
    },
    "icon-files-empty:before": {
        "content": ""
    },
    "icon-file-text2:before": {
        "content": ""
    },
    "icon-file-picture:before": {
        "content": ""
    },
    "icon-file-music:before": {
        "content": ""
    },
    "icon-file-play:before": {
        "content": ""
    },
    "icon-file-video:before": {
        "content": ""
    },
    "icon-file-zip:before": {
        "content": ""
    },
    "icon-copy:before": {
        "content": ""
    },
    "icon-paste:before": {
        "content": ""
    },
    "icon-stack6:before": {
        "content": ""
    },
    "icon-folder5:before": {
        "content": ""
    },
    "icon-folder-open:before": {
        "content": ""
    },
    "icon-folder-plus:before": {
        "content": ""
    },
    "icon-folder-minus:before": {
        "content": ""
    },
    "icon-folder-download:before": {
        "content": ""
    },
    "icon-folder-upload:before": {
        "content": ""
    },
    "icon-price-tag:before": {
        "content": ""
    },
    "icon-price-tags:before": {
        "content": ""
    },
    "icon-barcode3:before": {
        "content": ""
    },
    "icon-qrcode:before": {
        "content": ""
    },
    "icon-ticket5:before": {
        "content": ""
    },
    "icon-cart2:before": {
        "content": ""
    },
    "icon-coin-dollar:before": {
        "content": ""
    },
    "icon-coin-euro:before": {
        "content": ""
    },
    "icon-coin-pound:before": {
        "content": ""
    },
    "icon-coin-yen:before": {
        "content": ""
    },
    "icon-credit-card2:before": {
        "content": ""
    },
    "icon-calculator5:before": {
        "content": ""
    },
    "icon-lifebuoy:before": {
        "content": ""
    },
    "icon-phone11:before": {
        "content": ""
    },
    "icon-phone-hang-up:before": {
        "content": ""
    },
    "icon-address-book:before": {
        "content": ""
    },
    "icon-envelop:before": {
        "content": ""
    },
    "icon-pushpin:before": {
        "content": ""
    },
    "icon-location5:before": {
        "content": ""
    },
    "icon-location6:before": {
        "content": ""
    },
    "icon-compass5:before": {
        "content": ""
    },
    "icon-compass6:before": {
        "content": ""
    },
    "icon-map5:before": {
        "content": ""
    },
    "icon-map6:before": {
        "content": ""
    },
    "icon-history:before": {
        "content": ""
    },
    "icon-clock6:before": {
        "content": ""
    },
    "icon-clock7:before": {
        "content": ""
    },
    "icon-alarm2:before": {
        "content": ""
    },
    "icon-bell2:before": {
        "content": ""
    },
    "icon-stopwatch3:before": {
        "content": ""
    },
    "icon-calendar8:before": {
        "content": ""
    },
    "icon-printer6:before": {
        "content": ""
    },
    "icon-keyboard4:before": {
        "content": ""
    },
    "icon-display2:before": {
        "content": ""
    },
    "icon-laptop4:before": {
        "content": ""
    },
    "icon-mobile3:before": {
        "content": ""
    },
    "icon-mobile4:before": {
        "content": ""
    },
    "icon-tablet4:before": {
        "content": ""
    },
    "icon-tv4:before": {
        "content": ""
    },
    "icon-drawer:before": {
        "content": ""
    },
    "icon-drawer2:before": {
        "content": ""
    },
    "icon-box-add:before": {
        "content": ""
    },
    "icon-box-remove:before": {
        "content": ""
    },
    "icon-download8:before": {
        "content": ""
    },
    "icon-upload6:before": {
        "content": ""
    },
    "icon-floppy-disk:before": {
        "content": ""
    },
    "icon-drive:before": {
        "content": ""
    },
    "icon-database2:before": {
        "content": ""
    },
    "icon-undo2:before": {
        "content": ""
    },
    "icon-redo:before": {
        "content": ""
    },
    "icon-undo3:before": {
        "content": ""
    },
    "icon-redo2:before": {
        "content": ""
    },
    "icon-forward2:before": {
        "content": ""
    },
    "icon-reply2:before": {
        "content": ""
    },
    "icon-bubble2:before": {
        "content": ""
    },
    "icon-bubbles:before": {
        "content": ""
    },
    "icon-bubbles2:before": {
        "content": ""
    },
    "icon-bubble3:before": {
        "content": ""
    },
    "icon-bubbles3:before": {
        "content": ""
    },
    "icon-bubbles4:before": {
        "content": ""
    },
    "icon-user9:before": {
        "content": ""
    },
    "icon-users3:before": {
        "content": ""
    },
    "icon-user-plus:before": {
        "content": ""
    },
    "icon-user-minus:before": {
        "content": ""
    },
    "icon-user-check:before": {
        "content": ""
    },
    "icon-user-tie:before": {
        "content": ""
    },
    "icon-quotes-left:before": {
        "content": ""
    },
    "icon-quotes-right:before": {
        "content": ""
    },
    "icon-hour-glass:before": {
        "content": ""
    },
    "icon-spinner:before": {
        "content": ""
    },
    "icon-spinner2:before": {
        "content": ""
    },
    "icon-spinner3:before": {
        "content": ""
    },
    "icon-spinner4:before": {
        "content": ""
    },
    "icon-spinner5:before": {
        "content": ""
    },
    "icon-spinner6:before": {
        "content": ""
    },
    "icon-spinner7:before": {
        "content": ""
    },
    "icon-spinner8:before": {
        "content": ""
    },
    "icon-spinner9:before": {
        "content": ""
    },
    "icon-spinner10:before": {
        "content": ""
    },
    "icon-spinner11:before": {
        "content": ""
    },
    "icon-binoculars:before": {
        "content": ""
    },
    "icon-search5:before": {
        "content": ""
    },
    "icon-zoom-in2:before": {
        "content": ""
    },
    "icon-zoom-out2:before": {
        "content": ""
    },
    "icon-enlarge2:before": {
        "content": ""
    },
    "icon-shrink:before": {
        "content": ""
    },
    "icon-enlarge3:before": {
        "content": ""
    },
    "icon-shrink2:before": {
        "content": ""
    },
    "icon-key6:before": {
        "content": ""
    },
    "icon-key7:before": {
        "content": ""
    },
    "icon-lock4:before": {
        "content": ""
    },
    "icon-unlocked6:before": {
        "content": ""
    },
    "icon-wrench2:before": {
        "content": ""
    },
    "icon-equalizer3:before": {
        "content": ""
    },
    "icon-equalizer4:before": {
        "content": ""
    },
    "icon-cog6:before": {
        "content": ""
    },
    "icon-cogs2:before": {
        "content": ""
    },
    "icon-hammer2:before": {
        "content": ""
    },
    "icon-magic-wand:before": {
        "content": ""
    },
    "icon-aid-kit:before": {
        "content": ""
    },
    "icon-bug2:before": {
        "content": ""
    },
    "icon-pie-chart:before": {
        "content": ""
    },
    "icon-stats-dots:before": {
        "content": ""
    },
    "icon-stats-bars:before": {
        "content": ""
    },
    "icon-stats-bars2:before": {
        "content": ""
    },
    "icon-trophy2:before": {
        "content": ""
    },
    "icon-gift4:before": {
        "content": ""
    },
    "icon-glass:before": {
        "content": ""
    },
    "icon-glass2:before": {
        "content": ""
    },
    "icon-mug5:before": {
        "content": ""
    },
    "icon-spoon-knife:before": {
        "content": ""
    },
    "icon-leaf3:before": {
        "content": ""
    },
    "icon-rocket2:before": {
        "content": ""
    },
    "icon-meter2:before": {
        "content": ""
    },
    "icon-meter3:before": {
        "content": ""
    },
    "icon-hammer3:before": {
        "content": ""
    },
    "icon-fire2:before": {
        "content": ""
    },
    "icon-lab5:before": {
        "content": ""
    },
    "icon-magnet2:before": {
        "content": ""
    },
    "icon-bin:before": {
        "content": ""
    },
    "icon-bin2:before": {
        "content": ""
    },
    "icon-briefcase3:before": {
        "content": ""
    },
    "icon-airplane:before": {
        "content": ""
    },
    "icon-truck4:before": {
        "content": ""
    },
    "icon-road:before": {
        "content": ""
    },
    "icon-accessibility:before": {
        "content": ""
    },
    "icon-target4:before": {
        "content": ""
    },
    "icon-shield3:before": {
        "content": ""
    },
    "icon-power2:before": {
        "content": ""
    },
    "icon-switch4:before": {
        "content": ""
    },
    "icon-power-cord:before": {
        "content": ""
    },
    "icon-clipboard9:before": {
        "content": ""
    },
    "icon-list-numbered:before": {
        "content": ""
    },
    "icon-list5:before": {
        "content": ""
    },
    "icon-list6:before": {
        "content": ""
    },
    "icon-tree3:before": {
        "content": ""
    },
    "icon-menu:before": {
        "content": ""
    },
    "icon-menu2:before": {
        "content": ""
    },
    "icon-menu3:before": {
        "content": ""
    },
    "icon-menu4:before": {
        "content": ""
    },
    "icon-cloud7:before": {
        "content": ""
    },
    "icon-cloud-download2:before": {
        "content": ""
    },
    "icon-cloud-upload2:before": {
        "content": ""
    },
    "icon-cloud-check:before": {
        "content": ""
    },
    "icon-download9:before": {
        "content": ""
    },
    "icon-upload7:before": {
        "content": ""
    },
    "icon-download10:before": {
        "content": ""
    },
    "icon-upload8:before": {
        "content": ""
    },
    "icon-sphere:before": {
        "content": ""
    },
    "icon-earth2:before": {
        "content": ""
    },
    "icon-link5:before": {
        "content": ""
    },
    "icon-flag5:before": {
        "content": ""
    },
    "icon-attachment5:before": {
        "content": ""
    },
    "icon-eye6:before": {
        "content": ""
    },
    "icon-eye-plus:before": {
        "content": ""
    },
    "icon-eye-minus:before": {
        "content": ""
    },
    "icon-eye-blocked:before": {
        "content": ""
    },
    "icon-bookmark7:before": {
        "content": ""
    },
    "icon-bookmarks:before": {
        "content": ""
    },
    "icon-sun3:before": {
        "content": ""
    },
    "icon-contrast:before": {
        "content": ""
    },
    "icon-brightness-contrast:before": {
        "content": ""
    },
    "icon-star-empty:before": {
        "content": ""
    },
    "icon-star-half:before": {
        "content": ""
    },
    "icon-star-full:before": {
        "content": ""
    },
    "icon-heart10:before": {
        "content": ""
    },
    "icon-heart-broken:before": {
        "content": ""
    },
    "icon-man:before": {
        "content": ""
    },
    "icon-woman:before": {
        "content": ""
    },
    "icon-man-woman:before": {
        "content": ""
    },
    "icon-happy2:before": {
        "content": ""
    },
    "icon-happy3:before": {
        "content": ""
    },
    "icon-smile:before": {
        "content": ""
    },
    "icon-smile2:before": {
        "content": ""
    },
    "icon-tongue:before": {
        "content": ""
    },
    "icon-tongue2:before": {
        "content": ""
    },
    "icon-sad3:before": {
        "content": ""
    },
    "icon-sad4:before": {
        "content": ""
    },
    "icon-wink:before": {
        "content": ""
    },
    "icon-wink2:before": {
        "content": ""
    },
    "icon-grin:before": {
        "content": ""
    },
    "icon-grin2:before": {
        "content": ""
    },
    "icon-cool:before": {
        "content": ""
    },
    "icon-cool2:before": {
        "content": ""
    },
    "icon-angry:before": {
        "content": ""
    },
    "icon-angry2:before": {
        "content": ""
    },
    "icon-evil:before": {
        "content": ""
    },
    "icon-evil2:before": {
        "content": ""
    },
    "icon-shocked:before": {
        "content": ""
    },
    "icon-shocked2:before": {
        "content": ""
    },
    "icon-baffled:before": {
        "content": ""
    },
    "icon-baffled2:before": {
        "content": ""
    },
    "icon-confused:before": {
        "content": ""
    },
    "icon-confused2:before": {
        "content": ""
    },
    "icon-neutral:before": {
        "content": ""
    },
    "icon-neutral2:before": {
        "content": ""
    },
    "icon-hipster:before": {
        "content": ""
    },
    "icon-hipster2:before": {
        "content": ""
    },
    "icon-wondering:before": {
        "content": ""
    },
    "icon-wondering2:before": {
        "content": ""
    },
    "icon-sleepy:before": {
        "content": ""
    },
    "icon-sleepy2:before": {
        "content": ""
    },
    "icon-frustrated:before": {
        "content": ""
    },
    "icon-frustrated2:before": {
        "content": ""
    },
    "icon-crying:before": {
        "content": ""
    },
    "icon-crying2:before": {
        "content": ""
    },
    "icon-point-up:before": {
        "content": ""
    },
    "icon-point-right:before": {
        "content": ""
    },
    "icon-point-down:before": {
        "content": ""
    },
    "icon-point-left:before": {
        "content": ""
    },
    "icon-warning3:before": {
        "content": ""
    },
    "icon-notification:before": {
        "content": ""
    },
    "icon-question:before": {
        "content": ""
    },
    "icon-plus5:before": {
        "content": ""
    },
    "icon-minus6:before": {
        "content": ""
    },
    "icon-info6:before": {
        "content": ""
    },
    "icon-cancel-circle:before": {
        "content": ""
    },
    "icon-blocked2:before": {
        "content": ""
    },
    "icon-cross3:before": {
        "content": ""
    },
    "icon-checkmark6:before": {
        "content": ""
    },
    "icon-checkmark7:before": {
        "content": ""
    },
    "icon-spell-check:before": {
        "content": ""
    },
    "icon-enter2:before": {
        "content": ""
    },
    "icon-exit:before": {
        "content": ""
    },
    "icon-play3:before": {
        "content": ""
    },
    "icon-pause2:before": {
        "content": ""
    },
    "icon-stop3:before": {
        "content": ""
    },
    "icon-previous:before": {
        "content": ""
    },
    "icon-next:before": {
        "content": ""
    },
    "icon-backward:before": {
        "content": ""
    },
    "icon-forward3:before": {
        "content": ""
    },
    "icon-play4:before": {
        "content": ""
    },
    "icon-pause3:before": {
        "content": ""
    },
    "icon-stop4:before": {
        "content": ""
    },
    "icon-backward2:before": {
        "content": ""
    },
    "icon-forward4:before": {
        "content": ""
    },
    "icon-first2:before": {
        "content": ""
    },
    "icon-last2:before": {
        "content": ""
    },
    "icon-previous2:before": {
        "content": ""
    },
    "icon-next2:before": {
        "content": ""
    },
    "icon-eject3:before": {
        "content": ""
    },
    "icon-volume-high:before": {
        "content": ""
    },
    "icon-volume-medium:before": {
        "content": ""
    },
    "icon-volume-low:before": {
        "content": ""
    },
    "icon-volume-mute3:before": {
        "content": ""
    },
    "icon-volume-mute4:before": {
        "content": ""
    },
    "icon-volume-increase2:before": {
        "content": ""
    },
    "icon-volume-decrease2:before": {
        "content": ""
    },
    "icon-loop3:before": {
        "content": ""
    },
    "icon-loop4:before": {
        "content": ""
    },
    "icon-infinite:before": {
        "content": ""
    },
    "icon-shuffle2:before": {
        "content": ""
    },
    "icon-arrow-up-left:before": {
        "content": ""
    },
    "icon-arrow-up5:before": {
        "content": ""
    },
    "icon-arrow-up-right:before": {
        "content": ""
    },
    "icon-arrow-right5:before": {
        "content": ""
    },
    "icon-arrow-down-right:before": {
        "content": ""
    },
    "icon-arrow-down5:before": {
        "content": ""
    },
    "icon-arrow-down-left:before": {
        "content": ""
    },
    "icon-arrow-left5:before": {
        "content": ""
    },
    "icon-arrow-up-left2:before": {
        "content": ""
    },
    "icon-arrow-up6:before": {
        "content": ""
    },
    "icon-arrow-up-right2:before": {
        "content": ""
    },
    "icon-arrow-right6:before": {
        "content": ""
    },
    "icon-arrow-down-right2:before": {
        "content": ""
    },
    "icon-arrow-down6:before": {
        "content": ""
    },
    "icon-arrow-down-left2:before": {
        "content": ""
    },
    "icon-arrow-left6:before": {
        "content": ""
    },
    "icon-circle-up:before": {
        "content": ""
    },
    "icon-circle-right:before": {
        "content": ""
    },
    "icon-circle-down:before": {
        "content": ""
    },
    "icon-circle-left:before": {
        "content": ""
    },
    "icon-tab:before": {
        "content": ""
    },
    "icon-move-up:before": {
        "content": ""
    },
    "icon-move-down:before": {
        "content": ""
    },
    "icon-sort-alpha-asc:before": {
        "content": ""
    },
    "icon-sort-alpha-desc:before": {
        "content": ""
    },
    "icon-sort-numeric-asc:before": {
        "content": ""
    },
    "icon-sort-numberic-desc:before": {
        "content": ""
    },
    "icon-sort-amount-asc:before": {
        "content": ""
    },
    "icon-sort-amount-desc:before": {
        "content": ""
    },
    "icon-command:before": {
        "content": ""
    },
    "icon-shift:before": {
        "content": ""
    },
    "icon-ctrl:before": {
        "content": ""
    },
    "icon-opt:before": {
        "content": ""
    },
    "icon-checkbox-checked2:before": {
        "content": ""
    },
    "icon-checkbox-unchecked:before": {
        "content": ""
    },
    "icon-radio-checked:before": {
        "content": ""
    },
    "icon-radio-checked2:before": {
        "content": ""
    },
    "icon-radio-unchecked:before": {
        "content": ""
    },
    "icon-crop3:before": {
        "content": ""
    },
    "icon-make-group:before": {
        "content": ""
    },
    "icon-ungroup:before": {
        "content": ""
    },
    "icon-scissors5:before": {
        "content": ""
    },
    "icon-filter:before": {
        "content": ""
    },
    "icon-font:before": {
        "content": ""
    },
    "icon-ligature:before": {
        "content": ""
    },
    "icon-ligature2:before": {
        "content": ""
    },
    "icon-text-height:before": {
        "content": ""
    },
    "icon-text-width:before": {
        "content": ""
    },
    "icon-font-size:before": {
        "content": ""
    },
    "icon-bold:before": {
        "content": ""
    },
    "icon-underline:before": {
        "content": ""
    },
    "icon-italic:before": {
        "content": ""
    },
    "icon-strikethrough:before": {
        "content": ""
    },
    "icon-omega:before": {
        "content": ""
    },
    "icon-sigma:before": {
        "content": ""
    },
    "icon-page-break:before": {
        "content": ""
    },
    "icon-superscript:before": {
        "content": ""
    },
    "icon-subscript:before": {
        "content": ""
    },
    "icon-superscript2:before": {
        "content": ""
    },
    "icon-subscript2:before": {
        "content": ""
    },
    "icon-text-color:before": {
        "content": ""
    },
    "icon-pagebreak:before": {
        "content": ""
    },
    "icon-clear-formatting:before": {
        "content": ""
    },
    "icon-table:before": {
        "content": ""
    },
    "icon-table2:before": {
        "content": ""
    },
    "icon-insert-template:before": {
        "content": ""
    },
    "icon-pilcrow2:before": {
        "content": ""
    },
    "icon-ltr:before": {
        "content": ""
    },
    "icon-rtl:before": {
        "content": ""
    },
    "icon-section:before": {
        "content": ""
    },
    "icon-paragraph-left:before": {
        "content": ""
    },
    "icon-paragraph-center:before": {
        "content": ""
    },
    "icon-paragraph-right:before": {
        "content": ""
    },
    "icon-paragraph-justify:before": {
        "content": ""
    },
    "icon-indent-increase:before": {
        "content": ""
    },
    "icon-indent-decrease:before": {
        "content": ""
    },
    "icon-share4:before": {
        "content": ""
    },
    "icon-new-tab:before": {
        "content": ""
    },
    "icon-embed:before": {
        "content": ""
    },
    "icon-embed2:before": {
        "content": ""
    },
    "icon-terminal:before": {
        "content": ""
    },
    "icon-share5:before": {
        "content": ""
    },
    "icon-mail4:before": {
        "content": ""
    },
    "icon-mail5:before": {
        "content": ""
    },
    "icon-mail6:before": {
        "content": ""
    },
    "icon-mail7:before": {
        "content": ""
    },
    "icon-amazon:before": {
        "content": ""
    },
    "icon-google:before": {
        "content": ""
    },
    "icon-google2:before": {
        "content": ""
    },
    "icon-google3:before": {
        "content": ""
    },
    "icon-google-plus:before": {
        "content": ""
    },
    "icon-google-plus2:before": {
        "content": ""
    },
    "icon-google-plus3:before": {
        "content": ""
    },
    "icon-hangouts:before": {
        "content": ""
    },
    "icon-google-drive:before": {
        "content": ""
    },
    "icon-facebook3:before": {
        "content": ""
    },
    "icon-facebook4:before": {
        "content": ""
    },
    "icon-instagram:before": {
        "content": ""
    },
    "icon-whatsapp:before": {
        "content": ""
    },
    "icon-spotify:before": {
        "content": ""
    },
    "icon-telegram:before": {
        "content": ""
    },
    "icon-twitter2:before": {
        "content": ""
    },
    "icon-vine:before": {
        "content": ""
    },
    "icon-vk:before": {
        "content": ""
    },
    "icon-renren:before": {
        "content": ""
    },
    "icon-sina-weibo:before": {
        "content": ""
    },
    "icon-feed3:before": {
        "content": ""
    },
    "icon-feed4:before": {
        "content": ""
    },
    "icon-youtube:before": {
        "content": ""
    },
    "icon-youtube2:before": {
        "content": ""
    },
    "icon-twitch:before": {
        "content": ""
    },
    "icon-vimeo:before": {
        "content": ""
    },
    "icon-vimeo2:before": {
        "content": ""
    },
    "icon-lanyrd:before": {
        "content": ""
    },
    "icon-flickr:before": {
        "content": ""
    },
    "icon-flickr2:before": {
        "content": ""
    },
    "icon-flickr3:before": {
        "content": ""
    },
    "icon-flickr4:before": {
        "content": ""
    },
    "icon-dribbble2:before": {
        "content": ""
    },
    "icon-behance:before": {
        "content": ""
    },
    "icon-behance2:before": {
        "content": ""
    },
    "icon-deviantart:before": {
        "content": ""
    },
    "icon-px:before": {
        "content": ""
    },
    "icon-steam:before": {
        "content": ""
    },
    "icon-steam2:before": {
        "content": ""
    },
    "icon-dropbox:before": {
        "content": ""
    },
    "icon-onedrive:before": {
        "content": ""
    },
    "icon-github:before": {
        "content": ""
    },
    "icon-npm:before": {
        "content": ""
    },
    "icon-basecamp:before": {
        "content": ""
    },
    "icon-trello:before": {
        "content": ""
    },
    "icon-wordpress:before": {
        "content": ""
    },
    "icon-joomla:before": {
        "content": ""
    },
    "icon-ello:before": {
        "content": ""
    },
    "icon-blogger:before": {
        "content": ""
    },
    "icon-blogger2:before": {
        "content": ""
    },
    "icon-tumblr2:before": {
        "content": ""
    },
    "icon-tumblr3:before": {
        "content": ""
    },
    "icon-yahoo:before": {
        "content": ""
    },
    "icon-yahoo2:before": {
        "content": ""
    },
    "icon-tux:before": {
        "content": ""
    },
    "icon-apple:before": {
        "content": ""
    },
    "icon-finder:before": {
        "content": ""
    },
    "icon-android2:before": {
        "content": ""
    },
    "icon-windows2:before": {
        "content": ""
    },
    "icon-windows8:before": {
        "content": ""
    },
    "icon-soundcloud:before": {
        "content": ""
    },
    "icon-soundcloud2:before": {
        "content": ""
    },
    "icon-skype:before": {
        "content": ""
    },
    "icon-reddit:before": {
        "content": ""
    },
    "icon-hackernews:before": {
        "content": ""
    },
    "icon-wikipedia:before": {
        "content": ""
    },
    "icon-linkedin2:before": {
        "content": ""
    },
    "icon-linkedin3:before": {
        "content": ""
    },
    "icon-lastfm:before": {
        "content": ""
    },
    "icon-lastfm2:before": {
        "content": ""
    },
    "icon-delicious:before": {
        "content": ""
    },
    "icon-stumbleupon:before": {
        "content": ""
    },
    "icon-stumbleupon2:before": {
        "content": ""
    },
    "icon-stackoverflow:before": {
        "content": ""
    },
    "icon-pinterest:before": {
        "content": ""
    },
    "icon-pinterest2:before": {
        "content": ""
    },
    "icon-xing:before": {
        "content": ""
    },
    "icon-xing2:before": {
        "content": ""
    },
    "icon-flattr:before": {
        "content": ""
    },
    "icon-foursquare:before": {
        "content": ""
    },
    "icon-yelp:before": {
        "content": ""
    },
    "icon-paypal:before": {
        "content": ""
    },
    "icon-chrome:before": {
        "content": ""
    },
    "icon-firefox:before": {
        "content": ""
    },
    "icon-IE:before": {
        "content": ""
    },
    "icon-edge:before": {
        "content": ""
    },
    "icon-safari:before": {
        "content": ""
    },
    "icon-opera:before": {
        "content": ""
    },
    "icon-file-pdf:before": {
        "content": ""
    },
    "icon-file-openoffice:before": {
        "content": ""
    },
    "icon-file-word:before": {
        "content": ""
    },
    "icon-file-excel:before": {
        "content": ""
    },
    "icon-libreoffice:before": {
        "content": ""
    },
    "icon-html-five:before": {
        "content": ""
    },
    "icon-html-five2:before": {
        "content": ""
    },
    "icon-css3:before": {
        "content": ""
    },
    "icon-git:before": {
        "content": ""
    },
    "icon-codepen:before": {
        "content": ""
    },
    "icon-svg:before": {
        "content": ""
    },
    "icon-IcoMoon:before": {
        "content": ""
    },
    "icon-light-bulb:before": {
        "content": ""
    },
    "icon-repo:before": {
        "content": ""
    },
    "icon-repo-forked:before": {
        "content": ""
    },
    "icon-glass3:before": {
        "content": ""
    },
    "icon-music5:before": {
        "content": ""
    },
    "icon-repo-push:before": {
        "content": ""
    },
    "icon-repo-pull:before": {
        "content": ""
    },
    "icon-book9:before": {
        "content": ""
    },
    "icon-octoface:before": {
        "content": ""
    },
    "icon-git-pull-request:before": {
        "content": ""
    },
    "icon-mark-github:before": {
        "content": ""
    },
    "icon-cloud-download3:before": {
        "content": ""
    },
    "icon-cloud-upload3:before": {
        "content": ""
    },
    "icon-keyboard5:before": {
        "content": ""
    },
    "icon-gist:before": {
        "content": ""
    },
    "icon-search6:before": {
        "content": ""
    },
    "icon-file-code:before": {
        "content": ""
    },
    "icon-file-text3:before": {
        "content": ""
    },
    "icon-file-media:before": {
        "content": ""
    },
    "icon-file-zip2:before": {
        "content": ""
    },
    "icon-file-pdf2:before": {
        "content": ""
    },
    "icon-tag7:before": {
        "content": ""
    },
    "icon-file-directory:before": {
        "content": ""
    },
    "icon-file-submodule:before": {
        "content": ""
    },
    "icon-person:before": {
        "content": ""
    },
    "icon-jersey:before": {
        "content": ""
    },
    "icon-envelope-o:before": {
        "content": ""
    },
    "icon-heart11:before": {
        "content": ""
    },
    "icon-star6:before": {
        "content": ""
    },
    "icon-star-o:before": {
        "content": ""
    },
    "icon-user10:before": {
        "content": ""
    },
    "icon-git-commit:before": {
        "content": ""
    },
    "icon-git-branch:before": {
        "content": ""
    },
    "icon-film7:before": {
        "content": ""
    },
    "icon-th-large2:before": {
        "content": ""
    },
    "icon-git-merge:before": {
        "content": ""
    },
    "icon-mirror:before": {
        "content": ""
    },
    "icon-th:before": {
        "content": ""
    },
    "icon-issue-opened:before": {
        "content": ""
    },
    "icon-issue-reopened:before": {
        "content": ""
    },
    "icon-issue-closed:before": {
        "content": ""
    },
    "icon-th-list2:before": {
        "content": ""
    },
    "icon-star7:before": {
        "content": ""
    },
    "icon-comment3:before": {
        "content": ""
    },
    "icon-question2:before": {
        "content": ""
    },
    "icon-alert2:before": {
        "content": ""
    },
    "icon-search7:before": {
        "content": ""
    },
    "icon-gear:before": {
        "content": ""
    },
    "icon-radio-tower:before": {
        "content": ""
    },
    "icon-tools3:before": {
        "content": ""
    },
    "icon-sign-out:before": {
        "content": ""
    },
    "icon-rocket3:before": {
        "content": ""
    },
    "icon-rss4:before": {
        "content": ""
    },
    "icon-clippy:before": {
        "content": ""
    },
    "icon-sign-in:before": {
        "content": ""
    },
    "icon-organization:before": {
        "content": ""
    },
    "icon-device-mobile:before": {
        "content": ""
    },
    "icon-unfold:before": {
        "content": ""
    },
    "icon-check:before": {
        "content": ""
    },
    "icon-mail8:before": {
        "content": ""
    },
    "icon-mail-read:before": {
        "content": ""
    },
    "icon-arrow-up7:before": {
        "content": ""
    },
    "icon-arrow-right7:before": {
        "content": ""
    },
    "icon-arrow-down7:before": {
        "content": ""
    },
    "icon-arrow-left7:before": {
        "content": ""
    },
    "icon-pin6:before": {
        "content": ""
    },
    "icon-gift5:before": {
        "content": ""
    },
    "icon-graph2:before": {
        "content": ""
    },
    "icon-triangle-left:before": {
        "content": ""
    },
    "icon-credit-card3:before": {
        "content": ""
    },
    "icon-clock8:before": {
        "content": ""
    },
    "icon-ruby:before": {
        "content": ""
    },
    "icon-broadcast3:before": {
        "content": ""
    },
    "icon-key8:before": {
        "content": ""
    },
    "icon-repo-force-push:before": {
        "content": ""
    },
    "icon-check2:before": {
        "content": ""
    },
    "icon-repo-clone:before": {
        "content": ""
    },
    "icon-diff:before": {
        "content": ""
    },
    "icon-eye7:before": {
        "content": ""
    },
    "icon-comment-discussion:before": {
        "content": ""
    },
    "icon-close:before": {
        "content": ""
    },
    "icon-mail-reply:before": {
        "content": ""
    },
    "icon-primitive-dot:before": {
        "content": ""
    },
    "icon-primitive-square:before": {
        "content": ""
    },
    "icon-search-plus:before": {
        "content": ""
    },
    "icon-search-minus:before": {
        "content": ""
    },
    "icon-device-camera:before": {
        "content": ""
    },
    "icon-device-camera-video:before": {
        "content": ""
    },
    "icon-pencil8:before": {
        "content": ""
    },
    "icon-info7:before": {
        "content": ""
    },
    "icon-triangle-right:before": {
        "content": ""
    },
    "icon-triangle-down:before": {
        "content": ""
    },
    "icon-link6:before": {
        "content": ""
    },
    "icon-plus6:before": {
        "content": ""
    },
    "icon-three-bars:before": {
        "content": ""
    },
    "icon-code2:before": {
        "content": ""
    },
    "icon-location7:before": {
        "content": ""
    },
    "icon-list-unordered:before": {
        "content": ""
    },
    "icon-list-ordered:before": {
        "content": ""
    },
    "icon-quote5:before": {
        "content": ""
    },
    "icon-versions:before": {
        "content": ""
    },
    "icon-color-mode:before": {
        "content": ""
    },
    "icon-screen-full:before": {
        "content": ""
    },
    "icon-screen-normal:before": {
        "content": ""
    },
    "icon-calendar9:before": {
        "content": ""
    },
    "icon-beer2:before": {
        "content": ""
    },
    "icon-lock5:before": {
        "content": ""
    },
    "icon-diff-added:before": {
        "content": ""
    },
    "icon-diff-removed:before": {
        "content": ""
    },
    "icon-diff-modified:before": {
        "content": ""
    },
    "icon-diff-renamed:before": {
        "content": ""
    },
    "icon-asterisk:before": {
        "content": ""
    },
    "icon-horizontal-rule:before": {
        "content": ""
    },
    "icon-arrow-small-right:before": {
        "content": ""
    },
    "icon-jump-down:before": {
        "content": ""
    },
    "icon-jump-up:before": {
        "content": ""
    },
    "icon-move-left:before": {
        "content": ""
    },
    "icon-milestone:before": {
        "content": ""
    },
    "icon-checklist:before": {
        "content": ""
    },
    "icon-megaphone5:before": {
        "content": ""
    },
    "icon-chevron-right2:before": {
        "content": ""
    },
    "icon-plus7:before": {
        "content": ""
    },
    "icon-minus7:before": {
        "content": ""
    },
    "icon-bookmark8:before": {
        "content": ""
    },
    "icon-settings4:before": {
        "content": ""
    },
    "icon-dashboard:before": {
        "content": ""
    },
    "icon-history2:before": {
        "content": ""
    },
    "icon-link-external:before": {
        "content": ""
    },
    "icon-mute3:before": {
        "content": ""
    },
    "icon-x2:before": {
        "content": ""
    },
    "icon-power-off:before": {
        "content": ""
    },
    "icon-signal:before": {
        "content": ""
    },
    "icon-circle-slash:before": {
        "content": ""
    },
    "icon-pulse:before": {
        "content": ""
    },
    "icon-cog7:before": {
        "content": ""
    },
    "icon-sync:before": {
        "content": ""
    },
    "icon-telescope2:before": {
        "content": ""
    },
    "icon-microscope:before": {
        "content": ""
    },
    "icon-alignment-align:before": {
        "content": ""
    },
    "icon-alignment-unalign:before": {
        "content": ""
    },
    "icon-gist-secret:before": {
        "content": ""
    },
    "icon-home7:before": {
        "content": ""
    },
    "icon-alignment-aligned-to:before": {
        "content": ""
    },
    "icon-stop5:before": {
        "content": ""
    },
    "icon-trash-o:before": {
        "content": ""
    },
    "icon-bug3:before": {
        "content": ""
    },
    "icon-logo-github:before": {
        "content": ""
    },
    "icon-home8:before": {
        "content": ""
    },
    "icon-file-binary:before": {
        "content": ""
    },
    "icon-file-o:before": {
        "content": ""
    },
    "icon-database3:before": {
        "content": ""
    },
    "icon-server2:before": {
        "content": ""
    },
    "icon-clock-o:before": {
        "content": ""
    },
    "icon-diff-ignored:before": {
        "content": ""
    },
    "icon-ellipsis:before": {
        "content": ""
    },
    "icon-road2:before": {
        "content": ""
    },
    "icon-no-newline:before": {
        "content": ""
    },
    "icon-hubot:before": {
        "content": ""
    },
    "icon-hourglass3:before": {
        "content": ""
    },
    "icon-arrow-small-up:before": {
        "content": ""
    },
    "icon-arrow-small-down:before": {
        "content": ""
    },
    "icon-arrow-small-left:before": {
        "content": ""
    },
    "icon-chevron-up:before": {
        "content": ""
    },
    "icon-chevron-down:before": {
        "content": ""
    },
    "icon-chevron-left2:before": {
        "content": ""
    },
    "icon-jump-left:before": {
        "content": ""
    },
    "icon-jump-right:before": {
        "content": ""
    },
    "icon-move-up2:before": {
        "content": ""
    },
    "icon-move-down2:before": {
        "content": ""
    },
    "icon-move-right:before": {
        "content": ""
    },
    "icon-triangle-up:before": {
        "content": ""
    },
    "icon-download11:before": {
        "content": ""
    },
    "icon-git-compare:before": {
        "content": ""
    },
    "icon-arrow-circle-o-down:before": {
        "content": ""
    },
    "icon-arrow-circle-o-up:before": {
        "content": ""
    },
    "icon-podium:before": {
        "content": ""
    },
    "icon-file-symlink-file:before": {
        "content": ""
    },
    "icon-file-symlink-directory:before": {
        "content": ""
    },
    "icon-squirrel:before": {
        "content": ""
    },
    "icon-inbox3:before": {
        "content": ""
    },
    "icon-play-circle-o:before": {
        "content": ""
    },
    "icon-repeat:before": {
        "content": ""
    },
    "icon-globe6:before": {
        "content": ""
    },
    "icon-refresh5:before": {
        "content": ""
    },
    "icon-list-alt:before": {
        "content": ""
    },
    "icon-lock6:before": {
        "content": ""
    },
    "icon-unmute:before": {
        "content": ""
    },
    "icon-playback-pause:before": {
        "content": ""
    },
    "icon-playback-rewind:before": {
        "content": ""
    },
    "icon-playback-fast-forward:before": {
        "content": ""
    },
    "icon-mention:before": {
        "content": ""
    },
    "icon-playback-play:before": {
        "content": ""
    },
    "icon-puzzle4:before": {
        "content": ""
    },
    "icon-flag6:before": {
        "content": ""
    },
    "icon-headphones5:before": {
        "content": ""
    },
    "icon-volume-off:before": {
        "content": ""
    },
    "icon-package:before": {
        "content": ""
    },
    "icon-browser3:before": {
        "content": ""
    },
    "icon-split:before": {
        "content": ""
    },
    "icon-steps:before": {
        "content": ""
    },
    "icon-terminal2:before": {
        "content": ""
    },
    "icon-markdown:before": {
        "content": ""
    },
    "icon-dash:before": {
        "content": ""
    },
    "icon-volume-down2:before": {
        "content": ""
    },
    "icon-fold:before": {
        "content": ""
    },
    "icon-volume-up2:before": {
        "content": ""
    },
    "icon-qrcode2:before": {
        "content": ""
    },
    "icon-inbox4:before": {
        "content": ""
    },
    "icon-trashcan4:before": {
        "content": ""
    },
    "icon-paintcan:before": {
        "content": ""
    },
    "icon-flame:before": {
        "content": ""
    },
    "icon-briefcase4:before": {
        "content": ""
    },
    "icon-plug2:before": {
        "content": ""
    },
    "icon-barcode4:before": {
        "content": ""
    },
    "icon-circuit-board:before": {
        "content": ""
    },
    "icon-mortar-board:before": {
        "content": ""
    },
    "icon-law:before": {
        "content": ""
    },
    "icon-tag8:before": {
        "content": ""
    },
    "icon-tags3:before": {
        "content": ""
    },
    "icon-book10:before": {
        "content": ""
    },
    "icon-bookmark9:before": {
        "content": ""
    },
    "icon-print:before": {
        "content": ""
    },
    "icon-camera14:before": {
        "content": ""
    },
    "icon-font2:before": {
        "content": ""
    },
    "icon-bold2:before": {
        "content": ""
    },
    "icon-italic2:before": {
        "content": ""
    },
    "icon-text-height2:before": {
        "content": ""
    },
    "icon-text-width2:before": {
        "content": ""
    },
    "icon-align-left2:before": {
        "content": ""
    },
    "icon-align-center2:before": {
        "content": ""
    },
    "icon-align-right2:before": {
        "content": ""
    },
    "icon-align-justify2:before": {
        "content": ""
    },
    "icon-list7:before": {
        "content": ""
    },
    "icon-dedent:before": {
        "content": ""
    },
    "icon-indent:before": {
        "content": ""
    },
    "icon-video-camera2:before": {
        "content": ""
    },
    "icon-image6:before": {
        "content": ""
    },
    "icon-pencil9:before": {
        "content": ""
    },
    "icon-map-marker:before": {
        "content": ""
    },
    "icon-adjust:before": {
        "content": ""
    },
    "icon-tint:before": {
        "content": ""
    },
    "icon-edit4:before": {
        "content": ""
    },
    "icon-share-square-o:before": {
        "content": ""
    },
    "icon-check-square-o:before": {
        "content": ""
    },
    "icon-arrows:before": {
        "content": ""
    },
    "icon-step-backward:before": {
        "content": ""
    },
    "icon-fast-backward:before": {
        "content": ""
    },
    "icon-backward3:before": {
        "content": ""
    },
    "icon-play5:before": {
        "content": ""
    },
    "icon-pause4:before": {
        "content": ""
    },
    "icon-stop6:before": {
        "content": ""
    },
    "icon-forward5:before": {
        "content": ""
    },
    "icon-fast-forward:before": {
        "content": ""
    },
    "icon-step-forward:before": {
        "content": ""
    },
    "icon-eject4:before": {
        "content": ""
    },
    "icon-chevron-left3:before": {
        "content": ""
    },
    "icon-chevron-right3:before": {
        "content": ""
    },
    "icon-plus-circle:before": {
        "content": ""
    },
    "icon-minus-circle:before": {
        "content": ""
    },
    "icon-times-circle:before": {
        "content": ""
    },
    "icon-check-circle:before": {
        "content": ""
    },
    "icon-question-circle:before": {
        "content": ""
    },
    "icon-info-circle:before": {
        "content": ""
    },
    "icon-crosshairs:before": {
        "content": ""
    },
    "icon-times-circle-o:before": {
        "content": ""
    },
    "icon-check-circle-o:before": {
        "content": ""
    },
    "icon-ban:before": {
        "content": ""
    },
    "icon-arrow-left8:before": {
        "content": ""
    },
    "icon-arrow-right8:before": {
        "content": ""
    },
    "icon-arrow-up8:before": {
        "content": ""
    },
    "icon-arrow-down8:before": {
        "content": ""
    },
    "icon-mail-forward:before": {
        "content": ""
    },
    "icon-expand3:before": {
        "content": ""
    },
    "icon-compress:before": {
        "content": ""
    },
    "icon-exclamation-circle:before": {
        "content": ""
    },
    "icon-gift6:before": {
        "content": ""
    },
    "icon-leaf4:before": {
        "content": ""
    },
    "icon-fire3:before": {
        "content": ""
    },
    "icon-eye8:before": {
        "content": ""
    },
    "icon-eye-slash:before": {
        "content": ""
    },
    "icon-exclamation-triangle:before": {
        "content": ""
    },
    "icon-plane3:before": {
        "content": ""
    },
    "icon-calendar10:before": {
        "content": ""
    },
    "icon-random:before": {
        "content": ""
    },
    "icon-comment4:before": {
        "content": ""
    },
    "icon-magnet3:before": {
        "content": ""
    },
    "icon-chevron-up2:before": {
        "content": ""
    },
    "icon-chevron-down2:before": {
        "content": ""
    },
    "icon-retweet2:before": {
        "content": ""
    },
    "icon-shopping-cart2:before": {
        "content": ""
    },
    "icon-folder6:before": {
        "content": ""
    },
    "icon-folder-open2:before": {
        "content": ""
    },
    "icon-arrows-v:before": {
        "content": ""
    },
    "icon-arrows-h:before": {
        "content": ""
    },
    "icon-bar-chart:before": {
        "content": ""
    },
    "icon-twitter-square:before": {
        "content": ""
    },
    "icon-question3:before": {
        "content": ""
    },
    "icon-facebook-square:before": {
        "content": ""
    },
    "icon-camera-retro:before": {
        "content": ""
    },
    "icon-key9:before": {
        "content": ""
    },
    "icon-cogs3:before": {
        "content": ""
    },
    "icon-comments2:before": {
        "content": ""
    },
    "icon-thumbs-o-up:before": {
        "content": ""
    },
    "icon-thumbs-o-down:before": {
        "content": ""
    },
    "icon-star-half2:before": {
        "content": ""
    },
    "icon-heart-o:before": {
        "content": ""
    },
    "icon-sign-out2:before": {
        "content": ""
    },
    "icon-linkedin-square:before": {
        "content": ""
    },
    "icon-thumb-tack:before": {
        "content": ""
    },
    "icon-external-link:before": {
        "content": ""
    },
    "icon-sign-in2:before": {
        "content": ""
    },
    "icon-trophy3:before": {
        "content": ""
    },
    "icon-github-square:before": {
        "content": ""
    },
    "icon-upload9:before": {
        "content": ""
    },
    "icon-lemon-o:before": {
        "content": ""
    },
    "icon-phone12:before": {
        "content": ""
    },
    "icon-square-o:before": {
        "content": ""
    },
    "icon-bookmark-o:before": {
        "content": ""
    },
    "icon-phone-square:before": {
        "content": ""
    },
    "icon-twitter3:before": {
        "content": ""
    },
    "icon-facebook5:before": {
        "content": ""
    },
    "icon-github2:before": {
        "content": ""
    },
    "icon-unlock:before": {
        "content": ""
    },
    "icon-credit-card4:before": {
        "content": ""
    },
    "icon-feed5:before": {
        "content": ""
    },
    "icon-hdd-o:before": {
        "content": ""
    },
    "icon-bullhorn3:before": {
        "content": ""
    },
    "icon-bell-o:before": {
        "content": ""
    },
    "icon-certificate:before": {
        "content": ""
    },
    "icon-hand-o-right:before": {
        "content": ""
    },
    "icon-hand-o-left:before": {
        "content": ""
    },
    "icon-hand-o-up:before": {
        "content": ""
    },
    "icon-hand-o-down:before": {
        "content": ""
    },
    "icon-arrow-circle-left:before": {
        "content": ""
    },
    "icon-arrow-circle-right:before": {
        "content": ""
    },
    "icon-arrow-circle-up:before": {
        "content": ""
    },
    "icon-arrow-circle-down:before": {
        "content": ""
    },
    "icon-globe7:before": {
        "content": ""
    },
    "icon-wrench3:before": {
        "content": ""
    },
    "icon-tasks:before": {
        "content": ""
    },
    "icon-filter2:before": {
        "content": ""
    },
    "icon-briefcase5:before": {
        "content": ""
    },
    "icon-arrows-alt:before": {
        "content": ""
    },
    "icon-group2:before": {
        "content": ""
    },
    "icon-chain:before": {
        "content": ""
    },
    "icon-cloud8:before": {
        "content": ""
    },
    "icon-flask:before": {
        "content": ""
    },
    "icon-cut:before": {
        "content": ""
    },
    "icon-copy2:before": {
        "content": ""
    },
    "icon-paperclip4:before": {
        "content": ""
    },
    "icon-floppy-o:before": {
        "content": ""
    },
    "icon-square3:before": {
        "content": ""
    },
    "icon-bars3:before": {
        "content": ""
    },
    "icon-list-ul:before": {
        "content": ""
    },
    "icon-list-ol:before": {
        "content": ""
    },
    "icon-strikethrough2:before": {
        "content": ""
    },
    "icon-underline2:before": {
        "content": ""
    },
    "icon-table3:before": {
        "content": ""
    },
    "icon-magic:before": {
        "content": ""
    },
    "icon-truck5:before": {
        "content": ""
    },
    "icon-pinterest3:before": {
        "content": ""
    },
    "icon-pinterest-square:before": {
        "content": ""
    },
    "icon-google-plus-square:before": {
        "content": ""
    },
    "icon-google-plus4:before": {
        "content": ""
    },
    "icon-money:before": {
        "content": ""
    },
    "icon-caret-down:before": {
        "content": ""
    },
    "icon-caret-up:before": {
        "content": ""
    },
    "icon-caret-left:before": {
        "content": ""
    },
    "icon-caret-right:before": {
        "content": ""
    },
    "icon-columns:before": {
        "content": ""
    },
    "icon-sort:before": {
        "content": ""
    },
    "icon-sort-desc:before": {
        "content": ""
    },
    "icon-sort-asc:before": {
        "content": ""
    },
    "icon-envelope7:before": {
        "content": ""
    },
    "icon-linkedin4:before": {
        "content": ""
    },
    "icon-rotate-left:before": {
        "content": ""
    },
    "icon-gavel:before": {
        "content": ""
    },
    "icon-dashboard2:before": {
        "content": ""
    },
    "icon-comment-o:before": {
        "content": ""
    },
    "icon-comments-o:before": {
        "content": ""
    },
    "icon-bolt3:before": {
        "content": ""
    },
    "icon-sitemap3:before": {
        "content": ""
    },
    "icon-umbrella4:before": {
        "content": ""
    },
    "icon-clipboard10:before": {
        "content": ""
    },
    "icon-lightbulb-o:before": {
        "content": ""
    },
    "icon-exchange:before": {
        "content": ""
    },
    "icon-cloud-download4:before": {
        "content": ""
    },
    "icon-cloud-upload4:before": {
        "content": ""
    },
    "icon-user-md:before": {
        "content": ""
    },
    "icon-stethoscope:before": {
        "content": ""
    },
    "icon-suitcase5:before": {
        "content": ""
    },
    "icon-bell3:before": {
        "content": ""
    },
    "icon-coffee4:before": {
        "content": ""
    },
    "icon-cutlery:before": {
        "content": ""
    },
    "icon-file-text-o:before": {
        "content": ""
    },
    "icon-building-o:before": {
        "content": ""
    },
    "icon-hospital-o:before": {
        "content": ""
    },
    "icon-ambulance:before": {
        "content": ""
    },
    "icon-medkit:before": {
        "content": ""
    },
    "icon-fighter-jet:before": {
        "content": ""
    },
    "icon-beer3:before": {
        "content": ""
    },
    "icon-h-square:before": {
        "content": ""
    },
    "icon-plus-square:before": {
        "content": ""
    },
    "icon-angle-double-left:before": {
        "content": ""
    },
    "icon-angle-double-right:before": {
        "content": ""
    },
    "icon-angle-double-up:before": {
        "content": ""
    },
    "icon-angle-double-down:before": {
        "content": ""
    },
    "icon-angle-left:before": {
        "content": ""
    },
    "icon-angle-right:before": {
        "content": ""
    },
    "icon-angle-up:before": {
        "content": ""
    },
    "icon-angle-down:before": {
        "content": ""
    },
    "icon-desktop2:before": {
        "content": ""
    },
    "icon-laptop5:before": {
        "content": ""
    },
    "icon-tablet5:before": {
        "content": ""
    },
    "icon-mobile5:before": {
        "content": ""
    },
    "icon-circle-o:before": {
        "content": ""
    },
    "icon-quote-left:before": {
        "content": ""
    },
    "icon-quote-right:before": {
        "content": ""
    },
    "icon-spinner12:before": {
        "content": ""
    },
    "icon-circle2:before": {
        "content": ""
    },
    "icon-mail-reply2:before": {
        "content": ""
    },
    "icon-github-alt:before": {
        "content": ""
    },
    "icon-folder-o:before": {
        "content": ""
    },
    "icon-folder-open-o:before": {
        "content": ""
    },
    "icon-smile-o:before": {
        "content": ""
    },
    "icon-frown-o:before": {
        "content": ""
    },
    "icon-meh-o:before": {
        "content": ""
    },
    "icon-gamepad4:before": {
        "content": ""
    },
    "icon-keyboard-o:before": {
        "content": ""
    },
    "icon-flag-o:before": {
        "content": ""
    },
    "icon-flag-checkered:before": {
        "content": ""
    },
    "icon-terminal3:before": {
        "content": ""
    },
    "icon-code3:before": {
        "content": ""
    },
    "icon-mail-reply-all:before": {
        "content": ""
    },
    "icon-star-half-empty:before": {
        "content": ""
    },
    "icon-location-arrow2:before": {
        "content": ""
    },
    "icon-crop4:before": {
        "content": ""
    },
    "icon-code-fork:before": {
        "content": ""
    },
    "icon-chain-broken:before": {
        "content": ""
    },
    "icon-info8:before": {
        "content": ""
    },
    "icon-exclamation:before": {
        "content": ""
    },
    "icon-superscript3:before": {
        "content": ""
    },
    "icon-subscript3:before": {
        "content": ""
    },
    "icon-eraser:before": {
        "content": ""
    },
    "icon-puzzle-piece:before": {
        "content": ""
    },
    "icon-microphone9:before": {
        "content": ""
    },
    "icon-microphone-slash:before": {
        "content": ""
    },
    "icon-shield4:before": {
        "content": ""
    },
    "icon-calendar-o:before": {
        "content": ""
    },
    "icon-fire-extinguisher:before": {
        "content": ""
    },
    "icon-rocket4:before": {
        "content": ""
    },
    "icon-maxcdn:before": {
        "content": ""
    },
    "icon-chevron-circle-left:before": {
        "content": ""
    },
    "icon-chevron-circle-right:before": {
        "content": ""
    },
    "icon-chevron-circle-up:before": {
        "content": ""
    },
    "icon-chevron-circle-down:before": {
        "content": ""
    },
    "icon-html5:before": {
        "content": ""
    },
    "icon-css32:before": {
        "content": ""
    },
    "icon-anchor4:before": {
        "content": ""
    },
    "icon-unlock-alt:before": {
        "content": ""
    },
    "icon-bullseye:before": {
        "content": ""
    },
    "icon-ellipsis-h:before": {
        "content": ""
    },
    "icon-ellipsis-v:before": {
        "content": ""
    },
    "icon-rss-square:before": {
        "content": ""
    },
    "icon-play-circle:before": {
        "content": ""
    },
    "icon-ticket6:before": {
        "content": ""
    },
    "icon-minus-square:before": {
        "content": ""
    },
    "icon-minus-square-o:before": {
        "content": ""
    },
    "icon-level-up:before": {
        "content": ""
    },
    "icon-level-down:before": {
        "content": ""
    },
    "icon-check-square:before": {
        "content": ""
    },
    "icon-pencil-square:before": {
        "content": ""
    },
    "icon-external-link-square:before": {
        "content": ""
    },
    "icon-share-square:before": {
        "content": ""
    },
    "icon-compass7:before": {
        "content": ""
    },
    "icon-caret-square-o-down:before": {
        "content": ""
    },
    "icon-caret-square-o-up:before": {
        "content": ""
    },
    "icon-caret-square-o-right:before": {
        "content": ""
    },
    "icon-eur:before": {
        "content": ""
    },
    "icon-gbp:before": {
        "content": ""
    },
    "icon-dollar3:before": {
        "content": ""
    },
    "icon-inr:before": {
        "content": ""
    },
    "icon-cny:before": {
        "content": ""
    },
    "icon-rouble:before": {
        "content": ""
    },
    "icon-krw:before": {
        "content": ""
    },
    "icon-bitcoin:before": {
        "content": ""
    },
    "icon-file6:before": {
        "content": ""
    },
    "icon-file-text4:before": {
        "content": ""
    },
    "icon-sort-alpha-asc2:before": {
        "content": ""
    },
    "icon-sort-alpha-desc2:before": {
        "content": ""
    },
    "icon-sort-amount-asc2:before": {
        "content": ""
    },
    "icon-sort-amount-desc2:before": {
        "content": ""
    },
    "icon-sort-numeric-asc2:before": {
        "content": ""
    },
    "icon-sort-numeric-desc:before": {
        "content": ""
    },
    "icon-thumbs-up2:before": {
        "content": ""
    },
    "icon-thumbs-down2:before": {
        "content": ""
    },
    "icon-youtube-square:before": {
        "content": ""
    },
    "icon-youtube3:before": {
        "content": ""
    },
    "icon-xing3:before": {
        "content": ""
    },
    "icon-xing-square:before": {
        "content": ""
    },
    "icon-youtube-play:before": {
        "content": ""
    },
    "icon-dropbox2:before": {
        "content": ""
    },
    "icon-stack-overflow:before": {
        "content": ""
    },
    "icon-instagram2:before": {
        "content": ""
    },
    "icon-flickr5:before": {
        "content": ""
    },
    "icon-adn:before": {
        "content": ""
    },
    "icon-bitbucket:before": {
        "content": ""
    },
    "icon-bitbucket-square:before": {
        "content": ""
    },
    "icon-tumblr4:before": {
        "content": ""
    },
    "icon-tumblr-square:before": {
        "content": ""
    },
    "icon-long-arrow-down:before": {
        "content": ""
    },
    "icon-long-arrow-up:before": {
        "content": ""
    },
    "icon-long-arrow-left:before": {
        "content": ""
    },
    "icon-long-arrow-right:before": {
        "content": ""
    },
    "icon-apple2:before": {
        "content": ""
    },
    "icon-windows3:before": {
        "content": ""
    },
    "icon-android3:before": {
        "content": ""
    },
    "icon-linux:before": {
        "content": ""
    },
    "icon-dribbble3:before": {
        "content": ""
    },
    "icon-skype2:before": {
        "content": ""
    },
    "icon-foursquare2:before": {
        "content": ""
    },
    "icon-trello2:before": {
        "content": ""
    },
    "icon-female2:before": {
        "content": ""
    },
    "icon-male2:before": {
        "content": ""
    },
    "icon-gittip:before": {
        "content": ""
    },
    "icon-sun-o:before": {
        "content": ""
    },
    "icon-moon-o:before": {
        "content": ""
    },
    "icon-archive4:before": {
        "content": ""
    },
    "icon-bug4:before": {
        "content": ""
    },
    "icon-vk2:before": {
        "content": ""
    },
    "icon-weibo:before": {
        "content": ""
    },
    "icon-renren2:before": {
        "content": ""
    },
    "icon-pagelines:before": {
        "content": ""
    },
    "icon-stack-exchange:before": {
        "content": ""
    },
    "icon-arrow-circle-o-right:before": {
        "content": ""
    },
    "icon-arrow-circle-o-left:before": {
        "content": ""
    },
    "icon-caret-square-o-left:before": {
        "content": ""
    },
    "icon-dot-circle-o:before": {
        "content": ""
    },
    "icon-wheelchair:before": {
        "content": ""
    },
    "icon-vimeo-square:before": {
        "content": ""
    },
    "icon-try:before": {
        "content": ""
    },
    "icon-plus-square-o:before": {
        "content": ""
    },
    "icon-space-shuttle:before": {
        "content": ""
    },
    "icon-slack:before": {
        "content": ""
    },
    "icon-envelope-square:before": {
        "content": ""
    },
    "icon-wordpress2:before": {
        "content": ""
    },
    "icon-openid:before": {
        "content": ""
    },
    "icon-bank:before": {
        "content": ""
    },
    "icon-graduation-cap:before": {
        "content": ""
    },
    "icon-yahoo3:before": {
        "content": ""
    },
    "icon-google4:before": {
        "content": ""
    },
    "icon-reddit2:before": {
        "content": ""
    },
    "icon-reddit-square:before": {
        "content": ""
    },
    "icon-stumbleupon-circle:before": {
        "content": ""
    },
    "icon-stumbleupon3:before": {
        "content": ""
    },
    "icon-delicious2:before": {
        "content": ""
    },
    "icon-digg:before": {
        "content": ""
    },
    "icon-pied-piper-pp:before": {
        "content": ""
    },
    "icon-pied-piper-alt:before": {
        "content": ""
    },
    "icon-drupal:before": {
        "content": ""
    },
    "icon-joomla2:before": {
        "content": ""
    },
    "icon-language:before": {
        "content": ""
    },
    "icon-fax:before": {
        "content": ""
    },
    "icon-building:before": {
        "content": ""
    },
    "icon-child:before": {
        "content": ""
    },
    "icon-paw:before": {
        "content": ""
    },
    "icon-spoon:before": {
        "content": ""
    },
    "icon-cube3:before": {
        "content": ""
    },
    "icon-cubes:before": {
        "content": ""
    },
    "icon-behance3:before": {
        "content": ""
    },
    "icon-behance-square:before": {
        "content": ""
    },
    "icon-steam3:before": {
        "content": ""
    },
    "icon-steam-square:before": {
        "content": ""
    },
    "icon-recycle2:before": {
        "content": ""
    },
    "icon-automobile:before": {
        "content": ""
    },
    "icon-cab:before": {
        "content": ""
    },
    "icon-tree4:before": {
        "content": ""
    },
    "icon-spotify2:before": {
        "content": ""
    },
    "icon-deviantart2:before": {
        "content": ""
    },
    "icon-soundcloud3:before": {
        "content": ""
    },
    "icon-database4:before": {
        "content": ""
    },
    "icon-file-pdf-o:before": {
        "content": ""
    },
    "icon-file-word-o:before": {
        "content": ""
    },
    "icon-file-excel-o:before": {
        "content": ""
    },
    "icon-file-powerpoint-o:before": {
        "content": ""
    },
    "icon-file-image-o:before": {
        "content": ""
    },
    "icon-file-archive-o:before": {
        "content": ""
    },
    "icon-file-audio-o:before": {
        "content": ""
    },
    "icon-file-movie-o:before": {
        "content": ""
    },
    "icon-file-code-o:before": {
        "content": ""
    },
    "icon-vine2:before": {
        "content": ""
    },
    "icon-codepen2:before": {
        "content": ""
    },
    "icon-jsfiddle:before": {
        "content": ""
    },
    "icon-life-bouy:before": {
        "content": ""
    },
    "icon-circle-o-notch:before": {
        "content": ""
    },
    "icon-ra:before": {
        "content": ""
    },
    "icon-empire:before": {
        "content": ""
    },
    "icon-git-square:before": {
        "content": ""
    },
    "icon-git2:before": {
        "content": ""
    },
    "icon-hacker-news:before": {
        "content": ""
    },
    "icon-tencent-weibo:before": {
        "content": ""
    },
    "icon-qq:before": {
        "content": ""
    },
    "icon-wechat:before": {
        "content": ""
    },
    "icon-paper-plane:before": {
        "content": ""
    },
    "icon-paper-plane-o:before": {
        "content": ""
    },
    "icon-history3:before": {
        "content": ""
    },
    "icon-circle-thin:before": {
        "content": ""
    },
    "icon-header:before": {
        "content": ""
    },
    "icon-paragraph:before": {
        "content": ""
    },
    "icon-sliders:before": {
        "content": ""
    },
    "icon-share-alt:before": {
        "content": ""
    },
    "icon-share-alt-square:before": {
        "content": ""
    },
    "icon-bomb2:before": {
        "content": ""
    },
    "icon-futbol-o:before": {
        "content": ""
    },
    "icon-tty:before": {
        "content": ""
    },
    "icon-binoculars2:before": {
        "content": ""
    },
    "icon-plug3:before": {
        "content": ""
    },
    "icon-slideshare:before": {
        "content": ""
    },
    "icon-twitch2:before": {
        "content": ""
    },
    "icon-yelp2:before": {
        "content": ""
    },
    "icon-newspaper-o:before": {
        "content": ""
    },
    "icon-wifi:before": {
        "content": ""
    },
    "icon-calculator6:before": {
        "content": ""
    },
    "icon-paypal2:before": {
        "content": ""
    },
    "icon-google-wallet:before": {
        "content": ""
    },
    "icon-cc-visa:before": {
        "content": ""
    },
    "icon-cc-mastercard:before": {
        "content": ""
    },
    "icon-cc-discover:before": {
        "content": ""
    },
    "icon-cc-amex:before": {
        "content": ""
    },
    "icon-cc-paypal:before": {
        "content": ""
    },
    "icon-cc-stripe:before": {
        "content": ""
    },
    "icon-bell-slash:before": {
        "content": ""
    },
    "icon-bell-slash-o:before": {
        "content": ""
    },
    "icon-trash3:before": {
        "content": ""
    },
    "icon-copyright:before": {
        "content": ""
    },
    "icon-at3:before": {
        "content": ""
    },
    "icon-device-desktop2:before": {
        "content": ""
    },
    "icon-eyedropper5:before": {
        "content": ""
    },
    "icon-paint-brush:before": {
        "content": ""
    },
    "icon-birthday-cake:before": {
        "content": ""
    },
    "icon-area-chart:before": {
        "content": ""
    },
    "icon-pie-chart2:before": {
        "content": ""
    },
    "icon-line-chart:before": {
        "content": ""
    },
    "icon-lastfm3:before": {
        "content": ""
    },
    "icon-lastfm-square:before": {
        "content": ""
    },
    "icon-toggle-off:before": {
        "content": ""
    },
    "icon-toggle-on:before": {
        "content": ""
    },
    "icon-bicycle:before": {
        "content": ""
    },
    "icon-bus2:before": {
        "content": ""
    },
    "icon-ioxhost:before": {
        "content": ""
    },
    "icon-angellist:before": {
        "content": ""
    },
    "icon-cc:before": {
        "content": ""
    },
    "icon-ils:before": {
        "content": ""
    },
    "icon-meanpath:before": {
        "content": ""
    },
    "icon-buysellads:before": {
        "content": ""
    },
    "icon-connectdevelop:before": {
        "content": ""
    },
    "icon-dashcube:before": {
        "content": ""
    },
    "icon-forumbee:before": {
        "content": ""
    },
    "icon-leanpub:before": {
        "content": ""
    },
    "icon-sellsy:before": {
        "content": ""
    },
    "icon-shirtsinbulk:before": {
        "content": ""
    },
    "icon-simplybuilt:before": {
        "content": ""
    },
    "icon-skyatlas:before": {
        "content": ""
    },
    "icon-cart-plus:before": {
        "content": ""
    },
    "icon-cart-arrow-down:before": {
        "content": ""
    },
    "icon-diamond4:before": {
        "content": ""
    },
    "icon-ship:before": {
        "content": ""
    },
    "icon-user-secret:before": {
        "content": ""
    },
    "icon-motorcycle:before": {
        "content": ""
    },
    "icon-street-view:before": {
        "content": ""
    },
    "icon-heartbeat:before": {
        "content": ""
    },
    "icon-venus:before": {
        "content": ""
    },
    "icon-mars:before": {
        "content": ""
    },
    "icon-mercury:before": {
        "content": ""
    },
    "icon-intersex:before": {
        "content": ""
    },
    "icon-transgender-alt:before": {
        "content": ""
    },
    "icon-venus-double:before": {
        "content": ""
    },
    "icon-mars-double:before": {
        "content": ""
    },
    "icon-venus-mars:before": {
        "content": ""
    },
    "icon-mars-stroke:before": {
        "content": ""
    },
    "icon-mars-stroke-v:before": {
        "content": ""
    },
    "icon-mars-stroke-h:before": {
        "content": ""
    },
    "icon-neuter:before": {
        "content": ""
    },
    "icon-genderless:before": {
        "content": ""
    },
    "icon-facebook-official:before": {
        "content": ""
    },
    "icon-pinterest-p:before": {
        "content": ""
    },
    "icon-whatsapp2:before": {
        "content": ""
    },
    "icon-server3:before": {
        "content": ""
    },
    "icon-user-plus2:before": {
        "content": ""
    },
    "icon-user-times:before": {
        "content": ""
    },
    "icon-bed:before": {
        "content": ""
    },
    "icon-viacoin:before": {
        "content": ""
    },
    "icon-train:before": {
        "content": ""
    },
    "icon-subway:before": {
        "content": ""
    },
    "icon-medium:before": {
        "content": ""
    },
    "icon-y-combinator:before": {
        "content": ""
    },
    "icon-optin-monster:before": {
        "content": ""
    },
    "icon-opencart:before": {
        "content": ""
    },
    "icon-expeditedssl:before": {
        "content": ""
    },
    "icon-battery8:before": {
        "content": ""
    },
    "icon-battery-3:before": {
        "content": ""
    },
    "icon-battery-2:before": {
        "content": ""
    },
    "icon-battery-1:before": {
        "content": ""
    },
    "icon-battery-0:before": {
        "content": ""
    },
    "icon-mouse-pointer:before": {
        "content": ""
    },
    "icon-i-cursor:before": {
        "content": ""
    },
    "icon-object-group:before": {
        "content": ""
    },
    "icon-object-ungroup:before": {
        "content": ""
    },
    "icon-sticky-note:before": {
        "content": ""
    },
    "icon-sticky-note-o:before": {
        "content": ""
    },
    "icon-cc-jcb:before": {
        "content": ""
    },
    "icon-cc-diners-club:before": {
        "content": ""
    },
    "icon-clone:before": {
        "content": ""
    },
    "icon-balance-scale:before": {
        "content": ""
    },
    "icon-hourglass-o:before": {
        "content": ""
    },
    "icon-hourglass-1:before": {
        "content": ""
    },
    "icon-hourglass-2:before": {
        "content": ""
    },
    "icon-hourglass-3:before": {
        "content": ""
    },
    "icon-hourglass4:before": {
        "content": ""
    },
    "icon-hand-grab-o:before": {
        "content": ""
    },
    "icon-hand-paper-o:before": {
        "content": ""
    },
    "icon-hand-scissors-o:before": {
        "content": ""
    },
    "icon-hand-lizard-o:before": {
        "content": ""
    },
    "icon-hand-spock-o:before": {
        "content": ""
    },
    "icon-hand-pointer-o:before": {
        "content": ""
    },
    "icon-hand-peace-o:before": {
        "content": ""
    },
    "icon-trademark:before": {
        "content": ""
    },
    "icon-registered:before": {
        "content": ""
    },
    "icon-creative-commons:before": {
        "content": ""
    },
    "icon-gg:before": {
        "content": ""
    },
    "icon-gg-circle:before": {
        "content": ""
    },
    "icon-tripadvisor:before": {
        "content": ""
    },
    "icon-odnoklassniki:before": {
        "content": ""
    },
    "icon-odnoklassniki-square:before": {
        "content": ""
    },
    "icon-get-pocket:before": {
        "content": ""
    },
    "icon-wikipedia-w:before": {
        "content": ""
    },
    "icon-safari2:before": {
        "content": ""
    },
    "icon-chrome2:before": {
        "content": ""
    },
    "icon-firefox2:before": {
        "content": ""
    },
    "icon-opera2:before": {
        "content": ""
    },
    "icon-internet-explorer:before": {
        "content": ""
    },
    "icon-television:before": {
        "content": ""
    },
    "icon-contao:before": {
        "content": ""
    },
    "icon-px2:before": {
        "content": ""
    },
    "icon-amazon2:before": {
        "content": ""
    },
    "icon-calendar-plus-o:before": {
        "content": ""
    },
    "icon-calendar-minus-o:before": {
        "content": ""
    },
    "icon-calendar-times-o:before": {
        "content": ""
    },
    "icon-calendar-check-o:before": {
        "content": ""
    },
    "icon-industry:before": {
        "content": ""
    },
    "icon-map-pin2:before": {
        "content": ""
    },
    "icon-map-signs:before": {
        "content": ""
    },
    "icon-map-o:before": {
        "content": ""
    },
    "icon-map7:before": {
        "content": ""
    },
    "icon-commenting:before": {
        "content": ""
    },
    "icon-commenting-o:before": {
        "content": ""
    },
    "icon-houzz:before": {
        "content": ""
    },
    "icon-vimeo3:before": {
        "content": ""
    },
    "icon-black-tie:before": {
        "content": ""
    },
    "icon-fonticons:before": {
        "content": ""
    },
    "icon-reddit-alien:before": {
        "content": ""
    },
    "icon-edge2:before": {
        "content": ""
    },
    "icon-credit-card-alt:before": {
        "content": ""
    },
    "icon-codiepie:before": {
        "content": ""
    },
    "icon-modx:before": {
        "content": ""
    },
    "icon-fort-awesome:before": {
        "content": ""
    },
    "icon-usb3:before": {
        "content": ""
    },
    "icon-product-hunt:before": {
        "content": ""
    },
    "icon-mixcloud:before": {
        "content": ""
    },
    "icon-scribd:before": {
        "content": ""
    },
    "icon-pause-circle:before": {
        "content": ""
    },
    "icon-pause-circle-o:before": {
        "content": ""
    },
    "icon-stop-circle:before": {
        "content": ""
    },
    "icon-stop-circle-o:before": {
        "content": ""
    },
    "icon-shopping-bag2:before": {
        "content": ""
    },
    "icon-shopping-basket:before": {
        "content": ""
    },
    "icon-hashtag:before": {
        "content": ""
    },
    "icon-bluetooth:before": {
        "content": ""
    },
    "icon-bluetooth-b:before": {
        "content": ""
    },
    "icon-percent:before": {
        "content": ""
    },
    "icon-gitlab:before": {
        "content": ""
    },
    "icon-wpbeginner:before": {
        "content": ""
    },
    "icon-wpforms:before": {
        "content": ""
    },
    "icon-envira:before": {
        "content": ""
    },
    "icon-universal-access:before": {
        "content": ""
    },
    "icon-wheelchair-alt:before": {
        "content": ""
    },
    "icon-question-circle-o:before": {
        "content": ""
    },
    "icon-blind:before": {
        "content": ""
    },
    "icon-audio-description:before": {
        "content": ""
    },
    "icon-volume-control-phone:before": {
        "content": ""
    },
    "icon-braille:before": {
        "content": ""
    },
    "icon-assistive-listening-systems:before": {
        "content": ""
    },
    "icon-american-sign-language-interpreting:before": {
        "content": ""
    },
    "icon-deaf:before": {
        "content": ""
    },
    "icon-glide:before": {
        "content": ""
    },
    "icon-glide-g:before": {
        "content": ""
    },
    "icon-sign-language:before": {
        "content": ""
    },
    "icon-low-vision:before": {
        "content": ""
    },
    "icon-viadeo:before": {
        "content": ""
    },
    "icon-viadeo-square:before": {
        "content": ""
    },
    "icon-snapchat:before": {
        "content": ""
    },
    "icon-snapchat-ghost:before": {
        "content": ""
    },
    "icon-snapchat-square:before": {
        "content": ""
    },
    "icon-pied-piper:before": {
        "content": ""
    },
    "icon-first-order:before": {
        "content": ""
    },
    "icon-yoast:before": {
        "content": ""
    },
    "icon-themeisle:before": {
        "content": ""
    },
    "icon-google-plus-circle:before": {
        "content": ""
    },
    "icon-fa:before": {
        "content": ""
    },
    "icon-handshake-o:before": {
        "content": ""
    },
    "icon-envelope-open:before": {
        "content": ""
    },
    "icon-envelope-open-o:before": {
        "content": ""
    },
    "icon-linode:before": {
        "content": ""
    },
    "icon-address-book2:before": {
        "content": ""
    },
    "icon-address-book-o:before": {
        "content": ""
    },
    "icon-address-card:before": {
        "content": ""
    },
    "icon-address-card-o:before": {
        "content": ""
    },
    "icon-user-circle:before": {
        "content": ""
    },
    "icon-user-circle-o:before": {
        "content": ""
    },
    "icon-user-o:before": {
        "content": ""
    },
    "icon-id-badge:before": {
        "content": ""
    },
    "icon-drivers-license:before": {
        "content": ""
    },
    "icon-drivers-license-o:before": {
        "content": ""
    },
    "icon-quora:before": {
        "content": ""
    },
    "icon-free-code-camp:before": {
        "content": ""
    },
    "icon-telegram2:before": {
        "content": ""
    },
    "icon-thermometer3:before": {
        "content": ""
    },
    "icon-thermometer-3:before": {
        "content": ""
    },
    "icon-thermometer-2:before": {
        "content": ""
    },
    "icon-thermometer-1:before": {
        "content": ""
    },
    "icon-thermometer-0:before": {
        "content": ""
    },
    "icon-shower:before": {
        "content": ""
    },
    "icon-bath:before": {
        "content": ""
    },
    "icon-podcast2:before": {
        "content": ""
    },
    "icon-window-maximize:before": {
        "content": ""
    },
    "icon-window-minimize:before": {
        "content": ""
    },
    "icon-window-restore:before": {
        "content": ""
    },
    "icon-times-rectangle:before": {
        "content": ""
    },
    "icon-times-rectangle-o:before": {
        "content": ""
    },
    "icon-bandcamp:before": {
        "content": ""
    },
    "icon-grav:before": {
        "content": ""
    },
    "icon-etsy:before": {
        "content": ""
    },
    "icon-imdb:before": {
        "content": ""
    },
    "icon-ravelry:before": {
        "content": ""
    },
    "icon-eercast:before": {
        "content": ""
    },
    "icon-microchip:before": {
        "content": ""
    },
    "icon-snowflake-o:before": {
        "content": ""
    },
    "icon-superpowers:before": {
        "content": ""
    },
    "icon-wpexplorer:before": {
        "content": ""
    },
    "icon-meetup:before": {
        "content": ""
    },
    "icon-notdef:before": {
        "content": ""
    },
    "icon-glass4:before": {
        "content": ""
    },
    "icon-music6:before": {
        "content": ""
    },
    "icon-search8:before": {
        "content": ""
    },
    "icon-envelope8:before": {
        "content": ""
    },
    "icon-heart12:before": {
        "content": ""
    },
    "icon-star8:before": {
        "content": ""
    },
    "icon-star_empty:before": {
        "content": ""
    },
    "icon-user11:before": {
        "content": ""
    },
    "icon-film8:before": {
        "content": ""
    },
    "icon-th_large:before": {
        "content": ""
    },
    "icon-th2:before": {
        "content": ""
    },
    "icon-th_list:before": {
        "content": ""
    },
    "icon-ok:before": {
        "content": ""
    },
    "icon-remove:before": {
        "content": ""
    },
    "icon-zoom_in:before": {
        "content": ""
    },
    "icon-zoom_out:before": {
        "content": ""
    },
    "icon-off:before": {
        "content": ""
    },
    "icon-signal2:before": {
        "content": ""
    },
    "icon-cog8:before": {
        "content": ""
    },
    "icon-trash4:before": {
        "content": ""
    },
    "icon-home9:before": {
        "content": ""
    },
    "icon-file_alt:before": {
        "content": ""
    },
    "icon-time4:before": {
        "content": ""
    },
    "icon-road3:before": {
        "content": ""
    },
    "icon-download_alt:before": {
        "content": ""
    },
    "icon-download12:before": {
        "content": ""
    },
    "icon-upload10:before": {
        "content": ""
    },
    "icon-inbox5:before": {
        "content": ""
    },
    "icon-play_circle:before": {
        "content": ""
    },
    "icon-repeat2:before": {
        "content": ""
    },
    "icon-refresh6:before": {
        "content": ""
    },
    "icon-list_alt:before": {
        "content": ""
    },
    "icon-lock7:before": {
        "content": ""
    },
    "icon-flag7:before": {
        "content": ""
    },
    "icon-headphones6:before": {
        "content": ""
    },
    "icon-volume_off:before": {
        "content": ""
    },
    "icon-volume_down:before": {
        "content": ""
    },
    "icon-volume_up:before": {
        "content": ""
    },
    "icon-qrcode3:before": {
        "content": ""
    },
    "icon-barcode5:before": {
        "content": ""
    },
    "icon-tag9:before": {
        "content": ""
    },
    "icon-tags4:before": {
        "content": ""
    },
    "icon-book11:before": {
        "content": ""
    },
    "icon-bookmark10:before": {
        "content": ""
    },
    "icon-print2:before": {
        "content": ""
    },
    "icon-camera15:before": {
        "content": ""
    },
    "icon-font3:before": {
        "content": ""
    },
    "icon-bold3:before": {
        "content": ""
    },
    "icon-italic3:before": {
        "content": ""
    },
    "icon-text_height:before": {
        "content": ""
    },
    "icon-text_width:before": {
        "content": ""
    },
    "icon-align_left:before": {
        "content": ""
    },
    "icon-align_center:before": {
        "content": ""
    },
    "icon-align_right:before": {
        "content": ""
    },
    "icon-align_justify:before": {
        "content": ""
    },
    "icon-list8:before": {
        "content": ""
    },
    "icon-indent_left:before": {
        "content": ""
    },
    "icon-indent_right:before": {
        "content": ""
    },
    "icon-facetime_video:before": {
        "content": ""
    },
    "icon-picture3:before": {
        "content": ""
    },
    "icon-pencil10:before": {
        "content": ""
    },
    "icon-map_marker:before": {
        "content": ""
    },
    "icon-adjust2:before": {
        "content": ""
    },
    "icon-tint2:before": {
        "content": ""
    },
    "icon-edit5:before": {
        "content": ""
    },
    "icon-share6:before": {
        "content": ""
    },
    "icon-check3:before": {
        "content": ""
    },
    "icon-move2:before": {
        "content": ""
    },
    "icon-step_backward:before": {
        "content": ""
    },
    "icon-fast_backward:before": {
        "content": ""
    },
    "icon-backward4:before": {
        "content": ""
    },
    "icon-play6:before": {
        "content": ""
    },
    "icon-pause5:before": {
        "content": ""
    },
    "icon-stop7:before": {
        "content": ""
    },
    "icon-forward6:before": {
        "content": ""
    },
    "icon-fast_forward:before": {
        "content": ""
    },
    "icon-step_forward:before": {
        "content": ""
    },
    "icon-eject5:before": {
        "content": ""
    },
    "icon-chevron_left:before": {
        "content": ""
    },
    "icon-chevron_right:before": {
        "content": ""
    },
    "icon-plus_sign:before": {
        "content": ""
    },
    "icon-minus_sign:before": {
        "content": ""
    },
    "icon-remove_sign:before": {
        "content": ""
    },
    "icon-ok_sign:before": {
        "content": ""
    },
    "icon-question_sign:before": {
        "content": ""
    },
    "icon-info_sign:before": {
        "content": ""
    },
    "icon-screenshot:before": {
        "content": ""
    },
    "icon-remove_circle:before": {
        "content": ""
    },
    "icon-ok_circle:before": {
        "content": ""
    },
    "icon-ban_circle:before": {
        "content": ""
    },
    "icon-arrow_left:before": {
        "content": ""
    },
    "icon-arrow_right:before": {
        "content": ""
    },
    "icon-arrow_up:before": {
        "content": ""
    },
    "icon-arrow_down:before": {
        "content": ""
    },
    "icon-share_alt:before": {
        "content": ""
    },
    "icon-resize_full:before": {
        "content": ""
    },
    "icon-resize_small:before": {
        "content": ""
    },
    "icon-plus8:before": {
        "content": ""
    },
    "icon-minus8:before": {
        "content": ""
    },
    "icon-asterisk2:before": {
        "content": ""
    },
    "icon-exclamation_sign:before": {
        "content": ""
    },
    "icon-gift7:before": {
        "content": ""
    },
    "icon-leaf5:before": {
        "content": ""
    },
    "icon-fire4:before": {
        "content": ""
    },
    "icon-eye_open:before": {
        "content": ""
    },
    "icon-eye_close:before": {
        "content": ""
    },
    "icon-warning_sign:before": {
        "content": ""
    },
    "icon-plane4:before": {
        "content": ""
    },
    "icon-calendar11:before": {
        "content": ""
    },
    "icon-random2:before": {
        "content": ""
    },
    "icon-comment5:before": {
        "content": ""
    },
    "icon-magnet4:before": {
        "content": ""
    },
    "icon-chevron_up:before": {
        "content": ""
    },
    "icon-chevron_down:before": {
        "content": ""
    },
    "icon-retweet3:before": {
        "content": ""
    },
    "icon-shopping_cart:before": {
        "content": ""
    },
    "icon-folder_close:before": {
        "content": ""
    },
    "icon-folder_open:before": {
        "content": ""
    },
    "icon-resize_vertical:before": {
        "content": ""
    },
    "icon-resize_horizontal:before": {
        "content": ""
    },
    "icon-bar_chart:before": {
        "content": ""
    },
    "icon-twitter_sign:before": {
        "content": ""
    },
    "icon-facebook_sign:before": {
        "content": ""
    },
    "icon-camera_retro:before": {
        "content": ""
    },
    "icon-key10:before": {
        "content": ""
    },
    "icon-cogs4:before": {
        "content": ""
    },
    "icon-comments3:before": {
        "content": ""
    },
    "icon-thumbs_up_alt:before": {
        "content": ""
    },
    "icon-thumbs_down_alt:before": {
        "content": ""
    },
    "icon-star_half:before": {
        "content": ""
    },
    "icon-heart_empty:before": {
        "content": ""
    },
    "icon-signout:before": {
        "content": ""
    },
    "icon-linkedin_sign:before": {
        "content": ""
    },
    "icon-pushpin2:before": {
        "content": ""
    },
    "icon-external_link:before": {
        "content": ""
    },
    "icon-signin:before": {
        "content": ""
    },
    "icon-trophy4:before": {
        "content": ""
    },
    "icon-github_sign:before": {
        "content": ""
    },
    "icon-upload_alt:before": {
        "content": ""
    },
    "icon-lemon:before": {
        "content": ""
    },
    "icon-phone13:before": {
        "content": ""
    },
    "icon-check_empty:before": {
        "content": ""
    },
    "icon-bookmark_empty:before": {
        "content": ""
    },
    "icon-phone_sign:before": {
        "content": ""
    },
    "icon-twitter4:before": {
        "content": ""
    },
    "icon-facebook6:before": {
        "content": ""
    },
    "icon-github3:before": {
        "content": ""
    },
    "icon-unlock2:before": {
        "content": ""
    },
    "icon-credit_card:before": {
        "content": ""
    },
    "icon-rss5:before": {
        "content": ""
    },
    "icon-hdd2:before": {
        "content": ""
    },
    "icon-bullhorn4:before": {
        "content": ""
    },
    "icon-bell4:before": {
        "content": ""
    },
    "icon-certificate2:before": {
        "content": ""
    },
    "icon-hand_right:before": {
        "content": ""
    },
    "icon-hand_left:before": {
        "content": ""
    },
    "icon-hand_up:before": {
        "content": ""
    },
    "icon-hand_down:before": {
        "content": ""
    },
    "icon-circle_arrow_left:before": {
        "content": ""
    },
    "icon-circle_arrow_right:before": {
        "content": ""
    },
    "icon-circle_arrow_up:before": {
        "content": ""
    },
    "icon-circle_arrow_down:before": {
        "content": ""
    },
    "icon-globe8:before": {
        "content": ""
    },
    "icon-wrench4:before": {
        "content": ""
    },
    "icon-tasks2:before": {
        "content": ""
    },
    "icon-filter3:before": {
        "content": ""
    },
    "icon-briefcase6:before": {
        "content": ""
    },
    "icon-fullscreen2:before": {
        "content": ""
    },
    "icon-group3:before": {
        "content": ""
    },
    "icon-link7:before": {
        "content": ""
    },
    "icon-cloud9:before": {
        "content": ""
    },
    "icon-beaker4:before": {
        "content": ""
    },
    "icon-cut2:before": {
        "content": ""
    },
    "icon-copy3:before": {
        "content": ""
    },
    "icon-paper_clip:before": {
        "content": ""
    },
    "icon-save:before": {
        "content": ""
    },
    "icon-sign_blank:before": {
        "content": ""
    },
    "icon-reorder:before": {
        "content": ""
    },
    "icon-ul:before": {
        "content": ""
    },
    "icon-ol:before": {
        "content": ""
    },
    "icon-strikethrough3:before": {
        "content": ""
    },
    "icon-underline3:before": {
        "content": ""
    },
    "icon-table4:before": {
        "content": ""
    },
    "icon-magic2:before": {
        "content": ""
    },
    "icon-truck6:before": {
        "content": ""
    },
    "icon-pinterest4:before": {
        "content": ""
    },
    "icon-pinterest_sign:before": {
        "content": ""
    },
    "icon-google_plus_sign:before": {
        "content": ""
    },
    "icon-google_plus:before": {
        "content": ""
    },
    "icon-money2:before": {
        "content": ""
    },
    "icon-caret_down:before": {
        "content": ""
    },
    "icon-caret_up:before": {
        "content": ""
    },
    "icon-caret_left:before": {
        "content": ""
    },
    "icon-caret_right:before": {
        "content": ""
    },
    "icon-columns2:before": {
        "content": ""
    },
    "icon-sort2:before": {
        "content": ""
    },
    "icon-sort_down:before": {
        "content": ""
    },
    "icon-sort_up:before": {
        "content": ""
    },
    "icon-envelope_alt:before": {
        "content": ""
    },
    "icon-linkedin5:before": {
        "content": ""
    },
    "icon-undo4:before": {
        "content": ""
    },
    "icon-legal:before": {
        "content": ""
    },
    "icon-dashboard3:before": {
        "content": ""
    },
    "icon-comment_alt:before": {
        "content": ""
    },
    "icon-comments_alt:before": {
        "content": ""
    },
    "icon-bolt4:before": {
        "content": ""
    },
    "icon-sitemap4:before": {
        "content": ""
    },
    "icon-umbrella5:before": {
        "content": ""
    },
    "icon-paste2:before": {
        "content": ""
    },
    "icon-light_bulb:before": {
        "content": ""
    },
    "icon-exchange2:before": {
        "content": ""
    },
    "icon-cloud_download:before": {
        "content": ""
    },
    "icon-cloud_upload:before": {
        "content": ""
    },
    "icon-user_md:before": {
        "content": ""
    },
    "icon-stethoscope2:before": {
        "content": ""
    },
    "icon-suitcase6:before": {
        "content": ""
    },
    "icon-bell_alt:before": {
        "content": ""
    },
    "icon-coffee5:before": {
        "content": ""
    },
    "icon-food3:before": {
        "content": ""
    },
    "icon-file_text_alt:before": {
        "content": ""
    },
    "icon-building2:before": {
        "content": ""
    },
    "icon-hospital:before": {
        "content": ""
    },
    "icon-ambulance2:before": {
        "content": ""
    },
    "icon-medkit2:before": {
        "content": ""
    },
    "icon-fighter_jet:before": {
        "content": ""
    },
    "icon-beer4:before": {
        "content": ""
    },
    "icon-h_sign:before": {
        "content": ""
    },
    "icon-f0fe:before": {
        "content": ""
    },
    "icon-double_angle_left:before": {
        "content": ""
    },
    "icon-double_angle_right:before": {
        "content": ""
    },
    "icon-double_angle_up:before": {
        "content": ""
    },
    "icon-double_angle_down:before": {
        "content": ""
    },
    "icon-angle_left:before": {
        "content": ""
    },
    "icon-angle_right:before": {
        "content": ""
    },
    "icon-angle_up:before": {
        "content": ""
    },
    "icon-angle_down:before": {
        "content": ""
    },
    "icon-desktop3:before": {
        "content": ""
    },
    "icon-laptop6:before": {
        "content": ""
    },
    "icon-tablet6:before": {
        "content": ""
    },
    "icon-mobile_phone:before": {
        "content": ""
    },
    "icon-circle_blank:before": {
        "content": ""
    },
    "icon-quote_left:before": {
        "content": ""
    },
    "icon-quote_right:before": {
        "content": ""
    },
    "icon-spinner13:before": {
        "content": ""
    },
    "icon-circle3:before": {
        "content": ""
    },
    "icon-reply3:before": {
        "content": ""
    },
    "icon-github_alt:before": {
        "content": ""
    },
    "icon-folder_close_alt:before": {
        "content": ""
    },
    "icon-folder_open_alt:before": {
        "content": ""
    },
    "icon-smile3:before": {
        "content": ""
    },
    "icon-frown:before": {
        "content": ""
    },
    "icon-meh:before": {
        "content": ""
    },
    "icon-gamepad5:before": {
        "content": ""
    },
    "icon-keyboard6:before": {
        "content": ""
    },
    "icon-flag_alt:before": {
        "content": ""
    },
    "icon-flag_checkered:before": {
        "content": ""
    },
    "icon-terminal4:before": {
        "content": ""
    },
    "icon-code4:before": {
        "content": ""
    },
    "icon-reply_all:before": {
        "content": ""
    },
    "icon-star_half_empty:before": {
        "content": ""
    },
    "icon-location_arrow:before": {
        "content": ""
    },
    "icon-crop5:before": {
        "content": ""
    },
    "icon-code_fork:before": {
        "content": ""
    },
    "icon-unlink:before": {
        "content": ""
    },
    "icon-question4:before": {
        "content": ""
    },
    "icon-_279:before": {
        "content": ""
    },
    "icon-exclamation2:before": {
        "content": ""
    },
    "icon-superscript4:before": {
        "content": ""
    },
    "icon-subscript4:before": {
        "content": ""
    },
    "icon-_283:before": {
        "content": ""
    },
    "icon-puzzle_piece:before": {
        "content": ""
    },
    "icon-microphone10:before": {
        "content": ""
    },
    "icon-microphone_off:before": {
        "content": ""
    },
    "icon-shield5:before": {
        "content": ""
    },
    "icon-calendar_empty:before": {
        "content": ""
    },
    "icon-fire_extinguisher:before": {
        "content": ""
    },
    "icon-rocket5:before": {
        "content": ""
    },
    "icon-maxcdn2:before": {
        "content": ""
    },
    "icon-chevron_sign_left:before": {
        "content": ""
    },
    "icon-chevron_sign_right:before": {
        "content": ""
    },
    "icon-chevron_sign_up:before": {
        "content": ""
    },
    "icon-chevron_sign_down:before": {
        "content": ""
    },
    "icon-html52:before": {
        "content": ""
    },
    "icon-css33:before": {
        "content": ""
    },
    "icon-anchor5:before": {
        "content": ""
    },
    "icon-unlock_alt:before": {
        "content": ""
    },
    "icon-bullseye2:before": {
        "content": ""
    },
    "icon-ellipsis_horizontal:before": {
        "content": ""
    },
    "icon-ellipsis_vertical:before": {
        "content": ""
    },
    "icon-_303:before": {
        "content": ""
    },
    "icon-play_sign:before": {
        "content": ""
    },
    "icon-ticket7:before": {
        "content": ""
    },
    "icon-minus_sign_alt:before": {
        "content": ""
    },
    "icon-check_minus:before": {
        "content": ""
    },
    "icon-level_up:before": {
        "content": ""
    },
    "icon-level_down:before": {
        "content": ""
    },
    "icon-check_sign:before": {
        "content": ""
    },
    "icon-edit_sign:before": {
        "content": ""
    },
    "icon-_312:before": {
        "content": ""
    },
    "icon-share_sign:before": {
        "content": ""
    },
    "icon-compass8:before": {
        "content": ""
    },
    "icon-collapse2:before": {
        "content": ""
    },
    "icon-collapse_top:before": {
        "content": ""
    },
    "icon-_317:before": {
        "content": ""
    },
    "icon-eur2:before": {
        "content": ""
    },
    "icon-gbp2:before": {
        "content": ""
    },
    "icon-usd:before": {
        "content": ""
    },
    "icon-inr2:before": {
        "content": ""
    },
    "icon-jpy:before": {
        "content": ""
    },
    "icon-rub:before": {
        "content": ""
    },
    "icon-krw2:before": {
        "content": ""
    },
    "icon-btc:before": {
        "content": ""
    },
    "icon-file7:before": {
        "content": ""
    },
    "icon-file_text:before": {
        "content": ""
    },
    "icon-sort_by_alphabet:before": {
        "content": ""
    },
    "icon-_329:before": {
        "content": ""
    },
    "icon-sort_by_attributes:before": {
        "content": ""
    },
    "icon-sort_by_attributes_alt:before": {
        "content": ""
    },
    "icon-sort_by_order:before": {
        "content": ""
    },
    "icon-sort_by_order_alt:before": {
        "content": ""
    },
    "icon-_334:before": {
        "content": ""
    },
    "icon-_335:before": {
        "content": ""
    },
    "icon-youtube_sign:before": {
        "content": ""
    },
    "icon-youtube4:before": {
        "content": ""
    },
    "icon-xing4:before": {
        "content": ""
    },
    "icon-xing_sign:before": {
        "content": ""
    },
    "icon-youtube_play:before": {
        "content": ""
    },
    "icon-dropbox3:before": {
        "content": ""
    },
    "icon-stackexchange:before": {
        "content": ""
    },
    "icon-instagram3:before": {
        "content": ""
    },
    "icon-flickr6:before": {
        "content": ""
    },
    "icon-adn2:before": {
        "content": ""
    },
    "icon-f171:before": {
        "content": ""
    },
    "icon-bitbucket_sign:before": {
        "content": ""
    },
    "icon-tumblr5:before": {
        "content": ""
    },
    "icon-tumblr_sign:before": {
        "content": ""
    },
    "icon-long_arrow_down:before": {
        "content": ""
    },
    "icon-long_arrow_up:before": {
        "content": ""
    },
    "icon-long_arrow_left:before": {
        "content": ""
    },
    "icon-long_arrow_right:before": {
        "content": ""
    },
    "icon-apple3:before": {
        "content": ""
    },
    "icon-windows4:before": {
        "content": ""
    },
    "icon-android4:before": {
        "content": ""
    },
    "icon-linux2:before": {
        "content": ""
    },
    "icon-dribble:before": {
        "content": ""
    },
    "icon-skype3:before": {
        "content": ""
    },
    "icon-foursquare3:before": {
        "content": ""
    },
    "icon-trello3:before": {
        "content": ""
    },
    "icon-female3:before": {
        "content": ""
    },
    "icon-male3:before": {
        "content": ""
    },
    "icon-gittip2:before": {
        "content": ""
    },
    "icon-sun4:before": {
        "content": ""
    },
    "icon-_366:before": {
        "content": ""
    },
    "icon-archive5:before": {
        "content": ""
    },
    "icon-bug5:before": {
        "content": ""
    },
    "icon-vk3:before": {
        "content": ""
    },
    "icon-weibo2:before": {
        "content": ""
    },
    "icon-renren3:before": {
        "content": ""
    },
    "icon-_372:before": {
        "content": ""
    },
    "icon-stack_exchange:before": {
        "content": ""
    },
    "icon-_374:before": {
        "content": ""
    },
    "icon-arrow_circle_alt_left:before": {
        "content": ""
    },
    "icon-_376:before": {
        "content": ""
    },
    "icon-dot_circle_alt:before": {
        "content": ""
    },
    "icon-_378:before": {
        "content": ""
    },
    "icon-vimeo_square:before": {
        "content": ""
    },
    "icon-_380:before": {
        "content": ""
    },
    "icon-plus_square_o:before": {
        "content": ""
    },
    "icon-_382:before": {
        "content": ""
    },
    "icon-_383:before": {
        "content": ""
    },
    "icon-_384:before": {
        "content": ""
    },
    "icon-_385:before": {
        "content": ""
    },
    "icon-_386:before": {
        "content": ""
    },
    "icon-_387:before": {
        "content": ""
    },
    "icon-_388:before": {
        "content": ""
    },
    "icon-_389:before": {
        "content": ""
    },
    "icon-uniF1A0:before": {
        "content": ""
    },
    "icon-f1a1:before": {
        "content": ""
    },
    "icon-_392:before": {
        "content": ""
    },
    "icon-_393:before": {
        "content": ""
    },
    "icon-f1a4:before": {
        "content": ""
    },
    "icon-_395:before": {
        "content": ""
    },
    "icon-_396:before": {
        "content": ""
    },
    "icon-_397:before": {
        "content": ""
    },
    "icon-_398:before": {
        "content": ""
    },
    "icon-_399:before": {
        "content": ""
    },
    "icon-_400:before": {
        "content": ""
    },
    "icon-f1ab:before": {
        "content": ""
    },
    "icon-_402:before": {
        "content": ""
    },
    "icon-_403:before": {
        "content": ""
    },
    "icon-_404:before": {
        "content": ""
    },
    "icon-uniF1B1:before": {
        "content": ""
    },
    "icon-_406:before": {
        "content": ""
    },
    "icon-_407:before": {
        "content": ""
    },
    "icon-_408:before": {
        "content": ""
    },
    "icon-_409:before": {
        "content": ""
    },
    "icon-_410:before": {
        "content": ""
    },
    "icon-_411:before": {
        "content": ""
    },
    "icon-_412:before": {
        "content": ""
    },
    "icon-_413:before": {
        "content": ""
    },
    "icon-_414:before": {
        "content": ""
    },
    "icon-_415:before": {
        "content": ""
    },
    "icon-_416:before": {
        "content": ""
    },
    "icon-_417:before": {
        "content": ""
    },
    "icon-_418:before": {
        "content": ""
    },
    "icon-_419:before": {
        "content": ""
    },
    "icon-uniF1C0:before": {
        "content": ""
    },
    "icon-uniF1C1:before": {
        "content": ""
    },
    "icon-_422:before": {
        "content": ""
    },
    "icon-_423:before": {
        "content": ""
    },
    "icon-_424:before": {
        "content": ""
    },
    "icon-_425:before": {
        "content": ""
    },
    "icon-_426:before": {
        "content": ""
    },
    "icon-_427:before": {
        "content": ""
    },
    "icon-_428:before": {
        "content": ""
    },
    "icon-_429:before": {
        "content": ""
    },
    "icon-_430:before": {
        "content": ""
    },
    "icon-_431:before": {
        "content": ""
    },
    "icon-_432:before": {
        "content": ""
    },
    "icon-_433:before": {
        "content": ""
    },
    "icon-_434:before": {
        "content": ""
    },
    "icon-uniF1D0:before": {
        "content": ""
    },
    "icon-uniF1D1:before": {
        "content": ""
    },
    "icon-uniF1D2:before": {
        "content": ""
    },
    "icon-_438:before": {
        "content": ""
    },
    "icon-_439:before": {
        "content": ""
    },
    "icon-uniF1D5:before": {
        "content": ""
    },
    "icon-uniF1D6:before": {
        "content": ""
    },
    "icon-uniF1D7:before": {
        "content": ""
    },
    "icon-_443:before": {
        "content": ""
    },
    "icon-_444:before": {
        "content": ""
    },
    "icon-_445:before": {
        "content": ""
    },
    "icon-_446:before": {
        "content": ""
    },
    "icon-_447:before": {
        "content": ""
    },
    "icon-_448:before": {
        "content": ""
    },
    "icon-_449:before": {
        "content": ""
    },
    "icon-uniF1E0:before": {
        "content": ""
    },
    "icon-_451:before": {
        "content": ""
    },
    "icon-_452:before": {
        "content": ""
    },
    "icon-_453:before": {
        "content": ""
    },
    "icon-_454:before": {
        "content": ""
    },
    "icon-_455:before": {
        "content": ""
    },
    "icon-_456:before": {
        "content": ""
    },
    "icon-_457:before": {
        "content": ""
    },
    "icon-_458:before": {
        "content": ""
    },
    "icon-_459:before": {
        "content": ""
    },
    "icon-_460:before": {
        "content": ""
    },
    "icon-_461:before": {
        "content": ""
    },
    "icon-_462:before": {
        "content": ""
    },
    "icon-_463:before": {
        "content": ""
    },
    "icon-_464:before": {
        "content": ""
    },
    "icon-uniF1F0:before": {
        "content": ""
    },
    "icon-_466:before": {
        "content": ""
    },
    "icon-_467:before": {
        "content": ""
    },
    "icon-f1f3:before": {
        "content": ""
    },
    "icon-_469:before": {
        "content": ""
    },
    "icon-_470:before": {
        "content": ""
    },
    "icon-_471:before": {
        "content": ""
    },
    "icon-_472:before": {
        "content": ""
    },
    "icon-_473:before": {
        "content": ""
    },
    "icon-_474:before": {
        "content": ""
    },
    "icon-_475:before": {
        "content": ""
    },
    "icon-_476:before": {
        "content": ""
    },
    "icon-f1fc:before": {
        "content": ""
    },
    "icon-_478:before": {
        "content": ""
    },
    "icon-_479:before": {
        "content": ""
    },
    "icon-_480:before": {
        "content": ""
    },
    "icon-_481:before": {
        "content": ""
    },
    "icon-_482:before": {
        "content": ""
    },
    "icon-_483:before": {
        "content": ""
    },
    "icon-_484:before": {
        "content": ""
    },
    "icon-_485:before": {
        "content": ""
    },
    "icon-_486:before": {
        "content": ""
    },
    "icon-_487:before": {
        "content": ""
    },
    "icon-_488:before": {
        "content": ""
    },
    "icon-_489:before": {
        "content": ""
    },
    "icon-_490:before": {
        "content": ""
    },
    "icon-_491:before": {
        "content": ""
    },
    "icon-_492:before": {
        "content": ""
    },
    "icon-_493:before": {
        "content": ""
    },
    "icon-_494:before": {
        "content": ""
    },
    "icon-f210:before": {
        "content": ""
    },
    "icon-_496:before": {
        "content": ""
    },
    "icon-f212:before": {
        "content": ""
    },
    "icon-_498:before": {
        "content": ""
    },
    "icon-_499:before": {
        "content": ""
    },
    "icon-_500:before": {
        "content": ""
    },
    "icon-_501:before": {
        "content": ""
    },
    "icon-_502:before": {
        "content": ""
    },
    "icon-_503:before": {
        "content": ""
    },
    "icon-_504:before": {
        "content": ""
    },
    "icon-_505:before": {
        "content": ""
    },
    "icon-_506:before": {
        "content": ""
    },
    "icon-_507:before": {
        "content": ""
    },
    "icon-_508:before": {
        "content": ""
    },
    "icon-_509:before": {
        "content": ""
    },
    "icon-venus2:before": {
        "content": ""
    },
    "icon-_511:before": {
        "content": ""
    },
    "icon-_512:before": {
        "content": ""
    },
    "icon-_513:before": {
        "content": ""
    },
    "icon-_514:before": {
        "content": ""
    },
    "icon-_515:before": {
        "content": ""
    },
    "icon-_516:before": {
        "content": ""
    },
    "icon-_517:before": {
        "content": ""
    },
    "icon-_518:before": {
        "content": ""
    },
    "icon-_519:before": {
        "content": ""
    },
    "icon-_520:before": {
        "content": ""
    },
    "icon-_521:before": {
        "content": ""
    },
    "icon-_522:before": {
        "content": ""
    },
    "icon-_525:before": {
        "content": ""
    },
    "icon-_526:before": {
        "content": ""
    },
    "icon-_527:before": {
        "content": ""
    },
    "icon-_528:before": {
        "content": ""
    },
    "icon-_529:before": {
        "content": ""
    },
    "icon-_530:before": {
        "content": ""
    },
    "icon-_531:before": {
        "content": ""
    },
    "icon-_532:before": {
        "content": ""
    },
    "icon-_533:before": {
        "content": ""
    },
    "icon-_534:before": {
        "content": ""
    },
    "icon-_535:before": {
        "content": ""
    },
    "icon-_536:before": {
        "content": ""
    },
    "icon-_537:before": {
        "content": ""
    },
    "icon-_538:before": {
        "content": ""
    },
    "icon-_539:before": {
        "content": ""
    },
    "icon-_540:before": {
        "content": ""
    },
    "icon-_541:before": {
        "content": ""
    },
    "icon-_542:before": {
        "content": ""
    },
    "icon-_543:before": {
        "content": ""
    },
    "icon-_544:before": {
        "content": ""
    },
    "icon-_545:before": {
        "content": ""
    },
    "icon-_546:before": {
        "content": ""
    },
    "icon-_547:before": {
        "content": ""
    },
    "icon-_548:before": {
        "content": ""
    },
    "icon-_549:before": {
        "content": ""
    },
    "icon-_550:before": {
        "content": ""
    },
    "icon-_551:before": {
        "content": ""
    },
    "icon-_552:before": {
        "content": ""
    },
    "icon-_553:before": {
        "content": ""
    },
    "icon-_554:before": {
        "content": ""
    },
    "icon-_555:before": {
        "content": ""
    },
    "icon-_556:before": {
        "content": ""
    },
    "icon-_557:before": {
        "content": ""
    },
    "icon-_558:before": {
        "content": ""
    },
    "icon-_559:before": {
        "content": ""
    },
    "icon-_560:before": {
        "content": ""
    },
    "icon-_561:before": {
        "content": ""
    },
    "icon-_562:before": {
        "content": ""
    },
    "icon-_563:before": {
        "content": ""
    },
    "icon-_564:before": {
        "content": ""
    },
    "icon-_565:before": {
        "content": ""
    },
    "icon-_566:before": {
        "content": ""
    },
    "icon-_567:before": {
        "content": ""
    },
    "icon-_568:before": {
        "content": ""
    },
    "icon-_569:before": {
        "content": ""
    },
    "icon-f260:before": {
        "content": ""
    },
    "icon-f261:before": {
        "content": ""
    },
    "icon-_572:before": {
        "content": ""
    },
    "icon-f263:before": {
        "content": ""
    },
    "icon-_574:before": {
        "content": ""
    },
    "icon-_575:before": {
        "content": ""
    },
    "icon-_576:before": {
        "content": ""
    },
    "icon-_577:before": {
        "content": ""
    },
    "icon-_578:before": {
        "content": ""
    },
    "icon-_579:before": {
        "content": ""
    },
    "icon-_580:before": {
        "content": ""
    },
    "icon-_581:before": {
        "content": ""
    },
    "icon-_582:before": {
        "content": ""
    },
    "icon-_583:before": {
        "content": ""
    },
    "icon-_584:before": {
        "content": ""
    },
    "icon-_585:before": {
        "content": ""
    },
    "icon-_586:before": {
        "content": ""
    },
    "icon-_587:before": {
        "content": ""
    },
    "icon-_588:before": {
        "content": ""
    },
    "icon-_589:before": {
        "content": ""
    },
    "icon-_590:before": {
        "content": ""
    },
    "icon-_591:before": {
        "content": ""
    },
    "icon-_592:before": {
        "content": ""
    },
    "icon-_593:before": {
        "content": ""
    },
    "icon-_594:before": {
        "content": ""
    },
    "icon-_595:before": {
        "content": ""
    },
    "icon-_596:before": {
        "content": ""
    },
    "icon-_597:before": {
        "content": ""
    },
    "icon-_598:before": {
        "content": ""
    },
    "icon-f27e:before": {
        "content": ""
    },
    "icon-uniF280:before": {
        "content": ""
    },
    "icon-uniF281:before": {
        "content": ""
    },
    "icon-_602:before": {
        "content": ""
    },
    "icon-_603:before": {
        "content": ""
    },
    "icon-_604:before": {
        "content": ""
    },
    "icon-uniF285:before": {
        "content": ""
    },
    "icon-uniF286:before": {
        "content": ""
    },
    "icon-_607:before": {
        "content": ""
    },
    "icon-_608:before": {
        "content": ""
    },
    "icon-_609:before": {
        "content": ""
    },
    "icon-_610:before": {
        "content": ""
    },
    "icon-_611:before": {
        "content": ""
    },
    "icon-_612:before": {
        "content": ""
    },
    "icon-_613:before": {
        "content": ""
    },
    "icon-_614:before": {
        "content": ""
    },
    "icon-_615:before": {
        "content": ""
    },
    "icon-_616:before": {
        "content": ""
    },
    "icon-_617:before": {
        "content": ""
    },
    "icon-_618:before": {
        "content": ""
    },
    "icon-_619:before": {
        "content": ""
    },
    "icon-_620:before": {
        "content": ""
    },
    "icon-_621:before": {
        "content": ""
    },
    "icon-_622:before": {
        "content": ""
    },
    "icon-_623:before": {
        "content": ""
    },
    "icon-_624:before": {
        "content": ""
    },
    "icon-_625:before": {
        "content": ""
    },
    "icon-_626:before": {
        "content": ""
    },
    "icon-_627:before": {
        "content": ""
    },
    "icon-_628:before": {
        "content": ""
    },
    "icon-_629:before": {
        "content": ""
    },
    "icon-uniF2A0:before": {
        "content": ""
    },
    "icon-uniF2A1:before": {
        "content": ""
    },
    "icon-uniF2A2:before": {
        "content": ""
    },
    "icon-uniF2A3:before": {
        "content": ""
    },
    "icon-uniF2A4:before": {
        "content": ""
    },
    "icon-uniF2A5:before": {
        "content": ""
    },
    "icon-uniF2A6:before": {
        "content": ""
    },
    "icon-uniF2A7:before": {
        "content": ""
    },
    "icon-uniF2A8:before": {
        "content": ""
    },
    "icon-uniF2A9:before": {
        "content": ""
    },
    "icon-uniF2AA:before": {
        "content": ""
    },
    "icon-uniF2AB:before": {
        "content": ""
    },
    "icon-uniF2AC:before": {
        "content": ""
    },
    "icon-uniF2AD:before": {
        "content": ""
    },
    "icon-uniF2AE:before": {
        "content": ""
    },
    "icon-uniF2B0:before": {
        "content": ""
    },
    "icon-uniF2B1:before": {
        "content": ""
    },
    "icon-uniF2B2:before": {
        "content": ""
    },
    "icon-uniF2B3:before": {
        "content": ""
    },
    "icon-uniF2B4:before": {
        "content": ""
    },
    "icon-uniF2B5:before": {
        "content": ""
    },
    "icon-uniF2B6:before": {
        "content": ""
    },
    "icon-uniF2B7:before": {
        "content": ""
    },
    "icon-uniF2B8:before": {
        "content": ""
    },
    "icon-uniF2B9:before": {
        "content": ""
    },
    "icon-uniF2BA:before": {
        "content": ""
    },
    "icon-uniF2BB:before": {
        "content": ""
    },
    "icon-uniF2BC:before": {
        "content": ""
    },
    "icon-uniF2BD:before": {
        "content": ""
    },
    "icon-uniF2BE:before": {
        "content": ""
    },
    "icon-uniF2C0:before": {
        "content": ""
    },
    "icon-uniF2C1:before": {
        "content": ""
    },
    "icon-uniF2C2:before": {
        "content": ""
    },
    "icon-uniF2C3:before": {
        "content": ""
    },
    "icon-uniF2C4:before": {
        "content": ""
    },
    "icon-uniF2C5:before": {
        "content": ""
    },
    "icon-uniF2C6:before": {
        "content": ""
    },
    "icon-uniF2C7:before": {
        "content": ""
    },
    "icon-uniF2C8:before": {
        "content": ""
    },
    "icon-uniF2C9:before": {
        "content": ""
    },
    "icon-uniF2CA:before": {
        "content": ""
    },
    "icon-uniF2CB:before": {
        "content": ""
    },
    "icon-uniF2CC:before": {
        "content": ""
    },
    "icon-uniF2CD:before": {
        "content": ""
    },
    "icon-uniF2CE:before": {
        "content": ""
    },
    "icon-uniF2D0:before": {
        "content": ""
    },
    "icon-uniF2D1:before": {
        "content": ""
    },
    "icon-uniF2D2:before": {
        "content": ""
    },
    "icon-uniF2D3:before": {
        "content": ""
    },
    "icon-uniF2D4:before": {
        "content": ""
    },
    "icon-uniF2D5:before": {
        "content": ""
    },
    "icon-uniF2D6:before": {
        "content": ""
    },
    "icon-uniF2D7:before": {
        "content": ""
    },
    "icon-uniF2D8:before": {
        "content": ""
    },
    "icon-uniF2D9:before": {
        "content": ""
    },
    "icon-uniF2DA:before": {
        "content": ""
    },
    "icon-uniF2DB:before": {
        "content": ""
    },
    "icon-uniF2DC:before": {
        "content": ""
    },
    "icon-uniF2DD:before": {
        "content": ""
    },
    "icon-uniF2DE:before": {
        "content": ""
    },
    "icon-uniF2E0:before": {
        "content": ""
    },
    "icon-alert3:before": {
        "content": ""
    },
    "icon-alignment-align2:before": {
        "content": ""
    },
    "icon-alignment-aligned-to2:before": {
        "content": ""
    },
    "icon-alignment-unalign2:before": {
        "content": ""
    },
    "icon-arrow-down9:before": {
        "content": ""
    },
    "icon-arrow-left9:before": {
        "content": ""
    },
    "icon-arrow-right9:before": {
        "content": ""
    },
    "icon-arrow-small-down2:before": {
        "content": ""
    },
    "icon-arrow-small-left2:before": {
        "content": ""
    },
    "icon-arrow-small-right2:before": {
        "content": ""
    },
    "icon-arrow-small-up2:before": {
        "content": ""
    },
    "icon-arrow-up9:before": {
        "content": ""
    },
    "icon-beer5:before": {
        "content": ""
    },
    "icon-book12:before": {
        "content": ""
    },
    "icon-bookmark11:before": {
        "content": ""
    },
    "icon-briefcase7:before": {
        "content": ""
    },
    "icon-broadcast4:before": {
        "content": ""
    },
    "icon-browser4:before": {
        "content": ""
    },
    "icon-bug6:before": {
        "content": ""
    },
    "icon-calendar12:before": {
        "content": ""
    },
    "icon-check4:before": {
        "content": ""
    },
    "icon-checklist2:before": {
        "content": ""
    },
    "icon-chevron-down3:before": {
        "content": ""
    },
    "icon-chevron-left4:before": {
        "content": ""
    },
    "icon-chevron-right4:before": {
        "content": ""
    },
    "icon-chevron-up3:before": {
        "content": ""
    },
    "icon-circle-slash2:before": {
        "content": ""
    },
    "icon-circuit-board2:before": {
        "content": ""
    },
    "icon-clippy2:before": {
        "content": ""
    },
    "icon-clock9:before": {
        "content": ""
    },
    "icon-cloud-download5:before": {
        "content": ""
    },
    "icon-cloud-upload5:before": {
        "content": ""
    },
    "icon-code5:before": {
        "content": ""
    },
    "icon-color-mode2:before": {
        "content": ""
    },
    "icon-comment6:before": {
        "content": ""
    },
    "icon-comment-discussion2:before": {
        "content": ""
    },
    "icon-credit-card5:before": {
        "content": ""
    },
    "icon-dash2:before": {
        "content": ""
    },
    "icon-dashboard4:before": {
        "content": ""
    },
    "icon-database5:before": {
        "content": ""
    },
    "icon-device-camera2:before": {
        "content": ""
    },
    "icon-device-camera-video2:before": {
        "content": ""
    },
    "icon-device-desktop3:before": {
        "content": ""
    },
    "icon-device-mobile2:before": {
        "content": ""
    },
    "icon-diff2:before": {
        "content": ""
    },
    "icon-diff-added2:before": {
        "content": ""
    },
    "icon-diff-ignored2:before": {
        "content": ""
    },
    "icon-diff-modified2:before": {
        "content": ""
    },
    "icon-diff-removed2:before": {
        "content": ""
    },
    "icon-diff-renamed2:before": {
        "content": ""
    },
    "icon-ellipsis2:before": {
        "content": ""
    },
    "icon-eye9:before": {
        "content": ""
    },
    "icon-file-binary2:before": {
        "content": ""
    },
    "icon-file-code2:before": {
        "content": ""
    },
    "icon-file-directory2:before": {
        "content": ""
    },
    "icon-file-media2:before": {
        "content": ""
    },
    "icon-file-pdf3:before": {
        "content": ""
    },
    "icon-file-submodule2:before": {
        "content": ""
    },
    "icon-file-symlink-directory2:before": {
        "content": ""
    },
    "icon-file-symlink-file2:before": {
        "content": ""
    },
    "icon-file-text5:before": {
        "content": ""
    },
    "icon-file-zip3:before": {
        "content": ""
    },
    "icon-flame2:before": {
        "content": ""
    },
    "icon-fold2:before": {
        "content": ""
    },
    "icon-gear2:before": {
        "content": ""
    },
    "icon-gift8:before": {
        "content": ""
    },
    "icon-gist2:before": {
        "content": ""
    },
    "icon-gist-secret2:before": {
        "content": ""
    },
    "icon-git-branch2:before": {
        "content": ""
    },
    "icon-git-commit2:before": {
        "content": ""
    },
    "icon-git-compare2:before": {
        "content": ""
    },
    "icon-git-merge2:before": {
        "content": ""
    },
    "icon-git-pull-request2:before": {
        "content": ""
    },
    "icon-globe9:before": {
        "content": ""
    },
    "icon-graph3:before": {
        "content": ""
    },
    "icon-heart13:before": {
        "content": "♦"
    },
    "icon-history4:before": {
        "content": ""
    },
    "icon-home10:before": {
        "content": ""
    },
    "icon-horizontal-rule2:before": {
        "content": ""
    },
    "icon-hourglass5:before": {
        "content": ""
    },
    "icon-hubot2:before": {
        "content": ""
    },
    "icon-inbox6:before": {
        "content": ""
    },
    "icon-info9:before": {
        "content": ""
    },
    "icon-issue-closed2:before": {
        "content": ""
    },
    "icon-issue-opened2:before": {
        "content": ""
    },
    "icon-issue-reopened2:before": {
        "content": ""
    },
    "icon-jersey2:before": {
        "content": ""
    },
    "icon-jump-down2:before": {
        "content": ""
    },
    "icon-jump-left2:before": {
        "content": ""
    },
    "icon-jump-right2:before": {
        "content": ""
    },
    "icon-jump-up2:before": {
        "content": ""
    },
    "icon-key11:before": {
        "content": ""
    },
    "icon-keyboard7:before": {
        "content": ""
    },
    "icon-law2:before": {
        "content": ""
    },
    "icon-light-bulb2:before": {
        "content": ""
    },
    "icon-link8:before": {
        "content": ""
    },
    "icon-link-external2:before": {
        "content": ""
    },
    "icon-list-ordered2:before": {
        "content": ""
    },
    "icon-list-unordered2:before": {
        "content": ""
    },
    "icon-location8:before": {
        "content": ""
    },
    "icon-lock8:before": {
        "content": ""
    },
    "icon-logo-github2:before": {
        "content": ""
    },
    "icon-mail9:before": {
        "content": ""
    },
    "icon-mail-read2:before": {
        "content": ""
    },
    "icon-mail-reply3:before": {
        "content": ""
    },
    "icon-mark-github2:before": {
        "content": ""
    },
    "icon-markdown2:before": {
        "content": ""
    },
    "icon-megaphone6:before": {
        "content": ""
    },
    "icon-mention2:before": {
        "content": ""
    },
    "icon-microscope2:before": {
        "content": ""
    },
    "icon-milestone2:before": {
        "content": ""
    },
    "icon-mirror2:before": {
        "content": ""
    },
    "icon-mortar-board2:before": {
        "content": ""
    },
    "icon-move-down3:before": {
        "content": ""
    },
    "icon-move-left2:before": {
        "content": ""
    },
    "icon-move-right2:before": {
        "content": ""
    },
    "icon-move-up3:before": {
        "content": ""
    },
    "icon-mute4:before": {
        "content": ""
    },
    "icon-no-newline2:before": {
        "content": ""
    },
    "icon-octoface2:before": {
        "content": ""
    },
    "icon-organization2:before": {
        "content": ""
    },
    "icon-package2:before": {
        "content": ""
    },
    "icon-paintcan2:before": {
        "content": ""
    },
    "icon-pencil11:before": {
        "content": ""
    },
    "icon-person2:before": {
        "content": ""
    },
    "icon-pin7:before": {
        "content": ""
    },
    "icon-playback-fast-forward2:before": {
        "content": ""
    },
    "icon-playback-pause2:before": {
        "content": ""
    },
    "icon-playback-play2:before": {
        "content": ""
    },
    "icon-playback-rewind2:before": {
        "content": ""
    },
    "icon-plug4:before": {
        "content": ""
    },
    "icon-plus9:before": {
        "content": ""
    },
    "icon-podium2:before": {
        "content": ""
    },
    "icon-primitive-dot2:before": {
        "content": ""
    },
    "icon-primitive-square2:before": {
        "content": ""
    },
    "icon-pulse2:before": {
        "content": ""
    },
    "icon-puzzle5:before": {
        "content": ""
    },
    "icon-question5:before": {
        "content": ""
    },
    "icon-quote6:before": {
        "content": ""
    },
    "icon-radio-tower2:before": {
        "content": ""
    },
    "icon-repo2:before": {
        "content": ""
    },
    "icon-repo-clone2:before": {
        "content": ""
    },
    "icon-repo-force-push2:before": {
        "content": ""
    },
    "icon-repo-forked2:before": {
        "content": ""
    },
    "icon-repo-pull2:before": {
        "content": ""
    },
    "icon-repo-push2:before": {
        "content": ""
    },
    "icon-rocket6:before": {
        "content": ""
    },
    "icon-rss6:before": {
        "content": ""
    },
    "icon-ruby2:before": {
        "content": ""
    },
    "icon-screen-full2:before": {
        "content": ""
    },
    "icon-screen-normal2:before": {
        "content": ""
    },
    "icon-search9:before": {
        "content": ""
    },
    "icon-server4:before": {
        "content": ""
    },
    "icon-settings5:before": {
        "content": ""
    },
    "icon-sign-in3:before": {
        "content": ""
    },
    "icon-sign-out3:before": {
        "content": ""
    },
    "icon-split2:before": {
        "content": ""
    },
    "icon-squirrel2:before": {
        "content": ""
    },
    "icon-star9:before": {
        "content": ""
    },
    "icon-steps2:before": {
        "content": ""
    },
    "icon-stop8:before": {
        "content": ""
    },
    "icon-sync2:before": {
        "content": ""
    },
    "icon-tag10:before": {
        "content": ""
    },
    "icon-telescope3:before": {
        "content": ""
    },
    "icon-terminal5:before": {
        "content": ""
    },
    "icon-three-bars2:before": {
        "content": ""
    },
    "icon-thumbsdown2:before": {
        "content": ""
    },
    "icon-thumbsup2:before": {
        "content": ""
    },
    "icon-tools4:before": {
        "content": ""
    },
    "icon-trashcan5:before": {
        "content": ""
    },
    "icon-triangle-down2:before": {
        "content": ""
    },
    "icon-triangle-left2:before": {
        "content": ""
    },
    "icon-triangle-right2:before": {
        "content": ""
    },
    "icon-triangle-up2:before": {
        "content": ""
    },
    "icon-unfold2:before": {
        "content": ""
    },
    "icon-unmute2:before": {
        "content": ""
    },
    "icon-versions2:before": {
        "content": ""
    },
    "icon-x3:before": {
        "content": ""
    },
    "icon-zap2:before": {
        "content": "⚢"
    },
    "icon-ajax-color:before": {
        "content": ""
    },
    "icon-angular-color path1:before": {
        "content": "",
        "color": "#ba2731"
    },
    "icon-angular-color path2:before": {
        "content": "",
        "marginLeft": -0.9423828125,
        "color": "#e72734"
    },
    "icon-angular-color path3:before": {
        "content": "",
        "marginLeft": -0.9423828125,
        "color": "#fff"
    },
    "icon-angular-color path4:before": {
        "content": "",
        "marginLeft": -0.9423828125,
        "color": "#b4b3b4"
    },
    "icon-angular-color path5:before": {
        "content": "",
        "marginLeft": -0.9423828125,
        "color": "#b4b3b4"
    },
    "icon-atom-color:before": {
        "content": ""
    },
    "icon-bootstrap-color path1:before": {
        "content": "",
        "color": "#000"
    },
    "icon-bootstrap-color path2:before": {
        "content": "",
        "marginLeft": -1.009765625,
        "color": "#fff"
    },
    "icon-codepen-color:before": {
        "content": ""
    },
    "icon-css3-color path1:before": {
        "content": "",
        "color": "#0a71b9"
    },
    "icon-css3-color path2:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#28a7de"
    },
    "icon-css3-color path3:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-css3-color path4:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#fff"
    },
    "icon-emmet-color path1:before": {
        "content": "",
        "color": "#1b1c20"
    },
    "icon-emmet-color path2:before": {
        "content": "",
        "marginLeft": -1,
        "color": "#bfdd9c"
    },
    "icon-emmet-color path3:before": {
        "content": "",
        "marginLeft": -1,
        "color": "#7cc242"
    },
    "icon-grunt-color path1:before": {
        "content": "",
        "color": "#462f15"
    },
    "icon-grunt-color path2:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-grunt-color path3:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-grunt-color path4:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#463015"
    },
    "icon-grunt-color path5:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#463015"
    },
    "icon-grunt-color path6:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-color path7:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-color path8:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#462f15"
    },
    "icon-grunt-color path9:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#462f15"
    },
    "icon-grunt-color path10:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#462f15"
    },
    "icon-grunt-color path11:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-color path12:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-color path13:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-grunt-color path14:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#e88824"
    },
    "icon-grunt-color path15:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-grunt-color path16:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#e88824"
    },
    "icon-grunt-color path17:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-grunt-color path18:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fba919"
    },
    "icon-html5-color path1:before": {
        "content": "",
        "color": "#e55025"
    },
    "icon-html5-color path2:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#f26722"
    },
    "icon-html5-color path3:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#fff"
    },
    "icon-html5-color path4:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#e6e6e6"
    },
    "icon-html5-color path5:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-laravel-color:before": {
        "content": ""
    },
    "icon-nodejs-color path1:before": {
        "content": "",
        "color": "#353128"
    },
    "icon-nodejs-color path2:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#353128"
    },
    "icon-nodejs-color path3:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#8cc644"
    },
    "icon-nodejs-color path4:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#8cc644"
    },
    "icon-nodejs-color path5:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#353128"
    },
    "icon-nodejs-color path6:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#353128"
    },
    "icon-nodejs-color path7:before": {
        "content": "",
        "marginLeft": -3.6181640625,
        "color": "#353128"
    },
    "icon-php-color path1:before": {
        "content": "",
        "color": "#000"
    },
    "icon-php-color path2:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#5a69aa"
    },
    "icon-php-color path3:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-color path4:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#222"
    },
    "icon-php-color path5:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-color path6:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#222"
    },
    "icon-php-color path7:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-color path8:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#222"
    },
    "icon-sass-color:before": {
        "content": ""
    },
    "icon-scotch-color path1:before": {
        "content": "",
        "color": "#222"
    },
    "icon-scotch-color path2:before": {
        "content": "",
        "marginLeft": -0.5810546875,
        "color": "#d88228"
    },
    "icon-scotch-color path3:before": {
        "content": "",
        "marginLeft": -0.5810546875,
        "color": "#730e22",
        "opacity": 0.7
    },
    "icon-sublime-color:before": {
        "content": ""
    },
    "icon-vagrant-color path1:before": {
        "content": "",
        "color": "#62afe1"
    },
    "icon-vagrant-color path2:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#2990cb"
    },
    "icon-vagrant-color path3:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#e9e8e8"
    },
    "icon-vagrant-color path4:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#eaeaea"
    },
    "icon-vagrant-color path5:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#eaeaea"
    },
    "icon-vagrant-color path6:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#61afe0"
    },
    "icon-vagrant-color path7:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#2990cb"
    },
    "icon-zurb-color path1:before": {
        "content": "",
        "color": "#ecf8fe"
    },
    "icon-zurb-color path2:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#cdebf8"
    },
    "icon-zurb-color path3:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#9fd6ec"
    },
    "icon-zurb-color path4:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#9fd6ec"
    },
    "icon-zurb-color path5:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#9fd6ec"
    },
    "icon-zurb-color path6:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#9fd6ec"
    },
    "icon-zurb-color path7:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#fff"
    },
    "icon-zurb-color path8:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#000"
    },
    "icon-zurb-color path9:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#fff"
    },
    "icon-zurb-color path10:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#fff"
    },
    "icon-zurb-color path11:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#000"
    },
    "icon-zurb-color path12:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#fff"
    },
    "icon-zurb-color path13:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#5c5b5d"
    },
    "icon-zurb-color path14:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#000"
    },
    "icon-zurb-color path15:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#b1e0f3"
    },
    "icon-zurb-color path16:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#cdebf8"
    },
    "icon-zurb-color path17:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#cdebf8"
    },
    "icon-zurb-color path18:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#cdebf8"
    },
    "icon-zurb-color path19:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#cdebf8"
    },
    "icon-zurb-color path20:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#abdce4"
    },
    "icon-zurb-color path21:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#85c1ce"
    },
    "icon-zurb-color path22:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#abdce4"
    },
    "icon-zurb-color path23:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#abdce4"
    },
    "icon-zurb-color path24:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#5c5b5d"
    },
    "icon-zurb-color path25:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#748184"
    },
    "icon-zurb-color path26:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#5c5b5d"
    },
    "icon-zurb-color path27:before": {
        "content": "",
        "marginLeft": -0.650390625,
        "color": "#748184"
    },
    "icon-ajax-bw:before": {
        "content": ""
    },
    "icon-angular-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-angular-bw path2:before": {
        "content": "",
        "marginLeft": -0.9404296875,
        "color": "#000"
    },
    "icon-angular-bw path3:before": {
        "content": "",
        "marginLeft": -0.9404296875,
        "color": "#fff"
    },
    "icon-atom-bw:before": {
        "content": ""
    },
    "icon-bootstrap-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-bootstrap-bw path2:before": {
        "content": "",
        "marginLeft": -1.009765625,
        "color": "#fff"
    },
    "icon-codepen-bw:before": {
        "content": ""
    },
    "icon-css3-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-css3-bw path2:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#f9245d"
    },
    "icon-css3-bw path3:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#f9245d"
    },
    "icon-css3-bw path4:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-css3-bw path5:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-css3-bw path6:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-css3-bw path7:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#fff"
    },
    "icon-emmet-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-emmet-bw path2:before": {
        "content": "",
        "marginLeft": -1,
        "color": "#fff"
    },
    "icon-emmet-bw path3:before": {
        "content": "",
        "marginLeft": -1,
        "color": "#fff"
    },
    "icon-grunt-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-grunt-bw path2:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path3:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path4:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path5:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path6:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path7:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path8:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path9:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path10:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path11:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path12:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-grunt-bw path13:before": {
        "content": "",
        "marginLeft": -0.7431640625,
        "color": "#fff"
    },
    "icon-html5-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-html5-bw path2:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#f9245d"
    },
    "icon-html5-bw path3:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#fff"
    },
    "icon-html5-bw path4:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#fff"
    },
    "icon-html5-bw path5:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-html5-bw path6:before": {
        "content": "",
        "marginLeft": -0.8818359375,
        "color": "#ebebeb"
    },
    "icon-laravel-bw:before": {
        "content": ""
    },
    "icon-nodejs-bw:before": {
        "content": ""
    },
    "icon-php-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-php-bw path2:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-bw path3:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#a6e22e"
    },
    "icon-php-bw path4:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-bw path5:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#a6e22e"
    },
    "icon-php-bw path6:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-php-bw path7:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#a6e22e"
    },
    "icon-php-bw path8:before": {
        "content": "",
        "marginLeft": -1.880859375,
        "color": "#fff"
    },
    "icon-sass-bw:before": {
        "content": ""
    },
    "icon-scotch-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-scotch-bw path2:before": {
        "content": "",
        "marginLeft": -0.5810546875,
        "color": "#9e005f"
    },
    "icon-scotch-bw path3:before": {
        "content": "",
        "marginLeft": -0.5810546875,
        "color": "#a6e22e"
    },
    "icon-scotch-bw path4:before": {
        "content": "",
        "marginLeft": -0.5810546875,
        "color": "#66d9ef",
        "opacity": 0.7
    },
    "icon-sublime-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-sublime-bw path2:before": {
        "content": "",
        "marginLeft": -1,
        "color": "#fff"
    },
    "icon-vagrant-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-vagrant-bw path2:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#fff"
    },
    "icon-vagrant-bw path3:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#fff"
    },
    "icon-vagrant-bw path4:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#fff"
    },
    "icon-vagrant-bw path5:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#fff"
    },
    "icon-vagrant-bw path6:before": {
        "content": "",
        "marginLeft": -1.05859375,
        "color": "#fff"
    },
    "icon-zurb-bw path1:before": {
        "content": "",
        "color": "#a6e22e"
    },
    "icon-zurb-bw path2:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path3:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#f0f0f0"
    },
    "icon-zurb-bw path4:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path5:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path6:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path7:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path8:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path9:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path10:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path11:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path12:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path13:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path14:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path15:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path16:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path17:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#f0f0f0"
    },
    "icon-zurb-bw path18:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#cdebf8"
    },
    "icon-zurb-bw path19:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path20:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#f0f0f0"
    },
    "icon-zurb-bw path21:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path22:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path23:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path24:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fd971f"
    },
    "icon-zurb-bw path25:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path26:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#a6e22e"
    },
    "icon-zurb-bw path27:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-zurb-bw path28:before": {
        "content": "",
        "marginLeft": -0.66015625,
        "color": "#fff"
    },
    "icon-home11:before": {
        "content": ""
    },
    "icon-home22:before": {
        "content": ""
    },
    "icon-home32:before": {
        "content": ""
    },
    "icon-office2:before": {
        "content": ""
    },
    "icon-newspaper5:before": {
        "content": ""
    },
    "icon-pencil12:before": {
        "content": ""
    },
    "icon-pencil22:before": {
        "content": ""
    },
    "icon-quill2:before": {
        "content": ""
    },
    "icon-pen8:before": {
        "content": ""
    },
    "icon-blog2:before": {
        "content": ""
    },
    "icon-eyedropper6:before": {
        "content": ""
    },
    "icon-droplet3:before": {
        "content": ""
    },
    "icon-paint-format2:before": {
        "content": ""
    },
    "icon-image7:before": {
        "content": ""
    },
    "icon-images2:before": {
        "content": ""
    },
    "icon-camera16:before": {
        "content": ""
    },
    "icon-headphones7:before": {
        "content": ""
    },
    "icon-music7:before": {
        "content": ""
    },
    "icon-play7:before": {
        "content": ""
    },
    "icon-film9:before": {
        "content": ""
    },
    "icon-video-camera3:before": {
        "content": ""
    },
    "icon-dice2:before": {
        "content": ""
    },
    "icon-pacman3:before": {
        "content": ""
    },
    "icon-spades2:before": {
        "content": ""
    },
    "icon-clubs2:before": {
        "content": ""
    },
    "icon-diamonds2:before": {
        "content": ""
    },
    "icon-bullhorn5:before": {
        "content": ""
    },
    "icon-connection2:before": {
        "content": ""
    },
    "icon-podcast3:before": {
        "content": ""
    },
    "icon-feed6:before": {
        "content": ""
    },
    "icon-mic3:before": {
        "content": ""
    },
    "icon-book13:before": {
        "content": ""
    },
    "icon-books2:before": {
        "content": ""
    },
    "icon-library3:before": {
        "content": ""
    },
    "icon-file-text6:before": {
        "content": ""
    },
    "icon-profile5:before": {
        "content": ""
    },
    "icon-file-empty2:before": {
        "content": ""
    },
    "icon-files-empty2:before": {
        "content": ""
    },
    "icon-file-text22:before": {
        "content": ""
    },
    "icon-file-picture2:before": {
        "content": ""
    },
    "icon-file-music2:before": {
        "content": ""
    },
    "icon-file-play2:before": {
        "content": ""
    },
    "icon-file-video2:before": {
        "content": ""
    },
    "icon-file-zip4:before": {
        "content": ""
    },
    "icon-copy4:before": {
        "content": ""
    },
    "icon-paste3:before": {
        "content": ""
    },
    "icon-stack7:before": {
        "content": ""
    },
    "icon-folder7:before": {
        "content": ""
    },
    "icon-folder-open3:before": {
        "content": ""
    },
    "icon-folder-plus2:before": {
        "content": ""
    },
    "icon-folder-minus2:before": {
        "content": ""
    },
    "icon-folder-download2:before": {
        "content": ""
    },
    "icon-folder-upload2:before": {
        "content": ""
    },
    "icon-price-tag2:before": {
        "content": ""
    },
    "icon-price-tags2:before": {
        "content": ""
    },
    "icon-barcode6:before": {
        "content": ""
    },
    "icon-qrcode4:before": {
        "content": ""
    },
    "icon-ticket8:before": {
        "content": ""
    },
    "icon-cart3:before": {
        "content": ""
    },
    "icon-coin-dollar2:before": {
        "content": ""
    },
    "icon-coin-euro2:before": {
        "content": ""
    },
    "icon-coin-pound2:before": {
        "content": ""
    },
    "icon-coin-yen2:before": {
        "content": ""
    },
    "icon-credit-card6:before": {
        "content": ""
    },
    "icon-calculator7:before": {
        "content": ""
    },
    "icon-lifebuoy2:before": {
        "content": ""
    },
    "icon-phone14:before": {
        "content": ""
    },
    "icon-phone-hang-up2:before": {
        "content": ""
    },
    "icon-address-book3:before": {
        "content": ""
    },
    "icon-envelop2:before": {
        "content": ""
    },
    "icon-pushpin3:before": {
        "content": ""
    },
    "icon-location9:before": {
        "content": ""
    },
    "icon-location22:before": {
        "content": ""
    },
    "icon-compass9:before": {
        "content": ""
    },
    "icon-compass22:before": {
        "content": ""
    },
    "icon-map8:before": {
        "content": ""
    },
    "icon-map22:before": {
        "content": ""
    },
    "icon-history5:before": {
        "content": ""
    },
    "icon-clock10:before": {
        "content": ""
    },
    "icon-clock22:before": {
        "content": ""
    },
    "icon-alarm3:before": {
        "content": ""
    },
    "icon-bell5:before": {
        "content": ""
    },
    "icon-stopwatch4:before": {
        "content": ""
    },
    "icon-calendar13:before": {
        "content": ""
    },
    "icon-printer7:before": {
        "content": ""
    },
    "icon-keyboard8:before": {
        "content": ""
    },
    "icon-display3:before": {
        "content": ""
    },
    "icon-laptop7:before": {
        "content": ""
    },
    "icon-mobile6:before": {
        "content": ""
    },
    "icon-mobile22:before": {
        "content": ""
    },
    "icon-tablet7:before": {
        "content": ""
    },
    "icon-tv5:before": {
        "content": ""
    },
    "icon-drawer3:before": {
        "content": ""
    },
    "icon-drawer22:before": {
        "content": ""
    },
    "icon-box-add2:before": {
        "content": ""
    },
    "icon-box-remove2:before": {
        "content": ""
    },
    "icon-download13:before": {
        "content": ""
    },
    "icon-upload11:before": {
        "content": ""
    },
    "icon-floppy-disk2:before": {
        "content": ""
    },
    "icon-drive2:before": {
        "content": ""
    },
    "icon-database6:before": {
        "content": ""
    },
    "icon-undo5:before": {
        "content": ""
    },
    "icon-redo3:before": {
        "content": ""
    },
    "icon-undo22:before": {
        "content": ""
    },
    "icon-redo22:before": {
        "content": ""
    },
    "icon-forward7:before": {
        "content": ""
    },
    "icon-reply4:before": {
        "content": ""
    },
    "icon-bubble4:before": {
        "content": ""
    },
    "icon-bubbles5:before": {
        "content": ""
    },
    "icon-bubbles22:before": {
        "content": ""
    },
    "icon-bubble22:before": {
        "content": ""
    },
    "icon-bubbles32:before": {
        "content": ""
    },
    "icon-bubbles42:before": {
        "content": ""
    },
    "icon-user12:before": {
        "content": ""
    },
    "icon-users4:before": {
        "content": ""
    },
    "icon-user-plus3:before": {
        "content": ""
    },
    "icon-user-minus2:before": {
        "content": ""
    },
    "icon-user-check2:before": {
        "content": ""
    },
    "icon-user-tie2:before": {
        "content": ""
    },
    "icon-quotes-left2:before": {
        "content": ""
    },
    "icon-quotes-right2:before": {
        "content": ""
    },
    "icon-hour-glass2:before": {
        "content": ""
    },
    "icon-spinner14:before": {
        "content": ""
    },
    "icon-spinner22:before": {
        "content": ""
    },
    "icon-spinner32:before": {
        "content": ""
    },
    "icon-spinner42:before": {
        "content": ""
    },
    "icon-spinner52:before": {
        "content": ""
    },
    "icon-spinner62:before": {
        "content": ""
    },
    "icon-spinner72:before": {
        "content": ""
    },
    "icon-spinner82:before": {
        "content": ""
    },
    "icon-spinner92:before": {
        "content": ""
    },
    "icon-spinner102:before": {
        "content": ""
    },
    "icon-spinner112:before": {
        "content": ""
    },
    "icon-binoculars3:before": {
        "content": ""
    },
    "icon-search10:before": {
        "content": ""
    },
    "icon-zoom-in3:before": {
        "content": ""
    },
    "icon-zoom-out3:before": {
        "content": ""
    },
    "icon-enlarge4:before": {
        "content": ""
    },
    "icon-shrink3:before": {
        "content": ""
    },
    "icon-enlarge22:before": {
        "content": ""
    },
    "icon-shrink22:before": {
        "content": ""
    },
    "icon-key12:before": {
        "content": ""
    },
    "icon-key22:before": {
        "content": ""
    },
    "icon-lock9:before": {
        "content": ""
    },
    "icon-unlocked7:before": {
        "content": ""
    },
    "icon-wrench5:before": {
        "content": ""
    },
    "icon-equalizer5:before": {
        "content": ""
    },
    "icon-equalizer22:before": {
        "content": ""
    },
    "icon-cog9:before": {
        "content": ""
    },
    "icon-cogs5:before": {
        "content": ""
    },
    "icon-hammer4:before": {
        "content": ""
    },
    "icon-magic-wand2:before": {
        "content": ""
    },
    "icon-aid-kit2:before": {
        "content": ""
    },
    "icon-bug7:before": {
        "content": ""
    },
    "icon-pie-chart3:before": {
        "content": ""
    },
    "icon-stats-dots2:before": {
        "content": ""
    },
    "icon-stats-bars3:before": {
        "content": ""
    },
    "icon-stats-bars22:before": {
        "content": ""
    },
    "icon-trophy5:before": {
        "content": ""
    },
    "icon-gift9:before": {
        "content": ""
    },
    "icon-glass5:before": {
        "content": ""
    },
    "icon-glass22:before": {
        "content": ""
    },
    "icon-mug6:before": {
        "content": ""
    },
    "icon-spoon-knife2:before": {
        "content": ""
    },
    "icon-leaf6:before": {
        "content": ""
    },
    "icon-rocket7:before": {
        "content": ""
    },
    "icon-meter4:before": {
        "content": ""
    },
    "icon-meter22:before": {
        "content": ""
    },
    "icon-hammer22:before": {
        "content": ""
    },
    "icon-fire5:before": {
        "content": ""
    },
    "icon-lab6:before": {
        "content": ""
    },
    "icon-magnet5:before": {
        "content": ""
    },
    "icon-bin3:before": {
        "content": ""
    },
    "icon-bin22:before": {
        "content": ""
    },
    "icon-briefcase8:before": {
        "content": ""
    },
    "icon-airplane2:before": {
        "content": ""
    },
    "icon-truck7:before": {
        "content": ""
    },
    "icon-road4:before": {
        "content": ""
    },
    "icon-accessibility2:before": {
        "content": ""
    },
    "icon-target5:before": {
        "content": ""
    },
    "icon-shield6:before": {
        "content": ""
    },
    "icon-power3:before": {
        "content": ""
    },
    "icon-switch5:before": {
        "content": ""
    },
    "icon-power-cord2:before": {
        "content": ""
    },
    "icon-clipboard11:before": {
        "content": ""
    },
    "icon-list-numbered2:before": {
        "content": ""
    },
    "icon-list9:before": {
        "content": ""
    },
    "icon-list22:before": {
        "content": ""
    },
    "icon-tree5:before": {
        "content": ""
    },
    "icon-menu5:before": {
        "content": ""
    },
    "icon-menu22:before": {
        "content": ""
    },
    "icon-menu32:before": {
        "content": ""
    },
    "icon-menu42:before": {
        "content": ""
    },
    "icon-cloud10:before": {
        "content": ""
    },
    "icon-cloud-download6:before": {
        "content": ""
    },
    "icon-cloud-upload6:before": {
        "content": ""
    },
    "icon-cloud-check2:before": {
        "content": ""
    },
    "icon-download22:before": {
        "content": ""
    },
    "icon-upload22:before": {
        "content": ""
    },
    "icon-download32:before": {
        "content": ""
    },
    "icon-upload32:before": {
        "content": ""
    },
    "icon-sphere2:before": {
        "content": ""
    },
    "icon-earth3:before": {
        "content": ""
    },
    "icon-link9:before": {
        "content": ""
    },
    "icon-flag8:before": {
        "content": ""
    },
    "icon-attachment6:before": {
        "content": ""
    },
    "icon-eye10:before": {
        "content": ""
    },
    "icon-eye-plus2:before": {
        "content": ""
    },
    "icon-eye-minus2:before": {
        "content": ""
    },
    "icon-eye-blocked2:before": {
        "content": ""
    },
    "icon-bookmark12:before": {
        "content": ""
    },
    "icon-bookmarks2:before": {
        "content": ""
    },
    "icon-sun5:before": {
        "content": ""
    },
    "icon-contrast2:before": {
        "content": ""
    },
    "icon-brightness-contrast2:before": {
        "content": ""
    },
    "icon-star-empty2:before": {
        "content": ""
    },
    "icon-star-half3:before": {
        "content": ""
    },
    "icon-star-full2:before": {
        "content": ""
    },
    "icon-heart14:before": {
        "content": ""
    },
    "icon-heart-broken2:before": {
        "content": ""
    },
    "icon-man2:before": {
        "content": ""
    },
    "icon-woman2:before": {
        "content": ""
    },
    "icon-man-woman2:before": {
        "content": ""
    },
    "icon-happy4:before": {
        "content": ""
    },
    "icon-happy22:before": {
        "content": ""
    },
    "icon-smile4:before": {
        "content": ""
    },
    "icon-smile22:before": {
        "content": ""
    },
    "icon-tongue3:before": {
        "content": ""
    },
    "icon-tongue22:before": {
        "content": ""
    },
    "icon-sad5:before": {
        "content": ""
    },
    "icon-sad22:before": {
        "content": ""
    },
    "icon-wink3:before": {
        "content": ""
    },
    "icon-wink22:before": {
        "content": ""
    },
    "icon-grin3:before": {
        "content": ""
    },
    "icon-grin22:before": {
        "content": ""
    },
    "icon-cool3:before": {
        "content": ""
    },
    "icon-cool22:before": {
        "content": ""
    },
    "icon-angry3:before": {
        "content": ""
    },
    "icon-angry22:before": {
        "content": ""
    },
    "icon-evil3:before": {
        "content": ""
    },
    "icon-evil22:before": {
        "content": ""
    },
    "icon-shocked3:before": {
        "content": ""
    },
    "icon-shocked22:before": {
        "content": ""
    },
    "icon-baffled3:before": {
        "content": ""
    },
    "icon-baffled22:before": {
        "content": ""
    },
    "icon-confused3:before": {
        "content": ""
    },
    "icon-confused22:before": {
        "content": ""
    },
    "icon-neutral3:before": {
        "content": ""
    },
    "icon-neutral22:before": {
        "content": ""
    },
    "icon-hipster3:before": {
        "content": ""
    },
    "icon-hipster22:before": {
        "content": ""
    },
    "icon-wondering3:before": {
        "content": ""
    },
    "icon-wondering22:before": {
        "content": ""
    },
    "icon-sleepy3:before": {
        "content": ""
    },
    "icon-sleepy22:before": {
        "content": ""
    },
    "icon-frustrated3:before": {
        "content": ""
    },
    "icon-frustrated22:before": {
        "content": ""
    },
    "icon-crying3:before": {
        "content": ""
    },
    "icon-crying22:before": {
        "content": ""
    },
    "icon-point-up2:before": {
        "content": ""
    },
    "icon-point-right2:before": {
        "content": ""
    },
    "icon-point-down2:before": {
        "content": ""
    },
    "icon-point-left2:before": {
        "content": ""
    },
    "icon-warning4:before": {
        "content": ""
    },
    "icon-notification2:before": {
        "content": ""
    },
    "icon-question6:before": {
        "content": ""
    },
    "icon-plus10:before": {
        "content": ""
    },
    "icon-minus9:before": {
        "content": ""
    },
    "icon-info10:before": {
        "content": ""
    },
    "icon-cancel-circle2:before": {
        "content": ""
    },
    "icon-blocked3:before": {
        "content": ""
    },
    "icon-cross4:before": {
        "content": ""
    },
    "icon-checkmark8:before": {
        "content": ""
    },
    "icon-checkmark22:before": {
        "content": ""
    },
    "icon-spell-check2:before": {
        "content": ""
    },
    "icon-enter3:before": {
        "content": ""
    },
    "icon-exit2:before": {
        "content": ""
    },
    "icon-play22:before": {
        "content": ""
    },
    "icon-pause6:before": {
        "content": ""
    },
    "icon-stop9:before": {
        "content": ""
    },
    "icon-previous3:before": {
        "content": ""
    },
    "icon-next3:before": {
        "content": ""
    },
    "icon-backward5:before": {
        "content": ""
    },
    "icon-forward22:before": {
        "content": ""
    },
    "icon-play32:before": {
        "content": ""
    },
    "icon-pause22:before": {
        "content": ""
    },
    "icon-stop22:before": {
        "content": ""
    },
    "icon-backward22:before": {
        "content": ""
    },
    "icon-forward32:before": {
        "content": ""
    },
    "icon-first3:before": {
        "content": ""
    },
    "icon-last3:before": {
        "content": ""
    },
    "icon-previous22:before": {
        "content": ""
    },
    "icon-next22:before": {
        "content": ""
    },
    "icon-eject6:before": {
        "content": ""
    },
    "icon-volume-high2:before": {
        "content": ""
    },
    "icon-volume-medium2:before": {
        "content": ""
    },
    "icon-volume-low2:before": {
        "content": ""
    },
    "icon-volume-mute5:before": {
        "content": ""
    },
    "icon-volume-mute22:before": {
        "content": ""
    },
    "icon-volume-increase3:before": {
        "content": ""
    },
    "icon-volume-decrease3:before": {
        "content": ""
    },
    "icon-loop5:before": {
        "content": ""
    },
    "icon-loop22:before": {
        "content": ""
    },
    "icon-infinite2:before": {
        "content": ""
    },
    "icon-shuffle3:before": {
        "content": ""
    },
    "icon-arrow-up-left3:before": {
        "content": ""
    },
    "icon-arrow-up10:before": {
        "content": ""
    },
    "icon-arrow-up-right3:before": {
        "content": ""
    },
    "icon-arrow-right10:before": {
        "content": ""
    },
    "icon-arrow-down-right3:before": {
        "content": ""
    },
    "icon-arrow-down10:before": {
        "content": ""
    },
    "icon-arrow-down-left3:before": {
        "content": ""
    },
    "icon-arrow-left10:before": {
        "content": ""
    },
    "icon-arrow-up-left22:before": {
        "content": ""
    },
    "icon-arrow-up22:before": {
        "content": ""
    },
    "icon-arrow-up-right22:before": {
        "content": ""
    },
    "icon-arrow-right22:before": {
        "content": ""
    },
    "icon-arrow-down-right22:before": {
        "content": ""
    },
    "icon-arrow-down22:before": {
        "content": ""
    },
    "icon-arrow-down-left22:before": {
        "content": ""
    },
    "icon-arrow-left22:before": {
        "content": ""
    },
    "icon-circle-up2:before": {
        "content": ""
    },
    "icon-circle-right2:before": {
        "content": ""
    },
    "icon-circle-down2:before": {
        "content": ""
    },
    "icon-circle-left2:before": {
        "content": ""
    },
    "icon-tab2:before": {
        "content": ""
    },
    "icon-move-up4:before": {
        "content": ""
    },
    "icon-move-down4:before": {
        "content": ""
    },
    "icon-sort-alpha-asc3:before": {
        "content": ""
    },
    "icon-sort-alpha-desc3:before": {
        "content": ""
    },
    "icon-sort-numeric-asc3:before": {
        "content": ""
    },
    "icon-sort-numberic-desc2:before": {
        "content": ""
    },
    "icon-sort-amount-asc3:before": {
        "content": ""
    },
    "icon-sort-amount-desc3:before": {
        "content": ""
    },
    "icon-command2:before": {
        "content": ""
    },
    "icon-shift2:before": {
        "content": ""
    },
    "icon-ctrl2:before": {
        "content": ""
    },
    "icon-opt2:before": {
        "content": ""
    },
    "icon-checkbox-checked3:before": {
        "content": ""
    },
    "icon-checkbox-unchecked2:before": {
        "content": ""
    },
    "icon-radio-checked3:before": {
        "content": ""
    },
    "icon-radio-checked22:before": {
        "content": ""
    },
    "icon-radio-unchecked2:before": {
        "content": ""
    },
    "icon-crop6:before": {
        "content": ""
    },
    "icon-make-group2:before": {
        "content": ""
    },
    "icon-ungroup2:before": {
        "content": ""
    },
    "icon-scissors6:before": {
        "content": ""
    },
    "icon-filter4:before": {
        "content": ""
    },
    "icon-font4:before": {
        "content": ""
    },
    "icon-ligature3:before": {
        "content": ""
    },
    "icon-ligature22:before": {
        "content": ""
    },
    "icon-text-height3:before": {
        "content": ""
    },
    "icon-text-width3:before": {
        "content": ""
    },
    "icon-font-size2:before": {
        "content": ""
    },
    "icon-bold4:before": {
        "content": ""
    },
    "icon-underline4:before": {
        "content": ""
    },
    "icon-italic4:before": {
        "content": ""
    },
    "icon-strikethrough4:before": {
        "content": ""
    },
    "icon-omega2:before": {
        "content": ""
    },
    "icon-sigma2:before": {
        "content": ""
    },
    "icon-page-break2:before": {
        "content": ""
    },
    "icon-superscript5:before": {
        "content": ""
    },
    "icon-subscript5:before": {
        "content": ""
    },
    "icon-superscript22:before": {
        "content": ""
    },
    "icon-subscript22:before": {
        "content": ""
    },
    "icon-text-color2:before": {
        "content": ""
    },
    "icon-pagebreak2:before": {
        "content": ""
    },
    "icon-clear-formatting2:before": {
        "content": ""
    },
    "icon-table5:before": {
        "content": ""
    },
    "icon-table22:before": {
        "content": ""
    },
    "icon-insert-template2:before": {
        "content": ""
    },
    "icon-pilcrow3:before": {
        "content": ""
    },
    "icon-ltr2:before": {
        "content": ""
    },
    "icon-rtl2:before": {
        "content": ""
    },
    "icon-section2:before": {
        "content": ""
    },
    "icon-paragraph-left2:before": {
        "content": ""
    },
    "icon-paragraph-center2:before": {
        "content": ""
    },
    "icon-paragraph-right2:before": {
        "content": ""
    },
    "icon-paragraph-justify2:before": {
        "content": ""
    },
    "icon-indent-increase2:before": {
        "content": ""
    },
    "icon-indent-decrease2:before": {
        "content": ""
    },
    "icon-share7:before": {
        "content": ""
    },
    "icon-new-tab2:before": {
        "content": ""
    },
    "icon-embed3:before": {
        "content": ""
    },
    "icon-embed22:before": {
        "content": ""
    },
    "icon-terminal6:before": {
        "content": ""
    },
    "icon-share22:before": {
        "content": ""
    },
    "icon-mail10:before": {
        "content": ""
    },
    "icon-mail22:before": {
        "content": ""
    },
    "icon-mail32:before": {
        "content": ""
    },
    "icon-mail42:before": {
        "content": ""
    },
    "icon-amazon3:before": {
        "content": ""
    },
    "icon-google5:before": {
        "content": ""
    },
    "icon-google22:before": {
        "content": ""
    },
    "icon-google32:before": {
        "content": ""
    },
    "icon-google-plus5:before": {
        "content": ""
    },
    "icon-google-plus22:before": {
        "content": ""
    },
    "icon-google-plus32:before": {
        "content": ""
    },
    "icon-hangouts2:before": {
        "content": ""
    },
    "icon-google-drive2:before": {
        "content": ""
    },
    "icon-facebook7:before": {
        "content": ""
    },
    "icon-facebook22:before": {
        "content": ""
    },
    "icon-instagram4:before": {
        "content": ""
    },
    "icon-whatsapp3:before": {
        "content": ""
    },
    "icon-spotify3:before": {
        "content": ""
    },
    "icon-telegram3:before": {
        "content": ""
    },
    "icon-twitter5:before": {
        "content": ""
    },
    "icon-vine3:before": {
        "content": ""
    },
    "icon-vk4:before": {
        "content": ""
    },
    "icon-renren4:before": {
        "content": ""
    },
    "icon-sina-weibo2:before": {
        "content": ""
    },
    "icon-rss7:before": {
        "content": ""
    },
    "icon-rss22:before": {
        "content": ""
    },
    "icon-youtube5:before": {
        "content": ""
    },
    "icon-youtube22:before": {
        "content": ""
    },
    "icon-twitch3:before": {
        "content": ""
    },
    "icon-vimeo4:before": {
        "content": ""
    },
    "icon-vimeo22:before": {
        "content": ""
    },
    "icon-lanyrd2:before": {
        "content": ""
    },
    "icon-flickr7:before": {
        "content": ""
    },
    "icon-flickr22:before": {
        "content": ""
    },
    "icon-flickr32:before": {
        "content": ""
    },
    "icon-flickr42:before": {
        "content": ""
    },
    "icon-dribbble4:before": {
        "content": ""
    },
    "icon-behance4:before": {
        "content": ""
    },
    "icon-behance22:before": {
        "content": ""
    },
    "icon-deviantart3:before": {
        "content": ""
    },
    "icon-500px:before": {
        "content": ""
    },
    "icon-steam4:before": {
        "content": ""
    },
    "icon-steam22:before": {
        "content": ""
    },
    "icon-dropbox4:before": {
        "content": ""
    },
    "icon-onedrive2:before": {
        "content": ""
    },
    "icon-github4:before": {
        "content": ""
    },
    "icon-npm2:before": {
        "content": ""
    },
    "icon-basecamp2:before": {
        "content": ""
    },
    "icon-trello4:before": {
        "content": ""
    },
    "icon-wordpress3:before": {
        "content": ""
    },
    "icon-joomla3:before": {
        "content": ""
    },
    "icon-ello2:before": {
        "content": ""
    },
    "icon-blogger3:before": {
        "content": ""
    },
    "icon-blogger22:before": {
        "content": ""
    },
    "icon-tumblr6:before": {
        "content": ""
    },
    "icon-tumblr22:before": {
        "content": ""
    },
    "icon-yahoo4:before": {
        "content": ""
    },
    "icon-yahoo22:before": {
        "content": ""
    },
    "icon-tux2:before": {
        "content": ""
    },
    "icon-appleinc:before": {
        "content": ""
    },
    "icon-finder2:before": {
        "content": ""
    },
    "icon-android5:before": {
        "content": ""
    },
    "icon-windows5:before": {
        "content": ""
    },
    "icon-windows82:before": {
        "content": ""
    },
    "icon-soundcloud4:before": {
        "content": ""
    },
    "icon-soundcloud22:before": {
        "content": ""
    },
    "icon-skype4:before": {
        "content": ""
    },
    "icon-reddit3:before": {
        "content": ""
    },
    "icon-hackernews2:before": {
        "content": ""
    },
    "icon-wikipedia2:before": {
        "content": ""
    },
    "icon-linkedin6:before": {
        "content": ""
    },
    "icon-linkedin22:before": {
        "content": ""
    },
    "icon-lastfm4:before": {
        "content": ""
    },
    "icon-lastfm22:before": {
        "content": ""
    },
    "icon-delicious3:before": {
        "content": ""
    },
    "icon-stumbleupon4:before": {
        "content": ""
    },
    "icon-stumbleupon22:before": {
        "content": ""
    },
    "icon-stackoverflow2:before": {
        "content": ""
    },
    "icon-pinterest5:before": {
        "content": ""
    },
    "icon-pinterest22:before": {
        "content": ""
    },
    "icon-xing5:before": {
        "content": ""
    },
    "icon-xing22:before": {
        "content": ""
    },
    "icon-flattr2:before": {
        "content": ""
    },
    "icon-foursquare4:before": {
        "content": ""
    },
    "icon-yelp3:before": {
        "content": ""
    },
    "icon-paypal3:before": {
        "content": ""
    },
    "icon-chrome3:before": {
        "content": ""
    },
    "icon-firefox3:before": {
        "content": ""
    },
    "icon-IE2:before": {
        "content": ""
    },
    "icon-edge3:before": {
        "content": ""
    },
    "icon-safari3:before": {
        "content": ""
    },
    "icon-opera3:before": {
        "content": ""
    },
    "icon-file-pdf4:before": {
        "content": ""
    },
    "icon-file-openoffice2:before": {
        "content": ""
    },
    "icon-file-word2:before": {
        "content": ""
    },
    "icon-file-excel2:before": {
        "content": ""
    },
    "icon-libreoffice2:before": {
        "content": ""
    },
    "icon-html-five3:before": {
        "content": ""
    },
    "icon-html-five22:before": {
        "content": ""
    },
    "icon-css34:before": {
        "content": ""
    },
    "icon-git3:before": {
        "content": ""
    },
    "icon-codepen3:before": {
        "content": ""
    },
    "icon-svg2:before": {
        "content": ""
    },
    "icon-IcoMoon2:before": {
        "content": ""
    },
    "btn-defaultdisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-default[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-default": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primary": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-successdisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-success[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-success": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-infodisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-info[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-info": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-warningdisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warning": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-dangerdisabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-danger": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-defaultdisabled:active": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-defaultdisabledactive": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-default[disabled]:active": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-default[disabled]active": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-default:active": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-defaultactive": {
        "backgroundColor": "#141414",
        "backgroundImage": "none"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-successdisabled:active": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-successdisabledactive": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-success[disabled]:active": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-success[disabled]active": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-success:active": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-successactive": {
        "backgroundColor": "#4ec200",
        "backgroundImage": "none"
    },
    "btn-infodisabled:active": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-infodisabledactive": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-info[disabled]:active": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-info[disabled]active": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-info:active": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-infoactive": {
        "backgroundColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-warningdisabled:active": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-warningdisabledactive": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]:active": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-warning[disabled]active": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warning:active": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-warningactive": {
        "backgroundColor": "#dd7802",
        "backgroundImage": "none"
    },
    "btn-dangerdisabled:active": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-dangerdisabledactive": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]:active": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-danger[disabled]active": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-danger:active": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "fieldset[disabled] btn-dangeractive": {
        "backgroundColor": "#dc0653",
        "backgroundImage": "none"
    },
    "list-group-itemactive badge": {
        "textShadow": "none"
    },
    "list-group-itemactive:hover badge": {
        "textShadow": "none"
    },
    "list-group-itemactive:focus badge": {
        "textShadow": "none"
    },
    "navnavbar": {
        "clear": "both"
    },
    "navtoobar": {
        "clear": "both"
    },
    "ion": {
        "color": "red"
    },
    "br": {
        "clear": "both"
    },
    "h1::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "h2::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "h3::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "h4::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "h5::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "h6::first-letter": {
        "color": "#710570",
        "textShadow": "0 0 2px #3bff00"
    },
    "bodyprimarylayout": {
        "background": "url(\"/assets/dist/images/cheshire_cat_bg.png\") center fixed",
        "fontSize": 14
    },
    "toolbar-fixed-bottom toolbar-collapse": {
        "maxHeight": 340
    },
    "toolbar-fixed-top toolbar-collapse": {
        "maxHeight": 340
    },
    "anavbar-brand:hover": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "anavbar-brand:after": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "atoolbar-brand:hover": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "atoolbar-brand:after": {
        "textShadow": "0 0 4px #a8ffff",
        "color": "#000000"
    },
    "carousel-example-generic": {
        "marginBottom": 20
    },
    "carousel-example-generic img": {
        "height": 600
    },
    "toolbar-tool-icons": {
        "width": "auto",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "inline-block"
    },
    "toolbar-tool-icons img": {
        "maxHeight": 25,
        "minWidth": 15,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "anavbar-brand": {
        "fontSize": 1.8,
        "fontFamily": "'Tangerine', cursive",
        "textShadow": "0 0 1px #a8ffff",
        "color": "#a8ffff"
    },
    "tagline": {
        "clear": "right",
        "textShadow": "0 0 2px #74ff08",
        "fontStyle": "italic",
        "lineHeight": 1.5
    },
    "toolbar": {
        "boxShadow": "0 0 8px #a8ffff",
        "maxHeight": 30
    },
    "radio-group label": {
        "cursor": "pointer"
    },
    "radio-group input": {
        "cursor": "pointer"
    },
    "checkbox input": {
        "cursor": "pointer"
    },
    "github-stars-badge": {
        "minWidth": 70,
        "marginBottom": -0.3
    },
    "slider": {
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0
    },
    "slider>span:first-child": {
        "display": "inline-block",
        "minWidth": 70,
        "textAlign": "left"
    },
    "slider-container": {
        "display": "inline-block",
        "width": 590,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "rc-slider": {
        "marginBottom": -2,
        "position": "relative",
        "height": 14,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "width": "100%",
        "borderRadius": 6,
        "boxSizing": "border-box",
        "WebkitTapHighlightColor": "transparent"
    },
    "rc-slider-disabled": {
        "backgroundColor": "#e9e9e9"
    },
    "rc-slider-rail": {
        "backgroundColor": "#e9e9e9",
        "position": "absolute",
        "width": "100%",
        "height": 4
    },
    "rc-slider-track": {
        "backgroundColor": "#abe2fb",
        "position": "absolute",
        "left": 0,
        "height": 4,
        "borderRadius": 6
    },
    "rc-slider-handle": {
        "borderColor": "#888",
        "position": "absolute",
        "marginLeft": -7,
        "marginTop": -5,
        "width": 14,
        "height": 14,
        "cursor": "pointer",
        "borderRadius": "50%",
        "border": "solid 2px #96dbfa",
        "backgroundColor": "#fff"
    },
    "rc-slider-handle:hover": {
        "borderColor": "#57c5f7"
    },
    "grid": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "grid-item": {
        "fontSize": 0.75,
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 20,
        "paddingLeft": 15,
        "backgroundColor": "#ccc",
        "borderRadius": 3,
        "border": "2px solid #aaa"
    },
    "grid-item p": {
        "textAlign": "left",
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0,
        "color": "#555555"
    },
    "grid-item *:first-child": {
        "marginTop": 0
    },
    "grid-item *:last-child": {
        "marginBottom": 0
    },
    "toolbar-collapse": {
        "overflowX": "visible",
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1)",
        "WebkitOverflowScrolling": "touch"
    },
    "toolbar-collapse:before": {
        "content": " ",
        "display": "table"
    },
    "toolbar-collapse:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "toolbar-collapsein": {
        "overflowY": "auto"
    },
    "navbar-fixed-top toolbar-collapse": {
        "maxHeight": 340
    },
    "navbar-fixed-bottom toolbar-collapse": {
        "maxHeight": 340
    },
    "container>toolbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid>toolbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "row row": {
        "marginTop": 10,
        "marginBottom": 0
    },
    "[class*=\"col-\"]": {
        "paddingTop": 15,
        "paddingBottom": 15,
        "backgroundColor": "rgba(86,61,124,0.15)",
        "border": "1px solid rgba(86,61,124,0.2)"
    },
    "navbar-wrapper": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "left": 0,
        "zIndex": 20
    },
    "navbar-wrapper>container": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "navbar-wrapper navbar": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "navbar-wrapper navbar container": {
        "width": "auto"
    },
    "carousel item": {
        "height": "100%",
        "backgroundColor": "#777"
    },
    "marketing col-lg-4": {
        "marginBottom": 20,
        "textAlign": "center"
    },
    "marketing h2": {
        "fontWeight": "normal"
    },
    "marketing col-lg-4 p": {
        "marginRight": 10,
        "marginLeft": 10
    },
    "featurette-divider": {
        "marginTop": 80,
        "marginRight": 0,
        "marginBottom": 80,
        "marginLeft": 0
    },
    "featurette-heading": {
        "fontWeight": "300",
        "lineHeight": 1,
        "letterSpacing": -1
    },
    "rc-slider *": {
        "boxSizing": "border-box",
        "WebkitTapHighlightColor": "transparent"
    },
    "rc-slider-handle-active:active": {
        "borderColor": "#57c5f7",
        "boxShadow": "0 0 5px #57c5f7"
    },
    "rc-slider-mark": {
        "position": "absolute",
        "top": 18,
        "left": 0,
        "width": "100%",
        "fontSize": 12
    },
    "rc-slider-mark-text": {
        "position": "absolute",
        "display": "inline-block",
        "verticalAlign": "middle",
        "textAlign": "center",
        "cursor": "pointer",
        "color": "#999"
    },
    "rc-slider-mark-text-active": {
        "color": "#666"
    },
    "rc-slider-step": {
        "position": "absolute",
        "width": "100%",
        "height": 4,
        "background": "transparent"
    },
    "rc-slider-dot": {
        "position": "absolute",
        "bottom": -2,
        "marginLeft": -4,
        "width": 8,
        "height": 8,
        "border": "2px solid #e9e9e9",
        "backgroundColor": "#fff",
        "cursor": "pointer",
        "borderRadius": "50%",
        "verticalAlign": "middle"
    },
    "rc-slider-dot:first-child": {
        "marginLeft": -4
    },
    "rc-slider-dot:last-child": {
        "marginLeft": -4
    },
    "rc-slider-dot-active": {
        "borderColor": "#96dbfa"
    },
    "rc-slider-disabled rc-slider-track": {
        "backgroundColor": "#ccc"
    },
    "rc-slider-disabled rc-slider-handle": {
        "borderColor": "#ccc",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "rc-slider-disabled rc-slider-dot": {
        "borderColor": "#ccc",
        "backgroundColor": "#fff",
        "cursor": "not-allowed !important"
    },
    "rc-slider-disabled rc-slider-mark-text": {
        "cursor": "not-allowed !important"
    },
    "rc-slider-vertical": {
        "width": 14,
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "rc-slider-vertical rc-slider-rail": {
        "height": "100%",
        "width": 4
    },
    "rc-slider-vertical rc-slider-track": {
        "left": 5,
        "bottom": 0,
        "width": 4
    },
    "rc-slider-vertical rc-slider-handle": {
        "marginLeft": -5,
        "marginBottom": -7
    },
    "rc-slider-vertical rc-slider-mark": {
        "top": 0,
        "left": 18,
        "height": "100%"
    },
    "rc-slider-vertical rc-slider-step": {
        "height": "100%",
        "width": 4
    },
    "rc-slider-vertical rc-slider-dot": {
        "left": 2,
        "marginBottom": -4
    },
    "rc-slider-vertical rc-slider-dot:first-child": {
        "marginBottom": -4
    },
    "rc-slider-vertical rc-slider-dot:last-child": {
        "marginBottom": -4
    },
    "rc-slider-tooltip-zoom-down-enter": {
        "WebkitAnimationDuration": ".3s",
        "animationDuration": ".3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "display": "block !important",
        "WebkitAnimationPlayState": "paused",
        "animationPlayState": "paused",
        "WebkitTransform": "scale(0, 0)",
        "transform": "scale(0, 0)",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.23, 1, 0.32, 1)",
        "animationTimingFunction": "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    "rc-slider-tooltip-zoom-down-appear": {
        "WebkitAnimationDuration": ".3s",
        "animationDuration": ".3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "display": "block !important",
        "WebkitAnimationPlayState": "paused",
        "animationPlayState": "paused",
        "WebkitTransform": "scale(0, 0)",
        "transform": "scale(0, 0)",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.23, 1, 0.32, 1)",
        "animationTimingFunction": "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    "rc-slider-tooltip-zoom-down-leave": {
        "WebkitAnimationDuration": ".3s",
        "animationDuration": ".3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "display": "block !important",
        "WebkitAnimationPlayState": "paused",
        "animationPlayState": "paused",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "animationTimingFunction": "cubic-bezier(0.755, 0.05, 0.855, 0.06)"
    },
    "rc-slider-tooltip-zoom-down-enterrc-slider-tooltip-zoom-down-enter-active": {
        "WebkitAnimationName": "rcSliderTooltipZoomDownIn",
        "animationName": "rcSliderTooltipZoomDownIn",
        "WebkitAnimationPlayState": "running",
        "animationPlayState": "running"
    },
    "rc-slider-tooltip-zoom-down-appearrc-slider-tooltip-zoom-down-appear-active": {
        "WebkitAnimationName": "rcSliderTooltipZoomDownIn",
        "animationName": "rcSliderTooltipZoomDownIn",
        "WebkitAnimationPlayState": "running",
        "animationPlayState": "running"
    },
    "rc-slider-tooltip-zoom-down-leaverc-slider-tooltip-zoom-down-leave-active": {
        "WebkitAnimationName": "rcSliderTooltipZoomDownOut",
        "animationName": "rcSliderTooltipZoomDownOut",
        "WebkitAnimationPlayState": "running",
        "animationPlayState": "running"
    },
    "rc-slider-tooltip": {
        "position": "absolute",
        "left": -9999,
        "top": -9999,
        "visibility": "visible",
        "boxSizing": "border-box",
        "WebkitTapHighlightColor": "transparent"
    },
    "rc-slider-tooltip *": {
        "boxSizing": "border-box",
        "WebkitTapHighlightColor": "transparent"
    },
    "rc-slider-tooltip-hidden": {
        "display": "none"
    },
    "rc-slider-tooltip-placement-top": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0
    },
    "rc-slider-tooltip-inner": {
        "paddingTop": 6,
        "paddingRight": 2,
        "paddingBottom": 6,
        "paddingLeft": 2,
        "minWidth": 24,
        "height": 24,
        "fontSize": 12,
        "lineHeight": 1,
        "color": "#fff",
        "textAlign": "center",
        "textDecoration": "none",
        "backgroundColor": "#6c6c6c",
        "borderRadius": 6,
        "boxShadow": "0 0 4px #d9d9d9"
    },
    "rc-slider-tooltip-arrow": {
        "position": "absolute",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid"
    },
    "rc-slider-tooltip-placement-top rc-slider-tooltip-arrow": {
        "bottom": 4,
        "left": "50%",
        "marginLeft": -4,
        "borderWidth": "4px 4px 0",
        "borderTopColor": "#6c6c6c"
    },
    "page-room row>div": {
        "marginBottom": 15
    },
    "page-room header": {
        "minHeight": 90,
        "background": "#2f2f2f"
    },
    "page-room footer": {
        "minHeight": 60,
        "background": "#2f2f2f"
    },
    "page-room sidebar": {
        "background": "#dbdfe5"
    },
    "page-room intro": {
        "background": "#7e8aa0",
        "minHeight": 250
    },
    "page-room section": {
        "minHeight": 150,
        "background": "#dbdfe5"
    },
    "page-room sectionbg-alt": {
        "background": "#b4bac0"
    }
});