(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["51b8be68"], {
    "04dd": function(e, t, n) {
        "use strict";
        n.r(t);
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("Layout")
            },
            o = [],
            i = n("ebad"),
            a = {
                name: "DefaultLayout",
                components: {
                    Layout: i["a"]
                }
            },
            r = a,
            c = n("2877"),
            l = Object(c["a"])(r, s, o, !1, null, null, null);
        t["default"] = l.exports
    },
    "895a": function(e, t, n) {
        "use strict";
        var s = n("b565"),
            o = n.n(s);
        o.a
    },
    "92b6": function(e, t, n) {
        t = e.exports = n("24fb")(!1),
        t.push([e.i, ".search-input{flex-grow:1;background:#eceef0;padding-left:12px;padding-right:12px}.expanding-input{background:#fff;width:100vw;position:absolute;top:0;left:0;overflow:hidden;display:flex}.expanding-input>.close-slot{display:flex;align-items:center;justify-content:center;width:40px}.expand-enter-active,.expand-leave-active{transition:width 0.7s;width:100vw}.expand-enter,.expand-leave-active{width:0}.topbar__container{z-index:990}", ""])
    },
    b565: function(e, t, n) {
        var s = n("92b6");
        "string" === typeof s && (s = [[e.i, s, ""]]),
        s.locals && (e.exports = s.locals);
        var o = n("499e").default;
        o("0295d6b6", s, !1, {
            sourceMap: !1
        })
    },
    ebad: function(e, t, n) {
        "use strict";
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("q-layout", {
                    attrs: {
                        view: "lHh Lpr lFf"
                    }
                }, [n("q-header", {
                    staticClass: "bg-white text-secondary topbar__container",
                    attrs: {
                        reveal: "",
                        bordered: ""
                    }
                }, [n("q-toolbar", {
                    class: {
                        "justify-between": !0,
                        "center-screen": !0,
                        "gutter-lg": e.$q.screen.gt.xs,
                        "gutter-sm": e.$q.screen.lt.sm
                    }
                }, [n("q-avatar", {
                    attrs: {
                        square: "",
                        size: "24px"
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://images.pixexid.com/pixexid_logo.svg",
                        alt: "Pixexid"
                    }
                })]), e.$q.screen.gt.xs ? n("q-input", {
                    staticClass: "search-input",
                    attrs: {
                        borderless: "",
                        placeholder: "Search free photos",
                        dense: "",
                        rounded: ""
                    },
                    on: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.search(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [n("q-btn", {
                                attrs: {
                                    dense: "",
                                    icon: "eva-search-outline",
                                    flat: "",
                                    disable: 0 === e.query.length
                                },
                                on: {
                                    click: e.search
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !1, 3890755235),
                    model: {
                        value: e.query,
                        callback: function(t) {
                            e.query = t
                        },
                        expression: "query"
                    }
                }) : e._e(), n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-home-outline",
                        label: e.$q.screen.gt.sm ? "Home" : null,
                        to: "/",
                        flat: ""
                    },
                    on: {
                        click: function(t) {
                            return e.navigateTo("/")
                        }
                    }
                }), e.$q.screen.lt.sm ? n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-search-outline",
                        to: "/albums",
                        flat: ""
                    },
                    on: {
                        click: function(t) {
                            e.searching = !0
                        }
                    }
                }) : e._e(), n("q-btn", {
                    attrs: {
                        icon: "eva-compass-outline",
                        label: e.$q.screen.gt.sm ? "Discover" : null,
                        dense: e.$q.screen.lt.sm,
                        to: "/albums",
                        flat: ""
                    },
                    on: {
                        click: function(t) {
                            return e.navigateTo("/albums")
                        }
                    }
                }), n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-cloud-upload-outline",
                        color: e.$store.state.upload.queue.length > 0 ? "primary" : void 0,
                        label: e.$q.screen.gt.sm ? "Upload Photos" : null,
                        flat: ""
                    },
                    on: {
                        click: e.upload
                    }
                }), e.user ? n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-message-circle-outline",
                        label: e.$q.screen.gt.sm ? "Messenger" : null,
                        flat: ""
                    },
                    on: {
                        click: function(t) {
                            return e.navigateTo("/messenger")
                        }
                    }
                }, [e.user.unreadCount ? n("q-badge", {
                    attrs: {
                        color: "red",
                        floating: ""
                    }
                }, [e._v(e._s(e.user.unreadCount))]) : e._e()], 1) : e._e(), e.user ? n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: e.user.profilePicture ? "img:https://pixexid.com/img/" + e.user.profilePicture + "?w=90&h=90" : "eva-person",
                        label: e.$q.screen.gt.sm ? e.user.name : null,
                        flat: ""
                    }
                }, [e.user ? n("q-popup-proxy", {
                    attrs: {
                        anchor: "bottom middle",
                        self: "top middle"
                    }
                }, [n("q-list", {
                    staticClass: "bg-white"
                }, [n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/profile/" + e.user.id
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("My profile")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/edit-profile"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Edit profile")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        clickable: ""
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.logout(t)
                        }
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Logout")])], 1)], 1)], 1)], 1) : e._e()], 1) : n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-person-done-outline",
                        label: e.$q.screen.gt.sm ? "Login" : null,
                        flat: ""
                    },
                    on: {
                        click: e.login
                    }
                }), !e.user && e.$q.screen.gt.sm ? n("q-btn", {
                    attrs: {
                        icon: "eva-person-add-outline",
                        label: "Join",
                        flat: ""
                    },
                    on: {
                        click: e.register
                    }
                }) : e._e(), n("q-btn", {
                    attrs: {
                        dense: e.$q.screen.lt.sm,
                        icon: "eva-menu",
                        flat: ""
                    }
                }, [n("q-popup-proxy", [n("q-list", {
                    staticClass: "bg-white"
                }, [e.user ? n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        clickable: ""
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.logout(t)
                        }
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Logout")])], 1)], 1) : n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        clickable: ""
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.login(t)
                        }
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Login")])], 1)], 1), e.user && "admin" === e.user.userType ? n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/dashboard"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Dashboard")])], 1)], 1) : e._e(), e.user && "admin" === e.user.userType ? n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/page-description"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Page Description")])], 1)], 1) : e._e(), e.user && "admin" === e.user.userType ? n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/home-tags"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Home tags")])], 1)], 1) : e._e(), e.user && "admin" === e.user.userType ? n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/pending-pictures"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Pending pictures")])], 1)], 1) : e._e(), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/popular-photos"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Popular Photos")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/albums"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Albums")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/leaderboard"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Members")])], 1)], 1), n("q-separator"), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/about"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("About")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/faq"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("FAQ")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/terms-and-conditions"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Terms and Conditions")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/license"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("License")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/guidelines"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Guidelines")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        to: "/privacy-policy"
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Privacy Policy")])], 1)], 1), n("q-item", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        clickable: ""
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.openURL("https://blog.pixexid.com")
                        }
                    }
                }, [n("q-item-section", [n("q-item-label", [e._v("Blog")])], 1)], 1), n("div", {
                    staticClass: "row q-col-gutter-sm q-pa-sm"
                }, [n("div", {
                    staticClass: "col-3"
                }, [n("q-btn", {
                    attrs: {
                        dense: "",
                        icon: "eva-facebook"
                    },
                    on: {
                        click: function(t) {
                            return e.openURL("https://facebook.com/pixexid/")
                        }
                    }
                })], 1), n("div", {
                    staticClass: "col-3"
                }, [n("q-btn", {
                    attrs: {
                        dense: "",
                        icon: "eva-twitter"
                    },
                    on: {
                        click: function(t) {
                            return e.openURL("https://twitter.com/pixexid")
                        }
                    }
                })], 1), n("div", {
                    staticClass: "col-3"
                }, [n("q-btn", {
                    attrs: {
                        dense: "",
                        icon: "img:https://images.pixexid.com/instagram-dark.svg"
                    },
                    on: {
                        click: function(t) {
                            return e.openURL("https://instagram.com/pixexid")
                        }
                    }
                })], 1), n("div", {
                    staticClass: "col-3"
                }, [n("q-btn", {
                    attrs: {
                        dense: "",
                        icon: "img:https://images.pixexid.com/pinterest-dark.svg"
                    },
                    on: {
                        click: function(t) {
                            return e.openURL("https://pinterest.com/pixexid1")
                        }
                    }
                })], 1)])], 1)], 1)], 1), n("transition", {
                    attrs: {
                        name: "expand",
                        mode: "out-in"
                    }
                }, [e.searching ? n("div", {
                    staticClass: "expanding-input"
                }, [n("q-input", {
                    staticClass: "search-input",
                    attrs: {
                        autofocus: "",
                        borderless: "",
                        square: "",
                        dense: "",
                        placeholder: "Search free photos"
                    },
                    on: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.search(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [n("q-btn", {
                                attrs: {
                                    dense: "",
                                    icon: "eva-search-outline",
                                    round: "",
                                    flat: "",
                                    disable: 0 === e.query.length
                                },
                                on: {
                                    click: e.search
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !1, 3491721591),
                    model: {
                        value: e.query,
                        callback: function(t) {
                            e.query = t
                        },
                        expression: "query"
                    }
                }), n("div", {
                    staticClass: "close-slot"
                }, [n("q-btn", {
                    attrs: {
                        flat: "",
                        dense: "",
                        icon: "eva-close-outline"
                    },
                    on: {
                        click: function(t) {
                            e.searching = !1
                        }
                    }
                })], 1)], 1) : e._e()])], 1), e.$slots.submenu ? n("q-toolbar", [n("div", {
                    staticClass: "col-grow"
                }, [e._t("submenu")], 2)]) : e._e()], 1), n("q-page-container", [e._t("content", [n("transition", {
                    attrs: {
                        name: "transitions",
                        "enter-active-class": "animated fadeIn",
                        "leave-active-class": "animated fadeOut",
                        mode: "out-in"
                    }
                }, [n("router-view")], 1)])], 2)], 1)
            },
            o = [],
            i = n("967e"),
            a = n.n(i),
            r = (n("96cf"), n("fa84")),
            c = n.n(r),
            l = n("b06b"),
            p = n("56b4"),
            u = n("013f"),
            m = {
                name: "Layout",
                computed: {
                    user: function() {
                        return this.$store.state.auth.user
                    }
                },
                data: function() {
                    return {
                        query: "",
                        searching: !1
                    }
                },
                methods: {
                    upload: function() {
                        var e = c()(a.a.mark(function e() {
                            var t = this;
                            return a.a.wrap(function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        null === this.user ? this.login().onOk(function() {
                                            t.user && t.navigateTo("/upload-photos")
                                        }) : this.navigateTo("/upload-photos");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this)
                        }));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    register: function() {
                        this.$q.dialog({
                            component: p["a"],
                            root: this.$root
                        })
                    },
                    logout: function() {
                        window.location.href = "/api/v1/logout"
                    },
                    login: function() {
                        return this.$q.dialog({
                            component: u["a"],
                            root: this.$root
                        })
                    },
                    search: function() {
                        this.query.length > 0 && (this.$router.push({
                            path: "/search/".concat(encodeURIComponent(this.query))
                        }), this.searching = !1)
                    },
                    openURL: l["a"],
                    navigateTo: function(e) {
                        e && this.$router.push({
                            path: e
                        })
                    }
                }
            },
            d = m,
            q = (n("895a"), n("2877")),
            v = Object(q["a"])(d, s, o, !1, null, null, null);
        t["a"] = v.exports
    }
}]);
