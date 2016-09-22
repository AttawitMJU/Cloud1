import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "skin-black-light main-header": {
        "WebkitBoxShadow": "0px 1px 1px rgba(0, 0, 0, 0.05)",
        "boxShadow": "0px 1px 1px rgba(0, 0, 0, 0.05)"
    },
    "skin-black-light main-header navbar-toggle": {
        "color": "#333"
    },
    "skin-black-light main-header navbar-brand": {
        "color": "#333",
        "borderRight": "1px solid #eee"
    },
    "skin-black-light main-header navbar": {
        "backgroundColor": "#ffffff"
    },
    "skin-black-light main-header navbar nav> li> a": {
        "color": "#333333"
    },
    "skin-black-light main-header navbar nav> active> a": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav> li> a:active": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav> li> a:focus": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav> li> a:hover": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav open> a": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav open> a:focus": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar nav open> a:hover": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar sidebar-toggle": {
        "color": "#333333"
    },
    "skin-black-light main-header navbar sidebar-toggle:hover": {
        "color": "#999999",
        "background": "#ffffff"
    },
    "skin-black-light main-header navbar> sidebar-toggle": {
        "color": "#333",
        "borderRight": "1px solid #eee"
    },
    "skin-black-light main-header navbar navbar-nav> li> a": {
        "borderRight": "1px solid #eee"
    },
    "skin-black-light main-header navbar navbar-custom-menu navbar-nav> li> a": {
        "borderLeft": "1px solid #eee",
        "borderRightWidth": 0
    },
    "skin-black-light main-header navbar navbar-right> li> a": {
        "borderLeft": "1px solid #eee",
        "borderRightWidth": 0
    },
    "skin-black-light main-header> logo": {
        "color": "#333333",
        "borderRight": "1px solid #eee",
        "borderBottom": "0 solid transparent",
        "backgroundColor": "#ffffff"
    },
    "skin-black-light main-header> logo:hover": {
        "backgroundColor": "#fcfcfc"
    },
    "skin-black-light main-header liuser-header": {
        "backgroundColor": "#222"
    },
    "skin-black-light content-header": {
        "background": "transparent",
        "boxShadow": "none"
    },
    "skin-black-light left-side": {
        "backgroundColor": "#f9fafc"
    },
    "skin-black-light main-sidebar": {
        "backgroundColor": "#f9fafc"
    },
    "skin-black-light wrapper": {
        "backgroundColor": "#f9fafc"
    },
    "skin-black-light content-wrapper": {
        "borderLeft": "1px solid #d2d6de"
    },
    "skin-black-light main-footer": {
        "borderLeft": "1px solid #d2d6de"
    },
    "skin-black-light user-panel> info": {
        "color": "#444444"
    },
    "skin-black-light user-panel> info> a": {
        "color": "#444444"
    },
    "skin-black-light sidebar-menu> li": {
        "OTransition": "border-left-color 0.3s ease",
        "WebkitTransition": "border-left-color 0.3s ease",
        "transition": "border-left-color 0.3s ease"
    },
    "skin-black-light sidebar-menu> liheader": {
        "color": "#848484",
        "background": "#f9fafc"
    },
    "skin-black-light sidebar-menu> li> a": {
        "borderLeft": "3px solid transparent",
        "fontWeight": "600"
    },
    "skin-black-light sidebar-menu> liactive> a": {
        "color": "#000000",
        "background": "#f4f4f5",
        "fontWeight": "600"
    },
    "skin-black-light sidebar-menu> li:hover> a": {
        "color": "#000000",
        "background": "#f4f4f5"
    },
    "skin-black-light sidebar-menu> liactive": {
        "borderLeftColor": "#ffffff"
    },
    "skin-black-light sidebar-menu> li> treeview-menu": {
        "background": "#f4f4f5"
    },
    "skin-black-light sidebar a": {
        "color": "#444444"
    },
    "skin-black-light sidebar a:hover": {
        "textDecoration": "none"
    },
    "skin-black-light treeview-menu> li> a": {
        "color": "#777777"
    },
    "skin-black-light treeview-menu> liactive> a": {
        "color": "#000000",
        "fontWeight": "600"
    },
    "skin-black-light treeview-menu> li> a:hover": {
        "color": "#000000"
    },
    "skin-black-light sidebar-form": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "border": "1px solid #d2d6de",
        "borderRadius": 3
    },
    "skin-black-light sidebar-form btn": {
        "height": 35,
        "border": "1px solid transparent",
        "backgroundColor": "#fff",
        "boxShadow": "none",
        "color": "#999",
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 2,
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 0
    },
    "skin-black-light sidebar-form input[type=\"text\"]": {
        "height": 35,
        "border": "1px solid transparent",
        "backgroundColor": "#fff",
        "boxShadow": "none",
        "color": "#666",
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 2
    },
    "skin-black-light sidebar-form input[type=\"text\"]:focus": {
        "color": "#666",
        "backgroundColor": "#fff"
    },
    "skin-black-light sidebar-form input[type=\"text\"]:focus+ input-group-btn btn": {
        "color": "#666",
        "backgroundColor": "#fff",
        "borderLeftColor": "#fff"
    }
});