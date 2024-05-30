"use strict";
(self.webpackChunkas_d = self.webpackChunkas_d || []).push([
	[757], {
		4190: function(e, o, n) {
			n.d(o, {
				N: function() {
					return a
				}
			}), n(7042), n(1539), n(4747), n(4916), n(4723), n(5306);
			var t = n(6281),
				r = n(2076),
				i = null;
			document.addEventListener("DOMContentLoaded", (function() {
				var e = [].slice.call(document.querySelectorAll("img.lazy"));
				"IntersectionObserver" in window && (i = new window.IntersectionObserver((function(e, o) {
					e.forEach((function(e) {
						if (e.isIntersecting || void 0 === e.isIntersecting) {
							var o = e.target,
								n = o.dataset.src.match(/(?:icon|banner)/);
							o.src = t.webpIsSupported && (null == n ? void 0 : n.length) > 0 ? o.dataset.src.replace(".jpg", ".webp").replace(".png", ".webp") : o.dataset.src, o.classList.remove("lazy"), i.unobserve(o), o.onerror = function() {
								o.src = o.dataset.src, o.removeEventListener("error", (function() {}))
							}
						}
					}))
				}))), a(e)
			}));
			var a = function(e) {
				null != i ? e.forEach((function(e) {
					i.observe(e)
				})) : e.forEach((function(e) {
					e.src = e.dataset.src, e.classList.remove("lazy")
				}))
			};
			r.myConsoleLog("lazy-img loaded")
		},
		2129: function(e, o, n) {
			n.d(o, {
				K5: function() {
					return m
				},
				a_: function() {
					return d
				},
				eR: function() {
					return u
				}
			}), n(1539), n(6699), n(2023), n(9714), n(4916), n(4723), n(5306);
			var t = n(2076),
				r = n(2568),
				i = ["IR", "KP", "SY", "CU", "SD", "BY", "VE", "ZW", "SS", "UA-43", "UA-14", "UA-09"],
				a = ["AD", "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GF", "GG", "GI", "GP", "GR", "HR", "HU", "IE", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MF", "MQ", "MT", "NL", "NO", "PL", "PT", "RE", "RO", "SE", "SI", "SK", "SM", "VA", "YT"],
				l = ["PA025", "PA027", "PA028", "PA029", "PA030"],
				s = ["PH86", "PI57", "PI24", "PH72", "PI11", "PI58", "PI40", "PI43", "PI13", "PF68"],
				c = "js-ludi-rule",
				d = "",
				u = !1,
				m = !0,
				g = function e() {
					(0, t.myConsoleLog)(c, e.name), i.forEach((function(o) {
						t.country.iso2.includes(o) && ((0, t.myConsoleLog)(c, e.name, "access denied"), (0, t.redirect_to)("access-denied.html?" + t.urlParams.toString()))
					}))
				},
				p = function e() {
					(0, t.myConsoleLog)(c, e.name), window.didomiEventListeners = window.didomiEventListeners || [], window.didomiEventListeners.push({
						event: "consent.changed",
						listener: function(e) {
							(0, t.myConsoleLog)(c, "consent.changed", e)
						}
					}), window.didomiEventListeners.push({
						event: "integrations.consentpassedtodfp",
						listener: function(e) {
							(0, t.myConsoleLog)(c, "integrations.consentpassedtodfp", e), e.index
						}
					}), window.didomiEventListeners.push({
						event: "preferences.clickpurposedisagree",
						listener: function(e) {
							(0, t.myConsoleLog)(c, "preferences.clickpurposedisagree", e)
						}
					}), window.didomiEventListeners.push({
						event: "preferences.clickcategorydisagree",
						listener: function(e) {
							(0, t.myConsoleLog)(c, "preferences.clickcategorydisagree", e)
						}
					}), window.didomiEventListeners.push({
						event: "notice.clickdisagree",
						listener: function() {
							(0, t.myConsoleLog)(c, "notice.clickdisagree")
						}
					}), window.didomiEventListeners.push({
						event: "notice.clickclose",
						listener: function() {
							(0, t.myConsoleLog)(c, "notice.clickclose")
						}
					}), window.didomiOnReady = window.didomiOnReady || [], window.didomiOnReady.push((function(o) {
						var n = window.didomiCountry;
						window.didomiObject = o;
						var i = o.getUserStatus().purposes.consent,
							l = i.disabled,
							s = i.enabled;
						(0, t.myConsoleLog)(c, "didomiOnReady", "consent", i), (l.length || s.length) && (u = !0);
						var m = didomiObject.isConsentRequired();
						if ((0, t.myConsoleLog)(c, "didomiOnReady", "Is the consent required", m), m || (u = !0), (0, t.myConsoleLog)(c, "didomiOnReady", "window.didomiCountry : ", window.didomiCountry), !t.country.region && window.Intl) {
							var g = Intl.DateTimeFormat().resolvedOptions().timeZone,
								p = !1,
								f = a.includes(n);
							g && g.match(/^WET$|^CET$|^EET$|^UTC$|Europe/i) && (p = !0), f != p && (0, t.fetchAddMissingCity)({
								city: g + "-" + window.didomiCountry
							})
						}
						var h = window.didomiObject.getUserStatus().user_id;
						d = r(h), (0, t.myConsoleLog)(c, e.name, "didomiOnReady", (0, t.varToString)({
							ppid: d
						}), d, (0, t.varToString)({
							ddCountry: n
						}), n)
					}))
				},
				f = function e() {
					(0, t.myConsoleLog)(c, e.name);
					var o = (0, t.getOperaMiniVersion)(); - 1 != o && o < 13 && (0, t.redirect_to)("https://play.ludigames.com/oldp/?" + t.urlParams.toString())
				},
				h = function e() {
					if ((0, t.myConsoleLog)(c, e.name), t.urlParams.has("utm_campaign") && window.location.href.includes("play.ludigames.com")) {
						var o = t.urlParams.get("utm_campaign");
						l.includes(o) && (0, t.redirect_to)(window.location.href.replace("play.ludigames.com", "oppo.ludigames.com")), s.includes(o) && (0, t.redirect_to)(window.location.href.replace("play.ludigames.com", "samsung.ludigames.com"))
					}
				};
			! function e() {
				(0, t.myConsoleLog)(c, e.name), g(), h(), f(), m && p()
			}(), (0, t.myConsoleLog)(c, "loaded")
		},
		9081: function(e, o, n) {
			n.d(o, {
				LS: function() {
					return L
				},
				Wd: function() {
					return _
				},
				cM: function() {
					return p
				},
				dw: function() {
					return R
				},
				eM: function() {
					return g
				},
				qQ: function() {
					return f
				},
				wB: function() {
					return h
				}
			}), n(9070), n(7941), n(7327), n(5003), n(4747), n(9337), n(3321), n(2772), n(2165), n(6699), n(2023), n(6992), n(1539), n(8783), n(3948), n(1637), n(9714), n(4553), n(561), n(9826), n(9653), n(1249), n(4916), n(5306), n(6649), n(6078), n(2526), n(1817);
			var t = n(2076);

			function r(e) {
				return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}, r(e)
			}

			function i(e, o) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					o && (t = t.filter((function(o) {
						return Object.getOwnPropertyDescriptor(e, o).enumerable
					}))), n.push.apply(n, t)
				}
				return n
			}

			function a(e) {
				for (var o = 1; o < arguments.length; o++) {
					var n = null != arguments[o] ? arguments[o] : {};
					o % 2 ? i(Object(n), !0).forEach((function(o) {
						l(e, o, n[o])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(o) {
						Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
					}))
				}
				return e
			}

			function l(e, o, n) {
				return (o = function(e) {
					var o = function(e, o) {
						if ("object" !== r(e) || null === e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var t = n.call(e, "string");
							if ("object" !== r(t)) return t;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return String(e)
					}(e);
					return "symbol" === r(o) ? o : String(o)
				}(o)) in e ? Object.defineProperty(e, o, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[o] = n, e
			}
			var s = n(3144).environment,
				c = "user",
				d = (0, t.originPath)() + "LS_USER",
				u = {
					score: 0,
					highest_score: 0,
					lb_id: 0,
					key: null,
					rank: null,
					avatar: -1,
					list: []
				},
				m = {
					version: 2403131503,
					uiduser_encrypt: "ludilbtest",
					game_id: 4049,
					partner_id: 2,
					tour_id: 2,
					user_id: null,
					base64image: null,
					gameChallenge: [],
					gameLeaderboard: a({}, {
						pID: u
					}),
					account_kit: {
						access_token: null,
						expires_in: null,
						scope: null,
						id_token: null,
						refresh_token: null,
						expires_at: null,
						expires_at_str: null
					},
					tp_user_info: {
						displayName: "",
						openID: "",
						email: ""
					},
					playGame: {
						action: null,
						base64image: null,
						score: null,
						score_date: null
					},
					saveGame: [],
					increaseAthsCount: {
						count: 0,
						isShow: !1
					},
					lastStoryTitle: null
				},
				g = a({}, m),
				p = {
					name: "user-log",
					_status: -1,
					get status() {
						return this._status
					},
					set status(e) {
						this._status != e && (this._status = e, 1 != e && 2 != e || t.store.dispatch(t.store.ACTION_TYPE.USER_logWillNotChange, {
							relay: !0,
							status: e
						}))
					},
					get is() {
						return 1 == this._status
					}
				},
				f = "lgpl",
				h = {},
				y = "lgcc",
				A = {},
				_ = function e(o) {
					var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
							pID: -1,
							name: "",
							link: "",
							section: ""
						},
						i = (o.currentTarget, r.pID),
						a = r.name,
						l = r.link,
						s = r.section;
					(0, t.myConsoleLog)(c, e.name, l), o.preventDefault(), v(r), b(), n = window.location.href.includes("category.html") ? "Category page" : window.location.href.includes("search.html") ? "Search page" : "Home page", dataLayer.push({
						event: "ga_event",
						ga_category: s,
						ga_action: "Launch",
						ga_label: a,
						ga_noninteraction: !1,
						ga_content: n
					});
					var d = new URLSearchParams(t.urlParams.toString()),
						u = "pID",
						m = "gameName",
						g = "searchPID";
					d.has(u) && d.delete(u), d.append(u, i), d.has(m) && d.delete(m), d.append(m, encodeURI(a)), d.has(g) && d.delete(g), (0, t.redirect_to)((0, t.originPath)() + "game.html?" + d.toString())
				},
				v = function(e) {
					var o = g.saveGame,
						n = e.pID,
						r = e.link,
						i = e.name,
						a = o.findIndex((function(e) {
							return e.pID === n
						}));
					a > -1 && o.splice(a, 1), o.unshift({
						pID: n,
						link: r,
						image: (0, t.pIDToBanner)(n, "banners", "242"),
						name: i
					}), R({
						saveGame: o
					})
				},
				b = function() {
					var e = g.increaseAthsCount;
					e.count += 1, 3 == e.count ? (e.isShow = !0, e.count = 0) : e.isShow = !1, R({
						increaseAthsCount: e
					})
				},
				w = function e(o) {
					(0, t.myConsoleLog)(c, e.name, o);
					var n = o.code,
						r = o.rank,
						i = t.urlParams.get("pID"),
						s = g,
						d = s.gameLeaderboard,
						m = s.displayName,
						p = s.gameChallenge,
						f = s.user_id,
						h = d[i],
						y = p.find((function(e) {
							return Number(e.game_id) == i
						})),
						A = y.partner_id,
						_ = y.tour_id;
					if (n == t.AR_RESPONSE_CODE.SUCCESSFUL) {
						h || (h = a({}, u));
						var v = a(a({}, h), {}, {
								rank: r
							}),
							b = a(a({}, d), {}, l({}, i, v));
						(0, t.fetchLeaderBoard)({
							lb_id: h.lb_id
						}, C), R({
							gameLeaderboard: b
						})
					} else if (n != t.AR_RESPONSE_CODE.NOT_HIGH_SCORE && n != t.AR_RESPONSE_CODE.PARAM_TYPE_INCORRECT || (0, t.fetchLeaderBoard)({
							lb_id: h.lb_id
						}, C), n == t.AR_RESPONSE_CODE.EVENT_ENDED_HAVE_NEW_EVENT) {
						var w = {
								game_id: i,
								partner_id: A,
								tour_id: _,
								display_name: m,
								user_id: f
							},
							S = a(a({}, h), {}, {
								highest_score: h.score
							}),
							L = a(a({}, d), {}, l({}, i, S));
						R({
							gameLeaderboard: L
						}), T(w, P)
					}
				},
				S = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					(0, t.myConsoleLog)(c, e.name);
					var r = s.originPath + "ludichallenge/action.php",
						i = {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							},
							body: new URLSearchParams(o)
						};
					(0, t.fetchAwait)(r + "?action=submit_score&debug=true", (function(e) {
						n && n(e)
					}), i)
				},
				C = function e(o) {
					(0, t.myConsoleLog)(c, e.name);
					var n = o.rank,
						r = o.list,
						i = t.urlParams.get("pID"),
						s = g.gameLeaderboard,
						d = s[i];
					d || (d = a({}, u));
					var m = a(a({}, d), {}, {
							rank: n,
							list: r
						}),
						p = a(a({}, s), {}, l({}, i, m));
					R({
						gameLeaderboard: p
					}), t.store.dispatch(t.store.ACTION_TYPE.USER_leaderboardFetched, a({
						relay: !0
					}, o))
				},
				L = function e() {
					(0, t.myConsoleLog)(c, e.name);
					var o = g,
						n = o.displayName,
						r = o.gameChallenge,
						i = o.user_id,
						a = o.gameLeaderboard,
						l = t.urlParams.get("pID"),
						s = r.find((function(e) {
							return Number(e.game_id) == l
						})),
						d = s.partner_id,
						u = s.tour_id;
					if (i) {
						var m = a[l],
							f = m.score,
							h = m.lb_id,
							y = m.key;
						if (m.rank, m.avatar, D()) {
							var A = {
								game_id: l,
								partner_id: d,
								tour_id: u,
								user_id: i,
								lb_id: h,
								key: y,
								score: f
							};
							p.status = 1, S(A, w)
						} else T({
							game_id: l,
							partner_id: d,
							tour_id: u,
							display_name: n,
							user_id: i
						}, P)
					} else s && k({
						game_id: l,
						partner_id: d,
						tour_id: u,
						display_name: n
					}, E)
				},
				E = function e(o) {
					if ((0, t.myConsoleLog)(c, e.name, o), o.code == t.AR_RESPONSE_CODE.SUCCESSFUL) {
						var n = o.user_id,
							r = o.lb_id,
							i = (o.score, o.key),
							s = o.avatar,
							d = o.rank,
							u = t.urlParams.get("pID"),
							m = g,
							f = m.gameLeaderboard,
							h = m.gameChallenge,
							y = f[u],
							A = a(a({}, y), {}, {
								lb_id: r,
								key: i,
								rank: d,
								avatar: s
							}),
							_ = a(a({}, f), {}, l({}, u, A));
						R({
							gameLeaderboard: _,
							user_id: n
						});
						var v = h.find((function(e) {
								return Number(e.game_id) == u
							})),
							b = v.partner_id,
							C = v.tour_id;
						if (r) {
							var L = {
								game_id: u,
								partner_id: b,
								tour_id: C,
								user_id: n,
								lb_id: r,
								key: i,
								score: y.highest_score
							};
							p.status = 1, S(L, w)
						} else T({
							game_id: u,
							partner_id: b,
							tour_id: C,
							user_id: n
						}, P)
					}
				},
				P = function e(o) {
					if ((0, t.myConsoleLog)(c, e.name, o), o.code == t.AR_RESPONSE_CODE.SUCCESSFUL) {
						var n = o.user_id,
							r = o.lb_id,
							i = (o.score, o.key),
							s = o.avatar,
							d = o.rank,
							m = g,
							f = m.gameLeaderboard,
							h = m.gameChallenge,
							y = t.urlParams.get("pID"),
							A = h.find((function(e) {
								return Number(e.game_id) == y
							})),
							_ = A.partner_id,
							v = A.tour_id,
							b = f[y];
						b || (b = a({}, u));
						var C = a(a({}, b), {}, {
								lb_id: r,
								key: i,
								rank: d,
								avatar: s
							}),
							L = a(a({}, f), {}, l({}, y, C));
						R({
							gameLeaderboard: L,
							user_id: n
						}), p.status = 1;
						var E = {
							game_id: y,
							partner_id: _,
							tour_id: v,
							user_id: n,
							lb_id: r,
							key: i,
							score: f[y].score
						};
						S(E, w)
					} else p.status = 2
				},
				T = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
							partner_id: partner_id,
							game_id: game_id,
							tour_id: tour_id,
							user_id: user_id
						},
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					(0, t.myConsoleLog)(c, e.name);
					var r = s.originPath + "ludichallenge/action.php",
						i = {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							},
							body: new URLSearchParams(o)
						};
					(0, t.fetchAwait)(r + "?action=register_lb&debug=true", (function(e) {
						n && n(e)
					}), i)
				},
				k = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
							displayName: displayName,
							game_id: game_id,
							partner_id: partner_id,
							tour_id: tour_id
						},
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					(0, t.myConsoleLog)(c, e.name);
					var r = s.originPath + "ludichallenge/action.php",
						i = {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							},
							body: new URLSearchParams(o)
						};
					(0, t.fetchAwait)(r + "?action=register_user&debug=true", (function(e) {
						n && n(e)
					}), i)
				},
				O = function e() {
					var o = {};
					(0, t.loadLS)(d, o), null == o.version || o.version < m.version ? ((0, t.myConsoleLog)(c, e.name, "has new version"), R(m)) : (g = a({}, o), (0, t.myConsoleLog)(c, e.name, "no new version"))
				},
				R = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, t.myConsoleLog)(c, e.name, o), (0, t.saveLS)(o, g, d)
				},
				I = function e() {
					(0, t.myConsoleLog)(c, e.name);
					var o = (0, t.getCookie)(f);
					h = "" == o ? {} : JSON.parse(o), A = (0, t.getCookie)(y)
				},
				F = function e() {
					(0, t.myConsoleLog)(c, e.name), g.lastStoryTitle, window.location.href.includes("story.html") || R({
						lastStoryTitle: null
					})
				},
				D = function e() {
					var o = !0,
						n = g,
						r = n.gameChallenge,
						i = n.gameLeaderboard,
						a = t.urlParams.get("pID"),
						l = r.find((function(e) {
							return Number(e.game_id) == a
						})).end_time,
						s = i[a].lb_id;
					return (new Date).getTime() >= +l && (o = !1), s || (o = !1), (0, t.myConsoleLog)(c, e.name, o), o
				};
			! function e() {
				(0, t.myConsoleLog)(c, e.name), t.urlParams.has("fake-fetch"), O(), F(), I(), window.didomiOnReady = window.didomiOnReady || [], window.didomiOnReady.push((function(o) {
					var n = window.didomiCountry;
					if ((0, t.myConsoleLog)(c, e.name, "didomiOnReady", n), A != n) {
						A = n;
						var r = window.location.hostname;
						r = r.replace("play.", ""), (0, t.setCookie)(y, A, 365, r)
					}
				}))
			}(), (0, t.myConsoleLog)(c, "loaded")
		},
		6281: function(e, o, n) {
			n.r(o), n.d(o, {
				webpIsSupported: function() {
					return l
				}
			}), n(1539), n(8674);
			var t, r, i, a = n(2076),
				l = !1;
			t = "lossy", r = function(e, o) {
				console.log(e + "=" + o), l = o
			}, (i = new Image).onload = function() {
				var e = i.width > 0 && i.height > 0;
				r(t, e)
			}, i.onerror = function() {
				r(t, !1)
			}, i.src = "data:image/webp;base64," + {
				lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
				lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
				alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
				animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
			}[t], a.myConsoleLog("webp loaded", l)
		},
		2218: function(e, o, n) {
			n.d(o, {
				H: function() {
					return t
				}
			});
			var t = {
				3662: {
					title: "Pick your favorite hero in BoBoiBoy",
					content: "And save the Galaxy!",
					des: "Protect the Power Spheres and save the galaxy from villains"
				},
				3232: {
					title: "Are you ready for an adventure?",
					content: "And being chased by tigers, explore lost city!",
					des: "Run through the jungle-survive scores of obstacles in a lost city-and hold on for your life in the mysterious temple!"
				},
				2784: {
					title: "Up you go! The sky's the limit!",
					content: "Fly up and beware the obstacles!",
					des: "Help this little balloon overcome all obstacles in its endless adventure. "
				},
				2817: {
					title: "Want to be a Ninja?",
					content: "Jump up to the moon!",
					des: "Jump as high as you can with the most daring 2D pixel ninja!"
				},
				3536: {
					title: "Do you remember your childhood game?",
					content: "Adventure with a paper flight",
					des: "Help little paper planes fly past obstacles and fly through the rings to get highscore"
				},
				4049: {
					title: "Do you want to build the bridges?",
					content: "Walk from building to another with only bridge",
					des: "Join the escape from skyscraper to skyscraper by stretching the bridge."
				},
				2748: {
					title: "Who said numbers can't be fun? ",
					content: "Test your brain with this simple-yet challenging game.",
					des: "Tap on the even numbers and see how far you can go!"
				}
			}
		},
		7145: function(e, o, n) {
			n.r(o), n(6699), n(2023), n(7042);
			var t = n(2076),
				r = (n.p, n.p, n(4190)),
				i = "footer",
				a = document.querySelector(".cf.footer"),
				l = a.querySelector(".policy"),
				s = a.querySelector(".terms-services"),
				c = a.querySelector(".cookie-policy"),
				d = a.querySelector(".year"),
				u = function e() {
					(0, t.myConsoleLog)(i, e.name), l.onclick = function(e) {
						(0, t.myConsoleLog)(i, "onclick policy", e), (0, t.redirect_to)("https://www.gameloft.com/privacy-notice/", {
							target: "_blank"
						})
					}, s.onclick = function(e) {
						(0, t.myConsoleLog)(i, "onclick termsServices", e), (0, t.redirect_to)("//play.ludigames.com/cookie_policy.php", {
							target: "_blank"
						})
					}, c.onclick = function(e) {
						(0, t.myConsoleLog)(i, "onclick cookiePolicy", e), (0, t.redirect_to)("https://www.gameloft.com/en/legal/showcase-cookie-policy", {
							target: "_blank"
						})
					}
				},
				m = function e() {
					(0, t.myConsoleLog)(i, e.name), window.location.href.includes("info.html");
					var o = [].slice.call(a.querySelectorAll("img.lazy"));
					(0, r.N)(o), d.innerHTML = (new Date).getFullYear()
				};
			! function e() {
				(0, t.myConsoleLog)(i, e.name), u(), m(), t.store.subcribe(t.store.ACTION_TYPE.DELAY_LOADING_HIDDEN, (function() {
					(0, t.elShow)(a)
				}))
			}(), (0, t.myConsoleLog)(i, "loaded")
		},
		8131: function(e, o, n) {
			n.r(o), n(1539), n(9714);
			var t = n(2076),
				r = n.p + "static/images/b8f63998b3c9c3154087.png",
				i = n.p + "static/images/5871640b6723f2b3f380.png",
				a = (n(9081), "ch-header"),
				l = document.querySelector("body"),
				s = l.querySelector(".c.header"),
				c = s.querySelector(".logo"),
				d = s.querySelector(".icon"),
				u = function e() {
					(0, t.myConsoleLog)(a, e.name), c.onclick = function(e) {
						return (0, t.myConsoleLog)(a, (0, t.varToString)({
							logo: c
						}), "click"), !0
					}
				};
			! function e() {
				(0, t.myConsoleLog)(a, e.name),
				function() {
					var e = (0, t.originPath)() + "?" + t.urlParams.toString();
					c.setAttribute("href", e);
					var o = t.device.scale;
					d.style.backgroundImage = "url(".concat("x2" == o ? i : r, ")"), l.style.visibility = "visible"
				}(), u()
			}(), (0, t.myConsoleLog)(a, "loaded")
		},
		9386: function(e, o, n) {
			n.r(o);
			var t = n(2076),
				r = "c-loading",
				i = document.querySelector(".c.loading"),
				a = function e() {
					(0, t.myConsoleLog)(r, e.name)
				};
			! function e() {
				(0, t.myConsoleLog)(r, e.name), a(), (0, t.elShow)(i, "flex")
			}(), (0, t.myConsoleLog)(r, "loaded")
		},
		6922: function(e, o, n) {
			n.r(o), n.d(o, {
				cph_STATE: function() {
					return a
				},
				cph_hide: function() {
					return u
				},
				cph_hideAll: function() {
					return m
				},
				cph_show: function() {
					return d
				}
			}), n(1539);
			var t = n(2076),
				r = "c-pop-up-header",
				i = document.querySelector("body").querySelector(".pop-up-header"),
				a = {},
				l = [],
				s = [],
				c = 0,
				d = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -111,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
					(0, t.myConsoleLog)(r, e.name, o, n, l[l.length - 1]), l[l.length - 1] != o && (l.push(o), (0, t.elShow)(i), (0, t.elShow)(s[o]), s[o].style.zIndex = c++)
				},
				u = function e() {
					if ((0, t.myConsoleLog)(r, e.name), 0 != l.length) {
						var o = l.pop();
						(0, t.elHide)(s[o]), 0 == l.length && (0, t.elHide)(i)
					}
				},
				m = function e() {
					(0, t.myConsoleLog)(r, e.name), (0, t.elHide)(i), s.forEach((function(e) {
						(0, t.elHide)(e)
					})), l = []
				},
				g = function e() {
					(0, t.myConsoleLog)(r, e.name), s.forEach((function(e) {
						e.onclick = function(o) {
							(0, t.myConsoleLog)(r, (0, t.varToString)({
								child: e
							}), "onclick", e, o), (0, t.stopPropagation)(o)
						}
					}))
				},
				p = function e() {
					(0, t.myConsoleLog)(r, e.name), g()
				};
			t.store.subcribe(t.store.ACTION_TYPE.INDEX_products_1, (function() {
				p()
			})), t.store.subcribe(t.store.ACTION_TYPE.CATEGORY_products_1, (function() {
				p()
			})), (0, t.myConsoleLog)(r, "loaded")
		},
		1238: function(e, o, n) {
			n.r(o), n(6992), n(1539), n(8783), n(3948), n(1637), n(9714), n(1058), n(4916), n(5306), n(4747);
			var t = n(2076),
				r = n(2129),
				i = n(2007),
				a = ["kartRacingProFree", "towerDefenseClashFree", "idleZooFree", "castleofIntenseDismayFree", "midnightPoolClassicFree", "kiteFree", "novaCoveredOpsFree", "supercapeOfJusticeFree", "nitroTukTukFree", "pocketDessertChefFree", "piratesPathOfTheBuccaneerFree", "paddingtonFree", "subwayRunnerFree", "tomAndJerryDeluxeFree", "scoobyDooWeLoveYouFree", "kidsCutePairsFree", "spongebobRunFree", "donutsFree", "powerpuffGirlsMojoMadnessFree", "woodventureFree", "happyFishingFree", "braveKnightFree", "paintTheWayFree", "alienEscapeFree", "playfulKittyFree", "ringsChallengeFree", "defenseBattleFree", "heLikesTheDarknessFree", "shadowAdventureFree", "rightShotFree", "pirateKidFree", "jungleJonesFree", "findDiamondsFree", "footballHeadsFree", "pandaLoveFree", "crossyChickenRunFree", "queensGambitPuzzlesFree", "twoAliensEscapeFree", "retroNeonInvadersFree", "cutThePuzzleFree", "goblinRunFree", "airportControlFree", "egyptStoneWarFree", "castleDefenderFree", "tangramFree", "footballPenaltyKicksFree", "fingerSoccerFree", "santaRushFree", "mindGames6In1Free", "realGoalkeeperFree", "realTennisFree", "airStrikeWarFree", "spotTheDifferenceFree", "dungeonAndPuzzlesSokobanFree", "spotTheDifferenceSeasonsFree", "squadTowerFree", "sharkEvolutionFree", "mathMagicKidsFree", "retroKingdomFree", "jigsawPuzzleFree"],
				l = "g-game",
				s = document.querySelector(".gg.game"),
				c = document.getElementById("game-frame");
			window.g_window = c.contentWindow;
			var d = document.querySelector(".back-home-ingame"),
				u = s.querySelector(".full-screen"),
				m = s.querySelector("i"),
				g = 0,
				p = "pID",
				f = new URLSearchParams(t.urlParams.toString()),
				h = !1,
				y = function e() {
					(0, t.myConsoleLog)(l, e.name), d.onclick = function(e) {
						(0, t.myConsoleLog)(l, (0, t.varToString)({
							backHomeIngame: d
						}), "onclick"), (0, t.redirect_to)((0, t.originPath)() + "?" + t.urlParams.toString())
					}, d.ontouchstart = function(e) {
						var o = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
						d.touchState = 1, d.startPointerY = d.lastPointerY = o
					}, d.ontouchmove = function(e) {
						if (e.preventDefault(), e.stopPropagation(), 1 == d.touchState || 2 == d.touchState) {
							d.touchState = 2;
							var o = e.changedTouches ? e.changedTouches[0].pageY : e.pageY,
								n = o - d.lastPointerY;
							d.lastPointerY = o, d.lastTop = d.lastTop ? d.lastTop : d.offsetTop, d.lastTop += n, d.style.top = d.lastTop + "px"
						}
					}, d.ontouchend = function(e) {
						var o = e.changedTouches ? e.changedTouches[0].pageY : e.pageY,
							n = Math.abs(o - d.startPointerY);
						0 != d.touchState && (n < 5 ? d.touchState = 0 : setTimeout((function() {
							d.touchState = 0
						}), 100))
					}, u.onclick = function(e) {
						if ((0, t.myConsoleLog)(l, (0, t.varToString)({
								fsBtn: u
							}), "onclick"), i.Z.fullscreenEnabled)
							if (null == i.Z.fullscreenElement) {
								var o = document.querySelector("html");
								i.Z.requestFullscreen(o)
							} else i.Z.exitFullscreen()
					}, i.Z.fullscreenEnabled && i.Z.addEventListener("fullscreenchange", (function() {
						null !== i.Z.fullscreenElement ? (m.classList.remove("fa-expand"), m.classList.add("fa-compress")) : (m.classList.remove("fa-compress"), m.classList.add("fa-expand"))
					}), !1), window.addEventListener("orientationchange", (function(e) {
						v()
					}))
				},
				A = function e() {
					(0, t.myConsoleLog)(l, e.name);
					var o = -1,
						n = "";
					if (f.has(p)) {
						if (o = parseInt(f.get(p)), n = (0, t.getGameUrlFromPId)(o), (0, t.getParamFromPId)(o), "" === n) {
							var i = (0, t.originPath)() + "index.html?" + f.toString();
							(0, t.redirect_to)(i)
						}
						f.has("7days") && (n = (n = n.replace("h5/", "h5ads/7days/" + f.get("7days") + "/")).replace("https:", "")), f.set("overlay-disable", "true"), r.a_ && f.set("ppid", r.a_), f.get("utm_campaign") && f.set("channel", f.get("utm_campaign"));
						var a = n + "?" + f.toString();
						c.src = a
					} else {
						(0, t.myConsoleLog)(l, e.name, "Error: pID param empty");
						var s = (0, t.originPath)() + "index.html?" + f.toString();
						(0, t.redirect_to)(s)
					}
				},
				_ = function e() {
					(0, t.myConsoleLog)(l, e.name), s.style.height = window.innerHeight + "px", window.addEventListener("resize", (function() {
						s.style.height = window.innerHeight + "px"
					})), window.addEventListener("orientationchange", (function() {
						s.style.height = window.innerHeight + "px"
					})), A()
				},
				v = function() {
					f.has(p) && a.forEach((function(e) {
						(0, t.getProductKeyFromPId)(f.get(p)) === e && (h = !0)
					})), h && i.Z.fullscreenEnabled && 90 == Math.abs(window.orientation) ? (0, t.elShow)(u, "flex") : (0, t.elHide)(u)
				},
				b = function e() {
					t.store.subcribe(t.store.ACTION_TYPE.All_products, (function() {
						_(), v(), y()
					})), (0, t.myConsoleLog)(l, e.name), t.store.subcribe(t.store.ACTION_TYPE.USER_playGame_start, (function() {
						(0, t.elHide)(d)
					})), t.store.subcribe(t.store.ACTION_TYPE.USER_playGame_completion, (function() {
						(0, t.elShow)(d, "flex")
					})), t.store.subcribe(t.store.ACTION_TYPE.USER_playAds_completion, (function() {
						(0, t.elShow)(d, "flex")
					})), t.store.subcribe(t.store.ACTION_TYPE.USER_playGame_mainMenu, (function() {
						++g > 1 && (0, t.elShow)(d, "flex")
					}))
				};
			window.didomiEventListeners = window.didomiEventListeners || [], window.didomiEventListeners.push({
				event: "consent.changed",
				listener: function(e) {
					(0, t.myConsoleLog)(l, "consent.changed", e), b()
				}
			}), r.K5 ? (window.didomiOnReady = window.didomiOnReady || [], window.didomiOnReady.push((function(e) {
				(0, t.myConsoleLog)(l, "didomiOnReady", "hasConsentOrNotRequired", r.eR), r.eR && b()
			}))) : b(), (0, t.myConsoleLog)(l, "loaded")
		},
		3759: function(e, o, n) {
			n.r(o), n.d(o, {
				gpug_STATE: function() {
					return T
				},
				gpug_hide: function() {
					return N
				},
				gpug_hideAll: function() {
					return q
				},
				gpug_show: function() {
					return D
				}
			}), n(1539), n(4747), n(9826), n(9653);
			var t = n(2076),
				r = n(9081);
			n(2218), n(9386);
			var i = "g-pop-up-game",
				a = document.querySelector(".g.pop-up-game"),
				l = a.querySelector(".end-game-popup"),
				s = l.querySelector(".close-btn"),
				c = l.querySelector(".game-btn"),
				d = l.querySelector(".score"),
				u = l.querySelector(".user-info"),
				m = u.querySelector(".display-name"),
				g = m.querySelector("input"),
				p = m.querySelector(".check-btn"),
				f = l.querySelector(".user-score"),
				h = f.querySelector(".leaderboard"),
				y = f.querySelector(".play"),
				A = a.querySelector(".leaderboard-popup"),
				_ = A.querySelector(".leaderboard-tab"),
				v = _.querySelector(".name .icon img"),
				b = A.querySelector(".lb-tour"),
				w = A.querySelector(".lb-not-tour"),
				S = A.querySelector(".your-rank").querySelector(".score"),
				C = _.querySelector(".loading"),
				L = A.querySelector(".leaderboard-list"),
				E = L.querySelector("template"),
				P = A.querySelector(".play-game"),
				T = {
					ENDGAME: 0,
					LEADERBOARD: 1
				},
				k = [],
				O = [l, A],
				R = 0,
				I = t.urlParams.get("pID"),
				F = !1,
				D = function e() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -111,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
					if ((0, t.myConsoleLog)(i, e.name, o, n, k[k.length - 1]), k[k.length - 1] != o) switch (k.push(o), (0, t.elShow)(a), (0, t.elShow)(O[o]), O[o].style.zIndex = R++, o) {
						case T.ENDGAME:
							var l = r.eM.gameLeaderboard;
							d.innerHTML = "".concat(l[I].score), (0, t.elShow)(f), (0, t.elHide)(u);
							break;
						case T.LEADERBOARD:
							(0, t.elShow)(C, "flex"), t.store.subcribe(t.store.ACTION_TYPE.USER_leaderboardFetched, (function() {
								(0, t.elHide)(C), U()
							})), (0, t.elShow)(A)
					}
				},
				N = function e() {
					if ((0, t.myConsoleLog)(i, e.name), 0 != k.length) {
						var o = k.pop();
						(0, t.elHide)(O[o]), 0 == k.length && (0, t.elHide)(a)
					}
				},
				q = function e() {
					(0, t.myConsoleLog)(i, e.name), (0, t.elHide)(a), O.forEach((function(e) {
						(0, t.elHide)(e)
					})), k = []
				},
				U = function e() {
					if ((0, t.myConsoleLog)(i, e.name), r.cM.is) {
						for (A.onclick = function(e) {
								(0, t.stopPropagation)(e), N()
							}, v.src = (0, t.pIDToBanner)(I, "banners", "242"); L.lastElementChild;) L.removeChild(L.lastElementChild);
						var o = r.eM.gameLeaderboard;
						o[I].list.forEach((function(e, n) {
							var t = E.content.firstElementChild.cloneNode(!0),
								r = n < 9 ? "0" + (n + 1) + ". " : n + 1 + ". ";
							t.classList.add("item-".concat(n)), t.querySelector(".username").innerHTML = r + e.user_name, t.querySelector(".score").innerHTML = e.score, e.lb_id == o[I].lb_id && (t.style.background = "#E6F7FF"), L.appendChild(t)
						})), S.innerHTML = "".concat(o[I].highest_score), (0, t.elShow)(b), (0, t.elHide)(w)
					} else(0, t.elHide)(b), (0, t.elShow)(w)
				},
				Y = function e() {
					(0, t.myConsoleLog)(i, e.name), a.onclick = function(e) {
						(0, t.myConsoleLog)(i, (0, t.varToString)({
							popUpGame: a
						}), "onclick"), N()
					}, O.forEach((function(e) {
						e.onclick = function(o) {
							(0, t.myConsoleLog)(i, (0, t.varToString)({
								child: e
							}), "onclick", e, o), (0, t.stopPropagation)(o)
						}
					})), P.onclick = s.onclick = c.onclick = function(e) {
						(0, t.myConsoleLog)(i, (0, t.varToString)({
							closeBtn: s
						}), "onclick", e), N()
					}, g.oninput = function(e) {
						g.value.length > 0 ? p.disabled = !1 : p.disabled = !0
					}, p.onclick = function(e) {
						(0, t.myConsoleLog)(i, (0, t.varToString)({
							displayNameBtn: p
						}), "onclick", e);
						var o = g.value;
						(0, r.dw)({
							displayName: o
						}), (0, r.LS)(), N(), D(T.LEADERBOARD, {
							pID: I
						})
					}, h.onclick = function(e) {
						(0, t.myConsoleLog)(i, (0, t.varToString)({
							userScoreLb: h
						}), "onclick", e), r.eM.displayName ? (N(), D(T.LEADERBOARD, {
							pID: I
						})) : ((0, t.elShow)(u), (0, t.elHide)(f))
					}, y.onclick = function(e) {
						(0, t.myConsoleLog)(i, (0, t.varToString)({
							userScoreClose: y
						}), "onclick", e), N()
					}
				},
				G = function e() {
					(0, t.myConsoleLog)(i, e.name), F = !0
				},
				H = function e() {
					(0, t.myConsoleLog)(i, e.name), F = !1, N()
				},
				B = function e() {
					if ((0, t.myConsoleLog)(i, e.name), F) {
						var o = t.urlParams.get("pID");
						r.eM.gameChallenge.find((function(e) {
							return Number(e.game_id) == o
						})) && D(T.ENDGAME), F = !1
					}
				},
				x = function e(o) {
					(0, t.myConsoleLog)(i, e.name)
				};
			! function e() {
				(0, t.myConsoleLog)(i, e.name), t.store.subcribe(t.store.ACTION_TYPE.All_products, (function() {
					Y(), t.store.subcribe(t.store.ACTION_TYPE.USER_playAds_completion, B), t.store.subcribe(t.store.ACTION_TYPE.USER_leaderboardFetched, x), t.store.subcribe(t.store.ACTION_TYPE.USER_playGame_completion, G), t.store.subcribe(t.store.ACTION_TYPE.USER_playGame_start, H)
				}))
			}(), (0, t.myConsoleLog)(i, "loaded")
		},
		9654: function(e, o, n) {
			n(7147), n(2129);
			var t = n(2076);
			n(9081), n(2702).polyfill(), n(6281), n(8131), n(1238), n(3759), n(6922), n(7145);
			var r = "game";
			(0, t.fetchAllProducts)(), (0, t.myConsoleLog)(r, "originPath", (0, t.originPath)()), (0, t.myConsoleLog)(r, "loaded")
		}
	},
	function(e) {
		e.O(0, [216], (function() {
			return 9654, e(e.s = 9654)
		})), e.O()
	}
]);