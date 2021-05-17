(function(t) {
    function e(e) {
        for (var i, r, s = e[0], c = e[1], l = e[2], u = 0, p = []; u < s.length; u++)
            r = s[u],
            a[r] && p.push(a[r][0]),
            a[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        d && d(e);
        while (p.length)
            p.shift()();
        return o.push.apply(o, l || []), n()
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== a[c] && (i = !1)
            }
            i && (o.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }
    var i = {},
        a = {
            app: 0
        },
        o = [];
    function r(t) {
        return s.p + "js/" + ({}[t] || t) + "." + {
            "09973b6a": "7bc50038",
            "10e7eef0": "940c0770",
            "2d0be6fd": "fcbdff37",
            "2d0c0493": "0db95366",
            "2d0c06d2": "60f85276",
            "2d0e51c0": "5bbd361a",
            "2d207d33": "4c0f9ced",
            "2d214029": "6adabf68",
            "2d21aad7": "cb380c60",
            "2d221a60": "3430a82c",
            "2d222759": "ab0605c6",
            "2d2259b8": "0ce751e2",
            "2d229775": "52b6ff4a",
            "2d22c18e": "c65944c3",
            "2d22d800": "46e75e41",
            "3675103c": "3955bf4f",
            "3af597c0": "cceaa4ad",
            "51b8be68": "f1749619",
            "529e3a15": "3bd0858e",
            "5c0cd90c": "04f05b4d",
            "662a7755": "466f10d8",
            a105088e: "f67c011b",
            c0dff328: "b79a7051",
            c3a7a4b4: "16aae95d",
            c3d16a4e: "457a225d",
            c83f9a42: "2873ac71",
            de372082: "757c43d5"
        }[t] + ".js"
    }
    function s(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(t) {
        var e = [],
            n = a[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var i = new Promise(function(e, i) {
                    n = a[t] = [e, i]
                });
                e.push(n[2] = i);
                var o,
                    c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                s.nc && c.setAttribute("nonce", s.nc),
                c.src = r(t);
                var l = new Error;
                o = function(e) {
                    c.onerror = c.onload = null,
                    clearTimeout(u);
                    var n = a[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = o,
                            n[1](l)
                        }
                        a[t] = void 0
                    }
                };
                var u = setTimeout(function() {
                    o({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = o,
                document.head.appendChild(c)
            }
        return Promise.all(e)
    },
    s.m = t,
    s.c = i,
    s.d = function(t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var i in t)
                s.d(n, i, function(e) {
                    return t[e]
                }.bind(null, i));
        return n
    },
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    },
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    s.p = "/",
    s.oe = function(t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var u = 0; u < c.length; u++)
        e(c[u]);
    var d = l;
    o.push([0, "vendor"]),
    n()
})({
    0: function(t, e, n) {
        t.exports = n("2f39")
    },
    "013f": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-lg",
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", [n("div", {
                    staticClass: "text-h5 text-weight-bold"
                }, [t._v("Welcome back")]), n("div", {
                    staticClass: "text-subtitle2"
                }, [t._v("Log in to continue")])]), n("q-card-section", [n("q-form", {
                    ref: "form",
                    staticClass: "q-gutter-md",
                    attrs: {
                        autofocus: ""
                    },
                    on: {
                        submit: t.onSubmit,
                        reset: t.onReset
                    }
                }, [n("q-input", {
                    attrs: {
                        label: "Email",
                        dense: "",
                        type: "email",
                        square: "",
                        outlined: ""
                    },
                    model: {
                        value: t.email,
                        callback: function(e) {
                            t.email = e
                        },
                        expression: "email"
                    }
                }), n("q-input", {
                    attrs: {
                        label: "Password",
                        type: "password",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    model: {
                        value: t.password,
                        callback: function(e) {
                            t.password = e
                        },
                        expression: "password"
                    }
                }), n("div", [n("q-btn", {
                    staticClass: "full-width",
                    attrs: {
                        loading: t.loading,
                        color: "primary",
                        label: "login"
                    },
                    on: {
                        click: function(e) {
                            return t.$refs.form.submit()
                        }
                    }
                })], 1), n("div", {
                    staticClass: "divider"
                }, [n("span"), n("span", [t._v("OR")]), n("span")]), n("div", [n("q-btn", {
                    staticClass: "full-width",
                    staticStyle: {
                        background: "#4267b2"
                    },
                    attrs: {
                        loading: t.loading,
                        "text-color": "white",
                        icon: "eva-facebook",
                        label: "Continue with Facebook"
                    },
                    on: {
                        click: t.continueWithFacebook
                    }
                })], 1)], 1)], 1), n("q-card-section", [n("div", {
                    staticClass: "text-subtitle2"
                }, [t._v("\n        Don't have an account? \n        "), n("span", {
                    staticClass: "link",
                    on: {
                        click: t.register
                    }
                }, [t._v("Join now")])])])], 1)], 1)
            },
            a = [],
            o = (n("551c"), n("06db"), n("097d"), n("56b4")),
            r = {
                name: "PageRegister",
                data: function() {
                    return {
                        password: "",
                        email: "",
                        facebookLogin: !1,
                        loading: !1
                    }
                },
                methods: {
                    register: function() {
                        this.hide(),
                        this.$q.dialog({
                            component: o["a"],
                            root: this.$root
                        })
                    },
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    continueWithFacebook: function() {
                        var t = this;
                        this.loading = !0,
                        this.$store.dispatch("auth/loginFacebook").then(function(e) {
                            t.onOKClick()
                        }).finally(function() {
                            t.loading = !1
                        })
                    },
                    onSubmit: function() {
                        var t = this;
                        this.loading = !0,
                        this.$store.dispatch("auth/login", {
                            password: this.password,
                            username: this.email
                        }).then(function(e) {
                            t.onOKClick()
                        }).finally(function() {
                            t.loading = !1
                        })
                    },
                    onReset: function() {},
                    onOKClick: function() {
                        this.$emit("ok"),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            },
            s = r,
            c = (n("da41"), n("2877")),
            l = Object(c["a"])(s, i, a, !1, null, null, null);
        e["a"] = l.exports
    },
    "0880": function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".panorama-view{margin-left:auto;margin-right:auto;width:calc(100vw - 32px);height:100vh;max-width:100%;max-height:800px}.panorama-view_hide{display:none}.panorama-view_fullscreen{width:100%!important;height:100%!important;max-width:unset!important;max-height:unset!important}.panorama-image{width:100%}.panorama-view__container{min-height:350px;background-color:rgba(0,0,0,0.1)}@media (max-width:850px){.panorama-view__container,.panorama-view_mobile-active.panorama-view__container{min-height:35vw}.panorama-view_mobile-active.panorama-view__container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999}.panorama-view_mobile-active .panorama-view{width:100%!important;height:100%!important}.panorama-view_mobile-active .psv-canvas-container{width:100%}}.panorama-image__button-fullscreen{position:absolute;left:10px;top:10px;z-index:99}.panorama-image__button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:99}", ""])
    },
    "2d44": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.user ? n("q-menu", {
                    ref: "menu",
                    attrs: {
                        "content-style": "min-width: 300px",
                        cover: "",
                        anchor: "top middle",
                        "content-class": "q-pa-md"
                    },
                    on: {
                        "before-show": t.reset
                    }
                }, [n("q-input", {
                    staticClass: "search-input q-mb-md",
                    attrs: {
                        borderless: "",
                        autofocus: "",
                        placeholder: "Search my albums",
                        dense: "",
                        rounded: "",
                        loading: t.loading,
                        debounce: "350"
                    },
                    on: {
                        keydown: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.search(e)
                        }
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [n("q-btn", {
                                attrs: {
                                    dense: "",
                                    icon: "eva-search-outline",
                                    flat: "",
                                    disable: 0 === t.query.length
                                },
                                on: {
                                    click: t.search
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !1, 3890755235),
                    model: {
                        value: t.query,
                        callback: function(e) {
                            t.query = e
                        },
                        expression: "query"
                    }
                }), n("q-list", [t._l(t.albums, function(e) {
                    return n("q-item", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple"
                        }, {
                            name: "close-popup",
                            rawName: "v-close-popup"
                        }],
                        key: e.id,
                        attrs: {
                            clickable: ""
                        },
                        nativeOn: {
                            click: function(n) {
                                return t.selected(e)
                            }
                        }
                    }, [n("q-item-section", {
                        attrs: {
                            avatar: ""
                        }
                    }, [n("q-avatar", {
                        attrs: {
                            square: "",
                            color: "grey-2"
                        }
                    }, [e.lastPicture ? n("Imgix", {
                        attrs: {
                            width: 40,
                            height: 40,
                            path: e.lastPicture.filename,
                            alt: e.lastPicture.description,
                            params: {},
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 180,
                                    h: 180
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 180,
                                    h: 180,
                                    dpr: 2
                                }
                            }]
                        }
                    }) : n("q-icon", {
                        attrs: {
                            name: "eva-camera"
                        }
                    })], 1)], 1), n("q-item-section", [n("q-item-label", [t._v(t._s(e.title))]), n("q-item-label", {
                        attrs: {
                            caption: ""
                        }
                    }, [t._v(t._s(e.description))])], 1)], 1)
                }), t.albums.length > 0 ? n("q-separator") : t._e(), n("q-item", {
                    directives: [{
                        name: "ripple",
                        rawName: "v-ripple"
                    }, {
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        clickable: "",
                        dense: ""
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.create(e)
                        }
                    }
                }, [n("q-item-section", {
                    attrs: {
                        avatar: ""
                    }
                }, [n("q-avatar", {
                    attrs: {
                        square: ""
                    }
                }, [n("q-icon", {
                    attrs: {
                        name: "eva-plus-outline"
                    }
                })], 1)], 1), n("q-item-section", [n("q-item-label", [t._v("Create new album")]), n("q-item-label", {
                    attrs: {
                        caption: ""
                    }
                }, [t._v("description")])], 1)], 1)], 2)], 1) : t._e()
            },
            a = [],
            o = (n("551c"), n("06db"), n("097d"), n("386d"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide,
                        show: function(e) {
                            return t.$refs.input.focus()
                        }
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-lg",
                    staticStyle: {
                        width: "548px",
                        "max-width": "80vw"
                    },
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", [n("div", {
                    staticClass: "text-h5 text-center"
                }, [t._v("New album")])]), n("q-card-section", [n("q-form", {
                    ref: "form",
                    staticClass: "q-gutter-md",
                    on: {
                        submit: t.onSubmit
                    }
                }, [n("q-input", {
                    ref: "input",
                    attrs: {
                        label: "Title",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    scopedSlots: t._u([{
                        key: "prepend",
                        fn: function() {
                            return [n("q-icon", {
                                attrs: {
                                    name: "eva-image-outline"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.title,
                        callback: function(e) {
                            t.title = e
                        },
                        expression: "title"
                    }
                }), n("q-input", {
                    attrs: {
                        label: "Description",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    scopedSlots: t._u([{
                        key: "prepend",
                        fn: function() {
                            return [n("q-icon", {
                                attrs: {
                                    name: "eva-image-outline"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.description,
                        callback: function(e) {
                            t.description = e
                        },
                        expression: "description"
                    }
                }), n("TagInput", {
                    attrs: {
                        label: "Tags"
                    },
                    scopedSlots: t._u([{
                        key: "prepend",
                        fn: function() {
                            return [n("q-icon", {
                                attrs: {
                                    name: "eva-image-outline"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.tags,
                        callback: function(e) {
                            t.tags = e
                        },
                        expression: "tags"
                    }
                }), n("q-checkbox", {
                    attrs: {
                        label: "Make album public"
                    },
                    model: {
                        value: t.isPublic,
                        callback: function(e) {
                            t.isPublic = e
                        },
                        expression: "isPublic"
                    }
                })], 1)], 1), n("q-card-actions", {
                    attrs: {
                        align: "right"
                    }
                }, [n("q-btn", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        flat: ""
                    }
                }, [t._v("Cancel")]), n("q-btn", {
                    attrs: {
                        loading: t.loading,
                        color: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.$refs.form.submit()
                        }
                    }
                }, [t._v("Create")])], 1)], 1)], 1)
            }),
            r = [],
            s = n("8df0"),
            c = {
                name: "AlbumCreate",
                data: function() {
                    return {
                        title: "",
                        description: "",
                        tags: [],
                        isPublic: !1,
                        loading: !1
                    }
                },
                components: {
                    TagInput: s["a"]
                },
                methods: {
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onSubmit: function() {
                        var t = this;
                        this.loading = !0,
                        this.$axios.post("api/v1/my-albums/create", {
                            id: this.id,
                            title: this.title,
                            description: this.description,
                            public: this.isPublic
                        }).then(function(e) {
                            t.onOKClick(e.data)
                        }).finally(function() {
                            t.loading = !1
                        })
                    },
                    onReset: function() {},
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            },
            l = c,
            u = n("2877"),
            d = Object(u["a"])(l, o, r, !1, null, null, null),
            p = d.exports,
            h = n("9152"),
            f = {
                name: "AlbumSelect",
                components: {
                    Imgix: h["a"]
                },
                computed: {
                    user: function() {
                        return this.$store.state.auth.user
                    }
                },
                data: function() {
                    return {
                        query: "",
                        albums: [],
                        open: !1,
                        loading: !1
                    }
                },
                watch: {
                    query: function() {
                        this.search()
                    }
                },
                methods: {
                    reset: function() {
                        this.query = "",
                        this.albums = [],
                        this.loading = !1,
                        this.search()
                    },
                    selected: function(t) {
                        var e = t.id;
                        this.$emit("selected", e)
                    },
                    create: function() {
                        var t = this;
                        this.$q.dialog({
                            component: p,
                            root: this.$root
                        }).onOk(function(e) {
                            t.$emit("selected", e)
                        })
                    },
                    search: function() {
                        var t = this;
                        this.loading = !0,
                        this.$axios.get("/api/v1/my-albums/search/".concat(encodeURIComponent(this.query))).then(function(e) {
                            t.albums = e.data,
                            t.$nextTick(function() {
                                t.$refs.menu.updatePosition()
                            })
                        }).finally(function() {
                            t.loading = !1
                        })
                    }
                }
            },
            m = f,
            g = Object(u["a"])(m, i, a, !1, null, null, null);
        e["a"] = g.exports
    },
    "2f39": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = {};
        n.r(i),
        n.d(i, "setUser", function() {
            return Ot
        });
        var a = {};
        n.r(a),
        n.d(a, "setUser", function() {
            return It
        }),
        n.d(a, "login", function() {
            return jt
        }),
        n.d(a, "loginFacebook", function() {
            return zt
        }),
        n.d(a, "register", function() {
            return Et
        }),
        n.d(a, "incrementUnreadCount", function() {
            return Dt
        }),
        n.d(a, "resetUnreadCount", function() {
            return Mt
        });
        var o = {};
        n.r(o),
        n.d(o, "setData", function() {
            return Qt
        }),
        n.d(o, "setTags", function() {
            return Ut
        });
        var r = {};
        n.r(r),
        n.d(r, "setData", function() {
            return At
        }),
        n.d(r, "resetData", function() {
            return Ht
        }),
        n.d(r, "getTags", function() {
            return Wt
        });
        var s = {};
        n.r(s),
        n.d(s, "add", function() {
            return Vt
        });
        var c = {};
        n.r(c),
        n.d(c, "initialize", function() {
            return Xt
        }),
        n.d(c, "open", function() {
            return te
        }),
        n.d(c, "send", function() {
            return ee
        });
        var l = n("967e"),
            u = n.n(l),
            d = (n("96cf"), n("fa84")),
            p = n.n(d),
            h = (n("e54f"), n("43b9"), n("4848"), n("c382"), n("62f2"), n("7e6d"), n("2b0e")),
            f = n("b05d"),
            m = n("58a8"),
            g = n("7cbe"),
            v = n("8169"),
            b = n("4983"),
            w = n("8f8e"),
            x = n("eb85"),
            y = n("8572"),
            k = n("0378"),
            q = n("24e8"),
            _ = n("f09f"),
            C = n("d08c"),
            $ = n("3b73"),
            S = n("a370"),
            O = n("6b1d"),
            P = n("4b7e"),
            I = n("5096"),
            j = n("b047"),
            z = n("1c1c"),
            T = n("cb32"),
            E = n("66e5"),
            D = n("4074"),
            M = n("0170"),
            L = n("ee89"),
            Q = n("ddd8"),
            U = n("068f"),
            A = n("4e73"),
            H = n("2c91"),
            W = n("0016"),
            R = n("27f9"),
            B = n("4d5a"),
            N = n("7ff0"),
            F = n("e359"),
            V = n("9404"),
            K = n("09e3"),
            J = n("9989"),
            Z = n("65c6"),
            Y = n("6ac5"),
            G = n("9c40"),
            X = n("ef35"),
            tt = n("8380"),
            et = n("429b"),
            nt = n("7460"),
            it = n("7867"),
            at = n("05c0"),
            ot = n("71b3"),
            rt = n("74f7"),
            st = n("714f"),
            ct = n("7f67"),
            lt = n("2a19"),
            ut = n("f508"),
            dt = n("9c64"),
            pt = n("436b");
        h["default"].use(f["a"], {
            config: {},
            components: {
                QBadge: m["a"],
                QPopupProxy: g["a"],
                QChatMessage: v["a"],
                QScrollArea: b["a"],
                QCheckbox: w["a"],
                QSeparator: x["a"],
                QField: y["a"],
                QForm: k["a"],
                QDialog: q["a"],
                QCard: _["a"],
                QNoSsr: C["a"],
                QExpansionItem: $["a"],
                QCardSection: S["a"],
                QLinearProgress: O["a"],
                QCardActions: P["a"],
                QPageScroller: I["a"],
                QChip: j["a"],
                QList: z["a"],
                QAvatar: T["a"],
                QItem: E["a"],
                QItemSection: D["a"],
                QItemLabel: M["a"],
                QUploader: L["a"],
                QSelect: Q["a"],
                QImg: U["a"],
                QMenu: A["a"],
                QSpace: H["a"],
                QIcon: W["a"],
                QInput: R["a"],
                QLayout: B["a"],
                QFooter: N["a"],
                QHeader: F["a"],
                QDrawer: V["a"],
                QPageContainer: K["a"],
                QPage: J["a"],
                QToolbar: Z["a"],
                QToolbarTitle: Y["a"],
                QBtn: G["a"],
                QInfiniteScroll: X["a"],
                QSpinnerDots: tt["a"],
                QTabs: et["a"],
                QTab: nt["a"],
                QRouteTab: it["a"],
                QTooltip: at["a"],
                QSpinnerHearts: ot["a"],
                QInnerLoading: rt["a"]
            },
            directives: {
                Ripple: st["a"],
                ClosePopup: ct["a"]
            },
            plugins: {
                Notify: lt["a"],
                Loading: ut["a"],
                Meta: dt["a"],
                Dialog: pt["a"]
            }
        });
        var ht = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "q-app"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "transitions",
                        "enter-active-class": "animated fadeIn",
                        "leave-active-class": "animated fadeOut",
                        mode: "out-in"
                    }
                }, [n("router-view")], 1)], 1)
            },
            ft = [],
            mt = n("5299"),
            gt = n.n(mt),
            vt = (n("40d9"), n("2896")),
            bt = n.n(vt),
            wt = n("c624"),
            xt = n("0e07"),
            yt = n("5def");
        h["default"].use(xt["a"]),
        h["default"].component("Masonry", wt["a"]),
        h["default"].use(bt.a, {
            componentName: "croppa"
        }),
        h["default"].use(gt.a);
        var kt = {
                name: "App",
                meta: function() {
                    return {
                        title: "Free photos · Pixexid"
                    }
                },
                computed: {
                    user: function() {
                        return this.$store.state.auth.user
                    }
                },
                mounted: function() {
                    var t = p()(u.a.mark(function t() {
                        return u.a.wrap(function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (null == this.user) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, this.$store.dispatch("messenger/initialize");
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                preFetch: function(t) {
                    var e = t.store,
                        n = t.ssrContext;
                    return Object(yt["a"])("api/v1/user", n).then(function(t) {
                        return e.dispatch("auth/setUser", t.data)
                    }).catch(function(t) {})
                }
            },
            qt = kt,
            _t = n("2877"),
            Ct = Object(_t["a"])(qt, ht, ft, !1, null, null, null),
            $t = Ct.exports,
            St = n("2f62");
        function Ot(t, e) {
            t.user = e
        }
        n("551c"),
        n("06db");
        var Pt = n("758b");
        function It(t, e) {
            var n = t.commit;
            n("setUser", e)
        }
        function jt(t, e) {
            var n = t.commit,
                i = t.dispatch;
            return Pt["a"].post("/api/v1/login", e).then(function(t) {
                n("setUser", t.data),
                i("messenger/initialize", null, {
                    root: !0
                })
            })
        }
        function zt(t) {
            return Tt.apply(this, arguments)
        }
        function Tt() {
            return Tt = p()(u.a.mark(function t(e) {
                var n,
                    i,
                    a;
                return u.a.wrap(function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return n = e.commit, i = e.dispatch, t.next = 3, new Promise(function(t, e) {
                                FB.login(function(n) {
                                    if (n.authResponse)
                                        return Pt["a"].get("/api/v1/login/facebook?access_token=".concat(n.authResponse.accessToken)).then(function(e) {
                                            t(e.data)
                                        }).catch(function() {
                                            return e()
                                        });
                                    e()
                                }, {
                                    scope: "public_profile,email"
                                })
                            });
                        case 3:
                            a = t.sent,
                            n("setUser", a),
                            i("messenger/initialize", null, {
                                root: !0
                            });
                        case 6:
                        case "end":
                            return t.stop()
                        }
                }, t)
            })), Tt.apply(this, arguments)
        }
        function Et(t, e) {
            t.commit;
            return Pt["a"].post("/api/v1/register", e).then(function(t) {
                return t.data
            })
        }
        function Dt(t) {
            var e = t.state;
            e.user.unreadCount += 1
        }
        function Mt(t) {
            var e = t.state;
            e.user.unreadCount = 0,
            Pt["a"].post("/api/v1/user/reset-unread-count")
        }
        var Lt = {
            namespaced: !0,
            getters: {},
            mutations: i,
            actions: a,
            state: function() {
                return {
                    user: null
                }
            }
        };
        function Qt(t, e) {
            t.data = e
        }
        function Ut(t, e) {
            t.tags = e
        }
        function At(t, e) {
            var n = t.commit;
            n("setData", e)
        }
        function Ht(t, e) {
            var n = t.commit;
            return Promise.resolve().then(function() {
                n("setData", null)
            })
        }
        function Wt(t) {
            t.commit;
            var e = t.state;
            return e.tags || (e.tags = Pt["a"].get("/api/v1/home/tags").then(function(t) {
                return t.data
            })), e.tags
        }
        var Rt = {
                namespaced: !1,
                getters: {},
                mutations: o,
                actions: r,
                state: function() {
                    return {
                        data: null,
                        tags: null
                    }
                }
            },
            Bt = {
                queue: [],
                uploading: !1
            },
            Nt = n("b17c"),
            Ft = n("7a91");
        n("097d");
        function Vt(t, e) {
            return Kt.apply(this, arguments)
        }
        function Kt() {
            return Kt = p()(u.a.mark(function t(e, n) {
                var i,
                    a,
                    o,
                    r,
                    s;
                return u.a.wrap(function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            s = function(t) {
                                i.uploading = !0;
                                var e = new FormData;
                                return e.append("file", t.file), e.append("metadata", JSON.stringify(t.metadata)), Pt["a"].post("api/v1/upload", e, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    },
                                    onUploadProgress: function(e) {
                                        t.uploadProgress = Math.round(100 * e.loaded / e.total)
                                    }
                                }).finally(function() {
                                    if (0 !== i.queue.length) {
                                        var t = i.queue.pop();
                                        s(t)
                                    } else
                                        i.uploading = !1
                                })
                            },
                            i = e.state,
                            a = n.file,
                            o = n.metadata,
                            r = {
                                file: a,
                                metadata: o,
                                uploadProgress: 0
                            },
                            i.uploading ? i.queue.push(r) : s(r);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }, t)
            })), Kt.apply(this, arguments)
        }
        var Jt = {
                namespaced: !0,
                state: Bt,
                getters: Nt,
                mutations: Ft,
                actions: s
            },
            Zt = {
                conversations: [],
                users: {},
                isInitialized: !1
            },
            Yt = n("848c"),
            Gt = n("f6c0");
        n("7f7f"),
        n("ac4d"),
        n("8a81"),
        n("ac6a");
        function Xt(t) {
            var e = t.state,
                n = t.rootState,
                i = t.dispatch;
            if (e.isInitialized)
                return Promise.resolve();
            function a(t, n) {
                void 0 === e.users[n.from] && (h["default"].set(e.users, n.from, null), Pt["a"].get("/api/v1/user/".concat(n.from)).then(function(t) {
                    h["default"].set(e.users, n.from, t.data)
                })),
                void 0 === e.users[n.to] && (h["default"].set(e.users, n.to, null), Pt["a"].get("/api/v1/user/".concat(n.to)).then(function(t) {
                    h["default"].set(e.users, n.to, t.data)
                })),
                t.messages.push({
                    id: n.id,
                    from: n.from,
                    to: n.to,
                    createdAt: n.createdAt,
                    content: n.content
                })
            }
            function o(t) {
                var i = t.from === n.auth.user.id ? t.to : t.from,
                    o = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var c, l = e.conversations[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                        var u = c.value;
                        if (u.userId === i)
                            return e.conversations.splice(e.conversations.indexOf(u), 1), e.conversations.splice(0, 0, u), void a(u, t)
                    }
                } catch (p) {
                    r = !0,
                    s = p
                } finally {
                    try {
                        o || null == l.return || l.return()
                    } finally {
                        if (r)
                            throw s
                    }
                }
                var d = {
                    userId: i,
                    messages: []
                };
                e.conversations.splice(0, 0, d),
                a(d, t)
            }
            "Notification" in window && Notification.requestPermission();
            var r = new EventSource("https://pixexid.com/api/v1/messages/all");
            r.addEventListener("message", function(t) {
                var a = JSON.parse(t.data);
                o(a),
                i("auth/incrementUnreadCount", null, {
                    root: !0
                }),
                "Notification" in window && "granted" === Notification.permission && a.from !== n.auth.user.id && setTimeout(function() {
                    var t = e.users[a.from];
                    t && n.auth.user.unreadCount > 0 && new Notification(t.name, {
                        body: a.content,
                        icon: "https://pixexid.com/img/".concat(t.profilePicture, "?w=180&h=180")
                    })
                }, 5e3)
            }),
            r.addEventListener("initialize", function(t) {
                var e = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var a, r = JSON.parse(t.data)[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                        var s = a.value;
                        o(s)
                    }
                } catch (c) {
                    n = !0,
                    i = c
                } finally {
                    try {
                        e || null == r.return || r.return()
                    } finally {
                        if (n)
                            throw i
                    }
                }
            }),
            e.isInitialized = !0
        }
        function te(t, e) {
            var n = t.state,
                i = (t.rootState, !0),
                a = !1,
                o = void 0;
            try {
                for (var r, s = n.conversations[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                    var c = r.value;
                    if (c.userId === e)
                        return c
                }
            } catch (u) {
                a = !0,
                o = u
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            void 0 === n.users[e] && (h["default"].set(n.users, e, null), Pt["a"].get("/api/v1/user/".concat(e)).then(function(t) {
                h["default"].set(n.users, e, t.data)
            }));
            var l = {
                userId: e,
                messages: []
            };
            return n.conversations.splice(0, 0, l), l
        }
        function ee(t, e) {
            return ne.apply(this, arguments)
        }
        function ne() {
            return ne = p()(u.a.mark(function t(e, n) {
                var i,
                    a;
                return u.a.wrap(function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return e.state, i = n.userId, a = n.content, t.next = 4, Pt["a"].post("/api/v1/conversation/send-message/".concat(i), {
                                content: a
                            });
                        case 4:
                            return t.abrupt("return", t.sent);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }, t)
            })), ne.apply(this, arguments)
        }
        var ie = {
            namespaced: !0,
            state: Zt,
            getters: Yt,
            mutations: Gt,
            actions: c
        };
        h["default"].use(St["a"]);
        var ae = function() {
                var t = new St["a"].Store({
                    modules: {
                        auth: Lt,
                        page: Rt,
                        upload: Jt,
                        messenger: ie
                    },
                    strict: !1
                });
                return t
            },
            oe = n("8c4f"),
            re = [{
                path: "/albums",
                component: function() {
                    return n.e("10e7eef0").then(n.bind(null, "d4a1"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("3af597c0").then(n.bind(null, "379b"))
                    }
                }]
            }, {
                path: "/dashboard",
                component: function() {
                    return n.e("10e7eef0").then(n.bind(null, "d4a1"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("c83f9a42").then(n.bind(null, "ec95"))
                    }
                }]
            }, {
                path: "/popular-photos",
                component: function() {
                    return n.e("10e7eef0").then(n.bind(null, "d4a1"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("3675103c").then(n.bind(null, "29e2"))
                    }
                }]
            }, {
                path: "/page-description",
                component: function() {
                    return n.e("c0dff328").then(n.bind(null, "2710"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("2d0e51c0").then(n.bind(null, "92a2"))
                    }
                }]
            }, {
                path: "/leaderboard",
                component: function() {
                    return n.e("10e7eef0").then(n.bind(null, "d4a1"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("2d0c06d2").then(n.bind(null, "4275"))
                    }
                }]
            }, {
                path: "/home-tags",
                component: function() {
                    return n.e("c0dff328").then(n.bind(null, "2710"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("2d21aad7").then(n.bind(null, "bd10"))
                    }
                }]
            }, {
                path: "/",
                component: function() {
                    return n.e("c0dff328").then(n.bind(null, "2710"))
                },
                children: [{
                    path: "/",
                    component: function() {
                        return n.e("de372082").then(n.bind(null, "a921"))
                    }
                }, {
                    path: "/tag/:q",
                    component: function() {
                        return n.e("de372082").then(n.bind(null, "a921"))
                    },
                    props: !0
                }]
            }, {
                path: "/search/:q",
                component: function() {
                    return n.e("529e3a15").then(n.bind(null, "5c65"))
                },
                props: !0
            }, {
                path: "/",
                component: function() {
                    return n.e("51b8be68").then(n.bind(null, "04dd"))
                },
                children: [{
                    path: "/license",
                    component: function() {
                        return n.e("2d22c18e").then(n.bind(null, "f27c"))
                    }
                }, {
                    path: "/about",
                    component: function() {
                        return n.e("2d207d33").then(n.bind(null, "a1d1"))
                    }
                }, {
                    path: "/terms-and-conditions",
                    component: function() {
                        return n.e("2d22d800").then(n.bind(null, "f880"))
                    }
                }, {
                    path: "/privacy-policy",
                    component: function() {
                        return n.e("2d229775").then(n.bind(null, "de20"))
                    }
                }, {
                    path: "/guidelines",
                    component: function() {
                        return n.e("2d2259b8").then(n.bind(null, "e4b5"))
                    }
                }, {
                    path: "/faq",
                    component: function() {
                        return n.e("2d0c0493").then(n.bind(null, "40ab"))
                    }
                }, {
                    path: "/pending-pictures",
                    component: function() {
                        return n.e("c3d16a4e").then(n.bind(null, "6781"))
                    }
                }, {
                    path: "/thanks",
                    component: function() {
                        return n.e("2d214029").then(n.bind(null, "aeb1"))
                    }
                }, {
                    path: "/album/:id",
                    component: function() {
                        return n.e("2d222759").then(n.bind(null, "cf66"))
                    },
                    props: !0
                }, {
                    path: "/upload-photos",
                    component: function() {
                        return n.e("09973b6a").then(n.bind(null, "ba42"))
                    }
                }, {
                    path: "/image/:id",
                    component: function() {
                        return n.e("662a7755").then(n.bind(null, "283a"))
                    },
                    props: !0
                }, {
                    path: "/profile/:id",
                    component: function() {
                        return n.e("2d0be6fd").then(n.bind(null, "2ff9"))
                    },
                    props: !0
                }, {
                    path: "/edit-profile",
                    component: function() {
                        return n.e("c3a7a4b4").then(n.bind(null, "d4a8"))
                    },
                    props: !0
                }, {
                    path: "/messenger",
                    component: function() {
                        return n.e("2d221a60").then(n.bind(null, "caf2"))
                    },
                    children: [{
                        path: ":userId",
                        props: !0,
                        component: function() {
                            return n.e("a105088e").then(n.bind(null, "1505"))
                        }
                    }]
                }]
            }];
        re.push({
            path: "*",
            component: function() {
                return n.e("5c0cd90c").then(n.bind(null, "e51e"))
            }
        });
        var se = re;
        h["default"].use(oe["a"]);
        var ce = function(t) {
                t.store;
                var e = new oe["a"]({
                    scrollBehavior: function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    routes: se,
                    mode: "history",
                    base: "/"
                });
                return e
            },
            le = function(t) {
                var e = "function" === typeof ae ? ae({
                        Vue: h["default"],
                        ssrContext: t
                    }) : ae,
                    n = "function" === typeof ce ? ce({
                        Vue: h["default"],
                        ssrContext: t,
                        store: e
                    }) : ce;
                e.$router = n;
                var i = {
                    router: n,
                    store: e,
                    render: function(t) {
                        return t($t)
                    }
                };
                return f["a"].ssrUpdate({
                    app: i,
                    ssr: t
                }), {
                    app: i,
                    store: e,
                    router: n
                }
            },
            ue = n("9483");
        Object(ue["a"])("/service-worker.js", {
            ready: function() {
                console.log("App is being served from cache by a service worker.")
            },
            registered: function(t) {
                console.log("Service worker has been registered.")
            },
            cached: function(t) {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function(t) {
                console.log("New content is downloading.", t)
            },
            updated: function(t) {
                console.log("New content is available; please refresh."),
                lt["a"].create({
                    message: "A new version of Pixexid is available",
                    color: "secondary",
                    textColor: "white",
                    actions: [{
                        label: "Refresh",
                        textColor: "light-blue-2",
                        handler: function() {
                            window.location.reload(!0)
                        }
                    }]
                })
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(t) {
                console.error("Error during service worker registration:", t)
            }
        });
        var de = n("bf74"),
            pe = n.n(de),
            he = function(t) {
                var e = t.Vue;
                e.use(n("395c")),
                e.use(pe.a.Adsense),
                e.use(pe.a.InArticleAdsense),
                e.use(pe.a.InFeedAdsense)
            },
            fe = n("e166"),
            me = n.n(fe);
        h["default"].use(me.a);
        n("cadf"),
        n("456d"),
        $t.options;
        function ge(t, e) {
            var n = t ? t.matched ? t : e.resolve(t).route : e.currentRoute;
            return n ? [].concat.apply([], n.matched.map(function(t) {
                return Object.keys(t.components).map(function(e) {
                    var n = t.components[e];
                    return {
                        path: t.path,
                        c: n.options || n
                    }
                })
            })) : []
        }
        function ve(t, e) {
            t.beforeResolve(function(n, i, a) {
                var o = ge(n, t),
                    r = ge(i, t),
                    s = !1,
                    c = o.filter(function(t, e) {
                        return s || (s = !r[e] || r[e].c !== t.c || t.path.indexOf("/:") > -1)
                    }).filter(function(t) {
                        return t.c && "function" === typeof t.c.preFetch
                    }).map(function(t) {
                        return t.c
                    });
                if (!c.length)
                    return a();
                var l = !0,
                    u = function(t) {
                        l = !1,
                        a(t)
                    },
                    d = function() {
                        l && a()
                    };
                c.filter(function(t) {
                    return t && t.preFetch
                }).reduce(function(t, a) {
                    return t.then(function() {
                        return l && a.preFetch({
                                store: e,
                                currentRoute: n,
                                previousRoute: i,
                                redirect: u
                            })
                    })
                }, Promise.resolve()).then(d).catch(function(t) {
                    console.error(t),
                    d()
                })
            })
        }
        var be = n("fe3c"),
            we = n.n(be),
            xe = le(),
            ye = xe.app,
            ke = xe.store,
            qe = xe.router;
        function _e() {
            return Ce.apply(this, arguments)
        }
        function Ce() {
            return Ce = p()(u.a.mark(function t() {
                var e,
                    n,
                    i;
                return u.a.wrap(function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            e = [Pt["b"], he, void 0],
                            n = 0;
                        case 2:
                            if (!(n < e.length)) {
                                t.next = 20;
                                break
                            }
                            if ("function" === typeof e[n]) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("continue", 17);
                        case 5:
                            return t.prev = 5, t.next = 8, e[n]({
                                app: ye,
                                router: qe,
                                store: ke,
                                Vue: h["default"],
                                ssrContext: null
                            });
                        case 8:
                            t.next = 17;
                            break;
                        case 10:
                            if (t.prev = 10, t.t0 = t["catch"](5), !t.t0 || !t.t0.url) {
                                t.next = 15;
                                break
                            }
                            return window.location.href = t.t0.url, t.abrupt("return");
                        case 15:
                            return console.error("[Quasar] boot error:", t.t0), t.abrupt("return");
                        case 17:
                            n++,
                            t.next = 2;
                            break;
                        case 20:
                            window.__INITIAL_STATE__ && ke.replaceState(window.__INITIAL_STATE__),
                            i = new h["default"](ye),
                            qe.onReady(function() {
                                ve(qe, ke),
                                i.$mount("#q-app")
                            });
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }, t, null, [[5, 10]])
            })), Ce.apply(this, arguments)
        }
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone && document.addEventListener("DOMContentLoaded", function() {
            we.a.attach(document.body)
        }, !1),
        _e()
    },
    "38bd": function(t, e, n) {
        "use strict";
        var i = n("3add"),
            a = n.n(i);
        a.a
    },
    "3add": function(t, e, n) {
        var i = n("4952");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("2ee5dcf6", i, !1, {
            sourceMap: !1
        })
    },
    4952: function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".icon-360{width:32px;height:32px;top:10px}.icon-360,.icon-avatar{position:absolute;left:10px}.icon-avatar{color:#fff;bottom:10px;z-index:1;font-size:12px;line-height:32px}.icon-like{top:10px}.icon-collect,.icon-like{position:absolute;right:10px;z-index:1}.icon-collect{bottom:10px}.masonry-item:hover .icon-avatar,.masonry-item:hover .icon-collect,.masonry-item:hover .icon-like{opacity:1}.masonry{display:flex;flex-wrap:wrap}@media only screen and (min-device-width:480px){.icon-avatar,.icon-collect,.icon-like,.masonry-desc{opacity:0;transition:opacity 0.3s ease}}", ""])
    },
    "4b61": function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".masonry-item{padding:8px;box-sizing:border-box;min-height:200px}@media (max-width:800px){.masonry-item{min-height:100px}}.masonry-item:hover .masonry-desc{opacity:1}", ""])
    },
    "4f8f": function(t, e, n) {
        "use strict";
        var i = n("92c1"),
            a = n.n(i);
        a.a
    },
    5275: function(t, e, n) {
        "use strict";
        var i = n("641c"),
            a = n.n(i);
        a.a
    },
    "56b4": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-lg",
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", [t._v("Already have an account? Log in")]), n("q-card-section", [n("div", {
                    staticClass: "text-h5 text-weight-bold"
                }, [t._v("Welcome to pixexid")]), n("div", {
                    staticClass: "text-subtitle2"
                }, [t._v("Join our community")])]), n("q-card-section", [n("q-form", {
                    ref: "form",
                    staticClass: "q-gutter-md",
                    attrs: {
                        autofocus: ""
                    },
                    on: {
                        submit: t.onSubmit,
                        reset: t.onReset
                    }
                }, [n("q-input", {
                    attrs: {
                        label: "First and last name",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    model: {
                        value: t.name,
                        callback: function(e) {
                            t.name = e
                        },
                        expression: "name"
                    }
                }), n("q-input", {
                    attrs: {
                        label: "Email",
                        dense: "",
                        type: "email",
                        square: "",
                        outlined: ""
                    },
                    model: {
                        value: t.email,
                        callback: function(e) {
                            t.email = e
                        },
                        expression: "email"
                    }
                }), n("q-input", {
                    attrs: {
                        label: "Password",
                        type: "password",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    model: {
                        value: t.password,
                        callback: function(e) {
                            t.password = e
                        },
                        expression: "password"
                    }
                }), n("div", [n("q-btn", {
                    staticClass: "full-width",
                    attrs: {
                        loading: t.loading,
                        color: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.$refs.form.submit()
                        }
                    }
                }, [t._v("Join now")])], 1)], 1)], 1)], 1)], 1)
            },
            a = [],
            o = (n("7f7f"), n("551c"), n("06db"), n("097d"), {
                name: "PageRegister",
                data: function() {
                    return {
                        name: "",
                        password: "",
                        email: "",
                        loading: !1
                    }
                },
                methods: {
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onSubmit: function() {
                        var t = this;
                        this.loading = !0,
                        this.$store.dispatch("auth/register", {
                            name: this.name,
                            password: this.password,
                            email: this.email
                        }).then(function(e) {
                            t.$q.notify({
                                message: "Usuário registrado com sucesso",
                                color: "positive"
                            }),
                            t.onOKClick()
                        }).finally(function() {
                            t.loading = !1
                        })
                    },
                    onReset: function() {},
                    onOKClick: function() {
                        this.$emit("ok"),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            }),
            r = o,
            s = n("2877"),
            c = Object(s["a"])(r, i, a, !1, null, null, null);
        e["a"] = c.exports
    },
    "5def": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var i = n("758b");
        function a(t, e) {
            var n = {};
            return e && e.req.headers.cookie && (n.headers = {
                cookie: e.req.headers.cookie
            }), i["a"].get(t, n)
        }
    },
    6131: function(t, e, n) {
        "use strict";
        var i = n("7708"),
            a = n.n(i);
        a.a
    },
    "641c": function(t, e, n) {
        var i = n("a2d9");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("8b6f211e", i, !1, {
            sourceMap: !1
        })
    },
    "741d": function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".album-card{cursor:pointer;opacity:0.65;transform:opacity 0.3 ease}.album-card:hover{opacity:1}.album-preview{cursor:pointer}.image-preview{transition:0.4s ease;opacity:1}.image-preview-2{transition:0.3s ease;opacity:1}", ""])
    },
    "758b": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return l
        });
        var i = n("967e"),
            a = n.n(i),
            o = (n("96cf"), n("fa84")),
            r = n.n(o),
            s = n("bc3a"),
            c = n.n(s),
            l = c.a.create({
                baseURL: "http://localhost:5000"
            });
        e["b"] = function() {
            var t = r()(a.a.mark(function t(e) {
                var n,
                    i;
                return a.a.wrap(function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            n = e.Vue,
                            i = e.ssrContext,
                            n.prototype.$axios = l,
                            i || (l.defaults.baseURL = "https://pixexid.com");
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }, t)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
    },
    7708: function(t, e, n) {
        var i = n("4b61");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("d120c452", i, !1, {
            sourceMap: !1
        })
    },
    7955: function(t, e, n) {
        var i = n("96ef");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("6a90ff32", i, !1, {
            sourceMap: !1
        })
    },
    "7a91": function(t, e) {},
    "7b93": function(t, e, n) {
        var i = n("741d");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("6333bfb6", i, !1, {
            sourceMap: !1
        })
    },
    "7e6d": function(t, e, n) {
        var i = n("b50b");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("01eb35e0", i, !1, {
            sourceMap: !1
        })
    },
    "808f": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.src ? n("q-avatar", {
                    attrs: {
                        size: t.size
                    }
                }, [n("Imgix", {
                    key: t.src ? t.src : "empty",
                    attrs: {
                        width: 180,
                        height: 180,
                        path: t.src,
                        alt: t.alt,
                        "placeholder-params": {
                            w: 20,
                            h: 20
                        },
                        params: {
                            pr: "true",
                            fo: "face",
                            e: "sharpen"
                        },
                        srcset: [{
                            size: "1x",
                            params: {
                                w: 180,
                                h: 180
                            }
                        }, {
                            size: "2x",
                            params: {
                                w: 180,
                                h: 180,
                                dpr: 2
                            }
                        }]
                    }
                })], 1) : n("q-avatar", {
                    attrs: {
                        size: t.size,
                        color: "secondary",
                        "font-size": t.size,
                        "text-color": "white",
                        icon: "eva-person"
                    }
                })
            },
            a = [],
            o = n("9152"),
            r = {
                name: "UserAvatar",
                components: {
                    Imgix: o["a"]
                },
                props: {
                    src: {
                        type: String
                    },
                    alt: {
                        type: String
                    },
                    size: {
                        type: String,
                        default: "150px"
                    }
                }
            },
            s = r,
            c = n("2877"),
            l = Object(c["a"])(s, i, a, !1, null, null, null);
        e["a"] = l.exports
    },
    "81cc": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "row q-col-gutter-xl "
                }, t._l(t.albums, function(e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "col-md-4 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 no-pointer-events"
                    }, [n("q-card", {
                        staticClass: "album-card dropshadow",
                        on: {
                            click: function(n) {
                                return t.onClick(e)
                            }
                        }
                    }, [n("q-card-section", [n("div", {
                        staticClass: "album-preview"
                    }, [n("div", {
                        staticClass: "row q-col-gutter-sm"
                    }, [n("div", {
                        staticClass: "col-12"
                    }, [n("Imgix", {
                        attrs: {
                            path: e.pictures[0].filename,
                            alt: e.pictures[0].title,
                            width: 370,
                            height: 300,
                            params: {
                                e: "sharpen"
                            },
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 370,
                                    h: 300
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 370,
                                    h: 300,
                                    dpr: 2
                                }
                            }]
                        }
                    })], 1), n("div", {
                        staticClass: "col-3"
                    }, [n("Imgix", {
                        attrs: {
                            path: e.pictures[1].filename,
                            alt: e.pictures[1].title,
                            width: 87,
                            height: 130,
                            params: {
                                e: "sharpen"
                            },
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 87,
                                    h: 130
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 87,
                                    h: 130,
                                    dpr: 2
                                }
                            }]
                        }
                    })], 1), n("div", {
                        staticClass: "col-3"
                    }, [n("Imgix", {
                        attrs: {
                            path: e.pictures[2].filename,
                            alt: e.pictures[2].title,
                            width: 87,
                            height: 130,
                            params: {
                                e: "sharpen"
                            },
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 87,
                                    h: 130
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 87,
                                    h: 130,
                                    dpr: 2
                                }
                            }]
                        }
                    })], 1), n("div", {
                        staticClass: "col-3"
                    }, [n("Imgix", {
                        attrs: {
                            path: e.pictures[3].filename,
                            alt: e.pictures[3].title,
                            width: 87,
                            height: 130,
                            params: {
                                e: "sharpen"
                            },
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 87,
                                    h: 130
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 87,
                                    h: 130,
                                    dpr: 2
                                }
                            }]
                        }
                    })], 1), n("div", {
                        staticClass: "col-3"
                    }, [n("Imgix", {
                        attrs: {
                            path: e.pictures[4].filename,
                            alt: e.pictures[4].title,
                            width: 87,
                            height: 130,
                            params: {
                                e: "sharpen"
                            },
                            srcset: [{
                                size: "1x",
                                params: {
                                    w: 87,
                                    h: 130
                                }
                            }, {
                                size: "2x",
                                params: {
                                    w: 87,
                                    h: 130,
                                    dpr: 2
                                }
                            }]
                        }
                    })], 1)])])]), n("q-card-section", [n("div", {
                        staticClass: "text-h4 text-bold text-center"
                    }, [t._v(t._s(e.title))]), n("div", {
                        staticClass: "text-subtitle text-bold text-center"
                    }, [t._v("Curated by " + t._s(e.createdBy.name))])]), n("q-card-section", t._l(e.tags, function(e, i) {
                        return n("q-chip", {
                            key: i,
                            attrs: {
                                square: "",
                                clickable: "",
                                color: "grey-2",
                                "text-color": "secondary"
                            },
                            on: {
                                click: function(n) {
                                    return t.onClick(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    }), 1)], 1)], 1)
                }), 0)
            },
            a = [],
            o = n("9152"),
            r = {
                name: "PageIndex",
                props: {
                    albums: {
                        type: Array,
                        required: !0
                    }
                },
                components: {
                    Imgix: o["a"]
                },
                methods: {
                    onClick: function(t) {
                        this.$router.push({
                            path: "/album/".concat(t.id)
                        })
                    }
                }
            },
            s = r,
            c = (n("ade5"), n("2877")),
            l = Object(c["a"])(s, i, a, !1, null, null, null);
        e["a"] = l.exports
    },
    "848c": function(t, e) {},
    "8df0": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-field", {
                    ref: "field",
                    staticStyle: {
                        cursor: "text"
                    },
                    attrs: {
                        "stack-label": t.text.length > 0 || t.value.length > 0,
                        square: "",
                        label: t.label,
                        outlined: "",
                        dense: ""
                    },
                    on: {
                        blur: t.onBlur,
                        focus: t.focus
                    },
                    scopedSlots: t._u([{
                        key: "prepend",
                        fn: function() {
                            return [t._t("prepend")]
                        },
                        proxy: !0
                    }, {
                        key: "append",
                        fn: function() {
                            return [t._t("append")]
                        },
                        proxy: !0
                    }], null, !0)
                }, [n("div", {
                    staticClass: "flex"
                }, [t._l(t.value, function(e) {
                    return n("q-chip", {
                        key: e,
                        attrs: {
                            dense: "",
                            square: "",
                            removable: ""
                        },
                        on: {
                            remove: function(n) {
                                return t.removeTag(e)
                            }
                        }
                    }, [t._v(t._s(e))])
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.text,
                        expression: "text"
                    }],
                    ref: "input",
                    staticClass: "q-select__input q-placeholder col col-grow",
                    attrs: {
                        tabindex: "-1"
                    },
                    domProps: {
                        value: t.text
                    },
                    on: {
                        keydown: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onBlur(e)
                        },
                        input: function(e) {
                            e.target.composing || (t.text = e.target.value)
                        }
                    }
                })], 2)])
            },
            a = [],
            o = (n("28a5"), {
                props: {
                    value: {
                        type: Array
                    },
                    label: String
                },
                data: function() {
                    return {
                        text: ""
                    }
                },
                watch: {
                    text: function(t) {
                        var e = t.split(",");
                        e.length > 1 && (this.addTag(e[0]), this.text = e[1])
                    }
                },
                computed: {
                    hasError: function() {
                        return this.$refs.field.hasError
                    }
                },
                methods: {
                    focus: function() {
                        void 0 !== this.$refs.input && this.$refs.input !== document.activeElement && this.$refs.input.focus()
                    },
                    removeTag: function(t) {
                        var e = this;
                        this.value.splice(this.value.indexOf(t), 1),
                        this.$nextTick(function() {
                            e.$refs.input.focus()
                        })
                    },
                    onBlur: function() {
                        this.text.length > 0 && (this.addTag(this.text), this.text = "")
                    },
                    addTag: function(t) {
                        var e = this.value.indexOf(t);
                        -1 != e && this.value.splice(e, 1),
                        this.value.push(t)
                    },
                    validate: function() {
                        return this.$refs.field.validate()
                    }
                }
            }),
            r = o,
            s = n("2877"),
            c = Object(s["a"])(r, i, a, !1, null, null, null);
        e["a"] = c.exports
    },
    "8fdb": function(t, e, n) {
        var i = n("f10c");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("6ea7ad82", i, !1, {
            sourceMap: !1
        })
    },
    9152: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("img", {
                    staticClass: "imgix",
                    class: {
                        zoomable: t.zoomable,
                        zoom: t.hasZoom
                    },
                    attrs: {
                        alt: t.alt,
                        width: t.width,
                        height: t.height,
                        "data-src": "https://images.pixexid.com/" + t.path
                    },
                    on: {
                        click: t.toggleZoom
                    }
                })
            },
            a = [],
            o = (n("8e6e"), n("8a81"), n("ac6a"), n("cadf"), n("456d"), n("6b54"), n("06db"), n("c47a")),
            r = n.n(o);
        n("c5f6");
        function s(t, e) {
            var n = Object.keys(t);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(n, !0).forEach(function(e) {
                    r()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var l = {
                name: "Imgix",
                props: {
                    path: String,
                    alt: String,
                    width: Number,
                    height: Number,
                    srcset: Array,
                    lazy: {
                        type: Boolean,
                        default: !0
                    },
                    placeholderParams: {
                        type: Object,
                        default: function() {
                            return {
                                w: 20
                            }
                        }
                    },
                    zoomable: {
                        type: Boolean,
                        default: !1
                    },
                    params: {
                        type: Object,
                        required: !1
                    }
                },
                data: function() {
                    return {
                        hasZoom: !1,
                        isInViewport: !1
                    }
                },
                destroyed: function() {
                    this.observer && this.observer.disconnect()
                },
                mounted: function() {},
                methods: {
                    toggleZoom: function() {
                        this.zoomable && (this.hasZoom = !this.hasZoom)
                    },
                    qs: function(t) {
                        var e = new URLSearchParams(c({}, t, {}, this.params));
                        return e.toString()
                    }
                }
            },
            u = l,
            d = (n("5275"), n("2877")),
            p = Object(d["a"])(u, i, a, !1, null, null, null);
        e["a"] = p.exports
    },
    "92c1": function(t, e, n) {
        var i = n("c30a");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("6acdfe7a", i, !1, {
            sourceMap: !1
        })
    },
    9364: function(t, e, n) {
        "use strict";
        var i = n("beb8"),
            a = n.n(i);
        a.a
    },
    "96ef": function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".cropper{width:600px}", ""])
    },
    a142: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "center-screen"
                }, [n("q-item", {
                    staticClass: "q-pb-md"
                }, [n("q-item-section", {
                    attrs: {
                        avatar: ""
                    }
                }, [n("UserAvatar", {
                    attrs: {
                        size: "48px",
                        src: t.image.uploadedBy.profilePicture,
                        alt: t.image.uploadedBy.name
                    }
                })], 1), n("q-item-section", [n("q-item-label", [n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: "/profile/" + t.image.uploadedBy.id
                    }
                }, [t._v("\n          " + t._s(t.image.uploadedBy.name) + "\n        ")])], 1), n("q-item-label", [t._v(t._s(t.image.uploadedBy.profession))])], 1), n("q-item-section", {
                    attrs: {
                        avatar: ""
                    }
                }, [n("div", {
                    staticClass: "col q-gutter-sm"
                }, [n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        unelevated: "",
                        "text-color": t.image.likedByMe ? "red" : "secondary",
                        icon: t.image.likedByMe ? "eva-heart" : "eva-heart-outline",
                        loading: t.likeLoading,
                        dense: t.$q.screen.lt.sm,
                        label: t.image.likes
                    },
                    on: {
                        click: t.likeOrUnlike
                    }
                }), n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        unelevated: "",
                        icon: "eva-plus-outline",
                        loading: t.collecting,
                        dense: t.$q.screen.lt.sm,
                        label: t.$q.screen.gt.xs ? "Collect" : ""
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.loginIfNeeded(e)
                        }
                    }
                }, [n("AlbumSelect", {
                    ref: "collect",
                    on: {
                        selected: t.onCollectSelected
                    }
                })], 1), t.image.tags.includes("360 panorama") ? t._e() : n("q-btn", {
                    staticClass: "dropshadow platform-ios-hide",
                    attrs: {
                        unelevated: "",
                        icon: "eva-crop",
                        dense: t.$q.screen.lt.sm,
                        label: t.$q.screen.gt.xs ? "Crop" : ""
                    },
                    on: {
                        click: t.crop
                    }
                }), n("q-btn", {
                    attrs: {
                        icon: "eva-cloud-download-outline",
                        label: t.$q.screen.gt.xs ? "Download" : "",
                        dense: t.$q.screen.lt.sm,
                        color: "primary"
                    },
                    on: {
                        click: t.download
                    }
                })], 1)])], 1), t._m(0), t.image ? [n("div", {
                    staticClass: "relative-position",
                    attrs: {
                        itemscope: "",
                        itemtype: "schema.org/ImageObject"
                    }
                }, [n("meta", {
                    attrs: {
                        itemprop: "contentUrl",
                        content: "https://images.pixexid.com/" + t.image.filename
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "license",
                        content: "https://pixexid.com/license"
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "acquireLicensePage",
                        content: "https://pixexid.com/license"
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "uploadDate",
                        content: t.image.createdAt
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "width",
                        content: t.image.width
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "height",
                        content: t.image.height
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "author",
                        content: t.image.uploadedBy.name
                    }
                }), n("meta", {
                    attrs: {
                        itemprop: "description",
                        content: t.image.description
                    }
                }), t.image.location ? n("meta", {
                    attrs: {
                        itemprop: "contentLocation",
                        content: t.image.location.label
                    }
                }) : t._e(), t.is360 ? n("PanoViewer", {
                    key: t.image.id,
                    attrs: {
                        image: t.image
                    }
                }) : n("Imgix", {
                    key: t.image.id,
                    staticClass: "fit",
                    attrs: {
                        lazy: !1,
                        zoomable: t.image.height / t.image.width > 900 / 1300,
                        path: t.image.filename,
                        alt: t.image.description
                    }
                })], 1), n("div", {
                    staticClass: "row q-pt-md q-pb-md q-col-gutter-md"
                }, [t.image.location ? n("div", [n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        icon: "eva-pin-outline",
                        label: t.$q.screen.xs ? null : t.image.location.label,
                        unelevated: "",
                        dense: t.$q.screen.xs
                    },
                    on: {
                        click: function(e) {
                            return t.openURL("https://www.google.com/maps/search/?api=1&query=" + t.image.location.value.lat + "," + t.image.location.value.lng)
                        }
                    }
                })], 1) : t._e(), n("q-space"), n("div", [n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        icon: "eva-share-outline",
                        label: t.$q.screen.xs ? null : "Share",
                        unelevated: "",
                        dense: t.$q.screen.xs
                    },
                    on: {
                        click: t.share
                    }
                })], 1), n("div", [n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        dense: t.$q.screen.xs,
                        icon: "eva-image-outline",
                        label: t.$q.screen.xs ? null : "Info",
                        unelevated: ""
                    },
                    on: {
                        click: t.info
                    }
                })], 1), n("div", [n("q-btn", {
                    staticClass: "dropshadow",
                    attrs: {
                        dense: t.$q.screen.xs,
                        label: t.$q.screen.xs ? null : "License",
                        icon: "eva-file-text-outline",
                        unelevated: ""
                    },
                    on: {
                        click: t.license
                    }
                })], 1), n("div", [n("button", {
                    class: "q-btn q-btn-item non-selectable no-outline dropshadow red q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--wrap " + (t.$q.screen.xs ? "q-btn--dense" : ""),
                    attrs: {
                        "data-cp-url": "https://images.pixexid.com/" + t.image.filename
                    }
                }, [n("span", {
                    staticClass: "q-btn__wrapper col row q-anchor--skip"
                }, [n("span", {
                    staticClass: "q-btn__content text-center col items-center q-anchor--skip justify-center row"
                }, [n("i", {
                    class: "eva eva-clipboard-outline q-icon notranslate " + (t.$q.screen.xs ? "" : "on-left"),
                    attrs: {
                        "aria-hidden": "true",
                        role: "img"
                    }
                }), t.$q.screen.xs ? t._e() : n("span", {
                    staticClass: "block"
                }, [t._v("Print on canvas")])])])])]), n("q-space")], 1), t.isEditing ? n("TagInput", {
                    attrs: {
                        label: "tags"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [n("q-btn", {
                                attrs: {
                                    flat: "",
                                    icon: "eva-edit",
                                    dense: "",
                                    color: "secondary"
                                },
                                on: {
                                    click: t.endEditTags
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !1, 1891330214),
                    model: {
                        value: t.image.tags,
                        callback: function(e) {
                            t.$set(t.image, "tags", e)
                        },
                        expression: "image.tags"
                    }
                }) : t.$q.screen.xs ? n("div", {
                    staticClass: "scroll"
                }, [n("div", {
                    staticClass: "row no-wrap q-pl-md q-pr-md justify-center q-pl-sm q-pr-sm",
                    staticStyle: {
                        display: "inline-flex"
                    }
                }, t._l(t.image.tags, function(e, i) {
                    return n("q-chip", {
                        key: i,
                        attrs: {
                            square: "",
                            clickable: "",
                            color: "grey-2",
                            "text-color": "secondary"
                        }
                    }, [n("a", {
                        attrs: {
                            href: "/search/" + e
                        },
                        on: {
                            click: function(n) {
                                return t.onClick(e, n)
                            }
                        }
                    }, [t._v("\n            " + t._s(e) + "\n          ")])])
                }), 1)]) : n("div", [t._l(t.image.tags, function(e, i) {
                    return n("q-chip", {
                        key: i,
                        attrs: {
                            square: "",
                            clickable: "",
                            color: "grey-2",
                            "text-color": "secondary"
                        }
                    }, [n("a", {
                        attrs: {
                            href: "/search/" + e
                        },
                        on: {
                            click: function(n) {
                                return t.onClick(e, n)
                            }
                        }
                    }, [t._v("\n          " + t._s(e) + "\n        ")])])
                }), t.isAdmin ? n("q-btn", {
                    attrs: {
                        icon: "eva-edit",
                        color: "primary",
                        dense: ""
                    },
                    on: {
                        click: t.startEditTags
                    }
                }) : t._e()], 2), t._m(1), t._m(2), n("Masonry", {
                    attrs: {
                        images: t.image.relatedPictures,
                        navigateTo: t.navigateTo
                    }
                }), t.image.featuredAlbums.length > 0 ? [n("h1", [t._v("\n        Featured in " + t._s(t.image.featuredAlbums.length) + "\n        " + t._s(1 === t.image.featuredAlbums.length ? "album" : "albums") + "\n      ")]), n("AlbumMasonry", {
                    attrs: {
                        albums: t.image.featuredAlbums
                    }
                })] : t._e()] : t._e()], 2)
            },
            a = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "max-height": "120px",
                        "margin-bottom": "30px",
                        "margin-top": "10px",
                        display: "flex",
                        "justify-content": "center"
                    }
                }, [n("script", {
                    attrs: {
                        type: "application/javascript",
                        async: "",
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    }
                }), n("ins", {
                    staticClass: "adsbygoogle",
                    staticStyle: {
                        display: "inline-block",
                        width: "100%",
                        height: "90px"
                    },
                    attrs: {
                        "data-ad-client": "ca-pub-4683909104503799",
                        "data-ad-slot": "6336406547"
                    }
                }), n("script", {
                    attrs: {
                        type: "application/javascript"
                    }
                }, [t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        margin: "50px 0"
                    }
                }, [n("script", {
                    attrs: {
                        type: "application/javascript",
                        async: "",
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    }
                }), n("ins", {
                    staticClass: "adsbygoogle",
                    staticStyle: {
                        display: "block"
                    },
                    attrs: {
                        "data-ad-client": "ca-pub-4683909104503799",
                        "data-ad-slot": "4280895325",
                        "data-ad-format": "auto",
                        "data-full-width-responsive": "true"
                    }
                }), n("script", {
                    attrs: {
                        type: "application/javascript"
                    }
                }, [t._v("\n          (adsbygoogle = window.adsbygoogle || []).push({});\n      ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "row"
                }, [n("h1", [t._v("Related Photos")])])
            }],
            o = (n("551c"), n("06db"), n("097d"), n("967e")),
            r = n.n(o),
            s = (n("96cf"), n("fa84")),
            c = n.n(s),
            l = (n("6762"), n("2fdb"), n("013f")),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-md cropper",
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", {
                    ref: "container"
                }, [n("croppa", {
                    ref: "croppa",
                    attrs: {
                        "show-remove-button": !1,
                        "initial-image": "https://pixexid.com/img/" + t.path,
                        width: t.canvasWidth,
                        height: t.canvasHeight,
                        quality: t.quality,
                        "prevent-white-space": !0,
                        "show-loading": !0,
                        "zoom-speed": 5
                    },
                    model: {
                        value: t.croppa,
                        callback: function(e) {
                            t.croppa = e
                        },
                        expression: "croppa"
                    }
                })], 1), n("q-card-section", [n("div", {
                    staticClass: "row q-col-gutter-md items-center"
                }, [n("div", {
                    staticClass: "col-12 col-md-4"
                }, [n("q-input", {
                    attrs: {
                        label: "Width",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    on: {
                        blur: t.updateWidth,
                        keydown: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.updateWidth(e)
                        }
                    },
                    model: {
                        value: t.inputWidth,
                        callback: function(e) {
                            t.inputWidth = e
                        },
                        expression: "inputWidth"
                    }
                })], 1), n("div", {
                    staticClass: "col-12 col-md-4"
                }, [n("q-input", {
                    attrs: {
                        label: "Height",
                        dense: "",
                        square: "",
                        outlined: ""
                    },
                    on: {
                        blur: t.updateHeight,
                        keydown: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.updateHeight(e)
                        }
                    },
                    model: {
                        value: t.inputHeight,
                        callback: function(e) {
                            t.inputHeight = e
                        },
                        expression: "inputHeight"
                    }
                })], 1), n("div", {
                    staticClass: "col-auto",
                    staticStyle: {
                        "margin-left": "auto",
                        "margin-right": "auto"
                    }
                }, [n("q-btn", {
                    attrs: {
                        icon: "eva-crop-outline",
                        color: "primary",
                        label: "download"
                    },
                    on: {
                        click: function(e) {
                            return t.download("image/jpeg", .8)
                        }
                    }
                })], 1)])])], 1)], 1)
            },
            d = [],
            p = (n("c5f6"), {
                name: "Cropper",
                props: {
                    path: String,
                    initialWidth: Number,
                    initialHeight: Number
                },
                data: function() {
                    return {
                        croppa: {},
                        canvasWidth: 100,
                        canvasHeight: 100,
                        inputWidth: 100,
                        inputHeight: 100,
                        width: 100,
                        height: 200,
                        clientWidth: 0
                    }
                },
                computed: {
                    quality: function() {
                        return Math.max(this.width / this.canvasWidth, this.height / this.canvasHeight)
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.inputWidth = t.width = t.initialWidth,
                        t.inputHeight = t.height = t.initialHeight,
                        t.clientWidth = t.$refs.container.$el.clientWidth - 32,
                        t.width > t.height ? (t.canvasWidth = t.clientWidth, t.canvasHeight = Math.round(t.height / t.width * t.canvasWidth)) : (t.canvasHeight = t.clientWidth, t.canvasWidth = Math.round(t.width / t.height * t.canvasHeight))
                    })
                },
                methods: {
                    updateWidth: function() {
                        this.width = parseFloat(this.inputWidth),
                        this.width > this.height ? (this.canvasWidth = this.clientWidth, this.canvasHeight = Math.round(this.height / this.width * this.canvasWidth)) : (this.canvasHeight = this.clientWidth, this.canvasWidth = Math.round(this.width / this.height * this.canvasHeight))
                    },
                    updateHeight: function() {
                        this.height = parseFloat(this.inputHeight),
                        this.width > this.height ? (this.canvasWidth = this.clientWidth, this.canvasHeight = Math.round(this.height / this.width * this.canvasWidth)) : (this.canvasHeight = this.clientWidth, this.canvasWidth = Math.round(this.width / this.height * this.canvasHeight))
                    },
                    download: function(t, e) {
                        var n = this;
                        this.$refs.croppa.generateBlob(function(t) {
                            var e = URL.createObjectURL(t),
                                i = document.createElement("a");
                            i.download = n.path,
                            i.href = e,
                            i.click(),
                            URL.revokeObjectURL(e)
                        }, t, e),
                        this.hide()
                    },
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            }),
            h = p,
            f = (n("eb14"), n("2877")),
            m = Object(f["a"])(h, u, d, !1, null, null, null),
            g = m.exports,
            v = n("2d44"),
            b = n("808f"),
            w = n("9152"),
            x = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: "position-relative " + (t.fullscreenMobile ? "panorama-view_mobile-active" : "") + " panorama-view__container"
                }, [t.isPhotoSphereLoaded ? n("q-btn", {
                    staticClass: "dropshadow  panorama-image__button-fullscreen",
                    attrs: {
                        icon: t.fullscreenMobile ? "eva-collapse-outline" : "eva-expand-outline",
                        unelevated: ""
                    },
                    on: {
                        click: t.toggleFullscreen
                    }
                }) : t._e(), t.show360Viewer ? t._e() : n("q-btn", {
                    staticClass: "dropshadow panorama-image__button",
                    attrs: {
                        label: "play 360º",
                        icon: "eva-cube-outline",
                        unelevated: ""
                    },
                    on: {
                        click: t.toggle360Viewer
                    }
                }), t.show360Viewer ? t._e() : n("img", {
                    staticClass: "panorama-image",
                    attrs: {
                        alt: t.image.description,
                        src: "https://images.pixexid.com/" + this.image.filename
                    }
                }), n("div", {
                    ref: "viewer",
                    class: "panorama-view " + (t.show360Viewer ? "" : "panorama-view_hide")
                })], 1)
            },
            y = [],
            k = n("93bf"),
            q = n.n(k),
            _ = n("e368"),
            C = (n("0ca4"), {
                name: "PanoViewer",
                props: {
                    image: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        show360Viewer: !1,
                        isPhotoSphereLoaded: !1,
                        screenfull: null,
                        supportFullscreen: !1,
                        fullscreenMobile: !1
                    }
                },
                beforeDestroy: function() {
                    this.panoViewer && this.destroyPhotoSphere()
                },
                mounted: function() {
                    this.supportFullscreen = q.a.isEnabled
                },
                methods: {
                    toggle360Viewer: function() {
                        this.panoViewer ? (this.show360Viewer = !1, this.destroyPhotoSphere()) : (this.show360Viewer = !0, this.isPhotoSphereLoaded = !0, this.displayPhotoSphere())
                    },
                    destroyPhotoSphere: function() {
                        this.panoViewer.destroy(),
                        this.panoViewer = null
                    },
                    displayPhotoSphere: function() {
                        var t = this;
                        setTimeout(function() {
                            t.panoViewer = new _["Viewer"]({
                                container: t.$refs.viewer,
                                panorama: "https://images.pixexid.com/".concat(t.image.filename, "?").concat(t.$vssWidth < 850 ? "width=4000" : ""),
                                navbar: !1,
                                defaultZoomLvl: 0,
                                minFov: t.$vssWidth < 850 ? 90 : 30
                            })
                        }, 100)
                    },
                    toggleFullscreen: function() {
                        var t = this;
                        this.$vssWidth < 750 ? (this.fullscreenMobile = !this.fullscreenMobile, setTimeout(function() {
                            t.panoViewer.resize()
                        }, 50)) : q.a.request(this.$refs["viewer"])
                    }
                }
            }),
            $ = C,
            S = (n("9364"), Object(f["a"])($, x, y, !1, null, null, null)),
            O = S.exports,
            P = n("81cc"),
            I = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-lg",
                    staticStyle: {
                        width: "548px",
                        "max-width": "80vw"
                    },
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", {
                    staticClass: "row items-center"
                }, [n("strong", [t._v("Share")]), t._v("\n       \n      "), n("span", {
                    staticClass: "text-no-wrap ellipsis"
                }, [t._v(t._s(t.image.description))]), t._v(" by \n      "), n("router-link", {
                    staticClass: "link text-no-wrap",
                    attrs: {
                        to: "/profile/" + t.image.uploadedBy.id
                    }
                }, [t._v(t._s(t.image.uploadedBy.name))]), n("q-space"), n("q-btn", {
                    attrs: {
                        icon: "eva-close",
                        dense: "",
                        flat: ""
                    },
                    on: {
                        click: t.hide
                    }
                })], 1), n("q-card-section", [n("div", {
                    staticClass: "row no-wrap"
                }, [n("social-sharing", {
                    staticStyle: {
                        "flex-grow": "4"
                    },
                    attrs: {
                        media: t.media,
                        url: t.url,
                        title: t.title
                    },
                    inlineTemplate: {
                        render: function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                staticClass: "row no-wrap"
                            }, [n("network", {
                                staticClass: "col-grow",
                                attrs: {
                                    network: "facebook",
                                    id: "facebook"
                                }
                            }, [n("q-btn", {
                                staticStyle: {
                                    "background-color": "#4267b2"
                                },
                                attrs: {
                                    round: "",
                                    dense: t.$q.screen.xs,
                                    "text-color": "white",
                                    icon: "eva-facebook"
                                }
                            })], 1), n("network", {
                                staticClass: "col-grow",
                                attrs: {
                                    network: "twitter",
                                    id: "twitter"
                                }
                            }, [n("q-btn", {
                                staticStyle: {
                                    "background-color": "#1ca1f2"
                                },
                                attrs: {
                                    round: "",
                                    dense: t.$q.screen.xs,
                                    "text-color": "white",
                                    icon: "eva-twitter"
                                }
                            })], 1), n("network", {
                                staticClass: "col-grow",
                                attrs: {
                                    network: "linkedin",
                                    id: "linkedin"
                                }
                            }, [n("q-btn", {
                                staticStyle: {
                                    "background-color": "#0077b5"
                                },
                                attrs: {
                                    round: "",
                                    dense: t.$q.screen.xs,
                                    "text-color": "white",
                                    icon: "eva-linkedin"
                                }
                            })], 1), n("network", {
                                staticClass: "col-grow",
                                attrs: {
                                    network: "email"
                                }
                            }, [n("q-btn", {
                                staticStyle: {
                                    "background-color": "#00263E"
                                },
                                attrs: {
                                    round: "",
                                    dense: t.$q.screen.xs,
                                    "text-color": "white",
                                    icon: "eva-email-outline"
                                }
                            })], 1), n("network", {
                                staticClass: "col-grow",
                                attrs: {
                                    network: "pinterest",
                                    id: "pinterest"
                                }
                            }, [n("q-btn", {
                                staticStyle: {
                                    "background-color": "#e60022"
                                },
                                attrs: {
                                    round: "",
                                    dense: t.$q.screen.xs,
                                    "text-color": "white",
                                    icon: "img:https://images.pixexid.com/pinterest.svg"
                                }
                            })], 1)], 1)
                        },
                        staticRenderFns: []
                    }
                }), n("div", {
                    staticStyle: {
                        "flex-grow": "1"
                    }
                }, [n("q-btn", {
                    staticStyle: {
                        "background-color": "#00263E"
                    },
                    attrs: {
                        round: "",
                        "text-color": "white",
                        dense: t.$q.screen.xs,
                        icon: "eva-link-2-outline"
                    },
                    on: {
                        click: t.copyToClipboard
                    }
                })], 1)], 1)])], 1)], 1)
            },
            j = [];
        function z(t) {
            var e = document.createElement("textarea");
            e.value = t,
            e.setAttribute("readonly", ""),
            e.style = {
                position: "absolute",
                left: "-9999px"
            },
            document.body.appendChild(e),
            e.select(),
            document.execCommand("copy"),
            document.body.removeChild(e)
        }
        var T = {
                name: "SocialShare",
                props: {
                    image: Object
                },
                data: function() {
                    return {}
                },
                computed: {
                    url: function() {
                        return window.location.href
                    },
                    title: function() {
                        return document.title
                    },
                    media: function() {
                        function t(t) {
                            for (var e = document.getElementsByTagName("meta"), n = 0; n < e.length; n++)
                                if (e[n].getAttribute("property") === t)
                                    return e[n].getAttribute("content");
                            return ""
                        }
                        return t("og:image")
                    }
                },
                methods: {
                    copyToClipboard: function() {
                        z(this.url)
                    },
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            },
            E = T,
            D = Object(f["a"])(E, I, j, !1, null, null, null),
            M = D.exports,
            L = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [t.info ? n("q-card", {
                    staticClass: "q-pa-lg",
                    staticStyle: {
                        width: "548px",
                        "max-width": "80vw"
                    },
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", [n("div", {
                    staticClass: "text-h5"
                }, [n("strong", [t._v("Info")])]), n("div", [t._v("Published on " + t._s(t.formatDate(t.info.createdAt)))])]), n("q-card-section", [n("div", {
                    staticClass: "row q-col-gutter-md",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [n("div", {
                    staticClass: "col-md-4 col-xs-12"
                }, [n("div", [n("q-icon", {
                    attrs: {
                        name: "eva-eye-outline"
                    }
                }), t._v(" Views\n          ")], 1), n("div", [n("strong", [t._v(t._s(t.info.views))])])]), n("div", {
                    staticClass: "col-md-4 col-xs-12"
                }, [n("div", [n("q-icon", {
                    attrs: {
                        name: "eva-download-outline"
                    }
                }), t._v(" Downloads\n          ")], 1), n("div", [n("strong", [t._v(t._s(t.info.downloads))])])]), n("div", {
                    staticClass: "col-md-4 col-xs-12"
                }, [n("div", [n("q-icon", {
                    attrs: {
                        name: "eva-heart-outline"
                    }
                }), t._v(" Likes\n          ")], 1), n("div", [n("strong", [t._v(t._s(t.info.likes))])])])]), n("q-separator", {
                    attrs: {
                        spaced: ""
                    }
                }), n("div", {
                    staticClass: "row q-col-gutter-md"
                }, [n("div", {
                    staticClass: "col-md-4 col-xs-12"
                }, [n("div", [t._v("\n            Dimensions\n          ")]), n("div", [n("strong", [t._v(t._s(t.info.width) + " * " + t._s(t.info.height))])])])])], 1), n("q-card-actions", {
                    attrs: {
                        align: "right"
                    }
                }, [n("q-btn", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        flat: ""
                    }
                }, [t._v("Ok")])], 1)], 1) : t._e()], 1)
            },
            Q = [],
            U = n("bd4c"),
            A = {
                name: "Info",
                props: {
                    id: String
                },
                created: function() {
                    var t = c()(r.a.mark(function t() {
                        var e;
                        return r.a.wrap(function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.$axios.get("/api/v1/image/".concat(encodeURIComponent(this.id), "/info"));
                                case 2:
                                    e = t.sent,
                                    this.info = e.data;
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        info: null
                    }
                },
                methods: {
                    formatDate: function(t) {
                        return U["a"].formatDate(t, "MMMM, D, YYYY")
                    },
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onReset: function() {},
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            },
            H = A,
            W = Object(f["a"])(H, L, Q, !1, null, null, null),
            R = W.exports,
            B = n("b06b"),
            N = n("ff7a"),
            F = n("8df0"),
            V = {
                name: "Image",
                components: {
                    AlbumSelect: v["a"],
                    UserAvatar: b["a"],
                    Imgix: w["a"],
                    PanoViewer: O,
                    AlbumMasonry: P["a"],
                    TagInput: F["a"]
                },
                props: {
                    navigateTo: {
                        type: Function
                    },
                    image: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    is360: function() {
                        return this.image && this.image.tags.includes("360 panorama")
                    },
                    user: function() {
                        return this.$store.state.auth.user
                    },
                    isAdmin: function() {
                        return Boolean(this.user && "admin" === this.user.userType)
                    }
                },
                data: function() {
                    return {
                        likeLoading: !1,
                        collecting: !1,
                        isEditing: !1
                    }
                },
                methods: {
                    encodeURIComponent: encodeURIComponent,
                    startEditTags: function() {
                        this.isEditing = !0
                    },
                    endEditTags: function() {
                        var t = c()(r.a.mark(function t() {
                            return r.a.wrap(function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.$axios.post("/api/v1/image/".concat(this.image.id, "/update-tags"), {
                                            tags: this.image.tags
                                        });
                                    case 3:
                                        return t.prev = 3, this.isEditing = !1, t.finish(3);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this, [[0, , 3, 6]])
                        }));
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    crop: function() {
                        this.$q.dialog({
                            component: g,
                            root: this.$root,
                            path: this.image.filename,
                            initialHeight: this.image.height,
                            initialWidth: this.image.width
                        })
                    },
                    share: function() {
                        this.$q.dialog({
                            component: M,
                            root: this.$root,
                            image: this.image
                        })
                    },
                    info: function() {
                        this.$q.dialog({
                            component: R,
                            root: this.$root,
                            id: this.image.id
                        })
                    },
                    license: function() {
                        this.$q.dialog({
                            component: N["a"],
                            root: this.$root
                        })
                    },
                    loginIfNeeded: function() {
                        if (null == this.user)
                            return this.$q.dialog({
                                component: l["a"],
                                root: this.$root
                            })
                    },
                    onCollectSelected: function(t) {
                        var e = this;
                        this.collecting = !0,
                        this.$axios.post("/api/v1/my-albums/".concat(t, "/collect/").concat(this.image.id)).then(function(t) {}).finally(function() {
                            e.collecting = !1
                        })
                    },
                    likeOrUnlike: function() {
                        var t = this;
                        null === this.user ? this.$q.dialog({
                            component: l["a"],
                            root: this.$root
                        }).onOk(function() {
                            t.user && t.doLikeOrUnlike()
                        }) : this.doLikeOrUnlike()
                    },
                    doLikeOrUnlike: function() {
                        var t = this;
                        this.likeLoading = !0,
                        this.image.likedByMe ? this.$axios.post("/api/v1/unlike/".concat(this.image.id)).then(function(e) {
                            t.image.likes -= e.data,
                            t.image.likedByMe = !1
                        }).finally(function() {
                            t.likeLoading = !1
                        }) : this.$axios.post("/api/v1/like/".concat(this.image.id)).then(function(e) {
                            t.image.likes += e.data,
                            t.image.likedByMe = !0
                        }).finally(function() {
                            t.likeLoading = !1
                        })
                    },
                    openURL: B["a"],
                    download: function() {
                        function t(t, e) {
                            var n = document.createElement("a");
                            n.download = e,
                            n.href = t,
                            n.target = "_blank",
                            n.rel = "noopener",
                            document.body.appendChild(n),
                            n.click(),
                            n.remove()
                        }
                        t("https://pixexid.com/api/v1/download/".concat(this.image.id, "?download=true"), this.image.filename)
                    },
                    onClick: function(t, e) {
                        e.preventDefault(),
                        this.$router.push({
                            path: "/search/".concat(encodeURIComponent(t))
                        })
                    }
                }
            },
            K = V,
            J = (n("4f8f"), Object(f["a"])(K, i, a, !1, null, null, null));
        e["a"] = J.exports
    },
    a2d9: function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".imgix{width:100%;height:auto;background-color:rgba(0,0,0,0.1)}.imgix.zoomable{cursor:zoom-in}.imgix.zoomable:not(.zoom){-o-object-fit:contain;object-fit:contain;max-height:900px}.imgix.zoomable.zoom{cursor:zoom-out}", ""])
    },
    ade5: function(t, e, n) {
        "use strict";
        var i = n("7b93"),
            a = n.n(i);
        a.a
    },
    b17c: function(t, e) {},
    b50b: function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".masonry{display:flex;flex-wrap:wrap}.masonry-item{padding:8px;box-sizing:border-box}.svg-icon{margin:4px}body{background:#f8f9fa}.center-screen{margin-left:auto;margin-right:auto;max-width:1300px}body{font-family:-apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,cantarell,helvetica neue,ubuntu,sans-serif}.gutter-lg>*{margin-right:25px}.gutter-lg>:first-child{margin-left:25px}.gutter-sm>*{margin-right:8px}.gutter-sm>:first-child{margin-left:8px}input[type=file]{position:absolute;opacity:0;z-index:-1}textarea{overflow:hidden}h1{font-size:3rem;line-height:3.125rem;letter-spacing:normal;font-weight:700;-webkit-margin-after:0.67em;margin-block-end:0.67em;-webkit-margin-before:0.67em;margin-block-start:0.67em}body{color:var(--q-color-secondary)}.link{font-weight:700}.link,a{cursor:pointer;-webkit-text-decoration-line:none;text-decoration-line:none;color:var(--q-color-secondary)}.link:hover{text-decoration:underline!important}.dropshadow{background:#fff;box-shadow:0 5px 6px rgba(3,37,62,0.1);-webkit-box-shadow:0 5px 6px rgba(3,37,62,0.1);-moz-box-shadow:0 5px 6px rgba(3,37,62,0.1)}.dropshadow.red{background:#eb0045;box-shadow:0 5px 6px rgba(235,0,69,0.1);-webkit-box-shadow:0 5px 6px rgba(235,0,69,0.1);-moz-box-shadow:0 5px 6px rgba(235,0,69,0.1);color:#fff}button.q-btn.bg-primary{box-shadow:0 5px 10px rgba(111,212,75,0.3)!important}button .q-btn__content div{font-weight:700}.q-page-sticky{z-index:9999}.text-bold,.text-bold *{font-weight:700}img.lazyload:not([src]){visibility:hidden}.no-pointer-events{pointer-events:none}.no-pointer-events>*{pointer-events:auto}.text-h5{font-weight:700;font-size:1.4rem;line-height:1.5rem;margin-bottom:20px;margin-top:20px}", ""])
    },
    beb8: function(t, e, n) {
        var i = n("0880");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("499e").default;
        a("6a3ddee5", i, !1, {
            sourceMap: !1
        })
    },
    c30a: function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".panorama-view{margin-left:auto;margin-right:auto;width:calc(100vw - 32px);height:calc(80vh - 32px);max-width:100%;max-height:800px}", ""])
    },
    c624: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "masonry"
                }, t._l(t.columns, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "masonry-column",
                        style: {
                            width: e.width
                        }
                    }, t._l(e.images, function(e) {
                        return n("div", {
                            key: e.id,
                            staticClass: "masonry-item"
                        }, [n("a", {
                            attrs: {
                                href: "https://pixexid.com/image/" + e.id
                            },
                            on: {
                                click: function(n) {
                                    return t.onClick(e, n)
                                }
                            }
                        }, [n("MasonryPicture", {
                            attrs: {
                                deletable: t.deletable,
                                img: e
                            },
                            on: {
                                delete: t.deleteImage
                            }
                        })], 1)])
                    }), 0)
                }), 0)
            },
            a = [],
            o = (n("6762"), n("2fdb"), n("ac4d"), n("8a81"), n("ac6a"), n("967e")),
            r = n.n(o),
            s = (n("96cf"), n("fa84")),
            c = n.n(s),
            l = n("9152"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "relative-position"
                }, [t.deletable || t.user && "admin" === t.user.userType ? n("q-btn", {
                    staticClass: "icon-like",
                    attrs: {
                        dense: "",
                        flat: "",
                        icon: "eva-trash-2-outline",
                        outline: "",
                        color: "white",
                        loading: t.deleting
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), function() {
                                return t.deleteSelf(e)
                            }()
                        }
                    }
                }) : n("q-btn", {
                    staticClass: "icon-like",
                    attrs: {
                        dense: "",
                        flat: "",
                        color: "white",
                        icon: t.img.likedByMe ? "eva-heart" : "eva-heart-outline",
                        loading: t.likeLoading
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), function() {
                                return t.likeOrUnlike(e)
                            }()
                        }
                    }
                }), n("q-btn", {
                    staticClass: "icon-collect",
                    attrs: {
                        color: "white",
                        dense: "",
                        flat: "",
                        icon: "eva-plus-square-outline",
                        loading: t.collecting
                    },
                    nativeOn: {
                        click: function(e) {
                            return e.stopPropagation(), function() {
                                return t.loginIfNeeded(e)
                            }()
                        }
                    }
                }, [n("AlbumSelect", {
                    ref: "collect",
                    on: {
                        selected: t.onCollectSelected
                    }
                })], 1), n("div", {
                    staticClass: "icon-avatar"
                }, [t._v("\n    free image by \n    "), n("a", {
                    attrs: {
                        href: "/profile/" + t.img.uploadedBy.id
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), function() {
                                e.preventDefault(),
                                t.$router.push("/profile/" + t.img.uploadedBy.id)
                            }()
                        }
                    }
                }, [n("strong", {
                    staticClass: "link text-no-wrap text-white"
                }, [t._v(t._s(t.img.uploadedBy.name))])])]), n("div", [t.img.tags.includes("360 panorama") ? [n("img", {
                    staticClass: "icon-360",
                    attrs: {
                        src: "https://images.pixexid.com/360.svg"
                    }
                }), n("Imgix", {
                    staticClass: "cursor-pointer",
                    attrs: {
                        path: t.img.filename,
                        alt: t.img.description,
                        width: 400,
                        height: 400 / (t.img.width / t.img.height)
                    }
                })] : n("Imgix", {
                    staticClass: "cursor-pointer",
                    attrs: {
                        path: t.img.filename,
                        alt: t.img.description,
                        width: 400,
                        height: 400 / (t.img.width / t.img.height)
                    }
                })], 2)], 1)
            },
            d = [],
            p = (n("551c"), n("06db"), n("097d"), n("c47a")),
            h = n.n(p),
            f = n("013f"),
            m = n("2d44"),
            g = {
                name: "MasonryPicture",
                props: {
                    img: {
                        type: Object,
                        required: !0
                    },
                    deletable: {
                        type: Boolean,
                        required: !0
                    }
                },
                computed: {
                    user: function() {
                        return this.$store.state.auth.user
                    }
                },
                components: {
                    Imgix: l["a"],
                    AlbumSelect: m["a"]
                },
                data: function() {
                    return {
                        likeLoading: !1,
                        collecting: !1,
                        deleting: !1
                    }
                },
                methods: {
                    deleteSelf: function(t) {
                        var e = this;
                        t.preventDefault(),
                        this.$q.dialog(h()({
                            title: "Confirm delete",
                            message: "Exclude this image?",
                            cancel: !0,
                            persistent: !0,
                            ok: {
                                label: "Delete",
                                color: "negative"
                            }
                        }, "cancel", {
                            label: "Cancel",
                            flat: !0,
                            textColor: "secondary"
                        })).onOk(function() {
                            e.deleting = !0,
                            e.$axios.delete("/api/v1/image/".concat(encodeURIComponent(e.img.id))).then(function(t) {
                                e.$emit("delete", e.img)
                            }).finally(function() {
                                e.deleting = !1
                            })
                        })
                    },
                    loginIfNeeded: function(t) {
                        if (t.preventDefault(), null == this.user)
                            return this.$q.dialog({
                                component: f["a"],
                                root: this.$root
                            })
                    },
                    onCollectSelected: function(t) {
                        var e = this;
                        this.collecting = !0,
                        this.$axios.post("/api/v1/my-albums/".concat(t, "/collect/").concat(encodeURIComponent(this.img.id))).then(function(t) {}).finally(function() {
                            e.collecting = !1
                        })
                    },
                    getPublicUrl: function(t) {
                        var e = t.filename;
                        return "https://pixexid.com/img/".concat(e, "?w=400")
                    },
                    likeOrUnlike: function(t) {
                        var e = this;
                        t.preventDefault(),
                        null === this.user ? this.$q.dialog({
                            component: f["a"],
                            root: this.$root
                        }).onOk(function() {
                            e.user && e.doLikeOrUnlike()
                        }) : this.doLikeOrUnlike()
                    },
                    doLikeOrUnlike: function() {
                        var t = this;
                        this.likeLoading = !0,
                        this.img.likedByMe ? this.$axios.post("/api/v1/unlike/".concat(encodeURIComponent(this.img.id))).then(function(e) {
                            t.img.likes -= e.data,
                            t.img.likedByMe = !1
                        }).finally(function() {
                            t.likeLoading = !1
                        }) : this.$axios.post("/api/v1/like/".concat(encodeURIComponent(this.img.id))).then(function(e) {
                            t.img.likes += e.data,
                            t.img.likedByMe = !0
                        }).finally(function() {
                            t.likeLoading = !1
                        })
                    }
                }
            },
            v = g,
            b = (n("38bd"), n("2877")),
            w = Object(b["a"])(v, u, d, !1, null, null, null),
            x = w.exports,
            y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    attrs: {
                        maximized: t.$q.screen.xs
                    },
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    ref: "card",
                    staticClass: "q-pa-md bg-white",
                    staticStyle: {
                        width: "100vw",
                        "max-width": "1332px"
                    },
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("div", [n("q-btn", {
                    attrs: {
                        icon: "eva-arrow-back-outline",
                        flat: ""
                    },
                    on: {
                        click: t.hide
                    }
                })], 1), n("transition", {
                    attrs: {
                        name: "transitions",
                        "enter-active-class": "animated fadeIn",
                        "leave-active-class": "animated fadeOut",
                        mode: "out-in"
                    }
                }, [n("VueImage", {
                    key: t.image && t.image.id,
                    attrs: {
                        image: t.image,
                        navigateTo: t.reopen
                    }
                })], 1)], 1)], 1)
            },
            k = [],
            q = n("a142"),
            _ = n("5def"),
            C = n("0831"),
            $ = (n("5118"), C["a"].getScrollTarget, C["a"].setScrollPosition, {
                name: "ImageDialog",
                components: {
                    VueImage: q["a"]
                },
                props: {
                    image: Object
                },
                created: function() {
                    var t = this;
                    this.previousState = window.location.pathname,
                    this.previousTitle = document.title,
                    history.replaceState({}, "".concat(this.image.description, " free images"), "/image/".concat(this.image.id)),
                    document.title = "".concat(this.image.description, " free images"),
                    Object(_["a"])("/api/v1/image/".concat(this.image.id)).then(function(e) {
                        return t.$store.dispatch("setData", e.data)
                    })
                },
                meta: function() {
                    return {
                        title: "".concat(this.image.description, " free images"),
                        meta: {
                            description: {
                                name: "description",
                                content: "Download free ".concat(this.image.tags[0], " images. we can see ").concat(this.image.tags.slice(0, 4).join(", "), " on this picture.")
                            },
                            "og:title": {
                                property: "og:title",
                                content: this.image.description
                            },
                            "og:url": {
                                property: "og:url",
                                content: "https://pixexid.com/image/".concat(this.image.id)
                            },
                            "og:description": {
                                property: "og:description",
                                content: "Download free ".concat(this.image.description, " images. we can see ").concat(this.image.tags.slice(0, 4).join(", "), " on this picture.")
                            },
                            "og:image": {
                                property: "og:image",
                                content: "https://images.pixexid.com/".concat(this.image.filename)
                            },
                            "og:image:secure_url": {
                                property: "og:image:secure_url",
                                content: "https://images.pixexid.com/".concat(this.image.filename)
                            },
                            "og:image:alt": {
                                property: "og:image:alt",
                                content: "Download free ".concat(this.image.description, " images. we can see ").concat(this.image.tags.slice(0, 4).join(", "), " on this picture.")
                            },
                            "twitter:card": {
                                property: "twitter:card",
                                content: "summary_large_image"
                            },
                            "twitter:site": {
                                property: "twitter:site",
                                content: "@pixexid"
                            },
                            "twitter:creator": {
                                property: "twitter:creator",
                                content: "@pixexid"
                            },
                            "twitter:description": {
                                property: "twitter:description",
                                content: "Download free ".concat(this.image.description, " images. we can see ").concat(this.image.tags.slice(0, 4).join(", "), " on this picture.")
                            },
                            "twitter:title": {
                                property: "twitter:title",
                                content: this.image.description
                            },
                            "twitter:image": {
                                property: "twitter:image",
                                content: "https://images.pixexid.com/".concat(this.image.filename)
                            }
                        }
                    }
                },
                data: function() {
                    return {
                        previousState: null,
                        previousTitle: null
                    }
                },
                methods: {
                    reopen: function() {
                        var t = c()(r.a.mark(function t(e) {
                            var n,
                                i,
                                a = this;
                            return r.a.wrap(function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$axios.get("/api/v1/image/".concat(e.id));
                                    case 2:
                                        n = t.sent,
                                        i = n.data,
                                        this.image = i,
                                        history.replaceState({}, "".concat(this.image.description, " free images"), "/image/".concat(this.image.id)),
                                        document.title = "".concat(this.image.description, " free images"),
                                        this.$nextTick(function() {
                                            a.$refs.card.$el.scrollTop = 0
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this)
                        }));
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        history.replaceState({}, this.previousTitle, this.previousState),
                        document.title = this.previousTitle,
                        this.$emit("hide")
                    },
                    onReset: function() {},
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            }),
            S = $,
            O = Object(b["a"])(S, y, k, !1, null, null, null),
            P = O.exports,
            I = {
                name: "Masonry",
                props: {
                    navigateTo: {
                        type: Function,
                        default: null
                    },
                    images: {
                        type: Array,
                        required: !0
                    },
                    deletable: {
                        type: Boolean,
                        required: !1
                    }
                },
                components: {
                    Imgix: l["a"],
                    MasonryPicture: x
                },
                methods: {
                    deleteImage: function(t) {
                        this.images.splice(this.images.indexOf(t), 1)
                    },
                    getPublicUrl: function(t) {
                        var e = t.filename;
                        return "https://pixexid.com/img/".concat(e, "?w=400")
                    },
                    onClick: function() {
                        var t = c()(r.a.mark(function t(e, n) {
                            var i,
                                a;
                            return r.a.wrap(function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (n.preventDefault(), null != this.navigateTo) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 4, this.$axios.get("/api/v1/image/".concat(e.id));
                                    case 4:
                                        return i = t.sent, a = i.data, t.abrupt("return", this.$q.dialog({
                                            component: P,
                                            root: this.$root,
                                            image: a
                                        }));
                                    case 9:
                                        this.navigateTo(e);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this)
                        }));
                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                computed: {
                    columns: function() {
                        function t(t) {
                            for (var e = t[0], n = 0, i = 1; i < t.length; ++i)
                                t[i].height < e.height && (e = t[i], n = i);
                            return n
                        }
                        if (this.$q.platform.is.mobile)
                            return [{
                                width: "100%",
                                images: this.images
                            }];
                        var e = [{
                                width: "calc(100% / 3)",
                                height: 0,
                                images: []
                            }, {
                                width: "calc(100% / 3)",
                                height: 0,
                                images: []
                            }, {
                                width: "calc(100% / 3)",
                                height: 0,
                                images: []
                            }],
                            n = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, r = this.images[Symbol.iterator](); !(n = (o = r.next()).done); n = !0) {
                                var s = o.value,
                                    c = t(e),
                                    l = s.tags.includes("360 panorama") ? 400 : 400 / s.width * s.height;
                                e[c].images.push(s),
                                e[c].height += l
                            }
                        } catch (u) {
                            i = !0,
                            a = u
                        } finally {
                            try {
                                n || null == r.return || r.return()
                            } finally {
                                if (i)
                                    throw a
                            }
                        }
                        return e
                    }
                }
            },
            j = I,
            z = (n("6131"), Object(b["a"])(j, i, a, !1, null, null, null));
        e["a"] = z.exports
    },
    da41: function(t, e, n) {
        "use strict";
        var i = n("8fdb"),
            a = n.n(i);
        a.a
    },
    eb14: function(t, e, n) {
        "use strict";
        var i = n("7955"),
            a = n.n(i);
        a.a
    },
    f10c: function(t, e, n) {
        e = t.exports = n("24fb")(!1),
        e.push([t.i, ".divider{display:table;font-size:18px;text-align:center;width:100%}.divider span{display:table-cell;position:relative}.divider span:first-child,.divider span:last-child{width:50%;top:13px;background-size:100% 2px;background-position:0 0,0 100%;background-repeat:no-repeat}.divider span:first-child{background-image:linear-gradient(90deg,transparent,#000)}.divider span:nth-child(2){color:#000;padding:0px 5px;width:auto;white-space:nowrap}.divider span:last-child{background-image:linear-gradient(90deg,#000,transparent)}", ""])
    },
    f6c0: function(t, e) {},
    ff7a: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("q-dialog", {
                    ref: "dialog",
                    on: {
                        hide: t.onDialogHide
                    }
                }, [n("q-card", {
                    staticClass: "q-pa-lg",
                    staticStyle: {
                        width: "548px",
                        "max-width": "80vw"
                    },
                    attrs: {
                        flat: "",
                        square: ""
                    }
                }, [n("q-card-section", [n("h1", [t._v("License")])]), n("q-card-section", [n("p", [n("strong", [t._v("Of course you can use our images on your projects but have something you can’t do with our images.")])]), n("p", [t._v("Our community provides free images that can be used for a variety of purposes, be it commercial or personal. The pictures can be edited, created upon or modified as you like. It is not necessary to mention the source of the image, although it is always appreciated, for it values the person who took some of their time to make it possible for you to have it.")]), n("p", [t._v("Our photos can serve a great deal of situations, they can be shared, printed on any kind of material, used to design websites, marketing products, and so on. We don’t charge for our content, but donations of any amount are always welcome to help support the project costs and the contributing photographers.")]), n("p", [t._v("Our users are encouraged to show their consideration to our hard work by not selling the content we offer for free without adding any value to it, not implying that people in the image endorse or recommend any product or cause specifically, not exposing identifiable people in offensive ways and not redistributing our content in other stock photos or wallpapers platforms.")])]), n("q-card-actions", {
                    attrs: {
                        align: "right"
                    }
                }, [n("q-btn", {
                    directives: [{
                        name: "close-popup",
                        rawName: "v-close-popup"
                    }],
                    attrs: {
                        flat: ""
                    }
                }, [t._v("Ok")])], 1)], 1)], 1)
            },
            a = [],
            o = {
                name: "License",
                methods: {
                    show: function() {
                        this.$refs.dialog.show()
                    },
                    hide: function() {
                        this.$refs.dialog.hide()
                    },
                    onDialogHide: function() {
                        this.$emit("hide")
                    },
                    onReset: function() {},
                    onOKClick: function(t) {
                        this.$emit("ok", t),
                        this.hide()
                    },
                    onCancelClick: function() {
                        this.hide()
                    }
                }
            },
            r = o,
            s = n("2877"),
            c = Object(s["a"])(r, i, a, !1, null, null, null);
        e["a"] = c.exports
    }
});
