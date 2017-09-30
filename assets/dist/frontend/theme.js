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
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Open Sans",
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "color": "#cccccc",
        "backgroundColor": "#171717"
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
        "display": "block"
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
        "listStyle": "none"
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
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
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
        "marginRight": 0,
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
        "backgroundColor": "rgba(253, 151, 31, 0.3)",
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
        "marginTop": 20,
        "marginBottom": 20,
        "border": 0,
        "borderTop": "1px solid #a8ffff"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Cutive Mono",
        "fontSize": 13,
        "display": "block",
        "paddingTop": 9.5,
        "paddingRight": 9.5,
        "paddingBottom": 9.5,
        "paddingLeft": 9.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.42857143,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "color": "#242424",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #cccccc",
        "borderRadius": 4
    },
    "code": {
        "fontFamily": "Cutive Mono",
        "fontSize": "90%",
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
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#ffffff",
        "backgroundColor": "#333333",
        "borderRadius": 3,
        "boxShadow": "inset 0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "samp": {
        "fontFamily": "Cutive Mono",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
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
        "WebkitAppearance": "none",
        "boxSizing": "border-box",
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
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
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
        "backgroundColor": "#1f1f1f",
        "width": "100%",
        "maxWidth": "100%",
        "marginBottom": 20
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
        "boxSizing": "border-box"
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
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
        "height": "auto",
        "maxHeight": 500
    },
    "thumbnail > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "maxHeight": 500,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail a > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "maxHeight": 500,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "carousel-inner > item > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "maxHeight": 500,
        "lineHeight": 1
    },
    "carousel-inner > item > a > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "maxHeight": 500,
        "lineHeight": 1
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.42857143,
        "backgroundColor": "rgba(8, 8, 8, 0.8)",
        "border": "1px solid rgba(0, 0, 0, 0.94)",
        "borderRadius": 4,
        "WebkitTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out",
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto"
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
        "fontSize": 30
    },
    "h3": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 24
    },
    "h4": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 18
    },
    "h5": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 14
    },
    "h6": {
        "fontFamily": "'Cinzel Decorative', cursive",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "#cccccc",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 12
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
    "text-capitalize": {
        "textTransform": "capitalize"
    },
    "text-muted": {
        "color": "rgba(255, 255, 255, 0.11)"
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
        "color": "#66ff00"
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
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "abg-success:hover": {
        "backgroundColor": "rgba(82, 204, 0, 0.3)"
    },
    "abg-success:focus": {
        "backgroundColor": "rgba(82, 204, 0, 0.3)"
    },
    "bg-info": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "abg-info:hover": {
        "backgroundColor": "rgba(64, 3, 64, 0.3)"
    },
    "abg-info:focus": {
        "backgroundColor": "rgba(64, 3, 64, 0.3)"
    },
    "bg-warning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "abg-warning:hover": {
        "backgroundColor": "rgba(231, 126, 2, 0.3)"
    },
    "abg-warning:focus": {
        "backgroundColor": "rgba(231, 126, 2, 0.3)"
    },
    "bg-danger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "abg-danger:hover": {
        "backgroundColor": "rgba(230, 6, 87, 0.3)"
    },
    "abg-danger:focus": {
        "backgroundColor": "rgba(230, 6, 87, 0.3)"
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
    "ol ul": {
        "marginBottom": 0
    },
    "ul ol": {
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
    "list-inline > li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "dl": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "dt": {
        "lineHeight": 1.42857143,
        "fontWeight": "bold"
    },
    "dd": {
        "lineHeight": 1.42857143,
        "marginLeft": 0
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #710570"
    },
    "initialism": {
        "fontSize": "90%",
        "textTransform": "uppercase"
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
        "borderLeft": "5px solid #b2b2b2"
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
        "lineHeight": 1.42857143,
        "color": "#b2b2b2"
    },
    "blockquote small": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857143,
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
    "blockquotepull-right footer:before": {
        "content": "''"
    },
    "blockquote-reverse small:before": {
        "content": "''"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquote-reverse footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquote-reverse small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "address": {
        "marginBottom": 20,
        "fontStyle": "normal",
        "lineHeight": 1.42857143
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
    "container-fluid": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "row": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "8.33333333%"
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
        "width": "16.66666667%"
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
        "width": "33.33333333%"
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
        "width": "41.66666667%"
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
        "width": "58.33333333%"
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
        "width": "66.66666667%"
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
        "width": "83.33333333%"
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
        "width": "91.66666667%"
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
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-pull-11": {
        "right": "91.66666667%"
    },
    "col-xs-pull-10": {
        "right": "83.33333333%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-8": {
        "right": "66.66666667%"
    },
    "col-xs-pull-7": {
        "right": "58.33333333%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-5": {
        "right": "41.66666667%"
    },
    "col-xs-pull-4": {
        "right": "33.33333333%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-2": {
        "right": "16.66666667%"
    },
    "col-xs-pull-1": {
        "right": "8.33333333%"
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-push-11": {
        "left": "91.66666667%"
    },
    "col-xs-push-10": {
        "left": "83.33333333%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-8": {
        "left": "66.66666667%"
    },
    "col-xs-push-7": {
        "left": "58.33333333%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-5": {
        "left": "41.66666667%"
    },
    "col-xs-push-4": {
        "left": "33.33333333%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-2": {
        "left": "16.66666667%"
    },
    "col-xs-push-1": {
        "left": "8.33333333%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66666667%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333333%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66666667%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333333%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66666667%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333333%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66666667%"
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333333%"
    },
    "col-xs-offset-0": {
        "marginLeft": "0%"
    },
    "caption": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "color": "rgba(255, 255, 255, 0.11)",
        "textAlign": "left"
    },
    "table > thead > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "bottom",
        "borderTop": "1px solid #0b0b0b",
        "borderBottom": "2px solid #0b0b0b"
    },
    "table > tbody > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table > tfoot > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table > thead > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table > tbody > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table > tfoot > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #0b0b0b"
    },
    "table > caption + thead > tr:first-child > th": {
        "borderTop": 0
    },
    "table > colgroup + thead > tr:first-child > th": {
        "borderTop": 0
    },
    "table > thead:first-child > tr:first-child > th": {
        "borderTop": 0
    },
    "table > caption + thead > tr:first-child > td": {
        "borderTop": 0
    },
    "table > colgroup + thead > tr:first-child > td": {
        "borderTop": 0
    },
    "table > thead:first-child > tr:first-child > td": {
        "borderTop": 0
    },
    "table > tbody + tbody": {
        "borderTop": "2px solid #0b0b0b"
    },
    "table table": {
        "backgroundColor": "#171717"
    },
    "table-condensed > thead > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tbody > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tfoot > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > thead > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tbody > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tfoot > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-bordered": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered > thead > tr > th": {
        "border": "1px solid #0b0b0b",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > th": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered > tfoot > tr > th": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered > thead > tr > td": {
        "border": "1px solid #0b0b0b",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > td": {
        "border": "1px solid #0b0b0b"
    },
    "table-bordered > tfoot > tr > td": {
        "border": "1px solid #0b0b0b"
    },
    "table-striped > tbody > tr:nth-of-type(odd)": {
        "backgroundColor": "rgba(237, 237, 237, 0.1)"
    },
    "table-hover > tbody > tr:hover": {
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
    "table > thead > tr > tdactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tbody > tr > tdactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tfoot > tr > tdactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > thead > tr > thactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tbody > tr > thactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tfoot > tr > thactive": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > thead > tractive > td": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tbody > tractive > td": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tfoot > tractive > td": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > thead > tractive > th": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tbody > tractive > th": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table > tfoot > tractive > th": {
        "backgroundColor": "rgba(168, 255, 255, 0.11)"
    },
    "table-hover > tbody > tr > tdactive:hover": {
        "backgroundColor": "rgba(142, 255, 255, 0.11)"
    },
    "table-hover > tbody > tr > thactive:hover": {
        "backgroundColor": "rgba(142, 255, 255, 0.11)"
    },
    "table-hover > tbody > tractive:hover > td": {
        "backgroundColor": "rgba(142, 255, 255, 0.11)"
    },
    "table-hover > tbody > tr:hover > active": {
        "backgroundColor": "rgba(142, 255, 255, 0.11)"
    },
    "table-hover > tbody > tractive:hover > th": {
        "backgroundColor": "rgba(142, 255, 255, 0.11)"
    },
    "table > thead > tr > tdsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tbody > tr > tdsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tfoot > tr > tdsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > thead > tr > thsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tbody > tr > thsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tfoot > tr > thsuccess": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > thead > trsuccess > td": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tbody > trsuccess > td": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tfoot > trsuccess > td": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > thead > trsuccess > th": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tbody > trsuccess > th": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table > tfoot > trsuccess > th": {
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "table-hover > tbody > tr > tdsuccess:hover": {
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "table-hover > tbody > tr > thsuccess:hover": {
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "table-hover > tbody > trsuccess:hover > td": {
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "table-hover > tbody > tr:hover > success": {
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "table-hover > tbody > trsuccess:hover > th": {
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "table > thead > tr > tdinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tbody > tr > tdinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tfoot > tr > tdinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > thead > tr > thinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tbody > tr > thinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tfoot > tr > thinfo": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > thead > trinfo > td": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tbody > trinfo > td": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tfoot > trinfo > td": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > thead > trinfo > th": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tbody > trinfo > th": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table > tfoot > trinfo > th": {
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
    },
    "table-hover > tbody > tr > tdinfo:hover": {
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "table-hover > tbody > tr > thinfo:hover": {
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "table-hover > tbody > trinfo:hover > td": {
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "table-hover > tbody > tr:hover > info": {
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "table-hover > tbody > trinfo:hover > th": {
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "table > thead > tr > tdwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tbody > tr > tdwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tfoot > tr > tdwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > thead > tr > thwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tbody > tr > thwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tfoot > tr > thwarning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > thead > trwarning > td": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tbody > trwarning > td": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tfoot > trwarning > td": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > thead > trwarning > th": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tbody > trwarning > th": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table > tfoot > trwarning > th": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
    },
    "table-hover > tbody > tr > tdwarning:hover": {
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "table-hover > tbody > tr > thwarning:hover": {
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "table-hover > tbody > trwarning:hover > td": {
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "table-hover > tbody > tr:hover > warning": {
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "table-hover > tbody > trwarning:hover > th": {
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "table > thead > tr > tddanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tbody > tr > tddanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tfoot > tr > tddanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > thead > tr > thdanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tbody > tr > thdanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tfoot > tr > thdanger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > thead > trdanger > td": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tbody > trdanger > td": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tfoot > trdanger > td": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > thead > trdanger > th": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tbody > trdanger > th": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table > tfoot > trdanger > th": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
    },
    "table-hover > tbody > tr > tddanger:hover": {
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "table-hover > tbody > tr > thdanger:hover": {
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "table-hover > tbody > trdanger:hover > td": {
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "table-hover > tbody > tr:hover > danger": {
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "table-hover > tbody > trdanger:hover > th": {
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "table-responsive": {
        "overflowX": "auto",
        "minHeight": "0.01%"
    },
    "label": {
        "display": "inline",
        "maxWidth": "100%",
        "marginBottom": 5,
        "fontWeight": "bold",
        "paddingTop": 0.2,
        "paddingRight": 0.6,
        "paddingBottom": 0.3,
        "paddingLeft": 0.6,
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
        "lineHeight": 1.42857143,
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
        "lineHeight": 1.42857143,
        "color": "#a8ffff",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "border": "1px solid #303030",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        "WebkitTransition": "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
        "OTransition": "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
        "transition": "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    },
    "form-control:focus": {
        "borderColor": "#a8ffff",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(168, 255, 255, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(168, 255, 255, 0.6)"
    },
    "form-control::-moz-placeholder": {
        "color": "rgba(204, 204, 204, 0.3)",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "rgba(204, 204, 204, 0.3)"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "rgba(204, 204, 204, 0.3)"
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
        "marginBottom": 10
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
    "radio + radio": {
        "marginTop": -5
    },
    "checkbox + checkbox": {
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
    "radio-inline + radio-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "checkbox-inline + checkbox-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "input[type=\"radio\"][disabled]": {
        "cursor": "allowed"
    },
    "input[type=\"checkbox\"][disabled]": {
        "cursor": "allowed"
    },
    "input[type=\"radio\"]disabled": {
        "cursor": "allowed"
    },
    "input[type=\"checkbox\"]disabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] input[type=\"radio\"]": {
        "cursor": "allowed"
    },
    "fieldset[disabled] input[type=\"checkbox\"]": {
        "cursor": "allowed"
    },
    "radio-inlinedisabled": {
        "cursor": "allowed"
    },
    "checkbox-inlinedisabled": {
        "cursor": "allowed"
    },
    "fieldset[disabled] radio-inline": {
        "cursor": "allowed"
    },
    "fieldset[disabled] checkbox-inline": {
        "cursor": "allowed"
    },
    "radiodisabled label": {
        "cursor": "allowed"
    },
    "checkboxdisabled label": {
        "cursor": "allowed"
    },
    "fieldset[disabled] radio label": {
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
    "form-control-staticinput-sm": {
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
    "selectinput-sm": {
        "height": 25,
        "lineHeight": 25
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "select[multiple]input-sm": {
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
    "selectinput-lg": {
        "height": 54,
        "lineHeight": 54
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "select[multiple]input-lg": {
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
    "input-lg + form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-group-lg + form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "form-group-lg form-control + form-control-feedback": {
        "width": 54,
        "height": 54,
        "lineHeight": 54
    },
    "input-sm + form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "input-group-sm + form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "form-group-sm form-control + form-control-feedback": {
        "width": 25,
        "height": 25,
        "lineHeight": 25
    },
    "has-success help-block": {
        "color": "#66ff00"
    },
    "has-success control-label": {
        "color": "#66ff00"
    },
    "has-success radio": {
        "color": "#66ff00"
    },
    "has-success checkbox": {
        "color": "#66ff00"
    },
    "has-success radio-inline": {
        "color": "#66ff00"
    },
    "has-success checkbox-inline": {
        "color": "#66ff00"
    },
    "has-successradio label": {
        "color": "#66ff00"
    },
    "has-successcheckbox label": {
        "color": "#66ff00"
    },
    "has-successradio-inline label": {
        "color": "#66ff00"
    },
    "has-successcheckbox-inline label": {
        "color": "#66ff00"
    },
    "has-success form-control": {
        "borderColor": "#66ff00",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)"
    },
    "has-success form-control:focus": {
        "borderColor": "#52cc00",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #a3ff66",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #a3ff66"
    },
    "has-success input-group-addon": {
        "color": "#66ff00",
        "borderColor": "#66ff00",
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "has-success form-control-feedback": {
        "color": "#66ff00"
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
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)"
    },
    "has-warning form-control:focus": {
        "borderColor": "#e77e02",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fec684",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fec684"
    },
    "has-warning input-group-addon": {
        "color": "#fd971f",
        "borderColor": "#fd971f",
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
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
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)"
    },
    "has-error form-control:focus": {
        "borderColor": "#e60657",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fc89b2",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fc89b2"
    },
    "has-error input-group-addon": {
        "color": "#f92672",
        "borderColor": "#f92672",
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
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
        "color": "#ffffff"
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
        "lineHeight": 1.42857143,
        "borderRadius": 4,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "btn:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#999999",
        "textDecoration": "none"
    },
    "btn:active:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactive:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnfocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#999999",
        "textDecoration": "none"
    },
    "btn:activefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactivefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:hover": {
        "color": "#999999",
        "textDecoration": "none"
    },
    "btn:active": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
    },
    "btnactive": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
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
        "color": "#999999",
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-default:focus": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#000000"
    },
    "btn-defaultfocus": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#000000"
    },
    "btn-default:hover": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#030303"
    },
    "btn-default:active": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-defaultactive": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#030303",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-default": {
        "color": "#999999",
        "backgroundColor": "#1a1a1a",
        "borderColor": "#030303",
        "backgroundImage": "none"
    },
    "btn-default:active:hover": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-defaultactive:hover": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-default:hover": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-default:active:focus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-defaultactive:focus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-default:focus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-default:activefocus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-defaultactivefocus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-defaultfocus": {
        "color": "#999999",
        "backgroundColor": "#080808",
        "borderColor": "#000000"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "#333333",
        "borderColor": "#222222"
    },
    "btn-default badge": {
        "color": "#333333",
        "backgroundColor": "#999999"
    },
    "btn-primary": {
        "color": "#a8ffff",
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primary:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#28ffff"
    },
    "btn-primaryfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#28ffff"
    },
    "btn-primary:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#6bffff"
    },
    "btn-primary:active": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#6bffff",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#6bffff",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-primary": {
        "color": "#a8ffff",
        "backgroundColor": "#080808",
        "borderColor": "#6bffff",
        "backgroundImage": "none"
    },
    "btn-primary:active:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primaryactive:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "open > dropdown-togglebtn-primary:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primary:active:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primaryactive:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "open > dropdown-togglebtn-primary:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primary:activefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primaryactivefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "open > dropdown-togglebtn-primaryfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#000000",
        "borderColor": "#28ffff"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#222222",
        "borderColor": "#a8ffff"
    },
    "btn-primary badge": {
        "color": "#222222",
        "backgroundColor": "#a8ffff"
    },
    "btn-success": {
        "color": "#710570",
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-success:focus": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#2d672d"
    },
    "btn-successfocus": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#2d672d"
    },
    "btn-success:hover": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#419641"
    },
    "btn-success:active": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#419641",
        "backgroundImage": "none"
    },
    "btn-successactive": {
        "color": "#710570",
        "backgroundColor": "#52cc00",
        "borderColor": "#419641",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-success": {
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
    "btn-successactive:hover": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open > dropdown-togglebtn-success:hover": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-success:active:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successactive:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open > dropdown-togglebtn-success:focus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-success:activefocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successactivefocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "open > dropdown-togglebtn-successfocus": {
        "color": "#710570",
        "backgroundColor": "#43a800",
        "borderColor": "#2d672d"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-successdisabledfocus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-success[disabled]focus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "fieldset[disabled] btn-successfocus": {
        "backgroundColor": "#66ff00",
        "borderColor": "#5cb85c"
    },
    "btn-success badge": {
        "color": "#66ff00",
        "backgroundColor": "#710570"
    },
    "btn-info": {
        "color": "#66ff00",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-info:focus": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#000000"
    },
    "btn-infofocus": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#000000"
    },
    "btn-info:hover": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#360236"
    },
    "btn-info:active": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-infoactive": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#360236",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-info": {
        "color": "#66ff00",
        "backgroundColor": "#400340",
        "borderColor": "#360236",
        "backgroundImage": "none"
    },
    "btn-info:active:hover": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-infoactive:hover": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-info:hover": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-info:active:focus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-infoactive:focus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-info:focus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-info:activefocus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-infoactivefocus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "open > dropdown-togglebtn-infofocus": {
        "color": "#66ff00",
        "backgroundColor": "#1e011e",
        "borderColor": "#000000"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-infodisabledfocus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-info[disabled]focus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "fieldset[disabled] btn-infofocus": {
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "btn-info badge": {
        "color": "#710570",
        "backgroundColor": "#66ff00"
    },
    "btn-warning": {
        "color": "#a8ffff",
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warning:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#784607"
    },
    "btn-warningfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#784607"
    },
    "btn-warning:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#b66b0b"
    },
    "btn-warning:active": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#b66b0b",
        "backgroundImage": "none"
    },
    "btn-warningactive": {
        "color": "#a8ffff",
        "backgroundColor": "#e77e02",
        "borderColor": "#b66b0b",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-warning": {
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
    "btn-warningactive:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open > dropdown-togglebtn-warning:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warning:active:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningactive:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open > dropdown-togglebtn-warning:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warning:activefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningactivefocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "open > dropdown-togglebtn-warningfocus": {
        "color": "#a8ffff",
        "backgroundColor": "#c46b02",
        "borderColor": "#784607"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warningdisabledfocus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warning[disabled]focus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "fieldset[disabled] btn-warningfocus": {
        "backgroundColor": "#fd971f",
        "borderColor": "#f08d0e"
    },
    "btn-warning badge": {
        "color": "#fd971f",
        "backgroundColor": "#a8ffff"
    },
    "btn-danger": {
        "color": "#66ff00",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-danger:focus": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#9b043b"
    },
    "btn-dangerfocus": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#9b043b"
    },
    "btn-danger:hover": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#dc0653"
    },
    "btn-danger:active": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-dangeractive": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#dc0653",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-danger": {
        "color": "#66ff00",
        "backgroundColor": "#e60657",
        "borderColor": "#dc0653",
        "backgroundImage": "none"
    },
    "btn-danger:active:hover": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractive:hover": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open > dropdown-togglebtn-danger:hover": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-danger:active:focus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractive:focus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open > dropdown-togglebtn-danger:focus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-danger:activefocus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangeractivefocus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "open > dropdown-togglebtn-dangerfocus": {
        "color": "#66ff00",
        "backgroundColor": "#c3054a",
        "borderColor": "#9b043b"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-dangerdisabledfocus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-danger[disabled]focus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "fieldset[disabled] btn-dangerfocus": {
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "btn-danger badge": {
        "color": "#f92672",
        "backgroundColor": "#66ff00"
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
        "color": "#ffffff",
        "textDecoration": "underline skip",
        "backgroundColor": "transparent"
    },
    "btn-link:focus": {
        "borderColor": "transparent",
        "color": "#ffffff",
        "textDecoration": "underline skip",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:hover": {
        "color": "rgba(237, 237, 237, 0.01)",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "rgba(237, 237, 237, 0.01)",
        "textDecoration": "none"
    },
    "btn-link[disabled]:focus": {
        "color": "rgba(237, 237, 237, 0.01)",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "rgba(237, 237, 237, 0.01)",
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
    "btn-group-lg > btn": {
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
    "btn-group-sm > btn": {
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
    "btn-group-xs > btn": {
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
    "btn-block + btn-block": {
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
        "WebkitTransitionProperty": "height, visibility",
        "transitionProperty": "height, visibility",
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
        "border": "1px solid #222222",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 6px 12px rgba(0, 0, 0, 0.175)",
        "boxShadow": "0 6px 12px rgba(0, 0, 0, 0.175)",
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
        "backgroundColor": "#222222"
    },
    "dropdown-menu > li > a": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "clear": "both",
        "fontWeight": "normal",
        "lineHeight": 1.42857143,
        "color": "#a8ffff",
        "whiteSpace": "nowrap"
    },
    "dropdown-menu > li > a:hover": {
        "textDecoration": "none",
        "color": "#222222",
        "backgroundColor": "#a8ffff"
    },
    "dropdown-menu > li > a:focus": {
        "textDecoration": "none",
        "color": "#222222",
        "backgroundColor": "#a8ffff"
    },
    "dropdown-menu > active > a": {
        "color": "#222222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#171717"
    },
    "dropdown-menu > active > a:hover": {
        "color": "#222222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#171717"
    },
    "dropdown-menu > active > a:focus": {
        "color": "#222222",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#171717"
    },
    "dropdown-menu > disabled > a": {
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "dropdown-menu > disabled > a:hover": {
        "color": "rgba(237, 237, 237, 0.11)",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "allowed"
    },
    "dropdown-menu > disabled > a:focus": {
        "color": "rgba(237, 237, 237, 0.11)",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "allowed"
    },
    "open > dropdown-menu": {
        "display": "block"
    },
    "open > a": {
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
        "lineHeight": 1.42857143,
        "color": "rgba(255, 255, 255, 0.11)",
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
    "pull-right > dropdown-menu": {
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
    "btn-group > btn": {
        "position": "relative",
        "float": "left"
    },
    "btn-group-vertical > btn": {
        "position": "relative",
        "float": "none",
        "display": "block",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group > btn:hover": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:hover": {
        "zIndex": 2
    },
    "btn-group > btn:focus": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:focus": {
        "zIndex": 2
    },
    "btn-group > btn:active": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:active": {
        "zIndex": 2
    },
    "btn-group > btnactive": {
        "zIndex": 2
    },
    "btn-group-vertical > btnactive": {
        "zIndex": 2
    },
    "btn-group btn + btn": {
        "marginLeft": -1
    },
    "btn-group btn + btn-group": {
        "marginLeft": -1
    },
    "btn-group btn-group + btn": {
        "marginLeft": -1
    },
    "btn-group btn-group + btn-group": {
        "marginLeft": -1
    },
    "btn-toolbar": {
        "marginLeft": -5
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
    "btn-toolbar > btn": {
        "marginLeft": 5
    },
    "btn-toolbar > btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar > input-group": {
        "marginLeft": 5
    },
    "btn-group > btn:not(:first-child):not(:last-child):not(dropdown-toggle)": {
        "borderRadius": 0
    },
    "btn-group > btn:first-child": {
        "marginLeft": 0
    },
    "btn-group > btn:first-child:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group > btn:last-child:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group > dropdown-toggle:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group > btn-group": {
        "float": "left"
    },
    "btn-group > btn-group:not(:first-child):not(:last-child) > btn": {
        "borderRadius": 0
    },
    "btn-group > btn-group:first-child:not(:last-child) > btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group > btn-group:first-child:not(:last-child) > dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group > btn-group:last-child:not(:first-child) > btn:first-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group dropdown-toggle:active": {
        "outline": 0
    },
    "btn-groupopen dropdown-toggle": {
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
    },
    "btn-group > btn + dropdown-toggle": {
        "paddingLeft": 8,
        "paddingRight": 8
    },
    "btn-group > btn-lg + dropdown-toggle": {
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
    "dropup btn-lg caret": {
        "borderWidth": "0 6px 6px"
    },
    "btn-group-vertical > btn-group": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical > btn-group > btn": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical > btn + btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn + btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn-group + btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn-group + btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "btn-group-vertical > btn:first-child:not(:last-child)": {
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn:last-child:not(:first-child)": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "btn-group-vertical > btn-group:not(:first-child):not(:last-child) > btn": {
        "borderRadius": 0
    },
    "btn-group-vertical > btn-group:first-child:not(:last-child) > btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn-group:first-child:not(:last-child) > dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn-group:last-child:not(:first-child) > btn:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group-justified": {
        "display": "table",
        "width": "100%",
        "tableLayout": "fixed",
        "borderCollapse": "separate"
    },
    "btn-group-justified > btn": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified > btn-group": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified > btn-group btn": {
        "width": "100%"
    },
    "btn-group-justified > btn-group dropdown-menu": {
        "left": "auto"
    },
    "[data-toggle=\"buttons\"] > btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn-group > btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn input[type=\"checkbox\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn-group > btn input[type=\"checkbox\"]": {
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
    "input-group-lg > form-control": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "input-group-lg > input-group-addon": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "input-group-lg > input-group-btn > btn": {
        "height": 54,
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33,
        "borderRadius": 6
    },
    "selectinput-group-lg > form-control": {
        "height": 54,
        "lineHeight": 54
    },
    "selectinput-group-lg > input-group-addon": {
        "height": 54,
        "lineHeight": 54
    },
    "selectinput-group-lg > input-group-btn > btn": {
        "height": 54,
        "lineHeight": 54
    },
    "textareainput-group-lg > form-control": {
        "height": "auto"
    },
    "textareainput-group-lg > input-group-addon": {
        "height": "auto"
    },
    "textareainput-group-lg > input-group-btn > btn": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > form-control": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > input-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > input-group-btn > btn": {
        "height": "auto"
    },
    "input-group-sm > form-control": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm > input-group-addon": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm > input-group-btn > btn": {
        "height": 25,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "selectinput-group-sm > form-control": {
        "height": 25,
        "lineHeight": 25
    },
    "selectinput-group-sm > input-group-addon": {
        "height": 25,
        "lineHeight": 25
    },
    "selectinput-group-sm > input-group-btn > btn": {
        "height": 25,
        "lineHeight": 25
    },
    "textareainput-group-sm > form-control": {
        "height": "auto"
    },
    "textareainput-group-sm > input-group-addon": {
        "height": "auto"
    },
    "textareainput-group-sm > input-group-btn > btn": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > form-control": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > input-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > input-group-btn > btn": {
        "height": "auto"
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
    "input-group-addoninput-lg": {
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
    "input-group-btn:first-child > btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0,
        "marginRight": -1
    },
    "input-group-btn:first-child > btn-group > btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:first-child > dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child > btn:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child > btn-group:not(:last-child) > btn": {
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
    "input-group-btn:last-child > btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "zIndex": 2,
        "marginLeft": -1
    },
    "input-group-btn:last-child > btn-group > btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:last-child > dropdown-toggle": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:first-child > btn:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:first-child > btn-group:not(:first-child) > btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn > btn": {
        "position": "relative"
    },
    "input-group-btn > btn + btn": {
        "marginLeft": -1
    },
    "input-group-btn > btn:hover": {
        "zIndex": 2
    },
    "input-group-btn > btn:focus": {
        "zIndex": 2
    },
    "input-group-btn > btn:active": {
        "zIndex": 2
    },
    "input-group-btn:first-child > btn-group": {
        "marginRight": -1
    },
    "input-group-btn:last-child > btn-group": {
        "zIndex": 2,
        "marginLeft": -1
    },
    "nav > li": {
        "position": "relative",
        "display": "block"
    },
    "nav > li > a": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "nav > li > a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#4a4a4a"
    },
    "nav > li > a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#4a4a4a"
    },
    "nav > lidisabled > a": {
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "nav > lidisabled > a:hover": {
        "color": "#222222",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "allowed"
    },
    "nav > lidisabled > a:focus": {
        "color": "#222222",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "allowed"
    },
    "nav open > a": {
        "backgroundColor": "#4a4a4a",
        "borderColor": "#a8ffff"
    },
    "nav open > a:hover": {
        "backgroundColor": "#4a4a4a",
        "borderColor": "#a8ffff"
    },
    "nav open > a:focus": {
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
    "nav > li > a > img": {
        "maxWidth": "none"
    },
    "nav-tabs": {
        "borderBottom": "1px solid #a8ffff"
    },
    "nav-tabs > li": {
        "float": "left",
        "marginBottom": -1
    },
    "nav-tabs > li > a": {
        "marginRight": 2,
        "lineHeight": 1.42857143,
        "border": "1px solid transparent",
        "borderRadius": "4px 4px 0 0"
    },
    "nav-tabs > li > a:hover": {
        "borderColor": "#a8ffff #a8ffff #a8ffff"
    },
    "nav-tabs > liactive > a": {
        "color": "#222222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs > liactive > a:hover": {
        "color": "#222222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs > liactive > a:focus": {
        "color": "#222222",
        "backgroundColor": "#a8ffff",
        "border": "1px solid #0a0a0a",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabsnav-justified": {
        "width": "100%",
        "borderBottom": 0
    },
    "nav-tabsnav-justified > li": {
        "float": "none"
    },
    "nav-tabsnav-justified > li > a": {
        "textAlign": "center",
        "marginBottom": 5,
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabsnav-justified > dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabsnav-justified > active > a": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabsnav-justified > active > a:hover": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabsnav-justified > active > a:focus": {
        "border": "1px solid #a8ffff"
    },
    "nav-pills > li": {
        "float": "left"
    },
    "nav-pills > li > a": {
        "borderRadius": 4
    },
    "nav-pills > li + li": {
        "marginLeft": 2
    },
    "nav-pills > liactive > a": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-pills > liactive > a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-pills > liactive > a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "transparent"
    },
    "nav-stacked > li": {
        "float": "none"
    },
    "nav-stacked > li + li": {
        "marginTop": 2,
        "marginLeft": 0
    },
    "nav-justified": {
        "width": "100%"
    },
    "nav-justified > li": {
        "float": "none"
    },
    "nav-justified > li > a": {
        "textAlign": "center",
        "marginBottom": 5
    },
    "nav-justified > dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabs-justified": {
        "borderBottom": 0
    },
    "nav-tabs-justified > li > a": {
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabs-justified > active > a": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabs-justified > active > a:hover": {
        "border": "1px solid #a8ffff"
    },
    "nav-tabs-justified > active > a:focus": {
        "border": "1px solid #a8ffff"
    },
    "tab-content > tab-pane": {
        "display": "none"
    },
    "tab-content > active": {
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
        "border": "1px solid transparent"
    },
    "navbar-collapse": {
        "overflowX": "visible",
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "WebkitOverflowScrolling": "touch"
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
    "container > navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid > navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container > navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid > navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "navbar-static-top": {
        "zIndex": 1000,
        "borderWidth": "0 0 1px"
    },
    "navbar-fixed-top": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "top": 0,
        "borderWidth": "0 0 1px"
    },
    "navbar-fixed-bottom": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "bottom": 0,
        "marginBottom": 0,
        "borderWidth": "1px 0 0"
    },
    "navbar-brand": {
        "float": "left",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "fontSize": 18,
        "lineHeight": 20,
        "height": 30
    },
    "navbar-brand:hover": {
        "textDecoration": "none"
    },
    "navbar-brand:focus": {
        "textDecoration": "none"
    },
    "navbar-brand > img": {
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
    "navbar-toggle icon-bar + icon-bar": {
        "marginTop": 4
    },
    "navbar-nav": {
        "marginTop": 2.5,
        "marginRight": -15,
        "marginBottom": 2.5,
        "marginLeft": -15
    },
    "navbar-nav > li > a": {
        "paddingTop": 10,
        "paddingBottom": 10,
        "lineHeight": 20
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
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1)",
        "marginTop": -4,
        "marginBottom": -4
    },
    "navbar-nav > li > dropdown-menu": {
        "marginTop": 0,
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "navbar-fixed-bottom navbar-nav > li > dropdown-menu": {
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
    "navbar-btnbtn-xs": {
        "marginTop": 4,
        "marginBottom": 4
    },
    "navbar-text": {
        "marginTop": 5,
        "marginBottom": 5
    },
    "navbar-default": {
        "backgroundColor": "#242424",
        "borderColor": "#222222"
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
        "color": "#b2b2b2, 0.11"
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#a8ffff"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav > li > a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav > active > a": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "#a8ffff",
        "backgroundColor": "#101010"
    },
    "navbar-default navbar-nav > disabled > a": {
        "color": "rgba(237, 237, 237, 0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > disabled > a:hover": {
        "color": "rgba(237, 237, 237, 0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > disabled > a:focus": {
        "color": "rgba(237, 237, 237, 0.11)",
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
        "backgroundColor": "rgba(153, 153, 153, 0.82)"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "#222222"
    },
    "navbar-default navbar-form": {
        "borderColor": "#222222"
    },
    "navbar-default navbar-nav > open > a": {
        "backgroundColor": "#101010",
        "color": "#a8ffff"
    },
    "navbar-default navbar-nav > open > a:hover": {
        "backgroundColor": "#101010",
        "color": "#a8ffff"
    },
    "navbar-default navbar-nav > open > a:focus": {
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
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "fieldset[disabled] navbar-default btn-link:hover": {
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "navbar-default btn-link[disabled]:focus": {
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "fieldset[disabled] navbar-default btn-link:focus": {
        "color": "rgba(237, 237, 237, 0.11)"
    },
    "navbar-inverse": {
        "backgroundColor": "rgba(237, 237, 237, 0.11)",
        "borderColor": "rgba(212, 212, 212, 0.11)"
    },
    "navbar-inverse navbar-brand": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse navbar-brand:hover": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "none"
    },
    "navbar-inverse navbar-brand:focus": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "none"
    },
    "navbar-inverse navbar-text": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse navbar-nav > li > a": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse navbar-nav > li > a:hover": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-nav > li > a:focus": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-nav > active > a": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-nav > active > a:hover": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-nav > active > a:focus": {
        "color": "rgba(255, 255, 255, 0.11)",
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-nav > disabled > a": {
        "color": "rgba(204, 204, 204, 0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > disabled > a:hover": {
        "color": "rgba(204, 204, 204, 0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > disabled > a:focus": {
        "color": "rgba(204, 204, 204, 0.11)",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-toggle": {
        "borderColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-toggle:hover": {
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-toggle:focus": {
        "backgroundColor": "rgba(206, 206, 206, 0.11)"
    },
    "navbar-inverse navbar-toggle icon-bar": {
        "backgroundColor": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse navbar-collapse": {
        "borderColor": "rgba(219, 219, 219, 0.11)"
    },
    "navbar-inverse navbar-form": {
        "borderColor": "rgba(219, 219, 219, 0.11)"
    },
    "navbar-inverse navbar-nav > open > a": {
        "backgroundColor": "rgba(206, 206, 206, 0.11)",
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse navbar-nav > open > a:hover": {
        "backgroundColor": "rgba(206, 206, 206, 0.11)",
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse navbar-nav > open > a:focus": {
        "backgroundColor": "rgba(206, 206, 206, 0.11)",
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse navbar-link": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse navbar-link:hover": {
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse btn-link": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse btn-link:hover": {
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse btn-link:focus": {
        "color": "rgba(255, 255, 255, 0.11)"
    },
    "navbar-inverse btn-link[disabled]:hover": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "fieldset[disabled] navbar-inverse btn-link:hover": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "navbar-inverse btn-link[disabled]:focus": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "fieldset[disabled] navbar-inverse btn-link:focus": {
        "color": "rgba(204, 204, 204, 0.11)"
    },
    "breadcrumb": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "marginBottom": 20,
        "listStyle": "none",
        "backgroundColor": "transparent",
        "borderRadius": 4
    },
    "breadcrumb > li": {
        "display": "inline-block"
    },
    "breadcrumb > li + li:before": {
        "content": "»\\00a0",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#cccccc"
    },
    "breadcrumb > active": {
        "color": "#b2b2b2"
    },
    "pagination": {
        "display": "inline-block",
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderRadius": 4
    },
    "pagination > li": {
        "display": "inline"
    },
    "pagination > li > a": {
        "position": "relative",
        "float": "left",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "lineHeight": 1.42857143,
        "textDecoration": "none",
        "color": "#a8ffff",
        "backgroundColor": "#333333",
        "border": "1px solid rgba(0, 0, 0, 0.6)",
        "marginLeft": -1
    },
    "pagination > li > span": {
        "position": "relative",
        "float": "left",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "lineHeight": 1.42857143,
        "textDecoration": "none",
        "color": "#a8ffff",
        "backgroundColor": "#333333",
        "border": "1px solid rgba(0, 0, 0, 0.6)",
        "marginLeft": -1
    },
    "pagination > li:first-child > a": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination > li:first-child > span": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination > li:last-child > a": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination > li:last-child > span": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination > li > a:hover": {
        "zIndex": 2,
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0, 0, 0, 0.6)"
    },
    "pagination > li > span:hover": {
        "zIndex": 2,
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0, 0, 0, 0.6)"
    },
    "pagination > li > a:focus": {
        "zIndex": 2,
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0, 0, 0, 0.6)"
    },
    "pagination > li > span:focus": {
        "zIndex": 2,
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "rgba(0, 0, 0, 0.6)"
    },
    "pagination > active > a": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > active > span": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > active > a:hover": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > active > span:hover": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > active > a:focus": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > active > span:focus": {
        "zIndex": 3,
        "color": "#a8ffff",
        "backgroundColor": "#1a1a1a",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "default"
    },
    "pagination > disabled > span": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination > disabled > span:hover": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination > disabled > span:focus": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination > disabled > a": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination > disabled > a:hover": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination > disabled > a:focus": {
        "color": "#b2b2b2",
        "backgroundColor": "rgba(255, 255, 255, 0.11)",
        "borderColor": "rgba(0, 0, 0, 0.6)",
        "cursor": "allowed"
    },
    "pagination-lg > li > a": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33
    },
    "pagination-lg > li > span": {
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33
    },
    "pagination-lg > li:first-child > a": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg > li:first-child > span": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg > li:last-child > a": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-lg > li:last-child > span": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-sm > li > a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5
    },
    "pagination-sm > li > span": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 9,
        "lineHeight": 1.5
    },
    "pagination-sm > li:first-child > a": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm > li:first-child > span": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm > li:last-child > a": {
        "borderBottomRightRadius": 3,
        "borderTopRightRadius": 3
    },
    "pagination-sm > li:last-child > span": {
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
    "pager li": {
        "display": "inline"
    },
    "pager li > a": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#333333",
        "border": "1px solid #a8ffff",
        "borderRadius": 15
    },
    "pager li > span": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#333333",
        "border": "1px solid #a8ffff",
        "borderRadius": 15
    },
    "pager li > a:hover": {
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "pager li > a:focus": {
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "pager next > a": {
        "float": "right"
    },
    "pager next > span": {
        "float": "right"
    },
    "pager previous > a": {
        "float": "left"
    },
    "pager previous > span": {
        "float": "left"
    },
    "pager disabled > a": {
        "color": "rgba(150, 150, 150, 0.41)",
        "backgroundColor": "#333333",
        "cursor": "allowed"
    },
    "pager disabled > a:hover": {
        "color": "rgba(150, 150, 150, 0.41)",
        "backgroundColor": "#333333",
        "cursor": "allowed"
    },
    "pager disabled > a:focus": {
        "color": "rgba(150, 150, 150, 0.41)",
        "backgroundColor": "#333333",
        "cursor": "allowed"
    },
    "pager disabled > span": {
        "color": "rgba(150, 150, 150, 0.41)",
        "backgroundColor": "#333333",
        "cursor": "allowed"
    },
    "alabel:hover": {
        "color": "#ffffff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:focus": {
        "color": "#ffffff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "label:empty": {
        "display": "none"
    },
    "btn label": {
        "position": "relative",
        "top": -1
    },
    "label-default": {
        "backgroundColor": "#333333"
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
        "backgroundColor": "#66ff00"
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
    "btn-group-xs > btn badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "abadge:hover": {
        "color": "#ffffff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "abadge:focus": {
        "color": "#ffffff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "list-group-itemactive > badge": {
        "color": "#a8ffff",
        "backgroundColor": "#b2b2b2"
    },
    "nav-pills > active > a > badge": {
        "color": "#a8ffff",
        "backgroundColor": "#b2b2b2"
    },
    "list-group-item > badge": {
        "float": "right"
    },
    "list-group-item > badge + badge": {
        "marginRight": 5
    },
    "nav-pills > li > a > badge": {
        "marginLeft": 3
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
    "jumbotron > hr": {
        "borderTopColor": "#000000"
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
        "lineHeight": 1.42857143,
        "backgroundColor": "rgba(8, 8, 8, 0.8)",
        "border": "1px solid rgba(0, 0, 0, 0.94)",
        "borderRadius": 4,
        "WebkitTransition": "border 0.2s ease-in-out",
        "OTransition": "border 0.2s ease-in-out",
        "transition": "border 0.2s ease-in-out"
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
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#cccccc"
    },
    "alert": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "alert h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "alert alert-link": {
        "fontWeight": "700"
    },
    "alert > p": {
        "marginBottom": 0
    },
    "alert > ul": {
        "marginBottom": 0
    },
    "alert > p + p": {
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
        "backgroundColor": "rgba(102, 255, 0, 0.3)",
        "borderColor": "#66ff00",
        "color": "#710570"
    },
    "alert-success hr": {
        "borderTopColor": "#5ce600"
    },
    "alert-success alert-link": {
        "color": "#400340"
    },
    "alert-info": {
        "backgroundColor": "rgba(0, 217, 255, 0.3)",
        "borderColor": "#a8ffff",
        "color": "#fd971f"
    },
    "alert-info hr": {
        "borderTopColor": "#8effff"
    },
    "alert-info alert-link": {
        "color": "#e77e02"
    },
    "alert-warning": {
        "backgroundColor": "rgba(253, 151, 31, 0.3)",
        "borderColor": "#fd971f",
        "color": "#a8ffff"
    },
    "alert-warning hr": {
        "borderTopColor": "#fd8b06"
    },
    "alert-warning alert-link": {
        "color": "#75ffff"
    },
    "alert-danger": {
        "backgroundColor": "rgba(249, 38, 114, 0.3)",
        "borderColor": "#f92672",
        "color": "#66ff00"
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
        "color": "#ffffff",
        "textAlign": "center",
        "backgroundColor": "#a8ffff",
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
        "boxShadow": "inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
        "WebkitTransition": "width 0.6s ease",
        "OTransition": "width 0.6s ease",
        "transition": "width 0.6s ease"
    },
    "progress-striped progress-bar": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
        "backgroundSize": "40px 40px"
    },
    "progress-bar-striped": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
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
        "backgroundColor": "#66ff00"
    },
    "progress-striped progress-bar-success": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-info": {
        "backgroundColor": "#710570"
    },
    "progress-striped progress-bar-info": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-warning": {
        "backgroundColor": "#fd971f"
    },
    "progress-striped progress-bar-warning": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-danger": {
        "backgroundColor": "#f92672"
    },
    "progress-striped progress-bar-danger": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
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
    "media > pull-right": {
        "paddingLeft": 10
    },
    "media-left": {
        "paddingRight": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media > pull-left": {
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
        "paddingLeft": 0
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
        "color": "#ffffff"
    },
    "buttonlist-group-item": {
        "color": "#ffffff",
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
        "color": "#ffffff",
        "backgroundColor": "#4a4a4a"
    },
    "buttonlist-group-item:hover": {
        "textDecoration": "none",
        "color": "#ffffff",
        "backgroundColor": "#4a4a4a"
    },
    "alist-group-item:focus": {
        "textDecoration": "none",
        "color": "#ffffff",
        "backgroundColor": "#4a4a4a"
    },
    "buttonlist-group-item:focus": {
        "textDecoration": "none",
        "color": "#ffffff",
        "backgroundColor": "#4a4a4a"
    },
    "list-group-itemdisabled": {
        "backgroundColor": "rgba(181, 181, 181, 0.11)",
        "color": "rgba(122, 130, 136, 0.11)",
        "cursor": "allowed"
    },
    "list-group-itemdisabled:hover": {
        "backgroundColor": "rgba(181, 181, 181, 0.11)",
        "color": "rgba(122, 130, 136, 0.11)",
        "cursor": "allowed"
    },
    "list-group-itemdisabled:focus": {
        "backgroundColor": "rgba(181, 181, 181, 0.11)",
        "color": "rgba(122, 130, 136, 0.11)",
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
        "color": "rgba(122, 130, 136, 0.11)"
    },
    "list-group-itemdisabled:hover list-group-item-text": {
        "color": "rgba(122, 130, 136, 0.11)"
    },
    "list-group-itemdisabled:focus list-group-item-text": {
        "color": "rgba(122, 130, 136, 0.11)"
    },
    "list-group-itemactive": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#a8ffff"
    },
    "list-group-itemactive:hover": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#a8ffff"
    },
    "list-group-itemactive:focus": {
        "zIndex": 2,
        "color": "#a8ffff",
        "backgroundColor": "#313131",
        "borderColor": "#a8ffff"
    },
    "list-group-itemactive list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-heading > small": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading > small": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading > small": {
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
        "color": "#66ff00",
        "backgroundColor": "rgba(102, 255, 0, 0.3)"
    },
    "alist-group-item-success": {
        "color": "#66ff00"
    },
    "buttonlist-group-item-success": {
        "color": "#66ff00"
    },
    "alist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-success:hover": {
        "color": "#66ff00",
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "buttonlist-group-item-success:hover": {
        "color": "#66ff00",
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "alist-group-item-success:focus": {
        "color": "#66ff00",
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "buttonlist-group-item-success:focus": {
        "color": "#66ff00",
        "backgroundColor": "rgba(92, 230, 0, 0.3)"
    },
    "alist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "buttonlist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "alist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "buttonlist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "alist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "buttonlist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#66ff00",
        "borderColor": "#66ff00"
    },
    "list-group-item-info": {
        "color": "#710570",
        "backgroundColor": "rgba(113, 5, 112, 0.3)"
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
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "buttonlist-group-item-info:hover": {
        "color": "#710570",
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "alist-group-item-info:focus": {
        "color": "#710570",
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "buttonlist-group-item-info:focus": {
        "color": "#710570",
        "backgroundColor": "rgba(89, 4, 88, 0.3)"
    },
    "alist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "buttonlist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "alist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "buttonlist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#710570",
        "borderColor": "#710570"
    },
    "alist-group-item-infoactive:focus": {
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
        "backgroundColor": "rgba(253, 151, 31, 0.3)"
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
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "buttonlist-group-item-warning:hover": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "alist-group-item-warning:focus": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "buttonlist-group-item-warning:focus": {
        "color": "#fd971f",
        "backgroundColor": "rgba(253, 139, 6, 0.3)"
    },
    "alist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "buttonlist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "alist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "buttonlist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#fd971f",
        "borderColor": "#fd971f"
    },
    "alist-group-item-warningactive:focus": {
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
        "backgroundColor": "rgba(249, 38, 114, 0.3)"
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
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "buttonlist-group-item-danger:hover": {
        "color": "#f92672",
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "alist-group-item-danger:focus": {
        "color": "#f92672",
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "buttonlist-group-item-danger:focus": {
        "color": "#f92672",
        "backgroundColor": "rgba(248, 13, 98, 0.3)"
    },
    "alist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "buttonlist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "alist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "buttonlist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#f92672",
        "borderColor": "#f92672"
    },
    "alist-group-item-dangeractive:focus": {
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
        "WebkitBoxShadow": "0 1px 1px rgba(0, 0, 0, 0.05)",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.05)"
    },
    "panel-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
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
    "panel-heading > dropdown dropdown-toggle": {
        "color": "inherit"
    },
    "panel-title": {
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 16,
        "color": "inherit"
    },
    "panel-title > a": {
        "color": "inherit"
    },
    "panel-title > small": {
        "color": "inherit"
    },
    "panel-title > small > a": {
        "color": "inherit"
    },
    "panel-footer": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "backgroundColor": "rgba(237, 237, 237, 0.11)",
        "borderTop": "1px solid #222222",
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > list-group": {
        "marginBottom": 0
    },
    "panel > panel-collapse > list-group": {
        "marginBottom": 0
    },
    "panel > list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel > panel-collapse > list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel > list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel > panel-collapse > list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel > list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > panel-collapse > list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > panel-heading + panel-collapse > list-group list-group-item:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "panel-heading + list-group list-group-item:first-child": {
        "borderTopWidth": 0
    },
    "list-group + panel-footer": {
        "borderTopWidth": 0
    },
    "panel > table": {
        "marginBottom": 0
    },
    "panel > table-responsive > table": {
        "marginBottom": 0
    },
    "panel > panel-collapse > table": {
        "marginBottom": 0
    },
    "panel > table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel > table-responsive > table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel > panel-collapse > table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel > table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child": {
        "borderBottomLeftRadius": 3,
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > panel-body + table": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel > panel-body + table-responsive": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel > table + panel-body": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel > table-responsive + panel-body": {
        "borderTop": "1px solid #0b0b0b"
    },
    "panel > table > tbody:first-child > tr:first-child th": {
        "borderTop": 0
    },
    "panel > table > tbody:first-child > tr:first-child td": {
        "borderTop": 0
    },
    "panel > table-bordered": {
        "border": 0
    },
    "panel > table-responsive > table-bordered": {
        "border": 0
    },
    "panel > table-bordered > thead > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tbody > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tfoot > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > thead > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tbody > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tfoot > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > thead > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tbody > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tfoot > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > thead > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tbody > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tfoot > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > thead > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > thead > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > thead > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > thead > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tfoot > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tfoot > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive": {
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
    "panel-group panel + panel": {
        "marginTop": 5
    },
    "panel-group panel-heading": {
        "borderBottom": 0
    },
    "panel-group panel-heading + panel-collapse > panel-body": {
        "borderTop": "1px solid #222222"
    },
    "panel-group panel-heading + panel-collapse > list-group": {
        "borderTop": "1px solid #222222"
    },
    "panel-group panel-footer": {
        "borderTop": 0
    },
    "panel-group panel-footer + panel-collapse panel-body": {
        "borderBottom": "1px solid #222222"
    },
    "panel-default": {
        "borderColor": "#a8ffff"
    },
    "panel-default > panel-heading": {
        "color": "#cccccc",
        "backgroundColor": "#313131",
        "borderColor": "#a8ffff"
    },
    "panel-default > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#a8ffff"
    },
    "panel-default > panel-heading badge": {
        "color": "#313131",
        "backgroundColor": "#cccccc"
    },
    "panel-default > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#a8ffff"
    },
    "panel-primary": {
        "borderColor": "#a8ffff"
    },
    "panel-primary > panel-heading": {
        "color": "#66ff00",
        "backgroundColor": "rgba(168, 255, 255, 0.3)",
        "borderColor": "#a8ffff"
    },
    "panel-primary > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#a8ffff"
    },
    "panel-primary > panel-heading badge": {
        "color": "rgba(168, 255, 255, 0.3)",
        "backgroundColor": "#66ff00"
    },
    "panel-primary > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#a8ffff"
    },
    "panel-success": {
        "borderColor": "#66ff00"
    },
    "panel-success > panel-heading": {
        "color": "#710570",
        "backgroundColor": "rgba(102, 255, 0, 0.3)",
        "borderColor": "#66ff00"
    },
    "panel-success > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#66ff00"
    },
    "panel-success > panel-heading badge": {
        "color": "rgba(102, 255, 0, 0.3)",
        "backgroundColor": "#710570"
    },
    "panel-success > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#66ff00"
    },
    "panel-info": {
        "borderColor": "#710570"
    },
    "panel-info > panel-heading": {
        "color": "#66ff00",
        "backgroundColor": "rgba(113, 5, 112, 0.3)",
        "borderColor": "#710570"
    },
    "panel-info > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#710570"
    },
    "panel-info > panel-heading badge": {
        "color": "rgba(113, 5, 112, 0.3)",
        "backgroundColor": "#66ff00"
    },
    "panel-info > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#710570"
    },
    "panel-warning": {
        "borderColor": "#fd971f"
    },
    "panel-warning > panel-heading": {
        "color": "#a8ffff",
        "backgroundColor": "rgba(253, 151, 31, 0.3)",
        "borderColor": "#fd971f"
    },
    "panel-warning > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#fd971f"
    },
    "panel-warning > panel-heading badge": {
        "color": "rgba(253, 151, 31, 0.3)",
        "backgroundColor": "#a8ffff"
    },
    "panel-warning > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#fd971f"
    },
    "panel-danger": {
        "borderColor": "#f92672"
    },
    "panel-danger > panel-heading": {
        "color": "#fd971f",
        "backgroundColor": "rgba(249, 38, 114, 0.3)",
        "borderColor": "#f92672"
    },
    "panel-danger > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#f92672"
    },
    "panel-danger > panel-heading badge": {
        "color": "rgba(249, 38, 114, 0.3)",
        "backgroundColor": "#fd971f"
    },
    "panel-danger > panel-footer + panel-collapse > panel-body": {
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
        "backgroundColor": "rgba(9, 9, 9, 0.78)",
        "border": "1px solid #828282",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.05)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.05)"
    },
    "well blockquote": {
        "borderColor": "rgba(0, 0, 0, 0.15)"
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
        "color": "#000000",
        "textShadow": "0 1px 0 #ffffff",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "close:hover": {
        "color": "#000000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "close:focus": {
        "color": "#000000",
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
        "WebkitBoxShadow": "0 3px 9px rgba(0, 0, 0, 0.5)",
        "boxShadow": "0 3px 9px rgba(0, 0, 0, 0.5)",
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
        "backgroundColor": "#000000"
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
        "borderBottom": "1px solid #000000"
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.42857143
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
        "borderTop": "1px solid #000000"
    },
    "modal-footer btn + btn": {
        "marginLeft": 5,
        "marginBottom": 0
    },
    "modal-footer btn-group btn + btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block + btn-block": {
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
        "lineHeight": 1.42857143,
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
        "backgroundColor": "rgba(0, 0, 0, 0.9)",
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
        "lineHeight": 1.42857143,
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
        "WebkitBoxShadow": "0 5px 10px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 5px 10px rgba(0, 0, 0, 0.2)"
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
    "popover > arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 11
    },
    "popover > arrow:after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 10,
        "content": ""
    },
    "popovertop > arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderBottomWidth": 0,
        "borderTopColor": "#a8ffff",
        "bottom": -11
    },
    "popovertop > arrow:after": {
        "content": " ",
        "bottom": 1,
        "marginLeft": -10,
        "borderBottomWidth": 0,
        "borderTopColor": "#242424"
    },
    "popoverright > arrow": {
        "top": "50%",
        "left": -11,
        "marginTop": -11,
        "borderLeftWidth": 0,
        "borderRightColor": "#a8ffff"
    },
    "popoverright > arrow:after": {
        "content": " ",
        "left": 1,
        "bottom": -10,
        "borderLeftWidth": 0,
        "borderRightColor": "#242424"
    },
    "popoverbottom > arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderTopWidth": 0,
        "borderBottomColor": "#a8ffff",
        "top": -11
    },
    "popoverbottom > arrow:after": {
        "content": " ",
        "top": 1,
        "marginLeft": -10,
        "borderTopWidth": 0,
        "borderBottomColor": "#242424"
    },
    "popoverleft > arrow": {
        "top": "50%",
        "right": -11,
        "marginTop": -11,
        "borderRightWidth": 0,
        "borderLeftColor": "#a8ffff"
    },
    "popoverleft > arrow:after": {
        "content": " ",
        "right": 1,
        "borderRightWidth": 0,
        "borderLeftColor": "#242424",
        "bottom": -10
    },
    "carousel": {
        "position": "relative"
    },
    "carousel-inner": {
        "position": "relative",
        "overflow": "hidden",
        "width": "100%"
    },
    "carousel-inner > item": {
        "display": "none",
        "position": "relative",
        "WebkitTransition": "0.6s ease-in-out left",
        "OTransition": "0.6s ease-in-out left",
        "transition": "0.6s ease-in-out left"
    },
    "carousel-inner > active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner > next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner > prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner > nextleft": {
        "left": 0
    },
    "carousel-inner > prevright": {
        "left": 0
    },
    "carousel-inner > activeleft": {
        "left": "-100%"
    },
    "carousel-inner > activeright": {
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
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.6)",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "carousel-controlleft": {
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)"
    },
    "carousel-controlright": {
        "left": "auto",
        "right": 0,
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%)",
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
        "backgroundColor": "rgba(0, 0, 0, 0)"
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
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.6)"
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
    "dl-horizontal dd:before": {
        "content": " ",
        "display": "table"
    },
    "dl-horizontal dd:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "container-fluid:before": {
        "content": " ",
        "display": "table"
    },
    "container-fluid:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "form-horizontal form-group:before": {
        "content": " ",
        "display": "table"
    },
    "form-horizontal form-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "btn-group-vertical > btn-group:before": {
        "content": " ",
        "display": "table"
    },
    "btn-group-vertical > btn-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "navbar-collapse:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-collapse:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "panel-body:before": {
        "content": " ",
        "display": "table"
    },
    "panel-body:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
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
    "modal-footer:before": {
        "content": " ",
        "display": "table"
    },
    "modal-footer:after": {
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
    }
});