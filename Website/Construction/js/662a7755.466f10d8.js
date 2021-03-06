(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["662a7755"], {
    2006: function(t, e, i) {
        e = t.exports = i("24fb")(!1),
        e.push([t.i, ".panorama-view{margin-left:auto;margin-right:auto;width:calc(100vw - 32px);height:calc(80vh - 32px);max-width:100%;max-height:800px}", ""])
    },
    "283a": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("q-page", {
                    staticClass: "q-pa-md"
                }, [i("VueImage", {
                    attrs: {
                        image: t.image
                    }
                })], 1)
            },
            n = [],
            o = i("a142"),
            r = i("5def"),
            c = {
                name: "PageImage",
                components: {
                    VueImage: o["a"]
                },
                preFetch: function(t) {
                    var e = t.store,
                        i = t.currentRoute,
                        a = t.ssrContext;
                    return Object(r["a"])("/api/v1/image/".concat(i.params.id), a).then(function(t) {
                        return e.dispatch("setData", t.data)
                    })
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    }
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
                    var t = {
                        image: JSON.parse(JSON.stringify(this.$store.state.page.data))
                    };
                    return t
                },
                watch: {
                    id: {
                        handler: function(t) {
                            var e = this;
                            this.$axios.get("/api/v1/image/".concat(t)).then(function(t) {
                                e.image = t.data
                            })
                        },
                        immediate: !0
                    }
                }
            },
            s = c,
            p = (i("5769"), i("2877")),
            g = Object(p["a"])(s, a, n, !1, null, null, null);
        e["default"] = g.exports
    },
    "35cb": function(t, e, i) {
        var a = i("2006");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("499e").default;
        n("38072c02", a, !1, {
            sourceMap: !1
        })
    },
    5769: function(t, e, i) {
        "use strict";
        var a = i("35cb"),
            n = i.n(a);
        n.a
    }
}]);
