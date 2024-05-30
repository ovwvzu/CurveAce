/*! For license information please see globals.88db7a6b6e99b668951f.js.LICENSE.txt */ ! function() {
	var t, e, n, r, o, i = {
			5225: function(t, e, n) {
				"use strict";

				function r(t) {
					return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, r(t)
				}

				function o(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != n) {
							var r, o, i, a, c = [],
								u = !0,
								l = !1;
							try {
								if (i = (n = n.call(t)).next, 0 === e) {
									if (Object(n) !== n) return;
									u = !1
								} else
									for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
							} catch (t) {
								l = !0, o = t
							} finally {
								try {
									if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return c
						}
					}(t, e) || i(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function i(t, e) {
					if (t) {
						if ("string" == typeof t) return a(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
					}
				}

				function a(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
					return r
				}

				function c(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(t);
						e && (r = r.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function u(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? c(Object(n), !0).forEach((function(e) {
							l(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}

				function l(t, e, n) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== r(t) || null === t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var o = n.call(t, "string");
								if ("object" !== r(o)) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(t);
						return "symbol" === r(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				n.d(e, {
					B5: function() {
						return p
					},
					Xb: function() {
						return h
					},
					Y8: function() {
						return _
					},
					YN: function() {
						return b
					},
					_u: function() {
						return g
					},
					hv: function() {
						return A
					},
					tg: function() {
						return d
					},
					vw: function() {
						return E
					},
					xv: function() {
						return w
					},
					z1: function() {
						return f
					}
				}), n(4916), n(5306), n(4765), n(6992), n(1539), n(8783), n(3948), n(1637), n(8862), n(9601), n(2222), n(8674), n(6699), n(2023), n(9720), n(4747), n(9494), n(9653), n(6649), n(6078), n(2526), n(1817), n(9070), n(7941), n(7327), n(5003), n(9337), n(3321), n(2165), n(1038), n(7042), n(7601);
				var s, f = function() {
						return window.cdn_path ? window.cdn_path : window.location.origin + window.location.pathname.replace(/\/[\w\-]*\.\w*/gi, "/")
					},
					d = window.location.search,
					p = new URLSearchParams(d),
					h = window.localStorage,
					m = !1,
					v = !1,
					y = Date.now(),
					g = function(t, e) {
						var n = JSON.parse(h.getItem(t) || JSON.stringify("")),
							r = u(u({}, e), n);
						Object.assign(e, r)
					},
					b = function(t, e, n) {
						var r = u(u({}, e), t);
						Object.assign(e, r), h.setItem(n, JSON.stringify(e))
					},
					_ = function() {
						if (m) {
							for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
							(t = console).log.apply(t, ["%c" + (Date.now() - y), "color: red"].concat(n))
						}
					},
					w = function() {
						for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						v && alert(e.join(" ")), _.apply(void 0, e)
					},
					E = function() {
						if (m) return w.apply(void 0, arguments), new Promise((function(t) {
							return setTimeout(t, 500)
						}))
					},
					O = f() + "LS_URL_PARAMS",
					S = {
						current: [],
						old: ["abt-dl", "abt-adx", "abt-7a", "abt-ata"]
					},
					j = ["debug", "alert"].concat(function(t) {
						if (Array.isArray(t)) return a(t)
					}(s = S.current) || function(t) {
						if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
					}(s) || i(s) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()),
					A = {};
				! function() {
					var t;
					g(O, t = {}), A = u({}, t), window.location.pathname.includes("/category") && (p.has("cat") || p.set("cat", "More")), window.location.pathname.includes("/story") && (p.has("story") || p.set("story", "More"));
					for (var e, n = 0, r = Object.entries(A); n < r.length; n++) {
						var i = o(r[n], 2),
							a = i[0],
							c = i[1];
						p.has(a) || p.append(a, c)
					}
					S.current.forEach((function(t) {
						p.has(t) || p.set(t, Math.round(Math.random()))
					})), S.old.forEach((function(t) {
						p.has(t) && p.delete(t)
					})), j.forEach((function(t) {
						if (p.has(t)) {
							var e = p.get(t);
							"true" !== e && "false" !== e && "" !== e || (e = "true" === e);
							var n = Number.parseInt(e, 10);
							Number.isNaN(n) || (e = n),
								function() {
									b(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, A, O)
								}(l({}, t, e))
						}
					})), m = "true" === p.get("debug"), v = "true" === p.get("alert"), "true" === p.get("eruda") && ((e = document.createElement("script")).src = "//cdn.jsdelivr.net/npm/eruda", document.body.appendChild(e), e.onload = function() {
						eruda.init()
					})
				}()
			},
			3144: function(t, e, n) {
				"use strict";
				n.r(e), n.d(e, {
					environment: function() {
						return o
					}
				}), n(6699), n(2023);
				var r = n(5225),
					o = {
						production: !1,
						originPath: (0, r.z1)()
				o.production = !0
			},
			2076: function(t, e, n) {
				"use strict";
				n.r(e), n.d(e, {
					AR_RESPONSE_CODE: function() {
						return St
					},
					__T: function() {
						return ot
					},
					categoriesId: function() {
						return S
					},
					checkObjectEmpty: function() {
						return jt
					},
					country: function() {
						return xt
					},
					device: function() {
						return i
					},
					elHide: function() {
						return ht
					},
					elHideChildren: function() {
						return mt
					},
					elShow: function() {
						return pt
					},
					elShowing: function() {
						return vt
					},
					fetchActiveTour: function() {
						return R
					},
					fetchAddMissingCity: function() {
						return Ut
					},
					fetchAllProducts: function() {
						return Y
					},
					fetchAwait: function() {
						return Pt
					},
					fetchCountry: function() {
						return Vt
					},
					fetchIndexProducts: function() {
						return D
					},
					fetchLeaderBoard: function() {
						return N
					},
					fetchLeaderBoardTour: function() {
						return k
					},
					fetchProducts: function() {
						return C
					},
					fetch_All_Top10_NewGames_Products: function() {
						return U
					},
					getAndroidVersion: function() {
						return Dt
					},
					getChromeVersion: function() {
						return Ct
					},
					getCookie: function() {
						return Mt
					},
					getGameNameFromPId: function() {
						return A
					},
					getGameUrlFromPId: function() {
						return j
					},
					getOperaMiniVersion: function() {
						return Yt
					},
					getParamFromPId: function() {
						return T
					},
					getProductKeyFromPId: function() {
						return P
					},
					getSamsungBrowserVersion: function() {
						return bt
					},
					handleFetchError: function() {
						return At
					},
					isAndroid: function() {
						return Rt
					},
					isAndroidWebview: function() {
						return kt
					},
					isSafari: function() {
						return Nt
					},
					loadLS: function() {
						return h._u
					},
					loadOrderScript: function() {
						return ft
					},
					localStorage: function() {
						return h.Xb
					},
					localhost: function() {
						return o
					},
					ls_up: function() {
						return h.hv
					},
					moveX: function() {
						return yt
					},
					myAlert: function() {
						return h.xv
					},
					myAlertAsync: function() {
						return h.vw
					},
					myConsoleLog: function() {
						return h.Y8
					},
					originPath: function() {
						return h.z1
					},
					pIDToBanner: function() {
						return L
					},
					pIDToScreenShot: function() {
						return x
					},
					pIDToSplash: function() {
						return I
					},
					products: function() {
						return E
					},
					productsCat: function() {
						return O
					},
					redirect_to: function() {
						return _t
					},
					saveLS: function() {
						return h.YN
					},
					setCookie: function() {
						return Gt
					},
					showInstallPrompt: function() {
						return Bt
					},
					sideScroll: function() {
						return gt
					},
					stopPropagation: function() {
						return st
					},
					store: function() {
						return p
					},
					urlParams: function() {
						return h.B5
					},
					urlQueryString: function() {
						return h.tg
					},
					varToString: function() {
						return wt
					},
					webpReloadImage: function() {
						return dt
					}
				}), n(7147);
				var r, o = {
						is: (r = !1, "localhost" == window.location.hostname && (r = !0), r),
						apiUrl: "https://play.ludigames.com/full-portal/trunk/dist-lap/ludichallenge/action.php"
					},
					i = {
						isMobile: !1,
						isTablet: !1,
						isDesktop: !1,
						scale: ""
					},
					a = null;
				! function t() {
					null != a && a();
					var e = "(resolution: ".concat(window.devicePixelRatio, "dppx)"),
						n = matchMedia(e);
					n.addEventListener("change", t), a = function() {
						n.removeEventListener("change", t)
					};
					var r = +window.devicePixelRatio;
					console.log("devicePixelRatio: " + r), i.scale = "", r >= 1.5 && (i.scale = "x2")
				}();
				var c = window.innerWidth;

				function u(t) {
					return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, u(t)
				}

				function l(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(t);
						e && (r = r.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function s(t, e, n) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== u(t) || null === t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(t, "string");
								if ("object" !== u(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(t);
						return "symbol" === u(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				c >= 1280 ? i.isDesktop = !0 : c >= 834 ? i.isTablet = !0 : c >= 0 && (i.isMobile = !0), n(1539), n(4747), n(6649), n(6078), n(2526), n(1817), n(9653), n(9070), n(7941), n(7327), n(5003), n(9337), n(3321), n(2165), n(6992), n(8783), n(3948);
				var f = "js-store",
					d = function t(e) {
						p.stats[e.msg] ? p.stats[e.msg].count++ : p.stats[e.msg] = {
							count: 1
						}, (0, h.Y8)(f, t.name, "end:", e, p.stats[e.msg])
					},
					p = {
						ACTION_TYPE: {
							USER_logWillNotChange: "USER_logWillNotChange",
							USER_playGame_completion: "USER_playGame_completion",
							USER_playGame_start: "USER_playGame_start",
							USER_playGame_mainMenu: "USER_playGame_mainMenu",
							USER_playGame_startCompletion: "USER_playGame_startCompletion",
							USER_playAds_completion: "USER_playAds_completion",
							WINDOW_products: "WINDOW_products",
							INDEX_products_1: "INDEX_products_1",
							INDEX_products_2: "INDEX_products_2",
							CATEGORY_products_1: "CATEGORY_products_1",
							STORY_products_1: "STORY_products_1",
							All_products: "All_products",
							GPT_showAdForStory: "GPT_showAdForStory",
							GPT_onRewardedSlotClosed: "GPT_onRewardedSlotClosed",
							GPT_onRewardedSlotGranted: "GPT_onRewardedSlotGranted",
							GPT_Common_SendAdRequest_topAd: "GPT_Common_SendAdRequest_topAd",
							GPT_Common_SendAdRequest_stickyTopAd: "GPT_Common_SendAdRequest_stickyTopAd",
							USER_eventsChallengeFetched: "USER_eventsChallengeFetched",
							USER_leaderboardFetched: "USER_leaderboardFetched",
							USER_playGame_gameScore: "USER_playGame_gameScore",
							DELAY_LOADING_HIDDEN: "DELAY_LOADING_HIDDEN"
						},
						stats: {},
						subcribe: function(t, e) {
							if ((0, h.Y8)(f, p.subcribe.name, t), p[t] ? p[t].push(e) : p[t] = [d, e], p[t + "-relay"]) {
								var n = p[t + "-relay"],
									r = n.timeMs,
									o = n.params;
								Date.now() > r && e(o)
							}
						},
						dispatch: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
								relay: !1,
								delay: 0
							};
							(0, h.Y8)(f, p.dispatch.name, t, e);
							var n = e.relay,
								r = e.delay;
							if (setTimeout((function() {
									p[t] && (e.msg = t, p[t].forEach((function(t) {
										t(e)
									})))
								}), r), n) {
								var o = p[t + "-relay"] = {};
								o.timeMs = Date.now(), o.params = function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {};
										e % 2 ? l(Object(n), !0).forEach((function(e) {
											s(t, e, n[e])
										})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
											Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
										}))
									}
									return t
								}({}, e)
							}
						}
					},
					h = n(5225);

				function m(t) {
					return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, m(t)
				}

				function v(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
					return r
				}

				function y(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(t);
						e && (r = r.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function g(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? y(Object(n), !0).forEach((function(e) {
							b(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}

				function b(t, e, n) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== m(t) || null === t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(t, "string");
								if ("object" !== m(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(t);
						return "symbol" === m(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				n(1058), n(1637), n(1249), n(9714), n(1038), n(9720), n(2479), n(2222), n(7042), n(4916), n(7601);
				var _ = n(3144).environment,
					w = "products";
				window.userInfo = null;
				var E = {},
					O = {},
					S = {
						html5_ads_featured: 18571,
						html5_ads_new_games: 18854,
						html5_ads_most_popular: 18852,
						html5_ads_special: 19023,
						html5_ads_sport: 18563,
						html5_ads_action: 18547,
						html5_ads_racing: 18557,
						html5_ads_adventure: 18551,
						html5_ads_logic: 18549,
						html5_ads_all: 18575,
						html5_ads_for_girls: 18567,
						html5_ads_casino: 21317,
						html5_ads_you_may_like: 21889,
						html5_ads_kids_top: 21905,
						html5_ads_subway_surfers: 21907,
						html5_ads_cartoon_networks: 21909,
						html5_ads_kids_all: 21911,
						html5_ads_season_games: 21918
					},
					j = function(t) {
						var e = "";
						return E.every((function(n) {
							var r = n.product_id;
							return parseInt(r) != t || (e = "https://cdn.ludigames.com/h5/" + n.product_key + "/", !1)
						})), e
					},
					A = function(t) {
						var e = "";
						return E.every((function(n) {
							var r = n.product_id;
							return parseInt(r) != t || (e = n.name, !1)
						})), e
					},
					P = function(t) {
						var e = "";
						return E.every((function(n) {
							var r = n.product_id;
							return parseInt(r) != t || (e = n.product_key, !1)
						})), e
					},
					T = function(t) {
						var e = "";
						return E.every((function(n) {
							var r = n.product_id,
								o = n.param;
							return parseInt(r) != t || (e = o, !1)
						})), e
					},
					L = function(t, e, n) {
						return "//cdn.ludigames.com/products/" + t + "/default/html5/" + e + "/" + n + "/banner" + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "") + ".jpg"
					},
					I = function(t) {
						return "//cdn.ludigames.com/products/" + t + "/default/html5/screenshots/240/splash" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + ".jpg"
					},
					x = function(t, e) {
						return "//cdn.ludigames.com/products/" + t + "/default/html5/screenshots/" + e + "/" + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + ".jpg"
					},
					R = function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
								tour_id: tour_id
							},
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							r = _.originPath + "ludichallenge/action.php",
							o = {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: new URLSearchParams(e)
							};
						Pt(r + "?action=get_active_tour&debug=true", (function(e) {
							(0, h.Y8)(w, t.name, e), n && n(e)
						}), o)
					},
					N = function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
								lb_id: lb_id
							},
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							r = _.originPath + "ludichallenge/action.php",
							o = {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: new URLSearchParams(e)
							};
						Pt(r + "?action=get_leaderboard&debug=true", (function(e) {
							(0, h.Y8)(w, t.name, e), n && n(e)
						}), o)
					},
					k = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
								tour_id: tour_id
							},
							e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							n = (0, h.z1)() + "ludichallenge/action.php";
						o.is && (n = o.apiUrl);
						var r = {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							},
							body: new URLSearchParams(t)
						};
						Pt(n + "?action=get_leaderboard_tour&debug=true", (function(t) {
							(0, h.Y8)(w, N.name, t), e && e(t)
						}), r)
					},
					C = function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						(0, h.Y8)(w, t.name, e);
						var r = "https://play.ludigames.com/ludiapi/gamelist.php",
							o = new URLSearchParams(e),
							i = o.get("category_txt"),
							a = o.get("cat_id");
						if (i) {
							var c = i.split(",").map((function(t) {
								return S[t]
							}));
							o.set("cat_id", c.toString()), o.delete("category_txt")
						} else o.set("cat_id", a);
						o.set("orderByRank", "");
						var u = Array.from(o).length;
						Pt(r + (u > 0 ? "?" + o.toString() : ""), (function(t) {
							O = g(g({}, O), t);
							for (var e = 0, r = Object.entries(O); e < r.length; e++) {
								var o = (c = r[e], u = 2, function(t) {
										if (Array.isArray(t)) return t
									}(c) || function(t, e) {
										var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
										if (null != n) {
											var r, o, i, a, c = [],
												u = !0,
												l = !1;
											try {
												if (i = (n = n.call(t)).next, 0 === e) {
													if (Object(n) !== n) return;
													u = !1
												} else
													for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
											} catch (t) {
												l = !0, o = t
											} finally {
												try {
													if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
												} finally {
													if (l) throw o
												}
											}
											return c
										}
									}(c, u) || function(t, e) {
										if (t) {
											if ("string" == typeof t) return v(t, e);
											var n = Object.prototype.toString.call(t).slice(8, -1);
											return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0
										}
									}(c, u) || function() {
										throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
									}()),
									i = o[0],
									a = o[1];
								Array.isArray(O[i]) || (O[i] = Object.values(a))
							}
							var c, u;
							t[S.html5_ads_all] && (E = t[S.html5_ads_all]), n && n(t)
						}), {
							method: "GET",
							headers: {}
						})
					},
					D = function() {
						C({
							cat_id: "".concat(S.html5_ads_all, ",").concat(S.html5_ads_featured)
						}, (function(t) {
							(0, h.Y8)(w, Y.name, t), p.dispatch(p.ACTION_TYPE.INDEX_products_1, {
								relay: !0
							}), C({
								cat_id: "".concat(S.html5_ads_for_girls, ",").concat(S.html5_ads_action, ",").concat(S.html5_ads_adventure, ",").concat(S.html5_ads_logic, ",").concat(S.html5_ads_cartoon_networks, ",").concat(S.html5_ads_new_games, ",").concat(S.html5_ads_special, ",").concat(S.html5_ads_racing, ",").concat(S.html5_ads_sport, ",").concat(S.html5_ads_subway_surfers, ",").concat(S.html5_ads_most_popular, ",").concat(S.html5_ads_season_games)
							}, (function(t) {
								(0, h.Y8)(w, Y.name, t), p.dispatch(p.ACTION_TYPE.INDEX_products_2, {
									relay: !0
								})
							}))
						}))
					},
					Y = function t() {
						C({
							cat_id: "".concat(S.html5_ads_all)
						}, (function(e) {
							(0, h.Y8)(w, t.name, e), p.dispatch(p.ACTION_TYPE.All_products, {
								relay: !0
							})
						}))
					},
					U = function t() {
						C({
							cat_id: "".concat(S.html5_ads_all, ",").concat(S.html5_ads_featured, ",").concat(S.html5_ads_new_games)
						}, (function(e) {
							(0, h.Y8)(w, t.name, e), p.dispatch(p.ACTION_TYPE.INDEX_products_1, {
								relay: !0
							})
						}))
					},
					G = (n(2772), n(9826), n(5306), n(5827), n(4603), n(8386), n(8862), n(8674), n(2443), n(3680), n(3706), n(2703), n(489), n(8304), ["en", "bg", "cs", "de", "el", "es", "fr", "hu", "it", "pl", "pt", "ro", "sk", "uk", "sr", "tr"]);

				function M(t) {
					return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, M(t)
				}

				function F(t, e) {
					var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (!n) {
						if (Array.isArray(t) || (n = function(t, e) {
								if (t) {
									if ("string" == typeof t) return B(t, e);
									var n = Object.prototype.toString.call(t).slice(8, -1);
									return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? B(t, e) : void 0
								}
							}(t)) || e && t && "number" == typeof t.length) {
							n && (t = n);
							var r = 0,
								o = function() {};
							return {
								s: o,
								n: function() {
									return r >= t.length ? {
										done: !0
									} : {
										done: !1,
										value: t[r++]
									}
								},
								e: function(t) {
									throw t
								},
								f: o
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, a = !0,
						c = !1;
					return {
						s: function() {
							n = n.call(t)
						},
						n: function() {
							var t = n.next();
							return a = t.done, t
						},
						e: function(t) {
							c = !0, i = t
						},
						f: function() {
							try {
								a || null == n.return || n.return()
							} finally {
								if (c) throw i
							}
						}
					}
				}

				function B(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
					return r
				}

				function V(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(t);
						e && (r = r.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function W(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? V(Object(n), !0).forEach((function(e) {
							H(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}

				function H(t, e, n) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== M(t) || null === t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(t, "string");
								if ("object" !== M(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(t);
						return "symbol" === M(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}

				function X() {
					X = function() {
						return t
					};
					var t = {},
						e = Object.prototype,
						n = e.hasOwnProperty,
						r = Object.defineProperty || function(t, e, n) {
							t[e] = n.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag";

					function u(t, e, n) {
						return Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, n) {
							return t[e] = n
						}
					}

					function l(t, e, n, o) {
						var i = e && e.prototype instanceof d ? e : d,
							a = Object.create(i.prototype),
							c = new j(o || []);
						return r(a, "_invoke", {
							value: w(t, n, c)
						}), a
					}

					function s(t, e, n) {
						try {
							return {
								type: "normal",
								arg: t.call(e, n)
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t
							}
						}
					}
					t.wrap = l;
					var f = {};

					function d() {}

					function p() {}

					function h() {}
					var m = {};
					u(m, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(A([])));
					y && y !== e && n.call(y, i) && (m = y);
					var g = h.prototype = d.prototype = Object.create(m);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function _(t, e) {
						function o(r, i, a, c) {
							var u = s(t[r], t, i);
							if ("throw" !== u.type) {
								var l = u.arg,
									f = l.value;
								return f && "object" == M(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									l.value = t, a(l)
								}), (function(t) {
									return o("throw", t, a, c)
								}))
							}
							c(u.arg)
						}
						var i;
						r(this, "_invoke", {
							value: function(t, n) {
								function r() {
									return new e((function(e, r) {
										o(t, n, e, r)
									}))
								}
								return i = i ? i.then(r, r) : r()
							}
						})
					}

					function w(t, e, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return {
									value: void 0,
									done: !0
								}
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = E(a, n);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var u = s(t, e, n);
								if ("normal" === u.type) {
									if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: n.done
									}
								}
								"throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
							}
						}
					}

					function E(t, e) {
						var n = e.method,
							r = t.iterator[n];
						if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
						var o = s(r, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function O(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function S(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function j(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(O, this), this.reset(!0)
					}

					function A(t) {
						if (t) {
							var e = t[i];
							if (e) return e.call(t);
							if ("function" == typeof t.next) return t;
							if (!isNaN(t.length)) {
								var r = -1,
									o = function e() {
										for (; ++r < t.length;)
											if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
										return e.value = void 0, e.done = !0, e
									};
								return o.next = o
							}
						}
						return {
							next: P
						}
					}

					function P() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, r(g, "constructor", {
						value: h,
						configurable: !0
					}), r(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = u(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(_.prototype), u(_.prototype, a, (function() {
						return this
					})), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new _(l(e, n, r, o), i);
						return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
						return "[object Generator]"
					})), t.keys = function(t) {
						var e = Object(t),
							n = [];
						for (var r in e) n.push(r);
						return n.reverse(),
							function t() {
								for (; n.length;) {
									var r = n.pop();
									if (r in e) return t.value = r, t.done = !1, t
								}
								return t.done = !0, t
							}
					}, t.values = A, j.prototype = {
						constructor: j,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
								for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
						},
						stop: function() {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function(t) {
							if (this.done) throw t;
							var e = this;

							function r(n, r) {
								return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										u = n.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										S(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, n) {
							return this.delegate = {
								iterator: A(t),
								resultName: e,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function Q(t, e, n, r, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void n(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(r, o)
				}

				function q(t) {
					return function() {
						var e = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = t.apply(e, n);

							function a(t) {
								Q(i, r, o, a, c, "next", t)
							}

							function c(t) {
								Q(i, r, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}
				var J, K = "i18n",
					z = {},
					$ = function() {
						var t = q(X().mark((function t(e) {
							var n;
							return X().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if ((0, h.Y8)(K, $.name, e), e !== J) {
											t.next = 3;
											break
										}
										return t.abrupt("return");
									case 3:
										return J = e, t.next = 6, Z(e);
									case 6:
										n = t.sent, z = n, et();
									case 9:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function(e) {
							return t.apply(this, arguments)
						}
					}();

				function Z(t) {
					return tt.apply(this, arguments)
				}

				function tt() {
					return (tt = q(X().mark((function t(e) {
						return X().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.abrupt("return", n(9379)("./".concat(J, ".json")));
								case 1:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function et() {
					(0, h.Y8)(K, et.name), document.querySelectorAll("[data-i18n-key]").forEach(nt)
				}

				function nt(t) {
					var e = t.getAttribute("data-i18n-key"),
						n = t.getAttribute("data-i18n-option");
					ot(e, W(W({}, JSON.parse(n)), {}, {
						element: t
					}))
				}

				function rt(t) {
					return G.indexOf(t) > -1
				}
				var ot = function() {
					var t = q(X().mark((function t(e) {
						var n, r, o, i, a, c, u, l, s, f = arguments;
						return X().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return n = f.length > 1 && void 0 !== f[1] ? f[1] : {
										subIdArr: null,
										interpolations: null,
										element: null
									}, t.next = 3, Z(J);
								case 3:
									if (r = "", z[e]) {
										t.next = 7;
										break
									}
									return (0, h.Y8)(K, ot.name, e, z[e]), t.abrupt("return");
								case 7:
									if (r = z[e], !(o = n.subIdArr)) {
										t.next = 30;
										break
									}
									i = F(o), t.prev = 11, i.s();
								case 13:
									if ((a = i.n()).done) {
										t.next = 22;
										break
									}
									return c = a.value, u = "", t.next = 18, ot(c);
								case 18:
									u = t.sent, r = r.replace(c, u);
								case 20:
									t.next = 13;
									break;
								case 22:
									t.next = 27;
									break;
								case 24:
									t.prev = 24, t.t0 = t.catch(11), i.e(t.t0);
								case 27:
									return t.prev = 27, i.f(), t.finish(27);
								case 30:
									return (l = n.interpolations) && (r = Object.keys(l).reduce((function(t, e) {
										return t.replace(new RegExp("{s*".concat(e, "s*}"), "g"), l[e])
									}), r)), (s = n.element) && (s.innerHTML = r, s.setAttribute("data-i18n-key", e), s.setAttribute("data-i18n-option", JSON.stringify(W(W({}, n), {}, {
										element: null
									})))), t.abrupt("return", r);
								case 35:
								case "end":
									return t.stop()
							}
						}), t, null, [
							[11, 24, 27, 30]
						])
					})));
					return function(e) {
						return t.apply(this, arguments)
					}
				}();

				function it(t) {
					return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, it(t)
				}

				function at() {
					at = function() {
						return t
					};
					var t = {},
						e = Object.prototype,
						n = e.hasOwnProperty,
						r = Object.defineProperty || function(t, e, n) {
							t[e] = n.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag";

					function u(t, e, n) {
						return Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, n) {
							return t[e] = n
						}
					}

					function l(t, e, n, o) {
						var i = e && e.prototype instanceof d ? e : d,
							a = Object.create(i.prototype),
							c = new j(o || []);
						return r(a, "_invoke", {
							value: w(t, n, c)
						}), a
					}

					function s(t, e, n) {
						try {
							return {
								type: "normal",
								arg: t.call(e, n)
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t
							}
						}
					}
					t.wrap = l;
					var f = {};

					function d() {}

					function p() {}

					function h() {}
					var m = {};
					u(m, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(A([])));
					y && y !== e && n.call(y, i) && (m = y);
					var g = h.prototype = d.prototype = Object.create(m);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function _(t, e) {
						function o(r, i, a, c) {
							var u = s(t[r], t, i);
							if ("throw" !== u.type) {
								var l = u.arg,
									f = l.value;
								return f && "object" == it(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									l.value = t, a(l)
								}), (function(t) {
									return o("throw", t, a, c)
								}))
							}
							c(u.arg)
						}
						var i;
						r(this, "_invoke", {
							value: function(t, n) {
								function r() {
									return new e((function(e, r) {
										o(t, n, e, r)
									}))
								}
								return i = i ? i.then(r, r) : r()
							}
						})
					}

					function w(t, e, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return {
									value: void 0,
									done: !0
								}
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = E(a, n);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var u = s(t, e, n);
								if ("normal" === u.type) {
									if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: n.done
									}
								}
								"throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
							}
						}
					}

					function E(t, e) {
						var n = e.method,
							r = t.iterator[n];
						if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
						var o = s(r, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function O(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function S(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function j(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(O, this), this.reset(!0)
					}

					function A(t) {
						if (t) {
							var e = t[i];
							if (e) return e.call(t);
							if ("function" == typeof t.next) return t;
							if (!isNaN(t.length)) {
								var r = -1,
									o = function e() {
										for (; ++r < t.length;)
											if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
										return e.value = void 0, e.done = !0, e
									};
								return o.next = o
							}
						}
						return {
							next: P
						}
					}

					function P() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, r(g, "constructor", {
						value: h,
						configurable: !0
					}), r(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = u(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(_.prototype), u(_.prototype, a, (function() {
						return this
					})), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new _(l(e, n, r, o), i);
						return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
						return "[object Generator]"
					})), t.keys = function(t) {
						var e = Object(t),
							n = [];
						for (var r in e) n.push(r);
						return n.reverse(),
							function t() {
								for (; n.length;) {
									var r = n.pop();
									if (r in e) return t.value = r, t.done = !1, t
								}
								return t.done = !0, t
							}
					}, t.values = A, j.prototype = {
						constructor: j,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
								for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
						},
						stop: function() {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function(t) {
							if (this.done) throw t;
							var e = this;

							function r(n, r) {
								return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										u = n.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										S(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, n) {
							return this.delegate = {
								iterator: A(t),
								resultName: e,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function ct(t, e, n, r, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void n(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(r, o)
				}

				function ut(t) {
					return function() {
						var e = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = t.apply(e, n);

							function a(t) {
								ct(i, r, o, a, c, "next", t)
							}

							function c(t) {
								ct(i, r, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}! function t() {
					(0, h.Y8)(K, t.name);
					var e, n = (e = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return navigator.languages.map((function(e) {
							return t ? e.split("-")[0] : e
						}))
					}(!0), e.find(rt) || "en");
					$(n)
				}(), window.__setLocate = function(t) {
					$(t)
				}, n(6699), n(2023), n(4723), n(4678), n(3371), window.enableADS = !1;
				var lt = "js-common",
					st = function t(e) {
						(0, h.Y8)(lt, t.name), e.stopPropagation()
					},
					ft = function(t, e, n) {
						var r = document.createElement("script");
						r.setAttribute("src", t), r.onload = function() {
							if (void 0 !== e) {
								var t = document.createElement("script");
								t.setAttribute("src", e), t.onload = function() {
									if (void 0 !== n) {
										var t = document.createElement("script");
										t.setAttribute("src", n), document.body.appendChild(t)
									}
								}, document.body.appendChild(t)
							}
						}, document.body.appendChild(r)
					},
					dt = function(t) {
						t.src = t.dataset.src.replace(/.jppg/gi, ".jpg").replace(/.pnng/gi, ".png"), t.removeEventListener("error", (function() {}))
					},
					pt = function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
						t.style.display = e
					},
					ht = function(t) {
						t.style.display = "none"
					},
					mt = function(t) {
						for (var e = 0; e < t.children.length; e++) t.children.item(e).style.display = "none"
					},
					vt = function(t) {
						return "none" !== t.style.display
					},
					yt = function(t) {
						var e, n, r = t,
							o = !1;
						r.addEventListener("mousedown", (function(t) {
							o = !0, e = t.pageX - r.offsetLeft, n = r.scrollLeft
						})), r.addEventListener("mouseleave", (function() {
							o = !1
						})), r.addEventListener("mouseup", (function() {
							o = !1
						})), r.addEventListener("mousemove", (function(t) {
							if (o) {
								t.preventDefault();
								var i = 2 * (t.pageX - r.offsetLeft - e);
								r.scrollLeft = n - i
							}
						}))
					},
					gt = function(t, e, n) {
						"left" == e ? t.scrollBy({
							top: 0,
							left: -n,
							behavior: "smooth"
						}) : t.scrollBy({
							top: 0,
							left: +n,
							behavior: "smooth"
						})
					},
					bt = function() {
						(0, h.Y8)("getSamsungBrowserVersion: " + navigator.userAgent);
						var t = -1,
							e = navigator.userAgent.match(/SamsungBrowser\/(...)/i);
						return e && e.length > 1 && (t = parseInt(e[1])), h.B5.has("sbv") && (t = h.B5.get("sbv")), (0, h.Y8)("getSamsungBrowserVersion: " + t), t
					},
					_t = function() {
						var t = ut(at().mark((function t(e) {
							var n, r = arguments;
							return at().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return n = r.length > 1 && void 0 !== r[1] ? r[1] : {
											target: ""
										}, t.next = 3, (0, h.vw)("redirect_to ", e);
									case 3:
										"_blank" === n.target.toLowerCase() ? window.open(e, n.target) : window.location.href = e;
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function(e) {
							return t.apply(this, arguments)
						}
					}(),
					wt = function(t) {
						return Object.keys(t)[0]
					},
					Et = 1,
					Ot = 1001,
					St = Object.freeze({
						SUCCESSFUL: Et++,
						EMAIL_REQUIRED: Et++,
						EMAIL_INVALID_FORMAT: Et++,
						DATA_BASE_ERROR: Et++,
						USER_EXITS: Et++,
						USER_NOT_FOUND: Et++,
						PASS_INCORRECT: Et++,
						TOKEN_REQUIRED: Et++,
						TOKEN_INVALID: Et++,
						TOKEN_FAKE: Et++,
						USER_ID_REQUIRED: Et++,
						THIRD_PARTY_REGISTRATION: Et++,
						LOGIN_REQUIRED: Et++,
						GAME_ID_REQUIRED: Et++,
						PARAM_TYPE_INCORRECT: Et++,
						USER_NOT_RECOGNIZED: Et++,
						MISSING_PARAM: Et++,
						ITEM_NOT_AVAILABLE: Et++,
						ITEM_ALREADY_PURCHASED: Et++,
						NOT_ENOUGH_COIN: Et++,
						PASS_REQUIRED: Et++,
						PASS_INVALID_FORMAT: Et++,
						YEAR_OF_BIRTH_REQUIRED: Et++,
						AGE_RESTRICTION: Et++,
						BAD_WORD: Et++,
						ITEM_ALREADY_CLAIMED: Et++,
						ITEM_INPROGRESS: Et++,
						TOUR_NOT_EXITS: Ot++,
						TOUR_NOT_ACTIVE: Ot++,
						TOUR_ENDED: Ot++,
						KEY_NOT_MATCH: Ot++,
						EVENT_NOT_START: Ot++,
						EVENT_ENDED_NO_NEW_EVENT: Ot++,
						EVENT_ENDED_HAVE_NEW_EVENT: Ot++,
						NOT_HIGH_SCORE: Ot++,
						IMAGE_SIZE_OVER_LIMIT: Ot++,
						SCORE_NOT_VALID: Ot++
					}),
					jt = function(t) {
						return t && 0 === Object.keys(t).length && Object.getPrototypeOf(t) === Object.prototype
					},
					At = function(t) {
						return console.warn(t), new Response(JSON.stringify({
							code: 400,
							message: t.message,
							error: 400
						}))
					},
					Pt = function() {
						var t = ut(at().mark((function t() {
							var e, n, r, o, i, a = arguments;
							return at().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return e = a.length > 0 && void 0 !== a[0] ? a[0] : "abc.com/api.php?debug=true", n = a.length > 1 && void 0 !== a[1] ? a[1] : null, r = a.length > 2 && void 0 !== a[2] ? a[2] : {
											method: "POST",
											headers: {},
											body: ""
										}, t.next = 5, fetch(e, r).catch(At);
									case 5:
										if (!(o = t.sent).ok) {
											t.next = 14;
											break
										}
										return t.next = 9, o.json();
									case 9:
										return i = t.sent, null != n && n(i), t.abrupt("return", i);
									case 14:
										At("!res.ok");
									case 15:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function() {
							return t.apply(this, arguments)
						}
					}();

				function Tt(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
					return r
				}
				window.addEventListener("message", (function t(e) {
					var n = e.data.action;
					"ga-action-Main-Menu" == n && ((0, h.Y8)(lt, t.name, e), p.dispatch(p.ACTION_TYPE.USER_playGame_mainMenu)), "ga-action-Start" == n && ((0, h.Y8)(lt, t.name, e), p.dispatch(p.ACTION_TYPE.USER_playGame_start)), "as-action-Completion" == n && ((0, h.Y8)(lt, t.name, e), p.dispatch(p.ACTION_TYPE.USER_playGame_completion, e.data)), "ad-action-Completion" == n && ((0, h.Y8)(lt, t.name, e), p.dispatch(p.ACTION_TYPE.USER_playAds_completion, e.data))
				}), !1), window.onpageshow = function(t) {
					t.persisted && ((0, h.xv)(lt, "onpageshow"), window.location.reload())
				}, h.B5.has("iw") && (0, h.xv)("innerWidth: " + window.innerWidth), h.B5.has("ih") && (0, h.xv)("innerHeight: " + window.innerHeight), (0, h.Y8)(lt, "loaded");
				var Lt = n(3144).environment,
					It = "js-browser",
					xt = {
						iso2: "",
						region: ""
					},
					Rt = function() {
						return navigator.userAgent.toLowerCase().includes("android")
					},
					Nt = function() {
						var t = window.navigator.userAgent.toLowerCase();
						return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
					},
					kt = function() {
						var t = !1,
							e = navigator.userAgent.toLowerCase();
						return Rt() && (t = e.includes("version/4.0") || e.includes("wv)")), (0, h.Y8)("isAndroidWebview: " + t), t
					},
					Ct = function() {
						var t = -1,
							e = navigator.userAgent.match(/Chrome\/(..)/i);
						return e && e.length > 1 && (t = parseInt(e[1])), h.B5.has("cv") && (t = h.B5.get("cv")), (0, h.Y8)("getChromeVersion: " + t), t
					},
					Dt = function() {
						var t = -1,
							e = navigator.userAgent.match(/Android (.*);/i);
						return e && e.length > 1 && (t = parseFloat(e[1])), h.B5.has("av") && (t = h.B5.get("av")), (0, h.Y8)("getAndroidVersion: " + t), t
					},
					Yt = function() {
						var t = -1,
							e = navigator.userAgent.match(/Opera Mini\/(..)/i);
						return e && e.length > 1 && (t = parseInt(e[1])), h.B5.has("omv") && (t = h.B5.get("omv")), (0, h.Y8)("getOperaMiniVersion: " + t), t
					},
					Ut = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
								city: city
							},
							e = Lt.originPath + "action.php",
							n = {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: new URLSearchParams(t)
							};
						fetch(e + "?action=add_missing_city&debug=true", n)
					},
					Gt = function t(e, n, r, o) {
						var i = new Date;
						i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3);
						var a = e + "=" + n + ";expires=" + i.toUTCString() + ";path=/;" + (o ? "domain=" + o : "");
						(0, h.Y8)(It, t.name, a), document.cookie = a
					},
					Mt = function(t) {
						for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
							for (var o = n[r];
								" " == o.charAt(0);) o = o.substring(1);
							if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
						}
						return ""
					},
					Ft = null,
					Bt = function() {
						Ft.prompt(), Ft.userChoice.then((function(t) {
							"accepted" === t.outcome ? (0, h.Y8)("User accepted the A2HS prompt") : (0, h.Y8)("User dismissed the A2HS prompt"), Ft = null
						}))
					},
					Vt = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							n = Lt.originPath + "action.php",
							r = {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: new URLSearchParams(t)
							};
						Pt(n + "?action=geo&debug=true", (function(t) {
							e && e(t)
						}), r)
					};
				! function t() {
					(0, h.Y8)(It, t.name), "serviceWorker" in navigator && window.addEventListener("load", (function() {
						navigator.serviceWorker.getRegistrations().then((function(t) {
							var e, n = function(t, e) {
								var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
								if (!n) {
									if (Array.isArray(t) || (n = function(t, e) {
											if (t) {
												if ("string" == typeof t) return Tt(t, e);
												var n = Object.prototype.toString.call(t).slice(8, -1);
												return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tt(t, e) : void 0
											}
										}(t)) || e && t && "number" == typeof t.length) {
										n && (t = n);
										var r = 0,
											o = function() {};
										return {
											s: o,
											n: function() {
												return r >= t.length ? {
													done: !0
												} : {
													done: !1,
													value: t[r++]
												}
											},
											e: function(t) {
												throw t
											},
											f: o
										}
									}
									throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}
								var i, a = !0,
									c = !1;
								return {
									s: function() {
										n = n.call(t)
									},
									n: function() {
										var t = n.next();
										return a = t.done, t
									},
									e: function(t) {
										c = !0, i = t
									},
									f: function() {
										try {
											a || null == n.return || n.return()
										} finally {
											if (c) throw i
										}
									}
								}
							}(t);
							try {
								for (n.s(); !(e = n.n()).done;) {
									var r = e.value;
									(0, h.Y8)("registration:", r)
								}
							} catch (t) {
								n.e(t)
							} finally {
								n.f()
							}
						})), navigator.serviceWorker.register("service-worker.js").then((function(t) {
							(0, h.Y8)("SW registered: ", t)
						})).catch((function(t) {
							(0, h.Y8)("SW registration failed: ", t)
						}))
					})), window.addEventListener("beforeinstallprompt", (function(t) {
						(0, h.Y8)("beforeinstallprompt"), t.preventDefault(), Ft = t
					})), new PerformanceObserver((function(t) {
						t.getEntries().forEach((function(t) {
							var e = t.unloadEventEnd - t.unloadEventStart;
							e > 0 && (0, h.Y8)("".concat(t.name, ": unload event handler time: ").concat(e, "ms"));
							var n = t.loadEventEnd - t.loadEventStart;
							n > 0 && (0, h.Y8)("".concat(t.name, ": load event handler time: ").concat(n, "ms"));
							var r = t.domContentLoadedEventEnd - t.domContentLoadedEventStart;
							r > 0 && ((0, h.Y8)("".concat(t.name, ": domContentLoadedEventStart:"), t.domContentLoadedEventStart, "domComplete:", t.domComplete), (0, h.Y8)("".concat(t.name, ": DOMContentLoaded processing time: ").concat(r, "ms")))
						}))
					})).observe({
						type: "navigation",
						buffered: !0
					})
				}(), (0, h.Y8)(It, "loaded", xt), window.sIP = function() {
					Bt()
				}, n(2702).polyfill(), n(232)
			},
			9379: function(t, e, n) {
				var r = {
					"./bg.json": [6918, 249],
					"./cs.json": [7325, 325],
					"./de.json": [9061, 61],
					"./el.json": [6756, 756],
					"./en.json": [5281, 281],
					"./en_test.json": [7306, 306],
					"./es.json": [9019, 19],
					"./fr.json": [2113, 113],
					"./fr_test.json": [6138, 138],
					"./hu.json": [7092, 92],
					"./it.json": [2537, 537],
					"./pl.json": [9746, 746],
					"./pt.json": [9238, 36],
					"./ro.json": [627, 627],
					"./sk.json": [631, 631],
					"./sr.json": [1466, 466],
					"./tr.json": [7391, 391],
					"./uk.json": [4448, 256]
				};

				function o(t) {
					if (!n.o(r, t)) return Promise.resolve().then((function() {
						var e = new Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}));
					var e = r[t],
						o = e[0];
					return n.e(e[1]).then((function() {
						return n.t(o, 19)
					}))
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.id = 9379, t.exports = o
			}
		},
		a = {};

	function c(t) {
		var e = a[t];
		if (void 0 !== e) return e.exports;
		var n = a[t] = {
			exports: {}
		};
		return i[t].call(n.exports, n, n.exports, c), n.exports
	}
	c.m = i, t = [], c.O = function(e, n, r, o) {
			if (!n) {
				var i = 1 / 0;
				for (s = 0; s < t.length; s++) {
					n = t[s][0], r = t[s][1], o = t[s][2];
					for (var a = !0, u = 0; u < n.length; u++)(!1 & o || i >= o) && Object.keys(c.O).every((function(t) {
						return c.O[t](n[u])
					})) ? n.splice(u--, 1) : (a = !1, o < i && (i = o));
					if (a) {
						t.splice(s--, 1);
						var l = r();
						void 0 !== l && (e = l)
					}
				}
				return e
			}
			o = o || 0;
			for (var s = t.length; s > 0 && t[s - 1][2] > o; s--) t[s] = t[s - 1];
			t[s] = [n, r, o]
		}, c.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return c.d(e, {
				a: e
			}), e
		}, n = Object.getPrototypeOf ? function(t) {
			return Object.getPrototypeOf(t)
		} : function(t) {
			return t.__proto__
		}, c.t = function(t, r) {
			if (1 & r && (t = this(t)), 8 & r) return t;
			if ("object" == typeof t && t) {
				if (4 & r && t.__esModule) return t;
				if (16 & r && "function" == typeof t.then) return t
			}
			var o = Object.create(null);
			c.r(o);
			var i = {};
			e = e || [null, n({}), n([]), n(n)];
			for (var a = 2 & r && t;
				"object" == typeof a && !~e.indexOf(a); a = n(a)) Object.getOwnPropertyNames(a).forEach((function(e) {
				i[e] = function() {
					return t[e]
				}
			}));
			return i.default = function() {
				return t
			}, c.d(o, i), o
		}, c.d = function(t, e) {
			for (var n in e) c.o(e, n) && !c.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}, c.f = {}, c.e = function(t) {
			return Promise.all(Object.keys(c.f).reduce((function(e, n) {
				return c.f[n](t, e), e
			}), []))
		}, c.u = function(t) {
			return "static/js/" + t + "." + {
				19: "b465723735b04d54e41a",
				36: "e59d3b0903231e9bb962",
				61: "4d65fecc1dd7d03ae8b6",
				92: "7919914951bc3c06b7e0",
				113: "762025aa5faa060d6830",
				138: "65fb2071836435ab1cb0",
				249: "a2e62f4bc96feaa41aff",
				256: "2c84a1a978ad5a845642",
				281: "ec695c561eda8c3aeb06",
				306: "6443b21589a0b38a0a55",
				325: "5c4c3db89fb60f60c244",
				391: "631a4a1922bba2f78aa5",
				466: "8cbdf26cd41baa6d63d0",
				537: "4c2530843646c899756a",
				627: "574c7397f1f0deff4767",
				631: "7c1bb18947c131c7a7da",
				746: "5872b05d7aef438e665d",
				756: "53ecbeb73979c7bbe8f3"
			}[t] + ".js"
		}, c.miniCssF = function(t) {
			return {
				34: "category",
				180: "story",
				372: "challenges",
				376: "kids",
				464: "search",
				723: "reward",
				757: "game",
				826: "index",
				996: "info"
			}[t] + "." + {
				34: "1f522d1fdd6efd8dd2d0",
				180: "22ab459b42fd02bf5069",
				372: "a4831e10be38982e8842",
				376: "0906ab9800d3c7b57115",
				464: "5ce1250ec2ec7719b526",
				723: "ae1e4aea5cc47e7f77e3",
				757: "e04a3b211f68c701c583",
				826: "faa1798083c329617e73",
				996: "d68c60d2506a3081024d"
			}[t] + ".css"
		}, c.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}(), c.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r = {}, o = "as-d:", c.l = function(t, e, n, i) {
			if (r[t]) r[t].push(e);
			else {
				var a, u;
				if (void 0 !== n)
					for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
						var f = l[s];
						if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == o + n) {
							a = f;
							break
						}
					}
				a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, c.nc && a.setAttribute("nonce", c.nc), a.setAttribute("data-webpack", o + n), a.src = t), r[t] = [e];
				var d = function(e, n) {
						a.onerror = a.onload = null, clearTimeout(p);
						var o = r[t];
						if (delete r[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((function(t) {
								return t(n)
							})), e) return e(n)
					},
					p = setTimeout(d.bind(null, void 0, {
						type: "timeout",
						target: a
					}), 12e4);
				a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), u && document.head.appendChild(a)
			}
		}, c.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, c.p = "https://cdn.ludigames.com/ludigames/full-portal/",
		function() {
			var t = {
				291: 0
			};
			c.f.j = function(e, n) {
				var r = c.o(t, e) ? t[e] : void 0;
				if (0 !== r)
					if (r) n.push(r[2]);
					else {
						var o = new Promise((function(n, o) {
							r = t[e] = [n, o]
						}));
						n.push(r[2] = o);
						var i = c.p + c.u(e),
							a = new Error;
						c.l(i, (function(n) {
							if (c.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
								var o = n && ("load" === n.type ? "missing" : n.type),
									i = n && n.target && n.target.src;
								a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, r[1](a)
							}
						}), "chunk-" + e, e)
					}
			}, c.O.j = function(e) {
				return 0 === t[e]
			};
			var e = function(e, n) {
					var r, o, i = n[0],
						a = n[1],
						u = n[2],
						l = 0;
					if (i.some((function(e) {
							return 0 !== t[e]
						}))) {
						for (r in a) c.o(a, r) && (c.m[r] = a[r]);
						if (u) var s = u(c)
					}
					for (e && e(n); l < i.length; l++) o = i[l], c.o(t, o) && t[o] && t[o][0](), t[o] = 0;
					return c.O(s)
				},
				n = self.webpackChunkas_d = self.webpackChunkas_d || [];
			n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
		}();
	var u = c.O(void 0, [216], (function() {
		return c(2076)
	}));
	u = c.O(u)
}();