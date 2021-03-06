import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "i": {
        "fontFamily": "'0065-Licensed-to-Maime' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-type:before": {
        "content": "\\e900"
    },
    "icon-box:before": {
        "content": "\\e901"
    },
    "icon-archive2:before": {
        "content": "\\e902"
    },
    "icon-envelope2:before": {
        "content": "\\e903"
    },
    "icon-email:before": {
        "content": "\\e904"
    },
    "icon-files:before": {
        "content": "\\e905"
    },
    "icon-uniE906:before": {
        "content": "\\e906"
    },
    "icon-file-settings:before": {
        "content": "\\e907"
    },
    "icon-file-add:before": {
        "content": "\\e908"
    },
    "icon-file2:before": {
        "content": "\\e909"
    },
    "icon-align-left2:before": {
        "content": "\\e90a"
    },
    "icon-align-right2:before": {
        "content": "\\e90b"
    },
    "icon-align-center2:before": {
        "content": "\\e90c"
    },
    "icon-align-justify2:before": {
        "content": "\\e90d"
    },
    "icon-file-broken:before": {
        "content": "\\e90e"
    },
    "icon-browser:before": {
        "content": "\\e90f"
    },
    "icon-windows3:before": {
        "content": "\\e910"
    },
    "icon-window:before": {
        "content": "\\e911"
    },
    "icon-folder3:before": {
        "content": "\\e912"
    },
    "icon-folder-add:before": {
        "content": "\\e913"
    },
    "icon-folder-settings:before": {
        "content": "\\e914"
    },
    "icon-folder-check:before": {
        "content": "\\e915"
    },
    "icon-wifi-low:before": {
        "content": "\\e916"
    },
    "icon-wifi-mid:before": {
        "content": "\\e917"
    },
    "icon-wifi-full:before": {
        "content": "\\e918"
    },
    "icon-connection-empty:before": {
        "content": "\\e919"
    },
    "icon-connection-25:before": {
        "content": "\\e91a"
    },
    "icon-connection-50:before": {
        "content": "\\e91b"
    },
    "icon-connection-75:before": {
        "content": "\\e91c"
    },
    "icon-connection-full:before": {
        "content": "\\e91d"
    },
    "icon-list3:before": {
        "content": "\\e91e"
    },
    "icon-grid:before": {
        "content": "\\e91f"
    },
    "icon-uniE920:before": {
        "content": "\\e920"
    },
    "icon-battery-charging:before": {
        "content": "\\e921"
    },
    "icon-battery-empty2:before": {
        "content": "\\e922"
    },
    "icon-battery-25:before": {
        "content": "\\e923"
    },
    "icon-battery-50:before": {
        "content": "\\e924"
    },
    "icon-battery-75:before": {
        "content": "\\e925"
    },
    "icon-battery-full2:before": {
        "content": "\\e926"
    },
    "icon-settings:before": {
        "content": "\\e927"
    },
    "icon-arrow-left3:before": {
        "content": "\\e928"
    },
    "icon-arrow-up3:before": {
        "content": "\\e929"
    },
    "icon-arrow-down3:before": {
        "content": "\\e92a"
    },
    "icon-arrow-right3:before": {
        "content": "\\e92b"
    },
    "icon-reload:before": {
        "content": "\\e92c"
    },
    "icon-refresh2:before": {
        "content": "\\e92d"
    },
    "icon-volume:before": {
        "content": "\\e92e"
    },
    "icon-volume-increase2:before": {
        "content": "\\e92f"
    },
    "icon-volume-decrease2:before": {
        "content": "\\e930"
    },
    "icon-mute:before": {
        "content": "\\e931"
    },
    "icon-microphone2:before": {
        "content": "\\e932"
    },
    "icon-microphone-off:before": {
        "content": "\\e933"
    },
    "icon-book3:before": {
        "content": "\\e934"
    },
    "icon-checkmark3:before": {
        "content": "\\e935"
    },
    "icon-checkbox-checked2:before": {
        "content": "\\e936"
    },
    "icon-checkbox:before": {
        "content": "\\e937"
    },
    "icon-paperclip2:before": {
        "content": "\\e938"
    },
    "icon-download4:before": {
        "content": "\\e939"
    },
    "icon-tag2:before": {
        "content": "\\e93a"
    },
    "icon-trashcan:before": {
        "content": "\\e93b"
    },
    "icon-search3:before": {
        "content": "\\e93c"
    },
    "icon-zoomin:before": {
        "content": "\\e93d"
    },
    "icon-zoomout:before": {
        "content": "\\e93e"
    },
    "icon-chat:before": {
        "content": "\\e93f"
    },
    "icon-chat-1:before": {
        "content": "\\e940"
    },
    "icon-chat-2:before": {
        "content": "\\e941"
    },
    "icon-chat-3:before": {
        "content": "\\e942"
    },
    "icon-comment2:before": {
        "content": "\\e943"
    },
    "icon-calendar3:before": {
        "content": "\\e944"
    },
    "icon-bookmark3:before": {
        "content": "\\e945"
    },
    "icon-email2:before": {
        "content": "\\e946"
    },
    "icon-heart3:before": {
        "content": "\\e947"
    },
    "icon-enter2:before": {
        "content": "\\e948"
    },
    "icon-cloud3:before": {
        "content": "\\e949"
    },
    "icon-book4:before": {
        "content": "\\e94a"
    },
    "icon-star2:before": {
        "content": "\\e94b"
    },
    "icon-clock3:before": {
        "content": "\\e94c"
    },
    "icon-printer2:before": {
        "content": "\\e94d"
    },
    "icon-home4:before": {
        "content": "\\e94e"
    },
    "icon-flag3:before": {
        "content": "\\e94f"
    },
    "icon-meter3:before": {
        "content": "\\e950"
    },
    "icon-switch2:before": {
        "content": "\\e951"
    },
    "icon-forbidden:before": {
        "content": "\\e952"
    },
    "icon-lock3:before": {
        "content": "\\e953"
    },
    "icon-unlocked2:before": {
        "content": "\\e954"
    },
    "icon-unlocked3:before": {
        "content": "\\e955"
    },
    "icon-users3:before": {
        "content": "\\e956"
    },
    "icon-user3:before": {
        "content": "\\e957"
    },
    "icon-users4:before": {
        "content": "\\e958"
    },
    "icon-user4:before": {
        "content": "\\e959"
    },
    "icon-bullhorn3:before": {
        "content": "\\e95a"
    },
    "icon-share3:before": {
        "content": "\\e95b"
    },
    "icon-screen:before": {
        "content": "\\e95c"
    },
    "icon-phone3:before": {
        "content": "\\e95d"
    },
    "icon-phone-portrait:before": {
        "content": "\\e95e"
    },
    "icon-phone-landscape:before": {
        "content": "\\e95f"
    },
    "icon-tablet3:before": {
        "content": "\\e960"
    },
    "icon-tablet-landscape:before": {
        "content": "\\e961"
    },
    "icon-laptop3:before": {
        "content": "\\e962"
    },
    "icon-camera3:before": {
        "content": "\\e963"
    },
    "icon-microwaveoven:before": {
        "content": "\\e964"
    },
    "icon-creditcards:before": {
        "content": "\\e965"
    },
    "icon-calculator3:before": {
        "content": "\\e966"
    },
    "icon-bag:before": {
        "content": "\\e967"
    },
    "icon-diamond2:before": {
        "content": "\\e968"
    },
    "icon-drink:before": {
        "content": "\\e969"
    },
    "icon-shorts:before": {
        "content": "\\e96a"
    },
    "icon-vcard2:before": {
        "content": "\\e96b"
    },
    "icon-sun2:before": {
        "content": "\\e96c"
    },
    "icon-bill:before": {
        "content": "\\e96d"
    },
    "icon-coffee2:before": {
        "content": "\\e96e"
    },
    "icon-uniE96F:before": {
        "content": "\\e96f"
    },
    "icon-newspaper2:before": {
        "content": "\\e970"
    },
    "icon-stack2:before": {
        "content": "\\e971"
    },
    "icon-mapmarker:before": {
        "content": "\\e972"
    },
    "icon-map3:before": {
        "content": "\\e973"
    },
    "icon-support2:before": {
        "content": "\\e974"
    },
    "icon-uniE975:before": {
        "content": "\\e975"
    },
    "icon-barbell:before": {
        "content": "\\e976"
    },
    "icon-stopwatch2:before": {
        "content": "\\e977"
    },
    "icon-atom:before": {
        "content": "\\e978"
    },
    "icon-syringe:before": {
        "content": "\\e979"
    },
    "icon-health:before": {
        "content": "\\e97a"
    },
    "icon-bolt2:before": {
        "content": "\\e97b"
    },
    "icon-pill:before": {
        "content": "\\e97c"
    },
    "icon-bones:before": {
        "content": "\\e97d"
    },
    "icon-lab2:before": {
        "content": "\\e97e"
    },
    "icon-clipboard3:before": {
        "content": "\\e97f"
    },
    "icon-mug2:before": {
        "content": "\\e980"
    },
    "icon-bucket:before": {
        "content": "\\e981"
    },
    "icon-select:before": {
        "content": "\\e982"
    },
    "icon-graph:before": {
        "content": "\\e983"
    },
    "icon-crop3:before": {
        "content": "\\e984"
    },
    "icon-image3:before": {
        "content": "\\e985"
    },
    "icon-cube2:before": {
        "content": "\\e986"
    },
    "icon-bars2:before": {
        "content": "\\e987"
    },
    "icon-chart:before": {
        "content": "\\e988"
    },
    "icon-pencil3:before": {
        "content": "\\e989"
    },
    "icon-measure:before": {
        "content": "\\e98a"
    },
    "icon-eyedropper3:before": {
        "content": "\\e98b"
    },
    "icon-times2:before": {
        "content": "\\e98c"
    },
    "icon-tick:before": {
        "content": "\\e98d"
    },
    "icon-plus3:before": {
        "content": "\\e98e"
    },
    "icon-minus3:before": {
        "content": "\\e98f"
    },
    "icon-equals:before": {
        "content": "\\e990"
    },
    "icon-divide:before": {
        "content": "\\e991"
    },
    "icon-chevron-right2:before": {
        "content": "\\e992"
    },
    "icon-chevron-left2:before": {
        "content": "\\e993"
    },
    "icon-arrow-right-thick:before": {
        "content": "\\e994"
    },
    "icon-arrow-left-thick:before": {
        "content": "\\e995"
    },
    "icon-th-small:before": {
        "content": "\\e996"
    },
    "icon-th-menu:before": {
        "content": "\\e997"
    },
    "icon-th-list2:before": {
        "content": "\\e998"
    },
    "icon-th-large2:before": {
        "content": "\\e999"
    },
    "icon-home5:before": {
        "content": "\\e99a"
    },
    "icon-arrow-forward:before": {
        "content": "\\e99b"
    },
    "icon-arrow-back:before": {
        "content": "\\e99c"
    },
    "icon-rss3:before": {
        "content": "\\e99d"
    },
    "icon-location3:before": {
        "content": "\\e99e"
    },
    "icon-link3:before": {
        "content": "\\e99f"
    },
    "icon-image4:before": {
        "content": "\\e9a0"
    },
    "icon-arrow-up-thick:before": {
        "content": "\\e9a1"
    },
    "icon-arrow-down-thick:before": {
        "content": "\\e9a2"
    },
    "icon-starburst:before": {
        "content": "\\e9a3"
    },
    "icon-starburst-outline:before": {
        "content": "\\e9a4"
    },
    "icon-star3:before": {
        "content": "\\e9a5"
    },
    "icon-flow-children:before": {
        "content": "\\e9a6"
    },
    "icon-export:before": {
        "content": "\\e9a7"
    },
    "icon-delete:before": {
        "content": "\\e9a8"
    },
    "icon-delete-outline:before": {
        "content": "\\e9a9"
    },
    "icon-cloud-storage:before": {
        "content": "\\e9aa"
    },
    "icon-wi-fi:before": {
        "content": "\\e9ab"
    },
    "icon-heart4:before": {
        "content": "\\e9ac"
    },
    "icon-flash2:before": {
        "content": "\\e9ad"
    },
    "icon-cancel:before": {
        "content": "\\e9ae"
    },
    "icon-backspace:before": {
        "content": "\\e9af"
    },
    "icon-attachment2:before": {
        "content": "\\e9b0"
    },
    "icon-arrow-move:before": {
        "content": "\\e9b1"
    },
    "icon-warning3:before": {
        "content": "\\e9b2"
    },
    "icon-user5:before": {
        "content": "\\e9b3"
    },
    "icon-radar:before": {
        "content": "\\e9b4"
    },
    "icon-lock-open:before": {
        "content": "\\e9b5"
    },
    "icon-lock-closed:before": {
        "content": "\\e9b6"
    },
    "icon-location-arrow2:before": {
        "content": "\\e9b7"
    },
    "icon-info3:before": {
        "content": "\\e9b8"
    },
    "icon-user-delete:before": {
        "content": "\\e9b9"
    },
    "icon-user-add:before": {
        "content": "\\e9ba"
    },
    "icon-media-pause:before": {
        "content": "\\e9bb"
    },
    "icon-group2:before": {
        "content": "\\e9bc"
    },
    "icon-chart-pie:before": {
        "content": "\\e9bd"
    },
    "icon-chart-line:before": {
        "content": "\\e9be"
    },
    "icon-chart-bar:before": {
        "content": "\\e9bf"
    },
    "icon-chart-area:before": {
        "content": "\\e9c0"
    },
    "icon-video:before": {
        "content": "\\e9c1"
    },
    "icon-point-of-interest:before": {
        "content": "\\e9c2"
    },
    "icon-infinity:before": {
        "content": "\\e9c3"
    },
    "icon-globe2:before": {
        "content": "\\e9c4"
    },
    "icon-eye3:before": {
        "content": "\\e9c5"
    },
    "icon-cog3:before": {
        "content": "\\e9c6"
    },
    "icon-camera4:before": {
        "content": "\\e9c7"
    },
    "icon-upload4:before": {
        "content": "\\e9c8"
    },
    "icon-scissors3:before": {
        "content": "\\e9c9"
    },
    "icon-refresh3:before": {
        "content": "\\e9ca"
    },
    "icon-pin:before": {
        "content": "\\e9cb"
    },
    "icon-key3:before": {
        "content": "\\e9cc"
    },
    "icon-info-large:before": {
        "content": "\\e9cd"
    },
    "icon-eject3:before": {
        "content": "\\e9ce"
    },
    "icon-download5:before": {
        "content": "\\e9cf"
    },
    "icon-zoom:before": {
        "content": "\\e9d0"
    },
    "icon-zoom-out2:before": {
        "content": "\\e9d1"
    },
    "icon-zoom-in2:before": {
        "content": "\\e9d2"
    },
    "icon-sort-numerically:before": {
        "content": "\\e9d3"
    },
    "icon-sort-alphabetically:before": {
        "content": "\\e9d4"
    },
    "icon-input-checked:before": {
        "content": "\\e9d5"
    },
    "icon-calender:before": {
        "content": "\\e9d6"
    },
    "icon-world:before": {
        "content": "\\e9d7"
    },
    "icon-notes:before": {
        "content": "\\e9d8"
    },
    "icon-code2:before": {
        "content": "\\e9d9"
    },
    "icon-arrow-sync:before": {
        "content": "\\e9da"
    },
    "icon-arrow-shuffle:before": {
        "content": "\\e9db"
    },
    "icon-arrow-repeat:before": {
        "content": "\\e9dc"
    },
    "icon-arrow-minimise:before": {
        "content": "\\e9dd"
    },
    "icon-arrow-maximise:before": {
        "content": "\\e9de"
    },
    "icon-arrow-loop:before": {
        "content": "\\e9df"
    },
    "icon-anchor2:before": {
        "content": "\\e9e0"
    },
    "icon-spanner:before": {
        "content": "\\e9e1"
    },
    "icon-puzzle:before": {
        "content": "\\e9e2"
    },
    "icon-power2:before": {
        "content": "\\e9e3"
    },
    "icon-plane2:before": {
        "content": "\\e9e4"
    },
    "icon-pi:before": {
        "content": "\\e9e5"
    },
    "icon-phone4:before": {
        "content": "\\e9e6"
    },
    "icon-microphone3:before": {
        "content": "\\e9e7"
    },
    "icon-media-rewind:before": {
        "content": "\\e9e8"
    },
    "icon-flag4:before": {
        "content": "\\e9e9"
    },
    "icon-adjust-brightness:before": {
        "content": "\\e9ea"
    },
    "icon-waves:before": {
        "content": "\\e9eb"
    },
    "icon-social-twitter:before": {
        "content": "\\e9ec"
    },
    "icon-social-facebook:before": {
        "content": "\\e9ed"
    },
    "icon-social-dribbble:before": {
        "content": "\\e9ee"
    },
    "icon-media-stop:before": {
        "content": "\\e9ef"
    },
    "icon-media-record:before": {
        "content": "\\e9f0"
    },
    "icon-media-play:before": {
        "content": "\\e9f1"
    },
    "icon-media-fast-forward:before": {
        "content": "\\e9f2"
    },
    "icon-media-eject:before": {
        "content": "\\e9f3"
    },
    "icon-social-vimeo:before": {
        "content": "\\e9f4"
    },
    "icon-social-tumbler:before": {
        "content": "\\e9f5"
    },
    "icon-social-skype:before": {
        "content": "\\e9f6"
    },
    "icon-social-pinterest:before": {
        "content": "\\e9f7"
    },
    "icon-social-linkedin:before": {
        "content": "\\e9f8"
    },
    "icon-social-last-fm:before": {
        "content": "\\e9f9"
    },
    "icon-social-github:before": {
        "content": "\\e9fa"
    },
    "icon-social-flickr:before": {
        "content": "\\e9fb"
    },
    "icon-at2:before": {
        "content": "\\e9fc"
    },
    "icon-times-outline:before": {
        "content": "\\e9fd"
    },
    "icon-plus-outline:before": {
        "content": "\\e9fe"
    },
    "icon-minus-outline:before": {
        "content": "\\e9ff"
    },
    "icon-tick-outline:before": {
        "content": "\\ea00"
    },
    "icon-th-large-outline:before": {
        "content": "\\ea01"
    },
    "icon-equals-outline:before": {
        "content": "\\ea02"
    },
    "icon-divide-outline:before": {
        "content": "\\ea03"
    },
    "icon-chevron-right-outline:before": {
        "content": "\\ea04"
    },
    "icon-chevron-left-outline:before": {
        "content": "\\ea05"
    },
    "icon-arrow-right-outline:before": {
        "content": "\\ea06"
    },
    "icon-arrow-left-outline:before": {
        "content": "\\ea07"
    },
    "icon-th-small-outline:before": {
        "content": "\\ea08"
    },
    "icon-th-menu-outline:before": {
        "content": "\\ea09"
    },
    "icon-th-list-outline:before": {
        "content": "\\ea0a"
    },
    "icon-news:before": {
        "content": "\\ea0b"
    },
    "icon-home-outline:before": {
        "content": "\\ea0c"
    },
    "icon-arrow-up-outline:before": {
        "content": "\\ea0d"
    },
    "icon-arrow-forward-outline:before": {
        "content": "\\ea0e"
    },
    "icon-arrow-down-outline:before": {
        "content": "\\ea0f"
    },
    "icon-arrow-back-outline:before": {
        "content": "\\ea10"
    },
    "icon-trash2:before": {
        "content": "\\ea11"
    },
    "icon-rss-outline:before": {
        "content": "\\ea12"
    },
    "icon-message:before": {
        "content": "\\ea13"
    },
    "icon-location-outline:before": {
        "content": "\\ea14"
    },
    "icon-link-outline:before": {
        "content": "\\ea15"
    },
    "icon-image-outline:before": {
        "content": "\\ea16"
    },
    "icon-export-outline:before": {
        "content": "\\ea17"
    },
    "icon-cross2:before": {
        "content": "\\ea18"
    },
    "icon-wi-fi-outline:before": {
        "content": "\\ea19"
    },
    "icon-star-outline:before": {
        "content": "\\ea1a"
    },
    "icon-media-pause-outline:before": {
        "content": "\\ea1b"
    },
    "icon-mail5:before": {
        "content": "\\ea1c"
    },
    "icon-heart-outline:before": {
        "content": "\\ea1d"
    },
    "icon-flash-outline:before": {
        "content": "\\ea1e"
    },
    "icon-cancel-outline:before": {
        "content": "\\ea1f"
    },
    "icon-beaker:before": {
        "content": "\\ea20"
    },
    "icon-arrow-move-outline:before": {
        "content": "\\ea21"
    },
    "icon-watch:before": {
        "content": "\\ea22"
    },
    "icon-warning-outline:before": {
        "content": "\\ea23"
    },
    "icon-time:before": {
        "content": "\\ea24"
    },
    "icon-radar-outline:before": {
        "content": "\\ea25"
    },
    "icon-lock-open-outline:before": {
        "content": "\\ea26"
    },
    "icon-location-arrow-outline:before": {
        "content": "\\ea27"
    },
    "icon-info-outline:before": {
        "content": "\\ea28"
    },
    "icon-backspace-outline:before": {
        "content": "\\ea29"
    },
    "icon-attachment-outline:before": {
        "content": "\\ea2a"
    },
    "icon-user-outline:before": {
        "content": "\\ea2b"
    },
    "icon-user-delete-outline:before": {
        "content": "\\ea2c"
    },
    "icon-user-add-outline:before": {
        "content": "\\ea2d"
    },
    "icon-lock-closed-outline:before": {
        "content": "\\ea2e"
    },
    "icon-group-outline:before": {
        "content": "\\ea2f"
    },
    "icon-chart-pie-outline:before": {
        "content": "\\ea30"
    },
    "icon-chart-line-outline:before": {
        "content": "\\ea31"
    },
    "icon-chart-bar-outline:before": {
        "content": "\\ea32"
    },
    "icon-chart-area-outline:before": {
        "content": "\\ea33"
    },
    "icon-video-outline:before": {
        "content": "\\ea34"
    },
    "icon-point-of-interest-outline:before": {
        "content": "\\ea35"
    },
    "icon-map4:before": {
        "content": "\\ea36"
    },
    "icon-key-outline:before": {
        "content": "\\ea37"
    },
    "icon-infinity-outline:before": {
        "content": "\\ea38"
    },
    "icon-globe-outline:before": {
        "content": "\\ea39"
    },
    "icon-eye-outline:before": {
        "content": "\\ea3a"
    },
    "icon-cog-outline:before": {
        "content": "\\ea3b"
    },
    "icon-camera-outline:before": {
        "content": "\\ea3c"
    },
    "icon-upload-outline:before": {
        "content": "\\ea3d"
    },
    "icon-support3:before": {
        "content": "\\ea3e"
    },
    "icon-scissors-outline:before": {
        "content": "\\ea3f"
    },
    "icon-refresh-outline:before": {
        "content": "\\ea40"
    },
    "icon-info-large-outline:before": {
        "content": "\\ea41"
    },
    "icon-eject-outline:before": {
        "content": "\\ea42"
    },
    "icon-download-outline:before": {
        "content": "\\ea43"
    },
    "icon-battery-mid:before": {
        "content": "\\ea44"
    },
    "icon-battery-low:before": {
        "content": "\\ea45"
    },
    "icon-battery-high:before": {
        "content": "\\ea46"
    },
    "icon-zoom-outline:before": {
        "content": "\\ea47"
    },
    "icon-zoom-out-outline:before": {
        "content": "\\ea48"
    },
    "icon-zoom-in-outline:before": {
        "content": "\\ea49"
    },
    "icon-tag3:before": {
        "content": "\\ea4a"
    },
    "icon-tabs-outline:before": {
        "content": "\\ea4b"
    },
    "icon-pin-outline:before": {
        "content": "\\ea4c"
    },
    "icon-message-typing:before": {
        "content": "\\ea4d"
    },
    "icon-directions:before": {
        "content": "\\ea4e"
    },
    "icon-battery-full3:before": {
        "content": "\\ea4f"
    },
    "icon-battery-charge:before": {
        "content": "\\ea50"
    },
    "icon-pipette:before": {
        "content": "\\ea51"
    },
    "icon-pencil4:before": {
        "content": "\\ea52"
    },
    "icon-folder4:before": {
        "content": "\\ea53"
    },
    "icon-folder-delete:before": {
        "content": "\\ea54"
    },
    "icon-folder-add2:before": {
        "content": "\\ea55"
    },
    "icon-edit2:before": {
        "content": "\\ea56"
    },
    "icon-document:before": {
        "content": "\\ea57"
    },
    "icon-document-delete:before": {
        "content": "\\ea58"
    },
    "icon-document-add:before": {
        "content": "\\ea59"
    },
    "icon-brush:before": {
        "content": "\\ea5a"
    },
    "icon-thumbs-up2:before": {
        "content": "\\ea5b"
    },
    "icon-thumbs-down2:before": {
        "content": "\\ea5c"
    },
    "icon-pen2:before": {
        "content": "\\ea5d"
    },
    "icon-sort-numerically-outline:before": {
        "content": "\\ea5e"
    },
    "icon-sort-alphabetically-outline:before": {
        "content": "\\ea5f"
    },
    "icon-social-last-fm-circular:before": {
        "content": "\\ea60"
    },
    "icon-social-github-circular:before": {
        "content": "\\ea61"
    },
    "icon-compass3:before": {
        "content": "\\ea62"
    },
    "icon-bookmark4:before": {
        "content": "\\ea63"
    },
    "icon-input-checked-outline:before": {
        "content": "\\ea64"
    },
    "icon-code-outline:before": {
        "content": "\\ea65"
    },
    "icon-calender-outline:before": {
        "content": "\\ea66"
    },
    "icon-business-card:before": {
        "content": "\\ea67"
    },
    "icon-arrow-up4:before": {
        "content": "\\ea68"
    },
    "icon-arrow-sync-outline:before": {
        "content": "\\ea69"
    },
    "icon-arrow-right4:before": {
        "content": "\\ea6a"
    },
    "icon-arrow-repeat-outline:before": {
        "content": "\\ea6b"
    },
    "icon-arrow-loop-outline:before": {
        "content": "\\ea6c"
    },
    "icon-arrow-left4:before": {
        "content": "\\ea6d"
    },
    "icon-flow-switch:before": {
        "content": "\\ea6e"
    },
    "icon-flow-parallel:before": {
        "content": "\\ea6f"
    },
    "icon-flow-merge:before": {
        "content": "\\ea70"
    },
    "icon-document-text:before": {
        "content": "\\ea71"
    },
    "icon-clipboard4:before": {
        "content": "\\ea72"
    },
    "icon-calculator4:before": {
        "content": "\\ea73"
    },
    "icon-arrow-minimise-outline:before": {
        "content": "\\ea74"
    },
    "icon-arrow-maximise-outline:before": {
        "content": "\\ea75"
    },
    "icon-arrow-down4:before": {
        "content": "\\ea76"
    },
    "icon-gift3:before": {
        "content": "\\ea77"
    },
    "icon-film3:before": {
        "content": "\\ea78"
    },
    "icon-database3:before": {
        "content": "\\ea79"
    },
    "icon-bell3:before": {
        "content": "\\ea7a"
    },
    "icon-anchor-outline:before": {
        "content": "\\ea7b"
    },
    "icon-adjust-contrast:before": {
        "content": "\\ea7c"
    },
    "icon-world-outline:before": {
        "content": "\\ea7d"
    },
    "icon-shopping-bag2:before": {
        "content": "\\ea7e"
    },
    "icon-power-outline:before": {
        "content": "\\ea7f"
    },
    "icon-notes-outline:before": {
        "content": "\\ea80"
    },
    "icon-device-tablet:before": {
        "content": "\\ea81"
    },
    "icon-device-phone:before": {
        "content": "\\ea82"
    },
    "icon-device-laptop:before": {
        "content": "\\ea83"
    },
    "icon-device-desktop:before": {
        "content": "\\ea84"
    },
    "icon-briefcase3:before": {
        "content": "\\ea85"
    },
    "icon-stopwatch3:before": {
        "content": "\\ea86"
    },
    "icon-spanner-outline:before": {
        "content": "\\ea87"
    },
    "icon-puzzle-outline:before": {
        "content": "\\ea88"
    },
    "icon-printer3:before": {
        "content": "\\ea89"
    },
    "icon-pi-outline:before": {
        "content": "\\ea8a"
    },
    "icon-lightbulb:before": {
        "content": "\\ea8b"
    },
    "icon-flag-outline:before": {
        "content": "\\ea8c"
    },
    "icon-contacts:before": {
        "content": "\\ea8d"
    },
    "icon-archive3:before": {
        "content": "\\ea8e"
    },
    "icon-weather-stormy:before": {
        "content": "\\ea8f"
    },
    "icon-weather-shower:before": {
        "content": "\\ea90"
    },
    "icon-weather-partly-sunny:before": {
        "content": "\\ea91"
    },
    "icon-weather-downpour:before": {
        "content": "\\ea92"
    },
    "icon-weather-cloudy:before": {
        "content": "\\ea93"
    },
    "icon-plane-outline:before": {
        "content": "\\ea94"
    },
    "icon-phone-outline:before": {
        "content": "\\ea95"
    },
    "icon-microphone-outline:before": {
        "content": "\\ea96"
    },
    "icon-weather-windy:before": {
        "content": "\\ea97"
    },
    "icon-weather-windy-cloudy:before": {
        "content": "\\ea98"
    },
    "icon-weather-sunny:before": {
        "content": "\\ea99"
    },
    "icon-weather-snow:before": {
        "content": "\\ea9a"
    },
    "icon-weather-night:before": {
        "content": "\\ea9b"
    },
    "icon-media-stop-outline:before": {
        "content": "\\ea9c"
    },
    "icon-media-rewind-outline:before": {
        "content": "\\ea9d"
    },
    "icon-media-record-outline:before": {
        "content": "\\ea9e"
    },
    "icon-media-play-outline:before": {
        "content": "\\ea9f"
    },
    "icon-media-fast-forward-outline:before": {
        "content": "\\eaa0"
    },
    "icon-media-eject-outline:before": {
        "content": "\\eaa1"
    },
    "icon-wine:before": {
        "content": "\\eaa2"
    },
    "icon-waves-outline:before": {
        "content": "\\eaa3"
    },
    "icon-ticket3:before": {
        "content": "\\eaa4"
    },
    "icon-tags2:before": {
        "content": "\\eaa5"
    },
    "icon-plug2:before": {
        "content": "\\eaa6"
    },
    "icon-headphones3:before": {
        "content": "\\eaa7"
    },
    "icon-credit-card3:before": {
        "content": "\\eaa8"
    },
    "icon-coffee3:before": {
        "content": "\\eaa9"
    },
    "icon-book5:before": {
        "content": "\\eaaa"
    },
    "icon-beer2:before": {
        "content": "\\eaab"
    },
    "icon-volume2:before": {
        "content": "\\eaac"
    },
    "icon-volume-up2:before": {
        "content": "\\eaad"
    },
    "icon-volume-mute3:before": {
        "content": "\\eaae"
    },
    "icon-volume-down2:before": {
        "content": "\\eaaf"
    },
    "icon-social-vimeo-circular:before": {
        "content": "\\eab0"
    },
    "icon-social-twitter-circular:before": {
        "content": "\\eab1"
    },
    "icon-social-pinterest-circular:before": {
        "content": "\\eab2"
    },
    "icon-social-linkedin-circular:before": {
        "content": "\\eab3"
    },
    "icon-social-facebook-circular:before": {
        "content": "\\eab4"
    },
    "icon-social-dribbble-circular:before": {
        "content": "\\eab5"
    },
    "icon-tree3:before": {
        "content": "\\eab6"
    },
    "icon-thermometer2:before": {
        "content": "\\eab7"
    },
    "icon-social-tumbler-circular:before": {
        "content": "\\eab8"
    },
    "icon-social-skype-outline:before": {
        "content": "\\eab9"
    },
    "icon-social-flickr-circular:before": {
        "content": "\\eaba"
    },
    "icon-social-at-circular:before": {
        "content": "\\eabb"
    },
    "icon-shopping-cart2:before": {
        "content": "\\eabc"
    },
    "icon-messages:before": {
        "content": "\\eabd"
    },
    "icon-leaf3:before": {
        "content": "\\eabe"
    },
    "icon-feather:before": {
        "content": "\\eabf"
    },
    "icon-heart5:before": {
        "content": "\\eac0"
    },
    "icon-cloud4:before": {
        "content": "\\eac1"
    },
    "icon-star4:before": {
        "content": "\\eac2"
    },
    "icon-tv3:before": {
        "content": "\\eac3"
    },
    "icon-sound:before": {
        "content": "\\eac4"
    },
    "icon-video2:before": {
        "content": "\\eac5"
    },
    "icon-trash3:before": {
        "content": "\\eac6"
    },
    "icon-user6:before": {
        "content": "\\eac7"
    },
    "icon-key4:before": {
        "content": "\\eac8"
    },
    "icon-search4:before": {
        "content": "\\eac9"
    },
    "icon-settings2:before": {
        "content": "\\eaca"
    },
    "icon-camera5:before": {
        "content": "\\eacb"
    },
    "icon-tag4:before": {
        "content": "\\eacc"
    },
    "icon-lock4:before": {
        "content": "\\eacd"
    },
    "icon-bulb:before": {
        "content": "\\eace"
    },
    "icon-pen3:before": {
        "content": "\\eacf"
    },
    "icon-diamond3:before": {
        "content": "\\ead0"
    },
    "icon-display2:before": {
        "content": "\\ead1"
    },
    "icon-location4:before": {
        "content": "\\ead2"
    },
    "icon-eye4:before": {
        "content": "\\ead3"
    },
    "icon-bubble3:before": {
        "content": "\\ead4"
    },
    "icon-stack3:before": {
        "content": "\\ead5"
    },
    "icon-cup:before": {
        "content": "\\ead6"
    },
    "icon-phone5:before": {
        "content": "\\ead7"
    },
    "icon-news2:before": {
        "content": "\\ead8"
    },
    "icon-mail6:before": {
        "content": "\\ead9"
    },
    "icon-like:before": {
        "content": "\\eada"
    },
    "icon-photo2:before": {
        "content": "\\eadb"
    },
    "icon-note:before": {
        "content": "\\eadc"
    },
    "icon-clock4:before": {
        "content": "\\eadd"
    },
    "icon-paperplane:before": {
        "content": "\\eade"
    },
    "icon-params:before": {
        "content": "\\eadf"
    },
    "icon-banknote:before": {
        "content": "\\eae0"
    },
    "icon-data:before": {
        "content": "\\eae1"
    },
    "icon-music3:before": {
        "content": "\\eae2"
    },
    "icon-megaphone:before": {
        "content": "\\eae3"
    },
    "icon-study:before": {
        "content": "\\eae4"
    },
    "icon-lab3:before": {
        "content": "\\eae5"
    },
    "icon-food:before": {
        "content": "\\eae6"
    },
    "icon-t-shirt:before": {
        "content": "\\eae7"
    },
    "icon-fire3:before": {
        "content": "\\eae8"
    },
    "icon-clip:before": {
        "content": "\\eae9"
    },
    "icon-shop:before": {
        "content": "\\eaea"
    },
    "icon-calendar4:before": {
        "content": "\\eaeb"
    },
    "icon-wallet:before": {
        "content": "\\eaec"
    },
    "icon-vynil:before": {
        "content": "\\eaed"
    },
    "icon-truck3:before": {
        "content": "\\eaee"
    },
    "icon-world2:before": {
        "content": "\\eaef"
    },
    "icon-number:before": {
        "content": "\\eaf0"
    },
    "icon-number2:before": {
        "content": "\\eaf1"
    },
    "icon-number3:before": {
        "content": "\\eaf2"
    },
    "icon-number4:before": {
        "content": "\\eaf3"
    },
    "icon-number5:before": {
        "content": "\\eaf4"
    },
    "icon-number6:before": {
        "content": "\\eaf5"
    },
    "icon-number7:before": {
        "content": "\\eaf6"
    },
    "icon-number8:before": {
        "content": "\\eaf7"
    },
    "icon-number9:before": {
        "content": "\\eaf8"
    },
    "icon-number10:before": {
        "content": "\\eaf9"
    },
    "icon-number11:before": {
        "content": "\\eafa"
    },
    "icon-number12:before": {
        "content": "\\eafb"
    },
    "icon-number13:before": {
        "content": "\\eafc"
    },
    "icon-number14:before": {
        "content": "\\eafd"
    },
    "icon-number15:before": {
        "content": "\\eafe"
    },
    "icon-number16:before": {
        "content": "\\eaff"
    },
    "icon-number17:before": {
        "content": "\\eb00"
    },
    "icon-number18:before": {
        "content": "\\eb01"
    },
    "icon-number19:before": {
        "content": "\\eb02"
    },
    "icon-number20:before": {
        "content": "\\eb03"
    },
    "icon-quote:before": {
        "content": "\\eb04"
    },
    "icon-quote2:before": {
        "content": "\\eb05"
    },
    "icon-tag5:before": {
        "content": "\\eb06"
    },
    "icon-tag6:before": {
        "content": "\\eb07"
    },
    "icon-link4:before": {
        "content": "\\eb08"
    },
    "icon-link5:before": {
        "content": "\\eb09"
    },
    "icon-cabinet:before": {
        "content": "\\eb0a"
    },
    "icon-cabinet2:before": {
        "content": "\\eb0b"
    },
    "icon-calendar5:before": {
        "content": "\\eb0c"
    },
    "icon-calendar6:before": {
        "content": "\\eb0d"
    },
    "icon-calendar7:before": {
        "content": "\\eb0e"
    },
    "icon-file3:before": {
        "content": "\\eb0f"
    },
    "icon-file4:before": {
        "content": "\\eb10"
    },
    "icon-file5:before": {
        "content": "\\eb11"
    },
    "icon-files2:before": {
        "content": "\\eb12"
    },
    "icon-phone6:before": {
        "content": "\\eb13"
    },
    "icon-tablet4:before": {
        "content": "\\eb14"
    },
    "icon-window2:before": {
        "content": "\\eb15"
    },
    "icon-monitor:before": {
        "content": "\\eb16"
    },
    "icon-ipod:before": {
        "content": "\\eb17"
    },
    "icon-tv4:before": {
        "content": "\\eb18"
    },
    "icon-camera6:before": {
        "content": "\\eb19"
    },
    "icon-camera7:before": {
        "content": "\\eb1a"
    },
    "icon-camera8:before": {
        "content": "\\eb1b"
    },
    "icon-film4:before": {
        "content": "\\eb1c"
    },
    "icon-film5:before": {
        "content": "\\eb1d"
    },
    "icon-film6:before": {
        "content": "\\eb1e"
    },
    "icon-microphone4:before": {
        "content": "\\eb1f"
    },
    "icon-microphone5:before": {
        "content": "\\eb20"
    },
    "icon-microphone6:before": {
        "content": "\\eb21"
    },
    "icon-drink2:before": {
        "content": "\\eb22"
    },
    "icon-drink3:before": {
        "content": "\\eb23"
    },
    "icon-drink4:before": {
        "content": "\\eb24"
    },
    "icon-drink5:before": {
        "content": "\\eb25"
    },
    "icon-coffee4:before": {
        "content": "\\eb26"
    },
    "icon-mug3:before": {
        "content": "\\eb27"
    },
    "icon-icecream:before": {
        "content": "\\eb28"
    },
    "icon-cake:before": {
        "content": "\\eb29"
    },
    "icon-inbox2:before": {
        "content": "\\eb2a"
    },
    "icon-download6:before": {
        "content": "\\eb2b"
    },
    "icon-upload5:before": {
        "content": "\\eb2c"
    },
    "icon-inbox3:before": {
        "content": "\\eb2d"
    },
    "icon-checkmark4:before": {
        "content": "\\eb2e"
    },
    "icon-checkmark5:before": {
        "content": "\\eb2f"
    },
    "icon-cancel2:before": {
        "content": "\\eb30"
    },
    "icon-cancel3:before": {
        "content": "\\eb31"
    },
    "icon-plus4:before": {
        "content": "\\eb32"
    },
    "icon-plus5:before": {
        "content": "\\eb33"
    },
    "icon-minus4:before": {
        "content": "\\eb34"
    },
    "icon-minus5:before": {
        "content": "\\eb35"
    },
    "icon-notice:before": {
        "content": "\\eb36"
    },
    "icon-notice2:before": {
        "content": "\\eb37"
    },
    "icon-cog4:before": {
        "content": "\\eb38"
    },
    "icon-cogs3:before": {
        "content": "\\eb39"
    },
    "icon-cog5:before": {
        "content": "\\eb3a"
    },
    "icon-warning4:before": {
        "content": "\\eb3b"
    },
    "icon-health2:before": {
        "content": "\\eb3c"
    },
    "icon-suitcase2:before": {
        "content": "\\eb3d"
    },
    "icon-suitcase3:before": {
        "content": "\\eb3e"
    },
    "icon-suitcase4:before": {
        "content": "\\eb3f"
    },
    "icon-picture:before": {
        "content": "\\eb40"
    },
    "icon-pictures:before": {
        "content": "\\eb41"
    },
    "icon-pictures2:before": {
        "content": "\\eb42"
    },
    "icon-android3:before": {
        "content": "\\eb43"
    },
    "icon-marvin:before": {
        "content": "\\eb44"
    },
    "icon-pacman2:before": {
        "content": "\\eb45"
    },
    "icon-cassette:before": {
        "content": "\\eb46"
    },
    "icon-watch2:before": {
        "content": "\\eb47"
    },
    "icon-chronometer:before": {
        "content": "\\eb48"
    },
    "icon-watch3:before": {
        "content": "\\eb49"
    },
    "icon-alarmclock:before": {
        "content": "\\eb4a"
    },
    "icon-time2:before": {
        "content": "\\eb4b"
    },
    "icon-time3:before": {
        "content": "\\eb4c"
    },
    "icon-headphones4:before": {
        "content": "\\eb4d"
    },
    "icon-wallet2:before": {
        "content": "\\eb4e"
    },
    "icon-checkmark6:before": {
        "content": "\\eb4f"
    },
    "icon-cancel4:before": {
        "content": "\\eb50"
    },
    "icon-eye5:before": {
        "content": "\\eb51"
    },
    "icon-position:before": {
        "content": "\\eb52"
    },
    "icon-sitemap2:before": {
        "content": "\\eb53"
    },
    "icon-sitemap3:before": {
        "content": "\\eb54"
    },
    "icon-cloud5:before": {
        "content": "\\eb55"
    },
    "icon-upload6:before": {
        "content": "\\eb56"
    },
    "icon-chart2:before": {
        "content": "\\eb57"
    },
    "icon-chart3:before": {
        "content": "\\eb58"
    },
    "icon-chart4:before": {
        "content": "\\eb59"
    },
    "icon-chart5:before": {
        "content": "\\eb5a"
    },
    "icon-chart6:before": {
        "content": "\\eb5b"
    },
    "icon-chart7:before": {
        "content": "\\eb5c"
    },
    "icon-location5:before": {
        "content": "\\eb5d"
    },
    "icon-download7:before": {
        "content": "\\eb5e"
    },
    "icon-basket:before": {
        "content": "\\eb5f"
    },
    "icon-folder5:before": {
        "content": "\\eb60"
    },
    "icon-gamepad2:before": {
        "content": "\\eb61"
    },
    "icon-alarm2:before": {
        "content": "\\eb62"
    },
    "icon-alarm-cancel:before": {
        "content": "\\eb63"
    },
    "icon-phone7:before": {
        "content": "\\eb64"
    },
    "icon-phone8:before": {
        "content": "\\eb65"
    },
    "icon-image5:before": {
        "content": "\\eb66"
    },
    "icon-open:before": {
        "content": "\\eb67"
    },
    "icon-sale:before": {
        "content": "\\eb68"
    },
    "icon-direction:before": {
        "content": "\\eb69"
    },
    "icon-map5:before": {
        "content": "\\eb6a"
    },
    "icon-trashcan2:before": {
        "content": "\\eb6b"
    },
    "icon-vote:before": {
        "content": "\\eb6c"
    },
    "icon-graduate:before": {
        "content": "\\eb6d"
    },
    "icon-lab4:before": {
        "content": "\\eb6e"
    },
    "icon-tie:before": {
        "content": "\\eb6f"
    },
    "icon-football:before": {
        "content": "\\eb70"
    },
    "icon-eightball:before": {
        "content": "\\eb71"
    },
    "icon-bowling:before": {
        "content": "\\eb72"
    },
    "icon-bowlingpin:before": {
        "content": "\\eb73"
    },
    "icon-baseball:before": {
        "content": "\\eb74"
    },
    "icon-soccer:before": {
        "content": "\\eb75"
    },
    "icon-3dglasses:before": {
        "content": "\\eb76"
    },
    "icon-microwave:before": {
        "content": "\\eb77"
    },
    "icon-refrigerator:before": {
        "content": "\\eb78"
    },
    "icon-oven:before": {
        "content": "\\eb79"
    },
    "icon-washingmachine:before": {
        "content": "\\eb7a"
    },
    "icon-mouse:before": {
        "content": "\\eb7b"
    },
    "icon-smiley:before": {
        "content": "\\eb7c"
    },
    "icon-sad3:before": {
        "content": "\\eb7d"
    },
    "icon-mute2:before": {
        "content": "\\eb7e"
    },
    "icon-hand:before": {
        "content": "\\eb7f"
    },
    "icon-radio:before": {
        "content": "\\eb80"
    },
    "icon-satellite:before": {
        "content": "\\eb81"
    },
    "icon-medal:before": {
        "content": "\\eb82"
    },
    "icon-medal2:before": {
        "content": "\\eb83"
    },
    "icon-switch3:before": {
        "content": "\\eb84"
    },
    "icon-key5:before": {
        "content": "\\eb85"
    },
    "icon-cord:before": {
        "content": "\\eb86"
    },
    "icon-locked:before": {
        "content": "\\eb87"
    },
    "icon-unlocked4:before": {
        "content": "\\eb88"
    },
    "icon-locked2:before": {
        "content": "\\eb89"
    },
    "icon-unlocked5:before": {
        "content": "\\eb8a"
    },
    "icon-magnifier:before": {
        "content": "\\eb8b"
    },
    "icon-zoomin2:before": {
        "content": "\\eb8c"
    },
    "icon-zoomout2:before": {
        "content": "\\eb8d"
    },
    "icon-stack4:before": {
        "content": "\\eb8e"
    },
    "icon-stack5:before": {
        "content": "\\eb8f"
    },
    "icon-stack6:before": {
        "content": "\\eb90"
    },
    "icon-davidstar:before": {
        "content": "\\eb91"
    },
    "icon-cross3:before": {
        "content": "\\eb92"
    },
    "icon-moonandstar:before": {
        "content": "\\eb93"
    },
    "icon-transformers:before": {
        "content": "\\eb94"
    },
    "icon-batman:before": {
        "content": "\\eb95"
    },
    "icon-spaceinvaders:before": {
        "content": "\\eb96"
    },
    "icon-skeletor:before": {
        "content": "\\eb97"
    },
    "icon-lamp:before": {
        "content": "\\eb98"
    },
    "icon-lamp2:before": {
        "content": "\\eb99"
    },
    "icon-umbrella2:before": {
        "content": "\\eb9a"
    },
    "icon-streetlight:before": {
        "content": "\\eb9b"
    },
    "icon-bomb2:before": {
        "content": "\\eb9c"
    },
    "icon-archive4:before": {
        "content": "\\eb9d"
    },
    "icon-battery2:before": {
        "content": "\\eb9e"
    },
    "icon-battery3:before": {
        "content": "\\eb9f"
    },
    "icon-battery4:before": {
        "content": "\\eba0"
    },
    "icon-battery5:before": {
        "content": "\\eba1"
    },
    "icon-battery6:before": {
        "content": "\\eba2"
    },
    "icon-megaphone2:before": {
        "content": "\\eba3"
    },
    "icon-megaphone3:before": {
        "content": "\\eba4"
    },
    "icon-patch:before": {
        "content": "\\eba5"
    },
    "icon-pil:before": {
        "content": "\\eba6"
    },
    "icon-injection:before": {
        "content": "\\eba7"
    },
    "icon-thermometer3:before": {
        "content": "\\eba8"
    },
    "icon-lamp3:before": {
        "content": "\\eba9"
    },
    "icon-lamp4:before": {
        "content": "\\ebaa"
    },
    "icon-lamp5:before": {
        "content": "\\ebab"
    },
    "icon-cube3:before": {
        "content": "\\ebac"
    },
    "icon-box2:before": {
        "content": "\\ebad"
    },
    "icon-box3:before": {
        "content": "\\ebae"
    },
    "icon-diamond4:before": {
        "content": "\\ebaf"
    },
    "icon-bag2:before": {
        "content": "\\ebb0"
    },
    "icon-moneybag:before": {
        "content": "\\ebb1"
    },
    "icon-grid2:before": {
        "content": "\\ebb2"
    },
    "icon-grid3:before": {
        "content": "\\ebb3"
    },
    "icon-list4:before": {
        "content": "\\ebb4"
    },
    "icon-list5:before": {
        "content": "\\ebb5"
    },
    "icon-ruler:before": {
        "content": "\\ebb6"
    },
    "icon-ruler2:before": {
        "content": "\\ebb7"
    },
    "icon-layout:before": {
        "content": "\\ebb8"
    },
    "icon-layout2:before": {
        "content": "\\ebb9"
    },
    "icon-layout3:before": {
        "content": "\\ebba"
    },
    "icon-layout4:before": {
        "content": "\\ebbb"
    },
    "icon-layout5:before": {
        "content": "\\ebbc"
    },
    "icon-layout6:before": {
        "content": "\\ebbd"
    },
    "icon-layout7:before": {
        "content": "\\ebbe"
    },
    "icon-layout8:before": {
        "content": "\\ebbf"
    },
    "icon-layout9:before": {
        "content": "\\ebc0"
    },
    "icon-layout10:before": {
        "content": "\\ebc1"
    },
    "icon-layout11:before": {
        "content": "\\ebc2"
    },
    "icon-layout12:before": {
        "content": "\\ebc3"
    },
    "icon-layout13:before": {
        "content": "\\ebc4"
    },
    "icon-layout14:before": {
        "content": "\\ebc5"
    },
    "icon-tools:before": {
        "content": "\\ebc6"
    },
    "icon-screwdriver:before": {
        "content": "\\ebc7"
    },
    "icon-paint:before": {
        "content": "\\ebc8"
    },
    "icon-hammer3:before": {
        "content": "\\ebc9"
    },
    "icon-brush2:before": {
        "content": "\\ebca"
    },
    "icon-pen4:before": {
        "content": "\\ebcb"
    },
    "icon-chat2:before": {
        "content": "\\ebcc"
    },
    "icon-comments2:before": {
        "content": "\\ebcd"
    },
    "icon-chat3:before": {
        "content": "\\ebce"
    },
    "icon-chat4:before": {
        "content": "\\ebcf"
    },
    "icon-volume3:before": {
        "content": "\\ebd0"
    },
    "icon-volume4:before": {
        "content": "\\ebd1"
    },
    "icon-volume5:before": {
        "content": "\\ebd2"
    },
    "icon-equalizer3:before": {
        "content": "\\ebd3"
    },
    "icon-resize:before": {
        "content": "\\ebd4"
    },
    "icon-resize2:before": {
        "content": "\\ebd5"
    },
    "icon-stretch:before": {
        "content": "\\ebd6"
    },
    "icon-narrow:before": {
        "content": "\\ebd7"
    },
    "icon-resize3:before": {
        "content": "\\ebd8"
    },
    "icon-download8:before": {
        "content": "\\ebd9"
    },
    "icon-calculator5:before": {
        "content": "\\ebda"
    },
    "icon-library2:before": {
        "content": "\\ebdb"
    },
    "icon-auction:before": {
        "content": "\\ebdc"
    },
    "icon-justice:before": {
        "content": "\\ebdd"
    },
    "icon-stats:before": {
        "content": "\\ebde"
    },
    "icon-stats2:before": {
        "content": "\\ebdf"
    },
    "icon-attachment3:before": {
        "content": "\\ebe0"
    },
    "icon-hourglass2:before": {
        "content": "\\ebe1"
    },
    "icon-abacus:before": {
        "content": "\\ebe2"
    },
    "icon-pencil5:before": {
        "content": "\\ebe3"
    },
    "icon-pen5:before": {
        "content": "\\ebe4"
    },
    "icon-pin2:before": {
        "content": "\\ebe5"
    },
    "icon-pin3:before": {
        "content": "\\ebe6"
    },
    "icon-discout:before": {
        "content": "\\ebe7"
    },
    "icon-edit3:before": {
        "content": "\\ebe8"
    },
    "icon-scissors4:before": {
        "content": "\\ebe9"
    },
    "icon-profile2:before": {
        "content": "\\ebea"
    },
    "icon-profile3:before": {
        "content": "\\ebeb"
    },
    "icon-profile4:before": {
        "content": "\\ebec"
    },
    "icon-rotate:before": {
        "content": "\\ebed"
    },
    "icon-rotate2:before": {
        "content": "\\ebee"
    },
    "icon-reply3:before": {
        "content": "\\ebef"
    },
    "icon-forward4:before": {
        "content": "\\ebf0"
    },
    "icon-retweet2:before": {
        "content": "\\ebf1"
    },
    "icon-shuffle2:before": {
        "content": "\\ebf2"
    },
    "icon-loop3:before": {
        "content": "\\ebf3"
    },
    "icon-crop4:before": {
        "content": "\\ebf4"
    },
    "icon-square2:before": {
        "content": "\\ebf5"
    },
    "icon-square3:before": {
        "content": "\\ebf6"
    },
    "icon-circle2:before": {
        "content": "\\ebf7"
    },
    "icon-dollar2:before": {
        "content": "\\ebf8"
    },
    "icon-dollar3:before": {
        "content": "\\ebf9"
    },
    "icon-coins:before": {
        "content": "\\ebfa"
    },
    "icon-pig:before": {
        "content": "\\ebfb"
    },
    "icon-bookmark5:before": {
        "content": "\\ebfc"
    },
    "icon-bookmark6:before": {
        "content": "\\ebfd"
    },
    "icon-addressbook:before": {
        "content": "\\ebfe"
    },
    "icon-addressbook2:before": {
        "content": "\\ebff"
    },
    "icon-safe:before": {
        "content": "\\ec00"
    },
    "icon-envelope3:before": {
        "content": "\\ec01"
    },
    "icon-envelope4:before": {
        "content": "\\ec02"
    },
    "icon-radioactive:before": {
        "content": "\\ec03"
    },
    "icon-music4:before": {
        "content": "\\ec04"
    },
    "icon-presentation:before": {
        "content": "\\ec05"
    },
    "icon-male2:before": {
        "content": "\\ec06"
    },
    "icon-female2:before": {
        "content": "\\ec07"
    },
    "icon-aids:before": {
        "content": "\\ec08"
    },
    "icon-heart6:before": {
        "content": "\\ec09"
    },
    "icon-info4:before": {
        "content": "\\ec0a"
    },
    "icon-info5:before": {
        "content": "\\ec0b"
    },
    "icon-piano:before": {
        "content": "\\ec0c"
    },
    "icon-rain:before": {
        "content": "\\ec0d"
    },
    "icon-snow:before": {
        "content": "\\ec0e"
    },
    "icon-lightning:before": {
        "content": "\\ec0f"
    },
    "icon-sun3:before": {
        "content": "\\ec10"
    },
    "icon-moon:before": {
        "content": "\\ec11"
    },
    "icon-cloudy:before": {
        "content": "\\ec12"
    },
    "icon-cloudy2:before": {
        "content": "\\ec13"
    },
    "icon-car2:before": {
        "content": "\\ec14"
    },
    "icon-bike:before": {
        "content": "\\ec15"
    },
    "icon-truck4:before": {
        "content": "\\ec16"
    },
    "icon-bus2:before": {
        "content": "\\ec17"
    },
    "icon-bike2:before": {
        "content": "\\ec18"
    },
    "icon-plane3:before": {
        "content": "\\ec19"
    },
    "icon-paperplane2:before": {
        "content": "\\ec1a"
    },
    "icon-rocket3:before": {
        "content": "\\ec1b"
    },
    "icon-book6:before": {
        "content": "\\ec1c"
    },
    "icon-book7:before": {
        "content": "\\ec1d"
    },
    "icon-barcode3:before": {
        "content": "\\ec1e"
    },
    "icon-barcode4:before": {
        "content": "\\ec1f"
    },
    "icon-expand2:before": {
        "content": "\\ec20"
    },
    "icon-collapse:before": {
        "content": "\\ec21"
    },
    "icon-popout:before": {
        "content": "\\ec22"
    },
    "icon-popin:before": {
        "content": "\\ec23"
    },
    "icon-target2:before": {
        "content": "\\ec24"
    },
    "icon-badge:before": {
        "content": "\\ec25"
    },
    "icon-badge2:before": {
        "content": "\\ec26"
    },
    "icon-ticket4:before": {
        "content": "\\ec27"
    },
    "icon-ticket5:before": {
        "content": "\\ec28"
    },
    "icon-ticket6:before": {
        "content": "\\ec29"
    },
    "icon-microphone7:before": {
        "content": "\\ec2a"
    },
    "icon-cone:before": {
        "content": "\\ec2b"
    },
    "icon-blocked2:before": {
        "content": "\\ec2c"
    },
    "icon-stop3:before": {
        "content": "\\ec2d"
    },
    "icon-keyboard2:before": {
        "content": "\\ec2e"
    },
    "icon-keyboard3:before": {
        "content": "\\ec2f"
    },
    "icon-radio2:before": {
        "content": "\\ec30"
    },
    "icon-printer4:before": {
        "content": "\\ec31"
    },
    "icon-checked:before": {
        "content": "\\ec32"
    },
    "icon-error:before": {
        "content": "\\ec33"
    },
    "icon-add:before": {
        "content": "\\ec34"
    },
    "icon-minus6:before": {
        "content": "\\ec35"
    },
    "icon-alert:before": {
        "content": "\\ec36"
    },
    "icon-pictures3:before": {
        "content": "\\ec37"
    },
    "icon-atom2:before": {
        "content": "\\ec38"
    },
    "icon-eyedropper4:before": {
        "content": "\\ec39"
    },
    "icon-globe3:before": {
        "content": "\\ec3a"
    },
    "icon-globe4:before": {
        "content": "\\ec3b"
    },
    "icon-shipping:before": {
        "content": "\\ec3c"
    },
    "icon-yingyang:before": {
        "content": "\\ec3d"
    },
    "icon-compass4:before": {
        "content": "\\ec3e"
    },
    "icon-zip:before": {
        "content": "\\ec3f"
    },
    "icon-zip2:before": {
        "content": "\\ec40"
    },
    "icon-anchor3:before": {
        "content": "\\ec41"
    },
    "icon-lockedheart:before": {
        "content": "\\ec42"
    },
    "icon-magnet3:before": {
        "content": "\\ec43"
    },
    "icon-navigation:before": {
        "content": "\\ec44"
    },
    "icon-tags3:before": {
        "content": "\\ec45"
    },
    "icon-heart7:before": {
        "content": "\\ec46"
    },
    "icon-heart8:before": {
        "content": "\\ec47"
    },
    "icon-usb2:before": {
        "content": "\\ec48"
    },
    "icon-clipboard5:before": {
        "content": "\\ec49"
    },
    "icon-clipboard6:before": {
        "content": "\\ec4a"
    },
    "icon-clipboard7:before": {
        "content": "\\ec4b"
    },
    "icon-switch4:before": {
        "content": "\\ec4c"
    },
    "icon-ruler3:before": {
        "content": "\\ec4d"
    },
    "icon-mobile3:before": {
        "content": "\\e000"
    },
    "icon-laptop4:before": {
        "content": "\\e001"
    },
    "icon-desktop2:before": {
        "content": "\\e002"
    },
    "icon-tablet5:before": {
        "content": "\\e003"
    },
    "icon-phone9:before": {
        "content": "\\e004"
    },
    "icon-document2:before": {
        "content": "\\e005"
    },
    "icon-documents:before": {
        "content": "\\e006"
    },
    "icon-search5:before": {
        "content": "\\e007"
    },
    "icon-clipboard8:before": {
        "content": "\\e008"
    },
    "icon-newspaper3:before": {
        "content": "\\e009"
    },
    "icon-notebook:before": {
        "content": "\\e00a"
    },
    "icon-book-open:before": {
        "content": "\\e00b"
    },
    "icon-browser2:before": {
        "content": "\\e00c"
    },
    "icon-calendar8:before": {
        "content": "\\e00d"
    },
    "icon-presentation2:before": {
        "content": "\\e00e"
    },
    "icon-picture2:before": {
        "content": "\\e00f"
    },
    "icon-pictures4:before": {
        "content": "\\e010"
    },
    "icon-video3:before": {
        "content": "\\e011"
    },
    "icon-camera9:before": {
        "content": "\\e012"
    },
    "icon-printer5:before": {
        "content": "\\e013"
    },
    "icon-toolbox:before": {
        "content": "\\e014"
    },
    "icon-briefcase4:before": {
        "content": "\\e015"
    },
    "icon-wallet3:before": {
        "content": "\\e016"
    },
    "icon-gift4:before": {
        "content": "\\e017"
    },
    "icon-bargraph:before": {
        "content": "\\e018"
    },
    "icon-grid4:before": {
        "content": "\\e019"
    },
    "icon-expand3:before": {
        "content": "\\e01a"
    },
    "icon-focus:before": {
        "content": "\\e01b"
    },
    "icon-edit4:before": {
        "content": "\\e01c"
    },
    "icon-adjustments:before": {
        "content": "\\e01d"
    },
    "icon-ribbon:before": {
        "content": "\\e01e"
    },
    "icon-hourglass3:before": {
        "content": "\\e01f"
    },
    "icon-lock5:before": {
        "content": "\\e020"
    },
    "icon-megaphone4:before": {
        "content": "\\e021"
    },
    "icon-shield3:before": {
        "content": "\\e022"
    },
    "icon-trophy3:before": {
        "content": "\\e023"
    },
    "icon-flag5:before": {
        "content": "\\e024"
    },
    "icon-map6:before": {
        "content": "\\e025"
    },
    "icon-puzzle2:before": {
        "content": "\\e026"
    },
    "icon-basket2:before": {
        "content": "\\e027"
    },
    "icon-envelope5:before": {
        "content": "\\e028"
    },
    "icon-streetsign:before": {
        "content": "\\e029"
    },
    "icon-telescope:before": {
        "content": "\\e02a"
    },
    "icon-gears2:before": {
        "content": "\\e02b"
    },
    "icon-key6:before": {
        "content": "\\e02c"
    },
    "icon-paperclip3:before": {
        "content": "\\e02d"
    },
    "icon-attachment4:before": {
        "content": "\\e02e"
    },
    "icon-pricetags:before": {
        "content": "\\e02f"
    },
    "icon-lightbulb2:before": {
        "content": "\\e030"
    },
    "icon-layers:before": {
        "content": "\\e031"
    },
    "icon-pencil6:before": {
        "content": "\\e032"
    },
    "icon-tools2:before": {
        "content": "\\e033"
    },
    "icon-tools-2:before": {
        "content": "\\e034"
    },
    "icon-scissors5:before": {
        "content": "\\e035"
    },
    "icon-paintbrush:before": {
        "content": "\\e036"
    },
    "icon-magnifying-glass:before": {
        "content": "\\e037"
    },
    "icon-circle-compass:before": {
        "content": "\\e038"
    },
    "icon-linegraph:before": {
        "content": "\\e039"
    },
    "icon-mic2:before": {
        "content": "\\e03a"
    },
    "icon-strategy:before": {
        "content": "\\e03b"
    },
    "icon-beaker2:before": {
        "content": "\\e03c"
    },
    "icon-caution:before": {
        "content": "\\e03d"
    },
    "icon-recycle2:before": {
        "content": "\\e03e"
    },
    "icon-anchor4:before": {
        "content": "\\e03f"
    },
    "icon-profile-male:before": {
        "content": "\\e040"
    },
    "icon-profile-female:before": {
        "content": "\\e041"
    },
    "icon-bike3:before": {
        "content": "\\e042"
    },
    "icon-wine2:before": {
        "content": "\\e043"
    },
    "icon-hotairballoon:before": {
        "content": "\\e044"
    },
    "icon-globe5:before": {
        "content": "\\e045"
    },
    "icon-genius:before": {
        "content": "\\e046"
    },
    "icon-map-pin2:before": {
        "content": "\\e047"
    },
    "icon-dial:before": {
        "content": "\\e048"
    },
    "icon-chat5:before": {
        "content": "\\e049"
    },
    "icon-heart9:before": {
        "content": "\\e04a"
    },
    "icon-cloud6:before": {
        "content": "\\e04b"
    },
    "icon-upload7:before": {
        "content": "\\e04c"
    },
    "icon-download9:before": {
        "content": "\\e04d"
    },
    "icon-target3:before": {
        "content": "\\e04e"
    },
    "icon-hazardous:before": {
        "content": "\\e04f"
    },
    "icon-piechart:before": {
        "content": "\\e050"
    },
    "icon-speedometer:before": {
        "content": "\\e051"
    },
    "icon-global:before": {
        "content": "\\e052"
    },
    "icon-compass5:before": {
        "content": "\\e053"
    },
    "icon-lifesaver:before": {
        "content": "\\e054"
    },
    "icon-clock5:before": {
        "content": "\\e055"
    },
    "icon-aperture:before": {
        "content": "\\e056"
    },
    "icon-quote3:before": {
        "content": "\\e057"
    },
    "icon-scope:before": {
        "content": "\\e058"
    },
    "icon-alarmclock2:before": {
        "content": "\\e059"
    },
    "icon-refresh4:before": {
        "content": "\\e05a"
    },
    "icon-happy3:before": {
        "content": "\\e05b"
    },
    "icon-sad4:before": {
        "content": "\\e05c"
    },
    "icon-facebook3:before": {
        "content": "\\e05d"
    },
    "icon-twitter3:before": {
        "content": "\\e05e"
    },
    "icon-googleplus:before": {
        "content": "\\e05f"
    },
    "icon-rss4:before": {
        "content": "\\e060"
    },
    "icon-tumblr3:before": {
        "content": "\\e061"
    },
    "icon-linkedin3:before": {
        "content": "\\e062"
    },
    "icon-dribbble3:before": {
        "content": "\\e063"
    },
    "icon-facebook4:before": {
        "content": "\\ec4e"
    },
    "icon-twitter-old:before": {
        "content": "\\ec4f"
    },
    "icon-share4:before": {
        "content": "\\ec50"
    },
    "icon-feed3:before": {
        "content": "\\ec51"
    },
    "icon-bird:before": {
        "content": "\\ec52"
    },
    "icon-chat6:before": {
        "content": "\\ec53"
    },
    "icon-envelope6:before": {
        "content": "\\ec54"
    },
    "icon-envelope7:before": {
        "content": "\\ec55"
    },
    "icon-phone10:before": {
        "content": "\\ec56"
    },
    "icon-phone11:before": {
        "content": "\\ec57"
    },
    "icon-phone12:before": {
        "content": "\\ec58"
    },
    "icon-mobile4:before": {
        "content": "\\ec59"
    },
    "icon-ipod2:before": {
        "content": "\\ec5a"
    },
    "icon-monitor2:before": {
        "content": "\\ec5b"
    },
    "icon-laptop5:before": {
        "content": "\\ec5c"
    },
    "icon-modem:before": {
        "content": "\\ec5d"
    },
    "icon-speaker:before": {
        "content": "\\ec5e"
    },
    "icon-window3:before": {
        "content": "\\ec5f"
    },
    "icon-server2:before": {
        "content": "\\ec60"
    },
    "icon-hdd:before": {
        "content": "\\ec61"
    },
    "icon-keyboard4:before": {
        "content": "\\ec62"
    },
    "icon-mouse2:before": {
        "content": "\\ec63"
    },
    "icon-cd:before": {
        "content": "\\ec64"
    },
    "icon-floppy:before": {
        "content": "\\ec65"
    },
    "icon-hardware:before": {
        "content": "\\ec66"
    },
    "icon-usb3:before": {
        "content": "\\ec67"
    },
    "icon-cord2:before": {
        "content": "\\ec68"
    },
    "icon-socket:before": {
        "content": "\\ec69"
    },
    "icon-socket2:before": {
        "content": "\\ec6a"
    },
    "icon-socket3:before": {
        "content": "\\ec6b"
    },
    "icon-printer6:before": {
        "content": "\\ec6c"
    },
    "icon-camera10:before": {
        "content": "\\ec6d"
    },
    "icon-pictures5:before": {
        "content": "\\ec6e"
    },
    "icon-eye6:before": {
        "content": "\\ec6f"
    },
    "icon-uniEC70:before": {
        "content": "\\ec70"
    },
    "icon-film7:before": {
        "content": "\\ec71"
    },
    "icon-camera11:before": {
        "content": "\\ec72"
    },
    "icon-movie:before": {
        "content": "\\ec73"
    },
    "icon-tv5:before": {
        "content": "\\ec74"
    },
    "icon-camera12:before": {
        "content": "\\ec75"
    },
    "icon-camera13:before": {
        "content": "\\ec76"
    },
    "icon-volume6:before": {
        "content": "\\ec77"
    },
    "icon-music5:before": {
        "content": "\\ec78"
    },
    "icon-microphone8:before": {
        "content": "\\ec79"
    },
    "icon-radio3:before": {
        "content": "\\ec7a"
    },
    "icon-ipod3:before": {
        "content": "\\ec7b"
    },
    "icon-headphone:before": {
        "content": "\\ec7c"
    },
    "icon-cassette2:before": {
        "content": "\\ec7d"
    },
    "icon-broadcast:before": {
        "content": "\\ec7e"
    },
    "icon-broadcast2:before": {
        "content": "\\ec7f"
    },
    "icon-calculator6:before": {
        "content": "\\ec80"
    },
    "icon-gamepad3:before": {
        "content": "\\ec81"
    },
    "icon-gamepad4:before": {
        "content": "\\ec82"
    },
    "icon-cog6:before": {
        "content": "\\ec83"
    },
    "icon-shield4:before": {
        "content": "\\ec84"
    },
    "icon-skull:before": {
        "content": "\\ec85"
    },
    "icon-bug3:before": {
        "content": "\\ec86"
    },
    "icon-mine:before": {
        "content": "\\ec87"
    },
    "icon-earth2:before": {
        "content": "\\ec88"
    },
    "icon-globe6:before": {
        "content": "\\ec89"
    },
    "icon-planet:before": {
        "content": "\\ec8a"
    },
    "icon-battery7:before": {
        "content": "\\ec8b"
    },
    "icon-battery-low2:before": {
        "content": "\\ec8c"
    },
    "icon-battery8:before": {
        "content": "\\ec8d"
    },
    "icon-battery-full4:before": {
        "content": "\\ec8e"
    },
    "icon-folder6:before": {
        "content": "\\ec8f"
    },
    "icon-search6:before": {
        "content": "\\ec90"
    },
    "icon-zoomout3:before": {
        "content": "\\ec91"
    },
    "icon-zoomin3:before": {
        "content": "\\ec92"
    },
    "icon-binocular:before": {
        "content": "\\ec93"
    },
    "icon-location6:before": {
        "content": "\\ec94"
    },
    "icon-pin4:before": {
        "content": "\\ec95"
    },
    "icon-file6:before": {
        "content": "\\ec96"
    },
    "icon-tag7:before": {
        "content": "\\ec97"
    },
    "icon-quote4:before": {
        "content": "\\ec98"
    },
    "icon-attachment5:before": {
        "content": "\\ec99"
    },
    "icon-bookmark7:before": {
        "content": "\\ec9a"
    },
    "icon-bookmark8:before": {
        "content": "\\ec9b"
    },
    "icon-newspaper4:before": {
        "content": "\\ec9c"
    },
    "icon-notebook2:before": {
        "content": "\\ec9d"
    },
    "icon-addressbook3:before": {
        "content": "\\ec9e"
    },
    "icon-clipboard9:before": {
        "content": "\\ec9f"
    },
    "icon-clipboard10:before": {
        "content": "\\eca0"
    },
    "icon-board:before": {
        "content": "\\eca1"
    },
    "icon-pencil7:before": {
        "content": "\\eca2"
    },
    "icon-pen6:before": {
        "content": "\\eca3"
    },
    "icon-user7:before": {
        "content": "\\eca4"
    },
    "icon-user8:before": {
        "content": "\\eca5"
    },
    "icon-user9:before": {
        "content": "\\eca6"
    },
    "icon-trashcan3:before": {
        "content": "\\eca7"
    },
    "icon-cart2:before": {
        "content": "\\eca8"
    },
    "icon-bag3:before": {
        "content": "\\eca9"
    },
    "icon-suitcase5:before": {
        "content": "\\ecaa"
    },
    "icon-card:before": {
        "content": "\\ecab"
    },
    "icon-book8:before": {
        "content": "\\ecac"
    },
    "icon-gift5:before": {
        "content": "\\ecad"
    },
    "icon-lamp6:before": {
        "content": "\\ecae"
    },
    "icon-settings3:before": {
        "content": "\\ecaf"
    },
    "icon-support4:before": {
        "content": "\\ecb0"
    },
    "icon-medicine:before": {
        "content": "\\ecb1"
    },
    "icon-cone2:before": {
        "content": "\\ecb2"
    },
    "icon-locked3:before": {
        "content": "\\ecb3"
    },
    "icon-unlocked6:before": {
        "content": "\\ecb4"
    },
    "icon-key7:before": {
        "content": "\\ecb5"
    },
    "icon-info6:before": {
        "content": "\\ecb6"
    },
    "icon-clock6:before": {
        "content": "\\ecb7"
    },
    "icon-timer:before": {
        "content": "\\ecb8"
    },
    "icon-food2:before": {
        "content": "\\ecb9"
    },
    "icon-drink6:before": {
        "content": "\\ecba"
    },
    "icon-mug4:before": {
        "content": "\\ecbb"
    },
    "icon-cup2:before": {
        "content": "\\ecbc"
    },
    "icon-drink7:before": {
        "content": "\\ecbd"
    },
    "icon-mug5:before": {
        "content": "\\ecbe"
    },
    "icon-lollipop:before": {
        "content": "\\ecbf"
    },
    "icon-lab5:before": {
        "content": "\\ecc0"
    },
    "icon-puzzle3:before": {
        "content": "\\ecc1"
    },
    "icon-flag6:before": {
        "content": "\\ecc2"
    },
    "icon-star5:before": {
        "content": "\\ecc3"
    },
    "icon-heart10:before": {
        "content": "\\ecc4"
    },
    "icon-badge3:before": {
        "content": "\\ecc5"
    },
    "icon-cup3:before": {
        "content": "\\ecc6"
    },
    "icon-scissors6:before": {
        "content": "\\ecc7"
    },
    "icon-snowflake:before": {
        "content": "\\ecc8"
    },
    "icon-cloud7:before": {
        "content": "\\ecc9"
    },
    "icon-lightning2:before": {
        "content": "\\ecca"
    },
    "icon-night:before": {
        "content": "\\eccb"
    },
    "icon-sunny:before": {
        "content": "\\eccc"
    },
    "icon-droplet2:before": {
        "content": "\\eccd"
    },
    "icon-umbrella3:before": {
        "content": "\\ecce"
    },
    "icon-truck5:before": {
        "content": "\\eccf"
    },
    "icon-car3:before": {
        "content": "\\ecd0"
    },
    "icon-gaspump:before": {
        "content": "\\ecd1"
    },
    "icon-factory:before": {
        "content": "\\ecd2"
    },
    "icon-tree4:before": {
        "content": "\\ecd3"
    },
    "icon-leaf4:before": {
        "content": "\\ecd4"
    },
    "icon-flower:before": {
        "content": "\\ecd5"
    },
    "icon-direction2:before": {
        "content": "\\ecd6"
    },
    "icon-thumbsup:before": {
        "content": "\\ecd7"
    },
    "icon-thumbsdown:before": {
        "content": "\\ecd8"
    },
    "icon-pointer:before": {
        "content": "\\ecd9"
    },
    "icon-pointer2:before": {
        "content": "\\ecda"
    },
    "icon-pointer3:before": {
        "content": "\\ecdb"
    },
    "icon-pointer4:before": {
        "content": "\\ecdc"
    },
    "icon-arrow-up5:before": {
        "content": "\\ecdd"
    },
    "icon-arrow-down5:before": {
        "content": "\\ecde"
    },
    "icon-arrow-left5:before": {
        "content": "\\ecdf"
    },
    "icon-arrow-right5:before": {
        "content": "\\ece0"
    },
    "icon-arrow-top-right:before": {
        "content": "\\ece1"
    },
    "icon-arrow-top-left:before": {
        "content": "\\ece2"
    },
    "icon-arrow-bottom-right:before": {
        "content": "\\ece3"
    },
    "icon-arrow-bottom-left:before": {
        "content": "\\ece4"
    },
    "icon-contract:before": {
        "content": "\\ece5"
    },
    "icon-enlarge3:before": {
        "content": "\\ece6"
    },
    "icon-refresh5:before": {
        "content": "\\ece7"
    },
    "icon-chat7:before": {
        "content": "\\ece8"
    },
    "icon-chat-alt-stroke:before": {
        "content": "\\ece9"
    },
    "icon-chat-alt-fill:before": {
        "content": "\\ecea"
    },
    "icon-comment-alt1-stroke:before": {
        "content": "\\eceb"
    },
    "icon-comment3:before": {
        "content": "\\ecec"
    },
    "icon-comment-stroke:before": {
        "content": "\\eced"
    },
    "icon-comment-fill:before": {
        "content": "\\ecee"
    },
    "icon-comment-alt2-stroke:before": {
        "content": "\\ecef"
    },
    "icon-comment-alt2-fill:before": {
        "content": "\\ecf0"
    },
    "icon-checkmark7:before": {
        "content": "\\ecf1"
    },
    "icon-check-alt:before": {
        "content": "\\ecf2"
    },
    "icon-x:before": {
        "content": "\\ecf3"
    },
    "icon-x-altx-alt:before": {
        "content": "\\ecf4"
    },
    "icon-denied:before": {
        "content": "\\ecf5"
    },
    "icon-cursor:before": {
        "content": "\\ecf6"
    },
    "icon-rss5:before": {
        "content": "\\ecf7"
    },
    "icon-rss-alt:before": {
        "content": "\\ecf8"
    },
    "icon-wrench3:before": {
        "content": "\\ecf9"
    },
    "icon-dial2:before": {
        "content": "\\ecfa"
    },
    "icon-cog7:before": {
        "content": "\\ecfb"
    },
    "icon-calendar9:before": {
        "content": "\\ecfc"
    },
    "icon-calendar-alt-stroke:before": {
        "content": "\\ecfd"
    },
    "icon-calendar-alt-fill:before": {
        "content": "\\ecfe"
    },
    "icon-share5:before": {
        "content": "\\ecff"
    },
    "icon-mail7:before": {
        "content": "\\ed00"
    },
    "icon-heart-stroke:before": {
        "content": "\\ed01"
    },
    "icon-heart-fill:before": {
        "content": "\\ed02"
    },
    "icon-movie2:before": {
        "content": "\\ed03"
    },
    "icon-document-alt-stroke:before": {
        "content": "\\ed04"
    },
    "icon-document-alt-fill:before": {
        "content": "\\ed05"
    },
    "icon-document-stroke:before": {
        "content": "\\ed06"
    },
    "icon-document-fill:before": {
        "content": "\\ed07"
    },
    "icon-plus6:before": {
        "content": "\\ed08"
    },
    "icon-plus-alt:before": {
        "content": "\\ed09"
    },
    "icon-minus7:before": {
        "content": "\\ed0a"
    },
    "icon-minus-alt:before": {
        "content": "\\ed0b"
    },
    "icon-pin5:before": {
        "content": "\\ed0c"
    },
    "icon-link6:before": {
        "content": "\\ed0d"
    },
    "icon-bolt3:before": {
        "content": "\\ed0e"
    },
    "icon-move:before": {
        "content": "\\ed0f"
    },
    "icon-move-alt1:before": {
        "content": "\\ed10"
    },
    "icon-move-alt2:before": {
        "content": "\\ed11"
    },
    "icon-equalizer4:before": {
        "content": "\\ed12"
    },
    "icon-award-fill:before": {
        "content": "\\ed13"
    },
    "icon-award-stroke:before": {
        "content": "\\ed14"
    },
    "icon-magnifying-glass2:before": {
        "content": "\\ed15"
    },
    "icon-trash-stroke:before": {
        "content": "\\ed16"
    },
    "icon-trash-fill:before": {
        "content": "\\ed17"
    },
    "icon-beaker-alt:before": {
        "content": "\\ed18"
    },
    "icon-beaker3:before": {
        "content": "\\ed19"
    },
    "icon-key-stroke:before": {
        "content": "\\ed1a"
    },
    "icon-key-fill:before": {
        "content": "\\ed1b"
    },
    "icon-new-window:before": {
        "content": "\\ed1c"
    },
    "icon-lightbulb3:before": {
        "content": "\\ed1d"
    },
    "icon-spin-alt:before": {
        "content": "\\ed1e"
    },
    "icon-spin:before": {
        "content": "\\ed1f"
    },
    "icon-curved-arrow:before": {
        "content": "\\ed20"
    },
    "icon-undo3:before": {
        "content": "\\ed21"
    },
    "icon-reload2:before": {
        "content": "\\ed22"
    },
    "icon-reload-alt:before": {
        "content": "\\ed23"
    },
    "icon-loop4:before": {
        "content": "\\ed24"
    },
    "icon-loop-alt1:before": {
        "content": "\\ed25"
    },
    "icon-loop-alt2:before": {
        "content": "\\ed26"
    },
    "icon-loop-alt3:before": {
        "content": "\\ed27"
    },
    "icon-loop-alt4:before": {
        "content": "\\ed28"
    },
    "icon-transfer:before": {
        "content": "\\ed29"
    },
    "icon-move-vertical:before": {
        "content": "\\ed2a"
    },
    "icon-move-vertical-alt1:before": {
        "content": "\\ed2b"
    },
    "icon-move-vertical-alt2:before": {
        "content": "\\ed2c"
    },
    "icon-move-horizontal:before": {
        "content": "\\ed2d"
    },
    "icon-move-horizontal-alt1:before": {
        "content": "\\ed2e"
    },
    "icon-move-horizontal-alt2:before": {
        "content": "\\ed2f"
    },
    "icon-arrow-left6:before": {
        "content": "\\ed30"
    },
    "icon-arrow-left-alt1:before": {
        "content": "\\ed31"
    },
    "icon-arrow-left-alt2:before": {
        "content": "\\ed32"
    },
    "icon-arrow-right6:before": {
        "content": "\\ed33"
    },
    "icon-arrow-right-alt1:before": {
        "content": "\\ed34"
    },
    "icon-arrow-right-alt2:before": {
        "content": "\\ed35"
    },
    "icon-arrow-up6:before": {
        "content": "\\ed36"
    },
    "icon-arrow-up-alt1:before": {
        "content": "\\ed37"
    },
    "icon-arrow-up-alt2:before": {
        "content": "\\ed38"
    },
    "icon-arrow-down6:before": {
        "content": "\\ed39"
    },
    "icon-arrow-down-alt1:before": {
        "content": "\\ed3a"
    },
    "icon-arrow-down-alt2:before": {
        "content": "\\ed3b"
    },
    "icon-cd2:before": {
        "content": "\\ed3c"
    },
    "icon-steering-wheel:before": {
        "content": "\\ed3d"
    },
    "icon-microphone9:before": {
        "content": "\\ed3e"
    },
    "icon-headphones5:before": {
        "content": "\\ed3f"
    },
    "icon-volume7:before": {
        "content": "\\ed40"
    },
    "icon-volume-mute4:before": {
        "content": "\\ed41"
    },
    "icon-play4:before": {
        "content": "\\ed42"
    },
    "icon-pause3:before": {
        "content": "\\ed43"
    },
    "icon-stop4:before": {
        "content": "\\ed44"
    },
    "icon-eject4:before": {
        "content": "\\ed45"
    },
    "icon-first2:before": {
        "content": "\\ed46"
    },
    "icon-last2:before": {
        "content": "\\ed47"
    },
    "icon-play-alt:before": {
        "content": "\\ed48"
    },
    "icon-fullscreen-exit:before": {
        "content": "\\ed49"
    },
    "icon-fullscreen-exit-alt:before": {
        "content": "\\ed4a"
    },
    "icon-fullscreen:before": {
        "content": "\\ed4b"
    },
    "icon-fullscreen-alt:before": {
        "content": "\\ed4c"
    },
    "icon-iphone:before": {
        "content": "\\ed4d"
    },
    "icon-battery-empty3:before": {
        "content": "\\ed4e"
    },
    "icon-battery-half2:before": {
        "content": "\\ed4f"
    },
    "icon-battery-full5:before": {
        "content": "\\ed50"
    },
    "icon-battery-charging2:before": {
        "content": "\\ed51"
    },
    "icon-compass6:before": {
        "content": "\\ed52"
    },
    "icon-box4:before": {
        "content": "\\ed53"
    },
    "icon-folder-stroke:before": {
        "content": "\\ed54"
    },
    "icon-folder-fill:before": {
        "content": "\\ed55"
    },
    "icon-at3:before": {
        "content": "\\ed56"
    },
    "icon-ampersand:before": {
        "content": "\\ed57"
    },
    "icon-info7:before": {
        "content": "\\ed58"
    },
    "icon-question-mark:before": {
        "content": "\\ed59"
    },
    "icon-pilcrow2:before": {
        "content": "\\ed5a"
    },
    "icon-hash:before": {
        "content": "\\ed5b"
    },
    "icon-left-quote:before": {
        "content": "\\ed5c"
    },
    "icon-right-quote:before": {
        "content": "\\ed5d"
    },
    "icon-left-quote-alt:before": {
        "content": "\\ed5e"
    },
    "icon-right-quote-alt:before": {
        "content": "\\ed5f"
    },
    "icon-article:before": {
        "content": "\\ed60"
    },
    "icon-read-more:before": {
        "content": "\\ed61"
    },
    "icon-list6:before": {
        "content": "\\ed62"
    },
    "icon-list-nested:before": {
        "content": "\\ed63"
    },
    "icon-book9:before": {
        "content": "\\ed64"
    },
    "icon-book-alt:before": {
        "content": "\\ed65"
    },
    "icon-book-alt2:before": {
        "content": "\\ed66"
    },
    "icon-pen7:before": {
        "content": "\\ed67"
    },
    "icon-pen-alt-stroke:before": {
        "content": "\\ed68"
    },
    "icon-pen-alt-fill:before": {
        "content": "\\ed69"
    },
    "icon-pen-alt2:before": {
        "content": "\\ed6a"
    },
    "icon-brush3:before": {
        "content": "\\ed6b"
    },
    "icon-brush-alt:before": {
        "content": "\\ed6c"
    },
    "icon-eyedropper5:before": {
        "content": "\\ed6d"
    },
    "icon-layers-alt:before": {
        "content": "\\ed6e"
    },
    "icon-layers2:before": {
        "content": "\\ed6f"
    },
    "icon-image6:before": {
        "content": "\\ed70"
    },
    "icon-camera14:before": {
        "content": "\\ed71"
    },
    "icon-aperture2:before": {
        "content": "\\ed72"
    },
    "icon-aperture-alt:before": {
        "content": "\\ed73"
    },
    "icon-chart8:before": {
        "content": "\\ed74"
    },
    "icon-chart-alt:before": {
        "content": "\\ed75"
    },
    "icon-bars3:before": {
        "content": "\\ed76"
    },
    "icon-bars-alt:before": {
        "content": "\\ed77"
    },
    "icon-eye7:before": {
        "content": "\\ed78"
    },
    "icon-user10:before": {
        "content": "\\ed79"
    },
    "icon-home6:before": {
        "content": "\\ed7a"
    },
    "icon-clock7:before": {
        "content": "\\ed7b"
    },
    "icon-lock-stroke:before": {
        "content": "\\ed7c"
    },
    "icon-lock-fill:before": {
        "content": "\\ed7d"
    },
    "icon-unlock-stroke:before": {
        "content": "\\ed7e"
    },
    "icon-unlock-fill:before": {
        "content": "\\ed7f"
    },
    "icon-tag-stroke:before": {
        "content": "\\ed80"
    },
    "icon-tag-fill:before": {
        "content": "\\ed81"
    },
    "icon-sun-stroke:before": {
        "content": "\\ed82"
    },
    "icon-sun-fill:before": {
        "content": "\\ed83"
    },
    "icon-moon-stroke:before": {
        "content": "\\ed84"
    },
    "icon-moon-fill:before": {
        "content": "\\ed85"
    },
    "icon-cloud8:before": {
        "content": "\\ed86"
    },
    "icon-rain2:before": {
        "content": "\\ed87"
    },
    "icon-umbrella4:before": {
        "content": "\\ed88"
    },
    "icon-star6:before": {
        "content": "\\ed89"
    },
    "icon-map-pin-stroke:before": {
        "content": "\\ed8a"
    },
    "icon-map-pin-fill:before": {
        "content": "\\ed8b"
    },
    "icon-map-pin-alt:before": {
        "content": "\\ed8c"
    },
    "icon-target4:before": {
        "content": "\\ed8d"
    },
    "icon-download10:before": {
        "content": "\\ed8e"
    },
    "icon-upload8:before": {
        "content": "\\ed8f"
    },
    "icon-cloud-download3:before": {
        "content": "\\ed90"
    },
    "icon-cloud-upload3:before": {
        "content": "\\ed91"
    },
    "icon-fork:before": {
        "content": "\\ed92"
    },
    "icon-paperclip4:before": {
        "content": "\\ed93"
    },
    "icon-alert2:before": {
        "content": "\\f02d"
    },
    "icon-alignment-align:before": {
        "content": "\\f08a"
    },
    "icon-alignment-aligned-to:before": {
        "content": "\\f08e"
    },
    "icon-alignment-unalign:before": {
        "content": "\\f08b"
    },
    "icon-arrow-down7:before": {
        "content": "\\f03f"
    },
    "icon-arrow-left7:before": {
        "content": "\\f040"
    },
    "icon-arrow-right7:before": {
        "content": "\\f03e"
    },
    "icon-arrow-small-down:before": {
        "content": "\\f0a0"
    },
    "icon-arrow-small-left:before": {
        "content": "\\f0a1"
    },
    "icon-arrow-small-right:before": {
        "content": "\\f071"
    },
    "icon-arrow-small-up:before": {
        "content": "\\f09f"
    },
    "icon-arrow-up7:before": {
        "content": "\\f03d"
    },
    "icon-beer3:before": {
        "content": "\\f069"
    },
    "icon-book10:before": {
        "content": "\\f007"
    },
    "icon-bookmark9:before": {
        "content": "\\f07b"
    },
    "icon-briefcase5:before": {
        "content": "\\f0d3"
    },
    "icon-broadcast3:before": {
        "content": "\\f048"
    },
    "icon-browser3:before": {
        "content": "\\f0c5"
    },
    "icon-bug4:before": {
        "content": "\\f091"
    },
    "icon-calendar10:before": {
        "content": "\\f068"
    },
    "icon-check2:before": {
        "content": "\\f03a"
    },
    "icon-checklist:before": {
        "content": "\\f076"
    },
    "icon-chevron-down2:before": {
        "content": "\\f0a3"
    },
    "icon-chevron-left3:before": {
        "content": "\\f0a4"
    },
    "icon-chevron-right3:before": {
        "content": "\\f078"
    },
    "icon-chevron-up2:before": {
        "content": "\\f0a2"
    },
    "icon-circle-slash:before": {
        "content": "\\f084"
    },
    "icon-circuit-board:before": {
        "content": "\\f0d6"
    },
    "icon-clippy:before": {
        "content": "\\f035"
    },
    "icon-clock8:before": {
        "content": "\\f046"
    },
    "icon-cloud-download4:before": {
        "content": "\\f00b"
    },
    "icon-cloud-upload4:before": {
        "content": "\\f00c"
    },
    "icon-code3:before": {
        "content": "\\f05f"
    },
    "icon-color-mode:before": {
        "content": "\\f065"
    },
    "icon-comment4:before": {
        "content": "\\f02b"
    },
    "icon-comment-discussion:before": {
        "content": "\\f04f"
    },
    "icon-credit-card4:before": {
        "content": "\\f045"
    },
    "icon-dash:before": {
        "content": "\\f0ca"
    },
    "icon-dashboard2:before": {
        "content": "\\f07d"
    },
    "icon-database4:before": {
        "content": "\\f096"
    },
    "icon-device-camera:before": {
        "content": "\\f056"
    },
    "icon-device-camera-video:before": {
        "content": "\\f057"
    },
    "icon-device-desktop2:before": {
        "content": "\\f27c"
    },
    "icon-device-mobile:before": {
        "content": "\\f038"
    },
    "icon-diff:before": {
        "content": "\\f04d"
    },
    "icon-diff-added:before": {
        "content": "\\f06b"
    },
    "icon-diff-ignored:before": {
        "content": "\\f099"
    },
    "icon-diff-modified:before": {
        "content": "\\f06d"
    },
    "icon-diff-removed:before": {
        "content": "\\f06c"
    },
    "icon-diff-renamed:before": {
        "content": "\\f06e"
    },
    "icon-ellipsis:before": {
        "content": "\\f09a"
    },
    "icon-eye8:before": {
        "content": "\\f04e"
    },
    "icon-file-binary:before": {
        "content": "\\f094"
    },
    "icon-file-code:before": {
        "content": "\\f010"
    },
    "icon-file-directory:before": {
        "content": "\\f016"
    },
    "icon-file-media:before": {
        "content": "\\f012"
    },
    "icon-file-pdf2:before": {
        "content": "\\f014"
    },
    "icon-file-submodule:before": {
        "content": "\\f017"
    },
    "icon-file-symlink-directory:before": {
        "content": "\\f0b1"
    },
    "icon-file-symlink-file:before": {
        "content": "\\f0b0"
    },
    "icon-file-text3:before": {
        "content": "\\f011"
    },
    "icon-file-zip2:before": {
        "content": "\\f013"
    },
    "icon-flame:before": {
        "content": "\\f0d2"
    },
    "icon-fold:before": {
        "content": "\\f0cc"
    },
    "icon-gear2:before": {
        "content": "\\f02f"
    },
    "icon-gift6:before": {
        "content": "\\f042"
    },
    "icon-gist:before": {
        "content": "\\f00e"
    },
    "icon-gist-secret:before": {
        "content": "\\f08c"
    },
    "icon-git-branch:before": {
        "content": "\\f020"
    },
    "icon-git-commit:before": {
        "content": "\\f01f"
    },
    "icon-git-compare:before": {
        "content": "\\f0ac"
    },
    "icon-git-merge:before": {
        "content": "\\f023"
    },
    "icon-git-pull-request:before": {
        "content": "\\f009"
    },
    "icon-globe7:before": {
        "content": "\\f0b6"
    },
    "icon-graph2:before": {
        "content": "\\f043"
    },
    "icon-heart11:before": {
        "content": "\\2665"
    },
    "icon-history3:before": {
        "content": "\\f07e"
    },
    "icon-home7:before": {
        "content": "\\f08d"
    },
    "icon-horizontal-rule:before": {
        "content": "\\f070"
    },
    "icon-hourglass4:before": {
        "content": "\\f09e"
    },
    "icon-hubot:before": {
        "content": "\\f09d"
    },
    "icon-inbox4:before": {
        "content": "\\f0cf"
    },
    "icon-info8:before": {
        "content": "\\f059"
    },
    "icon-issue-closed:before": {
        "content": "\\f028"
    },
    "icon-issue-opened:before": {
        "content": "\\f026"
    },
    "icon-issue-reopened:before": {
        "content": "\\f027"
    },
    "icon-jersey:before": {
        "content": "\\f019"
    },
    "icon-jump-down:before": {
        "content": "\\f072"
    },
    "icon-jump-left:before": {
        "content": "\\f0a5"
    },
    "icon-jump-right:before": {
        "content": "\\f0a6"
    },
    "icon-jump-up:before": {
        "content": "\\f073"
    },
    "icon-key8:before": {
        "content": "\\f049"
    },
    "icon-keyboard5:before": {
        "content": "\\f00d"
    },
    "icon-law:before": {
        "content": "\\f0d8"
    },
    "icon-light-bulb:before": {
        "content": "\\f000"
    },
    "icon-link7:before": {
        "content": "\\f05c"
    },
    "icon-link-external:before": {
        "content": "\\f07f"
    },
    "icon-list-ordered:before": {
        "content": "\\f062"
    },
    "icon-list-unordered:before": {
        "content": "\\f061"
    },
    "icon-location7:before": {
        "content": "\\f060"
    },
    "icon-lock6:before": {
        "content": "\\f06a"
    },
    "icon-logo-github:before": {
        "content": "\\f092"
    },
    "icon-mail8:before": {
        "content": "\\f03b"
    },
    "icon-mail-read:before": {
        "content": "\\f03c"
    },
    "icon-mail-reply2:before": {
        "content": "\\f051"
    },
    "icon-mark-github:before": {
        "content": "\\f00a"
    },
    "icon-markdown:before": {
        "content": "\\f0c9"
    },
    "icon-megaphone5:before": {
        "content": "\\f077"
    },
    "icon-mention:before": {
        "content": "\\f0be"
    },
    "icon-microscope:before": {
        "content": "\\f089"
    },
    "icon-milestone:before": {
        "content": "\\f075"
    },
    "icon-mirror:before": {
        "content": "\\f024"
    },
    "icon-mortar-board2:before": {
        "content": "\\f0d7"
    },
    "icon-move-down2:before": {
        "content": "\\f0a8"
    },
    "icon-move-left:before": {
        "content": "\\f074"
    },
    "icon-move-right:before": {
        "content": "\\f0a9"
    },
    "icon-move-up2:before": {
        "content": "\\f0a7"
    },
    "icon-mute3:before": {
        "content": "\\f080"
    },
    "icon-no-newline:before": {
        "content": "\\f09c"
    },
    "icon-octoface:before": {
        "content": "\\f008"
    },
    "icon-organization:before": {
        "content": "\\f037"
    },
    "icon-package:before": {
        "content": "\\f0c4"
    },
    "icon-paintcan:before": {
        "content": "\\f0d1"
    },
    "icon-pencil8:before": {
        "content": "\\f058"
    },
    "icon-person:before": {
        "content": "\\f018"
    },
    "icon-pin6:before": {
        "content": "\\f041"
    },
    "icon-playback-fast-forward:before": {
        "content": "\\f0bd"
    },
    "icon-playback-pause:before": {
        "content": "\\f0bb"
    },
    "icon-playback-play:before": {
        "content": "\\f0bf"
    },
    "icon-playback-rewind:before": {
        "content": "\\f0bc"
    },
    "icon-plug3:before": {
        "content": "\\f0d4"
    },
    "icon-plus7:before": {
        "content": "\\f05d"
    },
    "icon-podium:before": {
        "content": "\\f0af"
    },
    "icon-primitive-dot:before": {
        "content": "\\f052"
    },
    "icon-primitive-square:before": {
        "content": "\\f053"
    },
    "icon-pulse:before": {
        "content": "\\f085"
    },
    "icon-puzzle4:before": {
        "content": "\\f0c0"
    },
    "icon-question3:before": {
        "content": "\\f02c"
    },
    "icon-quote5:before": {
        "content": "\\f063"
    },
    "icon-radio-tower:before": {
        "content": "\\f030"
    },
    "icon-repo:before": {
        "content": "\\f001"
    },
    "icon-repo-clone:before": {
        "content": "\\f04c"
    },
    "icon-repo-force-push:before": {
        "content": "\\f04a"
    },
    "icon-repo-forked:before": {
        "content": "\\f002"
    },
    "icon-repo-pull:before": {
        "content": "\\f006"
    },
    "icon-repo-push:before": {
        "content": "\\f005"
    },
    "icon-rocket4:before": {
        "content": "\\f033"
    },
    "icon-rss6:before": {
        "content": "\\f034"
    },
    "icon-ruby:before": {
        "content": "\\f047"
    },
    "icon-screen-full:before": {
        "content": "\\f066"
    },
    "icon-screen-normal:before": {
        "content": "\\f067"
    },
    "icon-search7:before": {
        "content": "\\f02e"
    },
    "icon-server3:before": {
        "content": "\\f097"
    },
    "icon-settings4:before": {
        "content": "\\f07c"
    },
    "icon-sign-in2:before": {
        "content": "\\f036"
    },
    "icon-sign-out2:before": {
        "content": "\\f032"
    },
    "icon-split:before": {
        "content": "\\f0c6"
    },
    "icon-squirrel:before": {
        "content": "\\f0b2"
    },
    "icon-star7:before": {
        "content": "\\f02a"
    },
    "icon-steps:before": {
        "content": "\\f0c7"
    },
    "icon-stop5:before": {
        "content": "\\f08f"
    },
    "icon-sync:before": {
        "content": "\\f087"
    },
    "icon-tag8:before": {
        "content": "\\f015"
    },
    "icon-telescope2:before": {
        "content": "\\f088"
    },
    "icon-terminal3:before": {
        "content": "\\f0c8"
    },
    "icon-three-bars:before": {
        "content": "\\f05e"
    },
    "icon-tools3:before": {
        "content": "\\f031"
    },
    "icon-trashcan4:before": {
        "content": "\\f0d0"
    },
    "icon-triangle-down:before": {
        "content": "\\f05b"
    },
    "icon-triangle-left:before": {
        "content": "\\f044"
    },
    "icon-triangle-right:before": {
        "content": "\\f05a"
    },
    "icon-triangle-up:before": {
        "content": "\\f0aa"
    },
    "icon-unfold:before": {
        "content": "\\f039"
    },
    "icon-unmute:before": {
        "content": "\\f0ba"
    },
    "icon-versions:before": {
        "content": "\\f064"
    },
    "icon-x2:before": {
        "content": "\\f081"
    },
    "icon-zap:before": {
        "content": "\\26a1"
    },
    "icon-home2:before": {
        "content": "\\ed94"
    },
    "icon-home22:before": {
        "content": "\\ed95"
    },
    "icon-home3:before": {
        "content": "\\ed96"
    },
    "icon-office:before": {
        "content": "\\ed97"
    },
    "icon-newspaper:before": {
        "content": "\\ed98"
    },
    "icon-pencil2:before": {
        "content": "\\ed99"
    },
    "icon-pencil22:before": {
        "content": "\\ed9a"
    },
    "icon-quill:before": {
        "content": "\\ed9b"
    },
    "icon-pen:before": {
        "content": "\\ed9c"
    },
    "icon-blog:before": {
        "content": "\\ed9d"
    },
    "icon-eyedropper2:before": {
        "content": "\\ed9e"
    },
    "icon-droplet:before": {
        "content": "\\ed9f"
    },
    "icon-paint-format:before": {
        "content": "\\eda0"
    },
    "icon-image2:before": {
        "content": "\\eda1"
    },
    "icon-images:before": {
        "content": "\\eda2"
    },
    "icon-camera2:before": {
        "content": "\\eda3"
    },
    "icon-headphones2:before": {
        "content": "\\eda4"
    },
    "icon-music2:before": {
        "content": "\\eda5"
    },
    "icon-play2:before": {
        "content": "\\eda6"
    },
    "icon-film2:before": {
        "content": "\\eda7"
    },
    "icon-video-camera2:before": {
        "content": "\\eda8"
    },
    "icon-dice:before": {
        "content": "\\eda9"
    },
    "icon-pacman:before": {
        "content": "\\edaa"
    },
    "icon-spades:before": {
        "content": "\\edab"
    },
    "icon-clubs:before": {
        "content": "\\edac"
    },
    "icon-diamonds:before": {
        "content": "\\edad"
    },
    "icon-bullhorn2:before": {
        "content": "\\edae"
    },
    "icon-connection:before": {
        "content": "\\edaf"
    },
    "icon-podcast2:before": {
        "content": "\\edb0"
    },
    "icon-feed2:before": {
        "content": "\\edb1"
    },
    "icon-mic:before": {
        "content": "\\edb2"
    },
    "icon-book2:before": {
        "content": "\\edb3"
    },
    "icon-books:before": {
        "content": "\\edb4"
    },
    "icon-library:before": {
        "content": "\\edb5"
    },
    "icon-file-text2:before": {
        "content": "\\edb6"
    },
    "icon-profile:before": {
        "content": "\\edb7"
    },
    "icon-file-empty:before": {
        "content": "\\edb8"
    },
    "icon-files-empty:before": {
        "content": "\\edb9"
    },
    "icon-file-text22:before": {
        "content": "\\edba"
    },
    "icon-file-picture:before": {
        "content": "\\edbb"
    },
    "icon-file-music:before": {
        "content": "\\edbc"
    },
    "icon-file-play:before": {
        "content": "\\edbd"
    },
    "icon-file-video:before": {
        "content": "\\edbe"
    },
    "icon-file-zip:before": {
        "content": "\\edbf"
    },
    "icon-copy2:before": {
        "content": "\\edc0"
    },
    "icon-paste2:before": {
        "content": "\\edc1"
    },
    "icon-stack:before": {
        "content": "\\edc2"
    },
    "icon-folder2:before": {
        "content": "\\edc3"
    },
    "icon-folder-open2:before": {
        "content": "\\edc4"
    },
    "icon-folder-plus:before": {
        "content": "\\edc5"
    },
    "icon-folder-minus:before": {
        "content": "\\edc6"
    },
    "icon-folder-download:before": {
        "content": "\\edc7"
    },
    "icon-folder-upload:before": {
        "content": "\\edc8"
    },
    "icon-price-tag:before": {
        "content": "\\edc9"
    },
    "icon-price-tags:before": {
        "content": "\\edca"
    },
    "icon-barcode2:before": {
        "content": "\\edcb"
    },
    "icon-qrcode2:before": {
        "content": "\\edcc"
    },
    "icon-ticket2:before": {
        "content": "\\edcd"
    },
    "icon-cart:before": {
        "content": "\\edce"
    },
    "icon-coin-dollar:before": {
        "content": "\\edcf"
    },
    "icon-coin-euro:before": {
        "content": "\\edd0"
    },
    "icon-coin-pound:before": {
        "content": "\\edd1"
    },
    "icon-coin-yen:before": {
        "content": "\\edd2"
    },
    "icon-credit-card2:before": {
        "content": "\\edd3"
    },
    "icon-calculator2:before": {
        "content": "\\edd4"
    },
    "icon-lifebuoy:before": {
        "content": "\\edd5"
    },
    "icon-phone2:before": {
        "content": "\\edd6"
    },
    "icon-phone-hang-up:before": {
        "content": "\\edd7"
    },
    "icon-address-book2:before": {
        "content": "\\edd8"
    },
    "icon-envelop:before": {
        "content": "\\edd9"
    },
    "icon-pushpin:before": {
        "content": "\\edda"
    },
    "icon-location:before": {
        "content": "\\eddb"
    },
    "icon-location2:before": {
        "content": "\\eddc"
    },
    "icon-compass2:before": {
        "content": "\\eddd"
    },
    "icon-compass22:before": {
        "content": "\\edde"
    },
    "icon-map2:before": {
        "content": "\\eddf"
    },
    "icon-map22:before": {
        "content": "\\ede0"
    },
    "icon-history2:before": {
        "content": "\\ede1"
    },
    "icon-clock:before": {
        "content": "\\ede2"
    },
    "icon-clock2:before": {
        "content": "\\ede3"
    },
    "icon-alarm:before": {
        "content": "\\ede4"
    },
    "icon-bell2:before": {
        "content": "\\ede5"
    },
    "icon-stopwatch:before": {
        "content": "\\ede6"
    },
    "icon-calendar2:before": {
        "content": "\\ede7"
    },
    "icon-printer:before": {
        "content": "\\ede8"
    },
    "icon-keyboard:before": {
        "content": "\\ede9"
    },
    "icon-display:before": {
        "content": "\\edea"
    },
    "icon-laptop2:before": {
        "content": "\\edeb"
    },
    "icon-mobile2:before": {
        "content": "\\edec"
    },
    "icon-mobile22:before": {
        "content": "\\eded"
    },
    "icon-tablet2:before": {
        "content": "\\edee"
    },
    "icon-tv2:before": {
        "content": "\\edef"
    },
    "icon-drawer:before": {
        "content": "\\edf0"
    },
    "icon-drawer2:before": {
        "content": "\\edf1"
    },
    "icon-box-add:before": {
        "content": "\\edf2"
    },
    "icon-box-remove:before": {
        "content": "\\edf3"
    },
    "icon-download2:before": {
        "content": "\\edf4"
    },
    "icon-upload2:before": {
        "content": "\\edf5"
    },
    "icon-floppy-disk:before": {
        "content": "\\edf6"
    },
    "icon-drive:before": {
        "content": "\\edf7"
    },
    "icon-database2:before": {
        "content": "\\edf8"
    },
    "icon-undo2:before": {
        "content": "\\edf9"
    },
    "icon-redo:before": {
        "content": "\\edfa"
    },
    "icon-undo22:before": {
        "content": "\\edfb"
    },
    "icon-redo2:before": {
        "content": "\\edfc"
    },
    "icon-forward2:before": {
        "content": "\\edfd"
    },
    "icon-reply2:before": {
        "content": "\\edfe"
    },
    "icon-bubble:before": {
        "content": "\\edff"
    },
    "icon-bubbles:before": {
        "content": "\\ee00"
    },
    "icon-bubbles2:before": {
        "content": "\\ee01"
    },
    "icon-bubble2:before": {
        "content": "\\ee02"
    },
    "icon-bubbles3:before": {
        "content": "\\ee03"
    },
    "icon-bubbles4:before": {
        "content": "\\ee04"
    },
    "icon-user2:before": {
        "content": "\\ee05"
    },
    "icon-users2:before": {
        "content": "\\ee06"
    },
    "icon-user-plus2:before": {
        "content": "\\ee07"
    },
    "icon-user-minus:before": {
        "content": "\\ee08"
    },
    "icon-user-check:before": {
        "content": "\\ee09"
    },
    "icon-user-tie:before": {
        "content": "\\ee0a"
    },
    "icon-quotes-left:before": {
        "content": "\\ee0b"
    },
    "icon-quotes-right:before": {
        "content": "\\ee0c"
    },
    "icon-hour-glass:before": {
        "content": "\\ee0d"
    },
    "icon-spinner2:before": {
        "content": "\\ee0e"
    },
    "icon-spinner22:before": {
        "content": "\\ee0f"
    },
    "icon-spinner3:before": {
        "content": "\\ee10"
    },
    "icon-spinner4:before": {
        "content": "\\ee11"
    },
    "icon-spinner5:before": {
        "content": "\\ee12"
    },
    "icon-spinner6:before": {
        "content": "\\ee13"
    },
    "icon-spinner7:before": {
        "content": "\\ee14"
    },
    "icon-spinner8:before": {
        "content": "\\ee15"
    },
    "icon-spinner9:before": {
        "content": "\\ee16"
    },
    "icon-spinner10:before": {
        "content": "\\ee17"
    },
    "icon-spinner11:before": {
        "content": "\\ee18"
    },
    "icon-binoculars2:before": {
        "content": "\\ee19"
    },
    "icon-search2:before": {
        "content": "\\ee1a"
    },
    "icon-zoom-in:before": {
        "content": "\\ee1b"
    },
    "icon-zoom-out:before": {
        "content": "\\ee1c"
    },
    "icon-enlarge:before": {
        "content": "\\ee1d"
    },
    "icon-shrink:before": {
        "content": "\\ee1e"
    },
    "icon-enlarge2:before": {
        "content": "\\ee1f"
    },
    "icon-shrink2:before": {
        "content": "\\ee20"
    },
    "icon-key2:before": {
        "content": "\\ee21"
    },
    "icon-key22:before": {
        "content": "\\ee22"
    },
    "icon-lock2:before": {
        "content": "\\ee23"
    },
    "icon-unlocked:before": {
        "content": "\\ee24"
    },
    "icon-wrench2:before": {
        "content": "\\ee25"
    },
    "icon-equalizer:before": {
        "content": "\\ee26"
    },
    "icon-equalizer2:before": {
        "content": "\\ee27"
    },
    "icon-cog2:before": {
        "content": "\\ee28"
    },
    "icon-cogs2:before": {
        "content": "\\ee29"
    },
    "icon-hammer:before": {
        "content": "\\ee2a"
    },
    "icon-magic-wand:before": {
        "content": "\\ee2b"
    },
    "icon-aid-kit:before": {
        "content": "\\ee2c"
    },
    "icon-bug2:before": {
        "content": "\\ee2d"
    },
    "icon-pie-chart2:before": {
        "content": "\\ee2e"
    },
    "icon-stats-dots:before": {
        "content": "\\ee2f"
    },
    "icon-stats-bars:before": {
        "content": "\\ee30"
    },
    "icon-stats-bars2:before": {
        "content": "\\ee31"
    },
    "icon-trophy2:before": {
        "content": "\\ee32"
    },
    "icon-gift2:before": {
        "content": "\\ee33"
    },
    "icon-glass2:before": {
        "content": "\\ee34"
    },
    "icon-glass22:before": {
        "content": "\\ee35"
    },
    "icon-mug:before": {
        "content": "\\ee36"
    },
    "icon-spoon-knife:before": {
        "content": "\\ee37"
    },
    "icon-leaf2:before": {
        "content": "\\ee38"
    },
    "icon-rocket2:before": {
        "content": "\\ee39"
    },
    "icon-meter:before": {
        "content": "\\ee3a"
    },
    "icon-meter2:before": {
        "content": "\\ee3b"
    },
    "icon-hammer2:before": {
        "content": "\\ee3c"
    },
    "icon-fire2:before": {
        "content": "\\ee3d"
    },
    "icon-lab:before": {
        "content": "\\ee3e"
    },
    "icon-magnet2:before": {
        "content": "\\ee3f"
    },
    "icon-bin:before": {
        "content": "\\ee40"
    },
    "icon-bin2:before": {
        "content": "\\ee41"
    },
    "icon-briefcase2:before": {
        "content": "\\ee42"
    },
    "icon-airplane:before": {
        "content": "\\ee43"
    },
    "icon-truck2:before": {
        "content": "\\ee44"
    },
    "icon-road2:before": {
        "content": "\\ee45"
    },
    "icon-accessibility:before": {
        "content": "\\ee46"
    },
    "icon-target:before": {
        "content": "\\ee47"
    },
    "icon-shield2:before": {
        "content": "\\ee48"
    },
    "icon-power:before": {
        "content": "\\ee49"
    },
    "icon-switch:before": {
        "content": "\\ee4a"
    },
    "icon-power-cord:before": {
        "content": "\\ee4b"
    },
    "icon-clipboard2:before": {
        "content": "\\ee4c"
    },
    "icon-list-numbered:before": {
        "content": "\\ee4d"
    },
    "icon-list2:before": {
        "content": "\\ee4e"
    },
    "icon-list22:before": {
        "content": "\\ee4f"
    },
    "icon-tree2:before": {
        "content": "\\ee50"
    },
    "icon-menu:before": {
        "content": "\\ee51"
    },
    "icon-menu2:before": {
        "content": "\\ee52"
    },
    "icon-menu3:before": {
        "content": "\\ee53"
    },
    "icon-menu4:before": {
        "content": "\\ee54"
    },
    "icon-cloud2:before": {
        "content": "\\ee55"
    },
    "icon-cloud-download2:before": {
        "content": "\\ee56"
    },
    "icon-cloud-upload2:before": {
        "content": "\\ee57"
    },
    "icon-cloud-check:before": {
        "content": "\\ee58"
    },
    "icon-download22:before": {
        "content": "\\ee59"
    },
    "icon-upload22:before": {
        "content": "\\ee5a"
    },
    "icon-download3:before": {
        "content": "\\ee5b"
    },
    "icon-upload3:before": {
        "content": "\\ee5c"
    },
    "icon-sphere:before": {
        "content": "\\ee5d"
    },
    "icon-earth:before": {
        "content": "\\ee5e"
    },
    "icon-link2:before": {
        "content": "\\ee5f"
    },
    "icon-flag2:before": {
        "content": "\\ee60"
    },
    "icon-attachment:before": {
        "content": "\\ee61"
    },
    "icon-eye2:before": {
        "content": "\\ee62"
    },
    "icon-eye-plus:before": {
        "content": "\\ee63"
    },
    "icon-eye-minus:before": {
        "content": "\\ee64"
    },
    "icon-eye-blocked:before": {
        "content": "\\ee65"
    },
    "icon-bookmark2:before": {
        "content": "\\ee66"
    },
    "icon-bookmarks:before": {
        "content": "\\ee67"
    },
    "icon-sun:before": {
        "content": "\\ee68"
    },
    "icon-contrast:before": {
        "content": "\\ee69"
    },
    "icon-brightness-contrast:before": {
        "content": "\\ee6a"
    },
    "icon-star-empty:before": {
        "content": "\\ee6b"
    },
    "icon-star-half2:before": {
        "content": "\\ee6c"
    },
    "icon-star-full:before": {
        "content": "\\ee6d"
    },
    "icon-heart2:before": {
        "content": "\\ee6e"
    },
    "icon-heart-broken:before": {
        "content": "\\ee6f"
    },
    "icon-man:before": {
        "content": "\\ee70"
    },
    "icon-woman:before": {
        "content": "\\ee71"
    },
    "icon-man-woman:before": {
        "content": "\\ee72"
    },
    "icon-happy:before": {
        "content": "\\ee73"
    },
    "icon-happy2:before": {
        "content": "\\ee74"
    },
    "icon-smile:before": {
        "content": "\\ee75"
    },
    "icon-smile2:before": {
        "content": "\\ee76"
    },
    "icon-tongue:before": {
        "content": "\\ee77"
    },
    "icon-tongue2:before": {
        "content": "\\ee78"
    },
    "icon-sad:before": {
        "content": "\\ee79"
    },
    "icon-sad2:before": {
        "content": "\\ee7a"
    },
    "icon-wink:before": {
        "content": "\\ee7b"
    },
    "icon-wink2:before": {
        "content": "\\ee7c"
    },
    "icon-grin:before": {
        "content": "\\ee7d"
    },
    "icon-grin2:before": {
        "content": "\\ee7e"
    },
    "icon-cool:before": {
        "content": "\\ee7f"
    },
    "icon-cool2:before": {
        "content": "\\ee80"
    },
    "icon-angry:before": {
        "content": "\\ee81"
    },
    "icon-angry2:before": {
        "content": "\\ee82"
    },
    "icon-evil:before": {
        "content": "\\ee83"
    },
    "icon-evil2:before": {
        "content": "\\ee84"
    },
    "icon-shocked:before": {
        "content": "\\ee85"
    },
    "icon-shocked2:before": {
        "content": "\\ee86"
    },
    "icon-baffled:before": {
        "content": "\\ee87"
    },
    "icon-baffled2:before": {
        "content": "\\ee88"
    },
    "icon-confused:before": {
        "content": "\\ee89"
    },
    "icon-confused2:before": {
        "content": "\\ee8a"
    },
    "icon-neutral:before": {
        "content": "\\ee8b"
    },
    "icon-neutral2:before": {
        "content": "\\ee8c"
    },
    "icon-hipster:before": {
        "content": "\\ee8d"
    },
    "icon-hipster2:before": {
        "content": "\\ee8e"
    },
    "icon-wondering:before": {
        "content": "\\ee8f"
    },
    "icon-wondering2:before": {
        "content": "\\ee90"
    },
    "icon-sleepy:before": {
        "content": "\\ee91"
    },
    "icon-sleepy2:before": {
        "content": "\\ee92"
    },
    "icon-frustrated:before": {
        "content": "\\ee93"
    },
    "icon-frustrated2:before": {
        "content": "\\ee94"
    },
    "icon-crying:before": {
        "content": "\\ee95"
    },
    "icon-crying2:before": {
        "content": "\\ee96"
    },
    "icon-point-up:before": {
        "content": "\\ee97"
    },
    "icon-point-right:before": {
        "content": "\\ee98"
    },
    "icon-point-down:before": {
        "content": "\\ee99"
    },
    "icon-point-left:before": {
        "content": "\\ee9a"
    },
    "icon-warning2:before": {
        "content": "\\ee9b"
    },
    "icon-notification:before": {
        "content": "\\ee9c"
    },
    "icon-question2:before": {
        "content": "\\ee9d"
    },
    "icon-plus2:before": {
        "content": "\\ee9e"
    },
    "icon-minus2:before": {
        "content": "\\ee9f"
    },
    "icon-info2:before": {
        "content": "\\eea0"
    },
    "icon-cancel-circle:before": {
        "content": "\\eea1"
    },
    "icon-blocked:before": {
        "content": "\\eea2"
    },
    "icon-cross:before": {
        "content": "\\eea3"
    },
    "icon-checkmark:before": {
        "content": "\\eea4"
    },
    "icon-checkmark2:before": {
        "content": "\\eea5"
    },
    "icon-spell-check:before": {
        "content": "\\eea6"
    },
    "icon-enter:before": {
        "content": "\\eea7"
    },
    "icon-exit:before": {
        "content": "\\eea8"
    },
    "icon-play22:before": {
        "content": "\\eea9"
    },
    "icon-pause2:before": {
        "content": "\\eeaa"
    },
    "icon-stop2:before": {
        "content": "\\eeab"
    },
    "icon-previous:before": {
        "content": "\\eeac"
    },
    "icon-next:before": {
        "content": "\\eead"
    },
    "icon-backward2:before": {
        "content": "\\eeae"
    },
    "icon-forward22:before": {
        "content": "\\eeaf"
    },
    "icon-play3:before": {
        "content": "\\eeb0"
    },
    "icon-pause22:before": {
        "content": "\\eeb1"
    },
    "icon-stop22:before": {
        "content": "\\eeb2"
    },
    "icon-backward22:before": {
        "content": "\\eeb3"
    },
    "icon-forward3:before": {
        "content": "\\eeb4"
    },
    "icon-first:before": {
        "content": "\\eeb5"
    },
    "icon-last:before": {
        "content": "\\eeb6"
    },
    "icon-previous2:before": {
        "content": "\\eeb7"
    },
    "icon-next2:before": {
        "content": "\\eeb8"
    },
    "icon-eject2:before": {
        "content": "\\eeb9"
    },
    "icon-volume-high:before": {
        "content": "\\eeba"
    },
    "icon-volume-medium:before": {
        "content": "\\eebb"
    },
    "icon-volume-low:before": {
        "content": "\\eebc"
    },
    "icon-volume-mute:before": {
        "content": "\\eebd"
    },
    "icon-volume-mute2:before": {
        "content": "\\eebe"
    },
    "icon-volume-increase:before": {
        "content": "\\eebf"
    },
    "icon-volume-decrease:before": {
        "content": "\\eec0"
    },
    "icon-loop:before": {
        "content": "\\eec1"
    },
    "icon-loop2:before": {
        "content": "\\eec2"
    },
    "icon-infinite:before": {
        "content": "\\eec3"
    },
    "icon-shuffle:before": {
        "content": "\\eec4"
    },
    "icon-arrow-up-left:before": {
        "content": "\\eec5"
    },
    "icon-arrow-up2:before": {
        "content": "\\eec6"
    },
    "icon-arrow-up-right:before": {
        "content": "\\eec7"
    },
    "icon-arrow-right2:before": {
        "content": "\\eec8"
    },
    "icon-arrow-down-right:before": {
        "content": "\\eec9"
    },
    "icon-arrow-down2:before": {
        "content": "\\eeca"
    },
    "icon-arrow-down-left:before": {
        "content": "\\eecb"
    },
    "icon-arrow-left2:before": {
        "content": "\\eecc"
    },
    "icon-arrow-up-left2:before": {
        "content": "\\eecd"
    },
    "icon-arrow-up22:before": {
        "content": "\\eece"
    },
    "icon-arrow-up-right2:before": {
        "content": "\\eecf"
    },
    "icon-arrow-right22:before": {
        "content": "\\eed0"
    },
    "icon-arrow-down-right2:before": {
        "content": "\\eed1"
    },
    "icon-arrow-down22:before": {
        "content": "\\eed2"
    },
    "icon-arrow-down-left2:before": {
        "content": "\\eed3"
    },
    "icon-arrow-left22:before": {
        "content": "\\eed4"
    },
    "icon-circle-up:before": {
        "content": "\\eed5"
    },
    "icon-circle-right:before": {
        "content": "\\eed6"
    },
    "icon-circle-down:before": {
        "content": "\\eed7"
    },
    "icon-circle-left:before": {
        "content": "\\eed8"
    },
    "icon-tab:before": {
        "content": "\\eed9"
    },
    "icon-move-up:before": {
        "content": "\\eeda"
    },
    "icon-move-down:before": {
        "content": "\\eedb"
    },
    "icon-sort-alpha-asc2:before": {
        "content": "\\eedc"
    },
    "icon-sort-alpha-desc2:before": {
        "content": "\\eedd"
    },
    "icon-sort-numeric-asc2:before": {
        "content": "\\eede"
    },
    "icon-sort-numberic-desc:before": {
        "content": "\\eedf"
    },
    "icon-sort-amount-asc2:before": {
        "content": "\\eee0"
    },
    "icon-sort-amount-desc2:before": {
        "content": "\\eee1"
    },
    "icon-command:before": {
        "content": "\\eee2"
    },
    "icon-shift:before": {
        "content": "\\eee3"
    },
    "icon-ctrl:before": {
        "content": "\\eee4"
    },
    "icon-opt:before": {
        "content": "\\eee5"
    },
    "icon-checkbox-checked:before": {
        "content": "\\eee6"
    },
    "icon-checkbox-unchecked:before": {
        "content": "\\eee7"
    },
    "icon-radio-checked:before": {
        "content": "\\eee8"
    },
    "icon-radio-checked2:before": {
        "content": "\\eee9"
    },
    "icon-radio-unchecked:before": {
        "content": "\\eeea"
    },
    "icon-crop2:before": {
        "content": "\\eeeb"
    },
    "icon-make-group:before": {
        "content": "\\eeec"
    },
    "icon-ungroup:before": {
        "content": "\\eeed"
    },
    "icon-scissors2:before": {
        "content": "\\eeee"
    },
    "icon-filter2:before": {
        "content": "\\eeef"
    },
    "icon-font2:before": {
        "content": "\\eef0"
    },
    "icon-ligature:before": {
        "content": "\\eef1"
    },
    "icon-ligature2:before": {
        "content": "\\eef2"
    },
    "icon-text-height2:before": {
        "content": "\\eef3"
    },
    "icon-text-width2:before": {
        "content": "\\eef4"
    },
    "icon-font-size:before": {
        "content": "\\eef5"
    },
    "icon-bold2:before": {
        "content": "\\eef6"
    },
    "icon-underline2:before": {
        "content": "\\eef7"
    },
    "icon-italic2:before": {
        "content": "\\eef8"
    },
    "icon-strikethrough2:before": {
        "content": "\\eef9"
    },
    "icon-omega:before": {
        "content": "\\eefa"
    },
    "icon-sigma:before": {
        "content": "\\eefb"
    },
    "icon-page-break:before": {
        "content": "\\eefc"
    },
    "icon-superscript2:before": {
        "content": "\\eefd"
    },
    "icon-subscript2:before": {
        "content": "\\eefe"
    },
    "icon-superscript22:before": {
        "content": "\\eeff"
    },
    "icon-subscript22:before": {
        "content": "\\ef00"
    },
    "icon-text-color:before": {
        "content": "\\ef01"
    },
    "icon-pagebreak:before": {
        "content": "\\ef02"
    },
    "icon-clear-formatting:before": {
        "content": "\\ef03"
    },
    "icon-table2:before": {
        "content": "\\ef04"
    },
    "icon-table22:before": {
        "content": "\\ef05"
    },
    "icon-insert-template:before": {
        "content": "\\ef06"
    },
    "icon-pilcrow:before": {
        "content": "\\ef07"
    },
    "icon-ltr:before": {
        "content": "\\ef08"
    },
    "icon-rtl:before": {
        "content": "\\ef09"
    },
    "icon-section:before": {
        "content": "\\ef0a"
    },
    "icon-paragraph-left:before": {
        "content": "\\ef0b"
    },
    "icon-paragraph-center:before": {
        "content": "\\ef0c"
    },
    "icon-paragraph-right:before": {
        "content": "\\ef0d"
    },
    "icon-paragraph-justify:before": {
        "content": "\\ef0e"
    },
    "icon-indent-increase:before": {
        "content": "\\ef0f"
    },
    "icon-indent-decrease:before": {
        "content": "\\ef10"
    },
    "icon-share2:before": {
        "content": "\\ef11"
    },
    "icon-new-tab:before": {
        "content": "\\ef12"
    },
    "icon-embed:before": {
        "content": "\\ef13"
    },
    "icon-embed2:before": {
        "content": "\\ef14"
    },
    "icon-terminal2:before": {
        "content": "\\ef15"
    },
    "icon-share22:before": {
        "content": "\\ef16"
    },
    "icon-mail:before": {
        "content": "\\ef17"
    },
    "icon-mail2:before": {
        "content": "\\ef18"
    },
    "icon-mail3:before": {
        "content": "\\ef19"
    },
    "icon-mail4:before": {
        "content": "\\ef1a"
    },
    "icon-amazon2:before": {
        "content": "\\ef1b"
    },
    "icon-google2:before": {
        "content": "\\ef1c"
    },
    "icon-google22:before": {
        "content": "\\ef1d"
    },
    "icon-google3:before": {
        "content": "\\ef1e"
    },
    "icon-google-plus2:before": {
        "content": "\\ef1f"
    },
    "icon-google-plus22:before": {
        "content": "\\ef20"
    },
    "icon-google-plus3:before": {
        "content": "\\ef21"
    },
    "icon-hangouts:before": {
        "content": "\\ef22"
    },
    "icon-google-drive:before": {
        "content": "\\ef23"
    },
    "icon-facebook2:before": {
        "content": "\\ef24"
    },
    "icon-facebook22:before": {
        "content": "\\ef25"
    },
    "icon-instagram2:before": {
        "content": "\\ef26"
    },
    "icon-whatsapp2:before": {
        "content": "\\ef27"
    },
    "icon-spotify2:before": {
        "content": "\\ef28"
    },
    "icon-telegram2:before": {
        "content": "\\ef29"
    },
    "icon-twitter2:before": {
        "content": "\\ef2a"
    },
    "icon-vine2:before": {
        "content": "\\ef2b"
    },
    "icon-vk2:before": {
        "content": "\\ef2c"
    },
    "icon-renren2:before": {
        "content": "\\ef2d"
    },
    "icon-sina-weibo:before": {
        "content": "\\ef2e"
    },
    "icon-rss2:before": {
        "content": "\\ef2f"
    },
    "icon-rss22:before": {
        "content": "\\ef30"
    },
    "icon-youtube2:before": {
        "content": "\\ef31"
    },
    "icon-youtube22:before": {
        "content": "\\ef32"
    },
    "icon-twitch2:before": {
        "content": "\\ef33"
    },
    "icon-vimeo2:before": {
        "content": "\\ef34"
    },
    "icon-vimeo22:before": {
        "content": "\\ef35"
    },
    "icon-lanyrd:before": {
        "content": "\\ef36"
    },
    "icon-flickr2:before": {
        "content": "\\ef37"
    },
    "icon-flickr22:before": {
        "content": "\\ef38"
    },
    "icon-flickr3:before": {
        "content": "\\ef39"
    },
    "icon-flickr4:before": {
        "content": "\\ef3a"
    },
    "icon-dribbble2:before": {
        "content": "\\ef3b"
    },
    "icon-behance2:before": {
        "content": "\\ef3c"
    },
    "icon-behance22:before": {
        "content": "\\ef3d"
    },
    "icon-deviantart2:before": {
        "content": "\\ef3e"
    },
    "icon-500px2:before": {
        "content": "\\ef3f"
    },
    "icon-steam2:before": {
        "content": "\\ef40"
    },
    "icon-steam22:before": {
        "content": "\\ef41"
    },
    "icon-dropbox2:before": {
        "content": "\\ef42"
    },
    "icon-onedrive:before": {
        "content": "\\ef43"
    },
    "icon-github2:before": {
        "content": "\\ef44"
    },
    "icon-npm:before": {
        "content": "\\ef45"
    },
    "icon-basecamp:before": {
        "content": "\\ef46"
    },
    "icon-trello2:before": {
        "content": "\\ef47"
    },
    "icon-wordpress2:before": {
        "content": "\\ef48"
    },
    "icon-joomla2:before": {
        "content": "\\ef49"
    },
    "icon-ello:before": {
        "content": "\\ef4a"
    },
    "icon-blogger:before": {
        "content": "\\ef4b"
    },
    "icon-blogger2:before": {
        "content": "\\ef4c"
    },
    "icon-tumblr2:before": {
        "content": "\\ef4d"
    },
    "icon-tumblr22:before": {
        "content": "\\ef4e"
    },
    "icon-yahoo2:before": {
        "content": "\\ef4f"
    },
    "icon-yahoo22:before": {
        "content": "\\ef50"
    },
    "icon-tux:before": {
        "content": "\\ef51"
    },
    "icon-appleinc:before": {
        "content": "\\ef52"
    },
    "icon-finder:before": {
        "content": "\\ef53"
    },
    "icon-android2:before": {
        "content": "\\ef54"
    },
    "icon-windows2:before": {
        "content": "\\ef55"
    },
    "icon-windows8:before": {
        "content": "\\ef56"
    },
    "icon-soundcloud2:before": {
        "content": "\\ef57"
    },
    "icon-soundcloud22:before": {
        "content": "\\ef58"
    },
    "icon-skype2:before": {
        "content": "\\ef59"
    },
    "icon-reddit2:before": {
        "content": "\\ef5a"
    },
    "icon-hackernews:before": {
        "content": "\\ef5b"
    },
    "icon-wikipedia:before": {
        "content": "\\ef5c"
    },
    "icon-linkedin2:before": {
        "content": "\\ef5d"
    },
    "icon-linkedin22:before": {
        "content": "\\ef5e"
    },
    "icon-lastfm2:before": {
        "content": "\\ef5f"
    },
    "icon-lastfm22:before": {
        "content": "\\ef60"
    },
    "icon-delicious2:before": {
        "content": "\\ef61"
    },
    "icon-stumbleupon2:before": {
        "content": "\\ef62"
    },
    "icon-stumbleupon22:before": {
        "content": "\\ef63"
    },
    "icon-stackoverflow:before": {
        "content": "\\ef64"
    },
    "icon-pinterest2:before": {
        "content": "\\ef65"
    },
    "icon-pinterest22:before": {
        "content": "\\ef66"
    },
    "icon-xing2:before": {
        "content": "\\ef67"
    },
    "icon-xing22:before": {
        "content": "\\ef68"
    },
    "icon-flattr:before": {
        "content": "\\ef69"
    },
    "icon-foursquare2:before": {
        "content": "\\ef6a"
    },
    "icon-yelp2:before": {
        "content": "\\ef6b"
    },
    "icon-paypal2:before": {
        "content": "\\ef6c"
    },
    "icon-chrome2:before": {
        "content": "\\ef6d"
    },
    "icon-firefox2:before": {
        "content": "\\ef6e"
    },
    "icon-IE:before": {
        "content": "\\ef6f"
    },
    "icon-edge2:before": {
        "content": "\\ef70"
    },
    "icon-safari2:before": {
        "content": "\\ef71"
    },
    "icon-opera2:before": {
        "content": "\\ef72"
    },
    "icon-file-pdf:before": {
        "content": "\\ef73"
    },
    "icon-file-openoffice:before": {
        "content": "\\ef74"
    },
    "icon-file-word:before": {
        "content": "\\ef75"
    },
    "icon-file-excel:before": {
        "content": "\\ef76"
    },
    "icon-libreoffice:before": {
        "content": "\\ef77"
    },
    "icon-html-five:before": {
        "content": "\\ef78"
    },
    "icon-html-five2:before": {
        "content": "\\ef79"
    },
    "icon-css32:before": {
        "content": "\\ef7a"
    },
    "icon-git2:before": {
        "content": "\\ef7b"
    },
    "icon-codepen2:before": {
        "content": "\\ef7c"
    },
    "icon-svg:before": {
        "content": "\\ef7d"
    },
    "icon-IcoMoon:before": {
        "content": "\\ef7e"
    },
    "icon-asterisk:before": {
        "content": "\\f06f"
    },
    "icon-plus:before": {
        "content": "\\f079"
    },
    "icon-question:before": {
        "content": "\\f128"
    },
    "icon-minus:before": {
        "content": "\\f07a"
    },
    "icon-glass:before": {
        "content": "\\f003"
    },
    "icon-music:before": {
        "content": "\\f004"
    },
    "icon-search:before": {
        "content": "\\f00f"
    },
    "icon-envelope-o:before": {
        "content": "\\f01a"
    },
    "icon-heart:before": {
        "content": "\\f01b"
    },
    "icon-star:before": {
        "content": "\\f01c"
    },
    "icon-star-o:before": {
        "content": "\\f01d"
    },
    "icon-user:before": {
        "content": "\\f01e"
    },
    "icon-film:before": {
        "content": "\\f021"
    },
    "icon-th-large:before": {
        "content": "\\f022"
    },
    "icon-th:before": {
        "content": "\\f025"
    },
    "icon-th-list:before": {
        "content": "\\f029"
    },
    "icon-check:before": {
        "content": "\\f04b"
    },
    "icon-close:before": {
        "content": "\\f050"
    },
    "icon-remove:before": {
        "content": "\\f050"
    },
    "icon-times:before": {
        "content": "\\f050"
    },
    "icon-search-plus:before": {
        "content": "\\f054"
    },
    "icon-search-minus:before": {
        "content": "\\f055"
    },
    "icon-power-off:before": {
        "content": "\\f082"
    },
    "icon-signal:before": {
        "content": "\\f083"
    },
    "icon-cog:before": {
        "content": "\\f086"
    },
    "icon-gear:before": {
        "content": "\\f086"
    },
    "icon-trash-o:before": {
        "content": "\\f090"
    },
    "icon-home:before": {
        "content": "\\f093"
    },
    "icon-file-o:before": {
        "content": "\\f095"
    },
    "icon-clock-o:before": {
        "content": "\\f098"
    },
    "icon-road:before": {
        "content": "\\f09b"
    },
    "icon-download:before": {
        "content": "\\f0ab"
    },
    "icon-arrow-circle-o-down:before": {
        "content": "\\f0ad"
    },
    "icon-arrow-circle-o-up:before": {
        "content": "\\f0ae"
    },
    "icon-inbox:before": {
        "content": "\\f0b3"
    },
    "icon-play-circle-o:before": {
        "content": "\\f0b4"
    },
    "icon-repeat:before": {
        "content": "\\f0b5"
    },
    "icon-rotate-right:before": {
        "content": "\\f0b5"
    },
    "icon-refresh:before": {
        "content": "\\f0b7"
    },
    "icon-list-alt:before": {
        "content": "\\f0b8"
    },
    "icon-lock:before": {
        "content": "\\f0b9"
    },
    "icon-flag:before": {
        "content": "\\f0c1"
    },
    "icon-headphones:before": {
        "content": "\\f0c2"
    },
    "icon-volume-off:before": {
        "content": "\\f0c3"
    },
    "icon-volume-down:before": {
        "content": "\\f0cb"
    },
    "icon-volume-up:before": {
        "content": "\\f0cd"
    },
    "icon-qrcode:before": {
        "content": "\\f0ce"
    },
    "icon-barcode:before": {
        "content": "\\f0d5"
    },
    "icon-tag:before": {
        "content": "\\f0d9"
    },
    "icon-tags:before": {
        "content": "\\f0da"
    },
    "icon-book:before": {
        "content": "\\f0db"
    },
    "icon-bookmark:before": {
        "content": "\\f0dc"
    },
    "icon-print:before": {
        "content": "\\f0dd"
    },
    "icon-camera:before": {
        "content": "\\f0de"
    },
    "icon-font:before": {
        "content": "\\f0df"
    },
    "icon-bold:before": {
        "content": "\\f0e0"
    },
    "icon-italic:before": {
        "content": "\\f0e1"
    },
    "icon-text-height:before": {
        "content": "\\f0e2"
    },
    "icon-text-width:before": {
        "content": "\\f0e3"
    },
    "icon-align-left:before": {
        "content": "\\f0e4"
    },
    "icon-align-center:before": {
        "content": "\\f0e5"
    },
    "icon-align-right:before": {
        "content": "\\f0e6"
    },
    "icon-align-justify:before": {
        "content": "\\f0e7"
    },
    "icon-list:before": {
        "content": "\\f0e8"
    },
    "icon-dedent:before": {
        "content": "\\f0e9"
    },
    "icon-outdent:before": {
        "content": "\\f0e9"
    },
    "icon-indent:before": {
        "content": "\\f0ea"
    },
    "icon-video-camera:before": {
        "content": "\\f0eb"
    },
    "icon-image:before": {
        "content": "\\f0ec"
    },
    "icon-photo:before": {
        "content": "\\f0ec"
    },
    "icon-picture-o:before": {
        "content": "\\f0ec"
    },
    "icon-pencil:before": {
        "content": "\\f0ed"
    },
    "icon-map-marker:before": {
        "content": "\\f0ee"
    },
    "icon-adjust:before": {
        "content": "\\f0ef"
    },
    "icon-tint:before": {
        "content": "\\f0f0"
    },
    "icon-edit:before": {
        "content": "\\f0f1"
    },
    "icon-pencil-square-o:before": {
        "content": "\\f0f1"
    },
    "icon-share-square-o:before": {
        "content": "\\f0f2"
    },
    "icon-check-square-o:before": {
        "content": "\\f0f3"
    },
    "icon-arrows:before": {
        "content": "\\f0f4"
    },
    "icon-step-backward:before": {
        "content": "\\f0f5"
    },
    "icon-fast-backward:before": {
        "content": "\\f0f6"
    },
    "icon-backward:before": {
        "content": "\\f0f7"
    },
    "icon-play:before": {
        "content": "\\f0f8"
    },
    "icon-pause:before": {
        "content": "\\f0f9"
    },
    "icon-stop:before": {
        "content": "\\f0fa"
    },
    "icon-forward:before": {
        "content": "\\f0fb"
    },
    "icon-fast-forward:before": {
        "content": "\\f0fc"
    },
    "icon-step-forward:before": {
        "content": "\\f0fd"
    },
    "icon-eject:before": {
        "content": "\\f0fe"
    },
    "icon-chevron-left:before": {
        "content": "\\f0ff"
    },
    "icon-chevron-right:before": {
        "content": "\\f100"
    },
    "icon-plus-circle:before": {
        "content": "\\f101"
    },
    "icon-minus-circle:before": {
        "content": "\\f102"
    },
    "icon-times-circle:before": {
        "content": "\\f103"
    },
    "icon-check-circle:before": {
        "content": "\\f104"
    },
    "icon-question-circle:before": {
        "content": "\\f105"
    },
    "icon-info-circle:before": {
        "content": "\\f106"
    },
    "icon-crosshairs:before": {
        "content": "\\f107"
    },
    "icon-times-circle-o:before": {
        "content": "\\f108"
    },
    "icon-check-circle-o:before": {
        "content": "\\f109"
    },
    "icon-ban:before": {
        "content": "\\f10a"
    },
    "icon-arrow-left:before": {
        "content": "\\f10b"
    },
    "icon-arrow-right:before": {
        "content": "\\f10c"
    },
    "icon-arrow-up:before": {
        "content": "\\f10d"
    },
    "icon-arrow-down:before": {
        "content": "\\f10e"
    },
    "icon-mail-forward:before": {
        "content": "\\f10f"
    },
    "icon-share:before": {
        "content": "\\f10f"
    },
    "icon-expand:before": {
        "content": "\\f110"
    },
    "icon-compress:before": {
        "content": "\\f111"
    },
    "icon-exclamation-circle:before": {
        "content": "\\f112"
    },
    "icon-gift:before": {
        "content": "\\f113"
    },
    "icon-leaf:before": {
        "content": "\\f114"
    },
    "icon-fire:before": {
        "content": "\\f115"
    },
    "icon-eye:before": {
        "content": "\\f116"
    },
    "icon-eye-slash:before": {
        "content": "\\f117"
    },
    "icon-exclamation-triangle:before": {
        "content": "\\f118"
    },
    "icon-warning:before": {
        "content": "\\f118"
    },
    "icon-plane:before": {
        "content": "\\f119"
    },
    "icon-calendar:before": {
        "content": "\\f11a"
    },
    "icon-random:before": {
        "content": "\\f11b"
    },
    "icon-comment:before": {
        "content": "\\f11c"
    },
    "icon-magnet:before": {
        "content": "\\f11d"
    },
    "icon-chevron-up:before": {
        "content": "\\f11e"
    },
    "icon-chevron-down:before": {
        "content": "\\f11f"
    },
    "icon-retweet:before": {
        "content": "\\f120"
    },
    "icon-shopping-cart:before": {
        "content": "\\f121"
    },
    "icon-folder:before": {
        "content": "\\f122"
    },
    "icon-folder-open:before": {
        "content": "\\f123"
    },
    "icon-arrows-v:before": {
        "content": "\\f124"
    },
    "icon-arrows-h:before": {
        "content": "\\f125"
    },
    "icon-bar-chart:before": {
        "content": "\\f126"
    },
    "icon-bar-chart-o:before": {
        "content": "\\f126"
    },
    "icon-twitter-square:before": {
        "content": "\\f127"
    },
    "icon-facebook-square:before": {
        "content": "\\f129"
    },
    "icon-camera-retro:before": {
        "content": "\\f12a"
    },
    "icon-key:before": {
        "content": "\\f12b"
    },
    "icon-cogs:before": {
        "content": "\\f12c"
    },
    "icon-gears:before": {
        "content": "\\f12c"
    },
    "icon-comments:before": {
        "content": "\\f12d"
    },
    "icon-thumbs-o-up:before": {
        "content": "\\f12e"
    },
    "icon-thumbs-o-down:before": {
        "content": "\\f12f"
    },
    "icon-star-half:before": {
        "content": "\\f130"
    },
    "icon-heart-o:before": {
        "content": "\\f131"
    },
    "icon-sign-out:before": {
        "content": "\\f132"
    },
    "icon-linkedin-square:before": {
        "content": "\\f133"
    },
    "icon-thumb-tack:before": {
        "content": "\\f134"
    },
    "icon-external-link:before": {
        "content": "\\f135"
    },
    "icon-sign-in:before": {
        "content": "\\f136"
    },
    "icon-trophy:before": {
        "content": "\\f137"
    },
    "icon-github-square:before": {
        "content": "\\f138"
    },
    "icon-upload:before": {
        "content": "\\f139"
    },
    "icon-lemon-o:before": {
        "content": "\\f13a"
    },
    "icon-phone:before": {
        "content": "\\f13b"
    },
    "icon-square-o:before": {
        "content": "\\f13c"
    },
    "icon-bookmark-o:before": {
        "content": "\\f13d"
    },
    "icon-phone-square:before": {
        "content": "\\f13e"
    },
    "icon-twitter:before": {
        "content": "\\f13f"
    },
    "icon-facebook:before": {
        "content": "\\f140"
    },
    "icon-facebook-f:before": {
        "content": "\\f140"
    },
    "icon-github:before": {
        "content": "\\f141"
    },
    "icon-unlock:before": {
        "content": "\\f142"
    },
    "icon-credit-card:before": {
        "content": "\\f143"
    },
    "icon-feed:before": {
        "content": "\\f144"
    },
    "icon-rss:before": {
        "content": "\\f144"
    },
    "icon-hdd-o:before": {
        "content": "\\f145"
    },
    "icon-bullhorn:before": {
        "content": "\\f146"
    },
    "icon-bell-o:before": {
        "content": "\\f147"
    },
    "icon-certificate:before": {
        "content": "\\f148"
    },
    "icon-hand-o-right:before": {
        "content": "\\f149"
    },
    "icon-hand-o-left:before": {
        "content": "\\f14a"
    },
    "icon-hand-o-up:before": {
        "content": "\\f14b"
    },
    "icon-hand-o-down:before": {
        "content": "\\f14c"
    },
    "icon-arrow-circle-left:before": {
        "content": "\\f14d"
    },
    "icon-arrow-circle-right:before": {
        "content": "\\f14e"
    },
    "icon-arrow-circle-up:before": {
        "content": "\\f14f"
    },
    "icon-arrow-circle-down:before": {
        "content": "\\f150"
    },
    "icon-globe:before": {
        "content": "\\f151"
    },
    "icon-wrench:before": {
        "content": "\\f152"
    },
    "icon-tasks:before": {
        "content": "\\f153"
    },
    "icon-filter:before": {
        "content": "\\f154"
    },
    "icon-briefcase:before": {
        "content": "\\f155"
    },
    "icon-arrows-alt:before": {
        "content": "\\f156"
    },
    "icon-group:before": {
        "content": "\\f157"
    },
    "icon-users:before": {
        "content": "\\f157"
    },
    "icon-chain:before": {
        "content": "\\f158"
    },
    "icon-link:before": {
        "content": "\\f158"
    },
    "icon-cloud:before": {
        "content": "\\f159"
    },
    "icon-flask:before": {
        "content": "\\f15a"
    },
    "icon-cut:before": {
        "content": "\\f15b"
    },
    "icon-scissors:before": {
        "content": "\\f15b"
    },
    "icon-copy:before": {
        "content": "\\f15c"
    },
    "icon-files-o:before": {
        "content": "\\f15c"
    },
    "icon-paperclip:before": {
        "content": "\\f15d"
    },
    "icon-floppy-o:before": {
        "content": "\\f15e"
    },
    "icon-save:before": {
        "content": "\\f15e"
    },
    "icon-square:before": {
        "content": "\\f15f"
    },
    "icon-bars:before": {
        "content": "\\f160"
    },
    "icon-navicon:before": {
        "content": "\\f160"
    },
    "icon-reorder:before": {
        "content": "\\f160"
    },
    "icon-list-ul:before": {
        "content": "\\f161"
    },
    "icon-list-ol:before": {
        "content": "\\f162"
    },
    "icon-strikethrough:before": {
        "content": "\\f163"
    },
    "icon-underline:before": {
        "content": "\\f164"
    },
    "icon-table:before": {
        "content": "\\f165"
    },
    "icon-magic:before": {
        "content": "\\f166"
    },
    "icon-truck:before": {
        "content": "\\f167"
    },
    "icon-pinterest:before": {
        "content": "\\f168"
    },
    "icon-pinterest-square:before": {
        "content": "\\f169"
    },
    "icon-google-plus-square:before": {
        "content": "\\f16a"
    },
    "icon-google-plus:before": {
        "content": "\\f16b"
    },
    "icon-money:before": {
        "content": "\\f16c"
    },
    "icon-caret-down:before": {
        "content": "\\f16d"
    },
    "icon-caret-up:before": {
        "content": "\\f16e"
    },
    "icon-caret-left:before": {
        "content": "\\f16f"
    },
    "icon-caret-right:before": {
        "content": "\\f170"
    },
    "icon-columns:before": {
        "content": "\\f171"
    },
    "icon-sort:before": {
        "content": "\\f172"
    },
    "icon-unsorted:before": {
        "content": "\\f172"
    },
    "icon-sort-desc:before": {
        "content": "\\f173"
    },
    "icon-sort-down:before": {
        "content": "\\f173"
    },
    "icon-sort-asc:before": {
        "content": "\\f174"
    },
    "icon-sort-up:before": {
        "content": "\\f174"
    },
    "icon-envelope:before": {
        "content": "\\f175"
    },
    "icon-linkedin:before": {
        "content": "\\f176"
    },
    "icon-rotate-left:before": {
        "content": "\\f177"
    },
    "icon-undo:before": {
        "content": "\\f177"
    },
    "icon-gavel:before": {
        "content": "\\f178"
    },
    "icon-legal:before": {
        "content": "\\f178"
    },
    "icon-dashboard:before": {
        "content": "\\f179"
    },
    "icon-tachometer:before": {
        "content": "\\f179"
    },
    "icon-comment-o:before": {
        "content": "\\f17a"
    },
    "icon-comments-o:before": {
        "content": "\\f17b"
    },
    "icon-bolt:before": {
        "content": "\\f17c"
    },
    "icon-flash:before": {
        "content": "\\f17c"
    },
    "icon-sitemap:before": {
        "content": "\\f17d"
    },
    "icon-umbrella:before": {
        "content": "\\f17e"
    },
    "icon-clipboard:before": {
        "content": "\\f17f"
    },
    "icon-paste:before": {
        "content": "\\f17f"
    },
    "icon-lightbulb-o:before": {
        "content": "\\f180"
    },
    "icon-exchange:before": {
        "content": "\\f181"
    },
    "icon-cloud-download:before": {
        "content": "\\f182"
    },
    "icon-cloud-upload:before": {
        "content": "\\f183"
    },
    "icon-user-md:before": {
        "content": "\\f184"
    },
    "icon-stethoscope:before": {
        "content": "\\f185"
    },
    "icon-suitcase:before": {
        "content": "\\f186"
    },
    "icon-bell:before": {
        "content": "\\f187"
    },
    "icon-coffee:before": {
        "content": "\\f188"
    },
    "icon-cutlery:before": {
        "content": "\\f189"
    },
    "icon-file-text-o:before": {
        "content": "\\f18a"
    },
    "icon-building-o:before": {
        "content": "\\f18b"
    },
    "icon-hospital-o:before": {
        "content": "\\f18c"
    },
    "icon-ambulance:before": {
        "content": "\\f18d"
    },
    "icon-medkit:before": {
        "content": "\\f18e"
    },
    "icon-fighter-jet:before": {
        "content": "\\f18f"
    },
    "icon-beer:before": {
        "content": "\\f190"
    },
    "icon-h-square:before": {
        "content": "\\f191"
    },
    "icon-plus-square:before": {
        "content": "\\f192"
    },
    "icon-angle-double-left:before": {
        "content": "\\f193"
    },
    "icon-angle-double-right:before": {
        "content": "\\f194"
    },
    "icon-angle-double-up:before": {
        "content": "\\f195"
    },
    "icon-angle-double-down:before": {
        "content": "\\f196"
    },
    "icon-angle-left:before": {
        "content": "\\f197"
    },
    "icon-angle-right:before": {
        "content": "\\f198"
    },
    "icon-angle-up:before": {
        "content": "\\f199"
    },
    "icon-angle-down:before": {
        "content": "\\f19a"
    },
    "icon-desktop:before": {
        "content": "\\f19b"
    },
    "icon-laptop:before": {
        "content": "\\f19c"
    },
    "icon-tablet:before": {
        "content": "\\f19d"
    },
    "icon-mobile:before": {
        "content": "\\f19e"
    },
    "icon-mobile-phone:before": {
        "content": "\\f19e"
    },
    "icon-circle-o:before": {
        "content": "\\f19f"
    },
    "icon-quote-left:before": {
        "content": "\\f1a0"
    },
    "icon-quote-right:before": {
        "content": "\\f1a1"
    },
    "icon-spinner:before": {
        "content": "\\f1a2"
    },
    "icon-circle:before": {
        "content": "\\f1a3"
    },
    "icon-mail-reply:before": {
        "content": "\\f1a4"
    },
    "icon-reply:before": {
        "content": "\\f1a4"
    },
    "icon-github-alt:before": {
        "content": "\\f1a5"
    },
    "icon-folder-o:before": {
        "content": "\\f1a6"
    },
    "icon-folder-open-o:before": {
        "content": "\\f1a7"
    },
    "icon-smile-o:before": {
        "content": "\\f1a8"
    },
    "icon-frown-o:before": {
        "content": "\\f1a9"
    },
    "icon-meh-o:before": {
        "content": "\\f1aa"
    },
    "icon-gamepad:before": {
        "content": "\\f1ab"
    },
    "icon-keyboard-o:before": {
        "content": "\\f1ac"
    },
    "icon-flag-o:before": {
        "content": "\\f1ad"
    },
    "icon-flag-checkered:before": {
        "content": "\\f1ae"
    },
    "icon-terminal:before": {
        "content": "\\f1af"
    },
    "icon-code:before": {
        "content": "\\f1b0"
    },
    "icon-mail-reply-all:before": {
        "content": "\\f1b1"
    },
    "icon-reply-all:before": {
        "content": "\\f1b1"
    },
    "icon-star-half-empty:before": {
        "content": "\\f1b2"
    },
    "icon-star-half-full:before": {
        "content": "\\f1b2"
    },
    "icon-star-half-o:before": {
        "content": "\\f1b2"
    },
    "icon-location-arrow:before": {
        "content": "\\f1b3"
    },
    "icon-crop:before": {
        "content": "\\f1b4"
    },
    "icon-code-fork:before": {
        "content": "\\f1b5"
    },
    "icon-chain-broken:before": {
        "content": "\\f1b6"
    },
    "icon-unlink:before": {
        "content": "\\f1b6"
    },
    "icon-info:before": {
        "content": "\\f1b7"
    },
    "icon-exclamation:before": {
        "content": "\\f1b8"
    },
    "icon-superscript:before": {
        "content": "\\f1b9"
    },
    "icon-subscript:before": {
        "content": "\\f1ba"
    },
    "icon-eraser:before": {
        "content": "\\f1bb"
    },
    "icon-puzzle-piece:before": {
        "content": "\\f1bc"
    },
    "icon-microphone:before": {
        "content": "\\f1bd"
    },
    "icon-microphone-slash:before": {
        "content": "\\f1be"
    },
    "icon-shield:before": {
        "content": "\\f1bf"
    },
    "icon-calendar-o:before": {
        "content": "\\f1c0"
    },
    "icon-fire-extinguisher:before": {
        "content": "\\f1c1"
    },
    "icon-rocket:before": {
        "content": "\\f1c2"
    },
    "icon-maxcdn:before": {
        "content": "\\f1c3"
    },
    "icon-chevron-circle-left:before": {
        "content": "\\f1c4"
    },
    "icon-chevron-circle-right:before": {
        "content": "\\f1c5"
    },
    "icon-chevron-circle-up:before": {
        "content": "\\f1c6"
    },
    "icon-chevron-circle-down:before": {
        "content": "\\f1c7"
    },
    "icon-html5:before": {
        "content": "\\f1c8"
    },
    "icon-css3:before": {
        "content": "\\f1c9"
    },
    "icon-anchor:before": {
        "content": "\\f1ca"
    },
    "icon-unlock-alt:before": {
        "content": "\\f1cb"
    },
    "icon-bullseye:before": {
        "content": "\\f1cc"
    },
    "icon-ellipsis-h:before": {
        "content": "\\f1cd"
    },
    "icon-ellipsis-v:before": {
        "content": "\\f1ce"
    },
    "icon-rss-square:before": {
        "content": "\\f1cf"
    },
    "icon-play-circle:before": {
        "content": "\\f1d0"
    },
    "icon-ticket:before": {
        "content": "\\f1d1"
    },
    "icon-minus-square:before": {
        "content": "\\f1d2"
    },
    "icon-minus-square-o:before": {
        "content": "\\f1d3"
    },
    "icon-level-up:before": {
        "content": "\\f1d4"
    },
    "icon-level-down:before": {
        "content": "\\f1d5"
    },
    "icon-check-square:before": {
        "content": "\\f1d6"
    },
    "icon-pencil-square:before": {
        "content": "\\f1d7"
    },
    "icon-external-link-square:before": {
        "content": "\\f1d8"
    },
    "icon-share-square:before": {
        "content": "\\f1d9"
    },
    "icon-compass:before": {
        "content": "\\f1da"
    },
    "icon-caret-square-o-down:before": {
        "content": "\\f1db"
    },
    "icon-toggle-down:before": {
        "content": "\\f1db"
    },
    "icon-caret-square-o-up:before": {
        "content": "\\f1dc"
    },
    "icon-toggle-up:before": {
        "content": "\\f1dc"
    },
    "icon-caret-square-o-right:before": {
        "content": "\\f1dd"
    },
    "icon-toggle-right:before": {
        "content": "\\f1dd"
    },
    "icon-eur:before": {
        "content": "\\f1de"
    },
    "icon-euro:before": {
        "content": "\\f1de"
    },
    "icon-gbp:before": {
        "content": "\\f1df"
    },
    "icon-dollar:before": {
        "content": "\\f1e0"
    },
    "icon-usd:before": {
        "content": "\\f1e0"
    },
    "icon-inr:before": {
        "content": "\\f1e1"
    },
    "icon-rupee:before": {
        "content": "\\f1e1"
    },
    "icon-cny:before": {
        "content": "\\f1e2"
    },
    "icon-jpy:before": {
        "content": "\\f1e2"
    },
    "icon-rmb:before": {
        "content": "\\f1e2"
    },
    "icon-yen:before": {
        "content": "\\f1e2"
    },
    "icon-rouble:before": {
        "content": "\\f1e3"
    },
    "icon-rub:before": {
        "content": "\\f1e3"
    },
    "icon-ruble:before": {
        "content": "\\f1e3"
    },
    "icon-krw:before": {
        "content": "\\f1e4"
    },
    "icon-won:before": {
        "content": "\\f1e4"
    },
    "icon-bitcoin:before": {
        "content": "\\f1e5"
    },
    "icon-btc:before": {
        "content": "\\f1e5"
    },
    "icon-file:before": {
        "content": "\\f1e6"
    },
    "icon-file-text:before": {
        "content": "\\f1e7"
    },
    "icon-sort-alpha-asc:before": {
        "content": "\\f1e8"
    },
    "icon-sort-alpha-desc:before": {
        "content": "\\f1e9"
    },
    "icon-sort-amount-asc:before": {
        "content": "\\f1ea"
    },
    "icon-sort-amount-desc:before": {
        "content": "\\f1eb"
    },
    "icon-sort-numeric-asc:before": {
        "content": "\\f1ec"
    },
    "icon-sort-numeric-desc:before": {
        "content": "\\f1ed"
    },
    "icon-thumbs-up:before": {
        "content": "\\f1ee"
    },
    "icon-thumbs-down:before": {
        "content": "\\f1ef"
    },
    "icon-youtube-square:before": {
        "content": "\\f1f0"
    },
    "icon-youtube:before": {
        "content": "\\f1f1"
    },
    "icon-xing:before": {
        "content": "\\f1f2"
    },
    "icon-xing-square:before": {
        "content": "\\f1f3"
    },
    "icon-youtube-play:before": {
        "content": "\\f1f4"
    },
    "icon-dropbox:before": {
        "content": "\\f1f5"
    },
    "icon-stack-overflow:before": {
        "content": "\\f1f6"
    },
    "icon-instagram:before": {
        "content": "\\f1f7"
    },
    "icon-flickr:before": {
        "content": "\\f1f8"
    },
    "icon-adn:before": {
        "content": "\\f1f9"
    },
    "icon-bitbucket:before": {
        "content": "\\f1fa"
    },
    "icon-bitbucket-square:before": {
        "content": "\\f1fb"
    },
    "icon-tumblr:before": {
        "content": "\\f1fc"
    },
    "icon-tumblr-square:before": {
        "content": "\\f1fd"
    },
    "icon-long-arrow-down:before": {
        "content": "\\f1fe"
    },
    "icon-long-arrow-up:before": {
        "content": "\\f1ff"
    },
    "icon-long-arrow-left:before": {
        "content": "\\f200"
    },
    "icon-long-arrow-right:before": {
        "content": "\\f201"
    },
    "icon-apple:before": {
        "content": "\\f202"
    },
    "icon-windows:before": {
        "content": "\\f203"
    },
    "icon-android:before": {
        "content": "\\f204"
    },
    "icon-linux:before": {
        "content": "\\f205"
    },
    "icon-dribbble:before": {
        "content": "\\f206"
    },
    "icon-skype:before": {
        "content": "\\f207"
    },
    "icon-foursquare:before": {
        "content": "\\f208"
    },
    "icon-trello:before": {
        "content": "\\f209"
    },
    "icon-female:before": {
        "content": "\\f20a"
    },
    "icon-male:before": {
        "content": "\\f20b"
    },
    "icon-gittip:before": {
        "content": "\\f20c"
    },
    "icon-gratipay:before": {
        "content": "\\f20c"
    },
    "icon-sun-o:before": {
        "content": "\\f20d"
    },
    "icon-moon-o:before": {
        "content": "\\f20e"
    },
    "icon-archive:before": {
        "content": "\\f20f"
    },
    "icon-bug:before": {
        "content": "\\f210"
    },
    "icon-vk:before": {
        "content": "\\f211"
    },
    "icon-weibo:before": {
        "content": "\\f212"
    },
    "icon-renren:before": {
        "content": "\\f213"
    },
    "icon-pagelines:before": {
        "content": "\\f214"
    },
    "icon-stack-exchange:before": {
        "content": "\\f215"
    },
    "icon-arrow-circle-o-right:before": {
        "content": "\\f216"
    },
    "icon-arrow-circle-o-left:before": {
        "content": "\\f217"
    },
    "icon-caret-square-o-left:before": {
        "content": "\\f218"
    },
    "icon-toggle-left:before": {
        "content": "\\f218"
    },
    "icon-dot-circle-o:before": {
        "content": "\\f219"
    },
    "icon-wheelchair:before": {
        "content": "\\f21a"
    },
    "icon-vimeo-square:before": {
        "content": "\\f21b"
    },
    "icon-try:before": {
        "content": "\\f21c"
    },
    "icon-turkish-lira:before": {
        "content": "\\f21c"
    },
    "icon-plus-square-o:before": {
        "content": "\\f21d"
    },
    "icon-space-shuttle:before": {
        "content": "\\f21e"
    },
    "icon-slack:before": {
        "content": "\\f21f"
    },
    "icon-envelope-square:before": {
        "content": "\\f220"
    },
    "icon-wordpress:before": {
        "content": "\\f221"
    },
    "icon-openid:before": {
        "content": "\\f222"
    },
    "icon-bank:before": {
        "content": "\\f223"
    },
    "icon-institution:before": {
        "content": "\\f223"
    },
    "icon-university:before": {
        "content": "\\f223"
    },
    "icon-graduation-cap:before": {
        "content": "\\f224"
    },
    "icon-mortar-board:before": {
        "content": "\\f224"
    },
    "icon-yahoo:before": {
        "content": "\\f225"
    },
    "icon-google:before": {
        "content": "\\f226"
    },
    "icon-reddit:before": {
        "content": "\\f227"
    },
    "icon-reddit-square:before": {
        "content": "\\f228"
    },
    "icon-stumbleupon-circle:before": {
        "content": "\\f229"
    },
    "icon-stumbleupon:before": {
        "content": "\\f22a"
    },
    "icon-delicious:before": {
        "content": "\\f22b"
    },
    "icon-digg:before": {
        "content": "\\f22c"
    },
    "icon-pied-piper-pp:before": {
        "content": "\\f22d"
    },
    "icon-pied-piper-alt:before": {
        "content": "\\f22e"
    },
    "icon-drupal:before": {
        "content": "\\f22f"
    },
    "icon-joomla:before": {
        "content": "\\f230"
    },
    "icon-language:before": {
        "content": "\\f231"
    },
    "icon-fax:before": {
        "content": "\\f232"
    },
    "icon-building:before": {
        "content": "\\f233"
    },
    "icon-child:before": {
        "content": "\\f234"
    },
    "icon-paw:before": {
        "content": "\\f235"
    },
    "icon-spoon:before": {
        "content": "\\f236"
    },
    "icon-cube:before": {
        "content": "\\f237"
    },
    "icon-cubes:before": {
        "content": "\\f238"
    },
    "icon-behance:before": {
        "content": "\\f239"
    },
    "icon-behance-square:before": {
        "content": "\\f23a"
    },
    "icon-steam:before": {
        "content": "\\f23b"
    },
    "icon-steam-square:before": {
        "content": "\\f23c"
    },
    "icon-recycle:before": {
        "content": "\\f23d"
    },
    "icon-automobile:before": {
        "content": "\\f23e"
    },
    "icon-car:before": {
        "content": "\\f23e"
    },
    "icon-cab:before": {
        "content": "\\f23f"
    },
    "icon-taxi:before": {
        "content": "\\f23f"
    },
    "icon-tree:before": {
        "content": "\\f240"
    },
    "icon-spotify:before": {
        "content": "\\f241"
    },
    "icon-deviantart:before": {
        "content": "\\f242"
    },
    "icon-soundcloud:before": {
        "content": "\\f243"
    },
    "icon-database:before": {
        "content": "\\f244"
    },
    "icon-file-pdf-o:before": {
        "content": "\\f245"
    },
    "icon-file-word-o:before": {
        "content": "\\f246"
    },
    "icon-file-excel-o:before": {
        "content": "\\f247"
    },
    "icon-file-powerpoint-o:before": {
        "content": "\\f248"
    },
    "icon-file-image-o:before": {
        "content": "\\f249"
    },
    "icon-file-photo-o:before": {
        "content": "\\f249"
    },
    "icon-file-picture-o:before": {
        "content": "\\f249"
    },
    "icon-file-archive-o:before": {
        "content": "\\f24a"
    },
    "icon-file-zip-o:before": {
        "content": "\\f24a"
    },
    "icon-file-audio-o:before": {
        "content": "\\f24b"
    },
    "icon-file-sound-o:before": {
        "content": "\\f24b"
    },
    "icon-file-movie-o:before": {
        "content": "\\f24c"
    },
    "icon-file-video-o:before": {
        "content": "\\f24c"
    },
    "icon-file-code-o:before": {
        "content": "\\f24d"
    },
    "icon-vine:before": {
        "content": "\\f24e"
    },
    "icon-codepen:before": {
        "content": "\\f24f"
    },
    "icon-jsfiddle:before": {
        "content": "\\f250"
    },
    "icon-life-bouy:before": {
        "content": "\\f251"
    },
    "icon-life-buoy:before": {
        "content": "\\f251"
    },
    "icon-life-ring:before": {
        "content": "\\f251"
    },
    "icon-life-saver:before": {
        "content": "\\f251"
    },
    "icon-support:before": {
        "content": "\\f251"
    },
    "icon-circle-o-notch:before": {
        "content": "\\f252"
    },
    "icon-ra:before": {
        "content": "\\f253"
    },
    "icon-rebel:before": {
        "content": "\\f253"
    },
    "icon-resistance:before": {
        "content": "\\f253"
    },
    "icon-empire:before": {
        "content": "\\f254"
    },
    "icon-ge:before": {
        "content": "\\f254"
    },
    "icon-git-square:before": {
        "content": "\\f255"
    },
    "icon-git:before": {
        "content": "\\f256"
    },
    "icon-hacker-news:before": {
        "content": "\\f257"
    },
    "icon-y-combinator-square:before": {
        "content": "\\f257"
    },
    "icon-yc-square:before": {
        "content": "\\f257"
    },
    "icon-tencent-weibo:before": {
        "content": "\\f258"
    },
    "icon-qq:before": {
        "content": "\\f259"
    },
    "icon-wechat:before": {
        "content": "\\f25a"
    },
    "icon-weixin:before": {
        "content": "\\f25a"
    },
    "icon-paper-plane:before": {
        "content": "\\f25b"
    },
    "icon-send:before": {
        "content": "\\f25b"
    },
    "icon-paper-plane-o:before": {
        "content": "\\f25c"
    },
    "icon-send-o:before": {
        "content": "\\f25c"
    },
    "icon-history:before": {
        "content": "\\f25d"
    },
    "icon-circle-thin:before": {
        "content": "\\f25e"
    },
    "icon-header:before": {
        "content": "\\f25f"
    },
    "icon-paragraph:before": {
        "content": "\\f260"
    },
    "icon-sliders:before": {
        "content": "\\f261"
    },
    "icon-share-alt:before": {
        "content": "\\f262"
    },
    "icon-share-alt-square:before": {
        "content": "\\f263"
    },
    "icon-bomb:before": {
        "content": "\\f264"
    },
    "icon-futbol-o:before": {
        "content": "\\f265"
    },
    "icon-soccer-ball-o:before": {
        "content": "\\f265"
    },
    "icon-tty:before": {
        "content": "\\f266"
    },
    "icon-binoculars:before": {
        "content": "\\f267"
    },
    "icon-plug:before": {
        "content": "\\f268"
    },
    "icon-slideshare:before": {
        "content": "\\f269"
    },
    "icon-twitch:before": {
        "content": "\\f26a"
    },
    "icon-yelp:before": {
        "content": "\\f26b"
    },
    "icon-newspaper-o:before": {
        "content": "\\f26c"
    },
    "icon-wifi:before": {
        "content": "\\f26d"
    },
    "icon-calculator:before": {
        "content": "\\f26e"
    },
    "icon-paypal:before": {
        "content": "\\f26f"
    },
    "icon-google-wallet:before": {
        "content": "\\f270"
    },
    "icon-cc-visa:before": {
        "content": "\\f271"
    },
    "icon-cc-mastercard:before": {
        "content": "\\f272"
    },
    "icon-cc-discover:before": {
        "content": "\\f273"
    },
    "icon-cc-amex:before": {
        "content": "\\f274"
    },
    "icon-cc-paypal:before": {
        "content": "\\f275"
    },
    "icon-cc-stripe:before": {
        "content": "\\f276"
    },
    "icon-bell-slash:before": {
        "content": "\\f277"
    },
    "icon-bell-slash-o:before": {
        "content": "\\f278"
    },
    "icon-trash:before": {
        "content": "\\f279"
    },
    "icon-copyright:before": {
        "content": "\\f27a"
    },
    "icon-at:before": {
        "content": "\\f27b"
    },
    "icon-eyedropper:before": {
        "content": "\\f27d"
    },
    "icon-paint-brush:before": {
        "content": "\\f27e"
    },
    "icon-birthday-cake:before": {
        "content": "\\f27f"
    },
    "icon-area-chart:before": {
        "content": "\\f280"
    },
    "icon-pie-chart:before": {
        "content": "\\f281"
    },
    "icon-line-chart:before": {
        "content": "\\f282"
    },
    "icon-lastfm:before": {
        "content": "\\f283"
    },
    "icon-lastfm-square:before": {
        "content": "\\f284"
    },
    "icon-toggle-off:before": {
        "content": "\\f285"
    },
    "icon-toggle-on:before": {
        "content": "\\f286"
    },
    "icon-bicycle:before": {
        "content": "\\f287"
    },
    "icon-bus:before": {
        "content": "\\f288"
    },
    "icon-ioxhost:before": {
        "content": "\\f289"
    },
    "icon-angellist:before": {
        "content": "\\f28a"
    },
    "icon-cc:before": {
        "content": "\\f28b"
    },
    "icon-ils:before": {
        "content": "\\f28c"
    },
    "icon-shekel:before": {
        "content": "\\f28c"
    },
    "icon-sheqel:before": {
        "content": "\\f28c"
    },
    "icon-meanpath:before": {
        "content": "\\f28d"
    },
    "icon-buysellads:before": {
        "content": "\\f28e"
    },
    "icon-connectdevelop:before": {
        "content": "\\f28f"
    },
    "icon-dashcube:before": {
        "content": "\\f290"
    },
    "icon-forumbee:before": {
        "content": "\\f291"
    },
    "icon-leanpub:before": {
        "content": "\\f292"
    },
    "icon-sellsy:before": {
        "content": "\\f293"
    },
    "icon-shirtsinbulk:before": {
        "content": "\\f294"
    },
    "icon-simplybuilt:before": {
        "content": "\\f295"
    },
    "icon-skyatlas:before": {
        "content": "\\f296"
    },
    "icon-cart-plus:before": {
        "content": "\\f297"
    },
    "icon-cart-arrow-down:before": {
        "content": "\\f298"
    },
    "icon-diamond:before": {
        "content": "\\f299"
    },
    "icon-ship:before": {
        "content": "\\f29a"
    },
    "icon-user-secret:before": {
        "content": "\\f29b"
    },
    "icon-motorcycle:before": {
        "content": "\\f29c"
    },
    "icon-street-view:before": {
        "content": "\\f29d"
    },
    "icon-heartbeat:before": {
        "content": "\\f29e"
    },
    "icon-venus:before": {
        "content": "\\f29f"
    },
    "icon-mars:before": {
        "content": "\\f2a0"
    },
    "icon-mercury:before": {
        "content": "\\f2a1"
    },
    "icon-intersex:before": {
        "content": "\\f2a2"
    },
    "icon-transgender:before": {
        "content": "\\f2a2"
    },
    "icon-transgender-alt:before": {
        "content": "\\f2a3"
    },
    "icon-venus-double:before": {
        "content": "\\f2a4"
    },
    "icon-mars-double:before": {
        "content": "\\f2a5"
    },
    "icon-venus-mars:before": {
        "content": "\\f2a6"
    },
    "icon-mars-stroke:before": {
        "content": "\\f2a7"
    },
    "icon-mars-stroke-v:before": {
        "content": "\\f2a8"
    },
    "icon-mars-stroke-h:before": {
        "content": "\\f2a9"
    },
    "icon-neuter:before": {
        "content": "\\f2aa"
    },
    "icon-genderless:before": {
        "content": "\\f2ab"
    },
    "icon-facebook-official:before": {
        "content": "\\f2ac"
    },
    "icon-pinterest-p:before": {
        "content": "\\f2ad"
    },
    "icon-whatsapp:before": {
        "content": "\\f2ae"
    },
    "icon-server:before": {
        "content": "\\f2af"
    },
    "icon-user-plus:before": {
        "content": "\\f2b0"
    },
    "icon-user-times:before": {
        "content": "\\f2b1"
    },
    "icon-bed:before": {
        "content": "\\f2b2"
    },
    "icon-hotel:before": {
        "content": "\\f2b2"
    },
    "icon-viacoin:before": {
        "content": "\\f2b3"
    },
    "icon-train:before": {
        "content": "\\f2b4"
    },
    "icon-subway:before": {
        "content": "\\f2b5"
    },
    "icon-medium:before": {
        "content": "\\f2b6"
    },
    "icon-y-combinator:before": {
        "content": "\\f2b7"
    },
    "icon-yc:before": {
        "content": "\\f2b7"
    },
    "icon-optin-monster:before": {
        "content": "\\f2b8"
    },
    "icon-opencart:before": {
        "content": "\\f2b9"
    },
    "icon-expeditedssl:before": {
        "content": "\\f2ba"
    },
    "icon-battery:before": {
        "content": "\\f2bb"
    },
    "icon-battery-4:before": {
        "content": "\\f2bb"
    },
    "icon-battery-full:before": {
        "content": "\\f2bb"
    },
    "icon-battery-3:before": {
        "content": "\\f2bc"
    },
    "icon-battery-three-quarters:before": {
        "content": "\\f2bc"
    },
    "icon-battery-2:before": {
        "content": "\\f2bd"
    },
    "icon-battery-half:before": {
        "content": "\\f2bd"
    },
    "icon-battery-1:before": {
        "content": "\\f2be"
    },
    "icon-battery-quarter:before": {
        "content": "\\f2be"
    },
    "icon-battery-0:before": {
        "content": "\\f2bf"
    },
    "icon-battery-empty:before": {
        "content": "\\f2bf"
    },
    "icon-mouse-pointer:before": {
        "content": "\\f2c0"
    },
    "icon-i-cursor:before": {
        "content": "\\f2c1"
    },
    "icon-object-group:before": {
        "content": "\\f2c2"
    },
    "icon-object-ungroup:before": {
        "content": "\\f2c3"
    },
    "icon-sticky-note:before": {
        "content": "\\f2c4"
    },
    "icon-sticky-note-o:before": {
        "content": "\\f2c5"
    },
    "icon-cc-jcb:before": {
        "content": "\\f2c6"
    },
    "icon-cc-diners-club:before": {
        "content": "\\f2c7"
    },
    "icon-clone:before": {
        "content": "\\f2c8"
    },
    "icon-balance-scale:before": {
        "content": "\\f2c9"
    },
    "icon-hourglass-o:before": {
        "content": "\\f2ca"
    },
    "icon-hourglass-1:before": {
        "content": "\\f2cb"
    },
    "icon-hourglass-start:before": {
        "content": "\\f2cb"
    },
    "icon-hourglass-2:before": {
        "content": "\\f2cc"
    },
    "icon-hourglass-half:before": {
        "content": "\\f2cc"
    },
    "icon-hourglass-3:before": {
        "content": "\\f2cd"
    },
    "icon-hourglass-end:before": {
        "content": "\\f2cd"
    },
    "icon-hourglass:before": {
        "content": "\\f2ce"
    },
    "icon-hand-grab-o:before": {
        "content": "\\f2cf"
    },
    "icon-hand-rock-o:before": {
        "content": "\\f2cf"
    },
    "icon-hand-paper-o:before": {
        "content": "\\f2d0"
    },
    "icon-hand-stop-o:before": {
        "content": "\\f2d0"
    },
    "icon-hand-scissors-o:before": {
        "content": "\\f2d1"
    },
    "icon-hand-lizard-o:before": {
        "content": "\\f2d2"
    },
    "icon-hand-spock-o:before": {
        "content": "\\f2d3"
    },
    "icon-hand-pointer-o:before": {
        "content": "\\f2d4"
    },
    "icon-hand-peace-o:before": {
        "content": "\\f2d5"
    },
    "icon-trademark:before": {
        "content": "\\f2d6"
    },
    "icon-registered:before": {
        "content": "\\f2d7"
    },
    "icon-creative-commons:before": {
        "content": "\\f2d8"
    },
    "icon-gg:before": {
        "content": "\\f2d9"
    },
    "icon-gg-circle:before": {
        "content": "\\f2da"
    },
    "icon-tripadvisor:before": {
        "content": "\\f2db"
    },
    "icon-odnoklassniki:before": {
        "content": "\\f2dc"
    },
    "icon-odnoklassniki-square:before": {
        "content": "\\f2dd"
    },
    "icon-get-pocket:before": {
        "content": "\\f2de"
    },
    "icon-wikipedia-w:before": {
        "content": "\\f2df"
    },
    "icon-safari:before": {
        "content": "\\f2e0"
    },
    "icon-chrome:before": {
        "content": "\\f2e1"
    },
    "icon-firefox:before": {
        "content": "\\f2e2"
    },
    "icon-opera:before": {
        "content": "\\f2e3"
    },
    "icon-internet-explorer:before": {
        "content": "\\f2e4"
    },
    "icon-television:before": {
        "content": "\\f2e5"
    },
    "icon-tv:before": {
        "content": "\\f2e5"
    },
    "icon-contao:before": {
        "content": "\\f2e6"
    },
    "icon-500px:before": {
        "content": "\\f2e7"
    },
    "icon-amazon:before": {
        "content": "\\f2e8"
    },
    "icon-calendar-plus-o:before": {
        "content": "\\f2e9"
    },
    "icon-calendar-minus-o:before": {
        "content": "\\f2ea"
    },
    "icon-calendar-times-o:before": {
        "content": "\\f2eb"
    },
    "icon-calendar-check-o:before": {
        "content": "\\f2ec"
    },
    "icon-industry:before": {
        "content": "\\f2ed"
    },
    "icon-map-pin:before": {
        "content": "\\f2ee"
    },
    "icon-map-signs:before": {
        "content": "\\f2ef"
    },
    "icon-map-o:before": {
        "content": "\\f2f0"
    },
    "icon-map:before": {
        "content": "\\f2f1"
    },
    "icon-commenting:before": {
        "content": "\\f2f2"
    },
    "icon-commenting-o:before": {
        "content": "\\f2f3"
    },
    "icon-houzz:before": {
        "content": "\\f2f4"
    },
    "icon-vimeo:before": {
        "content": "\\f2f5"
    },
    "icon-black-tie:before": {
        "content": "\\f2f6"
    },
    "icon-fonticons:before": {
        "content": "\\f2f7"
    },
    "icon-reddit-alien:before": {
        "content": "\\f2f8"
    },
    "icon-edge:before": {
        "content": "\\f2f9"
    },
    "icon-credit-card-alt:before": {
        "content": "\\f2fa"
    },
    "icon-codiepie:before": {
        "content": "\\f2fb"
    },
    "icon-modx:before": {
        "content": "\\f2fc"
    },
    "icon-fort-awesome:before": {
        "content": "\\f2fd"
    },
    "icon-usb:before": {
        "content": "\\f2fe"
    },
    "icon-product-hunt:before": {
        "content": "\\f2ff"
    },
    "icon-mixcloud:before": {
        "content": "\\f300"
    },
    "icon-scribd:before": {
        "content": "\\f301"
    },
    "icon-pause-circle:before": {
        "content": "\\f302"
    },
    "icon-pause-circle-o:before": {
        "content": "\\f303"
    },
    "icon-stop-circle:before": {
        "content": "\\f304"
    },
    "icon-stop-circle-o:before": {
        "content": "\\f305"
    },
    "icon-shopping-bag:before": {
        "content": "\\f306"
    },
    "icon-shopping-basket:before": {
        "content": "\\f307"
    },
    "icon-hashtag:before": {
        "content": "\\f308"
    },
    "icon-bluetooth:before": {
        "content": "\\f309"
    },
    "icon-bluetooth-b:before": {
        "content": "\\f30a"
    },
    "icon-percent:before": {
        "content": "\\f30b"
    },
    "icon-gitlab:before": {
        "content": "\\f30c"
    },
    "icon-wpbeginner:before": {
        "content": "\\f30d"
    },
    "icon-wpforms:before": {
        "content": "\\f30e"
    },
    "icon-envira:before": {
        "content": "\\f30f"
    },
    "icon-universal-access:before": {
        "content": "\\f310"
    },
    "icon-wheelchair-alt:before": {
        "content": "\\f311"
    },
    "icon-question-circle-o:before": {
        "content": "\\f312"
    },
    "icon-blind:before": {
        "content": "\\f313"
    },
    "icon-audio-description:before": {
        "content": "\\f314"
    },
    "icon-volume-control-phone:before": {
        "content": "\\f315"
    },
    "icon-braille:before": {
        "content": "\\f316"
    },
    "icon-assistive-listening-systems:before": {
        "content": "\\f317"
    },
    "icon-american-sign-language-interpreting:before": {
        "content": "\\f318"
    },
    "icon-asl-interpreting:before": {
        "content": "\\f318"
    },
    "icon-deaf:before": {
        "content": "\\f319"
    },
    "icon-deafness:before": {
        "content": "\\f319"
    },
    "icon-hard-of-hearing:before": {
        "content": "\\f319"
    },
    "icon-glide:before": {
        "content": "\\f31a"
    },
    "icon-glide-g:before": {
        "content": "\\f31b"
    },
    "icon-sign-language:before": {
        "content": "\\f31c"
    },
    "icon-signing:before": {
        "content": "\\f31c"
    },
    "icon-low-vision:before": {
        "content": "\\f31d"
    },
    "icon-viadeo:before": {
        "content": "\\f31e"
    },
    "icon-viadeo-square:before": {
        "content": "\\f31f"
    },
    "icon-snapchat:before": {
        "content": "\\f320"
    },
    "icon-snapchat-ghost:before": {
        "content": "\\f321"
    },
    "icon-snapchat-square:before": {
        "content": "\\f322"
    },
    "icon-pied-piper:before": {
        "content": "\\f323"
    },
    "icon-first-order:before": {
        "content": "\\f324"
    },
    "icon-yoast:before": {
        "content": "\\f325"
    },
    "icon-themeisle:before": {
        "content": "\\f326"
    },
    "icon-google-plus-circle:before": {
        "content": "\\f327"
    },
    "icon-google-plus-official:before": {
        "content": "\\f327"
    },
    "icon-fa:before": {
        "content": "\\f328"
    },
    "icon-font-awesome:before": {
        "content": "\\f328"
    },
    "icon-handshake-o:before": {
        "content": "\\f329"
    },
    "icon-envelope-open:before": {
        "content": "\\f32a"
    },
    "icon-envelope-open-o:before": {
        "content": "\\f32b"
    },
    "icon-linode:before": {
        "content": "\\f32c"
    },
    "icon-address-book:before": {
        "content": "\\f32d"
    },
    "icon-address-book-o:before": {
        "content": "\\f32e"
    },
    "icon-address-card:before": {
        "content": "\\f32f"
    },
    "icon-vcard:before": {
        "content": "\\f32f"
    },
    "icon-address-card-o:before": {
        "content": "\\f330"
    },
    "icon-vcard-o:before": {
        "content": "\\f330"
    },
    "icon-user-circle:before": {
        "content": "\\f331"
    },
    "icon-user-circle-o:before": {
        "content": "\\f332"
    },
    "icon-user-o:before": {
        "content": "\\f333"
    },
    "icon-id-badge:before": {
        "content": "\\f334"
    },
    "icon-drivers-license:before": {
        "content": "\\f335"
    },
    "icon-id-card:before": {
        "content": "\\f335"
    },
    "icon-drivers-license-o:before": {
        "content": "\\f336"
    },
    "icon-id-card-o:before": {
        "content": "\\f336"
    },
    "icon-quora:before": {
        "content": "\\f337"
    },
    "icon-free-code-camp:before": {
        "content": "\\f338"
    },
    "icon-telegram:before": {
        "content": "\\f339"
    },
    "icon-thermometer:before": {
        "content": "\\f33a"
    },
    "icon-thermometer-4:before": {
        "content": "\\f33a"
    },
    "icon-thermometer-full:before": {
        "content": "\\f33a"
    },
    "icon-thermometer-3:before": {
        "content": "\\f33b"
    },
    "icon-thermometer-three-quarters:before": {
        "content": "\\f33b"
    },
    "icon-thermometer-2:before": {
        "content": "\\f33c"
    },
    "icon-thermometer-half:before": {
        "content": "\\f33c"
    },
    "icon-thermometer-1:before": {
        "content": "\\f33d"
    },
    "icon-thermometer-quarter:before": {
        "content": "\\f33d"
    },
    "icon-thermometer-0:before": {
        "content": "\\f33e"
    },
    "icon-thermometer-empty:before": {
        "content": "\\f33e"
    },
    "icon-shower:before": {
        "content": "\\f33f"
    },
    "icon-bath:before": {
        "content": "\\f340"
    },
    "icon-bathtub:before": {
        "content": "\\f340"
    },
    "icon-s15:before": {
        "content": "\\f340"
    },
    "icon-podcast:before": {
        "content": "\\f341"
    },
    "icon-window-maximize:before": {
        "content": "\\f342"
    },
    "icon-window-minimize:before": {
        "content": "\\f343"
    },
    "icon-window-restore:before": {
        "content": "\\f344"
    },
    "icon-times-rectangle:before": {
        "content": "\\f345"
    },
    "icon-window-close:before": {
        "content": "\\f345"
    },
    "icon-times-rectangle-o:before": {
        "content": "\\f346"
    },
    "icon-window-close-o:before": {
        "content": "\\f346"
    },
    "icon-bandcamp:before": {
        "content": "\\f347"
    },
    "icon-grav:before": {
        "content": "\\f348"
    },
    "icon-etsy:before": {
        "content": "\\f349"
    },
    "icon-imdb:before": {
        "content": "\\f34a"
    },
    "icon-ravelry:before": {
        "content": "\\f34b"
    },
    "icon-eercast:before": {
        "content": "\\f34c"
    },
    "icon-microchip:before": {
        "content": "\\f34d"
    },
    "icon-snowflake-o:before": {
        "content": "\\f34e"
    },
    "icon-superpowers:before": {
        "content": "\\f34f"
    },
    "icon-wpexplorer:before": {
        "content": "\\f350"
    },
    "icon-meetup:before": {
        "content": "\\f351"
    }
});