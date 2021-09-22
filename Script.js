//CONFIG

//the url of the midi file, the site that hosts this file MUST have cors enabled!
const fileurl = 'https://togi.cloud.ngrok.io/data/uploads/users/?img=Dotpiano/media/example.mid'

//control midi file tempo (for most songs you want 60, however the ussual change is somtimes required) 
//!!THIS IS NOT BPM, LOWER IS SLOWER, HIGHER IS FASTER!!
const tempo = 60

//the track of the midi file to play. only one track can be played currently.

const midiTrack = 1

//END OF CONFIG
!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 27)
}([function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.MIDI_OUT = e.MIDI_CHANNEL = e.IS_MOBILE = e.TITLE = e.USE_SOUND = e.SCREEN = e.SONG_NUMBER = e.IS_INSTALLATION = e.MAX_MIDI = e.MIN_MIDI = void 0;
    var o = i(64)
      , r = n(o)
      , s = i(57)
      , a = n(s)
      , u = r.default.parse(window.location.search.substr(1))
      , l = (e.MIN_MIDI = 21,
    e.MAX_MIDI = 108,
    window.location.pathname.split("/"))
      , c = e.IS_INSTALLATION = "installation.html" === l[l.length - 1]
      , h = u.sound;
    e.SONG_NUMBER = parseInt(window.location.pathname.substr(1)),
    e.SCREEN = {
        get WIDTH() {
            return window.innerWidth
        },
        get HEIGHT() {
            return window.innerHeight
        }
    },
    e.USE_SOUND = !c && "false" !== h,
    e.TITLE = "Dot Piano",
    e.IS_MOBILE = a.default.any,
    e.MIDI_CHANNEL = c ? 1 : "all",
    e.MIDI_OUT = "true" === u.midi_out
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.InterfaceElement = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(4)
      , u = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(a)
      , l = i(0);
    e.InterfaceElement = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return r.element = document.createElement("div"),
            r.element.id = i,
            r.element.classList.add("disappearable"),
            t.appendChild(r.element),
            r.wait = 4e3,
            r.fadeInTime = 200,
            r.fadeOutTime = 200,
            r.timeout = -1,
            r.initialized = !1,
            r.activeTabs = ["play", "listen", "about"],
            r.autohide = !0,
            document.body.addEventListener("mousemove", function() {
                r.touch()
            }),
            r
        }
        return r(e, t),
        s(e, [{
            key: "_delay",
            value: function(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                }
                )
            }
        }, {
            key: "isVisible",
            value: function() {
                return this.element.classList.contains("visible")
            }
        }, {
            key: "show",
            value: function(t) {
                return this.activeTabs.indexOf(t) >= 0 ? (this.appear(),
                this.element.classList.add("visible"),
                this.initialized || (this.initialized = !0,
                this.enter()),
                this._delay(this.fadeInTime)) : this.hide()
            }
        }, {
            key: "hide",
            value: function() {
                return this.element.classList.remove("visible"),
                this._delay(this.fadeOutTime)
            }
        }, {
            key: "enter",
            value: function() {}
        }, {
            key: "disappear",
            value: function() {
                this.initialized && (clearTimeout(this.timeout),
                this.element.classList.add("disappear"))
            }
        }, {
            key: "appear",
            value: function() {
                var t = this;
                this.initialized && (this.element.classList.remove("disappear"),
                clearTimeout(this.timeout),
                this.autohide && !l.IS_MOBILE && (this.timeout = setTimeout(function() {
                    return t.disappear()
                }, this.wait)))
            }
        }, {
            key: "touch",
            value: function() {
                this.appear()
            }
        }]),
        e
    }(u.default.EventEmitter)
}
, function(t, e, i) {
    var n;
    !function(o, r) {
        void 0 !== (n = function() {
            return r()
        }
        .call(e, i, e, t)) && (t.exports = n)
    }(0, function() {
        "use strict";
        function t(t) {
            t(e)
        }
        var e;
        /**
	 *  Tone.js
	 *  @author Yotam Mann
	 *  @license http://opensource.org/licenses/MIT MIT License
	 *  @copyright 2014-2017 Yotam Mann
	 */
        return function(t) {
            e = t()
        }(function() {
            var t = function() {};
            return t.prototype.toString = function() {
                for (var e in t) {
                    var i = e[0].match(/^[A-Z]$/)
                      , n = t[e] === this.constructor;
                    if (t.isFunction(t[e]) && i && n)
                        return e
                }
                return "Tone"
            }
            ,
            t.prototype.dispose = function() {
                return this
            }
            ,
            t.prototype.set = function(e, i, n) {
                if (t.isObject(e))
                    n = i;
                else if (t.isString(e)) {
                    var o = {};
                    o[e] = i,
                    e = o
                }
                t: for (var r in e) {
                    i = e[r];
                    var s = this;
                    if (-1 !== r.indexOf(".")) {
                        for (var a = r.split("."), u = 0; u < a.length - 1; u++)
                            if ((s = s[a[u]])instanceof t) {
                                a.splice(0, u + 1);
                                var l = a.join(".");
                                s.set(l, i);
                                continue t
                            }
                        r = a[a.length - 1]
                    }
                    var c = s[r];
                    t.isUndef(c) || (t.Signal && c instanceof t.Signal || t.Param && c instanceof t.Param ? c.value !== i && (t.isUndef(n) ? c.value = i : c.rampTo(i, n)) : c instanceof AudioParam ? c.value !== i && (c.value = i) : c instanceof t ? c.set(i) : c !== i && (s[r] = i))
                }
                return this
            }
            ,
            t.prototype.get = function(e) {
                t.isUndef(e) ? e = this._collectDefaults(this.constructor) : t.isString(e) && (e = [e]);
                for (var i = {}, n = 0; n < e.length; n++) {
                    var o = e[n]
                      , r = this
                      , s = i;
                    if (-1 !== o.indexOf(".")) {
                        for (var a = o.split("."), u = 0; u < a.length - 1; u++) {
                            var l = a[u];
                            s[l] = s[l] || {},
                            s = s[l],
                            r = r[l]
                        }
                        o = a[a.length - 1]
                    }
                    var c = r[o];
                    t.isObject(e[o]) ? s[o] = c.get() : t.Signal && c instanceof t.Signal ? s[o] = c.value : t.Param && c instanceof t.Param ? s[o] = c.value : c instanceof AudioParam ? s[o] = c.value : c instanceof t ? s[o] = c.get() : t.isFunction(c) || t.isUndef(c) || (s[o] = c)
                }
                return i
            }
            ,
            t.prototype._collectDefaults = function(e) {
                var i = [];
                if (t.isUndef(e.defaults) || (i = Object.keys(e.defaults)),
                !t.isUndef(e._super))
                    for (var n = this._collectDefaults(e._super), o = 0; o < n.length; o++)
                        -1 === i.indexOf(n[o]) && i.push(n[o]);
                return i
            }
            ,
            t.defaults = function(e, i, n) {
                var o = {};
                if (1 === e.length && t.isObject(e[0]))
                    o = e[0];
                else
                    for (var r = 0; r < i.length; r++)
                        o[i[r]] = e[r];
                return t.isUndef(n.defaults) ? t.isObject(n) ? t.defaultArg(o, n) : o : t.defaultArg(o, n.defaults)
            }
            ,
            t.defaultArg = function(e, i) {
                if (t.isObject(e) && t.isObject(i)) {
                    var n = {};
                    for (var o in e)
                        n[o] = t.defaultArg(i[o], e[o]);
                    for (var r in i)
                        n[r] = t.defaultArg(e[r], i[r]);
                    return n
                }
                return t.isUndef(e) ? i : e
            }
            ,
            t.connectSeries = function() {
                for (var e = arguments[0], i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    e.connect(n),
                    e = n
                }
                return t
            }
            ,
            t.isUndef = function(t) {
                return void 0 === t
            }
            ,
            t.isFunction = function(t) {
                return "function" == typeof t
            }
            ,
            t.isNumber = function(t) {
                return "number" == typeof t
            }
            ,
            t.isObject = function(t) {
                return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
            }
            ,
            t.isBoolean = function(t) {
                return "boolean" == typeof t
            }
            ,
            t.isArray = function(t) {
                return Array.isArray(t)
            }
            ,
            t.isString = function(t) {
                return "string" == typeof t
            }
            ,
            t.isNote = function(e) {
                return t.isString(e) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(e)
            }
            ,
            t.noOp = function() {}
            ,
            t.prototype._readOnly = function(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++)
                        this._readOnly(t[e]);
                else
                    Object.defineProperty(this, t, {
                        writable: !1,
                        enumerable: !0
                    })
            }
            ,
            t.prototype._writable = function(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++)
                        this._writable(t[e]);
                else
                    Object.defineProperty(this, t, {
                        writable: !0
                    })
            }
            ,
            t.State = {
                Started: "started",
                Stopped: "stopped",
                Paused: "paused"
            },
            t.equalPowerScale = function(t) {
                var e = .5 * Math.PI;
                return Math.sin(t * e)
            }
            ,
            t.dbToGain = function(t) {
                return Math.pow(2, t / 6)
            }
            ,
            t.gainToDb = function(t) {
                return Math.log(t) / Math.LN10 * 20
            }
            ,
            t.intervalToFrequencyRatio = function(t) {
                return Math.pow(2, t / 12)
            }
            ,
            t.prototype.now = function() {
                return t.context.now()
            }
            ,
            t.now = function() {
                return t.context.now()
            }
            ,
            t.isPast = function(e) {
                e < t.context.currentTime && console.warn("Time '" + e + "' is in the past. Scheduled time must be ≥ AudioContext.currentTime")
            }
            ,
            t.extend = function(e, i) {
                function n() {}
                t.isUndef(i) && (i = t),
                n.prototype = i.prototype,
                e.prototype = new n,
                e.prototype.constructor = e,
                e._super = i
            }
            ,
            Object.defineProperty(t, "context", {
                get: function() {
                    return window.TONE_AUDIO_CONTEXT
                },
                set: function(e) {
                    window.TONE_AUDIO_CONTEXT = t.Context && e instanceof t.Context ? e : new t.Context(e),
                    t.Context.emit("init", window.TONE_AUDIO_CONTEXT)
                }
            }),
            Object.defineProperty(t.prototype, "context", {
                get: function() {
                    return t.context
                }
            }),
            t.setContext = function(e) {
                t.context = e
            }
            ,
            Object.defineProperty(t.prototype, "blockTime", {
                get: function() {
                    return 128 / this.context.sampleRate
                }
            }),
            Object.defineProperty(t.prototype, "sampleTime", {
                get: function() {
                    return 1 / this.context.sampleRate
                }
            }),
            Object.defineProperty(t, "supported", {
                get: function() {
                    var t = window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext")
                      , e = window.hasOwnProperty("Promise")
                      , i = window.hasOwnProperty("Worker");
                    return t && e && i
                }
            }),
            Object.defineProperty(t, "initialized", {
                get: function() {
                    return !t.isUndef(window.TONE_AUDIO_CONTEXT)
                }
            }),
            t.getContext = function(e) {
                if (t.initialized)
                    e(t.context);
                else {
                    var i = function() {
                        e(t.context),
                        t.Context.off("init", i)
                    };
                    t.Context.on("init", i)
                }
                return t
            }
            ,
            t.version = "r12-dev",
            t
        }),
        t(function(t) {
            return t.Emitter = function() {
                t.call(this),
                this._events = {}
            }
            ,
            t.extend(t.Emitter),
            t.Emitter.prototype.on = function(t, e) {
                for (var i = t.split(/\W+/), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this._events.hasOwnProperty(o) || (this._events[o] = []),
                    this._events[o].push(e)
                }
                return this
            }
            ,
            t.Emitter.prototype.off = function(e, i) {
                for (var n = e.split(/\W+/), o = 0; o < n.length; o++)
                    if (e = n[o],
                    this._events.hasOwnProperty(e))
                        if (t.isUndef(i))
                            this._events[e] = [];
                        else
                            for (var r = this._events[e], s = 0; s < r.length; s++)
                                r[s] === i && r.splice(s, 1);
                return this
            }
            ,
            t.Emitter.prototype.emit = function(t) {
                if (this._events) {
                    var e = Array.apply(null, arguments).slice(1);
                    if (this._events.hasOwnProperty(t))
                        for (var i = this._events[t], n = 0, o = i.length; n < o; n++)
                            i[n].apply(this, e)
                }
                return this
            }
            ,
            t.Emitter.mixin = function(e) {
                var i = ["on", "off", "emit"];
                e._events = {};
                for (var n = 0; n < i.length; n++) {
                    var o = i[n]
                      , r = t.Emitter.prototype[o];
                    e[o] = r
                }
                return t.Emitter
            }
            ,
            t.Emitter.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this._events = null,
                this
            }
            ,
            t.Emitter
        }),
        t(function(t) {
            return t.Timeline = function() {
                var e = t.defaults(arguments, ["memory"], t.Timeline);
                t.call(this),
                this._timeline = [],
                this._toRemove = [],
                this._toAdd = [],
                this._iterating = !1,
                this.memory = e.memory
            }
            ,
            t.extend(t.Timeline),
            t.Timeline.defaults = {
                memory: 1 / 0
            },
            Object.defineProperty(t.Timeline.prototype, "length", {
                get: function() {
                    return this._timeline.length
                }
            }),
            t.Timeline.prototype.add = function(e) {
                if (t.isUndef(e.time))
                    throw new Error("Tone.Timeline: events must have a time attribute");
                if (this._iterating)
                    this._toAdd.push(e);
                else {
                    var i = this._search(e.time);
                    if (this._timeline.splice(i + 1, 0, e),
                    this.length > this.memory) {
                        var n = this.length - this.memory;
                        this._timeline.splice(0, n)
                    }
                }
                return this
            }
            ,
            t.Timeline.prototype.remove = function(t) {
                if (this._iterating)
                    this._toRemove.push(t);
                else {
                    var e = this._timeline.indexOf(t);
                    -1 !== e && this._timeline.splice(e, 1)
                }
                return this
            }
            ,
            t.Timeline.prototype.get = function(e, i) {
                i = t.defaultArg(i, "time");
                var n = this._search(e, i);
                return -1 !== n ? this._timeline[n] : null
            }
            ,
            t.Timeline.prototype.peek = function() {
                return this._timeline[0]
            }
            ,
            t.Timeline.prototype.shift = function() {
                return this._timeline.shift()
            }
            ,
            t.Timeline.prototype.getAfter = function(e, i) {
                i = t.defaultArg(i, "time");
                var n = this._search(e, i);
                return n + 1 < this._timeline.length ? this._timeline[n + 1] : null
            }
            ,
            t.Timeline.prototype.getBefore = function(e, i) {
                i = t.defaultArg(i, "time");
                var n = this._timeline.length;
                if (n > 0 && this._timeline[n - 1][i] < e)
                    return this._timeline[n - 1];
                var o = this._search(e, i);
                return o - 1 >= 0 ? this._timeline[o - 1] : null
            }
            ,
            t.Timeline.prototype.cancel = function(t) {
                if (this._timeline.length > 1) {
                    var e = this._search(t);
                    if (e >= 0)
                        if (this._timeline[e].time === t) {
                            for (var i = e; i >= 0 && this._timeline[i].time === t; i--)
                                e = i;
                            this._timeline = this._timeline.slice(0, e)
                        } else
                            this._timeline = this._timeline.slice(0, e + 1);
                    else
                        this._timeline = []
                } else
                    1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
                return this
            }
            ,
            t.Timeline.prototype.cancelBefore = function(t) {
                var e = this._search(t);
                return e >= 0 && (this._timeline = this._timeline.slice(e + 1)),
                this
            }
            ,
            t.Timeline.prototype.previousEvent = function(t) {
                var e = this._timeline.indexOf(t);
                return e > 0 ? this._timeline[e - 1] : null
            }
            ,
            t.Timeline.prototype._search = function(e, i) {
                if (0 === this._timeline.length)
                    return -1;
                i = t.defaultArg(i, "time");
                var n = 0
                  , o = this._timeline.length
                  , r = o;
                if (o > 0 && this._timeline[o - 1][i] <= e)
                    return o - 1;
                for (; n < r; ) {
                    var s = Math.floor(n + (r - n) / 2)
                      , a = this._timeline[s]
                      , u = this._timeline[s + 1];
                    if (a[i] === e) {
                        for (var l = s; l < this._timeline.length; l++) {
                            this._timeline[l][i] === e && (s = l)
                        }
                        return s
                    }
                    if (a[i] < e && u[i] > e)
                        return s;
                    a[i] > e ? r = s : n = s + 1
                }
                return -1
            }
            ,
            t.Timeline.prototype._iterate = function(e, i, n) {
                this._iterating = !0,
                i = t.defaultArg(i, 0),
                n = t.defaultArg(n, this._timeline.length - 1);
                for (var o = i; o <= n; o++)
                    e.call(this, this._timeline[o]);
                this._iterating = !1,
                this._toRemove.forEach(function(t) {
                    this.remove(t)
                }
                .bind(this)),
                this._toRemove = [],
                this._toAdd.forEach(function(t) {
                    this.add(t)
                }
                .bind(this)),
                this._toAdd = []
            }
            ,
            t.Timeline.prototype.forEach = function(t) {
                return this._iterate(t),
                this
            }
            ,
            t.Timeline.prototype.forEachBefore = function(t, e) {
                var i = this._search(t);
                return -1 !== i && this._iterate(e, 0, i),
                this
            }
            ,
            t.Timeline.prototype.forEachAfter = function(t, e) {
                var i = this._search(t);
                return this._iterate(e, i + 1),
                this
            }
            ,
            t.Timeline.prototype.forEachFrom = function(t, e) {
                for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t; )
                    i--;
                return this._iterate(e, i + 1),
                this
            }
            ,
            t.Timeline.prototype.forEachAtTime = function(t, e) {
                var i = this._search(t);
                return -1 !== i && this._iterate(function(i) {
                    i.time === t && e.call(this, i)
                }, 0, i),
                this
            }
            ,
            t.Timeline.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this._timeline = null,
                this._toRemove = null,
                this._toAdd = null,
                this
            }
            ,
            t.Timeline
        }),
        t(function(t) {
            !window.hasOwnProperty("AudioContext") && window.hasOwnProperty("webkitAudioContext") && (window.AudioContext = window.webkitAudioContext),
            t.Context = function() {
                t.Emitter.call(this);
                var i = t.defaults(arguments, ["context"], t.Context);
                i.context || (i.context = new window.AudioContext),
                this._context = i.context;
                for (var n in this._context)
                    this._defineProperty(this._context, n);
                this._latencyHint = i.latencyHint,
                this._constants = {},
                this.lookAhead = i.lookAhead,
                this._computedUpdateInterval = 0,
                this._ticker = new e(this.emit.bind(this, "tick"),i.clockSource,i.updateInterval),
                this._timeouts = new t.Timeline,
                this._timeoutIds = 0,
                this.on("tick", this._timeoutLoop.bind(this))
            }
            ,
            t.extend(t.Context, t.Emitter),
            t.Emitter.mixin(t.Context),
            t.Context.defaults = {
                clockSource: "worker",
                latencyHint: "interactive",
                lookAhead: .1,
                updateInterval: .03
            },
            t.Context.prototype._defineProperty = function(e, i) {
                t.isUndef(this[i]) && Object.defineProperty(this, i, {
                    get: function() {
                        return "function" == typeof e[i] ? e[i].bind(e) : e[i]
                    },
                    set: function(t) {
                        e[i] = t
                    }
                })
            }
            ,
            t.Context.prototype.now = function() {
                return this._context.currentTime + this.lookAhead
            }
            ,
            t.Context.prototype.getConstant = function(t) {
                if (this._constants[t])
                    return this._constants[t];
                for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++)
                    i[n] = t;
                var o = this._context.createBufferSource();
                return o.channelCount = 1,
                o.channelCountMode = "explicit",
                o.buffer = e,
                o.loop = !0,
                o.start(0),
                this._constants[t] = o,
                o
            }
            ,
            t.Context.prototype._timeoutLoop = function() {
                for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t; )
                    this._timeouts.shift().callback()
            }
            ,
            t.Context.prototype.setTimeout = function(t, e) {
                this._timeoutIds++;
                var i = this.now();
                return this._timeouts.add({
                    callback: t,
                    time: i + e,
                    id: this._timeoutIds
                }),
                this._timeoutIds
            }
            ,
            t.Context.prototype.clearTimeout = function(t) {
                return this._timeouts.forEach(function(e) {
                    e.id === t && this.remove(e)
                }),
                this
            }
            ,
            Object.defineProperty(t.Context.prototype, "updateInterval", {
                get: function() {
                    return this._ticker.updateInterval
                },
                set: function(t) {
                    this._ticker.updateInterval = t
                }
            }),
            Object.defineProperty(t.Context.prototype, "clockSource", {
                get: function() {
                    return this._ticker.type
                },
                set: function(t) {
                    this._ticker.type = t
                }
            }),
            Object.defineProperty(t.Context.prototype, "latencyHint", {
                get: function() {
                    return this._latencyHint
                },
                set: function(e) {
                    var i = e;
                    if (this._latencyHint = e,
                    t.isString(e))
                        switch (e) {
                        case "interactive":
                            i = .1,
                            this._context.latencyHint = e;
                            break;
                        case "playback":
                            i = .8,
                            this._context.latencyHint = e;
                            break;
                        case "balanced":
                            i = .25,
                            this._context.latencyHint = e;
                            break;
                        case "fastest":
                            this._context.latencyHint = "interactive",
                            i = .01
                        }
                    this.lookAhead = i,
                    this.updateInterval = i / 3
                }
            }),
            t.Context.prototype.dispose = function() {
                t.Context.emit("close", this),
                t.Emitter.prototype.dispose.call(this),
                this._ticker.dispose(),
                this._ticker = null,
                this._timeouts.dispose(),
                this._timeouts = null;
                for (var e in this._constants)
                    this._constants[e].disconnect();
                return this._constants = null,
                this.close(),
                this
            }
            ;
            var e = function(e, i, n) {
                this._type = i,
                this._updateInterval = n,
                this._callback = t.defaultArg(e, t.noOp),
                this._createClock()
            };
            return e.Type = {
                Worker: "worker",
                Timeout: "timeout",
                Offline: "offline"
            },
            e.prototype._createWorker = function() {
                window.URL = window.URL || window.webkitURL;
                var t = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"])
                  , e = URL.createObjectURL(t)
                  , i = new Worker(e);
                i.onmessage = this._callback.bind(this),
                this._worker = i
            }
            ,
            e.prototype._createTimeout = function() {
                this._timeout = setTimeout(function() {
                    this._createTimeout(),
                    this._callback()
                }
                .bind(this), 1e3 * this._updateInterval)
            }
            ,
            e.prototype._createClock = function() {
                if (this._type === e.Type.Worker)
                    try {
                        this._createWorker()
                    } catch (t) {
                        this._type = e.Type.Timeout,
                        this._createClock()
                    }
                else
                    this._type === e.Type.Timeout && this._createTimeout()
            }
            ,
            Object.defineProperty(e.prototype, "updateInterval", {
                get: function() {
                    return this._updateInterval
                },
                set: function(t) {
                    this._updateInterval = Math.max(t, 128 / 44100),
                    this._type === e.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1))
                }
            }),
            Object.defineProperty(e.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    this._disposeClock(),
                    this._type = t,
                    this._createClock()
                }
            }),
            e.prototype._disposeClock = function() {
                this._timeout && (clearTimeout(this._timeout),
                this._timeout = null),
                this._worker && (this._worker.terminate(),
                this._worker.onmessage = null,
                this._worker = null)
            }
            ,
            e.prototype.dispose = function() {
                this._disposeClock(),
                this._callback = null
            }
            ,
            t.getContext(function() {
                function e(e, i, o) {
                    if (e.input)
                        o = t.defaultArg(o, 0),
                        t.isArray(e.input) ? this.connect(e.input[o]) : this.connect(e.input, i, o);
                    else
                        try {
                            e instanceof AudioNode ? n.call(this, e, i, o) : n.call(this, e, i)
                        } catch (t) {
                            throw new Error("error connecting to node: " + e + "\n" + t)
                        }
                }
                function i(e, i, n) {
                    if (e && e.input && t.isArray(e.input))
                        n = t.defaultArg(n, 0),
                        this.disconnect(e.input[n], i, 0);
                    else if (e && e.input)
                        this.disconnect(e.input, i, n);
                    else
                        try {
                            o.apply(this, arguments)
                        } catch (t) {
                            throw new Error("error disconnecting node: " + e + "\n" + t)
                        }
                }
                var n = AudioNode.prototype.connect
                  , o = AudioNode.prototype.disconnect;
                AudioNode.prototype.connect !== e && (AudioNode.prototype.connect = e,
                AudioNode.prototype.disconnect = i)
            }),
            t.supported && !t.initialized ? (t.context = new t.Context,
            window.TONE_SILENCE_VERSION_LOGGING || console.log("%c * Tone.js " + t.version + " * ", "background: #000; color: #fff")) : t.supported || console.warn("This browser does not support Tone.js"),
            t.Context
        }),
        t(function(t) {
            return t.AudioNode = function() {
                t.call(this);
                var e = t.defaults(arguments, ["context"], {
                    context: t.context
                });
                this._context = e.context
            }
            ,
            t.extend(t.AudioNode),
            Object.defineProperty(t.AudioNode.prototype, "context", {
                get: function() {
                    return this._context
                }
            }),
            t.AudioNode.prototype.createInsOuts = function(t, e) {
                1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)),
                1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e))
            }
            ,
            Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
                get: function() {
                    return this.input ? t.isArray(this.input) ? this.input.length : 1 : 0
                }
            }),
            Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
                get: function() {
                    return this.output ? t.isArray(this.output) ? this.output.length : 1 : 0
                }
            }),
            t.AudioNode.prototype.connect = function(e, i, n) {
                return t.isArray(this.output) ? (i = t.defaultArg(i, 0),
                this.output[i].connect(e, 0, n)) : this.output.connect(e, i, n),
                this
            }
            ,
            t.AudioNode.prototype.disconnect = function(e, i, n) {
                t.isArray(this.output) ? t.isNumber(e) ? this.output[e].disconnect() : (i = t.defaultArg(i, 0),
                this.output[i].disconnect(e, 0, n)) : this.output.disconnect.apply(this.output, arguments)
            }
            ,
            t.AudioNode.prototype.chain = function() {
                for (var t = this, e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    t.connect(i),
                    t = i
                }
                return this
            }
            ,
            t.AudioNode.prototype.fan = function() {
                for (var t = 0; t < arguments.length; t++)
                    this.connect(arguments[t]);
                return this
            }
            ,
            window.AudioNode && (AudioNode.prototype.chain = t.AudioNode.prototype.chain,
            AudioNode.prototype.fan = t.AudioNode.prototype.fan),
            t.AudioNode.prototype.dispose = function() {
                return t.isUndef(this.input) || (this.input instanceof AudioNode && this.input.disconnect(),
                this.input = null),
                t.isUndef(this.output) || (this.output instanceof AudioNode && this.output.disconnect(),
                this.output = null),
                this._context = null,
                this
            }
            ,
            t.AudioNode
        }),
        t(function(t) {
            return t.SignalBase = function() {
                t.AudioNode.call(this)
            }
            ,
            t.extend(t.SignalBase, t.AudioNode),
            t.SignalBase.prototype.connect = function(e, i, n) {
                return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor || t.TimelineSignal && t.TimelineSignal === e.constructor ? (e._param.cancelScheduledValues(0),
                e._param.value = 0,
                e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0),
                e.value = 0),
                t.AudioNode.prototype.connect.call(this, e, i, n),
                this
            }
            ,
            t.SignalBase
        }),
        t(function(t) {
            return t.WaveShaper = function(e, i) {
                t.SignalBase.call(this),
                this._shaper = this.input = this.output = this.context.createWaveShaper(),
                this._curve = null,
                Array.isArray(e) ? this.curve = e : isFinite(e) || t.isUndef(e) ? this._curve = new Float32Array(t.defaultArg(e, 1024)) : t.isFunction(e) && (this._curve = new Float32Array(t.defaultArg(i, 1024)),
                this.setMap(e))
            }
            ,
            t.extend(t.WaveShaper, t.SignalBase),
            t.WaveShaper.prototype.setMap = function(t) {
                for (var e = 0, i = this._curve.length; e < i; e++) {
                    var n = e / (i - 1) * 2 - 1;
                    this._curve[e] = t(n, e)
                }
                return this._shaper.curve = this._curve,
                this
            }
            ,
            Object.defineProperty(t.WaveShaper.prototype, "curve", {
                get: function() {
                    return this._shaper.curve
                },
                set: function(t) {
                    this._curve = new Float32Array(t),
                    this._shaper.curve = this._curve
                }
            }),
            Object.defineProperty(t.WaveShaper.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    if (-1 === ["none", "2x", "4x"].indexOf(t))
                        throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                    this._shaper.oversample = t
                }
            }),
            t.WaveShaper.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._shaper.disconnect(),
                this._shaper = null,
                this._curve = null,
                this
            }
            ,
            t.WaveShaper
        }),
        t(function(t) {
            return t.TimeBase = function(e, i) {
                if (!(this instanceof t.TimeBase))
                    return new t.TimeBase(e,i);
                if (this._expr = this._noOp,
                e instanceof t.TimeBase)
                    this.copy(e);
                else if (!t.isUndef(i) || t.isNumber(e)) {
                    i = t.defaultArg(i, this._defaultUnits);
                    var n = this._primaryExpressions[i].method;
                    this._expr = n.bind(this, e)
                } else
                    t.isString(e) ? this.set(e) : t.isUndef(e) && (this._expr = this._defaultExpr())
            }
            ,
            t.extend(t.TimeBase),
            t.TimeBase.prototype.set = function(t) {
                return this._expr = this._parseExprString(t),
                this
            }
            ,
            t.TimeBase.prototype.clone = function() {
                var t = new this.constructor;
                return t.copy(this),
                t
            }
            ,
            t.TimeBase.prototype.copy = function(t) {
                var e = t._expr();
                return this.set(e)
            }
            ,
            t.TimeBase.prototype._primaryExpressions = {
                n: {
                    regexp: /^(\d+)n/i,
                    method: function(t) {
                        return t = parseInt(t),
                        1 === t ? this._beatsToUnits(this._timeSignature()) : this._beatsToUnits(4 / t)
                    }
                },
                t: {
                    regexp: /^(\d+)t/i,
                    method: function(t) {
                        return t = parseInt(t),
                        this._beatsToUnits(8 / (3 * parseInt(t)))
                    }
                },
                m: {
                    regexp: /^(\d+)m/i,
                    method: function(t) {
                        return this._beatsToUnits(parseInt(t) * this._timeSignature())
                    }
                },
                i: {
                    regexp: /^(\d+)i/i,
                    method: function(t) {
                        return this._ticksToUnits(parseInt(t))
                    }
                },
                hz: {
                    regexp: /^(\d+(?:\.\d+)?)hz/i,
                    method: function(t) {
                        return this._frequencyToUnits(parseFloat(t))
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method: function(t, e, i) {
                        var n = 0;
                        return t && "0" !== t && (n += this._beatsToUnits(this._timeSignature() * parseFloat(t))),
                        e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
                        i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)),
                        n
                    }
                },
                s: {
                    regexp: /^(\d+(?:\.\d+)?s)/,
                    method: function(t) {
                        return this._secondsToUnits(parseFloat(t))
                    }
                },
                samples: {
                    regexp: /^(\d+)samples/,
                    method: function(t) {
                        return parseInt(t) / this.context.sampleRate
                    }
                },
                default: {
                    regexp: /^(\d+(?:\.\d+)?)/,
                    method: function(t) {
                        return this._primaryExpressions[this._defaultUnits].method.call(this, t)
                    }
                }
            },
            t.TimeBase.prototype._binaryExpressions = {
                "+": {
                    regexp: /^\+/,
                    precedence: 2,
                    method: function(t, e) {
                        return t() + e()
                    }
                },
                "-": {
                    regexp: /^\-/,
                    precedence: 2,
                    method: function(t, e) {
                        return t() - e()
                    }
                },
                "*": {
                    regexp: /^\*/,
                    precedence: 1,
                    method: function(t, e) {
                        return t() * e()
                    }
                },
                "/": {
                    regexp: /^\//,
                    precedence: 1,
                    method: function(t, e) {
                        return t() / e()
                    }
                }
            },
            t.TimeBase.prototype._unaryExpressions = {
                neg: {
                    regexp: /^\-/,
                    method: function(t) {
                        return -t()
                    }
                }
            },
            t.TimeBase.prototype._syntaxGlue = {
                "(": {
                    regexp: /^\(/
                },
                ")": {
                    regexp: /^\)/
                }
            },
            t.TimeBase.prototype._tokenize = function(t) {
                for (var e = -1, i = []; t.length > 0; ) {
                    t = t.trim();
                    var n = function(t, e) {
                        for (var i = ["_binaryExpressions", "_unaryExpressions", "_primaryExpressions", "_syntaxGlue"], n = 0; n < i.length; n++) {
                            var o = e[i[n]];
                            for (var r in o) {
                                var s = o[r]
                                  , a = s.regexp
                                  , u = t.match(a);
                                if (null !== u)
                                    return {
                                        method: s.method,
                                        precedence: s.precedence,
                                        regexp: s.regexp,
                                        value: u[0]
                                    }
                            }
                        }
                        throw new SyntaxError("Tone.TimeBase: Unexpected token " + t)
                    }(t, this);
                    i.push(n),
                    t = t.substr(n.value.length)
                }
                return {
                    next: function() {
                        return i[++e]
                    },
                    peek: function() {
                        return i[e + 1]
                    }
                }
            }
            ,
            t.TimeBase.prototype._matchGroup = function(e, i, n) {
                if (!t.isUndef(e))
                    for (var o in i) {
                        var r = i[o];
                        if (r.regexp.test(e.value)) {
                            if (t.isUndef(n))
                                return r;
                            if (r.precedence === n)
                                return r
                        }
                    }
                return !1
            }
            ,
            t.TimeBase.prototype._parseBinary = function(e, i) {
                t.isUndef(i) && (i = 2);
                var n;
                n = i < 0 ? this._parseUnary(e) : this._parseBinary(e, i - 1);
                for (var o = e.peek(); o && this._matchGroup(o, this._binaryExpressions, i); )
                    o = e.next(),
                    n = o.method.bind(this, n, this._parseBinary(e, i - 1)),
                    o = e.peek();
                return n
            }
            ,
            t.TimeBase.prototype._parseUnary = function(t) {
                var e, i;
                e = t.peek();
                var n = this._matchGroup(e, this._unaryExpressions);
                return n ? (e = t.next(),
                i = this._parseUnary(t),
                n.method.bind(this, i)) : this._parsePrimary(t)
            }
            ,
            t.TimeBase.prototype._parsePrimary = function(e) {
                var i, n;
                if (i = e.peek(),
                t.isUndef(i))
                    throw new SyntaxError("Tone.TimeBase: Unexpected end of expression");
                if (this._matchGroup(i, this._primaryExpressions)) {
                    i = e.next();
                    var o = i.value.match(i.regexp);
                    return i.method.bind(this, o[1], o[2], o[3])
                }
                if (i && "(" === i.value) {
                    if (e.next(),
                    n = this._parseBinary(e),
                    !(i = e.next()) || ")" !== i.value)
                        throw new SyntaxError("Expected )");
                    return n
                }
                throw new SyntaxError("Tone.TimeBase: Cannot process token " + i.value)
            }
            ,
            t.TimeBase.prototype._parseExprString = function(e) {
                t.isString(e) || (e = e.toString());
                var i = this._tokenize(e);
                return this._parseBinary(i)
            }
            ,
            t.TimeBase.prototype._noOp = function() {
                return 0
            }
            ,
            t.TimeBase.prototype._defaultExpr = function() {
                return this._noOp
            }
            ,
            t.TimeBase.prototype._defaultUnits = "s",
            t.TimeBase.prototype._frequencyToUnits = function(t) {
                return 1 / t
            }
            ,
            t.TimeBase.prototype._beatsToUnits = function(e) {
                return tempo / t.Transport.bpm.value * e
            }
            ,
            t.TimeBase.prototype._secondsToUnits = function(t) {
                return t
            }
            ,
            t.TimeBase.prototype._ticksToUnits = function(e) {
                return e * (this._beatsToUnits(1) / t.Transport.PPQ)
            }
            ,
            t.TimeBase.prototype._timeSignature = function() {
                return t.Transport.timeSignature
            }
            ,
            t.TimeBase.prototype._pushExpr = function(e, i, n) {
                return e instanceof t.TimeBase || (e = new this.constructor(e,n)),
                this._expr = this._binaryExpressions[i].method.bind(this, this._expr, e._expr),
                this
            }
            ,
            t.TimeBase.prototype.add = function(t, e) {
                return this._pushExpr(t, "+", e)
            }
            ,
            t.TimeBase.prototype.sub = function(t, e) {
                return this._pushExpr(t, "-", e)
            }
            ,
            t.TimeBase.prototype.mult = function(t, e) {
                return this._pushExpr(t, "*", e)
            }
            ,
            t.TimeBase.prototype.div = function(t, e) {
                return this._pushExpr(t, "/", e)
            }
            ,
            t.TimeBase.prototype.valueOf = function() {
                return this._expr()
            }
            ,
            t.TimeBase.prototype.dispose = function() {
                this._expr = null
            }
            ,
            t.TimeBase
        }),
        t(function(t) {
            return t.Time = function(e, i) {
                if (!(this instanceof t.Time))
                    return new t.Time(e,i);
                this._plusNow = !1,
                t.TimeBase.call(this, e, i)
            }
            ,
            t.extend(t.Time, t.TimeBase),
            t.Time.prototype._unaryExpressions = Object.create(t.TimeBase.prototype._unaryExpressions),
            t.Time.prototype._unaryExpressions.quantize = {
                regexp: /^@/,
                method: function(e) {
                    return t.Transport.nextSubdivision(e())
                }
            },
            t.Time.prototype._unaryExpressions.now = {
                regexp: /^\+/,
                method: function(t) {
                    return this._plusNow = !0,
                    t()
                }
            },
            t.Time.prototype.quantize = function(e, i) {
                return i = t.defaultArg(i, 1),
                this._expr = function(t, e, i) {
                    return t = t(),
                    e = e.toSeconds(),
                    t + (Math.round(t / e) * e - t) * i
                }
                .bind(this, this._expr, new this.constructor(e), i),
                this
            }
            ,
            t.Time.prototype.addNow = function() {
                return this._plusNow = !0,
                this
            }
            ,
            t.Time.prototype._defaultExpr = function() {
                return this._plusNow = !0,
                this._noOp
            }
            ,
            t.Time.prototype.copy = function(e) {
                return t.TimeBase.prototype.copy.call(this, e),
                this._plusNow = e._plusNow,
                this
            }
            ,
            t.Time.prototype.toNotation = function() {
                var t = this.toSeconds()
                  , e = ["1m", "2n", "4n", "8n", "16n", "32n", "64n", "128n"]
                  , i = this._toNotationHelper(t, e)
                  , n = ["1m", "2n", "2t", "4n", "4t", "8n", "8t", "16n", "16t", "32n", "32t", "64n", "64t", "128n"]
                  , o = this._toNotationHelper(t, n);
                return o.split("+").length < i.split("+").length ? o : i
            }
            ,
            t.Time.prototype._toNotationHelper = function(t, e) {
                for (var i = this._notationToUnits(e[e.length - 1]), n = "", o = 0; o < e.length; o++) {
                    var r = this._notationToUnits(e[o])
                      , s = t / r;
                    if (1 - s % 1 < 1e-6 && (s += 1e-6),
                    (s = Math.floor(s)) > 0) {
                        if (n += 1 === s ? e[o] : s.toString() + "*" + e[o],
                        (t -= s * r) < i)
                            break;
                        n += " + "
                    }
                }
                return "" === n && (n = "0"),
                n
            }
            ,
            t.Time.prototype._notationToUnits = function(t) {
                for (var e = this._primaryExpressions, i = [e.n, e.t, e.m], n = 0; n < i.length; n++) {
                    var o = i[n]
                      , r = t.match(o.regexp);
                    if (r)
                        return o.method.call(this, r[1])
                }
            }
            ,
            t.Time.prototype.toBarsBeatsSixteenths = function() {
                var t = this._beatsToUnits(1)
                  , e = this.toSeconds() / t
                  , i = Math.floor(e / this._timeSignature())
                  , n = e % 1 * 4;
                return e = Math.floor(e) % this._timeSignature(),
                n = n.toString(),
                n.length > 3 && (n = parseFloat(parseFloat(n).toFixed(3))),
                [i, e, n].join(":")
            }
            ,
            t.Time.prototype.toTicks = function() {
                var e = this._beatsToUnits(1)
                  , i = this.valueOf() / e;
                return Math.round(i * t.Transport.PPQ)
            }
            ,
            t.Time.prototype.toSamples = function() {
                return this.toSeconds() * this.context.sampleRate
            }
            ,
            t.Time.prototype.toFrequency = function() {
                return 1 / this.toSeconds()
            }
            ,
            t.Time.prototype.toSeconds = function() {
                return this.valueOf()
            }
            ,
            t.Time.prototype.toMilliseconds = function() {
                return 1e3 * this.toSeconds()
            }
            ,
            t.Time.prototype.valueOf = function() {
                return this._expr() + (this._plusNow ? this.now() : 0)
            }
            ,
            t.Time
        }),
        t(function(t) {
            t.Frequency = function(e, i) {
                if (!(this instanceof t.Frequency))
                    return new t.Frequency(e,i);
                t.TimeBase.call(this, e, i)
            }
            ,
            t.extend(t.Frequency, t.TimeBase),
            t.Frequency.prototype._primaryExpressions = Object.create(t.TimeBase.prototype._primaryExpressions),
            t.Frequency.prototype._primaryExpressions.midi = {
                regexp: /^(\d+(?:\.\d+)?midi)/,
                method: function(t) {
                    return this.midiToFrequency(t)
                }
            },
            t.Frequency.prototype._primaryExpressions.note = {
                regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                method: function(t, i) {
                    var n = e[t.toLowerCase()]
                      , o = n + 12 * (parseInt(i) + 1);
                    return this.midiToFrequency(o)
                }
            },
            t.Frequency.prototype._primaryExpressions.tr = {
                regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                method: function(t, e, i) {
                    var n = 1;
                    return t && "0" !== t && (n *= this._beatsToUnits(this._timeSignature() * parseFloat(t))),
                    e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))),
                    i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)),
                    n
                }
            },
            t.Frequency.prototype.transpose = function(e) {
                return this._expr = function(e, i) {
                    return e() * t.intervalToFrequencyRatio(i)
                }
                .bind(this, this._expr, e),
                this
            }
            ,
            t.Frequency.prototype.harmonize = function(e) {
                return this._expr = function(e, i) {
                    for (var n = e(), o = [], r = 0; r < i.length; r++)
                        o[r] = n * t.intervalToFrequencyRatio(i[r]);
                    return o
                }
                .bind(this, this._expr, e),
                this
            }
            ,
            t.Frequency.prototype.toMidi = function() {
                return this.frequencyToMidi(this.valueOf())
            }
            ,
            t.Frequency.prototype.toNote = function() {
                var e = this.valueOf()
                  , n = Math.log(e / t.Frequency.A4) / Math.LN2
                  , o = Math.round(12 * n) + 57
                  , r = Math.floor(o / 12);
                return r < 0 && (o += -12 * r),
                i[o % 12] + r.toString()
            }
            ,
            t.Frequency.prototype.toSeconds = function() {
                return 1 / this.valueOf()
            }
            ,
            t.Frequency.prototype.toFrequency = function() {
                return this.valueOf()
            }
            ,
            t.Frequency.prototype.toTicks = function() {
                var e = this._beatsToUnits(1)
                  , i = this.valueOf() / e;
                return Math.floor(i * t.Transport.PPQ)
            }
            ,
            t.Frequency.prototype._frequencyToUnits = function(t) {
                return t
            }
            ,
            t.Frequency.prototype._ticksToUnits = function(e) {
                return 1 / (60 * e / (t.Transport.bpm.value * t.Transport.PPQ))
            }
            ,
            t.Frequency.prototype._beatsToUnits = function(e) {
                return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e)
            }
            ,
            t.Frequency.prototype._secondsToUnits = function(t) {
                return 1 / t
            }
            ,
            t.Frequency.prototype._defaultUnits = "hz";
            var e = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            }
              , i = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
            return t.Frequency.A4 = 440,
            t.Frequency.prototype.midiToFrequency = function(e) {
                return t.Frequency.A4 * Math.pow(2, (e - 69) / 12)
            }
            ,
            t.Frequency.prototype.frequencyToMidi = function(e) {
                return 69 + Math.round(12 * Math.log(e / t.Frequency.A4) / Math.LN2)
            }
            ,
            t.Frequency
        }),
        t(function(t) {
            return t.TransportTime = function(e, i) {
                if (!(this instanceof t.TransportTime))
                    return new t.TransportTime(e,i);
                t.Time.call(this, e, i)
            }
            ,
            t.extend(t.TransportTime, t.Time),
            t.TransportTime.prototype._unaryExpressions = Object.create(t.Time.prototype._unaryExpressions),
            t.TransportTime.prototype._unaryExpressions.quantize = {
                regexp: /^@/,
                method: function(e) {
                    var i = this._secondsToTicks(e())
                      , n = Math.ceil(t.Transport.ticks / i);
                    return this._ticksToUnits(n * i)
                }
            },
            t.TransportTime.prototype._secondsToTicks = function(e) {
                var i = this._beatsToUnits(1)
                  , n = e / i;
                return Math.round(n * t.Transport.PPQ)
            }
            ,
            t.TransportTime.prototype.valueOf = function() {
                return this._secondsToTicks(this._expr()) + (this._plusNow ? t.Transport.ticks : 0)
            }
            ,
            t.TransportTime.prototype.toTicks = function() {
                return this.valueOf()
            }
            ,
            t.TransportTime.prototype.toSeconds = function() {
                return this._expr() + (this._plusNow ? t.Transport.seconds : 0)
            }
            ,
            t.TransportTime.prototype.toFrequency = function() {
                return 1 / this.toSeconds()
            }
            ,
            t.TransportTime
        }),
        t(function(t) {
            return t.Type = {
                Default: "number",
                Time: "time",
                Frequency: "frequency",
                TransportTime: "transportTime",
                Ticks: "ticks",
                NormalRange: "normalRange",
                AudioRange: "audioRange",
                Decibels: "db",
                Interval: "interval",
                BPM: "bpm",
                Positive: "positive",
                Gain: "gain",
                Cents: "cents",
                Degrees: "degrees",
                MIDI: "midi",
                BarsBeatsSixteenths: "barsBeatsSixteenths",
                Samples: "samples",
                Hertz: "hertz",
                Note: "note",
                Milliseconds: "milliseconds",
                Seconds: "seconds",
                Notation: "notation"
            },
            t.prototype.toSeconds = function(e) {
                return t.isNumber(e) ? e : t.isUndef(e) ? this.now() : t.isString(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0
            }
            ,
            t.prototype.toFrequency = function(e) {
                return t.isNumber(e) ? e : t.isString(e) || t.isUndef(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0
            }
            ,
            t.prototype.toTicks = function(e) {
                return t.isNumber(e) || t.isString(e) ? new t.TransportTime(e).toTicks() : t.isUndef(e) ? t.Transport.ticks : e instanceof t.TimeBase ? e.toTicks() : void 0
            }
            ,
            t
        }),
        t(function(t) {
            return t.Param = function() {
                var e = t.defaults(arguments, ["param", "units", "convert"], t.Param);
                t.AudioNode.call(this),
                this._param = this.input = e.param,
                this.units = e.units,
                this.convert = e.convert,
                this.overridden = !1,
                t.isUndef(e.value) || (this.value = e.value)
            }
            ,
            t.extend(t.Param, t.AudioNode),
            t.Param.defaults = {
                units: t.Type.Default,
                convert: !0,
                param: void 0
            },
            Object.defineProperty(t.Param.prototype, "value", {
                get: function() {
                    return this._toUnits(this._param.value)
                },
                set: function(t) {
                    var e = this._fromUnits(t);
                    this._param.cancelScheduledValues(0),
                    this._param.value = e
                }
            }),
            t.Param.prototype._fromUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert))
                    return e;
                switch (this.units) {
                case t.Type.Time:
                    return this.toSeconds(e);
                case t.Type.Frequency:
                    return this.toFrequency(e);
                case t.Type.Decibels:
                    return t.dbToGain(e);
                case t.Type.NormalRange:
                    return Math.min(Math.max(e, 0), 1);
                case t.Type.AudioRange:
                    return Math.min(Math.max(e, -1), 1);
                case t.Type.Positive:
                    return Math.max(e, 0);
                default:
                    return e
                }
            }
            ,
            t.Param.prototype._toUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert))
                    return e;
                switch (this.units) {
                case t.Type.Decibels:
                    return t.gainToDb(e);
                default:
                    return e
                }
            }
            ,
            t.Param.prototype._minOutput = 1e-5,
            t.Param.prototype.setValueAtTime = function(e, i) {
                return i = this.toSeconds(i),
                t.isPast(i),
                this._param.setValueAtTime(this._fromUnits(e), i),
                this
            }
            ,
            t.Param.prototype.setRampPoint = function(e) {
                e = t.defaultArg(e, this.now()),
                this.cancelAndHoldAtTime(this.context.currentTime);
                var i = this._param.value;
                return 0 === i && (i = this._minOutput),
                this._param.setValueAtTime(i, e),
                this
            }
            ,
            t.Param.prototype.linearRampToValueAtTime = function(e, i) {
                return e = this._fromUnits(e),
                i = this.toSeconds(i),
                t.isPast(i),
                this._param.linearRampToValueAtTime(e, i),
                this
            }
            ,
            t.Param.prototype.exponentialRampToValueAtTime = function(e, i) {
                return e = this._fromUnits(e),
                e = Math.max(this._minOutput, e),
                i = this.toSeconds(i),
                t.isPast(i),
                this._param.exponentialRampToValueAtTime(e, i),
                this
            }
            ,
            t.Param.prototype.exponentialRampTo = function(t, e, i) {
                return i = this.toSeconds(i),
                this.setRampPoint(i),
                this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)),
                this
            }
            ,
            t.Param.prototype.linearRampTo = function(t, e, i) {
                return i = this.toSeconds(i),
                this.setRampPoint(i),
                this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
                this
            }
            ,
            t.Param.prototype.targetRampTo = function(t, e, i) {
                return i = this.toSeconds(i),
                this.setRampPoint(i),
                this.exponentialAppraochValueAtTime(t, i, e),
                this
            }
            ,
            t.Param.prototype.exponentialAppraochValueAtTime = function(e, i, n) {
                var o = Math.log(this.toSeconds(n) + 1) / Math.log(200);
                return i = this.toSeconds(i),
                t.isPast(i),
                this.setTargetAtTime(e, i, o)
            }
            ,
            t.Param.prototype.setTargetAtTime = function(t, e, i) {
                if (t = this._fromUnits(t),
                i <= 0)
                    throw new Error("timeConstant must be greater than 0");
                return this._param.setTargetAtTime(t, this.toSeconds(e), i),
                this
            }
            ,
            t.Param.prototype.setValueCurveAtTime = function(t, e, i) {
                i = this.toSeconds(i),
                e = this.toSeconds(e),
                this.setValueAtTime(t[0], e);
                for (var n = i / (t.length - 1), o = 1; o < t.length; o++)
                    this._param.linearRampToValueAtTime(this._fromUnits(t[o]), e + o * n);
                return this
            }
            ,
            t.Param.prototype.cancelScheduledValues = function(t) {
                return this._param.cancelScheduledValues(this.toSeconds(t)),
                this
            }
            ,
            t.Param.prototype.cancelAndHoldAtTime = function(t) {
                if (t = this.toSeconds(t),
                this._param.cancelAndHoldAtTime)
                    this._param.cancelAndHoldAtTime(t);
                else {
                    var e = this.context.currentTime;
                    this._param.cancelScheduledValues(e);
                    var i = this._param.value;
                    0 === i && (i = this._minOutput),
                    this._param.setValueAtTime(i, e + this.sampleTime)
                }
                return this
            }
            ,
            t.Param.prototype.rampTo = function(e, i, n) {
                return i = t.defaultArg(i, .1),
                this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampTo(e, i, n) : this.linearRampTo(e, i, n),
                this
            }
            ,
            t.Param.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._param = null,
                this
            }
            ,
            t.Param
        }),
        t(function(t) {
            return window.GainNode && !AudioContext.prototype.createGain && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode),
            t.Gain = function() {
                var e = t.defaults(arguments, ["gain", "units"], t.Gain);
                t.AudioNode.call(this),
                this.input = this.output = this._gainNode = this.context.createGain(),
                this.gain = new t.Param({
                    param: this._gainNode.gain,
                    units: e.units,
                    value: e.gain,
                    convert: e.convert
                }),
                this._readOnly("gain")
            }
            ,
            t.extend(t.Gain, t.AudioNode),
            t.Gain.defaults = {
                gain: 1,
                convert: !0
            },
            t.Gain.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._gainNode.disconnect(),
                this._gainNode = null,
                this._writable("gain"),
                this.gain.dispose(),
                this.gain = null
            }
            ,
            t.Gain
        }),
        t(function(t) {
            return t.Signal = function() {
                var e = t.defaults(arguments, ["value", "units"], t.Signal)
                  , i = t.context.createGain();
                e.param = i.gain,
                t.Param.call(this, e),
                this.output = i,
                this.input = this._param = this.output.gain,
                this.context.getConstant(1).connect(this.output)
            }
            ,
            t.extend(t.Signal, t.Param),
            t.Signal.defaults = {
                value: 0,
                units: t.Type.Default,
                convert: !0
            },
            t.Signal.prototype.connect = t.SignalBase.prototype.connect,
            t.Signal.prototype.dispose = function() {
                return t.Param.prototype.dispose.call(this),
                this
            }
            ,
            t.Signal
        }),
        t(function(t) {
            return t.TimelineSignal = function() {
                var e = t.defaults(arguments, ["value", "units"], t.Signal);
                t.Signal.call(this, e),
                this._events = new t.Timeline(100),
                this._initial = this._fromUnits(this._param.value),
                this.value = e.value,
                delete this.input
            }
            ,
            t.extend(t.TimelineSignal, t.Signal),
            t.TimelineSignal.Type = {
                Linear: "linear",
                Exponential: "exponential",
                Target: "target",
                Set: "set"
            },
            Object.defineProperty(t.TimelineSignal.prototype, "value", {
                get: function() {
                    var t = this.now()
                      , e = this.getValueAtTime(t);
                    return this._toUnits(e)
                },
                set: function(t) {
                    if (this._events) {
                        var e = this._fromUnits(t);
                        this._initial = e,
                        this.cancelScheduledValues(),
                        this._param.value = e
                    }
                }
            }),
            t.TimelineSignal.prototype.setValueAtTime = function(e, i) {
                return e = this._fromUnits(e),
                i = this.toSeconds(i),
                this._events.add({
                    type: t.TimelineSignal.Type.Set,
                    value: e,
                    time: i
                }),
                this._param.setValueAtTime(e, i),
                this
            }
            ,
            t.TimelineSignal.prototype.linearRampToValueAtTime = function(e, i) {
                return e = this._fromUnits(e),
                i = this.toSeconds(i),
                this._events.add({
                    type: t.TimelineSignal.Type.Linear,
                    value: e,
                    time: i
                }),
                this._param.linearRampToValueAtTime(e, i),
                this
            }
            ,
            t.TimelineSignal.prototype.exponentialRampToValueAtTime = function(e, i) {
                i = this.toSeconds(i);
                var n = this._searchBefore(i);
                n && 0 === n.value && this.setValueAtTime(this._minOutput, n.time),
                e = this._fromUnits(e);
                var o = Math.max(e, this._minOutput);
                return this._events.add({
                    type: t.TimelineSignal.Type.Exponential,
                    value: o,
                    time: i
                }),
                e < this._minOutput ? (this._param.exponentialRampToValueAtTime(this._minOutput, i - this.sampleTime),
                this.setValueAtTime(0, i)) : this._param.exponentialRampToValueAtTime(e, i),
                this
            }
            ,
            t.TimelineSignal.prototype.setTargetAtTime = function(e, i, n) {
                return e = this._fromUnits(e),
                e = Math.max(this._minOutput, e),
                n = Math.max(this._minOutput, n),
                i = this.toSeconds(i),
                this._events.add({
                    type: t.TimelineSignal.Type.Target,
                    value: e,
                    time: i,
                    constant: n
                }),
                this._param.setTargetAtTime(e, i, n),
                this
            }
            ,
            t.TimelineSignal.prototype.setValueCurveAtTime = function(e, i, n, o) {
                o = t.defaultArg(o, 1),
                n = this.toSeconds(n),
                i = this.toSeconds(i);
                var r = n / (e.length - 1);
                this.setValueAtTime(e[0] * o, i);
                for (var s = 1; s < e.length; s++)
                    this.linearRampToValueAtTime(e[s] * o, i + s * r);
                return this
            }
            ,
            t.TimelineSignal.prototype.cancelScheduledValues = function(t) {
                return t = this.toSeconds(t),
                this._events.cancel(t),
                this._param.cancelScheduledValues(t),
                this
            }
            ,
            t.TimelineSignal.prototype.cancelAndHoldAtTime = function(t) {
                return this.setRampPoint(this.toSeconds(t)),
                this
            }
            ,
            t.TimelineSignal.prototype.setRampPoint = function(e) {
                e = this.toSeconds(e);
                var i = this._toUnits(this.getValueAtTime(e))
                  , n = this._searchBefore(e);
                if (n && n.time === e)
                    this.cancelScheduledValues(e + this.sampleTime);
                else {
                    var o = this._searchAfter(e);
                    o && (this.cancelScheduledValues(e),
                    o.type === t.TimelineSignal.Type.Linear ? this.linearRampToValueAtTime(i, e) : o.type === t.TimelineSignal.Type.Exponential && this.exponentialRampToValueAtTime(i, e))
                }
                return this.setValueAtTime(i, e),
                this
            }
            ,
            t.TimelineSignal.prototype.linearRampToValueBetween = function(t, e, i) {
                return this.setRampPoint(e),
                this.linearRampToValueAtTime(t, i),
                this
            }
            ,
            t.TimelineSignal.prototype.exponentialRampToValueBetween = function(t, e, i) {
                return this.setRampPoint(e),
                this.exponentialRampToValueAtTime(t, i),
                this
            }
            ,
            t.TimelineSignal.prototype._searchBefore = function(t) {
                return this._events.get(t)
            }
            ,
            t.TimelineSignal.prototype._searchAfter = function(t) {
                return this._events.getAfter(t)
            }
            ,
            t.TimelineSignal.prototype.getValueAtTime = function(e) {
                e = this.toSeconds(e);
                var i = this._searchAfter(e)
                  , n = this._searchBefore(e)
                  , o = this._initial;
                if (null === n)
                    o = this._initial;
                else if (n.type === t.TimelineSignal.Type.Target) {
                    var r, s = this._events.getBefore(n.time);
                    r = null === s ? this._initial : s.value,
                    o = this._exponentialApproach(n.time, r, n.value, n.constant, e)
                } else
                    o = null === i ? n.value : i.type === t.TimelineSignal.Type.Linear ? this._linearInterpolate(n.time, n.value, i.time, i.value, e) : i.type === t.TimelineSignal.Type.Exponential ? this._exponentialInterpolate(n.time, n.value, i.time, i.value, e) : n.value;
                return o
            }
            ,
            t.TimelineSignal.prototype.connect = t.SignalBase.prototype.connect,
            t.TimelineSignal.prototype._exponentialApproach = function(t, e, i, n, o) {
                return i + (e - i) * Math.exp(-(o - t) / n)
            }
            ,
            t.TimelineSignal.prototype._linearInterpolate = function(t, e, i, n, o) {
                return e + (o - t) / (i - t) * (n - e)
            }
            ,
            t.TimelineSignal.prototype._exponentialInterpolate = function(t, e, i, n, o) {
                return (e = Math.max(this._minOutput, e)) * Math.pow(n / e, (o - t) / (i - t))
            }
            ,
            t.TimelineSignal.prototype.dispose = function() {
                t.Signal.prototype.dispose.call(this),
                this._events.dispose(),
                this._events = null
            }
            ,
            t.TimelineSignal
        }),
        t(function(t) {
            return t.Pow = function(e) {
                t.SignalBase.call(this),
                this._exp = t.defaultArg(e, 1),
                this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp),8192)
            }
            ,
            t.extend(t.Pow, t.SignalBase),
            Object.defineProperty(t.Pow.prototype, "value", {
                get: function() {
                    return this._exp
                },
                set: function(t) {
                    this._exp = t,
                    this._expScaler.setMap(this._expFunc(this._exp))
                }
            }),
            t.Pow.prototype._expFunc = function(t) {
                return function(e) {
                    return Math.pow(Math.abs(e), t)
                }
            }
            ,
            t.Pow.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._expScaler.dispose(),
                this._expScaler = null,
                this
            }
            ,
            t.Pow
        }),
        t(function(t) {
            return t.Envelope = function() {
                var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                t.AudioNode.call(this),
                this.attack = e.attack,
                this.decay = e.decay,
                this.sustain = e.sustain,
                this.release = e.release,
                this._attackCurve = "linear",
                this._releaseCurve = "exponential",
                this._sig = this.output = new t.TimelineSignal,
                this._sig.setValueAtTime(0, 0),
                this.attackCurve = e.attackCurve,
                this.releaseCurve = e.releaseCurve
            }
            ,
            t.extend(t.Envelope, t.AudioNode),
            t.Envelope.defaults = {
                attack: .01,
                decay: .1,
                sustain: .5,
                release: 1,
                attackCurve: "linear",
                releaseCurve: "exponential"
            },
            Object.defineProperty(t.Envelope.prototype, "value", {
                get: function() {
                    return this.getValueAtTime(this.now())
                }
            }),
            Object.defineProperty(t.Envelope.prototype, "attackCurve", {
                get: function() {
                    if (t.isString(this._attackCurve))
                        return this._attackCurve;
                    if (t.isArray(this._attackCurve)) {
                        for (var e in t.Envelope.Type)
                            if (t.Envelope.Type[e].In === this._attackCurve)
                                return e;
                        return this._attackCurve
                    }
                },
                set: function(e) {
                    if (t.Envelope.Type.hasOwnProperty(e)) {
                        var i = t.Envelope.Type[e];
                        t.isObject(i) ? this._attackCurve = i.In : this._attackCurve = i
                    } else {
                        if (!t.isArray(e))
                            throw new Error("Tone.Envelope: invalid curve: " + e);
                        this._attackCurve = e
                    }
                }
            }),
            Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
                get: function() {
                    if (t.isString(this._releaseCurve))
                        return this._releaseCurve;
                    if (t.isArray(this._releaseCurve)) {
                        for (var e in t.Envelope.Type)
                            if (t.Envelope.Type[e].Out === this._releaseCurve)
                                return e;
                        return this._releaseCurve
                    }
                },
                set: function(e) {
                    if (t.Envelope.Type.hasOwnProperty(e)) {
                        var i = t.Envelope.Type[e];
                        t.isObject(i) ? this._releaseCurve = i.Out : this._releaseCurve = i
                    } else {
                        if (!t.isArray(e))
                            throw new Error("Tone.Envelope: invalid curve: " + e);
                        this._releaseCurve = e
                    }
                }
            }),
            t.Envelope.prototype.triggerAttack = function(e, i) {
                e = this.toSeconds(e);
                var n = this.toSeconds(this.attack)
                  , o = n
                  , r = this.toSeconds(this.decay);
                i = t.defaultArg(i, 1);
                var s = this.getValueAtTime(e);
                if (s > 0) {
                    o = (1 - s) / (1 / o)
                }
                if ("linear" === this._attackCurve)
                    this._sig.linearRampTo(i, o, e);
                else if ("exponential" === this._attackCurve)
                    this._sig.targetRampTo(i, o, e);
                else if (o > 0) {
                    this._sig.setRampPoint(e);
                    var a = this._attackCurve;
                    if (o < n) {
                        var u = 1 - o / n
                          , l = Math.floor(u * this._attackCurve.length);
                        a = this._attackCurve.slice(l),
                        a[0] = s
                    }
                    this._sig.setValueCurveAtTime(a, e, o, i)
                }
                return this._sig.targetRampTo(i * this.sustain, r, o + e),
                this
            }
            ,
            t.Envelope.prototype.triggerRelease = function(e) {
                e = this.toSeconds(e);
                var i = this.getValueAtTime(e);
                if (i > 0) {
                    var n = this.toSeconds(this.release);
                    if ("linear" === this._releaseCurve)
                        this._sig.linearRampTo(0, n, e);
                    else if ("exponential" === this._releaseCurve)
                        this._sig.targetRampTo(0, n, e);
                    else {
                        var o = this._releaseCurve;
                        t.isArray(o) && (this._sig.setRampPoint(e),
                        this._sig.setValueCurveAtTime(o, e, n, i))
                    }
                }
                return this
            }
            ,
            t.Envelope.prototype.getValueAtTime = function(t) {
                return this._sig.getValueAtTime(t)
            }
            ,
            t.Envelope.prototype.triggerAttackRelease = function(t, e, i) {
                return e = this.toSeconds(e),
                this.triggerAttack(e, i),
                this.triggerRelease(e + this.toSeconds(t)),
                this
            }
            ,
            t.Envelope.prototype.cancel = function(t) {
                return this._sig.cancelScheduledValues(t),
                this
            }
            ,
            t.Envelope.prototype.connect = t.Signal.prototype.connect,
            function() {
                function e(t) {
                    for (var e = new Array(t.length), i = 0; i < t.length; i++)
                        e[i] = 1 - t[i];
                    return e
                }
                var i, n, o = [];
                for (i = 0; i < 128; i++)
                    o[i] = Math.sin(i / 127 * (Math.PI / 2));
                var r = [];
                for (i = 0; i < 127; i++) {
                    n = i / 127;
                    var s = Math.sin(n * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    r[i] = s / 10 + .83 * n
                }
                r[127] = 1;
                var a = [];
                for (i = 0; i < 128; i++)
                    a[i] = Math.ceil(i / 127 * 5) / 5;
                var u = [];
                for (i = 0; i < 128; i++)
                    n = i / 127,
                    u[i] = .5 * (1 - Math.cos(Math.PI * n));
                var l = [];
                for (i = 0; i < 128; i++) {
                    n = i / 127;
                    var c = 4 * Math.pow(n, 3) + .2
                      , h = Math.cos(c * Math.PI * 2 * n);
                    l[i] = Math.abs(h * (1 - n))
                }
                t.Envelope.Type = {
                    linear: "linear",
                    exponential: "exponential",
                    bounce: {
                        In: e(l),
                        Out: l
                    },
                    cosine: {
                        In: o,
                        Out: function(t) {
                            return t.slice(0).reverse()
                        }(o)
                    },
                    step: {
                        In: a,
                        Out: e(a)
                    },
                    ripple: {
                        In: r,
                        Out: e(r)
                    },
                    sine: {
                        In: u,
                        Out: e(u)
                    }
                }
            }(),
            t.Envelope.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._sig.dispose(),
                this._sig = null,
                this._attackCurve = null,
                this._releaseCurve = null,
                this
            }
            ,
            t.Envelope
        }),
        t(function(t) {
            return t.AmplitudeEnvelope = function() {
                t.Envelope.apply(this, arguments),
                this.input = this.output = new t.Gain,
                this._sig.connect(this.output.gain)
            }
            ,
            t.extend(t.AmplitudeEnvelope, t.Envelope),
            t.AmplitudeEnvelope.prototype.dispose = function() {
                return t.Envelope.prototype.dispose.call(this),
                this
            }
            ,
            t.AmplitudeEnvelope
        }),
        t(function(t) {
            return window.AnalyserNode && !AnalyserNode.prototype.getFloatTimeDomainData && (AnalyserNode.prototype.getFloatTimeDomainData = function(t) {
                var e = new Uint8Array(t.length);
                this.getByteTimeDomainData(e);
                for (var i = 0; i < e.length; i++)
                    t[i] = (e[i] - 128) / 128
            }
            ),
            t.Analyser = function() {
                var e = t.defaults(arguments, ["type", "size"], t.Analyser);
                t.AudioNode.call(this),
                this._analyser = this.input = this.output = this.context.createAnalyser(),
                this._type = e.type,
                this._buffer = null,
                this.size = e.size,
                this.type = e.type
            }
            ,
            t.extend(t.Analyser, t.AudioNode),
            t.Analyser.defaults = {
                size: 1024,
                type: "fft",
                smoothing: .8
            },
            t.Analyser.Type = {
                Waveform: "waveform",
                FFT: "fft"
            },
            t.Analyser.prototype.getValue = function() {
                return this._type === t.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === t.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer),
                this._buffer
            }
            ,
            Object.defineProperty(t.Analyser.prototype, "size", {
                get: function() {
                    return this._analyser.frequencyBinCount
                },
                set: function(t) {
                    this._analyser.fftSize = 2 * t,
                    this._buffer = new Float32Array(t)
                }
            }),
            Object.defineProperty(t.Analyser.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(e) {
                    if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT)
                        throw new TypeError("Tone.Analyser: invalid type: " + e);
                    this._type = e
                }
            }),
            Object.defineProperty(t.Analyser.prototype, "smoothing", {
                get: function() {
                    return this._analyser.smoothingTimeConstant
                },
                set: function(t) {
                    this._analyser.smoothingTimeConstant = t
                }
            }),
            t.Analyser.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._analyser.disconnect(),
                this._analyser = null,
                this._buffer = null
            }
            ,
            t.Analyser
        }),
        t(function(t) {
            return t.Compressor = function() {
                var e = t.defaults(arguments, ["threshold", "ratio"], t.Compressor);
                t.AudioNode.call(this),
                this._compressor = this.input = this.output = this.context.createDynamicsCompressor(),
                this.threshold = new t.Param({
                    param: this._compressor.threshold,
                    units: t.Type.Decibels,
                    convert: !1
                }),
                this.attack = new t.Param(this._compressor.attack,t.Type.Time),
                this.release = new t.Param(this._compressor.release,t.Type.Time),
                this.knee = new t.Param({
                    param: this._compressor.knee,
                    units: t.Type.Decibels,
                    convert: !1
                }),
                this.ratio = new t.Param({
                    param: this._compressor.ratio,
                    convert: !1
                }),
                this._readOnly(["knee", "release", "attack", "ratio", "threshold"]),
                this.set(e)
            }
            ,
            t.extend(t.Compressor, t.AudioNode),
            t.Compressor.defaults = {
                ratio: 12,
                threshold: -24,
                release: .25,
                attack: .003,
                knee: 30
            },
            t.Compressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["knee", "release", "attack", "ratio", "threshold"]),
                this._compressor.disconnect(),
                this._compressor = null,
                this.attack.dispose(),
                this.attack = null,
                this.release.dispose(),
                this.release = null,
                this.threshold.dispose(),
                this.threshold = null,
                this.ratio.dispose(),
                this.ratio = null,
                this.knee.dispose(),
                this.knee = null,
                this
            }
            ,
            t.Compressor
        }),
        t(function(t) {
            return t.Add = function(e) {
                t.Signal.call(this),
                this.createInsOuts(2, 0),
                this._sum = this.input[0] = this.input[1] = this.output = new t.Gain,
                this._param = this.input[1] = new t.Signal(e),
                this._param.connect(this._sum)
            }
            ,
            t.extend(t.Add, t.Signal),
            t.Add.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this),
                this._sum.dispose(),
                this._sum = null,
                this
            }
            ,
            t.Add
        }),
        t(function(t) {
            return t.Multiply = function(e) {
                t.Signal.call(this),
                this.createInsOuts(2, 0),
                this._mult = this.input[0] = this.output = new t.Gain,
                this._param = this.input[1] = this.output.gain,
                this._param.value = t.defaultArg(e, 0)
            }
            ,
            t.extend(t.Multiply, t.Signal),
            t.Multiply.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this),
                this._mult.dispose(),
                this._mult = null,
                this._param = null,
                this
            }
            ,
            t.Multiply
        }),
        t(function(t) {
            return t.Negate = function() {
                t.SignalBase.call(this),
                this._multiply = this.input = this.output = new t.Multiply(-1)
            }
            ,
            t.extend(t.Negate, t.SignalBase),
            t.Negate.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._multiply.dispose(),
                this._multiply = null,
                this
            }
            ,
            t.Negate
        }),
        t(function(t) {
            return t.Subtract = function(e) {
                t.Signal.call(this),
                this.createInsOuts(2, 0),
                this._sum = this.input[0] = this.output = new t.Gain,
                this._neg = new t.Negate,
                this._param = this.input[1] = new t.Signal(e),
                this._param.chain(this._neg, this._sum)
            }
            ,
            t.extend(t.Subtract, t.Signal),
            t.Subtract.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this),
                this._neg.dispose(),
                this._neg = null,
                this._sum.disconnect(),
                this._sum = null,
                this
            }
            ,
            t.Subtract
        }),
        t(function(t) {
            return t.GreaterThanZero = function() {
                t.SignalBase.call(this),
                this._thresh = this.output = new t.WaveShaper(function(t) {
                    return t <= 0 ? 0 : 1
                }
                ,127),
                this._scale = this.input = new t.Multiply(1e4),
                this._scale.connect(this._thresh)
            }
            ,
            t.extend(t.GreaterThanZero, t.SignalBase),
            t.GreaterThanZero.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                this._scale = null,
                this._thresh.dispose(),
                this._thresh = null,
                this
            }
            ,
            t.GreaterThanZero
        }),
        t(function(t) {
            return t.GreaterThan = function(e) {
                t.Signal.call(this),
                this.createInsOuts(2, 0),
                this._param = this.input[0] = new t.Subtract(e),
                this.input[1] = this._param.input[1],
                this._gtz = this.output = new t.GreaterThanZero,
                this._param.connect(this._gtz)
            }
            ,
            t.extend(t.GreaterThan, t.Signal),
            t.GreaterThan.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this),
                this._gtz.dispose(),
                this._gtz = null,
                this
            }
            ,
            t.GreaterThan
        }),
        t(function(t) {
            return t.Abs = function() {
                t.SignalBase.call(this),
                this._abs = this.input = this.output = new t.WaveShaper(function(t) {
                    return 0 === t ? 0 : Math.abs(t)
                }
                ,127)
            }
            ,
            t.extend(t.Abs, t.SignalBase),
            t.Abs.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._abs.dispose(),
                this._abs = null,
                this
            }
            ,
            t.Abs
        }),
        t(function(t) {
            return t.Modulo = function(e) {
                t.SignalBase.call(this),
                this.createInsOuts(1, 0),
                this._shaper = new t.WaveShaper(Math.pow(2, 16)),
                this._multiply = new t.Multiply,
                this._subtract = this.output = new t.Subtract,
                this._modSignal = new t.Signal(e),
                this.input.fan(this._shaper, this._subtract),
                this._modSignal.connect(this._multiply, 0, 0),
                this._shaper.connect(this._multiply, 0, 1),
                this._multiply.connect(this._subtract, 0, 1),
                this._setWaveShaper(e)
            }
            ,
            t.extend(t.Modulo, t.SignalBase),
            t.Modulo.prototype._setWaveShaper = function(t) {
                this._shaper.setMap(function(e) {
                    return Math.floor((e + 1e-4) / t)
                })
            }
            ,
            Object.defineProperty(t.Modulo.prototype, "value", {
                get: function() {
                    return this._modSignal.value
                },
                set: function(t) {
                    this._modSignal.value = t,
                    this._setWaveShaper(t)
                }
            }),
            t.Modulo.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._shaper.dispose(),
                this._shaper = null,
                this._multiply.dispose(),
                this._multiply = null,
                this._subtract.dispose(),
                this._subtract = null,
                this._modSignal.dispose(),
                this._modSignal = null,
                this
            }
            ,
            t.Modulo
        }),
        t(function(t) {
            return t.AudioToGain = function() {
                t.SignalBase.call(this),
                this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                    return (t + 1) / 2
                }
                )
            }
            ,
            t.extend(t.AudioToGain, t.SignalBase),
            t.AudioToGain.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                this._norm = null,
                this
            }
            ,
            t.AudioToGain
        }),
        t(function(t) {
            function e(t, e, i) {
                var n = new t;
                return i._eval(e[0]).connect(n, 0, 0),
                i._eval(e[1]).connect(n, 0, 1),
                n
            }
            function i(t, e, i) {
                var n = new t;
                return i._eval(e[0]).connect(n, 0, 0),
                n
            }
            function n(t) {
                return t ? parseFloat(t) : void 0
            }
            function o(t) {
                return t && t.args ? parseFloat(t.args) : void 0
            }
            return t.Expr = function() {
                t.SignalBase.call(this);
                var e = this._replacements(Array.prototype.slice.call(arguments))
                  , i = this._parseInputs(e);
                this._nodes = [],
                this.input = new Array(i);
                for (var n = 0; n < i; n++)
                    this.input[n] = this.context.createGain();
                var o, r = this._parseTree(e);
                try {
                    o = this._eval(r)
                } catch (t) {
                    throw this._disposeNodes(),
                    new Error("Tone.Expr: Could evaluate expression: " + e)
                }
                this.output = o
            }
            ,
            t.extend(t.Expr, t.SignalBase),
            t.Expr._Expressions = {
                value: {
                    signal: {
                        regexp: /^\d+\.\d+|^\d+/,
                        method: function(e) {
                            return new t.Signal(n(e))
                        }
                    },
                    input: {
                        regexp: /^\$\d/,
                        method: function(t, e) {
                            return e.input[n(t.substr(1))]
                        }
                    }
                },
                glue: {
                    "(": {
                        regexp: /^\(/
                    },
                    ")": {
                        regexp: /^\)/
                    },
                    ",": {
                        regexp: /^,/
                    }
                },
                func: {
                    abs: {
                        regexp: /^abs/,
                        method: i.bind(this, t.Abs)
                    },
                    mod: {
                        regexp: /^mod/,
                        method: function(e, i) {
                            var n = o(e[1])
                              , r = new t.Modulo(n);
                            return i._eval(e[0]).connect(r),
                            r
                        }
                    },
                    pow: {
                        regexp: /^pow/,
                        method: function(e, i) {
                            var n = o(e[1])
                              , r = new t.Pow(n);
                            return i._eval(e[0]).connect(r),
                            r
                        }
                    },
                    a2g: {
                        regexp: /^a2g/,
                        method: function(e, i) {
                            var n = new t.AudioToGain;
                            return i._eval(e[0]).connect(n),
                            n
                        }
                    }
                },
                binary: {
                    "+": {
                        regexp: /^\+/,
                        precedence: 1,
                        method: e.bind(this, t.Add)
                    },
                    "-": {
                        regexp: /^\-/,
                        precedence: 1,
                        method: function(n, o) {
                            return 1 === n.length ? i(t.Negate, n, o) : e(t.Subtract, n, o)
                        }
                    },
                    "*": {
                        regexp: /^\*/,
                        precedence: 0,
                        method: e.bind(this, t.Multiply)
                    }
                },
                unary: {
                    "-": {
                        regexp: /^\-/,
                        method: i.bind(this, t.Negate)
                    },
                    "!": {
                        regexp: /^\!/,
                        method: i.bind(this, t.NOT)
                    }
                }
            },
            t.Expr.prototype._parseInputs = function(t) {
                var e = t.match(/\$\d/g)
                  , i = 0;
                if (null !== e)
                    for (var n = 0; n < e.length; n++) {
                        var o = parseInt(e[n].substr(1)) + 1;
                        i = Math.max(i, o)
                    }
                return i
            }
            ,
            t.Expr.prototype._replacements = function(t) {
                for (var e = t.shift(), i = 0; i < t.length; i++)
                    e = e.replace(/\%/i, t[i]);
                return e
            }
            ,
            t.Expr.prototype._tokenize = function(e) {
                for (var i = -1, n = []; e.length > 0; ) {
                    e = e.trim();
                    var o = function(e) {
                        for (var i in t.Expr._Expressions) {
                            var n = t.Expr._Expressions[i];
                            for (var o in n) {
                                var r = n[o]
                                  , s = r.regexp
                                  , a = e.match(s);
                                if (null !== a)
                                    return {
                                        type: i,
                                        value: a[0],
                                        method: r.method
                                    }
                            }
                        }
                        throw new SyntaxError("Tone.Expr: Unexpected token " + e)
                    }(e);
                    n.push(o),
                    e = e.substr(o.value.length)
                }
                return {
                    next: function() {
                        return n[++i]
                    },
                    peek: function() {
                        return n[i + 1]
                    }
                }
            }
            ,
            t.Expr.prototype._parseTree = function(e) {
                function i(t, e) {
                    return !c(t) && "glue" === t.type && t.value === e
                }
                function n(e, i, n) {
                    var o = t.Expr._Expressions[i];
                    if (!c(e))
                        for (var r in o) {
                            var s = o[r];
                            if (s.regexp.test(e.value)) {
                                if (c(n))
                                    return !0;
                                if (s.precedence === n)
                                    return !0
                            }
                        }
                    return !1
                }
                function o(t) {
                    c(t) && (t = 5);
                    var e;
                    e = t < 0 ? r() : o(t - 1);
                    for (var i = l.peek(); n(i, "binary", t); )
                        i = l.next(),
                        e = {
                            operator: i.value,
                            method: i.method,
                            args: [e, o(t - 1)]
                        },
                        i = l.peek();
                    return e
                }
                function r() {
                    var t, e;
                    return t = l.peek(),
                    n(t, "unary") ? (t = l.next(),
                    e = r(),
                    {
                        operator: t.value,
                        method: t.method,
                        args: [e]
                    }) : s()
                }
                function s() {
                    var t, e;
                    if (t = l.peek(),
                    c(t))
                        throw new SyntaxError("Tone.Expr: Unexpected termination of expression");
                    if ("func" === t.type)
                        return t = l.next(),
                        a(t);
                    if ("value" === t.type)
                        return t = l.next(),
                        {
                            method: t.method,
                            args: t.value
                        };
                    if (i(t, "(")) {
                        if (l.next(),
                        e = o(),
                        t = l.next(),
                        !i(t, ")"))
                            throw new SyntaxError("Expected )");
                        return e
                    }
                    throw new SyntaxError("Tone.Expr: Parse error, cannot process token " + t.value)
                }
                function a(t) {
                    var e, n = [];
                    if (e = l.next(),
                    !i(e, "("))
                        throw new SyntaxError('Tone.Expr: Expected ( in a function call "' + t.value + '"');
                    if (e = l.peek(),
                    i(e, ")") || (n = u()),
                    e = l.next(),
                    !i(e, ")"))
                        throw new SyntaxError('Tone.Expr: Expected ) in a function call "' + t.value + '"');
                    return {
                        method: t.method,
                        args: n,
                        name: name
                    }
                }
                function u() {
                    for (var t, e, n = []; ; ) {
                        if (e = o(),
                        c(e))
                            break;
                        if (n.push(e),
                        t = l.peek(),
                        !i(t, ","))
                            break;
                        l.next()
                    }
                    return n
                }
                var l = this._tokenize(e)
                  , c = t.isUndef.bind(this);
                return o()
            }
            ,
            t.Expr.prototype._eval = function(e) {
                if (!t.isUndef(e)) {
                    var i = e.method(e.args, this);
                    return this._nodes.push(i),
                    i
                }
            }
            ,
            t.Expr.prototype._disposeNodes = function() {
                for (var e = 0; e < this._nodes.length; e++) {
                    var i = this._nodes[e];
                    t.isFunction(i.dispose) ? i.dispose() : t.isFunction(i.disconnect) && i.disconnect(),
                    i = null,
                    this._nodes[e] = null
                }
                this._nodes = null
            }
            ,
            t.Expr.prototype.dispose = function() {
                t.SignalBase.prototype.dispose.call(this),
                this._disposeNodes()
            }
            ,
            t.Expr
        }),
        t(function(t) {
            return t.EqualPowerGain = function() {
                t.SignalBase.call(this),
                this._eqPower = this.input = this.output = new t.WaveShaper(function(e) {
                    return Math.abs(e) < .001 ? 0 : t.equalPowerScale(e)
                }
                .bind(this),4096)
            }
            ,
            t.extend(t.EqualPowerGain, t.SignalBase),
            t.EqualPowerGain.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._eqPower.dispose(),
                this._eqPower = null,
                this
            }
            ,
            t.EqualPowerGain
        }),
        t(function(t) {
            return t.CrossFade = function(e) {
                t.AudioNode.call(this),
                this.createInsOuts(2, 1),
                this.a = this.input[0] = new t.Gain,
                this.b = this.input[1] = new t.Gain,
                this.fade = new t.Signal(t.defaultArg(e, .5),t.Type.NormalRange),
                this._equalPowerA = new t.EqualPowerGain,
                this._equalPowerB = new t.EqualPowerGain,
                this._invert = new t.Expr("1 - $0"),
                this.a.connect(this.output),
                this.b.connect(this.output),
                this.fade.chain(this._equalPowerB, this.b.gain),
                this.fade.chain(this._invert, this._equalPowerA, this.a.gain),
                this._readOnly("fade")
            }
            ,
            t.extend(t.CrossFade, t.AudioNode),
            t.CrossFade.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable("fade"),
                this._equalPowerA.dispose(),
                this._equalPowerA = null,
                this._equalPowerB.dispose(),
                this._equalPowerB = null,
                this.fade.dispose(),
                this.fade = null,
                this._invert.dispose(),
                this._invert = null,
                this.a.dispose(),
                this.a = null,
                this.b.dispose(),
                this.b = null,
                this
            }
            ,
            t.CrossFade
        }),
        t(function(t) {
            return t.Filter = function() {
                var e = t.defaults(arguments, ["frequency", "type", "rolloff"], t.Filter);
                t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                this._filters = [],
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.detune = new t.Signal(0,t.Type.Cents),
                this.gain = new t.Signal({
                    value: e.gain,
                    convert: !1
                }),
                this.Q = new t.Signal(e.Q),
                this._type = e.type,
                this._rolloff = e.rolloff,
                this.rolloff = e.rolloff,
                this._readOnly(["detune", "frequency", "gain", "Q"])
            }
            ,
            t.extend(t.Filter, t.AudioNode),
            t.Filter.defaults = {
                type: "lowpass",
                frequency: 350,
                rolloff: -12,
                Q: 1,
                gain: 0
            },
            Object.defineProperty(t.Filter.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    if (-1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t))
                        throw new TypeError("Tone.Filter: invalid type " + t);
                    this._type = t;
                    for (var e = 0; e < this._filters.length; e++)
                        this._filters[e].type = t
                }
            }),
            Object.defineProperty(t.Filter.prototype, "rolloff", {
                get: function() {
                    return this._rolloff
                },
                set: function(e) {
                    e = parseInt(e, 10);
                    var i = [-12, -24, -48, -96]
                      , n = i.indexOf(e);
                    if (-1 === n)
                        throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
                    n += 1,
                    this._rolloff = e,
                    this.input.disconnect();
                    for (var o = 0; o < this._filters.length; o++)
                        this._filters[o].disconnect(),
                        this._filters[o] = null;
                    this._filters = new Array(n);
                    for (var r = 0; r < n; r++) {
                        var s = this.context.createBiquadFilter();
                        s.type = this._type,
                        this.frequency.connect(s.frequency),
                        this.detune.connect(s.detune),
                        this.Q.connect(s.Q),
                        this.gain.connect(s.gain),
                        this._filters[r] = s
                    }
                    var a = [this.input].concat(this._filters).concat([this.output]);
                    t.connectSeries.apply(t, a)
                }
            }),
            t.Filter.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this);
                for (var e = 0; e < this._filters.length; e++)
                    this._filters[e].disconnect(),
                    this._filters[e] = null;
                return this._filters = null,
                this._writable(["detune", "frequency", "gain", "Q"]),
                this.frequency.dispose(),
                this.Q.dispose(),
                this.frequency = null,
                this.Q = null,
                this.detune.dispose(),
                this.detune = null,
                this.gain.dispose(),
                this.gain = null,
                this
            }
            ,
            t.Filter
        }),
        t(function(t) {
            return t.MultibandSplit = function() {
                var e = t.defaults(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit);
                t.AudioNode.call(this),
                this.input = new t.Gain,
                this.output = new Array(3),
                this.low = this.output[0] = new t.Filter(0,"lowpass"),
                this._lowMidFilter = new t.Filter(0,"highpass"),
                this.mid = this.output[1] = new t.Filter(0,"lowpass"),
                this.high = this.output[2] = new t.Filter(0,"highpass"),
                this.lowFrequency = new t.Signal(e.lowFrequency,t.Type.Frequency),
                this.highFrequency = new t.Signal(e.highFrequency,t.Type.Frequency),
                this.Q = new t.Signal(e.Q),
                this.input.fan(this.low, this.high),
                this.input.chain(this._lowMidFilter, this.mid),
                this.lowFrequency.connect(this.low.frequency),
                this.lowFrequency.connect(this._lowMidFilter.frequency),
                this.highFrequency.connect(this.mid.frequency),
                this.highFrequency.connect(this.high.frequency),
                this.Q.connect(this.low.Q),
                this.Q.connect(this._lowMidFilter.Q),
                this.Q.connect(this.mid.Q),
                this.Q.connect(this.high.Q),
                this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
            }
            ,
            t.extend(t.MultibandSplit, t.AudioNode),
            t.MultibandSplit.defaults = {
                lowFrequency: 400,
                highFrequency: 2500,
                Q: 1
            },
            t.MultibandSplit.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
                this.low.dispose(),
                this.low = null,
                this._lowMidFilter.dispose(),
                this._lowMidFilter = null,
                this.mid.dispose(),
                this.mid = null,
                this.high.dispose(),
                this.high = null,
                this.lowFrequency.dispose(),
                this.lowFrequency = null,
                this.highFrequency.dispose(),
                this.highFrequency = null,
                this.Q.dispose(),
                this.Q = null,
                this
            }
            ,
            t.MultibandSplit
        }),
        t(function(t) {
            return t.EQ3 = function() {
                var e = t.defaults(arguments, ["low", "mid", "high"], t.EQ3);
                t.AudioNode.call(this),
                this.output = new t.Gain,
                this._multibandSplit = this.input = new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency
                }),
                this._lowGain = new t.Gain(e.low,t.Type.Decibels),
                this._midGain = new t.Gain(e.mid,t.Type.Decibels),
                this._highGain = new t.Gain(e.high,t.Type.Decibels),
                this.low = this._lowGain.gain,
                this.mid = this._midGain.gain,
                this.high = this._highGain.gain,
                this.Q = this._multibandSplit.Q,
                this.lowFrequency = this._multibandSplit.lowFrequency,
                this.highFrequency = this._multibandSplit.highFrequency,
                this._multibandSplit.low.chain(this._lowGain, this.output),
                this._multibandSplit.mid.chain(this._midGain, this.output),
                this._multibandSplit.high.chain(this._highGain, this.output),
                this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"])
            }
            ,
            t.extend(t.EQ3, t.AudioNode),
            t.EQ3.defaults = {
                low: 0,
                mid: 0,
                high: 0,
                lowFrequency: 400,
                highFrequency: 2500
            },
            t.EQ3.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]),
                this._multibandSplit.dispose(),
                this._multibandSplit = null,
                this.lowFrequency = null,
                this.highFrequency = null,
                this._lowGain.dispose(),
                this._lowGain = null,
                this._midGain.dispose(),
                this._midGain = null,
                this._highGain.dispose(),
                this._highGain = null,
                this.low = null,
                this.mid = null,
                this.high = null,
                this.Q = null,
                this
            }
            ,
            t.EQ3
        }),
        t(function(t) {
            return t.Scale = function(e, i) {
                t.SignalBase.call(this),
                this._outputMin = t.defaultArg(e, 0),
                this._outputMax = t.defaultArg(i, 1),
                this._scale = this.input = new t.Multiply(1),
                this._add = this.output = new t.Add(0),
                this._scale.connect(this._add),
                this._setRange()
            }
            ,
            t.extend(t.Scale, t.SignalBase),
            Object.defineProperty(t.Scale.prototype, "min", {
                get: function() {
                    return this._outputMin
                },
                set: function(t) {
                    this._outputMin = t,
                    this._setRange()
                }
            }),
            Object.defineProperty(t.Scale.prototype, "max", {
                get: function() {
                    return this._outputMax
                },
                set: function(t) {
                    this._outputMax = t,
                    this._setRange()
                }
            }),
            t.Scale.prototype._setRange = function() {
                this._add.value = this._outputMin,
                this._scale.value = this._outputMax - this._outputMin
            }
            ,
            t.Scale.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._add.dispose(),
                this._add = null,
                this._scale.dispose(),
                this._scale = null,
                this
            }
            ,
            t.Scale
        }),
        t(function(t) {
            return t.ScaleExp = function(e, i, n) {
                t.SignalBase.call(this),
                this._scale = this.output = new t.Scale(e,i),
                this._exp = this.input = new t.Pow(t.defaultArg(n, 2)),
                this._exp.connect(this._scale)
            }
            ,
            t.extend(t.ScaleExp, t.SignalBase),
            Object.defineProperty(t.ScaleExp.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }),
            Object.defineProperty(t.ScaleExp.prototype, "min", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = t
                }
            }),
            Object.defineProperty(t.ScaleExp.prototype, "max", {
                get: function() {
                    return this._scale.max
                },
                set: function(t) {
                    this._scale.max = t
                }
            }),
            t.ScaleExp.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                this._scale = null,
                this._exp.dispose(),
                this._exp = null,
                this
            }
            ,
            t.ScaleExp
        }),
        t(function(t) {
            return window.DelayNode && !AudioContext.prototype.createDelay && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode),
            t.Delay = function() {
                var e = t.defaults(arguments, ["delayTime", "maxDelay"], t.Delay);
                t.AudioNode.call(this),
                this._delayNode = this.input = this.output = this.context.createDelay(this.toSeconds(e.maxDelay)),
                this.delayTime = new t.Param({
                    param: this._delayNode.delayTime,
                    units: t.Type.Time,
                    value: e.delayTime
                }),
                this._readOnly("delayTime")
            }
            ,
            t.extend(t.Delay, t.AudioNode),
            t.Delay.defaults = {
                maxDelay: 1,
                delayTime: 0
            },
            t.Delay.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._delayNode.disconnect(),
                this._delayNode = null,
                this._writable("delayTime"),
                this.delayTime = null,
                this
            }
            ,
            t.Delay
        }),
        t(function(t) {
            return t.FeedbackCombFilter = function() {
                var e = t.defaults(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter);
                t.AudioNode.call(this),
                this._delay = this.input = this.output = new t.Delay(e.delayTime),
                this.delayTime = this._delay.delayTime,
                this._feedback = new t.Gain(e.resonance,t.Type.NormalRange),
                this.resonance = this._feedback.gain,
                this._delay.chain(this._feedback, this._delay),
                this._readOnly(["resonance", "delayTime"])
            }
            ,
            t.extend(t.FeedbackCombFilter, t.AudioNode),
            t.FeedbackCombFilter.defaults = {
                delayTime: .1,
                resonance: .5
            },
            t.FeedbackCombFilter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["resonance", "delayTime"]),
                this._delay.dispose(),
                this._delay = null,
                this.delayTime = null,
                this._feedback.dispose(),
                this._feedback = null,
                this.resonance = null,
                this
            }
            ,
            t.FeedbackCombFilter
        }),
        t(function(t) {
            return t.FFT = function() {
                var e = t.defaults(arguments, ["size"], t.FFT);
                e.type = t.Analyser.Type.FFT,
                t.AudioNode.call(this),
                this._analyser = this.input = this.output = new t.Analyser(e)
            }
            ,
            t.extend(t.FFT, t.AudioNode),
            t.FFT.defaults = {
                size: 1024
            },
            t.FFT.prototype.getValue = function() {
                return this._analyser.getValue()
            }
            ,
            Object.defineProperty(t.FFT.prototype, "size", {
                get: function() {
                    return this._analyser.size
                },
                set: function(t) {
                    this._analyser.size = t
                }
            }),
            t.FFT.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                this._analyser = null
            }
            ,
            t.FFT
        }),
        t(function(t) {
            return t.Follower = function() {
                var e = t.defaults(arguments, ["attack", "release"], t.Follower);
                t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                this._abs = new t.Abs,
                this._filter = this.context.createBiquadFilter(),
                this._filter.type = "lowpass",
                this._filter.frequency.value = 0,
                this._filter.Q.value = -100,
                this._frequencyValues = new t.WaveShaper,
                this._sub = new t.Subtract,
                this._delay = new t.Delay(this.blockTime),
                this._mult = new t.Multiply(1e4),
                this._attack = e.attack,
                this._release = e.release,
                this.input.chain(this._abs, this._filter, this.output),
                this._abs.connect(this._sub, 0, 1),
                this._filter.chain(this._delay, this._sub),
                this._sub.chain(this._mult, this._frequencyValues, this._filter.frequency),
                this._setAttackRelease(this._attack, this._release)
            }
            ,
            t.extend(t.Follower, t.AudioNode),
            t.Follower.defaults = {
                attack: .05,
                release: .5
            },
            t.Follower.prototype._setAttackRelease = function(e, i) {
                var n = this.blockTime;
                e = t.Time(e).toFrequency(),
                i = t.Time(i).toFrequency(),
                e = Math.max(e, n),
                i = Math.max(i, n),
                this._frequencyValues.setMap(function(t) {
                    return t <= 0 ? e : i
                })
            }
            ,
            Object.defineProperty(t.Follower.prototype, "attack", {
                get: function() {
                    return this._attack
                },
                set: function(t) {
                    this._attack = t,
                    this._setAttackRelease(this._attack, this._release)
                }
            }),
            Object.defineProperty(t.Follower.prototype, "release", {
                get: function() {
                    return this._release
                },
                set: function(t) {
                    this._release = t,
                    this._setAttackRelease(this._attack, this._release)
                }
            }),
            t.Follower.prototype.connect = t.Signal.prototype.connect,
            t.Follower.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._filter.disconnect(),
                this._filter = null,
                this._frequencyValues.disconnect(),
                this._frequencyValues = null,
                this._delay.dispose(),
                this._delay = null,
                this._sub.disconnect(),
                this._sub = null,
                this._abs.dispose(),
                this._abs = null,
                this._mult.dispose(),
                this._mult = null,
                this._curve = null,
                this
            }
            ,
            t.Follower
        }),
        t(function(t) {
            return t.ScaledEnvelope = function() {
                var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                t.Envelope.call(this, e),
                e = t.defaultArg(e, t.ScaledEnvelope.defaults),
                this._exp = this.output = new t.Pow(e.exponent),
                this._scale = this.output = new t.Scale(e.min,e.max),
                this._sig.chain(this._exp, this._scale)
            }
            ,
            t.extend(t.ScaledEnvelope, t.Envelope),
            t.ScaledEnvelope.defaults = {
                min: 0,
                max: 1,
                exponent: 1
            },
            Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = t
                }
            }),
            Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
                get: function() {
                    return this._scale.max
                },
                set: function(t) {
                    this._scale.max = t
                }
            }),
            Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }),
            t.ScaledEnvelope.prototype.dispose = function() {
                return t.Envelope.prototype.dispose.call(this),
                this._scale.dispose(),
                this._scale = null,
                this._exp.dispose(),
                this._exp = null,
                this
            }
            ,
            t.ScaledEnvelope
        }),
        t(function(t) {
            return t.FrequencyEnvelope = function() {
                var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                t.ScaledEnvelope.call(this, e),
                e = t.defaultArg(e, t.FrequencyEnvelope.defaults),
                this._octaves = e.octaves,
                this.baseFrequency = e.baseFrequency,
                this.octaves = e.octaves
            }
            ,
            t.extend(t.FrequencyEnvelope, t.Envelope),
            t.FrequencyEnvelope.defaults = {
                baseFrequency: 200,
                octaves: 4,
                exponent: 2
            },
            Object.defineProperty(t.FrequencyEnvelope.prototype, "baseFrequency", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = this.toFrequency(t),
                    this.octaves = this._octaves
                }
            }),
            Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t,
                    this._scale.max = this.baseFrequency * Math.pow(2, t)
                }
            }),
            Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }),
            t.FrequencyEnvelope.prototype.dispose = function() {
                return t.ScaledEnvelope.prototype.dispose.call(this),
                this
            }
            ,
            t.FrequencyEnvelope
        }),
        t(function(t) {
            return t.Gate = function() {
                var e = t.defaults(arguments, ["threshold", "attack", "release"], t.Gate);
                t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                this._follower = new t.Follower(e.attack,e.release),
                this._gt = new t.GreaterThan(t.dbToGain(e.threshold)),
                this.input.connect(this.output),
                this.input.chain(this._gt, this._follower, this.output.gain)
            }
            ,
            t.extend(t.Gate, t.AudioNode),
            t.Gate.defaults = {
                attack: .1,
                release: .1,
                threshold: -40
            },
            Object.defineProperty(t.Gate.prototype, "threshold", {
                get: function() {
                    return t.gainToDb(this._gt.value)
                },
                set: function(e) {
                    this._gt.value = t.dbToGain(e)
                }
            }),
            Object.defineProperty(t.Gate.prototype, "attack", {
                get: function() {
                    return this._follower.attack
                },
                set: function(t) {
                    this._follower.attack = t
                }
            }),
            Object.defineProperty(t.Gate.prototype, "release", {
                get: function() {
                    return this._follower.release
                },
                set: function(t) {
                    this._follower.release = t
                }
            }),
            t.Gate.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._follower.dispose(),
                this._gt.dispose(),
                this._follower = null,
                this._gt = null,
                this
            }
            ,
            t.Gate
        }),
        t(function(t) {
            function e(t) {
                return function(e, i) {
                    i = this.toSeconds(i),
                    t.apply(this, arguments);
                    var n = this._events.get(i)
                      , o = this._events.previousEvent(n)
                      , r = this._getTickUntilEvent(o, i - this.sampleTime);
                    return n.ticks = Math.max(r, 0),
                    this
                }
            }
            return t.TickSignal = function(e) {
                e = t.defaultArg(e, 1),
                t.TimelineSignal.call(this, {
                    units: t.Type.Ticks,
                    value: e
                }),
                this._events.memory = 1 / 0
            }
            ,
            t.extend(t.TickSignal, t.TimelineSignal),
            t.TickSignal.prototype.setValueAtTime = e(t.TimelineSignal.prototype.setValueAtTime),
            t.TickSignal.prototype.linearRampToValueAtTime = e(t.TimelineSignal.prototype.linearRampToValueAtTime),
            t.TickSignal.prototype.setTargetAtTime = function(t, e, i) {
                e = this.toSeconds(e),
                this.setRampPoint(e),
                t = this._fromUnits(t);
                for (var n = this._events.get(e), o = 0; o <= 5; o++) {
                    var r = i * o + e
                      , s = this._exponentialApproach(n.time, n.value, t, i, r);
                    this.linearRampToValueAtTime(this._toUnits(s), r)
                }
                return this
            }
            ,
            t.TickSignal.prototype.exponentialRampToValueAtTime = function(t, e) {
                e = this.toSeconds(e),
                t = this._fromUnits(t);
                var i = this._events.get(e);
                null === i && (i = {
                    value: this._initial,
                    time: 0
                });
                for (var n = (e - i.time) / 5, o = 0; o <= 5; o++) {
                    var r = n * o + i.time
                      , s = this._exponentialInterpolate(i.time, i.value, e, t, r);
                    this.linearRampToValueAtTime(this._toUnits(s), r)
                }
                return this
            }
            ,
            t.TickSignal.prototype._getTickUntilEvent = function(t, e) {
                null === t && (t = {
                    ticks: 0,
                    time: 0
                });
                var i = this.getValueAtTime(t.time)
                  , n = this.getValueAtTime(e);
                return .5 * (e - t.time) * (i + n) + t.ticks
            }
            ,
            t.TickSignal.prototype.getTickAtTime = function(t) {
                t = this.toSeconds(t);
                var e = this._events.get(t);
                return this._getTickUntilEvent(e, t)
            }
            ,
            t.TickSignal.prototype.getDurationOfTicks = function(t, e) {
                e = this.toSeconds(e);
                var i = this.getTickAtTime(e);
                return this.getTimeOfTick(i + t) - e
            }
            ,
            t.TickSignal.prototype.getTimeOfTick = function(e) {
                var i = this._events.get(e, "ticks")
                  , n = this._events.getAfter(e, "ticks");
                if (i && i.ticks === e)
                    return i.time;
                if (i && n && n.type === t.TimelineSignal.Type.Linear && i.value !== n.value) {
                    var o = this.getValueAtTime(i.time)
                      , r = this.getValueAtTime(n.time)
                      , s = (r - o) / (n.time - i.time)
                      , a = Math.sqrt(Math.pow(o, 2) - 2 * s * (i.ticks - e))
                      , u = (-o + a) / s
                      , l = (-o - a) / s;
                    return (u > 0 ? u : l) + i.time
                }
                return i ? 0 === i.value ? 1 / 0 : i.time + (e - i.ticks) / i.value : e / this._initial
            }
            ,
            t.TickSignal
        }),
        t(function(t) {
            return t.TimelineState = function(e) {
                t.Timeline.call(this),
                this._initial = e
            }
            ,
            t.extend(t.TimelineState, t.Timeline),
            t.TimelineState.prototype.getValueAtTime = function(t) {
                var e = this.get(t);
                return null !== e ? e.state : this._initial
            }
            ,
            t.TimelineState.prototype.setStateAtTime = function(t, e) {
                return this.add({
                    state: t,
                    time: e
                }),
                this
            }
            ,
            t.TimelineState
        }),
        t(function(t) {
            return t.Clock = function() {
                var e = t.defaults(arguments, ["callback", "frequency"], t.Clock);
                t.Emitter.call(this),
                this.callback = e.callback,
                this._nextTick = 0,
                this._lastState = t.State.Stopped,
                this.frequency = new t.TickSignal(e.frequency,t.Type.Frequency),
                this._readOnly("frequency"),
                this.ticks = 0,
                this._state = new t.TimelineState(t.State.Stopped),
                this._boundLoop = this._loop.bind(this),
                this.context.on("tick", this._boundLoop)
            }
            ,
            t.extend(t.Clock, t.Emitter),
            t.Clock.defaults = {
                callback: t.noOp,
                frequency: 1
            },
            Object.defineProperty(t.Clock.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(this.now())
                }
            }),
            t.Clock.prototype.start = function(e, i) {
                return e = this.toSeconds(e),
                this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e),
                this._state.get(e).offset = i),
                this
            }
            ,
            t.Clock.prototype.stop = function(e) {
                return e = this.toSeconds(e),
                this._state.cancel(e),
                this._state.setStateAtTime(t.State.Stopped, e),
                this
            }
            ,
            t.Clock.prototype.pause = function(e) {
                return e = this.toSeconds(e),
                this._state.getValueAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e),
                this
            }
            ,
            t.Clock.prototype._loop = function() {
                var e = this.now() + this.context.updateInterval
                  , i = this._state.get(e);
                if (i) {
                    if (i.state !== this._lastState)
                        switch (this._lastState = i.state,
                        i.state) {
                        case t.State.Started:
                            t.isUndef(i.offset) || (this.ticks = i.offset),
                            this._nextTick = i.time,
                            this.emit("start", i.time, this.ticks);
                            break;
                        case t.State.Stopped:
                            this.ticks = 0,
                            this.emit("stop", i.time);
                            break;
                        case t.State.Paused:
                            this.emit("pause", i.time)
                        }
                    for (; e > this._nextTick && this._state; ) {
                        var n = this._nextTick;
                        if (this.frequency && (this._nextTick += this.frequency.getDurationOfTicks(1, this._nextTick),
                        i.state === t.State.Started))
                            try {
                                this.callback(n),
                                this.ticks++
                            } catch (t) {
                                throw this.ticks++,
                                t
                            }
                    }
                }
            }
            ,
            t.Clock.prototype.getStateAtTime = function(t) {
                return t = this.toSeconds(t),
                this._state.getValueAtTime(t)
            }
            ,
            t.Clock.prototype.dispose = function() {
                t.Emitter.prototype.dispose.call(this),
                this.context.off("tick", this._boundLoop),
                this._writable("frequency"),
                this.frequency.dispose(),
                this.frequency = null,
                this._boundLoop = null,
                this._nextTick = 1 / 0,
                this.callback = null,
                this._state.dispose(),
                this._state = null
            }
            ,
            t.Clock
        }),
        t(function(t) {
            t.IntervalTimeline = function() {
                t.call(this),
                this._root = null,
                this._length = 0
            }
            ,
            t.extend(t.IntervalTimeline),
            t.IntervalTimeline.prototype.add = function(i) {
                if (t.isUndef(i.time) || t.isUndef(i.duration))
                    throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
                var n = new e(i.time,i.time + i.duration,i);
                for (null === this._root ? this._root = n : this._root.insert(n),
                this._length++; null !== n; )
                    n.updateHeight(),
                    n.updateMax(),
                    this._rebalance(n),
                    n = n.parent;
                return this
            }
            ,
            t.IntervalTimeline.prototype.remove = function(t) {
                if (null !== this._root) {
                    var e = [];
                    this._root.search(t.time, e);
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        if (n.event === t) {
                            this._removeNode(n),
                            this._length--;
                            break
                        }
                    }
                }
                return this
            }
            ,
            Object.defineProperty(t.IntervalTimeline.prototype, "length", {
                get: function() {
                    return this._length
                }
            }),
            t.IntervalTimeline.prototype.cancel = function(t) {
                return this.forEachAfter(t, function(t) {
                    this.remove(t)
                }
                .bind(this)),
                this
            }
            ,
            t.IntervalTimeline.prototype._setRoot = function(t) {
                this._root = t,
                null !== this._root && (this._root.parent = null)
            }
            ,
            t.IntervalTimeline.prototype._replaceNodeInParent = function(t, e) {
                null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e,
                this._rebalance(t.parent)) : this._setRoot(e)
            }
            ,
            t.IntervalTimeline.prototype._removeNode = function(t) {
                if (null === t.left && null === t.right)
                    this._replaceNodeInParent(t, null);
                else if (null === t.right)
                    this._replaceNodeInParent(t, t.left);
                else if (null === t.left)
                    this._replaceNodeInParent(t, t.right);
                else {
                    var e, i, n = t.getBalance();
                    if (n > 0)
                        if (null === t.left.right)
                            e = t.left,
                            e.right = t.right,
                            i = e;
                        else {
                            for (e = t.left.right; null !== e.right; )
                                e = e.right;
                            e.parent.right = e.left,
                            i = e.parent,
                            e.left = t.left,
                            e.right = t.right
                        }
                    else if (null === t.right.left)
                        e = t.right,
                        e.left = t.left,
                        i = e;
                    else {
                        for (e = t.right.left; null !== e.left; )
                            e = e.left;
                        e.parent = e.parent,
                        e.parent.left = e.right,
                        i = e.parent,
                        e.left = t.left,
                        e.right = t.right
                    }
                    null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e),
                    this._rebalance(i)
                }
                t.dispose()
            }
            ,
            t.IntervalTimeline.prototype._rotateLeft = function(t) {
                var e = t.parent
                  , i = t.isLeftChild()
                  , n = t.right;
                t.right = n.left,
                n.left = t,
                null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
            }
            ,
            t.IntervalTimeline.prototype._rotateRight = function(t) {
                var e = t.parent
                  , i = t.isLeftChild()
                  , n = t.left;
                t.left = n.right,
                n.right = t,
                null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
            }
            ,
            t.IntervalTimeline.prototype._rebalance = function(t) {
                var e = t.getBalance();
                e > 1 ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
            }
            ,
            t.IntervalTimeline.prototype.get = function(t) {
                if (null !== this._root) {
                    var e = [];
                    if (this._root.search(t, e),
                    e.length > 0) {
                        for (var i = e[0], n = 1; n < e.length; n++)
                            e[n].low > i.low && (i = e[n]);
                        return i.event
                    }
                }
                return null
            }
            ,
            t.IntervalTimeline.prototype.forEach = function(t) {
                if (null !== this._root) {
                    var e = [];
                    this._root.traverse(function(t) {
                        e.push(t)
                    });
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i].event;
                        n && t(n)
                    }
                }
                return this
            }
            ,
            t.IntervalTimeline.prototype.forEachAtTime = function(t, e) {
                if (null !== this._root) {
                    var i = [];
                    this._root.search(t, i);
                    for (var n = i.length - 1; n >= 0; n--) {
                        var o = i[n].event;
                        o && e(o)
                    }
                }
                return this
            }
            ,
            t.IntervalTimeline.prototype.forEachAfter = function(t, e) {
                if (null !== this._root) {
                    var i = [];
                    this._root.searchAfter(t, i);
                    for (var n = i.length - 1; n >= 0; n--) {
                        e(i[n].event)
                    }
                }
                return this
            }
            ,
            t.IntervalTimeline.prototype.dispose = function() {
                var t = [];
                null !== this._root && this._root.traverse(function(e) {
                    t.push(e)
                });
                for (var e = 0; e < t.length; e++)
                    t[e].dispose();
                return t = null,
                this._root = null,
                this
            }
            ;
            var e = function(t, e, i) {
                this.event = i,
                this.low = t,
                this.high = e,
                this.max = this.high,
                this._left = null,
                this._right = null,
                this.parent = null,
                this.height = 0
            };
            return e.prototype.insert = function(t) {
                t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
            }
            ,
            e.prototype.search = function(t, e) {
                t > this.max || (null !== this.left && this.left.search(t, e),
                this.low <= t && this.high > t && e.push(this),
                this.low > t || null !== this.right && this.right.search(t, e))
            }
            ,
            e.prototype.searchAfter = function(t, e) {
                this.low >= t && (e.push(this),
                null !== this.left && this.left.searchAfter(t, e)),
                null !== this.right && this.right.searchAfter(t, e)
            }
            ,
            e.prototype.traverse = function(t) {
                t(this),
                null !== this.left && this.left.traverse(t),
                null !== this.right && this.right.traverse(t)
            }
            ,
            e.prototype.updateHeight = function() {
                null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
            }
            ,
            e.prototype.updateMax = function() {
                this.max = this.high,
                null !== this.left && (this.max = Math.max(this.max, this.left.max)),
                null !== this.right && (this.max = Math.max(this.max, this.right.max))
            }
            ,
            e.prototype.getBalance = function() {
                var t = 0;
                return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)),
                t
            }
            ,
            e.prototype.isLeftChild = function() {
                return null !== this.parent && this.parent.left === this
            }
            ,
            Object.defineProperty(e.prototype, "left", {
                get: function() {
                    return this._left
                },
                set: function(t) {
                    this._left = t,
                    null !== t && (t.parent = this),
                    this.updateHeight(),
                    this.updateMax()
                }
            }),
            Object.defineProperty(e.prototype, "right", {
                get: function() {
                    return this._right
                },
                set: function(t) {
                    this._right = t,
                    null !== t && (t.parent = this),
                    this.updateHeight(),
                    this.updateMax()
                }
            }),
            e.prototype.dispose = function() {
                this.parent = null,
                this._left = null,
                this._right = null,
                this.event = null
            }
            ,
            t.IntervalTimeline
        }),
        t(function(t) {
            return t.TransportEvent = function(e, i) {
                i = t.defaultArg(i, t.TransportEvent.defaults),
                t.call(this),
                this.Transport = e,
                this.id = t.TransportEvent._eventId++,
                this.time = i.time,
                this.callback = i.callback,
                this._once = i.once
            }
            ,
            t.extend(t.TransportEvent),
            t.TransportEvent.defaults = {
                once: !1,
                callback: t.noOp
            },
            t.TransportEvent._eventId = 0,
            t.TransportEvent.prototype.invoke = function(t) {
                this.callback && (this.callback(t),
                this._once && this.Transport && this.Transport.clear(this.id))
            }
            ,
            t.TransportEvent.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this.Transport = null,
                this.callback = null,
                this
            }
            ,
            t.TransportEvent
        }),
        t(function(t) {
            return t.TransportRepeatEvent = function(e, i) {
                t.TransportEvent.call(this, e, i),
                i = t.defaultArg(i, t.TransportRepeatEvent.defaults),
                this.duration = i.duration,
                this._interval = i.interval,
                this._currentId = -1,
                this._nextId = -1,
                this._nextTick = this.time,
                this._boundRestart = this._restart.bind(this),
                this.Transport.on("start loopStart", this._boundRestart),
                this._restart()
            }
            ,
            t.extend(t.TransportRepeatEvent, t.TransportEvent),
            t.TransportRepeatEvent.defaults = {
                duration: 1 / 0,
                interval: 1
            },
            t.TransportRepeatEvent.prototype.invoke = function(e) {
                this._createEvents(),
                t.TransportEvent.prototype.invoke.call(this, e)
            }
            ,
            t.TransportRepeatEvent.prototype._createEvents = function() {
                var e = this.Transport.ticks;
                e >= this.time && e >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval,
                this._currentId = this._nextId,
                this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.TransportTime(this._nextTick, "i")))
            }
            ,
            t.TransportRepeatEvent.prototype._restart = function() {
                this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId);
                var e = this.Transport.ticks;
                this._nextTick = this.time,
                e > this.time && (this._nextTick = this.time + Math.ceil((e - this.time) / this._interval) * this._interval),
                this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), t.TransportTime(this._nextTick, "i")),
                this._nextTick += this._interval,
                this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.TransportTime(this._nextTick, "i"))
            }
            ,
            t.TransportRepeatEvent.prototype.dispose = function() {
                return this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId),
                this.Transport.off("start loopStart", this._boundRestart),
                this._boundCreateEvents = null,
                t.TransportEvent.prototype.dispose.call(this),
                this
            }
            ,
            t.TransportRepeatEvent
        }),
        t(function(t) {
            t.Transport = function() {
                t.Emitter.call(this),
                t.getContext(function() {
                    this.loop = !1,
                    this._loopStart = 0,
                    this._loopEnd = 0,
                    this._ppq = e.defaults.PPQ,
                    this._clock = new t.Clock({
                        callback: this._processTick.bind(this),
                        frequency: 0
                    }),
                    this._bindClockEvents(),
                    this.bpm = this._clock.frequency,
                    this.bpm._toUnits = this._toUnits.bind(this),
                    this.bpm._fromUnits = this._fromUnits.bind(this),
                    this.bpm.units = t.Type.BPM,
                    this.bpm.value = e.defaults.bpm,
                    this._readOnly("bpm"),
                    this._timeSignature = e.defaults.timeSignature,
                    this._scheduledEvents = {},
                    this._timeline = new t.Timeline,
                    this._repeatedEvents = new t.IntervalTimeline,
                    this._syncedSignals = [],
                    this._swingTicks = e.defaults.PPQ / 2,
                    this._swingAmount = 0
                }
                .bind(this))
            }
            ,
            t.extend(t.Transport, t.Emitter),
            t.Transport.defaults = {
                bpm: tempo,
                swing: 0,
                swingSubdivision: "8n",
                timeSignature: 4,
                loopStart: 0,
                loopEnd: "4m",
                PPQ: 192
            },
            t.Transport.prototype._processTick = function(e) {
                var i = this._clock.ticks;
                if (this._swingAmount > 0 && i % this._ppq != 0 && i % (2 * this._swingTicks) != 0) {
                    var n = i % (2 * this._swingTicks) / (2 * this._swingTicks)
                      , o = Math.sin(n * Math.PI) * this._swingAmount;
                    e += t.Time(2 * this._swingTicks / 3, "i") * o
                }
                this.loop && i >= this._loopEnd && (this.emit("loopEnd", e),
                this._clock.ticks = this._loopStart,
                i = this._loopStart,
                this.emit("loopStart", e, this.seconds),
                this.emit("loop", e)),
                this._timeline.forEachAtTime(i, function(t) {
                    t.invoke(e)
                })
            }
            ,
            t.Transport.prototype.schedule = function(e, i) {
                var n = new t.TransportEvent(this,{
                    time: this.toTicks(i),
                    callback: e
                });
                return this._addEvent(n, this._timeline)
            }
            ,
            t.Transport.prototype.scheduleRepeat = function(e, i, n, o) {
                var r = new t.TransportRepeatEvent(this,{
                    callback: e,
                    interval: this.toTicks(i),
                    time: this.toTicks(n),
                    duration: this.toTicks(t.defaultArg(o, 1 / 0))
                });
                return this._addEvent(r, this._repeatedEvents)
            }
            ,
            t.Transport.prototype.scheduleOnce = function(e, i) {
                var n = new t.TransportEvent(this,{
                    time: this.toTicks(i),
                    callback: e,
                    once: !0
                });
                return this._addEvent(n, this._timeline)
            }
            ,
            t.Transport.prototype.clear = function(t) {
                if (this._scheduledEvents.hasOwnProperty(t)) {
                    var e = this._scheduledEvents[t.toString()];
                    e.timeline.remove(e.event),
                    e.event.dispose(),
                    delete this._scheduledEvents[t.toString()]
                }
                return this
            }
            ,
            t.Transport.prototype._addEvent = function(t, e) {
                return this._scheduledEvents[t.id.toString()] = {
                    event: t,
                    timeline: e
                },
                e.add(t),
                t.id
            }
            ,
            t.Transport.prototype.cancel = function(e) {
                return e = t.defaultArg(e, 0),
                e = this.toTicks(e),
                this._timeline.cancel(e),
                this._repeatedEvents.cancel(e),
                this
            }
            ,
            t.Transport.prototype._bindClockEvents = function() {
                this._clock.on("start", function(e, i) {
                    i = t.Time(this._clock.ticks, "i").toSeconds(),
                    this.emit("start", e, i)
                }
                .bind(this)),
                this._clock.on("stop", function(t) {
                    this.emit("stop", t)
                }
                .bind(this)),
                this._clock.on("pause", function(t) {
                    this.emit("pause", t)
                }
                .bind(this))
            }
            ,
            Object.defineProperty(t.Transport.prototype, "state", {
                get: function() {
                    return this._clock.getStateAtTime(this.now())
                }
            }),
            t.Transport.prototype.start = function(e, i) {
                return t.isUndef(i) || (i = this.toTicks(i)),
                this._clock.start(e, i),
                this
            }
            ,
            t.Transport.prototype.stop = function(t) {
                return this._clock.stop(t),
                this
            }
            ,
            t.Transport.prototype.pause = function(t) {
                return this._clock.pause(t),
                this
            }
            ,
            t.Transport.prototype.toggle = function(e) {
                return e = this.toSeconds(e),
                this._clock.getStateAtTime(e) !== t.State.Started ? this.start(e) : this.stop(e),
                this
            }
            ,
            Object.defineProperty(t.Transport.prototype, "timeSignature", {
                get: function() {
                    return this._timeSignature
                },
                set: function(e) {
                    t.isArray(e) && (e = e[0] / e[1] * 4),
                    this._timeSignature = e
                }
            }),
            Object.defineProperty(t.Transport.prototype, "loopStart", {
                get: function() {
                    return t.TransportTime(this._loopStart, "i").toSeconds()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t)
                }
            }),
            Object.defineProperty(t.Transport.prototype, "loopEnd", {
                get: function() {
                    return t.TransportTime(this._loopEnd, "i").toSeconds()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t)
                }
            }),
            t.Transport.prototype.setLoopPoints = function(t, e) {
                return this.loopStart = t,
                this.loopEnd = e,
                this
            }
            ,
            Object.defineProperty(t.Transport.prototype, "swing", {
                get: function() {
                    return this._swingAmount
                },
                set: function(t) {
                    this._swingAmount = t
                }
            }),
            Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
                get: function() {
                    return t.Time(this._swingTicks, "i").toNotation()
                },
                set: function(t) {
                    this._swingTicks = this.toTicks(t)
                }
            }),
            Object.defineProperty(t.Transport.prototype, "position", {
                get: function() {
                    return t.TransportTime(this.ticks, "i").toBarsBeatsSixteenths()
                },
                set: function(t) {
                    var e = this.toTicks(t);
                    this.ticks = e
                }
            }),
            Object.defineProperty(t.Transport.prototype, "seconds", {
                get: function() {
                    return t.TransportTime(this.ticks, "i").toSeconds()
                },
                set: function(t) {
                    var e = this.toTicks(t);
                    this.ticks = e
                }
            }),
            Object.defineProperty(t.Transport.prototype, "progress", {
                get: function() {
                    return this.loop ? (this.ticks - this._loopStart) / (this._loopEnd - this._loopStart) : 0
                }
            }),
            Object.defineProperty(t.Transport.prototype, "ticks", {
                get: function() {
                    return this._clock.ticks
                },
                set: function(e) {
                    if (this._clock.ticks !== e) {
                        var i = this.now();
                        this.state === t.State.Started ? (this.emit("stop", i),
                        this._clock.ticks = e,
                        this.emit("start", i, this.seconds)) : this._clock.ticks = e
                    }
                }
            }),
            Object.defineProperty(t.Transport.prototype, "PPQ", {
                get: function() {
                    return this._ppq
                },
                set: function(t) {
                    var e = this.bpm.value;
                    this._ppq = t,
                    this.bpm.value = e
                }
            }),
            t.Transport.prototype._fromUnits = function(t) {
                return 1 / (60 / t / this.PPQ)
            }
            ,
            t.Transport.prototype._toUnits = function(t) {
                return t / this.PPQ * 60
            }
            ,
            t.Transport.prototype.nextSubdivision = function(e) {
                e = this.toSeconds(e);
                var i;
                if (this.state !== t.State.Started)
                    return 0;
                i = this._clock._nextTick;
                var n = t.Time(this.ticks, "i")
                  , o = e - n % e;
                return 0 === o && (o = e),
                i + o
            }
            ,
            t.Transport.prototype.syncSignal = function(e, i) {
                i || (i = 0 !== e._param.value ? e._param.value / this.bpm._param.value : 0);
                var n = new t.Gain(i);
                return this.bpm.chain(n, e._param),
                this._syncedSignals.push({
                    ratio: n,
                    signal: e,
                    initial: e._param.value
                }),
                e._param.value = 0,
                this
            }
            ,
            t.Transport.prototype.unsyncSignal = function(t) {
                for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
                    var i = this._syncedSignals[e];
                    i.signal === t && (i.ratio.dispose(),
                    i.signal._param.value = i.initial,
                    this._syncedSignals.splice(e, 1))
                }
                return this
            }
            ,
            t.Transport.prototype.dispose = function() {
                return t.Emitter.prototype.dispose.call(this),
                this._clock.dispose(),
                this._clock = null,
                this._writable("bpm"),
                this.bpm = null,
                this._timeline.dispose(),
                this._timeline = null,
                this._repeatedEvents.dispose(),
                this._repeatedEvents = null,
                this
            }
            ;
            var e = t.Transport;
            return t.Transport = new e,
            t.Context.on("init", function(i) {
                i.Transport instanceof e ? t.Transport = i.Transport : t.Transport = new e,
                i.Transport = t.Transport
            }),
            t.Context.on("close", function(t) {
                t.Transport instanceof e && t.Transport.dispose()
            }),
            t.Transport
        }),
        t(function(t) {
            return t.Volume = function() {
                var e = t.defaults(arguments, ["volume"], t.Volume);
                t.AudioNode.call(this),
                this.output = this.input = new t.Gain(e.volume,t.Type.Decibels),
                this._unmutedVolume = e.volume,
                this.volume = this.output.gain,
                this._readOnly("volume"),
                this.mute = e.mute
            }
            ,
            t.extend(t.Volume, t.AudioNode),
            t.Volume.defaults = {
                volume: 0,
                mute: !1
            },
            Object.defineProperty(t.Volume.prototype, "mute", {
                get: function() {
                    return this.volume.value === -1 / 0
                },
                set: function(t) {
                    !this.mute && t ? (this._unmutedVolume = this.volume.value,
                    this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
                }
            }),
            t.Volume.prototype.dispose = function() {
                return this.input.dispose(),
                t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this.volume.dispose(),
                this.volume = null,
                this
            }
            ,
            t.Volume
        }),
        t(function(t) {
            t.Master = function() {
                t.AudioNode.call(this),
                t.getContext(function() {
                    this.createInsOuts(1, 0),
                    this._volume = this.output = new t.Volume,
                    this.volume = this._volume.volume,
                    this._readOnly("volume"),
                    this.input.chain(this.output, this.context.destination)
                }
                .bind(this))
            }
            ,
            t.extend(t.Master, t.AudioNode),
            t.Master.defaults = {
                volume: 0,
                mute: !1
            },
            Object.defineProperty(t.Master.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            t.Master.prototype.chain = function() {
                this.input.disconnect(),
                this.input.chain.apply(this.input, arguments),
                arguments[arguments.length - 1].connect(this.output)
            }
            ,
            t.Master.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this._volume.dispose(),
                this._volume = null,
                this.volume = null
            }
            ,
            t.AudioNode.prototype.toMaster = function() {
                return this.connect(t.Master),
                this
            }
            ,
            window.AudioNode && (AudioNode.prototype.toMaster = function() {
                return this.connect(t.Master),
                this
            }
            );
            var e = t.Master;
            return t.Master = new e,
            t.Context.on("init", function(i) {
                i.Master instanceof e ? t.Master = i.Master : t.Master = new e,
                i.Master = t.Master
            }),
            t.Context.on("close", function(t) {
                t.Master instanceof e && t.Master.dispose()
            }),
            t.Master
        }),
        t(function(t) {
            return t.Source = function(e) {
                e = t.defaultArg(e, t.Source.defaults),
                t.AudioNode.call(this),
                this._volume = this.output = new t.Volume(e.volume),
                this.volume = this._volume.volume,
                this._readOnly("volume"),
                this._state = new t.TimelineState(t.State.Stopped),
                this._state.memory = 10,
                this._synced = !1,
                this._scheduled = [],
                this._volume.output.output.channelCount = 2,
                this._volume.output.output.channelCountMode = "explicit",
                this.mute = e.mute
            }
            ,
            t.extend(t.Source, t.AudioNode),
            t.Source.defaults = {
                volume: 0,
                mute: !1
            },
            Object.defineProperty(t.Source.prototype, "state", {
                get: function() {
                    return this._synced ? t.Transport.state === t.State.Started ? this._state.getValueAtTime(t.Transport.seconds) : t.State.Stopped : this._state.getValueAtTime(this.now())
                }
            }),
            Object.defineProperty(t.Source.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            t.Source.prototype._start = t.noOp,
            t.Source.prototype._stop = t.noOp,
            t.Source.prototype.start = function(e, i, n) {
                if (e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e),
                this.retrigger || this._state.getValueAtTime(e) !== t.State.Started || this.stop(e),
                this._state.setStateAtTime(t.State.Started, e),
                this._synced) {
                    var o = this._state.get(e);
                    o.offset = t.defaultArg(i, 0),
                    o.duration = n;
                    var r = t.Transport.schedule(function(t) {
                        this._start(t, i, n)
                    }
                    .bind(this), e);
                    this._scheduled.push(r)
                } else
                    this._start.apply(this, arguments);
                return this
            }
            ,
            t.Source.prototype.stop = function(e) {
                if (e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e),
                this._state.cancel(e),
                this._state.setStateAtTime(t.State.Stopped, e),
                this._synced) {
                    var i = t.Transport.schedule(this._stop.bind(this), e);
                    this._scheduled.push(i)
                } else
                    this._stop.apply(this, arguments);
                return this
            }
            ,
            t.Source.prototype.sync = function() {
                return this._synced = !0,
                this._syncedStart = function(e, i) {
                    if (i > 0) {
                        var n = this._state.get(i);
                        if (n && n.state === t.State.Started && n.time !== i) {
                            var o, r = i - this.toSeconds(n.time);
                            n.duration && (o = this.toSeconds(n.duration) - r),
                            this._start(e, this.toSeconds(n.offset) + r, o)
                        }
                    }
                }
                .bind(this),
                this._syncedStop = function(e) {
                    this._state.getValueAtTime(t.Transport.seconds) === t.State.Started && this._stop(e)
                }
                .bind(this),
                t.Transport.on("start loopStart", this._syncedStart),
                t.Transport.on("stop pause loopEnd", this._syncedStop),
                this
            }
            ,
            t.Source.prototype.unsync = function() {
                this._synced && (t.Transport.off("stop pause loopEnd", this._syncedStop),
                t.Transport.off("start loopStart", this._syncedStart)),
                this._synced = !1;
                for (var e = 0; e < this._scheduled.length; e++) {
                    var i = this._scheduled[e];
                    t.Transport.clear(i)
                }
                return this._scheduled = [],
                this._state.cancel(0),
                this
            }
            ,
            t.Source.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this.unsync(),
                this._scheduled = null,
                this._writable("volume"),
                this._volume.dispose(),
                this._volume = null,
                this.volume = null,
                this._state.dispose(),
                this._state = null
            }
            ,
            t.Source
        }),
        t(function(t) {
            return window.OscillatorNode && !OscillatorNode.prototype.start && (OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn,
            OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff,
            OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable),
            AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable)),
            t.Oscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type"], t.Oscillator);
                t.Source.call(this, e),
                this._oscillator = null,
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this._wave = null,
                this._partials = t.defaultArg(e.partials, [1]),
                this._phase = e.phase,
                this._type = null,
                this.type = e.type,
                this.phase = this._phase,
                this._readOnly(["frequency", "detune"])
            }
            ,
            t.extend(t.Oscillator, t.Source),
            t.Oscillator.defaults = {
                type: "sine",
                frequency: 440,
                detune: 0,
                phase: 0,
                partials: []
            },
            t.Oscillator.Type = {
                Sine: "sine",
                Triangle: "triangle",
                Sawtooth: "sawtooth",
                Square: "square",
                Custom: "custom"
            },
            t.Oscillator.prototype._start = function(e) {
                this._oscillator = this.context.createOscillator(),
                this._oscillator.setPeriodicWave(this._wave),
                this._oscillator.connect(this.output),
                this.frequency.connect(this._oscillator.frequency),
                this.detune.connect(this._oscillator.detune),
                e = this.toSeconds(e),
                t.isPast(e),
                this._oscillator.start(e)
            }
            ,
            t.Oscillator.prototype._stop = function(e) {
                return this._oscillator && (e = this.toSeconds(e),
                t.isPast(e),
                this._oscillator.stop(e),
                this._oscillator = null),
                this
            }
            ,
            t.Oscillator.prototype.syncFrequency = function() {
                return t.Transport.syncSignal(this.frequency),
                this
            }
            ,
            t.Oscillator.prototype.unsyncFrequency = function() {
                return t.Transport.unsyncSignal(this.frequency),
                this
            }
            ,
            Object.defineProperty(t.Oscillator.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    var e = this._getRealImaginary(t, this._phase)
                      , i = this.context.createPeriodicWave(e[0], e[1]);
                    this._wave = i,
                    null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave),
                    this._type = t
                }
            }),
            t.Oscillator.prototype._getRealImaginary = function(e, i) {
                var n = 2048
                  , o = new Float32Array(n)
                  , r = new Float32Array(n)
                  , s = 1;
                if (e === t.Oscillator.Type.Custom)
                    s = this._partials.length + 1,
                    n = s;
                else {
                    var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);
                    a && (s = parseInt(a[2]) + 1,
                    e = a[1],
                    s = Math.max(s, 2),
                    n = s)
                }
                for (var u = 1; u < n; ++u) {
                    var l, c = 2 / (u * Math.PI);
                    switch (e) {
                    case t.Oscillator.Type.Sine:
                        l = u <= s ? 1 : 0;
                        break;
                    case t.Oscillator.Type.Square:
                        l = 1 & u ? 2 * c : 0;
                        break;
                    case t.Oscillator.Type.Sawtooth:
                        l = c * (1 & u ? 1 : -1);
                        break;
                    case t.Oscillator.Type.Triangle:
                        l = 1 & u ? c * c * 2 * (u - 1 >> 1 & 1 ? -1 : 1) : 0;
                        break;
                    case t.Oscillator.Type.Custom:
                        l = this._partials[u - 1];
                        break;
                    default:
                        throw new TypeError("Tone.Oscillator: invalid type: " + e)
                    }
                    0 !== l ? (o[u] = -l * Math.sin(i * u),
                    r[u] = l * Math.cos(i * u)) : (o[u] = 0,
                    r[u] = 0)
                }
                return [o, r]
            }
            ,
            t.Oscillator.prototype._inverseFFT = function(t, e, i) {
                for (var n = 0, o = t.length, r = 0; r < o; r++)
                    n += t[r] * Math.cos(r * i) + e[r] * Math.sin(r * i);
                return n
            }
            ,
            t.Oscillator.prototype._getInitialValue = function() {
                for (var t = this._getRealImaginary(this._type, 0), e = t[0], i = t[1], n = 0, o = 2 * Math.PI, r = 0; r < 8; r++)
                    n = Math.max(this._inverseFFT(e, i, r / 8 * o), n);
                return -this._inverseFFT(e, i, this._phase) / n
            }
            ,
            Object.defineProperty(t.Oscillator.prototype, "partials", {
                get: function() {
                    return this._type !== t.Oscillator.Type.Custom ? [] : this._partials
                },
                set: function(e) {
                    this._partials = e,
                    this.type = t.Oscillator.Type.Custom
                }
            }),
            Object.defineProperty(t.Oscillator.prototype, "phase", {
                get: function() {
                    return this._phase * (180 / Math.PI)
                },
                set: function(t) {
                    this._phase = t * Math.PI / 180,
                    this.type = this._type
                }
            }),
            t.Oscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                null !== this._oscillator && (this._oscillator.disconnect(),
                this._oscillator = null),
                this._wave = null,
                this._writable(["frequency", "detune"]),
                this.frequency.dispose(),
                this.frequency = null,
                this.detune.dispose(),
                this.detune = null,
                this._partials = null,
                this
            }
            ,
            t.Oscillator
        }),
        t(function(t) {
            return t.Zero = function() {
                t.SignalBase.call(this),
                this._gain = this.input = this.output = new t.Gain,
                this.context.getConstant(0).connect(this._gain)
            }
            ,
            t.extend(t.Zero, t.SignalBase),
            t.Zero.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._gain.dispose(),
                this._gain = null,
                this
            }
            ,
            t.Zero
        }),
        t(function(t) {
            return t.LFO = function() {
                var e = t.defaults(arguments, ["frequency", "min", "max"], t.LFO);
                t.AudioNode.call(this),
                this._oscillator = new t.Oscillator({
                    frequency: e.frequency,
                    type: e.type
                }),
                this.frequency = this._oscillator.frequency,
                this.amplitude = this._oscillator.volume,
                this.amplitude.units = t.Type.NormalRange,
                this.amplitude.value = e.amplitude,
                this._stoppedSignal = new t.Signal(0,t.Type.AudioRange),
                this._zeros = new t.Zero,
                this._stoppedValue = 0,
                this._a2g = new t.AudioToGain,
                this._scaler = this.output = new t.Scale(e.min,e.max),
                this._units = t.Type.Default,
                this.units = e.units,
                this._oscillator.chain(this._a2g, this._scaler),
                this._zeros.connect(this._a2g),
                this._stoppedSignal.connect(this._a2g),
                this._readOnly(["amplitude", "frequency"]),
                this.phase = e.phase
            }
            ,
            t.extend(t.LFO, t.AudioNode),
            t.LFO.defaults = {
                type: "sine",
                min: 0,
                max: 1,
                phase: 0,
                frequency: "4n",
                amplitude: 1,
                units: t.Type.Default
            },
            t.LFO.prototype.start = function(t) {
                return t = this.toSeconds(t),
                this._stoppedSignal.setValueAtTime(0, t),
                this._oscillator.start(t),
                this
            }
            ,
            t.LFO.prototype.stop = function(t) {
                return t = this.toSeconds(t),
                this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
                this._oscillator.stop(t),
                this
            }
            ,
            t.LFO.prototype.sync = function() {
                return this._oscillator.sync(),
                this._oscillator.syncFrequency(),
                this
            }
            ,
            t.LFO.prototype.unsync = function() {
                return this._oscillator.unsync(),
                this._oscillator.unsyncFrequency(),
                this
            }
            ,
            Object.defineProperty(t.LFO.prototype, "min", {
                get: function() {
                    return this._toUnits(this._scaler.min)
                },
                set: function(t) {
                    t = this._fromUnits(t),
                    this._scaler.min = t
                }
            }),
            Object.defineProperty(t.LFO.prototype, "max", {
                get: function() {
                    return this._toUnits(this._scaler.max)
                },
                set: function(t) {
                    t = this._fromUnits(t),
                    this._scaler.max = t
                }
            }),
            Object.defineProperty(t.LFO.prototype, "type", {
                get: function() {
                    return this._oscillator.type
                },
                set: function(t) {
                    this._oscillator.type = t,
                    this._stoppedValue = this._oscillator._getInitialValue(),
                    this._stoppedSignal.value = this._stoppedValue
                }
            }),
            Object.defineProperty(t.LFO.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase
                },
                set: function(t) {
                    this._oscillator.phase = t,
                    this._stoppedValue = this._oscillator._getInitialValue(),
                    this._stoppedSignal.value = this._stoppedValue
                }
            }),
            Object.defineProperty(t.LFO.prototype, "units", {
                get: function() {
                    return this._units
                },
                set: function(t) {
                    var e = this.min
                      , i = this.max;
                    this._units = t,
                    this.min = e,
                    this.max = i
                }
            }),
            Object.defineProperty(t.LFO.prototype, "mute", {
                get: function() {
                    return this._oscillator.mute
                },
                set: function(t) {
                    this._oscillator.mute = t
                }
            }),
            Object.defineProperty(t.LFO.prototype, "state", {
                get: function() {
                    return this._oscillator.state
                }
            }),
            t.LFO.prototype.connect = function(e) {
                return e.constructor !== t.Signal && e.constructor !== t.Param && e.constructor !== t.TimelineSignal || (this.convert = e.convert,
                this.units = e.units),
                t.Signal.prototype.connect.apply(this, arguments),
                this
            }
            ,
            t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits,
            t.LFO.prototype._toUnits = t.Param.prototype._toUnits,
            t.LFO.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["amplitude", "frequency"]),
                this._oscillator.dispose(),
                this._oscillator = null,
                this._stoppedSignal.dispose(),
                this._stoppedSignal = null,
                this._zeros.dispose(),
                this._zeros = null,
                this._scaler.dispose(),
                this._scaler = null,
                this._a2g.dispose(),
                this._a2g = null,
                this.frequency = null,
                this.amplitude = null,
                this
            }
            ,
            t.LFO
        }),
        t(function(t) {
            return t.Limiter = function() {
                var e = t.defaults(arguments, ["threshold"], t.Limiter);
                t.AudioNode.call(this),
                this._compressor = this.input = this.output = new t.Compressor({
                    attack: .001,
                    decay: .001,
                    threshold: e.threshold
                }),
                this.threshold = this._compressor.threshold,
                this._readOnly("threshold")
            }
            ,
            t.extend(t.Limiter, t.AudioNode),
            t.Limiter.defaults = {
                threshold: -12
            },
            t.Limiter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._compressor.dispose(),
                this._compressor = null,
                this._writable("threshold"),
                this.threshold = null,
                this
            }
            ,
            t.Limiter
        }),
        t(function(t) {
            return t.LowpassCombFilter = function() {
                var e = t.defaults(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter);
                t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                this._delay = this.input = new t.Delay(e.delayTime),
                this.delayTime = this._delay.delayTime,
                this._lowpass = this.output = this.context.createBiquadFilter(),
                this._lowpass.Q.value = -3.0102999566398125,
                this._lowpass.type = "lowpass",
                this.dampening = new t.Param({
                    param: this._lowpass.frequency,
                    units: t.Type.Frequency,
                    value: e.dampening
                }),
                this._feedback = new t.Gain(e.resonance,t.Type.NormalRange),
                this.resonance = this._feedback.gain,
                this._delay.chain(this._lowpass, this._feedback, this._delay),
                this._readOnly(["dampening", "resonance", "delayTime"])
            }
            ,
            t.extend(t.LowpassCombFilter, t.AudioNode),
            t.LowpassCombFilter.defaults = {
                delayTime: .1,
                resonance: .5,
                dampening: 3e3
            },
            t.LowpassCombFilter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["dampening", "resonance", "delayTime"]),
                this.dampening.dispose(),
                this.dampening = null,
                this.resonance.dispose(),
                this.resonance = null,
                this._delay.dispose(),
                this._delay = null,
                this.delayTime = null,
                this._lowpass.disconnect(),
                this._lowpass = null,
                this._feedback.disconnect(),
                this._feedback = null,
                this
            }
            ,
            t.LowpassCombFilter
        }),
        t(function(t) {
            return t.Merge = function() {
                t.AudioNode.call(this),
                this.createInsOuts(2, 0),
                this.left = this.input[0] = new t.Gain,
                this.right = this.input[1] = new t.Gain,
                this._merger = this.output = this.context.createChannelMerger(2),
                this.left.connect(this._merger, 0, 0),
                this.right.connect(this._merger, 0, 1),
                this.left.channelCount = 1,
                this.right.channelCount = 1,
                this.left.channelCountMode = "explicit",
                this.right.channelCountMode = "explicit"
            }
            ,
            t.extend(t.Merge, t.AudioNode),
            t.Merge.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.left.dispose(),
                this.left = null,
                this.right.dispose(),
                this.right = null,
                this._merger.disconnect(),
                this._merger = null,
                this
            }
            ,
            t.Merge
        }),
        t(function(t) {
            return t.Meter = function() {
                var e = t.defaults(arguments, ["smoothing"], t.Meter);
                t.AudioNode.call(this),
                this.input = this.output = this._analyser = new t.Analyser("waveform",1024),
                this.smoothing = e.smoothing
            }
            ,
            t.extend(t.Meter, t.AudioNode),
            t.Meter.defaults = {
                smoothing: .8
            },
            t.Meter.prototype.getLevel = function() {
                this._analyser.type = "fft";
                var t = this._analyser.getValue();
                return Math.max.apply(this, t) + 28
            }
            ,
            t.Meter.prototype.getValue = function() {
                return this._analyser.type = "waveform",
                this._analyser.getValue()[0]
            }
            ,
            Object.defineProperty(t.Meter.prototype, "smoothing", {
                get: function() {
                    return this._analyser.smoothing
                },
                set: function(t) {
                    this._analyser.smoothing = t
                }
            }),
            t.Meter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                this._analyser = null,
                this
            }
            ,
            t.Meter
        }),
        t(function(t) {
            return t.Split = function() {
                t.AudioNode.call(this),
                this.createInsOuts(0, 2),
                this._splitter = this.input = this.context.createChannelSplitter(2),
                this._splitter.channelCount = 2,
                this._splitter.channelCountMode = "explicit",
                this.left = this.output[0] = new t.Gain,
                this.right = this.output[1] = new t.Gain,
                this._splitter.connect(this.left, 0, 0),
                this._splitter.connect(this.right, 1, 0)
            }
            ,
            t.extend(t.Split, t.AudioNode),
            t.Split.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._splitter.disconnect(),
                this.left.dispose(),
                this.left = null,
                this.right.dispose(),
                this.right = null,
                this._splitter = null,
                this
            }
            ,
            t.Split
        }),
        t(function(t) {
            return t.MidSideSplit = function() {
                t.AudioNode.call(this),
                this.createInsOuts(0, 2),
                this._split = this.input = new t.Split,
                this.mid = this.output[0] = new t.Expr("($0 + $1) * $2"),
                this.side = this.output[1] = new t.Expr("($0 - $1) * $2"),
                this._split.connect(this.mid, 0, 0),
                this._split.connect(this.mid, 1, 1),
                this._split.connect(this.side, 0, 0),
                this._split.connect(this.side, 1, 1),
                this.context.getConstant(Math.SQRT1_2).connect(this.mid, 0, 2),
                this.context.getConstant(Math.SQRT1_2).connect(this.side, 0, 2)
            }
            ,
            t.extend(t.MidSideSplit, t.AudioNode),
            t.MidSideSplit.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                this.mid = null,
                this.side.dispose(),
                this.side = null,
                this._split.dispose(),
                this._split = null,
                this
            }
            ,
            t.MidSideSplit
        }),
        t(function(t) {
            return t.MidSideMerge = function() {
                t.AudioNode.call(this),
                this.createInsOuts(2, 0),
                this.mid = this.input[0] = new t.Gain,
                this._left = new t.Expr("($0 + $1) * $2"),
                this.side = this.input[1] = new t.Gain,
                this._right = new t.Expr("($0 - $1) * $2"),
                this._merge = this.output = new t.Merge,
                this.mid.connect(this._left, 0, 0),
                this.side.connect(this._left, 0, 1),
                this.mid.connect(this._right, 0, 0),
                this.side.connect(this._right, 0, 1),
                this._left.connect(this._merge, 0, 0),
                this._right.connect(this._merge, 0, 1),
                this.context.getConstant(Math.SQRT1_2).connect(this._left, 0, 2),
                this.context.getConstant(Math.SQRT1_2).connect(this._right, 0, 2)
            }
            ,
            t.extend(t.MidSideMerge, t.AudioNode),
            t.MidSideMerge.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                this.mid = null,
                this.side.dispose(),
                this.side = null,
                this._left.dispose(),
                this._left = null,
                this._right.dispose(),
                this._right = null,
                this._merge.dispose(),
                this._merge = null,
                this
            }
            ,
            t.MidSideMerge
        }),
        t(function(t) {
            return t.MidSideCompressor = function(e) {
                t.AudioNode.call(this),
                e = t.defaultArg(e, t.MidSideCompressor.defaults),
                this._midSideSplit = this.input = new t.MidSideSplit,
                this._midSideMerge = this.output = new t.MidSideMerge,
                this.mid = new t.Compressor(e.mid),
                this.side = new t.Compressor(e.side),
                this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
                this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
                this._readOnly(["mid", "side"])
            }
            ,
            t.extend(t.MidSideCompressor, t.AudioNode),
            t.MidSideCompressor.defaults = {
                mid: {
                    ratio: 3,
                    threshold: -24,
                    release: .03,
                    attack: .02,
                    knee: 16
                },
                side: {
                    ratio: 6,
                    threshold: -30,
                    release: .25,
                    attack: .03,
                    knee: 10
                }
            },
            t.MidSideCompressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["mid", "side"]),
                this.mid.dispose(),
                this.mid = null,
                this.side.dispose(),
                this.side = null,
                this._midSideSplit.dispose(),
                this._midSideSplit = null,
                this._midSideMerge.dispose(),
                this._midSideMerge = null,
                this
            }
            ,
            t.MidSideCompressor
        }),
        t(function(t) {
            return t.Mono = function() {
                t.AudioNode.call(this),
                this.createInsOuts(1, 0),
                this._merge = this.output = new t.Merge,
                this.input.connect(this._merge, 0, 0),
                this.input.connect(this._merge, 0, 1),
                this.input.gain.value = t.dbToGain(-10)
            }
            ,
            t.extend(t.Mono),
            t.Mono.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._merge.dispose(),
                this._merge = null,
                this
            }
            ,
            t.Mono
        }),
        t(function(t) {
            return t.MultibandCompressor = function(e) {
                t.AudioNode.call(this),
                e = t.defaultArg(arguments, t.MultibandCompressor.defaults),
                this._splitter = this.input = new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency
                }),
                this.lowFrequency = this._splitter.lowFrequency,
                this.highFrequency = this._splitter.highFrequency,
                this.output = new t.Gain,
                this.low = new t.Compressor(e.low),
                this.mid = new t.Compressor(e.mid),
                this.high = new t.Compressor(e.high),
                this._splitter.low.chain(this.low, this.output),
                this._splitter.mid.chain(this.mid, this.output),
                this._splitter.high.chain(this.high, this.output),
                this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
            }
            ,
            t.extend(t.MultibandCompressor, t.AudioNode),
            t.MultibandCompressor.defaults = {
                low: t.Compressor.defaults,
                mid: t.Compressor.defaults,
                high: t.Compressor.defaults,
                lowFrequency: 250,
                highFrequency: 2e3
            },
            t.MultibandCompressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._splitter.dispose(),
                this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
                this.low.dispose(),
                this.mid.dispose(),
                this.high.dispose(),
                this._splitter = null,
                this.low = null,
                this.mid = null,
                this.high = null,
                this.lowFrequency = null,
                this.highFrequency = null,
                this
            }
            ,
            t.MultibandCompressor
        }),
        t(function(t) {
            return t.Panner = function(e) {
                t.AudioNode.call(this),
                t.Panner.hasStereoPanner ? (this._panner = this.input = this.output = this.context.createStereoPanner(),
                this.pan = this._panner.pan) : (this._crossFade = new t.CrossFade,
                this._merger = this.output = new t.Merge,
                this._splitter = this.input = new t.Split,
                this.pan = new t.Signal(0,t.Type.AudioRange),
                this._zero = new t.Zero,
                this._a2g = new t.AudioToGain,
                this._zero.connect(this._a2g),
                this.pan.chain(this._a2g, this._crossFade.fade),
                this._splitter.connect(this._crossFade, 0, 0),
                this._splitter.connect(this._crossFade, 1, 1),
                this._crossFade.a.connect(this._merger, 0, 0),
                this._crossFade.b.connect(this._merger, 0, 1)),
                this.pan.value = t.defaultArg(e, 0),
                this._readOnly("pan")
            }
            ,
            t.extend(t.Panner, t.AudioNode),
            t.Panner.hasStereoPanner = t.context && t.isFunction(t.context.createStereoPanner),
            t.Panner.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable("pan"),
                t.Panner.hasStereoPanner ? (this._panner.disconnect(),
                this._panner = null,
                this.pan = null) : (this._zero.dispose(),
                this._zero = null,
                this._crossFade.dispose(),
                this._crossFade = null,
                this._splitter.dispose(),
                this._splitter = null,
                this._merger.dispose(),
                this._merger = null,
                this.pan.dispose(),
                this.pan = null,
                this._a2g.dispose(),
                this._a2g = null),
                this
            }
            ,
            t.Panner
        }),
        t(function(t) {
            return t.Panner3D = function() {
                var e = t.defaults(arguments, ["positionX", "positionY", "positionZ"], t.Panner3D);
                t.AudioNode.call(this),
                this._panner = this.input = this.output = this.context.createPanner(),
                this._panner.panningModel = e.panningModel,
                this._panner.maxDistance = e.maxDistance,
                this._panner.distanceModel = e.distanceModel,
                this._panner.coneOuterGain = e.coneOuterGain,
                this._panner.coneOuterAngle = e.coneOuterAngle,
                this._panner.coneInnerAngle = e.coneInnerAngle,
                this._panner.refDistance = e.refDistance,
                this._panner.rolloffFactor = e.rolloffFactor,
                this._orientation = [e.orientationX, e.orientationY, e.orientationZ],
                this._position = [e.positionX, e.positionY, e.positionZ],
                this.orientationX = e.orientationX,
                this.orientationY = e.orientationY,
                this.orientationZ = e.orientationZ,
                this.positionX = e.positionX,
                this.positionY = e.positionY,
                this.positionZ = e.positionZ
            }
            ,
            t.extend(t.Panner3D, t.AudioNode),
            t.Panner3D.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                orientationX: 0,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                maxDistance: 1e4,
                distanceModel: "inverse",
                coneOuterGain: 0,
                coneOuterAngle: 360,
                coneInnerAngle: 360,
                refDistance: 1,
                rolloffFactor: 1
            },
            t.Panner3D.prototype._rampTimeConstant = .01,
            t.Panner3D.prototype.setPosition = function(t, e, i) {
                if (this._panner.positionX) {
                    var n = this.now();
                    this._panner.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
                    this._panner.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
                    this._panner.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
                } else
                    this._panner.setPosition(t, e, i);
                return this._position = Array.prototype.slice.call(arguments),
                this
            }
            ,
            t.Panner3D.prototype.setOrientation = function(t, e, i) {
                if (this._panner.orientationX) {
                    var n = this.now();
                    this._panner.orientationX.setTargetAtTime(t, n, this._rampTimeConstant),
                    this._panner.orientationY.setTargetAtTime(e, n, this._rampTimeConstant),
                    this._panner.orientationZ.setTargetAtTime(i, n, this._rampTimeConstant)
                } else
                    this._panner.setOrientation(t, e, i);
                return this._orientation = Array.prototype.slice.call(arguments),
                this
            }
            ,
            Object.defineProperty(t.Panner3D.prototype, "positionX", {
                set: function(t) {
                    this._position[0] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[0]
                }
            }),
            Object.defineProperty(t.Panner3D.prototype, "positionY", {
                set: function(t) {
                    this._position[1] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[1]
                }
            }),
            Object.defineProperty(t.Panner3D.prototype, "positionZ", {
                set: function(t) {
                    this._position[2] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[2]
                }
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationX", {
                set: function(t) {
                    this._orientation[0] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[0]
                }
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationY", {
                set: function(t) {
                    this._orientation[1] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[1]
                }
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
                set: function(t) {
                    this._orientation[2] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[2]
                }
            }),
            t.Panner3D._aliasProperty = function(e) {
                Object.defineProperty(t.Panner3D.prototype, e, {
                    set: function(t) {
                        this._panner[e] = t
                    },
                    get: function() {
                        return this._panner[e]
                    }
                })
            }
            ,
            t.Panner3D._aliasProperty("panningModel"),
            t.Panner3D._aliasProperty("refDistance"),
            t.Panner3D._aliasProperty("rolloffFactor"),
            t.Panner3D._aliasProperty("distanceModel"),
            t.Panner3D._aliasProperty("coneInnerAngle"),
            t.Panner3D._aliasProperty("coneOuterAngle"),
            t.Panner3D._aliasProperty("coneOuterGain"),
            t.Panner3D._aliasProperty("maxDistance"),
            t.Panner3D.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._panner.disconnect(),
                this._panner = null,
                this._orientation = null,
                this._position = null,
                this
            }
            ,
            t.Panner3D
        }),
        t(function(t) {
            return t.PanVol = function() {
                var e = t.defaults(arguments, ["pan", "volume"], t.PanVol);
                t.AudioNode.call(this),
                this._panner = this.input = new t.Panner(e.pan),
                this.pan = this._panner.pan,
                this._volume = this.output = new t.Volume(e.volume),
                this.volume = this._volume.volume,
                this._panner.connect(this._volume),
                this.mute = e.mute,
                this._readOnly(["pan", "volume"])
            }
            ,
            t.extend(t.PanVol, t.AudioNode),
            t.PanVol.defaults = {
                pan: 0,
                volume: 0,
                mute: !1
            },
            Object.defineProperty(t.PanVol.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            t.PanVol.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._writable(["pan", "volume"]),
                this._panner.dispose(),
                this._panner = null,
                this.pan = null,
                this._volume.dispose(),
                this._volume = null,
                this.volume = null,
                this
            }
            ,
            t.PanVol
        }),
        t(function(t) {
            return t.Solo = function() {
                var e = t.defaults(arguments, ["solo"], t.Solo);
                t.AudioNode.call(this),
                this.input = this.output = new t.Gain,
                this._soloBind = this._soloed.bind(this),
                this.context.on("solo", this._soloBind),
                this.solo = e.solo
            }
            ,
            t.extend(t.Solo, t.AudioNode),
            t.Solo.defaults = {
                solo: !1
            },
            Object.defineProperty(t.Solo.prototype, "solo", {
                get: function() {
                    return this._isSoloed()
                },
                set: function(t) {
                    t ? this._addSolo() : this._removeSolo(),
                    this.context.emit("solo", this)
                }
            }),
            Object.defineProperty(t.Solo.prototype, "muted", {
                get: function() {
                    return 0 === this.input.gain.value
                }
            }),
            t.Solo.prototype._addSolo = function() {
                t.isArray(this.context._currentSolo) || (this.context._currentSolo = []),
                this._isSoloed() || this.context._currentSolo.push(this)
            }
            ,
            t.Solo.prototype._removeSolo = function() {
                if (this._isSoloed()) {
                    var t = this.context._currentSolo.indexOf(this);
                    this.context._currentSolo.splice(t, 1)
                }
            }
            ,
            t.Solo.prototype._isSoloed = function() {
                return !!t.isArray(this.context._currentSolo) && (0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this))
            }
            ,
            t.Solo.prototype._noSolos = function() {
                return !t.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length
            }
            ,
            t.Solo.prototype._soloed = function() {
                this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
            }
            ,
            t.Solo.prototype.dispose = function() {
                return this.context.off("solo", this._soloBind),
                this._removeSolo(),
                this._soloBind = null,
                t.AudioNode.prototype.dispose.call(this),
                this
            }
            ,
            t.Solo
        }),
        t(function(t) {
            return t.Waveform = function() {
                var e = t.defaults(arguments, ["size"], t.Waveform);
                e.type = t.Analyser.Type.Waveform,
                t.AudioNode.call(this),
                this._analyser = this.input = this.output = new t.Analyser(e)
            }
            ,
            t.extend(t.Waveform, t.AudioNode),
            t.Waveform.defaults = {
                size: 1024
            },
            t.Waveform.prototype.getValue = function() {
                return this._analyser.getValue()
            }
            ,
            Object.defineProperty(t.Waveform.prototype, "size", {
                get: function() {
                    return this._analyser.size
                },
                set: function(t) {
                    this._analyser.size = t
                }
            }),
            t.Waveform.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                this._analyser = null
            }
            ,
            t.Waveform
        }),
        t(function(t) {
            return t.CtrlInterpolate = function() {
                var e = t.defaults(arguments, ["values", "index"], t.CtrlInterpolate);
                t.call(this),
                this.values = e.values,
                this.index = e.index
            }
            ,
            t.extend(t.CtrlInterpolate),
            t.CtrlInterpolate.defaults = {
                index: 0,
                values: []
            },
            Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
                get: function() {
                    var t = this.index;
                    t = Math.min(t, this.values.length - 1);
                    var e = Math.floor(t)
                      , i = this.values[e]
                      , n = this.values[Math.ceil(t)];
                    return this._interpolate(t - e, i, n)
                }
            }),
            t.CtrlInterpolate.prototype._interpolate = function(e, i, n) {
                if (t.isArray(i)) {
                    for (var o = [], r = 0; r < i.length; r++)
                        o[r] = this._interpolate(e, i[r], n[r]);
                    return o
                }
                if (t.isObject(i)) {
                    var s = {};
                    for (var a in i)
                        s[a] = this._interpolate(e, i[a], n[a]);
                    return s
                }
                return i = this._toNumber(i),
                n = this._toNumber(n),
                (1 - e) * i + e * n
            }
            ,
            t.CtrlInterpolate.prototype._toNumber = function(e) {
                return t.isNumber(e) ? e : this.toSeconds(e)
            }
            ,
            t.CtrlInterpolate.prototype.dispose = function() {
                this.values = null
            }
            ,
            t.CtrlInterpolate
        }),
        t(function(t) {
            return t.CtrlMarkov = function(e, i) {
                t.call(this),
                this.values = t.defaultArg(e, {}),
                this.value = t.defaultArg(i, Object.keys(this.values)[0])
            }
            ,
            t.extend(t.CtrlMarkov),
            t.CtrlMarkov.prototype.next = function() {
                if (this.values.hasOwnProperty(this.value)) {
                    var e = this.values[this.value];
                    if (t.isArray(e))
                        for (var i = this._getProbDistribution(e), n = Math.random(), o = 0, r = 0; r < i.length; r++) {
                            var s = i[r];
                            if (n > o && n < o + s) {
                                var a = e[r];
                                t.isObject(a) ? this.value = a.value : this.value = a
                            }
                            o += s
                        }
                    else
                        this.value = e
                }
                return this.value
            }
            ,
            t.CtrlMarkov.prototype._getProbDistribution = function(e) {
                for (var i = [], n = 0, o = !1, r = 0; r < e.length; r++) {
                    var s = e[r];
                    t.isObject(s) ? (o = !0,
                    i[r] = s.probability) : i[r] = 1 / e.length,
                    n += i[r]
                }
                if (o)
                    for (var a = 0; a < i.length; a++)
                        i[a] = i[a] / n;
                return i
            }
            ,
            t.CtrlMarkov.prototype.dispose = function() {
                this.values = null
            }
            ,
            t.CtrlMarkov
        }),
        t(function(t) {
            return t.CtrlPattern = function() {
                var e = t.defaults(arguments, ["values", "type"], t.CtrlPattern);
                t.call(this),
                this.values = e.values,
                this.index = 0,
                this._type = null,
                this._shuffled = null,
                this._direction = null,
                this.type = e.type
            }
            ,
            t.extend(t.CtrlPattern),
            t.CtrlPattern.Type = {
                Up: "up",
                Down: "down",
                UpDown: "upDown",
                DownUp: "downUp",
                AlternateUp: "alternateUp",
                AlternateDown: "alternateDown",
                Random: "random",
                RandomWalk: "randomWalk",
                RandomOnce: "randomOnce"
            },
            t.CtrlPattern.defaults = {
                type: t.CtrlPattern.Type.Up,
                values: []
            },
            Object.defineProperty(t.CtrlPattern.prototype, "value", {
                get: function() {
                    if (0 !== this.values.length) {
                        if (1 === this.values.length)
                            return this.values[0];
                        this.index = Math.min(this.index, this.values.length - 1);
                        var e = this.values[this.index];
                        return this.type === t.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(),
                        e = this.values[this._shuffled[this.index]]),
                        e
                    }
                }
            }),
            Object.defineProperty(t.CtrlPattern.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(e) {
                    this._type = e,
                    this._shuffled = null,
                    this._type === t.CtrlPattern.Type.Up || this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.RandomOnce || this._type === t.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== t.CtrlPattern.Type.Down && this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1),
                    this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.AlternateUp ? this._direction = t.CtrlPattern.Type.Up : this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this._direction = t.CtrlPattern.Type.Down),
                    this._type === t.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === t.CtrlPattern.Random && (this.index = Math.floor(Math.random() * this.values.length))
                }
            }),
            t.CtrlPattern.prototype.next = function() {
                var e = this.type;
                return e === t.CtrlPattern.Type.Up ? ++this.index >= this.values.length && (this.index = 0) : e === t.CtrlPattern.Type.Down ? --this.index < 0 && (this.index = this.values.length - 1) : e === t.CtrlPattern.Type.UpDown || e === t.CtrlPattern.Type.DownUp ? (this._direction === t.CtrlPattern.Type.Up ? this.index++ : this.index--,
                this.index < 0 ? (this.index = 1,
                this._direction = t.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2,
                this._direction = t.CtrlPattern.Type.Down)) : e === t.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : e === t.CtrlPattern.Type.RandomWalk ? Math.random() < .5 ? (this.index--,
                this.index = Math.max(this.index, 0)) : (this.index++,
                this.index = Math.min(this.index, this.values.length - 1)) : e === t.CtrlPattern.Type.RandomOnce ? ++this.index >= this.values.length && (this.index = 0,
                this._shuffleValues()) : e === t.CtrlPattern.Type.AlternateUp ? (this._direction === t.CtrlPattern.Type.Up ? (this.index += 2,
                this._direction = t.CtrlPattern.Type.Down) : (this.index -= 1,
                this._direction = t.CtrlPattern.Type.Up),
                this.index >= this.values.length && (this.index = 0,
                this._direction = t.CtrlPattern.Type.Up)) : e === t.CtrlPattern.Type.AlternateDown && (this._direction === t.CtrlPattern.Type.Up ? (this.index += 1,
                this._direction = t.CtrlPattern.Type.Down) : (this.index -= 2,
                this._direction = t.CtrlPattern.Type.Up),
                this.index < 0 && (this.index = this.values.length - 1,
                this._direction = t.CtrlPattern.Type.Down)),
                this.value
            }
            ,
            t.CtrlPattern.prototype._shuffleValues = function() {
                var t = [];
                this._shuffled = [];
                for (var e = 0; e < this.values.length; e++)
                    t[e] = e;
                for (; t.length > 0; ) {
                    var i = t.splice(Math.floor(t.length * Math.random()), 1);
                    this._shuffled.push(i[0])
                }
            }
            ,
            t.CtrlPattern.prototype.dispose = function() {
                this._shuffled = null,
                this.values = null
            }
            ,
            t.CtrlPattern
        }),
        t(function(t) {
            return t.CtrlRandom = function() {
                var e = t.defaults(arguments, ["min", "max"], t.CtrlRandom);
                t.call(this),
                this.min = e.min,
                this.max = e.max,
                this.integer = e.integer
            }
            ,
            t.extend(t.CtrlRandom),
            t.CtrlRandom.defaults = {
                min: 0,
                max: 1,
                integer: !1
            },
            Object.defineProperty(t.CtrlRandom.prototype, "value", {
                get: function() {
                    var t = this.toSeconds(this.min)
                      , e = this.toSeconds(this.max)
                      , i = Math.random()
                      , n = i * t + (1 - i) * e;
                    return this.integer && (n = Math.floor(n)),
                    n
                }
            }),
            t.CtrlRandom
        }),
        t(function(t) {
            return window.AudioBuffer && !AudioBuffer.prototype.copyToChannel && (AudioBuffer.prototype.copyToChannel = function(t, e, i) {
                var n = this.getChannelData(e);
                i = i || 0;
                for (var o = 0; o < n.length; o++)
                    n[o + i] = t[o]
            }
            ,
            AudioBuffer.prototype.copyFromChannel = function(t, e, i) {
                var n = this.getChannelData(e);
                i = i || 0;
                for (var o = 0; o < t.length; o++)
                    t[o] = n[o + i]
            }
            ),
            t.Buffer = function() {
                var e = t.defaults(arguments, ["url", "onload", "onerror"], t.Buffer);
                t.call(this),
                this._buffer = null,
                this._reversed = e.reverse,
                this._xhr = null,
                e.url instanceof AudioBuffer || e.url instanceof t.Buffer ? (this.set(e.url),
                e.onload && e.onload(this)) : t.isString(e.url) && this.load(e.url, e.onload, e.onerror)
            }
            ,
            t.extend(t.Buffer),
            t.Buffer.defaults = {
                url: void 0,
                reverse: !1
            },
            t.Buffer.prototype.set = function(e) {
                return e instanceof t.Buffer ? this._buffer = e.get() : this._buffer = e,
                this
            }
            ,
            t.Buffer.prototype.get = function() {
                return this._buffer
            }
            ,
            t.Buffer.prototype.load = function(e, i, n) {
                return new Promise(function(o, r) {
                    this._xhr = t.Buffer.load(e, function(t) {
                        this._xhr = null,
                        this.set(t),
                        o(this),
                        i && i(this)
                    }
                    .bind(this), function(t) {
                        this._xhr = null,
                        r(t),
                        n && n(t)
                    }
                    .bind(this))
                }
                .bind(this))
            }
            ,
            t.Buffer.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this._buffer = null,
                this._xhr && (t.Buffer._removeFromDownloadQueue(this._xhr),
                this._xhr.abort(),
                this._xhr = null),
                this
            }
            ,
            Object.defineProperty(t.Buffer.prototype, "loaded", {
                get: function() {
                    return this.length > 0
                }
            }),
            Object.defineProperty(t.Buffer.prototype, "duration", {
                get: function() {
                    return this._buffer ? this._buffer.duration : 0
                }
            }),
            Object.defineProperty(t.Buffer.prototype, "length", {
                get: function() {
                    return this._buffer ? this._buffer.length : 0
                }
            }),
            Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
                get: function() {
                    return this._buffer ? this._buffer.numberOfChannels : 0
                }
            }),
            t.Buffer.prototype.fromArray = function(t) {
                var e = t[0].length > 0
                  , i = e ? t.length : 1
                  , n = e ? t[0].length : t.length
                  , o = this.context.createBuffer(i, n, this.context.sampleRate);
                e || 1 !== i || (t = [t]);
                for (var r = 0; r < i; r++)
                    o.copyToChannel(t[r], r);
                return this._buffer = o,
                this
            }
            ,
            t.Buffer.prototype.toMono = function(e) {
                if (t.isNumber(e))
                    this.fromArray(this.toArray(e));
                else {
                    for (var i = new Float32Array(this.length), n = this.numberOfChannels, o = 0; o < n; o++)
                        for (var r = this.toArray(o), s = 0; s < r.length; s++)
                            i[s] += r[s];
                    i = i.map(function(t) {
                        return t / n
                    }),
                    this.fromArray(i)
                }
                return this
            }
            ,
            t.Buffer.prototype.toArray = function(e) {
                if (t.isNumber(e))
                    return this.getChannelData(e);
                if (1 === this.numberOfChannels)
                    return this.toArray(0);
                for (var i = [], n = 0; n < this.numberOfChannels; n++)
                    i[n] = this.getChannelData(n);
                return i
            }
            ,
            t.Buffer.prototype.getChannelData = function(t) {
                return this._buffer.getChannelData(t)
            }
            ,
            t.Buffer.prototype.slice = function(e, i) {
                i = t.defaultArg(i, this.duration);
                for (var n = Math.floor(this.context.sampleRate * this.toSeconds(e)), o = Math.floor(this.context.sampleRate * this.toSeconds(i)), r = [], s = 0; s < this.numberOfChannels; s++)
                    r[s] = this.toArray(s).slice(n, o);
                return (new t.Buffer).fromArray(r)
            }
            ,
            t.Buffer.prototype._reverse = function() {
                if (this.loaded)
                    for (var t = 0; t < this.numberOfChannels; t++)
                        Array.prototype.reverse.call(this.getChannelData(t));
                return this
            }
            ,
            Object.defineProperty(t.Buffer.prototype, "reverse", {
                get: function() {
                    return this._reversed
                },
                set: function(t) {
                    this._reversed !== t && (this._reversed = t,
                    this._reverse())
                }
            }),
            t.Emitter.mixin(t.Buffer),
            t.Buffer._downloadQueue = [],
            t.Buffer.baseUrl = "",
            t.Buffer.fromArray = function(e) {
                return (new t.Buffer).fromArray(e)
            }
            ,
            t.Buffer._removeFromDownloadQueue = function(e) {
                var i = t.Buffer._downloadQueue.indexOf(e);
                -1 !== i && t.Buffer._downloadQueue.splice(i, 1)
            }
            ,
            t.Buffer.load = function(e, i, n) {
                function o(e) {
                    if (t.Buffer._removeFromDownloadQueue(c),
                    t.Buffer.emit("error", e),
                    !n)
                        throw e;
                    n(e)
                }
                function r() {
                    for (var e = 0, i = 0; i < t.Buffer._downloadQueue.length; i++)
                        e += t.Buffer._downloadQueue[i].progress;
                    t.Buffer.emit("progress", e / t.Buffer._downloadQueue.length)
                }
                i = t.defaultArg(i, t.noOp);
                var s = e.match(/\[(.+\|?)+\]$/);
                if (s) {
                    for (var a = s[1].split("|"), u = a[0], l = 0; l < a.length; l++)
                        if (t.Buffer.supportsType(a[l])) {
                            u = a[l];
                            break
                        }
                    e = e.replace(s[0], u)
                }
                var c = new XMLHttpRequest;
                return c.open("GET", t.Buffer.baseUrl + e, !0),
                c.responseType = "arraybuffer",
                c.progress = 0,
                t.Buffer._downloadQueue.push(c),
                c.addEventListener("load", function() {
                    200 === c.status ? t.context.decodeAudioData(c.response, function(e) {
                        c.progress = 1,
                        r(),
                        i(e),
                        t.Buffer._removeFromDownloadQueue(c),
                        0 === t.Buffer._downloadQueue.length && t.Buffer.emit("load")
                    }, function() {
                        t.Buffer._removeFromDownloadQueue(c),
                        o("Tone.Buffer: could not decode audio data: " + e)
                    }) : o("Tone.Buffer: could not locate file: " + e)
                }),
                c.addEventListener("error", o),
                c.addEventListener("progress", function(t) {
                    t.lengthComputable && (c.progress = t.loaded / t.total * .95,
                    r())
                }),
                c.send(),
                c
            }
            ,
            t.Buffer.cancelDownloads = function() {
                return t.Buffer._downloadQueue.slice().forEach(function(e) {
                    t.Buffer._removeFromDownloadQueue(e),
                    e.abort()
                }),
                t.Buffer
            }
            ,
            t.Buffer.supportsType = function(t) {
                var e = t.split(".");
                return e = e[e.length - 1],
                "" !== document.createElement("audio").canPlayType("audio/" + e)
            }
            ,
            t.loaded = function() {
                function e() {
                    t.Buffer.off("load", i),
                    t.Buffer.off("error", n)
                }
                var i, n;
                return new Promise(function(e, o) {
                    i = function() {
                        e()
                    }
                    ,
                    n = function() {
                        o()
                    }
                    ,
                    t.Buffer.on("load", i),
                    t.Buffer.on("error", n)
                }
                ).then(e).catch(function(t) {
                    throw e(),
                    new Error(t)
                })
            }
            ,
            t.Buffer
        }),
        t(function(t) {
            return t.Buffers = function(e) {
                var i = Array.prototype.slice.call(arguments);
                i.shift();
                var n = t.defaults(i, ["onload", "baseUrl"], t.Buffers);
                t.call(this),
                this._buffers = {},
                this.baseUrl = n.baseUrl,
                this._loadingCount = 0;
                for (var o in e)
                    this._loadingCount++,
                    this.add(o, e[o], this._bufferLoaded.bind(this, n.onload))
            }
            ,
            t.extend(t.Buffers),
            t.Buffers.defaults = {
                onload: t.noOp,
                baseUrl: ""
            },
            t.Buffers.prototype.has = function(t) {
                return this._buffers.hasOwnProperty(t)
            }
            ,
            t.Buffers.prototype.get = function(t) {
                if (this.has(t))
                    return this._buffers[t];
                throw new Error("Tone.Buffers: no buffer named " + t)
            }
            ,
            t.Buffers.prototype._bufferLoaded = function(t) {
                0 === --this._loadingCount && t && t(this)
            }
            ,
            Object.defineProperty(t.Buffers.prototype, "loaded", {
                get: function() {
                    var t = !0;
                    for (var e in this._buffers) {
                        var i = this.get(e);
                        t = t && i.loaded
                    }
                    return t
                }
            }),
            t.Buffers.prototype.add = function(e, i, n) {
                return n = t.defaultArg(n, t.noOp),
                i instanceof t.Buffer ? (this._buffers[e] = i,
                n(this)) : i instanceof AudioBuffer ? (this._buffers[e] = new t.Buffer(i),
                n(this)) : t.isString(i) && (this._buffers[e] = new t.Buffer(this.baseUrl + i,n)),
                this
            }
            ,
            t.Buffers.prototype.dispose = function() {
                t.prototype.dispose.call(this);
                for (var e in this._buffers)
                    this._buffers[e].dispose();
                return this._buffers = null,
                this
            }
            ,
            t.Buffers
        }),
        t(function(t) {
            var e = {};
            return t.prototype.send = function(i, n) {
                e.hasOwnProperty(i) || (e[i] = this.context.createGain()),
                n = t.defaultArg(n, 0);
                var o = new t.Gain(n,t.Type.Decibels);
                return this.output.chain(o, e[i]),
                o
            }
            ,
            t.prototype.receive = function(t, i) {
                return e.hasOwnProperty(t) || (e[t] = this.context.createGain()),
                e[t].connect(this, 0, i),
                this
            }
            ,
            t.Context.on("init", function(t) {
                t.Buses ? e = t.Buses : (e = {},
                t.Buses = e)
            }),
            t
        }),
        t(function(t) {
            return t.Draw = function() {
                t.call(this),
                this._events = new t.Timeline,
                this.expiration = .25,
                this.anticipation = .008,
                this._boundDrawLoop = this._drawLoop.bind(this)
            }
            ,
            t.extend(t.Draw),
            t.Draw.prototype.schedule = function(t, e) {
                return this._events.add({
                    callback: t,
                    time: this.toSeconds(e)
                }),
                1 === this._events.length && requestAnimationFrame(this._boundDrawLoop),
                this
            }
            ,
            t.Draw.prototype.cancel = function(t) {
                return this._events.cancel(this.toSeconds(t)),
                this
            }
            ,
            t.Draw.prototype._drawLoop = function() {
                for (var e = t.now(); this._events.length && this._events.peek().time - this.anticipation <= e; ) {
                    var i = this._events.shift();
                    e - i.time <= this.expiration && i.callback()
                }
                this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop)
            }
            ,
            t.Draw = new t.Draw,
            t.Draw
        }),
        t(function(t) {
            t.Listener = function() {
                t.call(this),
                this._orientation = [0, 0, 0, 0, 0, 0],
                this._position = [0, 0, 0],
                t.getContext(function() {
                    this.set(e.defaults)
                }
                .bind(this))
            }
            ,
            t.extend(t.Listener),
            t.Listener.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                forwardX: 0,
                forwardY: 0,
                forwardZ: 1,
                upX: 0,
                upY: 1,
                upZ: 0
            },
            t.Listener.prototype._rampTimeConstant = .01,
            t.Listener.prototype.setPosition = function(t, e, i) {
                if (this.context.listener.positionX) {
                    var n = this.now();
                    this.context.listener.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
                    this.context.listener.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
                    this.context.listener.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
                } else
                    this.context.listener.setPosition(t, e, i);
                return this._position = Array.prototype.slice.call(arguments),
                this
            }
            ,
            t.Listener.prototype.setOrientation = function(t, e, i, n, o, r) {
                if (this.context.listener.forwardX) {
                    var s = this.now();
                    this.context.listener.forwardX.setTargetAtTime(t, s, this._rampTimeConstant),
                    this.context.listener.forwardY.setTargetAtTime(e, s, this._rampTimeConstant),
                    this.context.listener.forwardZ.setTargetAtTime(i, s, this._rampTimeConstant),
                    this.context.listener.upX.setTargetAtTime(n, s, this._rampTimeConstant),
                    this.context.listener.upY.setTargetAtTime(o, s, this._rampTimeConstant),
                    this.context.listener.upZ.setTargetAtTime(r, s, this._rampTimeConstant)
                } else
                    this.context.listener.setOrientation(t, e, i, n, o, r);
                return this._orientation = Array.prototype.slice.call(arguments),
                this
            }
            ,
            Object.defineProperty(t.Listener.prototype, "positionX", {
                set: function(t) {
                    this._position[0] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[0]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "positionY", {
                set: function(t) {
                    this._position[1] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[1]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "positionZ", {
                set: function(t) {
                    this._position[2] = t,
                    this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[2]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "forwardX", {
                set: function(t) {
                    this._orientation[0] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[0]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "forwardY", {
                set: function(t) {
                    this._orientation[1] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[1]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "forwardZ", {
                set: function(t) {
                    this._orientation[2] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[2]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "upX", {
                set: function(t) {
                    this._orientation[3] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[3]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "upY", {
                set: function(t) {
                    this._orientation[4] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[4]
                }
            }),
            Object.defineProperty(t.Listener.prototype, "upZ", {
                set: function(t) {
                    this._orientation[5] = t,
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[5]
                }
            }),
            t.Listener.prototype.dispose = function() {
                return this._orientation = null,
                this._position = null,
                this
            }
            ;
            var e = t.Listener;
            return t.Listener = new e,
            t.Context.on("init", function(i) {
                i.Listener instanceof e ? t.Listener = i.Listener : t.Listener = new e,
                i.Listener = t.Listener
            }),
            t.Listener
        }),
        t(function(t) {
            return !window.hasOwnProperty("OfflineAudioContext") && window.hasOwnProperty("webkitOfflineAudioContext") && (window.OfflineAudioContext = window.webkitOfflineAudioContext),
            t.OfflineContext = function(e, i, n) {
                var o = new OfflineAudioContext(e,i * n,n);
                t.Context.call(this, {
                    context: o,
                    clockSource: "offline",
                    lookAhead: 0,
                    updateInterval: 128 / n
                }),
                this._duration = i,
                this._currentTime = 0
            }
            ,
            t.extend(t.OfflineContext, t.Context),
            t.OfflineContext.prototype.now = function() {
                return this._currentTime
            }
            ,
            t.OfflineContext.prototype.render = function() {
                for (; this._duration - this._currentTime >= 0; )
                    this.emit("tick"),
                    this._currentTime += this.blockTime;
                return new Promise(function(t) {
                    this._context.oncomplete = function(e) {
                        t(e.renderedBuffer)
                    }
                    ,
                    this._context.startRendering()
                }
                .bind(this))
            }
            ,
            t.OfflineContext.prototype.close = function() {
                this._context = null
            }
            ,
            t.OfflineContext
        }),
        t(function(t) {
            return t.Offline = function(e, i) {
                var n = t.context.sampleRate
                  , o = t.context
                  , r = new t.OfflineContext(2,i,n);
                t.context = r,
                e(t.Transport);
                var s = r.render();
                return t.context = o,
                s.then(function(e) {
                    return new t.Buffer(e)
                })
            }
            ,
            t.Offline
        }),
        t(function(t) {
            return t.Effect = function() {
                var e = t.defaults(arguments, ["wet"], t.Effect);
                t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                this._dryWet = new t.CrossFade(e.wet),
                this.wet = this._dryWet.fade,
                this.effectSend = new t.Gain,
                this.effectReturn = new t.Gain,
                this.input.connect(this._dryWet.a),
                this.input.connect(this.effectSend),
                this.effectReturn.connect(this._dryWet.b),
                this._dryWet.connect(this.output),
                this._readOnly(["wet"])
            }
            ,
            t.extend(t.Effect, t.AudioNode),
            t.Effect.defaults = {
                wet: 1
            },
            t.Effect.prototype.connectEffect = function(t) {
                return this.effectSend.chain(t, this.effectReturn),
                this
            }
            ,
            t.Effect.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                this._dryWet = null,
                this.effectSend.dispose(),
                this.effectSend = null,
                this.effectReturn.dispose(),
                this.effectReturn = null,
                this._writable(["wet"]),
                this.wet = null,
                this
            }
            ,
            t.Effect
        }),
        t(function(t) {
            return t.AutoFilter = function() {
                var e = t.defaults(arguments, ["frequency", "baseFrequency", "octaves"], t.AutoFilter);
                t.Effect.call(this, e),
                this._lfo = new t.LFO({
                    frequency: e.frequency,
                    amplitude: e.depth
                }),
                this.depth = this._lfo.amplitude,
                this.frequency = this._lfo.frequency,
                this.filter = new t.Filter(e.filter),
                this._octaves = 0,
                this.connectEffect(this.filter),
                this._lfo.connect(this.filter.frequency),
                this.type = e.type,
                this._readOnly(["frequency", "depth"]),
                this.octaves = e.octaves,
                this.baseFrequency = e.baseFrequency
            }
            ,
            t.extend(t.AutoFilter, t.Effect),
            t.AutoFilter.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1,
                baseFrequency: 200,
                octaves: 2.6,
                filter: {
                    type: "lowpass",
                    rolloff: -12,
                    Q: 1
                }
            },
            t.AutoFilter.prototype.start = function(t) {
                return this._lfo.start(t),
                this
            }
            ,
            t.AutoFilter.prototype.stop = function(t) {
                return this._lfo.stop(t),
                this
            }
            ,
            t.AutoFilter.prototype.sync = function(t) {
                return this._lfo.sync(t),
                this
            }
            ,
            t.AutoFilter.prototype.unsync = function() {
                return this._lfo.unsync(),
                this
            }
            ,
            Object.defineProperty(t.AutoFilter.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }),
            Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
                get: function() {
                    return this._lfo.min
                },
                set: function(t) {
                    this._lfo.min = this.toFrequency(t),
                    this.octaves = this._octaves
                }
            }),
            Object.defineProperty(t.AutoFilter.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t,
                    this._lfo.max = this.baseFrequency * Math.pow(2, t)
                }
            }),
            t.AutoFilter.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                this._lfo = null,
                this.filter.dispose(),
                this.filter = null,
                this._writable(["frequency", "depth"]),
                this.frequency = null,
                this.depth = null,
                this
            }
            ,
            t.AutoFilter
        }),
        t(function(t) {
            return t.AutoPanner = function() {
                var e = t.defaults(arguments, ["frequency"], t.AutoPanner);
                t.Effect.call(this, e),
                this._lfo = new t.LFO({
                    frequency: e.frequency,
                    amplitude: e.depth,
                    min: -1,
                    max: 1
                }),
                this.depth = this._lfo.amplitude,
                this._panner = new t.Panner,
                this.frequency = this._lfo.frequency,
                this.connectEffect(this._panner),
                this._lfo.connect(this._panner.pan),
                this.type = e.type,
                this._readOnly(["depth", "frequency"])
            }
            ,
            t.extend(t.AutoPanner, t.Effect),
            t.AutoPanner.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1
            },
            t.AutoPanner.prototype.start = function(t) {
                return this._lfo.start(t),
                this
            }
            ,
            t.AutoPanner.prototype.stop = function(t) {
                return this._lfo.stop(t),
                this
            }
            ,
            t.AutoPanner.prototype.sync = function(t) {
                return this._lfo.sync(t),
                this
            }
            ,
            t.AutoPanner.prototype.unsync = function() {
                return this._lfo.unsync(),
                this
            }
            ,
            Object.defineProperty(t.AutoPanner.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }),
            t.AutoPanner.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                this._lfo = null,
                this._panner.dispose(),
                this._panner = null,
                this._writable(["depth", "frequency"]),
                this.frequency = null,
                this.depth = null,
                this
            }
            ,
            t.AutoPanner
        }),
        t(function(t) {
            return t.AutoWah = function() {
                var e = t.defaults(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah);
                t.Effect.call(this, e),
                this.follower = new t.Follower(e.follower),
                this._sweepRange = new t.ScaleExp(0,1,.5),
                this._baseFrequency = e.baseFrequency,
                this._octaves = e.octaves,
                this._inputBoost = new t.Gain,
                this._bandpass = new t.Filter({
                    rolloff: -48,
                    frequency: 0,
                    Q: e.Q
                }),
                this._peaking = new t.Filter(0,"peaking"),
                this._peaking.gain.value = e.gain,
                this.gain = this._peaking.gain,
                this.Q = this._bandpass.Q,
                this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange),
                this._sweepRange.connect(this._bandpass.frequency),
                this._sweepRange.connect(this._peaking.frequency),
                this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn),
                this._setSweepRange(),
                this.sensitivity = e.sensitivity,
                this._readOnly(["gain", "Q"])
            }
            ,
            t.extend(t.AutoWah, t.Effect),
            t.AutoWah.defaults = {
                baseFrequency: 100,
                octaves: 6,
                sensitivity: 0,
                Q: 2,
                gain: 2,
                follower: {
                    attack: .3,
                    release: .5
                }
            },
            Object.defineProperty(t.AutoWah.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t,
                    this._setSweepRange()
                }
            }),
            Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency
                },
                set: function(t) {
                    this._baseFrequency = t,
                    this._setSweepRange()
                }
            }),
            Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
                get: function() {
                    return t.gainToDb(1 / this._inputBoost.gain.value)
                },
                set: function(e) {
                    this._inputBoost.gain.value = 1 / t.dbToGain(e)
                }
            }),
            t.AutoWah.prototype._setSweepRange = function() {
                this._sweepRange.min = this._baseFrequency,
                this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
            }
            ,
            t.AutoWah.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this.follower.dispose(),
                this.follower = null,
                this._sweepRange.dispose(),
                this._sweepRange = null,
                this._bandpass.dispose(),
                this._bandpass = null,
                this._peaking.dispose(),
                this._peaking = null,
                this._inputBoost.dispose(),
                this._inputBoost = null,
                this._writable(["gain", "Q"]),
                this.gain = null,
                this.Q = null,
                this
            }
            ,
            t.AutoWah
        }),
        t(function(t) {
            return t.BitCrusher = function() {
                var e = t.defaults(arguments, ["bits"], t.BitCrusher);
                t.Effect.call(this, e);
                var i = 1 / Math.pow(2, e.bits - 1);
                this._subtract = new t.Subtract,
                this._modulo = new t.Modulo(i),
                this._bits = e.bits,
                this.effectSend.fan(this._subtract, this._modulo),
                this._modulo.connect(this._subtract, 0, 1),
                this._subtract.connect(this.effectReturn)
            }
            ,
            t.extend(t.BitCrusher, t.Effect),
            t.BitCrusher.defaults = {
                bits: 4
            },
            Object.defineProperty(t.BitCrusher.prototype, "bits", {
                get: function() {
                    return this._bits
                },
                set: function(t) {
                    this._bits = t;
                    var e = 1 / Math.pow(2, t - 1);
                    this._modulo.value = e
                }
            }),
            t.BitCrusher.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._subtract.dispose(),
                this._subtract = null,
                this._modulo.dispose(),
                this._modulo = null,
                this
            }
            ,
            t.BitCrusher
        }),
        t(function(t) {
            return t.Chebyshev = function() {
                var e = t.defaults(arguments, ["order"], t.Chebyshev);
                t.Effect.call(this, e),
                this._shaper = new t.WaveShaper(4096),
                this._order = e.order,
                this.connectEffect(this._shaper),
                this.order = e.order,
                this.oversample = e.oversample
            }
            ,
            t.extend(t.Chebyshev, t.Effect),
            t.Chebyshev.defaults = {
                order: 1,
                oversample: "none"
            },
            t.Chebyshev.prototype._getCoefficient = function(t, e, i) {
                return i.hasOwnProperty(e) ? i[e] : (i[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i),
                i[e])
            }
            ,
            Object.defineProperty(t.Chebyshev.prototype, "order", {
                get: function() {
                    return this._order
                },
                set: function(t) {
                    this._order = t;
                    for (var e = new Array(4096), i = e.length, n = 0; n < i; ++n) {
                        var o = 2 * n / i - 1;
                        e[n] = 0 === o ? 0 : this._getCoefficient(o, t, {})
                    }
                    this._shaper.curve = e
                }
            }),
            Object.defineProperty(t.Chebyshev.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    this._shaper.oversample = t
                }
            }),
            t.Chebyshev.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                this._shaper = null,
                this
            }
            ,
            t.Chebyshev
        }),
        t(function(t) {
            return t.StereoEffect = function() {
                t.AudioNode.call(this);
                var e = t.defaults(arguments, ["wet"], t.Effect);
                this.createInsOuts(1, 1),
                this._dryWet = new t.CrossFade(e.wet),
                this.wet = this._dryWet.fade,
                this._split = new t.Split,
                this.effectSendL = this._split.left,
                this.effectSendR = this._split.right,
                this._merge = new t.Merge,
                this.effectReturnL = this._merge.left,
                this.effectReturnR = this._merge.right,
                this.input.connect(this._split),
                this.input.connect(this._dryWet, 0, 0),
                this._merge.connect(this._dryWet, 0, 1),
                this._dryWet.connect(this.output),
                this._readOnly(["wet"])
            }
            ,
            t.extend(t.StereoEffect, t.Effect),
            t.StereoEffect.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                this._dryWet = null,
                this._split.dispose(),
                this._split = null,
                this._merge.dispose(),
                this._merge = null,
                this.effectSendL = null,
                this.effectSendR = null,
                this.effectReturnL = null,
                this.effectReturnR = null,
                this._writable(["wet"]),
                this.wet = null,
                this
            }
            ,
            t.StereoEffect
        }),
        t(function(t) {
            return t.FeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.Effect.call(this, e),
                this._feedbackGain = new t.Gain(e.feedback,t.Type.NormalRange),
                this.feedback = this._feedbackGain.gain,
                this.effectReturn.chain(this._feedbackGain, this.effectSend),
                this._readOnly(["feedback"])
            }
            ,
            t.extend(t.FeedbackEffect, t.Effect),
            t.FeedbackEffect.defaults = {
                feedback: .125
            },
            t.FeedbackEffect.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this._feedbackGain.dispose(),
                this._feedbackGain = null,
                this.feedback = null,
                this
            }
            ,
            t.FeedbackEffect
        }),
        t(function(t) {
            return t.StereoXFeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.StereoEffect.call(this, e),
                this.feedback = new t.Signal(e.feedback,t.Type.NormalRange),
                this._feedbackLR = new t.Gain,
                this._feedbackRL = new t.Gain,
                this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
                this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
                this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
                this._readOnly(["feedback"])
            }
            ,
            t.extend(t.StereoXFeedbackEffect, t.StereoEffect),
            t.StereoXFeedbackEffect.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this.feedback.dispose(),
                this.feedback = null,
                this._feedbackLR.dispose(),
                this._feedbackLR = null,
                this._feedbackRL.dispose(),
                this._feedbackRL = null,
                this
            }
            ,
            t.StereoXFeedbackEffect
        }),
        t(function(t) {
            return t.Chorus = function() {
                var e = t.defaults(arguments, ["frequency", "delayTime", "depth"], t.Chorus);
                t.StereoXFeedbackEffect.call(this, e),
                this._depth = e.depth,
                this._delayTime = e.delayTime / 1e3,
                this._lfoL = new t.LFO({
                    frequency: e.frequency,
                    min: 0,
                    max: 1
                }),
                this._lfoR = new t.LFO({
                    frequency: e.frequency,
                    min: 0,
                    max: 1,
                    phase: 180
                }),
                this._delayNodeL = new t.Delay,
                this._delayNodeR = new t.Delay,
                this.frequency = this._lfoL.frequency,
                this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
                this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
                this.effectSendL.connect(this.effectReturnL),
                this.effectSendR.connect(this.effectReturnR),
                this._lfoL.connect(this._delayNodeL.delayTime),
                this._lfoR.connect(this._delayNodeR.delayTime),
                this._lfoL.start(),
                this._lfoR.start(),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                this.depth = this._depth,
                this.frequency.value = e.frequency,
                this.type = e.type,
                this._readOnly(["frequency"]),
                this.spread = e.spread
            }
            ,
            t.extend(t.Chorus, t.StereoXFeedbackEffect),
            t.Chorus.defaults = {
                frequency: 1.5,
                delayTime: 3.5,
                depth: .7,
                feedback: .1,
                type: "sine",
                spread: 180
            },
            Object.defineProperty(t.Chorus.prototype, "depth", {
                get: function() {
                    return this._depth
                },
                set: function(t) {
                    this._depth = t;
                    var e = this._delayTime * t;
                    this._lfoL.min = Math.max(this._delayTime - e, 0),
                    this._lfoL.max = this._delayTime + e,
                    this._lfoR.min = Math.max(this._delayTime - e, 0),
                    this._lfoR.max = this._delayTime + e
                }
            }),
            Object.defineProperty(t.Chorus.prototype, "delayTime", {
                get: function() {
                    return 1e3 * this._delayTime
                },
                set: function(t) {
                    this._delayTime = t / 1e3,
                    this.depth = this._depth
                }
            }),
            Object.defineProperty(t.Chorus.prototype, "type", {
                get: function() {
                    return this._lfoL.type
                },
                set: function(t) {
                    this._lfoL.type = t,
                    this._lfoR.type = t
                }
            }),
            Object.defineProperty(t.Chorus.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase
                },
                set: function(t) {
                    this._lfoL.phase = 90 - t / 2,
                    this._lfoR.phase = t / 2 + 90
                }
            }),
            t.Chorus.prototype.dispose = function() {
                return t.StereoXFeedbackEffect.prototype.dispose.call(this),
                this._lfoL.dispose(),
                this._lfoL = null,
                this._lfoR.dispose(),
                this._lfoR = null,
                this._delayNodeL.dispose(),
                this._delayNodeL = null,
                this._delayNodeR.dispose(),
                this._delayNodeR = null,
                this._writable("frequency"),
                this.frequency = null,
                this
            }
            ,
            t.Chorus
        }),
        t(function(t) {
            return t.Convolver = function() {
                var e = t.defaults(arguments, ["url", "onload"], t.Convolver);
                t.Effect.call(this, e),
                this._convolver = this.context.createConvolver(),
                this._buffer = new t.Buffer,
                t.isString(e.url) ? this._buffer.load(e.url, function(t) {
                    this.buffer = t,
                    e.onload()
                }
                .bind(this)) : e.url && (this.buffer = e.url,
                e.onload()),
                this.connectEffect(this._convolver)
            }
            ,
            t.extend(t.Convolver, t.Effect),
            t.Convolver.defaults = {
                onload: t.noOp
            },
            Object.defineProperty(t.Convolver.prototype, "buffer", {
                get: function() {
                    return this._buffer.get()
                },
                set: function(t) {
                    this._buffer.set(t),
                    this._convolver.buffer = this._buffer.get()
                }
            }),
            t.Convolver.prototype.load = function(t, e) {
                return this._buffer.load(t, function(t) {
                    this.buffer = t,
                    e && e()
                }
                .bind(this))
            }
            ,
            t.Convolver.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._convolver.disconnect(),
                this._convolver = null,
                this._buffer.dispose(),
                this._buffer = null,
                this
            }
            ,
            t.Convolver
        }),
        t(function(t) {
            return t.Distortion = function() {
                var e = t.defaults(arguments, ["distortion"], t.Distortion);
                t.Effect.call(this, e),
                this._shaper = new t.WaveShaper(4096),
                this._distortion = e.distortion,
                this.connectEffect(this._shaper),
                this.distortion = e.distortion,
                this.oversample = e.oversample
            }
            ,
            t.extend(t.Distortion, t.Effect),
            t.Distortion.defaults = {
                distortion: .4,
                oversample: "none"
            },
            Object.defineProperty(t.Distortion.prototype, "distortion", {
                get: function() {
                    return this._distortion
                },
                set: function(t) {
                    this._distortion = t;
                    var e = 100 * t
                      , i = Math.PI / 180;
                    this._shaper.setMap(function(t) {
                        return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * i / (Math.PI + e * Math.abs(t))
                    })
                }
            }),
            Object.defineProperty(t.Distortion.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    this._shaper.oversample = t
                }
            }),
            t.Distortion.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                this._shaper = null,
                this
            }
            ,
            t.Distortion
        }),
        t(function(t) {
            return t.FeedbackDelay = function() {
                var e = t.defaults(arguments, ["delayTime", "feedback"], t.FeedbackDelay);
                t.FeedbackEffect.call(this, e),
                this._delayNode = new t.Delay(e.delayTime),
                this.delayTime = this._delayNode.delayTime,
                this.connectEffect(this._delayNode),
                this._readOnly(["delayTime"])
            }
            ,
            t.extend(t.FeedbackDelay, t.FeedbackEffect),
            t.FeedbackDelay.defaults = {
                delayTime: .25
            },
            t.FeedbackDelay.prototype.dispose = function() {
                return t.FeedbackEffect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                this._delayNode = null,
                this._writable(["delayTime"]),
                this.delayTime = null,
                this
            }
            ,
            t.FeedbackDelay
        }),
        t(function(t) {
            var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100]
              , i = [225, 556, 441, 341];
            return t.Freeverb = function() {
                var n = t.defaults(arguments, ["roomSize", "dampening"], t.Freeverb);
                t.StereoEffect.call(this, n),
                this.roomSize = new t.Signal(n.roomSize,t.Type.NormalRange),
                this.dampening = new t.Signal(n.dampening,t.Type.Frequency),
                this._combFilters = [],
                this._allpassFiltersL = [],
                this._allpassFiltersR = [];
                for (var o = 0; o < i.length; o++) {
                    var r = this.context.createBiquadFilter();
                    r.type = "allpass",
                    r.frequency.value = i[o],
                    this._allpassFiltersL.push(r)
                }
                for (var s = 0; s < i.length; s++) {
                    var a = this.context.createBiquadFilter();
                    a.type = "allpass",
                    a.frequency.value = i[s],
                    this._allpassFiltersR.push(a)
                }
                for (var u = 0; u < e.length; u++) {
                    var l = new t.LowpassCombFilter(e[u]);
                    u < e.length / 2 ? this.effectSendL.chain(l, this._allpassFiltersL[0]) : this.effectSendR.chain(l, this._allpassFiltersR[0]),
                    this.roomSize.connect(l.resonance),
                    this.dampening.connect(l.dampening),
                    this._combFilters.push(l)
                }
                t.connectSeries.apply(t, this._allpassFiltersL),
                t.connectSeries.apply(t, this._allpassFiltersR),
                this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL),
                this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR),
                this._readOnly(["roomSize", "dampening"])
            }
            ,
            t.extend(t.Freeverb, t.StereoEffect),
            t.Freeverb.defaults = {
                roomSize: .7,
                dampening: 3e3
            },
            t.Freeverb.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this);
                for (var e = 0; e < this._allpassFiltersL.length; e++)
                    this._allpassFiltersL[e].disconnect(),
                    this._allpassFiltersL[e] = null;
                this._allpassFiltersL = null;
                for (var i = 0; i < this._allpassFiltersR.length; i++)
                    this._allpassFiltersR[i].disconnect(),
                    this._allpassFiltersR[i] = null;
                this._allpassFiltersR = null;
                for (var n = 0; n < this._combFilters.length; n++)
                    this._combFilters[n].dispose(),
                    this._combFilters[n] = null;
                return this._combFilters = null,
                this._writable(["roomSize", "dampening"]),
                this.roomSize.dispose(),
                this.roomSize = null,
                this.dampening.dispose(),
                this.dampening = null,
                this
            }
            ,
            t.Freeverb
        }),
        t(function(t) {
            var e = [.06748, .06404, .08212, .09004]
              , i = [.773, .802, .753, .733]
              , n = [347, 113, 37];
            return t.JCReverb = function() {
                var o = t.defaults(arguments, ["roomSize"], t.JCReverb);
                t.StereoEffect.call(this, o),
                this.roomSize = new t.Signal(o.roomSize,t.Type.NormalRange),
                this._scaleRoomSize = new t.Scale(-.733,.197),
                this._allpassFilters = [],
                this._feedbackCombFilters = [];
                for (var r = 0; r < n.length; r++) {
                    var s = this.context.createBiquadFilter();
                    s.type = "allpass",
                    s.frequency.value = n[r],
                    this._allpassFilters.push(s)
                }
                for (var a = 0; a < e.length; a++) {
                    var u = new t.FeedbackCombFilter(e[a],.1);
                    this._scaleRoomSize.connect(u.resonance),
                    u.resonance.value = i[a],
                    this._allpassFilters[this._allpassFilters.length - 1].connect(u),
                    a < e.length / 2 ? u.connect(this.effectReturnL) : u.connect(this.effectReturnR),
                    this._feedbackCombFilters.push(u)
                }
                this.roomSize.connect(this._scaleRoomSize),
                t.connectSeries.apply(t, this._allpassFilters),
                this.effectSendL.connect(this._allpassFilters[0]),
                this.effectSendR.connect(this._allpassFilters[0]),
                this._readOnly(["roomSize"])
            }
            ,
            t.extend(t.JCReverb, t.StereoEffect),
            t.JCReverb.defaults = {
                roomSize: .5
            },
            t.JCReverb.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this);
                for (var e = 0; e < this._allpassFilters.length; e++)
                    this._allpassFilters[e].disconnect(),
                    this._allpassFilters[e] = null;
                this._allpassFilters = null;
                for (var i = 0; i < this._feedbackCombFilters.length; i++)
                    this._feedbackCombFilters[i].dispose(),
                    this._feedbackCombFilters[i] = null;
                return this._feedbackCombFilters = null,
                this._writable(["roomSize"]),
                this.roomSize.dispose(),
                this.roomSize = null,
                this._scaleRoomSize.dispose(),
                this._scaleRoomSize = null,
                this
            }
            ,
            t.JCReverb
        }),
        t(function(t) {
            return t.MidSideEffect = function() {
                t.Effect.apply(this, arguments),
                this._midSideSplit = new t.MidSideSplit,
                this._midSideMerge = new t.MidSideMerge,
                this.midSend = this._midSideSplit.mid,
                this.sideSend = this._midSideSplit.side,
                this.midReturn = this._midSideMerge.mid,
                this.sideReturn = this._midSideMerge.side,
                this.effectSend.connect(this._midSideSplit),
                this._midSideMerge.connect(this.effectReturn)
            }
            ,
            t.extend(t.MidSideEffect, t.Effect),
            t.MidSideEffect.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this),
                this._midSideSplit.dispose(),
                this._midSideSplit = null,
                this._midSideMerge.dispose(),
                this._midSideMerge = null,
                this.midSend = null,
                this.sideSend = null,
                this.midReturn = null,
                this.sideReturn = null,
                this
            }
            ,
            t.MidSideEffect
        }),
        t(function(t) {
            return t.Phaser = function() {
                var e = t.defaults(arguments, ["frequency", "octaves", "baseFrequency"], t.Phaser);
                t.StereoEffect.call(this, e),
                this._lfoL = new t.LFO(e.frequency,0,1),
                this._lfoR = new t.LFO(e.frequency,0,1),
                this._lfoR.phase = 180,
                this._baseFrequency = e.baseFrequency,
                this._octaves = e.octaves,
                this.Q = new t.Signal(e.Q,t.Type.Positive),
                this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q),
                this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q),
                this.frequency = this._lfoL.frequency,
                this.frequency.value = e.frequency,
                this.effectSendL.connect(this._filtersL[0]),
                this.effectSendR.connect(this._filtersR[0]),
                this._filtersL[e.stages - 1].connect(this.effectReturnL),
                this._filtersR[e.stages - 1].connect(this.effectReturnR),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                this.baseFrequency = e.baseFrequency,
                this.octaves = e.octaves,
                this._lfoL.start(),
                this._lfoR.start(),
                this._readOnly(["frequency", "Q"])
            }
            ,
            t.extend(t.Phaser, t.StereoEffect),
            t.Phaser.defaults = {
                frequency: .5,
                octaves: 3,
                stages: 10,
                Q: 10,
                baseFrequency: 350
            },
            t.Phaser.prototype._makeFilters = function(e, i, n) {
                for (var o = new Array(e), r = 0; r < e; r++) {
                    var s = this.context.createBiquadFilter();
                    s.type = "allpass",
                    n.connect(s.Q),
                    i.connect(s.frequency),
                    o[r] = s
                }
                return t.connectSeries.apply(t, o),
                o
            }
            ,
            Object.defineProperty(t.Phaser.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t;
                    var e = this._baseFrequency * Math.pow(2, t);
                    this._lfoL.max = e,
                    this._lfoR.max = e
                }
            }),
            Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency
                },
                set: function(t) {
                    this._baseFrequency = t,
                    this._lfoL.min = t,
                    this._lfoR.min = t,
                    this.octaves = this._octaves
                }
            }),
            t.Phaser.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this),
                this._writable(["frequency", "Q"]),
                this.Q.dispose(),
                this.Q = null,
                this._lfoL.dispose(),
                this._lfoL = null,
                this._lfoR.dispose(),
                this._lfoR = null;
                for (var e = 0; e < this._filtersL.length; e++)
                    this._filtersL[e].disconnect(),
                    this._filtersL[e] = null;
                this._filtersL = null;
                for (var i = 0; i < this._filtersR.length; i++)
                    this._filtersR[i].disconnect(),
                    this._filtersR[i] = null;
                return this._filtersR = null,
                this.frequency = null,
                this
            }
            ,
            t.Phaser
        }),
        t(function(t) {
            return t.PingPongDelay = function() {
                var e = t.defaults(arguments, ["delayTime", "feedback"], t.PingPongDelay);
                t.StereoXFeedbackEffect.call(this, e),
                this._leftDelay = new t.Delay(0,e.maxDelayTime),
                this._rightDelay = new t.Delay(0,e.maxDelayTime),
                this._rightPreDelay = new t.Delay(0,e.maxDelayTime),
                this.delayTime = new t.Signal(e.delayTime,t.Type.Time),
                this.effectSendL.chain(this._leftDelay, this.effectReturnL),
                this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR),
                this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime),
                this._feedbackLR.disconnect(),
                this._feedbackLR.connect(this._rightDelay),
                this._readOnly(["delayTime"])
            }
            ,
            t.extend(t.PingPongDelay, t.StereoXFeedbackEffect),
            t.PingPongDelay.defaults = {
                delayTime: .25,
                maxDelayTime: 1
            },
            t.PingPongDelay.prototype.dispose = function() {
                return t.StereoXFeedbackEffect.prototype.dispose.call(this),
                this._leftDelay.dispose(),
                this._leftDelay = null,
                this._rightDelay.dispose(),
                this._rightDelay = null,
                this._rightPreDelay.dispose(),
                this._rightPreDelay = null,
                this._writable(["delayTime"]),
                this.delayTime.dispose(),
                this.delayTime = null,
                this
            }
            ,
            t.PingPongDelay
        }),
        t(function(t) {
            return t.PitchShift = function() {
                var e = t.defaults(arguments, ["pitch"], t.PitchShift);
                t.FeedbackEffect.call(this, e),
                this._frequency = new t.Signal(0),
                this._delayA = new t.Delay(0,1),
                this._lfoA = new t.LFO({
                    min: 0,
                    max: .1,
                    type: "sawtooth"
                }).connect(this._delayA.delayTime),
                this._delayB = new t.Delay(0,1),
                this._lfoB = new t.LFO({
                    min: 0,
                    max: .1,
                    type: "sawtooth",
                    phase: 180
                }).connect(this._delayB.delayTime),
                this._crossFade = new t.CrossFade,
                this._crossFadeLFO = new t.LFO({
                    min: 0,
                    max: 1,
                    type: "triangle",
                    phase: 90
                }).connect(this._crossFade.fade),
                this._feedbackDelay = new t.Delay(e.delayTime),
                this.delayTime = this._feedbackDelay.delayTime,
                this._readOnly("delayTime"),
                this._pitch = e.pitch,
                this._windowSize = e.windowSize,
                this._delayA.connect(this._crossFade.a),
                this._delayB.connect(this._crossFade.b),
                this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency),
                this.effectSend.fan(this._delayA, this._delayB),
                this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                var i = this.now();
                this._lfoA.start(i),
                this._lfoB.start(i),
                this._crossFadeLFO.start(i),
                this.windowSize = this._windowSize
            }
            ,
            t.extend(t.PitchShift, t.FeedbackEffect),
            t.PitchShift.defaults = {
                pitch: 0,
                windowSize: .1,
                delayTime: 0,
                feedback: 0
            },
            Object.defineProperty(t.PitchShift.prototype, "pitch", {
                get: function() {
                    return this._pitch
                },
                set: function(e) {
                    this._pitch = e;
                    var i = 0;
                    e < 0 ? (this._lfoA.min = 0,
                    this._lfoA.max = this._windowSize,
                    this._lfoB.min = 0,
                    this._lfoB.max = this._windowSize,
                    i = t.intervalToFrequencyRatio(e - 1) + 1) : (this._lfoA.min = this._windowSize,
                    this._lfoA.max = 0,
                    this._lfoB.min = this._windowSize,
                    this._lfoB.max = 0,
                    i = t.intervalToFrequencyRatio(e) - 1),
                    this._frequency.value = i * (1.2 / this._windowSize)
                }
            }),
            Object.defineProperty(t.PitchShift.prototype, "windowSize", {
                get: function() {
                    return this._windowSize
                },
                set: function(t) {
                    this._windowSize = this.toSeconds(t),
                    this.pitch = this._pitch
                }
            }),
            t.PitchShift.prototype.dispose = function() {
                return t.FeedbackEffect.prototype.dispose.call(this),
                this._frequency.dispose(),
                this._frequency = null,
                this._delayA.disconnect(),
                this._delayA = null,
                this._delayB.disconnect(),
                this._delayB = null,
                this._lfoA.dispose(),
                this._lfoA = null,
                this._lfoB.dispose(),
                this._lfoB = null,
                this._crossFade.dispose(),
                this._crossFade = null,
                this._crossFadeLFO.dispose(),
                this._crossFadeLFO = null,
                this._writable("delayTime"),
                this._feedbackDelay.dispose(),
                this._feedbackDelay = null,
                this.delayTime = null,
                this
            }
            ,
            t.PitchShift
        }),
        t(function(t) {
            return t.StereoFeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.StereoEffect.call(this, e),
                this.feedback = new t.Signal(e.feedback,t.Type.NormalRange),
                this._feedbackL = new t.Gain,
                this._feedbackR = new t.Gain,
                this.effectReturnL.chain(this._feedbackL, this.effectSendL),
                this.effectReturnR.chain(this._feedbackR, this.effectSendR),
                this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
                this._readOnly(["feedback"])
            }
            ,
            t.extend(t.StereoFeedbackEffect, t.StereoEffect),
            t.StereoFeedbackEffect.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this.feedback.dispose(),
                this.feedback = null,
                this._feedbackL.dispose(),
                this._feedbackL = null,
                this._feedbackR.dispose(),
                this._feedbackR = null,
                this
            }
            ,
            t.StereoFeedbackEffect
        }),
        t(function(t) {
            return t.StereoWidener = function() {
                var e = t.defaults(arguments, ["width"], t.StereoWidener);
                t.MidSideEffect.call(this, e),
                this.width = new t.Signal(e.width,t.Type.NormalRange),
                this._midMult = new t.Expr("$0 * ($1 * (1 - $2))"),
                this._sideMult = new t.Expr("$0 * ($1 * $2)"),
                this._two = new t.Signal(2),
                this._two.connect(this._midMult, 0, 1),
                this.width.connect(this._midMult, 0, 2),
                this._two.connect(this._sideMult, 0, 1),
                this.width.connect(this._sideMult, 0, 2),
                this.midSend.chain(this._midMult, this.midReturn),
                this.sideSend.chain(this._sideMult, this.sideReturn),
                this._readOnly(["width"])
            }
            ,
            t.extend(t.StereoWidener, t.MidSideEffect),
            t.StereoWidener.defaults = {
                width: .5
            },
            t.StereoWidener.prototype.dispose = function() {
                return t.MidSideEffect.prototype.dispose.call(this),
                this._writable(["width"]),
                this.width.dispose(),
                this.width = null,
                this._midMult.dispose(),
                this._midMult = null,
                this._sideMult.dispose(),
                this._sideMult = null,
                this._two.dispose(),
                this._two = null,
                this
            }
            ,
            t.StereoWidener
        }),
        t(function(t) {
            return t.Tremolo = function() {
                var e = t.defaults(arguments, ["frequency", "depth"], t.Tremolo);
                t.StereoEffect.call(this, e),
                this._lfoL = new t.LFO({
                    phase: e.spread,
                    min: 1,
                    max: 0
                }),
                this._lfoR = new t.LFO({
                    phase: e.spread,
                    min: 1,
                    max: 0
                }),
                this._amplitudeL = new t.Gain,
                this._amplitudeR = new t.Gain,
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.depth = new t.Signal(e.depth,t.Type.NormalRange),
                this._readOnly(["frequency", "depth"]),
                this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
                this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
                this._lfoL.connect(this._amplitudeL.gain),
                this._lfoR.connect(this._amplitudeR.gain),
                this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
                this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
                this.type = e.type,
                this.spread = e.spread
            }
            ,
            t.extend(t.Tremolo, t.StereoEffect),
            t.Tremolo.defaults = {
                frequency: 10,
                type: "sine",
                depth: .5,
                spread: 180
            },
            t.Tremolo.prototype.start = function(t) {
                return this._lfoL.start(t),
                this._lfoR.start(t),
                this
            }
            ,
            t.Tremolo.prototype.stop = function(t) {
                return this._lfoL.stop(t),
                this._lfoR.stop(t),
                this
            }
            ,
            t.Tremolo.prototype.sync = function(t) {
                return this._lfoL.sync(t),
                this._lfoR.sync(t),
                this
            }
            ,
            t.Tremolo.prototype.unsync = function() {
                return this._lfoL.unsync(),
                this._lfoR.unsync(),
                this
            }
            ,
            Object.defineProperty(t.Tremolo.prototype, "type", {
                get: function() {
                    return this._lfoL.type
                },
                set: function(t) {
                    this._lfoL.type = t,
                    this._lfoR.type = t
                }
            }),
            Object.defineProperty(t.Tremolo.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase
                },
                set: function(t) {
                    this._lfoL.phase = 90 - t / 2,
                    this._lfoR.phase = t / 2 + 90
                }
            }),
            t.Tremolo.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this),
                this._writable(["frequency", "depth"]),
                this._lfoL.dispose(),
                this._lfoL = null,
                this._lfoR.dispose(),
                this._lfoR = null,
                this._amplitudeL.dispose(),
                this._amplitudeL = null,
                this._amplitudeR.dispose(),
                this._amplitudeR = null,
                this.frequency = null,
                this.depth = null,
                this
            }
            ,
            t.Tremolo
        }),
        t(function(t) {
            return t.Vibrato = function() {
                var e = t.defaults(arguments, ["frequency", "depth"], t.Vibrato);
                t.Effect.call(this, e),
                this._delayNode = new t.Delay(0,e.maxDelay),
                this._lfo = new t.LFO({
                    type: e.type,
                    min: 0,
                    max: e.maxDelay,
                    frequency: e.frequency,
                    phase: -90
                }).start().connect(this._delayNode.delayTime),
                this.frequency = this._lfo.frequency,
                this.depth = this._lfo.amplitude,
                this.depth.value = e.depth,
                this._readOnly(["frequency", "depth"]),
                this.effectSend.chain(this._delayNode, this.effectReturn)
            }
            ,
            t.extend(t.Vibrato, t.Effect),
            t.Vibrato.defaults = {
                maxDelay: .005,
                frequency: 5,
                depth: .1,
                type: "sine"
            },
            Object.defineProperty(t.Vibrato.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }),
            t.Vibrato.prototype.dispose = function() {
                t.Effect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                this._delayNode = null,
                this._lfo.dispose(),
                this._lfo = null,
                this._writable(["frequency", "depth"]),
                this.frequency = null,
                this.depth = null
            }
            ,
            t.Vibrato
        }),
        t(function(t) {
            return t.Event = function() {
                var e = t.defaults(arguments, ["callback", "value"], t.Event);
                t.call(this),
                this._loop = e.loop,
                this.callback = e.callback,
                this.value = e.value,
                this._loopStart = this.toTicks(e.loopStart),
                this._loopEnd = this.toTicks(e.loopEnd),
                this._state = new t.TimelineState(t.State.Stopped),
                this._playbackRate = 1,
                this._startOffset = 0,
                this._probability = e.probability,
                this._humanize = e.humanize,
                this.mute = e.mute,
                this.playbackRate = e.playbackRate
            }
            ,
            t.extend(t.Event),
            t.Event.defaults = {
                callback: t.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                value: null,
                probability: 1,
                mute: !1,
                humanize: !1
            },
            t.Event.prototype._rescheduleEvents = function(e) {
                return e = t.defaultArg(e, -1),
                this._state.forEachFrom(e, function(e) {
                    var i;
                    if (e.state === t.State.Started) {
                        t.isUndef(e.id) || t.Transport.clear(e.id);
                        var n = e.time + Math.round(this.startOffset / this._playbackRate);
                        if (this._loop) {
                            i = 1 / 0,
                            t.isNumber(this._loop) && (i = this._loop * this._getLoopDuration());
                            var o = this._state.getAfter(n);
                            null !== o && (i = Math.min(i, o.time - n)),
                            i !== 1 / 0 && (this._state.setStateAtTime(t.State.Stopped, n + i + 1),
                            i = t.Time(i, "i"));
                            var r = t.Time(this._getLoopDuration(), "i");
                            e.id = t.Transport.scheduleRepeat(this._tick.bind(this), r, t.TransportTime(n, "i"), i)
                        } else
                            e.id = t.Transport.schedule(this._tick.bind(this), n + "i")
                    }
                }
                .bind(this)),
                this
            }
            ,
            Object.defineProperty(t.Event.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(t.Transport.ticks)
                }
            }),
            Object.defineProperty(t.Event.prototype, "startOffset", {
                get: function() {
                    return this._startOffset
                },
                set: function(t) {
                    this._startOffset = t
                }
            }),
            Object.defineProperty(t.Event.prototype, "probability", {
                get: function() {
                    return this._probability
                },
                set: function(t) {
                    this._probability = t
                }
            }),
            Object.defineProperty(t.Event.prototype, "humanize", {
                get: function() {
                    return this._humanize
                },
                set: function(t) {
                    this._humanize = t
                }
            }),
            t.Event.prototype.start = function(e) {
                return e = this.toTicks(e),
                this._state.getValueAtTime(e) === t.State.Stopped && (this._state.add({
                    state: t.State.Started,
                    time: e,
                    id: void 0
                }),
                this._rescheduleEvents(e)),
                this
            }
            ,
            t.Event.prototype.stop = function(e) {
                if (this.cancel(e),
                e = this.toTicks(e),
                this._state.getValueAtTime(e) === t.State.Started) {
                    this._state.setStateAtTime(t.State.Stopped, e);
                    var i = this._state.getBefore(e)
                      , n = e;
                    null !== i && (n = i.time),
                    this._rescheduleEvents(n)
                }
                return this
            }
            ,
            t.Event.prototype.cancel = function(e) {
                return e = t.defaultArg(e, -1 / 0),
                e = this.toTicks(e),
                this._state.forEachFrom(e, function(e) {
                    t.Transport.clear(e.id)
                }),
                this._state.cancel(e),
                this
            }
            ,
            t.Event.prototype._tick = function(e) {
                if (!this.mute && this._state.getValueAtTime(t.Transport.ticks) === t.State.Started) {
                    if (this.probability < 1 && Math.random() > this.probability)
                        return;
                    if (this.humanize) {
                        var i = .02;
                        t.isBoolean(this.humanize) || (i = this.toSeconds(this.humanize)),
                        e += (2 * Math.random() - 1) * i
                    }
                    this.callback(e, this.value)
                }
            }
            ,
            t.Event.prototype._getLoopDuration = function() {
                return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
            }
            ,
            Object.defineProperty(t.Event.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(t) {
                    this._loop = t,
                    this._rescheduleEvents()
                }
            }),
            Object.defineProperty(t.Event.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t,
                    this._rescheduleEvents()
                }
            }),
            Object.defineProperty(t.Event.prototype, "loopEnd", {
                get: function() {
                    return t.TransportTime(this._loopEnd, "i").toNotation()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t),
                    this._loop && this._rescheduleEvents()
                }
            }),
            Object.defineProperty(t.Event.prototype, "loopStart", {
                get: function() {
                    return t.TransportTime(this._loopStart, "i").toNotation()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t),
                    this._loop && this._rescheduleEvents()
                }
            }),
            Object.defineProperty(t.Event.prototype, "progress", {
                get: function() {
                    if (this._loop) {
                        var e = t.Transport.ticks
                          , i = this._state.get(e);
                        if (null !== i && i.state === t.State.Started) {
                            var n = this._getLoopDuration();
                            return (e - i.time) % n / n
                        }
                        return 0
                    }
                    return 0
                }
            }),
            t.Event.prototype.dispose = function() {
                this.cancel(),
                this._state.dispose(),
                this._state = null,
                this.callback = null,
                this.value = null
            }
            ,
            t.Event
        }),
        t(function(t) {
            return t.Loop = function() {
                var e = t.defaults(arguments, ["callback", "interval"], t.Loop);
                t.call(this),
                this._event = new t.Event({
                    callback: this._tick.bind(this),
                    loop: !0,
                    loopEnd: e.interval,
                    playbackRate: e.playbackRate,
                    probability: e.probability
                }),
                this.callback = e.callback,
                this.iterations = e.iterations
            }
            ,
            t.extend(t.Loop),
            t.Loop.defaults = {
                interval: "4n",
                callback: t.noOp,
                playbackRate: 1,
                iterations: 1 / 0,
                probability: !0,
                mute: !1
            },
            t.Loop.prototype.start = function(t) {
                return this._event.start(t),
                this
            }
            ,
            t.Loop.prototype.stop = function(t) {
                return this._event.stop(t),
                this
            }
            ,
            t.Loop.prototype.cancel = function(t) {
                return this._event.cancel(t),
                this
            }
            ,
            t.Loop.prototype._tick = function(t) {
                this.callback(t)
            }
            ,
            Object.defineProperty(t.Loop.prototype, "state", {
                get: function() {
                    return this._event.state
                }
            }),
            Object.defineProperty(t.Loop.prototype, "progress", {
                get: function() {
                    return this._event.progress
                }
            }),
            Object.defineProperty(t.Loop.prototype, "interval", {
                get: function() {
                    return this._event.loopEnd
                },
                set: function(t) {
                    this._event.loopEnd = t
                }
            }),
            Object.defineProperty(t.Loop.prototype, "playbackRate", {
                get: function() {
                    return this._event.playbackRate
                },
                set: function(t) {
                    this._event.playbackRate = t
                }
            }),
            Object.defineProperty(t.Loop.prototype, "humanize", {
                get: function() {
                    return this._event.humanize
                },
                set: function(t) {
                    this._event.humanize = t
                }
            }),
            Object.defineProperty(t.Loop.prototype, "probability", {
                get: function() {
                    return this._event.probability
                },
                set: function(t) {
                    this._event.probability = t
                }
            }),
            Object.defineProperty(t.Loop.prototype, "mute", {
                get: function() {
                    return this._event.mute
                },
                set: function(t) {
                    this._event.mute = t
                }
            }),
            Object.defineProperty(t.Loop.prototype, "iterations", {
                get: function() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop
                },
                set: function(t) {
                    this._event.loop = t === 1 / 0 || t
                }
            }),
            t.Loop.prototype.dispose = function() {
                this._event.dispose(),
                this._event = null,
                this.callback = null
            }
            ,
            t.Loop
        }),
        t(function(t) {
            return t.Part = function() {
                var e = t.defaults(arguments, ["callback", "events"], t.Part);
                t.Event.call(this, e),
                this._events = [];
                for (var i = 0; i < e.events.length; i++)
                    Array.isArray(e.events[i]) ? this.add(e.events[i][0], e.events[i][1]) : this.add(e.events[i])
            }
            ,
            t.extend(t.Part, t.Event),
            t.Part.defaults = {
                callback: t.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                probability: 1,
                humanize: !1,
                mute: !1,
                events: []
            },
            t.Part.prototype.start = function(e, i) {
                var n = this.toTicks(e);
                return this._state.getValueAtTime(n) !== t.State.Started && (i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0),
                i = this.toTicks(i),
                this._state.add({
                    state: t.State.Started,
                    time: n,
                    offset: i
                }),
                this._forEach(function(t) {
                    this._startNote(t, n, i)
                })),
                this
            }
            ,
            t.Part.prototype._startNote = function(e, i, n) {
                i -= n,
                this._loop ? e.startOffset >= this._loopStart && e.startOffset < this._loopEnd ? (e.startOffset < n && (i += this._getLoopDuration()),
                e.start(t.TransportTime(i, "i"))) : e.startOffset < this._loopStart && e.startOffset >= n && (e.loop = !1,
                e.start(t.TransportTime(i, "i"))) : e.startOffset >= n && e.start(t.TransportTime(i, "i"))
            }
            ,
            Object.defineProperty(t.Part.prototype, "startOffset", {
                get: function() {
                    return this._startOffset
                },
                set: function(t) {
                    this._startOffset = t,
                    this._forEach(function(t) {
                        t.startOffset += this._startOffset
                    })
                }
            }),
            t.Part.prototype.stop = function(e) {
                var i = this.toTicks(e);
                return this._state.cancel(i),
                this._state.setStateAtTime(t.State.Stopped, i),
                this._forEach(function(t) {
                    t.stop(e)
                }),
                this
            }
            ,
            t.Part.prototype.at = function(e, i) {
                e = t.TransportTime(e);
                for (var n = t.Time(1, "i").toSeconds(), o = 0; o < this._events.length; o++) {
                    var r = this._events[o];
                    if (Math.abs(e.toTicks() - r.startOffset) < n)
                        return t.isUndef(i) || (r.value = i),
                        r
                }
                return t.isUndef(i) ? null : (this.add(e, i),
                this._events[this._events.length - 1])
            }
            ,
            t.Part.prototype.add = function(e, i) {
                e.hasOwnProperty("time") && (i = e,
                e = i.time),
                e = this.toTicks(e);
                var n;
                return i instanceof t.Event ? (n = i,
                n.callback = this._tick.bind(this)) : n = new t.Event({
                    callback: this._tick.bind(this),
                    value: i
                }),
                n.startOffset = e,
                n.set({
                    loopEnd: this.loopEnd,
                    loopStart: this.loopStart,
                    loop: this.loop,
                    humanize: this.humanize,
                    playbackRate: this.playbackRate,
                    probability: this.probability
                }),
                this._events.push(n),
                this._restartEvent(n),
                this
            }
            ,
            t.Part.prototype._restartEvent = function(e) {
                this._state.forEach(function(i) {
                    i.state === t.State.Started ? this._startNote(e, i.time, i.offset) : e.stop(t.TransportTime(i.time, "i"))
                }
                .bind(this))
            }
            ,
            t.Part.prototype.remove = function(e, i) {
                e.hasOwnProperty("time") && (i = e,
                e = i.time),
                e = this.toTicks(e);
                for (var n = this._events.length - 1; n >= 0; n--) {
                    var o = this._events[n];
                    o instanceof t.Part ? o.remove(e, i) : o.startOffset === e && (t.isUndef(i) || !t.isUndef(i) && o.value === i) && (this._events.splice(n, 1),
                    o.dispose())
                }
                return this
            }
            ,
            t.Part.prototype.removeAll = function() {
                return this._forEach(function(t) {
                    t.dispose()
                }),
                this._events = [],
                this
            }
            ,
            t.Part.prototype.cancel = function(t) {
                return this._forEach(function(e) {
                    e.cancel(t)
                }),
                this._state.cancel(this.toTicks(t)),
                this
            }
            ,
            t.Part.prototype._forEach = function(e, i) {
                if (this._events) {
                    i = t.defaultArg(i, this);
                    for (var n = this._events.length - 1; n >= 0; n--) {
                        var o = this._events[n];
                        o instanceof t.Part ? o._forEach(e, i) : e.call(i, o)
                    }
                }
                return this
            }
            ,
            t.Part.prototype._setAll = function(t, e) {
                this._forEach(function(i) {
                    i[t] = e
                })
            }
            ,
            t.Part.prototype._tick = function(t, e) {
                this.mute || this.callback(t, e)
            }
            ,
            t.Part.prototype._testLoopBoundries = function(e) {
                e.startOffset < this._loopStart || e.startOffset >= this._loopEnd ? e.cancel(0) : e.state === t.State.Stopped && this._restartEvent(e)
            }
            ,
            Object.defineProperty(t.Part.prototype, "probability", {
                get: function() {
                    return this._probability
                },
                set: function(t) {
                    this._probability = t,
                    this._setAll("probability", t)
                }
            }),
            Object.defineProperty(t.Part.prototype, "humanize", {
                get: function() {
                    return this._humanize
                },
                set: function(t) {
                    this._humanize = t,
                    this._setAll("humanize", t)
                }
            }),
            Object.defineProperty(t.Part.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(t) {
                    this._loop = t,
                    this._forEach(function(e) {
                        e._loopStart = this._loopStart,
                        e._loopEnd = this._loopEnd,
                        e.loop = t,
                        this._testLoopBoundries(e)
                    })
                }
            }),
            Object.defineProperty(t.Part.prototype, "loopEnd", {
                get: function() {
                    return t.TransportTime(this._loopEnd, "i").toNotation()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t),
                    this._loop && this._forEach(function(e) {
                        e.loopEnd = t,
                        this._testLoopBoundries(e)
                    })
                }
            }),
            Object.defineProperty(t.Part.prototype, "loopStart", {
                get: function() {
                    return t.TransportTime(this._loopStart, "i").toNotation()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t),
                    this._loop && this._forEach(function(t) {
                        t.loopStart = this.loopStart,
                        this._testLoopBoundries(t)
                    })
                }
            }),
            Object.defineProperty(t.Part.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t,
                    this._setAll("playbackRate", t)
                }
            }),
            Object.defineProperty(t.Part.prototype, "length", {
                get: function() {
                    return this._events.length
                }
            }),
            t.Part.prototype.dispose = function() {
                return this.removeAll(),
                this._state.dispose(),
                this._state = null,
                this.callback = null,
                this._events = null,
                this
            }
            ,
            t.Part
        }),
        t(function(t) {
            return t.Pattern = function() {
                var e = t.defaults(arguments, ["callback", "values", "pattern"], t.Pattern);
                t.Loop.call(this, e),
                this._pattern = new t.CtrlPattern({
                    values: e.values,
                    type: e.pattern,
                    index: e.index
                })
            }
            ,
            t.extend(t.Pattern, t.Loop),
            t.Pattern.defaults = {
                pattern: t.CtrlPattern.Type.Up,
                callback: t.noOp,
                values: []
            },
            t.Pattern.prototype._tick = function(t) {
                this.callback(t, this._pattern.value),
                this._pattern.next()
            }
            ,
            Object.defineProperty(t.Pattern.prototype, "index", {
                get: function() {
                    return this._pattern.index
                },
                set: function(t) {
                    this._pattern.index = t
                }
            }),
            Object.defineProperty(t.Pattern.prototype, "values", {
                get: function() {
                    return this._pattern.values
                },
                set: function(t) {
                    this._pattern.values = t
                }
            }),
            Object.defineProperty(t.Pattern.prototype, "value", {
                get: function() {
                    return this._pattern.value
                }
            }),
            Object.defineProperty(t.Pattern.prototype, "pattern", {
                get: function() {
                    return this._pattern.type
                },
                set: function(t) {
                    this._pattern.type = t
                }
            }),
            t.Pattern.prototype.dispose = function() {
                t.Loop.prototype.dispose.call(this),
                this._pattern.dispose(),
                this._pattern = null
            }
            ,
            t.Pattern
        }),
        t(function(t) {
            return t.Sequence = function() {
                var e = t.defaults(arguments, ["callback", "events", "subdivision"], t.Sequence)
                  , i = e.events;
                if (delete e.events,
                t.Part.call(this, e),
                this._subdivision = this.toTicks(e.subdivision),
                t.isUndef(e.loopEnd) && !t.isUndef(i) && (this._loopEnd = i.length * this._subdivision),
                this._loop = !0,
                !t.isUndef(i))
                    for (var n = 0; n < i.length; n++)
                        this.add(n, i[n])
            }
            ,
            t.extend(t.Sequence, t.Part),
            t.Sequence.defaults = {
                subdivision: "4n"
            },
            Object.defineProperty(t.Sequence.prototype, "subdivision", {
                get: function() {
                    return t.Time(this._subdivision, "i").toNotation()
                }
            }),
            t.Sequence.prototype.at = function(e, i) {
                return t.isArray(i) && this.remove(e),
                t.Part.prototype.at.call(this, this._indexTime(e), i)
            }
            ,
            t.Sequence.prototype.add = function(e, i) {
                if (null === i)
                    return this;
                if (t.isArray(i)) {
                    var n = Math.round(this._subdivision / i.length);
                    i = new t.Sequence(this._tick.bind(this),i,t.Time(n, "i"))
                }
                return t.Part.prototype.add.call(this, this._indexTime(e), i),
                this
            }
            ,
            t.Sequence.prototype.remove = function(e, i) {
                return t.Part.prototype.remove.call(this, this._indexTime(e), i),
                this
            }
            ,
            t.Sequence.prototype._indexTime = function(e) {
                return e instanceof t.TransportTime ? e : t.TransportTime(e * this._subdivision + this.startOffset, "i")
            }
            ,
            t.Sequence.prototype.dispose = function() {
                return t.Part.prototype.dispose.call(this),
                this
            }
            ,
            t.Sequence
        }),
        t(function(t) {
            return t.PulseOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "width"], t.Oscillator);
                t.Source.call(this, e),
                this.width = new t.Signal(e.width,t.Type.NormalRange),
                this._widthGate = new t.Gain,
                this._sawtooth = new t.Oscillator({
                    frequency: e.frequency,
                    detune: e.detune,
                    type: "sawtooth",
                    phase: e.phase
                }),
                this.frequency = this._sawtooth.frequency,
                this.detune = this._sawtooth.detune,
                this._thresh = new t.WaveShaper(function(t) {
                    return t < 0 ? -1 : 1
                }
                ),
                this._sawtooth.chain(this._thresh, this.output),
                this.width.chain(this._widthGate, this._thresh),
                this._readOnly(["width", "frequency", "detune"])
            }
            ,
            t.extend(t.PulseOscillator, t.Source),
            t.PulseOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                width: .2
            },
            t.PulseOscillator.prototype._start = function(t) {
                t = this.toSeconds(t),
                this._sawtooth.start(t),
                this._widthGate.gain.setValueAtTime(1, t)
            }
            ,
            t.PulseOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t),
                this._sawtooth.stop(t),
                this._widthGate.gain.setValueAtTime(0, t)
            }
            ,
            Object.defineProperty(t.PulseOscillator.prototype, "phase", {
                get: function() {
                    return this._sawtooth.phase
                },
                set: function(t) {
                    this._sawtooth.phase = t
                }
            }),
            Object.defineProperty(t.PulseOscillator.prototype, "type", {
                get: function() {
                    return "pulse"
                }
            }),
            Object.defineProperty(t.PulseOscillator.prototype, "partials", {
                get: function() {
                    return []
                }
            }),
            t.PulseOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._sawtooth.dispose(),
                this._sawtooth = null,
                this._writable(["width", "frequency", "detune"]),
                this.width.dispose(),
                this.width = null,
                this._widthGate.dispose(),
                this._widthGate = null,
                this._thresh.dispose(),
                this._thresh = null,
                this.frequency = null,
                this.detune = null,
                this
            }
            ,
            t.PulseOscillator
        }),
        t(function(t) {
            return t.PWMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator);
                t.Source.call(this, e),
                this._pulse = new t.PulseOscillator(e.modulationFrequency),
                this._pulse._sawtooth.type = "sine",
                this._modulator = new t.Oscillator({
                    frequency: e.frequency,
                    detune: e.detune,
                    phase: e.phase
                }),
                this._scale = new t.Multiply(2),
                this.frequency = this._modulator.frequency,
                this.detune = this._modulator.detune,
                this.modulationFrequency = this._pulse.frequency,
                this._modulator.chain(this._scale, this._pulse.width),
                this._pulse.connect(this.output),
                this._readOnly(["modulationFrequency", "frequency", "detune"])
            }
            ,
            t.extend(t.PWMOscillator, t.Source),
            t.PWMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                modulationFrequency: .4
            },
            t.PWMOscillator.prototype._start = function(t) {
                t = this.toSeconds(t),
                this._modulator.start(t),
                this._pulse.start(t)
            }
            ,
            t.PWMOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t),
                this._modulator.stop(t),
                this._pulse.stop(t)
            }
            ,
            Object.defineProperty(t.PWMOscillator.prototype, "type", {
                get: function() {
                    return "pwm"
                }
            }),
            Object.defineProperty(t.PWMOscillator.prototype, "partials", {
                get: function() {
                    return []
                }
            }),
            Object.defineProperty(t.PWMOscillator.prototype, "phase", {
                get: function() {
                    return this._modulator.phase
                },
                set: function(t) {
                    this._modulator.phase = t
                }
            }),
            t.PWMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._pulse.dispose(),
                this._pulse = null,
                this._scale.dispose(),
                this._scale = null,
                this._modulator.dispose(),
                this._modulator = null,
                this._writable(["modulationFrequency", "frequency", "detune"]),
                this.frequency = null,
                this.detune = null,
                this.modulationFrequency = null,
                this
            }
            ,
            t.PWMOscillator
        }),
        t(function(t) {
            return t.FMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.FMOscillator);
                t.Source.call(this, e),
                this._carrier = new t.Oscillator(e.frequency,e.type),
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.detune = this._carrier.detune,
                this.detune.value = e.detune,
                this.modulationIndex = new t.Multiply(e.modulationIndex),
                this.modulationIndex.units = t.Type.Positive,
                this._modulator = new t.Oscillator(e.frequency,e.modulationType),
                this.harmonicity = new t.Multiply(e.harmonicity),
                this.harmonicity.units = t.Type.Positive,
                this._modulationNode = new t.Gain(0),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(this.harmonicity, this._modulator.frequency),
                this.frequency.chain(this.modulationIndex, this._modulationNode),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this.detune.connect(this._modulator.detune),
                this.phase = e.phase,
                this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"])
            }
            ,
            t.extend(t.FMOscillator, t.Source),
            t.FMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                modulationIndex: 2,
                modulationType: "square",
                harmonicity: 1
            },
            t.FMOscillator.prototype._start = function(t) {
                t = this.toSeconds(t),
                this._modulator.start(t),
                this._carrier.start(t)
            }
            ,
            t.FMOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t),
                this._modulator.stop(t),
                this._carrier.stop(t)
            }
            ,
            Object.defineProperty(t.FMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type
                },
                set: function(t) {
                    this._carrier.type = t
                }
            }),
            Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type
                },
                set: function(t) {
                    this._modulator.type = t
                }
            }),
            Object.defineProperty(t.FMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase
                },
                set: function(t) {
                    this._carrier.phase = t,
                    this._modulator.phase = t
                }
            }),
            Object.defineProperty(t.FMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials
                },
                set: function(t) {
                    this._carrier.partials = t
                }
            }),
            t.FMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]),
                this.frequency.dispose(),
                this.frequency = null,
                this.detune = null,
                this.harmonicity.dispose(),
                this.harmonicity = null,
                this._carrier.dispose(),
                this._carrier = null,
                this._modulator.dispose(),
                this._modulator = null,
                this._modulationNode.dispose(),
                this._modulationNode = null,
                this.modulationIndex.dispose(),
                this.modulationIndex = null,
                this
            }
            ,
            t.FMOscillator
        }),
        t(function(t) {
            return t.AMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.AMOscillator);
                t.Source.call(this, e),
                this._carrier = new t.Oscillator(e.frequency,e.type),
                this.frequency = this._carrier.frequency,
                this.detune = this._carrier.detune,
                this.detune.value = e.detune,
                this._modulator = new t.Oscillator(e.frequency,e.modulationType),
                this._modulationScale = new t.AudioToGain,
                this.harmonicity = new t.Multiply(e.harmonicity),
                this.harmonicity.units = t.Type.Positive,
                this._modulationNode = new t.Gain(0),
                this.frequency.chain(this.harmonicity, this._modulator.frequency),
                this.detune.connect(this._modulator.detune),
                this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                this._carrier.chain(this._modulationNode, this.output),
                this.phase = e.phase,
                this._readOnly(["frequency", "detune", "harmonicity"])
            }
            ,
            t.extend(t.AMOscillator, t.Oscillator),
            t.AMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                modulationType: "square",
                harmonicity: 1
            },
            t.AMOscillator.prototype._start = function(t) {
                t = this.toSeconds(t),
                this._modulator.start(t),
                this._carrier.start(t)
            }
            ,
            t.AMOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t),
                this._modulator.stop(t),
                this._carrier.stop(t)
            }
            ,
            Object.defineProperty(t.AMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type
                },
                set: function(t) {
                    this._carrier.type = t
                }
            }),
            Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type
                },
                set: function(t) {
                    this._modulator.type = t
                }
            }),
            Object.defineProperty(t.AMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase
                },
                set: function(t) {
                    this._carrier.phase = t,
                    this._modulator.phase = t
                }
            }),
            Object.defineProperty(t.AMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials
                },
                set: function(t) {
                    this._carrier.partials = t
                }
            }),
            t.AMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune", "harmonicity"]),
                this.frequency = null,
                this.detune = null,
                this.harmonicity.dispose(),
                this.harmonicity = null,
                this._carrier.dispose(),
                this._carrier = null,
                this._modulator.dispose(),
                this._modulator = null,
                this._modulationNode.dispose(),
                this._modulationNode = null,
                this._modulationScale.dispose(),
                this._modulationScale = null,
                this
            }
            ,
            t.AMOscillator
        }),
        t(function(t) {
            return t.FatOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "spread"], t.FatOscillator);
                t.Source.call(this, e),
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this._oscillators = [],
                this._spread = e.spread,
                this._type = e.type,
                this._phase = e.phase,
                this._partials = t.defaultArg(e.partials, []),
                this.count = e.count,
                this._readOnly(["frequency", "detune"])
            }
            ,
            t.extend(t.FatOscillator, t.Source),
            t.FatOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                spread: 20,
                count: 3,
                type: "sawtooth"
            },
            t.FatOscillator.prototype._start = function(t) {
                t = this.toSeconds(t),
                this._forEach(function(e) {
                    e.start(t)
                })
            }
            ,
            t.FatOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t),
                this._forEach(function(e) {
                    e.stop(t)
                })
            }
            ,
            t.FatOscillator.prototype._forEach = function(t) {
                for (var e = 0; e < this._oscillators.length; e++)
                    t.call(this, this._oscillators[e], e)
            }
            ,
            Object.defineProperty(t.FatOscillator.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    this._type = t,
                    this._forEach(function(e) {
                        e.type = t
                    })
                }
            }),
            Object.defineProperty(t.FatOscillator.prototype, "spread", {
                get: function() {
                    return this._spread
                },
                set: function(t) {
                    if (this._spread = t,
                    this._oscillators.length > 1) {
                        var e = -t / 2
                          , i = t / (this._oscillators.length - 1);
                        this._forEach(function(t, n) {
                            t.detune.value = e + i * n
                        })
                    }
                }
            }),
            Object.defineProperty(t.FatOscillator.prototype, "count", {
                get: function() {
                    return this._oscillators.length
                },
                set: function(e) {
                    if (e = Math.max(e, 1),
                    this._oscillators.length !== e) {
                        this._forEach(function(t) {
                            t.dispose()
                        }),
                        this._oscillators = [];
                        for (var i = 0; i < e; i++) {
                            var n = new t.Oscillator;
                            this.type === t.Oscillator.Type.Custom ? n.partials = this._partials : n.type = this._type,
                            n.phase = this._phase,
                            n.volume.value = -6 - e,
                            this.frequency.connect(n.frequency),
                            this.detune.connect(n.detune),
                            n.connect(this.output),
                            this._oscillators[i] = n
                        }
                        this.spread = this._spread,
                        this.state === t.State.Started && this._forEach(function(t) {
                            t.start()
                        })
                    }
                }
            }),
            Object.defineProperty(t.FatOscillator.prototype, "phase", {
                get: function() {
                    return this._phase
                },
                set: function(t) {
                    this._phase = t,
                    this._forEach(function(e) {
                        e.phase = t
                    })
                }
            }),
            Object.defineProperty(t.FatOscillator.prototype, "partials", {
                get: function() {
                    return this._partials
                },
                set: function(e) {
                    this._partials = e,
                    this._type = t.Oscillator.Type.Custom,
                    this._forEach(function(t) {
                        t.partials = e
                    })
                }
            }),
            t.FatOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune"]),
                this.frequency.dispose(),
                this.frequency = null,
                this.detune.dispose(),
                this.detune = null,
                this._forEach(function(t) {
                    t.dispose()
                }),
                this._oscillators = null,
                this._partials = null,
                this
            }
            ,
            t.FatOscillator
        }),
        t(function(t) {
            t.OmniOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type"], t.OmniOscillator);
                t.Source.call(this, e),
                this.frequency = new t.Signal(e.frequency,t.Type.Frequency),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this._sourceType = void 0,
                this._oscillator = null,
                this.type = e.type,
                this._readOnly(["frequency", "detune"]),
                this.set(e)
            }
            ,
            t.extend(t.OmniOscillator, t.Source),
            t.OmniOscillator.defaults = {
                frequency: 440,
                detune: 0,
                type: "sine",
                phase: 0
            };
            var e = {
                Pulse: "PulseOscillator",
                PWM: "PWMOscillator",
                Osc: "Oscillator",
                FM: "FMOscillator",
                AM: "AMOscillator",
                Fat: "FatOscillator"
            };
            return t.OmniOscillator.prototype._start = function(t) {
                this._oscillator.start(t)
            }
            ,
            t.OmniOscillator.prototype._stop = function(t) {
                this._oscillator.stop(t)
            }
            ,
            Object.defineProperty(t.OmniOscillator.prototype, "type", {
                get: function() {
                    var t = "";
                    return this._sourceType === e.FM ? t = "fm" : this._sourceType === e.AM ? t = "am" : this._sourceType === e.Fat && (t = "fat"),
                    t + this._oscillator.type
                },
                set: function(t) {
                    "fm" === t.substr(0, 2) ? (this._createNewOscillator(e.FM),
                    this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator(e.AM),
                    this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator(e.Fat),
                    this._oscillator.type = t.substr(3)) : "pwm" === t ? this._createNewOscillator(e.PWM) : "pulse" === t ? this._createNewOscillator(e.Pulse) : (this._createNewOscillator(e.Osc),
                    this._oscillator.type = t)
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "partials", {
                get: function() {
                    return this._oscillator.partials
                },
                set: function(t) {
                    this._oscillator.partials = t
                }
            }),
            t.OmniOscillator.prototype.set = function(e, i) {
                return "type" === e ? this.type = i : t.isObject(e) && e.hasOwnProperty("type") && (this.type = e.type),
                t.prototype.set.apply(this, arguments),
                this
            }
            ,
            t.OmniOscillator.prototype._createNewOscillator = function(e) {
                if (e !== this._sourceType) {
                    this._sourceType = e;
                    var i = t[e]
                      , n = this.now();
                    if (null !== this._oscillator) {
                        var o = this._oscillator;
                        o.stop(n),
                        this.context.setTimeout(function() {
                            o.dispose(),
                            o = null
                        }, this.blockTime)
                    }
                    this._oscillator = new i,
                    this.frequency.connect(this._oscillator.frequency),
                    this.detune.connect(this._oscillator.detune),
                    this._oscillator.connect(this.output),
                    this.state === t.State.Started && this._oscillator.start(n)
                }
            }
            ,
            Object.defineProperty(t.OmniOscillator.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase
                },
                set: function(t) {
                    this._oscillator.phase = t
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "width", {
                get: function() {
                    if (this._sourceType === e.Pulse)
                        return this._oscillator.width
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "count", {
                get: function() {
                    if (this._sourceType === e.Fat)
                        return this._oscillator.count
                },
                set: function(t) {
                    this._sourceType === e.Fat && (this._oscillator.count = t)
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "spread", {
                get: function() {
                    if (this._sourceType === e.Fat)
                        return this._oscillator.spread
                },
                set: function(t) {
                    this._sourceType === e.Fat && (this._oscillator.spread = t)
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "modulationType", {
                get: function() {
                    if (this._sourceType === e.FM || this._sourceType === e.AM)
                        return this._oscillator.modulationType
                },
                set: function(t) {
                    this._sourceType !== e.FM && this._sourceType !== e.AM || (this._oscillator.modulationType = t)
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "modulationIndex", {
                get: function() {
                    if (this._sourceType === e.FM)
                        return this._oscillator.modulationIndex
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
                get: function() {
                    if (this._sourceType === e.FM || this._sourceType === e.AM)
                        return this._oscillator.harmonicity
                }
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
                get: function() {
                    if (this._sourceType === e.PWM)
                        return this._oscillator.modulationFrequency
                }
            }),
            t.OmniOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune"]),
                this.detune.dispose(),
                this.detune = null,
                this.frequency.dispose(),
                this.frequency = null,
                this._oscillator.dispose(),
                this._oscillator = null,
                this._sourceType = null,
                this
            }
            ,
            t.OmniOscillator
        }),
        t(function(t) {
            return t.Instrument = function(e) {
                e = t.defaultArg(e, t.Instrument.defaults),
                t.AudioNode.call(this),
                this._volume = this.output = new t.Volume(e.volume),
                this.volume = this._volume.volume,
                this._readOnly("volume")
            }
            ,
            t.extend(t.Instrument, t.AudioNode),
            t.Instrument.defaults = {
                volume: 0
            },
            t.Instrument.prototype.triggerAttack = t.noOp,
            t.Instrument.prototype.triggerRelease = t.noOp,
            t.Instrument.prototype.triggerAttackRelease = function(t, e, i, n) {
                return i = this.toSeconds(i),
                e = this.toSeconds(e),
                this.triggerAttack(t, i, n),
                this.triggerRelease(i + e),
                this
            }
            ,
            t.Instrument.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                this._volume = null,
                this._writable(["volume"]),
                this.volume = null,
                this
            }
            ,
            t.Instrument
        }),
        t(function(t) {
            return t.Monophonic = function(e) {
                e = t.defaultArg(e, t.Monophonic.defaults),
                t.Instrument.call(this, e),
                this.portamento = e.portamento
            }
            ,
            t.extend(t.Monophonic, t.Instrument),
            t.Monophonic.defaults = {
                portamento: 0
            },
            t.Monophonic.prototype.triggerAttack = function(t, e, i) {
                return e = this.toSeconds(e),
                this._triggerEnvelopeAttack(e, i),
                this.setNote(t, e),
                this
            }
            ,
            t.Monophonic.prototype.triggerRelease = function(t) {
                return t = this.toSeconds(t),
                this._triggerEnvelopeRelease(t),
                this
            }
            ,
            t.Monophonic.prototype._triggerEnvelopeAttack = function() {}
            ,
            t.Monophonic.prototype._triggerEnvelopeRelease = function() {}
            ,
            t.Monophonic.prototype.setNote = function(t, e) {
                if (e = this.toSeconds(e),
                this.portamento > 0) {
                    var i = this.frequency.value;
                    this.frequency.setValueAtTime(i, e);
                    var n = this.toSeconds(this.portamento);
                    this.frequency.exponentialRampToValueAtTime(t, e + n)
                } else
                    this.frequency.setValueAtTime(t, e);
                return this
            }
            ,
            t.Monophonic
        }),
        t(function(t) {
            return t.Synth = function(e) {
                e = t.defaultArg(e, t.Synth.defaults),
                t.Monophonic.call(this, e),
                this.oscillator = new t.OmniOscillator(e.oscillator),
                this.frequency = this.oscillator.frequency,
                this.detune = this.oscillator.detune,
                this.envelope = new t.AmplitudeEnvelope(e.envelope),
                this.oscillator.chain(this.envelope, this.output),
                this.oscillator.start(),
                this._readOnly(["oscillator", "frequency", "detune", "envelope"])
            }
            ,
            t.extend(t.Synth, t.Monophonic),
            t.Synth.defaults = {
                oscillator: {
                    type: "triangle"
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: .3,
                    release: 1
                }
            },
            t.Synth.prototype._triggerEnvelopeAttack = function(t, e) {
                return this.envelope.triggerAttack(t, e),
                this
            }
            ,
            t.Synth.prototype._triggerEnvelopeRelease = function(t) {
                return this.envelope.triggerRelease(t),
                this
            }
            ,
            t.Synth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this),
                this._writable(["oscillator", "frequency", "detune", "envelope"]),
                this.oscillator.dispose(),
                this.oscillator = null,
                this.envelope.dispose(),
                this.envelope = null,
                this.frequency = null,
                this.detune = null,
                this
            }
            ,
            t.Synth
        }),
        t(function(t) {
            return t.AMSynth = function(e) {
                e = t.defaultArg(e, t.AMSynth.defaults),
                t.Monophonic.call(this, e),
                this._carrier = new t.Synth,
                this._carrier.volume.value = -10,
                this.oscillator = this._carrier.oscillator,
                this.envelope = this._carrier.envelope.set(e.envelope),
                this._modulator = new t.Synth,
                this._modulator.volume.value = -10,
                this.modulation = this._modulator.oscillator.set(e.modulation),
                this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope),
                this.frequency = new t.Signal(440,t.Type.Frequency),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this.harmonicity = new t.Multiply(e.harmonicity),
                this.harmonicity.units = t.Type.Positive,
                this._modulationScale = new t.AudioToGain,
                this._modulationNode = new t.Gain,
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(this.harmonicity, this._modulator.frequency),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                this._carrier.chain(this._modulationNode, this.output),
                this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
            }
            ,
            t.extend(t.AMSynth, t.Monophonic),
            t.AMSynth.defaults = {
                harmonicity: 3,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: .5,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            },
            t.AMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t),
                this.envelope.triggerAttack(t, e),
                this.modulationEnvelope.triggerAttack(t, e),
                this
            }
            ,
            t.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this.envelope.triggerRelease(t),
                this.modulationEnvelope.triggerRelease(t),
                this
            }
            ,
            t.AMSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this),
                this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
                this._carrier.dispose(),
                this._carrier = null,
                this._modulator.dispose(),
                this._modulator = null,
                this.frequency.dispose(),
                this.frequency = null,
                this.detune.dispose(),
                this.detune = null,
                this.harmonicity.dispose(),
                this.harmonicity = null,
                this._modulationScale.dispose(),
                this._modulationScale = null,
                this._modulationNode.dispose(),
                this._modulationNode = null,
                this.oscillator = null,
                this.envelope = null,
                this.modulationEnvelope = null,
                this.modulation = null,
                this
            }
            ,
            t.AMSynth
        }),
        t(function(t) {
            return t.MonoSynth = function(e) {
                e = t.defaultArg(e, t.MonoSynth.defaults),
                t.Monophonic.call(this, e),
                this.oscillator = new t.OmniOscillator(e.oscillator),
                this.frequency = this.oscillator.frequency,
                this.detune = this.oscillator.detune,
                this.filter = new t.Filter(e.filter),
                this.filterEnvelope = new t.FrequencyEnvelope(e.filterEnvelope),
                this.envelope = new t.AmplitudeEnvelope(e.envelope),
                this.oscillator.chain(this.filter, this.envelope, this.output),
                this.oscillator.start(),
                this.filterEnvelope.connect(this.filter.frequency),
                this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
            }
            ,
            t.extend(t.MonoSynth, t.Monophonic),
            t.MonoSynth.defaults = {
                frequency: "C4",
                detune: 0,
                oscillator: {
                    type: "square"
                },
                filter: {
                    Q: 6,
                    type: "lowpass",
                    rolloff: -24
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: .9,
                    release: 1
                },
                filterEnvelope: {
                    attack: .06,
                    decay: .2,
                    sustain: .5,
                    release: 2,
                    baseFrequency: 200,
                    octaves: 7,
                    exponent: 2
                }
            },
            t.MonoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return this.envelope.triggerAttack(t, e),
                this.filterEnvelope.triggerAttack(t),
                this
            }
            ,
            t.MonoSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this.envelope.triggerRelease(t),
                this.filterEnvelope.triggerRelease(t),
                this
            }
            ,
            t.MonoSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this),
                this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]),
                this.oscillator.dispose(),
                this.oscillator = null,
                this.envelope.dispose(),
                this.envelope = null,
                this.filterEnvelope.dispose(),
                this.filterEnvelope = null,
                this.filter.dispose(),
                this.filter = null,
                this.frequency = null,
                this.detune = null,
                this
            }
            ,
            t.MonoSynth
        }),
        t(function(t) {
            return t.DuoSynth = function(e) {
                e = t.defaultArg(e, t.DuoSynth.defaults),
                t.Monophonic.call(this, e),
                this.voice0 = new t.MonoSynth(e.voice0),
                this.voice0.volume.value = -10,
                this.voice1 = new t.MonoSynth(e.voice1),
                this.voice1.volume.value = -10,
                this._vibrato = new t.LFO(e.vibratoRate,-50,50),
                this._vibrato.start(),
                this.vibratoRate = this._vibrato.frequency,
                this._vibratoGain = new t.Gain(e.vibratoAmount,t.Type.Positive),
                this.vibratoAmount = this._vibratoGain.gain,
                this.frequency = new t.Signal(440,t.Type.Frequency),
                this.harmonicity = new t.Multiply(e.harmonicity),
                this.harmonicity.units = t.Type.Positive,
                this.frequency.connect(this.voice0.frequency),
                this.frequency.chain(this.harmonicity, this.voice1.frequency),
                this._vibrato.connect(this._vibratoGain),
                this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
                this.voice0.connect(this.output),
                this.voice1.connect(this.output),
                this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
            }
            ,
            t.extend(t.DuoSynth, t.Monophonic),
            t.DuoSynth.defaults = {
                vibratoAmount: .5,
                vibratoRate: 5,
                harmonicity: 1.5,
                voice0: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    },
                    envelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    }
                },
                voice1: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    },
                    envelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    }
                }
            },
            t.DuoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t),
                this.voice0.envelope.triggerAttack(t, e),
                this.voice1.envelope.triggerAttack(t, e),
                this.voice0.filterEnvelope.triggerAttack(t),
                this.voice1.filterEnvelope.triggerAttack(t),
                this
            }
            ,
            t.DuoSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this.voice0.triggerRelease(t),
                this.voice1.triggerRelease(t),
                this
            }
            ,
            t.DuoSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this),
                this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]),
                this.voice0.dispose(),
                this.voice0 = null,
                this.voice1.dispose(),
                this.voice1 = null,
                this.frequency.dispose(),
                this.frequency = null,
                this._vibratoGain.dispose(),
                this._vibratoGain = null,
                this._vibrato = null,
                this.harmonicity.dispose(),
                this.harmonicity = null,
                this.vibratoAmount.dispose(),
                this.vibratoAmount = null,
                this.vibratoRate = null,
                this
            }
            ,
            t.DuoSynth
        }),
        t(function(t) {
            return t.FMSynth = function(e) {
                e = t.defaultArg(e, t.FMSynth.defaults),
                t.Monophonic.call(this, e),
                this._carrier = new t.Synth(e.carrier),
                this._carrier.volume.value = -10,
                this.oscillator = this._carrier.oscillator,
                this.envelope = this._carrier.envelope.set(e.envelope),
                this._modulator = new t.Synth(e.modulator),
                this._modulator.volume.value = -10,
                this.modulation = this._modulator.oscillator.set(e.modulation),
                this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope),
                this.frequency = new t.Signal(440,t.Type.Frequency),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this.harmonicity = new t.Multiply(e.harmonicity),
                this.harmonicity.units = t.Type.Positive,
                this.modulationIndex = new t.Multiply(e.modulationIndex),
                this.modulationIndex.units = t.Type.Positive,
                this._modulationNode = new t.Gain(0),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(this.harmonicity, this._modulator.frequency),
                this.frequency.chain(this.modulationIndex, this._modulationNode),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
            }
            ,
            t.extend(t.FMSynth, t.Monophonic),
            t.FMSynth.defaults = {
                harmonicity: 3,
                modulationIndex: 10,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: .5,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            },
            t.FMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t),
                this.envelope.triggerAttack(t, e),
                this.modulationEnvelope.triggerAttack(t),
                this
            }
            ,
            t.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
                return t = this.toSeconds(t),
                this.envelope.triggerRelease(t),
                this.modulationEnvelope.triggerRelease(t),
                this
            }
            ,
            t.FMSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this),
                this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
                this._carrier.dispose(),
                this._carrier = null,
                this._modulator.dispose(),
                this._modulator = null,
                this.frequency.dispose(),
                this.frequency = null,
                this.detune.dispose(),
                this.detune = null,
                this.modulationIndex.dispose(),
                this.modulationIndex = null,
                this.harmonicity.dispose(),
                this.harmonicity = null,
                this._modulationNode.dispose(),
                this._modulationNode = null,
                this.oscillator = null,
                this.envelope = null,
                this.modulationEnvelope = null,
                this.modulation = null,
                this
            }
            ,
            t.FMSynth
        }),
        t(function(t) {
            return t.MembraneSynth = function(e) {
                e = t.defaultArg(e, t.MembraneSynth.defaults),
                t.Instrument.call(this, e),
                this.oscillator = new t.OmniOscillator(e.oscillator).start(),
                this.envelope = new t.AmplitudeEnvelope(e.envelope),
                this.octaves = e.octaves,
                this.pitchDecay = e.pitchDecay,
                this.oscillator.chain(this.envelope, this.output),
                this._readOnly(["oscillator", "envelope"])
            }
            ,
            t.extend(t.MembraneSynth, t.Instrument),
            t.MembraneSynth.defaults = {
                pitchDecay: .05,
                octaves: 10,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .001,
                    decay: .4,
                    sustain: .01,
                    release: 1.4,
                    attackCurve: "exponential"
                }
            },
            t.MembraneSynth.prototype.triggerAttack = function(t, e, i) {
                e = this.toSeconds(e),
                t = this.toFrequency(t);
                var n = t * this.octaves;
                return this.oscillator.frequency.setValueAtTime(n, e),
                this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)),
                this.envelope.triggerAttack(e, i),
                this
            }
            ,
            t.MembraneSynth.prototype.triggerRelease = function(t) {
                return this.envelope.triggerRelease(t),
                this
            }
            ,
            t.MembraneSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this),
                this._writable(["oscillator", "envelope"]),
                this.oscillator.dispose(),
                this.oscillator = null,
                this.envelope.dispose(),
                this.envelope = null,
                this
            }
            ,
            t.MembraneSynth
        }),
        t(function(t) {
            var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
            return t.MetalSynth = function(i) {
                i = t.defaultArg(i, t.MetalSynth.defaults),
                t.Instrument.call(this, i),
                this.frequency = new t.Signal(i.frequency,t.Type.Frequency),
                this._oscillators = [],
                this._freqMultipliers = [],
                this._amplitue = new t.Gain(0).connect(this.output),
                this._highpass = new t.Filter({
                    type: "highpass",
                    Q: -3.0102999566398125
                }).connect(this._amplitue),
                this._octaves = i.octaves,
                this._filterFreqScaler = new t.Scale(i.resonance,7e3),
                this.envelope = new t.Envelope({
                    attack: i.envelope.attack,
                    attackCurve: "linear",
                    decay: i.envelope.decay,
                    sustain: 0,
                    release: i.envelope.release
                }).chain(this._filterFreqScaler, this._highpass.frequency),
                this.envelope.connect(this._amplitue.gain);
                for (var n = 0; n < e.length; n++) {
                    var o = new t.FMOscillator({
                        type: "square",
                        modulationType: "square",
                        harmonicity: i.harmonicity,
                        modulationIndex: i.modulationIndex
                    });
                    o.connect(this._highpass).start(),
                    this._oscillators[n] = o;
                    var r = new t.Multiply(e[n]);
                    this._freqMultipliers[n] = r,
                    this.frequency.chain(r, o.frequency)
                }
                this.octaves = i.octaves
            }
            ,
            t.extend(t.MetalSynth, t.Instrument),
            t.MetalSynth.defaults = {
                frequency: 200,
                envelope: {
                    attack: .001,
                    decay: 1.4,
                    release: .2
                },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4e3,
                octaves: 1.5
            },
            t.MetalSynth.prototype.triggerAttack = function(e, i) {
                return e = this.toSeconds(e),
                i = t.defaultArg(i, 1),
                this.envelope.triggerAttack(e, i),
                this
            }
            ,
            t.MetalSynth.prototype.triggerRelease = function(t) {
                return t = this.toSeconds(t),
                this.envelope.triggerRelease(t),
                this
            }
            ,
            t.MetalSynth.prototype.triggerAttackRelease = function(t, e, i) {
                return e = this.toSeconds(e),
                t = this.toSeconds(t),
                this.triggerAttack(e, i),
                this.triggerRelease(e + t),
                this
            }
            ,
            Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
                get: function() {
                    return this._oscillators[0].modulationIndex.value
                },
                set: function(t) {
                    for (var e = 0; e < this._oscillators.length; e++)
                        this._oscillators[e].modulationIndex.value = t
                }
            }),
            Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
                get: function() {
                    return this._oscillators[0].harmonicity.value
                },
                set: function(t) {
                    for (var e = 0; e < this._oscillators.length; e++)
                        this._oscillators[e].harmonicity.value = t
                }
            }),
            Object.defineProperty(t.MetalSynth.prototype, "resonance", {
                get: function() {
                    return this._filterFreqScaler.min
                },
                set: function(t) {
                    this._filterFreqScaler.min = t,
                    this.octaves = this._octaves
                }
            }),
            Object.defineProperty(t.MetalSynth.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t,
                    this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t)
                }
            }),
            t.MetalSynth.prototype.dispose = function() {
                t.Instrument.prototype.dispose.call(this);
                for (var e = 0; e < this._oscillators.length; e++)
                    this._oscillators[e].dispose(),
                    this._freqMultipliers[e].dispose();
                this._oscillators = null,
                this._freqMultipliers = null,
                this.frequency.dispose(),
                this.frequency = null,
                this._filterFreqScaler.dispose(),
                this._filterFreqScaler = null,
                this._amplitue.dispose(),
                this._amplitue = null,
                this.envelope.dispose(),
                this.envelope = null,
                this._highpass.dispose(),
                this._highpass = null
            }
            ,
            t.MetalSynth
        }),
        t(function(t) {
            return window.AudioBufferSourceNode && !AudioBufferSourceNode.prototype.start && (AudioBufferSourceNode.prototype.start = AudioBufferSourceNode.prototype.noteGrainOn,
            AudioBufferSourceNode.prototype.stop = AudioBufferSourceNode.prototype.noteOff),
            t.BufferSource = function() {
                var e = t.defaults(arguments, ["buffer", "onload"], t.BufferSource);
                t.AudioNode.call(this),
                this.onended = e.onended,
                this._startTime = -1,
                this._stopTime = -1,
                this._gainNode = this.output = new t.Gain,
                this._source = this.context.createBufferSource(),
                this._source.connect(this._gainNode),
                this._buffer = new t.Buffer(e.buffer,e.onload),
                this.playbackRate = new t.Param(this._source.playbackRate,t.Type.Positive),
                this.fadeIn = e.fadeIn,
                this.fadeOut = e.fadeOut,
                this.curve = e.curve,
                this._gain = 1,
                this._onendedTimeout = -1,
                this.loop = e.loop,
                this.loopStart = e.loopStart,
                this.loopEnd = e.loopEnd,
                this.playbackRate.value = e.playbackRate
            }
            ,
            t.extend(t.BufferSource, t.AudioNode),
            t.BufferSource.defaults = {
                onended: t.noOp,
                onload: t.noOp,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                fadeIn: 0,
                fadeOut: 0,
                curve: "linear",
                playbackRate: 1
            },
            Object.defineProperty(t.BufferSource.prototype, "state", {
                get: function() {
                    var e = this.now();
                    return -1 !== this._startTime && e >= this._startTime && e < this._stopTime ? t.State.Started : t.State.Stopped
                }
            }),
            t.BufferSource.prototype.start = function(e, i, n, o, r) {
                if (-1 !== this._startTime)
                    throw new Error("Tone.BufferSource can only be started once.");
                if (!this.buffer.loaded)
                    throw new Error("Tone.BufferSource: buffer is either not set or not loaded.");
                e = this.toSeconds(e),
                i = this.loop ? t.defaultArg(i, this.loopStart) : t.defaultArg(i, 0),
                i = this.toSeconds(i),
                o = t.defaultArg(o, 1),
                this._gain = o,
                r = this.toSeconds(t.defaultArg(r, this.fadeIn)),
                this.fadeIn = r,
                r > 0 ? (this._gainNode.gain.setValueAtTime(0, e),
                "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(this._gain, e + r) : this._gainNode.gain.exponentialAppraochValueAtTime(this._gain, e, r)) : this._gainNode.gain.setValueAtTime(o, e),
                this._startTime = e;
                var s = this.toSeconds(t.defaultArg(n, this.buffer.duration - i));
                if (s = Math.max(s, 0),
                (!this.loop || this.loop && !t.isUndef(n)) && (this.loop || (s = Math.min(s, this.buffer.duration - i)),
                this.stop(e + s, this.fadeOut)),
                this.loop) {
                    var a = this.loopEnd || this.buffer.duration
                      , u = this.loopStart
                      , l = a - u;
                    i > a && (i = (i - u) % l + u)
                }
                return this._source.buffer = this.buffer.get(),
                this._source.loopEnd = this.loopEnd || this.buffer.duration,
                t.isPast(e),
                this._source.start(e, i),
                this
            }
            ,
            t.BufferSource.prototype.stop = function(e, i) {
                if (!this.buffer.loaded)
                    throw new Error("Tone.BufferSource: buffer is either not set or not loaded.");
                if (e = this.toSeconds(e),
                -1 === this._stopTime || this._stopTime > e) {
                    if (e <= this._startTime)
                        return this._gainNode.gain.cancelScheduledValues(e),
                        this._gainNode.gain.value = 0,
                        this;
                    e = Math.max(this._startTime + this.fadeIn + this.sampleTime, e),
                    this._gainNode.gain.cancelScheduledValues(e),
                    this._stopTime = e,
                    i = this.toSeconds(t.defaultArg(i, this.fadeOut));
                    var n = e - this._startTime - this.fadeIn - this.sampleTime;
                    this.loop || (n = Math.min(n, this.buffer.duration)),
                    i = Math.min(n, i);
                    var o = e - i;
                    i > this.sampleTime ? (this._gainNode.gain.setValueAtTime(this._gain, o),
                    "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(0, e) : this._gainNode.gain.exponentialAppraochValueAtTime(0, o, i)) : this._gainNode.gain.setValueAtTime(0, e),
                    t.context.clearTimeout(this._onendedTimeout),
                    this._onendedTimeout = t.context.setTimeout(this._onended.bind(this), this._stopTime - this.now())
                }
                return this
            }
            ,
            t.BufferSource.prototype._onended = function() {
                this.onended(this);
                var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
                this._source.stop(this._stopTime + t)
            }
            ,
            Object.defineProperty(t.BufferSource.prototype, "loopStart", {
                get: function() {
                    return this._source.loopStart
                },
                set: function(t) {
                    this._source.loopStart = this.toSeconds(t)
                }
            }),
            Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
                get: function() {
                    return this._source.loopEnd
                },
                set: function(t) {
                    this._source.loopEnd = this.toSeconds(t)
                }
            }),
            Object.defineProperty(t.BufferSource.prototype, "buffer", {
                get: function() {
                    return this._buffer
                },
                set: function(t) {
                    this._buffer.set(t)
                }
            }),
            Object.defineProperty(t.BufferSource.prototype, "loop", {
                get: function() {
                    return this._source.loop
                },
                set: function(t) {
                    this._source.loop = t
                }
            }),
            t.BufferSource.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.onended = null,
                this._source.disconnect(),
                this._source = null,
                this._gainNode.dispose(),
                this._gainNode = null,
                this._buffer.dispose(),
                this._buffer = null,
                this._startTime = -1,
                this.playbackRate = null,
                t.context.clearTimeout(this._onendedTimeout),
                this
            }
            ,
            t.BufferSource
        }),
        t(function(t) {
            function e() {
                for (var e in i)
                    n[e] = (new t.Buffer).fromArray(i[e])
            }
            t.Noise = function() {
                var e = t.defaults(arguments, ["type"], t.Noise);
                t.Source.call(this, e),
                this._source = null,
                this._type = e.type,
                this._playbackRate = e.playbackRate
            }
            ,
            t.extend(t.Noise, t.Source),
            t.Noise.defaults = {
                type: "white",
                playbackRate: 1
            },
            Object.defineProperty(t.Noise.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(e) {
                    if (this._type !== e) {
                        if (!(e in n))
                            throw new TypeError("Tone.Noise: invalid type: " + e);
                        if (this._type = e,
                        this.state === t.State.Started) {
                            var i = this.now();
                            this._stop(i),
                            this._start(i)
                        }
                    }
                }
            }),
            Object.defineProperty(t.Noise.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t,
                    this._source && (this._source.playbackRate.value = t)
                }
            }),
            t.Noise.prototype._start = function(e) {
                var i = n[this._type];
                this._source = new t.BufferSource(i).connect(this.output),
                this._source.loop = !0,
                this._source.playbackRate.value = this._playbackRate,
                this._source.start(this.toSeconds(e), Math.random() * (i.duration - .001))
            }
            ,
            t.Noise.prototype._stop = function(t) {
                this._source && (this._source.stop(this.toSeconds(t)),
                this._source = null)
            }
            ,
            t.Noise.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                null !== this._source && (this._source.disconnect(),
                this._source = null),
                this._buffer = null,
                this
            }
            ;
            var i = {
                pink: function() {
                    for (var t = [], e = 0; e < 2; e++) {
                        var i = new Float32Array(220500);
                        t[e] = i;
                        var n, o, r, s, a, u, l;
                        n = o = r = s = a = u = l = 0;
                        for (var c = 0; c < 220500; c++) {
                            var h = 2 * Math.random() - 1;
                            n = .99886 * n + .0555179 * h,
                            o = .99332 * o + .0750759 * h,
                            r = .969 * r + .153852 * h,
                            s = .8665 * s + .3104856 * h,
                            a = .55 * a + .5329522 * h,
                            u = -.7616 * u - .016898 * h,
                            i[c] = n + o + r + s + a + u + l + .5362 * h,
                            i[c] *= .11,
                            l = .115926 * h
                        }
                    }
                    return t
                }(),
                brown: function() {
                    for (var t = [], e = 0; e < 2; e++) {
                        var i = new Float32Array(220500);
                        t[e] = i;
                        for (var n = 0, o = 0; o < 220500; o++) {
                            var r = 2 * Math.random() - 1;
                            i[o] = (n + .02 * r) / 1.02,
                            n = i[o],
                            i[o] *= 3.5
                        }
                    }
                    return t
                }(),
                white: function() {
                    for (var t = [], e = 0; e < 2; e++) {
                        var i = new Float32Array(220500);
                        t[e] = i;
                        for (var n = 0; n < 220500; n++)
                            i[n] = 2 * Math.random() - 1
                    }
                    return t
                }()
            }
              , n = {};
            return t.getContext(e),
            t.Context.on("init", e),
            t.Noise
        }),
        t(function(t) {
            return t.NoiseSynth = function(e) {
                e = t.defaultArg(e, t.NoiseSynth.defaults),
                t.Instrument.call(this, e),
                this.noise = new t.Noise,
                this.envelope = new t.AmplitudeEnvelope(e.envelope),
                this.noise.chain(this.envelope, this.output),
                this.noise.start(),
                this._readOnly(["noise", "envelope"])
            }
            ,
            t.extend(t.NoiseSynth, t.Instrument),
            t.NoiseSynth.defaults = {
                noise: {
                    type: "white"
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: 0
                }
            },
            t.NoiseSynth.prototype.triggerAttack = function(t, e) {
                return this.envelope.triggerAttack(t, e),
                this
            }
            ,
            t.NoiseSynth.prototype.triggerRelease = function(t) {
                return this.envelope.triggerRelease(t),
                this
            }
            ,
            t.NoiseSynth.prototype.triggerAttackRelease = function(t, e, i) {
                return e = this.toSeconds(e),
                t = this.toSeconds(t),
                this.triggerAttack(e, i),
                this.triggerRelease(e + t),
                this
            }
            ,
            t.NoiseSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this),
                this._writable(["noise", "envelope"]),
                this.noise.dispose(),
                this.noise = null,
                this.envelope.dispose(),
                this.envelope = null,
                this
            }
            ,
            t.NoiseSynth
        }),
        t(function(t) {
            return t.PluckSynth = function(e) {
                e = t.defaultArg(e, t.PluckSynth.defaults),
                t.Instrument.call(this, e),
                this._noise = new t.Noise("pink"),
                this.attackNoise = e.attackNoise,
                this._lfcf = new t.LowpassCombFilter({
                    resonance: e.resonance,
                    dampening: e.dampening
                }),
                this.resonance = this._lfcf.resonance,
                this.dampening = this._lfcf.dampening,
                this._noise.connect(this._lfcf),
                this._lfcf.connect(this.output),
                this._readOnly(["resonance", "dampening"])
            }
            ,
            t.extend(t.PluckSynth, t.Instrument),
            t.PluckSynth.defaults = {
                attackNoise: 1,
                dampening: 4e3,
                resonance: .9
            },
            t.PluckSynth.prototype.triggerAttack = function(t, e) {
                t = this.toFrequency(t),
                e = this.toSeconds(e);
                var i = 1 / t;
                return this._lfcf.delayTime.setValueAtTime(i, e),
                this._noise.start(e),
                this._noise.stop(e + i * this.attackNoise),
                this
            }
            ,
            t.PluckSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this),
                this._noise.dispose(),
                this._lfcf.dispose(),
                this._noise = null,
                this._lfcf = null,
                this._writable(["resonance", "dampening"]),
                this.dampening = null,
                this.resonance = null,
                this
            }
            ,
            t.PluckSynth
        }),
        t(function(t) {
            return t.PolySynth = function() {
                var e = t.defaults(arguments, ["polyphony", "voice"], t.PolySynth);
                t.Instrument.call(this, e),
                e = t.defaultArg(e, t.Instrument.defaults),
                e.polyphony = Math.min(t.PolySynth.MAX_POLYPHONY, e.polyphony),
                this.voices = new Array(e.polyphony),
                this._triggers = new Array(e.polyphony),
                this.detune = new t.Signal(e.detune,t.Type.Cents),
                this._readOnly("detune");
                for (var i = 0; i < e.polyphony; i++) {
                    var n = new e.voice(arguments[2],arguments[3]);
                    this.voices[i] = n,
                    n.connect(this.output),
                    n.hasOwnProperty("detune") && this.detune.connect(n.detune),
                    this._triggers[i] = {
                        release: -1,
                        note: null,
                        voice: n
                    }
                }
            }
            ,
            t.extend(t.PolySynth, t.Instrument),
            t.PolySynth.defaults = {
                polyphony: 4,
                volume: 0,
                detune: 0,
                voice: t.Synth
            },
            t.PolySynth.prototype.triggerAttack = function(t, e, i) {
                Array.isArray(t) || (t = [t]),
                e = this.toSeconds(e);
                for (var n = 0; n < t.length; n++) {
                    for (var o = t[n], r = this._triggers[0], s = 1; s < this._triggers.length; s++)
                        this._triggers[s].release < r.release && (r = this._triggers[s],
                        s);
                    r.release = 1 / 0,
                    r.note = JSON.stringify(o),
                    r.voice.triggerAttack(o, e, i)
                }
                return this
            }
            ,
            t.PolySynth.prototype.triggerAttackRelease = function(e, i, n, o) {
                if (n = this.toSeconds(n),
                this.triggerAttack(e, n, o),
                t.isArray(i) && t.isArray(e))
                    for (var r = 0; r < e.length; r++) {
                        var s = i[Math.min(r, i.length - 1)];
                        this.triggerRelease(e[r], n + this.toSeconds(s))
                    }
                else
                    this.triggerRelease(e, n + this.toSeconds(i));
                return this
            }
            ,
            t.PolySynth.prototype.triggerRelease = function(t, e) {
                Array.isArray(t) || (t = [t]),
                e = this.toSeconds(e);
                for (var i = 0; i < t.length; i++)
                    for (var n = JSON.stringify(t[i]), o = 0; o < this._triggers.length; o++) {
                        var r = this._triggers[o];
                        r.note === n && r.release > e && (r.voice.triggerRelease(e),
                        r.release = e)
                    }
                return this
            }
            ,
            t.PolySynth.prototype.set = function(t, e, i) {
                for (var n = 0; n < this.voices.length; n++)
                    this.voices[n].set(t, e, i);
                return this
            }
            ,
            t.PolySynth.prototype.get = function(t) {
                return this.voices[0].get(t)
            }
            ,
            t.PolySynth.prototype.releaseAll = function(t) {
                t = this.toSeconds(t);
                for (var e = 0; e < this._triggers.length; e++) {
                    var i = this._triggers[e];
                    i.release > t && (i.release = t,
                    i.voice.triggerRelease(t))
                }
                return this
            }
            ,
            t.PolySynth.prototype.dispose = function() {
                t.Instrument.prototype.dispose.call(this);
                for (var e = 0; e < this.voices.length; e++)
                    this.voices[e].dispose(),
                    this.voices[e] = null;
                return this._writable("detune"),
                this.detune.dispose(),
                this.detune = null,
                this.voices = null,
                this._triggers = null,
                this
            }
            ,
            t.PolySynth.MAX_POLYPHONY = 20,
            t.PolySynth
        }),
        t(function(t) {
            return t.Sampler = function(e) {
                var i = Array.prototype.slice.call(arguments);
                i.shift();
                var n = t.defaults(i, ["onload", "baseUrl"], t.Sampler);
                t.Instrument.call(this, n);
                var o = {};
                for (var r in e)
                    if (t.isNote(r)) {
                        var s = t.Frequency(r).toMidi();
                        o[s] = e[r]
                    } else {
                        if (isNaN(parseFloat(r)))
                            throw new Error("Tone.Sampler: url keys must be the note's pitch");
                        o[r] = e[r]
                    }
                this._buffers = new t.Buffers(o,n.onload,n.baseUrl),
                this._activeSources = {},
                this.attack = n.attack,
                this.release = n.release
            }
            ,
            t.extend(t.Sampler, t.Instrument),
            t.Sampler.defaults = {
                attack: 0,
                release: .1,
                onload: t.noOp,
                baseUrl: ""
            },
            t.Sampler.prototype._findClosest = function(t) {
                for (var e = 0; e < 24; ) {
                    if (this._buffers.has(t + e))
                        return -e;
                    if (this._buffers.has(t - e))
                        return e;
                    e++
                }
                return null
            }
            ,
            t.Sampler.prototype.triggerAttack = function(e, i, n) {
                var o = t.Frequency(e).toMidi()
                  , r = this._findClosest(o);
                if (null !== r) {
                    var s = o - r
                      , a = this._buffers.get(s)
                      , u = new t.BufferSource({
                        buffer: a,
                        playbackRate: t.intervalToFrequencyRatio(r),
                        fadeIn: this.attack,
                        fadeOut: this.release,
                        curve: "exponential"
                    }).connect(this.output);
                    u.start(i, 0, a.duration, n),
                    t.isArray(this._activeSources[o]) || (this._activeSources[o] = []),
                    this._activeSources[o].push({
                        note: o,
                        source: u
                    })
                }
                return this
            }
            ,
            t.Sampler.prototype.triggerRelease = function(e, i) {
                var n = t.Frequency(e).toMidi();
                if (this._activeSources[n] && this._activeSources[n].length) {
                    var o = this._activeSources[n].shift().source;
                    i = this.toSeconds(i),
                    o.stop(i + this.release, this.release)
                }
            }
            ,
            t.Sampler.prototype.triggerAttackRelease = function(t, e, i, n) {
                return i = this.toSeconds(i),
                e = this.toSeconds(e),
                this.triggerAttack(t, i, n),
                this.triggerRelease(t, i + e),
                this
            }
            ,
            t.Sampler.prototype.add = function(e, i, n) {
                if (t.isNote(e)) {
                    var o = t.Frequency(e).toMidi();
                    this._buffers.add(o, i, n)
                } else {
                    if (isNaN(parseFloat(e)))
                        throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + e);
                    this._buffers.add(e, i, n)
                }
            }
            ,
            Object.defineProperty(t.Sampler.prototype, "loaded", {
                get: function() {
                    return this._buffers.loaded
                }
            }),
            t.Sampler.prototype.dispose = function() {
                t.Instrument.prototype.dispose.call(this),
                this._buffers.dispose(),
                this._buffers = null;
                for (var e in this._activeSources)
                    this._activeSources[e].forEach(function(t) {
                        t.source.dispose()
                    });
                return this._activeSources = null,
                this
            }
            ,
            t.Sampler
        }),
        t(function(t) {
            return t.GainToAudio = function() {
                t.SignalBase.call(this),
                this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                    return 2 * Math.abs(t) - 1
                }
                )
            }
            ,
            t.extend(t.GainToAudio, t.SignalBase),
            t.GainToAudio.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                this._norm = null,
                this
            }
            ,
            t.GainToAudio
        }),
        t(function(t) {
            return t.Normalize = function(e, i) {
                t.SignalBase.call(this),
                this._inputMin = t.defaultArg(e, 0),
                this._inputMax = t.defaultArg(i, 1),
                this._sub = this.input = new t.Add(0),
                this._div = this.output = new t.Multiply(1),
                this._sub.connect(this._div),
                this._setRange()
            }
            ,
            t.extend(t.Normalize, t.SignalBase),
            Object.defineProperty(t.Normalize.prototype, "min", {
                get: function() {
                    return this._inputMin
                },
                set: function(t) {
                    this._inputMin = t,
                    this._setRange()
                }
            }),
            Object.defineProperty(t.Normalize.prototype, "max", {
                get: function() {
                    return this._inputMax
                },
                set: function(t) {
                    this._inputMax = t,
                    this._setRange()
                }
            }),
            t.Normalize.prototype._setRange = function() {
                this._sub.value = -this._inputMin,
                this._div.value = 1 / (this._inputMax - this._inputMin)
            }
            ,
            t.Normalize.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._sub.dispose(),
                this._sub = null,
                this._div.dispose(),
                this._div = null,
                this
            }
            ,
            t.Normalize
        }),
        t(function(t) {
            return t.TransportTimelineSignal = function() {
                t.TimelineSignal.apply(this, arguments),
                this.output = this._outputSig = new t.Signal(this._initial),
                this._lastVal = this.value,
                this._synced = t.Transport.scheduleRepeat(this._onTick.bind(this), "1i"),
                this._bindAnchorValue = this._anchorValue.bind(this),
                t.Transport.on("start stop pause", this._bindAnchorValue),
                this._events.memory = 1 / 0
            }
            ,
            t.extend(t.TransportTimelineSignal, t.TimelineSignal),
            t.TransportTimelineSignal.prototype._onTick = function(e) {
                var i = this.getValueAtTime(t.Transport.seconds);
                this._lastVal !== i && (this._lastVal = i,
                this._outputSig.linearRampToValueAtTime(i, e))
            }
            ,
            t.TransportTimelineSignal.prototype._anchorValue = function(e) {
                var i = this.getValueAtTime(t.Transport.ticks);
                return this._lastVal = i,
                this._outputSig.cancelScheduledValues(e),
                this._outputSig.setValueAtTime(i, e),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.getValueAtTime = function(e) {
                return e = this.toTicks(e),
                t.TimelineSignal.prototype.getValueAtTime.call(this, e)
            }
            ,
            t.TransportTimelineSignal.prototype.setValueAtTime = function(e, i) {
                return i = this.toTicks(i),
                t.TimelineSignal.prototype.setValueAtTime.call(this, e, i),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(e, i) {
                return i = this.toTicks(i),
                t.TimelineSignal.prototype.linearRampToValueAtTime.call(this, e, i),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(e, i) {
                return i = this.toTicks(i),
                t.TimelineSignal.prototype.exponentialRampToValueAtTime.call(this, e, i),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.setTargetAtTime = function(e, i, n) {
                return i = this.toTicks(i),
                t.TimelineSignal.prototype.setTargetAtTime.call(this, e, i, n),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.cancelScheduledValues = function(e) {
                return e = this.toTicks(e),
                t.TimelineSignal.prototype.cancelScheduledValues.call(this, e),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.setValueCurveAtTime = function(e, i, n, o) {
                return i = this.toTicks(i),
                n = this.toTicks(n),
                t.TimelineSignal.prototype.setValueCurveAtTime.call(this, e, i, n, o),
                this
            }
            ,
            t.TransportTimelineSignal.prototype.dispose = function() {
                t.Transport.clear(this._synced),
                t.Transport.off("start stop pause", this._syncedCallback),
                this._events.cancel(0),
                t.TimelineSignal.prototype.dispose.call(this),
                this._outputSig.dispose(),
                this._outputSig = null
            }
            ,
            t.TransportTimelineSignal
        }),
        t(function(t) {
            return t.GrainPlayer = function() {
                var e = t.defaults(arguments, ["url", "onload"], t.GrainPlayer);
                t.Source.call(this, e),
                this.buffer = new t.Buffer(e.url,e.onload),
                this._clock = new t.Clock(this._tick.bind(this),e.grainSize),
                this._loopStart = 0,
                this._loopEnd = 0,
                this._activeSources = [],
                this._playbackRate = e.playbackRate,
                this._grainSize = e.grainSize,
                this._overlap = e.overlap,
                this.detune = e.detune,
                this.overlap = e.overlap,
                this.loop = e.loop,
                this.playbackRate = e.playbackRate,
                this.grainSize = e.grainSize,
                this.loopStart = e.loopStart,
                this.loopEnd = e.loopEnd,
                this.reverse = e.reverse,
                this._clock.on("stop", this._onstop.bind(this))
            }
            ,
            t.extend(t.GrainPlayer, t.Source),
            t.GrainPlayer.defaults = {
                onload: t.noOp,
                overlap: .1,
                grainSize: .2,
                playbackRate: 1,
                detune: 0,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                reverse: !1
            },
            t.GrainPlayer.prototype._start = function(e, i, n) {
                i = t.defaultArg(i, 0),
                i = this.toSeconds(i),
                e = this.toSeconds(e),
                this._offset = i,
                this._clock.start(e),
                n && this.stop(e + this.toSeconds(n))
            }
            ,
            t.GrainPlayer.prototype._stop = function(t) {
                this._clock.stop(t)
            }
            ,
            t.GrainPlayer.prototype._onstop = function(t) {
                this._activeSources.forEach(function(e) {
                    e.stop(t, 0)
                })
            }
            ,
            t.GrainPlayer.prototype._tick = function(e) {
                var i = this._offset < this._overlap ? 0 : this._overlap
                  , n = new t.BufferSource({
                    buffer: this.buffer,
                    fadeIn: i,
                    fadeOut: this._overlap,
                    loop: this.loop,
                    loopStart: this._loopStart,
                    loopEnd: this._loopEnd,
                    playbackRate: t.intervalToFrequencyRatio(this.detune / 100)
                }).connect(this.output);
                n.start(e, this._offset),
                this._offset += this.grainSize,
                n.stop(e + this.grainSize),
                this._activeSources.push(n),
                n.onended = function() {
                    var t = this._activeSources.indexOf(n);
                    -1 !== t && this._activeSources.splice(t, 1)
                }
                .bind(this)
            }
            ,
            t.GrainPlayer.prototype.seek = function(t, e) {
                return this._offset = this.toSeconds(t),
                this._tick(this.toSeconds(e)),
                this
            }
            ,
            Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t,
                    this.grainSize = this._grainSize
                }
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
                get: function() {
                    return this._loopStart
                },
                set: function(t) {
                    this._loopStart = this.toSeconds(t)
                }
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd
                },
                set: function(t) {
                    this._loopEnd = this.toSeconds(t)
                }
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
                get: function() {
                    return this.buffer.reverse
                },
                set: function(t) {
                    this.buffer.reverse = t
                }
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
                get: function() {
                    return this._grainSize
                },
                set: function(t) {
                    this._grainSize = this.toSeconds(t),
                    this._clock.frequency.value = this._playbackRate / this._grainSize
                }
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
                get: function() {
                    return this._overlap
                },
                set: function(t) {
                    this._overlap = this.toSeconds(t)
                }
            }),
            t.GrainPlayer.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                this.buffer.dispose(),
                this.buffer = null,
                this._clock.dispose(),
                this._clock = null,
                this._activeSources.forEach(function(t) {
                    t.dispose()
                }),
                this._activeSources = null,
                this
            }
            ,
            t.GrainPlayer
        }),
        t(function(t) {
            return t.Player = function(e) {
                var i;
                e instanceof t.Buffer ? (e = e.get(),
                i = t.Player.defaults) : i = t.defaults(arguments, ["url", "onload"], t.Player),
                t.Source.call(this, i),
                this._source = null,
                this.autostart = i.autostart,
                this._buffer = new t.Buffer({
                    url: i.url,
                    onload: this._onload.bind(this, i.onload),
                    reverse: i.reverse
                }),
                e instanceof AudioBuffer && this._buffer.set(e),
                this._loop = i.loop,
                this._loopStart = i.loopStart,
                this._loopEnd = i.loopEnd,
                this._playbackRate = i.playbackRate,
                this.retrigger = i.retrigger,
                this.fadeIn = i.fadeIn,
                this.fadeOut = i.fadeOut
            }
            ,
            t.extend(t.Player, t.Source),
            t.Player.defaults = {
                onload: t.noOp,
                playbackRate: 1,
                loop: !1,
                autostart: !1,
                loopStart: 0,
                loopEnd: 0,
                retrigger: !1,
                reverse: !1,
                fadeIn: 0,
                fadeOut: 0
            },
            t.Player.prototype.load = function(t, e) {
                return this._buffer.load(t, this._onload.bind(this, e))
            }
            ,
            t.Player.prototype._onload = function(e) {
                e = t.defaultArg(e, t.noOp),
                e(this),
                this.autostart && this.start()
            }
            ,
            t.Player.prototype._start = function(e, i, n) {
                return i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0),
                i = this.toSeconds(i),
                n = t.defaultArg(n, Math.max(this._buffer.duration - i, 0)),
                n = this.toSeconds(n),
                e = this.toSeconds(e),
                this._source = new t.BufferSource({
                    buffer: this._buffer,
                    loop: this._loop,
                    loopStart: this._loopStart,
                    loopEnd: this._loopEnd,
                    playbackRate: this._playbackRate,
                    fadeIn: this.fadeIn,
                    fadeOut: this.fadeOut
                }).connect(this.output),
                this._loop || this._synced || this._state.setStateAtTime(t.State.Stopped, e + n),
                this._loop ? this._source.start(e, i) : this._source.start(e, i, n),
                this
            }
            ,
            t.Player.prototype._stop = function(t) {
                return this._source && this._source.stop(this.toSeconds(t)),
                this
            }
            ,
            t.Player.prototype.seek = function(e, i) {
                return i = this.toSeconds(i),
                this._state.getValueAtTime(i) === t.State.Started && (e = this.toSeconds(e),
                this._stop(i),
                this._start(i, e)),
                this
            }
            ,
            t.Player.prototype.setLoopPoints = function(t, e) {
                return this.loopStart = t,
                this.loopEnd = e,
                this
            }
            ,
            Object.defineProperty(t.Player.prototype, "loopStart", {
                get: function() {
                    return this._loopStart
                },
                set: function(t) {
                    this._loopStart = t,
                    this._source && (this._source.loopStart = this.toSeconds(t))
                }
            }),
            Object.defineProperty(t.Player.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd
                },
                set: function(t) {
                    this._loopEnd = t,
                    this._source && (this._source.loopEnd = this.toSeconds(t))
                }
            }),
            Object.defineProperty(t.Player.prototype, "buffer", {
                get: function() {
                    return this._buffer
                },
                set: function(t) {
                    this._buffer.set(t)
                }
            }),
            Object.defineProperty(t.Player.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(t) {
                    this._loop = t,
                    this._source && (this._source.loop = t)
                }
            }),
            Object.defineProperty(t.Player.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t,
                    this._source && (this._source.playbackRate.value = t)
                }
            }),
            Object.defineProperty(t.Player.prototype, "reverse", {
                get: function() {
                    return this._buffer.reverse
                },
                set: function(t) {
                    this._buffer.reverse = t
                }
            }),
            Object.defineProperty(t.Player.prototype, "loaded", {
                get: function() {
                    return this._buffer.loaded
                }
            }),
            t.Player.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this),
                null !== this._source && (this._source.disconnect(),
                this._source = null),
                this._buffer.dispose(),
                this._buffer = null,
                this
            }
            ,
            t.Player
        }),
        t(function(t) {
            return t.Players = function(e) {
                var i = Array.prototype.slice.call(arguments);
                i.shift();
                var n = t.defaults(i, ["onload"], t.Players);
                t.call(this),
                this._volume = this.output = new t.Volume(n.volume),
                this.volume = this._volume.volume,
                this._readOnly("volume"),
                this._volume.output.output.channelCount = 2,
                this._volume.output.output.channelCountMode = "explicit",
                this.mute = n.mute,
                this._players = {},
                this._loadingCount = 0,
                this._fadeIn = n.fadeIn,
                this._fadeOut = n.fadeOut;
                for (var o in e)
                    this._loadingCount++,
                    this.add(o, e[o], this._bufferLoaded.bind(this, n.onload))
            }
            ,
            t.extend(t.Players, t.AudioNode),
            t.Players.defaults = {
                volume: 0,
                mute: !1,
                onload: t.noOp,
                fadeIn: 0,
                fadeOut: 0
            },
            t.Players.prototype._bufferLoaded = function(t) {
                0 === --this._loadingCount && t && t(this)
            }
            ,
            Object.defineProperty(t.Players.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            Object.defineProperty(t.Players.prototype, "fadeIn", {
                get: function() {
                    return this._fadeIn
                },
                set: function(t) {
                    this._fadeIn = t,
                    this._forEach(function(e) {
                        e.fadeIn = t
                    })
                }
            }),
            Object.defineProperty(t.Players.prototype, "fadeOut", {
                get: function() {
                    return this._fadeOut
                },
                set: function(t) {
                    this._fadeOut = t,
                    this._forEach(function(e) {
                        e.fadeOut = t
                    })
                }
            }),
            Object.defineProperty(t.Players.prototype, "state", {
                get: function() {
                    var e = !1;
                    return this._forEach(function(i) {
                        e = e || i.state === t.State.Started
                    }),
                    e ? t.State.Started : t.State.Stopped
                }
            }),
            t.Players.prototype.has = function(t) {
                return this._players.hasOwnProperty(t)
            }
            ,
            t.Players.prototype.get = function(t) {
                if (this.has(t))
                    return this._players[t];
                throw new Error("Tone.Players: no player named " + t)
            }
            ,
            t.Players.prototype._forEach = function(t) {
                for (var e in this._players)
                    t(this._players[e], e);
                return this
            }
            ,
            Object.defineProperty(t.Players.prototype, "loaded", {
                get: function() {
                    var t = !0;
                    return this._forEach(function(e) {
                        t = t && e.loaded
                    }),
                    t
                }
            }),
            t.Players.prototype.add = function(e, i, n) {
                return this._players[e] = new t.Player(i,n).connect(this.output),
                this._players[e].fadeIn = this._fadeIn,
                this._players[e].fadeOut = this._fadeOut,
                this
            }
            ,
            t.Players.prototype.stopAll = function(t) {
                this._forEach(function(e) {
                    e.stop(t)
                })
            }
            ,
            t.Players.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                this._volume = null,
                this._writable("volume"),
                this.volume = null,
                this.output = null,
                this._forEach(function(t) {
                    t.dispose()
                }),
                this._players = null,
                this
            }
            ,
            t.Players
        }),
        t(function(t) {
            return t.UserMedia = function() {
                var e = t.defaults(arguments, ["volume"], t.UserMedia);
                t.AudioNode.call(this),
                this._mediaStream = null,
                this._stream = null,
                this._device = null,
                this._volume = this.output = new t.Volume(e.volume),
                this.volume = this._volume.volume,
                this._readOnly("volume"),
                this.mute = e.mute
            }
            ,
            t.extend(t.UserMedia, t.AudioNode),
            t.UserMedia.defaults = {
                volume: 0,
                mute: !1
            },
            t.UserMedia.prototype.open = function(e) {
                return e = t.defaultArg(e, "default"),
                t.UserMedia.enumerateDevices().then(function(i) {
                    var n;
                    if (t.isNumber(e))
                        n = i[e];
                    else if (!(n = i.find(function(t) {
                        return t.label === e || t.deviceId === e
                    })))
                        throw new Error("Tone.UserMedia: no matching device: " + e);
                    this._device = n;
                    var o = {
                        audio: {
                            deviceId: n.deviceId,
                            echoCancellation: !1,
                            sampleRate: this.context.sampleRate
                        }
                    };
                    return navigator.mediaDevices.getUserMedia(o).then(function(t) {
                        return this._stream || (this._stream = t,
                        this._mediaStream = this.context.createMediaStreamSource(t),
                        this._mediaStream.connect(this.output)),
                        this
                    }
                    .bind(this))
                }
                .bind(this))
            }
            ,
            t.UserMedia.prototype.close = function() {
                return this._stream && (this._stream.getAudioTracks().forEach(function(t) {
                    t.stop()
                }),
                this._stream = null,
                this._mediaStream.disconnect(),
                this._mediaStream = null),
                this._device = null,
                this
            }
            ,
            t.UserMedia.enumerateDevices = function() {
                return navigator.mediaDevices.enumerateDevices().then(function(t) {
                    return t.filter(function(t) {
                        return "audioinput" === t.kind
                    })
                })
            }
            ,
            Object.defineProperty(t.UserMedia.prototype, "state", {
                get: function() {
                    return this._stream && this._stream.active ? t.State.Started : t.State.Stopped
                }
            }),
            Object.defineProperty(t.UserMedia.prototype, "deviceId", {
                get: function() {
                    if (this._device)
                        return this._device.deviceId
                }
            }),
            Object.defineProperty(t.UserMedia.prototype, "groupId", {
                get: function() {
                    if (this._device)
                        return this._device.groupId
                }
            }),
            Object.defineProperty(t.UserMedia.prototype, "label", {
                get: function() {
                    if (this._device)
                        return this._device.label
                }
            }),
            Object.defineProperty(t.UserMedia.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            t.UserMedia.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.close(),
                this._writable("volume"),
                this._volume.dispose(),
                this._volume = null,
                this.volume = null,
                this
            }
            ,
            Object.defineProperty(t.UserMedia, "supported", {
                get: function() {
                    return !t.isUndef(navigator.mediaDevices) && t.isFunction(navigator.mediaDevices.getUserMedia)
                }
            }),
            t.UserMedia
        }),
        e
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Url = void 0;
    var a = function() {
        function t(t, e) {
            var i = []
              , n = !0
              , o = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                !e || i.length !== e); n = !0)
                    ;
            } catch (t) {
                o = !0,
                r = t
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (o)
                        throw r
                }
            }
            return i
        }
        return function(e, i) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , u = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , l = i(4)
      , c = n(l)
      , h = i(55)
      , p = n(h)
      , f = i(0)
      , d = i(20)
      , y = n(d)
      , _ = i(16)
      , m = function(t) {
        function e() {
            o(this, e);
            var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            t.hashid = new p.default,
            document.querySelector("title").textContent = t.title,
            t.lastUrl = window.location.pathname;
            return t._currentLoading = null,
            function e() {
                setTimeout(e, 100),
                t.lastUrl !== window.location.pathname && (t.lastUrl = window.location.pathname,
                t.emit("change"),
                t.load())
            }(),
            t
        }
        return s(e, t),
        u(e, [{
            key: "setId",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return window.history ? (window.history.pushState("", f.TITLE, this.hashid.encode(t)),
                e ? (this.lastUrl = window.location.pathname,
                this.load()) : Promise.resolve()) : Promise.resolve()
            }
        }, {
            key: "setData",
            value: function(t) {
                this._currentLoading = t.id,
                this.setId(t.id, !1),
                this.emit("data", t)
            }
        }, {
            key: "clear",
            value: function() {
                window.history && "/" !== window.location.pathname && window.history.pushState("", f.TITLE, "/")
            }
        }, {
            key: "getName",
            value: function() {
                if (window.location.pathname > "/") {
                    var t = window.location.pathname.substr(1);
                    return parseInt(t) == t && window.history.pushState("", f.TITLE, this.hashid.encode(t)),
                    t
                }
            }
        }, {
            key: "getId",
            value: function() {
                var t = this.getName();
                if (t) {
                    var e = this.hashid.decode(t)[0];
                    if (e)
                        return e
                }
                return 0
            }
        }, {
            key: "load",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getId();
                if (!e || this._currentLoading == e)
                    return Promise.resolve();
                var i = fetch("/midi/" + e).then(function(t) {
                    if (t.ok)
                        return t.json();
                    throw new Error(t.status)
                }).then(function(e) {
                    return e.id = t.getName(),
                    t.loadMidi(fileurl).then(function(t) {
//Edited By Togi
                        function myFunc() {
                          console.log('warnings dont matter')
                          console.log('Loaded')
                          console.log('https://tog1.me Made with love by Togi! ENJOY!!')
                          var fileinfo = new URL(`${fileurl}`)
                          var path = fileinfo.pathname
                          var hostName = fileinfo.hostname
                          var filename = path.split(/\//).pop();
                          var togiurl = 'https://tog1.me'
                          var elementExists = document.getElementById("skip")
                          if (elementExists) {document.getElementById("skip").remove()}
                          var elementExists1 = document.getElementById("link")
                            if (elementExists1) {document.getElementById("link").remove()}

                          
                          document.getElementById("skipContainer").remove();
                          document.getElementById("dateLocation").remove();
                          if (filename) {
                            document.getElementById("dateLocation").innerHTML = `File, "<a href="${'https://'+hostName+'/'+filename}">${filename}<a>" From, "<a href="${'https://'+hostName}">${hostName}<a>"`
                          } else {document.getElementById("dateLocation").innerHTML = `File, "Data Unavailable" From, "<a href="${'https://'+hostName}">${hostName}<a>"`}
                          document.getElementById("instructions").innerHTML = "Custom Midi Script Provided By Togi! <small>https://tog1.me<small>"
                          document.getElementById("instructions").classList.remove("disappearable");
                          colorLinks("#0EEADC");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {

            links[i].style.color = hex;  
        }
    }  
}
                          }
                          
                          setTimeout(myFunc, 400);

                       
                        return e.events = t,
                        e
                    })
                }).catch(function(t) {
                    console.warn(t)
                });
                return Promise.all([(0,
                _.timeoutPromise)(500), i]).then(function(e) {
                    var i = a(e, 2)
                      , n = (i[0],
                    i[1]);
                    return t.emit("data", n),
                    n
                })
            }
        }, {
            key: "loadMidi",
            value: function(t) {
                return fetch(t).then(function(t) {
                    if (t.ok)
                        return t.arrayBuffer();
                    throw new Error(t.status)
                }).then(function(t) {
                     //Edited By Togi
                    function myFunc() {
                        document.getElementById("skip").remove();
                        document.getElementById("dateLocation").textContent = ''
                        document.getElementById("duration").remove();
                        document.getElementById("link").remove();
                        }
                        
                        setTimeout(myFunc, 50);
console.log('Loading Custom Midi on Track '+midiTrack)
    return y.default.parseMidi(new Uint8Array(t)).tracks[midiTrack]


                    
                })
            }
        }, {
            key: "getNextId",
            value: function() {
                var t = this;
                return fetch("/next").then(function(t) {
                    if (t.ok)
                        return t.text();
                    throw new Error(t.status)
                }).then(function(e) {
                    return e = parseInt(e),
                    t.getId() === e ? t.getNextId() : e
                })
            }
        }, {
            key: "next",
            value: function() {
                var t = this;
                return this.getNextId().then(function(e) {
                    return t.setId(e)
                })
            }
        }]),
        e
    }(c.default.EventEmitter);
    e.Url = new m
}
, function(t, e) {
    function i() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function n(t) {
        return "function" == typeof t
    }
    function o(t) {
        return "number" == typeof t
    }
    function r(t) {
        return "object" == typeof t && null !== t
    }
    function s(t) {
        return void 0 === t
    }
    t.exports = i,
    i.EventEmitter = i,
    i.prototype._events = void 0,
    i.prototype._maxListeners = void 0,
    i.defaultMaxListeners = 10,
    i.prototype.setMaxListeners = function(t) {
        if (!o(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    i.prototype.emit = function(t) {
        var e, i, o, a, u, l;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1])instanceof Error)
                throw e;
            var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw c.context = e,
            c
        }
        if (i = this._events[t],
        s(i))
            return !1;
        if (n(i))
            switch (arguments.length) {
            case 1:
                i.call(this);
                break;
            case 2:
                i.call(this, arguments[1]);
                break;
            case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
            default:
                a = Array.prototype.slice.call(arguments, 1),
                i.apply(this, a)
            }
        else if (r(i))
            for (a = Array.prototype.slice.call(arguments, 1),
            l = i.slice(),
            o = l.length,
            u = 0; u < o; u++)
                l[u].apply(this, a);
        return !0
    }
    ,
    i.prototype.addListener = function(t, e) {
        var o;
        if (!n(e))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e),
        this._events[t] ? r(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        r(this._events[t]) && !this._events[t].warned && (o = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[t].length > o && (this._events[t].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    i.prototype.on = i.prototype.addListener,
    i.prototype.once = function(t, e) {
        function i() {
            this.removeListener(t, i),
            o || (o = !0,
            e.apply(this, arguments))
        }
        if (!n(e))
            throw TypeError("listener must be a function");
        var o = !1;
        return i.listener = e,
        this.on(t, i),
        this
    }
    ,
    i.prototype.removeListener = function(t, e) {
        var i, o, s, a;
        if (!n(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (i = this._events[t],
        s = i.length,
        o = -1,
        i === e || n(i.listener) && i.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (r(i)) {
            for (a = s; a-- > 0; )
                if (i[a] === e || i[a].listener && i[a].listener === e) {
                    o = a;
                    break
                }
            if (o < 0)
                return this;
            1 === i.length ? (i.length = 0,
            delete this._events[t]) : i.splice(o, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    i.prototype.removeAllListeners = function(t) {
        var e, i;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (i = this._events[t],
        n(i))
            this.removeListener(t, i);
        else if (i)
            for (; i.length; )
                this.removeListener(t, i[i.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    i.prototype.listeners = function(t) {
        return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    i.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (n(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }
    ,
    i.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e, i) {
        window.ga && (3 === arguments.length ? ga("send", "event", t, e, i) : 2 === arguments.length && ga("send", "event", t, e))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.sendEvent = o;
    var r = i(12)
      , s = n(r);
    (0,
    n(i(15)).default)(function() {
        s.default.enable(function(t) {
            t ? o("midi", "not-supported") : o("midi", "supported")
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Dot = void 0;
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(8)
      , s = i(13)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(s)
      , u = i(0)
      , l = {
        ATTACK: 0,
        DECAY: 1,
        SUSATAIN: 2,
        RELEASE: 3,
        DONE: 4
    }
      , c = .1
      , h = 2 * Math.PI;
    e.Dot = function() {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .8
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
            n(this, t),
            this.note = e,
            this.x = (e - u.MIN_MIDI) / (u.MAX_MIDI - u.MIN_MIDI) * (1 - 2 * c) + c,
            this.duration = o,
            this.velocity = Math.pow(i, 2),
            this.color = (0,
            r.getColor)(e),
            this.envelope = 0,
            this.opacity = 0,
            this.targetOpacity = 1,
            this.attackTime = 25,
            this.decayTime = 300,
            this.releaseTime = 700,
            this.opacityAttackTime = this.attackTime,
            this.opacityReleaseTime = this.releaseTime,
            this.minVelocity = .3,
            this.attackMax = 1.1,
            this.sustainLevel = .05,
            this.opacitySustainLevel = 1
        }
        return o(t, [{
            key: "draw",
            value: function(t) {}
        }, {
            key: "_attackTween",
            value: function() {
                var t = this;
                this.phase = l.ATTACK,
                this.tween = new a.default.Tween(this).to({
                    envelope: this.attackMax
                }, this.attackTime).easing(a.default.Easing.Cubic.Out).onComplete(function() {
                    return t._decayTween()
                }).start(),
                this.opacityTween = new a.default.Tween(this).to({
                    opacity: this.targetOpacity
                }, this.opacityAttackTime).easing(a.default.Easing.Cubic.Out).start()
            }
        }, {
            key: "_decayTween",
            value: function() {
                var t = this;
                this.phase = l.DECAY,
                this.tween = new a.default.Tween(this).to({
                    envelope: 1
                }, this.decayTime).easing(a.default.Easing.Cubic.Out).onComplete(function() {
                    return t._sustainTween()
                }).start()
            }
        }, {
            key: "_sustainTween",
            value: function() {
                this.phase = l.SUSATAIN,
                this.tween = new a.default.Tween(this).to({
                    envelope: this.sustainLevel
                }, this.sustainTime).easing(a.default.Easing.Quadratic.Out).start(),
                this.opacityTween = new a.default.Tween(this).to({
                    opacity: this.opacitySustainLevel
                }, this.sustainTime).easing(a.default.Easing.Quadratic.Out).start()
            }
        }, {
            key: "_releaseTween",
            value: function() {
                var t = this;
                this.phase = l.RELEASE,
                this.tween = new a.default.Tween(this).to({
                    envelope: 0
                }, this.releaseTime).easing(a.default.Easing.Cubic.Out).start(),
                this.opacityTween = new a.default.Tween(this).to({
                    opacity: 0
                }, this.opacityReleaseTime).easing(a.default.Easing.Cubic.Out).start(),
                this.opacityReleaseTime > this.releaseTime ? this.opacityTween.onComplete(function() {
                    return t.phase = l.DONE
                }) : this.tween.onComplete(function() {
                    return t.phase = l.DONE
                })
            }
        }, {
            key: "attack",
            value: function(t) {
                this.velocity = t * (1 - this.minVelocity) + this.minVelocity,
                this.sustainTime = this.duration * Math.pow(this.velocity, 2) * 1e3,
                this.startTime = performance.now(),
                this.tween && (this.tween.stop(),
                this.opacityTween.stop()),
                this._attackTween()
            }
        }, {
            key: "release",
            value: function() {
                this.tween && (this.tween.stop(),
                this.opacityTween.stop()),
                this._releaseTween()
            }
        }, {
            key: "removed",
            value: function() {}
        }, {
            key: "active",
            get: function() {
                return this.phase !== l.DONE
            }
        }, {
            key: "elapsedTime",
            get: function() {
                return (performance.now() - this.startTime) / 1e3
            }
        }, {
            key: "TWO_PI",
            get: function() {
                return h
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Keyboard = void 0;
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , u = i(4)
      , l = n(u)
      , c = i(45)
      , h = n(c)
      , p = i(18)
      , f = i(0)
      , d = i(5)
      , y = {
        usedMidi: !1,
        usedKeyboard: !1
    };
    e.Keyboard = function(t) {
        function e() {
            o(this, e);
            var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
              , i = new h.default({
                polyphony: 88
            });
            i.down(function(e) {
                t.validRange(e.note) && (y.usedKeyboard || (y.usedKeyboard = !0,
                (0,
                d.sendEvent)("midi", "played", "keyboard")),
                t.emit("keyDown", e.note, .75, t.time()))
            }),
            i.up(function(e) {
                t.validRange(e.note) && t.emit("keyUp", e.note, .75, t.time())
            });
            var n = t.midi = new p.Midi;
            return n.on("keyDown", function(e, i, n) {
                y.usedMidi || (y.usedMidi = !0,
                (0,
                d.sendEvent)("midi", "played", "midi-device")),
                t.validRange(e) && t.emit("keyDown", e, i, n)
            }),
            n.on("keyUp", function(e, i, n) {
                t.validRange(e) && t.emit("keyUp", e, i, n)
            }),
            n.on("pedal", function(e, i) {
                t.emit("pedal", e, i)
            }),
            t
        }
        return s(e, t),
        a(e, [{
            key: "validRange",
            value: function(t) {
                return t >= f.MIN_MIDI && t <= f.MAX_MIDI
            }
        }, {
            key: "time",
            value: function() {
                return this.midi.time()
            }
        }]),
        e
    }(l.default.EventEmitter)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        var e = t % 12;
        return (0,
        r.default)("rgb(" + s[e].join(", ") + ")")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.AllColors = e.gray = void 0,
    e.getColor = n;
    var o = i(11)
      , r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(o)
      , s = [[78, 97, 216], [128, 100, 198], [165, 66, 177], [237, 56, 131], [247, 88, 57], [247, 148, 61], [246, 190, 55], [209, 193, 46], [149, 198, 49], [75, 178, 80], [69, 181, 161], [69, 152, 182]];
    e.gray = (0,
    r.default)("rgb(40, 40, 40)"),
    e.AllColors = s.slice(0)
}
, function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var i = this[e];
                i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
            }
            return t.join("")
        }
        ,
        t.i = function(e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (n[r] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var s = e[o];
                "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"),
                t.push(s))
            }
        }
        ,
        t
    }
}
, function(t, e) {
    function i(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i]
              , o = p[n.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++)
                    o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++)
                    o.parts.push(u(n.parts[r], e))
            } else {
                for (var s = [], r = 0; r < n.parts.length; r++)
                    s.push(u(n.parts[r], e));
                p[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function n(t) {
        for (var e = [], i = {}, n = 0; n < t.length; n++) {
            var o = t[n]
              , r = o[0]
              , s = o[1]
              , a = o[2]
              , u = o[3]
              , l = {
                css: s,
                media: a,
                sourceMap: u
            };
            i[r] ? i[r].parts.push(l) : e.push(i[r] = {
                id: r,
                parts: [l]
            })
        }
        return e
    }
    function o(t, e) {
        var i = y()
          , n = v[v.length - 1];
        if ("top" === t.insertAt)
            n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild),
            v.push(e);
        else {
            if ("bottom" !== t.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(e)
        }
    }
    function r(t) {
        t.parentNode.removeChild(t);
        var e = v.indexOf(t);
        e >= 0 && v.splice(e, 1)
    }
    function s(t) {
        var e = document.createElement("style");
        return e.type = "text/css",
        o(t, e),
        e
    }
    function a(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet",
        o(t, e),
        e
    }
    function u(t, e) {
        var i, n, o;
        if (e.singleton) {
            var u = m++;
            i = _ || (_ = s(e)),
            n = l.bind(null, i, u, !1),
            o = l.bind(null, i, u, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = a(e),
            n = h.bind(null, i),
            o = function() {
                r(i),
                i.href && URL.revokeObjectURL(i.href)
            }
            ) : (i = s(e),
            n = c.bind(null, i),
            o = function() {
                r(i)
            }
            );
        return n(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                n(t = e)
            } else
                o()
        }
    }
    function l(t, e, i, n) {
        var o = i ? "" : n.css;
        if (t.styleSheet)
            t.styleSheet.cssText = g(e, o);
        else {
            var r = document.createTextNode(o)
              , s = t.childNodes;
            s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
        }
    }
    function c(t, e) {
        var i = e.css
          , n = e.media;
        if (n && t.setAttribute("media", n),
        t.styleSheet)
            t.styleSheet.cssText = i;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }
    function h(t, e) {
        var i = e.css
          , n = e.sourceMap;
        n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var o = new Blob([i],{
            type: "text/css"
        })
          , r = t.href;
        t.href = URL.createObjectURL(o),
        r && URL.revokeObjectURL(r)
    }
    var p = {}
      , f = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)),
            e
        }
    }
      , d = f(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    })
      , y = f(function() {
        return document.head || document.getElementsByTagName("head")[0]
    })
      , _ = null
      , m = 0
      , v = [];
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {},
        void 0 === e.singleton && (e.singleton = d()),
        void 0 === e.insertAt && (e.insertAt = "bottom");
        var o = n(t);
        return i(o, e),
        function(t) {
            for (var r = [], s = 0; s < o.length; s++) {
                var a = o[s]
                  , u = p[a.id];
                u.refs--,
                r.push(u)
            }
            if (t) {
                i(n(t), e)
            }
            for (var s = 0; s < r.length; s++) {
                var u = r[s];
                if (0 === u.refs) {
                    for (var l = 0; l < u.parts.length; l++)
                        u.parts[l]();
                    delete p[u.id]
                }
            }
        }
    }
    ;
    var g = function() {
        var t = [];
        return function(e, i) {
            return t[e] = i,
            t.filter(Boolean).join("\n")
        }
    }()
}
, function(t, e, i) {
    var n;
    !function(o) {
        function r(t, e) {
            if (t = t || "",
            e = e || {},
            t instanceof r)
                return t;
            if (!(this instanceof r))
                return new r(t,e);
            var i = s(t);
            this._originalInput = t,
            this._r = i.r,
            this._g = i.g,
            this._b = i.b,
            this._a = i.a,
            this._roundA = Y(100 * this._a) / 100,
            this._format = e.format || i.format,
            this._gradientType = e.gradientType,
            this._r < 1 && (this._r = Y(this._r)),
            this._g < 1 && (this._g = Y(this._g)),
            this._b < 1 && (this._b = Y(this._b)),
            this._ok = i.ok,
            this._tc_id = G++
        }
        function s(t) {
            var e = {
                r: 0,
                g: 0,
                b: 0
            }
              , i = 1
              , n = null
              , o = null
              , r = null
              , s = !1
              , u = !1;
            return "string" == typeof t && (t = U(t)),
            "object" == typeof t && (R(t.r) && R(t.g) && R(t.b) ? (e = a(t.r, t.g, t.b),
            s = !0,
            u = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : R(t.h) && R(t.s) && R(t.v) ? (n = j(t.s),
            o = j(t.v),
            e = h(t.h, n, o),
            s = !0,
            u = "hsv") : R(t.h) && R(t.s) && R(t.l) && (n = j(t.s),
            r = j(t.l),
            e = l(t.h, n, r),
            s = !0,
            u = "hsl"),
            t.hasOwnProperty("a") && (i = t.a)),
            i = O(i),
            {
                ok: s,
                format: t.format || u,
                r: H(255, V(e.r, 0)),
                g: H(255, V(e.g, 0)),
                b: H(255, V(e.b, 0)),
                a: i
            }
        }
        function a(t, e, i) {
            return {
                r: 255 * A(t, 255),
                g: 255 * A(e, 255),
                b: 255 * A(i, 255)
            }
        }
        function u(t, e, i) {
            t = A(t, 255),
            e = A(e, 255),
            i = A(i, 255);
            var n, o, r = V(t, e, i), s = H(t, e, i), a = (r + s) / 2;
            if (r == s)
                n = o = 0;
            else {
                var u = r - s;
                switch (o = a > .5 ? u / (2 - r - s) : u / (r + s),
                r) {
                case t:
                    n = (e - i) / u + (e < i ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / u + 2;
                    break;
                case i:
                    n = (t - e) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                l: a
            }
        }
        function l(t, e, i) {
            function n(t, e, i) {
                return i < 0 && (i += 1),
                i > 1 && (i -= 1),
                i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o, r, s;
            if (t = A(t, 360),
            e = A(e, 100),
            i = A(i, 100),
            0 === e)
                o = r = s = i;
            else {
                var a = i < .5 ? i * (1 + e) : i + e - i * e
                  , u = 2 * i - a;
                o = n(u, a, t + 1 / 3),
                r = n(u, a, t),
                s = n(u, a, t - 1 / 3)
            }
            return {
                r: 255 * o,
                g: 255 * r,
                b: 255 * s
            }
        }
        function c(t, e, i) {
            t = A(t, 255),
            e = A(e, 255),
            i = A(i, 255);
            var n, o, r = V(t, e, i), s = H(t, e, i), a = r, u = r - s;
            if (o = 0 === r ? 0 : u / r,
            r == s)
                n = 0;
            else {
                switch (r) {
                case t:
                    n = (e - i) / u + (e < i ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / u + 2;
                    break;
                case i:
                    n = (t - e) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                v: a
            }
        }
        function h(t, e, i) {
            t = 6 * A(t, 360),
            e = A(e, 100),
            i = A(i, 100);
            var n = o.floor(t)
              , r = t - n
              , s = i * (1 - e)
              , a = i * (1 - r * e)
              , u = i * (1 - (1 - r) * e)
              , l = n % 6;
            return {
                r: 255 * [i, a, s, s, u, i][l],
                g: 255 * [u, i, i, a, s, s][l],
                b: 255 * [s, s, u, i, i, a][l]
            }
        }
        function p(t, e, i, n) {
            var o = [C(Y(t).toString(16)), C(Y(e).toString(16)), C(Y(i).toString(16))];
            return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
        }
        function f(t, e, i, n, o) {
            var r = [C(Y(t).toString(16)), C(Y(e).toString(16)), C(Y(i).toString(16)), C(D(n))];
            return o && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) && r[3].charAt(0) == r[3].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0) : r.join("")
        }
        function d(t, e, i, n) {
            return [C(D(n)), C(Y(t).toString(16)), C(Y(e).toString(16)), C(Y(i).toString(16))].join("")
        }
        function y(t, e) {
            e = 0 === e ? 0 : e || 10;
            var i = r(t).toHsl();
            return i.s -= e / 100,
            i.s = I(i.s),
            r(i)
        }
        function _(t, e) {
            e = 0 === e ? 0 : e || 10;
            var i = r(t).toHsl();
            return i.s += e / 100,
            i.s = I(i.s),
            r(i)
        }
        function m(t) {
            return r(t).desaturate(100)
        }
        function v(t, e) {
            e = 0 === e ? 0 : e || 10;
            var i = r(t).toHsl();
            return i.l += e / 100,
            i.l = I(i.l),
            r(i)
        }
        function g(t, e) {
            e = 0 === e ? 0 : e || 10;
            var i = r(t).toRgb();
            return i.r = V(0, H(255, i.r - Y(-e / 100 * 255))),
            i.g = V(0, H(255, i.g - Y(-e / 100 * 255))),
            i.b = V(0, H(255, i.b - Y(-e / 100 * 255))),
            r(i)
        }
        function b(t, e) {
            e = 0 === e ? 0 : e || 10;
            var i = r(t).toHsl();
            return i.l -= e / 100,
            i.l = I(i.l),
            r(i)
        }
        function w(t, e) {
            var i = r(t).toHsl()
              , n = (i.h + e) % 360;
            return i.h = n < 0 ? 360 + n : n,
            r(i)
        }
        function T(t) {
            var e = r(t).toHsl();
            return e.h = (e.h + 180) % 360,
            r(e)
        }
        function S(t) {
            var e = r(t).toHsl()
              , i = e.h;
            return [r(t), r({
                h: (i + 120) % 360,
                s: e.s,
                l: e.l
            }), r({
                h: (i + 240) % 360,
                s: e.s,
                l: e.l
            })]
        }
        function x(t) {
            var e = r(t).toHsl()
              , i = e.h;
            return [r(t), r({
                h: (i + 90) % 360,
                s: e.s,
                l: e.l
            }), r({
                h: (i + 180) % 360,
                s: e.s,
                l: e.l
            }), r({
                h: (i + 270) % 360,
                s: e.s,
                l: e.l
            })]
        }
        function M(t) {
            var e = r(t).toHsl()
              , i = e.h;
            return [r(t), r({
                h: (i + 72) % 360,
                s: e.s,
                l: e.l
            }), r({
                h: (i + 216) % 360,
                s: e.s,
                l: e.l
            })]
        }
        function k(t, e, i) {
            e = e || 6,
            i = i || 30;
            var n = r(t).toHsl()
              , o = 360 / i
              , s = [r(t)];
            for (n.h = (n.h - (o * e >> 1) + 720) % 360; --e; )
                n.h = (n.h + o) % 360,
                s.push(r(n));
            return s
        }
        function E(t, e) {
            e = e || 6;
            for (var i = r(t).toHsv(), n = i.h, o = i.s, s = i.v, a = [], u = 1 / e; e--; )
                a.push(r({
                    h: n,
                    s: o,
                    v: s
                })),
                s = (s + u) % 1;
            return a
        }
        function O(t) {
            return t = parseFloat(t),
            (isNaN(t) || t < 0 || t > 1) && (t = 1),
            t
        }
        function A(t, e) {
            N(t) && (t = "100%");
            var i = L(t);
            return t = H(e, V(0, parseFloat(t))),
            i && (t = parseInt(t * e, 10) / 100),
            o.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
        }
        function I(t) {
            return H(1, V(0, t))
        }
        function P(t) {
            return parseInt(t, 16)
        }
        function N(t) {
            return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
        }
        function L(t) {
            return "string" == typeof t && -1 != t.indexOf("%")
        }
        function C(t) {
            return 1 == t.length ? "0" + t : "" + t
        }
        function j(t) {
            return t <= 1 && (t = 100 * t + "%"),
            t
        }
        function D(t) {
            return o.round(255 * parseFloat(t)).toString(16)
        }
        function F(t) {
            return P(t) / 255
        }
        function R(t) {
            return !!X.CSS_UNIT.exec(t)
        }
        function U(t) {
            t = t.replace(B, "").replace(q, "").toLowerCase();
            var e = !1;
            if (W[t])
                t = W[t],
                e = !0;
            else if ("transparent" == t)
                return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
            var i;
            return (i = X.rgb.exec(t)) ? {
                r: i[1],
                g: i[2],
                b: i[3]
            } : (i = X.rgba.exec(t)) ? {
                r: i[1],
                g: i[2],
                b: i[3],
                a: i[4]
            } : (i = X.hsl.exec(t)) ? {
                h: i[1],
                s: i[2],
                l: i[3]
            } : (i = X.hsla.exec(t)) ? {
                h: i[1],
                s: i[2],
                l: i[3],
                a: i[4]
            } : (i = X.hsv.exec(t)) ? {
                h: i[1],
                s: i[2],
                v: i[3]
            } : (i = X.hsva.exec(t)) ? {
                h: i[1],
                s: i[2],
                v: i[3],
                a: i[4]
            } : (i = X.hex8.exec(t)) ? {
                r: P(i[1]),
                g: P(i[2]),
                b: P(i[3]),
                a: F(i[4]),
                format: e ? "name" : "hex8"
            } : (i = X.hex6.exec(t)) ? {
                r: P(i[1]),
                g: P(i[2]),
                b: P(i[3]),
                format: e ? "name" : "hex"
            } : (i = X.hex4.exec(t)) ? {
                r: P(i[1] + "" + i[1]),
                g: P(i[2] + "" + i[2]),
                b: P(i[3] + "" + i[3]),
                a: F(i[4] + "" + i[4]),
                format: e ? "name" : "hex8"
            } : !!(i = X.hex3.exec(t)) && {
                r: P(i[1] + "" + i[1]),
                g: P(i[2] + "" + i[2]),
                b: P(i[3] + "" + i[3]),
                format: e ? "name" : "hex"
            }
        }
        function z(t) {
            var e, i;
            return t = t || {
                level: "AA",
                size: "small"
            },
            e = (t.level || "AA").toUpperCase(),
            i = (t.size || "small").toLowerCase(),
            "AA" !== e && "AAA" !== e && (e = "AA"),
            "small" !== i && "large" !== i && (i = "small"),
            {
                level: e,
                size: i
            }
        }
        var B = /^\s+/
          , q = /\s+$/
          , G = 0
          , Y = o.round
          , H = o.min
          , V = o.max
          , Z = o.random;
        r.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
            },
            getLuminance: function() {
                var t, e, i, n, r, s, a = this.toRgb();
                return t = a.r / 255,
                e = a.g / 255,
                i = a.b / 255,
                n = t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4),
                r = e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4),
                s = i <= .03928 ? i / 12.92 : o.pow((i + .055) / 1.055, 2.4),
                .2126 * n + .7152 * r + .0722 * s
            },
            setAlpha: function(t) {
                return this._a = O(t),
                this._roundA = Y(100 * this._a) / 100,
                this
            },
            toHsv: function() {
                var t = c(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    v: t.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var t = c(this._r, this._g, this._b)
                  , e = Y(360 * t.h)
                  , i = Y(100 * t.s)
                  , n = Y(100 * t.v);
                return 1 == this._a ? "hsv(" + e + ", " + i + "%, " + n + "%)" : "hsva(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var t = u(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    l: t.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var t = u(this._r, this._g, this._b)
                  , e = Y(360 * t.h)
                  , i = Y(100 * t.s)
                  , n = Y(100 * t.l);
                return 1 == this._a ? "hsl(" + e + ", " + i + "%, " + n + "%)" : "hsla(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
            },
            toHex: function(t) {
                return p(this._r, this._g, this._b, t)
            },
            toHexString: function(t) {
                return "#" + this.toHex(t)
            },
            toHex8: function(t) {
                return f(this._r, this._g, this._b, this._a, t)
            },
            toHex8String: function(t) {
                return "#" + this.toHex8(t)
            },
            toRgb: function() {
                return {
                    r: Y(this._r),
                    g: Y(this._g),
                    b: Y(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + Y(this._r) + ", " + Y(this._g) + ", " + Y(this._b) + ")" : "rgba(" + Y(this._r) + ", " + Y(this._g) + ", " + Y(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: Y(100 * A(this._r, 255)) + "%",
                    g: Y(100 * A(this._g, 255)) + "%",
                    b: Y(100 * A(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + Y(100 * A(this._r, 255)) + "%, " + Y(100 * A(this._g, 255)) + "%, " + Y(100 * A(this._b, 255)) + "%)" : "rgba(" + Y(100 * A(this._r, 255)) + "%, " + Y(100 * A(this._g, 255)) + "%, " + Y(100 * A(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (Q[p(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(t) {
                var e = "#" + d(this._r, this._g, this._b, this._a)
                  , i = e
                  , n = this._gradientType ? "GradientType = 1, " : "";
                if (t) {
                    var o = r(t);
                    i = "#" + d(o._r, o._g, o._b, o._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + i + ")"
            },
            toString: function(t) {
                var e = !!t;
                t = t || this._format;
                var i = !1
                  , n = this._a < 1 && this._a >= 0;
                return e || !n || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (i = this.toRgbString()),
                "prgb" === t && (i = this.toPercentageRgbString()),
                "hex" !== t && "hex6" !== t || (i = this.toHexString()),
                "hex3" === t && (i = this.toHexString(!0)),
                "hex4" === t && (i = this.toHex8String(!0)),
                "hex8" === t && (i = this.toHex8String()),
                "name" === t && (i = this.toName()),
                "hsl" === t && (i = this.toHslString()),
                "hsv" === t && (i = this.toHsvString()),
                i || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function() {
                return r(this.toString())
            },
            _applyModification: function(t, e) {
                var i = t.apply(null, [this].concat([].slice.call(e)));
                return this._r = i._r,
                this._g = i._g,
                this._b = i._b,
                this.setAlpha(i._a),
                this
            },
            lighten: function() {
                return this._applyModification(v, arguments)
            },
            brighten: function() {
                return this._applyModification(g, arguments)
            },
            darken: function() {
                return this._applyModification(b, arguments)
            },
            desaturate: function() {
                return this._applyModification(y, arguments)
            },
            saturate: function() {
                return this._applyModification(_, arguments)
            },
            greyscale: function() {
                return this._applyModification(m, arguments)
            },
            spin: function() {
                return this._applyModification(w, arguments)
            },
            _applyCombination: function(t, e) {
                return t.apply(null, [this].concat([].slice.call(e)))
            },
            analogous: function() {
                return this._applyCombination(k, arguments)
            },
            complement: function() {
                return this._applyCombination(T, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(E, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(M, arguments)
            },
            triad: function() {
                return this._applyCombination(S, arguments)
            },
            tetrad: function() {
                return this._applyCombination(x, arguments)
            }
        },
        r.fromRatio = function(t, e) {
            if ("object" == typeof t) {
                var i = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (i[n] = "a" === n ? t[n] : j(t[n]));
                t = i
            }
            return r(t, e)
        }
        ,
        r.equals = function(t, e) {
            return !(!t || !e) && r(t).toRgbString() == r(e).toRgbString()
        }
        ,
        r.random = function() {
            return r.fromRatio({
                r: Z(),
                g: Z(),
                b: Z()
            })
        }
        ,
        r.mix = function(t, e, i) {
            i = 0 === i ? 0 : i || 50;
            var n = r(t).toRgb()
              , o = r(e).toRgb()
              , s = i / 100;
            return r({
                r: (o.r - n.r) * s + n.r,
                g: (o.g - n.g) * s + n.g,
                b: (o.b - n.b) * s + n.b,
                a: (o.a - n.a) * s + n.a
            })
        }
        ,
        r.readability = function(t, e) {
            var i = r(t)
              , n = r(e);
            return (o.max(i.getLuminance(), n.getLuminance()) + .05) / (o.min(i.getLuminance(), n.getLuminance()) + .05)
        }
        ,
        r.isReadable = function(t, e, i) {
            var n, o, s = r.readability(t, e);
            switch (o = !1,
            n = z(i),
            n.level + n.size) {
            case "AAsmall":
            case "AAAlarge":
                o = s >= 4.5;
                break;
            case "AAlarge":
                o = s >= 3;
                break;
            case "AAAsmall":
                o = s >= 7
            }
            return o
        }
        ,
        r.mostReadable = function(t, e, i) {
            var n, o, s, a, u = null, l = 0;
            i = i || {},
            o = i.includeFallbackColors,
            s = i.level,
            a = i.size;
            for (var c = 0; c < e.length; c++)
                (n = r.readability(t, e[c])) > l && (l = n,
                u = r(e[c]));
            return r.isReadable(t, u, {
                level: s,
                size: a
            }) || !o ? u : (i.includeFallbackColors = !1,
            r.mostReadable(t, ["#fff", "#000"], i))
        }
        ;
        var W = r.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        }
          , Q = r.hexNames = function(t) {
            var e = {};
            for (var i in t)
                t.hasOwnProperty(i) && (e[t[i]] = i);
            return e
        }(W)
          , X = function() {
            var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"
              , e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?"
              , i = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
            return {
                CSS_UNIT: new RegExp(t),
                rgb: new RegExp("rgb" + e),
                rgba: new RegExp("rgba" + i),
                hsl: new RegExp("hsl" + e),
                hsla: new RegExp("hsla" + i),
                hsv: new RegExp("hsv" + e),
                hsva: new RegExp("hsva" + i),
                hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
        void 0 !== t && t.exports ? t.exports = r : void 0 !== (n = function() {
            return r
        }
        .call(e, i, e, t)) && (t.exports = n)
    }(Math)
}
, function(t, e, i) {
    var n, o;
    !function(i) {
        "use strict";
        function r() {
            if (r.prototype._singleton)
                throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");
            r.prototype._singleton = this,
            this._inputs = [],
            this._outputs = [],
            this._userHandlers = {},
            this._stateChangeQueue = [],
            this._processingStateChange = !1,
            this._midiInterfaceEvents = ["connected", "disconnected"],
            this._notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
            this._semitones = {
                C: 0,
                D: 2,
                E: 4,
                F: 5,
                G: 7,
                A: 9,
                B: 11
            },
            Object.defineProperties(this, {
                MIDI_SYSTEM_MESSAGES: {
                    value: {
                        sysex: 240,
                        timecode: 241,
                        songposition: 242,
                        songselect: 243,
                        tuningrequest: 246,
                        sysexend: 247,
                        clock: 248,
                        start: 250,
                        continue: 251,
                        stop: 252,
                        activesensing: 254,
                        reset: 255,
                        unknownsystemmessage: -1
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CHANNEL_MESSAGES: {
                    value: {
                        noteoff: 8,
                        noteon: 9,
                        keyaftertouch: 10,
                        controlchange: 11,
                        channelmode: 11,
                        programchange: 12,
                        channelaftertouch: 13,
                        pitchbend: 14
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_REGISTERED_PARAMETER: {
                    value: {
                        pitchbendrange: [0, 0],
                        channelfinetuning: [0, 1],
                        channelcoarsetuning: [0, 2],
                        tuningprogram: [0, 3],
                        tuningbank: [0, 4],
                        modulationrange: [0, 5],
                        azimuthangle: [61, 0],
                        elevationangle: [61, 1],
                        gain: [61, 2],
                        distanceratio: [61, 3],
                        maximumdistance: [61, 4],
                        maximumdistancegain: [61, 5],
                        referencedistanceratio: [61, 6],
                        panspreadangle: [61, 7],
                        rollangle: [61, 8]
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CONTROL_CHANGE_MESSAGES: {
                    value: {
                        bankselectcoarse: 0,
                        modulationwheelcoarse: 1,
                        breathcontrollercoarse: 2,
                        footcontrollercoarse: 4,
                        portamentotimecoarse: 5,
                        dataentrycoarse: 6,
                        volumecoarse: 7,
                        balancecoarse: 8,
                        pancoarse: 10,
                        expressioncoarse: 11,
                        effectcontrol1coarse: 12,
                        effectcontrol2coarse: 13,
                        generalpurposeslider1: 16,
                        generalpurposeslider2: 17,
                        generalpurposeslider3: 18,
                        generalpurposeslider4: 19,
                        bankselectfine: 32,
                        modulationwheelfine: 33,
                        breathcontrollerfine: 34,
                        footcontrollerfine: 36,
                        portamentotimefine: 37,
                        dataentryfine: 38,
                        volumefine: 39,
                        balancefine: 40,
                        panfine: 42,
                        expressionfine: 43,
                        effectcontrol1fine: 44,
                        effectcontrol2fine: 45,
                        holdpedal: 64,
                        portamento: 65,
                        sustenutopedal: 66,
                        softpedal: 67,
                        legatopedal: 68,
                        hold2pedal: 69,
                        soundvariation: 70,
                        resonance: 71,
                        soundreleasetime: 72,
                        soundattacktime: 73,
                        brightness: 74,
                        soundcontrol6: 75,
                        soundcontrol7: 76,
                        soundcontrol8: 77,
                        soundcontrol9: 78,
                        soundcontrol10: 79,
                        generalpurposebutton1: 80,
                        generalpurposebutton2: 81,
                        generalpurposebutton3: 82,
                        generalpurposebutton4: 83,
                        reverblevel: 91,
                        tremololevel: 92,
                        choruslevel: 93,
                        celestelevel: 94,
                        phaserlevel: 95,
                        databuttonincrement: 96,
                        databuttondecrement: 97,
                        nonregisteredparametercoarse: 98,
                        nonregisteredparameterfine: 99,
                        registeredparametercoarse: 100,
                        registeredparameterfine: 101
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CHANNEL_MODE_MESSAGES: {
                    value: {
                        allsoundoff: 120,
                        resetallcontrollers: 121,
                        localcontrol: 122,
                        allnotesoff: 123,
                        omnimodeoff: 124,
                        omnimodeon: 125,
                        monomodeon: 126,
                        polymodeon: 127
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                }
            }),
            Object.defineProperties(this, {
                supported: {
                    enumerable: !0,
                    get: function() {
                        return "requestMIDIAccess"in navigator
                    }
                },
                enabled: {
                    enumerable: !0,
                    get: function() {
                        return void 0 !== this.interface
                    }
                    .bind(this)
                },
                inputs: {
                    enumerable: !0,
                    get: function() {
                        return this._inputs
                    }
                    .bind(this)
                },
                outputs: {
                    enumerable: !0,
                    get: function() {
                        return this._outputs
                    }
                    .bind(this)
                },
                sysexEnabled: {
                    enumerable: !0,
                    get: function() {
                        return !(!this.interface || !this.interface.sysexEnabled)
                    }
                    .bind(this)
                },
                time: {
                    enumerable: !0,
                    get: function() {
                        return performance.now()
                    }
                }
            })
        }
        function s(t) {
            var e = this;
            this._userHandlers = {
                channel: {},
                system: {}
            },
            this._midiInput = t,
            Object.defineProperties(this, {
                connection: {
                    enumerable: !0,
                    get: function() {
                        return e._midiInput.connection
                    }
                },
                id: {
                    enumerable: !0,
                    get: function() {
                        return e._midiInput.id
                    }
                },
                manufacturer: {
                    enumerable: !0,
                    get: function() {
                        return e._midiInput.manufacturer
                    }
                },
                name: {
                    enumerable: !0,
                    get: function() {
                        return e._midiInput.name
                    }
                },
                state: {
                    enumerable: !0,
                    get: function() {
                        return e._midiInput.state
                    }
                }
            }),
            this._initializeUserHandlers()
        }
        function a(t) {
            var e = this;
            this._midiOutput = t,
            Object.defineProperties(this, {
                connection: {
                    enumerable: !0,
                    get: function() {
                        return e._midiOutput.connection
                    }
                },
                id: {
                    enumerable: !0,
                    get: function() {
                        return e._midiOutput.id
                    }
                },
                manufacturer: {
                    enumerable: !0,
                    get: function() {
                        return e._midiOutput.manufacturer
                    }
                },
                name: {
                    enumerable: !0,
                    get: function() {
                        return e._midiOutput.name
                    }
                },
                state: {
                    enumerable: !0,
                    get: function() {
                        return e._midiOutput.state
                    }
                }
            })
        }
        var u = new r;
        r.prototype.enable = function(t, e) {
            return this.enabled ? void 0 : this.supported ? void navigator.requestMIDIAccess({
                sysex: e
            }).then(function(e) {
                this.interface = e,
                this._resetInterfaceUserHandlers(),
                this.interface.onstatechange = this._onInterfaceStateChange.bind(this),
                this._onInterfaceStateChange(null),
                "function" == typeof t && t.call(this)
            }
            .bind(this), function(e) {
                "function" == typeof t && t.call(this, e)
            }
            .bind(this)) : void ("function" == typeof t && t(new Error("The Web MIDI API is not supported by your browser.")))
        }
        ,
        r.prototype.disable = function() {
            if (!this.supported)
                throw new Error("The Web MIDI API is not supported by your browser.");
            this.interface.onstatechange = void 0,
            this.interface = void 0,
            this._inputs = [],
            this._outputs = [],
            this._resetInterfaceUserHandlers()
        }
        ,
        r.prototype.addListener = function(t, e) {
            if (!this.enabled)
                throw new Error("WebMidi must be enabled before adding event listeners.");
            if ("function" != typeof e)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (!(this._midiInterfaceEvents.indexOf(t) >= 0))
                throw new TypeError("The specified event type is not supported.");
            return this._userHandlers[t].push(e),
            this
        }
        ,
        r.prototype.hasListener = function(t, e) {
            if (!this.enabled)
                throw new Error("WebMidi must be enabled before checking event listeners.");
            if ("function" != typeof e)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (!(this._midiInterfaceEvents.indexOf(t) >= 0))
                throw new TypeError("The specified event type is not supported.");
            for (var i = 0; i < this._userHandlers[t].length; i++)
                if (this._userHandlers[t][i] === e)
                    return !0;
            return !1
        }
        ,
        r.prototype.removeListener = function(t, e) {
            if (!this.enabled)
                throw new Error("WebMidi must be enabled before removing event listeners.");
            if (void 0 !== e && "function" != typeof e)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (this._midiInterfaceEvents.indexOf(t) >= 0)
                if (e)
                    for (var i = 0; i < this._userHandlers[t].length; i++)
                        this._userHandlers[t][i] === e && this._userHandlers[t].splice(i, 1);
                else
                    this._userHandlers[t] = [];
            else {
                if (void 0 !== t)
                    throw new TypeError("The specified event type is not supported.");
                this._resetInterfaceUserHandlers()
            }
            return this
        }
        ,
        r.prototype.getInputById = function(t) {
            if (!this.enabled)
                throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.inputs.length; e++)
                if (this.inputs[e].id === t)
                    return this.inputs[e];
            return !1
        }
        ,
        r.prototype.getOutputById = function(t) {
            if (!this.enabled)
                throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.outputs.length; e++)
                if (this.outputs[e].id === t)
                    return this.outputs[e];
            return !1
        }
        ,
        r.prototype.getInputByName = function(t) {
            if (!this.enabled)
                throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.inputs.length; e++)
                if (~this.inputs[e].name.indexOf(t))
                    return this.inputs[e];
            return !1
        }
        ,
        r.prototype.getOctave = function(t) {
            return t >= 0 && 127 >= t ? Math.floor(parseInt(t) / 12 - 1) - 1 : void 0
        }
        ,
        r.prototype.getOutputByName = function(t) {
            if (!this.enabled)
                throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.outputs.length; e++)
                if (~this.outputs[e].name.indexOf(t))
                    return this.outputs[e];
            return !1
        }
        ,
        r.prototype.guessNoteNumber = function(t) {
            var e = !1;
            if (t && t.toFixed && t >= 0 && 127 >= t ? e = Math.round(t) : parseInt(t) >= 0 && parseInt(t) <= 127 ? e = parseInt(t) : ("string" == typeof t || t instanceof String) && (e = this.noteNameToNumber(t)),
            !1 === e)
                throw new Error("Invalid note number (" + t + ").");
            return e
        }
        ,
        r.prototype.noteNameToNumber = function(t) {
            "string" != typeof t && (t = "");
            var e = t.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);
            if (!e)
                throw new RangeError("Invalid note name.");
            var i = u._semitones[e[1].toUpperCase()]
              , n = parseInt(e[3])
              , o = 12 * (n + 2) + i;
            if (e[2].toLowerCase().indexOf("b") > -1 ? o -= e[2].length : e[2].toLowerCase().indexOf("#") > -1 && (o += e[2].length),
            0 > i || -2 > n || n > 8 || 0 > o || o > 127)
                throw new RangeError("Invalid note name or note outside valid range.");
            return o
        }
        ,
        r.prototype._updateInputsAndOutputs = function() {
            this._updateInputs(),
            this._updateOutputs()
        }
        ,
        r.prototype._updateInputs = function() {
            for (var t = 0; t < this._inputs.length; t++) {
                for (var e = !0, i = this.interface.inputs.values(), n = i.next(); n && !n.done; n = i.next())
                    if (this._inputs[t]._midiInput === n.value) {
                        e = !1;
                        break
                    }
                e && this._inputs.splice(t, 1)
            }
            this.interface.inputs.forEach(function(t) {
                for (var e = !0, i = 0; i < this._inputs.length; i++)
                    this._inputs[i]._midiInput === t && (e = !1);
                e && this._inputs.push(this._createInput(t))
            }
            .bind(this))
        }
        ,
        r.prototype._updateOutputs = function() {
            for (var t = 0; t < this._outputs.length; t++) {
                for (var e = !0, i = this.interface.outputs.values(), n = i.next(); n && !n.done; n = i.next())
                    if (this._outputs[t]._midiOutput === n.value) {
                        e = !1;
                        break
                    }
                e && this._outputs.splice(t, 1)
            }
            this.interface.outputs.forEach(function(t) {
                for (var e = !0, i = 0; i < this._outputs.length; i++)
                    this._outputs[i]._midiOutput === t && (e = !1);
                e && this._outputs.push(this._createOutput(t))
            }
            .bind(this))
        }
        ,
        r.prototype._createInput = function(t) {
            var e = new s(t);
            return e._midiInput.onmidimessage = e._onMidiMessage.bind(e),
            e
        }
        ,
        r.prototype._createOutput = function(t) {
            var e = new a(t);
            return e._midiOutput.onmidimessage = e._onMidiMessage.bind(e),
            e
        }
        ,
        r.prototype._onInterfaceStateChange = function(t) {
            if (this._stateChangeQueue.push(t),
            !this._processingStateChange) {
                for (this._processingStateChange = !0; this._stateChangeQueue.length > 0; )
                    this._processStateChange(this._stateChangeQueue.shift());
                this._processingStateChange = !1
            }
        }
        ,
        r.prototype._processStateChange = function(t) {
            if (this._updateInputsAndOutputs(),
            null !== t) {
                var e = {
                    timestamp: t.timeStamp,
                    type: t.port.state,
                    id: t.port.id,
                    manufacturer: t.port.manufacturer,
                    name: t.port.name
                };
                "connected" === t.port.state && ("output" === t.port.type ? e.output = this.getOutputById(t.port.id) : "input" === t.port.type && (e.input = this.getInputById(t.port.id))),
                this._userHandlers[t.port.state].forEach(function(t) {
                    t(e)
                })
            }
        }
        ,
        r.prototype._resetInterfaceUserHandlers = function() {
            for (var t = 0; t < this._midiInterfaceEvents.length; t++)
                this._userHandlers[this._midiInterfaceEvents[t]] = []
        }
        ,
        s.prototype.addListener = function(t, e, i) {
            var n = this;
            if (void 0 === e && (e = "all"),
            Array.isArray(e) || (e = [e]),
            e.forEach(function(t) {
                if ("all" !== t && !(t >= 1 && 16 >= t))
                    throw new RangeError("The 'channel' parameter is invalid.")
            }),
            "function" != typeof i)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (u.MIDI_SYSTEM_MESSAGES[t])
                this._userHandlers.system[t] || (this._userHandlers.system[t] = []),
                this._userHandlers.system[t].push(i);
            else {
                if (!u.MIDI_CHANNEL_MESSAGES[t])
                    throw new TypeError("The specified event type is not supported.");
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var o = 1; 16 >= o; o++)
                        e.push(o)
                }
                this._userHandlers.channel[t] || (this._userHandlers.channel[t] = []),
                e.forEach(function(e) {
                    n._userHandlers.channel[t][e] || (n._userHandlers.channel[t][e] = []),
                    n._userHandlers.channel[t][e].push(i)
                })
            }
            return this
        }
        ,
        s.prototype.on = s.prototype.addListener,
        s.prototype.hasListener = function(t, e, i) {
            var n = this;
            if ("function" != typeof i)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (void 0 === e && (e = "all"),
            e.constructor !== Array && (e = [e]),
            u.MIDI_SYSTEM_MESSAGES[t]) {
                for (var o = 0; o < this._userHandlers.system[t].length; o++)
                    if (this._userHandlers.system[t][o] === i)
                        return !0
            } else if (u.MIDI_CHANNEL_MESSAGES[t]) {
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var r = 1; 16 >= r; r++)
                        e.push(r)
                }
                return !!this._userHandlers.channel[t] && e.every(function(e) {
                    var o = n._userHandlers.channel[t][e];
                    return o && o.indexOf(i) > -1
                })
            }
            return !1
        }
        ,
        s.prototype.removeListener = function(t, e, i) {
            var n = this;
            if (void 0 !== i && "function" != typeof i)
                throw new TypeError("The 'listener' parameter must be a function.");
            if (void 0 === e && (e = "all"),
            e.constructor !== Array && (e = [e]),
            u.MIDI_SYSTEM_MESSAGES[t])
                if (void 0 === i)
                    this._userHandlers.system[t] = [];
                else
                    for (var o = 0; o < this._userHandlers.system[t].length; o++)
                        this._userHandlers.system[t][o] === i && this._userHandlers.system[t].splice(o, 1);
            else if (u.MIDI_CHANNEL_MESSAGES[t]) {
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var r = 1; 16 >= r; r++)
                        e.push(r)
                }
                if (!this._userHandlers.channel[t])
                    return this;
                e.forEach(function(e) {
                    var o = n._userHandlers.channel[t][e];
                    if (o)
                        if (void 0 === i)
                            n._userHandlers.channel[t][e] = [];
                        else
                            for (var r = 0; r < o.length; r++)
                                o[r] === i && o.splice(r, 1)
                })
            } else {
                if (void 0 !== t)
                    throw new TypeError("The specified event type is not supported.");
                this._initializeUserHandlers()
            }
            return this
        }
        ,
        s.prototype._initializeUserHandlers = function() {
            for (var t in u.MIDI_CHANNEL_MESSAGES)
                u.MIDI_CHANNEL_MESSAGES.hasOwnProperty(t) && (this._userHandlers.channel[t] = {});
            for (var e in u.MIDI_SYSTEM_MESSAGES)
                u.MIDI_SYSTEM_MESSAGES.hasOwnProperty(e) && (this._userHandlers.system[e] = [])
        }
        ,
        s.prototype._onMidiMessage = function(t) {
            t.data[0] < 240 ? this._parseChannelEvent(t) : t.data[0] <= 255 && this._parseSystemEvent(t)
        }
        ,
        s.prototype._parseChannelEvent = function(t) {
            var e, i, n = t.data[0] >> 4, o = 1 + (15 & t.data[0]);
            t.data.length > 1 && (e = t.data[1],
            i = t.data.length > 2 ? t.data[2] : void 0);
            var r = {
                target: this,
                data: t.data,
                timestamp: t.timeStamp,
                channel: o
            };
            n === u.MIDI_CHANNEL_MESSAGES.noteoff || n === u.MIDI_CHANNEL_MESSAGES.noteon && 0 === i ? (r.type = "noteoff",
            r.note = {
                number: e,
                name: u._notes[e % 12],
                octave: u.getOctave(e)
            },
            r.velocity = i / 127,
            r.rawVelocity = i) : n === u.MIDI_CHANNEL_MESSAGES.noteon ? (r.type = "noteon",
            r.note = {
                number: e,
                name: u._notes[e % 12],
                octave: u.getOctave(e)
            },
            r.velocity = i / 127,
            r.rawVelocity = i) : n === u.MIDI_CHANNEL_MESSAGES.keyaftertouch ? (r.type = "keyaftertouch",
            r.note = {
                number: e,
                name: u._notes[e % 12],
                octave: u.getOctave(e)
            },
            r.value = i / 127) : n === u.MIDI_CHANNEL_MESSAGES.controlchange && e >= 0 && 119 >= e ? (r.type = "controlchange",
            r.controller = {
                number: e,
                name: this.getCcNameByNumber(e)
            },
            r.value = i) : n === u.MIDI_CHANNEL_MESSAGES.channelmode && e >= 120 && 127 >= e ? (r.type = "channelmode",
            r.controller = {
                number: e,
                name: this.getChannelModeByNumber(e)
            },
            r.value = i) : n === u.MIDI_CHANNEL_MESSAGES.programchange ? (r.type = "programchange",
            r.value = e) : n === u.MIDI_CHANNEL_MESSAGES.channelaftertouch ? (r.type = "channelaftertouch",
            r.value = e / 127) : n === u.MIDI_CHANNEL_MESSAGES.pitchbend ? (r.type = "pitchbend",
            r.value = ((i << 7) + e - 8192) / 8192) : r.type = "unknownchannelmessage",
            this._userHandlers.channel[r.type] && this._userHandlers.channel[r.type][o] && this._userHandlers.channel[r.type][o].forEach(function(t) {
                t(r)
            })
        }
        ,
        s.prototype.getCcNameByNumber = function(t) {
            if (!((t = parseInt(t)) >= 0 && 119 >= t))
                throw new RangeError("The control change number must be between 0 and 119.");
            for (var e in u.MIDI_CONTROL_CHANGE_MESSAGES)
                if (t === u.MIDI_CONTROL_CHANGE_MESSAGES[e])
                    return e
        }
        ,
        s.prototype.getChannelModeByNumber = function(t) {
            if (!((t = parseInt(t)) >= 120 && status <= 127))
                throw new RangeError("The control change number must be between 120 and 127.");
            for (var e in u.MIDI_CHANNEL_MODE_MESSAGES)
                if (t === u.MIDI_CHANNEL_MODE_MESSAGES[e])
                    return e
        }
        ,
        s.prototype._parseSystemEvent = function(t) {
            var e = t.data[0]
              , i = {
                target: this,
                data: t.data,
                timestamp: t.timeStamp
            };
            e === u.MIDI_SYSTEM_MESSAGES.sysex ? i.type = "sysex" : e === u.MIDI_SYSTEM_MESSAGES.timecode ? i.type = "timecode" : e === u.MIDI_SYSTEM_MESSAGES.songposition ? i.type = "songposition" : e === u.MIDI_SYSTEM_MESSAGES.songselect ? (i.type = "songselect",
            i.song = t.data[1]) : e === u.MIDI_SYSTEM_MESSAGES.tuningrequest ? i.type = "tuningrequest" : e === u.MIDI_SYSTEM_MESSAGES.clock ? i.type = "clock" : e === u.MIDI_SYSTEM_MESSAGES.start ? i.type = "start" : e === u.MIDI_SYSTEM_MESSAGES.continue ? i.type = "continue" : e === u.MIDI_SYSTEM_MESSAGES.stop ? i.type = "stop" : e === u.MIDI_SYSTEM_MESSAGES.activesensing ? i.type = "activesensing" : e === u.MIDI_SYSTEM_MESSAGES.reset ? i.type = "reset" : i.type = "unknownsystemmessage",
            this._userHandlers.system[i.type] && this._userHandlers.system[i.type].forEach(function(t) {
                t(i)
            })
        }
        ,
        a.prototype.send = function(t, e, i) {
            if (!(t >= 128 && 255 >= t))
                throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");
            Array.isArray(e) || (e = parseInt(e) >= 0 && parseInt(e) <= 127 ? [parseInt(e)] : []);
            var n = [t];
            return e.forEach(function(t) {
                if (!(t >= 0 && 255 >= t))
                    throw new RangeError("The data bytes must be integers between 0 (0x00) and 255 (0xFF).");
                n.push(t)
            }),
            this._midiOutput.send(n, parseFloat(i) || 0),
            this
        }
        ,
        a.prototype.sendSysex = function(t, e, i) {
            if (!u.sysexEnabled)
                throw new Error("SysEx message support must first be activated.");
            return i = i || {},
            t = [].concat(t),
            e.forEach(function(t) {
                if (0 > t || t > 127)
                    throw new RangeError("The data bytes of a SysEx message must be integers between 0 (0x00) and 127 (0x7F).")
            }),
            e = t.concat(e, u.MIDI_SYSTEM_MESSAGES.sysexend),
            this.send(u.MIDI_SYSTEM_MESSAGES.sysex, e, this._parseTimeParameter(i.time)),
            this
        }
        ,
        a.prototype.sendTimecodeQuarterFrame = function(t, e) {
            return e = e || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.timecode, t, this._parseTimeParameter(e.time)),
            this
        }
        ,
        a.prototype.sendSongPosition = function(t, e) {
            t = parseInt(t) || 0,
            e = e || {};
            var i = t >> 7 & 127
              , n = 127 & t;
            return this.send(u.MIDI_SYSTEM_MESSAGES.songposition, [i, n], this._parseTimeParameter(e.time)),
            this
        }
        ,
        a.prototype.sendSongSelect = function(t, e) {
            if (t = parseInt(t),
            e = e || {},
            !(t >= 0 && 127 >= t))
                throw new RangeError("The song number must be between 0 and 127.");
            return this.send(u.MIDI_SYSTEM_MESSAGES.songselect, [t], this._parseTimeParameter(e.time)),
            this
        }
        ,
        a.prototype.sendTuningRequest = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.tuningrequest, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendClock = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.clock, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendStart = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.start, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendContinue = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.continue, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendStop = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.stop, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendActiveSensing = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.activesensing, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.sendReset = function(t) {
            return t = t || {},
            this.send(u.MIDI_SYSTEM_MESSAGES.reset, void 0, this._parseTimeParameter(t.time)),
            this
        }
        ,
        a.prototype.stopNote = function(t, e, i) {
            if ("all" === t)
                return this.sendChannelMode("allnotesoff", 0, e, i);
            var n = 64;
            return i = i || {},
            i.velocity = parseFloat(i.velocity),
            i.rawVelocity ? !isNaN(i.velocity) && i.velocity >= 0 && i.velocity <= 127 && (n = i.velocity) : !isNaN(i.velocity) && i.velocity >= 0 && i.velocity <= 1 && (n = 127 * i.velocity),
            this._convertNoteToArray(t).forEach(function(t) {
                this._convertChannelToArray(e).forEach(function(e) {
                    this.send((u.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (e - 1), [t, Math.round(n)], this._parseTimeParameter(i.time))
                }
                .bind(this))
            }
            .bind(this)),
            this
        }
        ,
        a.prototype.playNote = function(t, e, i) {
            var n = 64;
            if (i = i || {},
            i.velocity = parseFloat(i.velocity),
            i.rawVelocity ? !isNaN(i.velocity) && i.velocity >= 0 && i.velocity <= 127 && (n = i.velocity) : !isNaN(i.velocity) && i.velocity >= 0 && i.velocity <= 1 && (n = 127 * i.velocity),
            i.time = this._parseTimeParameter(i.time),
            this._convertNoteToArray(t).forEach(function(t) {
                this._convertChannelToArray(e).forEach(function(e) {
                    this.send((u.MIDI_CHANNEL_MESSAGES.noteon << 4) + (e - 1), [t, Math.round(n)], i.time)
                }
                .bind(this))
            }
            .bind(this)),
            i.duration = parseFloat(i.duration),
            i.duration) {
                i.duration <= 0 && (i.duration = 0);
                var o = 64;
                i.release = parseFloat(i.release),
                i.rawVelocity ? !isNaN(i.release) && i.release >= 0 && i.release <= 127 && (o = i.release) : !isNaN(i.release) && i.release >= 0 && i.release <= 1 && (o = 127 * i.release),
                this._convertNoteToArray(t).forEach(function(t) {
                    this._convertChannelToArray(e).forEach(function(e) {
                        this.send((u.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (e - 1), [t, Math.round(o)], (i.time || u.time) + i.duration)
                    }
                    .bind(this))
                }
                .bind(this))
            }
            return this
        }
        ,
        a.prototype.sendKeyAftertouch = function(t, e, i, n) {
            var o = this;
            if (n = n || {},
            1 > e || e > 16)
                throw new RangeError("The channel must be between 1 and 16.");
            i = parseFloat(i),
            (isNaN(i) || 0 > i || i > 1) && (i = .5);
            var r = Math.round(127 * i);
            return this._convertNoteToArray(t).forEach(function(t) {
                o._convertChannelToArray(e).forEach(function(e) {
                    o.send((u.MIDI_CHANNEL_MESSAGES.keyaftertouch << 4) + (e - 1), [t, r], o._parseTimeParameter(n.time))
                })
            }),
            this
        }
        ,
        a.prototype.sendControlChange = function(t, e, i, n) {
            if (n = n || {},
            "string" == typeof t) {
                if (!(t = u.MIDI_CONTROL_CHANGE_MESSAGES[t]))
                    throw new TypeError("Invalid controller name.")
            } else if (!((t = parseInt(t)) >= 0 && 119 >= t))
                throw new RangeError("Controller numbers must be between 0 and 119.");
            if (!((e = parseInt(e) || 0) >= 0 && 127 >= e))
                throw new RangeError("Controller value must be between 0 and 127.");
            return this._convertChannelToArray(i).forEach(function(i) {
                this.send((u.MIDI_CHANNEL_MESSAGES.controlchange << 4) + (i - 1), [t, e], this._parseTimeParameter(n.time))
            }
            .bind(this)),
            this
        }
        ,
        a.prototype._selectRegisteredParameter = function(t, e, i) {
            var n = this;
            if (t[0] = parseInt(t[0]),
            !(t[0] >= 0 && t[0] <= 127))
                throw new RangeError("The control65 value must be between 0 and 127");
            if (t[1] = parseInt(t[1]),
            !(t[1] >= 0 && t[1] <= 127))
                throw new RangeError("The control64 value must be between 0 and 127");
            return this._convertChannelToArray(e).forEach(function(o) {
                n.sendControlChange(101, t[0], e, {
                    time: i
                }),
                n.sendControlChange(100, t[1], e, {
                    time: i
                })
            }),
            this
        }
        ,
        a.prototype._selectNonRegisteredParameter = function(t, e, i) {
            var n = this;
            if (t[0] = parseInt(t[0]),
            !(t[0] >= 0 && t[0] <= 127))
                throw new RangeError("The control63 value must be between 0 and 127");
            if (t[1] = parseInt(t[1]),
            !(t[1] >= 0 && t[1] <= 127))
                throw new RangeError("The control62 value must be between 0 and 127");
            return this._convertChannelToArray(e).forEach(function(o) {
                n.sendControlChange(99, t[0], e, {
                    time: i
                }),
                n.sendControlChange(98, t[1], e, {
                    time: i
                })
            }),
            this
        }
        ,
        a.prototype._setCurrentRegisteredParameter = function(t, e, i) {
            var n = this;
            if (t = [].concat(t),
            t[0] = parseInt(t[0]),
            !(t[0] >= 0 && t[0] <= 127))
                throw new RangeError("The msb value must be between 0 and 127");
            return this._convertChannelToArray(e).forEach(function(o) {
                n.sendControlChange(6, t[0], e, {
                    time: i
                })
            }),
            t[1] = parseInt(t[1]),
            t[1] >= 0 && t[1] <= 127 && this._convertChannelToArray(e).forEach(function(o) {
                n.sendControlChange(38, t[1], e, {
                    time: i
                })
            }),
            this
        }
        ,
        a.prototype._deselectRegisteredParameter = function(t, e) {
            var i = this;
            return this._convertChannelToArray(t).forEach(function(n) {
                i.sendControlChange(101, 127, t, {
                    time: e
                }),
                i.sendControlChange(100, 127, t, {
                    time: e
                })
            }),
            this
        }
        ,
        a.prototype.setRegisteredParameter = function(t, e, i, n) {
            var o = this;
            if (n = n || {},
            !Array.isArray(t)) {
                if (!u.MIDI_REGISTERED_PARAMETER[t])
                    throw new Error("The specified parameter is not available.");
                t = u.MIDI_REGISTERED_PARAMETER[t]
            }
            return this._convertChannelToArray(i).forEach(function(r) {
                o._selectRegisteredParameter(t, i, n.time),
                o._setCurrentRegisteredParameter(e, i, n.time),
                o._deselectRegisteredParameter(i, n.time)
            }),
            this
        }
        ,
        a.prototype.setNonRegisteredParameter = function(t, e, i, n) {
            var o = this;
            if (n = n || {},
            !(t[0] >= 0 && t[0] <= 127 && t[1] >= 0 && t[1] <= 127))
                throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");
            return e = [].concat(e),
            this._convertChannelToArray(i).forEach(function(r) {
                o._selectNonRegisteredParameter(t, i, n.time),
                o._setCurrentRegisteredParameter(e, i, n.time),
                o._deselectRegisteredParameter(i, n.time)
            }),
            this
        }
        ,
        a.prototype.incrementRegisteredParameter = function(t, e, i) {
            var n = this;
            if (i = i || {},
            !Array.isArray(t)) {
                if (!u.MIDI_REGISTERED_PARAMETER[t])
                    throw new Error("The specified parameter is not available.");
                t = u.MIDI_REGISTERED_PARAMETER[t]
            }
            return this._convertChannelToArray(e).forEach(function(o) {
                n._selectRegisteredParameter(t, e, i.time),
                n.sendControlChange(96, 0, e, {
                    time: i.time
                }),
                n._deselectRegisteredParameter(e, i.time)
            }),
            this
        }
        ,
        a.prototype.decrementRegisteredParameter = function(t, e, i) {
            if (i = i || {},
            !Array.isArray(t)) {
                if (!u.MIDI_REGISTERED_PARAMETER[t])
                    throw new TypeError("The specified parameter is not available.");
                t = u.MIDI_REGISTERED_PARAMETER[t]
            }
            return this._convertChannelToArray(e).forEach(function(n) {
                this._selectRegisteredParameter(t, e, i.time),
                this.sendControlChange(97, 0, e, {
                    time: i.time
                }),
                this._deselectRegisteredParameter(e, i.time)
            }
            .bind(this)),
            this
        }
        ,
        a.prototype.setPitchBendRange = function(t, e, i, n) {
            var o = this;
            if (n = n || {},
            !((t = parseInt(t) || 0) >= 0 && 127 >= t))
                throw new RangeError("The semitones value must be between 0 and 127");
            if (!((e = parseInt(e) || 0) >= 0 && 127 >= e))
                throw new RangeError("The cents value must be between 0 and 127");
            return this._convertChannelToArray(i).forEach(function(r) {
                o.setRegisteredParameter("pitchbendrange", [t, e], i, {
                    time: n.time
                })
            }),
            this
        }
        ,
        a.prototype.setModulationRange = function(t, e, i, n) {
            var o = this;
            if (n = n || {},
            !((t = parseInt(t) || 0) >= 0 && 127 >= t))
                throw new RangeError("The semitones value must be between 0 and 127");
            if (!((e = parseInt(e) || 0) >= 0 && 127 >= e))
                throw new RangeError("The cents value must be between 0 and 127");
            return this._convertChannelToArray(i).forEach(function(r) {
                o.setRegisteredParameter("modulationrange", [t, e], i, {
                    time: n.time
                })
            }),
            this
        }
        ,
        a.prototype.setMasterTuning = function(t, e, i) {
            var n = this;
            if (i = i || {},
            -65 >= (t = parseFloat(t) || 0) || t >= 64)
                throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");
            var o = parseInt(t) + 64
              , r = t - parseInt(t);
            r = Math.round((r + 1) / 2 * 16383);
            var s = r >> 7 & 127
              , a = 127 & r;
            return this._convertChannelToArray(e).forEach(function(t) {
                n.setRegisteredParameter("channelcoarsetuning", o, e, {
                    time: i.time
                }),
                n.setRegisteredParameter("channelfinetuning", [s, a], e, {
                    time: i.time
                })
            }),
            this
        }
        ,
        a.prototype.setTuningProgram = function(t, e, i) {
            var n = this;
            if (i = i || {},
            !((t = parseInt(t) || 0) >= 0 && 127 >= t))
                throw new RangeError("The program value must be between 0 and 127");
            return this._convertChannelToArray(e).forEach(function(o) {
                n.setRegisteredParameter("tuningprogram", t, e, {
                    time: i.time
                })
            }),
            this
        }
        ,
        a.prototype.setTuningBank = function(t, e, i) {
            var n = this;
            if (i = i || {},
            !((t = parseInt(t) || 0) >= 0 && 127 >= t))
                throw new RangeError("The bank value must be between 0 and 127");
            return this._convertChannelToArray(e).forEach(function(o) {
                n.setRegisteredParameter("tuningbank", t, e, {
                    time: i.time
                })
            }),
            this
        }
        ,
        a.prototype.sendChannelMode = function(t, e, i, n) {
            if (n = n || {},
            "string" == typeof t) {
                if (!(t = u.MIDI_CHANNEL_MODE_MESSAGES[t]))
                    throw new TypeError("Invalid channel mode message name.")
            } else if (!((t = parseInt(t)) >= 120 && 127 >= t))
                throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");
            if (0 > (e = parseInt(e) || 0) || e > 127)
                throw new RangeError("Value must be an integer between 0 and 127.");
            return this._convertChannelToArray(i).forEach(function(i) {
                this.send((u.MIDI_CHANNEL_MESSAGES.channelmode << 4) + (i - 1), [t, e], this._parseTimeParameter(n.time))
            }
            .bind(this)),
            this
        }
        ,
        a.prototype.sendProgramChange = function(t, e, i) {
            var n = this;
            if (i = i || {},
            t = parseInt(t),
            isNaN(t) || 0 > t || t > 127)
                throw new RangeError("Program numbers must be between 0 and 127.");
            return this._convertChannelToArray(e).forEach(function(e) {
                n.send((u.MIDI_CHANNEL_MESSAGES.programchange << 4) + (e - 1), [t], n._parseTimeParameter(i.time))
            }),
            this
        }
        ,
        a.prototype.sendChannelAftertouch = function(t, e, i) {
            var n = this;
            i = i || {},
            t = parseFloat(t),
            (isNaN(t) || 0 > t || t > 1) && (t = .5);
            var o = Math.round(127 * t);
            return this._convertChannelToArray(e).forEach(function(t) {
                n.send((u.MIDI_CHANNEL_MESSAGES.channelaftertouch << 4) + (t - 1), [o], n._parseTimeParameter(i.time))
            }),
            this
        }
        ,
        a.prototype.sendPitchBend = function(t, e, i) {
            var n = this;
            if (i = i || {},
            t = parseFloat(t),
            isNaN(t) || -1 > t || t > 1)
                throw new RangeError("Pitch bend value must be between -1 and 1.");
            var o = Math.round((t + 1) / 2 * 16383)
              , r = o >> 7 & 127
              , s = 127 & o;
            return this._convertChannelToArray(e).forEach(function(t) {
                n.send((u.MIDI_CHANNEL_MESSAGES.pitchbend << 4) + (t - 1), [s, r], n._parseTimeParameter(i.time))
            }),
            this
        }
        ,
        a.prototype._parseTimeParameter = function(t) {
            var e, i;
            return "string" == typeof t && "+" === t.substring(0, 1) ? (e = parseFloat(t)) && e > 0 && (i = u.time + e) : (e = parseFloat(t)) > u.time && (i = e),
            i
        }
        ,
        a.prototype._convertNoteToArray = function(t) {
            var e = [];
            return Array.isArray(t) || (t = [t]),
            t.forEach(function(t) {
                e.push(u.guessNoteNumber(t))
            }),
            e
        }
        ,
        a.prototype._convertChannelToArray = function(t) {
            if (("all" === t || void 0 === t) && (t = ["all"]),
            Array.isArray(t) || (t = [t]),
            t.indexOf("all") > -1) {
                t = [];
                for (var e = 1; 16 >= e; e++)
                    t.push(e)
            }
            return t.forEach(function(t) {
                if (!(t >= 1 && 16 >= t))
                    throw new RangeError("MIDI channels must be between 1 and 16.")
            }),
            t
        }
        ,
        a.prototype._onMidiMessage = function(t) {}
        ,
        n = [],
        void 0 !== (o = function() {
            return u
        }
        .apply(e, n)) && (t.exports = o)
    }()
}
, function(t, e, i) {
    (function(i) {
        var n, o, r = function() {
            this._tweens = {},
            this._tweensAddedDuringUpdate = {}
        };
        r.prototype = {
            getAll: function() {
                return Object.keys(this._tweens).map(function(t) {
                    return this._tweens[t]
                }
                .bind(this))
            },
            removeAll: function() {
                this._tweens = {}
            },
            add: function(t) {
                this._tweens[t.getId()] = t,
                this._tweensAddedDuringUpdate[t.getId()] = t
            },
            remove: function(t) {
                delete this._tweens[t.getId()],
                delete this._tweensAddedDuringUpdate[t.getId()]
            },
            update: function(t, e) {
                var i = Object.keys(this._tweens);
                if (0 === i.length)
                    return !1;
                for (t = void 0 !== t ? t : s.now(); i.length > 0; ) {
                    this._tweensAddedDuringUpdate = {};
                    for (var n = 0; n < i.length; n++)
                        !1 === this._tweens[i[n]].update(t) && (this._tweens[i[n]]._isPlaying = !1,
                        e || delete this._tweens[i[n]]);
                    i = Object.keys(this._tweensAddedDuringUpdate)
                }
                return !0
            }
        };
        var s = new r;
        s.Group = r,
        s._nextId = 0,
        s.nextId = function() {
            return s._nextId++
        }
        ,
        "undefined" == typeof window && void 0 !== i ? s.now = function() {
            var t = i.hrtime();
            return 1e3 * t[0] + t[1] / 1e6
        }
        : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? s.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? s.now = Date.now : s.now = function() {
            return (new Date).getTime()
        }
        ,
        s.Tween = function(t, e) {
            this._object = t,
            this._valuesStart = {},
            this._valuesEnd = {},
            this._valuesStartRepeat = {},
            this._duration = 1e3,
            this._repeat = 0,
            this._repeatDelayTime = void 0,
            this._yoyo = !1,
            this._isPlaying = !1,
            this._reversed = !1,
            this._delayTime = 0,
            this._startTime = null,
            this._easingFunction = s.Easing.Linear.None,
            this._interpolationFunction = s.Interpolation.Linear,
            this._chainedTweens = [],
            this._onStartCallback = null,
            this._onStartCallbackFired = !1,
            this._onUpdateCallback = null,
            this._onCompleteCallback = null,
            this._onStopCallback = null,
            this._group = e || s,
            this._id = s.nextId()
        }
        ,
        s.Tween.prototype = {
            getId: function() {
                return this._id
            },
            isPlaying: function() {
                return this._isPlaying
            },
            to: function(t, e) {
                return this._valuesEnd = t,
                void 0 !== e && (this._duration = e),
                this
            },
            start: function(t) {
                this._group.add(this),
                this._isPlaying = !0,
                this._onStartCallbackFired = !1,
                this._startTime = void 0 !== t ? "string" == typeof t ? s.now() + parseFloat(t) : t : s.now(),
                this._startTime += this._delayTime;
                for (var e in this._valuesEnd) {
                    if (this._valuesEnd[e]instanceof Array) {
                        if (0 === this._valuesEnd[e].length)
                            continue;
                        this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e])
                    }
                    void 0 !== this._object[e] && (this._valuesStart[e] = this._object[e],
                    this._valuesStart[e]instanceof Array == !1 && (this._valuesStart[e] *= 1),
                    this._valuesStartRepeat[e] = this._valuesStart[e] || 0)
                }
                return this
            },
            stop: function() {
                return this._isPlaying ? (this._group.remove(this),
                this._isPlaying = !1,
                null !== this._onStopCallback && this._onStopCallback(this._object),
                this.stopChainedTweens(),
                this) : this
            },
            end: function() {
                return this.update(this._startTime + this._duration),
                this
            },
            stopChainedTweens: function() {
                for (var t = 0, e = this._chainedTweens.length; t < e; t++)
                    this._chainedTweens[t].stop()
            },
            delay: function(t) {
                return this._delayTime = t,
                this
            },
            repeat: function(t) {
                return this._repeat = t,
                this
            },
            repeatDelay: function(t) {
                return this._repeatDelayTime = t,
                this
            },
            yoyo: function(t) {
                return this._yoyo = t,
                this
            },
            easing: function(t) {
                return this._easingFunction = t,
                this
            },
            interpolation: function(t) {
                return this._interpolationFunction = t,
                this
            },
            chain: function() {
                return this._chainedTweens = arguments,
                this
            },
            onStart: function(t) {
                return this._onStartCallback = t,
                this
            },
            onUpdate: function(t) {
                return this._onUpdateCallback = t,
                this
            },
            onComplete: function(t) {
                return this._onCompleteCallback = t,
                this
            },
            onStop: function(t) {
                return this._onStopCallback = t,
                this
            },
            update: function(t) {
                var e, i, n;
                if (t < this._startTime)
                    return !0;
                !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object),
                this._onStartCallbackFired = !0),
                i = (t - this._startTime) / this._duration,
                i = i > 1 ? 1 : i,
                n = this._easingFunction(i);
                for (e in this._valuesEnd)
                    if (void 0 !== this._valuesStart[e]) {
                        var o = this._valuesStart[e] || 0
                          , r = this._valuesEnd[e];
                        r instanceof Array ? this._object[e] = this._interpolationFunction(r, n) : ("string" == typeof r && (r = "+" === r.charAt(0) || "-" === r.charAt(0) ? o + parseFloat(r) : parseFloat(r)),
                        "number" == typeof r && (this._object[e] = o + (r - o) * n))
                    }
                if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object),
                1 === i) {
                    if (this._repeat > 0) {
                        isFinite(this._repeat) && this._repeat--;
                        for (e in this._valuesStartRepeat) {
                            if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e])),
                            this._yoyo) {
                                var s = this._valuesStartRepeat[e];
                                this._valuesStartRepeat[e] = this._valuesEnd[e],
                                this._valuesEnd[e] = s
                            }
                            this._valuesStart[e] = this._valuesStartRepeat[e]
                        }
                        return this._yoyo && (this._reversed = !this._reversed),
                        void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime,
                        !0
                    }
                    null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
                    for (var a = 0, u = this._chainedTweens.length; a < u; a++)
                        this._chainedTweens[a].start(this._startTime + this._duration);
                    return !1
                }
                return !0
            }
        },
        s.Easing = {
            Linear: {
                None: function(t) {
                    return t
                }
            },
            Quadratic: {
                In: function(t) {
                    return t * t
                },
                Out: function(t) {
                    return t * (2 - t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            },
            Cubic: {
                In: function(t) {
                    return t * t * t
                },
                Out: function(t) {
                    return --t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            },
            Quartic: {
                In: function(t) {
                    return t * t * t * t
                },
                Out: function(t) {
                    return 1 - --t * t * t * t
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            },
            Quintic: {
                In: function(t) {
                    return t * t * t * t * t
                },
                Out: function(t) {
                    return --t * t * t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            },
            Sinusoidal: {
                In: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Out: function(t) {
                    return Math.sin(t * Math.PI / 2)
                },
                InOut: function(t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            },
            Exponential: {
                In: function(t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                Out: function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                InOut: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                }
            },
            Circular: {
                In: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Out: function(t) {
                    return Math.sqrt(1 - --t * t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            },
            Elastic: {
                In: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
                },
                Out: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
                },
                InOut: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2,
                    t < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1)
                }
            },
            Back: {
                In: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                Out: function(t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                InOut: function(t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            },
            Bounce: {
                In: function(t) {
                    return 1 - s.Easing.Bounce.Out(1 - t)
                },
                Out: function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                InOut: function(t) {
                    return t < .5 ? .5 * s.Easing.Bounce.In(2 * t) : .5 * s.Easing.Bounce.Out(2 * t - 1) + .5
                }
            }
        },
        s.Interpolation = {
            Linear: function(t, e) {
                var i = t.length - 1
                  , n = i * e
                  , o = Math.floor(n)
                  , r = s.Interpolation.Utils.Linear;
                return e < 0 ? r(t[0], t[1], n) : e > 1 ? r(t[i], t[i - 1], i - n) : r(t[o], t[o + 1 > i ? i : o + 1], n - o)
            },
            Bezier: function(t, e) {
                for (var i = 0, n = t.length - 1, o = Math.pow, r = s.Interpolation.Utils.Bernstein, a = 0; a <= n; a++)
                    i += o(1 - e, n - a) * o(e, a) * t[a] * r(n, a);
                return i
            },
            CatmullRom: function(t, e) {
                var i = t.length - 1
                  , n = i * e
                  , o = Math.floor(n)
                  , r = s.Interpolation.Utils.CatmullRom;
                return t[0] === t[i] ? (e < 0 && (o = Math.floor(n = i * (1 + e))),
                r(t[(o - 1 + i) % i], t[o], t[(o + 1) % i], t[(o + 2) % i], n - o)) : e < 0 ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (r(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : r(t[o ? o - 1 : 0], t[o], t[i < o + 1 ? i : o + 1], t[i < o + 2 ? i : o + 2], n - o)
            },
            Utils: {
                Linear: function(t, e, i) {
                    return (e - t) * i + t
                },
                Bernstein: function(t, e) {
                    var i = s.Interpolation.Utils.Factorial;
                    return i(t) / i(e) / i(t - e)
                },
                Factorial: function() {
                    var t = [1];
                    return function(e) {
                        var i = 1;
                        if (t[e])
                            return t[e];
                        for (var n = e; n > 1; n--)
                            i *= n;
                        return t[e] = i,
                        i
                    }
                }(),
                CatmullRom: function(t, e, i, n, o) {
                    var r = .5 * (i - t)
                      , s = .5 * (n - e)
                      , a = o * o;
                    return (2 * e - 2 * i + r + s) * (o * a) + (-3 * e + 3 * i - 2 * r - s) * a + r * o + e
                }
            }
        },
        function(i) {
            n = [],
            void 0 !== (o = function() {
                return s
            }
            .apply(e, n)) && (t.exports = o)
        }()
    }
    ).call(e, i(61))
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Canvas = void 0;
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }();
    i(69);
    var r = i(0);
    e.Canvas = function() {
        function t(e) {
            var i = this;
            n(this, t),
            this.canvasElement = document.createElement("canvas"),
            this.context = this.canvasElement.getContext("2d"),
            e && e.appendChild(this.canvasElement),
            window.addEventListener("resize", function() {
                return i.resize()
            }),
            window.addEventListener("orientationchange", function() {
                return i.resize()
            }),
            this.resize()
        }
        return o(t, [{
            key: "resize",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.SCREEN.WIDTH;
                clearTimeout(this.timeout),
                this.timeout = setTimeout(function() {
                    var i = .15 * e;
                    if (t.clock) {
                        var n = Math.min(.9 * r.SCREEN.WIDTH, .9 * r.SCREEN.HEIGHT, 700);
                        e = n,
                        i = n
                    }
                    t.context.canvas.width = 2 * e,
                    t.context.canvas.height = 2 * i,
                    t.width = t.context.canvas.width,
                    t.height = t.context.canvas.height,
                    t.canvasElement.style.width = e + "px",
                    t.canvasElement.style.height = i + "px"
                }, 100)
            }
        }, {
            key: "clear",
            value: function() {
                this.context.clearRect(0, 0, this.width, this.height),
                this.context.globalCompositeOperation = "lighter"
            }
        }, {
            key: "clock",
            set: function(t) {
                t ? this.canvasElement.classList.add("clock") : this.canvasElement.classList.remove("clock"),
                this.resize()
            },
            get: function() {
                return this.canvasElement.classList.contains("clock")
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    /*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
    !function(e, i) {
        t.exports = i()
    }(0, function() {
        var t, e = [], i = document, n = i.documentElement.doScroll, o = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
        return o || i.addEventListener("DOMContentLoaded", t = function() {
            for (i.removeEventListener("DOMContentLoaded", t),
            o = 1; t = e.shift(); )
                t()
        }
        ),
        function(t) {
            o ? setTimeout(t, 0) : e.push(t)
        }
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return new Promise(function(e) {
            setTimeout(function() {
                return e()
            }, t)
        }
        )
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.timeoutPromise = n
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.LightDot = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(6);
    e.LightDot = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return r.attackTime = 25,
            r.opacityAttackTime = 25,
            r.decayTime = 300,
            r.releaseTime = 500,
            r.opacityReleaseTime = 500,
            r.attackMax = 1.1,
            r.sustainLevel = 0,
            r.opacitySustainLevel = 0,
            r
        }
        return r(e, t),
        s(e, [{
            key: "draw",
            value: function(t, i, n) {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
                var o = .05 * i
                  , r = o;
                this.phase < 2 && (r = Math.max(this.envelope, 1) * o),
                t.beginPath(),
                this.color.setAlpha(this.opacity),
                t.fillStyle = this.color.toRgbString(),
                t.arc(this.x * i, n / 2, this.velocity * r, 0, this.TWO_PI, !1),
                t.fill()
            }
        }]),
        e
    }(u.Dot)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Midi = void 0;
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , u = i(4)
      , l = n(u)
      , c = i(12)
      , h = n(c);
    e.Midi = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all";
            o(this, e);
            var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return i._isEnabled = !1,
            window.WebMidi = h.default,
            i.connected = [],
            i.channel = t,
            i.currentNotes = new Map,
            h.default.enable(function(t) {
                t || (i._isEnabled = !0,
                setTimeout(function() {
                    h.default.inputs && h.default.inputs.forEach(function(t) {
                        return i._bindInput(t)
                    }),
                    h.default.addListener("connected", function(t) {
                        t.input && i._bindInput(t)
                    }),
                    h.default.addListener("disconnected", function(t) {
                        var e = i.getDeviceById(t.id);
                        e && (i.emit("disconnect", e),
                        e.removeListener("noteon"),
                        e.removeListener("noteoff"),
                        i.removeDevice(t.id))
                    })
                }, 100))
            }),
            i
        }
        return s(e, t),
        a(e, [{
            key: "getDeviceById",
            value: function(t) {
                var e = this.connected.findIndex(function(e) {
                    return e.id === t
                });
                return this.connected[e]
            }
        }, {
            key: "removeDevice",
            value: function(t) {
                var e = this.connected.findIndex(function(e) {
                    return e.id === t
                });
                this.connected.splice(e, 1)
            }
        }, {
            key: "time",
            value: function() {
                return this._isEnabled ? h.default.time : performance.now()
            }
        }, {
            key: "_bindInput",
            value: function(t) {
                var e = this;
                if (this._isEnabled && !this.getDeviceById(t.id)) {
                    var i = h.default.getInputById(t.id);
                    this.connected.push(i),
                    this.emit("connect", i),
                    i.addListener("noteon", this.channel, function(t) {
                        (e.currentNotes.has(t.note.number) && t.timestamp - e.currentNotes.get(t.note.number) > 5 || !e.currentNotes.has(t.note.number)) && (e.currentNotes.set(t.note.number, t.timestamp),
                        e.emit("keyDown", t.note.number, t.velocity, t.timestamp))
                    }),
                    i.addListener("noteoff", this.channel, function(t) {
                        e.emit("keyUp", t.note.number, t.velocity, t.timestamp)
                    }),
                    i.addListener("controlchange", this.channel, function(t) {
                        "holdpedal" === t.controller.name && e.emit("pedal", t.value, t.timestamp)
                    })
                }
            }
        }]),
        e
    }(l.default.EventEmitter)
}
, function(t, e) {
    t.exports = '<div class=spinner> <svg class=circular viewBox="25 25 50 50"> <circle class=path cx=50 cy=50 r=20 fill=none stroke-width=2 stroke-miterlimit=10 /> </svg> </div> '
}
, function(t, e, i) {
    e.parseMidi = i(58),
    e.writeMidi = i(59)
}
, function(t, e) {
    !function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function i(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function n(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return m.iterable && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function o(t) {
            this.map = {},
            t instanceof o ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function r(t) {
            if (t.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }
        function s(t) {
            return new Promise(function(e, i) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    i(t.error)
                }
            }
            )
        }
        function a(t) {
            var e = new FileReader
              , i = s(e);
            return e.readAsArrayBuffer(t),
            i
        }
        function u(t) {
            var e = new FileReader
              , i = s(e);
            return e.readAsText(t),
            i
        }
        function l(t) {
            for (var e = new Uint8Array(t), i = new Array(e.length), n = 0; n < e.length; n++)
                i[n] = String.fromCharCode(e[n]);
            return i.join("")
        }
        function c(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function h() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                t)
                    if ("string" == typeof t)
                        this._bodyText = t;
                    else if (m.blob && Blob.prototype.isPrototypeOf(t))
                        this._bodyBlob = t;
                    else if (m.formData && FormData.prototype.isPrototypeOf(t))
                        this._bodyFormData = t;
                    else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                        this._bodyText = t.toString();
                    else if (m.arrayBuffer && m.blob && g(t))
                        this._bodyArrayBuffer = c(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !b(t))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = c(t)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            m.blob && (this.blob = function() {
                var t = r(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? r(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }
            ),
            this.text = function() {
                var t = r(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return u(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(l(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            m.formData && (this.formData = function() {
                return this.text().then(d)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function p(t) {
            var e = t.toUpperCase();
            return w.indexOf(e) > -1 ? e : t
        }
        function f(t, e) {
            e = e || {};
            var i = e.body;
            if (t instanceof f) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new o(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                i || null == t._bodyInit || (i = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new o(e.headers)),
            this.method = p(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && i)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }
        function d(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var i = t.split("=")
                      , n = i.shift().replace(/\+/g, " ")
                      , o = i.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }),
            e
        }
        function y(t) {
            var e = new o;
            return t.split(/\r?\n/).forEach(function(t) {
                var i = t.split(":")
                  , n = i.shift().trim();
                if (n) {
                    var o = i.join(":").trim();
                    e.append(n, o)
                }
            }),
            e
        }
        function _(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = "status"in e ? e.status : 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in e ? e.statusText : "OK",
            this.headers = new o(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            var m = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in Symbol,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            if (m.arrayBuffer)
                var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , g = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                }
                  , b = ArrayBuffer.isView || function(t) {
                    return t && v.indexOf(Object.prototype.toString.call(t)) > -1
                }
                ;
            o.prototype.append = function(t, n) {
                t = e(t),
                n = i(n);
                var o = this.map[t];
                this.map[t] = o ? o + "," + n : n
            }
            ,
            o.prototype.delete = function(t) {
                delete this.map[e(t)]
            }
            ,
            o.prototype.get = function(t) {
                return t = e(t),
                this.has(t) ? this.map[t] : null
            }
            ,
            o.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }
            ,
            o.prototype.set = function(t, n) {
                this.map[e(t)] = i(n)
            }
            ,
            o.prototype.forEach = function(t, e) {
                for (var i in this.map)
                    this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
            }
            ,
            o.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, i) {
                    t.push(i)
                }),
                n(t)
            }
            ,
            o.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                n(t)
            }
            ,
            o.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, i) {
                    t.push([i, e])
                }),
                n(t)
            }
            ,
            m.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            f.prototype.clone = function() {
                return new f(this,{
                    body: this._bodyInit
                })
            }
            ,
            h.call(f.prototype),
            h.call(_.prototype),
            _.prototype.clone = function() {
                return new _(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }
            ,
            _.error = function() {
                var t = new _(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var T = [301, 302, 303, 307, 308];
            _.redirect = function(t, e) {
                if (-1 === T.indexOf(e))
                    throw new RangeError("Invalid status code");
                return new _(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = o,
            t.Request = f,
            t.Response = _,
            t.fetch = function(t, e) {
                return new Promise(function(i, n) {
                    var o = new f(t,e)
                      , r = new XMLHttpRequest;
                    r.onload = function() {
                        var t = {
                            status: r.status,
                            statusText: r.statusText,
                            headers: y(r.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL"in r ? r.responseURL : t.headers.get("X-Request-URL");
                        var e = "response"in r ? r.response : r.responseText;
                        i(new _(e,t))
                    }
                    ,
                    r.onerror = function() {
                        n(new TypeError("Network request failed"))
                    }
                    ,
                    r.ontimeout = function() {
                        n(new TypeError("Network request failed"))
                    }
                    ,
                    r.open(o.method, o.url, !0),
                    "include" === o.credentials && (r.withCredentials = !0),
                    "responseType"in r && m.blob && (r.responseType = "blob"),
                    o.headers.forEach(function(t, e) {
                        r.setRequestHeader(e, t)
                    }),
                    r.send(void 0 === o._bodyInit ? null : o._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Dots = void 0;
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(17)
      , s = i(31)
      , a = i(29)
      , u = i(32)
      , l = i(30)
      , c = i(0)
      , h = i(7)
      , p = i(14);
    e.Dots = function() {
        function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new p.Canvas
              , o = arguments[1];
            n(this, t),
            this.heldNotes = new Map,
            this.canvas = i,
            this.keyboard = new h.Keyboard,
            this.keyboard.on("keyDown", function(t, i) {
                e.keyDown(t, i)
            }),
            this.keyboard.on("keyUp", function(t, i) {
                e.keyUp(t, i)
            }),
            this._DotConstructor = null,
            o && (this.mode = o)
        }
        return o(t, [{
            key: "keyDown",
            value: function(t, e) {
                if (this.heldNotes.has(t))
                    this.heldNotes.get(t).attack(e);
                else {
                    var i = new this._DotConstructor(t,e);
                    this.heldNotes.set(t, i),
                    i.attack(e)
                }
            }
        }, {
            key: "keyUp",
            value: function(t) {
                this.heldNotes.has(t) && this.heldNotes.get(t).release()
            }
        }, {
            key: "stopAll",
            value: function() {
                var t = this;
                this.heldNotes.forEach(function(e, i) {
                    t.keyUp(i)
                })
            }
        }, {
            key: "loop",
            value: function() {
                var t = this;
                this.canvas.clear();
                var e = this.canvas.context;
                this.heldNotes.forEach(function(i) {
                    i.active ? i.draw(e, t.canvas.width, t.canvas.height) : (i.removed(),
                    t.heldNotes.delete(i.note))
                }),
                "clock" === this._mode && a.ClockDot.tailLoop(e, this.canvas.width, this.canvas.height)
            }
        }, {
            key: "mode",
            set: function(t) {
                if (this._mode !== t)
                    if (this._mode = t,
                    this.heldNotes.clear(),
                    this.canvas.clock = !1,
                    a.ClockDot.clear(),
                    "hammer" === t)
                        for (var e = c.MIN_MIDI; e <= c.MAX_MIDI; e++) {
                            var i = new l.HammerDot(e);
                            this.heldNotes.set(e, i)
                        }
                    else
                        "light" === t ? this._DotConstructor = r.LightDot : "wobble" === t ? this._DotConstructor = u.WobbleDot : "heat" === t ? this._DotConstructor = s.HeatDot : "clock" === t && (this.canvas.clock = !0,
                        this._DotConstructor = a.ClockDot)
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Interface = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    };
    i(67);
    var u = i(4)
      , l = (function(t) {
        t && t.__esModule
    }(u),
    i(2))
      , c = i(40)
      , h = i(34)
      , p = i(33)
      , f = i(38)
      , d = i(35)
      , y = i(36)
      , _ = (i(37),
    i(43))
      , m = i(1)
      , v = i(0);
    e.Interface = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "interface"));
            return i.autohide = !1,
            i.interfaceElements = [],
            i.dots = new h.Dots(i.element),
            i.interfaceElements.push(i.dots),
            i.dots.on("select", function(t) {
                i.emit("mode", t)
            }),
            i.tabs = new c.Tabs(i.element),
            i.interfaceElements.push(i.tabs),
            i.tabs.on("select", function(t, e) {
                i.midiRecorder.clear(),
                i.emit("stop"),
                i.interfaceElements.forEach(function(e) {
                    return e.show(t)
                })
            }),
            i.record = new f.Record(i.element),
            i.interfaceElements.push(i.record),
            i.record.on("scrap", function() {
                l.Transport.stop(),
                i.midiRecorder.clear(),
                i.tabs.locked = !1,
                i.emit("stop")
            }),
            i.record.on("save", function() {
                l.Transport.stop(),
                i.midiRecorder.upload(i.dots.mode).then(function(t) {
                    return i.record.hide()
                }).then(function() {
                    i.tabs.locked = !1,
                    i.listen.shuffle = !1
                })
            }),
            i.record.on("start", function() {
                i.midiRecorder.start(),
                i.tabs.locked = !0
            }),
            i.record.on("stop", function() {
                var t = i.midiRecorder.stop();
                i.emit("playback", t)
            }),
            i.record.onConfirm(function() {
                return i.midiRecorder.hasNotes()
            }),
            i.listen = new y.Listen(i.element),
            i.interfaceElements.push(i.listen),
            i.listen.on("lock", function() {
                return i.tabs.locked = !0
            }),
            i.listen.on("unlock", function() {
                return i.tabs.locked = !1
            }),
            i.instructions = new d.Instructions(i.element),
            i.interfaceElements.push(i.instructions),
            i.about = new p.About(i.element),
            i.interfaceElements.push(i.about),
            i.midiRecorder = new _.Recorder,
            i
        }
        return r(e, t),
        s(e, [{
            key: "setInfo",
            value: function(t) {
                var e = this;
                this.initialized && t && (this.dots.mode = t.visualizer,
                this.listen.setInfo(t),
                this.tabs.set("listen"),
                setTimeout(function() {
                    v.IS_MOBILE || e.emit("start")
                }, 100))
            }
        }, {
            key: "visible",
            value: function(t) {
                var i = t || v.IS_MOBILE ? "listen" : "play";
                return this.tabs.set(i),
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, i),
                t ? this.setInfo(t) : Promise.resolve()
            }
        }, {
            key: "hide",
            value: function() {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this),
                document.body.classList.add("nocursor")
            }
        }, {
            key: "loopEnd",
            value: function() {
                this.listen.shuffle && "listen" === this.tabs.tab && (this.emit("stop"),
                this.listen.next())
            }
        }]),
        e
    }(m.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Loader = void 0;
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }();
    i(68);
    e.Loader = function() {
        function t(e) {
            n(this, t),
            this.element = document.createElement("div"),
            this.element.id = "loader",
            this.element.classList.add("visible"),
            e.appendChild(this.element),
            this.fill = document.createElement("div"),
            this.fill.id = "fill",
            this.element.appendChild(this.fill)
        }
        return o(t, [{
            key: "progress",
            value: function(t) {
                this.fill.style.width = 100 * t + "%"
            }
        }, {
            key: "hide",
            value: function() {
                return this.element.classList.remove("visible"),
                new Promise(function(t) {
                    setTimeout(t, 200)
                }
                )
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Playback = void 0;
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , u = i(2)
      , l = n(u)
      , c = i(4)
      , h = n(c)
      , p = i(0)
      , f = i(3)
      , d = i(41);
    e.Playback = function(t) {
        function e(t, i) {
            o(this, e);
            var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            n.piano = t,
            n.dots = i,
            n.part = new u.Part,
            n._endEvent = -1,
            u.Transport.on("stop", function() {
                return n.stop()
            }),
            f.Url.on("data", function(t) {
                n.create(t.events)
            });
            var s = 0;
            return u.Transport.on("stop", function() {
                clearTimeout(s),
                s = setTimeout(function() {
                    l.default.context.lookAhead = .01
                }, 100)
            }),
            u.Transport.on("start", function() {
                clearTimeout(s)
            }),
            n.midiOut = new d.MidiOut,
            n
        }
        return s(e, t),
        a(e, [{
            key: "create",
            value: function(t) {
                var e = this;
                this.stop(),
                this.part.dispose(),
                u.Transport.clear(this._endEvent),
                this.part = new u.Part(this._onevent.bind(this)).start(0);
                var i = 0;
                t.forEach(function(t, n) {
                    0 === n ? i = 0 : i += t.deltaTime / 1e3,
                    e.part.add(i, t)
                }),
                this.part.loop = !0,
                this.part.loopEnd = i + .005,
                this.duration = i + .005,
                p.IS_MOBILE && "running" !== l.default.context.state || setTimeout(function() {
                    u.Transport.start("+0.1", 0)
                }, 100)
            }
        }, {
            key: "pause",
            value: function() {
                u.Transport.pause()
            }
        }, {
            key: "start",
            value: function() {
                clearTimeout(this.startTimeout),
                l.default.context.lookAhead = .1,
                this.startTimeout = setTimeout(function() {
                    u.Transport.start("+0.1", 0)
                }, 100)
            }
        }, {
            key: "restart",
            value: function() {
                this.stop(),
                this.start()
            }
        }, {
            key: "stop",
            value: function() {
                this.piano.stopAll(),
                this.dots.stopAll(),
                u.Transport.stop()
            }
        }, {
            key: "_onevent",
            value: function(t, e) {
                var i = this
                  , n = e.velocity / 127;
                switch (e.type) {
                case "noteOn":
                    this.piano.keyDown(e.noteNumber, t, n),
                    this.midiOut.keyDown(e.noteNumber, t, n),
                    u.Draw.schedule(function() {
                        return i.dots.keyDown(e.noteNumber, n)
                    }, t);
                    break;
                case "noteOff":
                    this.piano.keyUp(e.noteNumber, t, n),
                    this.midiOut.keyUp(e.noteNumber, t, n),
                    u.Draw.schedule(function() {
                        return i.dots.keyUp(e.noteNumber)
                    }, t);
                    break;
                case "controller":
                    this.midiOut.sendPedal(t, e.value),
                    e.value > 0 ? this.piano.pedalDown(t) : this.piano.pedalUp(t);
                    break;
                case "endOfTrack":
                    this.emit("end")
                }
            }
        }, {
            key: "progress",
            get: function() {
                return this.part.progress * this.duration
            }
        }]),
        e
    }(h.default.EventEmitter)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Piano = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(71)
      , u = i(44)
      , l = i(7)
      , c = i(0)
      , h = i(4)
      , p = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(h);
    e.Piano = function(t) {
        function e() {
            n(this, e);
            var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return c.USE_SOUND && (t.keyboard = new l.Keyboard,
            t.piano = new a.Piano([c.MIN_MIDI, c.MAX_MIDI],c.IS_MOBILE ? 1 : 4),
            t.effects = new u.Effects(t.piano),
            t.piano.context.lookAhead = .01,
            t.keyboard.on("keyDown", function(e, i) {
                t.piano.keyDown(e, t.piano.context.now(), i)
            }),
            t.keyboard.on("keyUp", function(e, i) {
                t.piano.keyUp(e, t.piano.context.now(), i)
            }),
            t.keyboard.on("pedal", function(e) {
                e > 0 ? t.piano.pedalDown() : t.piano.pedalUp()
            })),
            t
        }
        return r(e, t),
        s(e, [{
            key: "load",
            value: function() {
                return c.USE_SOUND ? this.piano.load("https://storage.googleapis.com/salamander-grand-piano/" + (c.IS_MOBILE ? "compressed" : "normal") + "/") : Promise.resolve()
            }
        }, {
            key: "keyDown",
            value: function(t, e, i) {
                c.USE_SOUND && this.piano.keyDown(t, e, i)
            }
        }, {
            key: "keyUp",
            value: function(t, e, i) {
                c.USE_SOUND && this.piano.keyUp(t, e, i)
            }
        }, {
            key: "pedalDown",
            value: function(t) {
                c.USE_SOUND && this.piano.pedalDown(t)
            }
        }, {
            key: "pedalUp",
            value: function(t) {
                c.USE_SOUND && this.piano.pedalUp(t)
            }
        }, {
            key: "stopAll",
            value: function() {
                c.USE_SOUND && this.piano.stopAll()
            }
        }, {
            key: "progress",
            value: function(t) {
                if (c.USE_SOUND)
                    return this.piano.progress(t)
            }
        }, {
            key: "mode",
            set: function(t) {
                c.USE_SOUND && (this.effects.mode = t)
            }
        }]),
        e
    }(p.default.EventEmitter)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = i(14)
      , r = i(22)
      , s = i(15)
      , a = n(s)
      , u = i(26)
      , l = i(0)
      , c = i(13)
      , h = n(c)
      , p = i(23)
      , f = i(25)
      , d = i(3)
      , y = i(24);
    console.log("Dot Piano by Alexander Chen and Yotam Mann"),
    (0,
    a.default)(function() {
        function t() {
            requestAnimationFrame(t),
            h.default.update(),
            i.loop(),
            c.listen.songInfo.setPosition(a.progress, a.duration)
        }
        var e = new o.Canvas(document.body)
          , i = new r.Dots(e,"light")
          , n = new u.Piano;
        n.load().then(function() {
            return l.IS_MOBILE && !d.Url.getId() ? (c.listen.shuffle = !0,
            d.Url.next()) : (d.Url.getId() && (c.listen.shuffle = !1),
            d.Url.load())
        }).then(function(t) {
            return s.hide().then(function() {
                return t
            })
        }).then(function(e) {
            return t(),
            c.visible(e)
        });
        var s = new y.Loader(document.body);
        n.progress(function(t) {
            s.progress(t)
        });
        var a = new f.Playback(n,i);
        a.on("end", function() {
            c.loopEnd()
        });
        var c = new p.Interface(document.body);
        c.on("mode", function(t) {
            i.mode = t,
            n.mode = t
        }),
        c.on("playback", function(t) {
            a.create(t)
        }),
        c.on("stop", function() {
            a.stop()
        }),
        c.on("start", function() {
            a.start()
        }),
        l.IS_MOBILE && document.body.classList.add("mobile")
    })
}
, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Modes = ["light", "heat", "hammer", "wobble", "clock"]
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    function s() {
        return a(performance.now())
    }
    function a(t) {
        return u(t) % f
    }
    function u(t) {
        return t * f / d
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ClockDot = void 0;
    var l = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , c = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , h = i(6)
      , p = i(11)
      , f = (function(t) {
        t && t.__esModule
    }(p),
    i(8),
    2 * Math.PI)
      , d = 28e3
      , y = []
      , _ = (e.ClockDot = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return r.attackTime = 25,
            r.opacityAttackTime = 25,
            r.decayTime = 300,
            r.releaseTime = 300,
            r.opacityReleaseTime = 300,
            r.attackMax = 1.5,
            r.sustainLevel = 1,
            r
        }
        return r(e, t),
        l(e, [{
            key: "draw",
            value: function(t, i, n) {
                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this, t);
                var o = .008 * i
                  , r = o;
                this.phase < 2 && (r = Math.max(this.envelope, 1) * o),
                this.tail && this.tail.draw(t, i, n);
                var a = i / 2
                  , u = n / 2
                  , l = s()
                  , h = this.x * Math.cos(l) * a + a
                  , p = this.x * Math.sin(l) * u + u;
                t.beginPath(),
                this.color.setAlpha(.5 * this.opacity),
                t.fillStyle = this.color.toRgbString(),
                t.arc(h, p, r * this.velocity, 0, f, !1),
                t.fill()
            }
        }, {
            key: "attack",
            value: function(t) {
                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attack", this).call(this, t),
                this.tail = new _(this.note,t),
                this.tail.attack(t)
            }
        }, {
            key: "release",
            value: function() {
                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this),
                this.tail && (this.tail.release(),
                y.push(this.tail)),
                this.tail = null
            }
        }], [{
            key: "tailLoop",
            value: function(t, e, i) {
                y.forEach(function(n) {
                    n.draw(t, e, i)
                }),
                y = y.filter(function(t) {
                    return t.active
                })
            }
        }, {
            key: "clear",
            value: function() {
                y = []
            }
        }]),
        e
    }(h.Dot),
    function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return r.opacityReleaseTime = 2e4,
            r.opacityAttackTime = 10,
            r.attackTime = 10,
            r.releaseTime = 1200,
            r.sustainLevel = 0,
            r
        }
        return r(e, t),
        l(e, [{
            key: "draw",
            value: function(t, e, i) {
                var n = .008;
                this.phase < 2 && (n = .008 * Math.max(this.envelope, 1));
                var o = n * this.velocity * Math.max(Math.pow(this.endEnvelope, 2), .2) * .7
                  , r = n * this.velocity
                  , s = e / 2
                  , a = i / 2
                  , l = u(this.startTime)
                  , c = Math.max(u(this.endTime), l + .01)
                  , h = c - l;
                this.envelope < .1 && h > .1 && this.release();
                var p = this.x * Math.cos(l)
                  , d = this.x * Math.sin(l)
                  , y = this.x * Math.cos(c)
                  , _ = this.x * Math.sin(c);
                t.beginPath(),
                this.color.setAlpha(this.opacity),
                t.fillStyle = this.color.toRgbString();
                for (var m = (this.x,
                Math.cos(c),
                this.x,
                Math.sin(c),
                Math.round(100 * h) + 5), v = 0; v <= m; v++) {
                    var g = v / m
                      , b = g * o + (1 - g) * r
                      , w = l + g * (c - l)
                      , T = (this.x - 2 * b) * Math.cos(w)
                      , S = (this.x - 2 * b) * Math.sin(w);
                    t.lineTo(this.offsetCenterX(T, s), this.offsetCenterY(S, a))
                }
                t.arc(this.offsetCenterX(y, s), this.offsetCenterY(_, a), o * e, c + Math.PI, c + f, !0);
                for (var x = m; x >= 0; x--) {
                    var M = x / m
                      , k = M * o + (1 - M) * r
                      , E = l + M * (c - l)
                      , O = (this.x + 2 * k) * Math.cos(E)
                      , A = (this.x + 2 * k) * Math.sin(E);
                    t.lineTo(this.offsetCenterX(O, s), this.offsetCenterY(A, a))
                }
                t.arc(this.offsetCenterX(p, s), this.offsetCenterY(d, a), r * e, l, l + Math.PI, !0),
                t.closePath(),
                t.fill()
            }
        }, {
            key: "release",
            value: function() {
                this.released || (this.released = !0,
                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this),
                this._endTime = performance.now(),
                this._endEnvelope = this.envelope)
            }
        }, {
            key: "offsetCenterX",
            value: function(t, e) {
                return t * e + e
            }
        }, {
            key: "offsetCenterY",
            value: function(t, e) {
                return t * e + e
            }
        }, {
            key: "endTime",
            get: function() {
                return this._endTime ? this._endTime : performance.now()
            }
        }, {
            key: "endEnvelope",
            get: function() {
                return this._endEnvelope ? this._endEnvelope : this.envelope
            }
        }, {
            key: "endRadius",
            get: function() {}
        }]),
        e
    }(h.Dot))
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.HammerDot = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(6)
      , l = i(11)
      , c = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(l)
      , h = i(8);
    e.HammerDot = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return r.attackTime = 25,
            r.opacityAttackTime = 25,
            r.decayTime = 100,
            r.releaseTime = 350,
            r.opacityReleaseTime = 2e3,
            r.attackMax = 1.2,
            r.sustainLevel = 1,
            r
        }
        return r(e, t),
        s(e, [{
            key: "draw",
            value: function(t, i, n) {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this, t);
                var o = .0035 * i
                  , r = this.envelope;
                this.phase > 2 && (r = Math.pow(r, 1.5));
                var s = .05 * i
                  , u = .005 * i
                  , l = r * this.velocity * (s - u) + u;
                t.beginPath(),
                t.fillStyle = c.default.mix(h.gray, this.color, 100 * this.opacity).toRgbString(),
                t.arc(this.x * i, n / 2 - l, o, 0, this.TWO_PI, !1),
                t.fill()
            }
        }, {
            key: "active",
            get: function() {
                return !0
            }
        }]),
        e
    }(u.Dot)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.HeatDot = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(6);
    i(17),
    e.HeatDot = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return r.attackTime = 25,
            r.decayTime = 300,
            r.releaseTime = 15e3,
            r.opacityReleaseTime = r.releaseTime,
            r.sustainLevel = 0,
            r.targetOpacity = 0,
            r
        }
        return r(e, t),
        s(e, [{
            key: "draw",
            value: function(t, i, n) {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
                var o = .043 * i
                  , r = o;
                this.phase < 2 && (r = Math.max(this.envelope, 1) * o),
                t.beginPath(),
                this.color.setAlpha(this.opacity),
                t.fillStyle = this.color.toRgbString(),
                t.arc(this.x * i, n / 2, r, 0, this.TWO_PI, !1),
                t.fill()
            }
        }, {
            key: "attack",
            value: function(t) {
                this.targetOpacity = this.opacity + .08,
                this.targetOpacity = Math.min(this.targetOpacity, 1),
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attack", this).call(this, t)
            }
        }]),
        e
    }(u.Dot)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.WobbleDot = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(6)
      , l = i(0);
    e.WobbleDot = function(t) {
        function e(t, i) {
            n(this, e);
            var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            r.attackTime = 25,
            r.decayTime = 300,
            r.releaseTime = 700,
            r.opacityReleaseTime = 1200,
            r.attackMax = 1.1,
            r.sustainLevel = 0;
            var s = (r.note - l.MIN_MIDI) / (l.MAX_MIDI - l.MIN_MIDI);
            return r.frequency = 10 * s + 3,
            r
        }
        return r(e, t),
        s(e, [{
            key: "draw",
            value: function(t, i, n) {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
                var o = .008 * i
                  , r = .05 * i
                  , s = performance.now() * this.TWO_PI / 1e3
                  , u = Math.sin(s * this.frequency) * r;
                u *= this.envelope,
                u *= this.velocity,
                t.beginPath(),
                this.color.setAlpha(this.opacity),
                t.fillStyle = this.color.toRgbString(),
                t.arc(this.x * i, n / 2 + u, o, 0, this.TWO_PI, !1),
                t.fill()
            }
        }]),
        e
    }(u.Dot)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.About = void 0;
    var s = i(56)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(s)
      , u = i(1);
    e.About = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "aboutInfo"));
            return i.activeTabs = ["about"],
            i.autohide = !1,
            i.element.innerHTML = a.default,
            i
        }
        return r(e, t),
        e
    }(u.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Dots = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(1)
      , u = i(28)
      , l = i(3)
      , c = i(5);
    e.Dots = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "dotSelection"));
            return i.activeTabs = ["play", "record", "listen"],
            u.Modes.forEach(function(t) {
                var e = document.createElement("div");
                e.classList.add("dot"),
                e.classList.add("button"),
                e.id = t,
                i.element.appendChild(e),
                e.addEventListener("click", function(e) {
                    i.mode = t
                })
            }),
            window.addEventListener("keydown", function(t) {
                t.keyCode >= 49 && t.keyCode < 49 + u.Modes.length && (i.mode = u.Modes[t.keyCode - 49],
                i.touch())
            }),
            setTimeout(function() {
                i.mode = "light"
            }, 100),
            l.Url.on("data", function(t) {
                i.mode = t.visualizer
            }),
            i
        }
        return r(e, t),
        s(e, [{
            key: "mode",
            get: function() {
                return this.currentMode
            },
            set: function(t) {
                if (this.currentMode !== t) {
                    (0,
                    c.sendEvent)("dots", t),
                    this.currentMode = t;
                    var e = this.element.querySelector("#" + t);
                    this.element.querySelectorAll(".dot").forEach(function(t) {
                        t.classList.remove("selected")
                    }),
                    e.classList.add("selected"),
                    this.emit("select", t)
                }
            }
        }]),
        e
    }(a.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Instructions = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(1)
      , l = i(7);
    e.Instructions = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "instructions"));
            return i.autohide = !1,
            i.activeTabs = ["play", "record"],
            i.element.textContent = "Play using your computer keys or MIDI keyboard.",
            i.activated = !1,
            i.keyboard = new l.Keyboard,
            i.keyboard.on("keyDown", function() {
                return i.remove()
            }),
            i
        }
        return r(e, t),
        s(e, [{
            key: "show",
            value: function(t) {
                this.activated || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, t)
            }
        }, {
            key: "remove",
            value: function() {
                this.activated || (this.activated = !0,
                this.hide())
            }
        }]),
        e
    }(u.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Listen = void 0;
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , u = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , l = i(2)
      , c = n(l);
    i(21);
    var h = i(66)
      , p = n(h)
      , f = i(3)
      , d = i(1)
      , y = i(39)
      , _ = i(19)
      , m = n(_)
      , v = i(5);
    e.Listen = function(t) {
        function e(t) {
            o(this, e);
            var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "listenContainer"));
            return i.activeTabs = ["listen"],
            i.autohide = !1,
            i.playButton = document.createElement("div"),
            i.playButton.id = "play",
            i.playButton.classList.add("button"),
            i.element.appendChild(i.playButton),
            i.playButton.addEventListener("click", function() {
                return i.toggle()
            }),
            i.shuffleButton = document.createElement("div"),
            i.shuffleButton.id = "shuffle",
            i.shuffleButton.classList.add("button"),
            i.shuffleButton.innerHTML = m.default,
            i.element.appendChild(i.shuffleButton),
            i.songInfo = new y.SongInfo(i.element),
            i.songInfo.on("next", function() {
                return i.next()
            }),
            i.locked = !1,
            l.Transport.on("pause stop", function() {
                i.playButton.classList.remove("playing"),
                i.touch()
            }),
            l.Transport.on("start", function() {
                i.playButton.classList.add("playing"),
                i.touch()
            }),
            i.shuffleButton.addEventListener("click", function() {
                i.shuffle = !i.shuffle
            }),
            (0,
            p.default)(c.default.context, i.playButton),
            document.body.addEventListener("keydown", function(t) {
                i.isVisible() && 32 === t.keyCode & !i.locked && i.toggle()
            }),
            i.shuffle = !0,
            i
        }
        return s(e, t),
        a(e, [{
            key: "next",
            value: function() {
                var t = this;
                return (0,
                v.sendEvent)("listen", "next"),
                l.Transport.stop(),
                this.element.classList.add("loading"),
                this.emit("lock"),
                this.locked = !0,
                this.songInfo.hide().then(function() {
                    return f.Url.next()
                }).then(function() {
                    t.emit("unlock"),
                    t.locked = !1,
                    t.element.classList.remove("loading")
                })
            }
        }, {
            key: "show",
            value: function(t) {
                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, t),
                this.isVisible() && !f.Url.getId() && this.next()
            }
        }, {
            key: "toggle",
            value: function() {
                (0,
                v.sendEvent)("listen", "toggle-play"),
                l.Transport.toggle(),
                this.touch()
            }
        }, {
            key: "setInfo",
            value: function(t) {
                return this.songInfo.set(t)
            }
        }, {
            key: "shuffle",
            get: function() {
                return this.shuffleButton.classList.contains("shuffle")
            },
            set: function(t) {
                t ? ((0,
                v.sendEvent)("listen", "shuffle", t.toString()),
                this.shuffleButton.classList.add("shuffle")) : this.shuffleButton.classList.remove("shuffle")
            }
        }, {
            key: "loading",
            get: function() {
                return this.element.classList.contains("loading")
            },
            set: function(t) {
                t ? this.element.classList.add("loading") : this.element.classList.remove("loading")
            }
        }]),
        e
    }(d.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.MidiNotification = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(18)
      , u = i(1);
    e.MidiNotification = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "midiNotification"));
            return i.autohide = !1,
            i.activeTabs = ["play", "record"],
            i.midi = new a.Midi,
            i.midi.on("connect", function(t) {
                i.connect([t])
            }),
            i.midi.on("disconnect", function(t) {
                i.disconnect(t)
            }),
            i.textTimeout = -1,
            i
        }
        return r(e, t),
        s(e, [{
            key: "enter",
            value: function() {
                this.connect(this.midi.connected)
            }
        }, {
            key: "flashText",
            value: function(t) {
                var e = this;
                clearTimeout(this.textTimeout),
                this.element.innerHTML = "<div class='disappearable' id='devices'>" + t + "</div>";
                var i = this.element.querySelector("#devices");
                this.textTimeout = setTimeout(function() {
                    i.classList.add("visible"),
                    clearTimeout(e.textTimeout),
                    e.textTimeout = setTimeout(function() {
                        i.classList.remove("visible")
                    }, 2e3)
                }, 500)
            }
        }, {
            key: "connect",
            value: function(t) {
                if (this.isVisible()) {
                    var e = t.map(function(t) {
                        return "<div class='device'>" + t.manufacturer + " - " + t.name + "</div>"
                    });
                    e.length && this.flashText("<div id='label'>CONNECTED MIDI DEVICE" + (e.length > 1 ? "S" : "") + "</div> " + e.join(" ") + " ")
                }
            }
        }, {
            key: "disconnect",
            value: function(t) {
                this.isVisible() && this.flashText("<div id='label'>DISCONNECTED MIDI DEVICE</div><div class='device'>" + t.manufacturer + " - " + t.name + "</div>")
            }
        }]),
        e
    }(u.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Record = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, n)
        }
        if ("value"in o)
            return o.value;
        var s = o.get;
        if (void 0 !== s)
            return s.call(n)
    }
      , u = i(1)
      , l = i(19)
      , c = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(l)
      , h = (i(3),
    i(5));
    e.Record = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "recordContainer"));
            return i.autohide = !0,
            i.activeTabs = ["play"],
            i._recording = !1,
            i._confirmed = !0,
            i.recordButton = document.createElement("div"),
            i.recordButton.id = "record",
            i.recordButton.classList.add("button"),
            i.element.appendChild(i.recordButton),
            i.ring = document.createElement("div"),
            i.ring.id = "ring",
            i.recordButton.appendChild(i.ring),
            i.stopSquare = document.createElement("div"),
            i.stopSquare.id = "square",
            i.recordButton.appendChild(i.stopSquare),
            i.saveButton = document.createElement("div"),
            i.saveButton.innerHTML = c.default,
            i.saveButton.id = "save",
            i.saveButton.classList.add("button"),
            i.element.appendChild(i.saveButton),
            i.scrapButton = document.createElement("div"),
            i.scrapButton.id = "scrap",
            i.scrapButton.classList.add("button"),
            i.element.appendChild(i.scrapButton),
            i.recordButton.addEventListener("click", function() {
                return i.toggle()
            }),
            i.saveButton.addEventListener("click", function() {
                return i.save()
            }),
            i.scrapButton.addEventListener("click", function() {
                return i.scrap()
            }),
            document.body.addEventListener("keydown", function(t) {
                i.isVisible() && (32 === t.keyCode ? i.toggle() : 13 === t.keyCode && i.saveButton.classList.contains("visible") && i._confirmationCallback() && i.save())
            }),
            i
        }
        return r(e, t),
        s(e, [{
            key: "isRecording",
            value: function() {
                return this._recording
            }
        }, {
            key: "confirmation",
            value: function() {
                this.isRecording() || (this._confirmed = !1,
                this.recordButton.classList.remove("visible"),
                this.saveButton.classList.add("visible"),
                this.scrapButton.classList.add("visible"))
            }
        }, {
            key: "show",
            value: function(t) {
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, t),
                this._recording = !1,
                this._confirmed = !0,
                this.recordButton.classList.add("visible"),
                this.recordButton.classList.remove("recording"),
                this.isVisible()
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                return this.autohide = !0,
                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this),
                new Promise(function(e) {
                    t.saveButton.classList.remove("visible"),
                    t.scrapButton.classList.remove("visible"),
                    t.element.classList.remove("noNotes"),
                    t._confirmed || t.emit("scrap"),
                    setTimeout(function() {
                        t.element.classList.remove("loading"),
                        e()
                    }, 300)
                }
                )
            }
        }, {
            key: "save",
            value: function() {
                (0,
                h.sendEvent)("record", "save"),
                this._confirmed = !0,
                this.emit("save"),
                this.element.classList.add("loading")
            }
        }, {
            key: "scrap",
            value: function() {
                var t = this;
                (0,
                h.sendEvent)("record", "scrap"),
                this._confirmed = !0,
                this.emit("scrap"),
                this.hide().then(function() {
                    return t.show("play")
                })
            }
        }, {
            key: "stop",
            value: function() {
                var t = this;
                setTimeout(function() {
                    t.recordButton.classList.remove("recording")
                }, 200),
                this._recording = !1,
                this._confirmationCallback() || this.element.classList.add("noNotes"),
                this.confirmation()
            }
        }, {
            key: "onConfirm",
            value: function(t) {
                this._confirmationCallback = t
            }
        }, {
            key: "toggle",
            value: function() {
                this.isRecording() ? (this.stop(),
                (0,
                h.sendEvent)("record", "stop"),
                this.emit("stop")) : ((0,
                h.sendEvent)("record", "start"),
                this.autohide = !1,
                this.touch(),
                this._recording = !0,
                this._confirmed = !1,
                this.recordButton.classList.add("recording"),
                this.emit("start"))
            }
        }]),
        e
    }(u.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SongInfo = void 0;
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , u = i(1)
      , l = i(3)
      , c = i(47)
      , h = n(c)
      , p = (i(2),
    i(60))
      , f = n(p);
    e.SongInfo = function(t) {
        function e(t) {
            o(this, e);
            var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "songInfo"));
            return i.autohide = !1,
            i.activeTabs = ["listen"],
            i.dateLocationContainer = document.createElement("div"),
            i.dateLocationContainer.id = "dateLocation",
            i.dateLocationContainer.textContent = "Recorded ",
            i.element.appendChild(i.dateLocationContainer),
            i.date = document.createElement("span"),
            i.date.id = "date",
            i.dateLocationContainer.appendChild(i.date),
            i.location = document.createElement("span"),
            i.location.id = "location",
            i.dateLocationContainer.appendChild(i.location),
            i.link = document.createElement("div"),
            i.link.id = "link",
            i.element.appendChild(i.link),
            i.linkButton = document.createElement("button"),
            i.linkButton.classList = "tooltipped tooltipped-e float-left tooltipped-no-delay",
            i.link.appendChild(i.linkButton),
            i.linkButton.setAttribute("aria-label", "Copy link to share this song."),
            new h.default(i.linkButton).on("success", function() {
                i.linkButton.setAttribute("aria-label", "Copied!")
            }),
            i.linkButton.addEventListener("mouseout", function() {
                i.linkButton.setAttribute("aria-label", "Copy link to share this song.")
            }),
            i.duration = document.createElement("div"),
            i.duration.id = "duration",
            i.element.appendChild(i.duration),
            i.skipContainer = document.createElement("div"),
            i.skipContainer.id = "skipContainer",
            i.element.appendChild(i.skipContainer),
            i.skipButton = document.createElement("div"),
            i.skipButton.id = "skip",
            i.skipContainer.appendChild(i.skipButton),
            i.skipButton.addEventListener("click", function() {
                i.emit("next")
            }),
            l.Url.on("data", function(t) {
                i.set(t)
            }),
            i
        }
        return s(e, t),
        a(e, [{
            key: "formatTime",
            value: function(t) {
                var e = Math.floor(t / 60)
                  , i = t % 60;
                return (0,
                f.default)(e, 2, "0") + ":" + (0,
                f.default)(Math.floor(i), 2, "0") + "." + Math.floor(10 * i) % 10
            }
        }, {
            key: "setPosition",
            value: function(t, e) {
                this.duration.textContent = this.formatTime(t) + " / " + this.formatTime(e)
            }
        }, {
            key: "set",
            value: function(t) {
                this.touch();
                var e = new Date(t.date);
                return this.date.textContent = e.toLocaleTimeString(void 0, {
                    hour: "2-digit",
                    minute: "numeric"
                }) + ", " + e.toLocaleDateString(void 0, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                t.location ? (this.location.textContent = t.location + ".",
                this.date.textContent += ", ",
                this.location.classList.add("has")) : (this.location.classList.remove("has"),
                this.date.textContent += "."),
                this.linkButton.textContent = "" + window.location.hostname + window.location.pathname,
                this.linkButton.setAttribute("data-clipboard-text", window.location.href),
                this.show("listen")
            }
        }]),
        e
    }(u.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Tabs = void 0;
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(1)
      , u = i(3)
      , l = i(0)
      , c = i(5);
    e.Tabs = function(t) {
        function e(t) {
            n(this, e);
            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "tabs"));
            return (l.IS_MOBILE ? ["listen", "about"] : ["play", "listen", "about"]).forEach(function(t) {
                i.locked = !1;
                var e = document.createElement("div");
                e.classList.add("tab"),
                e.id = t,
                e.textContent = t,
                i.element.appendChild(e),
                e.addEventListener("click", function(e) {
                    l.IS_MOBILE && "about" === i.tab ? i.set("listen") : i.set(t)
                })
            }),
            u.Url.on("data", function() {
                i.set("listen")
            }),
            i
        }
        return r(e, t),
        s(e, [{
            key: "set",
            value: function(t) {
                if (this.currentMode !== t) {
                    var e = this.element.querySelector("#" + t);
                    this.element.querySelectorAll(".tab").forEach(function(t) {
                        t.classList.remove("selected")
                    }),
                    e.classList.add("selected"),
                    this.emit("select", t, this.currentMode),
                    this.currentMode = t,
                    (0,
                    c.sendEvent)("tab", this.tab)
                }
            }
        }, {
            key: "tab",
            get: function() {
                return this.element.querySelector(".selected").id
            }
        }, {
            key: "locked",
            set: function(t) {
                t ? this.element.classList.add("locked") : this.element.classList.remove("locked")
            },
            get: function() {
                return this.element.classList.contains("locked")
            }
        }]),
        e
    }(a.InterfaceElement)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.MidiOut = void 0;
    var r = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , s = i(12)
      , a = n(s)
      , u = i(2)
      , l = n(u)
      , c = i(0);
    e.MidiOut = function() {
        function t() {
            var e = this;
            o(this, t),
            this.isEnabled = !1,
            a.default.enable(function(t) {
                t || (e.isEnabled = !0)
            })
        }
        return r(t, [{
            key: "toNote",
            value: function(t) {
                return (0,
                u.Frequency)(t, "midi").toNote()
            }
        }, {
            key: "forEach",
            value: function(t) {
                this.isEnabled && c.MIDI_OUT && a.default.outputs.forEach(function(e) {
                    t(e)
                })
            }
        }, {
            key: "keyDown",
            value: function(t, e, i) {
                e = 1e3 * e + this.offset,
                this.forEach(function(n) {
                    n.playNote(t, "all", {
                        time: e,
                        velocity: i
                    })
                })
            }
        }, {
            key: "keyUp",
            value: function(t, e, i) {
                e = 1e3 * e + this.offset,
                this.forEach(function(n) {
                    n.stopNote(t, "all", {
                        time: e,
                        velocity: i
                    })
                })
            }
        }, {
            key: "sendPedal",
            value: function(t, e) {
                t = 1e3 * t + this.offset,
                this.forEach(function(i) {
                    i.sendControlChange(64, e, "all", {
                        time: t
                    })
                })
            }
        }, {
            key: "offset",
            get: function() {
                return a.default.time - 1e3 * l.default.now()
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        var e = {
            ticksPerBeat: a.Transport.PPQ,
            format: 1,
            numTracks: 1
        }
          , i = 60 / a.Transport.bpm.value * 1e6
          , n = [[{
            deltaTime: 0,
            meta: !0,
            type: "setTempo",
            microsecondsPerBeat: i
        }, {
            deltaTime: 0,
            meta: !0,
            type: "timeSignature",
            numerator: 4,
            denominator: 4,
            metronome: 24,
            thirtyseconds: 8
        }, {
            deltaTime: 0,
            meta: !0,
            type: "endOfTrack"
        }], t];
        return o(s.default.writeMidi({
            header: e,
            tracks: n
        }))
    }
    function o(t) {
        var e = new Uint8Array(t);
        return new Blob([e],{
            type: "audio/midi"
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.EncodeMidi = n;
    var r = i(20)
      , s = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r)
      , a = i(2)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Recorder = void 0;
    var r = function() {
        function t(t, e) {
            var i = []
              , n = !0
              , o = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                !e || i.length !== e); n = !0)
                    ;
            } catch (t) {
                o = !0,
                r = t
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (o)
                        throw r
                }
            }
            return i
        }
        return function(e, i) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = i(4)
      , u = (n(a),
    i(7))
      , l = i(2)
      , c = (n(l),
    i(42));
    i(21);
    var h = i(3)
      , p = i(16);
    l.Transport.PPQ = 500,
    l.Transport.bpm.value = tempo;
    e.Recorder = function() {
        function t() {
            var e = this;
            o(this, t),
            this._midi = new u.Keyboard,
            this._midi.on("keyDown", function(t, i, n) {
                e._pushEvent({
                    type: "noteOn",
                    noteNumber: t,
                    velocity: Math.round(127 * i),
                    channel: 0
                }, n)
            }),
            this._midi.on("keyUp", function(t, i, n) {
                e._pushEvent({
                    type: "noteOff",
                    noteNumber: t,
                    velocity: Math.round(127 * i),
                    channel: 0
                }, n)
            }),
            this._midi.on("pedal", function(t, i) {
                e._pushEvent({
                    type: "controller",
                    controllerType: 64,
                    value: t,
                    channel: 0
                }, i)
            }),
            this._lastEventTime = -1
        }
        return s(t, [{
            key: "start",
            value: function() {
                this._lastEventTime = this._midi.time(),
                this._events = [],
                this._recording = !0
            }
        }, {
            key: "stop",
            value: function() {
                return this._pushEvent({
                    meta: !0,
                    type: "endOfTrack"
                }, this._midi.time()),
                this.addNoteOffs(),
                this._recording = !1,
                this._events
            }
        }, {
            key: "upload",
            value: function(t) {
                var e = this
                  , i = new FormData;
                i.append("midi", (0,
                c.EncodeMidi)(this._events)),
                i.append("visualizer", t),
                i.append("duration", this.getDuration());
                var n = fetch("/midi", {
                    method: "POST",
                    body: i
                }).then(function(t) {
                    if (t.ok)
                        return t.json();
                    throw new Error(t.status)
                });
                return Promise.all([(0,
                p.timeoutPromise)(500), n]).then(function(t) {
                    var i = r(t, 2)
                      , n = (i[0],
                    i[1]);
                    n.events = e._events,
                    h.Url.setData(n)
                })
            }
        }, {
            key: "hasNotes",
            value: function() {
                return this._events.length > 1
            }
        }, {
            key: "clear",
            value: function() {
                this._events = []
            }
        }, {
            key: "_pushEvent",
            value: function(t, e) {
                if (this._recording) {
                    var i = Math.round(e - this._lastEventTime);
                    this._lastEventTime = e,
                    t.deltaTime = i,
                    this._events.push(t)
                }
            }
        }, {
            key: "addNoteOffs",
            value: function() {
                var t = {}
                  , e = !1;
                this._events.forEach(function(i) {
                    "noteOn" === i.type ? (t.hasOwnProperty(i.noteNumber) || (t[i.noteNumber] = 0),
                    t[i.noteNumber]++) : "noteOff" === i.type ? (t.hasOwnProperty(i.noteNumber) || (t[i.noteNumber] = 1),
                    t[i.noteNumber]--) : "controller" === i.type && (e = i.value > 0)
                });
                var i = this._events.pop()
                  , n = i.deltaTime;
                for (var o in t)
                    t[o] > 0 && (o = parseInt(o),
                    this._events.push({
                        type: "noteOff",
                        noteNumber: o,
                        velocity: 0,
                        channel: 0,
                        deltaTime: n
                    }),
                    n = 0);
                e && this._events.push({
                    type: "controller",
                    controllerType: 64,
                    value: 0,
                    deltaTime: n,
                    channel: 0
                }),
                i.deltaTime = n + 1,
                this._events.push(i)
            }
        }, {
            key: "getDuration",
            value: function() {
                var t = 0;
                return this._events.forEach(function(e, i) {
                    0 === i ? t = 0 : t += e.deltaTime / 1e3
                }),
                t
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Effects = void 0;
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(2);
    e.Effects = function() {
        function t(e) {
            n(this, t),
            this.piano = e,
            this.volume = new r.Volume(-6).toMaster(),
            this.reverb = new r.Convolver("/static/audio/tunnel.[mp3|ogg]"),
            this.delay = new r.FeedbackDelay(.04,.2),
            this.lowpass = new r.Filter,
            this.highpass = new r.Filter(10,"highpass"),
            this.highpass.Q.value = .1,
            this.tremolo = new r.Tremolo,
            this.tremolo.depth.value = .4,
            this.mode = "hammer",
            window.effects = this,
            this.piano.chain(this.tremolo, this.lowpass, this.highpass, this.delay, this.reverb, this.volume)
        }
        return o(t, [{
            key: "setEffects",
            value: function(t) {
                var e = Object.assign({
                    delay: 0,
                    reverb: 0,
                    note: 0,
                    pedal: 0,
                    harmonics: 0,
                    release: 0,
                    lowpass: 2e4,
                    highpass: 10,
                    tremolo: !1
                }, t);
                this.piano.setVolume("note", e.note),
                this.piano.setVolume("harmonics", e.harmonics),
                this.piano.setVolume("pedal", e.pedal),
                this.piano.setVolume("release", e.release),
                this.reverb.wet.rampTo(e.reverb, .05),
                this.delay.wet.rampTo(e.delay, .05),
                this.lowpass.frequency.rampTo(e.lowpass, .05),
                this.highpass.frequency.rampTo(e.highpass, .05),
                e.tremolo ? this.tremolo.start() : this.tremolo.stop()
            }
        }, {
            key: "mode",
            set: function(t) {
                "light" === t ? this.setEffects({}) : "hammer" === t ? this.setEffects({
                    note: -2,
                    pedal: 2,
                    harmonics: 10,
                    release: 8,
                    delay: .5,
                    highpass: 200
                }) : "heat" === t ? this.setEffects({
                    reverb: .3,
                    lowpass: 450
                }) : "wobble" === t ? this.setEffects({
                    lowpass: 1800,
                    tremolo: !0
                }) : "clock" === t && this.setEffects({
                    reverb: .3
                })
            }
        }]),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        var e = this;
        e._setState(t),
        e._listeners = {},
        e._bind()
    }
    t.exports = n,
    n.prototype._setState = function(t) {
        var e = this;
        t || (t = {}),
        e._state = {},
        e._extendState({
            polyphony: 4,
            rows: 1,
            priority: "last",
            rootNote: 60,
            octaveControls: !0,
            octave: 0,
            velocityControls: !0,
            velocity: 127,
            keys: [],
            buffer: []
        }),
        e._extendState(t)
    }
    ,
    n.prototype._extendState = function(t) {
        var e = this;
        for (var i in t)
            e._state[i] = t[i]
    }
    ,
    n.prototype.set = function() {
        var t = this;
        return 1 === arguments.length ? t._extendState(arguments[0]) : t._state[arguments[0]] = arguments[1],
        this
    }
    ,
    n.prototype.get = function(t) {
        return this._state[t]
    }
    ,
    n.prototype.down = function(t) {
        var e = this;
        e._listeners.down = (e._listeners.down || []).concat(t)
    }
    ,
    n.prototype.up = function(t) {
        var e = this;
        e._listeners.up = (e._listeners.up || []).concat(t)
    }
    ,
    n.prototype._trigger = function(t) {
        var e = this;
        if (e._listeners[t] && e._listeners[t].length) {
            var i = Array.prototype.slice.call(arguments);
            i.splice(0, 1),
            e._listeners[t].forEach(function(t) {
                t.apply(e, i)
            })
        }
    }
    ,
    n.prototype._bind = function() {
        var t = this;
        if ("undefined" != typeof window && window.document) {
            window.document.addEventListener("keydown", function(e) {
                t._addKey(e)
            }),
            window.document.addEventListener("keyup", function(e) {
                t._removeKey(e)
            });
            var e = !0;
            setInterval(function() {
                window.document.hasFocus() !== e && ((e = !e) || t.clear())
            }, 100)
        }
    }
    ,
    n.prototype._map = function(t) {
        return this._keyMap[this._state.rows][t] + this._offset()
    }
    ,
    n.prototype._offset = function() {
        return this._state.rootNote - this._keyMap[this._state.rows].root + 12 * this._state.octave
    }
    ,
    n.prototype._isNote = function(t) {
        return !!this._keyMap[this._state.rows][t]
    }
    ,
    n.prototype._toFrequency = function(t) {
        return 440 * Math.pow(2, (t - 69) / 12)
    }
    ,
    n.prototype._keyMap = {
        1: {
            root: 60,
            65: 60,
            87: 61,
            83: 62,
            69: 63,
            68: 64,
            70: 65,
            84: 66,
            71: 67,
            89: 68,
            72: 69,
            85: 70,
            74: 71,
            75: 72,
            79: 73,
            76: 74,
            80: 75,
            186: 76,
            222: 77
        },
        2: {
            root: 60,
            90: 60,
            83: 61,
            88: 62,
            68: 63,
            67: 64,
            86: 65,
            71: 66,
            66: 67,
            72: 68,
            78: 69,
            74: 70,
            77: 71,
            188: 72,
            76: 73,
            190: 74,
            186: 75,
            191: 76,
            81: 72,
            50: 73,
            87: 74,
            51: 75,
            69: 76,
            82: 77,
            53: 78,
            84: 79,
            54: 80,
            89: 81,
            55: 82,
            85: 83,
            73: 84,
            57: 85,
            79: 86,
            48: 87,
            80: 88,
            219: 89,
            187: 90,
            221: 91
        }
    },
    n.prototype._addKey = function(t) {
        var e = this;
        if (e._isNote(t.keyCode) && !e._isPressed(t.keyCode)) {
            var i = e._makeNote(t.keyCode);
            e._state.keys = (e._state.keys || []).concat(i),
            e._update()
        } else
            e._isSpecialKey(t.keyCode) && e._specialKey(t.keyCode)
    }
    ,
    n.prototype._removeKey = function(t) {
        var e = this;
        if (e._isPressed(t.keyCode)) {
            for (var i, n = 0; n < e._state.keys.length; n++)
                if (e._state.keys[n].keyCode === t.keyCode) {
                    i = e._state.keys[n];
                    break
                }
            e._state.keys.splice(e._state.keys.indexOf(i), 1),
            e._update()
        }
    }
    ,
    n.prototype._isPressed = function(t) {
        var e = this;
        if (!e._state.keys || !e._state.keys.length)
            return !1;
        for (var i = 0; i < e._state.keys.length; i++)
            if (e._state.keys[i].keyCode === t)
                return !0;
        return !1
    }
    ,
    n.prototype._makeNote = function(t) {
        var e = this;
        return {
            keyCode: t,
            note: e._map(t),
            frequency: e._toFrequency(e._map(t)),
            velocity: e._state.velocity
        }
    }
    ,
    n.prototype.clear = function() {
        var t = this;
        t._state.buffer.forEach(function(e) {
            t._trigger("up", e)
        }),
        t._state.keys = [],
        t._state.buffer = []
    }
    ,
    n.prototype._update = function() {
        var t = this
          , e = t._state.buffer;
        t._prioritize(),
        t._diff(e)
    }
    ,
    n.prototype._diff = function(t) {
        var e = this
          , i = t.map(function(t) {
            return t.keyCode
        })
          , n = e._state.buffer.map(function(t) {
            return t.keyCode
        })
          , o = [];
        i.forEach(function(t) {
            -1 === n.indexOf(t) && o.push(t)
        });
        var r = [];
        n.forEach(function(t) {
            -1 === i.indexOf(t) && r.push(t)
        }),
        r.forEach(function(t) {
            for (var i = 0; i < e._state.buffer.length; i++)
                if (e._state.buffer[i].keyCode === t) {
                    e._trigger("down", e._state.buffer[i]);
                    break
                }
        }),
        o.forEach(function(i) {
            for (var n = 0; n < t.length; n++)
                if (t[n].keyCode === i) {
                    e._trigger("up", t[n]);
                    break
                }
        })
    }
    ,
    n.prototype._prioritize = function() {
        var t = this;
        if (!t._state.keys.length)
            return void (t._state.buffer = []);
        t._state.polyphony >= t._state.keys.length ? t._state.keys = t._state.keys.map(function(t) {
            return t.isActive = !0,
            t
        }) : (t._state.keys = t._state.keys.map(function(t) {
            return t.isActive = !1,
            t
        }),
        t["_" + t._state.priority]()),
        t._state.buffer = [],
        t._state.keys.forEach(function(e) {
            e.isActive && t._state.buffer.push(e)
        })
    }
    ,
    n.prototype._last = function() {
        for (var t = this, e = t._state.keys.length - t._state.polyphony; e < t._state.keys.length; e++)
            t._state.keys[e].isActive = !0
    }
    ,
    n.prototype._first = function() {
        for (var t = this, e = 0; e < t._state.polyphony; e++)
            t._state.keys[e].isActive = !0
    }
    ,
    n.prototype._highest = function() {
        var t = this
          , e = t._state.keys.map(function(t) {
            return t.note
        });
        e.sort(function(t, e) {
            return e === t ? 0 : e < t ? -1 : 1
        }),
        e.splice(t._state.polyphony, Number.MAX_VALUE),
        t._state.keys.forEach(function(t) {
            -1 !== e.indexOf(t.note) && (t.isActive = !0)
        })
    }
    ,
    n.prototype._lowest = function() {
        var t = this
          , e = t._state.keys.map(function(t) {
            return t.note
        });
        e.sort(function(t, e) {
            return t === e ? 0 : t < e ? -1 : 1
        }),
        e.splice(t._state.polyphony, Number.MAX_VALUE),
        t._state.keys.forEach(function(t) {
            -1 !== e.indexOf(t.note) && (t.isActive = !0)
        })
    }
    ,
    n.prototype._isSpecialKey = function(t) {
        return 1 === this._state.rows && this._specialKeyMap[t]
    }
    ,
    n.prototype._specialKey = function(t) {
        var e = this;
        "octave" === e._specialKeyMap[t].type && e._state.octaveControls ? e._state.octave += e._specialKeyMap[t].value : "velocity" === e._specialKeyMap[t].type && e._state.velocityControls && (e._state.velocity = e._specialKeyMap[t].value)
    }
    ,
    n.prototype._specialKeyMap = {
        90: {
            type: "octave",
            value: -1
        },
        88: {
            type: "octave",
            value: 1
        },
        49: {
            type: "velocity",
            value: 1
        },
        50: {
            type: "velocity",
            value: 14
        },
        51: {
            type: "velocity",
            value: 28
        },
        52: {
            type: "velocity",
            value: 42
        },
        53: {
            type: "velocity",
            value: 56
        },
        54: {
            type: "velocity",
            value: 70
        },
        55: {
            type: "velocity",
            value: 84
        },
        56: {
            type: "velocity",
            value: 98
        },
        57: {
            type: "velocity",
            value: 112
        },
        48: {
            type: "velocity",
            value: 127
        }
    }
}
, function(t, e, i) {
    var n, o, r;
    !function(s, a) {
        o = [t, i(65)],
        n = a,
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r)
    }(0, function(t, e) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(e)
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , s = function() {
            function t(e) {
                i(this, t),
                this.resolveOptions(e),
                this.initSelection()
            }
            return r(t, [{
                key: "resolveOptions",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = t.action,
                    this.container = t.container,
                    this.emitter = t.emitter,
                    this.target = t.target,
                    this.text = t.text,
                    this.trigger = t.trigger,
                    this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var t = this
                      , e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return t.removeFake()
                    }
                    ,
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var i = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = i + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0,
                    n.default)(this.fakeElem),
                    this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                    this.fakeHandler = null,
                    this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0,
                    n.default)(this.target),
                    this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
            }, {
                key: "handleResult",
                value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = t,
                    "copy" !== this._action && "cut" !== this._action)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            t
        }();
        t.exports = s
    })
}
, function(t, e, i) {
    var n, o, r;
    !function(s, a) {
        o = [t, i(46), i(70), i(54)],
        n = a,
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r)
    }(0, function(t, e, i, n) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function u(t, e) {
            var i = "data-clipboard-" + t;
            if (e.hasAttribute(i))
                return e.getAttribute(i)
        }
        var l = o(e)
          , c = o(i)
          , h = o(n)
          , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , d = function(t) {
            function e(t, i) {
                r(this, e);
                var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n.resolveOptions(i),
                n.listenClick(t),
                n
            }
            return a(e, t),
            f(e, [{
                key: "resolveOptions",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                    this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                    this.text = "function" == typeof t.text ? t.text : this.defaultText,
                    this.container = "object" === p(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(t) {
                    var e = this;
                    this.listener = (0,
                    h.default)(t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new l.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(t) {
                    return u("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function(t) {
                    var e = u("target", t);
                    if (e)
                        return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(t) {
                    return u("text", t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , e = "string" == typeof t ? [t] : t
                      , i = !!document.queryCommandSupported;
                    return e.forEach(function(t) {
                        i = i && !!document.queryCommandSupported(t)
                    }),
                    i
                }
            }]),
            e
        }(c.default);
        t.exports = d
    })
}
, function(t, e, i) {
    e = t.exports = i(9)(),
    e.push([t.i, '.spinner{stroke:#ddd;-webkit-animation:rotator 1.7s linear infinite;animation:rotator 1.7s linear infinite;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;transition:opacity .1s;position:absolute;width:calc(100% + 20px);height:calc(100% + 20px);top:-10px;left:-10px;z-index:-1;margin:0 auto}body.mobile .spinner{width:calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px}.spinner:before{content:"";display:block;padding-top:100%}.loading .spinner{opacity:1}.circular{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:100%;-webkit-transform-origin:center center;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.tooltipped{position:relative}.tooltipped:after{z-index:1000000;padding:5px 8px;font:normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;-webkit-font-smoothing:subpixel-antialiased;color:#fff;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;content:attr(aria-label);background:rgba(27,31,35,.8);border-radius:3px}.tooltipped:after,.tooltipped:before{position:absolute;display:none;pointer-events:none;opacity:0}.tooltipped:before{z-index:1000001;width:0;height:0;color:rgba(27,31,35,.8);content:"";border:5px solid transparent}@-webkit-keyframes tooltip-appear{0%{opacity:0}to{opacity:1}}@keyframes tooltip-appear{0%{opacity:0}to{opacity:1}}.tooltipped:active:after,.tooltipped:active:before,.tooltipped:focus:after,.tooltipped:focus:before,.tooltipped:hover:after,.tooltipped:hover:before{display:inline-block;text-decoration:none;-webkit-animation-name:tooltip-appear;animation-name:tooltip-appear;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-delay:.4s;animation-delay:.4s}.tooltipped-no-delay:active:after,.tooltipped-no-delay:active:before,.tooltipped-no-delay:focus:after,.tooltipped-no-delay:focus:before,.tooltipped-no-delay:hover:after,.tooltipped-no-delay:hover:before{opacity:1;-webkit-animation:none;animation:none}.tooltipped-multiline:active:after,.tooltipped-multiline:focus:after,.tooltipped-multiline:hover:after{display:table-cell}.tooltipped-s:after,.tooltipped-se:after,.tooltipped-sw:after{top:100%;right:50%;margin-top:5px}.tooltipped-s:before,.tooltipped-se:before,.tooltipped-sw:before{top:auto;right:50%;bottom:-5px;margin-right:-5px;border-bottom-color:rgba(27,31,35,.8)}.tooltipped-se:after{right:auto;left:50%;margin-left:-15px}.tooltipped-sw:after{margin-right:-15px}.tooltipped-n:after,.tooltipped-ne:after,.tooltipped-nw:after{right:50%;bottom:100%;margin-bottom:5px}.tooltipped-n:before,.tooltipped-ne:before,.tooltipped-nw:before{top:-5px;right:50%;bottom:auto;margin-right:-5px;border-top-color:rgba(27,31,35,.8)}.tooltipped-ne:after{right:auto;left:50%;margin-left:-15px}.tooltipped-nw:after{margin-right:-15px}.tooltipped-n:after,.tooltipped-s:after{-webkit-transform:translateX(50%);transform:translateX(50%)}.tooltipped-w:after{right:100%;bottom:50%;margin-right:5px;-webkit-transform:translateY(50%);transform:translateY(50%)}.tooltipped-w:before{top:50%;bottom:50%;left:-5px;margin-top:-5px;border-left-color:rgba(27,31,35,.8)}.tooltipped-e:after{bottom:50%;left:100%;margin-left:5px;-webkit-transform:translateY(50%);transform:translateY(50%)}.tooltipped-e:before{top:50%;right:-5px;bottom:50%;margin-top:-5px;border-right-color:rgba(27,31,35,.8)}.tooltipped-multiline:after{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate}.tooltipped-multiline.tooltipped-n:after,.tooltipped-multiline.tooltipped-s:after{right:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltipped-multiline.tooltipped-e:after,.tooltipped-multiline.tooltipped-w:after{right:100%}@media screen and (min-width:0\\0){.tooltipped-multiline:after{width:250px}}.tooltipped-sticky:after,.tooltipped-sticky:before{display:inline-block}.tooltipped-sticky.tooltipped-multiline:after{display:table-cell}@media only screen and (-moz-min-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){.tooltipped-w:after{margin-right:4.5px}}.nocursor{cursor:none}.disappearable{opacity:0;pointer-events:none;display:block;transition:opacity .2s}.disappearable.visible{opacity:1;pointer-events:auto}.disappearable.visible.disappear{transition:opacity 1s;opacity:0;pointer-events:none}#interface{position:absolute;width:100%;height:100%;left:0;top:0;transition-duration:1s;overflow:hidden}#interface .button{cursor:pointer;background-color:#222;border-radius:50%;width:60px;height:60px;transition:background-color .2s}#interface .button:before{letter-spacing:.1em}#interface .button:hover{background-color:rgba(34,34,34,.8)}#interface .button:hover:active{background-color:#222}#interface .button:not(.selected):hover{background-color:rgba(34,34,34,.8)}#interface .button:not(.selected):hover:active{background-color:#222}@media screen and (max-height:650px),screen and (max-width:750px){#interface .button{width:40px;height:40px}}#interface #hideable{transition:opacity 1s;position:absolute;width:100%;height:100%;left:0;top:0}#interface #dotSelection{position:absolute;top:10px;left:10px;display:block;height:76px;margin:8px}@media screen and (max-height:650px),screen and (max-width:750px){#interface #dotSelection{top:0;left:0}}#interface #dotSelection .dot{position:relative;display:inline-block;margin:8px}@media screen and (max-height:650px),screen and (max-width:750px){#interface #dotSelection .dot{margin:4px}}#interface #dotSelection .dot.selected:before{width:100%;height:100%;background-color:transparent;position:absolute;top:0;left:0;border:3px solid #888;box-sizing:border-box;content:" ";border-radius:50%}#interface #dotSelection .dot#light{background-image:url(' + i(80) + ")}#interface #dotSelection .dot#hammer{background-image:url(" + i(78) + ")}#interface #dotSelection .dot#wobble{background-image:url(" + i(81) + ")}#interface #dotSelection .dot#heat{background-image:url(" + i(79) + ")}#interface #dotSelection .dot#clock{background-image:url(" + i(77) + ")}#interface #tabs{position:absolute;top:10px;right:10px;height:60px;margin:8px;z-index:10}@media screen and (max-height:650px),screen and (max-width:750px){#interface #tabs{top:0;right:0}}body.mobile #interface #tabs #listen,body.mobile #interface #tabs #play{display:none}#interface #tabs.locked{pointer-events:none;opacity:.5}#interface #tabs .tab{position:relative;color:#ddd;margin:20px;display:inline-block;text-transform:uppercase;text-align:center;cursor:pointer;letter-spacing:.1em;padding-top:5px;transition:color .2s}#interface #tabs .tab.selected{border-bottom:1px solid #45b5a1;color:#45b5a1}#interface #tabs .tab:not(.selected):hover{color:#aaa}@media screen and (max-height:650px),screen and (max-width:750px){#interface #tabs .tab{margin:12px}}body.mobile #interface #tabs .tab#about{width:40px;height:40px;margin:4px;padding:0;border-radius:50%;background-color:#222;color:transparent;background-image:url(" + i(75) + ");background-size:100% 100%;background-position:50%;border:none}body.mobile #interface #tabs .tab#about.selected{background-image:url(" + i(72) + ');background-size:200% 200%;background-color:transparent}#interface #recordContainer{position:absolute;bottom:25px;width:180px;left:40px;height:70px;pointer-events:none}#interface #recordContainer .button{width:70px;height:70px}#interface #recordContainer .button.visible{opacity:1;pointer-events:auto}#interface #recordContainer #record{width:58px!important;height:58px!important;margin:7px;margin-top:-35px!important;position:absolute;background-color:#e83d53;left:0;transition:opacity .2s;opacity:0;pointer-events:none;display:block}#interface #recordContainer #record.visible{opacity:1;pointer-events:auto}#interface #recordContainer #record:before{top:80px;content:"RECORD"}#interface #recordContainer #record.recording:before{content:"STOP"}#interface #recordContainer #record div{pointer-events:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#interface #recordContainer #record #square{width:22px;height:22px;background-color:#fff;opacity:0}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:.5}to{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:.5}to{opacity:1}}#interface #recordContainer #record #ring{width:70px;height:70px;border:4px solid rgba(232,61,83,.5);border-radius:50%;transition:border-color .2s}#interface #recordContainer #record:not(.recording):hover #ring{border-color:hsla(0,0%,100%,.5)}#interface #recordContainer #record.recording #ring{-webkit-animation:pulse 1s infinite ease-in-out;animation:pulse 1s infinite ease-in-out}#interface #recordContainer #record.recording #square{opacity:1}#interface #recordContainer.noNotes #save{pointer-events:none!important;opacity:.5!important}#interface #recordContainer.loading #save{pointer-events:none!important}#interface #recordContainer.loading #save:before{content:"Saving"}#interface #recordContainer.loading #scrap{pointer-events:none!important;opacity:0!important}#interface #recordContainer #save{left:0;background-image:url(' + i(74) + ')}#interface #recordContainer #save:before{content:"Save it"}#interface #recordContainer #scrap{right:0;background-image:url(' + i(73) + ')}#interface #recordContainer #scrap:before{content:"Scrap it"}#interface #recordContainer #record,#interface #recordContainer #save,#interface #recordContainer #scrap{position:absolute;margin-top:-40px;width:70px;height:70px;transition:opacity .2s;opacity:0;pointer-events:none;display:block}#interface #recordContainer #record.visible,#interface #recordContainer #save.visible,#interface #recordContainer #scrap.visible{opacity:1;pointer-events:auto}#interface #recordContainer #record:before,#interface #recordContainer #save:before,#interface #recordContainer #scrap:before{text-transform:uppercase;position:absolute;bottom:-35px;width:100px;text-align:center;color:#ddd;font-size:16px;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#interface #listenContainer{position:absolute;bottom:25px;left:25px;width:100%;display:block}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer{left:5px;bottom:5px}}#interface #listenContainer .button{position:relative;display:inline-block;width:75px;height:75px;margin:8px;cursor:pointer;float:left}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer .button{width:40px;height:40px;margin:4px}}#interface #listenContainer.loading #play{pointer-events:none;opacity:.5}#interface #listenContainer #play:before{position:absolute;height:100%;width:100%;line-height:75px;text-align:center;color:#fff;content:" ";background-image:url(' + i(82) + ")}#interface #listenContainer #play.playing:before{position:absolute;width:25%;height:25%;background-color:#fff;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#interface #listenContainer #shuffle{background-image:url(" + i(83) + ")}#interface #listenContainer #shuffle.shuffle{background-image:url(" + i(84) + ')}#interface #listenContainer #shuffle.shuffle .spinner{stroke:#45b5a1}#interface #listenContainer #shuffle:before{opacity:0;transition:opacity .2s;position:absolute;top:-30px;left:50%;pointer-events:none;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:120px;text-align:center;color:#ddd;content:"SHUFFLE"}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #shuffle:before{font-size:.8em;top:-25px}}#interface #listenContainer #shuffle.shuffle:before{color:#45b5a1;content:"SHUFFLING"}#interface #listenContainer #shuffle:hover:before{opacity:1}#interface #listenContainer #songInfo{position:relative;margin-left:20px;height:75px;display:inline-block;font-size:.9em}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo{margin:4px;font-size:.7em;margin-left:8px;margin-top:4px;width:220px;clear:both;padding-top:1px;display:block}}#interface #listenContainer #songInfo div{position:relative;display:block;line-height:10px;color:#ddd}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo div{line-height:10px}}#interface #listenContainer #songInfo #dateLocation{margin-top:18px;font-size:1em;word-spacing:.3em;display:block}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #dateLocation{margin-top:5px;line-height:15px}}#interface #listenContainer #songInfo #dateLocation #location{text-transform:capitalize}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #dateLocation #location{display:block}}#interface #listenContainer #songInfo #dateLocation #location:before{text-transform:none;content:"in "}#interface #listenContainer #songInfo #dateLocation #location:not(.has):before{content:""}#interface #listenContainer #songInfo #link{margin-top:5px;position:relative;background-image:url(' + i(76) + ');background-size:30px 30px;background-position:0;padding-right:30px;margin-left:-5px;background-repeat:no-repeat}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #link{background-size:25px 25px;padding-right:25px;margin-top:0}}#interface #listenContainer #songInfo #link button{margin-left:30px;padding:0;font-size:.9em;padding-right:5px;-webkit-appearance:none;position:relative;height:30px;line-height:30px;background-color:transparent;border:none;color:#45b5a1;font-family:inherit;font-size:1em;cursor:pointer}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #link button{height:25px;line-height:25px}}#interface #listenContainer #songInfo #link button:focus{outline:0}#interface #listenContainer #songInfo #link button:after,#interface #listenContainer #songInfo #link button:before{font-family:inherit;color:#ddd;font-size:1em;border:none;background-color:transparent}#interface #listenContainer #songInfo #link button:after{padding-left:20px}#interface #listenContainer #songInfo #link button:before{margin-top:-15px;margin-right:18px;margin-left:10px;position:absolute;font-size:1.2em;right:-19px;content:"\\2190"}#interface #listenContainer #songInfo #duration{margin-top:5px;font-family:Roboto Mono,monospace;font-size:.9em;display:inline-block}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #duration{margin-top:0}}#interface #listenContainer #songInfo #skipContainer{margin-left:20px;padding-left:10px;width:80px;display:inline-block;position:relative;border-left:1px solid #aaa;height:11px}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #skipContainer{width:70px;height:10px}}#interface #listenContainer #songInfo #skipContainer #skip{margin-left:auto;margin-right:auto;color:#45b5a1;background-image:url(' + i(85) + ');background-position:0;background-size:40px 40px;padding-left:35px;background-repeat:no-repeat;cursor:pointer;display:inline-block;position:relative}#interface #listenContainer #songInfo #skipContainer #skip:before{content:"Skip"}#interface #listenContainer #songInfo #skipContainer #skip:active:before{content:"Skipping"}@media screen and (max-height:650px),screen and (max-width:750px){#interface #listenContainer #songInfo #skipContainer #skip{background-size:30px 30px;padding-left:25px}}#interface #instructions{position:absolute;right:40px;bottom:35px;height:20px;line-height:20px;text-align:right;width:500px;font-size:14px;color:#ddd;transition:opacity .5s}body.mobile #interface #instructions{display:none}#interface #midiNotification{position:absolute;left:20px;bottom:20px;color:#ddd;display:block}#interface #midiNotification #devices{position:relative;top:0;left:0;width:100%;height:100%;transition-duration:.5s;font-size:14px;display:inline-block;text-align:right}#interface #midiNotification #devices #label{margin-bottom:10px}#interface #midiNotification #devices .device{margin-top:5px;position:relative}#interface #aboutInfo{position:absolute;background-color:#000;width:100%;height:100%;left:0;top:0}#interface #aboutInfo #aboutContent{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;max-width:450px;color:#ddd;max-height:80%;overflow-y:auto}#interface #aboutInfo #aboutContent div{margin-bottom:20px;line-height:22px;font-size:14px}#interface #aboutInfo #aboutContent #note{display:none}body.mobile #interface #aboutInfo #aboutContent #note{display:block}#interface #aboutInfo #aboutContent a{color:#45b5a1;text-decoration:none}', ""])
}
, function(t, e, i) {
    e = t.exports = i(9)(),
    e.push([t.i, "#loader{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;max-width:300px;height:5px;background-color:#444;transition:opacity .2s;opacity:0;pointer-events:none;display:block}#loader.visible{opacity:1;pointer-events:auto}#loader #fill{transition:color .1s;width:0;height:100%;position:absolute;left:0;top:0;background-color:#ddd;transition:width .05s}#loader #title{position:absolute;top:-50px;left:0;width:100%;color:#ddd;font-size:20px;text-align:center;letter-spacing:.1em;text-transform:uppercase}", ""])
}
, function(t, e, i) {
    e = t.exports = i(9)(),
    e.push([t.i, "body{width:100%;height:100%;top:0;margin:0;background-color:#000;font-family:Montserrat,sans-serif;overflow:hidden}body,body canvas{position:absolute;left:0}body canvas{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body canvas.clock{left:50%;top:50%;max-width:700px;max-height:700px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body #loading{position:absolute;top:20px;left:20px;font-size:20px;color:#fff;z-index:10}", ""])
}
, function(t, e) {
    function i(t, e) {
        for (; t && t.nodeType !== n; ) {
            if ("function" == typeof t.matches && t.matches(e))
                return t;
            t = t.parentNode
        }
    }
    var n = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    t.exports = i
}
, function(t, e, i) {
    function n(t, e, i, n, r) {
        var s = o.apply(this, arguments);
        return t.addEventListener(i, s, r),
        {
            destroy: function() {
                t.removeEventListener(i, s, r)
            }
        }
    }
    function o(t, e, i, n) {
        return function(i) {
            i.delegateTarget = r(i.target, e),
            i.delegateTarget && n.call(t, i)
        }
    }
    var r = i(51);
    t.exports = n
}
, function(t, e) {
    e.node = function(t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
    }
    ,
    e.nodeList = function(t) {
        var i = Object.prototype.toString.call(t);
        return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length"in t && (0 === t.length || e.node(t[0]))
    }
    ,
    e.string = function(t) {
        return "string" == typeof t || t instanceof String
    }
    ,
    e.fn = function(t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }
}
, function(t, e, i) {
    function n(t, e, i) {
        if (!t && !e && !i)
            throw new Error("Missing required arguments");
        if (!a.string(e))
            throw new TypeError("Second argument must be a String");
        if (!a.fn(i))
            throw new TypeError("Third argument must be a Function");
        if (a.node(t))
            return o(t, e, i);
        if (a.nodeList(t))
            return r(t, e, i);
        if (a.string(t))
            return s(t, e, i);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }
    function o(t, e, i) {
        return t.addEventListener(e, i),
        {
            destroy: function() {
                t.removeEventListener(e, i)
            }
        }
    }
    function r(t, e, i) {
        return Array.prototype.forEach.call(t, function(t) {
            t.addEventListener(e, i)
        }),
        {
            destroy: function() {
                Array.prototype.forEach.call(t, function(t) {
                    t.removeEventListener(e, i)
                })
            }
        }
    }
    function s(t, e, i) {
        return u(document.body, t, e, i)
    }
    var a = i(53)
      , u = i(52);
    t.exports = n
}
, function(t, e, i) {
    var n, o, r;
    !function(i, s) {
        o = [t, e],
        n = s,
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r)
    }(0, function(t, e) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , o = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1]
                  , o = arguments.length <= 2 || void 0 === arguments[2] ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" : arguments[2];
                i(this, t);
                var r = "error: alphabet must contain at least X unique characters"
                  , s = ""
                  , a = void 0
                  , u = void 0;
                this.escapeRegExp = function(t) {
                    return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                }
                ,
                this.parseInt = function(t, e) {
                    return /^(\-|\+)?([0-9]+|Infinity)$/.test(t) ? parseInt(t, e) : NaN
                }
                ,
                this.seps = "cfhistuCFHISTU",
                this.minLength = parseInt(n, 10) > 0 ? n : 0,
                this.salt = "string" == typeof e ? e : "",
                "string" == typeof o && (this.alphabet = o);
                for (var l = 0; l !== this.alphabet.length; l++)
                    -1 === s.indexOf(this.alphabet.charAt(l)) && (s += this.alphabet.charAt(l));
                if (this.alphabet = s,
                this.alphabet.length < 16)
                    throw r.replace("X", 16);
                if (-1 !== this.alphabet.search(" "))
                    throw "error: alphabet cannot contain spaces";
                for (var c = 0; c !== this.seps.length; c++) {
                    var h = this.alphabet.indexOf(this.seps.charAt(c));
                    -1 === h ? this.seps = this.seps.substr(0, c) + " " + this.seps.substr(c + 1) : this.alphabet = this.alphabet.substr(0, h) + " " + this.alphabet.substr(h + 1)
                }
                this.alphabet = this.alphabet.replace(/ /g, ""),
                this.seps = this.seps.replace(/ /g, ""),
                this.seps = this._shuffle(this.seps, this.salt),
                (!this.seps.length || this.alphabet.length / this.seps.length > 3.5) && (a = Math.ceil(this.alphabet.length / 3.5)) > this.seps.length && (u = a - this.seps.length,
                this.seps += this.alphabet.substr(0, u),
                this.alphabet = this.alphabet.substr(u)),
                this.alphabet = this._shuffle(this.alphabet, this.salt);
                var p = Math.ceil(this.alphabet.length / 12);
                this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, p),
                this.seps = this.seps.substr(p)) : (this.guards = this.alphabet.substr(0, p),
                this.alphabet = this.alphabet.substr(p))
            }
            return n(t, [{
                key: "encode",
                value: function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    if (!e.length)
                        return "";
                    if (e[0] && e[0].constructor === Array && (e = e[0],
                    !e.length))
                        return "";
                    for (var n = 0; n !== e.length; n++)
                        if (e[n] = this.parseInt(e[n], 10),
                        !(e[n] >= 0))
                            return "";
                    return this._encode(e)
                }
            }, {
                key: "decode",
                value: function(t) {
                    var e = [];
                    return t && t.length && "string" == typeof t ? this._decode(t, this.alphabet) : e
                }
            }, {
                key: "encodeHex",
                value: function(t) {
                    if (t = t.toString(),
                    !/^[0-9a-fA-F]+$/.test(t))
                        return "";
                    for (var e = t.match(/[\w\W]{1,12}/g), i = 0; i !== e.length; i++)
                        e[i] = parseInt("1" + e[i], 16);
                    return this.encode.apply(this, e)
                }
            }, {
                key: "decodeHex",
                value: function(t) {
                    for (var e = [], i = this.decode(t), n = 0; n !== i.length; n++)
                        e += i[n].toString(16).substr(1);
                    return e
                }
            }, {
                key: "_encode",
                value: function(t) {
                    for (var e = void 0, i = this.alphabet, n = 0, o = 0; o !== t.length; o++)
                        n += t[o] % (o + 100);
                    e = i.charAt(n % i.length);
                    for (var r = e, s = 0; s !== t.length; s++) {
                        var a = t[s]
                          , u = r + this.salt + i;
                        i = this._shuffle(i, u.substr(0, i.length));
                        var l = this._toAlphabet(a, i);
                        if (e += l,
                        s + 1 < t.length) {
                            a %= l.charCodeAt(0) + s;
                            var c = a % this.seps.length;
                            e += this.seps.charAt(c)
                        }
                    }
                    if (e.length < this.minLength) {
                        var h = (n + e[0].charCodeAt(0)) % this.guards.length
                          , p = this.guards[h];
                        e = p + e,
                        e.length < this.minLength && (h = (n + e[2].charCodeAt(0)) % this.guards.length,
                        p = this.guards[h],
                        e += p)
                    }
                    for (var f = parseInt(i.length / 2, 10); e.length < this.minLength; ) {
                        i = this._shuffle(i, i),
                        e = i.substr(f) + e + i.substr(0, f);
                        var d = e.length - this.minLength;
                        d > 0 && (e = e.substr(d / 2, this.minLength))
                    }
                    return e
                }
            }, {
                key: "_decode",
                value: function(t, e) {
                    var i = []
                      , n = 0
                      , o = new RegExp("[" + this.escapeRegExp(this.guards) + "]","g")
                      , r = t.replace(o, " ")
                      , s = r.split(" ");
                    if (3 !== s.length && 2 !== s.length || (n = 1),
                    r = s[n],
                    void 0 !== r[0]) {
                        var a = r[0];
                        r = r.substr(1),
                        o = new RegExp("[" + this.escapeRegExp(this.seps) + "]","g"),
                        r = r.replace(o, " "),
                        s = r.split(" ");
                        for (var u = 0; u !== s.length; u++) {
                            var l = s[u]
                              , c = a + this.salt + e;
                            e = this._shuffle(e, c.substr(0, e.length)),
                            i.push(this._fromAlphabet(l, e))
                        }
                        this._encode(i) !== t && (i = [])
                    }
                    return i
                }
            }, {
                key: "_shuffle",
                value: function(t, e) {
                    var i = void 0;
                    if (!e.length)
                        return t;
                    for (var n = t.length - 1, o = 0, r = 0, s = 0; n > 0; n--,
                    o++) {
                        o %= e.length,
                        r += i = e.charAt(o).charCodeAt(0),
                        s = (i + o + r) % n;
                        var a = t[s];
                        t = t.substr(0, s) + t.charAt(n) + t.substr(s + 1),
                        t = t.substr(0, n) + a + t.substr(n + 1)
                    }
                    return t
                }
            }, {
                key: "_toAlphabet",
                value: function(t, e) {
                    var i = "";
                    do {
                        i = e.charAt(t % e.length) + i,
                        t = parseInt(t / e.length, 10)
                    } while (t);
                    return i
                }
            }, {
                key: "_fromAlphabet",
                value: function(t, e) {
                    for (var i = 0, n = 0; n < t.length; n++) {
                        i += e.indexOf(t[n]) * Math.pow(e.length, t.length - n - 1)
                    }
                    return i
                }
            }]),
            t
        }();
        e.default = o,
        t.exports = e.default
    })
}
, function(t, e) {
    t.exports = "<div id=aboutContent> <div> Dot Piano is a visual musical instrument that lives on the web. Use your computer keys or MIDI keyboard to record a song, then share it simply by sending a link. </div> <div> Made by <a href=http://chenalexander.com/ target=_blank>Alex Chen</a> and <a href=https://yotammann.info target=_blank>Yotam Mann</a>. A physical version of this project currently lives at the Cooper Hewitt Design Museum in New York. </div> <div id=note> Note: in order to play and record, you need to visit dotpiano.com on a desktop computer. </div> <div> Piano samples from <a href=https://archive.org/details/SalamanderGrandPianoV3 target=_blank>Salamander Grand Piano</a> (<a href=https://creativecommons.org/licenses/by/3.0/ >CC BY 3.0</a>). </div> </div> "
}
, function(t, e, i) {
    var n, o, r;
    /**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
    !function(i) {
        var s = /iPhone/i
          , a = /iPod/i
          , u = /iPad/i
          , l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i
          , c = /Android/i
          , h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i
          , p = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i
          , f = /Windows Phone/i
          , d = /(?=.*\bWindows\b)(?=.*\bARM\b)/i
          , y = /BlackBerry/i
          , _ = /BB10/i
          , m = /Opera Mini/i
          , v = /(CriOS|Chrome)(?=.*\bMobile\b)/i
          , g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i
          , b = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i")
          , w = function(t, e) {
            return t.test(e)
        }
          , T = function(t) {
            var e = t || navigator.userAgent
              , i = e.split("[FBAN");
            if (void 0 !== i[1] && (e = i[0]),
            i = e.split("Twitter"),
            void 0 !== i[1] && (e = i[0]),
            this.apple = {
                phone: w(s, e),
                ipod: w(a, e),
                tablet: !w(s, e) && w(u, e),
                device: w(s, e) || w(a, e) || w(u, e)
            },
            this.amazon = {
                phone: w(h, e),
                tablet: !w(h, e) && w(p, e),
                device: w(h, e) || w(p, e)
            },
            this.android = {
                phone: w(h, e) || w(l, e),
                tablet: !w(h, e) && !w(l, e) && (w(p, e) || w(c, e)),
                device: w(h, e) || w(p, e) || w(l, e) || w(c, e)
            },
            this.windows = {
                phone: w(f, e),
                tablet: w(d, e),
                device: w(f, e) || w(d, e)
            },
            this.other = {
                blackberry: w(y, e),
                blackberry10: w(_, e),
                opera: w(m, e),
                firefox: w(g, e),
                chrome: w(v, e),
                device: w(y, e) || w(_, e) || w(m, e) || w(g, e) || w(v, e)
            },
            this.seven_inch = w(b, e),
            this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch,
            this.phone = this.apple.phone || this.android.phone || this.windows.phone,
            this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
            "undefined" == typeof window)
                return this
        }
          , S = function() {
            var t = new T;
            return t.Class = T,
            t
        };
        void 0 !== t && t.exports && "undefined" == typeof window ? t.exports = T : void 0 !== t && t.exports && "undefined" != typeof window ? t.exports = S() : (o = [],
        n = i.isMobile = S(),
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r))
    }(this)
}
, function(t, e) {
    function i(t) {
        var e = new r(t)
          , i = e.readChunk();
        if ("MThd" != i.id)
            throw "Bad MIDI file.  Expected 'MHdr', got: '" + i.id + "'";
        for (var s = n(i.data), a = [], u = 0; !e.eof() && u < s.numTracks; u++) {
            var l = e.readChunk();
            if ("MTrk" != l.id)
                throw "Bad MIDI file.  Expected 'MTrk', got: '" + l.id + "'";
            var c = o(l.data);
            a.push(c)
        }
        return {
            header: s,
            tracks: a
        }
    }
    function n(t) {
        var e = new r(t)
          , i = e.readUInt16()
          , n = e.readUInt16()
          , o = {
            format: i,
            numTracks: n
        }
          , s = e.readUInt16();
        return 32768 & s ? (o.framesPerSecond = 256 - (s >> 8),
        o.ticksPerFrame = 255 & s) : o.ticksPerBeat = s,
        o
    }
    function o(t) {
        for (var e = new r(t), i = []; !e.eof(); ) {
            var n = function() {
                var t = {};
                t.deltaTime = e.readVarInt();
                var i = e.readUInt8();
                if (240 == (240 & i)) {
                    if (255 !== i) {
                        if (240 == i) {
                            t.type = "sysEx";
                            var n = e.readVarInt();
                            return t.data = e.readBytes(n),
                            t
                        }
                        if (247 == i) {
                            t.type = "endSysEx";
                            var n = e.readVarInt();
                            return t.data = e.readBytes(n),
                            t
                        }
                        throw "Unrecognised MIDI event type byte: " + i
                    }
                    t.meta = !0;
                    var r = e.readUInt8()
                      , n = e.readVarInt();
                    switch (r) {
                    case 0:
                        if (t.type = "sequenceNumber",
                        2 !== n)
                            throw "Expected length for sequenceNumber event is 2, got " + n;
                        return t.number = stream.readUInt16(),
                        t;
                    case 1:
                        return t.type = "text",
                        t.text = e.readString(n),
                        t;
                    case 2:
                        return t.type = "copyrightNotice",
                        t.text = e.readString(n),
                        t;
                    case 3:
                        return t.type = "trackName",
                        t.text = e.readString(n),
                        t;
                    case 4:
                        return t.type = "instrumentName",
                        t.text = e.readString(n),
                        t;
                    case 5:
                        return t.type = "lyrics",
                        t.text = e.readString(n),
                        t;
                    case 6:
                        return t.type = "marker",
                        t.text = e.readString(n),
                        t;
                    case 7:
                        return t.type = "cuePoint",
                        t.text = e.readString(n),
                        t;
                    case 32:
                        if (t.type = "channelPrefix",
                        1 != n)
                            throw "Expected length for channelPrefix event is 1, got " + n;
                        return t.channel = e.readUInt8(),
                        t;
                    case 33:
                        if (t.type = "portPrefix",
                        1 != n)
                            throw "Expected length for portPrefix event is 1, got " + n;
                        return t.port = e.readUInt8(),
                        t;
                    case 47:
                        if (t.type = "endOfTrack",
                        0 != n)
                            throw "Expected length for endOfTrack event is 0, got " + n;
                        return t;
                    case 81:
                        if (t.type = "setTempo",
                        3 != n)
                            throw "Expected length for setTempo event is 3, got " + n;
                        return t.microsecondsPerBeat = e.readUInt24(),
                        t;
                    case 84:
                        if (t.type = "smpteOffset",
                        5 != n)
                            throw "Expected length for smpteOffset event is 5, got " + n;
                        var s = e.readUInt8()
                          , a = {
                            0: 24,
                            32: 25,
                            64: 29,
                            96: 30
                        };
                        return t.frameRate = a[96 & s],
                        t.hour = 31 & s,
                        t.min = e.readUInt8(),
                        t.sec = e.readUInt8(),
                        t.frame = e.readUInt8(),
                        t.subFrame = e.readUInt8(),
                        t;
                    case 88:
                        if (t.type = "timeSignature",
                        4 != n)
                            throw "Expected length for timeSignature event is 4, got " + n;
                        return t.numerator = e.readUInt8(),
                        t.denominator = 1 << e.readUInt8(),
                        t.metronome = e.readUInt8(),
                        t.thirtyseconds = e.readUInt8(),
                        t;
                    case 89:
                        if (t.type = "keySignature",
                        2 != n)
                            throw "Expected length for keySignature event is 2, got " + n;
                        return t.key = e.readInt8(),
                        t.scale = e.readUInt8(),
                        t;
                    case 127:
                        return t.type = "sequencerSpecific",
                        t.data = e.readBytes(n),
                        t;
                    default:
                        return t.type = "unknownMeta",
                        t.data = e.readBytes(n),
                        t.metatypeByte = r,
                        t
                    }
                } else {
                    var u;
                    if (0 == (128 & i)) {
                        if (null === o)
                            throw "Running status byte encountered before status byte";
                        u = i,
                        i = o,
                        t.running = !0
                    } else
                        u = e.readUInt8(),
                        o = i;
                    var l = i >> 4;
                    switch (t.channel = 15 & i,
                    l) {
                    case 8:
                        return t.type = "noteOff",
                        t.noteNumber = u,
                        t.velocity = e.readUInt8(),
                        t;
                    case 9:
                        var c = e.readUInt8();
                        return t.type = 0 === c ? "noteOff" : "noteOn",
                        t.noteNumber = u,
                        t.velocity = c,
                        t;
                    case 10:
                        return t.type = "noteAftertouch",
                        t.noteNumber = u,
                        t.amount = e.readUInt8(),
                        t;
                    case 11:
                        return t.type = "controller",
                        t.controllerType = u,
                        t.value = e.readUInt8(),
                        t;
                    case 12:
                        return t.type = "programChange",
                        t.programNumber = u,
                        t;
                    case 13:
                        return t.type = "channelAftertouch",
                        t.amount = u,
                        t;
                    case 14:
                        return t.type = "pitchBend",
                        t.value = u + (e.readUInt8() << 7) - 8192,
                        t;
                    default:
                        throw "Unrecognised MIDI event type: " + l
                    }
                }
            }();
            i.push(n)
        }
        return i;
        var o
    }
    function r(t) {
        this.buffer = t,
        this.bufferLen = this.buffer.length,
        this.pos = 0
    }
    r.prototype.eof = function() {
        return this.pos >= this.bufferLen
    }
    ,
    r.prototype.readUInt8 = function() {
        var t = this.buffer[this.pos];
        return this.pos += 1,
        t
    }
    ,
    r.prototype.readInt8 = function() {
        var t = this.readUInt8();
        return 128 & t ? t - 256 : t
    }
    ,
    r.prototype.readUInt16 = function() {
        return (this.readUInt8() << 8) + this.readUInt8()
    }
    ,
    r.prototype.readInt16 = function() {
        var t = this.readUInt16();
        return 32768 & t ? t - 65536 : t
    }
    ,
    r.prototype.readUInt24 = function() {
        return (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
    }
    ,
    r.prototype.readInt24 = function() {
        var t = this.readUInt24();
        return 8388608 & t ? t - 16777216 : t
    }
    ,
    r.prototype.readUInt32 = function() {
        return (this.readUInt8() << 24) + (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
    }
    ,
    r.prototype.readBytes = function(t) {
        var e = this.buffer.slice(this.pos, this.pos + t);
        return this.pos += t,
        e
    }
    ,
    r.prototype.readString = function(t) {
        var e = this.readBytes(t);
        return String.fromCharCode.apply(null, e)
    }
    ,
    r.prototype.readVarInt = function() {
        for (var t = 0; !this.eof(); ) {
            var e = this.readUInt8();
            if (!(128 & e))
                return t + e;
            t += 127 & e,
            t <<= 7
        }
        return t
    }
    ,
    r.prototype.readChunk = function() {
        var t = this.readString(4)
          , e = this.readUInt32();
        return {
            id: t,
            length: e,
            data: this.readBytes(e)
        }
    }
    ,
    t.exports = i
}
, function(t, e) {
    function i(t) {
        if ("object" != typeof t)
            throw "Invalid MIDI data";
        var e, i = t.header || {}, r = t.tracks || [], a = r.length, u = new s;
        for (n(u, i, a),
        e = 0; e < a; e++)
            o(u, r[e]);
        return u.buffer
    }
    function n(t, e, i) {
        var n = null == e.format ? 1 : e.format
          , o = 128;
        e.timeDivision ? o = e.timeDivision : e.ticksPerFrame && e.framesPerSecond ? o = -(255 & e.framesPerSecond) << 8 | 255 & ticksPerFrame : e.ticksPerBeat && (o = 32767 & e.ticksPerBeat);
        var r = new s;
        r.writeUInt16(n),
        r.writeUInt16(i),
        r.writeUInt16(o),
        t.writeChunk("MThd", r.buffer)
    }
    function o(t, e) {
        var i, n = new s, o = e.length;
        for (i = 0; i < o; i++)
            r(n, e[i]);
        t.writeChunk("MTrk", n.buffer)
    }
    function r(t, e) {
        var i = e.type
          , n = e.deltaTime
          , o = e.text || ""
          , r = e.data || [];
        switch (t.writeVarInt(n),
        i) {
        case "sequenceNumber":
            t.writeUInt8(255),
            t.writeUInt8(0),
            t.writeVarInt(2),
            t.writeUInt16(e.number);
            break;
        case "text":
            t.writeUInt8(255),
            t.writeUInt8(1),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "copyrightNotice":
            t.writeUInt8(255),
            t.writeUInt8(2),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "trackName":
            t.writeUInt8(255),
            t.writeUInt8(3),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "instrumentName":
            t.writeUInt8(255),
            t.writeUInt8(4),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "lyrics":
            t.writeUInt8(255),
            t.writeUInt8(5),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "marker":
            t.writeUInt8(255),
            t.writeUInt8(6),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "cuePoint":
            t.writeUInt8(255),
            t.writeUInt8(7),
            t.writeVarInt(o.length),
            t.writeString(o);
            break;
        case "channelPrefix":
            t.writeUInt8(255),
            t.writeUInt8(32),
            t.writeVarInt(1),
            t.writeUInt8(e.channel);
            break;
        case "portPrefix":
            t.writeUInt8(255),
            t.writeUInt8(33),
            t.writeVarInt(1),
            t.writeUInt8(e.port);
            break;
        case "endOfTrack":
            t.writeUInt8(255),
            t.writeUInt8(47),
            t.writeVarInt(0);
            break;
        case "setTempo":
            t.writeUInt8(255),
            t.writeUInt8(81),
            t.writeVarInt(3),
            t.writeUInt24(e.microsecondsPerBeat);
            break;
        case "smpteOffset":
            t.writeUInt8(255),
            t.writeUInt8(84),
            t.writeVarInt(5);
            var s = 31 & e.hour | FRAME_RATES[e.frameRate];
            t.writeUInt8(s),
            t.writeUInt8(e.min),
            t.writeUInt8(e.sec),
            t.writeUInt8(e.frame),
            t.writeUInt8(e.subFrame);
            break;
        case "timeSignature":
            t.writeUInt8(255),
            t.writeUInt8(88),
            t.writeVarInt(4);
            var a = 255 & Math.floor(Math.log(e.denominator) / Math.LN2);
            t.writeUInt8(a),
            t.writeUInt8(e.numerator),
            t.writeUInt8(e.metronome),
            t.writeUInt8(e.thirtyseconds || 8);
            break;
        case "keySignature":
            t.writeUInt8(255),
            t.writeUInt8(89),
            t.writeVarInt(2),
            t.writeInt8(e.key),
            t.writeUInt8(e.scale);
            break;
        case "sequencerSpecific":
            t.writeUInt8(255),
            t.writeUInt8(127),
            t.writeVarInt(r.length),
            t.writeBytes(r);
            break;
        case "unknownMeta":
            null != e.metatypeByte && (t.writeUInt8(255),
            t.writeUInt8(e.metatypeByte),
            t.writeVarInt(r.length),
            t.writeBytes(r));
            break;
        case "sysEx":
            t.writeUInt8(240),
            t.writeVarInt(r.length),
            t.writeBytes(r);
            break;
        case "endSysEx":
            t.writeUInt8(247),
            t.writeVarInt(r.length),
            t.writeBytes(r);
            break;
        case "noteOff":
            var u = 0 == e.velocity ? 144 : 128;
            t.writeUInt8(u | e.channel),
            t.writeUInt8(e.noteNumber),
            t.writeUInt8(e.velocity);
            break;
        case "noteOn":
            t.writeUInt8(144 | e.channel),
            t.writeUInt8(e.noteNumber),
            t.writeUInt8(e.velocity);
            break;
        case "noteAftertouch":
            t.writeUInt8(160 | e.channel),
            t.writeUInt8(e.noteNumber),
            t.writeUInt8(e.amount);
            break;
        case "controller":
            t.writeUInt8(176 | e.channel),
            t.writeUInt8(e.controllerType),
            t.writeUInt8(e.value);
            break;
        case "programChange":
            t.writeUInt8(192 | e.channel),
            t.writeUInt8(e.programNumber);
            break;
        case "channelAftertouch":
            t.writeUInt8(208 | e.channel),
            t.writeUInt8(e.amount);
            break;
        case "pitchBend":
            t.writeUInt8(224 | e.channel);
            var l = 8192 + e.value
              , c = 127 & l
              , h = l >> 7 & 127;
            t.writeUInt8(c),
            t.writeUInt8(h);
            break;
        default:
            throw "Unrecognized event type: " + i
        }
    }
    function s() {
        this.buffer = []
    }
    s.prototype.writeUInt8 = function(t) {
        this.buffer.push(255 & t)
    }
    ,
    s.prototype.writeInt8 = s.prototype.writeUInt8,
    s.prototype.writeUInt16 = function(t) {
        var e = t >> 8 & 255
          , i = 255 & t;
        this.writeUInt8(e),
        this.writeUInt8(i)
    }
    ,
    s.prototype.writeInt16 = s.prototype.writeUInt16,
    s.prototype.writeUInt24 = function(t) {
        var e = t >> 16 & 255
          , i = t >> 8 & 255
          , n = 255 & t;
        this.writeUInt8(e),
        this.writeUInt8(i),
        this.writeUInt8(n)
    }
    ,
    s.prototype.writeInt24 = s.prototype.writeUInt24,
    s.prototype.writeUInt32 = function(t) {
        var e = t >> 24 & 255
          , i = t >> 16 & 255
          , n = t >> 8 & 255
          , o = 255 & t;
        this.writeUInt8(e),
        this.writeUInt8(i),
        this.writeUInt8(n),
        this.writeUInt8(o)
    }
    ,
    s.prototype.writeInt32 = s.prototype.writeUInt32,
    s.prototype.writeBytes = function(t) {
        this.buffer = this.buffer.concat(t)
    }
    ,
    s.prototype.writeString = function(t) {
        var e, i = t.length, n = [];
        for (e = 0; e < i; e++)
            n.push(t.codePointAt(e));
        this.writeBytes(n)
    }
    ,
    s.prototype.writeVarInt = function(t) {
        if (t < 0)
            throw "Cannot write negative variable-length integer";
        if (t <= 127)
            this.writeUInt8(t);
        else {
            for (var e = t, i = []; ; ) {
                if (e <= 127) {
                    i.push(128 | e);
                    break
                }
                var n = 127 & e;
                e >>= 7,
                i.push(n)
            }
            this.writeBytes(i.reverse())
        }
    }
    ,
    s.prototype.writeChunk = function(t, e) {
        this.writeString(t),
        this.writeUInt32(e.length),
        this.writeBytes(e)
    }
    ,
    t.exports = i
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i) {
        if (null == t || null == e)
            return t;
        var n = String(t)
          , o = "number" == typeof e ? e : parseInt(e, 10);
        if (isNaN(o) || !isFinite(o))
            return n;
        var r = n.length;
        if (r >= o)
            return n;
        var s = null == i ? "" : String(i);
        "" === s && (s = " ");
        for (var a = o - r; s.length < a; )
            s += s;
        return (s.length > a ? s.substr(0, a) : s) + n
    }
}
, function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function n() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(t) {
        if (c === setTimeout)
            return setTimeout(t, 0);
        if ((c === i || !c) && setTimeout)
            return c = setTimeout,
            setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }
    function r(t) {
        if (h === clearTimeout)
            return clearTimeout(t);
        if ((h === n || !h) && clearTimeout)
            return h = clearTimeout,
            clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }
    function s() {
        y && f && (y = !1,
        f.length ? d = f.concat(d) : _ = -1,
        d.length && a())
    }
    function a() {
        if (!y) {
            var t = o(s);
            y = !0;
            for (var e = d.length; e; ) {
                for (f = d,
                d = []; ++_ < e; )
                    f && f[_].run();
                _ = -1,
                e = d.length
            }
            f = null,
            y = !1,
            r(t)
        }
    }
    function u(t, e) {
        this.fun = t,
        this.array = e
    }
    function l() {}
    var c, h, p = t.exports = {};
    !function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            c = i
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            h = n
        }
    }();
    var f, d = [], y = !1, _ = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
        d.push(new u(t,e)),
        1 !== d.length || y || o(a)
    }
    ,
    u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = l,
    p.addListener = l,
    p.once = l,
    p.off = l,
    p.removeListener = l,
    p.removeAllListeners = l,
    p.emit = l,
    p.prependListener = l,
    p.prependOnceListener = l,
    p.listeners = function(t) {
        return []
    }
    ,
    p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    p.cwd = function() {
        return "/"
    }
    ,
    p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    p.umask = function() {
        return 0
    }
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, i, r) {
        e = e || "&",
        i = i || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length)
            return s;
        var a = /\+/g;
        t = t.split(e);
        var u = 1e3;
        r && "number" == typeof r.maxKeys && (u = r.maxKeys);
        var l = t.length;
        u > 0 && l > u && (l = u);
        for (var c = 0; c < l; ++c) {
            var h, p, f, d, y = t[c].replace(a, "%20"), _ = y.indexOf(i);
            _ >= 0 ? (h = y.substr(0, _),
            p = y.substr(_ + 1)) : (h = y,
            p = ""),
            f = decodeURIComponent(h),
            d = decodeURIComponent(p),
            n(s, f) ? o(s[f]) ? s[f].push(d) : s[f] = [s[f], d] : s[f] = d
        }
        return s
    }
    ;
    var o = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (t.map)
            return t.map(e);
        for (var i = [], n = 0; n < t.length; n++)
            i.push(e(t[n], n));
        return i
    }
    var o = function(t) {
        switch (typeof t) {
        case "string":
            return t;
        case "boolean":
            return t ? "true" : "false";
        case "number":
            return isFinite(t) ? t : "";
        default:
            return ""
        }
    };
    t.exports = function(t, e, i, a) {
        return e = e || "&",
        i = i || "=",
        null === t && (t = void 0),
        "object" == typeof t ? n(s(t), function(s) {
            var a = encodeURIComponent(o(s)) + i;
            return r(t[s]) ? n(t[s], function(t) {
                return a + encodeURIComponent(o(t))
            }).join(e) : a + encodeURIComponent(o(t[s]))
        }).join(e) : a ? encodeURIComponent(o(a)) + i + encodeURIComponent(o(t)) : ""
    }
    ;
    var r = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , s = Object.keys || function(t) {
        var e = [];
        for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
        return e
    }
}
, function(t, e, i) {
    "use strict";
    e.decode = e.parse = i(62),
    e.encode = e.stringify = i(63)
}
, function(t, e) {
    function i(t) {
        var e;
        if ("SELECT" === t.nodeName)
            t.focus(),
            e = t.value;
        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
            var i = t.hasAttribute("readonly");
            i || t.setAttribute("readonly", ""),
            t.select(),
            t.setSelectionRange(0, t.value.length),
            i || t.removeAttribute("readonly"),
            e = t.value
        } else {
            t.hasAttribute("contenteditable") && t.focus();
            var n = window.getSelection()
              , o = document.createRange();
            o.selectNodeContents(t),
            n.removeAllRanges(),
            n.addRange(o),
            e = n.toString()
        }
        return e
    }
    t.exports = i
}
, function(t, e, i) {
    var n, o, r;
    /**
 *  StartAudioContext.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2016 Yotam Mann
 */
    !function(i, s) {
        o = [],
        n = s,
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r)
    }(0, function() {
        function t(t) {
            var e = t.createBuffer(1, 1, t.sampleRate)
              , i = t.createBufferSource();
            i.buffer = e,
            i.connect(t.destination),
            i.start(0),
            t.resume && t.resume()
        }
        function e(t) {
            return "running" === t.state
        }
        function i(t, i) {
            function n() {
                e(t) ? i() : (requestAnimationFrame(n),
                t.resume && t.resume())
            }
            e(t) ? i() : n()
        }
        function n(t, e, i) {
            if (Array.isArray(t) || NodeList && t instanceof NodeList)
                for (var o = 0; o < t.length; o++)
                    n(t[o], e, i);
            else if ("string" == typeof t)
                n(document.querySelectorAll(t), e, i);
            else if (t.jquery && "function" == typeof t.toArray)
                n(t.toArray(), e, i);
            else if (Element && t instanceof Element) {
                var s = new r(t,i);
                e.push(s)
            }
        }
        function o(t, e, o) {
            var r = new Promise(function(e) {
                i(t, e)
            }
            )
              , s = [];
            return e || (e = document.body),
            n(e, s, t),
            r.then(function() {
                for (var t = 0; t < s.length; t++)
                    s[t].dispose();
                s = null,
                o && o()
            }),
            r
        }
        var r = function(t, e) {
            this._dragged = !1,
            this._element = t,
            this._bindedMove = this._moved.bind(this),
            this._bindedEnd = this._ended.bind(this, e),
            t.addEventListener("touchstart", this._bindedEnd),
            t.addEventListener("touchmove", this._bindedMove),
            t.addEventListener("touchend", this._bindedEnd),
            t.addEventListener("mouseup", this._bindedEnd)
        };
        return r.prototype._moved = function(t) {
            this._dragged = !0
        }
        ,
        r.prototype._ended = function(e) {
            this._dragged || t(e),
            this._dragged = !1
        }
        ,
        r.prototype.dispose = function() {
            this._element.removeEventListener("touchstart", this._bindedEnd),
            this._element.removeEventListener("touchmove", this._bindedMove),
            this._element.removeEventListener("touchend", this._bindedEnd),
            this._element.removeEventListener("mouseup", this._bindedEnd),
            this._bindedMove = null,
            this._bindedEnd = null,
            this._element = null
        }
        ,
        o
    })
}
, function(t, e, i) {
    var n = i(48);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    i(10)(n, {});
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    var n = i(49);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    i(10)(n, {});
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    var n = i(50);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    i(10)(n, {});
    n.locals && (t.exports = n.locals)
}
, function(t, e) {
    function i() {}
    i.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            function n() {
                o.off(t, n),
                e.apply(i, arguments)
            }
            var o = this;
            return n._ = e,
            this.on(t, n, i)
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1)
              , i = ((this.e || (this.e = {}))[t] || []).slice()
              , n = 0
              , o = i.length;
            for (n; n < o; n++)
                i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , n = i[t]
              , o = [];
            if (n && e)
                for (var r = 0, s = n.length; r < s; r++)
                    n[r].fn !== e && n[r].fn._ !== e && o.push(n[r]);
            return o.length ? i[t] = o : delete i[t],
            this
        }
    },
    t.exports = i
}
, function(t, e, i) {
    !function(e, n) {
        t.exports = n(i(2))
    }(0, function(t) {
        return function(t) {
            function e(n) {
                if (i[n])
                    return i[n].exports;
                var o = i[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(o.exports, o, o.exports, e),
                o.l = !0,
                o.exports
            }
            var i = {};
            return e.m = t,
            e.c = i,
            e.i = function(t) {
                return t
            }
            ,
            e.d = function(t, i, n) {
                e.o(t, i) || Object.defineProperty(t, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }
            ,
            e.n = function(t) {
                var i = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return e.d(i, "a", i),
                i
            }
            ,
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            e.p = "",
            e(e.s = 8)
        }([function(e, i) {
            e.exports = t
        }
        , function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(2);
            e.default = {
                getReleasesUrl: function(t) {
                    return "rel" + (t - 20) + ".[mp3|ogg]"
                },
                getHarmonicsUrl: function(t) {
                    return "harmL" + (0,
                    n.midiToNote)(t).replace("#", "s") + ".[mp3|ogg]"
                },
                getNotesUrl: function(t, e) {
                    return (0,
                    n.midiToNote)(t).replace("#", "s") + "v" + e + ".[mp3|ogg]"
                }
            }
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return (0,
                u.Frequency)(t).toMidi()
            }
            function o(t) {
                return (0,
                u.Frequency)(t, "midi").toNote()
            }
            function r(t) {
                var e = t % 3;
                return 1 === e ? [t - 1, l.default.intervalToFrequencyRatio(1)] : 2 === e ? [t + 1, l.default.intervalToFrequencyRatio(-1)] : [t, 1]
            }
            function s(t) {
                return new u.BufferSource(t)
            }
            function a(t, e) {
                return Math.random() * (e - t) + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.randomBetween = e.midiToFrequencyRatio = e.createSource = e.noteToMidi = e.midiToNote = void 0;
            var u = i(0)
              , l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(u);
            e.midiToNote = o,
            e.noteToMidi = n,
            e.createSource = s,
            e.midiToFrequencyRatio = r,
            e.randomBetween = a
        }
        , function(t, e, i) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , a = i(0)
              , u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
              , l = function(t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    n(this, e);
                    var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.createInsOuts(0, 1),
                    i.volume = t,
                    i
                }
                return r(e, t),
                s(e, [{
                    key: "volume",
                    get: function() {
                        return u.default.gainToDb(this.output.gain.value)
                    },
                    set: function(t) {
                        this.output.gain.value = u.default.dbToGain(t)
                    }
                }]),
                e
            }(a.AudioNode);
            e.default = l
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = i(1)
              , l = n(u)
              , c = i(3)
              , h = n(c)
              , p = i(2)
              , f = i(0)
              , d = [21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87]
              , y = function(t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [21, 108];
                    o(this, e);
                    var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
                      , n = d.findIndex(function(e) {
                        return e >= t[0]
                    })
                      , s = d.findIndex(function(e) {
                        return e >= t[1]
                    });
                    s = -1 === s ? s = d.length : s;
                    var a = d.slice(n, s);
                    i._samples = {};
                    var u = !0
                      , c = !1
                      , h = void 0;
                    try {
                        for (var p, f = a[Symbol.iterator](); !(u = (p = f.next()).done); u = !0) {
                            var y = p.value;
                            i._samples[y] = l.default.getHarmonicsUrl(y)
                        }
                    } catch (t) {
                        c = !0,
                        h = t
                    } finally {
                        try {
                            !u && f.return && f.return()
                        } finally {
                            if (c)
                                throw h
                        }
                    }
                    return i
                }
                return s(e, t),
                a(e, [{
                    key: "start",
                    value: function(t, e, i) {
                        t >= d[0] && t <= d[d.length - 1] && this._sampler.triggerAttack((0,
                        p.midiToNote)(t), e, i * (0,
                        p.randomBetween)(.5, 1))
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i, n) {
                            e._sampler = new f.Sampler(e._samples,i,t).connect(e.output),
                            e._sampler.release = 1
                        }
                        )
                    }
                }]),
                e
            }(h.default);
            e.default = y
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Notes = void 0;
            var a = function() {
                function t(t, e) {
                    var i = []
                      , n = !0
                      , o = !1
                      , r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                        !e || i.length !== e); n = !0)
                            ;
                    } catch (t) {
                        o = !0,
                        r = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o)
                                throw r
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
              , u = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , l = i(0)
              , c = (n(l),
            i(1))
              , h = n(c)
              , p = i(3)
              , f = n(p)
              , d = i(2)
              , y = {
                1: [8],
                2: [6, 12],
                3: [1, 8, 15],
                4: [1, 5, 10, 15],
                5: [1, 4, 8, 12, 16],
                6: [1, 3, 7, 10, 13, 16],
                7: [1, 3, 6, 9, 11, 13, 16],
                8: [1, 3, 5, 7, 9, 11, 13, 15],
                9: [1, 3, 5, 7, 9, 11, 13, 15, 16],
                10: [1, 2, 3, 5, 7, 9, 11, 13, 15, 16],
                11: [1, 2, 3, 5, 7, 9, 11, 13, 14, 15, 16],
                12: [1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 16],
                13: [1, 2, 3, 4, 5, 7, 9, 11, 12, 13, 14, 15, 16],
                14: [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15, 16],
                15: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16],
                16: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            }
              , _ = [21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108];
            e.Notes = function(t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [21, 108]
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    o(this, e);
                    var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
                      , s = _.findIndex(function(e) {
                        return e >= t[0]
                    })
                      , a = _.findIndex(function(e) {
                        return e >= t[1]
                    });
                    a = -1 === a ? a = _.length : a + 1;
                    var u = _.slice(s, a);
                    return n._samplers = y[i].slice(),
                    n._activeNotes = new Map,
                    n._samplers.forEach(function(t, e) {
                        n._samplers[e] = {},
                        u.forEach(function(i) {
                            n._samplers[e][i] = h.default.getNotesUrl(i, t)
                        })
                    }),
                    n
                }
                return s(e, t),
                u(e, [{
                    key: "_hasNote",
                    value: function(t, e) {
                        return this._samplers.hasOwnProperty(e) && this._samplers[e].has(t)
                    }
                }, {
                    key: "_getNote",
                    value: function(t, e) {
                        return this._samplers[e].get(t)
                    }
                }, {
                    key: "stop",
                    value: function(t, e, i) {
                        this._activeNotes.has(t) && (this._activeNotes.get(t).forEach(function(t) {
                            t.stop(e + 1, 1)
                        }),
                        this._activeNotes.delete(t))
                    }
                }, {
                    key: "start",
                    value: function(t, e, i) {
                        var n = i * (this._samplers.length - 1)
                          , o = Math.round(n)
                          , r = o - n
                          , s = 1 - .5 * r;
                        1 === this._samplers.length && (s = Math.max(i, .05));
                        var u = (0,
                        d.midiToFrequencyRatio)(t)
                          , l = a(u, 2)
                          , c = l[0]
                          , h = l[1];
                        if (this._hasNote(c, o)) {
                            var p = (0,
                            d.createSource)(this._getNote(c, o));
                            p.playbackRate.value = h,
                            p.connect(this.output),
                            p.curve = "exponential",
                            p.start(e, 0, void 0, s, 0),
                            this._activeNotes.has(t) || this._activeNotes.set(t, []),
                            this._activeNotes.get(t).push(p)
                        }
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e = this
                          , i = [];
                        return this._samplers.forEach(function(n, o) {
                            var r = new Promise(function(i) {
                                e._samplers[o] = new l.Buffers(n,i,t)
                            }
                            );
                            i.push(r)
                        }),
                        Promise.all(i)
                    }
                }]),
                e
            }(f.default)
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = i(3)
              , l = n(u)
              , c = i(1)
              , h = (n(c),
            i(2))
              , p = i(0)
              , f = (n(p),
            function(t) {
                function e() {
                    o(this, e);
                    var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t._downTime = 1 / 0,
                    t._currentSound = null,
                    t._buffers = null,
                    t
                }
                return s(e, t),
                a(e, [{
                    key: "load",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            e._buffers = new p.Buffers({
                                up: "pedalU1.mp3",
                                down: "pedalD1.mp3"
                            },i,t)
                        }
                        )
                    }
                }, {
                    key: "_squash",
                    value: function(t) {
                        this._currentSound && this._currentSound.stop(t + .1, .1),
                        this._currentSound = null
                    }
                }, {
                    key: "_playSample",
                    value: function(t, e) {
                        this._currentSound = (0,
                        h.createSource)(this._buffers.get(e)),
                        this._currentSound.curve = "exponential",
                        this._currentSound.connect(this.output).start(t, (0,
                        h.randomBetween)(0, .01), void 0, .5 * (0,
                        h.randomBetween)(.5, 1), .05)
                    }
                }, {
                    key: "down",
                    value: function(t) {
                        this._squash(t),
                        this._downTime = t,
                        this._playSample(t, "down")
                    }
                }, {
                    key: "up",
                    value: function(t) {
                        this._squash(t),
                        this._downTime = 1 / 0,
                        this._playSample(t, "up")
                    }
                }, {
                    key: "isDown",
                    value: function(t) {
                        return t > this._downTime
                    }
                }]),
                e
            }(l.default));
            e.default = f
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = i(1)
              , l = n(u)
              , c = i(3)
              , h = n(c)
              , p = i(2)
              , f = i(0)
              , d = function(t) {
                function e(t) {
                    o(this, e);
                    var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    i._buffers = {};
                    for (var n = t[0]; n <= t[1]; n++)
                        i._buffers[n] = l.default.getReleasesUrl(n);
                    return i
                }
                return s(e, t),
                a(e, [{
                    key: "load",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            e._buffers = new f.Buffers(e._buffers,i,t)
                        }
                        )
                    }
                }, {
                    key: "start",
                    value: function(t, e, i) {
                        if (this._buffers.has(t)) {
                            var n = (0,
                            p.createSource)(this._buffers.get(t)).connect(this.output);
                            i *= (0,
                            p.randomBetween)(.5, 1),
                            n.start(e, 0, void 0, .015 * i, 0)
                        }
                    }
                }]),
                e
            }(h.default);
            e.default = d
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Piano = void 0;
            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i),
                    n && t(e, n),
                    e
                }
            }()
              , u = i(0)
              , l = n(u)
              , c = i(6)
              , h = n(c)
              , p = i(5)
              , f = i(4)
              , d = n(f)
              , y = i(7)
              , _ = n(y);
            n(i(1)),
            e.Piano = function(t) {
                function e() {
                    o(this, e);
                    var t = l.default.defaults(arguments, ["range", "velocities"], {
                        velocities: 1,
                        range: [21, 108],
                        release: !0
                    })
                      , i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.createInsOuts(0, 1),
                    i._loaded = !1,
                    i._heldNotes = new Map,
                    i._sustainedNotes = new Map,
                    i._notes = new p.Notes(t.range,t.velocities).connect(i.output),
                    i._pedal = (new h.default).connect(i.output),
                    t.release && (i._harmonics = new d.default(t.range).connect(i.output),
                    i._release = new _.default(t.range).connect(i.output)),
                    i
                }
                return s(e, t),
                a(e, [{
                    key: "load",
                    value: function() {
                        var t = this
                          , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://tambien.github.io/Piano/Salamander/"
                          , i = [this._notes.load(e), this._pedal.load(e)];
                        return this._harmonics && i.push(this._harmonics.load(e)),
                        this._release && i.push(this._release.load(e)),
                        Promise.all(i).then(function() {
                            t._loaded = !0
                        })
                    }
                }, {
                    key: "pedalDown",
                    value: function(t) {
                        return this.loaded && (t = this.toSeconds(t),
                        this._pedal.isDown(t) || this._pedal.down(t)),
                        this
                    }
                }, {
                    key: "pedalUp",
                    value: function(t) {
                        var e = this;
                        return this.loaded && (t = this.toSeconds(t),
                        this._pedal.isDown(t) && (this._pedal.up(t),
                        this._sustainedNotes.forEach(function(i, n) {
                            e._heldNotes.has(n) || e._notes.stop(n, t)
                        }),
                        this._sustainedNotes.clear())),
                        this
                    }
                }, {
                    key: "keyDown",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.now()
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                        return this.loaded && (e = this.toSeconds(e),
                        l.default.isString(t) && (t = Math.round((0,
                        u.Frequency)(t).toMidi())),
                        this._heldNotes.has(t) || (this._heldNotes.set(t, {
                            time: e,
                            velocity: i
                        }),
                        this._notes.start(t, e, i))),
                        this
                    }
                }, {
                    key: "keyUp",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.now()
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                        if (this.loaded && (e = this.toSeconds(e),
                        l.default.isString(t) && (t = Math.round((0,
                        u.Frequency)(t).toMidi())),
                        this._heldNotes.has(t))) {
                            var n = this._heldNotes.get(t);
                            this._heldNotes.delete(t),
                            this._release && this._release.start(t, e, i);
                            var o = e - n.time
                              , r = n.velocity
                              , s = .5 / Math.max(o, .1) + r + i;
                            s = Math.pow(Math.log(Math.max(s, 1)), 2) / 2,
                            this._pedal.isDown(e) ? this._sustainedNotes.has(t) || this._sustainedNotes.set(t, e) : (this._notes.stop(t, e, i),
                            this._harmonics && this._harmonics.start(t, e, s))
                        }
                        return this
                    }
                }, {
                    key: "setVolume",
                    value: function(t, e) {
                        switch (t) {
                        case "note":
                            this._notes.volume = e;
                            break;
                        case "pedal":
                            this._pedal.volume = e;
                            break;
                        case "release":
                            this._release && (this._release.volume = e);
                            break;
                        case "harmonics":
                            this._harmonics && (this._harmonics.volume = e)
                        }
                        return this
                    }
                }, {
                    key: "stopAll",
                    value: function() {
                        var t = this;
                        return this.pedalUp(),
                        this._heldNotes.forEach(function(e, i) {
                            t.keyUp(i)
                        }),
                        this
                    }
                }, {
                    key: "progress",
                    value: function(t) {
                        return u.Buffer.on("progress", t),
                        this
                    }
                }, {
                    key: "loaded",
                    get: function() {
                        return this._loaded
                    }
                }]),
                e
            }(u.AudioNode)
        }
        ])
    })
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcwOTI5X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4Niw2MzkuNTdhMTYuNjUsMTYuNjUsMCwwLDEtMTEuNzctMjguNDJMNjAyLjI3LDM4My4wOGExNi42NSwxNi42NSwwLDAsMSwyMy41NCwyMy41NEwzOTcuNzMsNjM0LjdBMTYuNiwxNi42LDAsMCwxLDM4Niw2MzkuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjE0LDYzOS41N2ExNi41OSwxNi41OSwwLDAsMS0xMS43Ny00Ljg4TDM3NC4xOSw0MDYuNjJhMTYuNjUsMTYuNjUsMCwwLDEsMjMuNTQtMjMuNTRMNjI1LjgxLDYxMS4xNkExNi42NSwxNi42NSwwLDAsMSw2MTQsNjM5LjU3WiIvPjwvc3ZnPg=="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWEzOTRlO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4Niw2MzkuNTdhMTYuNjUsMTYuNjUsMCwwLDEtMTEuNzctMjguNDJMNjAyLjI3LDM4My4wOGExNi42NSwxNi42NSwwLDAsMSwyMy41NCwyMy41NEwzOTcuNzMsNjM0LjdBMTYuNiwxNi42LDAsMCwxLDM4Niw2MzkuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjE0LDYzOS41N2ExNi41OSwxNi41OSwwLDAsMS0xMS43Ny00Ljg4TDM3NC4xOSw0MDYuNjJhMTYuNjUsMTYuNjUsMCwwLDEsMjMuNTQtMjMuNTRMNjI1LjgxLDYxMS4xNkExNi42NSwxNi42NSwwLDAsMSw2MTQsNjM5LjU3WiIvPjwvc3ZnPg=="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzNS42OSw2MzcuN2ExNi42LDE2LjYsMCwwLDEtMTEuNzctNC44OGwtODktODlhMTYuNjUsMTYuNjUsMCwxLDEsMjMuNTQtMjMuNTRsNzcuMjIsNzcuMjFMNjUyLDM4MS4yYTE2LjY1LDE2LjY1LDAsMCwxLDIzLjU0LDIzLjU0TDQ0Ny40Niw2MzIuODJBMTYuNiwxNi42LDAsMCwxLDQzNS42OSw2MzcuN1oiLz48L3N2Zz4="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZGRkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUyMy4zMyw1NjIuMjhoLTUzVjUzMy42N3EwLTE4Ljc2LDQuNDUtMjcuOTF0MTkuNDYtMjQuMTZsMzQuMjQtMzQuMjRxMTAuNzktMTEuNzIsMTAuNzktMjkuMDlUNTI4LDM4OS40MnEtMTEuMjYtMTEuNDktMjkuMDktMTEuNDl0LTI5Ljc4LDExcS0xMiwxMS0xMy44NCwyOS4zMkgzOTguNTVxNC42OC00MS43NSwzMi42MS02NS40NHQ2OS42NS0yMy42OXE0MS43NSwwLDY4LDIyLjc1dDI2LjI3LDYzLjU2cTAsMjguMTUtMTUuNDgsNDYuOTFBMjAyLDIwMiwwLDAsMSw1NjYsNDc4LjMxcS00LjcsNC43LTEyLjQzLDEydC0xMy4xMywxMi42NnEtNS40LDUuNC04LjY4LDkuMTUtOC40NCwxMC4zMy04LjQ0LDI5LjA5Wk00OTcuNzYsNjY2LjQyYTM2LjE0LDM2LjE0LDAsMCwxLTI1LjU2LTEwLjA4cS0xMC43OS0xMC4wOS0xMC43OS0yNC4zOUEzMy4yNiwzMy4yNiwwLDAsMSw0NzIsNjA3LjMxLDM1LDM1LDAsMCwxLDQ5Ny4yOSw1OTdhMzYuMTgsMzYuMTgsMCwwLDEsMjUuNTYsMTAuMDlxMTAuNzgsMTAuMDksMTAuNzgsMjQuMzlhMzMuMjEsMzMuMjEsMCwwLDEtMTAuNTYsMjQuNjNBMzQuOTEsMzQuOTEsMCwwLDEsNDk3Ljc2LDY2Ni40MloiLz48L3N2Zz4="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDViNWExO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI3Ni43NCw1MDBhODUuNTIsODUuNTIsMCwwLDEsODUuNDQtODUuNDRINDcyLjQ0VjM2Mi4xOUgzNjIuMTlhMTM3LjgxLDEzNy44MSwwLDEsMCwwLDI3NS42M0g0NzIuNDRWNTg1LjQ0SDM2Mi4xOUE4NS41Miw4NS41MiwwLDAsMSwyNzYuNzQsNTAwWm0xMTMsMjcuNTZoMjIwLjVWNDcyLjQ0SDM4OS43NVpNNjM3LjgxLDM2Mi4xOUg1MjcuNTZ2NTIuMzdINjM3LjgxYTg1LjQ0LDg1LjQ0LDAsMCwxLDAsMTcwLjg5SDUyNy41NnY1Mi4zN0g2MzcuODFhMTM3LjgxLDEzNy44MSwwLDEsMCwwLTI3NS42M1oiLz48L3N2Zz4="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIj48ZGVmcz48c3R5bGU+LmNscy0xe29wYWNpdHk6MC4zNTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy00e2ZpbGw6IzQ1OThiNjt9LmNscy01e2ZpbGw6IzRlNjFkODt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjM1Ni42MSIgeTE9IjM4OC43OCIgeDI9IjYxOS4yOSIgeTI9IjY1MS40NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzRlNjFkOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRlNjFkOCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMjQwLjEzIiB5MT0iMzAyLjEiIHgyPSI3MDUuOTEiIHkyPSI3NjcuODgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0NTk4YjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NTk4YjYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4xNzEwMDVfZG90X3BpYW5vX2ljb25zX2V4cG9ydDwvdGl0bGU+PGcgY2xhc3M9ImNscy0xIj48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01MDUuMjksNjg4LjVjLTEwMi40NCwwLTE4NS43OC04My4zNC0xODUuNzgtMTg1Ljc4czgzLjM0LTE4NS43OCwxODUuNzgtMTg1Ljc4YTE3LjcxLDE3LjcxLDAsMSwxLDAsMzUuNDJjLTgyLjkxLDAtMTUwLjM2LDY3LjQ1LTE1MC4zNiwxNTAuMzZzNjcuNDUsMTUwLjM2LDE1MC4zNiwxNTAuMzZhMTQ5LjM4LDE0OS4zOCwwLDAsMCwxMDYuMzMtNDQsMTcuNzEsMTcuNzEsMCwxLDEsMjUsMjVBMTg0LjU2LDE4NC41NiwwLDAsMSw1MDUuMjksNjg4LjVaIi8+PC9nPjxnIGNsYXNzPSJjbHMtMSI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTA1LjI5LDgzMi4wN2EzMjkuMzYsMzI5LjM2LDAsMSwxLDAtNjU4LjcxLDE3LjcxLDE3LjcxLDAsMSwxLDAsMzUuNDJBMjkzLjk0LDI5My45NCwwLDEsMCw3MTMuMTQsNzEwLjU2YTE3LjcxLDE3LjcxLDAsMSwxLDI1LDI1QTMyNy4yLDMyNy4yLDAsMCwxLDUwNS4yOSw4MzIuMDdaIi8+PC9nPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNTA1LjI5IiBjeT0iMTkxLjA3IiByPSI1Ni41OCIvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iNTA1LjI5IiBjeT0iMzM0LjY0IiByPSI1Ni41OCIvPjwvc3ZnPg=="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjc5NDNkO30uY2xzLTJ7ZmlsbDojZDFjMTJlO30uY2xzLTN7ZmlsbDojOTVjNjMxO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMzUxLjM3IiBjeT0iNTQ3LjI5IiByPSI1Ni41OCIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTA4LjY1IiBjeT0iMzg4LjM4IiByPSI1Ni41OCIvPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iNjY1LjkzIiBjeT0iNTQ3LjI5IiByPSI1Ni41OCIvPjwvc3ZnPg=="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtMntmaWxsOiNlZDM4ODM7fS5jbHMtMiwuY2xzLTV7b3BhY2l0eTowLjU7fS5jbHMtMiwuY2xzLTMsLmNscy00LC5jbHMtNSwuY2xzLTZ7bWl4LWJsZW5kLW1vZGU6c2NyZWVuO30uY2xzLTN7ZmlsbDojZjc5NDNkO29wYWNpdHk6MC4yO30uY2xzLTR7ZmlsbDojZjZiZTM3O30uY2xzLTQsLmNscy02e29wYWNpdHk6MC44O30uY2xzLTV7ZmlsbDojZDFjMTJlO30uY2xzLTZ7ZmlsbDojZjc1ODM5O308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxnIGNsYXNzPSJjbHMtMSI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIzMjMuMTIiIGN5PSI1MDIuNzIiIHI9IjEzMy43OSIvPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iNTA5LjkzIiBjeT0iNTAyLjcyIiByPSIxMzMuNzkiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjYwMy4zNCIgY3k9IjUwMi43MiIgcj0iMTMzLjc5Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTUiIGN4PSI2OTYuNzUiIGN5PSI1MDIuNzIiIHI9IjEzMy43OSIvPjxjaXJjbGUgY2xhc3M9ImNscy02IiBjeD0iNDE2LjUyIiBjeT0iNTAyLjcyIiByPSIxMzMuNzkiLz48L2c+PC9nPjwvc3ZnPg=="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYTU0MmIxO30uY2xzLTJ7ZmlsbDojODA2NGM2O30uY2xzLTN7ZmlsbDojZDE4ZmVjO30uY2xzLTR7ZmlsbDojNGU2MWQ4O30uY2xzLTV7ZmlsbDojYTdhMWYzO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY5My42OSwzNjYuMjJBMTM2LDEzNiwwLDAsMCw1OTcuMzYsNDA2YTEzNi40NiwxMzYuNDYsMCwwLDEsMCwxOTMuMzUsMTM2LjQ5LDEzNi40OSwwLDEsMCw5Ni4zMy0yMzMuMTdaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTU3LjIsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDEsNTk3LjM2LDQwNmExMzYuNDUsMTM2LjQ1LDAsMCwwLTE5Mi42NywwLDEzNi40NiwxMzYuNDYsMCwwLDEsMCwxOTMuMzUsMTM2LjQ1LDEzNi40NSwwLDAsMCwxOTIuNjcsMEExMzYuMDYsMTM2LjA2LDAsMCwxLDU1Ny4yLDUwMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzcuNTEsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDAsNTk3LjM2LDQwNmExMzYuNDUsMTM2LjQ1LDAsMCwwLDAsMTkzLjM1QTEzNi4wNiwxMzYuMDYsMCwwLDAsNjM3LjUxLDUwMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzcuNTEsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDAsNTk3LjM2LDQwNmExMzYuNDUsMTM2LjQ1LDAsMCwwLDAsMTkzLjM1QTEzNi4wNiwxMzYuMDYsMCwwLDAsNjM3LjUxLDUwMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zNjQuNTMsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDEsNDA0LjY5LDQwNmExMzYuNDksMTM2LjQ5LDAsMSwwLDAsMTkzLjM1QTEzNi4wNiwxMzYuMDYsMCwwLDEsMzY0LjUzLDUwMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00NDQuODQsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDAsNDA0LjY5LDQwNmExMzYuNDYsMTM2LjQ2LDAsMCwwLDAsMTkzLjM1QTEzNi4wNiwxMzYuMDYsMCwwLDAsNDQ0Ljg0LDUwMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik00NDQuODQsNTAyLjcyQTEzNi4wNiwxMzYuMDYsMCwwLDAsNDA0LjY5LDQwNmExMzYuNDYsMTM2LjQ2LDAsMCwwLDAsMTkzLjM1QTEzNi4wNiwxMzYuMDYsMCwwLDAsNDQ0Ljg0LDUwMi43MloiLz48L3N2Zz4="
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy00e2ZpbGw6I2QxYzEyZTt9LmNscy0xe29wYWNpdHk6MC4xNTt9LmNscy0ye2ZpbGw6Izk1YzYzMTt9LmNscy0ze2ZpbGw6IzRiYjI1MDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjE3MTAwNV9kb3RfcGlhbm9faWNvbnNfZXhwb3J0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NjEuNDIsNDA1LjQ4YTU2LjU5LDU2LjU5LDAsMCwwLTU2LjU5LDU2LjU5VjYwMEE1Ni41OSw1Ni41OSwwLDAsMCw3MTgsNjAwVjQ2Mi4wN0E1Ni41OCw1Ni41OCwwLDAsMCw2NjEuNDIsNDA1LjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM0OS45NCw0MDUuNDhhNTYuNTksNTYuNTksMCwwLDAtNTYuNTksNTYuNTlWNjAwYTU2LjU5LDU2LjU5LDAsMCwwLDExMy4xNywwVjQ2Mi4wN0E1Ni41OCw1Ni41OCwwLDAsMCwzNDkuOTQsNDA1LjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwNy4yMiwzMzQuNjRhNTYuNTksNTYuNTksMCwwLDAtNTYuNTksNTYuNTlWNjcwLjhhNTYuNTksNTYuNTksMCwwLDAsMTEzLjE3LDBWMzkxLjIzQTU2LjU4LDU2LjU4LDAsMCwwLDUwNy4yMiwzMzQuNjRaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIzNDkuOTMiIGN5PSI1OTkuOTUiIHI9IjU2LjU4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSI1MDcuMjEiIGN5PSIzOTEuMjMiIHI9IjU2LjU4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIzNDkuOTMiIGN5PSI0NjIuMDYiIHI9IjU2LjU4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1MDcuMjIiIGN5PSI2NzAuNzkiIHI9IjU2LjU4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSI2NjEuNDIiIGN5PSI0NjIuMDYiIHI9IjU2LjU4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2NjEuNDIiIGN5PSI1OTkuOTUiIHI9IjU2LjU4Ii8+PC9zdmc+"
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzMS4zOSwzNjIuMTlWNjM3LjgxTDYyNi42Miw1MDBaIi8+PC9zdmc+"
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0OS40Myw0NTMuMzJsMTguODcsMjAuMzIsMTkuODktMjAuODYtMTcuOS0xOS4zNUExMTIuMzYsMTEyLjM2LDAsMCwwLDM4OS43NiwzOTlIMzI3LjE4YTE0LjU1LDE0LjU1LDAsMCwwLDAsMjkuMTFoNjIuNThDNDEyLjA4LDQyNy42LDQzMy45MSw0MzcuMzEsNDQ5LjQzLDQ1My4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NDEuODQsNTQ5LjYxLDU2MCw1NjkuMjZhMTEyLjM2LDExMi4zNiwwLDAsMCw4MC41MywzNC40NGg5LjIydjI5LjExYTkuNTgsOS41OCwwLDAsMCw1LjgyLDguNzMsOS4xNCw5LjE0LDAsMCwwLDMuODgsMSw5LjU4LDkuNTgsMCwwLDAsNi43OS0yLjkxbDQzLjY2LTQzLjY2YTkuMzgsOS4zOCwwLDAsMCwwLTEzLjU4TDY2Ni4yOCw1MzguN2MtMi45MS0yLjkxLTYuNzktMy40LTEwLjY3LTEuOTRhOS41OCw5LjU4LDAsMCwwLTUuODIsOC43M1Y1NzQuNmgtOS4yMmE4OS4zMiw4OS4zMiwwLDAsMS0xNi0xLjQ2LDg0LDg0LDAsMCwxLTQyLjIxLTIyLjhjLS40OS0uNDktMS0xLTEuNDYtMWwtMTkuMTctMjAuNjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjY2LjI4LDM2My4wOGE5LjU4LDkuNTgsMCwwLDAtNi43OS0yLjkxLDUuODMsNS44MywwLDAsMC0zLjg4LDEsOS41OCw5LjU4LDAsMCwwLTUuODIsOC43M3YyNi42OGgtOS4yMkExMTQuOTEsMTE0LjkxLDAsMCwwLDU1OC4xLDQzMkw0NDcuNDksNTQ3LjQzYTc5LjY4LDc5LjY4LDAsMCwxLTU3LjczLDI0Ljc0SDMyNy4xOGExNywxNywwLDAsMCwwLDM0aDYyLjU4YTExNC45MSwxMTQuOTEsMCwwLDAsODIuNDctMzUuNDFMNTgyLjg0LDQ1NC43N0E3OS42OCw3OS42OCwwLDAsMSw2NDAuNTcsNDMwaDkuMjJ2MjYuNjhhOS41OCw5LjU4LDAsMCwwLDUuODIsOC43Myw5LjE0LDkuMTQsMCwwLDAsMy44OCwxLDkuNTgsOS41OCwwLDAsMCw2Ljc5LTIuOTFsNDMuNjYtNDMuNjZhOS4zOCw5LjM4LDAsMCwwLDAtMTMuNThaIi8+PC9zdmc+"
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDViNWExO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0OS40Myw0NTMuMzJsMTguODcsMjAuMzIsMTkuODktMjAuODYtMTcuOS0xOS4zNUExMTIuMzYsMTEyLjM2LDAsMCwwLDM4OS43NiwzOTlIMzI3LjE4YTE0LjU1LDE0LjU1LDAsMCwwLDAsMjkuMTFoNjIuNThDNDEyLjA4LDQyNy42LDQzMy45MSw0MzcuMzEsNDQ5LjQzLDQ1My4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NDEuODQsNTQ5LjYxLDU2MCw1NjkuMjZhMTEyLjM2LDExMi4zNiwwLDAsMCw4MC41MywzNC40NGg5LjIydjI5LjExYTkuNTgsOS41OCwwLDAsMCw1LjgyLDguNzMsOS4xNCw5LjE0LDAsMCwwLDMuODgsMSw5LjU4LDkuNTgsMCwwLDAsNi43OS0yLjkxbDQzLjY2LTQzLjY2YTkuMzgsOS4zOCwwLDAsMCwwLTEzLjU4TDY2Ni4yOCw1MzguN2MtMi45MS0yLjkxLTYuNzktMy40LTEwLjY3LTEuOTRhOS41OCw5LjU4LDAsMCwwLTUuODIsOC43M1Y1NzQuNmgtOS4yMmE4OS4zMiw4OS4zMiwwLDAsMS0xNi0xLjQ2LDg0LDg0LDAsMCwxLTQyLjIxLTIyLjhjLS40OS0uNDktMS0xLTEuNDYtMWwtMTkuMTctMjAuNjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjY2LjI4LDM2My4wOGE5LjU4LDkuNTgsMCwwLDAtNi43OS0yLjkxLDUuODMsNS44MywwLDAsMC0zLjg4LDEsOS41OCw5LjU4LDAsMCwwLTUuODIsOC43M3YyNi42OGgtOS4yMkExMTQuOTEsMTE0LjkxLDAsMCwwLDU1OC4xLDQzMkw0NDcuNDksNTQ3LjQzYTc5LjY4LDc5LjY4LDAsMCwxLTU3LjczLDI0Ljc0SDMyNy4xOGExNywxNywwLDAsMCwwLDM0aDYyLjU4YTExNC45MSwxMTQuOTEsMCwwLDAsODIuNDctMzUuNDFMNTgyLjg0LDQ1NC43N0E3OS42OCw3OS42OCwwLDAsMSw2NDAuNTcsNDMwaDkuMjJ2MjYuNjhhOS41OCw5LjU4LDAsMCwwLDUuODIsOC43Myw5LjE0LDkuMTQsMCwwLDAsMy44OCwxLDkuNTgsOS41OCwwLDAsMCw2Ljc5LTIuOTFsNDMuNjYtNDMuNjZhOS4zOCw5LjM4LDAsMCwwLDAtMTMuNThaIi8+PC9zdmc+"
}
, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDViNWExO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTcxMDA1X2RvdF9waWFub19pY29uc19leHBvcnQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY0MC4zLDYzNi45Mkg1OTQuNTFWMzYyLjE5SDY0MC4zWk0zNjUuNTYsMzYyLjE5VjYzNi45MmwxOTQuNi0xMzcuMzdaIi8+PC9zdmc+"
}
]);

//Script Edited By Togi, in association with TMG Inc. https://Togar.media
