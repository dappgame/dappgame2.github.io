import { r as ai, c as ii, s as Js, h as yx, a as Zn } from "./1495f414.js";
var c = O;
(function (n, e) {
  for (var x = O, t = n(); []; )
    try {
      var r =
        parseInt(x(159)) / 1 +
        (parseInt(x(210)) / 2) * (parseInt(x(1594)) / 3) +
        (parseInt(x(1432)) / 4) * (-parseInt(x(397)) / 5) +
        parseInt(x(1873)) / 6 +
        (parseInt(x(1951)) / 7) * (-parseInt(x(191)) / 8) +
        (parseInt(x(1632)) / 9) * (parseInt(x(1574)) / 10) +
        (parseInt(x(1742)) / 11) * (-parseInt(x(930)) / 12);
      if (r === e) break;
      t.push(t.shift());
    } catch (a) {
      t.push(t.shift());
    }
})(Ar, 322747);
var si = { exports: {} };
(function (n) {
  (function (e, x) {
    var t = O;
    function r(w, f) {
      if (!w) throw new Error(f || "Assertion failed");
    }
    function a(w, f) {
      var i = O;
      w[i(735)] = f;
      var h = function () {};
      (h[i(1024)] = f[i(1024)]),
        (w[i(1024)] = new h()),
        (w[i(1024)][i(891)] = w);
    }
    function s(w, f, i) {
      var h = O;
      if (s[h(1156)](w)) return w;
      (this[h(870)] = 0),
        (this[h(1070)] = null),
        (this.length = 0),
        (this[h(1484)] = null),
        w !== null &&
          ((f === "le" || f === "be") && ((i = f), (f = 10)),
          this[h(150)](w || 0, f || 10, i || "be"));
    }
    typeof e == "object" ? (e[t(1980)] = s) : (x.BN = s),
      (s.BN = s),
      (s[t(1798)] = 26);
    var d;
    try {
      typeof window !== t(1333) && typeof window[t(1888)] !== t(1333)
        ? (d = window.Buffer)
        : (d = ai.Buffer);
    } catch (w) {}
    (s[t(1156)] = function (f) {
      var i = t;
      return f instanceof s
        ? !![]
        : f !== null &&
            typeof f === i(661) &&
            f.constructor[i(1798)] === s[i(1798)] &&
            Array[i(1900)](f[i(1070)]);
    }),
      (s.max = function (f, i) {
        var h = t;
        return f[h(1999)](i) > 0 ? f : i;
      }),
      (s[t(1403)] = function (f, i) {
        var h = t;
        return f[h(1999)](i) < 0 ? f : i;
      }),
      (s[t(1024)][t(150)] = function (f, i, h) {
        var o = t;
        if (typeof f == "number") return this._initNumber(f, i, h);
        if (typeof f === o(661)) return this[o(313)](f, i, h);
        i === o(622) && (i = 16),
          r(i === (i | 0) && i >= 2 && i <= 36),
          (f = f[o(1628)]()[o(330)](/\s+/g, ""));
        var y = 0;
        f[0] === "-" && (y++, (this[o(870)] = 1)),
          y < f.length &&
            (i === 16
              ? this._parseHex(f, y, h)
              : (this[o(1252)](f, i, y),
                h === "le" && this[o(313)](this[o(947)](), i, h)));
      }),
      (s[t(1024)][t(1402)] = function (f, i, h) {
        var o = t;
        f < 0 && ((this[o(870)] = 1), (f = -f)),
          f < 67108864
            ? ((this[o(1070)] = [f & 67108863]), (this[o(152)] = 1))
            : f < 4503599627370496
            ? ((this[o(1070)] = [f & 67108863, (f / 67108864) & 67108863]),
              (this.length = 2))
            : (r(f < 9007199254740992),
              (this[o(1070)] = [f & 67108863, (f / 67108864) & 67108863, 1]),
              (this[o(152)] = 3)),
          h === "le" && this[o(313)](this[o(947)](), i, h);
      }),
      (s[t(1024)][t(313)] = function (f, i, h) {
        var o = t;
        if ((r(typeof f[o(152)] == "number"), f[o(152)] <= 0))
          return (this.words = [0]), (this[o(152)] = 1), this;
        (this[o(152)] = Math[o(1277)](f[o(152)] / 3)),
          (this[o(1070)] = new Array(this[o(152)]));
        for (var y = 0; y < this.length; y++) this[o(1070)][y] = 0;
        var M,
          E,
          A = 0;
        if (h === "be")
          for (y = f[o(152)] - 1, M = 0; y >= 0; y -= 3)
            (E = f[y] | (f[y - 1] << 8) | (f[y - 2] << 16)),
              (this[o(1070)][M] |= (E << A) & 67108863),
              (this[o(1070)][M + 1] = (E >>> (26 - A)) & 67108863),
              (A += 24),
              A >= 26 && ((A -= 26), M++);
        else if (h === "le")
          for (y = 0, M = 0; y < f[o(152)]; y += 3)
            (E = f[y] | (f[y + 1] << 8) | (f[y + 2] << 16)),
              (this[o(1070)][M] |= (E << A) & 67108863),
              (this.words[M + 1] = (E >>> (26 - A)) & 67108863),
              (A += 24),
              A >= 26 && ((A -= 26), M++);
        return this[o(678)]();
      });
    function l(w, f) {
      var i = t,
        h = w[i(501)](f);
      if (h >= 48 && h <= 57) return h - 48;
      if (h >= 65 && h <= 70) return h - 55;
      if (h >= 97 && h <= 102) return h - 87;
      r(![], i(1471) + w);
    }
    function v(w, f, i) {
      var h = l(w, i);
      return i - 1 >= f && (h |= l(w, i - 1) << 4), h;
    }
    s[t(1024)][t(1860)] = function (f, i, h) {
      var o = t;
      (this[o(152)] = Math[o(1277)]((f[o(152)] - i) / 6)),
        (this[o(1070)] = new Array(this.length));
      for (var y = 0; y < this.length; y++) this[o(1070)][y] = 0;
      var M = 0,
        E = 0,
        A;
      if (h === "be")
        for (y = f.length - 1; y >= i; y -= 2)
          (A = v(f, i, y) << M),
            (this[o(1070)][E] |= A & 67108863),
            M >= 18
              ? ((M -= 18), (E += 1), (this[o(1070)][E] |= A >>> 26))
              : (M += 8);
      else {
        var b = f.length - i;
        for (y = b % 2 === 0 ? i + 1 : i; y < f[o(152)]; y += 2)
          (A = v(f, i, y) << M),
            (this[o(1070)][E] |= A & 67108863),
            M >= 18
              ? ((M -= 18), (E += 1), (this[o(1070)][E] |= A >>> 26))
              : (M += 8);
      }
      this[o(678)]();
    };
    function m(w, f, i, h) {
      for (
        var o = t, y = 0, M = 0, E = Math[o(1403)](w[o(152)], i), A = f;
        A < E;
        A++
      ) {
        var b = w[o(501)](A) - 48;
        (y *= h),
          b >= 49 ? (M = b - 49 + 10) : b >= 17 ? (M = b - 17 + 10) : (M = b),
          r(b >= 0 && M < h, o(1178)),
          (y += M);
      }
      return y;
    }
    (s[t(1024)][t(1252)] = function (f, i, h) {
      var o = t;
      (this[o(1070)] = [0]), (this.length = 1);
      for (var y = 0, M = 1; M <= 67108863; M *= i) y++;
      y--, (M = (M / i) | 0);
      for (
        var E = f[o(152)] - h,
          A = E % y,
          b = Math.min(E, E - A) + h,
          u = 0,
          p = h;
        p < b;
        p += y
      )
        (u = m(f, p, p + y, i)),
          this[o(945)](M),
          this.words[0] + u < 67108864
            ? (this[o(1070)][0] += u)
            : this._iaddn(u);
      if (A !== 0) {
        var N = 1;
        for (u = m(f, p, f[o(152)], i), p = 0; p < A; p++) N *= i;
        this[o(945)](N),
          this[o(1070)][0] + u < 67108864
            ? (this[o(1070)][0] += u)
            : this[o(1520)](u);
      }
      this[o(678)]();
    }),
      (s[t(1024)][t(301)] = function (f) {
        var i = t;
        f.words = new Array(this[i(152)]);
        for (var h = 0; h < this[i(152)]; h++) f[i(1070)][h] = this[i(1070)][h];
        (f.length = this.length),
          (f.negative = this.negative),
          (f[i(1484)] = this[i(1484)]);
      });
    function g(w, f) {
      var i = t;
      (w[i(1070)] = f[i(1070)]),
        (w.length = f[i(152)]),
        (w[i(870)] = f[i(870)]),
        (w.red = f.red);
    }
    if (
      ((s[t(1024)][t(1032)] = function (f) {
        g(f, this);
      }),
      (s[t(1024)][t(307)] = function () {
        var f = t,
          i = new s(null);
        return this[f(301)](i), i;
      }),
      (s.prototype[t(1777)] = function (f) {
        for (var i = t; this[i(152)] < f; ) this[i(1070)][this[i(152)]++] = 0;
        return this;
      }),
      (s.prototype._strip = function () {
        for (
          var f = t;
          this.length > 1 && this[f(1070)][this[f(152)] - 1] === 0;

        )
          this.length--;
        return this[f(199)]();
      }),
      (s.prototype[t(199)] = function () {
        var f = t;
        return (
          this[f(152)] === 1 && this[f(1070)][0] === 0 && (this[f(870)] = 0),
          this
        );
      }),
      typeof Symbol != "undefined" && typeof Symbol[t(1654)] === t(289))
    )
      try {
        s[t(1024)][Symbol[t(1654)](t(1489))] = k;
      } catch (w) {
        s[t(1024)][t(1466)] = k;
      }
    else s.prototype[t(1466)] = k;
    function k() {
      var w = t;
      return (this[w(1484)] ? w(1246) : w(309)) + this.toString(16) + ">";
    }
    var S = [
        "",
        "0",
        "00",
        t(339),
        t(287),
        t(171),
        t(1990),
        t(464),
        t(1446),
        t(1566),
        t(1850),
        t(413),
        t(1451),
        t(1098),
        t(535),
        t(1668),
        "0000000000000000",
        t(1662),
        "000000000000000000",
        "0000000000000000000",
        t(441),
        t(1054),
        t(1025),
        "00000000000000000000000",
        t(1497),
        t(544),
      ],
      B = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      R = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s.prototype[t(1628)] = function (f, i) {
      var h = t;
      (f = f || 10), (i = i | 0 || 1);
      var o;
      if (f === 16 || f === "hex") {
        o = "";
        for (var y = 0, M = 0, E = 0; E < this[h(152)]; E++) {
          var A = this[h(1070)][E],
            b = (((A << y) | M) & 16777215)[h(1628)](16);
          (M = (A >>> (24 - y)) & 16777215),
            (y += 2),
            y >= 26 && ((y -= 26), E--),
            M !== 0 || E !== this.length - 1
              ? (o = S[6 - b[h(152)]] + b + o)
              : (o = b + o);
        }
        for (M !== 0 && (o = M.toString(16) + o); o[h(152)] % i !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var u = B[f],
          p = R[f];
        o = "";
        var N = this[h(307)]();
        for (N[h(870)] = 0; !N[h(770)](); ) {
          var C = N[h(841)](p)[h(1628)](f);
          (N = N[h(1476)](p)),
            N.isZero() ? (o = C + o) : (o = S[u - C[h(152)]] + C + o);
        }
        for (this[h(770)]() && (o = "0" + o); o[h(152)] % i !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      r(![], h(602));
    }),
      (s[t(1024)][t(1919)] = function () {
        var f = t,
          i = this[f(1070)][0];
        return (
          this[f(152)] === 2
            ? (i += this[f(1070)][1] * 67108864)
            : this.length === 3 && this[f(1070)][2] === 1
            ? (i += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              r(![], "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -i : i
        );
      }),
      (s[t(1024)][t(781)] = function () {
        var f = t;
        return this[f(1628)](16, 2);
      }),
      d &&
        (s.prototype[t(1306)] = function (f, i) {
          return this.toArrayLike(d, f, i);
        }),
      (s.prototype[t(947)] = function (f, i) {
        var h = t;
        return this[h(158)](Array, f, i);
      });
    var D = function (f, i) {
      var h = t;
      return f[h(367)] ? f[h(367)](i) : new f(i);
    };
    (s[t(1024)][t(158)] = function (f, i, h) {
      var o = t;
      this._strip();
      var y = this[o(234)](),
        M = h || Math[o(521)](1, y);
      r(y <= M, o(831)), r(M > 0, o(409));
      var E = D(f, M),
        A = i === "le" ? "LE" : "BE";
      return this["_toArrayLike" + A](E, y), E;
    }),
      (s[t(1024)][t(1157)] = function (f, i) {
        for (var h = t, o = 0, y = 0, M = 0, E = 0; M < this[h(152)]; M++) {
          var A = (this.words[M] << E) | y;
          (f[o++] = A & 255),
            o < f[h(152)] && (f[o++] = (A >> 8) & 255),
            o < f[h(152)] && (f[o++] = (A >> 16) & 255),
            E === 6
              ? (o < f[h(152)] && (f[o++] = (A >> 24) & 255), (y = 0), (E = 0))
              : ((y = A >>> 24), (E += 2));
        }
        if (o < f[h(152)]) for (f[o++] = y; o < f[h(152)]; ) f[o++] = 0;
      }),
      (s[t(1024)]._toArrayLikeBE = function (f, i) {
        for (
          var h = t, o = f.length - 1, y = 0, M = 0, E = 0;
          M < this[h(152)];
          M++
        ) {
          var A = (this[h(1070)][M] << E) | y;
          (f[o--] = A & 255),
            o >= 0 && (f[o--] = (A >> 8) & 255),
            o >= 0 && (f[o--] = (A >> 16) & 255),
            E === 6
              ? (o >= 0 && (f[o--] = (A >> 24) & 255), (y = 0), (E = 0))
              : ((y = A >>> 24), (E += 2));
        }
        if (o >= 0) for (f[o--] = y; o >= 0; ) f[o--] = 0;
      }),
      Math[t(691)]
        ? (s.prototype[t(731)] = function (f) {
            var i = t;
            return 32 - Math[i(691)](f);
          })
        : (s[t(1024)][t(731)] = function (f) {
            var i = f,
              h = 0;
            return (
              i >= 4096 && ((h += 13), (i >>>= 13)),
              i >= 64 && ((h += 7), (i >>>= 7)),
              i >= 8 && ((h += 4), (i >>>= 4)),
              i >= 2 && ((h += 2), (i >>>= 2)),
              h + i
            );
          }),
      (s.prototype._zeroBits = function (f) {
        if (f === 0) return 26;
        var i = f,
          h = 0;
        return (
          (i & 8191) === 0 && ((h += 13), (i >>>= 13)),
          (i & 127) === 0 && ((h += 7), (i >>>= 7)),
          (i & 15) === 0 && ((h += 4), (i >>>= 4)),
          (i & 3) === 0 && ((h += 2), (i >>>= 2)),
          (i & 1) === 0 && h++,
          h
        );
      }),
      (s[t(1024)][t(1044)] = function () {
        var f = t,
          i = this[f(1070)][this[f(152)] - 1],
          h = this[f(731)](i);
        return (this.length - 1) * 26 + h;
      });
    function P(w) {
      for (var f = t, i = new Array(w[f(1044)]()), h = 0; h < i[f(152)]; h++) {
        var o = (h / 26) | 0,
          y = h % 26;
        i[h] = (w[f(1070)][o] >>> y) & 1;
      }
      return i;
    }
    (s[t(1024)][t(1581)] = function () {
      var f = t;
      if (this[f(770)]()) return 0;
      for (var i = 0, h = 0; h < this.length; h++) {
        var o = this[f(1834)](this[f(1070)][h]);
        if (((i += o), o !== 26)) break;
      }
      return i;
    }),
      (s[t(1024)][t(234)] = function () {
        var f = t;
        return Math[f(1277)](this[f(1044)]() / 8);
      }),
      (s[t(1024)].toTwos = function (f) {
        var i = t;
        return this[i(870)] !== 0
          ? this.abs()[i(885)](f)[i(820)](1)
          : this[i(307)]();
      }),
      (s[t(1024)].fromTwos = function (f) {
        var i = t;
        return this[i(966)](f - 1)
          ? this[i(1883)](f).iaddn(1).ineg()
          : this[i(307)]();
      }),
      (s.prototype.isNeg = function () {
        var f = t;
        return this[f(870)] !== 0;
      }),
      (s.prototype[t(840)] = function () {
        var f = t;
        return this.clone()[f(993)]();
      }),
      (s.prototype[t(993)] = function () {
        var f = t;
        return !this[f(770)]() && (this[f(870)] ^= 1), this;
      }),
      (s.prototype[t(1849)] = function (f) {
        for (var i = t; this[i(152)] < f[i(152)]; )
          this[i(1070)][this[i(152)]++] = 0;
        for (var h = 0; h < f[i(152)]; h++)
          this.words[h] = this[i(1070)][h] | f[i(1070)][h];
        return this[i(678)]();
      }),
      (s.prototype.ior = function (f) {
        var i = t;
        return r((this.negative | f[i(870)]) === 0), this[i(1849)](f);
      }),
      (s[t(1024)].or = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(708)](f)
          : f[i(307)]()[i(708)](this);
      }),
      (s[t(1024)][t(1804)] = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(1849)](f)
          : f[i(307)]()[i(1849)](this);
      }),
      (s.prototype.iuand = function (f) {
        var i = t,
          h;
        this[i(152)] > f.length ? (h = f) : (h = this);
        for (var o = 0; o < h[i(152)]; o++)
          this[i(1070)][o] = this[i(1070)][o] & f[i(1070)][o];
        return (this[i(152)] = h[i(152)]), this._strip();
      }),
      (s[t(1024)][t(420)] = function (f) {
        var i = t;
        return r((this.negative | f[i(870)]) === 0), this.iuand(f);
      }),
      (s[t(1024)][t(907)] = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this.clone()[i(420)](f)
          : f[i(307)]()[i(420)](this);
      }),
      (s[t(1024)].uand = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(1016)](f)
          : f.clone()[i(1016)](this);
      }),
      (s[t(1024)][t(621)] = function (f) {
        var i = t,
          h,
          o;
        this[i(152)] > f.length ? ((h = this), (o = f)) : ((h = f), (o = this));
        for (var y = 0; y < o[i(152)]; y++)
          this[i(1070)][y] = h[i(1070)][y] ^ o.words[y];
        if (this !== h)
          for (; y < h[i(152)]; y++) this[i(1070)][y] = h.words[y];
        return (this.length = h[i(152)]), this[i(678)]();
      }),
      (s[t(1024)].ixor = function (f) {
        var i = t;
        return r((this[i(870)] | f[i(870)]) === 0), this.iuxor(f);
      }),
      (s[t(1024)][t(333)] = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]().ixor(f)
          : f[i(307)]()[i(646)](this);
      }),
      (s.prototype[t(721)] = function (f) {
        var i = t;
        return this[i(152)] > f.length
          ? this[i(307)]().iuxor(f)
          : f[i(307)]()[i(621)](this);
      }),
      (s.prototype.inotn = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = Math[i(1277)](f / 26) | 0,
          o = f % 26;
        this._expand(h), o > 0 && h--;
        for (var y = 0; y < h; y++)
          this[i(1070)][y] = ~this[i(1070)][y] & 67108863;
        return (
          o > 0 &&
            (this[i(1070)][y] = ~this[i(1070)][y] & (67108863 >> (26 - o))),
          this[i(678)]()
        );
      }),
      (s.prototype[t(1883)] = function (f) {
        var i = t;
        return this[i(307)]()[i(885)](f);
      }),
      (s.prototype[t(185)] = function (f, i) {
        var h = t;
        r(typeof f === h(456) && f >= 0);
        var o = (f / 26) | 0,
          y = f % 26;
        return (
          this[h(1777)](o + 1),
          i
            ? (this[h(1070)][o] = this[h(1070)][o] | (1 << y))
            : (this[h(1070)][o] = this[h(1070)][o] & ~(1 << y)),
          this[h(678)]()
        );
      }),
      (s[t(1024)][t(371)] = function (f) {
        var i = t,
          h;
        if (this[i(870)] !== 0 && f[i(870)] === 0)
          return (
            (this[i(870)] = 0),
            (h = this[i(1511)](f)),
            (this.negative ^= 1),
            this[i(199)]()
          );
        if (this.negative === 0 && f[i(870)] !== 0)
          return (
            (f[i(870)] = 0),
            (h = this[i(1511)](f)),
            (f[i(870)] = 1),
            h[i(199)]()
          );
        var o, y;
        this[i(152)] > f[i(152)]
          ? ((o = this), (y = f))
          : ((o = f), (y = this));
        for (var M = 0, E = 0; E < y[i(152)]; E++)
          (h = (o[i(1070)][E] | 0) + (y.words[E] | 0) + M),
            (this.words[E] = h & 67108863),
            (M = h >>> 26);
        for (; M !== 0 && E < o[i(152)]; E++)
          (h = (o[i(1070)][E] | 0) + M),
            (this[i(1070)][E] = h & 67108863),
            (M = h >>> 26);
        if (((this[i(152)] = o[i(152)]), M !== 0))
          (this[i(1070)][this[i(152)]] = M), this[i(152)]++;
        else if (o !== this)
          for (; E < o[i(152)]; E++) this[i(1070)][E] = o[i(1070)][E];
        return this;
      }),
      (s.prototype[t(1607)] = function (f) {
        var i = t,
          h;
        return f[i(870)] !== 0 && this.negative === 0
          ? ((f.negative = 0), (h = this[i(440)](f)), (f[i(870)] ^= 1), h)
          : f[i(870)] === 0 && this[i(870)] !== 0
          ? ((this[i(870)] = 0), (h = f[i(440)](this)), (this.negative = 1), h)
          : this[i(152)] > f[i(152)]
          ? this.clone()[i(371)](f)
          : f[i(307)]()[i(371)](this);
      }),
      (s[t(1024)].isub = function (f) {
        var i = t;
        if (f[i(870)] !== 0) {
          f[i(870)] = 0;
          var h = this[i(371)](f);
          return (f.negative = 1), h[i(199)]();
        } else if (this[i(870)] !== 0)
          return (
            (this[i(870)] = 0),
            this.iadd(f),
            (this[i(870)] = 1),
            this._normSign()
          );
        var o = this.cmp(f);
        if (o === 0)
          return (
            (this.negative = 0), (this.length = 1), (this[i(1070)][0] = 0), this
          );
        var y, M;
        o > 0 ? ((y = this), (M = f)) : ((y = f), (M = this));
        for (var E = 0, A = 0; A < M[i(152)]; A++)
          (h = (y.words[A] | 0) - (M[i(1070)][A] | 0) + E),
            (E = h >> 26),
            (this[i(1070)][A] = h & 67108863);
        for (; E !== 0 && A < y.length; A++)
          (h = (y.words[A] | 0) + E),
            (E = h >> 26),
            (this.words[A] = h & 67108863);
        if (E === 0 && A < y.length && y !== this)
          for (; A < y.length; A++) this[i(1070)][A] = y[i(1070)][A];
        return (
          (this[i(152)] = Math[i(521)](this[i(152)], A)),
          y !== this && (this.negative = 1),
          this[i(678)]()
        );
      }),
      (s[t(1024)].sub = function (f) {
        var i = t;
        return this[i(307)]()[i(1511)](f);
      });
    function I(w, f, i) {
      var h = t;
      i[h(870)] = f[h(870)] ^ w[h(870)];
      var o = (w[h(152)] + f[h(152)]) | 0;
      (i[h(152)] = o), (o = (o - 1) | 0);
      var y = w[h(1070)][0] | 0,
        M = f[h(1070)][0] | 0,
        E = y * M,
        A = E & 67108863,
        b = (E / 67108864) | 0;
      i.words[0] = A;
      for (var u = 1; u < o; u++) {
        for (
          var p = b >>> 26,
            N = b & 67108863,
            C = Math[h(1403)](u, f[h(152)] - 1),
            U = Math[h(521)](0, u - w[h(152)] + 1);
          U <= C;
          U++
        ) {
          var Q = (u - U) | 0;
          (y = w.words[Q] | 0),
            (M = f[h(1070)][U] | 0),
            (E = y * M + N),
            (p += (E / 67108864) | 0),
            (N = E & 67108863);
        }
        (i[h(1070)][u] = N | 0), (b = p | 0);
      }
      return b !== 0 ? (i[h(1070)][u] = b | 0) : i[h(152)]--, i._strip();
    }
    var K = function (f, i, h) {
      var o = t,
        y = f.words,
        M = i.words,
        E = h[o(1070)],
        A = 0,
        b,
        u,
        p,
        N = y[0] | 0,
        C = N & 8191,
        U = N >>> 13,
        Q = y[1] | 0,
        J = Q & 8191,
        W = Q >>> 13,
        rx = y[2] | 0,
        _ = rx & 8191,
        e0 = rx >>> 13,
        at = y[3] | 0,
        a0 = at & 8191,
        i0 = at >>> 13,
        it = y[4] | 0,
        s0 = it & 8191,
        f0 = it >>> 13,
        st = y[5] | 0,
        c0 = st & 8191,
        o0 = st >>> 13,
        ft = y[6] | 0,
        u0 = ft & 8191,
        h0 = ft >>> 13,
        ct = y[7] | 0,
        d0 = ct & 8191,
        l0 = ct >>> 13,
        ot = y[8] | 0,
        b0 = ot & 8191,
        v0 = ot >>> 13,
        ut = y[9] | 0,
        p0 = ut & 8191,
        m0 = ut >>> 13,
        ht = M[0] | 0,
        g0 = ht & 8191,
        y0 = ht >>> 13,
        dt = M[1] | 0,
        w0 = dt & 8191,
        A0 = dt >>> 13,
        lt = M[2] | 0,
        M0 = lt & 8191,
        E0 = lt >>> 13,
        bt = M[3] | 0,
        k0 = bt & 8191,
        S0 = bt >>> 13,
        vt = M[4] | 0,
        P0 = vt & 8191,
        C0 = vt >>> 13,
        pt = M[5] | 0,
        B0 = pt & 8191,
        T0 = pt >>> 13,
        mt = M[6] | 0,
        I0 = mt & 8191,
        N0 = mt >>> 13,
        gt = M[7] | 0,
        R0 = gt & 8191,
        O0 = gt >>> 13,
        yt = M[8] | 0,
        D0 = yt & 8191,
        F0 = yt >>> 13,
        wt = M[9] | 0,
        U0 = wt & 8191,
        L0 = wt >>> 13;
      (h.negative = f.negative ^ i.negative),
        (h[o(152)] = 19),
        (b = Math.imul(C, g0)),
        (u = Math[o(706)](C, y0)),
        (u = (u + Math.imul(U, g0)) | 0),
        (p = Math[o(706)](U, y0));
      var ce = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ce >>> 26)) | 0),
        (ce &= 67108863),
        (b = Math[o(706)](J, g0)),
        (u = Math[o(706)](J, y0)),
        (u = (u + Math.imul(W, g0)) | 0),
        (p = Math.imul(W, y0)),
        (b = (b + Math.imul(C, w0)) | 0),
        (u = (u + Math.imul(C, A0)) | 0),
        (u = (u + Math[o(706)](U, w0)) | 0),
        (p = (p + Math[o(706)](U, A0)) | 0);
      var oe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (oe >>> 26)) | 0),
        (oe &= 67108863),
        (b = Math[o(706)](_, g0)),
        (u = Math[o(706)](_, y0)),
        (u = (u + Math.imul(e0, g0)) | 0),
        (p = Math[o(706)](e0, y0)),
        (b = (b + Math[o(706)](J, w0)) | 0),
        (u = (u + Math[o(706)](J, A0)) | 0),
        (u = (u + Math[o(706)](W, w0)) | 0),
        (p = (p + Math[o(706)](W, A0)) | 0),
        (b = (b + Math[o(706)](C, M0)) | 0),
        (u = (u + Math[o(706)](C, E0)) | 0),
        (u = (u + Math.imul(U, M0)) | 0),
        (p = (p + Math.imul(U, E0)) | 0);
      var ue = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ue >>> 26)) | 0),
        (ue &= 67108863),
        (b = Math.imul(a0, g0)),
        (u = Math[o(706)](a0, y0)),
        (u = (u + Math.imul(i0, g0)) | 0),
        (p = Math[o(706)](i0, y0)),
        (b = (b + Math[o(706)](_, w0)) | 0),
        (u = (u + Math[o(706)](_, A0)) | 0),
        (u = (u + Math[o(706)](e0, w0)) | 0),
        (p = (p + Math[o(706)](e0, A0)) | 0),
        (b = (b + Math[o(706)](J, M0)) | 0),
        (u = (u + Math[o(706)](J, E0)) | 0),
        (u = (u + Math.imul(W, M0)) | 0),
        (p = (p + Math[o(706)](W, E0)) | 0),
        (b = (b + Math[o(706)](C, k0)) | 0),
        (u = (u + Math[o(706)](C, S0)) | 0),
        (u = (u + Math[o(706)](U, k0)) | 0),
        (p = (p + Math[o(706)](U, S0)) | 0);
      var he = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (he >>> 26)) | 0),
        (he &= 67108863),
        (b = Math[o(706)](s0, g0)),
        (u = Math.imul(s0, y0)),
        (u = (u + Math[o(706)](f0, g0)) | 0),
        (p = Math[o(706)](f0, y0)),
        (b = (b + Math.imul(a0, w0)) | 0),
        (u = (u + Math[o(706)](a0, A0)) | 0),
        (u = (u + Math[o(706)](i0, w0)) | 0),
        (p = (p + Math[o(706)](i0, A0)) | 0),
        (b = (b + Math[o(706)](_, M0)) | 0),
        (u = (u + Math.imul(_, E0)) | 0),
        (u = (u + Math[o(706)](e0, M0)) | 0),
        (p = (p + Math[o(706)](e0, E0)) | 0),
        (b = (b + Math.imul(J, k0)) | 0),
        (u = (u + Math.imul(J, S0)) | 0),
        (u = (u + Math[o(706)](W, k0)) | 0),
        (p = (p + Math[o(706)](W, S0)) | 0),
        (b = (b + Math.imul(C, P0)) | 0),
        (u = (u + Math[o(706)](C, C0)) | 0),
        (u = (u + Math[o(706)](U, P0)) | 0),
        (p = (p + Math[o(706)](U, C0)) | 0);
      var de = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (de >>> 26)) | 0),
        (de &= 67108863),
        (b = Math[o(706)](c0, g0)),
        (u = Math[o(706)](c0, y0)),
        (u = (u + Math[o(706)](o0, g0)) | 0),
        (p = Math.imul(o0, y0)),
        (b = (b + Math[o(706)](s0, w0)) | 0),
        (u = (u + Math.imul(s0, A0)) | 0),
        (u = (u + Math[o(706)](f0, w0)) | 0),
        (p = (p + Math[o(706)](f0, A0)) | 0),
        (b = (b + Math[o(706)](a0, M0)) | 0),
        (u = (u + Math[o(706)](a0, E0)) | 0),
        (u = (u + Math[o(706)](i0, M0)) | 0),
        (p = (p + Math[o(706)](i0, E0)) | 0),
        (b = (b + Math.imul(_, k0)) | 0),
        (u = (u + Math.imul(_, S0)) | 0),
        (u = (u + Math[o(706)](e0, k0)) | 0),
        (p = (p + Math.imul(e0, S0)) | 0),
        (b = (b + Math.imul(J, P0)) | 0),
        (u = (u + Math.imul(J, C0)) | 0),
        (u = (u + Math[o(706)](W, P0)) | 0),
        (p = (p + Math.imul(W, C0)) | 0),
        (b = (b + Math[o(706)](C, B0)) | 0),
        (u = (u + Math.imul(C, T0)) | 0),
        (u = (u + Math[o(706)](U, B0)) | 0),
        (p = (p + Math[o(706)](U, T0)) | 0);
      var le = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (le >>> 26)) | 0),
        (le &= 67108863),
        (b = Math[o(706)](u0, g0)),
        (u = Math[o(706)](u0, y0)),
        (u = (u + Math[o(706)](h0, g0)) | 0),
        (p = Math[o(706)](h0, y0)),
        (b = (b + Math[o(706)](c0, w0)) | 0),
        (u = (u + Math.imul(c0, A0)) | 0),
        (u = (u + Math[o(706)](o0, w0)) | 0),
        (p = (p + Math[o(706)](o0, A0)) | 0),
        (b = (b + Math[o(706)](s0, M0)) | 0),
        (u = (u + Math[o(706)](s0, E0)) | 0),
        (u = (u + Math[o(706)](f0, M0)) | 0),
        (p = (p + Math[o(706)](f0, E0)) | 0),
        (b = (b + Math.imul(a0, k0)) | 0),
        (u = (u + Math[o(706)](a0, S0)) | 0),
        (u = (u + Math[o(706)](i0, k0)) | 0),
        (p = (p + Math.imul(i0, S0)) | 0),
        (b = (b + Math[o(706)](_, P0)) | 0),
        (u = (u + Math[o(706)](_, C0)) | 0),
        (u = (u + Math[o(706)](e0, P0)) | 0),
        (p = (p + Math[o(706)](e0, C0)) | 0),
        (b = (b + Math[o(706)](J, B0)) | 0),
        (u = (u + Math[o(706)](J, T0)) | 0),
        (u = (u + Math[o(706)](W, B0)) | 0),
        (p = (p + Math.imul(W, T0)) | 0),
        (b = (b + Math.imul(C, I0)) | 0),
        (u = (u + Math.imul(C, N0)) | 0),
        (u = (u + Math[o(706)](U, I0)) | 0),
        (p = (p + Math[o(706)](U, N0)) | 0);
      var be = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (be >>> 26)) | 0),
        (be &= 67108863),
        (b = Math[o(706)](d0, g0)),
        (u = Math[o(706)](d0, y0)),
        (u = (u + Math[o(706)](l0, g0)) | 0),
        (p = Math[o(706)](l0, y0)),
        (b = (b + Math[o(706)](u0, w0)) | 0),
        (u = (u + Math[o(706)](u0, A0)) | 0),
        (u = (u + Math.imul(h0, w0)) | 0),
        (p = (p + Math[o(706)](h0, A0)) | 0),
        (b = (b + Math[o(706)](c0, M0)) | 0),
        (u = (u + Math[o(706)](c0, E0)) | 0),
        (u = (u + Math.imul(o0, M0)) | 0),
        (p = (p + Math.imul(o0, E0)) | 0),
        (b = (b + Math[o(706)](s0, k0)) | 0),
        (u = (u + Math[o(706)](s0, S0)) | 0),
        (u = (u + Math.imul(f0, k0)) | 0),
        (p = (p + Math[o(706)](f0, S0)) | 0),
        (b = (b + Math[o(706)](a0, P0)) | 0),
        (u = (u + Math[o(706)](a0, C0)) | 0),
        (u = (u + Math.imul(i0, P0)) | 0),
        (p = (p + Math[o(706)](i0, C0)) | 0),
        (b = (b + Math[o(706)](_, B0)) | 0),
        (u = (u + Math.imul(_, T0)) | 0),
        (u = (u + Math[o(706)](e0, B0)) | 0),
        (p = (p + Math.imul(e0, T0)) | 0),
        (b = (b + Math.imul(J, I0)) | 0),
        (u = (u + Math.imul(J, N0)) | 0),
        (u = (u + Math[o(706)](W, I0)) | 0),
        (p = (p + Math[o(706)](W, N0)) | 0),
        (b = (b + Math.imul(C, R0)) | 0),
        (u = (u + Math.imul(C, O0)) | 0),
        (u = (u + Math[o(706)](U, R0)) | 0),
        (p = (p + Math[o(706)](U, O0)) | 0);
      var ve = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ve >>> 26)) | 0),
        (ve &= 67108863),
        (b = Math[o(706)](b0, g0)),
        (u = Math[o(706)](b0, y0)),
        (u = (u + Math.imul(v0, g0)) | 0),
        (p = Math.imul(v0, y0)),
        (b = (b + Math[o(706)](d0, w0)) | 0),
        (u = (u + Math[o(706)](d0, A0)) | 0),
        (u = (u + Math[o(706)](l0, w0)) | 0),
        (p = (p + Math.imul(l0, A0)) | 0),
        (b = (b + Math[o(706)](u0, M0)) | 0),
        (u = (u + Math[o(706)](u0, E0)) | 0),
        (u = (u + Math[o(706)](h0, M0)) | 0),
        (p = (p + Math[o(706)](h0, E0)) | 0),
        (b = (b + Math[o(706)](c0, k0)) | 0),
        (u = (u + Math[o(706)](c0, S0)) | 0),
        (u = (u + Math[o(706)](o0, k0)) | 0),
        (p = (p + Math[o(706)](o0, S0)) | 0),
        (b = (b + Math[o(706)](s0, P0)) | 0),
        (u = (u + Math[o(706)](s0, C0)) | 0),
        (u = (u + Math.imul(f0, P0)) | 0),
        (p = (p + Math.imul(f0, C0)) | 0),
        (b = (b + Math.imul(a0, B0)) | 0),
        (u = (u + Math.imul(a0, T0)) | 0),
        (u = (u + Math.imul(i0, B0)) | 0),
        (p = (p + Math.imul(i0, T0)) | 0),
        (b = (b + Math[o(706)](_, I0)) | 0),
        (u = (u + Math.imul(_, N0)) | 0),
        (u = (u + Math[o(706)](e0, I0)) | 0),
        (p = (p + Math.imul(e0, N0)) | 0),
        (b = (b + Math[o(706)](J, R0)) | 0),
        (u = (u + Math[o(706)](J, O0)) | 0),
        (u = (u + Math.imul(W, R0)) | 0),
        (p = (p + Math[o(706)](W, O0)) | 0),
        (b = (b + Math[o(706)](C, D0)) | 0),
        (u = (u + Math.imul(C, F0)) | 0),
        (u = (u + Math[o(706)](U, D0)) | 0),
        (p = (p + Math[o(706)](U, F0)) | 0);
      var pe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (pe >>> 26)) | 0),
        (pe &= 67108863),
        (b = Math.imul(p0, g0)),
        (u = Math[o(706)](p0, y0)),
        (u = (u + Math[o(706)](m0, g0)) | 0),
        (p = Math[o(706)](m0, y0)),
        (b = (b + Math.imul(b0, w0)) | 0),
        (u = (u + Math[o(706)](b0, A0)) | 0),
        (u = (u + Math[o(706)](v0, w0)) | 0),
        (p = (p + Math[o(706)](v0, A0)) | 0),
        (b = (b + Math[o(706)](d0, M0)) | 0),
        (u = (u + Math[o(706)](d0, E0)) | 0),
        (u = (u + Math[o(706)](l0, M0)) | 0),
        (p = (p + Math[o(706)](l0, E0)) | 0),
        (b = (b + Math[o(706)](u0, k0)) | 0),
        (u = (u + Math.imul(u0, S0)) | 0),
        (u = (u + Math[o(706)](h0, k0)) | 0),
        (p = (p + Math.imul(h0, S0)) | 0),
        (b = (b + Math[o(706)](c0, P0)) | 0),
        (u = (u + Math[o(706)](c0, C0)) | 0),
        (u = (u + Math.imul(o0, P0)) | 0),
        (p = (p + Math[o(706)](o0, C0)) | 0),
        (b = (b + Math[o(706)](s0, B0)) | 0),
        (u = (u + Math[o(706)](s0, T0)) | 0),
        (u = (u + Math.imul(f0, B0)) | 0),
        (p = (p + Math[o(706)](f0, T0)) | 0),
        (b = (b + Math[o(706)](a0, I0)) | 0),
        (u = (u + Math[o(706)](a0, N0)) | 0),
        (u = (u + Math[o(706)](i0, I0)) | 0),
        (p = (p + Math[o(706)](i0, N0)) | 0),
        (b = (b + Math[o(706)](_, R0)) | 0),
        (u = (u + Math.imul(_, O0)) | 0),
        (u = (u + Math[o(706)](e0, R0)) | 0),
        (p = (p + Math[o(706)](e0, O0)) | 0),
        (b = (b + Math[o(706)](J, D0)) | 0),
        (u = (u + Math.imul(J, F0)) | 0),
        (u = (u + Math.imul(W, D0)) | 0),
        (p = (p + Math[o(706)](W, F0)) | 0),
        (b = (b + Math[o(706)](C, U0)) | 0),
        (u = (u + Math[o(706)](C, L0)) | 0),
        (u = (u + Math[o(706)](U, U0)) | 0),
        (p = (p + Math[o(706)](U, L0)) | 0);
      var me = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (me >>> 26)) | 0),
        (me &= 67108863),
        (b = Math.imul(p0, w0)),
        (u = Math[o(706)](p0, A0)),
        (u = (u + Math[o(706)](m0, w0)) | 0),
        (p = Math[o(706)](m0, A0)),
        (b = (b + Math[o(706)](b0, M0)) | 0),
        (u = (u + Math.imul(b0, E0)) | 0),
        (u = (u + Math[o(706)](v0, M0)) | 0),
        (p = (p + Math[o(706)](v0, E0)) | 0),
        (b = (b + Math[o(706)](d0, k0)) | 0),
        (u = (u + Math[o(706)](d0, S0)) | 0),
        (u = (u + Math[o(706)](l0, k0)) | 0),
        (p = (p + Math[o(706)](l0, S0)) | 0),
        (b = (b + Math[o(706)](u0, P0)) | 0),
        (u = (u + Math[o(706)](u0, C0)) | 0),
        (u = (u + Math.imul(h0, P0)) | 0),
        (p = (p + Math[o(706)](h0, C0)) | 0),
        (b = (b + Math[o(706)](c0, B0)) | 0),
        (u = (u + Math[o(706)](c0, T0)) | 0),
        (u = (u + Math.imul(o0, B0)) | 0),
        (p = (p + Math[o(706)](o0, T0)) | 0),
        (b = (b + Math[o(706)](s0, I0)) | 0),
        (u = (u + Math[o(706)](s0, N0)) | 0),
        (u = (u + Math[o(706)](f0, I0)) | 0),
        (p = (p + Math[o(706)](f0, N0)) | 0),
        (b = (b + Math[o(706)](a0, R0)) | 0),
        (u = (u + Math[o(706)](a0, O0)) | 0),
        (u = (u + Math[o(706)](i0, R0)) | 0),
        (p = (p + Math.imul(i0, O0)) | 0),
        (b = (b + Math[o(706)](_, D0)) | 0),
        (u = (u + Math.imul(_, F0)) | 0),
        (u = (u + Math[o(706)](e0, D0)) | 0),
        (p = (p + Math[o(706)](e0, F0)) | 0),
        (b = (b + Math[o(706)](J, U0)) | 0),
        (u = (u + Math.imul(J, L0)) | 0),
        (u = (u + Math.imul(W, U0)) | 0),
        (p = (p + Math.imul(W, L0)) | 0);
      var ge = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ge >>> 26)) | 0),
        (ge &= 67108863),
        (b = Math[o(706)](p0, M0)),
        (u = Math.imul(p0, E0)),
        (u = (u + Math[o(706)](m0, M0)) | 0),
        (p = Math[o(706)](m0, E0)),
        (b = (b + Math[o(706)](b0, k0)) | 0),
        (u = (u + Math.imul(b0, S0)) | 0),
        (u = (u + Math[o(706)](v0, k0)) | 0),
        (p = (p + Math[o(706)](v0, S0)) | 0),
        (b = (b + Math[o(706)](d0, P0)) | 0),
        (u = (u + Math[o(706)](d0, C0)) | 0),
        (u = (u + Math.imul(l0, P0)) | 0),
        (p = (p + Math[o(706)](l0, C0)) | 0),
        (b = (b + Math.imul(u0, B0)) | 0),
        (u = (u + Math[o(706)](u0, T0)) | 0),
        (u = (u + Math[o(706)](h0, B0)) | 0),
        (p = (p + Math.imul(h0, T0)) | 0),
        (b = (b + Math.imul(c0, I0)) | 0),
        (u = (u + Math[o(706)](c0, N0)) | 0),
        (u = (u + Math[o(706)](o0, I0)) | 0),
        (p = (p + Math[o(706)](o0, N0)) | 0),
        (b = (b + Math[o(706)](s0, R0)) | 0),
        (u = (u + Math[o(706)](s0, O0)) | 0),
        (u = (u + Math[o(706)](f0, R0)) | 0),
        (p = (p + Math[o(706)](f0, O0)) | 0),
        (b = (b + Math[o(706)](a0, D0)) | 0),
        (u = (u + Math[o(706)](a0, F0)) | 0),
        (u = (u + Math[o(706)](i0, D0)) | 0),
        (p = (p + Math[o(706)](i0, F0)) | 0),
        (b = (b + Math[o(706)](_, U0)) | 0),
        (u = (u + Math.imul(_, L0)) | 0),
        (u = (u + Math.imul(e0, U0)) | 0),
        (p = (p + Math[o(706)](e0, L0)) | 0);
      var ye = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ye >>> 26)) | 0),
        (ye &= 67108863),
        (b = Math[o(706)](p0, k0)),
        (u = Math[o(706)](p0, S0)),
        (u = (u + Math[o(706)](m0, k0)) | 0),
        (p = Math[o(706)](m0, S0)),
        (b = (b + Math.imul(b0, P0)) | 0),
        (u = (u + Math[o(706)](b0, C0)) | 0),
        (u = (u + Math[o(706)](v0, P0)) | 0),
        (p = (p + Math[o(706)](v0, C0)) | 0),
        (b = (b + Math[o(706)](d0, B0)) | 0),
        (u = (u + Math[o(706)](d0, T0)) | 0),
        (u = (u + Math[o(706)](l0, B0)) | 0),
        (p = (p + Math[o(706)](l0, T0)) | 0),
        (b = (b + Math.imul(u0, I0)) | 0),
        (u = (u + Math[o(706)](u0, N0)) | 0),
        (u = (u + Math[o(706)](h0, I0)) | 0),
        (p = (p + Math[o(706)](h0, N0)) | 0),
        (b = (b + Math[o(706)](c0, R0)) | 0),
        (u = (u + Math.imul(c0, O0)) | 0),
        (u = (u + Math[o(706)](o0, R0)) | 0),
        (p = (p + Math.imul(o0, O0)) | 0),
        (b = (b + Math[o(706)](s0, D0)) | 0),
        (u = (u + Math.imul(s0, F0)) | 0),
        (u = (u + Math[o(706)](f0, D0)) | 0),
        (p = (p + Math[o(706)](f0, F0)) | 0),
        (b = (b + Math.imul(a0, U0)) | 0),
        (u = (u + Math.imul(a0, L0)) | 0),
        (u = (u + Math[o(706)](i0, U0)) | 0),
        (p = (p + Math[o(706)](i0, L0)) | 0);
      var we = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (we >>> 26)) | 0),
        (we &= 67108863),
        (b = Math[o(706)](p0, P0)),
        (u = Math[o(706)](p0, C0)),
        (u = (u + Math[o(706)](m0, P0)) | 0),
        (p = Math[o(706)](m0, C0)),
        (b = (b + Math[o(706)](b0, B0)) | 0),
        (u = (u + Math[o(706)](b0, T0)) | 0),
        (u = (u + Math.imul(v0, B0)) | 0),
        (p = (p + Math[o(706)](v0, T0)) | 0),
        (b = (b + Math[o(706)](d0, I0)) | 0),
        (u = (u + Math[o(706)](d0, N0)) | 0),
        (u = (u + Math[o(706)](l0, I0)) | 0),
        (p = (p + Math[o(706)](l0, N0)) | 0),
        (b = (b + Math[o(706)](u0, R0)) | 0),
        (u = (u + Math.imul(u0, O0)) | 0),
        (u = (u + Math[o(706)](h0, R0)) | 0),
        (p = (p + Math[o(706)](h0, O0)) | 0),
        (b = (b + Math[o(706)](c0, D0)) | 0),
        (u = (u + Math[o(706)](c0, F0)) | 0),
        (u = (u + Math[o(706)](o0, D0)) | 0),
        (p = (p + Math[o(706)](o0, F0)) | 0),
        (b = (b + Math[o(706)](s0, U0)) | 0),
        (u = (u + Math[o(706)](s0, L0)) | 0),
        (u = (u + Math.imul(f0, U0)) | 0),
        (p = (p + Math.imul(f0, L0)) | 0);
      var Ae = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Ae >>> 26)) | 0),
        (Ae &= 67108863),
        (b = Math.imul(p0, B0)),
        (u = Math[o(706)](p0, T0)),
        (u = (u + Math[o(706)](m0, B0)) | 0),
        (p = Math[o(706)](m0, T0)),
        (b = (b + Math[o(706)](b0, I0)) | 0),
        (u = (u + Math[o(706)](b0, N0)) | 0),
        (u = (u + Math.imul(v0, I0)) | 0),
        (p = (p + Math[o(706)](v0, N0)) | 0),
        (b = (b + Math[o(706)](d0, R0)) | 0),
        (u = (u + Math[o(706)](d0, O0)) | 0),
        (u = (u + Math[o(706)](l0, R0)) | 0),
        (p = (p + Math[o(706)](l0, O0)) | 0),
        (b = (b + Math[o(706)](u0, D0)) | 0),
        (u = (u + Math[o(706)](u0, F0)) | 0),
        (u = (u + Math[o(706)](h0, D0)) | 0),
        (p = (p + Math[o(706)](h0, F0)) | 0),
        (b = (b + Math[o(706)](c0, U0)) | 0),
        (u = (u + Math[o(706)](c0, L0)) | 0),
        (u = (u + Math.imul(o0, U0)) | 0),
        (p = (p + Math.imul(o0, L0)) | 0);
      var Me = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Me >>> 26)) | 0),
        (Me &= 67108863),
        (b = Math.imul(p0, I0)),
        (u = Math[o(706)](p0, N0)),
        (u = (u + Math[o(706)](m0, I0)) | 0),
        (p = Math[o(706)](m0, N0)),
        (b = (b + Math[o(706)](b0, R0)) | 0),
        (u = (u + Math[o(706)](b0, O0)) | 0),
        (u = (u + Math[o(706)](v0, R0)) | 0),
        (p = (p + Math[o(706)](v0, O0)) | 0),
        (b = (b + Math.imul(d0, D0)) | 0),
        (u = (u + Math[o(706)](d0, F0)) | 0),
        (u = (u + Math[o(706)](l0, D0)) | 0),
        (p = (p + Math[o(706)](l0, F0)) | 0),
        (b = (b + Math[o(706)](u0, U0)) | 0),
        (u = (u + Math[o(706)](u0, L0)) | 0),
        (u = (u + Math.imul(h0, U0)) | 0),
        (p = (p + Math[o(706)](h0, L0)) | 0);
      var Ee = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Ee >>> 26)) | 0),
        (Ee &= 67108863),
        (b = Math.imul(p0, R0)),
        (u = Math.imul(p0, O0)),
        (u = (u + Math[o(706)](m0, R0)) | 0),
        (p = Math[o(706)](m0, O0)),
        (b = (b + Math[o(706)](b0, D0)) | 0),
        (u = (u + Math.imul(b0, F0)) | 0),
        (u = (u + Math[o(706)](v0, D0)) | 0),
        (p = (p + Math[o(706)](v0, F0)) | 0),
        (b = (b + Math[o(706)](d0, U0)) | 0),
        (u = (u + Math[o(706)](d0, L0)) | 0),
        (u = (u + Math.imul(l0, U0)) | 0),
        (p = (p + Math.imul(l0, L0)) | 0);
      var ke = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ke >>> 26)) | 0),
        (ke &= 67108863),
        (b = Math.imul(p0, D0)),
        (u = Math[o(706)](p0, F0)),
        (u = (u + Math[o(706)](m0, D0)) | 0),
        (p = Math[o(706)](m0, F0)),
        (b = (b + Math.imul(b0, U0)) | 0),
        (u = (u + Math.imul(b0, L0)) | 0),
        (u = (u + Math[o(706)](v0, U0)) | 0),
        (p = (p + Math[o(706)](v0, L0)) | 0);
      var Se = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Se >>> 26)) | 0),
        (Se &= 67108863),
        (b = Math[o(706)](p0, U0)),
        (u = Math[o(706)](p0, L0)),
        (u = (u + Math.imul(m0, U0)) | 0),
        (p = Math.imul(m0, L0));
      var Pe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      return (
        (A = (((p + (u >>> 13)) | 0) + (Pe >>> 26)) | 0),
        (Pe &= 67108863),
        (E[0] = ce),
        (E[1] = oe),
        (E[2] = ue),
        (E[3] = he),
        (E[4] = de),
        (E[5] = le),
        (E[6] = be),
        (E[7] = ve),
        (E[8] = pe),
        (E[9] = me),
        (E[10] = ge),
        (E[11] = ye),
        (E[12] = we),
        (E[13] = Ae),
        (E[14] = Me),
        (E[15] = Ee),
        (E[16] = ke),
        (E[17] = Se),
        (E[18] = Pe),
        A !== 0 && ((E[19] = A), h[o(152)]++),
        h
      );
    };
    !Math[t(706)] && (K = I);
    function G(w, f, i) {
      var h = t;
      (i[h(870)] = f[h(870)] ^ w[h(870)]), (i[h(152)] = w[h(152)] + f[h(152)]);
      for (var o = 0, y = 0, M = 0; M < i[h(152)] - 1; M++) {
        var E = y;
        y = 0;
        for (
          var A = o & 67108863,
            b = Math.min(M, f.length - 1),
            u = Math[h(521)](0, M - w[h(152)] + 1);
          u <= b;
          u++
        ) {
          var p = M - u,
            N = w[h(1070)][p] | 0,
            C = f[h(1070)][u] | 0,
            U = N * C,
            Q = U & 67108863;
          (E = (E + ((U / 67108864) | 0)) | 0),
            (Q = (Q + A) | 0),
            (A = Q & 67108863),
            (E = (E + (Q >>> 26)) | 0),
            (y += E >>> 26),
            (E &= 67108863);
        }
        (i[h(1070)][M] = A), (o = E), (E = y);
      }
      return o !== 0 ? (i.words[M] = o) : i[h(152)]--, i._strip();
    }
    function V(w, f, i) {
      return G(w, f, i);
    }
    (s[t(1024)].mulTo = function (f, i) {
      var h = t,
        o,
        y = this.length + f[h(152)];
      return (
        this.length === 10 && f[h(152)] === 10
          ? (o = K(this, f, i))
          : y < 63
          ? (o = I(this, f, i))
          : y < 1024
          ? (o = G(this, f, i))
          : (o = V(this, f, i)),
        o
      );
    }),
      (s.prototype[t(1426)] = function (f) {
        var i = t,
          h = new s(null);
        return (
          (h.words = new Array(this[i(152)] + f.length)), this[i(1074)](f, h)
        );
      }),
      (s[t(1024)][t(1964)] = function (f) {
        var i = t,
          h = new s(null);
        return (h[i(1070)] = new Array(this.length + f[i(152)])), V(this, f, h);
      }),
      (s[t(1024)][t(706)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1074)](f, this);
      }),
      (s[t(1024)].imuln = function (f) {
        var i = t,
          h = f < 0;
        h && (f = -f), r(typeof f == "number"), r(f < 67108864);
        for (var o = 0, y = 0; y < this[i(152)]; y++) {
          var M = (this[i(1070)][y] | 0) * f,
            E = (M & 67108863) + (o & 67108863);
          (o >>= 26),
            (o += (M / 67108864) | 0),
            (o += E >>> 26),
            (this.words[y] = E & 67108863);
        }
        return (
          o !== 0 && ((this[i(1070)][y] = o), this.length++),
          h ? this.ineg() : this
        );
      }),
      (s[t(1024)].muln = function (f) {
        var i = t;
        return this[i(307)]()[i(945)](f);
      }),
      (s.prototype[t(1435)] = function () {
        var f = t;
        return this[f(1426)](this);
      }),
      (s[t(1024)].isqr = function () {
        var f = t;
        return this.imul(this[f(307)]());
      }),
      (s[t(1024)][t(1538)] = function (f) {
        var i = t,
          h = P(f);
        if (h.length === 0) return new s(1);
        for (
          var o = this, y = 0;
          y < h[i(152)] && h[y] === 0;
          y++, o = o[i(1435)]()
        );
        if (++y < h.length)
          for (var M = o.sqr(); y < h[i(152)]; y++, M = M[i(1435)]())
            h[y] !== 0 && (o = o[i(1426)](M));
        return o;
      }),
      (s[t(1024)].iushln = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = f % 26,
          o = (f - h) / 26,
          y = (67108863 >>> (26 - h)) << (26 - h),
          M;
        if (h !== 0) {
          var E = 0;
          for (M = 0; M < this.length; M++) {
            var A = this[i(1070)][M] & y,
              b = ((this[i(1070)][M] | 0) - A) << h;
            (this[i(1070)][M] = b | E), (E = A >>> (26 - h));
          }
          E && ((this[i(1070)][M] = E), this[i(152)]++);
        }
        if (o !== 0) {
          for (M = this.length - 1; M >= 0; M--)
            this[i(1070)][M + o] = this.words[M];
          for (M = 0; M < o; M++) this[i(1070)][M] = 0;
          this[i(152)] += o;
        }
        return this[i(678)]();
      }),
      (s.prototype.ishln = function (f) {
        var i = t;
        return r(this[i(870)] === 0), this[i(1595)](f);
      }),
      (s[t(1024)].iushrn = function (f, i, h) {
        var o = t;
        r(typeof f == "number" && f >= 0);
        var y;
        i ? (y = (i - (i % 26)) / 26) : (y = 0);
        var M = f % 26,
          E = Math[o(1403)]((f - M) / 26, this.length),
          A = 67108863 ^ ((67108863 >>> M) << M),
          b = h;
        if (((y -= E), (y = Math.max(0, y)), b)) {
          for (var u = 0; u < E; u++) b.words[u] = this[o(1070)][u];
          b.length = E;
        }
        if (E !== 0)
          if (this[o(152)] > E)
            for (this[o(152)] -= E, u = 0; u < this[o(152)]; u++)
              this[o(1070)][u] = this.words[u + E];
          else (this[o(1070)][0] = 0), (this.length = 1);
        var p = 0;
        for (u = this[o(152)] - 1; u >= 0 && (p !== 0 || u >= y); u--) {
          var N = this[o(1070)][u] | 0;
          (this[o(1070)][u] = (p << (26 - M)) | (N >>> M)), (p = N & A);
        }
        return (
          b && p !== 0 && (b.words[b[o(152)]++] = p),
          this[o(152)] === 0 && ((this.words[0] = 0), (this[o(152)] = 1)),
          this[o(678)]()
        );
      }),
      (s[t(1024)].ishrn = function (f, i, h) {
        var o = t;
        return r(this[o(870)] === 0), this.iushrn(f, i, h);
      }),
      (s[t(1024)][t(639)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1528)](f);
      }),
      (s[t(1024)][t(1244)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1595)](f);
      }),
      (s[t(1024)][t(1791)] = function (f) {
        var i = t;
        return this[i(307)]()[i(616)](f);
      }),
      (s.prototype[t(1928)] = function (f) {
        var i = t;
        return this.clone()[i(1064)](f);
      }),
      (s.prototype[t(966)] = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = f % 26,
          o = (f - h) / 26,
          y = 1 << h;
        if (this[i(152)] <= o) return ![];
        var M = this[i(1070)][o];
        return !!(M & y);
      }),
      (s[t(1024)].imaskn = function (f) {
        var i = t;
        r(typeof f == "number" && f >= 0);
        var h = f % 26,
          o = (f - h) / 26;
        if ((r(this[i(870)] === 0, i(1090)), this[i(152)] <= o)) return this;
        if (
          (h !== 0 && o++,
          (this.length = Math[i(1403)](o, this[i(152)])),
          h !== 0)
        ) {
          var y = 67108863 ^ ((67108863 >>> h) << h);
          this.words[this[i(152)] - 1] &= y;
        }
        return this._strip();
      }),
      (s[t(1024)].maskn = function (f) {
        var i = t;
        return this[i(307)]()[i(728)](f);
      }),
      (s[t(1024)][t(820)] = function (f) {
        var i = t;
        return (
          r(typeof f == "number"),
          r(f < 67108864),
          f < 0
            ? this.isubn(-f)
            : this[i(870)] !== 0
            ? this[i(152)] === 1 && (this[i(1070)][0] | 0) <= f
              ? ((this[i(1070)][0] = f - (this[i(1070)][0] | 0)),
                (this[i(870)] = 0),
                this)
              : ((this[i(870)] = 0), this[i(1198)](f), (this[i(870)] = 1), this)
            : this._iaddn(f)
        );
      }),
      (s[t(1024)]._iaddn = function (f) {
        var i = t;
        this[i(1070)][0] += f;
        for (var h = 0; h < this[i(152)] && this[i(1070)][h] >= 67108864; h++)
          (this[i(1070)][h] -= 67108864),
            h === this[i(152)] - 1
              ? (this.words[h + 1] = 1)
              : this[i(1070)][h + 1]++;
        return (this[i(152)] = Math[i(521)](this[i(152)], h + 1)), this;
      }),
      (s.prototype[t(1198)] = function (f) {
        var i = t;
        if ((r(typeof f === i(456)), r(f < 67108864), f < 0))
          return this.iaddn(-f);
        if (this[i(870)] !== 0)
          return (this[i(870)] = 0), this.iaddn(f), (this[i(870)] = 1), this;
        if (
          ((this[i(1070)][0] -= f), this[i(152)] === 1 && this[i(1070)][0] < 0)
        )
          (this[i(1070)][0] = -this[i(1070)][0]), (this[i(870)] = 1);
        else
          for (var h = 0; h < this.length && this[i(1070)][h] < 0; h++)
            (this[i(1070)][h] += 67108864), (this[i(1070)][h + 1] -= 1);
        return this[i(678)]();
      }),
      (s[t(1024)].addn = function (f) {
        var i = t;
        return this[i(307)]().iaddn(f);
      }),
      (s[t(1024)].subn = function (f) {
        return this.clone().isubn(f);
      }),
      (s.prototype[t(1289)] = function () {
        var f = t;
        return (this[f(870)] = 0), this;
      }),
      (s[t(1024)][t(238)] = function () {
        var f = t;
        return this.clone()[f(1289)]();
      }),
      (s[t(1024)][t(1683)] = function (f, i, h) {
        var o = t,
          y = f[o(152)] + h,
          M;
        this._expand(y);
        var E,
          A = 0;
        for (M = 0; M < f[o(152)]; M++) {
          E = (this[o(1070)][M + h] | 0) + A;
          var b = (f.words[M] | 0) * i;
          (E -= b & 67108863),
            (A = (E >> 26) - ((b / 67108864) | 0)),
            (this[o(1070)][M + h] = E & 67108863);
        }
        for (; M < this.length - h; M++)
          (E = (this[o(1070)][M + h] | 0) + A),
            (A = E >> 26),
            (this[o(1070)][M + h] = E & 67108863);
        if (A === 0) return this._strip();
        for (r(A === -1), A = 0, M = 0; M < this.length; M++)
          (E = -(this.words[M] | 0) + A),
            (A = E >> 26),
            (this.words[M] = E & 67108863);
        return (this.negative = 1), this[o(678)]();
      }),
      (s[t(1024)]._wordDiv = function (f, i) {
        var h = t,
          o = this.length - f[h(152)],
          y = this[h(307)](),
          M = f,
          E = M[h(1070)][M[h(152)] - 1] | 0,
          A = this[h(731)](E);
        (o = 26 - A),
          o !== 0 &&
            ((M = M[h(1244)](o)),
            y[h(1595)](o),
            (E = M[h(1070)][M.length - 1] | 0));
        var b = y.length - M[h(152)],
          u;
        if (i !== h(1265)) {
          (u = new s(null)),
            (u.length = b + 1),
            (u[h(1070)] = new Array(u[h(152)]));
          for (var p = 0; p < u[h(152)]; p++) u[h(1070)][p] = 0;
        }
        var N = y[h(307)]()._ishlnsubmul(M, 1, b);
        N[h(870)] === 0 && ((y = N), u && (u[h(1070)][b] = 1));
        for (var C = b - 1; C >= 0; C--) {
          var U =
            (y[h(1070)][M[h(152)] + C] | 0) * 67108864 +
            (y[h(1070)][M.length + C - 1] | 0);
          for (
            U = Math.min((U / E) | 0, 67108863), y._ishlnsubmul(M, U, C);
            y.negative !== 0;

          )
            U--,
              (y[h(870)] = 0),
              y[h(1683)](M, 1, C),
              !y[h(770)]() && (y[h(870)] ^= 1);
          u && (u.words[C] = U);
        }
        return (
          u && u[h(678)](),
          y._strip(),
          i !== "div" && o !== 0 && y[h(1064)](o),
          { div: u || null, mod: y }
        );
      }),
      (s[t(1024)][t(453)] = function (f, i, h) {
        var o = t;
        if ((r(!f.isZero()), this[o(770)]()))
          return { div: new s(0), mod: new s(0) };
        var y, M, E;
        return this[o(870)] !== 0 && f[o(870)] === 0
          ? ((E = this.neg()[o(453)](f, i)),
            i !== o(1265) && (y = E.div[o(840)]()),
            i !== "div" &&
              ((M = E[o(1265)][o(840)]()),
              h && M[o(870)] !== 0 && M[o(371)](f)),
            { div: y, mod: M })
          : this[o(870)] === 0 && f[o(870)] !== 0
          ? ((E = this[o(453)](f[o(840)](), i)),
            i !== o(1265) && (y = E[o(213)][o(840)]()),
            { div: y, mod: E[o(1265)] })
          : (this[o(870)] & f[o(870)]) !== 0
          ? ((E = this.neg()[o(453)](f[o(840)](), i)),
            i !== o(213) &&
              ((M = E[o(1265)].neg()), h && M[o(870)] !== 0 && M[o(1511)](f)),
            { div: E[o(213)], mod: M })
          : f.length > this[o(152)] || this.cmp(f) < 0
          ? { div: new s(0), mod: this }
          : f.length === 1
          ? i === "div"
            ? { div: this[o(1318)](f[o(1070)][0]), mod: null }
            : i === o(1265)
            ? { div: null, mod: new s(this[o(841)](f[o(1070)][0])) }
            : {
                div: this[o(1318)](f.words[0]),
                mod: new s(this[o(841)](f.words[0])),
              }
          : this[o(670)](f, i);
      }),
      (s[t(1024)][t(213)] = function (f) {
        var i = t;
        return this.divmod(f, i(213), ![]).div;
      }),
      (s[t(1024)][t(1265)] = function (f) {
        var i = t;
        return this[i(453)](f, i(1265), ![])[i(1265)];
      }),
      (s[t(1024)][t(940)] = function (f) {
        var i = t;
        return this[i(453)](f, i(1265), !![])[i(1265)];
      }),
      (s[t(1024)].divRound = function (f) {
        var i = t,
          h = this[i(453)](f);
        if (h[i(1265)][i(770)]()) return h[i(213)];
        var o = h[i(213)][i(870)] !== 0 ? h[i(1265)][i(1511)](f) : h[i(1265)],
          y = f[i(1928)](1),
          M = f[i(1319)](1),
          E = o[i(1999)](y);
        return E < 0 || (M === 1 && E === 0)
          ? h[i(213)]
          : h[i(213)][i(870)] !== 0
          ? h[i(213)].isubn(1)
          : h[i(213)][i(820)](1);
      }),
      (s[t(1024)].modrn = function (f) {
        var i = t,
          h = f < 0;
        h && (f = -f), r(f <= 67108863);
        for (var o = (1 << 26) % f, y = 0, M = this[i(152)] - 1; M >= 0; M--)
          y = (o * y + (this[i(1070)][M] | 0)) % f;
        return h ? -y : y;
      }),
      (s[t(1024)][t(1847)] = function (f) {
        var i = t;
        return this[i(841)](f);
      }),
      (s[t(1024)][t(1476)] = function (f) {
        var i = t,
          h = f < 0;
        h && (f = -f), r(f <= 67108863);
        for (var o = 0, y = this[i(152)] - 1; y >= 0; y--) {
          var M = (this[i(1070)][y] | 0) + o * 67108864;
          (this[i(1070)][y] = (M / f) | 0), (o = M % f);
        }
        return this[i(678)](), h ? this[i(993)]() : this;
      }),
      (s[t(1024)][t(1318)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1476)](f);
      }),
      (s[t(1024)][t(1914)] = function (f) {
        var i = t;
        r(f[i(870)] === 0), r(!f.isZero());
        var h = this,
          o = f[i(307)]();
        h[i(870)] !== 0 ? (h = h[i(940)](f)) : (h = h.clone());
        for (
          var y = new s(1), M = new s(0), E = new s(0), A = new s(1), b = 0;
          h.isEven() && o[i(912)]();

        )
          h[i(1064)](1), o.iushrn(1), ++b;
        for (var u = o.clone(), p = h.clone(); !h[i(770)](); ) {
          for (
            var N = 0, C = 1;
            (h.words[0] & C) === 0 && N < 26;
            ++N, C <<= 1
          );
          if (N > 0)
            for (h[i(1064)](N); N-- > 0; )
              (y[i(950)]() || M.isOdd()) && (y[i(371)](u), M[i(1511)](p)),
                y.iushrn(1),
                M[i(1064)](1);
          for (
            var U = 0, Q = 1;
            (o.words[0] & Q) === 0 && U < 26;
            ++U, Q <<= 1
          );
          if (U > 0)
            for (o.iushrn(U); U-- > 0; )
              (E[i(950)]() || A[i(950)]()) && (E[i(371)](u), A[i(1511)](p)),
                E[i(1064)](1),
                A.iushrn(1);
          h.cmp(o) >= 0
            ? (h[i(1511)](o), y[i(1511)](E), M[i(1511)](A))
            : (o[i(1511)](h), E.isub(y), A[i(1511)](M));
        }
        return { a: E, b: A, gcd: o[i(1595)](b) };
      }),
      (s[t(1024)][t(1283)] = function (f) {
        var i = t;
        r(f[i(870)] === 0), r(!f[i(770)]());
        var h = this,
          o = f[i(307)]();
        h.negative !== 0 ? (h = h[i(940)](f)) : (h = h[i(307)]());
        for (
          var y = new s(1), M = new s(0), E = o[i(307)]();
          h[i(491)](1) > 0 && o[i(491)](1) > 0;

        ) {
          for (
            var A = 0, b = 1;
            (h[i(1070)][0] & b) === 0 && A < 26;
            ++A, b <<= 1
          );
          if (A > 0)
            for (h[i(1064)](A); A-- > 0; )
              y.isOdd() && y[i(371)](E), y[i(1064)](1);
          for (
            var u = 0, p = 1;
            (o[i(1070)][0] & p) === 0 && u < 26;
            ++u, p <<= 1
          );
          if (u > 0)
            for (o[i(1064)](u); u-- > 0; )
              M[i(950)]() && M[i(371)](E), M[i(1064)](1);
          h.cmp(o) >= 0
            ? (h[i(1511)](o), y[i(1511)](M))
            : (o.isub(h), M.isub(y));
        }
        var N;
        return (
          h[i(491)](1) === 0 ? (N = y) : (N = M),
          N.cmpn(0) < 0 && N[i(371)](f),
          N
        );
      }),
      (s[t(1024)][t(1268)] = function (f) {
        var i = t;
        if (this[i(770)]()) return f.abs();
        if (f[i(770)]()) return this.abs();
        var h = this[i(307)](),
          o = f[i(307)]();
        (h[i(870)] = 0), (o[i(870)] = 0);
        for (var y = 0; h[i(912)]() && o[i(912)](); y++)
          h.iushrn(1), o[i(1064)](1);
        do {
          for (; h[i(912)](); ) h.iushrn(1);
          for (; o[i(912)](); ) o[i(1064)](1);
          var M = h[i(1999)](o);
          if (M < 0) {
            var E = h;
            (h = o), (o = E);
          } else if (M === 0 || o[i(491)](1) === 0) break;
          h.isub(o);
        } while ([]);
        return o.iushln(y);
      }),
      (s[t(1024)][t(176)] = function (f) {
        var i = t;
        return this.egcd(f).a[i(940)](f);
      }),
      (s[t(1024)][t(912)] = function () {
        var f = t;
        return (this[f(1070)][0] & 1) === 0;
      }),
      (s[t(1024)][t(950)] = function () {
        var f = t;
        return (this[f(1070)][0] & 1) === 1;
      }),
      (s[t(1024)].andln = function (f) {
        var i = t;
        return this[i(1070)][0] & f;
      }),
      (s[t(1024)][t(1894)] = function (f) {
        var i = t;
        r(typeof f === i(456));
        var h = f % 26,
          o = (f - h) / 26,
          y = 1 << h;
        if (this[i(152)] <= o)
          return this[i(1777)](o + 1), (this[i(1070)][o] |= y), this;
        for (var M = y, E = o; M !== 0 && E < this[i(152)]; E++) {
          var A = this[i(1070)][E] | 0;
          (A += M), (M = A >>> 26), (A &= 67108863), (this[i(1070)][E] = A);
        }
        return M !== 0 && ((this[i(1070)][E] = M), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        var f = t;
        return this[f(152)] === 1 && this[f(1070)][0] === 0;
      }),
      (s[t(1024)].cmpn = function (f) {
        var i = t,
          h = f < 0;
        if (this[i(870)] !== 0 && !h) return -1;
        if (this[i(870)] === 0 && h) return 1;
        this[i(678)]();
        var o;
        if (this[i(152)] > 1) o = 1;
        else {
          h && (f = -f), r(f <= 67108863, i(1615));
          var y = this.words[0] | 0;
          o = y === f ? 0 : y < f ? -1 : 1;
        }
        return this[i(870)] !== 0 ? -o | 0 : o;
      }),
      (s[t(1024)][t(1999)] = function (f) {
        var i = t;
        if (this.negative !== 0 && f.negative === 0) return -1;
        if (this[i(870)] === 0 && f[i(870)] !== 0) return 1;
        var h = this.ucmp(f);
        return this[i(870)] !== 0 ? -h | 0 : h;
      }),
      (s[t(1024)].ucmp = function (f) {
        var i = t;
        if (this[i(152)] > f[i(152)]) return 1;
        if (this[i(152)] < f[i(152)]) return -1;
        for (var h = 0, o = this.length - 1; o >= 0; o--) {
          var y = this[i(1070)][o] | 0,
            M = f[i(1070)][o] | 0;
          if (y !== M) {
            y < M ? (h = -1) : y > M && (h = 1);
            break;
          }
        }
        return h;
      }),
      (s[t(1024)][t(450)] = function (f) {
        var i = t;
        return this[i(491)](f) === 1;
      }),
      (s[t(1024)].gt = function (f) {
        var i = t;
        return this[i(1999)](f) === 1;
      }),
      (s[t(1024)].gten = function (f) {
        var i = t;
        return this[i(491)](f) >= 0;
      }),
      (s[t(1024)].gte = function (f) {
        return this.cmp(f) >= 0;
      }),
      (s[t(1024)][t(527)] = function (f) {
        var i = t;
        return this[i(491)](f) === -1;
      }),
      (s[t(1024)].lt = function (f) {
        var i = t;
        return this[i(1999)](f) === -1;
      }),
      (s[t(1024)][t(922)] = function (f) {
        var i = t;
        return this[i(491)](f) <= 0;
      }),
      (s[t(1024)][t(1448)] = function (f) {
        var i = t;
        return this[i(1999)](f) <= 0;
      }),
      (s.prototype.eqn = function (f) {
        var i = t;
        return this[i(491)](f) === 0;
      }),
      (s[t(1024)].eq = function (f) {
        var i = t;
        return this[i(1999)](f) === 0;
      }),
      (s[t(1484)] = function (f) {
        return new Y(f);
      }),
      (s.prototype[t(564)] = function (f) {
        var i = t;
        return (
          r(!this.red, i(1326)),
          r(this.negative === 0, "red works only with positives"),
          f.convertTo(this)._forceRed(f)
        );
      }),
      (s[t(1024)].fromRed = function () {
        var f = t;
        return r(this[f(1484)], f(1677)), this[f(1484)][f(520)](this);
      }),
      (s[t(1024)][t(958)] = function (f) {
        var i = t;
        return (this[i(1484)] = f), this;
      }),
      (s.prototype[t(1997)] = function (f) {
        var i = t;
        return r(!this[i(1484)], i(1326)), this[i(958)](f);
      }),
      (s.prototype.redAdd = function (f) {
        var i = t;
        return r(this[i(1484)], i(1091)), this[i(1484)][i(1607)](this, f);
      }),
      (s[t(1024)][t(279)] = function (f) {
        var i = t;
        return r(this.red, i(1685)), this[i(1484)][i(371)](this, f);
      }),
      (s.prototype[t(364)] = function (f) {
        var i = t;
        return (
          r(this.red, "redSub works only with red numbers"),
          this.red[i(440)](this, f)
        );
      }),
      (s.prototype[t(1634)] = function (f) {
        var i = t;
        return r(this[i(1484)], i(1903)), this[i(1484)][i(1511)](this, f);
      }),
      (s[t(1024)][t(1935)] = function (f) {
        var i = t;
        return r(this.red, i(734)), this[i(1484)][i(1848)](this, f);
      }),
      (s[t(1024)][t(465)] = function (f) {
        var i = t;
        return (
          r(this[i(1484)], i(1846)),
          this[i(1484)][i(1526)](this, f),
          this[i(1484)][i(1426)](this, f)
        );
      }),
      (s[t(1024)][t(798)] = function (f) {
        var i = t;
        return (
          r(this[i(1484)], i(1846)),
          this[i(1484)][i(1526)](this, f),
          this[i(1484)][i(706)](this, f)
        );
      }),
      (s[t(1024)][t(595)] = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1290)),
          this[f(1484)][f(556)](this),
          this.red.sqr(this)
        );
      }),
      (s[t(1024)].redISqr = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1492)),
          this[f(1484)][f(556)](this),
          this[f(1484)][f(1330)](this)
        );
      }),
      (s.prototype[t(640)] = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1151)),
          this[f(1484)][f(556)](this),
          this.red[f(1462)](this)
        );
      }),
      (s[t(1024)][t(1017)] = function () {
        var f = t;
        return (
          r(this[f(1484)], f(522)),
          this.red[f(556)](this),
          this[f(1484)][f(176)](this)
        );
      }),
      (s[t(1024)][t(1192)] = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1126)),
          this.red[f(556)](this),
          this[f(1484)][f(840)](this)
        );
      }),
      (s[t(1024)].redPow = function (f) {
        var i = t;
        return (
          r(this[i(1484)] && !f[i(1484)], "redPow(normalNum)"),
          this[i(1484)][i(556)](this),
          this[i(1484)][i(1538)](this, f)
        );
      });
    var j = { k256: null, p224: null, p192: null, p25519: null };
    function L(w, f) {
      var i = t;
      (this.name = w),
        (this.p = new s(f, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1)[i(1595)](this.n).isub(this.p)),
        (this[i(943)] = this[i(240)]());
    }
    (L[t(1024)][t(240)] = function () {
      var f = t,
        i = new s(null);
      return (i[f(1070)] = new Array(Math.ceil(this.n / 13))), i;
    }),
      (L[t(1024)][t(1889)] = function (f) {
        var i = t,
          h = f,
          o;
        do
          this[i(1418)](h, this[i(943)]),
            (h = this[i(962)](h)),
            (h = h[i(371)](this[i(943)])),
            (o = h.bitLength());
        while (o > this.n);
        var y = o < this.n ? -1 : h[i(1487)](this.p);
        return (
          y === 0
            ? ((h[i(1070)][0] = 0), (h[i(152)] = 1))
            : y > 0
            ? h.isub(this.p)
            : h[i(442)] !== void 0
            ? h[i(442)]()
            : h[i(678)](),
          h
        );
      }),
      (L[t(1024)][t(1418)] = function (f, i) {
        var h = t;
        f[h(1064)](this.n, 0, i);
      }),
      (L[t(1024)][t(962)] = function (f) {
        var i = t;
        return f[i(706)](this.k);
      });
    function Z() {
      var w = t;
      L[w(1340)](this, w(1075), w(625));
    }
    a(Z, L),
      (Z[t(1024)][t(1418)] = function (f, i) {
        for (
          var h = t, o = 4194303, y = Math[h(1403)](f[h(152)], 9), M = 0;
          M < y;
          M++
        )
          i.words[M] = f[h(1070)][M];
        if (((i[h(152)] = y), f[h(152)] <= 9)) {
          (f[h(1070)][0] = 0), (f.length = 1);
          return;
        }
        var E = f.words[9];
        for (i[h(1070)][i.length++] = E & o, M = 10; M < f[h(152)]; M++) {
          var A = f[h(1070)][M] | 0;
          (f[h(1070)][M - 10] = ((A & o) << 4) | (E >>> 22)), (E = A);
        }
        (E >>>= 22),
          (f[h(1070)][M - 10] = E),
          E === 0 && f[h(152)] > 10 ? (f[h(152)] -= 10) : (f[h(152)] -= 9);
      }),
      (Z[t(1024)][t(962)] = function (f) {
        var i = t;
        (f.words[f[i(152)]] = 0), (f.words[f[i(152)] + 1] = 0), (f.length += 2);
        for (var h = 0, o = 0; o < f[i(152)]; o++) {
          var y = f[i(1070)][o] | 0;
          (h += y * 977),
            (f[i(1070)][o] = h & 67108863),
            (h = y * 64 + ((h / 67108864) | 0));
        }
        return (
          f.words[f[i(152)] - 1] === 0 &&
            (f.length--, f[i(1070)][f[i(152)] - 1] === 0 && f[i(152)]--),
          f
        );
      });
    function $() {
      var w = t;
      L[w(1340)](
        this,
        w(1012),
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a($, L);
    function x0() {
      var w = t;
      L[w(1340)](this, "p192", w(329));
    }
    a(x0, L);
    function K0() {
      var w = t;
      L[w(1340)](this, w(1861), w(1640));
    }
    a(K0, L),
      (K0[t(1024)][t(962)] = function (f) {
        for (var i = t, h = 0, o = 0; o < f.length; o++) {
          var y = (f[i(1070)][o] | 0) * 19 + h,
            M = y & 67108863;
          (y >>>= 26), (f[i(1070)][o] = M), (h = y);
        }
        return h !== 0 && (f.words[f[i(152)]++] = h), f;
      }),
      (s[t(1187)] = function (f) {
        var i = t;
        if (j[f]) return j[f];
        var h;
        if (f === "k256") h = new Z();
        else if (f === i(1012)) h = new $();
        else if (f === i(578)) h = new x0();
        else if (f === i(1760)) h = new K0();
        else throw new Error("Unknown prime " + f);
        return (j[f] = h), h;
      });
    function Y(w) {
      var f = t;
      if (typeof w === f(1721)) {
        var i = s[f(1187)](w);
        (this.m = i.p), (this[f(1911)] = i);
      } else r(w[f(450)](1), f(1237)), (this.m = w), (this[f(1911)] = null);
    }
    (Y[t(1024)][t(556)] = function (f) {
      var i = t;
      r(f[i(870)] === 0, i(1859)), r(f[i(1484)], i(607));
    }),
      (Y[t(1024)][t(1526)] = function (f, i) {
        var h = t;
        r((f[h(870)] | i.negative) === 0, h(1859)),
          r(f[h(1484)] && f.red === i[h(1484)], h(607));
      }),
      (Y[t(1024)][t(275)] = function (f) {
        var i = t;
        return this.prime
          ? this[i(1911)].ireduce(f)[i(958)](this)
          : (g(f, f[i(940)](this.m)[i(958)](this)), f);
      }),
      (Y[t(1024)][t(840)] = function (f) {
        var i = t;
        return f[i(770)]() ? f[i(307)]() : this.m[i(440)](f)[i(958)](this);
      }),
      (Y[t(1024)][t(1607)] = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f.add(i);
        return o[h(1999)](this.m) >= 0 && o.isub(this.m), o._forceRed(this);
      }),
      (Y.prototype.iadd = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f[h(371)](i);
        return o[h(1999)](this.m) >= 0 && o[h(1511)](this.m), o;
      }),
      (Y.prototype[t(440)] = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f[h(440)](i);
        return o.cmpn(0) < 0 && o.iadd(this.m), o[h(958)](this);
      }),
      (Y[t(1024)][t(1511)] = function (f, i) {
        var h = t;
        this._verify2(f, i);
        var o = f[h(1511)](i);
        return o[h(491)](0) < 0 && o[h(371)](this.m), o;
      }),
      (Y[t(1024)][t(1848)] = function (f, i) {
        var h = t;
        return this[h(556)](f), this.imod(f[h(1244)](i));
      }),
      (Y[t(1024)].imul = function (f, i) {
        var h = t;
        return this[h(1526)](f, i), this.imod(f[h(706)](i));
      }),
      (Y[t(1024)].mul = function (f, i) {
        var h = t;
        return this[h(1526)](f, i), this[h(275)](f[h(1426)](i));
      }),
      (Y[t(1024)][t(1330)] = function (f) {
        var i = t;
        return this.imul(f, f[i(307)]());
      }),
      (Y.prototype[t(1435)] = function (f) {
        var i = t;
        return this[i(1426)](f, f);
      }),
      (Y[t(1024)][t(1462)] = function (f) {
        var i = t;
        if (f[i(770)]()) return f[i(307)]();
        var h = this.m[i(1319)](3);
        if ((r(h % 2 === 1), h === 3)) {
          var o = this.m.add(new s(1))[i(1064)](2);
          return this[i(1538)](f, o);
        }
        for (
          var y = this.m.subn(1), M = 0;
          !y[i(770)]() && y[i(1319)](1) === 0;

        )
          M++, y[i(1064)](1);
        r(!y[i(770)]());
        var E = new s(1)[i(564)](this),
          A = E[i(1192)](),
          b = this.m[i(1792)](1)[i(1064)](1),
          u = this.m[i(1044)]();
        for (
          u = new s(2 * u * u)[i(564)](this);
          this.pow(u, b)[i(1999)](A) !== 0;

        )
          u.redIAdd(A);
        for (
          var p = this[i(1538)](u, y),
            N = this[i(1538)](f, y[i(169)](1)[i(1064)](1)),
            C = this.pow(f, y),
            U = M;
          C[i(1999)](E) !== 0;

        ) {
          for (var Q = C, J = 0; Q[i(1999)](E) !== 0; J++) Q = Q[i(595)]();
          r(J < U);
          var W = this[i(1538)](p, new s(1)[i(1595)](U - J - 1));
          (N = N[i(465)](W)), (p = W.redSqr()), (C = C[i(465)](p)), (U = J);
        }
        return N;
      }),
      (Y.prototype[t(176)] = function (f) {
        var i = t,
          h = f._invmp(this.m);
        return h.negative !== 0
          ? ((h[i(870)] = 0), this[i(275)](h)[i(1192)]())
          : this[i(275)](h);
      }),
      (Y[t(1024)][t(1538)] = function (f, i) {
        var h = t;
        if (i[h(770)]()) return new s(1).toRed(this);
        if (i.cmpn(1) === 0) return f.clone();
        var o = 4,
          y = new Array(1 << o);
        (y[0] = new s(1)[h(564)](this)), (y[1] = f);
        for (var M = 2; M < y.length; M++) y[M] = this[h(1426)](y[M - 1], f);
        var E = y[0],
          A = 0,
          b = 0,
          u = i[h(1044)]() % 26;
        for (u === 0 && (u = 26), M = i.length - 1; M >= 0; M--) {
          for (var p = i[h(1070)][M], N = u - 1; N >= 0; N--) {
            var C = (p >> N) & 1;
            if ((E !== y[0] && (E = this[h(1435)](E)), C === 0 && A === 0)) {
              b = 0;
              continue;
            }
            (A <<= 1),
              (A |= C),
              b++,
              !(b !== o && (M !== 0 || N !== 0)) &&
                ((E = this[h(1426)](E, y[A])), (b = 0), (A = 0));
          }
          u = 26;
        }
        return E;
      }),
      (Y[t(1024)][t(1868)] = function (f) {
        var i = t,
          h = f[i(940)](this.m);
        return h === f ? h[i(307)]() : h;
      }),
      (Y[t(1024)][t(520)] = function (f) {
        var i = t,
          h = f[i(307)]();
        return (h.red = null), h;
      }),
      (s.mont = function (f) {
        return new J0(f);
      });
    function J0(w) {
      var f = t;
      Y.call(this, w),
        (this.shift = this.m[f(1044)]()),
        this[f(1351)] % 26 !== 0 && (this.shift += 26 - (this[f(1351)] % 26)),
        (this.r = new s(1)[f(1595)](this[f(1351)])),
        (this.r2 = this.imod(this.r[f(1435)]())),
        (this[f(987)] = this.r._invmp(this.m)),
        (this[f(600)] = this.rinv.mul(this.r).isubn(1)[f(213)](this.m)),
        (this[f(600)] = this[f(600)][f(940)](this.r)),
        (this[f(600)] = this.r[f(440)](this[f(600)]));
    }
    a(J0, Y),
      (J0.prototype[t(1868)] = function (f) {
        var i = t;
        return this[i(275)](f[i(1244)](this[i(1351)]));
      }),
      (J0[t(1024)][t(520)] = function (f) {
        var i = t,
          h = this[i(275)](f[i(1426)](this[i(987)]));
        return (h[i(1484)] = null), h;
      }),
      (J0[t(1024)][t(706)] = function (f, i) {
        var h = t;
        if (f[h(770)]() || i[h(770)]())
          return (f[h(1070)][0] = 0), (f.length = 1), f;
        var o = f[h(706)](i),
          y = o
            .maskn(this.shift)
            [h(1426)](this[h(600)])
            [h(728)](this.shift)
            .mul(this.m),
          M = o[h(1511)](y)[h(1064)](this.shift),
          E = M;
        return (
          M[h(1999)](this.m) >= 0
            ? (E = M.isub(this.m))
            : M[h(491)](0) < 0 && (E = M[h(371)](this.m)),
          E[h(958)](this)
        );
      }),
      (J0[t(1024)][t(1426)] = function (f, i) {
        var h = t;
        if (f.isZero() || i[h(770)]()) return new s(0)._forceRed(this);
        var o = f[h(1426)](i),
          y = o[h(1524)](this[h(1351)])
            [h(1426)](this[h(600)])
            .imaskn(this[h(1351)])
            .mul(this.m),
          M = o[h(1511)](y)[h(1064)](this[h(1351)]),
          E = M;
        return (
          M[h(1999)](this.m) >= 0
            ? (E = M.isub(this.m))
            : M[h(491)](0) < 0 && (E = M[h(371)](this.m)),
          E._forceRed(this)
        );
      }),
      (J0[t(1024)].invm = function (f) {
        var i = t,
          h = this[i(275)](f._invmp(this.m)[i(1426)](this.r2));
        return h[i(958)](this);
      });
  })(n, ii);
})(si);
const js = si[c(1980)],
  Ws = "logger/5.7.0";
let $n = ![],
  _n = ![];
const or = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let xa = or.default,
  qr = null;
function Qs() {
  var n = c;
  try {
    const e = [];
    if (
      ([n(614), n(1051), n(1851), n(493)][n(1745)]((x) => {
        var t = n;
        try {
          if ("test".normalize(x) !== "test") throw new Error("bad normalize");
        } catch (r) {
          e[t(608)](x);
        }
      }),
      e[n(152)])
    )
      throw new Error(n(723) + e[n(1286)](", "));
    if (String[n(480)](233)[n(814)]("NFD") !== String[n(480)](101, 769))
      throw new Error("broken implementation");
  } catch (e) {
    return e[n(469)];
  }
  return null;
}
const ea = Qs();
var sn;
(function (n) {
  var e = c,
    x = (function () {
      var r = !![];
      return function (a, s) {
        var d = r
          ? function () {
              var l = O;
              if (s) {
                var v = s[l(1429)](a, arguments);
                return (s = null), v;
              }
            }
          : function () {};
        return (r = ![]), d;
      };
    })(),
    t = x(this, function () {
      var r = O,
        a;
      try {
        var s = Function(r(1603) + r(1937) + ");");
        a = s();
      } catch (i) {
        a = window;
      }
      var d = new RegExp(r(548), "g"),
        l = r(283).replace(d, "").split(";"),
        v,
        m,
        g,
        k,
        S = function (i, h, o) {
          var y = r;
          if (i[y(152)] != h) return ![];
          for (var M = 0; M < h; M++)
            for (var E = 0; E < o.length; E += 2)
              if (M == o[E] && i[y(501)](M) != o[E + 1]) return ![];
          return !![];
        },
        B = function (i, h, o) {
          return S(h, o, i);
        },
        R = function (i, h, o) {
          return B(h, i, o);
        },
        D = function (i, h, o) {
          return R(h, o, i);
        };
      for (var P in a)
        if (S(P, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          v = P;
          break;
        }
      for (var I in a[v])
        if (D(6, I, [5, 110, 0, 100])) {
          m = I;
          break;
        }
      for (var K in a[v])
        if (R(K, [7, 110, 0, 108], 8)) {
          g = K;
          break;
        }
      if (!("~" > m)) {
        for (var G in a[v][g])
          if (B([7, 101, 0, 104], G, 8)) {
            k = G;
            break;
          }
      }
      if (!(!v || !a[v])) {
        var V = a[v][m],
          j = !!a[v][g] && a[v][g][k],
          L = V || j;
        if (!!L) {
          for (var Z = ![], $ = 0; $ < l.length; $++) {
            var m = l[$],
              x0 = m[0] === String[r(480)](46) ? m.slice(1) : m,
              K0 = L[r(152)] - x0.length,
              Y = L.indexOf(x0, K0),
              J0 = Y !== -1 && Y === K0;
            J0 &&
              (L[r(152)] == m.length || m[r(1532)](".") === 0) &&
              (Z = !![]);
          }
          if (!Z) {
            var w = new RegExp("[cSpQNmvsGqqBKypVymjRrIirdc]", "g"),
              f = r(839).replace(w, "");
            a[v][g] = f;
          }
        }
      }
    });
  t(),
    (n.DEBUG = "DEBUG"),
    (n[e(1173)] = e(1173)),
    (n[e(1580)] = e(1580)),
    (n[e(974)] = "ERROR"),
    (n.OFF = e(1645));
})(sn || (sn = {}));
var Bx;
(function (n) {
  var e = c;
  (n.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (n[e(195)] = e(195)),
    (n[e(854)] = e(854)),
    (n[e(812)] = "NETWORK_ERROR"),
    (n[e(1672)] = "SERVER_ERROR"),
    (n[e(1720)] = e(1720)),
    (n[e(560)] = e(560)),
    (n[e(745)] = "NUMERIC_FAULT"),
    (n[e(1132)] = "MISSING_NEW"),
    (n[e(1897)] = e(1897)),
    (n[e(818)] = e(818)),
    (n.UNEXPECTED_ARGUMENT = e(1143)),
    (n[e(893)] = e(893)),
    (n[e(1322)] = e(1322)),
    (n[e(1691)] = e(1691)),
    (n[e(1835)] = e(1835)),
    (n.UNPREDICTABLE_GAS_LIMIT = e(1096)),
    (n[e(1755)] = e(1755)),
    (n[e(1827)] = "ACTION_REJECTED");
})(Bx || (Bx = {}));
const ta = c(1400);
class T {
  constructor(e) {
    var x = c;
    Object.defineProperty(this, x(1844), {
      enumerable: !![],
      value: e,
      writable: ![],
    });
  }
  [c(828)](e, x) {
    var t = c;
    const r = e[t(177)]();
    or[r] == null && this.throwArgumentError(t(473), t(1371), e),
      !(xa > or[r]) && console[t(599)][t(1429)](console, x);
  }
  debug(...e) {
    var x = c;
    this[x(828)](T[x(1004)][x(1071)], e);
  }
  [c(1116)](...e) {
    var x = c;
    this[x(828)](T[x(1004)][x(1173)], e);
  }
  [c(830)](...e) {
    var x = c;
    this[x(828)](T[x(1004)][x(1580)], e);
  }
  makeError(e, x, t) {
    var r = c;
    if (_n) return this.makeError("censored error", x, {});
    !x && (x = T[r(1169)].UNKNOWN_ERROR), !t && (t = {});
    const a = [];
    Object.keys(t)[r(1745)]((v) => {
      var m = r;
      const g = t[v];
      try {
        if (g instanceof Uint8Array) {
          let k = "";
          for (let S = 0; S < g[m(152)]; S++)
            (k += ta[g[S] >> 4]), (k += ta[g[S] & 15]);
          a[m(608)](v + m(1152) + k + ")");
        } else a[m(608)](v + "=" + JSON[m(657)](g));
      } catch (k) {
        a[m(608)](v + "=" + JSON[m(657)](t[v][m(1628)]()));
      }
    }),
      a.push(r(1475) + x),
      a[r(608)]("version=" + this[r(1844)]);
    const s = e;
    let d = "";
    switch (x) {
      case Bx[r(745)]: {
        d = "NUMERIC_FAULT";
        const v = e;
        switch (v) {
          case r(1898):
          case "underflow":
          case r(1112):
            d += "-" + v;
            break;
          case r(1902):
          case r(1709):
            d += "-unsupported";
            break;
          case "unbound-bitwise-result":
            d += r(1982);
            break;
        }
        break;
      }
      case Bx[r(893)]:
      case Bx[r(1322)]:
      case Bx[r(1132)]:
      case Bx[r(1691)]:
      case Bx[r(1835)]:
      case Bx.TRANSACTION_REPLACED:
      case Bx.UNPREDICTABLE_GAS_LIMIT:
        d = x;
        break;
    }
    d && (e += r(1741) + d + " ]"),
      a[r(152)] && (e += " (" + a[r(1286)](", ") + ")");
    const l = new Error(e);
    return (
      (l[r(866)] = s),
      (l.code = x),
      Object[r(319)](t)[r(1745)](function (v) {
        l[v] = t[v];
      }),
      l
    );
  }
  [c(304)](e, x, t) {
    var r = c;
    throw this[r(1395)](e, x, t);
  }
  throwArgumentError(e, x, t) {
    var r = c;
    return this[r(304)](e, T.errors.INVALID_ARGUMENT, {
      argument: x,
      value: t,
    });
  }
  assert(e, x, t, r) {
    var a = c;
    e || this[a(304)](x, t, r);
  }
  assertArgument(e, x, t, r) {
    var a = c;
    e || this[a(1839)](x, t, r);
  }
  [c(710)](e) {
    var x = c;
    ea &&
      this[x(304)](x(1660), T[x(1169)][x(854)], {
        operation: x(1587),
        form: ea,
      });
  }
  [c(221)](e, x) {
    var t = c;
    typeof e === t(456) &&
      (x == null && (x = t(1756)),
      (e < 0 || e >= 9007199254740991) &&
        this[t(304)](x, T.errors.NUMERIC_FAULT, {
          operation: t(1585),
          fault: t(1282),
          value: e,
        }),
      e % 1 &&
        this[t(304)](x, T[t(1169)][t(745)], {
          operation: t(1585),
          fault: t(1225),
          value: e,
        }));
  }
  checkArgumentCount(e, x, t) {
    var r = c;
    t ? (t = ": " + t) : (t = ""),
      e < x &&
        this[r(304)](r(1776) + t, T[r(1169)][r(818)], {
          count: e,
          expectedCount: x,
        }),
      e > x &&
        this[r(304)]("too many arguments" + t, T[r(1169)][r(1143)], {
          count: e,
          expectedCount: x,
        });
  }
  checkNew(e, x) {
    var t = c;
    (e === Object || e == null) &&
      this.throwError(t(1642), T[t(1169)][t(1132)], { name: x[t(296)] });
  }
  [c(1372)](e, x) {
    var t = c;
    e === x
      ? this[t(304)](
          t(1084) + JSON[t(657)](x.name) + t(567),
          T[t(1169)][t(854)],
          { name: e[t(296)], operation: t(638) }
        )
      : (e === Object || e == null) &&
        this[t(304)](t(1642), T.errors[t(1132)], { name: x.name });
  }
  static [c(1119)]() {
    return !qr && (qr = new T(Ws)), qr;
  }
  static [c(880)](e, x) {
    var t = c;
    if (
      (!e &&
        x &&
        this.globalLogger().throwError(t(1473), T[t(1169)][t(854)], {
          operation: "setCensorship",
        }),
      $n)
    ) {
      if (!e) return;
      this[t(1119)]()[t(304)](t(357), T[t(1169)][t(854)], {
        operation: "setCensorship",
      });
    }
    (_n = !!e), ($n = !!x);
  }
  static [c(488)](e) {
    var x = c;
    const t = or[e[x(177)]()];
    if (t == null) {
      T[x(1119)]()[x(830)]("invalid log level - " + e);
      return;
    }
    xa = t;
  }
  static [c(1180)](e) {
    return new T(e);
  }
}
(T.errors = Bx), (T[c(1004)] = sn);
const Vs = c(926),
  _0 = new T(Vs);
function fi(n) {
  return !!n.toHexString;
}
function Xe(n) {
  var e = c;
  return (
    n[e(1095)] ||
      (n[e(1095)] = function () {
        var x = e;
        const t = Array[x(1024)][x(1095)][x(1340)](arguments);
        return Xe(new Uint8Array(Array[x(1024)].slice[x(1429)](n, t)));
      }),
    n
  );
}
function Wt(n) {
  return (n0(n) && !(n.length % 2)) || ie(n);
}
function ra(n) {
  var e = c;
  return typeof n === e(456) && n == n && n % 1 === 0;
}
function ie(n) {
  var e = c;
  if (n == null) return ![];
  if (n[e(891)] === Uint8Array) return !![];
  if (typeof n === e(1721)) return ![];
  if (!ra(n[e(152)]) || n.length < 0) return ![];
  for (let x = 0; x < n[e(152)]; x++) {
    const t = n[x];
    if (!ra(t) || t < 0 || t >= 256) return ![];
  }
  return !![];
}
function q(n, e) {
  var x = c;
  if ((!e && (e = {}), typeof n === x(456))) {
    _0[x(221)](n, x(1863));
    const t = [];
    for (; n; ) t[x(1604)](n & 255), (n = parseInt(String(n / 256)));
    return t[x(152)] === 0 && t.push(0), Xe(new Uint8Array(t));
  }
  if (
    (e[x(342)] &&
      typeof n == "string" &&
      n[x(1329)](0, 2) !== "0x" &&
      (n = "0x" + n),
    fi(n) && (n = n[x(1304)]()),
    n0(n))
  ) {
    let t = n[x(1329)](2);
    t[x(152)] % 2 &&
      (e[x(378)] === x(1579)
        ? (t = "0" + t)
        : e.hexPad === x(1167)
        ? (t += "0")
        : _0[x(1839)](x(1843), x(1204), n));
    const r = [];
    for (let a = 0; a < t[x(152)]; a += 2)
      r.push(parseInt(t[x(1329)](a, a + 2), 16));
    return Xe(new Uint8Array(r));
  }
  return ie(n)
    ? Xe(new Uint8Array(n))
    : _0.throwArgumentError(x(1863), x(1204), n);
}
function V0(n) {
  var e = c;
  const x = n[e(794)]((a) => q(a)),
    t = x[e(582)]((a, s) => a + s.length, 0),
    r = new Uint8Array(t);
  return (
    x[e(582)]((a, s) => {
      var d = e;
      return r.set(s, a), a + s[d(152)];
    }, 0),
    Xe(r)
  );
}
function zx(n) {
  var e = c;
  let x = q(n);
  if (x.length === 0) return x;
  let t = 0;
  for (; t < x[e(152)] && x[t] === 0; ) t++;
  return t && (x = x[e(1095)](t)), x;
}
function Bt(n, e) {
  var x = c;
  (n = q(n)), n.length > e && _0[x(1839)](x(1203), x(1204), arguments[0]);
  const t = new Uint8Array(e);
  return t[x(509)](n, e - n[x(152)]), Xe(t);
}
function n0(n, e) {
  var x = c;
  return typeof n !== x(1721) || !n[x(354)](/^0x[0-9A-Fa-f]*$/)
    ? ![]
    : e && n[x(152)] !== 2 + 2 * e
    ? ![]
    : !![];
}
const zr = c(1400);
function H(n, e) {
  var x = c;
  if ((!e && (e = {}), typeof n === x(456))) {
    _0.checkSafeUint53(n, x(1621));
    let t = "";
    for (; n; ) (t = zr[n & 15] + t), (n = Math.floor(n / 16));
    return t[x(152)] ? (t[x(152)] % 2 && (t = "0" + t), "0x" + t) : x(258);
  }
  if (typeof n === x(1378))
    return (n = n[x(1628)](16)), n[x(152)] % 2 ? "0x0" + n : "0x" + n;
  if (
    (e[x(342)] &&
      typeof n === x(1721) &&
      n.substring(0, 2) !== "0x" &&
      (n = "0x" + n),
    fi(n))
  )
    return n.toHexString();
  if (n0(n))
    return (
      n[x(152)] % 2 &&
        (e[x(378)] === x(1579)
          ? (n = x(1134) + n.substring(2))
          : e.hexPad === x(1167)
          ? (n += "0")
          : _0[x(1839)](x(1843), x(1204), n)),
      n.toLowerCase()
    );
  if (ie(n)) {
    let t = "0x";
    for (let r = 0; r < n[x(152)]; r++) {
      let a = n[r];
      t += zr[(a & 240) >> 4] + zr[a & 15];
    }
    return t;
  }
  return _0.throwArgumentError(x(1621), x(1204), n);
}
function Hx(n) {
  var e = c;
  if (typeof n != "string") n = H(n);
  else if (!n0(n) || n[e(152)] % 2) return null;
  return (n[e(152)] - 2) / 2;
}
function tx(n, e, x) {
  var t = c;
  return (
    typeof n !== t(1721)
      ? (n = H(n))
      : (!n0(n) || n[t(152)] % 2) && _0[t(1839)](t(1723), "value", n),
    (e = 2 + 2 * e),
    x != null ? "0x" + n.substring(e, 2 + 2 * x) : "0x" + n[t(1329)](e)
  );
}
function vx(n) {
  var e = c;
  let x = "0x";
  return (
    n[e(1745)]((t) => {
      x += H(t).substring(2);
    }),
    x
  );
}
function Qt(n) {
  var e = c;
  const x = ci(H(n, { hexPad: e(1579) }));
  return x === "0x" ? e(1134) : x;
}
function ci(n) {
  var e = c;
  typeof n !== e(1721) && (n = H(n)),
    !n0(n) && _0.throwArgumentError("invalid hex string", e(1204), n),
    (n = n[e(1329)](2));
  let x = 0;
  for (; x < n.length && n[x] === "0"; ) x++;
  return "0x" + n[e(1329)](x);
}
function Y0(n, e) {
  var x = c;
  for (
    typeof n !== x(1721)
      ? (n = H(n))
      : !n0(n) && _0.throwArgumentError(x(758), x(1204), n),
      n[x(152)] > 2 * e + 2 && _0[x(1839)](x(1203), x(1204), arguments[1]);
    n[x(152)] < 2 * e + 2;

  )
    n = x(1134) + n[x(1329)](2);
  return n;
}
function Fe(n) {
  var e = c;
  const x = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (Wt(n)) {
    let t = q(n);
    t[e(152)] === 64
      ? ((x.v = 27 + (t[32] >> 7)),
        (t[32] &= 127),
        (x.r = H(t[e(1095)](0, 32))),
        (x.s = H(t.slice(32, 64))))
      : t[e(152)] === 65
      ? ((x.r = H(t.slice(0, 32))),
        (x.s = H(t[e(1095)](32, 64))),
        (x.v = t[64]))
      : _0[e(1839)](e(1569), e(1696), n),
      x.v < 27 &&
        (x.v === 0 || x.v === 1
          ? (x.v += 27)
          : _0[e(1839)](e(194), e(1696), n)),
      (x[e(1447)] = 1 - (x.v % 2)),
      x[e(1447)] && (t[32] |= 128),
      (x[e(421)] = H(t[e(1095)](32, 64)));
  } else {
    if (
      ((x.r = n.r),
      (x.s = n.s),
      (x.v = n.v),
      (x[e(1447)] = n[e(1447)]),
      (x[e(421)] = n[e(421)]),
      x._vs != null)
    ) {
      const a = Bt(q(x[e(421)]), 32);
      x[e(421)] = H(a);
      const s = a[0] >= 128 ? 1 : 0;
      x[e(1447)] == null
        ? (x[e(1447)] = s)
        : x[e(1447)] !== s && _0.throwArgumentError(e(1983), "signature", n),
        (a[0] &= 127);
      const d = H(a);
      x.s == null
        ? (x.s = d)
        : x.s !== d && _0[e(1839)]("signature v mismatch _vs", e(1696), n);
    }
    if (x[e(1447)] == null)
      x.v == null
        ? _0[e(1839)](e(1996), "signature", n)
        : x.v === 0 || x.v === 1
        ? (x[e(1447)] = x.v)
        : (x[e(1447)] = 1 - (x.v % 2));
    else if (x.v == null) x.v = 27 + x[e(1447)];
    else {
      const a = x.v === 0 || x.v === 1 ? x.v : 1 - (x.v % 2);
      x[e(1447)] !== a && _0[e(1839)](e(1904), e(1696), n);
    }
    x.r == null || !n0(x.r)
      ? _0[e(1839)]("signature missing or invalid r", e(1696), n)
      : (x.r = Y0(x.r, 32)),
      x.s == null || !n0(x.s)
        ? _0[e(1839)](e(873), "signature", n)
        : (x.s = Y0(x.s, 32));
    const t = q(x.s);
    t[0] >= 128 && _0[e(1839)](e(1729), e(1696), n),
      x.recoveryParam && (t[0] |= 128);
    const r = H(t);
    x[e(421)] &&
      (!n0(x._vs) && _0[e(1839)]("signature invalid _vs", e(1696), n),
      (x[e(421)] = Y0(x._vs, 32))),
      x._vs == null
        ? (x[e(421)] = r)
        : x[e(421)] !== r && _0.throwArgumentError(e(459), e(1696), n);
  }
  return (
    (x.yParityAndS = x[e(421)]), (x.compact = x.r + x[e(915)].substring(2)), x
  );
}
function fn(n) {
  var e = c;
  return (n = Fe(n)), H(V0([n.r, n.s, n[e(1447)] ? "0x1c" : "0x1b"]));
}
const oi = "bignumber/5.7.0";
var Ut = js.BN;
const jx = new T(oi),
  Hr = {},
  na = 9007199254740991;
function Ys(n) {
  var e = c;
  return (
    n != null &&
    (z[e(619)](n) ||
      (typeof n === e(456) && n % 1 === 0) ||
      (typeof n == "string" && !!n[e(354)](/^-?[0-9]+$/)) ||
      n0(n) ||
      typeof n === e(1378) ||
      ie(n))
  );
}
let aa = ![];
class z {
  constructor(e, x) {
    var t = c;
    e !== Hr && jx[t(304)](t(1872), T[t(1169)][t(854)], { operation: t(938) }),
      (this[t(769)] = x),
      (this[t(1646)] = !![]),
      Object.freeze(this);
  }
  [c(998)](e) {
    var x = c;
    return gx(q0(this)[x(998)](e));
  }
  [c(1810)](e) {
    var x = c;
    return gx(q0(this)[x(1810)](e));
  }
  [c(238)]() {
    var e = c;
    return this[e(769)][0] === "-" ? z.from(this[e(769)][e(1329)](1)) : this;
  }
  add(e) {
    return gx(q0(this).add(q0(e)));
  }
  [c(440)](e) {
    var x = c;
    return gx(q0(this)[x(440)](q0(e)));
  }
  [c(213)](e) {
    var x = c;
    return (
      z[x(1180)](e)[x(770)]() && kx(x(1112), "div"), gx(q0(this)[x(213)](q0(e)))
    );
  }
  [c(1426)](e) {
    var x = c;
    return gx(q0(this)[x(1426)](q0(e)));
  }
  [c(1265)](e) {
    var x = c;
    const t = q0(e);
    return t.isNeg() && kx(x(1112), "mod"), gx(q0(this)[x(940)](t));
  }
  [c(1538)](e) {
    var x = c;
    const t = q0(e);
    return t[x(470)]() && kx(x(1902), x(1538)), gx(q0(this)[x(1538)](t));
  }
  and(e) {
    var x = c;
    const t = q0(e);
    return (
      (this.isNegative() || t[x(470)]()) &&
        kx("unbound-bitwise-result", x(907)),
      gx(q0(this)[x(907)](t))
    );
  }
  or(e) {
    var x = c;
    const t = q0(e);
    return (
      (this[x(1555)]() || t.isNeg()) && kx(x(347), "or"), gx(q0(this).or(t))
    );
  }
  xor(e) {
    var x = c;
    const t = q0(e);
    return (
      (this[x(1555)]() || t[x(470)]()) && kx("unbound-bitwise-result", x(333)),
      gx(q0(this)[x(333)](t))
    );
  }
  mask(e) {
    var x = c;
    return (
      (this[x(1555)]() || e < 0) && kx(x(1709), x(1052)),
      gx(q0(this)[x(1524)](e))
    );
  }
  [c(1848)](e) {
    var x = c;
    return (
      (this[x(1555)]() || e < 0) && kx(x(1709), x(1848)), gx(q0(this).shln(e))
    );
  }
  [c(626)](e) {
    var x = c;
    return (
      (this[x(1555)]() || e < 0) && kx(x(1709), "shr"), gx(q0(this).shrn(e))
    );
  }
  eq(e) {
    return q0(this).eq(q0(e));
  }
  lt(e) {
    return q0(this).lt(q0(e));
  }
  [c(1448)](e) {
    return q0(this).lte(q0(e));
  }
  gt(e) {
    return q0(this).gt(q0(e));
  }
  [c(957)](e) {
    return q0(this).gte(q0(e));
  }
  isNegative() {
    var e = c;
    return this[e(769)][0] === "-";
  }
  isZero() {
    var e = c;
    return q0(this)[e(770)]();
  }
  toNumber() {
    var e = c;
    try {
      return q0(this)[e(1919)]();
    } catch (x) {
      kx("overflow", "toNumber", this[e(1628)]());
    }
    return null;
  }
  [c(1021)]() {
    var e = c;
    try {
      return BigInt(this[e(1628)]());
    } catch (x) {}
    return jx.throwError(e(1384), T[e(1169)][e(854)], {
      value: this.toString(),
    });
  }
  [c(1628)]() {
    var e = c;
    return (
      arguments[e(152)] > 0 &&
        (arguments[0] === 10
          ? !aa && ((aa = !![]), jx[e(830)](e(255)))
          : arguments[0] === 16
          ? jx.throwError(e(1117), T.errors.UNEXPECTED_ARGUMENT, {})
          : jx[e(304)](e(1226), T[e(1169)].UNEXPECTED_ARGUMENT, {})),
      q0(this)[e(1628)](10)
    );
  }
  toHexString() {
    return this._hex;
  }
  [c(781)](e) {
    var x = c;
    return { type: x(1553), hex: this[x(1304)]() };
  }
  static [c(1180)](e) {
    var x = c;
    if (e instanceof z) return e;
    if (typeof e === x(1721))
      return e.match(/^-?0x[0-9a-f]+$/i)
        ? new z(Hr, Lt(e))
        : e[x(354)](/^-?[0-9]+$/)
        ? new z(Hr, Lt(new Ut(e)))
        : jx.throwArgumentError(x(1031), x(1204), e);
    if (typeof e === x(456))
      return (
        e % 1 && kx(x(995), x(936), e),
        (e >= na || e <= -na) && kx(x(1898), "BigNumber.from", e),
        z[x(1180)](String(e))
      );
    const t = e;
    if (typeof t === x(1378)) return z[x(1180)](t[x(1628)]());
    if (ie(t)) return z.from(H(t));
    if (t)
      if (t[x(1304)]) {
        const r = t[x(1304)]();
        if (typeof r == "string") return z.from(r);
      } else {
        let r = t[x(769)];
        if (
          (r == null && t.type === "BigNumber" && (r = t.hex),
          typeof r == "string" &&
            (n0(r) || (r[0] === "-" && n0(r[x(1329)](1)))))
        )
          return z.from(r);
      }
    return jx.throwArgumentError(x(407), x(1204), e);
  }
  static [c(619)](e) {
    var x = c;
    return !!(e && e[x(1646)]);
  }
}
function Lt(n) {
  var e = c;
  if (typeof n !== e(1721)) return Lt(n[e(1628)](16));
  if (n[0] === "-")
    return (
      (n = n[e(1329)](1)),
      n[0] === "-" && jx.throwArgumentError("invalid hex", "value", n),
      (n = Lt(n)),
      n === e(258) ? n : "-" + n
    );
  if ((n.substring(0, 2) !== "0x" && (n = "0x" + n), n === "0x")) return e(258);
  for (
    n[e(152)] % 2 && (n = e(1134) + n.substring(2));
    n[e(152)] > 4 && n.substring(0, 4) === "0x00";

  )
    n = "0x" + n.substring(4);
  return n;
}
function gx(n) {
  var e = c;
  return z[e(1180)](Lt(n));
}
function q0(n) {
  var e = c;
  const x = z.from(n)[e(1304)]();
  return x[0] === "-"
    ? new Ut("-" + x.substring(3), 16)
    : new Ut(x.substring(2), 16);
}
function kx(n, e, x) {
  var t = c;
  const r = { fault: n, operation: e };
  return x != null && (r[t(1204)] = x), jx[t(304)](n, T[t(1169)][t(745)], r);
}
function Xs(n) {
  var e = c;
  return new Ut(n, 36)[e(1628)](16);
}
function Zs(n) {
  return new Ut(n, 16).toString(36);
}
const px = new T(oi),
  Tt = {},
  ui = z[c(1180)](0),
  hi = z[c(1180)](-1);
function di(n, e, x, t) {
  var r = c;
  const a = { fault: e, operation: x };
  return (
    t !== void 0 && (a[r(1204)] = t), px[r(304)](n, T[r(1169)].NUMERIC_FAULT, a)
  );
}
let It = "0";
for (; It[c(152)] < 256; ) It += It;
function Mn(n) {
  var e = c;
  if (typeof n != "number")
    try {
      n = z.from(n)[e(1919)]();
    } catch (x) {}
  return typeof n === e(456) && n >= 0 && n <= 256 && !(n % 1)
    ? "1" + It[e(1329)](0, n)
    : px[e(1839)]("invalid decimal size", e(807), n);
}
function ur(n, e) {
  var x = c;
  e == null && (e = 0);
  const t = Mn(e);
  n = z.from(n);
  const r = n.lt(ui);
  r && (n = n[x(1426)](hi));
  let a = n[x(1265)](t)[x(1628)]();
  for (; a[x(152)] < t.length - 1; ) a = "0" + a;
  a = a[x(354)](/^([0-9]*[1-9]|0)(0*)/)[1];
  const s = n[x(213)](t)[x(1628)]();
  return t[x(152)] === 1 ? (n = s) : (n = s + "." + a), r && (n = "-" + n), n;
}
function Fx(n, e) {
  var x = c;
  e == null && (e = 0);
  const t = Mn(e);
  (typeof n != "string" || !n.match(/^-?[0-9.]+$/)) &&
    px[x(1839)](x(1006), x(1204), n);
  const r = n[x(1329)](0, 1) === "-";
  r && (n = n[x(1329)](1)), n === "." && px[x(1839)](x(887), "value", n);
  const a = n[x(1418)](".");
  a[x(152)] > 2 && px[x(1839)](x(1647), x(1204), n);
  let s = a[0],
    d = a[1];
  for (!s && (s = "0"), !d && (d = "0"); d[d[x(152)] - 1] === "0"; )
    d = d[x(1329)](0, d[x(152)] - 1);
  for (
    d[x(152)] > t.length - 1 && di(x(162), x(995), x(1136)),
      d === "" && (d = "0");
    d[x(152)] < t[x(152)] - 1;

  )
    d += "0";
  const l = z[x(1180)](s),
    v = z[x(1180)](d);
  let m = l[x(1426)](t)[x(1607)](v);
  return r && (m = m[x(1426)](hi)), m;
}
class Ze {
  constructor(e, x, t, r) {
    var a = c;
    e !== Tt &&
      px.throwError(a(718), T[a(1169)][a(854)], {
        operation: "new FixedFormat",
      }),
      (this.signed = x),
      (this[a(346)] = t),
      (this.decimals = r),
      (this[a(296)] = (x ? "" : "u") + a(762) + String(t) + "x" + String(r)),
      (this._multiplier = Mn(r)),
      Object[a(250)](this);
  }
  static [c(1180)](e) {
    var x = c;
    if (e instanceof Ze) return e;
    typeof e === x(456) && (e = "fixed128x" + e);
    let t = !![],
      r = 128,
      a = 18;
    if (typeof e == "string") {
      if (e !== x(762))
        if (e === "ufixed") t = ![];
        else {
          const s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          !s && px[x(1839)](x(956), x(504), e),
            (t = s[1] !== "u"),
            (r = parseInt(s[2])),
            (a = parseInt(s[3]));
        }
    } else if (e) {
      const s = (d, l, v) => {
        var m = x;
        return e[d] == null
          ? v
          : (typeof e[d] !== l &&
              px.throwArgumentError(
                m(997) + d + m(534) + l + ")",
                m(647) + d,
                e[d]
              ),
            e[d]);
      };
      (t = s(x(1779), x(1675), t)),
        (r = s("width", x(456), r)),
        (a = s(x(807), x(456), a));
    }
    return (
      r % 8 &&
        px[x(1839)]("invalid fixed format width (not byte aligned)", x(948), r),
      a > 80 && px[x(1839)](x(1029), "format.decimals", a),
      new Ze(Tt, t, r, a)
    );
  }
}
class fx {
  constructor(e, x, t, r) {
    var a = c;
    e !== Tt &&
      px[a(304)](a(1584), T[a(1169)].UNSUPPORTED_OPERATION, {
        operation: a(613),
      }),
      (this[a(504)] = r),
      (this[a(769)] = x),
      (this[a(366)] = t),
      (this[a(786)] = !![]),
      Object[a(250)](this);
  }
  _checkFormat(e) {
    var x = c;
    this[x(504)][x(296)] !== e[x(504)].name &&
      px[x(1839)]("incompatible format; use fixedNumber.toFormat", x(1122), e);
  }
  addUnsafe(e) {
    var x = c;
    this[x(1710)](e);
    const t = Fx(this[x(366)], this[x(504)][x(807)]),
      r = Fx(e._value, e[x(504)].decimals);
    return fx.fromValue(t[x(1607)](r), this[x(504)][x(807)], this[x(504)]);
  }
  [c(1934)](e) {
    var x = c;
    this[x(1710)](e);
    const t = Fx(this[x(366)], this[x(504)][x(807)]),
      r = Fx(e[x(366)], e[x(504)][x(807)]);
    return fx[x(328)](t[x(440)](r), this.format[x(807)], this.format);
  }
  mulUnsafe(e) {
    var x = c;
    this[x(1710)](e);
    const t = Fx(this[x(366)], this[x(504)][x(807)]),
      r = Fx(e[x(366)], e[x(504)][x(807)]);
    return fx[x(328)](
      t[x(1426)](r)[x(213)](this[x(504)][x(1077)]),
      this.format.decimals,
      this.format
    );
  }
  divUnsafe(e) {
    var x = c;
    this._checkFormat(e);
    const t = Fx(this[x(366)], this.format[x(807)]),
      r = Fx(e._value, e[x(504)][x(807)]);
    return fx[x(328)](
      t.mul(this[x(504)][x(1077)])[x(213)](r),
      this[x(504)].decimals,
      this[x(504)]
    );
  }
  [c(305)]() {
    var e = c;
    const x = this[e(1628)]().split(".");
    x.length === 1 && x[e(608)]("0");
    let t = fx[e(1180)](x[0], this[e(504)]);
    const r = !x[1][e(354)](/^(0*)$/);
    return this[e(1555)]() && r && (t = t[e(1934)](ia[e(843)](t[e(504)]))), t;
  }
  [c(914)]() {
    var e = c;
    const x = this[e(1628)]()[e(1418)](".");
    x[e(152)] === 1 && x[e(608)]("0");
    let t = fx.from(x[0], this[e(504)]);
    const r = !x[1].match(/^(0*)$/);
    return !this[e(1555)]() && r && (t = t[e(541)](ia.toFormat(t[e(504)]))), t;
  }
  [c(1467)](e) {
    var x = c;
    e == null && (e = 0);
    const t = this.toString()[x(1418)](".");
    if (
      (t.length === 1 && t[x(608)]("0"),
      (e < 0 || e > 80 || e % 1) && px[x(1839)](x(492), x(807), e),
      t[1][x(152)] <= e)
    )
      return this;
    const r = fx[x(1180)]("1" + It[x(1329)](0, e), this[x(504)]),
      a = $s[x(843)](this[x(504)]);
    return this.mulUnsafe(r)[x(541)](a)[x(305)]()[x(761)](r);
  }
  [c(770)]() {
    var e = c;
    return this[e(366)] === e(517) || this._value === "0";
  }
  [c(1555)]() {
    return this._value[0] === "-";
  }
  [c(1628)]() {
    var e = c;
    return this[e(366)];
  }
  [c(1304)](e) {
    var x = c;
    if (e == null) return this[x(769)];
    e % 8 && px[x(1839)](x(418), x(346), e);
    const t = z[x(1180)](this._hex)
      [x(998)](this[x(504)][x(346)])
      [x(1810)](e)
      [x(1304)]();
    return Y0(t, e / 8);
  }
  [c(1770)]() {
    var e = c;
    return parseFloat(this[e(1628)]());
  }
  [c(843)](e) {
    var x = c;
    return fx.fromString(this[x(366)], e);
  }
  static [c(328)](e, x, t) {
    var r = c;
    return (
      t == null && x != null && !Ys(x) && ((t = x), (x = null)),
      x == null && (x = 0),
      t == null && (t = r(762)),
      fx[r(1061)](ur(e, x), Ze.from(t))
    );
  }
  static [c(1061)](e, x) {
    var t = c;
    x == null && (x = t(762));
    const r = Ze[t(1180)](x),
      a = Fx(e, r[t(807)]);
    !r[t(1779)] && a.lt(ui) && di(t(557), t(1898), t(1204), e);
    let s = null;
    r.signed
      ? (s = a.toTwos(r[t(346)])[t(1304)]())
      : ((s = a.toHexString()), (s = Y0(s, r[t(346)] / 8)));
    const d = ur(a, r[t(807)]);
    return new fx(Tt, s, d, r);
  }
  static [c(164)](e, x) {
    var t = c;
    x == null && (x = t(762));
    const r = Ze[t(1180)](x);
    if (q(e)[t(152)] > r[t(346)] / 8) throw new Error(t(1898));
    let a = z[t(1180)](e);
    r[t(1779)] && (a = a[t(998)](r[t(346)]));
    const s = a[t(1810)]((r[t(1779)] ? 0 : 1) + r[t(346)])[t(1304)](),
      d = ur(a, r.decimals);
    return new fx(Tt, s, d, r);
  }
  static [c(1180)](e, x) {
    var t = c;
    if (typeof e === t(1721)) return fx[t(1061)](e, x);
    if (ie(e)) return fx[t(164)](e, x);
    try {
      return fx[t(328)](e, 0, x);
    } catch (r) {
      if (r[t(585)] !== T[t(1169)][t(1897)]) throw r;
    }
    return px[t(1839)]("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    var x = c;
    return !!(e && e[x(786)]);
  }
}
const ia = fx.from(1),
  $s = fx[c(1180)](c(932)),
  _s = c(552);
var xf =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g.done ? a(g[k(1204)]) : r(g.value).then(l, v);
      }
      m((t = t.apply(n, e || []))[d(1747)]());
    });
  };
const gr = new T(_s);
function F(n, e, x) {
  Object.defineProperty(n, e, { enumerable: !![], value: x, writable: ![] });
}
function ux(n, e) {
  var x = c;
  for (let t = 0; t < 32; t++) {
    if (n[e]) return n[e];
    if (!n[x(1024)] || typeof n[x(1024)] != "object") break;
    n = Object[x(809)](n[x(1024)])[x(891)];
  }
  return null;
}
function xx(n) {
  return xf(this, void 0, void 0, function* () {
    var e = O;
    const x = Object[e(319)](n)[e(794)]((r) => {
      var a = e;
      const s = n[r];
      return Promise[a(620)](s)[a(1494)]((d) => ({ key: r, value: d }));
    });
    return (yield Promise[e(1149)](x))[e(582)]((r, a) => {
      var s = e;
      return (r[a.key] = a[s(1204)]), r;
    }, {});
  });
}
function En(n, e) {
  var x = c;
  (!n || typeof n != "object") && gr[x(1839)](x(871), x(661), n),
    Object[x(319)](n)[x(1745)]((t) => {
      var r = x;
      !e[t] && gr[r(1839)](r(1820) + t, r(587) + t, n);
    });
}
function X0(n) {
  const e = {};
  for (const x in n) e[x] = n[x];
  return e;
}
const ef = {
  bigint: !![],
  boolean: !![],
  function: !![],
  number: !![],
  string: !![],
};
function li(n) {
  var e = c;
  if (n == null || ef[typeof n]) return !![];
  if (Array[e(1900)](n) || typeof n == "object") {
    if (!Object[e(988)](n)) return ![];
    const x = Object[e(319)](n);
    for (let t = 0; t < x[e(152)]; t++) {
      let r = null;
      try {
        r = n[x[t]];
      } catch (a) {
        continue;
      }
      if (!li(r)) return ![];
    }
    return !![];
  }
  return gr[e(1839)](e(1172) + typeof n, e(661), n);
}
function tf(n) {
  var e = c;
  if (li(n)) return n;
  if (Array.isArray(n)) return Object.freeze(n[e(794)]((x) => mx(x)));
  if (typeof n === e(661)) {
    const x = {};
    for (const t in n) {
      const r = n[t];
      r !== void 0 && F(x, t, mx(r));
    }
    return x;
  }
  return gr[e(1839)](e(1172) + typeof n, e(661), n);
}
function mx(n) {
  return tf(n);
}
class Ue {
  constructor(e) {
    for (const x in e) this[x] = mx(e[x]);
  }
}
const Vt = "abi/5.7.0",
  z0 = new T(Vt),
  Re = {};
let sa = { calldata: !![], memory: !![], storage: !![] },
  rf = { calldata: !![], memory: !![] };
function Zt(n, e) {
  var x = c;
  if (n === x(1592) || n === x(1721)) {
    if (sa[e]) return !![];
  } else if (n === x(1531)) {
    if (e === x(1925)) return !![];
  } else if ((n.indexOf("[") >= 0 || n === x(1612)) && rf[e]) return !![];
  return (sa[e] || e === "payable") && z0[x(1839)](x(1097), x(296), e), ![];
}
function nf(n, e) {
  var x = c;
  let t = n;
  function r(l) {
    var v = O;
    z0.throwArgumentError(v(1336) + l, v(274), n);
  }
  n = n[x(330)](/\s/g, " ");
  function a(l) {
    var v = x;
    let m = { type: "", name: "", parent: l, state: { allowType: !![] } };
    return e && (m[v(1517)] = ![]), m;
  }
  let s = { type: "", name: "", state: { allowType: !![] } },
    d = s;
  for (let l = 0; l < n.length; l++) {
    let v = n[l];
    switch (v) {
      case "(":
        d[x(811)].allowType && d[x(577)] === ""
          ? (d[x(577)] = x(1612))
          : !d[x(811)][x(1142)] && r(l),
          (d[x(811)].allowType = ![]),
          (d.type = Je(d.type)),
          (d.components = [a(d)]),
          (d = d[x(1245)][0]);
        break;
      case ")":
        delete d[x(811)],
          d[x(296)] === x(1517) &&
            (!e && r(l), (d[x(1517)] = !![]), (d[x(296)] = "")),
          Zt(d[x(577)], d[x(296)]) && (d[x(296)] = ""),
          (d.type = Je(d[x(577)]));
        let m = d;
        (d = d.parent),
          !d && r(l),
          delete m[x(1736)],
          (d[x(811)][x(1142)] = ![]),
          (d.state[x(1895)] = !![]),
          (d.state[x(1508)] = !![]);
        break;
      case ",":
        delete d[x(811)],
          d[x(296)] === x(1517) &&
            (!e && r(l), (d[x(1517)] = !![]), (d[x(296)] = "")),
          Zt(d[x(577)], d[x(296)]) && (d[x(296)] = ""),
          (d[x(577)] = Je(d.type));
        let g = a(d.parent);
        d[x(1736)][x(1245)][x(608)](g), delete d[x(1736)], (d = g);
        break;
      case " ":
        d[x(811)][x(423)] &&
          d[x(577)] !== "" &&
          ((d[x(577)] = Je(d[x(577)])),
          delete d.state[x(423)],
          (d[x(811)][x(1895)] = !![]),
          (d.state[x(1142)] = !![])),
          d[x(811)][x(1895)] &&
            d[x(296)] !== "" &&
            (d[x(296)] === x(1517)
              ? (!e && r(l),
                d[x(1517)] && r(l),
                (d[x(1517)] = !![]),
                (d[x(296)] = ""))
              : Zt(d[x(577)], d.name)
              ? (d[x(296)] = "")
              : (d.state.allowName = ![]));
        break;
      case "[":
        !d.state[x(1508)] && r(l),
          (d.type += v),
          (d.state[x(1508)] = ![]),
          (d[x(811)][x(1895)] = ![]),
          (d[x(811)][x(804)] = !![]);
        break;
      case "]":
        !d[x(811)][x(804)] && r(l),
          (d[x(577)] += v),
          (d.state[x(804)] = ![]),
          (d[x(811)][x(1508)] = !![]),
          (d[x(811)][x(1895)] = !![]);
        break;
      default:
        d[x(811)][x(423)]
          ? ((d[x(577)] += v),
            (d[x(811)].allowParams = !![]),
            (d.state.allowArray = !![]))
          : d.state[x(1895)]
          ? ((d[x(296)] += v), delete d[x(811)][x(1508)])
          : d[x(811)].readArray
          ? (d[x(577)] += v)
          : r(l);
    }
  }
  return (
    d.parent && z0[x(1839)](x(519), x(274), n),
    delete s[x(811)],
    d.name === x(1517)
      ? (!e && r(t[x(152)] - 7),
        d.indexed && r(t.length - 7),
        (d[x(1517)] = !![]),
        (d.name = ""))
      : Zt(d[x(577)], d[x(296)]) && (d[x(296)] = ""),
    (s.type = Je(s[x(577)])),
    s
  );
}
function hr(n, e) {
  for (let x in e) F(n, x, e[x]);
}
const H0 = Object[c(250)]({
    sighash: c(846),
    minimal: c(482),
    full: c(1182),
    json: c(254),
  }),
  af = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ix {
  constructor(e, x) {
    var t = c;
    e !== Re &&
      z0.throwError(t(1223), T[t(1169)].UNSUPPORTED_OPERATION, {
        operation: "new ParamType()",
      }),
      hr(this, x);
    let r = this[t(577)].match(af);
    r
      ? hr(this, {
          arrayLength: parseInt(r[2] || "-1"),
          arrayChildren: ix[t(1485)]({ type: r[1], components: this[t(1245)] }),
          baseType: t(588),
        })
      : hr(this, {
          arrayLength: null,
          arrayChildren: null,
          baseType: this[t(1245)] != null ? "tuple" : this[t(577)],
        }),
      (this[t(1210)] = !![]),
      Object.freeze(this);
  }
  [c(504)](e) {
    var x = c;
    if (
      (!e && (e = H0[x(846)]),
      !H0[e] && z0.throwArgumentError(x(182), x(504), e),
      e === H0.json)
    ) {
      let r = {
        type: this[x(882)] === x(1612) ? "tuple" : this.type,
        name: this[x(296)] || void 0,
      };
      return (
        typeof this[x(1517)] === x(1675) && (r.indexed = this[x(1517)]),
        this[x(1245)] &&
          (r[x(1245)] = this[x(1245)][x(794)]((a) =>
            JSON[x(1698)](a[x(504)](e))
          )),
        JSON.stringify(r)
      );
    }
    let t = "";
    return (
      this[x(882)] === x(588)
        ? ((t += this[x(802)].format(e)),
          (t +=
            "[" + (this[x(1093)] < 0 ? "" : String(this.arrayLength)) + "]"))
        : this[x(882)] === x(1612)
        ? (e !== H0[x(846)] && (t += this[x(577)]),
          (t +=
            "(" +
            this[x(1245)]
              [x(794)]((r) => r.format(e))
              [x(1286)](e === H0[x(1182)] ? ", " : ",") +
            ")"))
        : (t += this[x(577)]),
      e !== H0[x(846)] &&
        (this[x(1517)] === !![] && (t += " indexed"),
        e === H0[x(1182)] && this[x(296)] && (t += " " + this[x(296)])),
      t
    );
  }
  static [c(1180)](e, x) {
    var t = c;
    return typeof e == "string" ? ix[t(1061)](e, x) : ix[t(1485)](e);
  }
  static [c(1485)](e) {
    var x = c;
    return ix[x(1352)](e)
      ? e
      : new ix(Re, {
          name: e[x(296)] || null,
          type: Je(e[x(577)]),
          indexed: e[x(1517)] == null ? null : !!e[x(1517)],
          components: e.components ? e[x(1245)].map(ix[x(1485)]) : null,
        });
  }
  static [c(1061)](e, x) {
    function t(r) {
      var a = O;
      return ix.fromObject({
        name: r[a(296)],
        type: r[a(577)],
        indexed: r[a(1517)],
        components: r[a(1245)],
      });
    }
    return t(nf(e, !!x));
  }
  static [c(1352)](e) {
    var x = c;
    return !!(e != null && e[x(1210)]);
  }
}
function Gt(n, e) {
  var x = c;
  return ff(n)[x(794)]((t) => ix[x(1061)](t, e));
}
class Kx {
  constructor(e, x) {
    var t = c;
    e !== Re &&
      z0[t(304)](t(486), T[t(1169)].UNSUPPORTED_OPERATION, {
        operation: t(477),
      }),
      hr(this, x),
      (this[t(741)] = !![]),
      Object[t(250)](this);
  }
  static [c(1180)](e) {
    var x = c;
    return Kx[x(801)](e)
      ? e
      : typeof e === x(1721)
      ? Kx[x(1061)](e)
      : Kx[x(1485)](e);
  }
  static [c(1485)](e) {
    var x = c;
    if (Kx[x(801)](e)) return e;
    switch (e[x(577)]) {
      case x(289):
        return Ox.fromObject(e);
      case x(547):
        return Gx[x(1485)](e);
      case x(891):
        return Rx[x(1485)](e);
      case x(779):
        return Qx[x(1485)](e);
      case x(232):
      case x(1381):
        return null;
    }
    return z0.throwArgumentError(x(178), "value", e);
  }
  static fromString(e) {
    var x = c;
    return (
      (e = e.replace(/\s/g, " ")),
      (e = e.replace(/\(/g, " (")[x(330)](/\)/g, ") ").replace(/\s+/g, " ")),
      (e = e[x(1661)]()),
      e[x(1418)](" ")[0] === "event"
        ? Gx.fromString(e[x(1329)](5)[x(1661)]())
        : e[x(1418)](" ")[0] === x(289)
        ? Ox[x(1061)](e[x(1329)](8)[x(1661)]())
        : e[x(1418)]("(")[0][x(1661)]() === "constructor"
        ? Rx[x(1061)](e[x(1661)]())
        : e[x(1418)](" ")[0] === "error"
        ? Qx[x(1061)](e.substring(5).trim())
        : z0[x(1839)](x(508), x(1204), e)
    );
  }
  static [c(801)](e) {
    return !!(e && e._isFragment);
  }
}
class Gx extends Kx {
  [c(504)](e) {
    var x = c;
    if (
      (!e && (e = H0[x(846)]),
      !H0[e] && z0[x(1839)]("invalid format type", x(504), e),
      e === H0[x(254)])
    )
      return JSON[x(657)]({
        type: x(547),
        anonymous: this[x(1411)],
        name: this.name,
        inputs: this[x(308)][x(794)]((r) => JSON[x(1698)](r[x(504)](e))),
      });
    let t = "";
    return (
      e !== H0[x(846)] && (t += x(422)),
      (t +=
        this[x(296)] +
        "(" +
        this[x(308)]
          [x(794)]((r) => r[x(504)](e))
          [x(1286)](e === H0.full ? ", " : ",") +
        ") "),
      e !== H0[x(846)] && this[x(1411)] && (t += x(949)),
      t[x(1661)]()
    );
  }
  static [c(1180)](e) {
    var x = c;
    return typeof e === x(1721) ? Gx[x(1061)](e) : Gx[x(1485)](e);
  }
  static [c(1485)](e) {
    var x = c;
    if (Gx[x(568)](e)) return e;
    e[x(577)] !== "event" && z0[x(1839)](x(1121), x(1204), e);
    const t = {
      name: Kt(e[x(296)]),
      anonymous: e.anonymous,
      inputs: e[x(308)] ? e[x(308)][x(794)](ix[x(1485)]) : [],
      type: x(547),
    };
    return new Gx(Re, t);
  }
  static [c(1061)](e) {
    var x = c;
    let t = e[x(354)](qt);
    !t && z0.throwArgumentError(x(689), "value", e);
    let r = ![];
    return (
      t[3][x(1418)](" ")[x(1745)]((a) => {
        var s = x;
        switch (a[s(1661)]()) {
          case s(1411):
            r = !![];
            break;
          case "":
            break;
          default:
            z0.warn("unknown modifier: " + a);
        }
      }),
      Gx[x(1485)]({
        name: t[1][x(1661)](),
        anonymous: r,
        inputs: Gt(t[2], !![]),
        type: x(547),
      })
    );
  }
  static [c(568)](e) {
    var x = c;
    return e && e[x(741)] && e[x(577)] === x(547);
  }
}
function bi(n, e) {
  var x = c;
  e[x(1230)] = null;
  let t = n[x(1418)]("@");
  return t[x(152)] !== 1
    ? (t[x(152)] > 2 && z0.throwArgumentError(x(217), x(1204), n),
      !t[1].match(/^[0-9]+$/) &&
        z0[x(1839)]("invalid human-readable ABI signature gas", x(1204), n),
      (e[x(1230)] = z.from(t[1])),
      t[0])
    : n;
}
function vi(n, e) {
  var x = c;
  (e[x(1482)] = ![]),
    (e[x(1925)] = ![]),
    (e[x(204)] = x(1811)),
    n.split(" ")[x(1745)]((t) => {
      var r = x;
      switch (t[r(1661)]()) {
        case "constant":
          e.constant = !![];
          break;
        case r(1925):
          (e.payable = !![]), (e[r(204)] = r(1925));
          break;
        case r(1811):
          (e[r(1925)] = ![]), (e.stateMutability = r(1811));
          break;
        case r(1139):
          (e[r(1482)] = !![]), (e[r(204)] = r(1139));
          break;
        case "view":
          (e.constant = !![]), (e[r(204)] = r(1389));
          break;
        case r(1295):
        case "public":
        case "":
          break;
        default:
          console[r(599)](r(738) + t);
      }
    });
}
function pi(n) {
  var e = c;
  let x = { constant: ![], payable: !![], stateMutability: "payable" };
  return (
    n[e(204)] != null
      ? ((x[e(204)] = n[e(204)]),
        (x[e(1482)] = x[e(204)] === e(1389) || x[e(204)] === e(1139)),
        n[e(1482)] != null &&
          !!n.constant !== x[e(1482)] &&
          z0.throwArgumentError(
            "cannot have constant function with mutability " +
              x.stateMutability,
            "value",
            n
          ),
        (x[e(1925)] = x[e(204)] === "payable"),
        n[e(1925)] != null &&
          !!n[e(1925)] !== x[e(1925)] &&
          z0[e(1839)](e(244) + x[e(204)], "value", n))
      : n[e(1925)] != null
      ? ((x[e(1925)] = !!n.payable),
        n[e(1482)] == null &&
          !x[e(1925)] &&
          n[e(577)] !== e(891) &&
          z0[e(1839)](e(1943), "value", n),
        (x[e(1482)] = !!n.constant),
        x.constant
          ? (x[e(204)] = e(1389))
          : (x[e(204)] = x[e(1925)] ? e(1925) : e(1811)),
        x[e(1925)] && x[e(1482)] && z0.throwArgumentError(e(518), e(1204), n))
      : n[e(1482)] != null
      ? ((x.constant = !!n[e(1482)]),
        (x[e(1925)] = !x[e(1482)]),
        (x[e(204)] = x[e(1482)] ? "view" : e(1925)))
      : n[e(577)] !== e(891) && z0.throwArgumentError(e(1943), "value", n),
    x
  );
}
class Rx extends Kx {
  [c(504)](e) {
    var x = c;
    if (
      (!e && (e = H0[x(846)]),
      !H0[e] && z0.throwArgumentError(x(182), x(504), e),
      e === H0[x(254)])
    )
      return JSON.stringify({
        type: "constructor",
        stateMutability: this[x(204)] !== "nonpayable" ? this[x(204)] : void 0,
        payable: this[x(1925)],
        gas: this[x(1230)] ? this[x(1230)][x(1919)]() : void 0,
        inputs: this[x(308)][x(794)]((r) => JSON[x(1698)](r[x(504)](e))),
      });
    e === H0.sighash &&
      z0[x(304)](x(187), T[x(1169)][x(854)], { operation: x(502) });
    let t =
      x(1082) +
      this[x(308)]
        [x(794)]((r) => r.format(e))
        [x(1286)](e === H0[x(1182)] ? ", " : ",") +
      ") ";
    return (
      this[x(204)] &&
        this.stateMutability !== x(1811) &&
        (t += this[x(204)] + " "),
      t[x(1661)]()
    );
  }
  static [c(1180)](e) {
    var x = c;
    return typeof e == "string" ? Rx[x(1061)](e) : Rx[x(1485)](e);
  }
  static [c(1485)](e) {
    var x = c;
    if (Rx[x(288)](e)) return e;
    e[x(577)] !== x(891) && z0[x(1839)](x(832), x(1204), e);
    let t = pi(e);
    t[x(1482)] && z0.throwArgumentError(x(2001), x(1204), e);
    const r = {
      name: null,
      type: e[x(577)],
      inputs: e.inputs ? e[x(308)][x(794)](ix.fromObject) : [],
      payable: t.payable,
      stateMutability: t[x(204)],
      gas: e[x(1230)] ? z[x(1180)](e.gas) : null,
    };
    return new Rx(Re, r);
  }
  static fromString(e) {
    var x = c;
    let t = { type: x(891) };
    e = bi(e, t);
    let r = e.match(qt);
    return (
      (!r || r[1][x(1661)]() !== x(891)) &&
        z0[x(1839)]("invalid constructor string", x(1204), e),
      (t[x(308)] = Gt(r[2][x(1661)](), ![])),
      vi(r[3][x(1661)](), t),
      Rx[x(1485)](t)
    );
  }
  static isConstructorFragment(e) {
    var x = c;
    return e && e._isFragment && e.type === x(891);
  }
}
class Ox extends Rx {
  [c(504)](e) {
    var x = c;
    if (
      (!e && (e = H0[x(846)]),
      !H0[e] && z0[x(1839)](x(182), x(504), e),
      e === H0[x(254)])
    )
      return JSON.stringify({
        type: x(289),
        name: this.name,
        constant: this[x(1482)],
        stateMutability:
          this.stateMutability !== "nonpayable" ? this[x(204)] : void 0,
        payable: this[x(1925)],
        gas: this[x(1230)] ? this[x(1230)][x(1919)]() : void 0,
        inputs: this[x(308)][x(794)]((r) => JSON[x(1698)](r[x(504)](e))),
        outputs: this.outputs[x(794)]((r) => JSON[x(1698)](r[x(504)](e))),
      });
    let t = "";
    return (
      e !== H0[x(846)] && (t += x(883)),
      (t +=
        this.name +
        "(" +
        this[x(308)]
          [x(794)]((r) => r.format(e))
          .join(e === H0[x(1182)] ? ", " : ",") +
        ") "),
      e !== H0.sighash &&
        (this[x(204)]
          ? this[x(204)] !== x(1811) && (t += this[x(204)] + " ")
          : this[x(1482)] && (t += x(412)),
        this[x(325)] &&
          this[x(325)][x(152)] &&
          (t +=
            x(617) +
            this[x(325)][x(794)]((r) => r[x(504)](e))[x(1286)](", ") +
            ") "),
        this[x(1230)] != null && (t += "@" + this[x(1230)].toString() + " ")),
      t.trim()
    );
  }
  static [c(1180)](e) {
    var x = c;
    return typeof e === x(1721) ? Ox[x(1061)](e) : Ox.fromObject(e);
  }
  static fromObject(e) {
    var x = c;
    if (Ox[x(1421)](e)) return e;
    e[x(577)] !== x(289) && z0[x(1839)]("invalid function object", x(1204), e);
    let t = pi(e);
    const r = {
      type: e[x(577)],
      name: Kt(e[x(296)]),
      constant: t.constant,
      inputs: e.inputs ? e[x(308)][x(794)](ix[x(1485)]) : [],
      outputs: e.outputs ? e[x(325)][x(794)](ix[x(1485)]) : [],
      payable: t[x(1925)],
      stateMutability: t.stateMutability,
      gas: e[x(1230)] ? z[x(1180)](e[x(1230)]) : null,
    };
    return new Ox(Re, r);
  }
  static [c(1061)](e) {
    var x = c;
    let t = { type: x(289) };
    e = bi(e, t);
    let r = e[x(1418)](x(1478));
    r[x(152)] > 2 && z0[x(1839)]("invalid function string", x(1204), e);
    let a = r[0][x(354)](qt);
    if (
      (!a && z0[x(1839)](x(310), x(1204), e),
      (t.name = a[1][x(1661)]()),
      t[x(296)] && Kt(t.name),
      (t[x(308)] = Gt(a[2], ![])),
      vi(a[3][x(1661)](), t),
      r.length > 1)
    ) {
      let s = r[1][x(354)](qt);
      (s[1].trim() != "" || s[3][x(1661)]() != "") &&
        z0.throwArgumentError(x(525), x(1204), e),
        (t[x(325)] = Gt(s[2], ![]));
    } else t[x(325)] = [];
    return Ox.fromObject(t);
  }
  static isFunctionFragment(e) {
    var x = c;
    return e && e[x(741)] && e[x(577)] === "function";
  }
}
function fa(n) {
  var e = c;
  const x = n[e(504)]();
  return (
    (x === e(247) || x === e(791)) &&
      z0[e(1839)]("cannot specify user defined " + x + " error", e(1257), n),
    n
  );
}
class Qx extends Kx {
  [c(504)](e) {
    var x = c;
    if (
      (!e && (e = H0.sighash),
      !H0[e] && z0[x(1839)](x(182), "format", e),
      e === H0.json)
    )
      return JSON.stringify({
        type: x(779),
        name: this[x(296)],
        inputs: this[x(308)][x(794)]((r) => JSON[x(1698)](r.format(e))),
      });
    let t = "";
    return (
      e !== H0[x(846)] && (t += "error "),
      (t +=
        this[x(296)] +
        "(" +
        this[x(308)]
          [x(794)]((r) => r[x(504)](e))
          [x(1286)](e === H0[x(1182)] ? ", " : ",") +
        ") "),
      t[x(1661)]()
    );
  }
  static [c(1180)](e) {
    var x = c;
    return typeof e === x(1721) ? Qx[x(1061)](e) : Qx[x(1485)](e);
  }
  static [c(1485)](e) {
    var x = c;
    if (Qx[x(899)](e)) return e;
    e[x(577)] !== "error" && z0[x(1839)]("invalid error object", x(1204), e);
    const t = {
      type: e[x(577)],
      name: Kt(e[x(296)]),
      inputs: e[x(308)] ? e[x(308)][x(794)](ix.fromObject) : [],
    };
    return fa(new Qx(Re, t));
  }
  static [c(1061)](e) {
    var x = c;
    let t = { type: x(779) },
      r = e[x(354)](qt);
    return (
      !r && z0[x(1839)](x(1424), x(1204), e),
      (t.name = r[1][x(1661)]()),
      t[x(296)] && Kt(t.name),
      (t[x(308)] = Gt(r[2], ![])),
      fa(Qx[x(1485)](t))
    );
  }
  static isErrorFragment(e) {
    var x = c;
    return e && e[x(741)] && e.type === x(779);
  }
}
function Je(n) {
  var e = c;
  return (
    n[e(354)](/^uint($|[^1-9])/)
      ? (n = "uint256" + n[e(1329)](4))
      : n.match(/^int($|[^1-9])/) && (n = "int256" + n[e(1329)](3)),
    n
  );
}
const sf = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function Kt(n) {
  var e = c;
  return (
    (!n || !n[e(354)](sf)) &&
      z0[e(1839)]('invalid identifier "' + n + '"', e(1204), n),
    n
  );
}
const qt = new RegExp(c(1260));
function ff(n) {
  var e = c;
  n = n[e(1661)]();
  let x = [],
    t = "",
    r = 0;
  for (let a = 0; a < n[e(152)]; a++) {
    let s = n[a];
    s === "," && r === 0
      ? (x[e(608)](t), (t = ""))
      : ((t += s),
        s === "("
          ? r++
          : s === ")" && (r--, r === -1 && z0[e(1839)](e(1219), e(1204), n)));
  }
  return t && x[e(608)](t), x;
}
const kn = new T(Vt);
function mi(n) {
  const e = [],
    x = function (t, r) {
      var a = O;
      if (!!Array[a(1900)](r))
        for (let s in r) {
          const d = t[a(1095)]();
          d[a(608)](s);
          try {
            x(d, r[s]);
          } catch (l) {
            e[a(608)]({ path: d, error: l });
          }
        }
    };
  return x([], n), e;
}
class Yx {
  constructor(e, x, t, r) {
    var a = c;
    (this.name = e),
      (this[a(577)] = x),
      (this[a(1207)] = t),
      (this[a(1704)] = r);
  }
  [c(824)](e, x) {
    var t = c;
    kn[t(1839)](e, this.localName, x);
  }
}
class cn {
  constructor(e) {
    var x = c;
    F(this, x(1798), e || 32),
      (this._data = []),
      (this[x(1920)] = 0),
      (this[x(1474)] = new Uint8Array(e));
  }
  get [c(1086)]() {
    var e = c;
    return vx(this[e(1893)]);
  }
  get [c(152)]() {
    var e = c;
    return this[e(1920)];
  }
  _writeData(e) {
    var x = c;
    return this[x(1893)][x(608)](e), (this._dataLength += e[x(152)]), e.length;
  }
  [c(1828)](e) {
    var x = c;
    return this[x(540)](V0(e._data));
  }
  writeBytes(e) {
    var x = c;
    let t = q(e);
    const r = t.length % this[x(1798)];
    return r && (t = V0([t, this[x(1474)][x(1095)](r)])), this[x(540)](t);
  }
  [c(2002)](e) {
    var x = c;
    let t = q(z.from(e));
    return (
      t[x(152)] > this[x(1798)] &&
        kn[x(304)](x(1320), T[x(1169)].BUFFER_OVERRUN, {
          length: this[x(1798)],
          offset: t[x(152)],
        }),
      t[x(152)] % this.wordSize &&
        (t = V0([this[x(1474)][x(1095)](t[x(152)] % this.wordSize), t])),
      t
    );
  }
  [c(909)](e) {
    var x = c;
    return this[x(540)](this[x(2002)](e));
  }
  [c(898)]() {
    var e = c;
    const x = this[e(1893)][e(152)];
    return (
      this[e(1893)][e(608)](this[e(1474)]),
      (this[e(1920)] += this[e(1798)]),
      (t) => {
        var r = e;
        this[r(1893)][x] = this[r(2002)](t);
      }
    );
  }
}
class yr {
  constructor(e, x, t, r) {
    var a = c;
    F(this, a(1893), q(e)),
      F(this, a(1798), x || 32),
      F(this, a(1969), t),
      F(this, "allowLoose", r),
      (this[a(773)] = 0);
  }
  get [c(1086)]() {
    var e = c;
    return H(this[e(1893)]);
  }
  get [c(1842)]() {
    var e = c;
    return this[e(773)];
  }
  static [c(1692)](e, x) {
    var t = c;
    let r = e[t(354)](t(1014));
    return r && parseInt(r[1]) <= 48 && (x = x[t(1919)]()), x;
  }
  coerce(e, x) {
    var t = c;
    return this[t(1969)] ? this[t(1969)](e, x) : yr.coerce(e, x);
  }
  [c(1194)](e, x, t) {
    var r = c;
    let a = Math[r(1277)](x / this[r(1798)]) * this.wordSize;
    return (
      this[r(773)] + a > this[r(1893)][r(152)] &&
        (this[r(528)] && t && this._offset + x <= this[r(1893)].length
          ? (a = x)
          : kn[r(304)](r(1040), T[r(1169)][r(560)], {
              length: this._data[r(152)],
              offset: this[r(773)] + a,
            })),
      this[r(1893)][r(1095)](this[r(773)], this[r(773)] + a)
    );
  }
  [c(1576)](e) {
    var x = c;
    return new yr(
      this._data[x(1095)](this[x(773)] + e),
      this[x(1798)],
      this[x(1969)],
      this.allowLoose
    );
  }
  [c(390)](e, x) {
    var t = c;
    let r = this[t(1194)](0, e, !!x);
    return (this[t(773)] += r[t(152)]), r[t(1095)](0, e);
  }
  [c(877)]() {
    var e = c;
    return z[e(1180)](this[e(390)](this[e(1798)]));
  }
}
function Q0(n) {
  var e = c;
  return "0x" + Js[e(202)](q(n));
}
const cf = c(1224),
  Ux = new T(cf);
function ca(n) {
  const e = [];
  for (; n; ) e.unshift(n & 255), (n >>= 8);
  return e;
}
function oa(n, e, x) {
  let t = 0;
  for (let r = 0; r < x; r++) t = t * 256 + n[e + r];
  return t;
}
function gi(n) {
  var e = c;
  if (Array.isArray(n)) {
    let r = [];
    if (
      (n[e(1745)](function (s) {
        var d = e;
        r = r[d(1129)](gi(s));
      }),
      r[e(152)] <= 55)
    )
      return r[e(1604)](192 + r.length), r;
    const a = ca(r.length);
    return a.unshift(247 + a[e(152)]), a[e(1129)](r);
  }
  !Wt(n) && Ux[e(1839)]("RLP object must be BytesLike", e(661), n);
  const x = Array[e(1024)].slice[e(1340)](q(n));
  if (x[e(152)] === 1 && x[0] <= 127) return x;
  if (x[e(152)] <= 55) return x[e(1604)](128 + x.length), x;
  const t = ca(x[e(152)]);
  return t[e(1604)](183 + t[e(152)]), t.concat(x);
}
function Oe(n) {
  return H(gi(n));
}
function ua(n, e, x, t) {
  var r = c;
  const a = [];
  for (; x < e + 1 + t; ) {
    const s = yi(n, x);
    a[r(608)](s[r(1546)]),
      (x += s.consumed),
      x > e + 1 + t && Ux.throwError(r(1896), T[r(1169)][r(560)], {});
  }
  return { consumed: 1 + t, result: a };
}
function yi(n, e) {
  var x = c;
  if (
    (n[x(152)] === 0 && Ux.throwError(x(1941), T[x(1169)][x(560)], {}),
    n[e] >= 248)
  ) {
    const t = n[e] - 247;
    e + 1 + t > n[x(152)] &&
      Ux[x(304)]("data short segment too short", T[x(1169)].BUFFER_OVERRUN, {});
    const r = oa(n, e + 1, t);
    return (
      e + 1 + t + r > n[x(152)] && Ux[x(304)](x(268), T[x(1169)][x(560)], {}),
      ua(n, e, e + 1 + t, t + r)
    );
  } else if (n[e] >= 192) {
    const t = n[e] - 192;
    return (
      e + 1 + t > n.length && Ux.throwError(x(972), T[x(1169)][x(560)], {}),
      ua(n, e, e + 1, t)
    );
  } else if (n[e] >= 184) {
    const t = n[e] - 183;
    e + 1 + t > n[x(152)] && Ux.throwError(x(972), T.errors[x(560)], {});
    const r = oa(n, e + 1, t);
    e + 1 + t + r > n.length &&
      Ux[x(304)](x(972), T[x(1169)].BUFFER_OVERRUN, {});
    const a = H(n[x(1095)](e + 1 + t, e + 1 + t + r));
    return { consumed: 1 + t + r, result: a };
  } else if (n[e] >= 128) {
    const t = n[e] - 128;
    e + 1 + t > n[x(152)] && Ux[x(304)](x(1941), T[x(1169)][x(560)], {});
    const r = H(n[x(1095)](e + 1, e + 1 + t));
    return { consumed: 1 + t, result: r };
  }
  return { consumed: 1, result: H(n[e]) };
}
function Tr(n) {
  var e = c;
  const x = q(n),
    t = yi(x, 0);
  return (
    t.consumed !== x.length && Ux.throwArgumentError(e(1312), "data", n),
    t[e(1546)]
  );
}
const of = Object.freeze(
    Object[c(782)](
      { __proto__: null, encode: Oe, decode: Tr },
      Symbol[c(1942)],
      { value: c(1197) }
    )
  ),
  uf = c(1959),
  te = new T(uf);
function ha(n) {
  var e = c;
  !n0(n, 20) && te.throwArgumentError(e(311), e(1531), n), (n = n[e(177)]());
  const x = n[e(1329)](2)[e(1418)](""),
    t = new Uint8Array(40);
  for (let a = 0; a < 40; a++) t[a] = x[a][e(501)](0);
  const r = q(Q0(t));
  for (let a = 0; a < 40; a += 2)
    r[a >> 1] >> 4 >= 8 && (x[a] = x[a].toUpperCase()),
      (r[a >> 1] & 15) >= 8 && (x[a + 1] = x[a + 1][e(317)]());
  return "0x" + x[e(1286)]("");
}
const hf = 9007199254740991;
function df(n) {
  var e = c;
  return Math.log10 ? Math[e(1102)](n) : Math[e(599)](n) / Math[e(975)];
}
const Sn = {};
for (let n = 0; n < 10; n++) Sn[String(n)] = String(n);
for (let n = 0; n < 26; n++) Sn[String[c(480)](65 + n)] = String(10 + n);
const da = Math[c(305)](df(hf));
function wi(n) {
  var e = c;
  (n = n[e(317)]()), (n = n[e(1329)](4) + n[e(1329)](0, 2) + "00");
  let x = n[e(1418)]("")
    [e(794)]((r) => Sn[r])
    [e(1286)]("");
  for (; x.length >= da; ) {
    let r = x.substring(0, da);
    x = (parseInt(r, 10) % 97) + x[e(1329)](r[e(152)]);
  }
  let t = String(98 - (parseInt(x, 10) % 97));
  for (; t[e(152)] < 2; ) t = "0" + t;
  return t;
}
function j0(n) {
  var e = c;
  let x = null;
  if (
    (typeof n !== e(1721) && te[e(1839)](e(311), e(1531), n),
    n[e(354)](/^(0x)?[0-9a-fA-F]{40}$/))
  )
    n[e(1329)](0, 2) !== "0x" && (n = "0x" + n),
      (x = ha(n)),
      n.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        x !== n &&
        te[e(1839)](e(1114), e(1531), n);
  else if (n.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      n.substring(2, 4) !== wi(n) && te.throwArgumentError(e(1392), e(1531), n),
        x = Xs(n[e(1329)](4));
      x[e(152)] < 40;

    )
      x = "0" + x;
    x = ha("0x" + x);
  } else te.throwArgumentError(e(311), e(1531), n);
  return x;
}
function lf(n) {
  try {
    return j0(n), !![];
  } catch (e) {}
  return ![];
}
function bf(n) {
  var e = c;
  let x = Zs(j0(n)[e(1329)](2)).toUpperCase();
  for (; x[e(152)] < 30; ) x = "0" + x;
  return "XE" + wi(e(1597) + x) + x;
}
function Ir(n) {
  var e = c;
  let x = null;
  try {
    x = j0(n[e(1180)]);
  } catch (r) {
    te[e(1839)](e(388), e(1785), n);
  }
  const t = zx(q(z[e(1180)](n[e(1361)]).toHexString()));
  return j0(tx(Q0(Oe([x, t])), 12));
}
function vf(n, e, x) {
  var t = c;
  return (
    Hx(e) !== 32 && te[t(1839)](t(829), t(1271), e),
    Hx(x) !== 32 && te[t(1839)](t(1382), "initCodeHash", x),
    j0(tx(Q0(V0([t(1409), j0(n), e, x])), 12))
  );
}
class pf extends Yx {
  constructor(e) {
    var x = c;
    super(x(1531), "address", e, ![]);
  }
  [c(700)]() {
    var e = c;
    return e(1543);
  }
  [c(1664)](e, x) {
    var t = c;
    try {
      x = j0(x);
    } catch (r) {
      this._throwError(r[t(469)], x);
    }
    return e.writeValue(x);
  }
  decode(e) {
    var x = c;
    return j0(Y0(e[x(877)]()[x(1304)](), 20));
  }
}
class mf extends Yx {
  constructor(e) {
    var x = c;
    super(e[x(296)], e[x(577)], void 0, e.dynamic), (this.coder = e);
  }
  [c(700)]() {
    var e = c;
    return this[e(1297)][e(700)]();
  }
  [c(1664)](e, x) {
    var t = c;
    return this[t(1297)][t(1664)](e, x);
  }
  [c(1022)](e) {
    var x = c;
    return this[x(1297)][x(1022)](e);
  }
}
const Qe = new T(Vt);
function Ai(n, e, x) {
  var t = c;
  let r = null;
  if (Array.isArray(x)) r = x;
  else if (x && typeof x == "object") {
    let v = {};
    r = e.map((m) => {
      var g = O;
      const k = m[g(1207)];
      return (
        !k &&
          Qe.throwError(g(624), T[g(1169)][g(1897)], {
            argument: g(1293),
            coder: m,
            value: x,
          }),
        v[k] &&
          Qe[g(304)](g(1410), T[g(1169)][g(1897)], {
            argument: g(1293),
            coder: m,
            value: x,
          }),
        (v[k] = !![]),
        x[k]
      );
    });
  } else Qe[t(1839)](t(674), t(1612), x);
  e[t(152)] !== r[t(152)] &&
    Qe[t(1839)]("types/value length mismatch", "tuple", x);
  let a = new cn(n[t(1798)]),
    s = new cn(n[t(1798)]),
    d = [];
  e.forEach((v, m) => {
    var g = t;
    let k = r[m];
    if (v[g(1704)]) {
      let S = s[g(152)];
      v[g(1664)](s, k);
      let B = a[g(898)]();
      d[g(608)]((R) => {
        B(R + S);
      });
    } else v.encode(a, k);
  }),
    d[t(1745)]((v) => {
      var m = t;
      v(a[m(152)]);
    });
  let l = n[t(1828)](a);
  return (l += n[t(1828)](s)), l;
}
function Mi(n, e) {
  var x = c;
  let t = [],
    r = n[x(1576)](0);
  e[x(1745)]((s) => {
    var d = x;
    let l = null;
    if (s.dynamic) {
      let v = n[d(877)](),
        m = r[d(1576)](v.toNumber());
      try {
        l = s[d(1022)](m);
      } catch (g) {
        if (g[d(585)] === T[d(1169)][d(560)]) throw g;
        (l = g),
          (l[d(882)] = s[d(296)]),
          (l[d(296)] = s[d(1207)]),
          (l[d(577)] = s[d(577)]);
      }
    } else
      try {
        l = s[d(1022)](n);
      } catch (v) {
        if (v[d(585)] === T[d(1169)][d(560)]) throw v;
        (l = v),
          (l[d(882)] = s.name),
          (l[d(296)] = s[d(1207)]),
          (l.type = s[d(577)]);
      }
    l != null && t[d(608)](l);
  });
  const a = e[x(582)]((s, d) => {
    var l = x;
    const v = d[l(1207)];
    return v && (!s[v] && (s[v] = 0), s[v]++), s;
  }, {});
  e.forEach((s, d) => {
    var l = x;
    let v = s[l(1207)];
    if (!v || a[v] !== 1 || (v === l(152) && (v = "_length"), t[v] != null))
      return;
    const m = t[d];
    m instanceof Error
      ? Object[l(782)](t, v, {
          enumerable: !![],
          get: () => {
            throw m;
          },
        })
      : (t[v] = m);
  });
  for (let s = 0; s < t[x(152)]; s++) {
    const d = t[s];
    d instanceof Error &&
      Object[x(782)](t, s, {
        enumerable: !![],
        get: () => {
          throw d;
        },
      });
  }
  return Object[x(250)](t);
}
class gf extends Yx {
  constructor(e, x, t) {
    var r = c;
    const a = e[r(577)] + "[" + (x >= 0 ? x : "") + "]",
      s = x === -1 || e[r(1704)];
    super(r(588), a, t, s), (this.coder = e), (this[r(152)] = x);
  }
  [c(700)]() {
    var e = c;
    const x = this[e(1297)][e(700)](),
      t = [];
    for (let r = 0; r < this[e(152)]; r++) t[e(608)](x);
    return t;
  }
  [c(1664)](e, x) {
    var t = c;
    !Array.isArray(x) && this[t(824)]("expected array value", x);
    let r = this[t(152)];
    r === -1 && ((r = x[t(152)]), e[t(909)](x[t(152)])),
      Qe[t(1243)](
        x[t(152)],
        r,
        t(430) + (this[t(1207)] ? " " + this.localName : "")
      );
    let a = [];
    for (let s = 0; s < x[t(152)]; s++) a[t(608)](this.coder);
    return Ai(e, a, x);
  }
  [c(1022)](e) {
    var x = c;
    let t = this[x(152)];
    t === -1 &&
      ((t = e[x(877)]().toNumber()),
      t * 32 > e[x(1893)].length &&
        Qe.throwError("insufficient data length", T[x(1169)][x(560)], {
          length: e._data.length,
          count: t,
        }));
    let r = [];
    for (let a = 0; a < t; a++) r[x(608)](new mf(this[x(1297)]));
    return e.coerce(this[x(296)], Mi(e, r));
  }
}
class yf extends Yx {
  constructor(e) {
    var x = c;
    super(x(610), x(610), e, ![]);
  }
  [c(700)]() {
    return ![];
  }
  [c(1664)](e, x) {
    var t = c;
    return e[t(909)](x ? 1 : 0);
  }
  [c(1022)](e) {
    var x = c;
    return e[x(1692)](this[x(577)], !e[x(877)]()[x(770)]());
  }
}
class Ei extends Yx {
  constructor(e, x) {
    super(e, e, x, !![]);
  }
  defaultValue() {
    return "0x";
  }
  [c(1664)](e, x) {
    var t = c;
    x = q(x);
    let r = e[t(909)](x[t(152)]);
    return (r += e[t(1666)](x)), r;
  }
  [c(1022)](e) {
    var x = c;
    return e[x(390)](e[x(877)]()[x(1919)](), !![]);
  }
}
class wf extends Ei {
  constructor(e) {
    super("bytes", e);
  }
  [c(1022)](e) {
    var x = c;
    return e[x(1692)](this.name, H(super.decode(e)));
  }
}
class Af extends Yx {
  constructor(e, x) {
    var t = c;
    let r = t(1592) + String(e);
    super(r, r, x, ![]), (this.size = e);
  }
  [c(700)]() {
    var e = c;
    return "0x0000000000000000000000000000000000000000000000000000000000000000"[
      e(1329)
    ](0, 2 + this.size * 2);
  }
  encode(e, x) {
    var t = c;
    let r = q(x);
    return (
      r.length !== this[t(495)] && this[t(824)](t(859), x), e.writeBytes(r)
    );
  }
  [c(1022)](e) {
    var x = c;
    return e[x(1692)](this[x(296)], H(e[x(390)](this[x(495)])));
  }
}
class Mf extends Yx {
  constructor(e) {
    var x = c;
    super(x(211), "", e, ![]);
  }
  [c(700)]() {
    return null;
  }
  [c(1664)](e, x) {
    var t = c;
    return x != null && this[t(824)](t(1045), x), e[t(1666)]([]);
  }
  [c(1022)](e) {
    var x = c;
    return e[x(390)](0), e.coerce(this[x(296)], null);
  }
}
const ki = "0x0000000000000000000000000000000000000000",
  Si = z[c(1180)](-1),
  Pn = z[c(1180)](0),
  Pi = z.from(1),
  Ef = z[c(1180)](2),
  kf = z[c(1180)](c(1066)),
  Ci = z.from(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  ),
  Sf = z[c(1180)](c(227)),
  Pf = z[c(1180)](c(454)),
  Cn = c(1393),
  Cf = "\u039E",
  Bf = Object.freeze(
    Object[c(782)](
      {
        __proto__: null,
        AddressZero: ki,
        NegativeOne: Si,
        Zero: Pn,
        One: Pi,
        Two: Ef,
        WeiPerEther: kf,
        MaxUint256: Ci,
        MinInt256: Sf,
        MaxInt256: Pf,
        HashZero: Cn,
        EtherSymbol: Cf,
      },
      Symbol[c(1942)],
      { value: "Module" }
    )
  );
class Tf extends Yx {
  constructor(e, x, t) {
    var r = c;
    const a = r(x ? 1364 : 1190) + e * 8;
    super(a, a, t, ![]), (this[r(495)] = e), (this.signed = x);
  }
  [c(700)]() {
    return 0;
  }
  [c(1664)](e, x) {
    var t = c;
    let r = z.from(x),
      a = Ci[t(1052)](e[t(1798)] * 8);
    if (this[t(1779)]) {
      let s = a[t(1052)](this[t(495)] * 8 - 1);
      (r.gt(s) || r.lt(s[t(1607)](Pi)[t(1426)](Si))) &&
        this[t(824)]("value out-of-bounds", x);
    } else
      (r.lt(Pn) || r.gt(a[t(1052)](this[t(495)] * 8))) &&
        this[t(824)](t(1320), x);
    return (
      (r = r[t(1810)](this.size * 8).mask(this[t(495)] * 8)),
      this[t(1779)] &&
        (r = r[t(998)](this[t(495)] * 8)[t(1810)](8 * e[t(1798)])),
      e[t(909)](r)
    );
  }
  decode(e) {
    var x = c;
    let t = e[x(877)]().mask(this[x(495)] * 8);
    return (
      this[x(1779)] && (t = t.fromTwos(this[x(495)] * 8)),
      e[x(1692)](this.name, t)
    );
  }
}
const If = "strings/5.7.0",
  Bi = new T(If);
var Jx;
(function (n) {
  var e = c;
  (n[e(901)] = ""),
    (n[e(1051)] = e(1051)),
    (n.NFD = e(614)),
    (n[e(493)] = "NFKC"),
    (n[e(1851)] = "NFKD");
})(Jx || (Jx = {}));
var wx;
(function (n) {
  var e = c;
  (n[e(1331)] = e(1855)),
    (n.BAD_PREFIX = e(1706)),
    (n[e(1110)] = e(343)),
    (n[e(259)] = "missing continuation byte"),
    (n[e(1866)] = e(1273)),
    (n[e(1499)] = e(1763)),
    (n[e(1453)] = "overlong representation");
})(wx || (wx = {}));
function Nf(n, e, x, t, r) {
  var a = c;
  return Bi[a(1839)](a(1449) + e + "; " + n, "bytes", x);
}
function Ti(n, e, x, t, r) {
  var a = c;
  if (n === wx[a(629)] || n === wx[a(1331)]) {
    let s = 0;
    for (let d = e + 1; d < x[a(152)] && x[d] >> 6 === 2; d++) s++;
    return s;
  }
  return n === wx.OVERRUN ? x[a(152)] - e - 1 : 0;
}
function Rf(n, e, x, t, r) {
  var a = c;
  return n === wx[a(1453)] ? (t.push(r), 0) : (t[a(608)](65533), Ti(n, e, x));
}
const Ii = Object.freeze({ error: Nf, ignore: Ti, replace: Rf });
function Bn(n, e) {
  var x = c;
  e == null && (e = Ii.error), (n = q(n));
  const t = [];
  let r = 0;
  for (; r < n.length; ) {
    const a = n[r++];
    if (a >> 7 === 0) {
      t.push(a);
      continue;
    }
    let s = null,
      d = null;
    if ((a & 224) === 192) (s = 1), (d = 127);
    else if ((a & 240) === 224) (s = 2), (d = 2047);
    else if ((a & 248) === 240) (s = 3), (d = 65535);
    else {
      (a & 192) === 128
        ? (r += e(wx[x(1331)], r - 1, n, t))
        : (r += e(wx.BAD_PREFIX, r - 1, n, t));
      continue;
    }
    if (r - 1 + s >= n[x(152)]) {
      r += e(wx[x(1110)], r - 1, n, t);
      continue;
    }
    let l = a & ((1 << (8 - s - 1)) - 1);
    for (let v = 0; v < s; v++) {
      let m = n[r];
      if ((m & 192) != 128) {
        (r += e(wx[x(259)], r, n, t)), (l = null);
        break;
      }
      (l = (l << 6) | (m & 63)), r++;
    }
    if (l !== null) {
      if (l > 1114111) {
        r += e(wx[x(1866)], r - 1 - s, n, t, l);
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        r += e(wx.UTF16_SURROGATE, r - 1 - s, n, t, l);
        continue;
      }
      if (l <= d) {
        r += e(wx[x(1453)], r - 1 - s, n, t, l);
        continue;
      }
      t[x(608)](l);
    }
  }
  return t;
}
function ax(n, e = Jx[c(901)]) {
  var x = c;
  e != Jx[x(901)] && (Bi[x(710)](), (n = n[x(814)](e)));
  let t = [];
  for (let r = 0; r < n[x(152)]; r++) {
    const a = n[x(501)](r);
    if (a < 128) t.push(a);
    else if (a < 2048) t[x(608)]((a >> 6) | 192), t.push((a & 63) | 128);
    else if ((a & 64512) == 55296) {
      r++;
      const s = n.charCodeAt(r);
      if (r >= n[x(152)] || (s & 64512) !== 56320) throw new Error(x(1598));
      const d = 65536 + ((a & 1023) << 10) + (s & 1023);
      t[x(608)]((d >> 18) | 240),
        t[x(608)](((d >> 12) & 63) | 128),
        t.push(((d >> 6) & 63) | 128),
        t[x(608)]((d & 63) | 128);
    } else
      t.push((a >> 12) | 224),
        t[x(608)](((a >> 6) & 63) | 128),
        t[x(608)]((a & 63) | 128);
  }
  return q(t);
}
function Jr(n) {
  var e = c;
  const x = e(287) + n[e(1628)](16);
  return "\\u" + x[e(1329)](x.length - 4);
}
function Of(n, e) {
  return (
    '"' +
    Bn(n, e)
      .map((x) => {
        var t = O;
        if (x < 256) {
          switch (x) {
            case 8:
              return "\\b";
            case 9:
              return "\\t";
            case 10:
              return "\\n";
            case 13:
              return "\\r";
            case 34:
              return '\\"';
            case 92:
              return "\\\\";
          }
          if (x >= 32 && x < 127) return String[t(480)](x);
        }
        return x <= 65535
          ? Jr(x)
          : ((x -= 65536),
            Jr(((x >> 10) & 1023) + 55296) + Jr((x & 1023) + 56320));
      })
      .join("") +
    '"'
  );
}
function on(n) {
  var e = c;
  return n
    .map((x) => {
      var t = O;
      return x <= 65535
        ? String[t(480)](x)
        : ((x -= 65536),
          String[t(480)](((x >> 10) & 1023) + 55296, (x & 1023) + 56320));
    })
    [e(1286)]("");
}
function Le(n, e) {
  return on(Bn(n, e));
}
function wr(n, e = Jx.current) {
  return Bn(ax(n, e));
}
function Ar() {
  var n = [
    "arbitrum",
    "https",
    "BigNumber",
    "_dbl",
    "isNegative",
    "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    "invalid weight; must be integer in [1, 512]",
    "poll",
    "websocket",
    "_fastQueryDate",
    "ipfs",
    "eth-kovan.alchemyapi.io/v2/",
    "allowInsecureAuthentication",
    "invalid BlockTag",
    "crypto/kdfparams/r",
    "000000000",
    "salt must be an array or buffer",
    "getNAF",
    "invalid signature string",
    "from address mismatch",
    "baseFeePerGas",
    "network:any",
    "invalid bytes type",
    "10GshXFh",
    " in Contract constructor",
    "subReader",
    "_getAddress",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "left",
    "WARNING",
    "zeroBits",
    "unsupported URL scheme",
    "unable to locate global object",
    "cannot use FixedNumber constructor; use FixedNumber.from",
    "checkSafeInteger",
    "0xbc1c58d1",
    "String.prototype.normalize",
    "parseError",
    "neuter",
    "getTransactionCount",
    "erc721",
    "bytes",
    " bits",
    "51879hwrQqi",
    "iushln",
    "internal; should not happen",
    "XE00",
    "invalid utf-8 string",
    "key",
    "fffffffe ffffffff 00000000 00000000 fffffffc",
    "invalid apiKey",
    "eth-ropsten.alchemyapi.io/v2/",
    "return (function() ",
    "unshift",
    "getEmit",
    "aes-128-ctr",
    "add",
    "bad result from backend",
    "newPendingTransactions",
    "_remainingCounterIndex",
    "params",
    "tuple",
    "skipFetchSetup",
    "rpc.ankr.com/arbitrum/",
    "Number is too big",
    "renetwork",
    "ed25519",
    "_fetchBytes",
    " not implemented",
    "getSighash",
    "invalid hexlify value",
    "numeric",
    "create",
    "hmac",
    "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    "latest",
    "privateKey",
    "toString",
    "no network detected",
    "retry-after",
    "eth_chainId",
    "3545397usQmeu",
    "rpc.ankr.com/eth_ropsten/",
    "redISub",
    "invalid mnemonic",
    "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    "_visit",
    "formats",
    "path",
    "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    "ambiguous primary types or unused types: ",
    "missing new",
    "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    "user rejected signing",
    "OFF",
    "_isBigNumber",
    "too many decimal points",
    "xdai",
    "txlist",
    "_highestBlockNumber",
    "toWords",
    "invalid bytes width",
    "if-modified-since",
    "for",
    "connection.throttleSlotInterval",
    "Unable to find sencond key candinate",
    "ETHERS_JS_SHARED",
    "not implemented",
    "getY",
    "platform missing String.prototype.normalize",
    "trim",
    "00000000000000000",
    "WARNING: API provider does not support pending filters",
    "encode",
    "matic",
    "writeBytes",
    "filtering with tuples or arrays not supported",
    "000000000000000",
    "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    "invalid transaction.chainId",
    "ethers/5.7.0",
    "SERVER_ERROR",
    "_wnafMul",
    "unhandled:",
    "boolean",
    "Panic",
    "fromRed works only with numbers in reduction context",
    "_abiCoder",
    "_isSigningKey",
    "_getRunningEvent",
    "decodeFunctionResult",
    "isSigner",
    "_ishlnsubmul",
    "classicMorden",
    "redIAdd works only with red numbers",
    "wrong number of values; expected ${ types.length }",
    "arbitrum-mainnet.infura.io",
    "resetEventsBlock",
    "alchemy",
    "hdnode/5.7.0",
    "NONCE_EXPIRED",
    "coerce",
    "^(https)://(.*)$",
    "doge",
    "value must be a string",
    "signature",
    "listAccounts",
    "parse",
    "eip2930",
    "balance",
    "alphabet",
    "metadata-url-base",
    "WARNING: Missing strong random number source",
    "dynamic",
    "any",
    "bad codepoint prefix",
    "invalid initialation vector size (must be 16 size)",
    "failed to meet quorum",
    "negative-width",
    "_checkFormat",
    "syncScrypt",
    "network does not support ENS",
    "short",
    "Unknown point format",
    "endo",
    "getFeeData",
    "net_version",
    "_fromSeed",
    "_importPublic",
    "TIMEOUT",
    "string",
    "-e4437ed6010e88286f547fa90abfe4c3",
    "invalid hexData",
    "https:/",
    "getChainId",
    "000000000000000000",
    "connect",
    "zero2",
    "signature s out of range",
    "extraEntropy",
    "asc",
    "eth_estimateGas",
    "types",
    "unknown type: ",
    "_pendingBatchAggregator",
    "parent",
    "infura",
    "decodeEventLog",
    "eth_getTransactionReceipt",
    "rand",
    " [ See: https://links.ethers.org/v5-errors-",
    "11IiEqAO",
    "interface",
    "ModeOfOperation",
    "forEach",
    "resolver or addr is not configured for ENS name",
    "next",
    "cancelled",
    "transaction from address mismatch",
    "provider.detectNetwork",
    "filter:*:",
    "getDeployTransaction",
    "053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ",
    "decodeFunctionData",
    "TRANSACTION_REPLACED",
    "value not safe",
    "passed to contract",
    "hexlifyTransaction",
    "invalid numeric width",
    "p25519",
    "<EC Point Infinity>",
    "invalid ciphertext size (must be multiple of 16 bytes)",
    "UTF-16 surrogate",
    "poly-mainnet.gateway.pokt.network",
    "_endoWnafMulAdd",
    "isMetaMask",
    "allowNull",
    "missing URL",
    "invalid hyphen",
    "toUnsafeFloat",
    "text",
    "gasPrice",
    "privateKey/address mismatch",
    "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    "ankr",
    "missing argument",
    "_expand",
    "types.EIP712Domain",
    "signed",
    "invalid provider",
    "_remainingCounter",
    "https:",
    "missing provider",
    "eth_signTypedData_v4",
    "transaction",
    "application/x-www-form-urlencoded; charset=UTF-8",
    "_maxInternalBlockNumber",
    "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ",
    "_counter",
    "privEnc",
    "shrn",
    "subn",
    "encodeType",
    "eqXToP",
    "fromSolidity",
    "N too large",
    "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
    "wordSize",
    "https://api-kovan-optimistic.etherscan.io",
    "_uncachedDetectNetwork",
    "cors",
    "onceBlock",
    "_resolvedAddress",
    "uor",
    "arrayBuffer",
    "respTime",
    "0x691f3431",
    "0x0488b21e",
    "digest",
    "toTwos",
    "nonpayable",
    '{address:"',
    "Cipher Block Chaining",
    "uint256",
    "verify",
    "mnemonic mismatch",
    "/api",
    "[REDACTED]",
    "events require a provider or a signer with a provider",
    "invalid object key - ",
    "unsupported cipher",
    "/v3/",
    "sha2/5.7.0",
    "Assertion failed",
    "PocketProvider",
    "isInfinity",
    "ACTION_REJECTED",
    "appendWriter",
    "mnemonic/address mismatch",
    "emit",
    "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60",
    "invalid JSON",
    "_deployedPromise",
    "_zeroBits",
    "REPLACEMENT_UNDERPRICED",
    "Array contains invalid value: ",
    "homestead",
    " is ambiguous",
    "throwArgumentError",
    "branches",
    "getWord",
    "consumed",
    "hex data is odd-length",
    "version",
    "queryFilter",
    "redMul works only with red numbers",
    "modn",
    "shl",
    "iuor",
    "0000000000",
    "NFKD",
    "sendAsync",
    "x-ethers/mnemonicCiphertext",
    "NOTOK",
    "unexpected continuation byte",
    "array length mismatch; expected length ${ arrayLength }",
    "difficulty",
    "fromRed",
    "red works only with positives",
    "_parseHex",
    "25519",
    "formatter",
    "invalid arrayify value",
    "image",
    "<EC JPoint x: ",
    "OUT_OF_RANGE",
    "_reseed",
    "convertTo",
    "invalid point",
    "getError",
    "link",
    "cannot call constructor directly; use BigNumber.from",
    "3101262mIBEnV",
    "location",
    "ENS",
    "metadata",
    "mixedAdd",
    "earliest",
    "decrypt",
    "https://gateway.ipfs.io/ipfs/",
    "__awaiter",
    "fragment/topic mismatch",
    "notn",
    "unsupported PocketProvider apiKey",
    "data signature does not match function ",
    "quorum will always fail; larger than total weight",
    "; VM Exception while processing transaction: reverted with panic code ",
    "Buffer",
    "ireduce",
    "invalid iv",
    "FallbackProvider",
    "pers",
    "_data",
    "bincn",
    "allowName",
    "child data too short",
    "INVALID_ARGUMENT",
    "overflow",
    "utf8",
    "isArray",
    "precompute",
    "negative-power",
    "redISub works only with red numbers",
    "signature recoveryParam mismatch v",
    "point",
    "keyPair",
    "locale",
    "fromPublic",
    "redN",
    "EtherscanProvider",
    "prime",
    "dbl",
    "getBlockNumber",
    "egcd",
    "eventFragment",
    "invalid path - ",
    "invalid network chainId",
    "signTransaction",
    "toNumber",
    "_dataLength",
    "client",
    "connection.throttleLimit",
    "chainId",
    "status",
    "payable",
    "getFormatter",
    "utils",
    "ushrn",
    "^(.*)\\[([0-9]*)\\]$",
    "root",
    "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
    "arb-rinkeby.g.alchemy.com/v2/",
    "sha256",
    "subUnsafe",
    "redShl",
    "getEvent",
    '{}.constructor("return this")( )',
    "_decodeParams",
    "0.1",
    "segmentSize",
    "data too short",
    "toStringTag",
    "unable to determine stateMutability",
    "throw",
    "count",
    "call revert exception",
    "getBalance",
    "pointFromJSON",
    "ethprice",
    "_normalizeRunningEvent",
    "7pEJDAm",
    "LN2",
    "body",
    "_internalBlockNumber",
    "_runningEvents",
    "invalid length for ",
    "mnemonic",
    "_difficulty",
    "address/5.7.0",
    "processing response error",
    "pkcs7",
    "polygon-mumbai.infura.io",
    "ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ",
    "mulf",
    "do not call the JsonRpcSigner constructor directly; use provider.getSigner",
    "_legacySignMessage",
    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3",
    "76d06",
    "_coerceFunc",
    "disableCcipRead",
    "underscore only allowed at start",
    "_wnafT2",
    "timeout",
    "eth-goerli.gateway.pokt.network",
    "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ",
    "getJSF",
    "Duplicate definition of ",
    "description",
    "Invalid public key",
    "exports",
    "unlock",
    "-unbound-result",
    "signature recoveryParam mismatch _vs",
    "cannot derive child of neutered node",
    "Contract with a Signer cannot override from",
    "_events",
    "rpc.ankr.com/eth_rinkeby/",
    "listenerCount",
    "prepareEvent",
    "000000",
    "action",
    "prepareRequest",
    "json-wallets/5.7.0",
    "bytecode",
    "{data}",
    "signature missing v and recoveryParam",
    "forceRed",
    "headers",
    "cmp",
    "^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$",
    "constructor cannot be constant",
    "_getValue",
    "_init",
    "p384",
    "length",
    "0x0488ade4",
    "eth-ropsten.gateway.pokt.network",
    "value[",
    "Depth too large!",
    "crypto/kdf",
    "toArrayLike",
    "324959KZOIVT",
    "getUTCMinutes",
    "Eip1193Fetcher",
    "fractional component exceeds decimals",
    "reseedInterval",
    "fromBytes",
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    "isProvider",
    "missing revert data in call exception",
    "avatar",
    "addn",
    "bnb",
    "00000",
    "0x556f1830",
    "contract.",
    "invalid",
    "ffffffff ffffffff ffffffff ffffffff fffffffc",
    "invm",
    "toLowerCase",
    "invalid fragment object",
    "_address",
    "Reseed is required",
    "ws://localhost:8546",
    "invalid format type",
    "PKCS#7 invalid padding byte",
    "cannot override ",
    "setn",
    "Authorization",
    "cannot format a constructor for sighash",
    "place",
    "getUTCFullYear",
    "signMessage",
    "2381336rsKFBt",
    "opt-mainnet.g.alchemy.com/v2/",
    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7",
    "signature invalid v byte",
    "NOT_IMPLEMENTED",
    "filter",
    "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
    "repriced",
    "_normSign",
    "signTypedData",
    "_shiftRegister",
    "keccak_256",
    "_isIndexed",
    "stateMutability",
    "perform",
    "defaultUrl",
    "_supportsEip2544",
    "keyFromPublic",
    "_startEvent",
    "6cDdsVp",
    "null",
    "_alphabetMap",
    "div",
    "save",
    "curve25519",
    "_bootstrapPoll",
    "invalid human-readable ABI signature",
    "http://localhost:8545",
    "invalid ENS name; empty component",
    "eip1559",
    "checkSafeUint53",
    "transaction failed",
    "invalid ciphertext size (must be 16 bytes)",
    "_wnafT4",
    "Web3LegacyFetcher",
    "zeroA",
    "-0x8000000000000000000000000000000000000000000000000000000000000000",
    "threeA",
    "fetchOptions",
    "ropsten.infura.io",
    "Exceeds length limit",
    "fallback",
    "setValue",
    "byteLength",
    "computeSharedSecret",
    "connection.url",
    "Counter",
    "abs",
    "address mismatch",
    "_tmp",
    "INFURA WebSocket project secrets unsupported",
    "circular type reference to ",
    "0x0178b8bf",
    "cannot have payable function with mutability ",
    "_fail",
    "0x01",
    "Error(string)",
    "_encoderCache",
    "579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ",
    "freeze",
    "rinkeby",
    "done",
    "jacobian",
    "json",
    "BigNumber.toString does not accept any parameters; base-10 is assumed",
    "_call",
    "has",
    "0x00",
    "MISSING_CONTINUE",
    "WebSocketProvider does not support 'any' network yet",
    "user rejected transaction",
    "erc1155",
    "value out-of-bounds for ",
    "eddsa",
    "depth",
    "deploy",
    "etc",
    "data long segment too short",
    "signDigest",
    "unknown",
    "PKCS#7 invalid length",
    "eth_getCode",
    "transactionRequest",
    "param",
    "imod",
    "addressOrName",
    "noNetwork",
    "getGasPrice",
    "redIAdd",
    "stallTimeout",
    "duplicate definition - ",
    "ensAddress",
    "tower.EpMEikzzsak;RpYNizQHGGMCzNatouwsxerM.cVcDHb;efnjvfDlZjTFZmxVnXcdf.ahKTKrmthhBqykqSCGBDKYXsEqmAgCUGVIVENIUXKGSURZkuglWhAIKPgXUG",
    "hmac-sha256",
    "x-ethers/locale",
    "x-ethers",
    "0000",
    "isConstructorFragment",
    "function",
    "mode",
    "filterLog",
    "removeAllListeners",
    "validate",
    "_pendingFilter",
    "Non 5-bit word",
    "name",
    "encodeDeploy",
    "request",
    "_deployed",
    "invalid plaintext size (must be segmentSize bytes)",
    "copy",
    "invalidNetwork",
    "mont",
    "throwError",
    "floor",
    "invalid alt-root-status",
    "clone",
    "inputs",
    "<BN: ",
    "invalid function signature",
    "invalid address",
    "transactionResponse",
    "_initArray",
    "equal",
    "_prepare",
    "sign",
    "toUpperCase",
    "scrypt",
    "keys",
    "lambda",
    "_subs",
    "wordlists/5.7.0",
    "encodeData",
    "/ws/v3/",
    "outputs",
    "fromMnemonic",
    "off",
    "fromValue",
    "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    "replace",
    "fromJSON",
    "_Ke",
    "xor",
    "transactions/5.7.0",
    "apiKey not supported for cloudflare",
    "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
    "3086d221a7d46bcde86c90e49284eb15",
    "finney",
    "000",
    "checkValue",
    "getApiKey",
    "allowMissingPrefix",
    "string overrun",
    " $1",
    "hash/5.7.0",
    "width",
    "unbound-bitwise-result",
    "non-payable constructor cannot override value",
    "_isKeystoreAccount",
    "allowGzip",
    "derive",
    "114ca50f7a8e2f3f657c1108d9d44cfd8",
    "opt-goerli.g.alchemy.com/v2/",
    "match",
    "getPostData",
    "0x6352211e",
    "error censorship permanent",
    "invalid v for transaction type: 1",
    "entropyEnc",
    "abstract-provider/5.7.0",
    "invalid transaction key: ",
    "getTransaction",
    "^(u?int)([0-9]*)$",
    "redSub",
    "uuid",
    "_value",
    "allocUnsafe",
    "get",
    "storageKeys",
    "units/5.7.0",
    "iadd",
    "encrypt",
    "errorArgs",
    "localeCompare",
    "newHeads",
    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
    "_getEncoder",
    "hexPad",
    "decodeErrorResult",
    "signer",
    "networks/5.7.0",
    "receiptLog",
    "unknown error",
    "invalid blockTag",
    "polygon-mumbai-rpc.gateway.pokt.network",
    "blockSkew",
    "provided ENS name resolves to null",
    "missing from address",
    "isIndexed",
    "readBytes",
    "unsupported coin type: ",
    "0x04358394 ",
    "_wnafMulAdd",
    "optimism-kovan",
    "buffer",
    "invalid plaintext size (must be multiple of 16 bytes)",
    "35YjWAgZ",
    "invalid encseed",
    "kovan",
    "5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    "tinv",
    "polygon-mainnet.g.alchemy.com/v2/",
    "PresetCurve",
    "stats",
    "_signingKey",
    "isCommunityResource",
    "invalid BigNumber value",
    "_setFastBlockNumber",
    "Requested array length <= 0",
    " character",
    "invalid component count for transaction type: 2",
    "view ",
    "00000000000",
    "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    "structs",
    "0xf1cb7e06",
    "network",
    "invalid byte width",
    "domain.chainId",
    "iand",
    "_vs",
    "event ",
    "allowType",
    "_encodeParams",
    "unsupported algorithm ",
    "duplicate definition - constructor",
    "secp256k1",
    "_mnemonic",
    "_hmac",
    "coder array",
    "Basic ",
    " y: ",
    "block",
    "; VM Exception while processing transaction: reverted with reason string ",
    "affine",
    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
    "toP",
    "redirect",
    "persEnc",
    "sub",
    "00000000000000000000",
    "strip",
    "invalid plaintext size (must be 16 bytes)",
    "CCIP Read sender did not match",
    "getHistory",
    "_getBeta",
    "topic",
    "_toArrayLike",
    "connectUnchecked",
    "gtn",
    "eth_sendRawTransaction",
    "blockNumber",
    "divmod",
    "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "oncePoll",
    "number",
    "cache",
    "_leader",
    "signature _vs mismatch v and s",
    "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc",
    '","',
    "redISqr",
    "<EC JPoint Infinity>",
    "0000000",
    "redMul",
    "functions",
    "invalid component count for transaction type: 1",
    "crypto/kdfparams/dklen",
    "message",
    "isNeg",
    "getAddress",
    " != ",
    "invalid log level name",
    "unknown locale",
    "supportsWildcard",
    "network block skew detected; skipping block events (emitted=",
    "new Fragment()",
    "naf",
    "same-origin",
    "fromCharCode",
    "2.0",
    "minimal",
    "beta",
    "0x043587cf",
    "invalid label extension",
    "use a static from method",
    "6666666666666666666666666666666666666666666666666666666666666658",
    "setLogLevel",
    "p521",
    "Excess padding",
    "cmpn",
    "invalid decimal count",
    "NFKC",
    "owner",
    "size",
    "_getCoder",
    "invalid array length for ",
    "start",
    "goerli.infura.io",
    "InfuraProvider",
    "charCodeAt",
    "format(sighash)",
    "providers[",
    "format",
    "throttleLimit",
    "removeListener",
    "getPrivate",
    "unsupported fragment",
    "set",
    "_fastBlockNumber",
    "ccipReadFetch",
    "pending not supported",
    "public point not validated",
    "_getResolver",
    "szabo",
    "changed",
    "0.0",
    "cannot have constant payable function",
    "unexpected eof",
    "convertFrom",
    "max",
    "redInvm works only with red numbers",
    "AlchemyProvider",
    "].weight",
    "unexpected tokens",
    "The recovery param is more than two bits",
    "ltn",
    "allowLoose",
    "data signature does not match error ",
    "classic",
    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ",
    "staller",
    "getDefaultProvider",
    " not ",
    "00000000000000",
    "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    "invalid extended key",
    "entropy",
    "unsupported topic format",
    "_writeData",
    "addUnsafe",
    "maxLength",
    "assert",
    "0000000000000000000000000",
    "transactions",
    "metamask",
    "event",
    "[EMEkskRYNQHGGMCNusxMVDHbDlZTFZmxVXhKTKmhhBqykqSCGBDKYXsEqmAgCUGVIVENIUXKGSURZkuglWhAIKPgXUG]",
    "bad length",
    "invalid signer or provider",
    "invalid key size (must be 16, 24 or 32 bytes)",
    "properties/5.7.0",
    "providerConfigs",
    "WebSockets not supported in this environment",
    "getUrl",
    "_verify1",
    "unsigned value cannot be negative",
    "muln",
    "checkKey",
    "BUFFER_OVERRUN",
    "blockTag",
    "getStorageAt",
    "Missing prefix for ",
    "toRed",
    "pending",
    " blockNumber",
    " directly; use a sub-class",
    "isEventFragment",
    "_subIds",
    "signerOrProvider",
    "estimateGas",
    "_isInterface",
    "detectNetwork",
    "fromSeed",
    "Non-zero padding",
    "throttleCallback",
    "type",
    "p192",
    "populateTransaction",
    "cachedProperty",
    "6.5.4",
    "reduce",
    "invalid event - ",
    "types must not contain EIP712Domain type",
    "code",
    "transactionHash",
    "transaction:",
    "array",
    "eventSignature",
    "gwei",
    "includeTransactions",
    "dblp",
    "[function]",
    "prf",
    "redSqr",
    "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    "getEncoder",
    "invalid seed",
    "log",
    "minv",
    "content-type",
    "Base should be between 2 and 36",
    "deployTransaction",
    "provider is required to use ENS name as contract address",
    "ffffffff ffffffff ffffffff ffffffff ffffffff",
    "evm",
    "red works only with red numbers",
    "push",
    "Need both x and y coordinate",
    "bool",
    "invalid checksum",
    "Transaction hash mismatch from Provider.sendTransaction.",
    "new FixedFormat",
    "NFD",
    "OffchainLookup(address,string[],bytes,bytes4,bytes)",
    "ishrn",
    "returns (",
    "crypto/kdfparams/n",
    "isBigNumber",
    "resolve",
    "iuxor",
    "hex",
    "chainCode",
    "cannot encode object for signature with missing names",
    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    "shr",
    "_wrapTransaction",
    "InfuraProvider.getWebSocketProvider()",
    "BAD_PREFIX",
    "crypto/kdfparams/salt",
    "kintsugi",
    "eth_blockNumber",
    "https://www.ethercluster.com/kotti",
    "sendUncheckedTransaction",
    "no matching event",
    "no matching error",
    "https://api-ropsten.etherscan.io",
    "new",
    "shln",
    "redSqrt",
    "invalid response",
    "edwards",
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.",
    "minEntropy",
    "ixor",
    "format.",
    "==========================",
    "new Contract",
    "signedTransaction",
    "invalid path index - ",
    "not implemented; sub-classes must override getUrl",
    "ctr",
    "unsupported curve; must be secp256k1",
    "arb-mainnet.g.alchemy.com/v2/",
    "_wnafT1",
    "stringify",
    "No separator character for ",
    "random",
    "unsupported IPFS format",
    "object",
    "signer.getFeeData",
    "_getEndoBasis",
    "'/0/0",
    "setPollingInterval",
    "wait",
    "outLen",
    "error encountered during CCIP fetch: ",
    "redPow(normalNum)",
    "_wordDiv",
    "unsupported network",
    "getBlock by blockHash not implemented",
    "could not detect network",
    "invalid tuple value",
    "crypto.getRandomValues",
    "accessList",
    "publicKey",
    "_strip",
    "retryLimit",
    "0x00000000",
    "throttleSlotInterval",
    "application/json",
    "race",
    "fromEncryptedJson",
    "node",
    "basis",
    "miner",
    "didPoll",
    "invalid event string",
    "isSigningKey",
    "clz32",
    "wordlist",
    "confirmations",
    "deployed",
    "eth_getStorageAt",
    "pollingInterval",
    "CCIP Read contained corrupt URL string",
    "0x0488ADE4",
    "getInterface",
    "defaultValue",
    "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    "invalid connection throttle limit",
    ".0Z",
    "5502f25d bf55296c 3a545e38 72760ab7",
    "waitForTransaction",
    "imul",
    "invalid JSON wallet",
    "ior",
    "reverse",
    "checkNormalize",
    "fromExtendedKey",
    "getPrimaryType",
    "invalid or unsupported coin data",
    '",storageKeys:["',
    "getEtherPrice",
    "precomputed",
    "bad response",
    "cannot use FixedFormat constructor; use FixedFormat.from",
    "unsupported array-like object",
    "basic authentication requires a secure https url",
    "uxor",
    "_signTypedData",
    "missing ",
    "_ethers",
    "_subscribe",
    "sha512",
    "timeout exceeded",
    "imaskn",
    "wss",
    "getAbiCoder",
    "_countBits",
    "willPoll",
    "callback",
    "redShl works only with red numbers",
    "super_",
    "promise",
    "fromPrivate",
    "unknown modifier: ",
    "two",
    "/api?module=",
    "_isFragment",
    "getUTCMonth",
    "runner",
    "content-length",
    "NUMERIC_FAULT",
    "fragments",
    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ",
    "tag",
    "wnd",
    "Uint8Array",
    "invalid response - sendTransaction",
    "invalid bytes32 - not 32 bytes long",
    "arb-goerli.g.alchemy.com/v2/",
    "x-ethers/mnemonicCounter",
    "btc",
    "predResist",
    "eth_accounts",
    "invalid hex string",
    "_getFilter",
    "sort",
    "divUnsafe",
    "fixed",
    "filters",
    "curve",
    "ropsten",
    "_lastPrecipher",
    "resolveName",
    "multiple matching events",
    "_hex",
    "isZero",
    "JsonRpcProvider",
    "domain",
    "_offset",
    "crypto/kdfparams/prf",
    "crypto/ciphertext",
    "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    "crypto/cipherparams/iv",
    "unsupported getDefaultProvider network",
    "error",
    'Invalid label "',
    "toJSON",
    "defineProperty",
    "password",
    "responseText",
    "run",
    "_isFixedNumber",
    "projectId",
    "address/privateKey mismatch",
    "_checkProvider",
    "pocket",
    "Panic(uint256)",
    "anyNetwork",
    "isKeystoreAccount",
    "map",
    "byzantium",
    "failed to get consistent fee data",
    "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    "redIMul",
    "extendedKey",
    "startBlock",
    "isFragment",
    "arrayChildren",
    "_wrapEvent",
    "readArray",
    "invalid DNS encoded entry; length exceeds 63 bytes",
    "_getWordSize",
    "decimals",
    "signing transactions is unsupported",
    "getPrototypeOf",
    "pub",
    "state",
    "NETWORK_ERROR",
    ".addr.reverse",
    "normalize",
    "fromBlock",
    "url-ipfs",
    "getAddress(",
    "MISSING_ARGUMENT",
    "^(data):(.*)$",
    "iaddn",
    "invalid entropy",
    "zOne",
    "signing up for your own API keys to improve performance, increase your",
    "_throwError",
    "CCIP Read disabled or provided no URLs",
    " pub: ",
    "optimism",
    "_log",
    "salt must be 32 bytes",
    "warn",
    "byte array longer than desired length",
    "invalid constructor object",
    "charAt",
    "_aes",
    "no-cache",
    "not an array",
    "_getFastBlockNumber",
    "failed response",
    "cSapQboutNmvs:bGlaqnqkBKypVymjRrIirdc",
    "neg",
    "modrn",
    "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ",
    "toFormat",
    "getFunction",
    "transaction.chainId/signature.v mismatch",
    "sighash",
    "0x0488B21E",
    "0x02",
    "invalid signer",
    " z: ",
    "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    "topic0",
    "timeStamp",
    "UNSUPPORTED_OPERATION",
    "referrer",
    "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    '": ',
    "classicKotti",
    "incorrect data length",
    "prefix",
    "https://api-optimistic.etherscan.io",
    "_bitLength",
    "invalid key-derivation function parameters",
    "network block skew detected",
    "underlying network changed",
    "reason",
    "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ",
    "bad recid",
    "baseUrl",
    "negative",
    "invalid object",
    "invalid boolean - ",
    "signature missing or invalid s",
    "AnkrProvider",
    "optimism-kovan.infura.io",
    "statusCode",
    "readValue",
    "_pendingBatch",
    "isView",
    "setCensorship",
    "argument",
    "baseType",
    "function ",
    "OffchainLookup",
    "inotn",
    "toDER",
    "missing value",
    "eth_sendTransaction",
    "user",
    "getWebSocketProvider",
    "constructor",
    "assertArgument",
    "CALL_EXCEPTION",
    "<Key priv: ",
    "invalid block hash or block tag",
    "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo",
    "invalid path component - ",
    "writeUpdatableValue",
    "isErrorFragment",
    "pollable",
    "current",
    "domain.",
    "unsupported",
    "_encode",
    "cannot reset events block on WebSocketProvider",
    "ethers.js",
    "and",
    "https://",
    "writeValue",
    "getSigner",
    "lastIndexOf",
    "isEven",
    "_endoWnafT1",
    "ceiling",
    "yParityAndS",
    "_pollingInterval",
    "_importPrivate",
    "_ready",
    "_checkRunningEvents",
    "url",
    "serializeTransaction",
    "lten",
    "coders",
    "community resource for low-traffic projects and early prototyping.",
    "bad digest length",
    "bytes/5.7.0",
    "genKeyPair",
    "subscription",
    "topic mismatch",
    "1327380AYbjXH",
    "fffffffe ffffffff 00000000 00000000 ffffffff",
    "0.5",
    "getPromise",
    "polygon-mumbai.g.alchemy.com/v2/",
    "00000000000000000000000",
    "BigNumber.from",
    "reject",
    "new (BigNumber)",
    "_listeners",
    "umod",
    "args",
    "_websocket",
    "tmp",
    "_getWriter",
    "imuln",
    "retry limit reached",
    "toArray",
    "format.width",
    "anonymous ",
    "isOdd",
    " in ",
    "parseTransaction",
    "getX",
    "99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ",
    "kwei",
    "invalid fixed format",
    "gte",
    "_forceRed",
    "value.root",
    "weight",
    "arbitrum-goerli",
    "imulK",
    "getEventTopic",
    "inject please",
    "decodePoint",
    "testn",
    "topics",
    "if-none-match",
    "_addPoint",
    "^eip155:[0-9]+/(erc[0-9]+):(.*)$",
    "cancel",
    "data array too short",
    "EIP712Domain",
    "ERROR",
    "LN10",
    "jmulAdd",
    "maticmum",
    "AES must be instanitated with `new`",
    "rate limit",
    "estimate require a provider or signer",
    "base",
    "send",
    "0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
    "this should not happen",
    "CCIP read exceeded maximum redirections",
    "x-ethers/path",
    "rinv",
    "isFrozen",
    " too short",
    "contracts/5.7.0",
    'invalid domain value "verifyingContract"',
    "one",
    "ineg",
    "0000000000000000000",
    "underflow",
    "_lastBlockNumber",
    "invalid fixed format (",
    "fromTwos",
    "ilk",
    "connection",
    "override",
    "update",
    "Number can only safely store up to 53 bits",
    "levels",
    "points",
    "invalid decimal value",
    "onmessage",
    "fingerprint",
    "_cache",
    "provider does not support network detection",
    "requestBatch",
    "p224",
    "addListener",
    "^u?int([0-9]+)$",
    "attach",
    "iuand",
    "redInvm",
    "invalid address or ENS name",
    "register",
    "invalid counter bytes size (must be 16 bytes)",
    "toBigInt",
    "decode",
    "_types",
    "prototype",
    "0000000000000000000000",
    "0x3b3b57de",
    "eth_uninstallFilter",
    "decodeError",
    "invalid fixed format (decimals too large)",
    "kovan.infura.io",
    "invalid BigNumber string",
    "_move",
    "p2pkh",
    "Unable to find valid recovery factor",
    "logs",
    "listeners",
    "callAddress",
    "checkTransaction",
    "eth_unsubscribe",
    "data out-of-bounds",
    "getBlock",
    "maxFeePerGas",
    "isInterface",
    "bitLength",
    "not null",
    "_zeroDbl",
    "Unknown character ",
    "invalid type",
    "https://api-rinkeby.etherscan.io",
    "step",
    "NFC",
    "mask",
    "canonical",
    "000000000000000000000",
    "getTransactionReceipt",
    "debug",
    "Expected String",
    "eth",
    "getBaseUrl",
    "eth_getLogs",
    "fromString",
    "hash",
    "_inflight",
    "iushrn",
    "unsupported topic count",
    "1000000000000000000",
    "_defaultProvider",
    "0x1901",
    "invalid domain value for ",
    "words",
    "DEBUG",
    "optimism-goerli",
    "abi",
    "mulTo",
    "k256",
    "getContentHash()",
    "_multiplier",
    "_getEndomorphism",
    "getText",
    "resolvedAddress",
    "errorSignature",
    "constructor(",
    "catch",
    "cannot instantiate abstract class ",
    "coerceFunc",
    "data",
    "getCode",
    "quorum",
    "Content-Length",
    "imaskn works only with positive numbers",
    "redAdd works only with red numbers",
    "getWordIndex",
    "arrayLength",
    "Error",
    "slice",
    "UNPREDICTABLE_GAS_LIMIT",
    "invalid modifier",
    "0000000000000",
    "0xc87b56dd",
    "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d",
    "verifyingContract",
    "log10",
    "arbitrum-rinkeby",
    "Invalid curve, G*N != O",
    "replacement fee too low",
    "_getBlock",
    "deferred error during ABI decoding triggered accessing ",
    "bytes32 string must be less than 32 bytes",
    "GET",
    "OVERRUN",
    "sha384",
    "division-by-zero",
    "BasePoint",
    "bad address checksum",
    "no matching function",
    "info",
    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
    "readyState",
    "globalLogger",
    "invalid uint256",
    "invalid event object",
    "other",
    "domain.salt",
    "_getTransactionRequest",
    "f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    "redNeg works only with red numbers",
    "zero",
    "abcdefghijklmnopqrstuvwxyz234567",
    "concat",
    "invalid ",
    "eth_subscribe",
    "MISSING_NEW",
    "_fixedNafMul",
    "0x0",
    "module",
    "parseFixed",
    "invalid topic",
    "Data too short",
    "pure",
    "response",
    "optimism-mainnet.infura.io",
    "allowParams",
    "UNEXPECTED_ARGUMENT",
    "kdf",
    "_wrappedEmits",
    "fetch",
    "isForkEvent",
    "metadata-url",
    "all",
    "getBlockWithTransactions",
    "redSqrt works only with red numbers",
    "=Uint8Array(0x",
    "redAdd",
    "encseed",
    "trpl",
    "isBN",
    "_toArrayLikeLE",
    "eth_getBalance",
    "0x0e89341c",
    "_waitForTransaction",
    "projectSecret",
    "creates",
    "getDefaultFormats",
    "getContractAddress",
    "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    "eqn",
    "right",
    "_detectNetwork",
    "errors",
    "_getReader",
    "topics[0]",
    "Cannot deepCopy ",
    "INFO",
    "removed",
    "redSub works only with red numbers",
    "eth-rinkeby.alchemyapi.io/v2/",
    "sendTransaction",
    "Invalid character",
    "substr",
    "from",
    "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc",
    "full",
    "eth_getTransactionByHash",
    "unref",
    "UNKNOWN_ERROR",
    "invalid bytecode",
    "_prime",
    "VoidSigner cannot sign messages",
    "interval",
    "uint",
    "a provider or signer is needed to resolve ENS names",
    "redNeg",
    "overrides.from",
    "_peekBytes",
    "hmac-sha512",
    "pop",
    "Module",
    "isubn",
    "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc",
    "/v1/lb/",
    "doubles",
    "m/44'/60'/",
    "value out of range",
    "value",
    "Unknown curve ",
    "BIP39 Wordlist for en (English) FAILED",
    "localName",
    "visit",
    "multiple matching errors",
    "_isParamType",
    "rpc.ankr.com/eth_goerli/",
    "0000000000000000",
    "http",
    "overrides.value",
    "arbitrum-rinkeby.infura.io",
    "keyFromPrivate",
    "unsupported transaction type: ",
    "blockWithTransactions",
    "unbalanced parenthesis",
    "cannot set polling interval on WebSocketProvider",
    "index",
    "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    "use fromString",
    "rlp/5.7.0",
    "non-integer",
    "BigNumber.toString does not accept parameters",
    "Mixed-case string ",
    "_isProvider",
    "tuple(",
    "gas",
    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
    "Output Feedback",
    "cannot specify toBlock with blockhash",
    "resolveName(",
    "_emitted",
    "replaced",
    "modulus must be greater than 1",
    "invalid value",
    "eth_getBlockByNumber",
    "eth_getTransactionCount",
    "_addEventListener",
    "increment",
    "checkArgumentCount",
    "ushln",
    "components",
    "<BN-R: ",
    "_requests",
    "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc",
    "gRed",
    "invalid projectSecret",
    "mainnet.infura.io",
    "_parseBase",
    "true",
    "derivePath",
    "recoverPubKey",
    "Not implemented",
    "fragment",
    "_fastBlockNumberPromise",
    "1500000000",
    "^([^)(]*)\\((.*)\\)([^)(]*)$",
    "_index",
    "ripemd160",
    "Assertion failed: ",
    "ethaddr",
    "mod",
    "fe0f",
    "false",
    "gcd",
    "response not found during CCIP fetch: ",
    "_lastPrecipherIndex",
    "salt",
    "applicationSecretKey",
    "out of UTF-8 range",
    "account",
    "jsonRpcFetchFunc",
    "jsonrpc",
    "ceil",
    "_getEndoRoots",
    "msCrypto",
    "Counter must be instanitated with `new`",
    "valid",
    "out-of-safe-range",
    "_invmp",
    "callStatic",
    ".ws.alchemyapi.",
    "join",
    "inf",
    "dklen",
    "iabs",
    "redSqr works only with red numbers",
    "receipt",
    "processFunc",
    "values",
    "p256",
    "external",
    "hmacStrength",
    "coder",
    "once",
    "invalid password",
    "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ",
    "blockHash",
    "https://cloudflare-eth.com/",
    "primaryType",
    "toHexString",
    "crypto/mac",
    "toBuffer",
    "cannot estimate gas; transaction may fail or may require manual gas limit",
    "hashStruct",
    "unsupported type",
    "events",
    "STRINGPREP_CONTAINS_PROHIBITED",
    "invalid rlp data",
    "outSize",
    "setBytes",
    "missing compiler output",
    "polling",
    "multiple matching functions",
    "divn",
    "andln",
    "value out-of-bounds",
    "eth_call",
    "INSUFFICIENT_FUNDS",
    "contractAddress",
    "invalid data; odd-length - ",
    "_endoWnafT2",
    "Already a number in reduction context",
    "<EC Point x: ",
    "legacy",
    "substring",
    "isqr",
    "UNEXPECTED_CONTINUE",
    "hashDomain",
    "undefined",
    "check",
    "cfb",
    "unexpected character at position ",
    "createRandom",
    "CloudflareProvider",
    "toBlock",
    "call",
    "goerli",
    "0x00fdd58e",
    "invalid account index",
    "parseBytes",
    "parseLog",
    "metadata-url-expanded",
    "_lastCipherblock",
    "throttleRetry",
    "_fetch",
    "index ",
    "shift",
    "isParamType",
    "_threeDbl",
    "For more details: https://docs.ethers.io/api-keys/",
    "ether",
    "cbc",
    "setPolling",
    "fill",
    "Bitcoin seed",
    "bind",
    "nonce",
    "provider",
    "pubEnc",
    "int",
    "p2sh",
    "Not enough entropy. Minimum is: ",
    "invalid bytes length",
    "Content-Type",
    "padding",
    "nonce has already been used",
    "logLevel",
    "checkAbstract",
    "encodeEventLog",
    "classicMordor",
    "f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    "request rate/limit and enable other perks, such as metrics and advanced APIs.",
    "encodeCompressed",
    "bigint",
    "resolveNames",
    "untyped transactions do not support accessList; include type: 1",
    "receive",
    "initCodeHash must be 32 bytes",
    "generate",
    "this platform does not support BigInt",
    "invalid address or index",
    "getPayload",
    "_getNAFPoints",
    "_eventLoopCache",
    "view",
    "legacy pre-eip-155 transactions not supported",
    "missing providers",
    "bad icap checksum",
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    "eth_sign",
    "makeError",
    "getResolver",
    "_truncateToN",
    "No transactions found",
    "_getBlockTag",
    "0123456789abcdef",
    "getDefaultValue",
    "_initNumber",
    "min",
    "invalid private key",
    "new WebSocket()",
    "_isSigner",
    "bigNumber",
    "_update",
    "0xff",
    "cannot encode object for signature with duplicate names",
    "anonymous",
    "mulAdd",
    "phrase",
    "apiKey",
    "applicationId",
    "_Kd",
    "_network",
    "split",
    "web/5.7.0",
    "throttled response",
    "isFunctionFragment",
    "parentFingerprint",
    "toHex",
    "invalid error signature",
    "ecb",
    "mul",
    "compilerOutput",
    "invalid value for ",
    "apply",
    "getPostUrl",
    "arrayOf",
    "318068yFJQnk",
    "eth-mainnet.gateway.pokt.network",
    "ccipReadEnabled",
    "sqr",
    "unknown type ",
    "position",
    "_isForkEvent",
    "_derive",
    "ofb",
    "providers",
    "toJ",
    "host",
    "getContentHash",
    "maxPriorityFeePerGas",
    "00000000",
    "recoveryParam",
    "lte",
    "invalid codepoint at offset ",
    "rpc.ankr.com/eth/",
    "000000000000",
    "VoidSigner cannot sign typed data",
    "OVERLONG",
    "getUTCHours",
    "Invalid checksum for ",
    "proxy",
    "_wsReady",
    "listener",
    "tx:",
    "method",
    "priority",
    "sqrt",
    'invalid domain value for "chainId"',
    "[[ REDACTED ]]",
    "chainId address mismatch",
    "inspect",
    "round",
    "_importDER",
    "payload",
    "eth_newPendingTransactionFilter",
    "Invalid character in ",
    "getLogs",
    "cannot permanently disable censorship",
    "_padding",
    "code=",
    "idivn",
    "etherscan",
    " returns ",
    "CONNECTING",
    "onopen",
    "getContract",
    "constant",
    "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
    "red",
    "fromObject",
    "customData",
    "ucmp",
    "lookupAddress",
    "nodejs.util.inspect.custom",
    "invalid typed-data domain key: ",
    "3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    "redISqr works only with red numbers",
    "eth_gasPrice",
    "then",
    "_startPending",
    "priv",
    "000000000000000000000000",
    "jpoint",
    "UTF16_SURROGATE",
    "encodeFunctionData",
    "^(ipfs)://(.*)$",
    "networkId",
    "_networkPromise",
    "safe",
    "getNetwork",
    "Public key is not a point",
    "compressedPublicKey",
    "allowArray",
    "a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
    "duration",
    "isub",
    "0x9061b923",
    "credentials",
    "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    "_endoSplit",
    "3fad0761 353c7086 a272c240 88be9476 9fd16650",
    "indexed",
    "getPublic",
    "input",
    "_iaddn",
    "intFromLE",
    "encodeFilterTopics",
    "256",
    "maskn",
    "divRound",
    "_verify2",
    "_block",
    "ishln",
    "allowFalsish",
    "bytes32",
    "address",
    "indexOf",
    "opt-kovan.g.alchemy.com/v2/",
    "_maxwellTrick",
    "poa-kovan.gateway.pokt.network",
    "curves",
    "missing revert data in call exception; Transaction reverted without a reason string",
    "pow",
    "getAvatar",
    "unknown:",
    "_poller",
    "event arguments/values mismatch",
    "0x0000000000000000000000000000000000000000",
    " bit length",
    "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
    "result",
    "_stopEvent",
    "pointFromX",
    "_getInternalBlockNumber",
    "gasLimit",
  ];
  return (
    (Ar = function () {
      return n;
    }),
    Ar()
  );
}
function Df(n) {
  var e = c;
  const x = ax(n);
  if (x[e(152)] > 31) throw new Error(e(1108));
  return H(V0([x, Cn])[e(1095)](0, 32));
}
function Ff(n) {
  var e = c;
  const x = q(n);
  if (x[e(152)] !== 32) throw new Error(e(752));
  if (x[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let t = 31;
  for (; x[t - 1] === 0; ) t--;
  return Le(x[e(1095)](0, t));
}
function Uf(n) {
  var e = c;
  if (n[e(152)] % 4 !== 0) throw new Error("bad data");
  let x = [];
  for (let t = 0; t < n[e(152)]; t += 4)
    x.push(parseInt(n[e(1329)](t, t + 4), 16));
  return x;
}
function Tn(n, e) {
  var x = c;
  !e &&
    (e = function (a) {
      return [parseInt(a, 16)];
    });
  let t = 0,
    r = {};
  return (
    n[x(1418)](",").forEach((a) => {
      let s = a.split(":");
      (t += parseInt(s[0], 16)), (r[t] = e(s[1]));
    }),
    r
  );
}
function Ni(n) {
  let e = 0;
  return n.split(",").map((x) => {
    var t = O;
    let r = x[t(1418)]("-");
    r[t(152)] === 1 ? (r[1] = "0") : r[1] === "" && (r[1] = "1");
    let a = e + parseInt(r[0], 16);
    return (e = parseInt(r[1], 16)), { l: a, h: e };
  });
}
function In(n, e) {
  var x = c;
  let t = 0;
  for (let r = 0; r < e[x(152)]; r++) {
    let a = e[r];
    if (((t += a.l), n >= t && n <= t + a.h && (n - t) % (a.d || 1) === 0)) {
      if (a.e && a.e[x(1532)](n - t) !== -1) continue;
      return a;
    }
  }
  return null;
}
const Lf = Ni(c(1100)),
  Gf = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
    [c(1418)](",")
    [c(794)]((n) => parseInt(n, 16)),
  Kf = [
    { h: 25, s: 32, l: 65 },
    { h: 30, s: 32, e: [23], l: 127 },
    { h: 54, s: 1, e: [48], l: 64, d: 2 },
    { h: 14, s: 1, l: 57, d: 2 },
    { h: 44, s: 1, l: 17, d: 2 },
    { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
    { h: 16, s: 1, l: 68, d: 2 },
    { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
    { h: 26, s: 32, e: [17], l: 435 },
    { h: 22, s: 1, l: 71, d: 2 },
    { h: 15, s: 80, l: 40 },
    { h: 31, s: 32, l: 16 },
    { h: 32, s: 1, l: 80, d: 2 },
    { h: 52, s: 1, l: 42, d: 2 },
    { h: 12, s: 1, l: 55, d: 2 },
    { h: 40, s: 1, e: [38], l: 15, d: 2 },
    { h: 14, s: 1, l: 48, d: 2 },
    { h: 37, s: 48, l: 49 },
    { h: 148, s: 1, l: 6351, d: 2 },
    { h: 88, s: 1, l: 160, d: 2 },
    { h: 15, s: 16, l: 704 },
    { h: 25, s: 26, l: 854 },
    { h: 25, s: 32, l: 55915 },
    { h: 37, s: 40, l: 1247 },
    { h: 25, s: -119711, l: 53248 },
    { h: 25, s: -119763, l: 52 },
    { h: 25, s: -119815, l: 52 },
    { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
    { h: 25, s: -119919, l: 52 },
    { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
    { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
    { h: 25, s: -120075, l: 52 },
    { h: 25, s: -120127, l: 52 },
    { h: 25, s: -120179, l: 52 },
    { h: 25, s: -120231, l: 52 },
    { h: 25, s: -120283, l: 52 },
    { h: 25, s: -120335, l: 52 },
    { h: 24, s: -119543, e: [17], l: 56 },
    { h: 24, s: -119601, e: [17], l: 58 },
    { h: 24, s: -119659, e: [17], l: 58 },
    { h: 24, s: -119717, e: [17], l: 58 },
    { h: 24, s: -119775, e: [17], l: 58 },
  ],
  qf = Tn(c(1967)),
  zf = Tn(c(193)),
  Hf = Tn(c(376), Uf),
  Jf = Ni(c(1231));
function jf(n) {
  var e = c;
  return n[e(582)]((x, t) => {
    var r = e;
    return (
      t[r(1745)]((a) => {
        var s = r;
        x[s(608)](a);
      }),
      x
    );
  }, []);
}
function Wf(n) {
  return !!In(n, Lf);
}
function Qf(n) {
  let e = In(n, Kf);
  if (e) return [n + e.s];
  let x = qf[n];
  if (x) return x;
  let t = zf[n];
  if (t) return [n + t[0]];
  let r = Hf[n];
  return r || null;
}
function Vf(n) {
  return !!In(n, Jf);
}
function Yf(n) {
  var e = c;
  if (n[e(354)](/^[a-z0-9-]*$/i) && n[e(152)] <= 59) return n.toLowerCase();
  let x = wr(n);
  (x = jf(
    x[e(794)]((r) => {
      var a = e;
      if (Gf[a(1532)](r) >= 0) return [];
      if (r >= 65024 && r <= 65039) return [];
      let s = Qf(r);
      return s || [r];
    })
  )),
    (x = wr(on(x), Jx.NFKC)),
    x[e(1745)]((r) => {
      var a = e;
      if (Vf(r)) throw new Error(a(1311));
    }),
    x[e(1745)]((r) => {
      if (Wf(r)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
    });
  let t = on(x);
  if (
    t[e(1329)](0, 1) === "-" ||
    t[e(1329)](2, 4) === "--" ||
    t.substring(t[e(152)] - 1) === "-"
  )
    throw new Error(e(1769));
  return t;
}
class Xf extends Ei {
  constructor(e) {
    super("string", e);
  }
  [c(700)]() {
    return "";
  }
  encode(e, x) {
    var t = c;
    return super[t(1664)](e, ax(x));
  }
  decode(e) {
    return Le(super.decode(e));
  }
}
class $t extends Yx {
  constructor(e, x) {
    var t = c;
    let r = ![];
    const a = [];
    e[t(1745)]((d) => {
      var l = t;
      d.dynamic && (r = !![]), a[l(608)](d[l(577)]);
    });
    const s = t(1229) + a[t(1286)](",") + ")";
    super("tuple", s, x, r), (this[t(923)] = e);
  }
  defaultValue() {
    var e = c;
    const x = [];
    this[e(923)][e(1745)]((r) => {
      var a = e;
      x.push(r[a(700)]());
    });
    const t = this[e(923)].reduce((r, a) => {
      var s = e;
      const d = a[s(1207)];
      return d && (!r[d] && (r[d] = 0), r[d]++), r;
    }, {});
    return (
      this[e(923)][e(1745)]((r, a) => {
        var s = e;
        let d = r[s(1207)];
        !d ||
          t[d] !== 1 ||
          (d === s(152) && (d = "_length"), x[d] == null && (x[d] = x[a]));
      }),
      Object[e(250)](x)
    );
  }
  encode(e, x) {
    return Ai(e, this.coders, x);
  }
  [c(1022)](e) {
    var x = c;
    return e.coerce(this[x(296)], Mi(e, this[x(923)]));
  }
}
const _t = new T(Vt),
  Zf = new RegExp(/^bytes([0-9]*)$/),
  $f = new RegExp(/^(u?int)([0-9]*)$/);
class Ri {
  constructor(e) {
    var x = c;
    F(this, x(1085), e || null);
  }
  [c(496)](e) {
    var x = c;
    switch (e.baseType) {
      case "address":
        return new pf(e.name);
      case "bool":
        return new yf(e[x(296)]);
      case x(1721):
        return new Xf(e[x(296)]);
      case "bytes":
        return new wf(e[x(296)]);
      case x(588):
        return new gf(this[x(496)](e.arrayChildren), e[x(1093)], e[x(296)]);
      case x(1612):
        return new $t(
          (e[x(1245)] || [])[x(794)]((r) => this._getCoder(r)),
          e.name
        );
      case "":
        return new Mf(e[x(296)]);
    }
    let t = e.type[x(354)]($f);
    if (t) {
      let r = parseInt(t[2] || "256");
      return (
        (r === 0 || r > 256 || r % 8 !== 0) &&
          _t[x(1839)](x(1130) + t[1] + x(1544), x(274), e),
        new Tf(r / 8, t[1] === x(1364), e[x(296)])
      );
    }
    if (((t = e[x(577)][x(354)](Zf)), t)) {
      let r = parseInt(t[1]);
      return (
        (r === 0 || r > 32) && _t[x(1839)](x(1367), x(274), e),
        new Af(r, e[x(296)])
      );
    }
    return _t[x(1839)]("invalid type", x(577), e.type);
  }
  [c(806)]() {
    return 32;
  }
  [c(1170)](e, x) {
    var t = c;
    return new yr(e, this[t(806)](), this[t(1085)], x);
  }
  [c(944)]() {
    return new cn(this._getWordSize());
  }
  [c(1401)](e) {
    var x = c;
    const t = e[x(794)]((a) => this[x(496)](ix[x(1180)](a)));
    return new $t(t, "_").defaultValue();
  }
  [c(1664)](e, x) {
    var t = c;
    e[t(152)] !== x[t(152)] &&
      _t[t(304)]("types/values length mismatch", T[t(1169)][t(1897)], {
        count: { types: e[t(152)], values: x[t(152)] },
        value: { types: e, values: x },
      });
    const r = e[t(794)]((d) => this._getCoder(ix[t(1180)](d))),
      a = new $t(r, "_"),
      s = this._getWriter();
    return a.encode(s, x), s[t(1086)];
  }
  [c(1022)](e, x, t) {
    var r = c;
    const a = e.map((d) => this[r(496)](ix[r(1180)](d)));
    return new $t(a, "_")[r(1022)](this._getReader(q(x), t));
  }
}
const Oi = new Ri();
function re(n) {
  return Q0(ax(n));
}
const Di = c(345);
function Nn(n) {
  var e = c;
  n = atob(n);
  const x = [];
  for (let t = 0; t < n[e(152)]; t++) x[e(608)](n[e(501)](t));
  return q(x);
}
function Rn(n) {
  var e = c;
  n = q(n);
  let x = "";
  for (let t = 0; t < n.length; t++) x += String[e(480)](n[t]);
  return btoa(x);
}
const _f = Object[c(250)](
  Object.defineProperty(
    { __proto__: null, decode: Nn, encode: Rn },
    Symbol[c(1942)],
    { value: "Module" }
  )
);
function Fi(n, e) {
  var x = c;
  e == null && (e = 1);
  const t = [],
    r = t[x(1745)],
    a = function (s, d) {
      var l = x;
      r[l(1340)](s, function (v) {
        var m = l;
        d > 0 && Array[m(1900)](v) ? a(v, d - 1) : t.push(v);
      });
    };
  return a(n, e), t;
}
function xc(n) {
  const e = {};
  for (let x = 0; x < n.length; x++) {
    const t = n[x];
    e[t[0]] = t[1];
  }
  return e;
}
function ec(n) {
  var e = c;
  let x = 0;
  function t() {
    return (n[x++] << 8) | n[x++];
  }
  let r = t(),
    a = 1,
    s = [0, 1];
  for (let j = 1; j < r; j++) s[e(608)]((a += t()));
  let d = t(),
    l = x;
  x += d;
  let v = 0,
    m = 0;
  function g() {
    return v == 0 && ((m = (m << 8) | n[x++]), (v = 8)), (m >> --v) & 1;
  }
  const k = 31,
    S = Math[e(1538)](2, k),
    B = S >>> 1,
    R = B >> 1,
    D = S - 1;
  let P = 0;
  for (let j = 0; j < k; j++) P = (P << 1) | g();
  let I = [],
    K = 0,
    G = S;
  for (; []; ) {
    let j = Math[e(305)](((P - K + 1) * a - 1) / G),
      L = 0,
      Z = r;
    for (; Z - L > 1; ) {
      let K0 = (L + Z) >>> 1;
      j < s[K0] ? (Z = K0) : (L = K0);
    }
    if (L == 0) break;
    I[e(608)](L);
    let $ = K + Math[e(305)]((G * s[L]) / a),
      x0 = K + Math.floor((G * s[L + 1]) / a) - 1;
    for (; (($ ^ x0) & B) == 0; )
      (P = ((P << 1) & D) | g()),
        ($ = ($ << 1) & D),
        (x0 = ((x0 << 1) & D) | 1);
    for (; $ & ~x0 & R; )
      (P = (P & B) | ((P << 1) & (D >>> 1)) | g()),
        ($ = ($ << 1) ^ B),
        (x0 = ((x0 ^ B) << 1) | B | 1);
    (K = $), (G = 1 + x0 - $);
  }
  let V = r - 4;
  return I[e(794)]((j) => {
    switch (j - V) {
      case 3:
        return V + 65792 + ((n[l++] << 16) | (n[l++] << 8) | n[l++]);
      case 2:
        return V + 256 + ((n[l++] << 8) | n[l++]);
      case 1:
        return V + n[l++];
      default:
        return j - 1;
    }
  });
}
function tc(n) {
  let e = 0;
  return () => n[e++];
}
function rc(n) {
  return tc(ec(n));
}
function nc(n) {
  return n & 1 ? ~n >> 1 : n >> 1;
}
function ac(n, e) {
  let x = Array(n);
  for (let t = 0; t < n; t++) x[t] = 1 + e();
  return x;
}
function la(n, e) {
  let x = Array(n);
  for (let t = 0, r = -1; t < n; t++) x[t] = r += 1 + e();
  return x;
}
function ic(n, e) {
  let x = Array(n);
  for (let t = 0, r = 0; t < n; t++) x[t] = r += nc(e());
  return x;
}
function Mr(n, e) {
  var x = c;
  let t = la(n(), n),
    r = n(),
    a = la(r, n),
    s = ac(r, n);
  for (let d = 0; d < r; d++)
    for (let l = 0; l < s[d]; l++) t[x(608)](a[d] + l);
  return e ? t[x(794)]((d) => e[d]) : t;
}
function sc(n) {
  var e = c;
  let x = [];
  for (; []; ) {
    let t = n();
    if (t == 0) break;
    x[e(608)](cc(t, n));
  }
  for (; []; ) {
    let t = n() - 1;
    if (t < 0) break;
    x[e(608)](oc(t, n));
  }
  return xc(Fi(x));
}
function fc(n) {
  let e = [];
  for (; []; ) {
    let x = n();
    if (x == 0) break;
    e.push(x);
  }
  return e;
}
function Ui(n, e, x) {
  var t = c;
  let r = Array(n)
    [t(1358)](void 0)
    .map(() => []);
  for (let a = 0; a < e; a++) ic(n, x)[t(1745)]((s, d) => r[d][t(608)](s));
  return r;
}
function cc(n, e) {
  var x = c;
  let t = 1 + e(),
    r = e(),
    a = fc(e),
    s = Ui(a[x(152)], 1 + n, e);
  return Fi(
    s[x(794)]((d, l) => {
      var v = x;
      const m = d[0],
        g = d[v(1095)](1);
      return Array(a[l])
        [v(1358)](void 0)
        [v(794)]((k, S) => {
          var B = v;
          let R = S * r;
          return [m + S * t, g[B(794)]((D) => D + R)];
        });
    })
  );
}
function oc(n, e) {
  var x = c;
  let t = 1 + e();
  return Ui(t, 1 + n, e).map((a) => [a[0], a[x(1095)](1)]);
}
function uc(n) {
  var e = c;
  let x = Mr(n)[e(760)]((r, a) => r - a);
  return t();
  function t() {
    var r = e;
    let a = [];
    for (; []; ) {
      let g = Mr(n, x);
      if (g[r(152)] == 0) break;
      a[r(608)]({ set: new Set(g), node: t() });
    }
    a[r(760)]((g, k) => k.set.size - g[r(509)][r(495)]);
    let s = n(),
      d = s % 3;
    s = (s / 3) | 0;
    let l = !!(s & 1);
    s >>= 1;
    let v = s == 1,
      m = s == 2;
    return { branches: a, valid: d, fe0f: l, save: v, check: m };
  }
}
function hc() {
  return rc(
    Nn(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
const Nr = hc(),
  dc = new Set(Mr(Nr)),
  lc = new Set(Mr(Nr)),
  bc = sc(Nr),
  vc = uc(Nr),
  ba = 45,
  va = 95;
function Li(n) {
  return wr(n);
}
function pc(n) {
  var e = c;
  return n[e(196)]((x) => x != 65039);
}
function Gi(n) {
  var e = c;
  for (let x of n[e(1418)](".")) {
    let t = Li(x);
    try {
      for (let r = t[e(911)](va) - 1; r >= 0; r--)
        if (t[r] !== va) throw new Error(e(1971));
      if (
        t[e(152)] >= 4 &&
        t.every((r) => r < 128) &&
        t[2] === ba &&
        t[3] === ba
      )
        throw new Error(e(485));
    } catch (r) {
      throw new Error(e(780) + x + e(857) + r[e(469)]);
    }
  }
  return n;
}
function mc(n) {
  return Gi(gc(n, pc));
}
function gc(n, e) {
  var x = c;
  let t = Li(n).reverse(),
    r = [];
  for (; t[x(152)]; ) {
    let a = wc(t);
    if (a) {
      r[x(608)](...e(a));
      continue;
    }
    let s = t[x(1196)]();
    if (dc[x(257)](s)) {
      r[x(608)](s);
      continue;
    }
    if (lc[x(257)](s)) continue;
    let d = bc[s];
    if (d) {
      r.push(...d);
      continue;
    }
    throw new Error("Disallowed codepoint: 0x" + s[x(1628)](16)[x(317)]());
  }
  return Gi(yc(String.fromCodePoint(...r)));
}
function yc(n) {
  var e = c;
  return n[e(814)]("NFC");
}
function wc(n, e) {
  var x = c,
    t;
  let r = vc,
    a,
    s,
    d = [],
    l = n[x(152)];
  for (e && (e.length = 0); l; ) {
    let v = n[--l];
    if (
      ((r =
        (t = r[x(1840)].find((m) => m[x(509)].has(v))) === null || t === void 0
          ? void 0
          : t[x(685)]),
      !r)
    )
      break;
    if (r[x(214)]) s = v;
    else if (r[x(1334)] && v === s) break;
    d[x(608)](v),
      r[x(1266)] && (d.push(65039), l > 0 && n[l - 1] == 65039 && l--),
      r[x(1281)] &&
        ((a = d[x(1095)]()),
        r[x(1281)] == 2 && a.splice(1, 1),
        e && e[x(608)](...n.slice(l)[x(709)]()),
        (n[x(152)] = l));
  }
  return a;
}
const Ac = new T(Di),
  Ki = new Uint8Array(32);
Ki[c(1358)](0);
function pa(n) {
  var e = c;
  if (n.length === 0) throw new Error(e(219));
  return n;
}
function On(n) {
  var e = c;
  const x = ax(mc(n)),
    t = [];
  if (n[e(152)] === 0) return t;
  let r = 0;
  for (let a = 0; a < x[e(152)]; a++)
    x[a] === 46 && (t.push(pa(x.slice(r, a))), (r = a + 1));
  if (r >= x[e(152)]) throw new Error(e(219));
  return t[e(608)](pa(x[e(1095)](r))), t;
}
function Mc(n) {
  var e = c;
  try {
    return On(n)[e(152)] !== 0;
  } catch (x) {}
  return ![];
}
function Nt(n) {
  var e = c;
  typeof n !== e(1721) &&
    Ac.throwArgumentError("invalid ENS name; not a string", "name", n);
  let x = Ki;
  const t = On(n);
  for (; t[e(152)]; ) x = Q0(V0([x, Q0(t[e(1196)]())]));
  return H(x);
}
function qi(n) {
  var e = c;
  return (
    H(
      V0(
        On(n)[e(794)]((x) => {
          var t = e;
          if (x[t(152)] > 63) throw new Error(t(805));
          const r = new Uint8Array(x[t(152)] + 1);
          return r[t(509)](x, 1), (r[0] = r.length - 1), r;
        })
      )
    ) + "00"
  );
}
const Ec = `Ethereum Signed Message:
`;
function Dn(n) {
  var e = c;
  return (
    typeof n === e(1721) && (n = ax(n)),
    Q0(V0([ax(Ec), ax(String(n[e(152)])), n]))
  );
}
var kc =
  (globalThis && globalThis.__awaiter) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g.value)[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
const $0 = new T(Di),
  zi = new Uint8Array(32);
zi.fill(0);
const Sc = z[c(1180)](-1),
  Hi = z[c(1180)](0),
  Ji = z[c(1180)](1),
  Pc = z[c(1180)](c(643));
function Cc(n) {
  var e = c;
  const x = q(n),
    t = x[e(152)] % 32;
  return t ? vx([x, zi[e(1095)](t)]) : H(x);
}
const Bc = Y0(Ji[c(1304)](), 32),
  Tc = Y0(Hi[c(1304)](), 32),
  ma = {
    name: c(1721),
    version: c(1721),
    chainId: c(1814),
    verifyingContract: c(1531),
    salt: c(1530),
  },
  jr = ["name", c(1844), c(1923), c(1101), c(1271)];
function ga(n) {
  return function (e) {
    var x = O;
    return (
      typeof e !== x(1721) &&
        $0[x(1839)](x(1069) + JSON[x(657)](n), x(902) + n, e),
      e
    );
  };
}
const Ic = {
  name: ga(c(296)),
  version: ga(c(1844)),
  chainId: function (n) {
    var e = c;
    try {
      return z.from(n)[e(1628)]();
    } catch (x) {}
    return $0[e(1839)](e(1463), e(419), n);
  },
  verifyingContract: function (n) {
    var e = c;
    try {
      return j0(n).toLowerCase();
    } catch (x) {}
    return $0[e(1839)](e(991), "domain.verifyingContract", n);
  },
  salt: function (n) {
    var e = c;
    try {
      const x = q(n);
      if (x[e(152)] !== 32) throw new Error(e(549));
      return H(x);
    } catch (x) {}
    return $0[e(1839)]('invalid domain value "salt"', e(1123), n);
  },
};
function Wr(n) {
  var e = c;
  {
    const x = n[e(354)](/^(u?)int(\d*)$/);
    if (x) {
      const t = x[1] === "",
        r = parseInt(x[2] || "256");
      (r % 8 !== 0 || r > 256 || (x[2] && x[2] !== String(r))) &&
        $0[e(1839)](e(1759), "type", n);
      const a = Pc[e(1052)](t ? r - 1 : r),
        s = t ? a[e(1607)](Ji)[e(1426)](Sc) : Hi;
      return function (d) {
        var l = e;
        const v = z[l(1180)](d);
        return (
          (v.lt(s) || v.gt(a)) && $0[l(1839)](l(263) + n, l(1204), d),
          Y0(v[l(1810)](256)[l(1304)](), 32)
        );
      };
    }
  }
  {
    const x = n[e(354)](/^bytes(\d+)$/);
    if (x) {
      const t = parseInt(x[1]);
      return (
        (t === 0 || t > 32 || x[1] !== String(t)) &&
          $0[e(1839)](e(1652), e(577), n),
        function (r) {
          var a = e;
          return (
            q(r)[a(152)] !== t && $0[a(1839)](a(1956) + n, a(1204), r), Cc(r)
          );
        }
      );
    }
  }
  switch (n) {
    case e(1531):
      return function (x) {
        return Y0(j0(x), 32);
      };
    case "bool":
      return function (x) {
        return x ? Bc : Tc;
      };
    case "bytes":
      return function (x) {
        return Q0(x);
      };
    case "string":
      return function (x) {
        return re(x);
      };
  }
  return null;
}
function ya(n, e) {
  var x = c;
  return (
    n +
    "(" +
    e[x(794)](({ name: t, type: r }) => r + " " + t)[x(1286)](",") +
    ")"
  );
}
class ox {
  constructor(e) {
    var x = c;
    F(this, x(1733), Object.freeze(mx(e))),
      F(this, "_encoderCache", {}),
      F(this, x(1023), {});
    const t = {},
      r = {},
      a = {};
    Object.keys(e)[x(1745)]((l) => {
      (t[l] = {}), (r[l] = []), (a[l] = {});
    });
    for (const l in e) {
      const v = {};
      e[l][x(1745)]((m) => {
        var g = x;
        v[m.name] &&
          $0[g(1839)](
            "duplicate variable name " +
              JSON[g(657)](m[g(296)]) +
              g(951) +
              JSON[g(657)](l),
            g(1733),
            e
          ),
          (v[m[g(296)]] = !![]);
        const k = m[g(577)][g(354)](/^([^\x5b]*)(\x5b|$)/)[1];
        k === l &&
          $0[g(1839)](
            "circular type reference to " + JSON[g(657)](k),
            g(1733),
            e
          ),
          !Wr(k) &&
            (!r[k] &&
              $0.throwArgumentError(g(1436) + JSON[g(657)](k), g(1733), e),
            r[k].push(l),
            (t[l][k] = !![]));
      });
    }
    const s = Object.keys(r)[x(196)]((l) => r[l].length === 0);
    s[x(152)] === 0
      ? $0[x(1839)]("missing primary type", x(1733), e)
      : s[x(152)] > 1 &&
        $0[x(1839)](
          x(1641) + s[x(794)]((l) => JSON[x(657)](l)).join(", "),
          x(1733),
          e
        ),
      F(this, x(1303), s[0]);
    function d(l, v) {
      var m = x;
      v[l] && $0[m(1839)](m(242) + JSON[m(657)](l), "types", e),
        (v[l] = !![]),
        Object[m(319)](t[l])[m(1745)]((g) => {
          var k = m;
          !r[g] ||
            (d(g, v),
            Object[k(319)](v)[k(1745)]((S) => {
              a[S][g] = !![];
            }));
        }),
        delete v[l];
    }
    d(this[x(1303)], {});
    for (const l in a) {
      const v = Object[x(319)](a[l]);
      v.sort(),
        (this[x(1023)][l] =
          ya(l, e[l]) + v[x(794)]((m) => ya(m, e[m]))[x(1286)](""));
    }
  }
  [c(597)](e) {
    var x = c;
    let t = this[x(248)][e];
    return !t && (t = this[x(248)][e] = this[x(377)](e)), t;
  }
  _getEncoder(e) {
    var x = c;
    {
      const a = Wr(e);
      if (a) return a;
    }
    const t = e[x(354)](/^(.*)(\x5b(\d*)\x5d)$/);
    if (t) {
      const a = t[1],
        s = this.getEncoder(a),
        d = parseInt(t[3]);
      return (l) => {
        var v = x;
        d >= 0 && l[v(152)] !== d && $0[v(1839)](v(1856), "value", l);
        let m = l.map(s);
        return this._types[a] && (m = m[v(794)](Q0)), Q0(vx(m));
      };
    }
    const r = this[x(1733)][e];
    if (r) {
      const a = re(this[x(1023)][e]);
      return (s) => {
        var d = x;
        const l = r[d(794)](({ name: v, type: m }) => {
          var g = d;
          const k = this[g(597)](m)(s[v]);
          return this[g(1023)][m] ? Q0(k) : k;
        });
        return l[d(1604)](a), vx(l);
      };
    }
    return $0[x(1839)](x(1734) + e, "type", e);
  }
  [c(1793)](e) {
    var x = c;
    const t = this._types[e];
    return !t && $0[x(1839)](x(1734) + JSON[x(657)](e), x(296), e), t;
  }
  [c(323)](e, x) {
    var t = c;
    return this[t(597)](e)(x);
  }
  [c(1308)](e, x) {
    var t = c;
    return Q0(this[t(323)](e, x));
  }
  [c(1664)](e) {
    var x = c;
    return this.encodeData(this[x(1303)], e);
  }
  [c(1062)](e) {
    var x = c;
    return this[x(1308)](this[x(1303)], e);
  }
  [c(1637)](e, x, t) {
    var r = c;
    if (Wr(e)) return t(e, x);
    const a = e[r(354)](/^(.*)(\x5b(\d*)\x5d)$/);
    if (a) {
      const d = a[1],
        l = parseInt(a[3]);
      return (
        l >= 0 && x[r(152)] !== l && $0[r(1839)](r(1856), r(1204), x),
        x.map((v) => this[r(1637)](d, v, t))
      );
    }
    const s = this.types[e];
    return s
      ? s.reduce((d, { name: l, type: v }) => {
          var m = r;
          return (d[l] = this[m(1637)](v, x[l], t)), d;
        }, {})
      : $0[r(1839)]("unknown type: " + e, r(577), e);
  }
  visit(e, x) {
    var t = c;
    return this[t(1637)](this[t(1303)], e, x);
  }
  static [c(1180)](e) {
    return new ox(e);
  }
  static [c(712)](e) {
    var x = c;
    return ox[x(1180)](e)[x(1303)];
  }
  static [c(1308)](e, x, t) {
    var r = c;
    return ox[r(1180)](x).hashStruct(e, t);
  }
  static [c(1332)](e) {
    var x = c;
    const t = [];
    for (const r in e) {
      const a = ma[r];
      !a && $0.throwArgumentError(x(1490) + JSON[x(657)](r), x(772), e),
        t[x(608)]({ name: r, type: a });
    }
    return (
      t.sort((r, a) => {
        var s = x;
        return jr[s(1532)](r[s(296)]) - jr.indexOf(a[s(296)]);
      }),
      ox[x(1308)](x(973), { EIP712Domain: t }, e)
    );
  }
  static [c(1664)](e, x, t) {
    var r = c;
    return vx([r(1068), ox.hashDomain(e), ox.from(x)[r(1062)](t)]);
  }
  static [c(1062)](e, x, t) {
    var r = c;
    return Q0(ox[r(1664)](e, x, t));
  }
  static [c(1379)](e, x, t, r) {
    return kc(this, void 0, void 0, function* () {
      var a = O;
      e = X0(e);
      const s = {};
      e[a(1101)] && !n0(e[a(1101)], 20) && (s[e[a(1101)]] = "0x");
      const d = ox[a(1180)](x);
      d[a(1208)](t, (l, v) => {
        var m = a;
        return l === m(1531) && !n0(v, 20) && (s[v] = "0x"), v;
      });
      for (const l in s) s[l] = yield r(l);
      return (
        e[a(1101)] && s[e[a(1101)]] && (e[a(1101)] = s[e[a(1101)]]),
        (t = d[a(1208)](t, (l, v) => {
          var m = a;
          return l === m(1531) && s[v] ? s[v] : v;
        })),
        { domain: e, value: t }
      );
    });
  }
  static [c(1386)](e, x, t) {
    var r = c;
    ox[r(1332)](e);
    const a = {},
      s = [];
    jr.forEach((v) => {
      var m = r;
      const g = e[v];
      g != null && ((a[v] = Ic[v](g)), s[m(608)]({ name: v, type: ma[v] }));
    });
    const d = ox[r(1180)](x),
      l = X0(x);
    return (
      l.EIP712Domain ? $0[r(1839)](r(584), r(1778), x) : (l[r(973)] = s),
      d.encode(t),
      {
        types: l,
        domain: a,
        primaryType: d[r(1303)],
        message: d.visit(t, (v, m) => {
          var g = r;
          if (v[g(354)](/^bytes(\d*)/)) return H(q(m));
          if (v[g(354)](/^u?int/)) return z[g(1180)](m)[g(1628)]();
          switch (v) {
            case g(1531):
              return m[g(177)]();
            case g(610):
              return !!m;
            case g(1721):
              return (
                typeof m !== g(1721) &&
                  $0[g(1839)]("invalid string", g(1204), m),
                m
              );
          }
          return $0[g(1839)](g(1309), g(577), v);
        }),
      }
    );
  }
}
const Z0 = new T(Vt);
class ji extends Ue {}
class Wi extends Ue {}
class Nc extends Ue {}
class Er extends Ue {
  static [c(389)](e) {
    var x = c;
    return !!(e && e[x(203)]);
  }
}
const Rc = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: c(1094),
    inputs: [c(1721)],
    reason: !![],
  },
  "0x4e487b71": { signature: c(791), name: c(1676), inputs: ["uint256"] },
};
function wa(n, e) {
  var x = c;
  const t = new Error(x(1107) + n);
  return (t[x(779)] = e), t;
}
class un {
  constructor(e) {
    var x = c;
    let t = [];
    typeof e === x(1721) ? (t = JSON[x(1698)](e)) : (t = e),
      F(
        this,
        "fragments",
        t[x(794)]((r) => {
          var a = x;
          return Kx[a(1180)](r);
        })[x(196)]((r) => r != null)
      ),
      F(this, x(1678), ux(new.target, x(730))()),
      F(this, x(466), {}),
      F(this, x(1169), {}),
      F(this, "events", {}),
      F(this, x(415), {}),
      this[x(746)][x(1745)]((r) => {
        var a = x;
        let s = null;
        switch (r.type) {
          case a(891):
            if (this[a(266)]) {
              Z0[a(830)](a(426));
              return;
            }
            F(this, a(266), r);
            return;
          case a(289):
            s = this.functions;
            break;
          case a(547):
            s = this[a(1310)];
            break;
          case a(779):
            s = this[a(1169)];
            break;
          default:
            return;
        }
        let d = r[a(504)]();
        if (s[d]) {
          Z0.warn(a(281) + d);
          return;
        }
        s[d] = r;
      }),
      !this.deploy &&
        F(this, x(266), Rx[x(1180)]({ payable: ![], type: x(891) })),
      F(this, x(572), !![]);
  }
  format(e) {
    var x = c;
    !e && (e = H0[x(1182)]),
      e === H0.sighash &&
        Z0[x(1839)](
          "interface does not support formatting sighash",
          "format",
          e
        );
    const t = this[x(746)][x(794)]((r) => r[x(504)](e));
    return e === H0.json ? JSON[x(657)](t.map((r) => JSON[x(1698)](r))) : t;
  }
  static [c(730)]() {
    return Oi;
  }
  static [c(471)](e) {
    return j0(e);
  }
  static [c(1620)](e) {
    var x = c;
    return tx(re(e[x(504)]()), 0, 4);
  }
  static [c(963)](e) {
    var x = c;
    return re(e[x(504)]());
  }
  [c(844)](e) {
    var x = c;
    if (n0(e)) {
      for (const r in this[x(466)])
        if (e === this[x(1620)](r)) return this[x(466)][r];
      Z0[x(1839)](x(1115), x(846), e);
    }
    if (e[x(1532)]("(") === -1) {
      const r = e[x(1661)](),
        a = Object.keys(this.functions)[x(196)](
          (s) => s[x(1418)]("(")[0] === r
        );
      return (
        a[x(152)] === 0
          ? Z0[x(1839)](x(1115), x(296), r)
          : a.length > 1 && Z0[x(1839)](x(1317), x(296), r),
        this[x(466)][a[0]]
      );
    }
    const t = this[x(466)][Ox[x(1061)](e).format()];
    return (
      !t && Z0.throwArgumentError("no matching function", "signature", e), t
    );
  }
  [c(1936)](e) {
    var x = c;
    if (n0(e)) {
      const r = e[x(177)]();
      for (const a in this[x(1310)])
        if (r === this[x(963)](a)) return this[x(1310)][a];
      Z0[x(1839)]("no matching event", "topichash", r);
    }
    if (e[x(1532)]("(") === -1) {
      const r = e.trim(),
        a = Object.keys(this[x(1310)])[x(196)]((s) => s[x(1418)]("(")[0] === r);
      return (
        a.length === 0
          ? Z0[x(1839)](x(635), x(296), r)
          : a[x(152)] > 1 && Z0[x(1839)](x(768), "name", r),
        this.events[a[0]]
      );
    }
    const t = this.events[Gx.fromString(e)[x(504)]()];
    return !t && Z0[x(1839)]("no matching event", x(1696), e), t;
  }
  getError(e) {
    var x = c;
    if (n0(e)) {
      const r = ux(this[x(891)], x(1620));
      for (const a in this[x(1169)]) {
        const s = this[x(1169)][a];
        if (e === r(s)) return this[x(1169)][a];
      }
      Z0[x(1839)](x(636), x(846), e);
    }
    if (e[x(1532)]("(") === -1) {
      const r = e[x(1661)](),
        a = Object.keys(this[x(1169)])[x(196)]((s) => s[x(1418)]("(")[0] === r);
      return (
        a[x(152)] === 0
          ? Z0[x(1839)]("no matching error", "name", r)
          : a.length > 1 && Z0[x(1839)](x(1209), x(296), r),
        this[x(1169)][a[0]]
      );
    }
    const t = this[x(1169)][Ox.fromString(e)[x(504)]()];
    return !t && Z0.throwArgumentError(x(636), x(1696), e), t;
  }
  [c(1620)](e) {
    var x = c;
    if (typeof e == "string")
      try {
        e = this.getFunction(e);
      } catch (t) {
        try {
          e = this[x(1870)](e);
        } catch (r) {
          throw t;
        }
      }
    return ux(this[x(891)], x(1620))(e);
  }
  [c(963)](e) {
    var x = c;
    return (
      typeof e == "string" && (e = this[x(1936)](e)),
      ux(this[x(891)], x(963))(e)
    );
  }
  [c(1938)](e, x) {
    var t = c;
    return this._abiCoder[t(1022)](e, x);
  }
  _encodeParams(e, x) {
    var t = c;
    return this[t(1678)][t(1664)](e, x);
  }
  [c(297)](e) {
    var x = c;
    return this._encodeParams(this[x(266)][x(308)], e || []);
  }
  [c(379)](e, x) {
    var t = c;
    typeof e == "string" && (e = this[t(1870)](e));
    const r = q(x);
    return (
      H(r[t(1095)](0, 4)) !== this[t(1620)](e) &&
        Z0[t(1839)](t(529) + e[t(296)] + ".", t(1086), H(r)),
      this._decodeParams(e.inputs, r[t(1095)](4))
    );
  }
  encodeErrorResult(e, x) {
    var t = c;
    return (
      typeof e === t(1721) && (e = this[t(1870)](e)),
      H(V0([this[t(1620)](e), this[t(424)](e.inputs, x || [])]))
    );
  }
  [c(1754)](e, x) {
    var t = c;
    typeof e === t(1721) && (e = this[t(844)](e));
    const r = q(x);
    return (
      H(r[t(1095)](0, 4)) !== this[t(1620)](e) &&
        Z0.throwArgumentError(t(1885) + e.name + ".", t(1086), H(r)),
      this[t(1938)](e[t(308)], r[t(1095)](4))
    );
  }
  encodeFunctionData(e, x) {
    var t = c;
    return (
      typeof e === t(1721) && (e = this[t(844)](e)),
      H(V0([this[t(1620)](e), this[t(424)](e.inputs, x || [])]))
    );
  }
  [c(1681)](e, x) {
    var t = c;
    typeof e === t(1721) && (e = this[t(844)](e));
    let r = q(x),
      a = null,
      s = "",
      d = null,
      l = null,
      v = null;
    switch (r[t(152)] % this._abiCoder[t(806)]()) {
      case 0:
        try {
          return this[t(1678)][t(1022)](e.outputs, r);
        } catch (m) {}
        break;
      case 4: {
        const m = H(r.slice(0, 4)),
          g = Rc[m];
        if (g)
          (d = this[t(1678)][t(1022)](g[t(308)], r[t(1095)](4))),
            (l = g.name),
            (v = g[t(1696)]),
            g.reason && (a = d[0]),
            l === t(1094)
              ? (s = t(434) + JSON[t(657)](d[0]))
              : l === t(1676) && (s = t(1887) + d[0]);
        else
          try {
            const k = this[t(1870)](m);
            (d = this[t(1678)].decode(k[t(308)], r.slice(4))),
              (l = k.name),
              (v = k.format());
          } catch (k) {}
        break;
      }
    }
    return Z0[t(304)](t(1946) + s, T[t(1169)].CALL_EXCEPTION, {
      method: e.format(),
      data: H(x),
      errorArgs: d,
      errorName: l,
      errorSignature: v,
      reason: a,
    });
  }
  encodeFunctionResult(e, x) {
    var t = c;
    return (
      typeof e === t(1721) && (e = this.getFunction(e)),
      H(this[t(1678)][t(1664)](e[t(325)], x || []))
    );
  }
  [c(1522)](e, x) {
    var t = c;
    typeof e === t(1721) && (e = this[t(1936)](e)),
      x[t(152)] > e[t(308)].length &&
        Z0[t(304)](
          "too many arguments for " + e[t(504)](),
          T[t(1169)][t(1143)],
          { argument: "values", value: x }
        );
    let r = [];
    !e[t(1411)] && r[t(608)](this[t(963)](e));
    const a = (s, d) => {
      var l = t;
      return s.type === l(1721)
        ? re(d)
        : s[l(577)] === l(1592)
        ? Q0(H(d))
        : (s[l(577)] === "bool" &&
            typeof d === l(1675) &&
            (d = l(d ? 246 : 258)),
          s[l(577)][l(354)](/^u?int/) && (d = z[l(1180)](d).toHexString()),
          s.type === "address" && this[l(1678)][l(1664)]([l(1531)], [d]),
          Y0(H(d), 32));
    };
    for (
      x[t(1745)]((s, d) => {
        var l = t;
        let v = e.inputs[d];
        if (!v[l(1517)]) {
          s != null &&
            Z0[l(1839)](
              "cannot filter non-indexed parameters; must be null",
              l(173) + v[l(296)],
              s
            );
          return;
        }
        s == null
          ? r[l(608)](null)
          : v[l(882)] === l(588) || v[l(882)] === "tuple"
          ? Z0[l(1839)](l(1667), l(173) + v[l(296)], s)
          : Array[l(1900)](s)
          ? r[l(608)](s.map((m) => a(v, m)))
          : r[l(608)](a(v, s));
      });
      r[t(152)] && r[r.length - 1] === null;

    )
      r[t(1196)]();
    return r;
  }
  [c(1373)](e, x) {
    var t = c;
    typeof e == "string" && (e = this[t(1936)](e));
    const r = [],
      a = [],
      s = [];
    return (
      !e[t(1411)] && r.push(this[t(963)](e)),
      x[t(152)] !== e[t(308)].length &&
        Z0.throwArgumentError(t(1542), "values", x),
      e[t(308)][t(1745)]((d, l) => {
        var v = t;
        const m = x[l];
        if (d.indexed)
          if (d[v(577)] === v(1721)) r[v(608)](re(m));
          else if (d[v(577)] === "bytes") r[v(608)](Q0(m));
          else {
            if (d[v(882)] === v(1612) || d[v(882)] === "array")
              throw new Error("not implemented");
            r[v(608)](this[v(1678)][v(1664)]([d[v(577)]], [m]));
          }
        else a.push(d), s[v(608)](m);
      }),
      { data: this._abiCoder.encode(a, s), topics: r }
    );
  }
  [c(1738)](e, x, t) {
    var r = c;
    if (
      (typeof e == "string" && (e = this[r(1936)](e)), t != null && !e[r(1411)])
    ) {
      let S = this[r(963)](e);
      (!n0(t[0], 32) || t[0].toLowerCase() !== S) &&
        Z0.throwError(r(1882), T.errors[r(1897)], {
          argument: r(1171),
          expected: S,
          value: t[0],
        }),
        (t = t[r(1095)](1));
    }
    let a = [],
      s = [],
      d = [];
    e.inputs[r(1745)]((S, B) => {
      var R = r;
      S[R(1517)]
        ? S[R(577)] === R(1721) ||
          S.type === R(1592) ||
          S[R(882)] === R(1612) ||
          S[R(882)] === R(588)
          ? (a[R(608)](ix[R(1485)]({ type: R(1530), name: S[R(296)] })),
            d[R(608)](!![]))
          : (a[R(608)](S), d.push(![]))
        : (s[R(608)](S), d.push(![]));
    });
    let l = t != null ? this[r(1678)][r(1022)](a, V0(t)) : null,
      v = this[r(1678)][r(1022)](s, x, !![]),
      m = [],
      g = 0,
      k = 0;
    e[r(308)].forEach((S, B) => {
      var R = r;
      if (S[R(1517)])
        if (l == null) m[B] = new Er({ _isIndexed: !![], hash: null });
        else if (d[B]) m[B] = new Er({ _isIndexed: !![], hash: l[k++] });
        else
          try {
            m[B] = l[k++];
          } catch (D) {
            m[B] = D;
          }
      else
        try {
          m[B] = v[g++];
        } catch (D) {
          m[B] = D;
        }
      if (S.name && m[S[R(296)]] == null) {
        const D = m[B];
        D instanceof Error
          ? Object.defineProperty(m, S[R(296)], {
              enumerable: !![],
              get: () => {
                var P = R;
                throw wa("property " + JSON.stringify(S[P(296)]), D);
              },
            })
          : (m[S[R(296)]] = D);
      }
    });
    for (let S = 0; S < m[r(152)]; S++) {
      const B = m[S];
      B instanceof Error &&
        Object[r(782)](m, S, {
          enumerable: !![],
          get: () => {
            var R = r;
            throw wa(R(1350) + S, B);
          },
        });
    }
    return Object[r(250)](m);
  }
  [c(952)](e) {
    var x = c;
    let t = this.getFunction(e[x(1086)].substring(0, 10)[x(177)]());
    return t
      ? new Wi({
          args: this._abiCoder[x(1022)](
            t[x(308)],
            "0x" + e[x(1086)][x(1329)](10)
          ),
          functionFragment: t,
          name: t[x(296)],
          signature: t[x(504)](),
          sighash: this[x(1620)](t),
          value: z[x(1180)](e[x(1204)] || "0"),
        })
      : null;
  }
  [c(1345)](e) {
    var x = c;
    let t = this.getEvent(e.topics[0]);
    return !t || t[x(1411)]
      ? null
      : new ji({
          eventFragment: t,
          name: t.name,
          signature: t[x(504)](),
          topic: this[x(963)](t),
          args: this.decodeEventLog(t, e.data, e.topics),
        });
  }
  [c(1588)](e) {
    var x = c;
    const t = H(e);
    let r = this[x(1870)](t[x(1329)](0, 10)[x(177)]());
    return r
      ? new Nc({
          args: this[x(1678)][x(1022)](r[x(308)], "0x" + t[x(1329)](10)),
          errorFragment: r,
          name: r.name,
          signature: r[x(504)](),
          sighash: this.getSighash(r),
        })
      : null;
  }
  static [c(1043)](e) {
    return !!(e && e._isInterface);
  }
}
const Oc = c(360);
var Dc =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      function d(m) {
        var g = O;
        try {
          v(t[g(1747)](m));
        } catch (k) {
          s(k);
        }
      }
      function l(m) {
        var g = O;
        try {
          v(t[g(1944)](m));
        } catch (k) {
          s(k);
        }
      }
      function v(m) {
        var g = O;
        m[g(252)] ? a(m[g(1204)]) : r(m[g(1204)]).then(d, l);
      }
      v((t = t.apply(n, e || [])).next());
    });
  };
const Fc = new T(Oc);
class Uc extends Ue {
  static [c(1147)](e) {
    var x = c;
    return !!(e && e[x(1438)]);
  }
}
class Ge {
  constructor() {
    var e = c;
    Fc[e(1372)](new.target, Ge), F(this, e(1228), !![]);
  }
  [c(1716)]() {
    return Dc(this, void 0, void 0, function* () {
      var e = O;
      const { block: x, gasPrice: t } = yield xx({
        block: this[e(1041)]("latest"),
        gasPrice: this[e(278)]()[e(1083)]((d) => null),
      });
      let r = null,
        a = null,
        s = null;
      return (
        x &&
          x[e(1571)] &&
          ((r = x.baseFeePerGas),
          (s = z[e(1180)](e(1259))),
          (a = x[e(1571)].mul(2)[e(1607)](s))),
        {
          lastBaseFeePerGas: r,
          maxFeePerGas: a,
          maxPriorityFeePerGas: s,
          gasPrice: t,
        }
      );
    });
  }
  [c(1013)](e, x) {
    return this.on(e, x);
  }
  [c(506)](e, x) {
    return this.off(e, x);
  }
  static [c(166)](e) {
    var x = c;
    return !!(e && e[x(1228)]);
  }
}
const Lc = "abstract-signer/5.7.0";
var Ix =
  (globalThis && globalThis.__awaiter) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      function d(m) {
        var g = O;
        try {
          v(t[g(1747)](m));
        } catch (k) {
          s(k);
        }
      }
      function l(m) {
        var g = O;
        try {
          v(t[g(1944)](m));
        } catch (k) {
          s(k);
        }
      }
      function v(m) {
        var g = O;
        m.done ? a(m[g(1204)]) : r(m[g(1204)])[g(1494)](d, l);
      }
      v((t = t.apply(n, e || [])).next());
    });
  };
const Px = new T(Lc),
  Gc = [
    c(676),
    c(1434),
    "chainId",
    "customData",
    "data",
    "from",
    c(1550),
    c(1772),
    c(1042),
    c(1445),
    c(1361),
    "to",
    c(577),
    c(1204),
  ],
  Kc = [
    T[c(1169)][c(1322)],
    T[c(1169)][c(1691)],
    T[c(1169)].REPLACEMENT_UNDERPRICED,
  ];
class se {
  constructor() {
    var e = c;
    Px[e(1372)](new.target, se), F(this, e(1406), !![]);
  }
  [c(1947)](e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      return (
        this[x(789)](x(1947)), yield this[x(1362)][x(1947)](this[x(471)](), e)
      );
    });
  }
  [c(1590)](e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      return (
        this[x(789)](x(1590)),
        yield this[x(1362)][x(1590)](this.getAddress(), e)
      );
    });
  }
  estimateGas(e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      this[x(789)](x(571));
      const t = yield xx(this.checkTransaction(e));
      return yield this.provider[x(571)](t);
    });
  }
  [c(1340)](e, x) {
    return Ix(this, void 0, void 0, function* () {
      var t = O;
      this[t(789)](t(1340));
      const r = yield xx(this.checkTransaction(e));
      return yield this[t(1362)].call(r, x);
    });
  }
  [c(1177)](e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      this[x(789)](x(1177));
      const t = yield this[x(579)](e),
        r = yield this[x(1918)](t);
      return yield this[x(1362)].sendTransaction(r);
    });
  }
  [c(1725)]() {
    return Ix(this, void 0, void 0, function* () {
      var e = O;
      return this[e(789)](e(1725)), (yield this.provider[e(1505)]()).chainId;
    });
  }
  [c(278)]() {
    return Ix(this, void 0, void 0, function* () {
      var e = O;
      return this[e(789)](e(278)), yield this[e(1362)][e(278)]();
    });
  }
  [c(1716)]() {
    return Ix(this, void 0, void 0, function* () {
      var e = O;
      return this[e(789)](e(1716)), yield this[e(1362)][e(1716)]();
    });
  }
  [c(767)](e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      return this._checkProvider(x(767)), yield this[x(1362)][x(767)](e);
    });
  }
  [c(1038)](e) {
    var x = c;
    for (const r in e)
      Gc[x(1532)](r) === -1 &&
        Px.throwArgumentError(x(361) + r, "transaction", e);
    const t = X0(e);
    return (
      t[x(1180)] == null
        ? (t[x(1180)] = this[x(471)]())
        : (t.from = Promise[x(1149)]([
            Promise.resolve(t[x(1180)]),
            this[x(471)](),
          ])[x(1494)]((r) => {
            var a = x;
            return (
              r[0].toLowerCase() !== r[1].toLowerCase() &&
                Px[a(1839)](a(1570), "transaction", e),
              r[0]
            );
          })),
      t
    );
  }
  [c(579)](e) {
    return Ix(this, void 0, void 0, function* () {
      var x = O;
      const t = yield xx(this.checkTransaction(e));
      t.to != null &&
        ((t.to = Promise[x(620)](t.to).then((a) =>
          Ix(this, void 0, void 0, function* () {
            var s = x;
            if (a == null) return null;
            const d = yield this[s(767)](a);
            return d == null && Px.throwArgumentError(s(387), "tx.to", a), d;
          })
        )),
        t.to[x(1083)]((a) => {}));
      const r = t[x(1042)] != null || t[x(1445)] != null;
      if (
        (t[x(1772)] != null && (t[x(577)] === 2 || r)
          ? Px[x(1839)](
              "eip-1559 transaction do not support gasPrice",
              x(1785),
              e
            )
          : (t[x(577)] === 0 || t[x(577)] === 1) &&
            r &&
            Px[x(1839)](x(436), "transaction", e),
        (t[x(577)] === 2 || t[x(577)] == null) &&
          t.maxFeePerGas != null &&
          t.maxPriorityFeePerGas != null)
      )
        t[x(577)] = 2;
      else if (t[x(577)] === 0 || t[x(577)] === 1)
        t[x(1772)] == null && (t[x(1772)] = this[x(278)]());
      else {
        const a = yield this[x(1716)]();
        if (t[x(577)] == null)
          if (a.maxFeePerGas != null && a[x(1445)] != null)
            if (((t[x(577)] = 2), t[x(1772)] != null)) {
              const s = t.gasPrice;
              delete t[x(1772)], (t.maxFeePerGas = s), (t[x(1445)] = s);
            } else
              t.maxFeePerGas == null && (t[x(1042)] = a[x(1042)]),
                t[x(1445)] == null && (t[x(1445)] = a[x(1445)]);
          else
            a[x(1772)] != null
              ? (r &&
                  Px[x(304)](
                    "network does not support EIP-1559",
                    T[x(1169)][x(854)],
                    { operation: x(579) }
                  ),
                t[x(1772)] == null && (t[x(1772)] = a[x(1772)]),
                (t.type = 0))
              : Px[x(304)](x(796), T.errors[x(854)], { operation: x(662) });
        else
          t[x(577)] === 2 &&
            (t[x(1042)] == null && (t[x(1042)] = a[x(1042)]),
            t[x(1445)] == null && (t[x(1445)] = a.maxPriorityFeePerGas));
      }
      return (
        t[x(1361)] == null && (t[x(1361)] = this[x(1590)](x(565))),
        t.gasLimit == null &&
          (t[x(1550)] = this.estimateGas(t)[x(1083)]((a) => {
            var s = x;
            if (Kc[s(1532)](a[s(585)]) >= 0) throw a;
            return Px.throwError(s(1307), T[s(1169)].UNPREDICTABLE_GAS_LIMIT, {
              error: a,
              tx: t,
            });
          })),
        t[x(1923)] == null
          ? (t[x(1923)] = this[x(1725)]())
          : (t[x(1923)] = Promise[x(1149)]([
              Promise[x(620)](t[x(1923)]),
              this[x(1725)](),
            ])[x(1494)]((a) => {
              var s = x;
              return (
                a[1] !== 0 && a[0] !== a[1] && Px[s(1839)](s(1465), s(1785), e),
                a[0]
              );
            })),
        yield xx(t)
      );
    });
  }
  [c(789)](e) {
    var x = c;
    !this.provider &&
      Px.throwError("missing provider", T[x(1169)][x(854)], {
        operation: e || "_checkProvider",
      });
  }
  static [c(1682)](e) {
    var x = c;
    return !!(e && e[x(1406)]);
  }
}
class Rr extends se {
  constructor(e, x) {
    var t = c;
    super(), F(this, "address", e), F(this, t(1362), x || null);
  }
  [c(471)]() {
    return Promise.resolve(this.address);
  }
  [c(245)](e, x) {
    var t = c;
    return Promise.resolve()[t(1494)](() => {
      var r = t;
      Px[r(304)](e, T[r(1169)][r(854)], { operation: x });
    });
  }
  [c(190)](e) {
    var x = c;
    return this[x(245)](x(1188), x(190));
  }
  [c(1918)](e) {
    var x = c;
    return this[x(245)]("VoidSigner cannot sign transactions", x(1918));
  }
  [c(722)](e, x, t) {
    var r = c;
    return this[r(245)](r(1452), r(200));
  }
  [c(1727)](e) {
    var x = c;
    return new Rr(this[x(1531)], e);
  }
}
var Qi = { exports: {} };
(function (n) {
  (function (e, x) {
    var t = O;
    function r(w, f) {
      var i = O;
      if (!w) throw new Error(f || i(1824));
    }
    function a(w, f) {
      var i = O;
      w[i(735)] = f;
      var h = function () {};
      (h.prototype = f.prototype),
        (w.prototype = new h()),
        (w.prototype[i(891)] = w);
    }
    function s(w, f, i) {
      var h = O;
      if (s[h(1156)](w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this[h(152)] = 0),
        (this[h(1484)] = null),
        w !== null &&
          ((f === "le" || f === "be") && ((i = f), (f = 10)),
          this[h(150)](w || 0, f || 10, i || "be"));
    }
    typeof e === t(661) ? (e[t(1980)] = s) : (x.BN = s),
      (s.BN = s),
      (s.wordSize = 26);
    var d;
    try {
      typeof window != "undefined" && typeof window[t(1888)] !== t(1333)
        ? (d = window[t(1888)])
        : (d = ai.Buffer);
    } catch (w) {}
    (s[t(1156)] = function (f) {
      var i = t;
      return f instanceof s
        ? !![]
        : f !== null &&
            typeof f === i(661) &&
            f[i(891)][i(1798)] === s[i(1798)] &&
            Array[i(1900)](f[i(1070)]);
    }),
      (s[t(521)] = function (f, i) {
        var h = t;
        return f[h(1999)](i) > 0 ? f : i;
      }),
      (s[t(1403)] = function (f, i) {
        var h = t;
        return f[h(1999)](i) < 0 ? f : i;
      }),
      (s[t(1024)][t(150)] = function (f, i, h) {
        var o = t;
        if (typeof f === o(456)) return this[o(1402)](f, i, h);
        if (typeof f == "object") return this._initArray(f, i, h);
        i === "hex" && (i = 16),
          r(i === (i | 0) && i >= 2 && i <= 36),
          (f = f.toString().replace(/\s+/g, ""));
        var y = 0;
        f[0] === "-" && (y++, (this[o(870)] = 1)),
          y < f[o(152)] &&
            (i === 16
              ? this[o(1860)](f, y, h)
              : (this[o(1252)](f, i, y),
                h === "le" && this[o(313)](this[o(947)](), i, h)));
      }),
      (s[t(1024)][t(1402)] = function (f, i, h) {
        var o = t;
        f < 0 && ((this.negative = 1), (f = -f)),
          f < 67108864
            ? ((this[o(1070)] = [f & 67108863]), (this[o(152)] = 1))
            : f < 4503599627370496
            ? ((this[o(1070)] = [f & 67108863, (f / 67108864) & 67108863]),
              (this.length = 2))
            : (r(f < 9007199254740992),
              (this[o(1070)] = [f & 67108863, (f / 67108864) & 67108863, 1]),
              (this[o(152)] = 3)),
          h === "le" && this[o(313)](this[o(947)](), i, h);
      }),
      (s.prototype[t(313)] = function (f, i, h) {
        var o = t;
        if ((r(typeof f[o(152)] === o(456)), f[o(152)] <= 0))
          return (this[o(1070)] = [0]), (this[o(152)] = 1), this;
        (this[o(152)] = Math[o(1277)](f[o(152)] / 3)),
          (this[o(1070)] = new Array(this[o(152)]));
        for (var y = 0; y < this.length; y++) this[o(1070)][y] = 0;
        var M,
          E,
          A = 0;
        if (h === "be")
          for (y = f[o(152)] - 1, M = 0; y >= 0; y -= 3)
            (E = f[y] | (f[y - 1] << 8) | (f[y - 2] << 16)),
              (this.words[M] |= (E << A) & 67108863),
              (this[o(1070)][M + 1] = (E >>> (26 - A)) & 67108863),
              (A += 24),
              A >= 26 && ((A -= 26), M++);
        else if (h === "le")
          for (y = 0, M = 0; y < f[o(152)]; y += 3)
            (E = f[y] | (f[y + 1] << 8) | (f[y + 2] << 16)),
              (this[o(1070)][M] |= (E << A) & 67108863),
              (this[o(1070)][M + 1] = (E >>> (26 - A)) & 67108863),
              (A += 24),
              A >= 26 && ((A -= 26), M++);
        return this._strip();
      });
    function l(w, f) {
      var i = t,
        h = w.charCodeAt(f);
      if (h >= 48 && h <= 57) return h - 48;
      if (h >= 65 && h <= 70) return h - 55;
      if (h >= 97 && h <= 102) return h - 87;
      r(![], i(1471) + w);
    }
    function v(w, f, i) {
      var h = l(w, i);
      return i - 1 >= f && (h |= l(w, i - 1) << 4), h;
    }
    s.prototype[t(1860)] = function (f, i, h) {
      var o = t;
      (this.length = Math[o(1277)]((f[o(152)] - i) / 6)),
        (this[o(1070)] = new Array(this[o(152)]));
      for (var y = 0; y < this.length; y++) this[o(1070)][y] = 0;
      var M = 0,
        E = 0,
        A;
      if (h === "be")
        for (y = f[o(152)] - 1; y >= i; y -= 2)
          (A = v(f, i, y) << M),
            (this[o(1070)][E] |= A & 67108863),
            M >= 18
              ? ((M -= 18), (E += 1), (this[o(1070)][E] |= A >>> 26))
              : (M += 8);
      else {
        var b = f[o(152)] - i;
        for (y = b % 2 === 0 ? i + 1 : i; y < f[o(152)]; y += 2)
          (A = v(f, i, y) << M),
            (this.words[E] |= A & 67108863),
            M >= 18
              ? ((M -= 18), (E += 1), (this[o(1070)][E] |= A >>> 26))
              : (M += 8);
      }
      this[o(678)]();
    };
    function m(w, f, i, h) {
      for (
        var o = t, y = 0, M = 0, E = Math.min(w[o(152)], i), A = f;
        A < E;
        A++
      ) {
        var b = w[o(501)](A) - 48;
        (y *= h),
          b >= 49 ? (M = b - 49 + 10) : b >= 17 ? (M = b - 17 + 10) : (M = b),
          r(b >= 0 && M < h, o(1178)),
          (y += M);
      }
      return y;
    }
    (s.prototype[t(1252)] = function (f, i, h) {
      var o = t;
      (this.words = [0]), (this[o(152)] = 1);
      for (var y = 0, M = 1; M <= 67108863; M *= i) y++;
      y--, (M = (M / i) | 0);
      for (
        var E = f[o(152)] - h,
          A = E % y,
          b = Math[o(1403)](E, E - A) + h,
          u = 0,
          p = h;
        p < b;
        p += y
      )
        (u = m(f, p, p + y, i)),
          this[o(945)](M),
          this[o(1070)][0] + u < 67108864
            ? (this.words[0] += u)
            : this[o(1520)](u);
      if (A !== 0) {
        var N = 1;
        for (u = m(f, p, f[o(152)], i), p = 0; p < A; p++) N *= i;
        this.imuln(N),
          this[o(1070)][0] + u < 67108864
            ? (this[o(1070)][0] += u)
            : this._iaddn(u);
      }
      this._strip();
    }),
      (s.prototype[t(301)] = function (f) {
        var i = t;
        f.words = new Array(this[i(152)]);
        for (var h = 0; h < this.length; h++) f[i(1070)][h] = this.words[h];
        (f[i(152)] = this[i(152)]),
          (f[i(870)] = this[i(870)]),
          (f.red = this.red);
      });
    function g(w, f) {
      var i = t;
      (w[i(1070)] = f.words),
        (w[i(152)] = f[i(152)]),
        (w[i(870)] = f.negative),
        (w[i(1484)] = f.red);
    }
    if (
      ((s.prototype[t(1032)] = function (f) {
        g(f, this);
      }),
      (s[t(1024)][t(307)] = function () {
        var f = new s(null);
        return this.copy(f), f;
      }),
      (s[t(1024)][t(1777)] = function (f) {
        for (var i = t; this[i(152)] < f; ) this.words[this[i(152)]++] = 0;
        return this;
      }),
      (s[t(1024)][t(678)] = function () {
        for (
          var f = t;
          this.length > 1 && this[f(1070)][this[f(152)] - 1] === 0;

        )
          this.length--;
        return this[f(199)]();
      }),
      (s[t(1024)][t(199)] = function () {
        var f = t;
        return (
          this[f(152)] === 1 && this[f(1070)][0] === 0 && (this[f(870)] = 0),
          this
        );
      }),
      typeof Symbol != "undefined" && typeof Symbol[t(1654)] === t(289))
    )
      try {
        s[t(1024)][Symbol.for(t(1489))] = k;
      } catch (w) {
        s[t(1024)][t(1466)] = k;
      }
    else s[t(1024)].inspect = k;
    function k() {
      var w = t;
      return (this[w(1484)] ? w(1246) : w(309)) + this[w(1628)](16) + ">";
    }
    var S = [
        "",
        "0",
        "00",
        "000",
        t(287),
        t(171),
        t(1990),
        "0000000",
        t(1446),
        "000000000",
        "0000000000",
        t(413),
        t(1451),
        t(1098),
        t(535),
        t(1668),
        t(1212),
        t(1662),
        t(1726),
        t(994),
        t(441),
        t(1054),
        t(1025),
        t(935),
        t(1497),
        "0000000000000000000000000",
      ],
      B = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      R = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s[t(1024)][t(1628)] = function (f, i) {
      var h = t;
      (f = f || 10), (i = i | 0 || 1);
      var o;
      if (f === 16 || f === h(622)) {
        o = "";
        for (var y = 0, M = 0, E = 0; E < this[h(152)]; E++) {
          var A = this.words[E],
            b = (((A << y) | M) & 16777215)[h(1628)](16);
          (M = (A >>> (24 - y)) & 16777215),
            (y += 2),
            y >= 26 && ((y -= 26), E--),
            M !== 0 || E !== this.length - 1
              ? (o = S[6 - b[h(152)]] + b + o)
              : (o = b + o);
        }
        for (M !== 0 && (o = M[h(1628)](16) + o); o[h(152)] % i !== 0; )
          o = "0" + o;
        return this[h(870)] !== 0 && (o = "-" + o), o;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var u = B[f],
          p = R[f];
        o = "";
        var N = this.clone();
        for (N[h(870)] = 0; !N[h(770)](); ) {
          var C = N[h(841)](p)[h(1628)](f);
          (N = N[h(1476)](p)),
            N[h(770)]() ? (o = C + o) : (o = S[u - C[h(152)]] + C + o);
        }
        for (this[h(770)]() && (o = "0" + o); o[h(152)] % i !== 0; )
          o = "0" + o;
        return this[h(870)] !== 0 && (o = "-" + o), o;
      }
      r(![], h(602));
    }),
      (s[t(1024)][t(1919)] = function () {
        var f = t,
          i = this[f(1070)][0];
        return (
          this[f(152)] === 2
            ? (i += this[f(1070)][1] * 67108864)
            : this[f(152)] === 3 && this[f(1070)][2] === 1
            ? (i += 4503599627370496 + this.words[1] * 67108864)
            : this[f(152)] > 2 && r(![], f(1003)),
          this[f(870)] !== 0 ? -i : i
        );
      }),
      (s[t(1024)].toJSON = function () {
        var f = t;
        return this[f(1628)](16, 2);
      }),
      d &&
        (s[t(1024)].toBuffer = function (f, i) {
          var h = t;
          return this[h(158)](d, f, i);
        }),
      (s.prototype[t(947)] = function (f, i) {
        var h = t;
        return this[h(158)](Array, f, i);
      });
    var D = function (f, i) {
      var h = t;
      return f[h(367)] ? f[h(367)](i) : new f(i);
    };
    (s[t(1024)][t(158)] = function (f, i, h) {
      var o = t;
      this[o(678)]();
      var y = this[o(234)](),
        M = h || Math[o(521)](1, y);
      r(y <= M, o(831)), r(M > 0, o(409));
      var E = D(f, M),
        A = i === "le" ? "LE" : "BE";
      return this[o(448) + A](E, y), E;
    }),
      (s[t(1024)][t(1157)] = function (f, i) {
        for (var h = t, o = 0, y = 0, M = 0, E = 0; M < this.length; M++) {
          var A = (this.words[M] << E) | y;
          (f[o++] = A & 255),
            o < f.length && (f[o++] = (A >> 8) & 255),
            o < f.length && (f[o++] = (A >> 16) & 255),
            E === 6
              ? (o < f[h(152)] && (f[o++] = (A >> 24) & 255), (y = 0), (E = 0))
              : ((y = A >>> 24), (E += 2));
        }
        if (o < f[h(152)]) for (f[o++] = y; o < f[h(152)]; ) f[o++] = 0;
      }),
      (s[t(1024)]._toArrayLikeBE = function (f, i) {
        for (
          var h = t, o = f[h(152)] - 1, y = 0, M = 0, E = 0;
          M < this[h(152)];
          M++
        ) {
          var A = (this[h(1070)][M] << E) | y;
          (f[o--] = A & 255),
            o >= 0 && (f[o--] = (A >> 8) & 255),
            o >= 0 && (f[o--] = (A >> 16) & 255),
            E === 6
              ? (o >= 0 && (f[o--] = (A >> 24) & 255), (y = 0), (E = 0))
              : ((y = A >>> 24), (E += 2));
        }
        if (o >= 0) for (f[o--] = y; o >= 0; ) f[o--] = 0;
      }),
      Math[t(691)]
        ? (s.prototype[t(731)] = function (f) {
            var i = t;
            return 32 - Math[i(691)](f);
          })
        : (s.prototype._countBits = function (f) {
            var i = f,
              h = 0;
            return (
              i >= 4096 && ((h += 13), (i >>>= 13)),
              i >= 64 && ((h += 7), (i >>>= 7)),
              i >= 8 && ((h += 4), (i >>>= 4)),
              i >= 2 && ((h += 2), (i >>>= 2)),
              h + i
            );
          }),
      (s.prototype[t(1834)] = function (f) {
        if (f === 0) return 26;
        var i = f,
          h = 0;
        return (
          (i & 8191) === 0 && ((h += 13), (i >>>= 13)),
          (i & 127) === 0 && ((h += 7), (i >>>= 7)),
          (i & 15) === 0 && ((h += 4), (i >>>= 4)),
          (i & 3) === 0 && ((h += 2), (i >>>= 2)),
          (i & 1) === 0 && h++,
          h
        );
      }),
      (s[t(1024)][t(1044)] = function () {
        var f = t,
          i = this[f(1070)][this.length - 1],
          h = this[f(731)](i);
        return (this[f(152)] - 1) * 26 + h;
      });
    function P(w) {
      for (var f = t, i = new Array(w[f(1044)]()), h = 0; h < i.length; h++) {
        var o = (h / 26) | 0,
          y = h % 26;
        i[h] = (w[f(1070)][o] >>> y) & 1;
      }
      return i;
    }
    (s[t(1024)][t(1581)] = function () {
      var f = t;
      if (this.isZero()) return 0;
      for (var i = 0, h = 0; h < this[f(152)]; h++) {
        var o = this[f(1834)](this[f(1070)][h]);
        if (((i += o), o !== 26)) break;
      }
      return i;
    }),
      (s[t(1024)][t(234)] = function () {
        var f = t;
        return Math[f(1277)](this.bitLength() / 8);
      }),
      (s[t(1024)][t(1810)] = function (f) {
        var i = t;
        return this.negative !== 0
          ? this[i(238)]()[i(885)](f)[i(820)](1)
          : this[i(307)]();
      }),
      (s[t(1024)].fromTwos = function (f) {
        var i = t;
        return this[i(966)](f - 1)
          ? this[i(1883)](f)[i(820)](1)[i(993)]()
          : this.clone();
      }),
      (s[t(1024)][t(470)] = function () {
        var f = t;
        return this[f(870)] !== 0;
      }),
      (s[t(1024)][t(840)] = function () {
        var f = t;
        return this[f(307)]()[f(993)]();
      }),
      (s[t(1024)][t(993)] = function () {
        var f = t;
        return !this[f(770)]() && (this[f(870)] ^= 1), this;
      }),
      (s[t(1024)][t(1849)] = function (f) {
        for (var i = t; this[i(152)] < f[i(152)]; )
          this[i(1070)][this[i(152)]++] = 0;
        for (var h = 0; h < f.length; h++)
          this[i(1070)][h] = this[i(1070)][h] | f.words[h];
        return this[i(678)]();
      }),
      (s[t(1024)][t(708)] = function (f) {
        var i = t;
        return r((this[i(870)] | f[i(870)]) === 0), this[i(1849)](f);
      }),
      (s[t(1024)].or = function (f) {
        var i = t;
        return this.length > f.length
          ? this.clone()[i(708)](f)
          : f[i(307)]()[i(708)](this);
      }),
      (s[t(1024)].uor = function (f) {
        var i = t;
        return this.length > f[i(152)]
          ? this[i(307)]()[i(1849)](f)
          : f[i(307)]()[i(1849)](this);
      }),
      (s.prototype[t(1016)] = function (f) {
        var i = t,
          h;
        this[i(152)] > f[i(152)] ? (h = f) : (h = this);
        for (var o = 0; o < h.length; o++)
          this[i(1070)][o] = this[i(1070)][o] & f.words[o];
        return (this[i(152)] = h.length), this[i(678)]();
      }),
      (s[t(1024)].iand = function (f) {
        var i = t;
        return r((this[i(870)] | f.negative) === 0), this.iuand(f);
      }),
      (s[t(1024)][t(907)] = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(420)](f)
          : f.clone().iand(this);
      }),
      (s.prototype.uand = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(1016)](f)
          : f.clone().iuand(this);
      }),
      (s[t(1024)].iuxor = function (f) {
        var i = t,
          h,
          o;
        this[i(152)] > f.length ? ((h = this), (o = f)) : ((h = f), (o = this));
        for (var y = 0; y < o[i(152)]; y++)
          this[i(1070)][y] = h[i(1070)][y] ^ o[i(1070)][y];
        if (this !== h)
          for (; y < h.length; y++) this[i(1070)][y] = h[i(1070)][y];
        return (this[i(152)] = h[i(152)]), this[i(678)]();
      }),
      (s[t(1024)][t(646)] = function (f) {
        var i = t;
        return r((this[i(870)] | f[i(870)]) === 0), this.iuxor(f);
      }),
      (s[t(1024)][t(333)] = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]()[i(646)](f)
          : f[i(307)]()[i(646)](this);
      }),
      (s[t(1024)].uxor = function (f) {
        var i = t;
        return this[i(152)] > f[i(152)]
          ? this[i(307)]().iuxor(f)
          : f.clone()[i(621)](this);
      }),
      (s[t(1024)].inotn = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = Math[i(1277)](f / 26) | 0,
          o = f % 26;
        this[i(1777)](h), o > 0 && h--;
        for (var y = 0; y < h; y++)
          this[i(1070)][y] = ~this[i(1070)][y] & 67108863;
        return (
          o > 0 &&
            (this[i(1070)][y] = ~this[i(1070)][y] & (67108863 >> (26 - o))),
          this._strip()
        );
      }),
      (s[t(1024)][t(1883)] = function (f) {
        return this.clone().inotn(f);
      }),
      (s.prototype[t(185)] = function (f, i) {
        var h = t;
        r(typeof f === h(456) && f >= 0);
        var o = (f / 26) | 0,
          y = f % 26;
        return (
          this[h(1777)](o + 1),
          i
            ? (this[h(1070)][o] = this[h(1070)][o] | (1 << y))
            : (this[h(1070)][o] = this[h(1070)][o] & ~(1 << y)),
          this[h(678)]()
        );
      }),
      (s[t(1024)][t(371)] = function (f) {
        var i = t,
          h;
        if (this.negative !== 0 && f[i(870)] === 0)
          return (
            (this[i(870)] = 0),
            (h = this.isub(f)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this[i(870)] === 0 && f[i(870)] !== 0)
          return (
            (f[i(870)] = 0), (h = this.isub(f)), (f[i(870)] = 1), h[i(199)]()
          );
        var o, y;
        this[i(152)] > f[i(152)]
          ? ((o = this), (y = f))
          : ((o = f), (y = this));
        for (var M = 0, E = 0; E < y[i(152)]; E++)
          (h = (o[i(1070)][E] | 0) + (y[i(1070)][E] | 0) + M),
            (this[i(1070)][E] = h & 67108863),
            (M = h >>> 26);
        for (; M !== 0 && E < o.length; E++)
          (h = (o[i(1070)][E] | 0) + M),
            (this[i(1070)][E] = h & 67108863),
            (M = h >>> 26);
        if (((this[i(152)] = o.length), M !== 0))
          (this[i(1070)][this[i(152)]] = M), this.length++;
        else if (o !== this)
          for (; E < o.length; E++) this[i(1070)][E] = o[i(1070)][E];
        return this;
      }),
      (s[t(1024)][t(1607)] = function (f) {
        var i = t,
          h;
        return f[i(870)] !== 0 && this[i(870)] === 0
          ? ((f[i(870)] = 0), (h = this[i(440)](f)), (f[i(870)] ^= 1), h)
          : f[i(870)] === 0 && this[i(870)] !== 0
          ? ((this[i(870)] = 0), (h = f[i(440)](this)), (this[i(870)] = 1), h)
          : this[i(152)] > f.length
          ? this.clone()[i(371)](f)
          : f[i(307)]().iadd(this);
      }),
      (s.prototype[t(1511)] = function (f) {
        var i = t;
        if (f[i(870)] !== 0) {
          f.negative = 0;
          var h = this[i(371)](f);
          return (f[i(870)] = 1), h[i(199)]();
        } else if (this[i(870)] !== 0)
          return (
            (this[i(870)] = 0),
            this[i(371)](f),
            (this[i(870)] = 1),
            this[i(199)]()
          );
        var o = this[i(1999)](f);
        if (o === 0)
          return (
            (this.negative = 0),
            (this[i(152)] = 1),
            (this[i(1070)][0] = 0),
            this
          );
        var y, M;
        o > 0 ? ((y = this), (M = f)) : ((y = f), (M = this));
        for (var E = 0, A = 0; A < M.length; A++)
          (h = (y.words[A] | 0) - (M[i(1070)][A] | 0) + E),
            (E = h >> 26),
            (this[i(1070)][A] = h & 67108863);
        for (; E !== 0 && A < y[i(152)]; A++)
          (h = (y[i(1070)][A] | 0) + E),
            (E = h >> 26),
            (this[i(1070)][A] = h & 67108863);
        if (E === 0 && A < y[i(152)] && y !== this)
          for (; A < y[i(152)]; A++) this[i(1070)][A] = y[i(1070)][A];
        return (
          (this[i(152)] = Math[i(521)](this.length, A)),
          y !== this && (this.negative = 1),
          this[i(678)]()
        );
      }),
      (s[t(1024)][t(440)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1511)](f);
      });
    function I(w, f, i) {
      var h = t;
      i[h(870)] = f[h(870)] ^ w[h(870)];
      var o = (w[h(152)] + f[h(152)]) | 0;
      (i[h(152)] = o), (o = (o - 1) | 0);
      var y = w[h(1070)][0] | 0,
        M = f[h(1070)][0] | 0,
        E = y * M,
        A = E & 67108863,
        b = (E / 67108864) | 0;
      i[h(1070)][0] = A;
      for (var u = 1; u < o; u++) {
        for (
          var p = b >>> 26,
            N = b & 67108863,
            C = Math[h(1403)](u, f[h(152)] - 1),
            U = Math[h(521)](0, u - w[h(152)] + 1);
          U <= C;
          U++
        ) {
          var Q = (u - U) | 0;
          (y = w[h(1070)][Q] | 0),
            (M = f[h(1070)][U] | 0),
            (E = y * M + N),
            (p += (E / 67108864) | 0),
            (N = E & 67108863);
        }
        (i[h(1070)][u] = N | 0), (b = p | 0);
      }
      return b !== 0 ? (i[h(1070)][u] = b | 0) : i[h(152)]--, i[h(678)]();
    }
    var K = function (f, i, h) {
      var o = t,
        y = f[o(1070)],
        M = i[o(1070)],
        E = h.words,
        A = 0,
        b,
        u,
        p,
        N = y[0] | 0,
        C = N & 8191,
        U = N >>> 13,
        Q = y[1] | 0,
        J = Q & 8191,
        W = Q >>> 13,
        rx = y[2] | 0,
        _ = rx & 8191,
        e0 = rx >>> 13,
        at = y[3] | 0,
        a0 = at & 8191,
        i0 = at >>> 13,
        it = y[4] | 0,
        s0 = it & 8191,
        f0 = it >>> 13,
        st = y[5] | 0,
        c0 = st & 8191,
        o0 = st >>> 13,
        ft = y[6] | 0,
        u0 = ft & 8191,
        h0 = ft >>> 13,
        ct = y[7] | 0,
        d0 = ct & 8191,
        l0 = ct >>> 13,
        ot = y[8] | 0,
        b0 = ot & 8191,
        v0 = ot >>> 13,
        ut = y[9] | 0,
        p0 = ut & 8191,
        m0 = ut >>> 13,
        ht = M[0] | 0,
        g0 = ht & 8191,
        y0 = ht >>> 13,
        dt = M[1] | 0,
        w0 = dt & 8191,
        A0 = dt >>> 13,
        lt = M[2] | 0,
        M0 = lt & 8191,
        E0 = lt >>> 13,
        bt = M[3] | 0,
        k0 = bt & 8191,
        S0 = bt >>> 13,
        vt = M[4] | 0,
        P0 = vt & 8191,
        C0 = vt >>> 13,
        pt = M[5] | 0,
        B0 = pt & 8191,
        T0 = pt >>> 13,
        mt = M[6] | 0,
        I0 = mt & 8191,
        N0 = mt >>> 13,
        gt = M[7] | 0,
        R0 = gt & 8191,
        O0 = gt >>> 13,
        yt = M[8] | 0,
        D0 = yt & 8191,
        F0 = yt >>> 13,
        wt = M[9] | 0,
        U0 = wt & 8191,
        L0 = wt >>> 13;
      (h[o(870)] = f[o(870)] ^ i[o(870)]),
        (h[o(152)] = 19),
        (b = Math[o(706)](C, g0)),
        (u = Math[o(706)](C, y0)),
        (u = (u + Math.imul(U, g0)) | 0),
        (p = Math[o(706)](U, y0));
      var ce = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ce >>> 26)) | 0),
        (ce &= 67108863),
        (b = Math.imul(J, g0)),
        (u = Math[o(706)](J, y0)),
        (u = (u + Math[o(706)](W, g0)) | 0),
        (p = Math[o(706)](W, y0)),
        (b = (b + Math[o(706)](C, w0)) | 0),
        (u = (u + Math[o(706)](C, A0)) | 0),
        (u = (u + Math[o(706)](U, w0)) | 0),
        (p = (p + Math[o(706)](U, A0)) | 0);
      var oe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (oe >>> 26)) | 0),
        (oe &= 67108863),
        (b = Math[o(706)](_, g0)),
        (u = Math[o(706)](_, y0)),
        (u = (u + Math[o(706)](e0, g0)) | 0),
        (p = Math.imul(e0, y0)),
        (b = (b + Math.imul(J, w0)) | 0),
        (u = (u + Math.imul(J, A0)) | 0),
        (u = (u + Math.imul(W, w0)) | 0),
        (p = (p + Math.imul(W, A0)) | 0),
        (b = (b + Math[o(706)](C, M0)) | 0),
        (u = (u + Math.imul(C, E0)) | 0),
        (u = (u + Math[o(706)](U, M0)) | 0),
        (p = (p + Math.imul(U, E0)) | 0);
      var ue = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ue >>> 26)) | 0),
        (ue &= 67108863),
        (b = Math[o(706)](a0, g0)),
        (u = Math[o(706)](a0, y0)),
        (u = (u + Math.imul(i0, g0)) | 0),
        (p = Math.imul(i0, y0)),
        (b = (b + Math[o(706)](_, w0)) | 0),
        (u = (u + Math[o(706)](_, A0)) | 0),
        (u = (u + Math[o(706)](e0, w0)) | 0),
        (p = (p + Math[o(706)](e0, A0)) | 0),
        (b = (b + Math.imul(J, M0)) | 0),
        (u = (u + Math[o(706)](J, E0)) | 0),
        (u = (u + Math.imul(W, M0)) | 0),
        (p = (p + Math[o(706)](W, E0)) | 0),
        (b = (b + Math[o(706)](C, k0)) | 0),
        (u = (u + Math[o(706)](C, S0)) | 0),
        (u = (u + Math[o(706)](U, k0)) | 0),
        (p = (p + Math[o(706)](U, S0)) | 0);
      var he = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (he >>> 26)) | 0),
        (he &= 67108863),
        (b = Math[o(706)](s0, g0)),
        (u = Math[o(706)](s0, y0)),
        (u = (u + Math[o(706)](f0, g0)) | 0),
        (p = Math[o(706)](f0, y0)),
        (b = (b + Math[o(706)](a0, w0)) | 0),
        (u = (u + Math.imul(a0, A0)) | 0),
        (u = (u + Math[o(706)](i0, w0)) | 0),
        (p = (p + Math[o(706)](i0, A0)) | 0),
        (b = (b + Math[o(706)](_, M0)) | 0),
        (u = (u + Math.imul(_, E0)) | 0),
        (u = (u + Math.imul(e0, M0)) | 0),
        (p = (p + Math[o(706)](e0, E0)) | 0),
        (b = (b + Math[o(706)](J, k0)) | 0),
        (u = (u + Math[o(706)](J, S0)) | 0),
        (u = (u + Math[o(706)](W, k0)) | 0),
        (p = (p + Math[o(706)](W, S0)) | 0),
        (b = (b + Math[o(706)](C, P0)) | 0),
        (u = (u + Math[o(706)](C, C0)) | 0),
        (u = (u + Math[o(706)](U, P0)) | 0),
        (p = (p + Math[o(706)](U, C0)) | 0);
      var de = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (de >>> 26)) | 0),
        (de &= 67108863),
        (b = Math[o(706)](c0, g0)),
        (u = Math[o(706)](c0, y0)),
        (u = (u + Math[o(706)](o0, g0)) | 0),
        (p = Math.imul(o0, y0)),
        (b = (b + Math[o(706)](s0, w0)) | 0),
        (u = (u + Math[o(706)](s0, A0)) | 0),
        (u = (u + Math[o(706)](f0, w0)) | 0),
        (p = (p + Math.imul(f0, A0)) | 0),
        (b = (b + Math.imul(a0, M0)) | 0),
        (u = (u + Math[o(706)](a0, E0)) | 0),
        (u = (u + Math.imul(i0, M0)) | 0),
        (p = (p + Math[o(706)](i0, E0)) | 0),
        (b = (b + Math[o(706)](_, k0)) | 0),
        (u = (u + Math[o(706)](_, S0)) | 0),
        (u = (u + Math.imul(e0, k0)) | 0),
        (p = (p + Math[o(706)](e0, S0)) | 0),
        (b = (b + Math[o(706)](J, P0)) | 0),
        (u = (u + Math[o(706)](J, C0)) | 0),
        (u = (u + Math.imul(W, P0)) | 0),
        (p = (p + Math[o(706)](W, C0)) | 0),
        (b = (b + Math[o(706)](C, B0)) | 0),
        (u = (u + Math.imul(C, T0)) | 0),
        (u = (u + Math[o(706)](U, B0)) | 0),
        (p = (p + Math[o(706)](U, T0)) | 0);
      var le = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (le >>> 26)) | 0),
        (le &= 67108863),
        (b = Math[o(706)](u0, g0)),
        (u = Math.imul(u0, y0)),
        (u = (u + Math[o(706)](h0, g0)) | 0),
        (p = Math.imul(h0, y0)),
        (b = (b + Math[o(706)](c0, w0)) | 0),
        (u = (u + Math[o(706)](c0, A0)) | 0),
        (u = (u + Math[o(706)](o0, w0)) | 0),
        (p = (p + Math[o(706)](o0, A0)) | 0),
        (b = (b + Math[o(706)](s0, M0)) | 0),
        (u = (u + Math[o(706)](s0, E0)) | 0),
        (u = (u + Math.imul(f0, M0)) | 0),
        (p = (p + Math[o(706)](f0, E0)) | 0),
        (b = (b + Math[o(706)](a0, k0)) | 0),
        (u = (u + Math.imul(a0, S0)) | 0),
        (u = (u + Math[o(706)](i0, k0)) | 0),
        (p = (p + Math.imul(i0, S0)) | 0),
        (b = (b + Math[o(706)](_, P0)) | 0),
        (u = (u + Math[o(706)](_, C0)) | 0),
        (u = (u + Math[o(706)](e0, P0)) | 0),
        (p = (p + Math[o(706)](e0, C0)) | 0),
        (b = (b + Math[o(706)](J, B0)) | 0),
        (u = (u + Math[o(706)](J, T0)) | 0),
        (u = (u + Math[o(706)](W, B0)) | 0),
        (p = (p + Math[o(706)](W, T0)) | 0),
        (b = (b + Math[o(706)](C, I0)) | 0),
        (u = (u + Math[o(706)](C, N0)) | 0),
        (u = (u + Math[o(706)](U, I0)) | 0),
        (p = (p + Math[o(706)](U, N0)) | 0);
      var be = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (be >>> 26)) | 0),
        (be &= 67108863),
        (b = Math[o(706)](d0, g0)),
        (u = Math.imul(d0, y0)),
        (u = (u + Math.imul(l0, g0)) | 0),
        (p = Math[o(706)](l0, y0)),
        (b = (b + Math[o(706)](u0, w0)) | 0),
        (u = (u + Math[o(706)](u0, A0)) | 0),
        (u = (u + Math[o(706)](h0, w0)) | 0),
        (p = (p + Math[o(706)](h0, A0)) | 0),
        (b = (b + Math[o(706)](c0, M0)) | 0),
        (u = (u + Math[o(706)](c0, E0)) | 0),
        (u = (u + Math[o(706)](o0, M0)) | 0),
        (p = (p + Math.imul(o0, E0)) | 0),
        (b = (b + Math[o(706)](s0, k0)) | 0),
        (u = (u + Math[o(706)](s0, S0)) | 0),
        (u = (u + Math[o(706)](f0, k0)) | 0),
        (p = (p + Math[o(706)](f0, S0)) | 0),
        (b = (b + Math[o(706)](a0, P0)) | 0),
        (u = (u + Math[o(706)](a0, C0)) | 0),
        (u = (u + Math.imul(i0, P0)) | 0),
        (p = (p + Math[o(706)](i0, C0)) | 0),
        (b = (b + Math[o(706)](_, B0)) | 0),
        (u = (u + Math.imul(_, T0)) | 0),
        (u = (u + Math[o(706)](e0, B0)) | 0),
        (p = (p + Math[o(706)](e0, T0)) | 0),
        (b = (b + Math[o(706)](J, I0)) | 0),
        (u = (u + Math[o(706)](J, N0)) | 0),
        (u = (u + Math[o(706)](W, I0)) | 0),
        (p = (p + Math[o(706)](W, N0)) | 0),
        (b = (b + Math[o(706)](C, R0)) | 0),
        (u = (u + Math[o(706)](C, O0)) | 0),
        (u = (u + Math[o(706)](U, R0)) | 0),
        (p = (p + Math.imul(U, O0)) | 0);
      var ve = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ve >>> 26)) | 0),
        (ve &= 67108863),
        (b = Math[o(706)](b0, g0)),
        (u = Math[o(706)](b0, y0)),
        (u = (u + Math[o(706)](v0, g0)) | 0),
        (p = Math.imul(v0, y0)),
        (b = (b + Math[o(706)](d0, w0)) | 0),
        (u = (u + Math[o(706)](d0, A0)) | 0),
        (u = (u + Math[o(706)](l0, w0)) | 0),
        (p = (p + Math.imul(l0, A0)) | 0),
        (b = (b + Math[o(706)](u0, M0)) | 0),
        (u = (u + Math[o(706)](u0, E0)) | 0),
        (u = (u + Math[o(706)](h0, M0)) | 0),
        (p = (p + Math[o(706)](h0, E0)) | 0),
        (b = (b + Math.imul(c0, k0)) | 0),
        (u = (u + Math[o(706)](c0, S0)) | 0),
        (u = (u + Math[o(706)](o0, k0)) | 0),
        (p = (p + Math[o(706)](o0, S0)) | 0),
        (b = (b + Math[o(706)](s0, P0)) | 0),
        (u = (u + Math.imul(s0, C0)) | 0),
        (u = (u + Math[o(706)](f0, P0)) | 0),
        (p = (p + Math[o(706)](f0, C0)) | 0),
        (b = (b + Math[o(706)](a0, B0)) | 0),
        (u = (u + Math[o(706)](a0, T0)) | 0),
        (u = (u + Math[o(706)](i0, B0)) | 0),
        (p = (p + Math[o(706)](i0, T0)) | 0),
        (b = (b + Math[o(706)](_, I0)) | 0),
        (u = (u + Math[o(706)](_, N0)) | 0),
        (u = (u + Math.imul(e0, I0)) | 0),
        (p = (p + Math[o(706)](e0, N0)) | 0),
        (b = (b + Math.imul(J, R0)) | 0),
        (u = (u + Math[o(706)](J, O0)) | 0),
        (u = (u + Math[o(706)](W, R0)) | 0),
        (p = (p + Math[o(706)](W, O0)) | 0),
        (b = (b + Math.imul(C, D0)) | 0),
        (u = (u + Math.imul(C, F0)) | 0),
        (u = (u + Math[o(706)](U, D0)) | 0),
        (p = (p + Math[o(706)](U, F0)) | 0);
      var pe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (pe >>> 26)) | 0),
        (pe &= 67108863),
        (b = Math[o(706)](p0, g0)),
        (u = Math.imul(p0, y0)),
        (u = (u + Math.imul(m0, g0)) | 0),
        (p = Math[o(706)](m0, y0)),
        (b = (b + Math.imul(b0, w0)) | 0),
        (u = (u + Math[o(706)](b0, A0)) | 0),
        (u = (u + Math[o(706)](v0, w0)) | 0),
        (p = (p + Math[o(706)](v0, A0)) | 0),
        (b = (b + Math.imul(d0, M0)) | 0),
        (u = (u + Math[o(706)](d0, E0)) | 0),
        (u = (u + Math[o(706)](l0, M0)) | 0),
        (p = (p + Math[o(706)](l0, E0)) | 0),
        (b = (b + Math.imul(u0, k0)) | 0),
        (u = (u + Math[o(706)](u0, S0)) | 0),
        (u = (u + Math[o(706)](h0, k0)) | 0),
        (p = (p + Math[o(706)](h0, S0)) | 0),
        (b = (b + Math[o(706)](c0, P0)) | 0),
        (u = (u + Math.imul(c0, C0)) | 0),
        (u = (u + Math.imul(o0, P0)) | 0),
        (p = (p + Math.imul(o0, C0)) | 0),
        (b = (b + Math.imul(s0, B0)) | 0),
        (u = (u + Math[o(706)](s0, T0)) | 0),
        (u = (u + Math.imul(f0, B0)) | 0),
        (p = (p + Math.imul(f0, T0)) | 0),
        (b = (b + Math[o(706)](a0, I0)) | 0),
        (u = (u + Math[o(706)](a0, N0)) | 0),
        (u = (u + Math.imul(i0, I0)) | 0),
        (p = (p + Math.imul(i0, N0)) | 0),
        (b = (b + Math[o(706)](_, R0)) | 0),
        (u = (u + Math[o(706)](_, O0)) | 0),
        (u = (u + Math[o(706)](e0, R0)) | 0),
        (p = (p + Math[o(706)](e0, O0)) | 0),
        (b = (b + Math[o(706)](J, D0)) | 0),
        (u = (u + Math.imul(J, F0)) | 0),
        (u = (u + Math.imul(W, D0)) | 0),
        (p = (p + Math[o(706)](W, F0)) | 0),
        (b = (b + Math[o(706)](C, U0)) | 0),
        (u = (u + Math[o(706)](C, L0)) | 0),
        (u = (u + Math[o(706)](U, U0)) | 0),
        (p = (p + Math[o(706)](U, L0)) | 0);
      var me = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (me >>> 26)) | 0),
        (me &= 67108863),
        (b = Math[o(706)](p0, w0)),
        (u = Math[o(706)](p0, A0)),
        (u = (u + Math[o(706)](m0, w0)) | 0),
        (p = Math[o(706)](m0, A0)),
        (b = (b + Math[o(706)](b0, M0)) | 0),
        (u = (u + Math[o(706)](b0, E0)) | 0),
        (u = (u + Math.imul(v0, M0)) | 0),
        (p = (p + Math[o(706)](v0, E0)) | 0),
        (b = (b + Math[o(706)](d0, k0)) | 0),
        (u = (u + Math[o(706)](d0, S0)) | 0),
        (u = (u + Math[o(706)](l0, k0)) | 0),
        (p = (p + Math[o(706)](l0, S0)) | 0),
        (b = (b + Math[o(706)](u0, P0)) | 0),
        (u = (u + Math[o(706)](u0, C0)) | 0),
        (u = (u + Math[o(706)](h0, P0)) | 0),
        (p = (p + Math[o(706)](h0, C0)) | 0),
        (b = (b + Math[o(706)](c0, B0)) | 0),
        (u = (u + Math[o(706)](c0, T0)) | 0),
        (u = (u + Math[o(706)](o0, B0)) | 0),
        (p = (p + Math[o(706)](o0, T0)) | 0),
        (b = (b + Math.imul(s0, I0)) | 0),
        (u = (u + Math.imul(s0, N0)) | 0),
        (u = (u + Math[o(706)](f0, I0)) | 0),
        (p = (p + Math.imul(f0, N0)) | 0),
        (b = (b + Math.imul(a0, R0)) | 0),
        (u = (u + Math[o(706)](a0, O0)) | 0),
        (u = (u + Math.imul(i0, R0)) | 0),
        (p = (p + Math[o(706)](i0, O0)) | 0),
        (b = (b + Math[o(706)](_, D0)) | 0),
        (u = (u + Math[o(706)](_, F0)) | 0),
        (u = (u + Math[o(706)](e0, D0)) | 0),
        (p = (p + Math[o(706)](e0, F0)) | 0),
        (b = (b + Math[o(706)](J, U0)) | 0),
        (u = (u + Math[o(706)](J, L0)) | 0),
        (u = (u + Math.imul(W, U0)) | 0),
        (p = (p + Math[o(706)](W, L0)) | 0);
      var ge = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ge >>> 26)) | 0),
        (ge &= 67108863),
        (b = Math[o(706)](p0, M0)),
        (u = Math[o(706)](p0, E0)),
        (u = (u + Math[o(706)](m0, M0)) | 0),
        (p = Math[o(706)](m0, E0)),
        (b = (b + Math.imul(b0, k0)) | 0),
        (u = (u + Math.imul(b0, S0)) | 0),
        (u = (u + Math[o(706)](v0, k0)) | 0),
        (p = (p + Math.imul(v0, S0)) | 0),
        (b = (b + Math[o(706)](d0, P0)) | 0),
        (u = (u + Math.imul(d0, C0)) | 0),
        (u = (u + Math[o(706)](l0, P0)) | 0),
        (p = (p + Math[o(706)](l0, C0)) | 0),
        (b = (b + Math[o(706)](u0, B0)) | 0),
        (u = (u + Math[o(706)](u0, T0)) | 0),
        (u = (u + Math[o(706)](h0, B0)) | 0),
        (p = (p + Math[o(706)](h0, T0)) | 0),
        (b = (b + Math[o(706)](c0, I0)) | 0),
        (u = (u + Math[o(706)](c0, N0)) | 0),
        (u = (u + Math.imul(o0, I0)) | 0),
        (p = (p + Math[o(706)](o0, N0)) | 0),
        (b = (b + Math[o(706)](s0, R0)) | 0),
        (u = (u + Math[o(706)](s0, O0)) | 0),
        (u = (u + Math[o(706)](f0, R0)) | 0),
        (p = (p + Math[o(706)](f0, O0)) | 0),
        (b = (b + Math[o(706)](a0, D0)) | 0),
        (u = (u + Math[o(706)](a0, F0)) | 0),
        (u = (u + Math[o(706)](i0, D0)) | 0),
        (p = (p + Math.imul(i0, F0)) | 0),
        (b = (b + Math[o(706)](_, U0)) | 0),
        (u = (u + Math[o(706)](_, L0)) | 0),
        (u = (u + Math.imul(e0, U0)) | 0),
        (p = (p + Math.imul(e0, L0)) | 0);
      var ye = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ye >>> 26)) | 0),
        (ye &= 67108863),
        (b = Math[o(706)](p0, k0)),
        (u = Math[o(706)](p0, S0)),
        (u = (u + Math[o(706)](m0, k0)) | 0),
        (p = Math[o(706)](m0, S0)),
        (b = (b + Math[o(706)](b0, P0)) | 0),
        (u = (u + Math[o(706)](b0, C0)) | 0),
        (u = (u + Math[o(706)](v0, P0)) | 0),
        (p = (p + Math[o(706)](v0, C0)) | 0),
        (b = (b + Math[o(706)](d0, B0)) | 0),
        (u = (u + Math[o(706)](d0, T0)) | 0),
        (u = (u + Math[o(706)](l0, B0)) | 0),
        (p = (p + Math[o(706)](l0, T0)) | 0),
        (b = (b + Math.imul(u0, I0)) | 0),
        (u = (u + Math[o(706)](u0, N0)) | 0),
        (u = (u + Math.imul(h0, I0)) | 0),
        (p = (p + Math[o(706)](h0, N0)) | 0),
        (b = (b + Math[o(706)](c0, R0)) | 0),
        (u = (u + Math.imul(c0, O0)) | 0),
        (u = (u + Math.imul(o0, R0)) | 0),
        (p = (p + Math[o(706)](o0, O0)) | 0),
        (b = (b + Math[o(706)](s0, D0)) | 0),
        (u = (u + Math[o(706)](s0, F0)) | 0),
        (u = (u + Math[o(706)](f0, D0)) | 0),
        (p = (p + Math.imul(f0, F0)) | 0),
        (b = (b + Math[o(706)](a0, U0)) | 0),
        (u = (u + Math[o(706)](a0, L0)) | 0),
        (u = (u + Math.imul(i0, U0)) | 0),
        (p = (p + Math[o(706)](i0, L0)) | 0);
      var we = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (we >>> 26)) | 0),
        (we &= 67108863),
        (b = Math[o(706)](p0, P0)),
        (u = Math[o(706)](p0, C0)),
        (u = (u + Math[o(706)](m0, P0)) | 0),
        (p = Math[o(706)](m0, C0)),
        (b = (b + Math[o(706)](b0, B0)) | 0),
        (u = (u + Math[o(706)](b0, T0)) | 0),
        (u = (u + Math[o(706)](v0, B0)) | 0),
        (p = (p + Math.imul(v0, T0)) | 0),
        (b = (b + Math.imul(d0, I0)) | 0),
        (u = (u + Math[o(706)](d0, N0)) | 0),
        (u = (u + Math[o(706)](l0, I0)) | 0),
        (p = (p + Math[o(706)](l0, N0)) | 0),
        (b = (b + Math[o(706)](u0, R0)) | 0),
        (u = (u + Math[o(706)](u0, O0)) | 0),
        (u = (u + Math[o(706)](h0, R0)) | 0),
        (p = (p + Math[o(706)](h0, O0)) | 0),
        (b = (b + Math[o(706)](c0, D0)) | 0),
        (u = (u + Math[o(706)](c0, F0)) | 0),
        (u = (u + Math[o(706)](o0, D0)) | 0),
        (p = (p + Math[o(706)](o0, F0)) | 0),
        (b = (b + Math[o(706)](s0, U0)) | 0),
        (u = (u + Math[o(706)](s0, L0)) | 0),
        (u = (u + Math[o(706)](f0, U0)) | 0),
        (p = (p + Math[o(706)](f0, L0)) | 0);
      var Ae = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Ae >>> 26)) | 0),
        (Ae &= 67108863),
        (b = Math.imul(p0, B0)),
        (u = Math[o(706)](p0, T0)),
        (u = (u + Math[o(706)](m0, B0)) | 0),
        (p = Math[o(706)](m0, T0)),
        (b = (b + Math[o(706)](b0, I0)) | 0),
        (u = (u + Math[o(706)](b0, N0)) | 0),
        (u = (u + Math.imul(v0, I0)) | 0),
        (p = (p + Math[o(706)](v0, N0)) | 0),
        (b = (b + Math[o(706)](d0, R0)) | 0),
        (u = (u + Math[o(706)](d0, O0)) | 0),
        (u = (u + Math[o(706)](l0, R0)) | 0),
        (p = (p + Math[o(706)](l0, O0)) | 0),
        (b = (b + Math[o(706)](u0, D0)) | 0),
        (u = (u + Math.imul(u0, F0)) | 0),
        (u = (u + Math[o(706)](h0, D0)) | 0),
        (p = (p + Math[o(706)](h0, F0)) | 0),
        (b = (b + Math[o(706)](c0, U0)) | 0),
        (u = (u + Math.imul(c0, L0)) | 0),
        (u = (u + Math.imul(o0, U0)) | 0),
        (p = (p + Math[o(706)](o0, L0)) | 0);
      var Me = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Me >>> 26)) | 0),
        (Me &= 67108863),
        (b = Math[o(706)](p0, I0)),
        (u = Math[o(706)](p0, N0)),
        (u = (u + Math[o(706)](m0, I0)) | 0),
        (p = Math[o(706)](m0, N0)),
        (b = (b + Math[o(706)](b0, R0)) | 0),
        (u = (u + Math[o(706)](b0, O0)) | 0),
        (u = (u + Math.imul(v0, R0)) | 0),
        (p = (p + Math[o(706)](v0, O0)) | 0),
        (b = (b + Math[o(706)](d0, D0)) | 0),
        (u = (u + Math.imul(d0, F0)) | 0),
        (u = (u + Math[o(706)](l0, D0)) | 0),
        (p = (p + Math[o(706)](l0, F0)) | 0),
        (b = (b + Math[o(706)](u0, U0)) | 0),
        (u = (u + Math[o(706)](u0, L0)) | 0),
        (u = (u + Math[o(706)](h0, U0)) | 0),
        (p = (p + Math[o(706)](h0, L0)) | 0);
      var Ee = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Ee >>> 26)) | 0),
        (Ee &= 67108863),
        (b = Math[o(706)](p0, R0)),
        (u = Math[o(706)](p0, O0)),
        (u = (u + Math[o(706)](m0, R0)) | 0),
        (p = Math[o(706)](m0, O0)),
        (b = (b + Math.imul(b0, D0)) | 0),
        (u = (u + Math.imul(b0, F0)) | 0),
        (u = (u + Math[o(706)](v0, D0)) | 0),
        (p = (p + Math.imul(v0, F0)) | 0),
        (b = (b + Math[o(706)](d0, U0)) | 0),
        (u = (u + Math[o(706)](d0, L0)) | 0),
        (u = (u + Math[o(706)](l0, U0)) | 0),
        (p = (p + Math[o(706)](l0, L0)) | 0);
      var ke = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (ke >>> 26)) | 0),
        (ke &= 67108863),
        (b = Math[o(706)](p0, D0)),
        (u = Math[o(706)](p0, F0)),
        (u = (u + Math[o(706)](m0, D0)) | 0),
        (p = Math[o(706)](m0, F0)),
        (b = (b + Math.imul(b0, U0)) | 0),
        (u = (u + Math.imul(b0, L0)) | 0),
        (u = (u + Math[o(706)](v0, U0)) | 0),
        (p = (p + Math[o(706)](v0, L0)) | 0);
      var Se = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      (A = (((p + (u >>> 13)) | 0) + (Se >>> 26)) | 0),
        (Se &= 67108863),
        (b = Math[o(706)](p0, U0)),
        (u = Math.imul(p0, L0)),
        (u = (u + Math[o(706)](m0, U0)) | 0),
        (p = Math[o(706)](m0, L0));
      var Pe = (((A + b) | 0) + ((u & 8191) << 13)) | 0;
      return (
        (A = (((p + (u >>> 13)) | 0) + (Pe >>> 26)) | 0),
        (Pe &= 67108863),
        (E[0] = ce),
        (E[1] = oe),
        (E[2] = ue),
        (E[3] = he),
        (E[4] = de),
        (E[5] = le),
        (E[6] = be),
        (E[7] = ve),
        (E[8] = pe),
        (E[9] = me),
        (E[10] = ge),
        (E[11] = ye),
        (E[12] = we),
        (E[13] = Ae),
        (E[14] = Me),
        (E[15] = Ee),
        (E[16] = ke),
        (E[17] = Se),
        (E[18] = Pe),
        A !== 0 && ((E[19] = A), h[o(152)]++),
        h
      );
    };
    !Math.imul && (K = I);
    function G(w, f, i) {
      var h = t;
      (i[h(870)] = f.negative ^ w[h(870)]), (i[h(152)] = w[h(152)] + f[h(152)]);
      for (var o = 0, y = 0, M = 0; M < i[h(152)] - 1; M++) {
        var E = y;
        y = 0;
        for (
          var A = o & 67108863,
            b = Math[h(1403)](M, f[h(152)] - 1),
            u = Math.max(0, M - w[h(152)] + 1);
          u <= b;
          u++
        ) {
          var p = M - u,
            N = w[h(1070)][p] | 0,
            C = f[h(1070)][u] | 0,
            U = N * C,
            Q = U & 67108863;
          (E = (E + ((U / 67108864) | 0)) | 0),
            (Q = (Q + A) | 0),
            (A = Q & 67108863),
            (E = (E + (Q >>> 26)) | 0),
            (y += E >>> 26),
            (E &= 67108863);
        }
        (i[h(1070)][M] = A), (o = E), (E = y);
      }
      return o !== 0 ? (i.words[M] = o) : i.length--, i[h(678)]();
    }
    function V(w, f, i) {
      return G(w, f, i);
    }
    (s[t(1024)][t(1074)] = function (f, i) {
      var h = t,
        o,
        y = this[h(152)] + f[h(152)];
      return (
        this.length === 10 && f[h(152)] === 10
          ? (o = K(this, f, i))
          : y < 63
          ? (o = I(this, f, i))
          : y < 1024
          ? (o = G(this, f, i))
          : (o = V(this, f, i)),
        o
      );
    }),
      (s.prototype[t(1426)] = function (f) {
        var i = t,
          h = new s(null);
        return (
          (h[i(1070)] = new Array(this.length + f[i(152)])), this.mulTo(f, h)
        );
      }),
      (s[t(1024)][t(1964)] = function (f) {
        var i = t,
          h = new s(null);
        return (
          (h[i(1070)] = new Array(this[i(152)] + f[i(152)])), V(this, f, h)
        );
      }),
      (s.prototype[t(706)] = function (f) {
        var i = t;
        return this[i(307)]().mulTo(f, this);
      }),
      (s[t(1024)].imuln = function (f) {
        var i = t,
          h = f < 0;
        h && (f = -f), r(typeof f == "number"), r(f < 67108864);
        for (var o = 0, y = 0; y < this[i(152)]; y++) {
          var M = (this[i(1070)][y] | 0) * f,
            E = (M & 67108863) + (o & 67108863);
          (o >>= 26),
            (o += (M / 67108864) | 0),
            (o += E >>> 26),
            (this[i(1070)][y] = E & 67108863);
        }
        return (
          o !== 0 && ((this.words[y] = o), this[i(152)]++),
          h ? this[i(993)]() : this
        );
      }),
      (s[t(1024)][t(558)] = function (f) {
        var i = t;
        return this[i(307)]()[i(945)](f);
      }),
      (s[t(1024)][t(1435)] = function () {
        var f = t;
        return this[f(1426)](this);
      }),
      (s[t(1024)][t(1330)] = function () {
        var f = t;
        return this[f(706)](this.clone());
      }),
      (s[t(1024)].pow = function (f) {
        var i = t,
          h = P(f);
        if (h[i(152)] === 0) return new s(1);
        for (
          var o = this, y = 0;
          y < h[i(152)] && h[y] === 0;
          y++, o = o[i(1435)]()
        );
        if (++y < h.length)
          for (var M = o.sqr(); y < h[i(152)]; y++, M = M[i(1435)]())
            h[y] !== 0 && (o = o[i(1426)](M));
        return o;
      }),
      (s[t(1024)][t(1595)] = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = f % 26,
          o = (f - h) / 26,
          y = (67108863 >>> (26 - h)) << (26 - h),
          M;
        if (h !== 0) {
          var E = 0;
          for (M = 0; M < this[i(152)]; M++) {
            var A = this[i(1070)][M] & y,
              b = ((this[i(1070)][M] | 0) - A) << h;
            (this[i(1070)][M] = b | E), (E = A >>> (26 - h));
          }
          E && ((this.words[M] = E), this[i(152)]++);
        }
        if (o !== 0) {
          for (M = this.length - 1; M >= 0; M--)
            this[i(1070)][M + o] = this.words[M];
          for (M = 0; M < o; M++) this[i(1070)][M] = 0;
          this[i(152)] += o;
        }
        return this[i(678)]();
      }),
      (s.prototype[t(1528)] = function (f) {
        var i = t;
        return r(this[i(870)] === 0), this[i(1595)](f);
      }),
      (s[t(1024)].iushrn = function (f, i, h) {
        var o = t;
        r(typeof f === o(456) && f >= 0);
        var y;
        i ? (y = (i - (i % 26)) / 26) : (y = 0);
        var M = f % 26,
          E = Math[o(1403)]((f - M) / 26, this[o(152)]),
          A = 67108863 ^ ((67108863 >>> M) << M),
          b = h;
        if (((y -= E), (y = Math.max(0, y)), b)) {
          for (var u = 0; u < E; u++) b[o(1070)][u] = this[o(1070)][u];
          b.length = E;
        }
        if (E !== 0)
          if (this[o(152)] > E)
            for (this[o(152)] -= E, u = 0; u < this[o(152)]; u++)
              this.words[u] = this[o(1070)][u + E];
          else (this[o(1070)][0] = 0), (this[o(152)] = 1);
        var p = 0;
        for (u = this[o(152)] - 1; u >= 0 && (p !== 0 || u >= y); u--) {
          var N = this[o(1070)][u] | 0;
          (this.words[u] = (p << (26 - M)) | (N >>> M)), (p = N & A);
        }
        return (
          b && p !== 0 && (b.words[b[o(152)]++] = p),
          this[o(152)] === 0 && ((this.words[0] = 0), (this[o(152)] = 1)),
          this[o(678)]()
        );
      }),
      (s[t(1024)][t(616)] = function (f, i, h) {
        var o = t;
        return r(this.negative === 0), this[o(1064)](f, i, h);
      }),
      (s.prototype[t(639)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1528)](f);
      }),
      (s.prototype[t(1244)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1595)](f);
      }),
      (s.prototype[t(1791)] = function (f) {
        var i = t;
        return this[i(307)]()[i(616)](f);
      }),
      (s.prototype.ushrn = function (f) {
        var i = t;
        return this.clone()[i(1064)](f);
      }),
      (s[t(1024)][t(966)] = function (f) {
        var i = t;
        r(typeof f == "number" && f >= 0);
        var h = f % 26,
          o = (f - h) / 26,
          y = 1 << h;
        if (this[i(152)] <= o) return ![];
        var M = this[i(1070)][o];
        return !!(M & y);
      }),
      (s.prototype.imaskn = function (f) {
        var i = t;
        r(typeof f === i(456) && f >= 0);
        var h = f % 26,
          o = (f - h) / 26;
        if (
          (r(this.negative === 0, "imaskn works only with positive numbers"),
          this[i(152)] <= o)
        )
          return this;
        if (
          (h !== 0 && o++,
          (this[i(152)] = Math[i(1403)](o, this[i(152)])),
          h !== 0)
        ) {
          var y = 67108863 ^ ((67108863 >>> h) << h);
          this.words[this[i(152)] - 1] &= y;
        }
        return this[i(678)]();
      }),
      (s[t(1024)][t(1524)] = function (f) {
        var i = t;
        return this[i(307)]()[i(728)](f);
      }),
      (s[t(1024)][t(820)] = function (f) {
        var i = t;
        return (
          r(typeof f == "number"),
          r(f < 67108864),
          f < 0
            ? this[i(1198)](-f)
            : this[i(870)] !== 0
            ? this.length === 1 && (this[i(1070)][0] | 0) <= f
              ? ((this[i(1070)][0] = f - (this[i(1070)][0] | 0)),
                (this[i(870)] = 0),
                this)
              : ((this[i(870)] = 0), this.isubn(f), (this[i(870)] = 1), this)
            : this[i(1520)](f)
        );
      }),
      (s[t(1024)][t(1520)] = function (f) {
        var i = t;
        this[i(1070)][0] += f;
        for (var h = 0; h < this[i(152)] && this.words[h] >= 67108864; h++)
          (this[i(1070)][h] -= 67108864),
            h === this.length - 1
              ? (this[i(1070)][h + 1] = 1)
              : this.words[h + 1]++;
        return (this[i(152)] = Math[i(521)](this[i(152)], h + 1)), this;
      }),
      (s[t(1024)][t(1198)] = function (f) {
        var i = t;
        if ((r(typeof f === i(456)), r(f < 67108864), f < 0))
          return this[i(820)](-f);
        if (this[i(870)] !== 0)
          return (this[i(870)] = 0), this[i(820)](f), (this[i(870)] = 1), this;
        if (((this.words[0] -= f), this.length === 1 && this[i(1070)][0] < 0))
          (this[i(1070)][0] = -this[i(1070)][0]), (this[i(870)] = 1);
        else
          for (var h = 0; h < this[i(152)] && this.words[h] < 0; h++)
            (this[i(1070)][h] += 67108864), (this[i(1070)][h + 1] -= 1);
        return this[i(678)]();
      }),
      (s[t(1024)][t(169)] = function (f) {
        var i = t;
        return this[i(307)]()[i(820)](f);
      }),
      (s.prototype[t(1792)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1198)](f);
      }),
      (s.prototype[t(1289)] = function () {
        var f = t;
        return (this[f(870)] = 0), this;
      }),
      (s[t(1024)].abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype[t(1683)] = function (f, i, h) {
        var o = t,
          y = f.length + h,
          M;
        this[o(1777)](y);
        var E,
          A = 0;
        for (M = 0; M < f[o(152)]; M++) {
          E = (this[o(1070)][M + h] | 0) + A;
          var b = (f[o(1070)][M] | 0) * i;
          (E -= b & 67108863),
            (A = (E >> 26) - ((b / 67108864) | 0)),
            (this[o(1070)][M + h] = E & 67108863);
        }
        for (; M < this[o(152)] - h; M++)
          (E = (this.words[M + h] | 0) + A),
            (A = E >> 26),
            (this.words[M + h] = E & 67108863);
        if (A === 0) return this[o(678)]();
        for (r(A === -1), A = 0, M = 0; M < this.length; M++)
          (E = -(this[o(1070)][M] | 0) + A),
            (A = E >> 26),
            (this[o(1070)][M] = E & 67108863);
        return (this[o(870)] = 1), this[o(678)]();
      }),
      (s[t(1024)][t(670)] = function (f, i) {
        var h = t,
          o = this[h(152)] - f[h(152)],
          y = this.clone(),
          M = f,
          E = M[h(1070)][M[h(152)] - 1] | 0,
          A = this[h(731)](E);
        (o = 26 - A),
          o !== 0 &&
            ((M = M[h(1244)](o)),
            y.iushln(o),
            (E = M[h(1070)][M[h(152)] - 1] | 0));
        var b = y[h(152)] - M[h(152)],
          u;
        if (i !== h(1265)) {
          (u = new s(null)),
            (u[h(152)] = b + 1),
            (u.words = new Array(u.length));
          for (var p = 0; p < u[h(152)]; p++) u[h(1070)][p] = 0;
        }
        var N = y.clone()[h(1683)](M, 1, b);
        N.negative === 0 && ((y = N), u && (u[h(1070)][b] = 1));
        for (var C = b - 1; C >= 0; C--) {
          var U =
            (y[h(1070)][M[h(152)] + C] | 0) * 67108864 +
            (y[h(1070)][M.length + C - 1] | 0);
          for (
            U = Math[h(1403)]((U / E) | 0, 67108863), y[h(1683)](M, U, C);
            y[h(870)] !== 0;

          )
            U--,
              (y[h(870)] = 0),
              y[h(1683)](M, 1, C),
              !y[h(770)]() && (y[h(870)] ^= 1);
          u && (u[h(1070)][C] = U);
        }
        return (
          u && u[h(678)](),
          y[h(678)](),
          i !== "div" && o !== 0 && y[h(1064)](o),
          { div: u || null, mod: y }
        );
      }),
      (s[t(1024)].divmod = function (f, i, h) {
        var o = t;
        if ((r(!f[o(770)]()), this[o(770)]()))
          return { div: new s(0), mod: new s(0) };
        var y, M, E;
        return this.negative !== 0 && f.negative === 0
          ? ((E = this[o(840)]()[o(453)](f, i)),
            i !== o(1265) && (y = E[o(213)].neg()),
            i !== o(213) &&
              ((M = E.mod[o(840)]()), h && M[o(870)] !== 0 && M[o(371)](f)),
            { div: y, mod: M })
          : this[o(870)] === 0 && f[o(870)] !== 0
          ? ((E = this.divmod(f[o(840)](), i)),
            i !== o(1265) && (y = E[o(213)][o(840)]()),
            { div: y, mod: E[o(1265)] })
          : (this[o(870)] & f[o(870)]) !== 0
          ? ((E = this[o(840)]().divmod(f.neg(), i)),
            i !== o(213) &&
              ((M = E.mod[o(840)]()), h && M.negative !== 0 && M[o(1511)](f)),
            { div: E[o(213)], mod: M })
          : f[o(152)] > this.length || this[o(1999)](f) < 0
          ? { div: new s(0), mod: this }
          : f[o(152)] === 1
          ? i === o(213)
            ? { div: this.divn(f[o(1070)][0]), mod: null }
            : i === o(1265)
            ? { div: null, mod: new s(this[o(841)](f[o(1070)][0])) }
            : {
                div: this[o(1318)](f[o(1070)][0]),
                mod: new s(this[o(841)](f.words[0])),
              }
          : this[o(670)](f, i);
      }),
      (s[t(1024)][t(213)] = function (f) {
        var i = t;
        return this[i(453)](f, "div", ![]).div;
      }),
      (s[t(1024)].mod = function (f) {
        var i = t;
        return this.divmod(f, i(1265), ![])[i(1265)];
      }),
      (s.prototype[t(940)] = function (f) {
        var i = t;
        return this.divmod(f, i(1265), !![])[i(1265)];
      }),
      (s[t(1024)][t(1525)] = function (f) {
        var i = t,
          h = this[i(453)](f);
        if (h[i(1265)].isZero()) return h.div;
        var o = h.div[i(870)] !== 0 ? h.mod[i(1511)](f) : h[i(1265)],
          y = f[i(1928)](1),
          M = f[i(1319)](1),
          E = o[i(1999)](y);
        return E < 0 || (M === 1 && E === 0)
          ? h[i(213)]
          : h[i(213)][i(870)] !== 0
          ? h[i(213)].isubn(1)
          : h[i(213)][i(820)](1);
      }),
      (s[t(1024)][t(841)] = function (f) {
        var i = f < 0;
        i && (f = -f), r(f <= 67108863);
        for (var h = (1 << 26) % f, o = 0, y = this.length - 1; y >= 0; y--)
          o = (h * o + (this.words[y] | 0)) % f;
        return i ? -o : o;
      }),
      (s[t(1024)][t(1847)] = function (f) {
        var i = t;
        return this[i(841)](f);
      }),
      (s.prototype.idivn = function (f) {
        var i = t,
          h = f < 0;
        h && (f = -f), r(f <= 67108863);
        for (var o = 0, y = this[i(152)] - 1; y >= 0; y--) {
          var M = (this[i(1070)][y] | 0) + o * 67108864;
          (this[i(1070)][y] = (M / f) | 0), (o = M % f);
        }
        return this[i(678)](), h ? this[i(993)]() : this;
      }),
      (s.prototype[t(1318)] = function (f) {
        var i = t;
        return this[i(307)]()[i(1476)](f);
      }),
      (s[t(1024)][t(1914)] = function (f) {
        var i = t;
        r(f.negative === 0), r(!f.isZero());
        var h = this,
          o = f.clone();
        h.negative !== 0 ? (h = h[i(940)](f)) : (h = h[i(307)]());
        for (
          var y = new s(1), M = new s(0), E = new s(0), A = new s(1), b = 0;
          h[i(912)]() && o[i(912)]();

        )
          h[i(1064)](1), o[i(1064)](1), ++b;
        for (var u = o[i(307)](), p = h[i(307)](); !h[i(770)](); ) {
          for (
            var N = 0, C = 1;
            (h.words[0] & C) === 0 && N < 26;
            ++N, C <<= 1
          );
          if (N > 0)
            for (h[i(1064)](N); N-- > 0; )
              (y[i(950)]() || M[i(950)]()) && (y[i(371)](u), M[i(1511)](p)),
                y.iushrn(1),
                M[i(1064)](1);
          for (
            var U = 0, Q = 1;
            (o.words[0] & Q) === 0 && U < 26;
            ++U, Q <<= 1
          );
          if (U > 0)
            for (o[i(1064)](U); U-- > 0; )
              (E[i(950)]() || A.isOdd()) && (E[i(371)](u), A[i(1511)](p)),
                E[i(1064)](1),
                A[i(1064)](1);
          h.cmp(o) >= 0
            ? (h[i(1511)](o), y[i(1511)](E), M.isub(A))
            : (o[i(1511)](h), E[i(1511)](y), A[i(1511)](M));
        }
        return { a: E, b: A, gcd: o[i(1595)](b) };
      }),
      (s[t(1024)][t(1283)] = function (f) {
        var i = t;
        r(f.negative === 0), r(!f.isZero());
        var h = this,
          o = f[i(307)]();
        h.negative !== 0 ? (h = h.umod(f)) : (h = h[i(307)]());
        for (
          var y = new s(1), M = new s(0), E = o.clone();
          h[i(491)](1) > 0 && o.cmpn(1) > 0;

        ) {
          for (
            var A = 0, b = 1;
            (h[i(1070)][0] & b) === 0 && A < 26;
            ++A, b <<= 1
          );
          if (A > 0)
            for (h[i(1064)](A); A-- > 0; )
              y[i(950)]() && y[i(371)](E), y.iushrn(1);
          for (
            var u = 0, p = 1;
            (o[i(1070)][0] & p) === 0 && u < 26;
            ++u, p <<= 1
          );
          if (u > 0)
            for (o[i(1064)](u); u-- > 0; )
              M[i(950)]() && M[i(371)](E), M[i(1064)](1);
          h[i(1999)](o) >= 0
            ? (h[i(1511)](o), y[i(1511)](M))
            : (o[i(1511)](h), M.isub(y));
        }
        var N;
        return (
          h[i(491)](1) === 0 ? (N = y) : (N = M),
          N[i(491)](0) < 0 && N[i(371)](f),
          N
        );
      }),
      (s[t(1024)][t(1268)] = function (f) {
        var i = t;
        if (this[i(770)]()) return f[i(238)]();
        if (f[i(770)]()) return this[i(238)]();
        var h = this[i(307)](),
          o = f[i(307)]();
        (h[i(870)] = 0), (o[i(870)] = 0);
        for (var y = 0; h.isEven() && o[i(912)](); y++)
          h[i(1064)](1), o[i(1064)](1);
        do {
          for (; h[i(912)](); ) h[i(1064)](1);
          for (; o[i(912)](); ) o[i(1064)](1);
          var M = h.cmp(o);
          if (M < 0) {
            var E = h;
            (h = o), (o = E);
          } else if (M === 0 || o[i(491)](1) === 0) break;
          h[i(1511)](o);
        } while ([]);
        return o[i(1595)](y);
      }),
      (s.prototype.invm = function (f) {
        var i = t;
        return this[i(1914)](f).a[i(940)](f);
      }),
      (s[t(1024)][t(912)] = function () {
        var f = t;
        return (this[f(1070)][0] & 1) === 0;
      }),
      (s[t(1024)].isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s[t(1024)].andln = function (f) {
        var i = t;
        return this[i(1070)][0] & f;
      }),
      (s[t(1024)][t(1894)] = function (f) {
        var i = t;
        r(typeof f === i(456));
        var h = f % 26,
          o = (f - h) / 26,
          y = 1 << h;
        if (this[i(152)] <= o)
          return this[i(1777)](o + 1), (this[i(1070)][o] |= y), this;
        for (var M = y, E = o; M !== 0 && E < this[i(152)]; E++) {
          var A = this[i(1070)][E] | 0;
          (A += M), (M = A >>> 26), (A &= 67108863), (this[i(1070)][E] = A);
        }
        return M !== 0 && ((this[i(1070)][E] = M), this[i(152)]++), this;
      }),
      (s[t(1024)].isZero = function () {
        var f = t;
        return this[f(152)] === 1 && this[f(1070)][0] === 0;
      }),
      (s.prototype[t(491)] = function (f) {
        var i = t,
          h = f < 0;
        if (this[i(870)] !== 0 && !h) return -1;
        if (this[i(870)] === 0 && h) return 1;
        this[i(678)]();
        var o;
        if (this.length > 1) o = 1;
        else {
          h && (f = -f), r(f <= 67108863, i(1615));
          var y = this[i(1070)][0] | 0;
          o = y === f ? 0 : y < f ? -1 : 1;
        }
        return this[i(870)] !== 0 ? -o | 0 : o;
      }),
      (s[t(1024)][t(1999)] = function (f) {
        var i = t;
        if (this.negative !== 0 && f[i(870)] === 0) return -1;
        if (this[i(870)] === 0 && f.negative !== 0) return 1;
        var h = this[i(1487)](f);
        return this[i(870)] !== 0 ? -h | 0 : h;
      }),
      (s[t(1024)][t(1487)] = function (f) {
        var i = t;
        if (this.length > f[i(152)]) return 1;
        if (this[i(152)] < f.length) return -1;
        for (var h = 0, o = this[i(152)] - 1; o >= 0; o--) {
          var y = this[i(1070)][o] | 0,
            M = f[i(1070)][o] | 0;
          if (y !== M) {
            y < M ? (h = -1) : y > M && (h = 1);
            break;
          }
        }
        return h;
      }),
      (s[t(1024)][t(450)] = function (f) {
        var i = t;
        return this[i(491)](f) === 1;
      }),
      (s[t(1024)].gt = function (f) {
        return this.cmp(f) === 1;
      }),
      (s[t(1024)].gten = function (f) {
        return this.cmpn(f) >= 0;
      }),
      (s[t(1024)][t(957)] = function (f) {
        var i = t;
        return this[i(1999)](f) >= 0;
      }),
      (s[t(1024)][t(527)] = function (f) {
        var i = t;
        return this[i(491)](f) === -1;
      }),
      (s.prototype.lt = function (f) {
        var i = t;
        return this[i(1999)](f) === -1;
      }),
      (s[t(1024)][t(922)] = function (f) {
        var i = t;
        return this[i(491)](f) <= 0;
      }),
      (s[t(1024)].lte = function (f) {
        return this.cmp(f) <= 0;
      }),
      (s[t(1024)][t(1166)] = function (f) {
        var i = t;
        return this[i(491)](f) === 0;
      }),
      (s[t(1024)].eq = function (f) {
        var i = t;
        return this[i(1999)](f) === 0;
      }),
      (s[t(1484)] = function (f) {
        return new Y(f);
      }),
      (s.prototype.toRed = function (f) {
        var i = t;
        return (
          r(!this[i(1484)], "Already a number in reduction context"),
          r(this[i(870)] === 0, "red works only with positives"),
          f[i(1868)](this)[i(958)](f)
        );
      }),
      (s.prototype.fromRed = function () {
        var f = t;
        return r(this[f(1484)], f(1677)), this[f(1484)][f(520)](this);
      }),
      (s[t(1024)][t(958)] = function (f) {
        var i = t;
        return (this[i(1484)] = f), this;
      }),
      (s[t(1024)].forceRed = function (f) {
        var i = t;
        return r(!this[i(1484)], i(1326)), this[i(958)](f);
      }),
      (s[t(1024)][t(1153)] = function (f) {
        var i = t;
        return r(this.red, i(1091)), this[i(1484)][i(1607)](this, f);
      }),
      (s.prototype[t(279)] = function (f) {
        var i = t;
        return r(this[i(1484)], i(1685)), this.red[i(371)](this, f);
      }),
      (s.prototype[t(364)] = function (f) {
        var i = t;
        return r(this.red, i(1175)), this[i(1484)][i(440)](this, f);
      }),
      (s.prototype[t(1634)] = function (f) {
        var i = t;
        return r(this[i(1484)], i(1903)), this[i(1484)][i(1511)](this, f);
      }),
      (s.prototype[t(1935)] = function (f) {
        var i = t;
        return r(this[i(1484)], i(734)), this[i(1484)][i(1848)](this, f);
      }),
      (s[t(1024)].redMul = function (f) {
        var i = t;
        return (
          r(this[i(1484)], i(1846)),
          this.red[i(1526)](this, f),
          this[i(1484)][i(1426)](this, f)
        );
      }),
      (s[t(1024)][t(798)] = function (f) {
        var i = t;
        return (
          r(this[i(1484)], i(1846)),
          this[i(1484)][i(1526)](this, f),
          this[i(1484)][i(706)](this, f)
        );
      }),
      (s.prototype.redSqr = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1290)),
          this[f(1484)][f(556)](this),
          this.red[f(1435)](this)
        );
      }),
      (s[t(1024)][t(462)] = function () {
        var f = t;
        return (
          r(this[f(1484)], "redISqr works only with red numbers"),
          this[f(1484)][f(556)](this),
          this[f(1484)][f(1330)](this)
        );
      }),
      (s[t(1024)][t(640)] = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1151)),
          this[f(1484)][f(556)](this),
          this[f(1484)][f(1462)](this)
        );
      }),
      (s[t(1024)][t(1017)] = function () {
        var f = t;
        return (
          r(this[f(1484)], "redInvm works only with red numbers"),
          this[f(1484)][f(556)](this),
          this.red[f(176)](this)
        );
      }),
      (s[t(1024)].redNeg = function () {
        var f = t;
        return (
          r(this[f(1484)], f(1126)),
          this.red._verify1(this),
          this[f(1484)][f(840)](this)
        );
      }),
      (s[t(1024)].redPow = function (f) {
        var i = t;
        return (
          r(this.red && !f.red, i(669)),
          this[i(1484)][i(556)](this),
          this[i(1484)][i(1538)](this, f)
        );
      });
    var j = { k256: null, p224: null, p192: null, p25519: null };
    function L(w, f) {
      var i = t;
      (this.name = w),
        (this.p = new s(f, 16)),
        (this.n = this.p[i(1044)]()),
        (this.k = new s(1)[i(1595)](this.n)[i(1511)](this.p)),
        (this.tmp = this[i(240)]());
    }
    (L[t(1024)]._tmp = function () {
      var f = t,
        i = new s(null);
      return (i[f(1070)] = new Array(Math[f(1277)](this.n / 13))), i;
    }),
      (L[t(1024)][t(1889)] = function (f) {
        var i = t,
          h = f,
          o;
        do
          this[i(1418)](h, this[i(943)]),
            (h = this[i(962)](h)),
            (h = h[i(371)](this[i(943)])),
            (o = h[i(1044)]());
        while (o > this.n);
        var y = o < this.n ? -1 : h.ucmp(this.p);
        return (
          y === 0
            ? ((h.words[0] = 0), (h[i(152)] = 1))
            : y > 0
            ? h[i(1511)](this.p)
            : h[i(442)] !== void 0
            ? h[i(442)]()
            : h._strip(),
          h
        );
      }),
      (L[t(1024)][t(1418)] = function (f, i) {
        f.iushrn(this.n, 0, i);
      }),
      (L.prototype[t(962)] = function (f) {
        return f.imul(this.k);
      });
    function Z() {
      var w = t;
      L[w(1340)](this, w(1075), w(625));
    }
    a(Z, L),
      (Z.prototype[t(1418)] = function (f, i) {
        for (
          var h = t, o = 4194303, y = Math[h(1403)](f[h(152)], 9), M = 0;
          M < y;
          M++
        )
          i[h(1070)][M] = f[h(1070)][M];
        if (((i[h(152)] = y), f[h(152)] <= 9)) {
          (f[h(1070)][0] = 0), (f[h(152)] = 1);
          return;
        }
        var E = f[h(1070)][9];
        for (i.words[i[h(152)]++] = E & o, M = 10; M < f[h(152)]; M++) {
          var A = f[h(1070)][M] | 0;
          (f.words[M - 10] = ((A & o) << 4) | (E >>> 22)), (E = A);
        }
        (E >>>= 22),
          (f.words[M - 10] = E),
          E === 0 && f.length > 10 ? (f[h(152)] -= 10) : (f.length -= 9);
      }),
      (Z.prototype[t(962)] = function (f) {
        var i = t;
        (f[i(1070)][f[i(152)]] = 0),
          (f.words[f[i(152)] + 1] = 0),
          (f[i(152)] += 2);
        for (var h = 0, o = 0; o < f[i(152)]; o++) {
          var y = f[i(1070)][o] | 0;
          (h += y * 977),
            (f[i(1070)][o] = h & 67108863),
            (h = y * 64 + ((h / 67108864) | 0));
        }
        return (
          f[i(1070)][f.length - 1] === 0 &&
            (f[i(152)]--, f[i(1070)][f.length - 1] === 0 && f.length--),
          f
        );
      });
    function $() {
      var w = t;
      L.call(this, w(1012), w(797));
    }
    a($, L);
    function x0() {
      var w = t;
      L[w(1340)](this, w(578), w(329));
    }
    a(x0, L);
    function K0() {
      var w = t;
      L[w(1340)](this, "25519", w(1640));
    }
    a(K0, L),
      (K0[t(1024)][t(962)] = function (f) {
        for (var i = t, h = 0, o = 0; o < f[i(152)]; o++) {
          var y = (f.words[o] | 0) * 19 + h,
            M = y & 67108863;
          (y >>>= 26), (f[i(1070)][o] = M), (h = y);
        }
        return h !== 0 && (f[i(1070)][f.length++] = h), f;
      }),
      (s[t(1187)] = function (f) {
        var i = t;
        if (j[f]) return j[f];
        var h;
        if (f === i(1075)) h = new Z();
        else if (f === "p224") h = new $();
        else if (f === i(578)) h = new x0();
        else if (f === i(1760)) h = new K0();
        else throw new Error("Unknown prime " + f);
        return (j[f] = h), h;
      });
    function Y(w) {
      var f = t;
      if (typeof w === f(1721)) {
        var i = s[f(1187)](w);
        (this.m = i.p), (this[f(1911)] = i);
      } else
        r(w[f(450)](1), "modulus must be greater than 1"),
          (this.m = w),
          (this[f(1911)] = null);
    }
    (Y.prototype[t(556)] = function (f) {
      var i = t;
      r(f[i(870)] === 0, i(1859)), r(f[i(1484)], i(607));
    }),
      (Y[t(1024)][t(1526)] = function (f, i) {
        var h = t;
        r((f[h(870)] | i[h(870)]) === 0, h(1859)),
          r(
            f[h(1484)] && f[h(1484)] === i[h(1484)],
            "red works only with red numbers"
          );
      }),
      (Y[t(1024)][t(275)] = function (f) {
        var i = t;
        return this[i(1911)]
          ? this[i(1911)][i(1889)](f)[i(958)](this)
          : (g(f, f[i(940)](this.m)[i(958)](this)), f);
      }),
      (Y.prototype[t(840)] = function (f) {
        var i = t;
        return f[i(770)]() ? f[i(307)]() : this.m.sub(f)._forceRed(this);
      }),
      (Y[t(1024)].add = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f.add(i);
        return o[h(1999)](this.m) >= 0 && o[h(1511)](this.m), o._forceRed(this);
      }),
      (Y[t(1024)][t(371)] = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f.iadd(i);
        return o[h(1999)](this.m) >= 0 && o[h(1511)](this.m), o;
      }),
      (Y[t(1024)][t(440)] = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f.sub(i);
        return o.cmpn(0) < 0 && o[h(371)](this.m), o._forceRed(this);
      }),
      (Y[t(1024)][t(1511)] = function (f, i) {
        var h = t;
        this[h(1526)](f, i);
        var o = f[h(1511)](i);
        return o.cmpn(0) < 0 && o[h(371)](this.m), o;
      }),
      (Y[t(1024)].shl = function (f, i) {
        var h = t;
        return this[h(556)](f), this[h(275)](f[h(1244)](i));
      }),
      (Y[t(1024)][t(706)] = function (f, i) {
        var h = t;
        return this._verify2(f, i), this[h(275)](f[h(706)](i));
      }),
      (Y[t(1024)].mul = function (f, i) {
        var h = t;
        return this[h(1526)](f, i), this[h(275)](f.mul(i));
      }),
      (Y[t(1024)].isqr = function (f) {
        var i = t;
        return this[i(706)](f, f[i(307)]());
      }),
      (Y[t(1024)][t(1435)] = function (f) {
        var i = t;
        return this[i(1426)](f, f);
      }),
      (Y[t(1024)][t(1462)] = function (f) {
        var i = t;
        if (f[i(770)]()) return f[i(307)]();
        var h = this.m[i(1319)](3);
        if ((r(h % 2 === 1), h === 3)) {
          var o = this.m.add(new s(1))[i(1064)](2);
          return this[i(1538)](f, o);
        }
        for (
          var y = this.m[i(1792)](1), M = 0;
          !y[i(770)]() && y.andln(1) === 0;

        )
          M++, y[i(1064)](1);
        r(!y[i(770)]());
        var E = new s(1)[i(564)](this),
          A = E[i(1192)](),
          b = this.m[i(1792)](1)[i(1064)](1),
          u = this.m[i(1044)]();
        for (u = new s(2 * u * u).toRed(this); this.pow(u, b).cmp(A) !== 0; )
          u[i(279)](A);
        for (
          var p = this.pow(u, y),
            N = this[i(1538)](f, y[i(169)](1)[i(1064)](1)),
            C = this[i(1538)](f, y),
            U = M;
          C.cmp(E) !== 0;

        ) {
          for (var Q = C, J = 0; Q[i(1999)](E) !== 0; J++) Q = Q[i(595)]();
          r(J < U);
          var W = this[i(1538)](p, new s(1)[i(1595)](U - J - 1));
          (N = N.redMul(W)), (p = W.redSqr()), (C = C.redMul(p)), (U = J);
        }
        return N;
      }),
      (Y[t(1024)].invm = function (f) {
        var i = t,
          h = f[i(1283)](this.m);
        return h[i(870)] !== 0
          ? ((h.negative = 0), this[i(275)](h).redNeg())
          : this[i(275)](h);
      }),
      (Y[t(1024)].pow = function (f, i) {
        var h = t;
        if (i.isZero()) return new s(1)[h(564)](this);
        if (i[h(491)](1) === 0) return f[h(307)]();
        var o = 4,
          y = new Array(1 << o);
        (y[0] = new s(1)[h(564)](this)), (y[1] = f);
        for (var M = 2; M < y.length; M++) y[M] = this[h(1426)](y[M - 1], f);
        var E = y[0],
          A = 0,
          b = 0,
          u = i[h(1044)]() % 26;
        for (u === 0 && (u = 26), M = i[h(152)] - 1; M >= 0; M--) {
          for (var p = i[h(1070)][M], N = u - 1; N >= 0; N--) {
            var C = (p >> N) & 1;
            if ((E !== y[0] && (E = this.sqr(E)), C === 0 && A === 0)) {
              b = 0;
              continue;
            }
            (A <<= 1),
              (A |= C),
              b++,
              !(b !== o && (M !== 0 || N !== 0)) &&
                ((E = this.mul(E, y[A])), (b = 0), (A = 0));
          }
          u = 26;
        }
        return E;
      }),
      (Y[t(1024)][t(1868)] = function (f) {
        var i = t,
          h = f.umod(this.m);
        return h === f ? h[i(307)]() : h;
      }),
      (Y[t(1024)][t(520)] = function (f) {
        var i = t,
          h = f[i(307)]();
        return (h.red = null), h;
      }),
      (s[t(303)] = function (f) {
        return new J0(f);
      });
    function J0(w) {
      var f = t;
      Y[f(1340)](this, w),
        (this[f(1351)] = this.m[f(1044)]()),
        this[f(1351)] % 26 !== 0 &&
          (this[f(1351)] += 26 - (this[f(1351)] % 26)),
        (this.r = new s(1)[f(1595)](this[f(1351)])),
        (this.r2 = this.imod(this.r[f(1435)]())),
        (this[f(987)] = this.r[f(1283)](this.m)),
        (this[f(600)] = this[f(987)].mul(this.r)[f(1198)](1)[f(213)](this.m)),
        (this[f(600)] = this[f(600)].umod(this.r)),
        (this[f(600)] = this.r[f(440)](this[f(600)]));
    }
    a(J0, Y),
      (J0.prototype[t(1868)] = function (f) {
        var i = t;
        return this[i(275)](f[i(1244)](this[i(1351)]));
      }),
      (J0[t(1024)][t(520)] = function (f) {
        var i = t,
          h = this[i(275)](f.mul(this[i(987)]));
        return (h[i(1484)] = null), h;
      }),
      (J0[t(1024)][t(706)] = function (f, i) {
        var h = t;
        if (f[h(770)]() || i[h(770)]())
          return (f.words[0] = 0), (f[h(152)] = 1), f;
        var o = f[h(706)](i),
          y = o
            .maskn(this.shift)
            [h(1426)](this.minv)
            [h(728)](this[h(1351)])
            [h(1426)](this.m),
          M = o[h(1511)](y)[h(1064)](this[h(1351)]),
          E = M;
        return (
          M[h(1999)](this.m) >= 0
            ? (E = M[h(1511)](this.m))
            : M[h(491)](0) < 0 && (E = M[h(371)](this.m)),
          E[h(958)](this)
        );
      }),
      (J0[t(1024)][t(1426)] = function (f, i) {
        var h = t;
        if (f[h(770)]() || i[h(770)]()) return new s(0)[h(958)](this);
        var o = f[h(1426)](i),
          y = o[h(1524)](this[h(1351)])
            [h(1426)](this.minv)
            [h(728)](this[h(1351)])
            [h(1426)](this.m),
          M = o[h(1511)](y)[h(1064)](this[h(1351)]),
          E = M;
        return (
          M[h(1999)](this.m) >= 0
            ? (E = M[h(1511)](this.m))
            : M[h(491)](0) < 0 && (E = M.iadd(this.m)),
          E[h(958)](this)
        );
      }),
      (J0[t(1024)].invm = function (f) {
        var i = t,
          h = this.imod(f._invmp(this.m)[i(1426)](this.r2));
        return h[i(958)](this);
      });
  })(n, ii);
})(Qi);
const r0 = Qi[c(1980)];
function tt(n, e, x) {
  var t = c;
  return (
    (x = {
      path: e,
      exports: {},
      require: function (r, a) {
        var s = O;
        return qc(r, a == null ? x[s(1639)] : a);
      },
    }),
    n(x, x[t(1980)]),
    x[t(1980)]
  );
}
function qc() {
  var n = c;
  throw new Error(n(165));
}
function O(n, e) {
  var x = Ar();
  return (
    (O = function (t, r) {
      t = t - 150;
      var a = x[t];
      return a;
    }),
    O(n, e)
  );
}
var Fn = Vi;
function Vi(n, e) {
  var x = c;
  if (!n) throw new Error(e || x(1824));
}
Vi[c(314)] = function (e, x, t) {
  var r = c;
  if (e != x) throw new Error(t || r(1263) + e + r(472) + x);
};
var Dx = tt(function (n, e) {
    var x = c,
      t = e;
    function r(d, l) {
      var v = O;
      if (Array[v(1900)](d)) return d.slice();
      if (!d) return [];
      var m = [];
      if (typeof d != "string") {
        for (var g = 0; g < d[v(152)]; g++) m[g] = d[g] | 0;
        return m;
      }
      if (l === "hex") {
        (d = d[v(330)](/[^a-z0-9]+/gi, "")),
          d[v(152)] % 2 !== 0 && (d = "0" + d);
        for (var g = 0; g < d[v(152)]; g += 2)
          m[v(608)](parseInt(d[g] + d[g + 1], 16));
      } else
        for (var g = 0; g < d[v(152)]; g++) {
          var k = d.charCodeAt(g),
            S = k >> 8,
            B = k & 255;
          S ? m[v(608)](S, B) : m[v(608)](B);
        }
      return m;
    }
    t.toArray = r;
    function a(d) {
      var l = O;
      return d[l(152)] === 1 ? "0" + d : d;
    }
    t[x(1728)] = a;
    function s(d) {
      for (var l = "", v = 0; v < d.length; v++) l += a(d[v].toString(16));
      return l;
    }
    (t.toHex = s),
      (t[x(1664)] = function (l, v) {
        var m = x;
        return v === m(622) ? s(l) : l;
      });
  }),
  Ex = tt(function (n, e) {
    var x = c,
      t = e;
    (t[x(543)] = Fn),
      (t[x(947)] = Dx[x(947)]),
      (t[x(1728)] = Dx[x(1728)]),
      (t[x(1423)] = Dx[x(1423)]),
      (t[x(1664)] = Dx[x(1664)]);
    function r(v, m, g) {
      var k = x,
        S = new Array(Math[k(521)](v[k(1044)](), g) + 1);
      S.fill(0);
      for (var B = 1 << (m + 1), R = v.clone(), D = 0; D < S[k(152)]; D++) {
        var P,
          I = R.andln(B - 1);
        R[k(950)]()
          ? (I > (B >> 1) - 1 ? (P = (B >> 1) - I) : (P = I), R[k(1198)](P))
          : (P = 0),
          (S[D] = P),
          R[k(1064)](1);
      }
      return S;
    }
    t[x(1568)] = r;
    function a(v, m) {
      var g = x,
        k = [[], []];
      (v = v[g(307)]()), (m = m.clone());
      for (var S = 0, B = 0, R; v[g(491)](-S) > 0 || m[g(491)](-B) > 0; ) {
        var D = (v[g(1319)](3) + S) & 3,
          P = (m[g(1319)](3) + B) & 3;
        D === 3 && (D = -1), P === 3 && (P = -1);
        var I;
        (D & 1) === 0
          ? (I = 0)
          : ((R = (v[g(1319)](7) + S) & 7),
            (R === 3 || R === 5) && P === 2 ? (I = -D) : (I = D)),
          k[0][g(608)](I);
        var K;
        (P & 1) === 0
          ? (K = 0)
          : ((R = (m[g(1319)](7) + B) & 7),
            (R === 3 || R === 5) && D === 2 ? (K = -P) : (K = P)),
          k[1][g(608)](K),
          2 * S === I + 1 && (S = 1 - S),
          2 * B === K + 1 && (B = 1 - B),
          v[g(1064)](1),
          m[g(1064)](1);
      }
      return k;
    }
    t[x(1976)] = a;
    function s(v, m, g) {
      var k = x,
        S = "_" + m;
      v[k(1024)][m] = function () {
        var R = k;
        return this[S] !== void 0 ? this[S] : (this[S] = g[R(1340)](this));
      };
    }
    t[x(580)] = s;
    function d(v) {
      var m = x;
      return typeof v === m(1721) ? t.toArray(v, m(622)) : v;
    }
    t[x(1344)] = d;
    function l(v) {
      var m = x;
      return new r0(v, m(622), "le");
    }
    t[x(1521)] = l;
  }),
  xr = Ex[c(1568)],
  zc = Ex[c(1976)],
  kr = Ex.assert;
function $x(n, e) {
  var x = c;
  (this[x(577)] = n),
    (this.p = new r0(e.p, 16)),
    (this[x(1484)] = e[x(1911)] ? r0[x(1484)](e[x(1911)]) : r0[x(303)](this.p)),
    (this.zero = new r0(0).toRed(this[x(1484)])),
    (this[x(992)] = new r0(1)[x(564)](this[x(1484)])),
    (this[x(739)] = new r0(2)[x(564)](this[x(1484)])),
    (this.n = e.n && new r0(e.n, 16)),
    (this.g = e.g && this[x(1948)](e.g, e[x(1249)])),
    (this[x(656)] = new Array(4)),
    (this[x(1972)] = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this[x(224)] = new Array(4)),
    (this[x(862)] = this.n ? this.n[x(1044)]() : 0);
  var t = this.n && this.p[x(213)](this.n);
  !t || t[x(491)](100) > 0
    ? (this[x(1909)] = null)
    : ((this[x(1534)] = !![]), (this.redN = this.n.toRed(this[x(1484)])));
}
var Ke = $x;
($x[c(1024)][c(1905)] = function () {
  var e = c;
  throw new Error(e(1256));
}),
  ($x[c(1024)][c(293)] = function () {
    var e = c;
    throw new Error(e(1256));
  }),
  ($x[c(1024)][c(1133)] = function (e, x) {
    var t = c;
    kr(e[t(716)]);
    var r = e._getDoubles(),
      a = xr(x, 1, this[t(862)]),
      s = (1 << (r[t(1050)] + 1)) - (r[t(1050)] % 2 === 0 ? 2 : 1);
    s /= 3;
    var d = [],
      l,
      v;
    for (l = 0; l < a[t(152)]; l += r.step) {
      v = 0;
      for (var m = l + r[t(1050)] - 1; m >= l; m--) v = (v << 1) + a[m];
      d.push(v);
    }
    for (
      var g = this[t(1498)](null, null, null),
        k = this[t(1498)](null, null, null),
        S = s;
      S > 0;
      S--
    ) {
      for (l = 0; l < d.length; l++)
        (v = d[l]),
          v === S
            ? (k = k[t(1877)](r[t(1005)][l]))
            : v === -S && (k = k[t(1877)](r[t(1005)][l][t(840)]()));
      g = g[t(1607)](k);
    }
    return g[t(437)]();
  }),
  ($x[c(1024)][c(1673)] = function (e, x) {
    var t = c,
      r = 4,
      a = e[t(1387)](r);
    r = a[t(749)];
    for (
      var s = a[t(1005)],
        d = xr(x, r, this._bitLength),
        l = this.jpoint(null, null, null),
        v = d[t(152)] - 1;
      v >= 0;
      v--
    ) {
      for (var m = 0; v >= 0 && d[v] === 0; v--) m++;
      if ((v >= 0 && m++, (l = l[t(592)](m)), v < 0)) break;
      var g = d[v];
      kr(g !== 0),
        e.type === "affine"
          ? g > 0
            ? (l = l[t(1877)](s[(g - 1) >> 1]))
            : (l = l.mixedAdd(s[(-g - 1) >> 1][t(840)]()))
          : g > 0
          ? (l = l.add(s[(g - 1) >> 1]))
          : (l = l[t(1607)](s[(-g - 1) >> 1][t(840)]()));
    }
    return e[t(577)] === "affine" ? l[t(437)]() : l;
  }),
  ($x.prototype[c(393)] = function (e, x, t, r, a) {
    var s = c,
      d = this[s(656)],
      l = this[s(1972)],
      v = this._wnafT3,
      m = 0,
      g,
      k,
      S;
    for (g = 0; g < r; g++) {
      S = x[g];
      var B = S[s(1387)](e);
      (d[g] = B[s(749)]), (l[g] = B[s(1005)]);
    }
    for (g = r - 1; g >= 1; g -= 2) {
      var R = g - 1,
        D = g;
      if (d[R] !== 1 || d[D] !== 1) {
        (v[R] = xr(t[R], d[R], this[s(862)])),
          (v[D] = xr(t[D], d[D], this._bitLength)),
          (m = Math.max(v[R][s(152)], m)),
          (m = Math.max(v[D].length, m));
        continue;
      }
      var P = [x[R], null, null, x[D]];
      x[R].y.cmp(x[D].y) === 0
        ? ((P[1] = x[R][s(1607)](x[D])),
          (P[2] = x[R].toJ().mixedAdd(x[D][s(840)]())))
        : x[R].y[s(1999)](x[D].y[s(1192)]()) === 0
        ? ((P[1] = x[R][s(1442)]().mixedAdd(x[D])),
          (P[2] = x[R].add(x[D][s(840)]())))
        : ((P[1] = x[R][s(1442)]().mixedAdd(x[D])),
          (P[2] = x[R][s(1442)]().mixedAdd(x[D][s(840)]())));
      var I = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
        K = zc(t[R], t[D]);
      for (
        m = Math.max(K[0].length, m),
          v[R] = new Array(m),
          v[D] = new Array(m),
          k = 0;
        k < m;
        k++
      ) {
        var G = K[0][k] | 0,
          V = K[1][k] | 0;
        (v[R][k] = I[(G + 1) * 3 + (V + 1)]), (v[D][k] = 0), (l[R] = P);
      }
    }
    var j = this[s(1498)](null, null, null),
      L = this[s(224)];
    for (g = m; g >= 0; g--) {
      for (var Z = 0; g >= 0; ) {
        var $ = !![];
        for (k = 0; k < r; k++) (L[k] = v[k][g] | 0), L[k] !== 0 && ($ = ![]);
        if (!$) break;
        Z++, g--;
      }
      if ((g >= 0 && Z++, (j = j[s(592)](Z)), g < 0)) break;
      for (k = 0; k < r; k++) {
        var x0 = L[k];
        x0 !== 0 &&
          (x0 > 0
            ? (S = l[k][(x0 - 1) >> 1])
            : x0 < 0 && (S = l[k][(-x0 - 1) >> 1][s(840)]()),
          S[s(577)] === s(435) ? (j = j[s(1877)](S)) : (j = j[s(1607)](S)));
      }
    }
    for (g = 0; g < r; g++) l[g] = null;
    return a ? j : j[s(437)]();
  });
function Sx(n, e) {
  var x = c;
  (this[x(764)] = n), (this[x(577)] = e), (this[x(716)] = null);
}
($x[c(1113)] = Sx),
  (Sx[c(1024)].eq = function () {
    var e = c;
    throw new Error(e(1256));
  }),
  (Sx[c(1024)][c(293)] = function () {
    var e = c;
    return this.curve[e(293)](this);
  }),
  ($x[c(1024)][c(965)] = function (e, x) {
    var t = c;
    e = Ex.toArray(e, x);
    var r = this.p[t(234)]();
    if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e[t(152)] - 1 === 2 * r) {
      e[0] === 6
        ? kr(e[e[t(152)] - 1] % 2 === 0)
        : e[0] === 7 && kr(e[e[t(152)] - 1] % 2 === 1);
      var a = this[t(1905)](e[t(1095)](1, 1 + r), e[t(1095)](1 + r, 1 + 2 * r));
      return a;
    } else if ((e[0] === 2 || e[0] === 3) && e[t(152)] - 1 === r)
      return this[t(1548)](e[t(1095)](1, 1 + r), e[0] === 3);
    throw new Error(t(1714));
  }),
  (Sx[c(1024)][c(1377)] = function (e) {
    var x = c;
    return this[x(1664)](e, !![]);
  }),
  (Sx.prototype[c(904)] = function (e) {
    var x = c,
      t = this[x(764)].p[x(234)](),
      r = this[x(953)]()[x(947)]("be", t);
    return e
      ? [this[x(1659)]()[x(912)]() ? 2 : 3][x(1129)](r)
      : [4][x(1129)](r, this[x(1659)]().toArray("be", t));
  }),
  (Sx[c(1024)][c(1664)] = function (e, x) {
    var t = c;
    return Ex[t(1664)](this._encode(x), e);
  }),
  (Sx[c(1024)].precompute = function (e) {
    var x = c;
    if (this[x(716)]) return this;
    var t = { doubles: null, naf: null, beta: null };
    return (
      (t.naf = this._getNAFPoints(8)),
      (t[x(1201)] = this._getDoubles(4, e)),
      (t[x(483)] = this[x(446)]()),
      (this[x(716)] = t),
      this
    );
  }),
  (Sx.prototype._hasDoubles = function (e) {
    var x = c;
    if (!this.precomputed) return ![];
    var t = this.precomputed[x(1201)];
    return t
      ? t.points[x(152)] >= Math.ceil((e.bitLength() + 1) / t[x(1050)])
      : ![];
  }),
  (Sx[c(1024)]._getDoubles = function (e, x) {
    var t = c;
    if (this.precomputed && this.precomputed.doubles)
      return this[t(716)][t(1201)];
    for (var r = [this], a = this, s = 0; s < x; s += e) {
      for (var d = 0; d < e; d++) a = a[t(1912)]();
      r.push(a);
    }
    return { step: e, points: r };
  }),
  (Sx[c(1024)][c(1387)] = function (e) {
    var x = c;
    if (this[x(716)] && this.precomputed[x(478)]) return this[x(716)].naf;
    for (
      var t = [this],
        r = (1 << e) - 1,
        a = r === 1 ? null : this[x(1912)](),
        s = 1;
      s < r;
      s++
    )
      t[s] = t[s - 1].add(a);
    return { wnd: e, points: t };
  }),
  (Sx[c(1024)][c(446)] = function () {
    return null;
  }),
  (Sx[c(1024)].dblp = function (e) {
    for (var x = c, t = this, r = 0; r < e; r++) t = t[x(1912)]();
    return t;
  });
var Un = tt(function (n) {
    var e = c;
    typeof Object[e(1623)] === e(289)
      ? (n.exports = function (t, r) {
          var a = e;
          r &&
            ((t[a(735)] = r),
            (t[a(1024)] = Object[a(1623)](r.prototype, {
              constructor: {
                value: t,
                enumerable: ![],
                writable: !![],
                configurable: !![],
              },
            })));
        })
      : (n[e(1980)] = function (t, r) {
          var a = e;
          if (r) {
            t[a(735)] = r;
            var s = function () {};
            (s.prototype = r.prototype),
              (t.prototype = new s()),
              (t[a(1024)][a(891)] = t);
          }
        });
  }),
  Hc = Ex[c(543)];
function Tx(n) {
  var e = c;
  Ke.call(this, e(1713), n),
    (this.a = new r0(n.a, 16)[e(564)](this[e(1484)])),
    (this.b = new r0(n.b, 16)[e(564)](this[e(1484)])),
    (this.tinv = this.two[e(1017)]()),
    (this[e(226)] = this.a[e(1858)]()[e(491)](0) === 0),
    (this[e(228)] = this.a[e(1858)]().sub(this.p)[e(491)](-3) === 0),
    (this[e(1715)] = this._getEndomorphism(n)),
    (this[e(913)] = new Array(4)),
    (this[e(1325)] = new Array(4));
}
Un(Tx, Ke);
var Jc = Tx;
(Tx[c(1024)][c(1078)] = function (e) {
  var x = c;
  if (!(!this[x(226)] || !this.g || !this.n || this.p[x(1847)](3) !== 1)) {
    var t, r;
    if (e[x(483)]) t = new r0(e[x(483)], 16)[x(564)](this[x(1484)]);
    else {
      var a = this[x(1278)](this.p);
      (t = a[0][x(1999)](a[1]) < 0 ? a[0] : a[1]), (t = t[x(564)](this.red));
    }
    if (e[x(320)]) r = new r0(e[x(320)], 16);
    else {
      var s = this[x(1278)](this.n);
      this.g[x(1426)](s[0]).x[x(1999)](this.g.x[x(465)](t)) === 0
        ? (r = s[0])
        : ((r = s[1]), Hc(this.g.mul(r).x[x(1999)](this.g.x[x(465)](t)) === 0));
    }
    var d;
    return (
      e[x(686)]
        ? (d = e[x(686)][x(794)](function (l) {
            return { a: new r0(l.a, 16), b: new r0(l.b, 16) };
          }))
        : (d = this._getEndoBasis(r)),
      { beta: t, lambda: r, basis: d }
    );
  }
}),
  (Tx[c(1024)][c(1278)] = function (e) {
    var x = c,
      t = e === this.p ? this[x(1484)] : r0.mont(e),
      r = new r0(2).toRed(t)[x(1017)](),
      a = r[x(1192)](),
      s = new r0(3)[x(564)](t).redNeg()[x(640)]()[x(465)](r),
      d = a[x(1153)](s).fromRed(),
      l = a.redSub(s).fromRed();
    return [d, l];
  }),
  (Tx[c(1024)][c(663)] = function (e) {
    for (
      var x = c,
        t = this.n[x(1928)](Math.floor(this.n[x(1044)]() / 2)),
        r = e,
        a = this.n[x(307)](),
        s = new r0(1),
        d = new r0(0),
        l = new r0(0),
        v = new r0(1),
        m,
        g,
        k,
        S,
        B,
        R,
        D,
        P = 0,
        I,
        K;
      r[x(491)](0) !== 0;

    ) {
      var G = a.div(r);
      (I = a.sub(G[x(1426)](r))), (K = l.sub(G[x(1426)](s)));
      var V = v[x(440)](G[x(1426)](d));
      if (!k && I.cmp(t) < 0)
        (m = D[x(840)]()), (g = s), (k = I[x(840)]()), (S = K);
      else if (k && ++P === 2) break;
      (D = I), (a = r), (r = I), (l = s), (s = K), (v = d), (d = V);
    }
    (B = I[x(840)]()), (R = K);
    var j = k[x(1435)]()[x(1607)](S[x(1435)]()),
      L = B.sqr()[x(1607)](R.sqr());
    return (
      L[x(1999)](j) >= 0 && ((B = m), (R = g)),
      k[x(870)] && ((k = k[x(840)]()), (S = S[x(840)]())),
      B.negative && ((B = B[x(840)]()), (R = R.neg())),
      [
        { a: k, b: S },
        { a: B, b: R },
      ]
    );
  }),
  (Tx[c(1024)][c(1515)] = function (e) {
    var x = c,
      t = this[x(1715)][x(686)],
      r = t[0],
      a = t[1],
      s = a.b[x(1426)](e)[x(1525)](this.n),
      d = r.b.neg()[x(1426)](e).divRound(this.n),
      l = s.mul(r.a),
      v = d[x(1426)](a.a),
      m = s.mul(r.b),
      g = d[x(1426)](a.b),
      k = e.sub(l)[x(440)](v),
      S = m[x(1607)](g)[x(840)]();
    return { k1: k, k2: S };
  }),
  (Tx[c(1024)].pointFromX = function (e, x) {
    var t = c;
    (e = new r0(e, 16)), e[t(1484)] || (e = e[t(564)](this[t(1484)]));
    var r = e[t(595)]()[t(465)](e)[t(279)](e[t(465)](this.a))[t(279)](this.b),
      a = r.redSqrt();
    if (a[t(595)]()[t(364)](r)[t(1999)](this[t(1127)]) !== 0)
      throw new Error(t(1869));
    var s = a[t(1858)]()[t(950)]();
    return ((x && !s) || (!x && s)) && (a = a[t(1192)]()), this.point(e, a);
  }),
  (Tx[c(1024)].validate = function (e) {
    var x = c;
    if (e[x(1287)]) return !![];
    var t = e.x,
      r = e.y,
      a = this.a.redMul(t),
      s = t.redSqr()[x(465)](t).redIAdd(a)[x(279)](this.b);
    return r.redSqr()[x(1634)](s)[x(491)](0) === 0;
  }),
  (Tx[c(1024)]._endoWnafMulAdd = function (e, x, t) {
    for (
      var r = c, a = this._endoWnafT1, s = this[r(1325)], d = 0;
      d < e[r(152)];
      d++
    ) {
      var l = this[r(1515)](x[d]),
        v = e[d],
        m = v[r(446)]();
      l.k1.negative && (l.k1[r(993)](), (v = v[r(840)](!![]))),
        l.k2[r(870)] && (l.k2[r(993)](), (m = m[r(840)](!![]))),
        (a[d * 2] = v),
        (a[d * 2 + 1] = m),
        (s[d * 2] = l.k1),
        (s[d * 2 + 1] = l.k2);
    }
    for (var g = this[r(393)](1, a, s, d * 2, t), k = 0; k < d * 2; k++)
      (a[k] = null), (s[k] = null);
    return g;
  });
function sx(n, e, x, t) {
  var r = c;
  Ke.BasePoint[r(1340)](this, n, r(435)),
    e === null && x === null
      ? ((this.x = null), (this.y = null), (this[r(1287)] = !![]))
      : ((this.x = new r0(e, 16)),
        (this.y = new r0(x, 16)),
        t &&
          (this.x[r(1997)](this[r(764)][r(1484)]),
          this.y.forceRed(this[r(764)].red)),
        this.x[r(1484)] || (this.x = this.x[r(564)](this.curve.red)),
        this.y[r(1484)] || (this.y = this.y[r(564)](this.curve[r(1484)])),
        (this[r(1287)] = ![]));
}
Un(sx, Ke[c(1113)]),
  (Tx[c(1024)][c(1905)] = function (e, x, t) {
    return new sx(this, e, x, t);
  }),
  (Tx.prototype[c(1948)] = function (e, x) {
    var t = c;
    return sx[t(331)](this, e, x);
  }),
  (sx[c(1024)][c(446)] = function () {
    var e = c;
    if (!!this[e(764)][e(1715)]) {
      var x = this[e(716)];
      if (x && x.beta) return x[e(483)];
      var t = this[e(764)].point(
        this.x[e(465)](this[e(764)][e(1715)].beta),
        this.y
      );
      if (x) {
        var r = this[e(764)],
          a = function (s) {
            var d = e;
            return r[d(1905)](s.x[d(465)](r[d(1715)][d(483)]), s.y);
          };
        (x[e(483)] = t),
          (t.precomputed = {
            beta: null,
            naf: x[e(478)] && {
              wnd: x.naf.wnd,
              points: x[e(478)][e(1005)].map(a),
            },
            doubles: x[e(1201)] && {
              step: x[e(1201)][e(1050)],
              points: x.doubles[e(1005)][e(794)](a),
            },
          });
      }
      return t;
    }
  }),
  (sx.prototype[c(781)] = function () {
    var e = c;
    return this[e(716)]
      ? [
          this.x,
          this.y,
          this[e(716)] && {
            doubles: this[e(716)][e(1201)] && {
              step: this[e(716)][e(1201)][e(1050)],
              points: this[e(716)][e(1201)][e(1005)][e(1095)](1),
            },
            naf: this[e(716)][e(478)] && {
              wnd: this[e(716)][e(478)][e(749)],
              points: this[e(716)].naf[e(1005)][e(1095)](1),
            },
          },
        ]
      : [this.x, this.y];
  }),
  (sx[c(331)] = function (e, x, t) {
    var r = c;
    typeof x === r(1721) && (x = JSON[r(1698)](x));
    var a = e[r(1905)](x[0], x[1], t);
    if (!x[2]) return a;
    function s(l) {
      var v = r;
      return e[v(1905)](l[0], l[1], t);
    }
    var d = x[2];
    return (
      (a.precomputed = {
        beta: null,
        doubles: d[r(1201)] && {
          step: d[r(1201)][r(1050)],
          points: [a][r(1129)](d[r(1201)][r(1005)][r(794)](s)),
        },
        naf: d.naf && {
          wnd: d[r(478)].wnd,
          points: [a][r(1129)](d[r(478)][r(1005)][r(794)](s)),
        },
      }),
      a
    );
  }),
  (sx.prototype[c(1466)] = function () {
    var e = c;
    return this[e(1826)]()
      ? e(1761)
      : e(1327) +
          this.x[e(1858)]().toString(16, 2) +
          e(432) +
          this.y[e(1858)]()[e(1628)](16, 2) +
          ">";
  }),
  (sx[c(1024)][c(1826)] = function () {
    var e = c;
    return this[e(1287)];
  }),
  (sx[c(1024)][c(1607)] = function (e) {
    var x = c;
    if (this[x(1287)]) return e;
    if (e[x(1287)]) return this;
    if (this.eq(e)) return this[x(1912)]();
    if (this[x(840)]().eq(e)) return this.curve.point(null, null);
    if (this.x.cmp(e.x) === 0) return this.curve[x(1905)](null, null);
    var t = this.y[x(364)](e.y);
    t[x(491)](0) !== 0 && (t = t[x(465)](this.x[x(364)](e.x)[x(1017)]()));
    var r = t[x(595)]()[x(1634)](this.x).redISub(e.x),
      a = t.redMul(this.x[x(364)](r)).redISub(this.y);
    return this[x(764)][x(1905)](r, a);
  }),
  (sx[c(1024)][c(1912)] = function () {
    var e = c;
    if (this[e(1287)]) return this;
    var x = this.y[e(1153)](this.y);
    if (x[e(491)](0) === 0) return this[e(764)].point(null, null);
    var t = this.curve.a,
      r = this.x[e(595)](),
      a = x[e(1017)](),
      s = r[e(1153)](r).redIAdd(r)[e(279)](t)[e(465)](a),
      d = s.redSqr()[e(1634)](this.x[e(1153)](this.x)),
      l = s[e(465)](this.x[e(364)](d)).redISub(this.y);
    return this[e(764)][e(1905)](d, l);
  }),
  (sx.prototype.getX = function () {
    return this.x.fromRed();
  }),
  (sx.prototype[c(1659)] = function () {
    var e = c;
    return this.y[e(1858)]();
  }),
  (sx.prototype[c(1426)] = function (e) {
    var x = c;
    return (
      (e = new r0(e, 16)),
      this[x(1826)]()
        ? this
        : this._hasDoubles(e)
        ? this[x(764)][x(1133)](this, e)
        : this[x(764)][x(1715)]
        ? this.curve[x(1765)]([this], [e])
        : this.curve[x(1673)](this, e)
    );
  }),
  (sx[c(1024)][c(1412)] = function (e, x, t) {
    var r = c,
      a = [this, x],
      s = [e, t];
    return this[r(764)].endo
      ? this[r(764)][r(1765)](a, s)
      : this[r(764)][r(393)](1, a, s, 2);
  }),
  (sx[c(1024)][c(976)] = function (e, x, t) {
    var r = c,
      a = [this, x],
      s = [e, t];
    return this[r(764)][r(1715)]
      ? this[r(764)][r(1765)](a, s, !![])
      : this[r(764)][r(393)](1, a, s, 2, !![]);
  }),
  (sx[c(1024)].eq = function (e) {
    var x = c;
    return (
      this === e ||
      (this[x(1287)] === e[x(1287)] &&
        (this[x(1287)] ||
          (this.x[x(1999)](e.x) === 0 && this.y[x(1999)](e.y) === 0)))
    );
  }),
  (sx[c(1024)][c(840)] = function (e) {
    var x = c;
    if (this.inf) return this;
    var t = this[x(764)].point(this.x, this.y[x(1192)]());
    if (e && this.precomputed) {
      var r = this.precomputed,
        a = function (s) {
          var d = x;
          return s[d(840)]();
        };
      t[x(716)] = {
        naf: r.naf && { wnd: r[x(478)].wnd, points: r.naf.points[x(794)](a) },
        doubles: r[x(1201)] && {
          step: r[x(1201)][x(1050)],
          points: r[x(1201)][x(1005)][x(794)](a),
        },
      };
    }
    return t;
  }),
  (sx[c(1024)][c(1442)] = function () {
    var e = c;
    if (this[e(1287)]) return this[e(764)][e(1498)](null, null, null);
    var x = this[e(764)].jpoint(this.x, this.y, this[e(764)][e(992)]);
    return x;
  });
function cx(n, e, x, t) {
  var r = c;
  Ke[r(1113)][r(1340)](this, n, r(253)),
    e === null && x === null && t === null
      ? ((this.x = this[r(764)][r(992)]),
        (this.y = this.curve.one),
        (this.z = new r0(0)))
      : ((this.x = new r0(e, 16)),
        (this.y = new r0(x, 16)),
        (this.z = new r0(t, 16))),
    this.x[r(1484)] || (this.x = this.x[r(564)](this[r(764)][r(1484)])),
    this.y[r(1484)] || (this.y = this.y[r(564)](this[r(764)].red)),
    this.z[r(1484)] || (this.z = this.z.toRed(this[r(764)].red)),
    (this[r(822)] = this.z === this[r(764)][r(992)]);
}
Un(cx, Ke[c(1113)]),
  (Tx[c(1024)].jpoint = function (e, x, t) {
    return new cx(this, e, x, t);
  }),
  (cx[c(1024)][c(437)] = function () {
    var e = c;
    if (this[e(1826)]()) return this[e(764)][e(1905)](null, null);
    var x = this.z[e(1017)](),
      t = x[e(595)](),
      r = this.x.redMul(t),
      a = this.y[e(465)](t)[e(465)](x);
    return this.curve[e(1905)](r, a);
  }),
  (cx[c(1024)][c(840)] = function () {
    var e = c;
    return this[e(764)].jpoint(this.x, this.y[e(1192)](), this.z);
  }),
  (cx[c(1024)][c(1607)] = function (e) {
    var x = c;
    if (this.isInfinity()) return e;
    if (e[x(1826)]()) return this;
    var t = e.z[x(595)](),
      r = this.z[x(595)](),
      a = this.x[x(465)](t),
      s = e.x[x(465)](r),
      d = this.y.redMul(t.redMul(e.z)),
      l = e.y[x(465)](r[x(465)](this.z)),
      v = a[x(364)](s),
      m = d[x(364)](l);
    if (v[x(491)](0) === 0)
      return m.cmpn(0) !== 0
        ? this[x(764)].jpoint(null, null, null)
        : this[x(1912)]();
    var g = v[x(595)](),
      k = g[x(465)](v),
      S = a[x(465)](g),
      B = m[x(595)]()[x(279)](k)[x(1634)](S).redISub(S),
      R = m.redMul(S[x(1634)](B))[x(1634)](d[x(465)](k)),
      D = this.z[x(465)](e.z)[x(465)](v);
    return this.curve.jpoint(B, R, D);
  }),
  (cx[c(1024)].mixedAdd = function (e) {
    var x = c;
    if (this[x(1826)]()) return e[x(1442)]();
    if (e.isInfinity()) return this;
    var t = this.z[x(595)](),
      r = this.x,
      a = e.x[x(465)](t),
      s = this.y,
      d = e.y[x(465)](t)[x(465)](this.z),
      l = r.redSub(a),
      v = s[x(364)](d);
    if (l[x(491)](0) === 0)
      return v[x(491)](0) !== 0
        ? this[x(764)][x(1498)](null, null, null)
        : this[x(1912)]();
    var m = l.redSqr(),
      g = m.redMul(l),
      k = r[x(465)](m),
      S = v[x(595)]()[x(279)](g)[x(1634)](k)[x(1634)](k),
      B = v[x(465)](k.redISub(S))[x(1634)](s[x(465)](g)),
      R = this.z[x(465)](l);
    return this.curve[x(1498)](S, B, R);
  }),
  (cx[c(1024)][c(592)] = function (e) {
    var x = c;
    if (e === 0) return this;
    if (this.isInfinity()) return this;
    if (!e) return this[x(1912)]();
    var t;
    if (this[x(764)][x(226)] || this[x(764)].threeA) {
      var r = this;
      for (t = 0; t < e; t++) r = r[x(1912)]();
      return r;
    }
    var a = this[x(764)].a,
      s = this[x(764)][x(401)],
      d = this.x,
      l = this.y,
      v = this.z,
      m = v[x(595)]()[x(595)](),
      g = l[x(1153)](l);
    for (t = 0; t < e; t++) {
      var k = d[x(595)](),
        S = g[x(595)](),
        B = S[x(595)](),
        R = k.redAdd(k)[x(279)](k).redIAdd(a[x(465)](m)),
        D = d.redMul(S),
        P = R.redSqr()[x(1634)](D.redAdd(D)),
        I = D[x(1634)](P),
        K = R[x(465)](I);
      K = K[x(279)](K)[x(1634)](B);
      var G = g[x(465)](v);
      t + 1 < e && (m = m[x(465)](B)), (d = P), (v = G), (g = K);
    }
    return this[x(764)][x(1498)](d, g[x(465)](s), v);
  }),
  (cx[c(1024)][c(1912)] = function () {
    var e = c;
    return this[e(1826)]()
      ? this
      : this[e(764)].zeroA
      ? this[e(1046)]()
      : this.curve[e(228)]
      ? this[e(1353)]()
      : this[e(1554)]();
  }),
  (cx[c(1024)][c(1046)] = function () {
    var e = c,
      x,
      t,
      r;
    if (this[e(822)]) {
      var a = this.x[e(595)](),
        s = this.y[e(595)](),
        d = s[e(595)](),
        l = this.x.redAdd(s)[e(595)]().redISub(a)[e(1634)](d);
      l = l[e(279)](l);
      var v = a[e(1153)](a)[e(279)](a),
        m = v.redSqr()[e(1634)](l).redISub(l),
        g = d[e(279)](d);
      (g = g.redIAdd(g)),
        (g = g[e(279)](g)),
        (x = m),
        (t = v[e(465)](l[e(1634)](m))[e(1634)](g)),
        (r = this.y[e(1153)](this.y));
    } else {
      var k = this.x[e(595)](),
        S = this.y[e(595)](),
        B = S[e(595)](),
        R = this.x.redAdd(S)[e(595)]()[e(1634)](k)[e(1634)](B);
      R = R[e(279)](R);
      var D = k[e(1153)](k)[e(279)](k),
        P = D[e(595)](),
        I = B[e(279)](B);
      (I = I.redIAdd(I)),
        (I = I[e(279)](I)),
        (x = P[e(1634)](R)[e(1634)](R)),
        (t = D[e(465)](R[e(1634)](x))[e(1634)](I)),
        (r = this.y[e(465)](this.z)),
        (r = r[e(279)](r));
    }
    return this.curve[e(1498)](x, t, r);
  }),
  (cx.prototype._threeDbl = function () {
    var e = c,
      x,
      t,
      r;
    if (this[e(822)]) {
      var a = this.x.redSqr(),
        s = this.y[e(595)](),
        d = s[e(595)](),
        l = this.x[e(1153)](s)[e(595)]().redISub(a)[e(1634)](d);
      l = l.redIAdd(l);
      var v = a[e(1153)](a)[e(279)](a).redIAdd(this[e(764)].a),
        m = v[e(595)]().redISub(l)[e(1634)](l);
      x = m;
      var g = d[e(279)](d);
      (g = g[e(279)](g)),
        (g = g.redIAdd(g)),
        (t = v.redMul(l[e(1634)](m))[e(1634)](g)),
        (r = this.y[e(1153)](this.y));
    } else {
      var k = this.z[e(595)](),
        S = this.y[e(595)](),
        B = this.x[e(465)](S),
        R = this.x.redSub(k)[e(465)](this.x[e(1153)](k));
      R = R[e(1153)](R)[e(279)](R);
      var D = B[e(279)](B);
      D = D[e(279)](D);
      var P = D[e(1153)](D);
      (x = R[e(595)]()[e(1634)](P)),
        (r = this.y[e(1153)](this.z).redSqr().redISub(S)[e(1634)](k));
      var I = S[e(595)]();
      (I = I[e(279)](I)),
        (I = I.redIAdd(I)),
        (I = I[e(279)](I)),
        (t = R[e(465)](D.redISub(x))[e(1634)](I));
    }
    return this[e(764)][e(1498)](x, t, r);
  }),
  (cx[c(1024)][c(1554)] = function () {
    var e = c,
      x = this[e(764)].a,
      t = this.x,
      r = this.y,
      a = this.z,
      s = a[e(595)]().redSqr(),
      d = t[e(595)](),
      l = r[e(595)](),
      v = d[e(1153)](d)[e(279)](d).redIAdd(x[e(465)](s)),
      m = t[e(1153)](t);
    m = m[e(279)](m);
    var g = m[e(465)](l),
      k = v.redSqr()[e(1634)](g[e(1153)](g)),
      S = g[e(1634)](k),
      B = l[e(595)]();
    (B = B[e(279)](B)), (B = B[e(279)](B)), (B = B[e(279)](B));
    var R = v.redMul(S)[e(1634)](B),
      D = r.redAdd(r).redMul(a);
    return this.curve[e(1498)](k, R, D);
  }),
  (cx[c(1024)][c(1155)] = function () {
    var e = c;
    if (!this.curve[e(226)]) return this.dbl().add(this);
    var x = this.x[e(595)](),
      t = this.y[e(595)](),
      r = this.z[e(595)](),
      a = t[e(595)](),
      s = x[e(1153)](x)[e(279)](x),
      d = s.redSqr(),
      l = this.x[e(1153)](t)[e(595)]()[e(1634)](x).redISub(a);
    (l = l[e(279)](l)), (l = l.redAdd(l)[e(279)](l)), (l = l[e(1634)](d));
    var v = l[e(595)](),
      m = a[e(279)](a);
    (m = m[e(279)](m)), (m = m[e(279)](m)), (m = m[e(279)](m));
    var g = s.redIAdd(l)[e(595)]().redISub(d)[e(1634)](v)[e(1634)](m),
      k = t[e(465)](g);
    (k = k[e(279)](k)), (k = k[e(279)](k));
    var S = this.x[e(465)](v).redISub(k);
    (S = S.redIAdd(S)), (S = S[e(279)](S));
    var B = this.y[e(465)](g[e(465)](m[e(1634)](g))[e(1634)](l[e(465)](v)));
    (B = B[e(279)](B)), (B = B[e(279)](B)), (B = B.redIAdd(B));
    var R = this.z[e(1153)](l).redSqr()[e(1634)](r)[e(1634)](v);
    return this[e(764)].jpoint(S, B, R);
  }),
  (cx.prototype[c(1426)] = function (e, x) {
    var t = c;
    return (e = new r0(e, x)), this[t(764)][t(1673)](this, e);
  }),
  (cx.prototype.eq = function (e) {
    var x = c;
    if (e.type === x(435)) return this.eq(e[x(1442)]());
    if (this === e) return !![];
    var t = this.z[x(595)](),
      r = e.z[x(595)]();
    if (this.x.redMul(r)[x(1634)](e.x[x(465)](t))[x(491)](0) !== 0) return ![];
    var a = t[x(465)](this.z),
      s = r[x(465)](e.z);
    return this.y[x(465)](s)[x(1634)](e.y[x(465)](a))[x(491)](0) === 0;
  }),
  (cx[c(1024)].eqXToP = function (e) {
    var x = c,
      t = this.z.redSqr(),
      r = e.toRed(this[x(764)][x(1484)]).redMul(t);
    if (this.x[x(1999)](r) === 0) return !![];
    for (var a = e[x(307)](), s = this[x(764)][x(1909)][x(465)](t); ; ) {
      if ((a[x(371)](this[x(764)].n), a[x(1999)](this[x(764)].p) >= 0))
        return ![];
      if ((r.redIAdd(s), this.x[x(1999)](r) === 0)) return !![];
    }
  }),
  (cx[c(1024)][c(1466)] = function () {
    var e = c;
    return this[e(1826)]()
      ? e(463)
      : e(1865) +
          this.x.toString(16, 2) +
          e(432) +
          this.y.toString(16, 2) +
          e(850) +
          this.z[e(1628)](16, 2) +
          ">";
  }),
  (cx[c(1024)][c(1826)] = function () {
    return this.z.cmpn(0) === 0;
  });
var dr = tt(function (n, e) {
    var x = c,
      t = e;
    (t.base = Ke), (t[x(1713)] = Jc), (t.mont = null), (t[x(642)] = null);
  }),
  lr = tt(function (n, e) {
    var x = c,
      t = e,
      r = Ex.assert;
    function a(l) {
      var v = O;
      l[v(577)] === v(1713)
        ? (this.curve = new dr[v(1713)](l))
        : l[v(577)] === v(642)
        ? (this[v(764)] = new dr[v(642)](l))
        : (this.curve = new dr[v(303)](l)),
        (this.g = this[v(764)].g),
        (this.n = this[v(764)].n),
        (this[v(1062)] = l[v(1062)]),
        r(this.g[v(293)](), "Invalid curve"),
        r(this.g[v(1426)](this.n).isInfinity(), v(1104));
    }
    t[x(403)] = a;
    function s(l, v) {
      var m = x;
      Object[m(782)](t, l, {
        configurable: !![],
        enumerable: !![],
        get: function () {
          var g = m,
            k = new a(v);
          return (
            Object[g(782)](t, l, {
              configurable: !![],
              enumerable: !![],
              value: k,
            }),
            k
          );
        },
      });
    }
    s("p192", {
      type: x(1713),
      prime: x(578),
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: x(851),
      n: x(1165),
      hash: yx[x(1933)],
      gRed: ![],
      g: [x(1931), x(1797)],
    }),
      s(x(1012), {
        type: x(1713),
        prime: "p224",
        p: x(797),
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: x(1556),
        n: x(1643),
        hash: yx[x(1933)],
        gRed: ![],
        g: [x(1483), x(1545)],
      }),
      s(x(1294), {
        type: x(1713),
        prime: null,
        p: x(1222),
        a: x(776),
        b: x(414),
        n: x(1669),
        hash: yx[x(1933)],
        gRed: ![],
        g: [
          x(197),
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      s(x(151), {
        type: x(1713),
        prime: null,
        p: x(531) + x(931),
        a: x(531) + x(1600),
        b: x(842) + x(400),
        n:
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 " +
          x(1125),
        hash: yx[x(1111)],
        gRed: ![],
        g: [
          x(867) + x(704),
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 " +
            x(983),
        ],
      }),
      s(x(489), {
        type: x(1713),
        prime: null,
        p: x(1788) + x(747) + x(605),
        a: x(1788) + x(747) + x(175),
        b:
          "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b " +
          x(954) +
          x(1491),
        n: x(1788) + x(1963) + x(1375),
        hash: yx.sha512,
        gRed: ![],
        g: [x(1975) + x(1753) + x(1509), x(1300) + x(249) + x(1516)],
      }),
      s(x(215), {
        type: "mont",
        prime: "p25519",
        p: x(1640),
        a: x(1968),
        b: "1",
        n: x(1774),
        hash: yx[x(1933)],
        gRed: ![],
        g: ["9"],
      }),
      s(x(1617), {
        type: x(642),
        prime: x(1760),
        p: x(1640),
        a: "-1",
        c: "1",
        d: x(701),
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: yx[x(1933)],
        gRed: ![],
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          x(487),
        ],
      });
    var d;
    try {
      d = null.crash();
    } catch (l) {
      d = void 0;
    }
    s(x(427), {
      type: "short",
      prime: x(1075),
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: yx[x(1933)],
      beta: x(1625),
      lambda: x(536),
      basis: [
        { a: x(337), b: x(1722) },
        { a: x(352), b: x(337) },
      ],
      gRed: ![],
      g: [x(1514), x(856), d],
    });
  });
function _x(n) {
  var e = c;
  if (!(this instanceof _x)) return new _x(n);
  (this[e(1062)] = n.hash),
    (this[e(756)] = !!n[e(756)]),
    (this[e(667)] = this[e(1062)][e(1313)]),
    (this[e(645)] = n.minEntropy || this[e(1062)][e(1296)]),
    (this[e(1867)] = null),
    (this[e(163)] = null),
    (this.K = null),
    (this.V = null);
  var x = Dx[e(947)](n[e(538)], n[e(359)] || e(622)),
    t = Dx[e(947)](n.nonce, n.nonceEnc || e(622)),
    r = Dx.toArray(n[e(1892)], n[e(439)] || e(622));
  Fn(x[e(152)] >= this[e(645)] / 8, e(1366) + this.minEntropy + " bits"),
    this._init(x, t, r);
}
var Aa = _x;
(_x.prototype[c(150)] = function (e, x, t) {
  var r = c,
    a = e.concat(x).concat(t);
  (this.K = new Array(this[r(667)] / 8)), (this.V = new Array(this.outLen / 8));
  for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
  this._update(a), (this[r(1867)] = 1), (this[r(163)] = 281474976710656);
}),
  (_x[c(1024)][c(429)] = function () {
    var e = c;
    return new yx[e(1624)](this.hash, this.K);
  }),
  (_x[c(1024)][c(1408)] = function (e) {
    var x = c,
      t = this[x(429)]()[x(1002)](this.V).update([0]);
    e && (t = t[x(1002)](e)),
      (this.K = t[x(1809)]()),
      (this.V = this._hmac()[x(1002)](this.V)[x(1809)]()),
      e &&
        ((this.K = this[x(429)]()
          [x(1002)](this.V)
          .update([1])
          [x(1002)](e)
          [x(1809)]()),
        (this.V = this[x(429)]()[x(1002)](this.V)[x(1809)]()));
  }),
  (_x.prototype.reseed = function (e, x, t, r) {
    var a = c;
    typeof x !== a(1721) && ((r = t), (t = x), (x = null)),
      (e = Dx[a(947)](e, x)),
      (t = Dx[a(947)](t, r)),
      Fn(e.length >= this[a(645)] / 8, a(1366) + this.minEntropy + a(1593)),
      this[a(1408)](e[a(1129)](t || [])),
      (this[a(1867)] = 1);
  }),
  (_x.prototype[c(1383)] = function (e, x, t, r) {
    var a = c;
    if (this[a(1867)] > this[a(163)]) throw new Error(a(180));
    typeof x != "string" && ((r = t), (t = x), (x = null)),
      t && ((t = Dx[a(947)](t, r || a(622))), this[a(1408)](t));
    for (var s = []; s[a(152)] < e; )
      (this.V = this[a(429)]().update(this.V)[a(1809)]()),
        (s = s.concat(this.V));
    var d = s[a(1095)](0, e);
    return this._update(t), this[a(1867)]++, Dx[a(1664)](d, x);
  });
var Qr = Ex[c(543)];
function hx(n, e) {
  var x = c;
  (this.ec = n),
    (this.priv = null),
    (this[x(810)] = null),
    e[x(1496)] && this[x(917)](e[x(1496)], e[x(1790)]),
    e[x(810)] && this[x(1719)](e[x(810)], e[x(1363)]);
}
var Vr = hx;
(hx[c(1908)] = function (e, x, t) {
  return x instanceof hx ? x : new hx(e, { pub: x, pubEnc: t });
}),
  (hx[c(737)] = function (e, x, t) {
    return x instanceof hx ? x : new hx(e, { priv: x, privEnc: t });
  }),
  (hx[c(1024)][c(293)] = function () {
    var e = c,
      x = this[e(1518)]();
    return x.isInfinity()
      ? { result: ![], reason: e(1979) }
      : x.validate()
      ? x[e(1426)](this.ec.curve.n)[e(1826)]()
        ? { result: !![], reason: null }
        : { result: ![], reason: "Public key * N != O" }
      : { result: ![], reason: e(1506) };
  }),
  (hx.prototype[c(1518)] = function (e, x) {
    var t = c;
    return (
      typeof e === t(1721) && ((x = e), (e = null)),
      this.pub || (this[t(810)] = this.ec.g[t(1426)](this[t(1496)])),
      x ? this[t(810)].encode(x, e) : this[t(810)]
    );
  }),
  (hx[c(1024)][c(507)] = function (e) {
    var x = c;
    return e === "hex" ? this[x(1496)][x(1628)](16, 2) : this[x(1496)];
  }),
  (hx[c(1024)][c(917)] = function (e, x) {
    var t = c;
    (this[t(1496)] = new r0(e, x || 16)),
      (this[t(1496)] = this[t(1496)][t(940)](this.ec.curve.n));
  }),
  (hx[c(1024)][c(1719)] = function (e, x) {
    var t = c;
    if (e.x || e.y) {
      this.ec.curve[t(577)] === t(303)
        ? Qr(e.x, "Need x coordinate")
        : (this.ec.curve[t(577)] === t(1713) ||
            this.ec.curve[t(577)] === t(642)) &&
          Qr(e.x && e.y, t(609)),
        (this[t(810)] = this.ec[t(764)].point(e.x, e.y));
      return;
    }
    this.pub = this.ec.curve.decodePoint(e, x);
  }),
  (hx[c(1024)][c(351)] = function (e) {
    var x = c;
    return (
      !e.validate() && Qr(e[x(293)](), x(513)),
      e[x(1426)](this[x(1496)])[x(953)]()
    );
  }),
  (hx[c(1024)][c(316)] = function (e, x, t) {
    var r = c;
    return this.ec[r(316)](e, this, x, t);
  }),
  (hx.prototype[c(1815)] = function (e, x) {
    var t = c;
    return this.ec[t(1815)](e, x, this);
  }),
  (hx[c(1024)][c(1466)] = function () {
    var e = c;
    return (
      e(894) +
      (this[e(1496)] && this[e(1496)][e(1628)](16, 2)) +
      e(826) +
      (this[e(810)] && this.pub[e(1466)]()) +
      " >"
    );
  });
var jc = Ex[c(543)];
function Or(n, e) {
  var x = c;
  if (n instanceof Or) return n;
  this[x(1468)](n, e) ||
    (jc(n.r && n.s, "Signature without r or s"),
    (this.r = new r0(n.r, 16)),
    (this.s = new r0(n.s, 16)),
    n[x(1447)] === void 0
      ? (this[x(1447)] = null)
      : (this[x(1447)] = n[x(1447)]));
}
var er = Or;
function Wc() {
  var n = c;
  this[n(188)] = 0;
}
function Yr(n, e) {
  var x = c,
    t = n[e[x(188)]++];
  if (!(t & 128)) return t;
  var r = t & 15;
  if (r === 0 || r > 4) return ![];
  for (var a = 0, s = 0, d = e[x(188)]; s < r; s++, d++)
    (a <<= 8), (a |= n[d]), (a >>>= 0);
  return a <= 127 ? ![] : ((e[x(188)] = d), a);
}
function Ma(n) {
  for (
    var e = c, x = 0, t = n[e(152)] - 1;
    !n[x] && !(n[x + 1] & 128) && x < t;

  )
    x++;
  return x === 0 ? n : n[e(1095)](x);
}
Or[c(1024)][c(1468)] = function (e, x) {
  var t = c;
  e = Ex[t(947)](e, x);
  var r = new Wc();
  if (e[r[t(188)]++] !== 48) return ![];
  var a = Yr(e, r);
  if (a === ![]) return ![];
  if (a + r[t(188)] !== e[t(152)]) return ![];
  if (e[r.place++] !== 2) return ![];
  var s = Yr(e, r);
  if (s === ![]) return ![];
  var d = e[t(1095)](r[t(188)], s + r[t(188)]);
  if (((r[t(188)] += s), e[r[t(188)]++] !== 2)) return ![];
  var l = Yr(e, r);
  if (l === ![]) return ![];
  if (e[t(152)] !== l + r[t(188)]) return ![];
  var v = e[t(1095)](r.place, l + r[t(188)]);
  if (d[0] === 0)
    if (d[1] & 128) d = d.slice(1);
    else return ![];
  if (v[0] === 0)
    if (v[1] & 128) v = v[t(1095)](1);
    else return ![];
  return (
    (this.r = new r0(d)), (this.s = new r0(v)), (this[t(1447)] = null), !![]
  );
};
function Xr(n, e) {
  var x = c;
  if (e < 128) {
    n[x(608)](e);
    return;
  }
  var t = 1 + ((Math[x(599)](e) / Math[x(1952)]) >>> 3);
  for (n[x(608)](t | 128); --t; ) n[x(608)]((e >>> (t << 3)) & 255);
  n[x(608)](e);
}
Or[c(1024)][c(886)] = function (e) {
  var x = c,
    t = this.r[x(947)](),
    r = this.s.toArray();
  for (
    t[0] & 128 && (t = [0].concat(t)),
      r[0] & 128 && (r = [0][x(1129)](r)),
      t = Ma(t),
      r = Ma(r);
    !r[0] && !(r[1] & 128);

  )
    r = r[x(1095)](1);
  var a = [2];
  Xr(a, t[x(152)]), (a = a.concat(t)), a[x(608)](2), Xr(a, r.length);
  var s = a[x(1129)](r),
    d = [48];
  return Xr(d, s[x(152)]), (d = d[x(1129)](s)), Ex[x(1664)](d, e);
};
var Qc = function () {
    var n = c;
    throw new Error(n(903));
  },
  Yi = Ex[c(543)];
function Cx(n) {
  var e = c;
  if (!(this instanceof Cx)) return new Cx(n);
  typeof n === e(1721) &&
    (Yi(Object[e(1024)].hasOwnProperty[e(1340)](lr, n), e(1205) + n),
    (n = lr[n])),
    n instanceof lr[e(403)] && (n = { curve: n }),
    (this.curve = n[e(764)].curve),
    (this.n = this[e(764)].n),
    (this.nh = this.n[e(1928)](1)),
    (this.g = this[e(764)].g),
    (this.g = n.curve.g),
    this.g[e(1901)](n[e(764)].n.bitLength() + 1),
    (this[e(1062)] = n[e(1062)] || n[e(764)].hash);
}
var Vc = Cx;
(Cx.prototype[c(1906)] = function (e) {
  return new Vr(this, e);
}),
  (Cx.prototype[c(1216)] = function (e, x) {
    return Vr.fromPrivate(this, e, x);
  }),
  (Cx[c(1024)][c(208)] = function (e, x) {
    var t = c;
    return Vr[t(1908)](this, e, x);
  }),
  (Cx[c(1024)][c(927)] = function (e) {
    var x = c;
    e || (e = {});
    for (
      var t = new Aa({
          hash: this[x(1062)],
          pers: e[x(1892)],
          persEnc: e.persEnc || x(1899),
          entropy: e[x(538)] || Qc(this.hash.hmacStrength),
          entropyEnc: (e[x(538)] && e.entropyEnc) || "utf8",
          nonce: this.n.toArray(),
        }),
        r = this.n[x(234)](),
        a = this.n[x(440)](new r0(2));
      ;

    ) {
      var s = new r0(t[x(1383)](r));
      if (!(s[x(1999)](a) > 0)) return s.iaddn(1), this[x(1216)](s);
    }
  }),
  (Cx[c(1024)][c(1397)] = function (e, x) {
    var t = c,
      r = e[t(234)]() * 8 - this.n[t(1044)]();
    return (
      r > 0 && (e = e[t(1928)](r)),
      !x && e[t(1999)](this.n) >= 0 ? e[t(440)](this.n) : e
    );
  }),
  (Cx[c(1024)][c(316)] = function (e, x, t, r) {
    var a = c;
    typeof t === a(661) && ((r = t), (t = null)),
      r || (r = {}),
      (x = this.keyFromPrivate(x, t)),
      (e = this[a(1397)](new r0(e, 16)));
    for (
      var s = this.n[a(234)](),
        d = x[a(507)]().toArray("be", s),
        l = e[a(947)]("be", s),
        v = new Aa({
          hash: this.hash,
          entropy: d,
          nonce: l,
          pers: r.pers,
          persEnc: r[a(439)] || a(1899),
        }),
        m = this.n.sub(new r0(1)),
        g = 0;
      ;
      g++
    ) {
      var k = r.k ? r.k(g) : new r0(v.generate(this.n[a(234)]()));
      if (
        ((k = this[a(1397)](k, !![])),
        !(k[a(491)](1) <= 0 || k[a(1999)](m) >= 0))
      ) {
        var S = this.g[a(1426)](k);
        if (!S[a(1826)]()) {
          var B = S[a(953)](),
            R = B.umod(this.n);
          if (R[a(491)](0) !== 0) {
            var D = k[a(176)](this.n)[a(1426)](R.mul(x[a(507)]())[a(371)](e));
            if (((D = D[a(940)](this.n)), D[a(491)](0) !== 0)) {
              var P =
                (S.getY().isOdd() ? 1 : 0) | (B[a(1999)](R) !== 0 ? 2 : 0);
              return (
                r[a(1053)] &&
                  D[a(1999)](this.nh) > 0 &&
                  ((D = this.n.sub(D)), (P ^= 1)),
                new er({ r: R, s: D, recoveryParam: P })
              );
            }
          }
        }
      }
    }
  }),
  (Cx[c(1024)][c(1815)] = function (e, x, t, r) {
    var a = c;
    (e = this._truncateToN(new r0(e, 16))),
      (t = this[a(208)](t, r)),
      (x = new er(x, a(622)));
    var s = x.r,
      d = x.s;
    if (s[a(491)](1) < 0 || s[a(1999)](this.n) >= 0) return ![];
    if (d.cmpn(1) < 0 || d[a(1999)](this.n) >= 0) return ![];
    var l = d[a(176)](this.n),
      v = l[a(1426)](e)[a(940)](this.n),
      m = l[a(1426)](s)[a(940)](this.n),
      g;
    return this.curve[a(1534)]
      ? ((g = this.g[a(976)](v, t[a(1518)](), m)),
        g[a(1826)]() ? ![] : g[a(1794)](s))
      : ((g = this.g[a(1412)](v, t[a(1518)](), m)),
        g[a(1826)]() ? ![] : g[a(953)]().umod(this.n)[a(1999)](s) === 0);
  }),
  (Cx[c(1024)].recoverPubKey = function (n, e, x, t) {
    var r = c;
    Yi((3 & x) === x, r(526)), (e = new er(e, t));
    var a = this.n,
      s = new r0(n),
      d = e.r,
      l = e.s,
      v = x & 1,
      m = x >> 1;
    if (d[r(1999)](this[r(764)].p[r(940)](this.curve.n)) >= 0 && m)
      throw new Error(r(1656));
    m
      ? (d = this[r(764)][r(1548)](d.add(this.curve.n), v))
      : (d = this[r(764)][r(1548)](d, v));
    var g = e.r.invm(a),
      k = a[r(440)](s)[r(1426)](g)[r(940)](a),
      S = l[r(1426)](g)[r(940)](a);
    return this.g[r(1412)](k, d, S);
  }),
  (Cx[c(1024)].getKeyRecoveryParam = function (n, e, x, t) {
    var r = c;
    if (((e = new er(e, t)), e.recoveryParam !== null)) return e[r(1447)];
    for (var a = 0; a < 4; a++) {
      var s;
      try {
        s = this[r(1255)](n, e, a);
      } catch (d) {
        continue;
      }
      if (s.eq(x)) return a;
    }
    throw new Error(r(1034));
  });
var Yc = tt(function (n, e) {
    var x = c,
      t = e;
    (t[x(1844)] = { version: x(581) }[x(1844)]),
      (t[x(1927)] = Ex),
      (t[x(1740)] = function () {
        throw new Error("unsupported");
      }),
      (t[x(764)] = dr),
      (t[x(1536)] = lr),
      (t.ec = Vc),
      (t[x(264)] = null);
  }),
  Xc = Yc.ec;
const Zc = "signing-key/5.7.0",
  hn = new T(Zc);
let Zr = null;
function Lx() {
  return !Zr && (Zr = new Xc("secp256k1")), Zr;
}
class Ie {
  constructor(e) {
    var x = c;
    F(this, x(764), x(427)),
      F(this, x(1627), H(e)),
      Hx(this.privateKey) !== 32 && hn[x(1839)](x(1404), x(1627), x(1464));
    const t = Lx()[x(1216)](q(this[x(1627)]));
    F(this, x(677), "0x" + t[x(1518)](![], x(622))),
      F(this, x(1507), "0x" + t[x(1518)](!![], x(622))),
      F(this, x(1679), !![]);
  }
  [c(969)](e) {
    var x = c;
    const t = Lx().keyFromPublic(q(this[x(677)])),
      r = Lx()[x(208)](q(e));
    return "0x" + t[x(810)][x(1607)](r.pub)[x(1377)](x(622));
  }
  [c(269)](e) {
    var x = c;
    const t = Lx().keyFromPrivate(q(this.privateKey)),
      r = q(e);
    r[x(152)] !== 32 && hn[x(1839)](x(925), x(1809), e);
    const a = t[x(316)](r, { canonical: !![] });
    return Fe({
      recoveryParam: a[x(1447)],
      r: Y0("0x" + a.r.toString(16), 32),
      s: Y0("0x" + a.s[x(1628)](16), 32),
    });
  }
  [c(235)](e) {
    var x = c;
    const t = Lx()[x(1216)](q(this.privateKey)),
      r = Lx().keyFromPublic(q(Ln(e)));
    return Y0("0x" + t[x(351)](r.getPublic()).toString(16), 32);
  }
  static [c(690)](e) {
    return !!(e && e._isSigningKey);
  }
}
function Xi(n, e) {
  var x = c;
  const t = Fe(e),
    r = { r: q(t.r), s: q(t.s) };
  return "0x" + Lx().recoverPubKey(q(n), r, t[x(1447)]).encode(x(622), ![]);
}
function Ln(n, e) {
  var x = c;
  const t = q(n);
  if (t[x(152)] === 32) {
    const r = new Ie(t);
    return e ? "0x" + Lx()[x(1216)](t)[x(1518)](!![], x(622)) : r.publicKey;
  } else {
    if (t.length === 33)
      return e ? H(t) : "0x" + Lx().keyFromPublic(t).getPublic(![], x(622));
    if (t[x(152)] === 65)
      return e ? "0x" + Lx()[x(208)](t)[x(1518)](!![], "hex") : H(t);
  }
  return hn.throwArgumentError("invalid public or private key", "key", x(1818));
}
const $c = c(334),
  lx = new T($c);
var dn;
(function (n) {
  var e = c;
  (n[(n[e(1328)] = 0)] = e(1328)),
    (n[(n.eip2930 = 1)] = e(1699)),
    (n[(n[e(220)] = 2)] = "eip1559");
})(dn || (dn = {}));
function Gn(n) {
  return n === "0x" ? null : j0(n);
}
function dx(n) {
  var e = c;
  return n === "0x" ? Pn : z[e(1180)](n);
}
const _c = [
    { name: "nonce", maxLength: 32, numeric: !![] },
    { name: "gasPrice", maxLength: 32, numeric: !![] },
    { name: c(1550), maxLength: 32, numeric: !![] },
    { name: "to", length: 20 },
    { name: c(1204), maxLength: 32, numeric: !![] },
    { name: "data" },
  ],
  xo = {
    chainId: !![],
    data: !![],
    gasLimit: !![],
    gasPrice: !![],
    nonce: !![],
    to: !![],
    type: !![],
    value: !![],
  };
function ne(n) {
  const e = Ln(n);
  return j0(tx(Q0(tx(e, 1)), 12));
}
function Yt(n, e) {
  return ne(Xi(q(n), e));
}
function Ax(n, e) {
  var x = c;
  const t = zx(z[x(1180)](n)[x(1304)]());
  return t[x(152)] > 32 && lx[x(1839)](x(1956) + e, x(587) + e, n), t;
}
function $r(n, e) {
  return {
    address: j0(n),
    storageKeys: (e || []).map((x, t) => {
      var r = O;
      return (
        Hx(x) !== 32 &&
          lx[r(1839)](
            "invalid access list storageKey",
            "accessList[" + n + ":" + t + "]",
            x
          ),
        x[r(177)]()
      );
    }),
  };
}
function fe(n) {
  var e = c;
  if (Array[e(1900)](n))
    return n[e(794)]((t, r) => {
      var a = e;
      return Array.isArray(t)
        ? (t[a(152)] > 2 &&
            lx[a(1839)](
              "access list expected to be [ address, storageKeys[] ]",
              a(155) + r + "]",
              t
            ),
          $r(t[0], t[1]))
        : $r(t[a(1531)], t[a(369)]);
    });
  const x = Object[e(319)](n)[e(794)]((t) => {
    var r = e;
    const a = n[t][r(582)]((s, d) => ((s[d] = !![]), s), {});
    return $r(t, Object[r(319)](a).sort());
  });
  return x[e(760)]((t, r) => t.address[e(374)](r[e(1531)])), x;
}
function Zi(n) {
  var e = c;
  return fe(n).map((x) => [x[e(1531)], x[e(369)]]);
}
function $i(n, e) {
  var x = c;
  if (n[x(1772)] != null) {
    const r = z[x(1180)](n[x(1772)]),
      a = z.from(n[x(1042)] || 0);
    !r.eq(a) &&
      lx[x(1839)]("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
        gasPrice: r,
        maxFeePerGas: a,
      });
  }
  const t = [
    Ax(n.chainId || 0, "chainId"),
    Ax(n[x(1361)] || 0, x(1361)),
    Ax(n[x(1445)] || 0, x(1445)),
    Ax(n[x(1042)] || 0, x(1042)),
    Ax(n[x(1550)] || 0, x(1550)),
    n.to != null ? j0(n.to) : "0x",
    Ax(n[x(1204)] || 0, x(1204)),
    n[x(1086)] || "0x",
    Zi(n.accessList || []),
  ];
  if (e) {
    const r = Fe(e);
    t.push(Ax(r[x(1447)], "recoveryParam")),
      t.push(zx(r.r)),
      t[x(608)](zx(r.s));
  }
  return vx([x(848), Oe(t)]);
}
function _i(n, e) {
  var x = c;
  const t = [
    Ax(n[x(1923)] || 0, "chainId"),
    Ax(n[x(1361)] || 0, x(1361)),
    Ax(n.gasPrice || 0, "gasPrice"),
    Ax(n.gasLimit || 0, "gasLimit"),
    n.to != null ? j0(n.to) : "0x",
    Ax(n.value || 0, x(1204)),
    n[x(1086)] || "0x",
    Zi(n.accessList || []),
  ];
  if (e) {
    const r = Fe(e);
    t[x(608)](Ax(r[x(1447)], x(1447))), t[x(608)](zx(r.r)), t[x(608)](zx(r.s));
  }
  return vx([x(246), Oe(t)]);
}
function eo(n, e) {
  var x = c;
  En(n, xo);
  const t = [];
  _c.forEach(function (d) {
    var l = O;
    let v = n[d[l(296)]] || [];
    const m = {};
    d[l(1622)] && (m[l(378)] = l(1579)),
      (v = q(H(v, m))),
      d[l(152)] &&
        v[l(152)] !== d.length &&
        v[l(152)] > 0 &&
        lx.throwArgumentError(l(1956) + d[l(296)], l(587) + d[l(296)], v),
      d[l(542)] &&
        ((v = zx(v)),
        v[l(152)] > d.maxLength &&
          lx[l(1839)](l(1956) + d[l(296)], l(587) + d[l(296)], v)),
      t[l(608)](H(v));
  });
  let r = 0;
  if (
    (n.chainId != null
      ? ((r = n.chainId),
        typeof r !== x(456) && lx[x(1839)](x(1670), x(1785), n))
      : e && !Wt(e) && e.v > 28 && (r = Math[x(305)]((e.v - 35) / 2)),
    r !== 0 && (t[x(608)](H(r)), t.push("0x"), t[x(608)]("0x")),
    !e)
  )
    return Oe(t);
  const a = Fe(e);
  let s = 27 + a[x(1447)];
  return (
    r !== 0
      ? (t[x(1196)](),
        t.pop(),
        t.pop(),
        (s += r * 2 + 8),
        a.v > 28 && a.v !== s && lx.throwArgumentError(x(845), x(1696), e))
      : a.v !== s && lx[x(1839)](x(845), "signature", e),
    t.push(H(s)),
    t.push(zx(q(a.r))),
    t[x(608)](zx(q(a.s))),
    Oe(t)
  );
}
function ln(n, e) {
  var x = c;
  if (n[x(577)] == null || n[x(577)] === 0)
    return (
      n.accessList != null && lx[x(1839)](x(1380), "transaction", n), eo(n, e)
    );
  switch (n[x(577)]) {
    case 1:
      return _i(n, e);
    case 2:
      return $i(n, e);
  }
  return lx[x(304)](x(1217) + n[x(577)], T.errors[x(854)], {
    operation: x(921),
    transactionType: n[x(577)],
  });
}
function xs(n, e, x) {
  var t = c;
  try {
    const r = dx(e[0])[t(1919)]();
    if (r !== 0 && r !== 1) throw new Error(t(868));
    n.v = r;
  } catch (r) {
    lx[t(1839)](t(358), "v", e[0]);
  }
  (n.r = Y0(e[1], 32)), (n.s = Y0(e[2], 32));
  try {
    const r = Q0(x(n));
    n[t(1180)] = Yt(r, { r: n.r, s: n.s, recoveryParam: n.v });
  } catch (r) {}
}
function to(n) {
  var e = c;
  const x = Tr(n.slice(1));
  x[e(152)] !== 9 && x[e(152)] !== 12 && lx[e(1839)](e(411), "payload", H(n));
  const t = dx(x[2]),
    r = dx(x[3]),
    a = {
      type: 2,
      chainId: dx(x[0]).toNumber(),
      nonce: dx(x[1])[e(1919)](),
      maxPriorityFeePerGas: t,
      maxFeePerGas: r,
      gasPrice: null,
      gasLimit: dx(x[4]),
      to: Gn(x[5]),
      value: dx(x[6]),
      data: x[7],
      accessList: fe(x[8]),
    };
  return x[e(152)] === 9 || ((a[e(1062)] = Q0(n)), xs(a, x[e(1095)](9), $i)), a;
}
function ro(n) {
  var e = c;
  const x = Tr(n.slice(1));
  x[e(152)] !== 8 && x.length !== 11 && lx[e(1839)](e(467), e(1469), H(n));
  const t = {
    type: 1,
    chainId: dx(x[0])[e(1919)](),
    nonce: dx(x[1])[e(1919)](),
    gasPrice: dx(x[2]),
    gasLimit: dx(x[3]),
    to: Gn(x[4]),
    value: dx(x[5]),
    data: x[6],
    accessList: fe(x[7]),
  };
  return x.length === 8 || ((t.hash = Q0(n)), xs(t, x[e(1095)](8), _i)), t;
}
function no(n) {
  var e = c;
  const x = Tr(n);
  x.length !== 9 &&
    x.length !== 6 &&
    lx[e(1839)]("invalid raw transaction", "rawTransaction", n);
  const t = {
    nonce: dx(x[0])[e(1919)](),
    gasPrice: dx(x[1]),
    gasLimit: dx(x[2]),
    to: Gn(x[3]),
    value: dx(x[4]),
    data: x[5],
    chainId: 0,
  };
  if (x[e(152)] === 6) return t;
  try {
    t.v = z[e(1180)](x[6])[e(1919)]();
  } catch (r) {
    return t;
  }
  if (
    ((t.r = Y0(x[7], 32)),
    (t.s = Y0(x[8], 32)),
    z[e(1180)](t.r).isZero() && z[e(1180)](t.s)[e(770)]())
  )
    (t[e(1923)] = t.v), (t.v = 0);
  else {
    (t.chainId = Math[e(305)]((t.v - 35) / 2)),
      t[e(1923)] < 0 && (t.chainId = 0);
    let r = t.v - 27;
    const a = x[e(1095)](0, 6);
    t[e(1923)] !== 0 &&
      (a[e(608)](H(t.chainId)),
      a[e(608)]("0x"),
      a[e(608)]("0x"),
      (r -= t.chainId * 2 + 8));
    const s = Q0(Oe(a));
    try {
      t[e(1180)] = Yt(s, { r: H(t.r), s: H(t.s), recoveryParam: r });
    } catch (d) {}
    t.hash = Q0(n);
  }
  return (t.type = null), t;
}
function es(n) {
  var e = c;
  const x = q(n);
  if (x[0] > 127) return no(x);
  switch (x[0]) {
    case 1:
      return ro(x);
    case 2:
      return to(x);
  }
  return lx[e(304)](e(1217) + x[0], T[e(1169)][e(854)], {
    operation: "parseTransaction",
    transactionType: x[0],
  });
}
const ao = c(990);
var ae =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      function d(m) {
        var g = O;
        try {
          v(t[g(1747)](m));
        } catch (k) {
          s(k);
        }
      }
      function l(m) {
        var g = O;
        try {
          v(t[g(1944)](m));
        } catch (k) {
          s(k);
        }
      }
      function v(m) {
        var g = O;
        m[g(252)] ? a(m[g(1204)]) : r(m[g(1204)]).then(d, l);
      }
      v((t = t.apply(n, e || [])).next());
    });
  };
const W0 = new T(ao),
  io = {
    chainId: !![],
    data: !![],
    from: !![],
    gasLimit: !![],
    gasPrice: !![],
    nonce: !![],
    to: !![],
    value: !![],
    type: !![],
    accessList: !![],
    maxFeePerGas: !![],
    maxPriorityFeePerGas: !![],
    customData: !![],
    ccipReadEnabled: !![],
  };
function Sr(n, e) {
  return ae(this, void 0, void 0, function* () {
    var x = O;
    const t = yield e;
    typeof t !== x(1721) && W0[x(1839)](x(1018), x(296), t);
    try {
      return j0(t);
    } catch (a) {}
    !n && W0.throwError(x(1191), T.errors[x(854)], { operation: x(767) });
    const r = yield n[x(767)](t);
    return r == null && W0.throwArgumentError(x(1746), x(296), t), r;
  });
}
function Rt(n, e, x) {
  return ae(this, void 0, void 0, function* () {
    var t = O;
    return Array[t(1900)](x)
      ? yield Promise[t(1149)](
          x.map((r, a) => {
            var s = t;
            return Rt(n, Array[s(1900)](e) ? e[a] : e[r[s(296)]], r);
          })
        )
      : x[t(577)] === t(1531)
      ? yield Sr(n, e)
      : x[t(577)] === "tuple"
      ? yield Rt(n, e, x[t(1245)])
      : x[t(882)] === t(588)
      ? Array[t(1900)](e)
        ? yield Promise[t(1149)](e[t(794)]((r) => Rt(n, r, x[t(802)])))
        : Promise.reject(
            W0[t(1395)]("invalid value for array", T[t(1169)][t(1897)], {
              argument: t(1204),
              value: e,
            })
          )
      : e;
  });
}
function Dr(n, e, x) {
  return ae(this, void 0, void 0, function* () {
    var t = O;
    let r = {};
    x[t(152)] === e.inputs[t(152)] + 1 &&
      typeof x[x[t(152)] - 1] === t(661) &&
      (r = X0(x.pop())),
      W0[t(1243)](x.length, e[t(308)][t(152)], t(1757)),
      n.signer
        ? r[t(1180)]
          ? (r[t(1180)] = xx({
              override: Sr(n.signer, r[t(1180)]),
              signer: n[t(380)].getAddress(),
            })[t(1494)]((m) =>
              ae(this, void 0, void 0, function* () {
                var g = t;
                return (
                  j0(m[g(380)]) !== m.override &&
                    W0.throwError(g(1985), T.errors[g(854)], {
                      operation: g(1193),
                    }),
                  m[g(1001)]
                );
              })
            ))
          : (r.from = n[t(380)][t(471)]())
        : r[t(1180)] && (r[t(1180)] = Sr(n[t(1362)], r.from));
    const a = yield xx({
        args: Rt(n[t(380)] || n[t(1362)], x, e[t(308)]),
        address: n[t(1080)],
        overrides: xx(r) || {},
      }),
      s = n[t(1743)][t(1500)](e, a.args),
      d = { data: s, to: a[t(1531)] },
      l = a.overrides;
    if (
      (l[t(1361)] != null && (d[t(1361)] = z[t(1180)](l.nonce)[t(1919)]()),
      l.gasLimit != null && (d[t(1550)] = z.from(l[t(1550)])),
      l[t(1772)] != null && (d.gasPrice = z[t(1180)](l[t(1772)])),
      l.maxFeePerGas != null && (d.maxFeePerGas = z.from(l.maxFeePerGas)),
      l.maxPriorityFeePerGas != null && (d[t(1445)] = z.from(l[t(1445)])),
      l[t(1180)] != null && (d[t(1180)] = l[t(1180)]),
      l.type != null && (d[t(577)] = l[t(577)]),
      l.accessList != null && (d[t(676)] = fe(l[t(676)])),
      d[t(1550)] == null && e[t(1230)] != null)
    ) {
      let m = 21e3;
      const g = q(s);
      for (let k = 0; k < g[t(152)]; k++) (m += 4), g[k] && (m += 64);
      d[t(1550)] = z[t(1180)](e[t(1230)]).add(m);
    }
    if (l[t(1204)]) {
      const m = z[t(1180)](l[t(1204)]);
      !m.isZero() &&
        !e[t(1925)] &&
        W0.throwError(
          "non-payable method cannot override value",
          T[t(1169)][t(854)],
          { operation: "overrides.value", value: r[t(1204)] }
        ),
        (d[t(1204)] = m);
    }
    l[t(1486)] && (d[t(1486)] = X0(l.customData)),
      l.ccipReadEnabled && (d[t(1434)] = !!l[t(1434)]),
      delete r[t(1361)],
      delete r[t(1550)],
      delete r.gasPrice,
      delete r[t(1180)],
      delete r.value,
      delete r[t(577)],
      delete r.accessList,
      delete r[t(1042)],
      delete r[t(1445)],
      delete r[t(1486)],
      delete r[t(1434)];
    const v = Object.keys(r).filter((m) => r[m] != null);
    return (
      v[t(152)] &&
        W0.throwError(
          t(184) + v[t(794)]((m) => JSON[t(657)](m))[t(1286)](","),
          T[t(1169)][t(854)],
          { operation: "overrides", overrides: v }
        ),
      d
    );
  });
}
function so(n, e) {
  return function (...x) {
    return Dr(n, e, x);
  };
}
function fo(n, e) {
  const x = n.signer || n.provider;
  return function (...t) {
    return ae(this, void 0, void 0, function* () {
      var r = O;
      !x &&
        W0[r(304)](r(980), T[r(1169)][r(854)], { operation: "estimateGas" });
      const a = yield Dr(n, e, t);
      return yield x[r(571)](a);
    });
  };
}
function ts(n, e) {
  var x = c;
  const t = e[x(666)].bind(e);
  e.wait = (r) =>
    t(r).then((a) => {
      var s = O;
      return (
        (a[s(1310)] = a[s(1035)][s(794)]((d) => {
          var l = s;
          let v = mx(d),
            m = null;
          try {
            m = n[l(1743)].parseLog(d);
          } catch (g) {}
          return (
            m &&
              ((v[l(941)] = m.args),
              (v[l(1022)] = (g, k) => {
                var S = l;
                return n[S(1743)][S(1738)](m[S(1915)], g, k);
              }),
              (v[l(547)] = m[l(296)]),
              (v[l(589)] = m[l(1696)])),
            (v[l(506)] = () => n.provider),
            (v[l(1041)] = () => {
              var g = l;
              return n[g(1362)][g(1041)](a.blockHash);
            }),
            (v.getTransaction = () => {
              var g = l;
              return n.provider[g(362)](a.transactionHash);
            }),
            (v[l(1055)] = () => Promise.resolve(a)),
            v
          );
        })),
        a
      );
    });
}
function rs(n, e, x) {
  var t = c;
  const r = n[t(380)] || n[t(1362)];
  return function (...a) {
    return ae(this, void 0, void 0, function* () {
      var s = O;
      let d;
      if (
        a[s(152)] === e[s(308)][s(152)] + 1 &&
        typeof a[a[s(152)] - 1] === s(661)
      ) {
        const m = X0(a.pop());
        m[s(561)] != null && (d = yield m.blockTag),
          delete m.blockTag,
          a[s(608)](m);
      }
      n.deployTransaction != null && (yield n[s(299)](d));
      const l = yield Dr(n, e, a),
        v = yield r[s(1340)](l, d);
      try {
        let m = n[s(1743)].decodeFunctionResult(e, v);
        return x && e[s(325)][s(152)] === 1 && (m = m[0]), m;
      } catch (m) {
        throw (
          (m.code === T[s(1169)][s(893)] &&
            ((m.address = n.address), (m[s(941)] = a), (m[s(1785)] = l)),
          m)
        );
      }
    });
  };
}
function co(n, e) {
  return function (...x) {
    return ae(this, void 0, void 0, function* () {
      var t = O;
      !n[t(380)] &&
        W0[t(304)](
          "sending a transaction requires a signer",
          T[t(1169)][t(854)],
          { operation: t(1177) }
        ),
        n[t(603)] != null && (yield n[t(299)]());
      const r = yield Dr(n, e, x),
        a = yield n[t(380)][t(1177)](r);
      return ts(n, a), a;
    });
  };
}
function Ea(n, e, x) {
  var t = c;
  return e[t(1482)] ? rs(n, e, x) : co(n, e);
}
function ns(n) {
  var e = c;
  return n.address && (n[e(967)] == null || n[e(967)][e(152)] === 0)
    ? "*"
    : (n[e(1531)] || "*") +
        "@" +
        (n[e(967)]
          ? n.topics
              .map((x) => {
                var t = e;
                return Array[t(1900)](x) ? x[t(1286)]("|") : x;
              })
              .join(":")
          : "");
}
class zt {
  constructor(e, x) {
    var t = c;
    F(this, t(748), e), F(this, t(196), x), (this._listeners = []);
  }
  [c(1013)](e, x) {
    var t = c;
    this[t(939)].push({ listener: e, once: x });
  }
  [c(506)](e) {
    let x = ![];
    this._listeners = this._listeners.filter((t) => {
      var r = O;
      return x || t[r(1458)] !== e ? !![] : ((x = !![]), ![]);
    });
  }
  [c(292)]() {
    var e = c;
    this[e(939)] = [];
  }
  [c(1036)]() {
    var e = c;
    return this[e(939)][e(794)]((x) => x[e(1458)]);
  }
  [c(1988)]() {
    var e = c;
    return this[e(939)].length;
  }
  [c(785)](e) {
    var x = c;
    const t = this[x(1988)]();
    return (
      (this._listeners = this[x(939)][x(196)]((r) => {
        var a = x;
        const s = e[a(1095)]();
        return (
          setTimeout(() => {
            var d = a;
            r[d(1458)][d(1429)](this, s);
          }, 0),
          !r[a(1298)]
        );
      })),
      t
    );
  }
  prepareEvent(e) {}
  [c(1605)](e) {
    return [e];
  }
}
class oo extends zt {
  constructor() {
    super("error", null);
  }
}
class ka extends zt {
  constructor(e, x, t, r) {
    var a = c;
    const s = { address: e };
    let d = x[a(963)](t);
    r
      ? (d !== r[0] && W0[a(1839)](a(929), a(967), r),
        (s[a(967)] = r[a(1095)]()))
      : (s[a(967)] = [d]),
      super(ns(s), s),
      F(this, "address", e),
      F(this, a(1743), x),
      F(this, a(1257), t);
  }
  [c(1989)](e) {
    var x = c;
    super.prepareEvent(e),
      (e[x(547)] = this[x(1257)].name),
      (e[x(589)] = this.fragment[x(504)]()),
      (e[x(1022)] = (t, r) => {
        var a = x;
        return this[a(1743)][a(1738)](this.fragment, t, r);
      });
    try {
      e[x(941)] = this[x(1743)][x(1738)](this.fragment, e[x(1086)], e[x(967)]);
    } catch (t) {
      (e[x(941)] = null), (e[x(1028)] = t);
    }
  }
  [c(1605)](e) {
    var x = c;
    const t = mi(e.args);
    if (t[x(152)]) throw t[0][x(779)];
    const r = (e[x(941)] || [])[x(1095)]();
    return r[x(608)](e), r;
  }
}
class Sa extends zt {
  constructor(e, x) {
    var t = c;
    super("*", { address: e }), F(this, t(1531), e), F(this, t(1743), x);
  }
  prepareEvent(e) {
    var x = c;
    super[x(1989)](e);
    try {
      const t = this[x(1743)].parseLog(e);
      (e[x(547)] = t[x(296)]),
        (e[x(589)] = t.signature),
        (e.decode = (r, a) => {
          var s = x;
          return this[s(1743)].decodeEventLog(t[s(1915)], r, a);
        }),
        (e.args = t.args);
    } catch (t) {}
  }
}
class as {
  constructor(e, x, t) {
    var r = c;
    F(this, r(1743), ux(new.target, r(699))(x)),
      t == null
        ? (F(this, r(1362), null), F(this, r(380), null))
        : se[r(1682)](t)
        ? (F(this, r(1362), t[r(1362)] || null), F(this, r(380), t))
        : Ge[r(166)](t)
        ? (F(this, "provider", t), F(this, "signer", null))
        : W0[r(1839)](r(550), r(570), t),
      F(this, r(1284), {}),
      F(this, "estimateGas", {}),
      F(this, r(466), {}),
      F(this, r(579), {}),
      F(this, "filters", {});
    {
      const d = {};
      Object[r(319)](this[r(1743)][r(1310)])[r(1745)]((l) => {
        var v = r;
        const m = this.interface[v(1310)][l];
        F(this[v(763)], l, (...g) => {
          var k = v;
          return {
            address: this[k(1531)],
            topics: this[k(1743)][k(1522)](m, g),
          };
        }),
          !d[m.name] && (d[m[v(296)]] = []),
          d[m[v(296)]].push(l);
      }),
        Object[r(319)](d).forEach((l) => {
          var v = r;
          const m = d[l];
          m[v(152)] === 1
            ? F(this[v(763)], l, this[v(763)][m[0]])
            : W0[v(830)](v(1977) + l + " (" + m[v(1286)](", ") + ")");
        });
    }
    if (
      (F(this, r(1955), {}),
      F(this, r(1145), {}),
      e == null &&
        W0[r(1839)]("invalid contract address or ENS name", r(276), e),
      F(this, r(1531), e),
      this[r(1362)])
    )
      F(this, "resolvedAddress", Sr(this.provider, e));
    else
      try {
        F(this, "resolvedAddress", Promise.resolve(j0(e)));
      } catch (d) {
        W0[r(304)](r(604), T[r(1169)][r(854)], { operation: r(649) });
      }
    this[r(1080)][r(1083)]((d) => {});
    const a = {},
      s = {};
    Object[r(319)](this[r(1743)][r(466)]).forEach((d) => {
      var l = r;
      const v = this.interface[l(466)][d];
      if (s[d]) {
        W0[l(830)]("Duplicate ABI entry for " + JSON[l(657)](d));
        return;
      }
      s[d] = !![];
      {
        const m = v.name;
        !a["%" + m] && (a["%" + m] = []), a["%" + m].push(d);
      }
      this[d] == null && F(this, d, Ea(this, v, !![])),
        this[l(466)][d] == null && F(this[l(466)], d, Ea(this, v, ![])),
        this.callStatic[d] == null && F(this[l(1284)], d, rs(this, v, !![])),
        this[l(579)][d] == null && F(this.populateTransaction, d, so(this, v)),
        this[l(571)][d] == null && F(this[l(571)], d, fo(this, v));
    }),
      Object[r(319)](a)[r(1745)]((d) => {
        var l = r;
        const v = a[d];
        if (v[l(152)] > 1) return;
        d = d[l(1329)](1);
        const m = v[0];
        try {
          this[d] == null && F(this, d, this[m]);
        } catch (g) {}
        this[l(466)][d] == null && F(this[l(466)], d, this.functions[m]),
          this[l(1284)][d] == null && F(this[l(1284)], d, this[l(1284)][m]),
          this.populateTransaction[d] == null &&
            F(this[l(579)], d, this[l(579)][m]),
          this[l(571)][d] == null &&
            F(this.estimateGas, d, this.estimateGas[m]);
      });
  }
  static [c(1164)](e) {
    return Ir(e);
  }
  static [c(699)](e) {
    var x = c;
    return un[x(1043)](e) ? e : new un(e);
  }
  deployed() {
    return this._deployed();
  }
  [c(299)](e) {
    var x = c;
    return (
      !this[x(1833)] &&
        (this[x(603)]
          ? (this._deployedPromise = this[x(603)].wait()[x(1494)](() => this))
          : (this[x(1833)] = this[x(1362)]
              [x(1087)](this.address, e)
              [x(1494)]((t) => {
                var r = x;
                return (
                  t === "0x" &&
                    W0.throwError("contract not deployed", T[r(1169)][r(854)], {
                      contractAddress: this[r(1531)],
                      operation: "getDeployed",
                    }),
                  this
                );
              }))),
      this[x(1833)]
    );
  }
  [c(232)](e) {
    var x = c;
    !this[x(380)] &&
      W0.throwError(
        "sending a transactions require a signer",
        T[x(1169)][x(854)],
        { operation: "sendTransaction(fallback)" }
      );
    const t = X0(e || {});
    return (
      [x(1180), "to"].forEach(function (r) {
        var a = x;
        t[r] != null &&
          W0[a(304)](a(184) + r, T[a(1169)].UNSUPPORTED_OPERATION, {
            operation: r,
          });
      }),
      (t.to = this[x(1080)]),
      this[x(694)]()[x(1494)](() => {
        var r = x;
        return this[r(380)].sendTransaction(t);
      })
    );
  }
  [c(1727)](e) {
    var x = c;
    typeof e === x(1721) && (e = new Rr(e, this[x(1362)]));
    const t = new this[x(891)](this.address, this[x(1743)], e);
    return (
      this.deployTransaction &&
        F(t, "deployTransaction", this.deployTransaction),
      t
    );
  }
  [c(1015)](e) {
    var x = c;
    return new this[x(891)](e, this.interface, this[x(380)] || this[x(1362)]);
  }
  static [c(389)](e) {
    var x = c;
    return Er[x(389)](e);
  }
  [c(1950)](e) {
    var x = c;
    return this[x(1955)][e[x(748)]] ? this[x(1955)][e[x(748)]] : e;
  }
  [c(1680)](e) {
    var x = c;
    if (typeof e === x(1721)) {
      if (e === "error") return this._normalizeRunningEvent(new oo());
      if (e === "event") return this[x(1950)](new zt(x(547), null));
      if (e === "*") return this[x(1950)](new Sa(this[x(1531)], this[x(1743)]));
      const t = this[x(1743)].getEvent(e);
      return this[x(1950)](new ka(this[x(1531)], this.interface, t));
    }
    if (e[x(967)] && e[x(967)].length > 0) {
      try {
        const r = e[x(967)][0];
        if (typeof r !== x(1721)) throw new Error(x(1137));
        const a = this[x(1743)][x(1936)](r);
        return this._normalizeRunningEvent(
          new ka(this[x(1531)], this.interface, a, e[x(967)])
        );
      } catch (r) {}
      const t = { address: this[x(1531)], topics: e.topics };
      return this._normalizeRunningEvent(new zt(ns(t), t));
    }
    return this._normalizeRunningEvent(new Sa(this[x(1531)], this[x(1743)]));
  }
  _checkRunningEvents(e) {
    var x = c;
    if (e[x(1988)]() === 0) {
      delete this[x(1955)][e[x(748)]];
      const t = this._wrappedEmits[e[x(748)]];
      t &&
        e.filter &&
        (this[x(1362)][x(327)](e[x(196)], t), delete this[x(1145)][e[x(748)]]);
    }
  }
  [c(803)](e, x, t) {
    var r = c;
    const a = mx(x);
    return (
      (a[r(506)] = () => {
        var s = r;
        !t || (e[s(506)](t), this[s(919)](e));
      }),
      (a[r(1041)] = () => {
        var s = r;
        return this.provider[s(1041)](x[s(1301)]);
      }),
      (a.getTransaction = () => {
        var s = r;
        return this[s(1362)][s(362)](x[s(586)]);
      }),
      (a[r(1055)] = () => {
        var s = r;
        return this[s(1362)][s(1055)](x[s(586)]);
      }),
      e.prepareEvent(a),
      a
    );
  }
  _addEventListener(e, x, t) {
    var r = c;
    if (
      (!this[r(1362)] &&
        W0[r(304)](r(1819), T[r(1169)][r(854)], { operation: r(1298) }),
      e[r(1013)](x, t),
      (this[r(1955)][e.tag] = e),
      !this[r(1145)][e[r(748)]])
    ) {
      const a = (s) => {
        var d = r;
        let l = this[d(803)](e, s, x);
        if (l[d(1028)] == null)
          try {
            const v = e[d(1605)](l);
            this[d(1830)](e[d(196)], ...v);
          } catch (v) {
            l.decodeError = v.error;
          }
        e.filter != null && this[d(1830)]("event", l),
          l.decodeError != null && this[d(1830)](d(779), l[d(1028)], l);
      };
      (this[r(1145)][e.tag] = a),
        e[r(196)] != null && this[r(1362)].on(e[r(196)], a);
    }
  }
  [c(1845)](e, x, t) {
    var r = c;
    const a = this._getRunningEvent(e),
      s = X0(a[r(196)]);
    return (
      typeof x == "string" && n0(x, 32)
        ? (t != null && W0.throwArgumentError(r(1233), r(1339), t),
          (s[r(1301)] = x))
        : ((s[r(815)] = x != null ? x : 0),
          (s[r(1339)] = t != null ? t : r(1626))),
      this[r(1362)].getLogs(s)[r(1494)]((d) => {
        var l = r;
        return d[l(794)]((v) => this[l(803)](a, v, null));
      })
    );
  }
  on(e, x) {
    var t = c;
    return this._addEventListener(this[t(1680)](e), x, ![]), this;
  }
  [c(1298)](e, x) {
    var t = c;
    return this[t(1241)](this[t(1680)](e), x, !![]), this;
  }
  [c(1830)](e, ...x) {
    var t = c;
    if (!this[t(1362)]) return ![];
    const r = this[t(1680)](e),
      a = r.run(x) > 0;
    return this._checkRunningEvents(r), a;
  }
  [c(1988)](e) {
    var x = c;
    return this.provider
      ? e == null
        ? Object[x(319)](this[x(1955)])[x(582)]((t, r) => {
            var a = x;
            return t + this[a(1955)][r][a(1988)]();
          }, 0)
        : this[x(1680)](e).listenerCount()
      : 0;
  }
  [c(1036)](e) {
    var x = c;
    if (!this[x(1362)]) return [];
    if (e == null) {
      const t = [];
      for (let r in this._runningEvents)
        this._runningEvents[r][x(1036)]()[x(1745)]((a) => {
          var s = x;
          t[s(608)](a);
        });
      return t;
    }
    return this[x(1680)](e)[x(1036)]();
  }
  [c(292)](e) {
    var x = c;
    if (!this[x(1362)]) return this;
    if (e == null) {
      for (const r in this._runningEvents) {
        const a = this[x(1955)][r];
        a[x(292)](), this[x(919)](a);
      }
      return this;
    }
    const t = this[x(1680)](e);
    return t[x(292)](), this[x(919)](t), this;
  }
  off(e, x) {
    var t = c;
    if (!this[t(1362)]) return this;
    const r = this[t(1680)](e);
    return r.removeListener(x), this._checkRunningEvents(r), this;
  }
  [c(506)](e, x) {
    var t = c;
    return this[t(327)](e, x);
  }
}
class bn extends as {}
class uo {
  constructor(e, x, t) {
    var r = c;
    let a = null;
    typeof x === r(1721)
      ? (a = x)
      : ie(x)
      ? (a = H(x))
      : x && typeof x.object == "string"
      ? (a = x.object)
      : (a = "!"),
      a[r(1329)](0, 2) !== "0x" && (a = "0x" + a),
      (!n0(a) || a[r(152)] % 2) && W0.throwArgumentError(r(1186), r(1994), x),
      t && !se[r(1682)](t) && W0.throwArgumentError(r(849), "signer", t),
      F(this, r(1994), a),
      F(this, r(1743), ux(new.target, r(699))(e)),
      F(this, r(380), t || null);
  }
  getDeployTransaction(...e) {
    var x = c;
    let t = {};
    if (
      e[x(152)] === this[x(1743)][x(266)][x(308)][x(152)] + 1 &&
      typeof e[e[x(152)] - 1] === x(661)
    ) {
      t = X0(e.pop());
      for (const r in t)
        if (!io[r]) throw new Error("unknown transaction override " + r);
    }
    return (
      [x(1086), x(1180), "to"][x(1745)]((r) => {
        var a = x;
        t[r] != null &&
          W0[a(304)](a(184) + r, T[a(1169)][a(854)], { operation: r });
      }),
      t[x(1204)] &&
        !z[x(1180)](t[x(1204)])[x(770)]() &&
        !this[x(1743)][x(266)][x(1925)] &&
        W0.throwError(x(348), T[x(1169)].UNSUPPORTED_OPERATION, {
          operation: x(1214),
          value: t[x(1204)],
        }),
      W0[x(1243)](e[x(152)], this[x(1743)][x(266)].inputs.length, x(1575)),
      (t.data = H(V0([this[x(1994)], this[x(1743)].encodeDeploy(e)]))),
      t
    );
  }
  [c(266)](...e) {
    return ae(this, void 0, void 0, function* () {
      var x = O;
      let t = {};
      e[x(152)] === this[x(1743)][x(266)][x(308)][x(152)] + 1 &&
        (t = e[x(1196)]()),
        W0.checkArgumentCount(
          e[x(152)],
          this[x(1743)][x(266)][x(308)][x(152)],
          x(1575)
        );
      const r = yield Rt(this[x(380)], e, this.interface[x(266)][x(308)]);
      r[x(608)](t);
      const a = this[x(1752)](...r),
        s = yield this[x(380)][x(1177)](a),
        d = ux(this[x(891)], x(1164))(s),
        l = ux(this[x(891)], x(1481))(d, this[x(1743)], this[x(380)]);
      return ts(l, s), F(l, "deployTransaction", s), l;
    });
  }
  attach(e) {
    var x = c;
    return this[x(891)][x(1481)](e, this[x(1743)], this.signer);
  }
  [c(1727)](e) {
    var x = c;
    return new this.constructor(this[x(1743)], this[x(1994)], e);
  }
  static [c(1795)](e, x) {
    var t = c;
    e == null &&
      W0.throwError(t(1315), T.errors[t(818)], { argument: t(1427) }),
      typeof e === t(1721) && (e = JSON[t(1698)](e));
    const r = e[t(1073)];
    let a = null;
    return (
      e[t(1994)]
        ? (a = e.bytecode)
        : e[t(606)] && e[t(606)].bytecode && (a = e[t(606)].bytecode),
      new this(r, a, x)
    );
  }
  static [c(699)](e) {
    var x = c;
    return bn[x(699)](e);
  }
  static [c(1164)](e) {
    return Ir(e);
  }
  static [c(1481)](e, x, t) {
    return new bn(e, x, t);
  }
}
class is {
  constructor(e) {
    var x = c;
    F(this, x(1701), e),
      F(this, x(981), e[x(152)]),
      F(this, x(212), {}),
      F(this, x(458), e.charAt(0));
    for (let t = 0; t < e[x(152)]; t++) this._alphabetMap[e.charAt(t)] = t;
  }
  [c(1664)](e) {
    var x = c;
    let t = q(e);
    if (t[x(152)] === 0) return "";
    let r = [0];
    for (let s = 0; s < t[x(152)]; ++s) {
      let d = t[s];
      for (let l = 0; l < r[x(152)]; ++l)
        (d += r[l] << 8),
          (r[l] = d % this[x(981)]),
          (d = (d / this[x(981)]) | 0);
      for (; d > 0; ) r[x(608)](d % this[x(981)]), (d = (d / this[x(981)]) | 0);
    }
    let a = "";
    for (let s = 0; t[s] === 0 && s < t.length - 1; ++s) a += this._leader;
    for (let s = r.length - 1; s >= 0; --s) a += this[x(1701)][r[s]];
    return a;
  }
  [c(1022)](e) {
    var x = c;
    if (typeof e !== x(1721)) throw new TypeError(x(1057));
    let t = [];
    if (e[x(152)] === 0) return new Uint8Array(t);
    t[x(608)](0);
    for (let r = 0; r < e[x(152)]; r++) {
      let a = this._alphabetMap[e[r]];
      if (a === void 0) throw new Error("Non-base" + this[x(981)] + x(410));
      let s = a;
      for (let d = 0; d < t[x(152)]; ++d)
        (s += t[d] * this[x(981)]), (t[d] = s & 255), (s >>= 8);
      for (; s > 0; ) t[x(608)](s & 255), (s >>= 8);
    }
    for (let r = 0; e[r] === this._leader && r < e[x(152)] - 1; ++r) t.push(0);
    return q(new Uint8Array(t[x(709)]()));
  }
}
new is(c(1128));
const _e = new is("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var xt;
(function (n) {
  var e = c;
  (n[e(1933)] = "sha256"), (n[e(726)] = e(726));
})(xt || (xt = {}));
const ho = c(1823),
  lo = new T(ho);
function ss(n) {
  var e = c;
  return "0x" + yx[e(1262)]()[e(1002)](q(n)).digest(e(622));
}
function Vx(n) {
  var e = c;
  return "0x" + yx.sha256().update(q(n))[e(1809)]("hex");
}
function bo(n) {
  var e = c;
  return "0x" + yx.sha512()[e(1002)](q(n))[e(1809)](e(622));
}
function Ht(n, e, x) {
  var t = c;
  return (
    !xt[n] &&
      lo[t(304)](t(425) + n, T[t(1169)][t(854)], {
        operation: t(1624),
        algorithm: n,
      }),
    "0x" + yx[t(1624)](yx[n], q(e))[t(1002)](q(x))[t(1809)](t(622))
  );
}
function Kn(n, e, x, t, r) {
  var a = c;
  (n = q(n)), (e = q(e));
  let s,
    d = 1;
  const l = new Uint8Array(t),
    v = new Uint8Array(e[a(152)] + 4);
  v.set(e);
  let m, g;
  for (let k = 1; k <= d; k++) {
    (v[e.length] = (k >> 24) & 255),
      (v[e[a(152)] + 1] = (k >> 16) & 255),
      (v[e.length + 2] = (k >> 8) & 255),
      (v[e[a(152)] + 3] = k & 255);
    let S = q(Ht(r, n, v));
    !s &&
      ((s = S.length),
      (g = new Uint8Array(s)),
      (d = Math[a(1277)](t / s)),
      (m = t - (d - 1) * s)),
      g[a(509)](S);
    for (let D = 1; D < x; D++) {
      S = q(Ht(r, n, S));
      for (let P = 0; P < s; P++) g[P] ^= S[P];
    }
    const B = (k - 1) * s,
      R = k === d ? m : s;
    l.set(q(g)[a(1095)](0, R), B);
  }
  return H(l);
}
const vo = c(322),
  po = new T(vo);
class rt {
  constructor(e) {
    po.checkAbstract(new.target, rt), F(this, "locale", e);
  }
  split(e) {
    var x = c;
    return e[x(177)]()[x(1418)](/ +/g);
  }
  [c(1286)](e) {
    var x = c;
    return e[x(1286)](" ");
  }
  static [c(1334)](e) {
    var x = c;
    const t = [];
    for (let r = 0; r < 2048; r++) {
      const a = e[x(1841)](r);
      if (r !== e[x(1092)](a)) return "0x";
      t[x(608)](a);
    }
    return re(
      t[x(1286)](`
`) +
        `
`
    );
  }
  static [c(1019)](e, x) {
    var t = c;
    !x && (x = e[t(1907)]);
  }
}
const mo = c(896);
let Ot = null;
function Pa(n) {
  var e = c;
  if (
    Ot == null &&
    ((Ot = mo[e(330)](/([A-Z])/g, e(344))
      [e(177)]()
      [e(1329)](1)
      [e(1418)](" ")),
    rt[e(1334)](n) !== e(1831))
  )
    throw ((Ot = null), new Error(e(1206)));
}
class go extends rt {
  constructor() {
    super("en");
  }
  [c(1841)](e) {
    return Pa(this), Ot[e];
  }
  [c(1092)](e) {
    return Pa(this), Ot.indexOf(e);
  }
}
const fs = new go();
rt[c(1019)](fs);
const vn = { en: fs },
  yo = c(1690),
  Jt = new T(yo),
  wo = z.from(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  Ao = ax(c(1359)),
  je = 2147483648;
function cs(n) {
  return ((1 << n) - 1) << (8 - n);
}
function Mo(n) {
  return (1 << n) - 1;
}
function tr(n) {
  return Y0(H(n), 32);
}
function Ca(n) {
  var e = c;
  return _e[e(1664)](V0([n, tx(Vx(Vx(n)), 0, 4)]));
}
function qn(n) {
  var e = c;
  if (n == null) return vn.en;
  if (typeof n === e(1721)) {
    const x = vn[n];
    return x == null && Jt[e(1839)](e(474), e(692), n), x;
  }
  return n;
}
const qe = {},
  et = "m/44'/60'/0'/0/0";
class Mx {
  constructor(e, x, t, r, a, s, d, l) {
    var v = c;
    if (e !== qe)
      throw new Error("HDNode constructor cannot be called directly");
    if (x) {
      const m = new Ie(x);
      F(this, v(1627), m.privateKey), F(this, "publicKey", m[v(1507)]);
    } else F(this, "privateKey", null), F(this, "publicKey", H(t));
    F(this, v(1422), r),
      F(this, v(1008), tx(ss(Vx(this[v(677)])), 0, 4)),
      F(this, v(1531), ne(this[v(677)])),
      F(this, v(623), a),
      F(this, v(1221), s),
      F(this, v(265), d),
      l == null
        ? (F(this, v(1957), null), F(this, v(1639), null))
        : typeof l === v(1721)
        ? (F(this, "mnemonic", null), F(this, v(1639), l))
        : (F(this, v(1957), l), F(this, v(1639), l.path));
  }
  get [c(799)]() {
    var e = c;
    if (this[e(265)] >= 256) throw new Error(e(156));
    return Ca(
      V0([
        this.privateKey != null ? e(698) : e(847),
        H(this[e(265)]),
        this[e(1422)],
        Y0(H(this[e(1221)]), 4),
        this[e(623)],
        this[e(1627)] != null ? V0(["0x00", this[e(1627)]]) : this[e(677)],
      ])
    );
  }
  [c(1589)]() {
    var e = c;
    return new Mx(
      qe,
      null,
      this.publicKey,
      this.parentFingerprint,
      this.chainCode,
      this[e(1221)],
      this.depth,
      this[e(1639)]
    );
  }
  [c(1439)](e) {
    var x = c;
    if (e > 4294967295) throw new Error("invalid index - " + String(e));
    let t = this[x(1639)];
    t && (t += "/" + (e & ~je));
    const r = new Uint8Array(37);
    if (e & je) {
      if (!this.privateKey) throw new Error(x(1984));
      r[x(509)](q(this.privateKey), 1), t && (t += "'");
    } else r[x(509)](q(this[x(677)]));
    for (let k = 24; k >= 0; k -= 8) r[33 + (k >> 3)] = (e >> (24 - k)) & 255;
    const a = q(Ht(xt[x(726)], this.chainCode, r)),
      s = a[x(1095)](0, 32),
      d = a[x(1095)](32);
    let l = null,
      v = null;
    this.privateKey
      ? (l = tr(z[x(1180)](s)[x(1607)](this.privateKey)[x(1265)](wo)))
      : (v = new Ie(H(s))[x(969)](this[x(677)]));
    let m = t;
    const g = this[x(1957)];
    return (
      g &&
        (m = Object[x(250)]({
          phrase: g.phrase,
          path: t,
          locale: g.locale || "en",
        })),
      new Mx(qe, l, v, this[x(1008)], tr(d), e, this[x(265)] + 1, m)
    );
  }
  derivePath(e) {
    var x = c;
    const t = e[x(1418)]("/");
    if (t[x(152)] === 0 || (t[0] === "m" && this[x(265)] !== 0))
      throw new Error(x(1916) + e);
    t[0] === "m" && t[x(1351)]();
    let r = this;
    for (let a = 0; a < t.length; a++) {
      const s = t[a];
      if (s[x(354)](/^[0-9]+'$/)) {
        const d = parseInt(s[x(1329)](0, s[x(152)] - 1));
        if (d >= je) throw new Error("invalid path index - " + s);
        r = r[x(1439)](je + d);
      } else if (s.match(/^[0-9]+$/)) {
        const d = parseInt(s);
        if (d >= je) throw new Error(x(651) + s);
        r = r._derive(d);
      } else throw new Error(x(897) + s);
    }
    return r;
  }
  static [c(1718)](e, x) {
    var t = c;
    const r = q(e);
    if (r[t(152)] < 16 || r[t(152)] > 64) throw new Error(t(598));
    const a = q(Ht(xt[t(726)], Ao, r));
    return new Mx(
      qe,
      tr(a.slice(0, 32)),
      null,
      t(680),
      tr(a[t(1095)](32)),
      0,
      0,
      x
    );
  }
  static [c(326)](e, x, t) {
    var r = c;
    return (
      (t = qn(t)),
      (e = Ur(Fr(e, t), t)),
      Mx[r(1718)](os(e, x), { phrase: e, path: "m", locale: t[r(1907)] })
    );
  }
  static [c(574)](e) {
    var x = c;
    return Mx[x(1718)](e, null);
  }
  static [c(711)](e) {
    var x = c;
    const t = _e.decode(e);
    (t[x(152)] !== 82 || Ca(t.slice(0, 78)) !== e) &&
      Jt[x(1839)]("invalid extended key", x(799), "[REDACTED]");
    const r = t[4],
      a = H(t[x(1095)](5, 9)),
      s = parseInt(H(t[x(1095)](9, 13))[x(1329)](2), 16),
      d = H(t.slice(13, 45)),
      l = t[x(1095)](45, 78);
    switch (H(t[x(1095)](0, 4))) {
      case x(1808):
      case x(484):
        return new Mx(qe, null, H(l), a, d, s, r, null);
      case x(153):
      case x(392):
        if (l[0] !== 0) break;
        return new Mx(qe, H(l[x(1095)](1)), null, a, d, s, r, null);
    }
    return Jt[x(1839)](x(537), x(799), x(1818));
  }
}
function os(n, e) {
  var x = c;
  !e && (e = "");
  const t = ax(x(1957) + e, Jx[x(1851)]);
  return Kn(ax(n, Jx.NFKD), t, 2048, 64, "sha512");
}
function Fr(n, e) {
  var x = c;
  (e = qn(e)), Jt.checkNormalize();
  const t = e.split(n);
  if (t[x(152)] % 3 !== 0) throw new Error(x(1635));
  const r = q(new Uint8Array(Math[x(1277)]((11 * t[x(152)]) / 8)));
  let a = 0;
  for (let m = 0; m < t[x(152)]; m++) {
    let g = e[x(1092)](t[m][x(814)](x(1851)));
    if (g === -1) throw new Error(x(1635));
    for (let k = 0; k < 11; k++)
      g & (1 << (10 - k)) && (r[a >> 3] |= 1 << (7 - (a % 8))), a++;
  }
  const s = (32 * t[x(152)]) / 3,
    d = t[x(152)] / 3,
    l = cs(d);
  if ((q(Vx(r[x(1095)](0, s / 8)))[0] & l) !== (r[r[x(152)] - 1] & l))
    throw new Error(x(611));
  return H(r[x(1095)](0, s / 8));
}
function Ur(n, e) {
  var x = c;
  if (
    ((e = qn(e)),
    (n = q(n)),
    n[x(152)] % 4 !== 0 || n[x(152)] < 16 || n[x(152)] > 32)
  )
    throw new Error(x(821));
  const t = [0];
  let r = 11;
  for (let d = 0; d < n[x(152)]; d++)
    r > 8
      ? ((t[t[x(152)] - 1] <<= 8), (t[t[x(152)] - 1] |= n[d]), (r -= 8))
      : ((t[t[x(152)] - 1] <<= r),
        (t[t[x(152)] - 1] |= n[d] >> (8 - r)),
        t[x(608)](n[d] & Mo(8 - r)),
        (r += 3));
  const a = n[x(152)] / 4,
    s = q(Vx(n))[0] & cs(a);
  return (
    (t[t.length - 1] <<= a),
    (t[t[x(152)] - 1] |= s >> (8 - a)),
    e[x(1286)](t[x(794)]((d) => e[x(1841)](d)))
  );
}
function Eo(n, e) {
  try {
    return Fr(n, e), !![];
  } catch (x) {}
  return ![];
}
function ko(n) {
  var e = c;
  return (
    (typeof n != "number" || n < 0 || n >= je || n % 1) &&
      Jt[e(1839)](e(1343), e(1221), n),
    e(1202) + n + e(664)
  );
}
const So = "random/5.7.0",
  pn = new T(So);
function Po() {
  var n = c;
  if (typeof self !== n(1333)) return self;
  if (typeof window !== n(1333)) return window;
  if (typeof Zn !== n(1333)) return Zn;
  throw new Error(n(1583));
}
const Ba = Po();
let br = Ba.crypto || Ba[c(1279)];
(!br || !br.getRandomValues) &&
  (pn[c(830)](c(1703)),
  (br = {
    getRandomValues: function (n) {
      var e = c;
      return pn[e(304)](
        "no secure random source avaialble",
        T[e(1169)][e(854)],
        { operation: e(675) }
      );
    },
  }));
function Ve(n) {
  var e = c;
  (n <= 0 || n > 1024 || n % 1 || n != n) &&
    pn[e(1839)]("invalid length", e(152), n);
  const x = new Uint8Array(n);
  return br.getRandomValues(x), q(x);
}
function us(n) {
  var e = c;
  n = n[e(1095)]();
  for (let x = n[e(152)] - 1; x > 0; x--) {
    const t = Math[e(305)](Math[e(659)]() * (x + 1)),
      r = n[x];
    (n[x] = n[t]), (n[t] = r);
  }
  return n;
}
var hs = { exports: {} };
(function (n, e) {
  (function (x) {
    var t = O;
    function r(A) {
      return parseInt(A) === A;
    }
    function a(A) {
      var b = O;
      if (!r(A[b(152)])) return ![];
      for (var u = 0; u < A.length; u++)
        if (!r(A[u]) || A[u] < 0 || A[u] > 255) return ![];
      return !![];
    }
    function s(A, b) {
      var u = O;
      if (A[u(395)] && ArrayBuffer[u(879)](A) && A.name === u(750))
        return (
          b &&
            (A[u(1095)]
              ? (A = A[u(1095)]())
              : (A = Array[u(1024)][u(1095)][u(1340)](A))),
          A
        );
      if (Array.isArray(A)) {
        if (!a(A)) throw new Error(u(1836) + A);
        return new Uint8Array(A);
      }
      if (r(A[u(152)]) && a(A)) return new Uint8Array(A);
      throw new Error(u(719));
    }
    function d(A) {
      return new Uint8Array(A);
    }
    function l(A, b, u, p, N) {
      var C = O;
      (p != null || N != null) &&
        (A[C(1095)]
          ? (A = A[C(1095)](p, N))
          : (A = Array[C(1024)][C(1095)][C(1340)](A, p, N))),
        b[C(509)](A, u);
    }
    var v = (function () {
        function A(u) {
          var p = O,
            N = [],
            C = 0;
          for (u = encodeURI(u); C < u[p(152)]; ) {
            var U = u.charCodeAt(C++);
            U === 37
              ? (N[p(608)](parseInt(u.substr(C, 2), 16)), (C += 2))
              : N[p(608)](U);
          }
          return s(N);
        }
        function b(u) {
          for (var p = O, N = [], C = 0; C < u[p(152)]; ) {
            var U = u[C];
            U < 128
              ? (N.push(String.fromCharCode(U)), C++)
              : U > 191 && U < 224
              ? (N[p(608)](
                  String.fromCharCode(((U & 31) << 6) | (u[C + 1] & 63))
                ),
                (C += 2))
              : (N.push(
                  String.fromCharCode(
                    ((U & 15) << 12) | ((u[C + 1] & 63) << 6) | (u[C + 2] & 63)
                  )
                ),
                (C += 3));
          }
          return N[p(1286)]("");
        }
        return { toBytes: A, fromBytes: b };
      })(),
      m = (function () {
        var A = O;
        function b(N) {
          for (var C = O, U = [], Q = 0; Q < N[C(152)]; Q += 2)
            U.push(parseInt(N[C(1179)](Q, 2), 16));
          return U;
        }
        var u = A(1400);
        function p(N) {
          for (var C = A, U = [], Q = 0; Q < N[C(152)]; Q++) {
            var J = N[Q];
            U[C(608)](u[(J & 240) >> 4] + u[J & 15]);
          }
          return U.join("");
        }
        return { toBytes: b, fromBytes: p };
      })(),
      g = { 16: 10, 24: 12, 32: 14 },
      k = [
        1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
        188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
      ],
      S = [
        99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
        118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164,
        114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113,
        216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39,
        178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227,
        47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76,
        88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60,
        159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16,
        255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61,
        100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20,
        222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98,
        145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244,
        234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221,
        116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53,
        87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155,
        30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104,
        65, 153, 45, 15, 176, 84, 187, 22,
      ],
      B = [
        82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251,
        124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233,
        203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195,
        78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209,
        37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101,
        182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167,
        141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5,
        184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1,
        19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206,
        240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55,
        232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183,
        98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219,
        192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18,
        16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229,
        122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
        235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225,
        105, 20, 99, 85, 33, 12, 125,
      ],
      R = [
        3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157,
        3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757,
        3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813,
        2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307,
        1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063,
        3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618,
        1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420,
        3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767,
        134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841,
        168101135, 798661301, 235341577, 605164086, 461406363, 3756188221,
        3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174,
        1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627,
        2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
        1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
        1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302,
        1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746,
        3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463,
        1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577,
        2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438,
        2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100,
        1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450,
        4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079,
        3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866,
        4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909,
        3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534,
        999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540,
        2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286,
        1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836,
        2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756,
        3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599,
        26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514,
        4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816,
        1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505,
        1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977,
        2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954,
        1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154,
        3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992,
        974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859,
        3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754,
        361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378,
        59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649,
        2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377,
        2075177163, 2824099068, 1841019862, 739644986,
      ],
      D = [
        2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
        2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
        434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
        1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
        3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
        2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398,
        1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525,
        886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517,
        201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806,
        252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786,
        651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339,
        1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112,
        4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187,
        1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861,
        1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867,
        3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471,
        1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773,
        1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647,
        4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603,
        3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005,
        3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895,
        251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324,
        3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751,
        2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019,
        2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034,
        2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540,
        2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
        1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516,
        1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981,
        936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389,
        2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294,
        133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816,
        3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350,
        3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327,
        3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654,
        3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494,
        2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617,
        658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609,
        3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214,
        2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103,
        2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934,
        3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607,
        3413881008, 4238890068, 3597515707, 975967766,
      ],
      P = [
        1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307,
        1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347,
        4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298,
        3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232,
        2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228,
        1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518,
        911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325,
        3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077,
        67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926,
        84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826,
        3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539,
        745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552,
        1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067,
        795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
        4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910,
        961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
        4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
        2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
        1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568,
        2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668,
        3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003,
        3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855,
        2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534,
        1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744,
        2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008,
        2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782,
        1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090,
        169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650,
        3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972,
        2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893,
        3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908,
        3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946,
        2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164,
        3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131,
        3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261,
        1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081,
        895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045,
        2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777,
        3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927,
        3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796,
        2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242,
        1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488,
        1425844308, 3151392187, 372911126,
      ],
      I = [
        1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062,
        1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422,
        4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983,
        3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547,
        2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643,
        1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788,
        909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625,
        3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962,
        67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071,
        84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791,
        3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989,
        741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667,
        1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797,
        791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
        4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535,
        960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
        4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
        2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
        1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408,
        2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563,
        3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573,
        3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230,
        2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284,
        1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344,
        2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123,
        2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087,
        1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700,
        168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855,
        3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747,
        2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873,
        3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523,
        3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511,
        2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419,
        3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126,
        3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401,
        1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866,
        892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850,
        2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042,
        3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917,
        3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891,
        2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452,
        1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443,
        1414855848, 3149649517, 370555436,
      ],
      K = [
        1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
        2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
        1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
        1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150,
        59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843,
        1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733,
        3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
        2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228,
        1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562,
        3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269,
        807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154,
        4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474,
        875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634,
        1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
        2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
        2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
        2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436,
        1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852,
        1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058,
        463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234,
        3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465,
        337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775,
        1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960,
        3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733,
        3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860,
        2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396,
        2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238,
        2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012,
        1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814,
        2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619,
        270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369,
        2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889,
        1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144,
        899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186,
        1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980,
        3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204,
        25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971,
        1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302,
        3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761,
        1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
        3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
        4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
        3576870512, 1215061108, 3501741890,
      ],
      G = [
        1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933,
        2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900,
        4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723,
        2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385,
        3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473,
        692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
        3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529,
        1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523,
        1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122,
        1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824,
        4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204,
        4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614,
        2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839,
        106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461,
        3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937,
        3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598,
        1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597,
        2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945,
        1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535,
        3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394,
        182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863,
        3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624,
        2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486,
        1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369,
        2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024,
        3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148,
        3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545,
        4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671,
        3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776,
        1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106,
        1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472,
        32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392,
        3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
        818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
        1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904,
        1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889,
        77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
        870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476,
        4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235,
        2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891,
        2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
        2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913,
        1635502980, 1893020342, 1950903388, 1120974935,
      ],
      V = [
        2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173,
        1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970,
        3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698,
        244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515,
        1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868,
        1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033,
        1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914,
        861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368,
        1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827,
        2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239,
        2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009,
        4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174,
        1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224,
        2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286,
        2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237,
        1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968,
        172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081,
        1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047,
        2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278,
        2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539,
        719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150,
        2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665,
        4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005,
        4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898,
        1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670,
        3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556,
        1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178,
        188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
        2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
        2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
        2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
        2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639,
        919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549,
        1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196,
        3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
        81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974,
        895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576,
        1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897,
        3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516,
        935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519,
        3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572,
        2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195,
        3060847922, 1551124588, 1463996600,
      ],
      j = [
        4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
        4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
        3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
        3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
        2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848,
        3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
        3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389,
        1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913,
        1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242,
        529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619,
        679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159,
        133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524,
        777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424,
        1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981,
        1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582,
        1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953,
        2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766,
        1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162,
        1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748,
        2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234,
        2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765,
        514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535,
        1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070,
        3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413,
        3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325,
        3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
        4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
        3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
        2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
        3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
        410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
        1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
        1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454,
        2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521,
        3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700,
        2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909,
        2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841,
        3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542,
        1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736,
        3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274,
        1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712,
        227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555,
        850817237, 1817998408, 3092726480,
      ],
      L = [
        0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
        708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
        1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990,
        4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216,
        2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058,
        3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
        3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
        3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995,
        899835584, 666464733, 699432150, 59727847, 226906860, 530400753,
        294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775,
        2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520,
        3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422,
        3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
        4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
        2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
        800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
        2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311,
        1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657,
        807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971,
        2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
        3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751,
        3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483,
        2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465,
        599762354, 159417987, 126454664, 361929877, 463180190, 2709260871,
        2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
        2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
        3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178,
        2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284,
        3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302,
        3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
        1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
        404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
        3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
        3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557,
        2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487,
        504459436, 875451293, 975658646, 675039627, 641025152, 2084704233,
        1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843,
        1451044056, 933301370, 967311729, 733156972, 632953703, 260388950,
        25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500,
        1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226,
        3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432,
        4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
        2438237621, 2203032232, 2370213795,
      ],
      Z = [
        0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
        824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
        2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410,
        2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776,
        3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918,
        3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
        1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
        1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355,
        3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
        4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895,
        3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975,
        3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917,
        2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523,
        2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
        1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
        53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
        2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216,
        3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602,
        4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276,
        545572369, 296679730, 446754879, 129166120, 213705253, 1709610350,
        1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296,
        1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598,
        3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
        2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386,
        1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268,
        1988838185, 533804130, 350174575, 164439672, 46346101, 870912086,
        954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643,
        2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929,
        3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127,
        3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309,
        457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035,
        2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319,
        182621114, 401639597, 486441376, 768917123, 651868046, 1003007129,
        818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
        2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917,
        2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703,
        3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473,
        3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720,
        1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390,
        1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636,
        3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
        4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200,
        3046200461, 2827177882, 2743944855,
      ],
      $ = [
        0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
        590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
        1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250,
        3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176,
        3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278,
        2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
        2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
        3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195,
        1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173,
        1224348052, 59984867, 244860394, 428169201, 344873464, 935293895,
        984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180,
        2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982,
        145085239, 532201772, 313773861, 830661914, 1015671571, 731183368,
        648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554,
        2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
        3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
        3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771,
        4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177,
        2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631,
        287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925,
        1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571,
        1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968,
        3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150,
        2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556,
        122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898,
        695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
        1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613,
        1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639,
        81781910, 331544205, 516552836, 1039717051, 821288114, 669961897,
        719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299,
        2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885,
        3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634,
        3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
        2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702,
        3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632,
        1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938,
        48394827, 369057872, 418672217, 1002783846, 919489135, 567498868,
        752375421, 209336225, 24197544, 376187827, 459744698, 945164165,
        895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635,
        1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881,
        3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
        4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285,
        2377486676, 2594734927, 2544078150,
      ],
      x0 = [
        0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
        1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408,
        1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100,
        2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816,
        3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748,
        3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843,
        377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439,
        1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
        2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623,
        2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475,
        3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905,
        1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837,
        923313619, 740276417, 621982671, 439452389, 322734571, 137073913,
        19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
        3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
        3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550,
        1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426,
        1928707164, 96392454, 213114376, 396673818, 514443284, 562755902,
        679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866,
        3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230,
        2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026,
        2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
        3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765,
        3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481,
        1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413,
        1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841,
        425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038,
        3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674,
        2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
        2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834,
        1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990,
        349075736, 736970802, 585122620, 972512814, 821712160, 2595684844,
        2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464,
        2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212,
        4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952,
        292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068,
        1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848,
        2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
        2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155,
        4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431,
        953270745, 600235211, 718002117, 367585007, 484830689, 133361907,
        251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495,
        1418573201, 1335535747, 1184342925,
      ];
    function K0(A) {
      for (var b = O, u = [], p = 0; p < A[b(152)]; p += 4)
        u[b(608)]((A[p] << 24) | (A[p + 1] << 16) | (A[p + 2] << 8) | A[p + 3]);
      return u;
    }
    var Y = function (A) {
      var b = O;
      if (!(this instanceof Y))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, b(1599), { value: s(A, !![]) }),
        this._prepare();
    };
    (Y.prototype[t(315)] = function () {
      var A = t,
        b = g[this.key[A(152)]];
      if (b == null) throw new Error(A(551));
      (this[A(332)] = []), (this[A(1416)] = []);
      for (var u = 0; u <= b; u++)
        this[A(332)][A(608)]([0, 0, 0, 0]), this[A(1416)].push([0, 0, 0, 0]);
      for (
        var p = (b + 1) * 4,
          N = this[A(1599)][A(152)] / 4,
          C = K0(this.key),
          U,
          u = 0;
        u < N;
        u++
      )
        (U = u >> 2),
          (this._Ke[U][u % 4] = C[u]),
          (this._Kd[b - U][u % 4] = C[u]);
      for (var Q = 0, J = N, W; J < p; ) {
        if (
          ((W = C[N - 1]),
          (C[0] ^=
            (S[(W >> 16) & 255] << 24) ^
            (S[(W >> 8) & 255] << 16) ^
            (S[W & 255] << 8) ^
            S[(W >> 24) & 255] ^
            (k[Q] << 24)),
          (Q += 1),
          N != 8)
        )
          for (var u = 1; u < N; u++) C[u] ^= C[u - 1];
        else {
          for (var u = 1; u < N / 2; u++) C[u] ^= C[u - 1];
          (W = C[N / 2 - 1]),
            (C[N / 2] ^=
              S[W & 255] ^
              (S[(W >> 8) & 255] << 8) ^
              (S[(W >> 16) & 255] << 16) ^
              (S[(W >> 24) & 255] << 24));
          for (var u = N / 2 + 1; u < N; u++) C[u] ^= C[u - 1];
        }
        for (var u = 0, rx, _; u < N && J < p; )
          (rx = J >> 2),
            (_ = J % 4),
            (this._Ke[rx][_] = C[u]),
            (this[A(1416)][b - rx][_] = C[u++]),
            J++;
      }
      for (var rx = 1; rx < b; rx++)
        for (var _ = 0; _ < 4; _++)
          (W = this[A(1416)][rx][_]),
            (this._Kd[rx][_] =
              L[(W >> 24) & 255] ^
              Z[(W >> 16) & 255] ^
              $[(W >> 8) & 255] ^
              x0[W & 255]);
    }),
      (Y[t(1024)].encrypt = function (A) {
        var b = t;
        if (A[b(152)] != 16) throw new Error(b(443));
        for (
          var u = this[b(332)].length - 1, p = [0, 0, 0, 0], N = K0(A), C = 0;
          C < 4;
          C++
        )
          N[C] ^= this._Ke[0][C];
        for (var U = 1; U < u; U++) {
          for (var C = 0; C < 4; C++)
            p[C] =
              R[(N[C] >> 24) & 255] ^
              D[(N[(C + 1) % 4] >> 16) & 255] ^
              P[(N[(C + 2) % 4] >> 8) & 255] ^
              I[N[(C + 3) % 4] & 255] ^
              this[b(332)][U][C];
          N = p[b(1095)]();
        }
        for (var Q = d(16), J, C = 0; C < 4; C++)
          (J = this._Ke[u][C]),
            (Q[4 * C] = (S[(N[C] >> 24) & 255] ^ (J >> 24)) & 255),
            (Q[4 * C + 1] =
              (S[(N[(C + 1) % 4] >> 16) & 255] ^ (J >> 16)) & 255),
            (Q[4 * C + 2] = (S[(N[(C + 2) % 4] >> 8) & 255] ^ (J >> 8)) & 255),
            (Q[4 * C + 3] = (S[N[(C + 3) % 4] & 255] ^ J) & 255);
        return Q;
      }),
      (Y.prototype[t(1879)] = function (A) {
        var b = t;
        if (A[b(152)] != 16) throw new Error(b(223));
        for (
          var u = this._Kd[b(152)] - 1, p = [0, 0, 0, 0], N = K0(A), C = 0;
          C < 4;
          C++
        )
          N[C] ^= this[b(1416)][0][C];
        for (var U = 1; U < u; U++) {
          for (var C = 0; C < 4; C++)
            p[C] =
              K[(N[C] >> 24) & 255] ^
              G[(N[(C + 3) % 4] >> 16) & 255] ^
              V[(N[(C + 2) % 4] >> 8) & 255] ^
              j[N[(C + 1) % 4] & 255] ^
              this[b(1416)][U][C];
          N = p[b(1095)]();
        }
        for (var Q = d(16), J, C = 0; C < 4; C++)
          (J = this[b(1416)][u][C]),
            (Q[4 * C] = (B[(N[C] >> 24) & 255] ^ (J >> 24)) & 255),
            (Q[4 * C + 1] =
              (B[(N[(C + 3) % 4] >> 16) & 255] ^ (J >> 16)) & 255),
            (Q[4 * C + 2] = (B[(N[(C + 2) % 4] >> 8) & 255] ^ (J >> 8)) & 255),
            (Q[4 * C + 3] = (B[N[(C + 1) % 4] & 255] ^ J) & 255);
        return Q;
      });
    var J0 = function (A) {
      var b = t;
      if (!(this instanceof J0)) throw Error(b(978));
      (this[b(1978)] = "Electronic Code Block"),
        (this.name = b(1425)),
        (this[b(834)] = new Y(A));
    };
    (J0[t(1024)][t(372)] = function (A) {
      var b = t;
      if (((A = s(A)), A[b(152)] % 16 !== 0)) throw new Error(b(396));
      for (var u = d(A[b(152)]), p = d(16), N = 0; N < A[b(152)]; N += 16)
        l(A, p, 0, N, N + 16), (p = this[b(834)][b(372)](p)), l(p, u, N);
      return u;
    }),
      (J0.prototype[t(1879)] = function (A) {
        var b = t;
        if (((A = s(A)), A[b(152)] % 16 !== 0)) throw new Error(b(1762));
        for (var u = d(A[b(152)]), p = d(16), N = 0; N < A[b(152)]; N += 16)
          l(A, p, 0, N, N + 16), (p = this._aes.decrypt(p)), l(p, u, N);
        return u;
      });
    var w = function (A, b) {
      var u = t;
      if (!(this instanceof w))
        throw Error("AES must be instanitated with `new`");
      if (((this[u(1978)] = u(1813)), (this[u(296)] = u(1356)), !b)) b = d(16);
      else if (b[u(152)] != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      (this[u(1347)] = s(b, !![])), (this[u(834)] = new Y(A));
    };
    (w[t(1024)][t(372)] = function (A) {
      var b = t;
      if (((A = s(A)), A[b(152)] % 16 !== 0)) throw new Error(b(396));
      for (var u = d(A[b(152)]), p = d(16), N = 0; N < A[b(152)]; N += 16) {
        l(A, p, 0, N, N + 16);
        for (var C = 0; C < 16; C++) p[C] ^= this[b(1347)][C];
        (this[b(1347)] = this[b(834)][b(372)](p)), l(this[b(1347)], u, N);
      }
      return u;
    }),
      (w[t(1024)].decrypt = function (A) {
        var b = t;
        if (((A = s(A)), A.length % 16 !== 0))
          throw new Error(
            "invalid ciphertext size (must be multiple of 16 bytes)"
          );
        for (var u = d(A[b(152)]), p = d(16), N = 0; N < A[b(152)]; N += 16) {
          l(A, p, 0, N, N + 16), (p = this[b(834)][b(1879)](p));
          for (var C = 0; C < 16; C++) u[N + C] = p[C] ^ this[b(1347)][C];
          l(A, this._lastCipherblock, 0, N, N + 16);
        }
        return u;
      });
    var f = function (A, b, u) {
      var p = t;
      if (!(this instanceof f))
        throw Error("AES must be instanitated with `new`");
      if (((this[p(1978)] = "Cipher Feedback"), (this[p(296)] = p(1335)), !b))
        b = d(16);
      else if (b[p(152)] != 16) throw new Error(p(1707));
      !u && (u = 1),
        (this[p(1940)] = u),
        (this._shiftRegister = s(b, !![])),
        (this._aes = new Y(A));
    };
    (f[t(1024)][t(372)] = function (A) {
      var b = t;
      if (A[b(152)] % this.segmentSize != 0) throw new Error(b(300));
      for (var u = s(A, !![]), p, N = 0; N < u.length; N += this[b(1940)]) {
        p = this._aes.encrypt(this._shiftRegister);
        for (var C = 0; C < this[b(1940)]; C++) u[N + C] ^= p[C];
        l(this[b(201)], this._shiftRegister, 0, this[b(1940)]),
          l(u, this[b(201)], 16 - this[b(1940)], N, N + this[b(1940)]);
      }
      return u;
    }),
      (f[t(1024)][t(1879)] = function (A) {
        var b = t;
        if (A.length % this.segmentSize != 0)
          throw new Error(
            "invalid ciphertext size (must be segmentSize bytes)"
          );
        for (var u = s(A, !![]), p, N = 0; N < u[b(152)]; N += this[b(1940)]) {
          p = this[b(834)].encrypt(this[b(201)]);
          for (var C = 0; C < this[b(1940)]; C++) u[N + C] ^= p[C];
          l(this._shiftRegister, this[b(201)], 0, this[b(1940)]),
            l(A, this._shiftRegister, 16 - this[b(1940)], N, N + this[b(1940)]);
        }
        return u;
      });
    var i = function (A, b) {
      var u = t;
      if (!(this instanceof i)) throw Error(u(978));
      if (((this.description = u(1232)), (this[u(296)] = u(1440)), !b))
        b = d(16);
      else if (b[u(152)] != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      (this._lastPrecipher = s(b, !![])),
        (this[u(1270)] = 16),
        (this[u(834)] = new Y(A));
    };
    (i[t(1024)][t(372)] = function (A) {
      for (var b = t, u = s(A, !![]), p = 0; p < u[b(152)]; p++)
        this._lastPrecipherIndex === 16 &&
          ((this[b(766)] = this._aes[b(372)](this[b(766)])),
          (this[b(1270)] = 0)),
          (u[p] ^= this[b(766)][this._lastPrecipherIndex++]);
      return u;
    }),
      (i[t(1024)][t(1879)] = i.prototype.encrypt);
    var h = function (A) {
      var b = t;
      if (!(this instanceof h)) throw Error(b(1280));
      A !== 0 && !A && (A = 1),
        typeof A == "number"
          ? ((this[b(1789)] = d(16)), this[b(233)](A))
          : this[b(1314)](A);
    };
    (h[t(1024)][t(233)] = function (A) {
      var b = t;
      if (typeof A !== b(456) || parseInt(A) != A)
        throw new Error("invalid counter value (must be an integer)");
      for (var u = 15; u >= 0; --u) (this._counter[u] = A % 256), (A = A >> 8);
    }),
      (h[t(1024)][t(1314)] = function (A) {
        var b = t;
        if (((A = s(A, !![])), A[b(152)] != 16)) throw new Error(b(1020));
        this[b(1789)] = A;
      }),
      (h[t(1024)][t(1242)] = function () {
        for (var A = t, b = 15; b >= 0; b--)
          if (this[A(1789)][b] === 255) this._counter[b] = 0;
          else {
            this._counter[b]++;
            break;
          }
      });
    var o = function (A, b) {
      var u = t;
      if (!(this instanceof o)) throw Error(u(978));
      (this[u(1978)] = u(237)),
        (this[u(296)] = "ctr"),
        !(b instanceof h) && (b = new h(b)),
        (this[u(1789)] = b),
        (this[u(1781)] = null),
        (this[u(1610)] = 16),
        (this[u(834)] = new Y(A));
    };
    (o[t(1024)][t(372)] = function (A) {
      for (var b = t, u = s(A, !![]), p = 0; p < u[b(152)]; p++)
        this._remainingCounterIndex === 16 &&
          ((this[b(1781)] = this[b(834)][b(372)](this._counter[b(1789)])),
          (this[b(1610)] = 0),
          this[b(1789)][b(1242)]()),
          (u[p] ^= this[b(1781)][this[b(1610)]++]);
      return u;
    }),
      (o.prototype.decrypt = o[t(1024)][t(372)]);
    function y(A) {
      var b = t;
      A = s(A, !![]);
      var u = 16 - (A.length % 16),
        p = d(A[b(152)] + u);
      l(A, p);
      for (var N = A[b(152)]; N < p[b(152)]; N++) p[N] = u;
      return p;
    }
    function M(A) {
      var b = t;
      if (((A = s(A, !![])), A.length < 16)) throw new Error(b(271));
      var u = A[A[b(152)] - 1];
      if (u > 16) throw new Error("PKCS#7 padding byte out of range");
      for (var p = A[b(152)] - u, N = 0; N < u; N++)
        if (A[p + N] !== u) throw new Error(b(183));
      var C = d(p);
      return l(A, C, 0, 0, p), C;
    }
    var E = {
      AES: Y,
      Counter: h,
      ModeOfOperation: { ecb: J0, cbc: w, cfb: f, ofb: i, ctr: o },
      utils: { hex: m, utf8: v },
      padding: { pkcs7: { pad: y, strip: M } },
      _arrayTest: { coerceArray: s, createArray: d, copyArray: l },
    };
    n.exports = E;
  })();
})(hs);
const qx = hs.exports,
  ds = c(1993);
function Ne(n) {
  var e = c;
  return (
    typeof n === e(1721) && n[e(1329)](0, 2) !== "0x" && (n = "0x" + n), q(n)
  );
}
function At(n, e) {
  var x = c;
  for (n = String(n); n[x(152)] < e; ) n = "0" + n;
  return n;
}
function zn(n) {
  var e = c;
  return typeof n === e(1721) ? ax(n, Jx.NFKC) : q(n);
}
function ex(n, e) {
  var x = c;
  let t = n;
  const r = e[x(177)]()[x(1418)]("/");
  for (let a = 0; a < r[x(152)]; a++) {
    let s = null;
    for (const d in t)
      if (d[x(177)]() === r[a]) {
        s = t[d];
        break;
      }
    if (s === null) return null;
    t = s;
  }
  return t;
}
function Co(n) {
  var e = c;
  const x = q(n);
  (x[6] = (x[6] & 15) | 64), (x[8] = (x[8] & 63) | 128);
  const t = H(x);
  return [
    t.substring(2, 10),
    t[e(1329)](10, 14),
    t[e(1329)](14, 18),
    t[e(1329)](18, 22),
    t[e(1329)](22, 34),
  ][e(1286)]("-");
}
const Bo = new T(ds);
class To extends Ue {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function ls(n, e) {
  var x = c;
  const t = JSON[x(1698)](n);
  e = zn(e);
  const r = j0(ex(t, "ethaddr")),
    a = Ne(ex(t, "encseed"));
  (!a || a[x(152)] % 16 !== 0) && Bo[x(1839)](x(398), x(254), n);
  const s = q(Kn(e, e, 2e3, 32, x(1933))).slice(0, 16),
    d = a.slice(0, 16),
    l = a[x(1095)](16),
    v = new qx[x(1744)][x(1356)](s, d),
    m = qx[x(1369)][x(1961)][x(442)](q(v[x(1879)](l)));
  let g = "";
  for (let B = 0; B < m[x(152)]; B++) g += String[x(480)](m[B]);
  const k = ax(g),
    S = Q0(k);
  return new To({ _isCrowdsaleAccount: !![], address: r, privateKey: S });
}
function Hn(n) {
  var e = c;
  let x = null;
  try {
    x = JSON[e(1698)](n);
  } catch (t) {
    return ![];
  }
  return x[e(1154)] && x[e(1264)];
}
function Jn(n) {
  var e = c;
  let x = null;
  try {
    x = JSON[e(1698)](n);
  } catch (t) {
    return ![];
  }
  return !x[e(1844)] ||
    parseInt(x[e(1844)]) !== x[e(1844)] ||
    parseInt(x[e(1844)]) !== 3
    ? ![]
    : !![];
}
function Io(n) {
  var e = c;
  if (Hn(n))
    try {
      return j0(JSON[e(1698)](n)[e(1264)]);
    } catch (x) {
      return null;
    }
  if (Jn(n))
    try {
      return j0(JSON[e(1698)](n)[e(1531)]);
    } catch (x) {
      return null;
    }
  return null;
}
var bs = { exports: {} };
(function (n, e) {
  (function (x) {
    var t = O;
    const r = 2147483647;
    function a(D) {
      var P = O;
      const I = new Uint32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      let K = 1779033703,
        G = 3144134277,
        V = 1013904242,
        j = 2773480762,
        L = 1359893119,
        Z = 2600822924,
        $ = 528734635,
        x0 = 1541459225;
      const K0 = new Uint32Array(64);
      function Y(y) {
        let M = 0,
          E = y.length;
        for (; E >= 64; ) {
          let A = K,
            b = G,
            u = V,
            p = j,
            N = L,
            C = Z,
            U = $,
            Q = x0,
            J,
            W,
            rx,
            _,
            e0;
          for (W = 0; W < 16; W++)
            (rx = M + W * 4),
              (K0[W] =
                ((y[rx] & 255) << 24) |
                ((y[rx + 1] & 255) << 16) |
                ((y[rx + 2] & 255) << 8) |
                (y[rx + 3] & 255));
          for (W = 16; W < 64; W++)
            (J = K0[W - 2]),
              (_ =
                ((J >>> 17) | (J << (32 - 17))) ^
                ((J >>> 19) | (J << (32 - 19))) ^
                (J >>> 10)),
              (J = K0[W - 15]),
              (e0 =
                ((J >>> 7) | (J << (32 - 7))) ^
                ((J >>> 18) | (J << (32 - 18))) ^
                (J >>> 3)),
              (K0[W] = (((_ + K0[W - 7]) | 0) + ((e0 + K0[W - 16]) | 0)) | 0);
          for (W = 0; W < 64; W++)
            (_ =
              ((((((N >>> 6) | (N << (32 - 6))) ^
                ((N >>> 11) | (N << (32 - 11))) ^
                ((N >>> 25) | (N << (32 - 25)))) +
                ((N & C) ^ (~N & U))) |
                0) +
                ((Q + ((I[W] + K0[W]) | 0)) | 0)) |
              0),
              (e0 =
                ((((A >>> 2) | (A << (32 - 2))) ^
                  ((A >>> 13) | (A << (32 - 13))) ^
                  ((A >>> 22) | (A << (32 - 22)))) +
                  ((A & b) ^ (A & u) ^ (b & u))) |
                0),
              (Q = U),
              (U = C),
              (C = N),
              (N = (p + _) | 0),
              (p = u),
              (u = b),
              (b = A),
              (A = (_ + e0) | 0);
          (K = (K + A) | 0),
            (G = (G + b) | 0),
            (V = (V + u) | 0),
            (j = (j + p) | 0),
            (L = (L + N) | 0),
            (Z = (Z + C) | 0),
            ($ = ($ + U) | 0),
            (x0 = (x0 + Q) | 0),
            (M += 64),
            (E -= 64);
        }
      }
      Y(D);
      let J0,
        w = D.length % 64,
        f = (D[P(152)] / 536870912) | 0,
        i = D[P(152)] << 3,
        h = w < 56 ? 56 : 120,
        o = D.slice(D[P(152)] - w, D[P(152)]);
      for (o[P(608)](128), J0 = w + 1; J0 < h; J0++) o[P(608)](0);
      return (
        o[P(608)]((f >>> 24) & 255),
        o[P(608)]((f >>> 16) & 255),
        o.push((f >>> 8) & 255),
        o[P(608)]((f >>> 0) & 255),
        o[P(608)]((i >>> 24) & 255),
        o[P(608)]((i >>> 16) & 255),
        o.push((i >>> 8) & 255),
        o[P(608)]((i >>> 0) & 255),
        Y(o),
        [
          (K >>> 24) & 255,
          (K >>> 16) & 255,
          (K >>> 8) & 255,
          (K >>> 0) & 255,
          (G >>> 24) & 255,
          (G >>> 16) & 255,
          (G >>> 8) & 255,
          (G >>> 0) & 255,
          (V >>> 24) & 255,
          (V >>> 16) & 255,
          (V >>> 8) & 255,
          (V >>> 0) & 255,
          (j >>> 24) & 255,
          (j >>> 16) & 255,
          (j >>> 8) & 255,
          (j >>> 0) & 255,
          (L >>> 24) & 255,
          (L >>> 16) & 255,
          (L >>> 8) & 255,
          (L >>> 0) & 255,
          (Z >>> 24) & 255,
          (Z >>> 16) & 255,
          (Z >>> 8) & 255,
          (Z >>> 0) & 255,
          ($ >>> 24) & 255,
          ($ >>> 16) & 255,
          ($ >>> 8) & 255,
          ($ >>> 0) & 255,
          (x0 >>> 24) & 255,
          (x0 >>> 16) & 255,
          (x0 >>> 8) & 255,
          (x0 >>> 0) & 255,
        ]
      );
    }
    function s(D, P, I) {
      var K = O;
      D = D[K(152)] <= 64 ? D : a(D);
      const G = 64 + P[K(152)] + 4,
        V = new Array(G),
        j = new Array(64);
      let L,
        Z = [];
      for (L = 0; L < 64; L++) V[L] = 54;
      for (L = 0; L < D[K(152)]; L++) V[L] ^= D[L];
      for (L = 0; L < P[K(152)]; L++) V[64 + L] = P[L];
      for (L = G - 4; L < G; L++) V[L] = 0;
      for (L = 0; L < 64; L++) j[L] = 92;
      for (L = 0; L < D[K(152)]; L++) j[L] ^= D[L];
      function $() {
        for (let x0 = G - 1; x0 >= G - 4; x0--) {
          if ((V[x0]++, V[x0] <= 255)) return;
          V[x0] = 0;
        }
      }
      for (; I >= 32; ) $(), (Z = Z[K(1129)](a(j[K(1129)](a(V))))), (I -= 32);
      return (
        I > 0 && ($(), (Z = Z[K(1129)](a(j[K(1129)](a(V))).slice(0, I)))), Z
      );
    }
    function d(D, P, I, K, G) {
      let V;
      for (g(D, (2 * I - 1) * 16, G, 0, 16), V = 0; V < 2 * I; V++)
        m(D, V * 16, G, 16), v(G, K), g(G, 0, D, P + V * 16, 16);
      for (V = 0; V < I; V++) g(D, P + V * 2 * 16, D, V * 16, 16);
      for (V = 0; V < I; V++) g(D, P + (V * 2 + 1) * 16, D, (V + I) * 16, 16);
    }
    function l(D, P) {
      return (D << P) | (D >>> (32 - P));
    }
    function v(D, P) {
      g(D, 0, P, 0, 16);
      for (let I = 8; I > 0; I -= 2)
        (P[4] ^= l(P[0] + P[12], 7)),
          (P[8] ^= l(P[4] + P[0], 9)),
          (P[12] ^= l(P[8] + P[4], 13)),
          (P[0] ^= l(P[12] + P[8], 18)),
          (P[9] ^= l(P[5] + P[1], 7)),
          (P[13] ^= l(P[9] + P[5], 9)),
          (P[1] ^= l(P[13] + P[9], 13)),
          (P[5] ^= l(P[1] + P[13], 18)),
          (P[14] ^= l(P[10] + P[6], 7)),
          (P[2] ^= l(P[14] + P[10], 9)),
          (P[6] ^= l(P[2] + P[14], 13)),
          (P[10] ^= l(P[6] + P[2], 18)),
          (P[3] ^= l(P[15] + P[11], 7)),
          (P[7] ^= l(P[3] + P[15], 9)),
          (P[11] ^= l(P[7] + P[3], 13)),
          (P[15] ^= l(P[11] + P[7], 18)),
          (P[1] ^= l(P[0] + P[3], 7)),
          (P[2] ^= l(P[1] + P[0], 9)),
          (P[3] ^= l(P[2] + P[1], 13)),
          (P[0] ^= l(P[3] + P[2], 18)),
          (P[6] ^= l(P[5] + P[4], 7)),
          (P[7] ^= l(P[6] + P[5], 9)),
          (P[4] ^= l(P[7] + P[6], 13)),
          (P[5] ^= l(P[4] + P[7], 18)),
          (P[11] ^= l(P[10] + P[9], 7)),
          (P[8] ^= l(P[11] + P[10], 9)),
          (P[9] ^= l(P[8] + P[11], 13)),
          (P[10] ^= l(P[9] + P[8], 18)),
          (P[12] ^= l(P[15] + P[14], 7)),
          (P[13] ^= l(P[12] + P[15], 9)),
          (P[14] ^= l(P[13] + P[12], 13)),
          (P[15] ^= l(P[14] + P[13], 18));
      for (let I = 0; I < 16; ++I) D[I] += P[I];
    }
    function m(D, P, I, K) {
      for (let G = 0; G < K; G++) I[G] ^= D[P + G];
    }
    function g(D, P, I, K, G) {
      for (; G--; ) I[K++] = D[P++];
    }
    function k(D) {
      var P = O;
      if (!D || typeof D.length != "number") return ![];
      for (let I = 0; I < D.length; I++) {
        const K = D[I];
        if (typeof K !== P(456) || K % 1 || K < 0 || K >= 256) return ![];
      }
      return !![];
    }
    function S(D, P) {
      var I = O;
      if (typeof D !== I(456) || D % 1) throw new Error(I(1130) + P);
      return D;
    }
    function B(D, P, I, K, G, V, j) {
      var L = O;
      if (
        ((I = S(I, "N")),
        (K = S(K, "r")),
        (G = S(G, "p")),
        (V = S(V, "dkLen")),
        I === 0 || (I & (I - 1)) !== 0)
      )
        throw new Error("N must be power of 2");
      if (I > r / 128 / K) throw new Error(L(1796));
      if (K > r / 128 / G) throw new Error("r too large");
      if (!k(D)) throw new Error("password must be an array or buffer");
      if (((D = Array[L(1024)][L(1095)][L(1340)](D)), !k(P)))
        throw new Error(L(1567));
      P = Array[L(1024)][L(1095)][L(1340)](P);
      let Z = s(D, P, G * 128 * K);
      const $ = new Uint32Array(G * 32 * K);
      for (let N = 0; N < $[L(152)]; N++) {
        const C = N * 4;
        $[N] =
          ((Z[C + 3] & 255) << 24) |
          ((Z[C + 2] & 255) << 16) |
          ((Z[C + 1] & 255) << 8) |
          ((Z[C + 0] & 255) << 0);
      }
      const x0 = new Uint32Array(64 * K),
        K0 = new Uint32Array(32 * K * I),
        Y = 32 * K,
        J0 = new Uint32Array(16),
        w = new Uint32Array(16),
        f = G * I * 2;
      let i = 0,
        h = null,
        o = ![],
        y = 0,
        M = 0,
        E,
        A;
      const b = j ? parseInt(1e3 / K) : 4294967295,
        u = typeof setImmediate != "undefined" ? setImmediate : setTimeout,
        p = function () {
          var N = L;
          if (o) return j(new Error(N(1748)), i / f);
          let C;
          switch (y) {
            case 0:
              (A = M * 32 * K), g($, A, x0, 0, Y), (y = 1), (E = 0);
            case 1:
              (C = I - E), C > b && (C = b);
              for (let Q = 0; Q < C; Q++)
                g(x0, 0, K0, (E + Q) * Y, Y), d(x0, Y, K, J0, w);
              if (((E += C), (i += C), j)) {
                const Q = parseInt((1e3 * i) / f);
                if (Q !== h) {
                  if (((o = j(null, i / f)), o)) break;
                  h = Q;
                }
              }
              if (E < I) break;
              (E = 0), (y = 2);
            case 2:
              (C = I - E), C > b && (C = b);
              for (let Q = 0; Q < C; Q++) {
                const J = (2 * K - 1) * 16,
                  W = x0[J] & (I - 1);
                m(K0, W * Y, x0, Y), d(x0, Y, K, J0, w);
              }
              if (((E += C), (i += C), j)) {
                const Q = parseInt((1e3 * i) / f);
                if (Q !== h) {
                  if (((o = j(null, i / f)), o)) break;
                  h = Q;
                }
              }
              if (E < I) break;
              if ((g(x0, 0, $, A, Y), M++, M < G)) {
                y = 0;
                break;
              }
              Z = [];
              for (let Q = 0; Q < $.length; Q++)
                Z[N(608)](($[Q] >> 0) & 255),
                  Z.push(($[Q] >> 8) & 255),
                  Z.push(($[Q] >> 16) & 255),
                  Z[N(608)](($[Q] >> 24) & 255);
              const U = s(D, Z, V);
              return j && j(null, 1, U), U;
          }
          j && u(p);
        };
      if (!j)
        for (; []; ) {
          const N = p();
          if (N != null) return N;
        }
      p();
    }
    const R = {
      scrypt: function (D, P, I, K, G, V, j) {
        return new Promise(function (L, Z) {
          let $ = 0;
          j && j(0),
            B(D, P, I, K, G, V, function (x0, K0, Y) {
              if (x0) Z(x0);
              else if (Y) j && $ !== 1 && j(1), L(new Uint8Array(Y));
              else if (j && K0 !== $) return ($ = K0), j(K0);
            });
        });
      },
      syncScrypt: function (D, P, I, K, G, V) {
        return new Uint8Array(B(D, P, I, K, G, V));
      },
    };
    n[t(1980)] = R;
  })();
})(bs);
const jn = bs[c(1980)];
var No =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        try {
          m(t.next(g));
        } catch (k) {
          s(k);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g.value)[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || []))[d(1747)]());
    });
  };
const mn = new T(ds);
function Ta(n) {
  var e = c;
  return n != null && n[e(1957)] && n[e(1957)][e(1413)];
}
class Ro extends Ue {
  [c(793)](e) {
    var x = c;
    return !!(e && e[x(349)]);
  }
}
function Oo(n, e, x) {
  var t = c;
  if (ex(n, "crypto/cipher") === t(1606)) {
    const a = Ne(ex(n, t(777))),
      s = new qx.Counter(a),
      d = new qx.ModeOfOperation[t(653)](e, s);
    return q(d.decrypt(x));
  }
  return null;
}
function vs(n, e) {
  var x = c;
  const t = Ne(ex(n, x(775)));
  if (
    H(Q0(V0([e[x(1095)](16, 32), t])))[x(1329)](2) !== ex(n, x(1305))[x(177)]()
  )
    throw new Error(x(1299));
  const a = Oo(n, e[x(1095)](0, 16), t);
  !a &&
    mn[x(304)](x(1821), T[x(1169)].UNSUPPORTED_OPERATION, {
      operation: x(1879),
    });
  const s = e.slice(32, 64),
    d = ne(a);
  if (n[x(1531)]) {
    let v = n[x(1531)][x(177)]();
    if ((v.substring(0, 2) !== "0x" && (v = "0x" + v), j0(v) !== d))
      throw new Error(x(239));
  }
  const l = { _isKeystoreAccount: !![], address: d, privateKey: H(a) };
  if (ex(n, "x-ethers/version") === "0.1") {
    const v = Ne(ex(n, x(1853))),
      m = Ne(ex(n, x(754))),
      g = new qx[x(237)](m),
      k = new qx[x(1744)][x(653)](s, g),
      S = ex(n, x(986)) || et,
      B = ex(n, x(285)) || "en",
      R = q(k[x(1879)](v));
    try {
      const D = Ur(R, B),
        P = Mx.fromMnemonic(D, null, B)[x(1254)](S);
      if (P[x(1627)] != l[x(1627)]) throw new Error(x(1816));
      l.mnemonic = P.mnemonic;
    } catch (D) {
      if (D[x(585)] !== T[x(1169)].INVALID_ARGUMENT || D[x(881)] !== x(692))
        throw D;
    }
  }
  return new Ro(l);
}
function ps(n, e, x, t, r) {
  return q(Kn(n, e, x, t, r));
}
function Do(n, e, x, t, r) {
  return Promise.resolve(ps(n, e, x, t, r));
}
function ms(n, e, x, t, r) {
  var a = c;
  const s = zn(e),
    d = ex(n, a(157));
  if (d && typeof d == "string") {
    const l = function (v, m) {
      var g = a;
      return mn[g(1839)](g(863), v, m);
    };
    if (d[a(177)]() === "scrypt") {
      const v = Ne(ex(n, a(630))),
        m = parseInt(ex(n, a(618))),
        g = parseInt(ex(n, a(1565))),
        k = parseInt(ex(n, "crypto/kdfparams/p"));
      (!m || !g || !k) && l(a(1144), d), (m & (m - 1)) !== 0 && l("N", m);
      const S = parseInt(ex(n, a(468)));
      return S !== 32 && l(a(1288), S), t(s, v, m, g, k, 64, r);
    } else if (d.toLowerCase() === "pbkdf2") {
      const v = Ne(ex(n, a(630)));
      let m = null;
      const g = ex(n, a(774));
      g === a(284)
        ? (m = a(1933))
        : g === a(1195)
        ? (m = a(726))
        : l(a(594), g);
      const k = parseInt(ex(n, "crypto/kdfparams/c")),
        S = parseInt(ex(n, a(468)));
      return S !== 32 && l(a(1288), S), x(s, v, k, S, m);
    }
  }
  return mn.throwArgumentError(
    "unsupported key-derivation function",
    a(1144),
    d
  );
}
function Fo(n, e) {
  var x = c;
  const t = JSON[x(1698)](n),
    r = ms(t, e, ps, jn[x(1711)]);
  return vs(t, r);
}
function Uo(n, e, x) {
  return No(this, void 0, void 0, function* () {
    var t = O;
    const r = JSON[t(1698)](n),
      a = yield ms(r, e, Do, jn[t(318)], x);
    return vs(r, a);
  });
}
function Lo(n, e, x, t) {
  var r = c;
  try {
    if (j0(n[r(1531)]) !== ne(n[r(1627)])) throw new Error(r(788));
    if (Ta(n)) {
      const P = n[r(1957)];
      if (
        Mx[r(326)](P[r(1413)], null, P[r(1907)])[r(1254)](P[r(1639)] || et)[
          r(1627)
        ] != n[r(1627)]
      )
        throw new Error("mnemonic mismatch");
    }
  } catch (P) {
    return Promise[r(937)](P);
  }
  typeof x == "function" && !t && ((t = x), (x = {})), !x && (x = {});
  const a = q(n[r(1627)]),
    s = zn(e);
  let d = null,
    l = null,
    v = null;
  if (Ta(n)) {
    const P = n.mnemonic;
    (d = q(Fr(P.phrase, P.locale || "en"))),
      (l = P[r(1639)] || et),
      (v = P[r(1907)] || "en");
  }
  let m = x.client;
  !m && (m = r(906));
  let g = null;
  x[r(1271)] ? (g = q(x[r(1271)])) : (g = Ve(32));
  let k = null;
  if (x.iv) {
    if (((k = q(x.iv)), k[r(152)] !== 16)) throw new Error(r(1890));
  } else k = Ve(16);
  let S = null;
  if (x[r(365)]) {
    if (((S = q(x[r(365)])), S[r(152)] !== 16)) throw new Error("invalid uuid");
  } else S = Ve(16);
  let B = 1 << 17,
    R = 8,
    D = 1;
  return (
    x[r(318)] &&
      (x.scrypt.N && (B = x.scrypt.N),
      x.scrypt.r && (R = x[r(318)].r),
      x[r(318)].p && (D = x[r(318)].p)),
    jn[r(318)](s, g, B, R, D, 64, t)[r(1494)]((P) => {
      var I = r;
      P = q(P);
      const K = P[I(1095)](0, 16),
        G = P[I(1095)](16, 32),
        V = P[I(1095)](32, 64),
        j = new qx[I(237)](k),
        L = new qx[I(1744)].ctr(K, j),
        Z = q(L[I(372)](a)),
        $ = Q0(V0([G, Z])),
        x0 = {
          address: n[I(1531)].substring(2).toLowerCase(),
          id: Co(S),
          version: 3,
          crypto: {
            cipher: "aes-128-ctr",
            cipherparams: { iv: H(k)[I(1329)](2) },
            ciphertext: H(Z).substring(2),
            kdf: I(318),
            kdfparams: { salt: H(g)[I(1329)](2), n: B, dklen: 32, p: D, r: R },
            mac: $[I(1329)](2),
          },
        };
      if (d) {
        const K0 = Ve(16),
          Y = new qx[I(237)](K0),
          J0 = new qx[I(1744)][I(653)](V, Y),
          w = q(J0.encrypt(d)),
          f = new Date(),
          i =
            f[I(189)]() +
            "-" +
            At(f[I(742)]() + 1, 2) +
            "-" +
            At(f.getUTCDate(), 2) +
            "T" +
            At(f[I(1454)](), 2) +
            "-" +
            At(f[I(160)](), 2) +
            "-" +
            At(f.getUTCSeconds(), 2) +
            I(703);
        x0[I(286)] = {
          client: m,
          gethFilename: "UTC--" + i + "--" + x0[I(1531)],
          mnemonicCounter: H(K0)[I(1329)](2),
          mnemonicCiphertext: H(w).substring(2),
          path: l,
          locale: v,
          version: I(1939),
        };
      }
      return JSON[I(657)](x0);
    })
  );
}
function Go(n, e, x) {
  var t = c;
  if (Hn(n)) {
    x && x(0);
    const r = ls(n, e);
    return x && x(1), Promise[t(620)](r);
  }
  return Jn(n) ? Uo(n, e, x) : Promise[t(937)](new Error(t(707)));
}
function Ko(n, e) {
  if (Hn(n)) return ls(n, e);
  if (Jn(n)) return Fo(n, e);
  throw new Error("invalid JSON wallet");
}
const qo = "wallet/5.7.0";
var Ia =
  (globalThis && globalThis.__awaiter) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g.done ? a(g[k(1204)]) : r(g.value)[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
const ze = new T(qo);
function zo(n) {
  var e = c;
  return n != null && n0(n[e(1627)], 32) && n[e(1531)] != null;
}
function Ho(n) {
  var e = c;
  const x = n[e(1957)];
  return x && x[e(1413)];
}
class Ce extends se {
  constructor(e, x) {
    var t = c;
    if ((super(), zo(e))) {
      const r = new Ie(e.privateKey);
      if (
        (F(this, "_signingKey", () => r),
        F(this, t(1531), ne(this.publicKey)),
        this[t(1531)] !== j0(e[t(1531)]) &&
          ze[t(1839)](t(1773), "privateKey", t(1818)),
        Ho(e))
      ) {
        const a = e[t(1957)];
        F(this, t(428), () => ({
          phrase: a[t(1413)],
          path: a[t(1639)] || et,
          locale: a[t(1907)] || "en",
        }));
        const s = this[t(1957)],
          d = Mx.fromMnemonic(s.phrase, null, s[t(1907)])[t(1254)](s[t(1639)]);
        ne(d.privateKey) !== this.address &&
          ze[t(1839)](t(1829), t(1627), t(1818));
      } else F(this, t(428), () => null);
    } else {
      if (Ie[t(690)](e))
        e[t(764)] !== "secp256k1" && ze[t(1839)](t(654), t(1627), "[REDACTED]"),
          F(this, "_signingKey", () => e);
      else {
        typeof e === t(1721) &&
          e.match(/^[0-9a-f]*$/i) &&
          e[t(152)] === 64 &&
          (e = "0x" + e);
        const r = new Ie(e);
        F(this, t(405), () => r);
      }
      F(this, t(428), () => null), F(this, "address", ne(this[t(677)]));
    }
    x && !Ge[t(166)](x) && ze[t(1839)](t(1780), t(1362), x),
      F(this, t(1362), x || null);
  }
  get [c(1957)]() {
    return this._mnemonic();
  }
  get [c(1627)]() {
    return this._signingKey().privateKey;
  }
  get [c(677)]() {
    var e = c;
    return this[e(405)]().publicKey;
  }
  getAddress() {
    var e = c;
    return Promise[e(620)](this.address);
  }
  connect(e) {
    return new Ce(this, e);
  }
  [c(1918)](e) {
    var x = c;
    return xx(e)[x(1494)]((t) => {
      var r = x;
      t[r(1180)] != null &&
        (j0(t[r(1180)]) !== this[r(1531)] &&
          ze[r(1839)](r(1749), "transaction.from", e[r(1180)]),
        delete t[r(1180)]);
      const a = this._signingKey()[r(269)](Q0(ln(t)));
      return ln(t, a);
    });
  }
  [c(190)](e) {
    return Ia(this, void 0, void 0, function* () {
      var x = O;
      return fn(this[x(405)]()[x(269)](Dn(e)));
    });
  }
  [c(722)](e, x, t) {
    return Ia(this, void 0, void 0, function* () {
      var r = O;
      const a = yield ox.resolveNames(e, x, t, (s) => {
        var d = O;
        return (
          this[d(1362)] == null &&
            ze.throwError(
              "cannot resolve ENS names without a provider",
              T[d(1169)].UNSUPPORTED_OPERATION,
              { operation: "resolveName", value: s }
            ),
          this.provider[d(767)](s)
        );
      });
      return fn(this[r(405)]()[r(269)](ox[r(1062)](a[r(772)], x, a[r(1204)])));
    });
  }
  [c(372)](e, x, t) {
    var r = c;
    if (
      (typeof x === r(289) && !t && ((t = x), (x = {})),
      t && typeof t !== r(289))
    )
      throw new Error("invalid callback");
    return !x && (x = {}), Lo(this, e, x, t);
  }
  static [c(1337)](e) {
    var x = c;
    let t = Ve(16);
    !e && (e = {}), e[x(1730)] && (t = q(tx(Q0(V0([t, e[x(1730)]])), 0, 16)));
    const r = Ur(t, e[x(1907)]);
    return Ce[x(326)](r, e[x(1639)], e[x(1907)]);
  }
  static [c(684)](e, x, t) {
    var r = c;
    return Go(e, x, t)[r(1494)]((a) => new Ce(a));
  }
  static fromEncryptedJsonSync(e, x) {
    return new Ce(Ko(e, x));
  }
  static fromMnemonic(e, x, t) {
    var r = c;
    return !x && (x = et), new Ce(Mx.fromMnemonic(e, null, t)[r(1254)](x));
  }
}
function Jo(n, e) {
  return Yt(Dn(n), e);
}
function jo(n, e, x, t) {
  var r = c;
  return Yt(ox[r(1062)](n, e, x), t);
}
const Wo = c(381),
  Na = new T(Wo);
function Qo(n) {
  var e = c;
  return n && typeof n[e(1616)] == "function";
}
function xe(n) {
  var e = c;
  const x = function (t, r) {
    var a = O;
    r == null && (r = {});
    const s = [];
    if (t.InfuraProvider && r[a(1737)] !== "-")
      try {
        s[a(608)](new t[a(500)](n, r[a(1737)]));
      } catch (d) {}
    if (t[a(1910)] && r[a(1477)] !== "-")
      try {
        s[a(608)](new t.EtherscanProvider(n, r[a(1477)]));
      } catch (d) {}
    if (t[a(523)] && r[a(1689)] !== "-")
      try {
        s[a(608)](new t[a(523)](n, r.alchemy));
      } catch (d) {}
    if (t[a(1825)] && r[a(790)] !== "-") {
      const d = ["goerli", a(765), a(251)];
      try {
        const l = new t[a(1825)](n, r[a(790)]);
        l[a(417)] && d[a(1532)](l[a(417)][a(296)]) === -1 && s[a(608)](l);
      } catch (l) {}
    }
    if (t[a(1338)] && r.cloudflare !== "-")
      try {
        s.push(new t[a(1338)](n));
      } catch (d) {}
    if (t[a(874)] && r[a(1775)] !== "-")
      try {
        const d = [a(765)],
          l = new t[a(874)](n, r[a(1775)]);
        l[a(417)] && d[a(1532)](l[a(417)].name) === -1 && s[a(608)](l);
      } catch (d) {}
    if (s[a(152)] === 0) return null;
    if (t[a(1891)]) {
      let d = 1;
      return (
        r.quorum != null ? (d = r.quorum) : n === a(1837) && (d = 2),
        new t[a(1891)](s, d)
      );
    }
    return s[0];
  };
  return (
    (x[e(1616)] = function (t) {
      return xe(t);
    }),
    x
  );
}
function Pr(n, e) {
  var x = c;
  const t = function (r, a) {
    var s = O;
    return r.JsonRpcProvider ? new r[s(771)](n, e) : null;
  };
  return (
    (t[x(1616)] = function (r) {
      return Pr(n, r);
    }),
    t
  );
}
const Ra = {
    chainId: 1,
    ensAddress: c(1636),
    name: c(1837),
    _defaultProvider: xe("homestead"),
  },
  Oa = {
    chainId: 3,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: c(765),
    _defaultProvider: xe(c(765)),
  },
  Da = {
    chainId: 63,
    name: c(1374),
    _defaultProvider: Pr(
      "https://www.ethercluster.com/mordor",
      "classicMordor"
    ),
  },
  rr = {
    unspecified: { chainId: 0, name: "unspecified" },
    homestead: Ra,
    mainnet: Ra,
    morden: { chainId: 2, name: "morden" },
    ropsten: Oa,
    testnet: Oa,
    rinkeby: {
      chainId: 4,
      ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      name: "rinkeby",
      _defaultProvider: xe(c(251)),
    },
    kovan: { chainId: 42, name: "kovan", _defaultProvider: xe("kovan") },
    goerli: {
      chainId: 5,
      ensAddress: c(1636),
      name: c(1341),
      _defaultProvider: xe(c(1341)),
    },
    kintsugi: { chainId: 1337702, name: c(631) },
    classic: {
      chainId: 61,
      name: c(530),
      _defaultProvider: Pr("https://www.ethercluster.com/etc", c(530)),
    },
    classicMorden: { chainId: 62, name: c(1684) },
    classicMordor: Da,
    classicTestnet: Da,
    classicKotti: {
      chainId: 6,
      name: c(858),
      _defaultProvider: Pr(c(633), c(858)),
    },
    xdai: { chainId: 100, name: c(1648) },
    matic: { chainId: 137, name: c(1665), _defaultProvider: xe(c(1665)) },
    maticmum: { chainId: 80001, name: "maticmum" },
    optimism: { chainId: 10, name: "optimism", _defaultProvider: xe(c(827)) },
    "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
    "optimism-goerli": { chainId: 420, name: c(1072) },
    arbitrum: { chainId: 42161, name: c(1551) },
    "arbitrum-rinkeby": { chainId: 421611, name: c(1103) },
    "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
    bnb: { chainId: 56, name: c(170) },
    bnbt: { chainId: 97, name: "bnbt" },
  };
function Wn(n) {
  var e = c;
  if (n == null) return null;
  if (typeof n == "number") {
    for (const r in rr) {
      const a = rr[r];
      if (a[e(1923)] === n)
        return {
          name: a[e(296)],
          chainId: a[e(1923)],
          ensAddress: a.ensAddress || null,
          _defaultProvider: a[e(1067)] || null,
        };
    }
    return { chainId: n, name: e(270) };
  }
  if (typeof n === e(1721)) {
    const r = rr[n];
    return r == null
      ? null
      : {
          name: r[e(296)],
          chainId: r[e(1923)],
          ensAddress: r[e(282)],
          _defaultProvider: r._defaultProvider || null,
        };
  }
  const x = rr[n[e(296)]];
  if (!x)
    return typeof n[e(1923)] != "number" && Na[e(1839)](e(1917), e(417), n), n;
  n.chainId !== 0 &&
    n.chainId !== x.chainId &&
    Na[e(1839)]("network chainId mismatch", e(417), n);
  let t = n[e(1067)] || null;
  return (
    t == null &&
      x[e(1067)] &&
      (Qo(x[e(1067)])
        ? (t = x[e(1067)][e(1616)](n))
        : (t = x._defaultProvider)),
    {
      name: n[e(296)],
      chainId: x[e(1923)],
      ensAddress: n.ensAddress || x.ensAddress || null,
      _defaultProvider: t,
    }
  );
}
const Vo = c(1419);
var Yo =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g[k(1204)])[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
function Xo(n, e) {
  return Yo(this, void 0, void 0, function* () {
    var x = O;
    e == null && (e = {});
    const t = {
      method: e[x(1460)] || x(1109),
      headers: e[x(1998)] || {},
      body: e[x(1953)] || void 0,
    };
    if (
      (e[x(1613)] !== !![] &&
        ((t[x(290)] = x(1801)),
        (t[x(457)] = x(835)),
        (t[x(1513)] = x(479)),
        (t.redirect = "follow"),
        (t[x(855)] = x(1921))),
      e[x(229)] != null)
    ) {
      const d = e[x(229)];
      d[x(290)] && (t.mode = d[x(290)]),
        d.cache && (t.cache = d[x(457)]),
        d[x(1513)] && (t[x(1513)] = d[x(1513)]),
        d[x(438)] && (t[x(438)] = d[x(438)]),
        d[x(855)] && (t.referrer = d.referrer);
    }
    const r = yield fetch(n, t),
      a = yield r[x(1805)](),
      s = {};
    return (
      r[x(1998)].forEach
        ? r[x(1998)][x(1745)]((d, l) => {
            var v = x;
            s[l[v(177)]()] = d;
          })
        : r[x(1998)][x(319)]()[x(1745)]((d) => {
            var l = x;
            s[d.toLowerCase()] = r[l(1998)][l(368)](d);
          }),
      {
        headers: s,
        statusCode: r[x(1924)],
        statusMessage: r.statusText,
        body: q(new Uint8Array(a)),
      }
    );
  });
}
var Zo =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g.value)[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
const Nx = new T(Vo);
function Fa(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function Zx(n, e) {
  var x = c;
  if (n == null) return null;
  if (typeof n === x(1721)) return n;
  if (Wt(n)) {
    if (
      e &&
      (e[x(1418)]("/")[0] === x(1771) ||
        e[x(1418)](";")[0][x(1661)]() === x(682))
    )
      try {
        return Le(n);
      } catch (t) {}
    return H(n);
  }
  return n;
}
function gs(n, e, x) {
  var t = c;
  const r = typeof n === t(661) && n.throttleLimit != null ? n[t(505)] : 12;
  Nx.assertArgument(r > 0 && r % 1 === 0, t(702), t(1922), r);
  const a = typeof n === t(661) ? n[t(576)] : null,
    s = typeof n === t(661) && typeof n[t(681)] === t(456) ? n[t(681)] : 100;
  Nx[t(892)](
    s > 0 && s % 1 === 0,
    "invalid connection throttle slot interval",
    t(1655),
    s
  );
  const d = typeof n === t(661) ? !!n.errorPassThrough : ![],
    l = {};
  let v = null;
  const m = { method: t(1109) };
  let g = ![],
    k = 2 * 60 * 1e3;
  if (typeof n == "string") v = n;
  else if (typeof n == "object") {
    if (
      ((n == null || n[t(920)] == null) && Nx[t(1839)](t(1768), t(236), n),
      (v = n[t(920)]),
      typeof n[t(1973)] === t(456) && n[t(1973)] > 0 && (k = n[t(1973)]),
      n.headers)
    )
      for (const I in n[t(1998)])
        (l[I[t(177)]()] = { key: I, value: String(n[t(1998)][I]) }),
          [t(968), t(1653)].indexOf(I[t(177)]()) >= 0 && (g = !![]);
    if (((m.allowGzip = !!n[t(350)]), n.user != null && n[t(783)] != null)) {
      v[t(1329)](0, 6) !== t(1782) &&
        n[t(1563)] !== !![] &&
        Nx[t(304)](t(720), T[t(1169)][t(1897)], {
          argument: t(920),
          url: v,
          user: n[t(889)],
          password: "[REDACTED]",
        });
      const I = n[t(889)] + ":" + n[t(783)];
      l.authorization = { key: t(186), value: t(431) + Rn(ax(I)) };
    }
    n.skipFetchSetup != null && (m[t(1613)] = !!n[t(1613)]),
      n[t(229)] != null && (m[t(229)] = X0(n[t(229)]));
  }
  const S = new RegExp(t(2e3), "i"),
    B = v ? v[t(354)](S) : null;
  if (B)
    try {
      const I = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": B[1] },
        body: Nn(B[2]),
      };
      let K = I[t(1953)];
      return x && (K = x(I[t(1953)], I)), Promise.resolve(K);
    } catch (I) {
      Nx[t(304)](t(1960), T[t(1169)][t(1672)], {
        body: Zx(B[1], B[2]),
        error: I,
        requestBody: null,
        requestMethod: t(1109),
        url: v,
      });
    }
  e &&
    ((m.method = "POST"),
    (m[t(1953)] = e),
    l[t(601)] == null &&
      (l[t(601)] = { key: t(1368), value: "application/octet-stream" }),
    l[t(744)] == null &&
      (l[t(744)] = { key: t(1089), value: String(e[t(152)]) }));
  const R = {};
  Object[t(319)](l)[t(1745)]((I) => {
    var K = t;
    const G = l[I];
    R[G.key] = G[K(1204)];
  }),
    (m[t(1998)] = R);
  const D = (function () {
      let I = null;
      return {
        promise: new Promise(function (V, j) {
          k &&
            (I = setTimeout(() => {
              var L = O;
              I != null &&
                ((I = null),
                j(
                  Nx[L(1395)]("timeout", T[L(1169)][L(1720)], {
                    requestBody: Zx(m.body, R[L(601)]),
                    requestMethod: m[L(1460)],
                    timeout: k,
                    url: v,
                  })
                ));
            }, k));
        }),
        cancel: function () {
          I != null && (clearTimeout(I), (I = null));
        },
      };
    })(),
    P = (function () {
      return Zo(this, void 0, void 0, function* () {
        var I = O;
        for (let K = 0; K < r; K++) {
          let G = null;
          try {
            if (((G = yield Xo(v, m)), K < r)) {
              if (G.statusCode === 301 || G[I(876)] === 302) {
                const j = G[I(1998)].location || "";
                if (m[I(1460)] === I(1109) && j.match(/^https:/)) {
                  v = G[I(1998)][I(1874)];
                  continue;
                }
              } else if (G[I(876)] === 429) {
                let j = !![];
                if ((a && (j = yield a(K, v)), j)) {
                  let L = 0;
                  const Z = G[I(1998)][I(1630)];
                  typeof Z === I(1721) && Z[I(354)](/^[1-9][0-9]*$/)
                    ? (L = parseInt(Z) * 1e3)
                    : (L =
                        s *
                        parseInt(String(Math[I(659)]() * Math[I(1538)](2, K)))),
                    yield Fa(L);
                  continue;
                }
              }
            }
          } catch (j) {
            (G = j[I(1140)]),
              G == null &&
                (D[I(971)](),
                Nx[I(304)]("missing response", T[I(1169)][I(1672)], {
                  requestBody: Zx(m[I(1953)], R[I(601)]),
                  requestMethod: m[I(1460)],
                  serverError: j,
                  url: v,
                }));
          }
          let V = G[I(1953)];
          if (
            (g && G[I(876)] === 304
              ? (V = null)
              : !d &&
                (G.statusCode < 200 || G[I(876)] >= 300) &&
                (D[I(971)](),
                Nx[I(304)](I(717), T[I(1169)][I(1672)], {
                  status: G[I(876)],
                  headers: G.headers,
                  body: Zx(V, G.headers ? G[I(1998)][I(601)] : null),
                  requestBody: Zx(m[I(1953)], R["content-type"]),
                  requestMethod: m[I(1460)],
                  url: v,
                })),
            x)
          )
            try {
              const j = yield x(V, G);
              return D[I(971)](), j;
            } catch (j) {
              if (j[I(1348)] && K < r) {
                let L = !![];
                if ((a && (L = yield a(K, v)), L)) {
                  const Z =
                    s * parseInt(String(Math[I(659)]() * Math.pow(2, K)));
                  yield Fa(Z);
                  continue;
                }
              }
              D[I(971)](),
                Nx[I(304)](I(1960), T[I(1169)].SERVER_ERROR, {
                  body: Zx(V, G.headers ? G[I(1998)][I(601)] : null),
                  error: j,
                  requestBody: Zx(m[I(1953)], R[I(601)]),
                  requestMethod: m[I(1460)],
                  url: v,
                });
            }
          return D.cancel(), V;
        }
        return Nx[I(304)](I(838), T.errors.SERVER_ERROR, {
          requestBody: Zx(m.body, R[I(601)]),
          requestMethod: m[I(1460)],
          url: v,
        });
      });
    })();
  return Promise[t(683)]([D[t(736)], P]);
}
function nt(n, e, x) {
  var t = c;
  let r = (s, d) => {
      var l = O;
      let v = null;
      if (s != null)
        try {
          v = JSON[l(1698)](Le(s));
        } catch (m) {
          Nx[l(304)](l(1832), T.errors.SERVER_ERROR, { body: s, error: m });
        }
      return x && (v = x(v, d)), v;
    },
    a = null;
  if (e != null) {
    a = ax(e);
    const s = typeof n === t(1721) ? { url: n } : X0(n);
    s.headers
      ? !(
          Object[t(319)](s.headers).filter((l) => l[t(177)]() === t(601))[
            t(152)
          ] !== 0
        ) &&
        ((s[t(1998)] = X0(s[t(1998)])), (s[t(1998)]["content-type"] = t(682)))
      : (s.headers = { "content-type": t(682) }),
      (n = s);
  }
  return gs(n, a, r);
}
function Te(n, e) {
  var x = c;
  return (
    !e && (e = {}),
    (e = X0(e)),
    e[x(305)] == null && (e.floor = 0),
    e.ceiling == null && (e[x(914)] = 1e4),
    e.interval == null && (e[x(1189)] = 250),
    new Promise(function (t, r) {
      var a = x;
      let s = null,
        d = ![];
      const l = () => (d ? ![] : ((d = !![]), s && clearTimeout(s), !![]));
      e.timeout &&
        (s = setTimeout(() => {
          var k = O;
          l() && r(new Error(k(1973)));
        }, e.timeout));
      const v = e[a(679)];
      let m = 0;
      function g() {
        var k = a;
        return n()[k(1494)](
          function (S) {
            var B = k;
            if (S !== void 0) l() && t(S);
            else if (e[B(455)]) e.oncePoll[B(1298)](B(1558), g);
            else if (e[B(1802)]) e[B(1802)][B(1298)](B(433), g);
            else if (!d) {
              if ((m++, m > v)) {
                l() && r(new Error(B(946)));
                return;
              }
              let R =
                e[B(1189)] *
                parseInt(String(Math[B(659)]() * Math[B(1538)](2, m)));
              R < e[B(305)] && (R = e[B(305)]),
                R > e[B(914)] && (R = e[B(914)]),
                setTimeout(g, R);
            }
            return null;
          },
          function (S) {
            l() && r(S);
          }
        );
      }
      g();
    })
  );
}
var Cr = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
  gn = {};
for (var nr = 0; nr < Cr[c(152)]; nr++) {
  var _r = Cr.charAt(nr);
  if (gn[_r] !== void 0) throw new TypeError(_r + c(1838));
  gn[_r] = nr;
}
function $e(n) {
  var e = n >> 25;
  return (
    ((n & 33554431) << 5) ^
    (-((e >> 0) & 1) & 996825010) ^
    (-((e >> 1) & 1) & 642813549) ^
    (-((e >> 2) & 1) & 513874426) ^
    (-((e >> 3) & 1) & 1027748829) ^
    (-((e >> 4) & 1) & 705979059)
  );
}
function ys(n) {
  for (var e = c, x = 1, t = 0; t < n[e(152)]; ++t) {
    var r = n[e(501)](t);
    if (r < 33 || r > 126) return "Invalid prefix (" + n + ")";
    x = $e(x) ^ (r >> 5);
  }
  for (x = $e(x), t = 0; t < n[e(152)]; ++t) {
    var a = n[e(501)](t);
    x = $e(x) ^ (a & 31);
  }
  return x;
}
function $o(n, e, x) {
  var t = c;
  if (((x = x || 90), n[t(152)] + 7 + e.length > x))
    throw new TypeError(t(231));
  n = n.toLowerCase();
  var r = ys(n);
  if (typeof r == "string") throw new Error(r);
  for (var a = n + "1", s = 0; s < e[t(152)]; ++s) {
    var d = e[s];
    if (d >> 5 !== 0) throw new Error(t(295));
    (r = $e(r) ^ d), (a += Cr[t(833)](d));
  }
  for (s = 0; s < 6; ++s) r = $e(r);
  for (r ^= 1, s = 0; s < 6; ++s) {
    var l = (r >> ((5 - s) * 5)) & 31;
    a += Cr[t(833)](l);
  }
  return a;
}
function ws(n, e) {
  var x = c;
  if (((e = e || 90), n[x(152)] < 8)) return n + x(989);
  if (n.length > e) return x(231);
  var t = n[x(177)](),
    r = n[x(317)]();
  if (n !== t && n !== r) return x(1227) + n;
  n = t;
  var a = n[x(911)]("1");
  if (a === -1) return x(658) + n;
  if (a === 0) return x(563) + n;
  var s = n[x(1095)](0, a),
    d = n[x(1095)](a + 1);
  if (d[x(152)] < 6) return x(1138);
  var l = ys(s);
  if (typeof l === x(1721)) return l;
  for (var v = [], m = 0; m < d[x(152)]; ++m) {
    var g = d[x(833)](m),
      k = gn[g];
    if (k === void 0) return x(1047) + g;
    (l = $e(l) ^ k), !(m + 6 >= d.length) && v[x(608)](k);
  }
  return l !== 1 ? x(1455) + n : { prefix: s, words: v };
}
function _o() {
  var n = c,
    e = ws[n(1429)](null, arguments);
  if (typeof e === n(661)) return e;
}
function x2(n) {
  var e = c,
    x = ws.apply(null, arguments);
  if (typeof x === e(661)) return x;
  throw new Error(x);
}
function Lr(n, e, x, t) {
  for (
    var r = c, a = 0, s = 0, d = (1 << x) - 1, l = [], v = 0;
    v < n[r(152)];
    ++v
  )
    for (a = (a << e) | n[v], s += e; s >= x; )
      (s -= x), l[r(608)]((a >> s) & d);
  if (t) s > 0 && l[r(608)]((a << (x - s)) & d);
  else {
    if (s >= e) return r(490);
    if ((a << (x - s)) & d) return r(575);
  }
  return l;
}
function e2(n) {
  var e = c,
    x = Lr(n, 8, 5, !![]);
  if (Array[e(1900)](x)) return x;
}
function t2(n) {
  var e = c,
    x = Lr(n, 8, 5, !![]);
  if (Array[e(1900)](x)) return x;
  throw new Error(x);
}
function r2(n) {
  var e = c,
    x = Lr(n, 5, 8, ![]);
  if (Array[e(1900)](x)) return x;
}
function n2(n) {
  var e = c,
    x = Lr(n, 5, 8, ![]);
  if (Array[e(1900)](x)) return x;
  throw new Error(x);
}
var a2 = {
  decodeUnsafe: _o,
  decode: x2,
  encode: $o,
  toWordsUnsafe: e2,
  toWords: t2,
  fromWordsUnsafe: r2,
  fromWords: n2,
};
const Ua = a2,
  bx = "providers/5.7.0",
  Mt = new T(bx);
class X {
  constructor() {
    var e = c;
    this[e(1638)] = this.getDefaultFormats();
  }
  [c(1163)]() {
    var e = c;
    const x = {},
      t = this[e(1531)][e(1360)](this),
      r = this[e(1407)][e(1360)](this),
      a = this[e(561)].bind(this),
      s = this[e(1086)][e(1360)](this),
      d = this[e(1062)][e(1360)](this),
      l = this[e(622)].bind(this),
      v = this[e(456)][e(1360)](this),
      m = this.type.bind(this),
      g = (k) => {
        var S = e;
        return this[S(1086)](k, !![]);
      };
    return (
      (x[e(1785)] = {
        hash: d,
        type: m,
        accessList: X.allowNull(this.accessList[e(1360)](this), null),
        blockHash: X[e(1767)](d, null),
        blockNumber: X.allowNull(v, null),
        transactionIndex: X[e(1767)](v, null),
        confirmations: X[e(1767)](v, null),
        from: t,
        gasPrice: X[e(1767)](r),
        maxPriorityFeePerGas: X[e(1767)](r),
        maxFeePerGas: X[e(1767)](r),
        gasLimit: r,
        to: X[e(1767)](t, null),
        value: r,
        nonce: v,
        data: s,
        r: X[e(1767)](this[e(1814)]),
        s: X[e(1767)](this[e(1814)]),
        v: X[e(1767)](v),
        creates: X.allowNull(t, null),
        raw: X[e(1767)](s),
      }),
      (x[e(273)] = {
        from: X.allowNull(t),
        nonce: X[e(1767)](v),
        gasLimit: X[e(1767)](r),
        gasPrice: X.allowNull(r),
        maxPriorityFeePerGas: X[e(1767)](r),
        maxFeePerGas: X[e(1767)](r),
        to: X[e(1767)](t),
        value: X[e(1767)](r),
        data: X[e(1767)](g),
        type: X.allowNull(v),
        accessList: X[e(1767)](this[e(676)][e(1360)](this), null),
      }),
      (x[e(382)] = {
        transactionIndex: v,
        blockNumber: v,
        transactionHash: d,
        address: t,
        topics: X[e(1431)](d),
        data: s,
        logIndex: v,
        blockHash: d,
      }),
      (x[e(1291)] = {
        to: X.allowNull(this[e(1531)], null),
        from: X[e(1767)](this.address, null),
        contractAddress: X.allowNull(t, null),
        transactionIndex: v,
        root: X[e(1767)](l),
        gasUsed: r,
        logsBloom: X[e(1767)](s),
        blockHash: d,
        transactionHash: d,
        logs: X[e(1431)](this[e(382)][e(1360)](this)),
        blockNumber: v,
        confirmations: X[e(1767)](v, null),
        cumulativeGasUsed: r,
        effectiveGasPrice: X[e(1767)](r),
        status: X[e(1767)](v),
        type: m,
      }),
      (x[e(433)] = {
        hash: X.allowNull(d),
        parentHash: d,
        number: v,
        timestamp: v,
        nonce: X[e(1767)](l),
        difficulty: this[e(1857)][e(1360)](this),
        gasLimit: r,
        gasUsed: r,
        miner: X.allowNull(t),
        extraData: s,
        transactions: X[e(1767)](X[e(1431)](d)),
        baseFeePerGas: X[e(1767)](r),
      }),
      (x[e(1218)] = X0(x.block)),
      (x[e(1218)][e(545)] = X[e(1767)](X.arrayOf(this[e(312)][e(1360)](this)))),
      (x[e(196)] = {
        fromBlock: X[e(1767)](a, void 0),
        toBlock: X.allowNull(a, void 0),
        blockHash: X[e(1767)](d, void 0),
        address: X[e(1767)](t, void 0),
        topics: X[e(1767)](this[e(967)].bind(this), void 0),
      }),
      (x[e(291)] = {
        blockNumber: X[e(1767)](v),
        blockHash: X[e(1767)](d),
        transactionIndex: v,
        removed: X.allowNull(this[e(1675)][e(1360)](this)),
        address: t,
        data: X[e(1529)](s, "0x"),
        topics: X[e(1431)](d),
        transactionHash: d,
        logIndex: v,
      }),
      x
    );
  }
  accessList(e) {
    return fe(e || []);
  }
  number(e) {
    var x = c;
    return e === "0x" ? 0 : z[x(1180)](e)[x(1919)]();
  }
  [c(577)](e) {
    var x = c;
    return e === "0x" || e == null ? 0 : z.from(e)[x(1919)]();
  }
  bigNumber(e) {
    var x = c;
    return z[x(1180)](e);
  }
  [c(1675)](e) {
    var x = c;
    if (typeof e === x(1675)) return e;
    if (typeof e === x(1721)) {
      if (((e = e.toLowerCase()), e === x(1253))) return !![];
      if (e === x(1267)) return ![];
    }
    throw new Error(x(872) + e);
  }
  [c(622)](e, x) {
    var t = c;
    return typeof e === t(1721) &&
      (!x && e.substring(0, 2) !== "0x" && (e = "0x" + e), n0(e))
      ? e.toLowerCase()
      : Mt[t(1839)]("invalid hash", t(1204), e);
  }
  [c(1086)](e, x) {
    var t = c;
    const r = this[t(622)](e, x);
    if (r[t(152)] % 2 !== 0) throw new Error(t(1324) + e);
    return r;
  }
  [c(1531)](e) {
    return j0(e);
  }
  [c(1037)](e) {
    if (!n0(e, 32)) return null;
    const x = j0(tx(e, 12));
    return x === ki ? null : x;
  }
  [c(1323)](e) {
    return Ir(e);
  }
  [c(561)](e) {
    var x = c;
    if (e == null) return x(1626);
    if (e === x(1878)) return "0x0";
    switch (e) {
      case x(1878):
        return x(1134);
      case x(1626):
      case x(565):
      case x(1504):
      case "finalized":
        return e;
    }
    if (typeof e === x(456) || n0(e)) return Qt(e);
    throw new Error(x(384));
  }
  [c(1062)](e, x) {
    var t = c;
    const r = this.hex(e, x);
    return Hx(r) !== 32 ? Mt[t(1839)]("invalid hash", "value", e) : r;
  }
  [c(1857)](e) {
    var x = c;
    if (e == null) return null;
    const t = z.from(e);
    try {
      return t[x(1919)]();
    } catch (r) {}
    return null;
  }
  [c(1814)](e) {
    var x = c;
    if (!n0(e)) throw new Error(x(1120));
    return Y0(e, 32);
  }
  [c(1527)](e, x) {
    var t = c;
    e.author != null && e.miner == null && (e[t(687)] = e.author);
    const r = e[t(1958)] != null ? e[t(1958)] : e[t(1857)],
      a = X[t(1334)](x, e);
    return (a[t(1958)] = r == null ? null : z.from(r)), a;
  }
  [c(433)](e) {
    var x = c;
    return this[x(1527)](e, this[x(1638)][x(433)]);
  }
  [c(1218)](e) {
    var x = c;
    return this[x(1527)](e, this[x(1638)][x(1218)]);
  }
  [c(273)](e) {
    var x = c;
    return X[x(1334)](this.formats[x(273)], e);
  }
  [c(312)](e) {
    var x = c;
    e[x(1230)] != null && e[x(1550)] == null && (e.gasLimit = e.gas),
      e.to && z[x(1180)](e.to)[x(770)]() && (e.to = x(1543)),
      e[x(1519)] != null && e[x(1086)] == null && (e[x(1086)] = e[x(1519)]),
      e.to == null &&
        e[x(1162)] == null &&
        (e[x(1162)] = this.contractAddress(e)),
      (e[x(577)] === 1 || e[x(577)] === 2) &&
        e[x(676)] == null &&
        (e[x(676)] = []);
    const t = X[x(1334)](this[x(1638)].transaction, e);
    if (e[x(1923)] != null) {
      let r = e[x(1923)];
      n0(r) && (r = z[x(1180)](r)[x(1919)]()), (t[x(1923)] = r);
    } else {
      let r = e[x(1502)];
      r == null && t.v == null && (r = e.chainId),
        n0(r) && (r = z.from(r).toNumber()),
        typeof r !== x(456) &&
          t.v != null &&
          ((r = (t.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
        typeof r != "number" && (r = 0),
        (t.chainId = r);
    }
    return (
      t[x(1301)] &&
        t[x(1301)].replace(/0/g, "") === "x" &&
        (t.blockHash = null),
      t
    );
  }
  transaction(e) {
    return es(e);
  }
  [c(382)](e) {
    var x = c;
    return X[x(1334)](this[x(1638)].receiptLog, e);
  }
  [c(1291)](e) {
    var x = c;
    const t = X[x(1334)](this[x(1638)][x(1291)], e);
    if (t[x(1930)] != null)
      if (t[x(1930)][x(152)] <= 4) {
        const r = z[x(1180)](t.root).toNumber();
        r === 0 || r === 1
          ? (t[x(1924)] != null &&
              t[x(1924)] !== r &&
              Mt.throwArgumentError(
                "alt-root-status/status mismatch",
                x(1204),
                { root: t.root, status: t[x(1924)] }
              ),
            (t[x(1924)] = r),
            delete t[x(1930)])
          : Mt[x(1839)](x(306), x(959), t[x(1930)]);
      } else
        t[x(1930)].length !== 66 &&
          Mt.throwArgumentError("invalid root hash", x(959), t[x(1930)]);
    return t[x(1924)] != null && (t[x(795)] = !![]), t;
  }
  topics(e) {
    var x = c;
    return Array[x(1900)](e)
      ? e[x(794)]((t) => this.topics(t))
      : e != null
      ? this.hash(e, !![])
      : null;
  }
  filter(e) {
    var x = c;
    return X[x(1334)](this[x(1638)][x(196)], e);
  }
  [c(291)](e) {
    var x = c;
    return X[x(1334)](this.formats.filterLog, e);
  }
  static check(e, x) {
    var t = c;
    const r = {};
    for (const a in e)
      try {
        const s = e[a](x[a]);
        s !== void 0 && (r[a] = s);
      } catch (s) {
        throw ((s[t(559)] = a), (s[t(340)] = x[a]), s);
      }
    return r;
  }
  static allowNull(e, x) {
    return function (t) {
      return t == null ? x : e(t);
    };
  }
  static allowFalsish(e, x) {
    return function (t) {
      return t ? e(t) : x;
    };
  }
  static [c(1431)](e) {
    return function (x) {
      var t = O;
      if (!Array[t(1900)](x)) throw new Error(t(836));
      const r = [];
      return (
        x[t(1745)](function (a) {
          r.push(e(a));
        }),
        r
      );
    };
  }
}
function As(n) {
  var e = c;
  return n && typeof n[e(406)] == "function";
}
function yn(n) {
  return As(n) && n.isCommunityResource();
}
let La = ![];
function Xt() {
  var n = c;
  La ||
    ((La = !![]),
    console[n(599)]("========= NOTICE ========="),
    console[n(599)](
      "Request-Rate Exceeded  (this message will not be repeated)"
    ),
    console[n(599)](""),
    console[n(599)](
      "The default API keys for each service are provided as a highly-throttled,"
    ),
    console.log(n(924)),
    console[n(599)](""),
    console[n(599)](
      "While your application will continue to function, we highly recommended"
    ),
    console.log(n(823)),
    console[n(599)](n(1376)),
    console[n(599)](""),
    console[n(599)](n(1354)),
    console[n(599)](n(648)));
}
var t0 =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        try {
          m(t.throw(g));
        } catch (k) {
          s(k);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g.value).then(l, v);
      }
      m((t = t[d(1429)](n, e || []))[d(1747)]());
    });
  };
const G0 = new T(bx),
  i2 = 10;
function Ga(n) {
  var e = c;
  return n == null
    ? e(211)
    : (Hx(n) !== 32 && G0.throwArgumentError(e(1137), e(447), n),
      n.toLowerCase());
}
function Ka(n) {
  var e = c;
  for (n = n.slice(); n[e(152)] > 0 && n[n.length - 1] == null; ) n[e(1196)]();
  return n
    .map((x) => {
      var t = e;
      if (Array[t(1900)](x)) {
        const r = {};
        x[t(1745)]((s) => {
          r[Ga(s)] = !![];
        });
        const a = Object[t(319)](r);
        return a[t(760)](), a[t(1286)]("|");
      } else return Ga(x);
    })
    [e(1286)]("&");
}
function s2(n) {
  var e = c;
  return n === ""
    ? []
    : n[e(1418)](/&/g)[e(794)]((x) => {
        var t = e;
        if (x === "") return [];
        const r = x.split("|")[t(794)]((a) => {
          var s = t;
          return a === s(211) ? null : a;
        });
        return r[t(152)] === 1 ? r[0] : r;
      });
}
function He(n) {
  var e = c;
  if (typeof n == "string") {
    if (((n = n.toLowerCase()), Hx(n) === 32)) return e(1459) + n;
    if (n[e(1532)](":") === -1) return n;
  } else {
    if (Array.isArray(n)) return e(1751) + Ka(n);
    if (Uc[e(1147)](n)) throw (G0[e(830)](e(1658)), new Error(e(1658)));
    if (n && typeof n === e(661))
      return "filter:" + (n.address || "*") + ":" + Ka(n.topics || []);
  }
  throw new Error(e(583) + n);
}
function Et() {
  return new Date().getTime();
}
function qa(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
const f2 = [c(433), c(417), c(565), c(1558)];
class c2 {
  constructor(e, x, t) {
    var r = c;
    F(this, r(748), e),
      F(this, "listener", x),
      F(this, "once", t),
      (this[r(996)] = -2),
      (this[r(1063)] = ![]);
  }
  get [c(547)]() {
    var e = c;
    switch (this[e(577)]) {
      case "tx":
        return this.hash;
      case e(196):
        return this[e(196)];
    }
    return this[e(748)];
  }
  get type() {
    var e = c;
    return this[e(748)].split(":")[0];
  }
  get hash() {
    var e = c;
    const x = this[e(748)][e(1418)](":");
    return x[0] !== "tx" ? null : x[1];
  }
  get [c(196)]() {
    var e = c;
    const x = this[e(748)][e(1418)](":");
    if (x[0] !== "filter") return null;
    const t = x[1],
      r = s2(x[2]),
      a = {};
    return (
      r[e(152)] > 0 && (a[e(967)] = r), t && t !== "*" && (a[e(1531)] = t), a
    );
  }
  [c(900)]() {
    var e = c;
    return this[e(748)].indexOf(":") >= 0 || f2.indexOf(this.tag) >= 0;
  }
}
const o2 = {
  0: { symbol: c(755), p2pkh: 0, p2sh: 5, prefix: "bc" },
  2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
  3: { symbol: c(1694), p2pkh: 30, p2sh: 22 },
  60: { symbol: "eth", ilk: c(1058) },
  61: { symbol: c(267), ilk: c(1058) },
  700: { symbol: "xdai", ilk: c(1058) },
};
function xn(n) {
  var e = c;
  return Y0(z[e(1180)](n)[e(1304)](), 32);
}
function za(n) {
  return _e.encode(V0([n, tx(Vx(Vx(n)), 0, 4)]));
}
const Ms = new RegExp(c(1501), "i"),
  Ha = [
    new RegExp(c(1693), "i"),
    new RegExp(c(819), "i"),
    Ms,
    new RegExp(c(970), "i"),
  ];
function vr(n, e) {
  try {
    return Le(jt(n, e));
  } catch (x) {}
  return null;
}
function jt(n, e) {
  var x = c;
  if (n === "0x") return null;
  const t = z[x(1180)](tx(n, e, e + 32))[x(1919)](),
    r = z[x(1180)](tx(n, t, t + 32)).toNumber();
  return tx(n, t + 32, t + 32 + r);
}
function en(n) {
  var e = c;
  return (
    n[e(354)](/^ipfs:\/\/ipfs\//i)
      ? (n = n[e(1329)](12))
      : n[e(354)](/^ipfs:\/\//i)
      ? (n = n.substring(7))
      : G0[e(1839)](e(660), e(1871), n),
    e(1880) + n
  );
}
function Ja(n) {
  var e = c;
  const x = q(n);
  if (x[e(152)] > 32) throw new Error(e(1596));
  const t = new Uint8Array(32);
  return t[e(509)](x, 32 - x[e(152)]), t;
}
function u2(n) {
  var e = c;
  if (n[e(152)] % 32 === 0) return n;
  const x = new Uint8Array(Math[e(1277)](n[e(152)] / 32) * 32);
  return x.set(n), x;
}
function Es(n) {
  var e = c;
  const x = [];
  let t = 0;
  for (let r = 0; r < n[e(152)]; r++) x[e(608)](null), (t += 32);
  for (let r = 0; r < n.length; r++) {
    const a = q(n[r]);
    (x[r] = Ja(t)),
      x.push(Ja(a.length)),
      x[e(608)](u2(a)),
      (t += 32 + Math.ceil(a[e(152)] / 32) * 32);
  }
  return vx(x);
}
class wn {
  constructor(e, x, t, r) {
    var a = c;
    F(this, a(1362), e),
      F(this, "name", t),
      F(this, a(1531), e[a(1862)][a(1531)](x)),
      F(this, a(1803), r);
  }
  [c(475)]() {
    var e = c;
    return (
      !this[e(207)] &&
        (this._supportsEip2544 = this[e(1362)]
          .call({ to: this.address, data: e(336) })
          [e(1494)]((x) => z.from(x).eq(1))
          .catch((x) => {
            var t = e;
            if (x[t(585)] === T.errors[t(893)]) return ![];
            throw ((this[t(207)] = null), x);
          })),
      this[e(207)]
    );
  }
  _fetch(e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      const r = {
        to: this[t(1531)],
        ccipReadEnabled: !![],
        data: vx([e, Nt(this[t(296)]), x || "0x"]),
      };
      let a = ![];
      (yield this[t(475)]()) &&
        ((a = !![]), (r.data = vx([t(1512), Es([qi(this.name), r[t(1086)]])])));
      try {
        let s = yield this.provider[t(1340)](r);
        return (
          q(s)[t(152)] % 32 === 4 &&
            G0[t(304)]("resolver threw error", T.errors[t(893)], {
              transaction: r,
              data: s,
            }),
          a && (s = jt(s, 0)),
          s
        );
      } catch (s) {
        if (s[t(585)] === T[t(1169)][t(893)]) return null;
        throw s;
      }
    });
  }
  _fetchBytes(e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      const r = yield this[t(1349)](e, x);
      return r != null ? jt(r, 0) : null;
    });
  }
  [c(1577)](e, x) {
    var t = c;
    const r = o2[String(e)];
    if (
      (r == null &&
        G0[t(304)](t(391) + e, T[t(1169)][t(854)], {
          operation: t(817) + e + ")",
        }),
      r[t(999)] === t(1058))
    )
      return this.provider.formatter.address(x);
    const a = q(x);
    if (r[t(1033)] != null) {
      const s = x.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (s) {
        const d = parseInt(s[1], 16);
        if (s[2][t(152)] === d * 2 && d >= 1 && d <= 75)
          return za(V0([[r[t(1033)]], "0x" + s[2]]));
      }
    }
    if (r[t(1365)] != null) {
      const s = x[t(354)](/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (s) {
        const d = parseInt(s[1], 16);
        if (s[2][t(152)] === d * 2 && d >= 1 && d <= 75)
          return za(V0([[r[t(1365)]], "0x" + s[2]]));
      }
    }
    if (r[t(860)] != null) {
      const s = a[1];
      let d = a[0];
      if (
        (d === 0 ? s !== 20 && s !== 32 && (d = -1) : (d = -1),
        d >= 0 && a[t(152)] === 2 + s && s >= 1 && s <= 75)
      ) {
        const l = Ua[t(1651)](a[t(1095)](2));
        return l[t(1604)](d), Ua[t(1664)](r[t(860)], l);
      }
    }
    return null;
  }
  [c(471)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      if ((e == null && (e = 60), e === 60))
        try {
          const a = yield this[x(1349)](x(1026));
          return a === "0x" || a === Cn
            ? null
            : this.provider[x(1862)].callAddress(a);
        } catch (a) {
          if (a[x(585)] === T[x(1169)].CALL_EXCEPTION) return null;
          throw a;
        }
      const t = yield this[x(1618)](x(416), xn(e));
      if (t == null || t === "0x") return null;
      const r = this[x(1577)](e, t);
      return (
        r == null &&
          G0[x(304)](x(713), T[x(1169)].UNSUPPORTED_OPERATION, {
            operation: x(817) + e + ")",
            coinType: e,
            data: t,
          }),
        r
      );
    });
  }
  getAvatar() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      const x = [{ type: e(296), content: this.name }];
      try {
        const t = yield this[e(1079)](e(168));
        if (t == null) return null;
        for (let r = 0; r < Ha[e(152)]; r++) {
          const a = t.match(Ha[r]);
          if (a == null) continue;
          const s = a[1].toLowerCase();
          switch (s) {
            case e(1552):
              return (
                x[e(608)]({ type: e(920), content: t }), { linkage: x, url: t }
              );
            case e(1086):
              return (
                x.push({ type: e(1086), content: t }), { linkage: x, url: t }
              );
            case e(1561):
              return (
                x[e(608)]({ type: e(1561), content: t }),
                { linkage: x, url: en(t) }
              );
            case e(1591):
            case e(262): {
              const d = s === e(1591) ? e(1099) : e(1159);
              x[e(608)]({ type: s, content: t });
              const l = this[e(1803)] || (yield this[e(471)]()),
                v = (a[2] || "")[e(1418)]("/");
              if (v[e(152)] !== 2) return null;
              const m = yield this[e(1362)].formatter.address(v[0]),
                g = Y0(z.from(v[1])[e(1304)](), 32);
              if (s === "erc721") {
                const D = this[e(1362)].formatter.callAddress(
                  yield this[e(1362)][e(1340)]({ to: m, data: vx([e(356), g]) })
                );
                if (l !== D) return null;
                x.push({ type: e(494), content: D });
              } else if (s === e(262)) {
                const D = z[e(1180)](
                  yield this.provider[e(1340)]({
                    to: m,
                    data: vx([e(1342), Y0(l, 32), g]),
                  })
                );
                if (D[e(770)]()) return null;
                x[e(608)]({ type: e(1700), content: D[e(1628)]() });
              }
              const k = {
                to: this[e(1362)][e(1862)][e(1531)](v[0]),
                data: vx([d, g]),
              };
              let S = vr(yield this[e(1362)].call(k), 0);
              if (S == null) return null;
              x.push({ type: e(1702), content: S }),
                s === e(262) &&
                  ((S = S[e(330)]("{id}", g.substring(2))),
                  x[e(608)]({ type: e(1346), content: S })),
                S.match(/^ipfs:/i) && (S = en(S)),
                x[e(608)]({ type: e(1148), content: S });
              const B = yield nt(S);
              if (!B) return null;
              x[e(608)]({ type: e(1876), content: JSON[e(657)](B) });
              let R = B[e(1864)];
              if (typeof R !== e(1721)) return null;
              if (!R[e(354)](/^(https:\/\/|data:)/i)) {
                if (R.match(Ms) == null) return null;
                x[e(608)]({ type: e(816), content: R }), (R = en(R));
              }
              return (
                x[e(608)]({ type: e(920), content: R }), { linkage: x, url: R }
              );
            }
          }
        }
      } catch (t) {}
      return null;
    });
  }
  [c(1444)]() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      const x = yield this[e(1618)](e(1586));
      if (x == null || x === "0x") return null;
      const t = x.match(
        /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
      );
      if (t) {
        const d = parseInt(t[3], 16);
        if (t[4][e(152)] === d * 2) return "ipfs://" + _e[e(1664)]("0x" + t[1]);
      }
      const r = x[e(354)](
        /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
      );
      if (r) {
        const d = parseInt(r[3], 16);
        if (r[4][e(152)] === d * 2) return "ipns://" + _e[e(1664)]("0x" + r[1]);
      }
      const a = x[e(354)](/^0xe40101fa011b20([0-9a-f]*)$/);
      if (a && a[1][e(152)] === 32 * 2) return "bzz://" + a[1];
      const s = x[e(354)](/^0x90b2c605([0-9a-f]*)$/);
      if (s && s[1][e(152)] === 34 * 2) {
        const d = { "=": "", "+": "-", "/": "_" },
          l = Rn("0x" + s[1])[e(330)](/[=+\/]/g, (v) => d[v]);
        return "sia://" + l;
      }
      return G0[e(304)](
        "invalid or unsupported content hash data",
        T[e(1169)][e(854)],
        { operation: e(1076), data: x }
      );
    });
  }
  [c(1079)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      let t = ax(e);
      (t = V0([xn(64), xn(t[x(152)]), t])),
        t[x(152)] % 32 !== 0 && (t = V0([t, Y0("0x", 32 - (e[x(152)] % 32))]));
      const r = yield this._fetchBytes("0x59d1d43c", H(t));
      return r == null || r === "0x" ? null : Le(r);
    });
  }
}
let tn = null,
  h2 = 1;
class Gr extends Ge {
  constructor(e) {
    var x = c;
    if (
      (super(),
      (this[x(1986)] = []),
      (this[x(1235)] = { block: -2 }),
      (this[x(1970)] = ![]),
      (this.formatter = new.target[x(1926)]()),
      F(this, x(792), e === x(1705)),
      this[x(792)] && (e = this[x(573)]()),
      e instanceof Promise)
    )
      (this[x(1503)] = e),
        e[x(1083)]((t) => {}),
        this[x(918)]()[x(1083)]((t) => {});
    else {
      const t = ux(new.target, "getNetwork")(e);
      t
        ? (F(this, x(1417), t), this[x(1830)](x(417), t, null))
        : G0[x(1839)]("invalid network", "network", e);
    }
    (this[x(1787)] = -1024),
      (this._lastBlockNumber = -2),
      (this._maxFilterBlockRange = 10),
      (this[x(916)] = 4e3),
      (this._fastQueryDate = 0);
  }
  [c(918)]() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      if (this[e(1417)] == null) {
        let x = null;
        if (this[e(1503)])
          try {
            x = yield this[e(1503)];
          } catch (t) {}
        x == null && (x = yield this[e(573)]()),
          !x && G0[e(304)]("no network detected", T[e(1169)][e(1185)], {}),
          this[e(1417)] == null &&
            (this[e(792)] ? (this[e(1417)] = x) : F(this, e(1417), x),
            this[e(1830)]("network", x, null));
      }
      return this._network;
    });
  }
  get ready() {
    return Te(() => {
      var e = O;
      return this[e(918)]()[e(1494)](
        (x) => x,
        (x) => {
          var t = e;
          if (!(x[t(585)] === T.errors[t(812)] && x.event === t(277))) throw x;
        }
      );
    });
  }
  static getFormatter() {
    return tn == null && (tn = new X()), tn;
  }
  static [c(1505)](e) {
    return Wn(e == null ? "homestead" : e);
  }
  [c(511)](e, x, t) {
    return t0(this, void 0, void 0, function* () {
      var r = O;
      if (this[r(1970)] || t.length === 0) return null;
      const a = e.to.toLowerCase(),
        s = x.toLowerCase(),
        d = [];
      for (let l = 0; l < t[r(152)]; l++) {
        const v = t[l],
          m = v.replace("{sender}", a)[r(330)](r(1995), s),
          g =
            v[r(1532)](r(1995)) >= 0
              ? null
              : JSON[r(657)]({ data: s, sender: a }),
          k = yield nt({ url: m, errorPassThrough: !![] }, g, (B, R) => {
            var D = r;
            return (B[D(1924)] = R.statusCode), B;
          });
        if (k[r(1086)]) return k[r(1086)];
        const S = k[r(469)] || "unknown error";
        if (k[r(1924)] >= 400 && k[r(1924)] < 500)
          return G0[r(304)](r(1269) + S, T[r(1169)][r(1672)], {
            url: v,
            errorMessage: S,
          });
        d[r(608)](S);
      }
      return G0.throwError(
        r(668) + d.map((l) => JSON[r(657)](l))[r(1286)](", "),
        T[r(1169)][r(1672)],
        { urls: t, errorMessages: d }
      );
    });
  }
  [c(1549)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      if ((yield this[x(918)](), e > 0))
        for (; this[x(1954)]; ) {
          const a = this[x(1954)];
          try {
            const s = yield a;
            if (Et() - s[x(1806)] <= e) return s[x(452)];
            break;
          } catch (s) {
            if (this[x(1954)] === a) break;
          }
        }
      const t = Et(),
        r = xx({
          blockNumber: this[x(205)](x(1913), {}),
          networkError: this[x(1505)]()[x(1494)](
            (a) => null,
            (a) => a
          ),
        })[x(1494)](({ blockNumber: a, networkError: s }) => {
          var d = x;
          if (s)
            throw (
              (this[d(1954)] === r && (this._internalBlockNumber = null), s)
            );
          const l = Et();
          return (
            (a = z.from(a)[d(1919)]()),
            a < this[d(1787)] && (a = this[d(1787)]),
            (this[d(1787)] = a),
            this[d(408)](a),
            { blockNumber: a, reqTime: t, respTime: l }
          );
        });
      return (
        (this[x(1954)] = r),
        r[x(1083)]((a) => {
          var s = x;
          this[s(1954)] === r && (this[s(1954)] = null);
        }),
        (yield r)[x(452)]
      );
    });
  }
  poll() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      const x = h2++,
        t = [];
      let r = null;
      try {
        r = yield this[e(1549)](100 + this.pollingInterval / 2);
      } catch (a) {
        this[e(1830)](e(779), a);
        return;
      }
      if (
        (this[e(408)](r),
        this[e(1830)](e(1558), x, r),
        r === this._lastBlockNumber)
      ) {
        this[e(1830)](e(688), x);
        return;
      }
      if (
        (this[e(1235)].block === -2 && (this[e(1235)][e(433)] = r - 1),
        Math[e(238)](this[e(1235)][e(433)] - r) > 1e3)
      )
        G0[e(830)](e(476) + this[e(1235)][e(433)] + e(566) + r + ")"),
          this[e(1830)](
            "error",
            G0[e(1395)](e(864), T[e(1169)][e(812)], {
              blockNumber: r,
              event: e(386),
              previousBlockNumber: this._emitted[e(433)],
            })
          ),
          this.emit(e(433), r);
      else
        for (let a = this[e(1235)][e(433)] + 1; a <= r; a++)
          this.emit(e(433), a);
      this._emitted[e(433)] !== r &&
        ((this[e(1235)][e(433)] = r),
        Object[e(319)](this[e(1235)])[e(1745)]((a) => {
          var s = e;
          if (a === "block") return;
          const d = this._emitted[a];
          d !== s(565) && r - d > 12 && delete this[s(1235)][a];
        })),
        this[e(996)] === -2 && (this[e(996)] = r - 1),
        this[e(1986)][e(1745)]((a) => {
          var s = e;
          switch (a[s(577)]) {
            case "tx": {
              const d = a[s(1062)];
              let l = this[s(1055)](d)
                [s(1494)]((v) => {
                  var m = s;
                  return (
                    !v ||
                      v[m(452)] == null ||
                      ((this[m(1235)]["t:" + d] = v[m(452)]), this.emit(d, v)),
                    null
                  );
                })
                [s(1083)]((v) => {
                  var m = s;
                  this[m(1830)](m(779), v);
                });
              t[s(608)](l);
              break;
            }
            case s(196): {
              if (!a[s(1063)]) {
                (a[s(1063)] = !![]), a[s(996)] === -2 && (a[s(996)] = r - 1);
                const d = a[s(196)];
                (d[s(815)] = a[s(996)] + 1), (d[s(1339)] = r);
                const l = d[s(1339)] - this._maxFilterBlockRange;
                l > d[s(815)] && (d[s(815)] = l),
                  d.fromBlock < 0 && (d[s(815)] = 0);
                const v = this.getLogs(d)
                  .then((m) => {
                    var g = s;
                    (a[g(1063)] = ![]),
                      m[g(152)] !== 0 &&
                        m[g(1745)]((k) => {
                          var S = g;
                          k[S(452)] > a[S(996)] && (a[S(996)] = k[S(452)]),
                            (this[S(1235)]["b:" + k[S(1301)]] = k[S(452)]),
                            (this[S(1235)]["t:" + k[S(586)]] = k[S(452)]),
                            this[S(1830)](d, k);
                        });
                  })
                  [s(1083)]((m) => {
                    var g = s;
                    this.emit(g(779), m), (a[g(1063)] = ![]);
                  });
                t[s(608)](v);
              }
              break;
            }
          }
        }),
        (this._lastBlockNumber = r),
        Promise.all(t)
          [e(1494)](() => {
            var a = e;
            this[a(1830)]("didPoll", x);
          })
          [e(1083)]((a) => {
            var s = e;
            this[s(1830)](s(779), a);
          });
    });
  }
  [c(1688)](e) {
    var x = c;
    (this[x(996)] = e - 1), this[x(1316)] && this[x(1558)]();
  }
  get [c(417)]() {
    return this._network;
  }
  detectNetwork() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      return G0[e(304)](e(1010), T[e(1169)][e(854)], { operation: e(1750) });
    });
  }
  [c(1505)]() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      const x = yield this[e(918)](),
        t = yield this[e(573)]();
      if (x.chainId !== t[e(1923)]) {
        if (this[e(792)])
          return (
            (this[e(1417)] = t),
            (this[e(996)] = -2),
            (this[e(510)] = null),
            (this._fastBlockNumberPromise = null),
            (this._fastQueryDate = 0),
            (this[e(1235)].block = -2),
            (this[e(1787)] = -1024),
            (this[e(1954)] = null),
            this[e(1830)](e(417), t, x),
            yield qa(0),
            this[e(1417)]
          );
        const r = G0[e(1395)](e(865), T[e(1169)][e(812)], {
          event: e(516),
          network: x,
          detectedNetwork: t,
        });
        throw (this[e(1830)](e(779), r), r);
      }
      return x;
    });
  }
  get [c(452)]() {
    var e = c;
    return (
      this[e(1549)](100 + this[e(696)] / 2)[e(1494)](
        (x) => {
          var t = e;
          this[t(408)](x);
        },
        (x) => {}
      ),
      this[e(510)] != null ? this[e(510)] : -1
    );
  }
  get [c(1316)]() {
    var e = c;
    return this[e(1541)] != null;
  }
  set polling(e) {
    var x = c;
    e && !this[x(1541)]
      ? ((this[x(1541)] = setInterval(() => {
          var t = x;
          this[t(1558)]();
        }, this[x(696)])),
        !this[x(216)] &&
          (this[x(216)] = setTimeout(() => {
            var t = x;
            this[t(1558)](),
              (this._bootstrapPoll = setTimeout(() => {
                var r = t;
                !this[r(1541)] && this[r(1558)](), (this[r(216)] = null);
              }, this.pollingInterval));
          }, 0)))
      : !e &&
        this._poller &&
        (clearInterval(this[x(1541)]), (this[x(1541)] = null));
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set [c(696)](e) {
    var x = c;
    if (typeof e != "number" || e <= 0 || parseInt(String(e)) != e)
      throw new Error("invalid polling interval");
    (this[x(916)] = e),
      this._poller &&
        (clearInterval(this._poller),
        (this[x(1541)] = setInterval(() => {
          var t = x;
          this[t(1558)]();
        }, this[x(916)])));
  }
  [c(837)]() {
    var e = c;
    const x = Et();
    return (
      x - this[e(1560)] > 2 * this[e(916)] &&
        ((this[e(1560)] = x),
        (this[e(1258)] = this[e(1913)]()[e(1494)]((t) => {
          var r = e;
          return (
            (this[r(510)] == null || t > this[r(510)]) && (this[r(510)] = t),
            this._fastBlockNumber
          );
        }))),
      this[e(1258)]
    );
  }
  _setFastBlockNumber(e) {
    var x = c;
    (this._fastBlockNumber != null && e < this[x(510)]) ||
      ((this[x(1560)] = Et()),
      (this[x(510)] == null || e > this[x(510)]) &&
        ((this[x(510)] = e), (this[x(1258)] = Promise.resolve(e))));
  }
  [c(705)](e, x, t) {
    return t0(this, void 0, void 0, function* () {
      var r = O;
      return this[r(1160)](e, x == null ? 1 : x, t || 0, null);
    });
  }
  [c(1160)](e, x, t, r) {
    return t0(this, void 0, void 0, function* () {
      var a = O;
      const s = yield this[a(1055)](e);
      return (s ? s.confirmations : 0) >= x
        ? s
        : new Promise((d, l) => {
            var v = a;
            const m = [];
            let g = ![];
            const k = function () {
                var B = O;
                return g
                  ? !![]
                  : ((g = !![]),
                    m[B(1745)]((R) => {
                      R();
                    }),
                    ![]);
              },
              S = (B) => {
                var R = O;
                B[R(693)] < x || k() || d(B);
              };
            if (
              (this.on(e, S),
              m[v(608)](() => {
                var B = v;
                this[B(506)](e, S);
              }),
              r)
            ) {
              let B = r.startBlock,
                R = null;
              const D = (P) =>
                t0(this, void 0, void 0, function* () {
                  var I = v;
                  g ||
                    (yield qa(1e3),
                    this[I(1590)](r[I(1180)])[I(1494)](
                      (K) =>
                        t0(this, void 0, void 0, function* () {
                          var G = I;
                          if (!g) {
                            if (K <= r[G(1361)]) B = P;
                            else {
                              {
                                const V = yield this[G(362)](e);
                                if (V && V[G(452)] != null) return;
                              }
                              for (
                                R == null &&
                                ((R = B - 3), R < r[G(800)] && (R = r[G(800)]));
                                R <= P;

                              ) {
                                if (g) return;
                                const V = yield this.getBlockWithTransactions(
                                  R
                                );
                                for (let j = 0; j < V[G(545)][G(152)]; j++) {
                                  const L = V.transactions[j];
                                  if (L[G(1062)] === e) return;
                                  if (
                                    L.from === r[G(1180)] &&
                                    L[G(1361)] === r.nonce
                                  ) {
                                    if (g) return;
                                    const Z = yield this.waitForTransaction(
                                      L.hash,
                                      x
                                    );
                                    if (k()) return;
                                    let $ = G(1236);
                                    L.data === r.data &&
                                    L.to === r.to &&
                                    L[G(1204)].eq(r.value)
                                      ? ($ = G(198))
                                      : L[G(1086)] === "0x" &&
                                        L[G(1180)] === L.to &&
                                        L[G(1204)][G(770)]() &&
                                        ($ = G(1748)),
                                      l(
                                        G0[G(1395)](
                                          "transaction was replaced",
                                          T.errors[G(1755)],
                                          {
                                            cancelled:
                                              $ === G(1236) || $ === G(1748),
                                            reason: $,
                                            replacement: this[G(627)](L),
                                            hash: e,
                                            receipt: Z,
                                          }
                                        )
                                      );
                                    return;
                                  }
                                }
                                R++;
                              }
                            }
                            g || this[G(1298)](G(433), D);
                          }
                        }),
                      (K) => {
                        var G = I;
                        g || this.once(G(433), D);
                      }
                    ));
                });
              if (g) return;
              this[v(1298)](v(433), D),
                m[v(608)](() => {
                  var P = v;
                  this[P(506)](P(433), D);
                });
            }
            if (typeof t === v(456) && t > 0) {
              const B = setTimeout(() => {
                var R = v;
                k() ||
                  l(G0.makeError(R(727), T.errors[R(1720)], { timeout: t }));
              }, t);
              B[v(1184)] && B[v(1184)](),
                m.push(() => {
                  clearTimeout(B);
                });
            }
          });
    });
  }
  [c(1913)]() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      return this[e(1549)](0);
    });
  }
  getGasPrice() {
    return t0(this, void 0, void 0, function* () {
      var e = O;
      yield this[e(1505)]();
      const x = yield this[e(205)](e(278), {});
      try {
        return z[e(1180)](x);
      } catch (t) {
        return G0.throwError(e(1608), T[e(1169)][e(1672)], {
          method: "getGasPrice",
          result: x,
          error: t,
        });
      }
    });
  }
  [c(1947)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      yield this[t(1505)]();
      const r = yield xx({
          address: this[t(1577)](e),
          blockTag: this[t(1399)](x),
        }),
        a = yield this.perform(t(1947), r);
      try {
        return z.from(a);
      } catch (s) {
        return G0[t(304)](t(1608), T[t(1169)][t(1672)], {
          method: t(1947),
          params: r,
          result: a,
          error: s,
        });
      }
    });
  }
  [c(1590)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      yield this[t(1505)]();
      const r = yield xx({
          address: this._getAddress(e),
          blockTag: this[t(1399)](x),
        }),
        a = yield this[t(205)](t(1590), r);
      try {
        return z[t(1180)](a)[t(1919)]();
      } catch (s) {
        return G0.throwError("bad result from backend", T.errors[t(1672)], {
          method: t(1590),
          params: r,
          result: a,
          error: s,
        });
      }
    });
  }
  [c(1087)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      yield this[t(1505)]();
      const r = yield xx({
          address: this._getAddress(e),
          blockTag: this._getBlockTag(x),
        }),
        a = yield this[t(205)](t(1087), r);
      try {
        return H(a);
      } catch (s) {
        return G0.throwError(t(1608), T[t(1169)][t(1672)], {
          method: "getCode",
          params: r,
          result: a,
          error: s,
        });
      }
    });
  }
  [c(562)](e, x, t) {
    return t0(this, void 0, void 0, function* () {
      var r = O;
      yield this.getNetwork();
      const a = yield xx({
          address: this[r(1577)](e),
          blockTag: this[r(1399)](t),
          position: Promise[r(620)](x)[r(1494)]((d) => Qt(d)),
        }),
        s = yield this.perform("getStorageAt", a);
      try {
        return H(s);
      } catch (d) {
        return G0[r(304)]("bad result from backend", T.errors[r(1672)], {
          method: r(562),
          params: a,
          result: s,
          error: d,
        });
      }
    });
  }
  [c(627)](e, x, t) {
    var r = c;
    if (x != null && Hx(x) !== 32) throw new Error(r(751));
    const a = e;
    return (
      x != null &&
        e.hash !== x &&
        G0[r(304)](r(612), T[r(1169)][r(1185)], {
          expectedHash: e[r(1062)],
          returnedHash: x,
        }),
      (a[r(666)] = (s, d) =>
        t0(this, void 0, void 0, function* () {
          var l = r;
          s == null && (s = 1), d == null && (d = 0);
          let v;
          s !== 0 &&
            t != null &&
            (v = {
              data: e[l(1086)],
              from: e[l(1180)],
              nonce: e[l(1361)],
              to: e.to,
              value: e[l(1204)],
              startBlock: t,
            });
          const m = yield this[l(1160)](e[l(1062)], s, d, v);
          return m == null && s === 0
            ? null
            : ((this._emitted["t:" + e[l(1062)]] = m.blockNumber),
              m[l(1924)] === 0 &&
                G0[l(304)](l(222), T[l(1169)][l(893)], {
                  transactionHash: e.hash,
                  transaction: e,
                  receipt: m,
                }),
              m);
        })),
      a
    );
  }
  [c(1177)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      yield this.getNetwork();
      const t = yield Promise[x(620)](e)[x(1494)]((s) => H(s)),
        r = this[x(1862)][x(1785)](e);
      r[x(693)] == null && (r[x(693)] = 0);
      const a = yield this[x(1549)](100 + 2 * this[x(696)]);
      try {
        const s = yield this.perform(x(1177), { signedTransaction: t });
        return this[x(627)](r, s, a);
      } catch (s) {
        throw ((s.transaction = r), (s[x(586)] = r[x(1062)]), s);
      }
    });
  }
  [c(1124)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      const t = yield e,
        r = {};
      return (
        ["from", "to"].forEach((a) => {
          var s = O;
          t[a] != null &&
            (r[a] = Promise[s(620)](t[a])[s(1494)]((d) =>
              d ? this[s(1577)](d) : null
            ));
        }),
        [x(1550), "gasPrice", "maxFeePerGas", x(1445), x(1204)][x(1745)](
          (a) => {
            var s = x;
            t[a] != null &&
              (r[a] = Promise[s(620)](t[a]).then((d) =>
                d ? z[s(1180)](d) : null
              ));
          }
        ),
        [x(577)][x(1745)]((a) => {
          var s = x;
          t[a] != null &&
            (r[a] = Promise[s(620)](t[a])[s(1494)]((d) =>
              d != null ? d : null
            ));
        }),
        t.accessList && (r[x(676)] = this[x(1862)][x(676)](t[x(676)])),
        ["data"][x(1745)]((a) => {
          var s = x;
          t[a] != null &&
            (r[a] = Promise[s(620)](t[a])[s(1494)]((d) => (d ? H(d) : null)));
        }),
        this[x(1862)][x(273)](yield xx(r))
      );
    });
  }
  [c(759)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      e = yield e;
      const t = {};
      return (
        e[x(1531)] != null && (t[x(1531)] = this[x(1577)](e[x(1531)])),
        [x(1301), x(967)][x(1745)]((r) => {
          e[r] != null && (t[r] = e[r]);
        }),
        [x(815), x(1339)].forEach((r) => {
          var a = x;
          e[r] != null && (t[r] = this[a(1399)](e[r]));
        }),
        this[x(1862)][x(196)](yield xx(t))
      );
    });
  }
  [c(256)](e, x, t) {
    return t0(this, void 0, void 0, function* () {
      var r = O;
      t >= i2 &&
        G0[r(304)](r(985), T[r(1169)][r(1672)], {
          redirects: t,
          transaction: e,
        });
      const a = e.to,
        s = yield this[r(205)]("call", { transaction: e, blockTag: x });
      if (
        t >= 0 &&
        x === r(1626) &&
        a != null &&
        s[r(1329)](0, 10) === r(172) &&
        Hx(s) % 32 === 4
      )
        try {
          const d = tx(s, 4),
            l = tx(d, 0, 32);
          !z[r(1180)](l).eq(a) &&
            G0[r(304)](r(444), T.errors[r(893)], {
              name: "OffchainLookup",
              signature: r(615),
              transaction: e,
              data: s,
            });
          const v = [],
            m = z[r(1180)](tx(d, 32, 64))[r(1919)](),
            g = z[r(1180)](tx(d, m, m + 32))[r(1919)](),
            k = tx(d, m + 32);
          for (let I = 0; I < g; I++) {
            const K = vr(k, I * 32);
            K == null &&
              G0[r(304)](r(697), T[r(1169)][r(893)], {
                name: "OffchainLookup",
                signature: r(615),
                transaction: e,
                data: s,
              }),
              v[r(608)](K);
          }
          const S = jt(d, 64);
          !z[r(1180)](tx(d, 100, 128))[r(770)]() &&
            G0[r(304)](
              "CCIP Read callback selector included junk",
              T[r(1169)][r(893)],
              { name: r(884), signature: r(615), transaction: e, data: s }
            );
          const B = tx(d, 96, 100),
            R = jt(d, 128),
            D = yield this[r(511)](e, S, v);
          D == null &&
            G0.throwError(r(825), T[r(1169)][r(893)], {
              name: r(884),
              signature: r(615),
              transaction: e,
              data: s,
            });
          const P = { to: a, data: vx([B, Es([D, R])]) };
          return this._call(P, x, t + 1);
        } catch (d) {
          if (d[r(585)] === T[r(1169)].SERVER_ERROR) throw d;
        }
      try {
        return H(s);
      } catch (d) {
        return G0[r(304)]("bad result from backend", T[r(1169)][r(1672)], {
          method: r(1340),
          params: { transaction: e, blockTag: x },
          result: s,
          error: d,
        });
      }
    });
  }
  [c(1340)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      yield this[t(1505)]();
      const r = yield xx({
        transaction: this[t(1124)](e),
        blockTag: this[t(1399)](x),
        ccipReadEnabled: Promise[t(620)](e.ccipReadEnabled),
      });
      return this[t(256)](r[t(1785)], r[t(561)], r.ccipReadEnabled ? 0 : -1);
    });
  }
  [c(571)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      yield this[x(1505)]();
      const t = yield xx({ transaction: this[x(1124)](e) }),
        r = yield this[x(205)]("estimateGas", t);
      try {
        return z.from(r);
      } catch (a) {
        return G0[x(304)]("bad result from backend", T[x(1169)][x(1672)], {
          method: x(571),
          params: t,
          result: r,
          error: a,
        });
      }
    });
  }
  _getAddress(e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      (e = yield e),
        typeof e !== x(1721) &&
          G0[x(1839)]("invalid address or ENS name", x(296), e);
      const t = yield this.resolveName(e);
      return (
        t == null &&
          G0[x(304)](
            "ENS name not configured",
            T[x(1169)].UNSUPPORTED_OPERATION,
            { operation: x(1234) + JSON.stringify(e) + ")" }
          ),
        t
      );
    });
  }
  [c(1106)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      yield this[t(1505)](), (e = yield e);
      let r = -128;
      const a = { includeTransactions: !!x };
      if (n0(e, 32)) a[t(1301)] = e;
      else
        try {
          (a[t(561)] = yield this[t(1399)](e)),
            n0(a[t(561)]) && (r = parseInt(a[t(561)][t(1329)](2), 16));
        } catch (s) {
          G0[t(1839)](t(895), "blockHashOrBlockTag", e);
        }
      return Te(
        () =>
          t0(this, void 0, void 0, function* () {
            var s = t;
            const d = yield this[s(205)](s(1041), a);
            if (d == null)
              return (a[s(1301)] != null &&
                this[s(1235)]["b:" + a.blockHash] == null) ||
                (a[s(561)] != null && r > this[s(1235)][s(433)])
                ? null
                : void 0;
            if (x) {
              let l = null;
              for (let m = 0; m < d[s(545)][s(152)]; m++) {
                const g = d[s(545)][m];
                if (g[s(452)] == null) g.confirmations = 0;
                else if (g[s(693)] == null) {
                  l == null &&
                    (l = yield this[s(1549)](100 + 2 * this[s(696)]));
                  let k = l - g[s(452)] + 1;
                  k <= 0 && (k = 1), (g[s(693)] = k);
                }
              }
              const v = this[s(1862)][s(1218)](d);
              return (
                (v[s(545)] = v[s(545)].map((m) => this._wrapTransaction(m))), v
              );
            }
            return this[s(1862)][s(433)](d);
          }),
        { oncePoll: this }
      );
    });
  }
  [c(1041)](e) {
    var x = c;
    return this[x(1106)](e, ![]);
  }
  [c(1150)](e) {
    var x = c;
    return this[x(1106)](e, !![]);
  }
  [c(362)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      yield this[x(1505)](), (e = yield e);
      const t = { transactionHash: this[x(1862)][x(1062)](e, !![]) };
      return Te(
        () =>
          t0(this, void 0, void 0, function* () {
            var r = x;
            const a = yield this[r(205)](r(362), t);
            if (a == null)
              return this[r(1235)]["t:" + e] == null ? null : void 0;
            const s = this[r(1862)][r(312)](a);
            if (s[r(452)] == null) s[r(693)] = 0;
            else if (s[r(693)] == null) {
              let l =
                (yield this._getInternalBlockNumber(100 + 2 * this[r(696)])) -
                s[r(452)] +
                1;
              l <= 0 && (l = 1), (s[r(693)] = l);
            }
            return this[r(627)](s);
          }),
        { oncePoll: this }
      );
    });
  }
  getTransactionReceipt(e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      yield this[x(1505)](), (e = yield e);
      const t = { transactionHash: this[x(1862)][x(1062)](e, !![]) };
      return Te(
        () =>
          t0(this, void 0, void 0, function* () {
            var r = x;
            const a = yield this[r(205)](r(1055), t);
            if (a == null)
              return this[r(1235)]["t:" + e] == null ? null : void 0;
            if (a.blockHash == null) return;
            const s = this.formatter[r(1291)](a);
            if (s[r(452)] == null) s[r(693)] = 0;
            else if (s[r(693)] == null) {
              let l =
                (yield this[r(1549)](100 + 2 * this[r(696)])) - s[r(452)] + 1;
              l <= 0 && (l = 1), (s.confirmations = l);
            }
            return s;
          }),
        { oncePoll: this }
      );
    });
  }
  [c(1472)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      yield this.getNetwork();
      const t = yield xx({ filter: this[x(759)](e) }),
        r = yield this[x(205)]("getLogs", t);
      return (
        r.forEach((a) => {
          var s = x;
          a[s(1174)] == null && (a[s(1174)] = ![]);
        }),
        X[x(1431)](this[x(1862)][x(291)].bind(this[x(1862)]))(r)
      );
    });
  }
  getEtherPrice() {
    return t0(this, void 0, void 0, function* () {
      return yield this.getNetwork(), this.perform("getEtherPrice", {});
    });
  }
  [c(1399)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      if (((e = yield e), typeof e === x(456) && e < 0)) {
        e % 1 && G0[x(1839)](x(1564), x(561), e);
        let t = yield this[x(1549)](100 + 2 * this[x(696)]);
        return (t += e), t < 0 && (t = 0), this[x(1862)][x(561)](t);
      }
      return this.formatter[x(561)](e);
    });
  }
  [c(1396)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      let t = e;
      for (; []; ) {
        if (t === "" || t === "." || (e !== x(1058) && t === x(1058)))
          return null;
        const r = yield this[x(514)](t, x(1396));
        if (r != null) {
          const a = new wn(this, r, e);
          return t !== e && !(yield a[x(475)]()) ? null : a;
        }
        t = t.split(".")[x(1095)](1)[x(1286)](".");
      }
    });
  }
  [c(514)](e, x) {
    return t0(this, void 0, void 0, function* () {
      var t = O;
      x == null && (x = t(1875));
      const r = yield this[t(1505)]();
      !r[t(282)] &&
        G0[t(304)](t(1712), T[t(1169)][t(854)], {
          operation: x,
          network: r[t(296)],
        });
      try {
        const a = yield this[t(1340)]({
          to: r[t(282)],
          data: t(243) + Nt(e)[t(1329)](2),
        });
        return this.formatter[t(1037)](a);
      } catch (a) {}
      return null;
    });
  }
  resolveName(e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      e = yield e;
      try {
        return Promise.resolve(this[x(1862)][x(1531)](e));
      } catch (r) {
        if (n0(e)) throw r;
      }
      typeof e != "string" && G0[x(1839)]("invalid ENS name", x(296), e);
      const t = yield this[x(1396)](e);
      return t ? yield t[x(471)]() : null;
    });
  }
  [c(1488)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      (e = yield e), (e = this[x(1862)].address(e));
      const t = e[x(1329)](2).toLowerCase() + x(813),
        r = yield this[x(514)](t, "lookupAddress");
      if (r == null) return null;
      const a = vr(
        yield this[x(1340)]({ to: r, data: "0x691f3431" + Nt(t).substring(2) }),
        0
      );
      return (yield this[x(767)](a)) != e ? null : a;
    });
  }
  [c(1539)](e) {
    return t0(this, void 0, void 0, function* () {
      var x = O;
      let t = null;
      if (n0(e)) {
        const a = this[x(1862)].address(e),
          s = a[x(1329)](2).toLowerCase() + ".addr.reverse",
          d = yield this[x(514)](s, "getAvatar");
        if (!d) return null;
        t = new wn(this, d, s);
        try {
          const l = yield t[x(1539)]();
          if (l) return l.url;
        } catch (l) {
          if (l.code !== T[x(1169)][x(893)]) throw l;
        }
        try {
          const l = vr(
            yield this[x(1340)]({ to: d, data: x(1807) + Nt(s)[x(1329)](2) }),
            0
          );
          t = yield this[x(1396)](l);
        } catch (l) {
          if (l[x(585)] !== T[x(1169)][x(893)]) throw l;
          return null;
        }
      } else if (((t = yield this.getResolver(e)), !t)) return null;
      const r = yield t.getAvatar();
      return r == null ? null : r[x(920)];
    });
  }
  [c(205)](e, x) {
    var t = c;
    return G0[t(304)](e + t(1619), T[t(1169)][t(195)], { operation: e });
  }
  _startEvent(e) {
    var x = c;
    this[x(1316)] = this[x(1986)].filter((t) => t.pollable())[x(152)] > 0;
  }
  [c(1547)](e) {
    var x = c;
    this[x(1316)] = this[x(1986)][x(196)]((t) => t[x(900)]())[x(152)] > 0;
  }
  [c(1241)](e, x, t) {
    var r = c;
    const a = new c2(He(e), x, t);
    return this[r(1986)][r(608)](a), this[r(209)](a), this;
  }
  on(e, x) {
    var t = c;
    return this[t(1241)](e, x, ![]);
  }
  [c(1298)](e, x) {
    var t = c;
    return this[t(1241)](e, x, !![]);
  }
  emit(e, ...x) {
    var t = c;
    let r = ![],
      a = [],
      s = He(e);
    return (
      (this._events = this[t(1986)].filter((d) => {
        var l = t;
        return d[l(748)] !== s
          ? !![]
          : (setTimeout(() => {
              var v = l;
              d[v(1458)][v(1429)](this, x);
            }, 0),
            (r = !![]),
            d[l(1298)] ? (a[l(608)](d), ![]) : !![]);
      })),
      a[t(1745)]((d) => {
        var l = t;
        this[l(1547)](d);
      }),
      r
    );
  }
  listenerCount(e) {
    var x = c;
    if (!e) return this[x(1986)][x(152)];
    let t = He(e);
    return this[x(1986)][x(196)]((r) => r.tag === t).length;
  }
  [c(1036)](e) {
    var x = c;
    if (e == null) return this._events[x(794)]((r) => r[x(1458)]);
    let t = He(e);
    return this[x(1986)][x(196)]((r) => r.tag === t)[x(794)]((r) => r[x(1458)]);
  }
  [c(327)](e, x) {
    var t = c;
    if (x == null) return this.removeAllListeners(e);
    const r = [];
    let a = ![],
      s = He(e);
    return (
      (this[t(1986)] = this[t(1986)][t(196)]((d) => {
        var l = t;
        return d[l(748)] !== s || d[l(1458)] != x
          ? !![]
          : a
          ? !![]
          : ((a = !![]), r[l(608)](d), ![]);
      })),
      r.forEach((d) => {
        var l = t;
        this[l(1547)](d);
      }),
      this
    );
  }
  [c(292)](e) {
    var x = c;
    let t = [];
    if (e == null) (t = this[x(1986)]), (this[x(1986)] = []);
    else {
      const r = He(e);
      this._events = this[x(1986)][x(196)]((a) =>
        a.tag !== r ? !![] : (t.push(a), ![])
      );
    }
    return (
      t[x(1745)]((r) => {
        var a = x;
        this[a(1547)](r);
      }),
      this
    );
  }
}
var Wx =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g.done ? a(g[k(1204)]) : r(g[k(1204)])[k(1494)](l, v);
      }
      m((t = t.apply(n, e || []))[d(1747)]());
    });
  };
const nx = new T(bx),
  d2 = [c(1340), c(571)];
function Dt(n, e) {
  var x = c;
  if (n == null) return null;
  if (typeof n[x(469)] === x(1721) && n[x(469)][x(354)]("reverted")) {
    const t = n0(n[x(1086)]) ? n[x(1086)] : null;
    if (!e || t) return { message: n[x(469)], data: t };
  }
  if (typeof n === x(661)) {
    for (const t in n) {
      const r = Dt(n[t], e);
      if (r) return r;
    }
    return null;
  }
  if (typeof n == "string")
    try {
      return Dt(JSON[x(1698)](n), e);
    } catch (t) {}
  return null;
}
function ks(n, e, x) {
  var t = c;
  const r = x.transaction || x[t(650)];
  if (n === t(1340)) {
    const s = Dt(e, !![]);
    if (s) return s[t(1086)];
    nx.throwError(t(1537), T[t(1169)][t(893)], {
      data: "0x",
      transaction: r,
      error: e,
    });
  }
  if (n === t(571)) {
    let s = Dt(e[t(1953)], ![]);
    s == null && (s = Dt(e, ![])),
      s &&
        nx.throwError(t(1307), T.errors[t(1096)], {
          reason: s[t(469)],
          method: n,
          transaction: r,
          error: e,
        });
  }
  let a = e[t(469)];
  throw (
    (e.code === T[t(1169)].SERVER_ERROR &&
    e[t(779)] &&
    typeof e[t(779)][t(469)] === t(1721)
      ? (a = e[t(779)][t(469)])
      : typeof e[t(1953)] == "string"
      ? (a = e[t(1953)])
      : typeof e[t(784)] === t(1721) && (a = e.responseText),
    (a = (a || "").toLowerCase()),
    a.match(/insufficient funds|base fee exceeds gas limit/i) &&
      nx.throwError(
        "insufficient funds for intrinsic transaction cost",
        T[t(1169)][t(1322)],
        { error: e, method: n, transaction: r }
      ),
    a[t(354)](/nonce (is )?too low/i) &&
      nx[t(304)](t(1370), T.errors.NONCE_EXPIRED, {
        error: e,
        method: n,
        transaction: r,
      }),
    a[t(354)](
      /replacement transaction underpriced|transaction gas price.*too low/i
    ) &&
      nx.throwError(t(1105), T[t(1169)][t(1835)], {
        error: e,
        method: n,
        transaction: r,
      }),
    a[t(354)](/only replay-protected/i) &&
      nx[t(304)](t(1390), T[t(1169)].UNSUPPORTED_OPERATION, {
        error: e,
        method: n,
        transaction: r,
      }),
    d2.indexOf(n) >= 0 &&
      a[t(354)](
        /gas required exceeds allowance|always failing transaction|execution reverted/
      ) &&
      nx[t(304)](
        "cannot estimate gas; transaction may fail or may require manual gas limit",
        T.errors.UNPREDICTABLE_GAS_LIMIT,
        { error: e, method: n, transaction: r }
      ),
    e)
  );
}
function ja(n) {
  return new Promise(function (e) {
    setTimeout(e, n);
  });
}
function l2(n) {
  var e = c;
  if (n[e(779)]) {
    const x = new Error(n.error[e(469)]);
    throw ((x[e(585)] = n.error[e(585)]), (x.data = n[e(779)][e(1086)]), x);
  }
  return n[e(1546)];
}
function kt(n) {
  return n && n.toLowerCase();
}
const An = {};
class Qn extends se {
  constructor(e, x, t) {
    var r = c;
    if ((super(), e !== An)) throw new Error(r(1965));
    F(this, r(1362), x),
      t == null && (t = 0),
      typeof t === r(1721)
        ? (F(this, r(179), this[r(1362)].formatter.address(t)),
          F(this, r(1261), null))
        : typeof t === r(456)
        ? (F(this, r(1261), t), F(this, "_address", null))
        : nx.throwArgumentError(r(1385), "addressOrIndex", t);
  }
  [c(1727)](e) {
    var x = c;
    return nx[x(304)](
      "cannot alter JSON-RPC Signer connection",
      T.errors[x(854)],
      { operation: "connect" }
    );
  }
  [c(449)]() {
    var e = c;
    return new b2(An, this.provider, this[e(179)] || this[e(1261)]);
  }
  [c(471)]() {
    var e = c;
    return this._address
      ? Promise[e(620)](this[e(179)])
      : this.provider[e(982)](e(757), [])[e(1494)]((x) => {
          var t = e;
          return (
            x.length <= this._index &&
              nx[t(304)](
                "unknown account #" + this[t(1261)],
                T.errors[t(854)],
                { operation: t(471) }
              ),
            this[t(1362)][t(1862)][t(1531)](x[this[t(1261)]])
          );
        });
  }
  sendUncheckedTransaction(e) {
    var x = c;
    e = X0(e);
    const t = this[x(471)]()[x(1494)]((r) => {
      var a = x;
      return r && (r = r[a(177)]()), r;
    });
    if (e[x(1550)] == null) {
      const r = X0(e);
      (r[x(1180)] = t), (e.gasLimit = this[x(1362)][x(571)](r));
    }
    return (
      e.to != null &&
        (e.to = Promise[x(620)](e.to)[x(1494)]((r) =>
          Wx(this, void 0, void 0, function* () {
            var a = x;
            if (r == null) return null;
            const s = yield this[a(1362)][a(767)](r);
            return (
              s == null &&
                nx[a(1839)]("provided ENS name resolves to null", "tx.to", r),
              s
            );
          })
        )),
      xx({ tx: xx(e), sender: t })[x(1494)](({ tx: r, sender: a }) => {
        var s = x;
        r[s(1180)] != null
          ? r[s(1180)][s(177)]() !== a &&
            nx.throwArgumentError(s(1570), s(1785), e)
          : (r.from = a);
        const d = this[s(1362)][s(891)][s(1758)](r, { from: !![] });
        return this[s(1362)][s(982)](s(888), [d]).then(
          (l) => l,
          (l) => {
            var v = s;
            return (
              typeof l[v(469)] == "string" &&
                l[v(469)].match(/user denied/i) &&
                nx[v(304)](v(261), T[v(1169)][v(1827)], {
                  action: v(1177),
                  transaction: r,
                }),
              ks("sendTransaction", l, d)
            );
          }
        );
      })
    );
  }
  [c(1918)](e) {
    var x = c;
    return nx[x(304)](x(808), T[x(1169)][x(854)], { operation: x(1918) });
  }
  [c(1177)](e) {
    return Wx(this, void 0, void 0, function* () {
      var x = O;
      const t = yield this.provider[x(1549)](
          100 + 2 * this[x(1362)].pollingInterval
        ),
        r = yield this[x(634)](e);
      try {
        return yield Te(
          () =>
            Wx(this, void 0, void 0, function* () {
              var a = x;
              const s = yield this[a(1362)][a(362)](r);
              if (s !== null) return this[a(1362)][a(627)](s, r, t);
            }),
          { oncePoll: this[x(1362)] }
        );
      } catch (a) {
        throw ((a[x(586)] = r), a);
      }
    });
  }
  [c(190)](e) {
    return Wx(this, void 0, void 0, function* () {
      var x = O;
      const t = typeof e === x(1721) ? ax(e) : e,
        r = yield this[x(471)]();
      try {
        return yield this[x(1362)].send("personal_sign", [H(t), r[x(177)]()]);
      } catch (a) {
        throw (
          (typeof a.message === x(1721) &&
            a[x(469)].match(/user denied/i) &&
            nx.throwError(x(1644), T[x(1169)].ACTION_REJECTED, {
              action: x(190),
              from: r,
              message: t,
            }),
          a)
        );
      }
    });
  }
  _legacySignMessage(e) {
    return Wx(this, void 0, void 0, function* () {
      var x = O;
      const t = typeof e == "string" ? ax(e) : e,
        r = yield this[x(471)]();
      try {
        return yield this[x(1362)][x(982)](x(1394), [r[x(177)](), H(t)]);
      } catch (a) {
        throw (
          (typeof a[x(469)] === x(1721) &&
            a[x(469)][x(354)](/user denied/i) &&
            nx[x(304)](x(1644), T.errors[x(1827)], {
              action: x(1966),
              from: r,
              message: t,
            }),
          a)
        );
      }
    });
  }
  [c(722)](e, x, t) {
    return Wx(this, void 0, void 0, function* () {
      var r = O;
      const a = yield ox[r(1379)](e, x, t, (d) => {
          var l = r;
          return this[l(1362)][l(767)](d);
        }),
        s = yield this[r(471)]();
      try {
        return yield this[r(1362)][r(982)](r(1784), [
          s[r(177)](),
          JSON[r(657)](ox[r(1386)](a[r(772)], x, a[r(1204)])),
        ]);
      } catch (d) {
        throw (
          (typeof d[r(469)] === r(1721) &&
            d.message[r(354)](/user denied/i) &&
            nx[r(304)]("user rejected signing", T.errors[r(1827)], {
              action: r(722),
              from: s,
              message: { domain: a.domain, types: x, value: a[r(1204)] },
            }),
          d)
        );
      }
    });
  }
  [c(1981)](e) {
    return Wx(this, void 0, void 0, function* () {
      var x = O;
      const t = this.provider,
        r = yield this.getAddress();
      return t[x(982)]("personal_unlockAccount", [r[x(177)](), e, null]);
    });
  }
}
class b2 extends Qn {
  [c(1177)](e) {
    var x = c;
    return this[x(634)](e).then((t) => ({
      hash: t,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: (r) => {
        var a = O;
        return this[a(1362)].waitForTransaction(t, r);
      },
    }));
  }
}
const v2 = {
  chainId: !![],
  data: !![],
  gasLimit: !![],
  gasPrice: !![],
  nonce: !![],
  to: !![],
  value: !![],
  type: !![],
  accessList: !![],
  maxFeePerGas: !![],
  maxPriorityFeePerGas: !![],
};
class De extends Gr {
  constructor(e, x) {
    var t = c;
    let r = x;
    r == null &&
      (r = new Promise((a, s) => {
        setTimeout(() => {
          var d = O;
          this[d(573)]()[d(1494)](
            (l) => {
              a(l);
            },
            (l) => {
              s(l);
            }
          );
        }, 0);
      })),
      super(r),
      !e && (e = ux(this[t(891)], "defaultUrl")()),
      typeof e === t(1721)
        ? F(this, t(1e3), Object.freeze({ url: e }))
        : F(this, t(1e3), Object.freeze(X0(e))),
      (this._nextId = 42);
  }
  get [c(1009)]() {
    var e = c;
    return this[e(1388)] == null && (this._eventLoopCache = {}), this[e(1388)];
  }
  static [c(206)]() {
    var e = c;
    return e(218);
  }
  detectNetwork() {
    var e = c;
    return (
      !this[e(1009)][e(573)] &&
        ((this[e(1009)][e(573)] = this[e(1800)]()),
        setTimeout(() => {
          var x = e;
          this._cache[x(573)] = null;
        }, 0)),
      this[e(1009)][e(573)]
    );
  }
  [c(1800)]() {
    return Wx(this, void 0, void 0, function* () {
      var e = O;
      yield ja(0);
      let x = null;
      try {
        x = yield this[e(982)](e(1631), []);
      } catch (t) {
        try {
          x = yield this.send(e(1717), []);
        } catch (r) {}
      }
      if (x != null) {
        const t = ux(this[e(891)], "getNetwork");
        try {
          return t(z[e(1180)](x)[e(1919)]());
        } catch (r) {
          return nx.throwError(e(673), T[e(1169)].NETWORK_ERROR, {
            chainId: x,
            event: e(302),
            serverError: r,
          });
        }
      }
      return nx[e(304)](e(673), T[e(1169)].NETWORK_ERROR, { event: e(277) });
    });
  }
  [c(910)](e) {
    return new Qn(An, this, e);
  }
  getUncheckedSigner(e) {
    var x = c;
    return this[x(910)](e)[x(449)]();
  }
  [c(1697)]() {
    var e = c;
    return this[e(982)](e(757), [])[e(1494)]((x) => {
      var t = e;
      return x[t(794)]((r) => this[t(1862)][t(1531)](r));
    });
  }
  [c(982)](e, x) {
    var t = c;
    const r = { method: e, params: x, id: this._nextId++, jsonrpc: t(481) };
    this[t(1830)](t(1056), { action: t(298), request: mx(r), provider: this });
    const a = [t(1631), t(632)][t(1532)](e) >= 0;
    if (a && this._cache[e]) return this[t(1009)][e];
    const s = nt(this[t(1e3)], JSON[t(657)](r), l2)[t(1494)](
      (d) => {
        var l = t;
        return (
          this[l(1830)]("debug", {
            action: l(1140),
            request: r,
            response: d,
            provider: this,
          }),
          d
        );
      },
      (d) => {
        var l = t;
        throw (
          (this.emit(l(1056), {
            action: l(1140),
            error: d,
            request: r,
            provider: this,
          }),
          d)
        );
      }
    );
    return (
      a &&
        ((this[t(1009)][e] = s),
        setTimeout(() => {
          var d = t;
          this[d(1009)][e] = null;
        }, 0)),
      s
    );
  }
  prepareRequest(e, x) {
    var t = c;
    switch (e) {
      case t(1913):
        return [t(632), []];
      case "getGasPrice":
        return [t(1493), []];
      case t(1947):
        return [t(1158), [kt(x[t(1531)]), x.blockTag]];
      case "getTransactionCount":
        return [t(1240), [kt(x[t(1531)]), x[t(561)]]];
      case t(1087):
        return [t(272), [kt(x.address), x.blockTag]];
      case "getStorageAt":
        return [
          "eth_getStorageAt",
          [kt(x[t(1531)]), Y0(x.position, 32), x[t(561)]],
        ];
      case "sendTransaction":
        return [t(451), [x.signedTransaction]];
      case t(1041):
        return x[t(561)]
          ? [t(1239), [x.blockTag, !!x[t(591)]]]
          : x[t(1301)]
          ? ["eth_getBlockByHash", [x[t(1301)], !!x[t(591)]]]
          : null;
      case t(362):
        return [t(1183), [x[t(586)]]];
      case t(1055):
        return ["eth_getTransactionReceipt", [x.transactionHash]];
      case "call": {
        const r = ux(this[t(891)], "hexlifyTransaction");
        return [t(1321), [r(x[t(1785)], { from: !![] }), x[t(561)]]];
      }
      case t(571): {
        const r = ux(this.constructor, t(1758));
        return [t(1732), [r(x[t(1785)], { from: !![] })]];
      }
      case t(1472):
        return (
          x[t(196)] &&
            x[t(196)].address != null &&
            (x[t(196)][t(1531)] = kt(x.filter[t(1531)])),
          [t(1060), [x.filter]]
        );
    }
    return null;
  }
  [c(205)](e, x) {
    return Wx(this, void 0, void 0, function* () {
      var t = O;
      if (e === t(1340) || e === t(571)) {
        const a = x[t(1785)];
        if (
          a &&
          a[t(577)] != null &&
          z[t(1180)](a[t(577)])[t(770)]() &&
          a.maxFeePerGas == null &&
          a[t(1445)] == null
        ) {
          const s = yield this[t(1716)]();
          s[t(1042)] == null &&
            s[t(1445)] == null &&
            ((x = X0(x)), (x[t(1785)] = X0(a)), delete x[t(1785)][t(577)]);
        }
      }
      const r = this[t(1992)](e, x);
      r == null &&
        nx[t(304)](e + " not implemented", T[t(1169)].NOT_IMPLEMENTED, {
          operation: e,
        });
      try {
        return yield this[t(982)](r[0], r[1]);
      } catch (a) {
        return ks(e, a, x);
      }
    });
  }
  [c(209)](e) {
    var x = c;
    e.tag === x(565) && this[x(1495)](), super[x(209)](e);
  }
  _startPending() {
    var e = c;
    if (this._pendingFilter != null) return;
    const x = this,
      t = this[e(982)](e(1470), []);
    (this[e(294)] = t),
      t
        .then(function (r) {
          function a() {
            var s = O;
            x[s(982)]("eth_getFilterChanges", [r])
              [s(1494)](function (d) {
                var l = s;
                if (x[l(294)] != t) return null;
                let v = Promise[l(620)]();
                return (
                  d[l(1745)](function (m) {
                    var g = l;
                    (x._emitted["t:" + m[g(177)]()] = g(565)),
                      (v = v[g(1494)](function () {
                        var k = g;
                        return x[k(362)](m)[k(1494)](function (S) {
                          var B = k;
                          return x[B(1830)](B(565), S), null;
                        });
                      }));
                  }),
                  v[l(1494)](function () {
                    return ja(1e3);
                  })
                );
              })
              [s(1494)](function () {
                var d = s;
                if (x[d(294)] != t) {
                  x[d(982)](d(1027), [r]);
                  return;
                }
                return (
                  setTimeout(function () {
                    a();
                  }, 0),
                  null
                );
              })
              [s(1083)]((d) => {});
          }
          return a(), r;
        })
        [e(1083)]((r) => {});
  }
  [c(1547)](e) {
    var x = c;
    e[x(748)] === x(565) &&
      this[x(1988)]("pending") === 0 &&
      (this[x(294)] = null),
      super[x(1547)](e);
  }
  static [c(1758)](e, x) {
    var t = c;
    const r = X0(v2);
    if (x) for (const s in x) x[s] && (r[s] = !![]);
    En(e, r);
    const a = {};
    return (
      [
        t(1923),
        t(1550),
        t(1772),
        "type",
        "maxFeePerGas",
        t(1445),
        t(1361),
        t(1204),
      ].forEach(function (s) {
        var d = t;
        if (e[s] == null) return;
        const l = Qt(z[d(1180)](e[s]));
        s === "gasLimit" && (s = d(1230)), (a[s] = l);
      }),
      [t(1180), "to", "data"][t(1745)](function (s) {
        e[s] != null && (a[s] = H(e[s]));
      }),
      e[t(676)] && (a[t(676)] = fe(e[t(676)])),
      a
    );
  }
}
let Ft = null;
try {
  if (((Ft = WebSocket), Ft == null)) throw new Error(c(964));
} catch (n) {
  const e = new T(bx);
  Ft = function () {
    var x = c;
    e[x(304)](x(554), T[x(1169)][x(854)], { operation: x(1405) });
  };
}
var rn =
  (globalThis && globalThis.__awaiter) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        try {
          m(t.next(g));
        } catch (k) {
          s(k);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g.value) : r(g.value)[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
const ar = new T(bx);
let p2 = 1;
class Kr extends De {
  constructor(e, x) {
    var t = c;
    x === t(1705) &&
      ar[t(304)](t(260), T[t(1169)][t(854)], { operation: t(1572) }),
      typeof e === t(1721) ? super(e, x) : super(t(942), x),
      (this[t(916)] = -1),
      (this[t(1457)] = ![]),
      typeof e === t(1721)
        ? F(this, t(942), new Ft(this[t(1e3)][t(920)]))
        : F(this, t(942), e),
      F(this, "_requests", {}),
      F(this, t(321), {}),
      F(this, "_subIds", {}),
      F(this, "_detectNetwork", super[t(573)]()),
      (this.websocket.onopen = () => {
        var a = t;
        (this[a(1457)] = !![]),
          Object[a(319)](this[a(1247)])[a(1745)]((s) => {
            var d = a;
            this.websocket[d(982)](this[d(1247)][s].payload);
          });
      }),
      (this.websocket[t(1007)] = (a) => {
        var s = t;
        const d = a[s(1086)],
          l = JSON[s(1698)](d);
        if (l.id != null) {
          const v = String(l.id),
            m = this._requests[v];
          if ((delete this[s(1247)][v], l[s(1546)] !== void 0))
            m[s(733)](null, l.result),
              this[s(1830)](s(1056), {
                action: "response",
                request: JSON[s(1698)](m[s(1469)]),
                response: l.result,
                provider: this,
              });
          else {
            let g = null;
            l[s(779)]
              ? ((g = new Error(l[s(779)][s(469)] || s(383))),
                F(g, s(585), l[s(779)][s(585)] || null),
                F(g, s(1140), d))
              : (g = new Error(s(383))),
              m[s(733)](g, void 0),
              this[s(1830)](s(1056), {
                action: s(1140),
                error: g,
                request: JSON[s(1698)](m[s(1469)]),
                provider: this,
              });
          }
        } else if (l[s(1460)] === "eth_subscription") {
          const v = this[s(321)][l.params[s(928)]];
          v && v[s(1292)](l[s(1611)].result);
        } else console.warn(s(984));
      });
    const r = setInterval(() => {
      var a = t;
      this[a(1830)]("poll");
    }, 1e3);
    r.unref && r.unref();
  }
  get [c(1559)]() {
    var e = c;
    return this[e(942)];
  }
  [c(573)]() {
    var e = c;
    return this[e(1168)];
  }
  get [c(696)]() {
    return 0;
  }
  [c(1688)](e) {
    var x = c;
    ar[x(304)](x(905), T[x(1169)][x(854)], { operation: "resetEventBlock" });
  }
  set [c(696)](e) {
    var x = c;
    ar[x(304)](x(1220), T[x(1169)][x(854)], { operation: x(665) });
  }
  [c(1558)]() {
    return rn(this, void 0, void 0, function* () {
      return null;
    });
  }
  set polling(e) {
    var x = c;
    !e ||
      ar[x(304)]("cannot set polling on WebSocketProvider", T.errors[x(854)], {
        operation: x(1357),
      });
  }
  [c(982)](e, x) {
    const t = p2++;
    return new Promise((r, a) => {
      var s = O;
      function d(v, m) {
        return v ? a(v) : r(m);
      }
      const l = JSON[s(657)]({ method: e, params: x, id: t, jsonrpc: s(481) });
      this[s(1830)](s(1056), {
        action: s(298),
        request: JSON[s(1698)](l),
        provider: this,
      }),
        (this[s(1247)][String(t)] = { callback: d, payload: l }),
        this[s(1457)] && this.websocket[s(982)](l);
    });
  }
  static [c(206)]() {
    var e = c;
    return e(181);
  }
  _subscribe(e, x, t) {
    return rn(this, void 0, void 0, function* () {
      var r = O;
      let a = this[r(569)][e];
      a == null &&
        ((a = Promise[r(1149)](x).then((d) => {
          var l = r;
          return this[l(982)](l(1131), d);
        })),
        (this[r(569)][e] = a));
      const s = yield a;
      this._subs[s] = { tag: e, processFunc: t };
    });
  }
  [c(209)](e) {
    var x = c;
    switch (e.type) {
      case x(433):
        this[x(725)](x(433), [x(375)], (t) => {
          var r = x;
          const a = z[r(1180)](t[r(456)])[r(1919)]();
          (this[r(1235)].block = a), this[r(1830)](r(433), a);
        });
        break;
      case x(565):
        this[x(725)]("pending", [x(1609)], (t) => {
          var r = x;
          this[r(1830)](r(565), t);
        });
        break;
      case "filter":
        this[x(725)](e[x(748)], ["logs", this._getFilter(e[x(196)])], (t) => {
          var r = x;
          t[r(1174)] == null && (t.removed = ![]),
            this[r(1830)](e.filter, this[r(1862)].filterLog(t));
        });
        break;
      case "tx": {
        const t = (r) => {
          var a = x;
          const s = r[a(1062)];
          this[a(1055)](s)[a(1494)]((d) => {
            !d || this.emit(s, d);
          });
        };
        t(e),
          this[x(725)]("tx", [x(375)], (r) => {
            var a = x;
            this[a(1986)][a(196)]((s) => s.type === "tx").forEach(t);
          });
        break;
      }
      case x(1056):
      case x(1558):
      case x(732):
      case x(688):
      case x(779):
        break;
      default:
        console.log(x(1674), e);
        break;
    }
  }
  [c(1547)](e) {
    var x = c;
    let t = e.tag;
    if (e.type === "tx") {
      if (this[x(1986)].filter((a) => a[x(577)] === "tx").length) return;
      t = "tx";
    } else if (this[x(1988)](e[x(547)])) return;
    const r = this._subIds[t];
    !r ||
      (delete this._subIds[t],
      r[x(1494)]((a) => {
        var s = x;
        !this[s(321)][a] ||
          (delete this[s(321)][a], this[s(982)](s(1039), [a]));
      }));
  }
  destroy() {
    return rn(this, void 0, void 0, function* () {
      var e = O;
      this[e(1559)][e(1118)] === Ft[e(1479)] &&
        (yield new Promise((x) => {
          var t = e;
          (this.websocket[t(1480)] = function () {
            x(!![]);
          }),
            (this[t(1559)].onerror = function () {
              x(![]);
            });
        })),
        this[e(1559)].close(1e3);
    });
  }
}
var m2 =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        try {
          m(t.next(g));
        } catch (k) {
          s(k);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g[k(1204)]).then(l, v);
      }
      m((t = t[d(1429)](n, e || []))[d(1747)]());
    });
  };
const Pt = new T(bx);
class Ss extends De {
  [c(573)]() {
    var e = c;
    const x = Object[e(1623)](null, {
      detectNetwork: { get: () => super.detectNetwork },
    });
    return m2(this, void 0, void 0, function* () {
      var t = e;
      let r = this.network;
      return (
        r == null &&
          ((r = yield x[t(573)][t(1340)](this)),
          !r && Pt[t(304)](t(1629), T[t(1169)][t(1185)], {}),
          this[t(1417)] == null &&
            (F(this, t(1417), r), this.emit("network", r, null))),
        r
      );
    });
  }
}
class Xx extends Ss {
  constructor(e, x) {
    var t = c;
    Pt[t(1372)](new.target, Xx),
      (e = ux(new.target, t(1505))(e)),
      (x = ux(new.target, t(341))(x));
    const r = ux(new.target, t(555))(e, x);
    super(r, e),
      typeof x === t(1721)
        ? F(this, t(1414), x)
        : x != null &&
          Object[t(319)](x)[t(1745)]((a) => {
            F(this, a, x[a]);
          });
  }
  [c(1495)]() {
    var e = c;
    Pt[e(830)](e(1663));
  }
  [c(406)]() {
    return ![];
  }
  [c(910)](e) {
    var x = c;
    return Pt[x(304)](
      "API provider does not support signing",
      T[x(1169)][x(854)],
      { operation: x(910) }
    );
  }
  listAccounts() {
    var e = c;
    return Promise[e(620)]([]);
  }
  static [c(341)](e) {
    return e;
  }
  static [c(555)](e, x) {
    var t = c;
    return Pt[t(304)](t(652), T[t(1169)].NOT_IMPLEMENTED, {
      operation: t(555),
    });
  }
}
const Wa = new T(bx),
  pr = c(596);
class Ps extends Kr {
  constructor(e, x) {
    var t = c;
    const r = new Vn(e, x),
      a = r.connection[t(920)]
        [t(330)](/^http/i, "ws")
        [t(330)](".alchemyapi.", t(1285));
    super(a, r[t(417)]), F(this, t(1414), r[t(1414)]);
  }
  [c(406)]() {
    var e = c;
    return this[e(1414)] === pr;
  }
}
class Vn extends Xx {
  static getWebSocketProvider(e, x) {
    return new Ps(e, x);
  }
  static [c(341)](e) {
    var x = c;
    return e == null
      ? pr
      : (e &&
          typeof e !== x(1721) &&
          Wa[x(1839)]("invalid apiKey", "apiKey", e),
        e);
  }
  static [c(555)](e, x) {
    var t = c;
    let r = null;
    switch (e[t(296)]) {
      case t(1837):
        r = "eth-mainnet.alchemyapi.io/v2/";
        break;
      case t(765):
        r = t(1602);
        break;
      case t(251):
        r = t(1176);
        break;
      case t(1341):
        r = "eth-goerli.alchemyapi.io/v2/";
        break;
      case "kovan":
        r = t(1562);
        break;
      case "matic":
        r = t(402);
        break;
      case t(977):
        r = t(934);
        break;
      case t(1551):
        r = t(655);
        break;
      case "arbitrum-rinkeby":
        r = t(1932);
        break;
      case t(961):
        r = t(753);
        break;
      case t(827):
        r = t(192);
        break;
      case t(394):
        r = t(1533);
        break;
      case t(1072):
        r = t(353);
        break;
      default:
        Wa[t(1839)](t(671), t(417), arguments[0]);
    }
    return {
      allowGzip: !![],
      url: "https://" + r + x,
      throttleCallback: (a, s) => {
        var d = t;
        return x === pr && Xt(), Promise[d(620)](!![]);
      },
    };
  }
  [c(406)]() {
    var e = c;
    return this[e(1414)] === pr;
  }
}
const g2 = new T(bx),
  ir = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function y2(n) {
  var e = c;
  switch (n) {
    case e(1837):
      return e(1450);
    case e(765):
      return e(1633);
    case "rinkeby":
      return e(1987);
    case e(1341):
      return e(1211);
    case e(1665):
      return "rpc.ankr.com/polygon/";
    case "arbitrum":
      return e(1614);
  }
  return g2.throwArgumentError(e(671), "name", n);
}
class Cs extends Xx {
  [c(406)]() {
    return this.apiKey === ir;
  }
  static [c(341)](e) {
    return e == null ? ir : e;
  }
  static getUrl(e, x) {
    var t = c;
    x == null && (x = ir);
    const r = {
      allowGzip: !![],
      url: t(908) + y2(e.name) + x,
      throttleCallback: (a, s) => {
        var d = t;
        return x[d(1414)] === ir && Xt(), Promise.resolve(!![]);
      },
    };
    return (
      x.projectSecret != null && ((r[t(889)] = ""), (r[t(783)] = x[t(1161)])), r
    );
  }
}
var w2 =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        var k = O;
        try {
          m(t[k(1944)](g));
        } catch (S) {
          s(S);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g.value).then(l, v);
      }
      m((t = t.apply(n, e || []))[d(1747)]());
    });
  };
const Qa = new T(bx);
class Bs extends Xx {
  static [c(341)](e) {
    var x = c;
    return e != null && Qa[x(1839)](x(335), x(1414), e), null;
  }
  static getUrl(e, x) {
    var t = c;
    let r = null;
    switch (e.name) {
      case "homestead":
        r = t(1302);
        break;
      default:
        Qa[t(1839)]("unsupported network", "network", arguments[0]);
    }
    return r;
  }
  [c(205)](e, x) {
    var t = c;
    const r = Object[t(1623)](null, { perform: { get: () => super.perform } });
    return w2(this, void 0, void 0, function* () {
      var a = t;
      return e === a(1913)
        ? (yield r[a(205)][a(1340)](this, a(1041), { blockTag: a(1626) }))[
            a(456)
          ]
        : r[a(205)].call(this, e, x);
    });
  }
}
var sr =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      function d(m) {
        var g = O;
        try {
          v(t[g(1747)](m));
        } catch (k) {
          s(k);
        }
      }
      function l(m) {
        var g = O;
        try {
          v(t[g(1944)](m));
        } catch (k) {
          s(k);
        }
      }
      function v(m) {
        var g = O;
        m[g(252)] ? a(m[g(1204)]) : r(m.value)[g(1494)](d, l);
      }
      v((t = t.apply(n, e || [])).next());
    });
  };
const ee = new T(bx);
function Va(n) {
  var e = c;
  const x = {};
  for (let t in n) {
    if (n[t] == null) continue;
    let r = n[t];
    (t === "type" && r === 0) ||
      ({
        type: !![],
        gasLimit: !![],
        gasPrice: !![],
        maxFeePerGs: !![],
        maxPriorityFeePerGas: !![],
        nonce: !![],
        value: !![],
      }[t]
        ? (r = Qt(H(r)))
        : t === e(676)
        ? (r =
            "[" +
            fe(r)
              .map((a) => {
                var s = e;
                return (
                  s(1812) +
                  a[s(1531)] +
                  s(714) +
                  a[s(369)][s(1286)](s(461)) +
                  '"]}'
                );
              })
              .join(",") +
            "]")
        : (r = H(r)),
      (x[t] = r));
  }
  return x;
}
function A2(n) {
  var e = c;
  if (
    n[e(1924)] == 0 &&
    (n[e(469)] === "No records found" || n[e(469)] === e(1398))
  )
    return n[e(1546)];
  if (
    n.status != 1 ||
    typeof n[e(469)] !== e(1721) ||
    !n[e(469)].match(/^OK/)
  ) {
    const x = new Error("invalid response");
    throw (
      ((x.result = JSON[e(657)](n)),
      (n.result || "")[e(177)]()[e(1532)](e(979)) >= 0 &&
        (x.throttleRetry = !![]),
      x)
    );
  }
  return n[e(1546)];
}
function Ya(n) {
  var e = c;
  if (
    n &&
    n[e(1924)] == 0 &&
    n[e(469)] == e(1854) &&
    (n[e(1546)] || "").toLowerCase()[e(1532)](e(979)) >= 0
  ) {
    const x = new Error(e(1420));
    throw ((x.result = JSON[e(657)](n)), (x[e(1348)] = !![]), x);
  }
  if (n[e(1276)] != e(481)) {
    const x = new Error(e(641));
    throw ((x.result = JSON.stringify(n)), x);
  }
  if (n[e(779)]) {
    const x = new Error(n[e(779)][e(469)] || "unknown error");
    throw (
      (n[e(779)][e(585)] && (x[e(585)] = n[e(779)][e(585)]),
      n[e(779)][e(1086)] && (x[e(1086)] = n[e(779)][e(1086)]),
      x)
    );
  }
  return n[e(1546)];
}
function Xa(n) {
  var e = c;
  if (n === e(565)) throw new Error(e(512));
  return n === e(1626) ? n : parseInt(n[e(1329)](2), 16);
}
function nn(n, e, x) {
  var t = c;
  if (n === t(1340) && e[t(585)] === T[t(1169)][t(1672)]) {
    const a = e.error;
    if (
      a &&
      (a[t(469)][t(354)](/reverted/i) ||
        a[t(469)][t(354)](/VM execution error/i))
    ) {
      let s = a[t(1086)];
      if ((s && (s = "0x" + s[t(330)](/^.*0x/i, "")), n0(s))) return s;
      ee.throwError(t(167), T.errors[t(893)], { error: e, data: "0x" });
    }
  }
  let r = e[t(469)];
  throw (
    (e.code === T[t(1169)].SERVER_ERROR &&
      (e[t(779)] && typeof e.error[t(469)] == "string"
        ? (r = e.error.message)
        : typeof e[t(1953)] === t(1721)
        ? (r = e[t(1953)])
        : typeof e[t(784)] === t(1721) && (r = e[t(784)])),
    (r = (r || "")[t(177)]()),
    r[t(354)](/insufficient funds/) &&
      ee[t(304)](
        "insufficient funds for intrinsic transaction cost",
        T[t(1169)].INSUFFICIENT_FUNDS,
        { error: e, method: n, transaction: x }
      ),
    r.match(
      /same hash was already imported|transaction nonce is too low|nonce too low/
    ) &&
      ee[t(304)]("nonce has already been used", T[t(1169)][t(1691)], {
        error: e,
        method: n,
        transaction: x,
      }),
    r.match(/another transaction with same nonce/) &&
      ee.throwError(t(1105), T.errors[t(1835)], {
        error: e,
        method: n,
        transaction: x,
      }),
    r.match(/execution failed due to an exception|execution reverted/) &&
      ee.throwError(t(1307), T[t(1169)].UNPREDICTABLE_GAS_LIMIT, {
        error: e,
        method: n,
        transaction: x,
      }),
    e)
  );
}
class Ts extends Gr {
  constructor(e, x) {
    var t = c;
    super(e), F(this, "baseUrl", this[t(1059)]()), F(this, t(1414), x || null);
  }
  getBaseUrl() {
    var e = c;
    switch (this[e(417)] ? this.network[e(296)] : e(174)) {
      case e(1837):
        return "https://api.etherscan.io";
      case "ropsten":
        return e(637);
      case e(251):
        return e(1049);
      case e(399):
        return "https://api-kovan.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case e(827):
        return e(861);
      case e(394):
        return e(1799);
    }
    return ee[e(1839)](e(671), "network", this[e(417)][e(296)]);
  }
  [c(555)](e, x) {
    var t = c;
    const r = Object.keys(x)[t(582)]((s, d) => {
        const l = x[d];
        return l != null && (s += "&" + d + "=" + l), s;
      }, ""),
      a = this[t(1414)] ? "&apikey=" + this.apiKey : "";
    return this[t(869)] + t(740) + e + r + a;
  }
  [c(1430)]() {
    var e = c;
    return this[e(869)] + e(1817);
  }
  [c(355)](e, x) {
    var t = c;
    return (x.module = e), (x.apikey = this[t(1414)]), x;
  }
  [c(1146)](e, x, t) {
    return sr(this, void 0, void 0, function* () {
      var r = O;
      const a = t ? this.getPostUrl() : this.getUrl(e, x),
        s = t ? this[r(355)](e, x) : null,
        d = e === r(1456) ? Ya : A2;
      this[r(1830)](r(1056), { action: "request", request: a, provider: this });
      const l = {
        url: a,
        throttleSlotInterval: 1e3,
        throttleCallback: (g, k) => {
          var S = r;
          return this.isCommunityResource() && Xt(), Promise[S(620)](!![]);
        },
      };
      let v = null;
      s &&
        ((l[r(1998)] = { "content-type": r(1786) }),
        (v = Object.keys(s)
          .map((g) => g + "=" + s[g])
          [r(1286)]("&")));
      const m = yield nt(l, v, d || Ya);
      return (
        this[r(1830)](r(1056), {
          action: r(1140),
          request: a,
          response: mx(m),
          provider: this,
        }),
        m
      );
    });
  }
  [c(573)]() {
    return sr(this, void 0, void 0, function* () {
      return this.network;
    });
  }
  perform(e, x) {
    var t = c;
    const r = Object[t(1623)](null, { perform: { get: () => super.perform } });
    return sr(this, void 0, void 0, function* () {
      var a = t;
      switch (e) {
        case "getBlockNumber":
          return this[a(1146)](a(1456), { action: a(632) });
        case a(278):
          return this.fetch("proxy", { action: "eth_gasPrice" });
        case "getBalance":
          return this[a(1146)](a(1274), {
            action: "balance",
            address: x[a(1531)],
            tag: x[a(561)],
          });
        case a(1590):
          return this.fetch(a(1456), {
            action: a(1240),
            address: x[a(1531)],
            tag: x[a(561)],
          });
        case a(1087):
          return this[a(1146)](a(1456), {
            action: a(272),
            address: x[a(1531)],
            tag: x[a(561)],
          });
        case "getStorageAt":
          return this.fetch(a(1456), {
            action: a(695),
            address: x[a(1531)],
            position: x[a(1437)],
            tag: x[a(561)],
          });
        case a(1177):
          return this[a(1146)](
            a(1456),
            { action: a(451), hex: x[a(650)] },
            !![]
          ).catch((s) => {
            var d = a;
            return nn(d(1177), s, x[d(650)]);
          });
        case a(1041):
          if (x.blockTag)
            return this.fetch(a(1456), {
              action: a(1239),
              tag: x[a(561)],
              boolean: x.includeTransactions ? a(1253) : a(1267),
            });
          throw new Error(a(672));
        case "getTransaction":
          return this[a(1146)](a(1456), { action: a(1183), txhash: x[a(586)] });
        case a(1055):
          return this[a(1146)](a(1456), { action: a(1739), txhash: x[a(586)] });
        case a(1340): {
          if (x[a(561)] !== a(1626))
            throw new Error(
              "EtherscanProvider does not support blockTag for call"
            );
          const s = Va(x[a(1785)]);
          (s[a(1135)] = a(1456)), (s[a(1991)] = a(1321));
          try {
            return yield this.fetch(a(1456), s, !![]);
          } catch (d) {
            return nn(a(1340), d, x[a(1785)]);
          }
        }
        case "estimateGas": {
          const s = Va(x.transaction);
          (s[a(1135)] = a(1456)), (s.action = a(1732));
          try {
            return yield this[a(1146)](a(1456), s, !![]);
          } catch (d) {
            return nn(a(571), d, x[a(1785)]);
          }
        }
        case a(1472): {
          const s = { action: a(1472) };
          if (
            (x[a(196)][a(815)] && (s[a(815)] = Xa(x.filter[a(815)])),
            x.filter[a(1339)] && (s[a(1339)] = Xa(x.filter[a(1339)])),
            x[a(196)][a(1531)] && (s.address = x[a(196)][a(1531)]),
            x.filter[a(967)] &&
              x[a(196)][a(967)].length > 0 &&
              (x[a(196)][a(967)].length > 1 &&
                ee[a(304)](a(1065), T[a(1169)][a(854)], {
                  topics: x[a(196)][a(967)],
                }),
              x[a(196)][a(967)][a(152)] === 1))
          ) {
            const v = x[a(196)].topics[0];
            (typeof v != "string" || v[a(152)] !== 66) &&
              ee[a(304)](a(539), T[a(1169)][a(854)], { topic0: v }),
              (s[a(852)] = v);
          }
          const d = yield this[a(1146)](a(1035), s);
          let l = {};
          for (let v = 0; v < d[a(152)]; v++) {
            const m = d[v];
            if (m.blockHash == null) {
              if (l[m[a(452)]] == null) {
                const g = yield this.getBlock(m[a(452)]);
                g && (l[m[a(452)]] = g[a(1062)]);
              }
              m[a(1301)] = l[m[a(452)]];
            }
          }
          return d;
        }
        case a(715):
          return this[a(417)][a(296)] !== a(1837)
            ? 0
            : parseFloat(
                (yield this[a(1146)](a(404), { action: a(1949) })).ethusd
              );
      }
      return r.perform[a(1340)](this, e, x);
    });
  }
  [c(445)](e, x, t) {
    return sr(this, void 0, void 0, function* () {
      var r = O;
      const a = {
        action: r(1649),
        address: yield this[r(767)](e),
        startblock: x == null ? 0 : x,
        endblock: t == null ? 99999999 : t,
        sort: r(1731),
      };
      return (yield this[r(1146)](r(1274), a))[r(794)]((d) => {
        var l = r;
        ["contractAddress", "to"].forEach(function (m) {
          d[m] == "" && delete d[m];
        }),
          d[l(1162)] == null && d[l(1323)] != null && (d[l(1162)] = d[l(1323)]);
        const v = this[l(1862)].transactionResponse(d);
        return d.timeStamp && (v.timestamp = parseInt(d[l(853)])), v;
      });
    });
  }
  [c(406)]() {
    var e = c;
    return this[e(1414)] == null;
  }
}
var Br =
  (globalThis && globalThis[c(1881)]) ||
  function (n, e, x, t) {
    function r(a) {
      return a instanceof x
        ? a
        : new x(function (s) {
            s(a);
          });
    }
    return new (x || (x = Promise))(function (a, s) {
      var d = O;
      function l(g) {
        var k = O;
        try {
          m(t[k(1747)](g));
        } catch (S) {
          s(S);
        }
      }
      function v(g) {
        try {
          m(t.throw(g));
        } catch (k) {
          s(k);
        }
      }
      function m(g) {
        var k = O;
        g[k(252)] ? a(g[k(1204)]) : r(g[k(1204)])[k(1494)](l, v);
      }
      m((t = t[d(1429)](n, e || [])).next());
    });
  };
const Be = new T(bx);
function fr() {
  return new Date().getTime();
}
function Za(n) {
  var e = c;
  let x = null;
  for (let t = 0; t < n[e(152)]; t++) {
    const r = n[t];
    if (r == null) return null;
    x
      ? !(
          x.name === r.name &&
          x[e(1923)] === r[e(1923)] &&
          (x[e(282)] === r[e(282)] ||
            (x.ensAddress == null && r[e(282)] == null))
        ) && Be[e(1839)]("provider mismatch", "networks", n)
      : (x = r);
  }
  return x;
}
function $a(n, e) {
  var x = c;
  n = n.slice().sort();
  const t = Math.floor(n[x(152)] / 2);
  if (n[x(152)] % 2) return n[t];
  const r = n[t - 1],
    a = n[t];
  return e != null && Math[x(238)](r - a) > e ? null : (r + a) / 2;
}
function Ye(n) {
  var e = c;
  if (n === null) return e(211);
  if (typeof n === e(456) || typeof n === e(1675)) return JSON[e(657)](n);
  if (typeof n === e(1721)) return n;
  if (z[e(619)](n)) return n[e(1628)]();
  if (Array[e(1900)](n)) return JSON[e(657)](n[e(794)]((x) => Ye(x)));
  if (typeof n === e(661)) {
    const x = Object[e(319)](n);
    return (
      x[e(760)](),
      "{" +
        x
          .map((t) => {
            var r = e;
            let a = n[t];
            return (
              typeof a === r(289) ? (a = r(593)) : (a = Ye(a)),
              JSON[r(657)](t) + ":" + a
            );
          })
          .join(",") +
        "}"
    );
  }
  throw new Error("unknown value type: " + typeof n);
}
let M2 = 1;
function _a(n) {
  let e = null,
    x = null,
    t = new Promise((s) => {
      (e = function () {
        x && (clearTimeout(x), (x = null)), s();
      }),
        (x = setTimeout(e, n));
    });
  const r = (s) => {
    var d = O;
    return (t = t[d(1494)](s)), t;
  };
  function a() {
    return t;
  }
  return { cancel: e, getPromise: a, wait: r };
}
const E2 = [
    T[c(1169)][c(893)],
    T[c(1169)].INSUFFICIENT_FUNDS,
    T[c(1169)][c(1691)],
    T.errors[c(1835)],
    T.errors.UNPREDICTABLE_GAS_LIMIT,
  ],
  k2 = [c(1531), c(941), c(373), c(1081), "method", c(1785)];
function cr(n, e) {
  var x = c;
  const t = { weight: n[x(960)] };
  return (
    Object[x(782)](t, x(1362), { get: () => n[x(1362)] }),
    n[x(498)] && (t[x(498)] = n.start),
    e && (t[x(1510)] = e - n[x(498)]),
    n[x(252)] &&
      (n[x(779)] ? (t[x(779)] = n[x(779)]) : (t[x(1546)] = n[x(1546)] || null)),
    t
  );
}
function S2(n, e) {
  return function (x) {
    var t = O;
    const r = {};
    x[t(1745)]((s) => {
      var d = t;
      const l = n(s.result);
      !r[l] && (r[l] = { count: 0, result: s[d(1546)] }), r[l].count++;
    });
    const a = Object[t(319)](r);
    for (let s = 0; s < a[t(152)]; s++) {
      const d = r[a[s]];
      if (d[t(1945)] >= e) return d[t(1546)];
    }
  };
}
function P2(n, e, x) {
  var t = c;
  let r = Ye;
  switch (e) {
    case t(1913):
      return function (a) {
        var s = t;
        const d = a[s(794)]((v) => v.result);
        let l = $a(
          a.map((v) => v[s(1546)]),
          2
        );
        if (l != null)
          return (
            (l = Math.ceil(l)),
            d[s(1532)](l + 1) >= 0 && l++,
            l >= n[s(1650)] && (n[s(1650)] = l),
            n[s(1650)]
          );
      };
    case t(278):
      return function (a) {
        var s = t;
        const d = a[s(794)]((l) => l[s(1546)]);
        return d[s(760)](), d[Math[s(305)](d.length / 2)];
      };
    case t(715):
      return function (a) {
        var s = t;
        return $a(a[s(794)]((d) => d[s(1546)]));
      };
    case t(1947):
    case "getTransactionCount":
    case t(1087):
    case t(562):
    case t(1340):
    case "estimateGas":
    case t(1472):
      break;
    case t(362):
    case t(1055):
      r = function (a) {
        var s = t;
        return a == null ? null : ((a = X0(a)), (a[s(693)] = -1), Ye(a));
      };
      break;
    case "getBlock":
      x.includeTransactions
        ? (r = function (a) {
            var s = t;
            return a == null
              ? null
              : ((a = X0(a)),
                (a[s(545)] = a[s(545)][s(794)]((d) => {
                  var l = s;
                  return (d = X0(d)), (d[l(693)] = -1), d;
                })),
                Ye(a));
          })
        : (r = function (a) {
            return a == null ? null : Ye(a);
          });
      break;
    default:
      throw new Error("unknown method: " + e);
  }
  return S2(r, n.quorum);
}
function St(n, e) {
  return Br(this, void 0, void 0, function* () {
    var x = O;
    const t = n.provider;
    return (t[x(452)] != null && t.blockNumber >= e) || e === -1
      ? t
      : Te(
          () =>
            new Promise((r, a) => {
              setTimeout(function () {
                var s = O;
                return t[s(452)] >= e
                  ? r(t)
                  : n.cancelled
                  ? r(null)
                  : r(void 0);
              }, 0);
            }),
          { oncePoll: t }
        );
  });
}
function C2(n, e, x, t) {
  return Br(this, void 0, void 0, function* () {
    var r = O;
    let a = n[r(1362)];
    switch (x) {
      case r(1913):
      case r(278):
        return a[x]();
      case r(715):
        if (a[r(715)]) return a[r(715)]();
        break;
      case r(1947):
      case r(1590):
      case r(1087):
        return (
          t[r(561)] && n0(t[r(561)]) && (a = yield St(n, e)),
          a[x](t[r(1531)], t[r(561)] || r(1626))
        );
      case r(562):
        return (
          t[r(561)] && n0(t.blockTag) && (a = yield St(n, e)),
          a.getStorageAt(t.address, t[r(1437)], t[r(561)] || "latest")
        );
      case r(1041):
        return (
          t[r(561)] && n0(t.blockTag) && (a = yield St(n, e)),
          a[t[r(591)] ? "getBlockWithTransactions" : r(1041)](
            t[r(561)] || t.blockHash
          )
        );
      case r(1340):
      case r(571):
        return (
          t[r(561)] && n0(t[r(561)]) && (a = yield St(n, e)),
          x === r(1340) && t[r(561)]
            ? a[x](t.transaction, t[r(561)])
            : a[x](t[r(1785)])
        );
      case r(362):
      case r(1055):
        return a[x](t[r(586)]);
      case r(1472): {
        let s = t[r(196)];
        return (
          ((s[r(815)] && n0(s[r(815)])) || (s[r(1339)] && n0(s.toBlock))) &&
            (a = yield St(n, e)),
          a.getLogs(s)
        );
      }
    }
    return Be[r(304)]("unknown method error", T[r(1169)][r(1185)], {
      method: x,
      params: t,
    });
  });
}
class Is extends Gr {
  constructor(e, x) {
    var t = c;
    e.length === 0 && Be[t(1839)](t(1391), t(1441), e);
    const r = e[t(794)]((d, l) => {
        var v = t;
        if (Ge[v(166)](d)) {
          const k = yn(d) ? 2e3 : 750,
            S = 1;
          return Object[v(250)]({
            provider: d,
            weight: 1,
            stallTimeout: k,
            priority: S,
          });
        }
        const m = X0(d);
        m[v(1461)] == null && (m[v(1461)] = 1),
          m.stallTimeout == null && (m[v(280)] = yn(d) ? 2e3 : 750),
          m[v(960)] == null && (m[v(960)] = 1);
        const g = m[v(960)];
        return (
          (g % 1 || g > 512 || g < 1) &&
            Be[v(1839)](v(1557), v(503) + l + v(524), g),
          Object[v(250)](m)
        );
      }),
      a = r[t(582)]((d, l) => d + l[t(960)], 0);
    x == null ? (x = a / 2) : x > a && Be[t(1839)](t(1886), t(1088), x);
    let s = Za(r[t(794)]((d) => d.provider[t(417)]));
    s == null &&
      (s = new Promise((d, l) => {
        setTimeout(() => {
          var v = O;
          this[v(573)]().then(d, l);
        }, 0);
      })),
      super(s),
      F(this, t(553), Object.freeze(r)),
      F(this, "quorum", x),
      (this[t(1650)] = -1);
  }
  [c(573)]() {
    return Br(this, void 0, void 0, function* () {
      var e = O;
      const x = yield Promise[e(1149)](
        this[e(553)][e(794)]((t) => t.provider.getNetwork())
      );
      return Za(x);
    });
  }
  [c(205)](e, x) {
    return Br(this, void 0, void 0, function* () {
      var t = O;
      if (e === t(1177)) {
        const v = yield Promise.all(
          this[t(553)][t(794)]((m) => {
            var g = t;
            return m[g(1362)].sendTransaction(x[g(650)])[g(1494)](
              (k) => {
                var S = g;
                return k[S(1062)];
              },
              (k) => k
            );
          })
        );
        for (let m = 0; m < v[t(152)]; m++) {
          const g = v[m];
          if (typeof g === t(1721)) return g;
        }
        throw v[0];
      }
      this[t(1650)] === -1 && e !== t(1913) && (yield this[t(1913)]());
      const r = P2(this, e, x),
        a = us(this.providerConfigs.map(X0));
      a[t(760)]((v, m) => v.priority - m[t(1461)]);
      const s = this[t(1650)];
      let d = 0,
        l = !![];
      for (; []; ) {
        const v = fr();
        let m = a[t(196)]((B) => B[t(743)] && v - B[t(498)] < B[t(280)])[
          t(582)
        ]((B, R) => B + R[t(960)], 0);
        for (; m < this.quorum && d < a[t(152)]; ) {
          const B = a[d++],
            R = M2++;
          (B[t(498)] = fr()),
            (B[t(532)] = _a(B.stallTimeout)),
            B.staller[t(666)](() => {
              var D = t;
              B[D(532)] = null;
            }),
            (B.runner = C2(B, s, e, x)[t(1494)](
              (D) => {
                var P = t;
                (B.done = !![]),
                  (B[P(1546)] = D),
                  this[P(1988)]("debug") &&
                    this[P(1830)](P(1056), {
                      action: P(298),
                      rid: R,
                      backend: cr(B, fr()),
                      request: { method: e, params: mx(x) },
                      provider: this,
                    });
              },
              (D) => {
                var P = t;
                (B.done = !![]),
                  (B.error = D),
                  this.listenerCount(P(1056)) &&
                    this.emit("debug", {
                      action: P(298),
                      rid: R,
                      backend: cr(B, fr()),
                      request: { method: e, params: mx(x) },
                      provider: this,
                    });
              }
            )),
            this[t(1988)](t(1056)) &&
              this[t(1830)]("debug", {
                action: "request",
                rid: R,
                backend: cr(B, null),
                request: { method: e, params: mx(x) },
                provider: this,
              }),
            (m += B[t(960)]);
        }
        const g = [];
        a[t(1745)]((B) => {
          var R = t;
          B[R(252)] ||
            !B.runner ||
            (g[R(608)](B[R(743)]), B[R(532)] && g[R(608)](B[R(532)][R(933)]()));
        }),
          g.length && (yield Promise.race(g));
        const k = a[t(196)]((B) => B[t(252)] && B[t(779)] == null);
        if (k[t(152)] >= this.quorum) {
          const B = r(k);
          if (B !== void 0)
            return (
              a[t(1745)]((R) => {
                var D = t;
                R[D(532)] && R[D(532)].cancel(), (R[D(1748)] = !![]);
              }),
              B
            );
          !l && (yield _a(100).getPromise()), (l = ![]);
        }
        const S = a[t(582)]((B, R) => {
          var D = t;
          if (!R[D(252)] || R[D(779)] == null) return B;
          const P = R[D(779)][D(585)];
          return (
            E2[D(1532)](P) >= 0 &&
              (!B[P] && (B[P] = { error: R[D(779)], weight: 0 }),
              (B[P][D(960)] += R.weight)),
            B
          );
        }, {});
        if (
          (Object[t(319)](S)[t(1745)]((B) => {
            var R = t;
            const D = S[B];
            if (D[R(960)] < this[R(1088)]) return;
            a[R(1745)]((K) => {
              var G = R;
              K[G(532)] && K[G(532)][G(971)](), (K[G(1748)] = !![]);
            });
            const P = D[R(779)],
              I = {};
            k2[R(1745)]((K) => {
              P[K] != null && (I[K] = P[K]);
            }),
              Be.throwError(P[R(866)] || P[R(469)], B, I);
          }),
          a.filter((B) => !B[t(252)])[t(152)] === 0)
        )
          break;
      }
      return (
        a[t(1745)]((v) => {
          var m = t;
          v[m(532)] && v.staller[m(971)](), (v[m(1748)] = !![]);
        }),
        Be[t(304)](t(1708), T[t(1169)][t(1672)], {
          method: e,
          params: x,
          results: a.map((v) => cr(v)),
          provider: this,
        })
      );
    });
  }
}
const Ns = null,
  mr = new T(bx),
  Ct = "84842078b09946638c03157f83405213";
class Rs extends Kr {
  constructor(e, x) {
    var t = c;
    const r = new Yn(e, x),
      a = r[t(1e3)];
    a.password && mr[t(304)](t(241), T[t(1169)][t(854)], { operation: t(628) });
    const s = a[t(920)].replace(/^http/i, "ws")[t(330)](t(1822), t(324));
    super(s, e),
      F(this, t(1414), r[t(787)]),
      F(this, t(787), r[t(787)]),
      F(this, t(1161), r[t(1161)]);
  }
  [c(406)]() {
    var e = c;
    return this[e(787)] === Ct;
  }
}
class Yn extends Xx {
  static [c(890)](e, x) {
    return new Rs(e, x);
  }
  static [c(341)](e) {
    var x = c;
    const t = { apiKey: Ct, projectId: Ct, projectSecret: null };
    return e == null
      ? t
      : (typeof e === x(1721)
          ? (t[x(787)] = e)
          : e[x(1161)] != null
          ? (mr[x(892)](
              typeof e[x(787)] === x(1721),
              "projectSecret requires a projectId",
              "projectId",
              e[x(787)]
            ),
            mr.assertArgument(
              typeof e[x(1161)] === x(1721),
              x(1250),
              "projectSecret",
              x(1818)
            ),
            (t[x(787)] = e[x(787)]),
            (t[x(1161)] = e[x(1161)]))
          : e[x(787)] && (t[x(787)] = e.projectId),
        (t.apiKey = t[x(787)]),
        t);
  }
  static [c(555)](e, x) {
    var t = c;
    let r = null;
    switch (e ? e.name : t(270)) {
      case t(1837):
        r = t(1251);
        break;
      case "ropsten":
        r = t(230);
        break;
      case "rinkeby":
        r = "rinkeby.infura.io";
        break;
      case t(399):
        r = t(1030);
        break;
      case t(1341):
        r = t(499);
        break;
      case t(1665):
        r = "polygon-mainnet.infura.io";
        break;
      case t(977):
        r = t(1962);
        break;
      case "optimism":
        r = t(1141);
        break;
      case "optimism-kovan":
        r = t(875);
        break;
      case t(1551):
        r = t(1687);
        break;
      case t(1103):
        r = t(1215);
        break;
      default:
        mr[t(304)]("unsupported network", T.errors.INVALID_ARGUMENT, {
          argument: t(417),
          value: e,
        });
    }
    const a = {
      allowGzip: !![],
      url: t(1724) + "/" + r + "/v3/" + x[t(787)],
      throttleCallback: (s, d) => {
        var l = t;
        return x[l(787)] === Ct && Xt(), Promise[l(620)](!![]);
      },
    };
    return (
      x.projectSecret != null && ((a[t(889)] = ""), (a[t(783)] = x[t(1161)])), a
    );
  }
  isCommunityResource() {
    var e = c;
    return this[e(787)] === Ct;
  }
}
class B2 extends De {
  [c(982)](e, x) {
    var t = c;
    const r = { method: e, params: x, id: this._nextId++, jsonrpc: t(481) };
    this._pendingBatch == null && (this[t(878)] = []);
    const a = { request: r, resolve: null, reject: null },
      s = new Promise((d, l) => {
        var v = t;
        (a[v(620)] = d), (a[v(937)] = l);
      });
    return (
      this._pendingBatch[t(608)](a),
      !this[t(1735)] &&
        (this._pendingBatchAggregator = setTimeout(() => {
          var d = t;
          const l = this[d(878)];
          (this._pendingBatch = null), (this._pendingBatchAggregator = null);
          const v = l[d(794)]((m) => m[d(298)]);
          return (
            this.emit(d(1056), {
              action: d(1011),
              request: mx(v),
              provider: this,
            }),
            nt(this.connection, JSON[d(657)](v)).then(
              (m) => {
                var g = d;
                this.emit(g(1056), {
                  action: g(1140),
                  request: v,
                  response: m,
                  provider: this,
                }),
                  l[g(1745)]((k, S) => {
                    var B = g;
                    const R = m[S];
                    if (R[B(779)]) {
                      const D = new Error(R[B(779)][B(469)]);
                      (D[B(585)] = R.error[B(585)]),
                        (D[B(1086)] = R[B(779)].data),
                        k[B(937)](D);
                    } else k[B(620)](R[B(1546)]);
                  });
              },
              (m) => {
                var g = d;
                this.emit(g(1056), {
                  action: g(1140),
                  error: m,
                  request: v,
                  provider: this,
                }),
                  l[g(1745)]((k) => {
                    var S = g;
                    k[S(937)](m);
                  });
              }
            )
          );
        }, 10)),
      s
    );
  }
}
const an = new T(bx),
  T2 = c(1657);
class Os extends Xx {
  static getApiKey(e) {
    var x = c;
    return (
      e && typeof e != "string" && an[x(1839)](x(1601), x(1414), e), e || T2
    );
  }
  static [c(555)](e, x) {
    var t = c;
    an[t(830)](t(644));
    let r = null;
    switch (e[t(296)]) {
      case t(1837):
        r = t(460);
        break;
      case "ropsten":
        r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
        break;
      case t(251):
        r = t(1248);
        break;
      case t(1341):
        r = t(1199);
        break;
      case t(399):
        r = t(1181);
        break;
      default:
        an[t(1839)](t(671), t(417), arguments[0]);
    }
    return r + "?apiKey=" + x;
  }
}
const xi = new T(bx),
  ei = "62e1ad51b37b8e00394bda3b";
class Ds extends Xx {
  static getApiKey(e) {
    var x = c;
    const t = {
      applicationId: null,
      loadBalancer: !![],
      applicationSecretKey: null,
    };
    return (
      e == null
        ? (t[x(1415)] = ei)
        : typeof e === x(1721)
        ? (t[x(1415)] = e)
        : e.applicationSecretKey != null
        ? ((t[x(1415)] = e[x(1415)]), (t[x(1272)] = e[x(1272)]))
        : e.applicationId
        ? (t[x(1415)] = e[x(1415)])
        : xi.throwArgumentError(x(1884), x(1414), e),
      t
    );
  }
  static [c(555)](e, x) {
    var t = c;
    let r = null;
    switch (e ? e[t(296)] : t(270)) {
      case t(1341):
        r = t(1974);
        break;
      case t(1837):
        r = t(1433);
        break;
      case t(399):
        r = t(1535);
        break;
      case t(1665):
        r = t(1764);
        break;
      case t(977):
        r = t(385);
        break;
      case t(251):
        r = "eth-rinkeby.gateway.pokt.network";
        break;
      case t(765):
        r = t(154);
        break;
      default:
        xi.throwError("unsupported network", T[t(1169)].INVALID_ARGUMENT, {
          argument: "network",
          value: e,
        });
    }
    const a = t(908) + r + t(1200) + x.applicationId,
      s = { headers: {}, url: a };
    return (
      x[t(1272)] != null &&
        ((s[t(889)] = ""), (s[t(783)] = x.applicationSecretKey)),
      s
    );
  }
  [c(406)]() {
    var e = c;
    return this[e(1415)] === ei;
  }
}
const ti = new T(bx);
let I2 = 1;
function ri(n, e) {
  var x = c;
  const t = x(225);
  return function (r, a) {
    var s = x;
    const d = { method: r, params: a, id: I2++, jsonrpc: s(481) };
    return new Promise((l, v) => {
      var m = s;
      this.emit(m(1056), {
        action: m(298),
        fetcher: t,
        request: mx(d),
        provider: this,
      }),
        e(d, (g, k) => {
          var S = m;
          if (g)
            return (
              this.emit(S(1056), {
                action: S(1140),
                fetcher: t,
                error: g,
                request: d,
                provider: this,
              }),
              v(g)
            );
          if (
            (this[S(1830)](S(1056), {
              action: S(1140),
              fetcher: t,
              request: d,
              response: k,
              provider: this,
            }),
            k[S(779)])
          ) {
            const B = new Error(k[S(779)][S(469)]);
            return (
              (B[S(585)] = k[S(779)][S(585)]),
              (B[S(1086)] = k[S(779)][S(1086)]),
              v(B)
            );
          }
          l(k[S(1546)]);
        });
    });
  };
}
function N2(n) {
  return function (e, x) {
    var t = O;
    x == null && (x = []);
    const r = { method: e, params: x };
    return (
      this[t(1830)](t(1056), {
        action: t(298),
        fetcher: t(161),
        request: mx(r),
        provider: this,
      }),
      n.request(r).then(
        (a) => {
          var s = t;
          return (
            this[s(1830)]("debug", {
              action: s(1140),
              fetcher: s(161),
              request: r,
              response: a,
              provider: this,
            }),
            a
          );
        },
        (a) => {
          var s = t;
          throw (
            (this[s(1830)](s(1056), {
              action: "response",
              fetcher: "Eip1193Fetcher",
              request: r,
              error: a,
              provider: this,
            }),
            a)
          );
        }
      )
    );
  };
}
class Fs extends De {
  constructor(e, x) {
    var t = c;
    e == null && ti[t(1839)](t(1783), t(1362), e);
    let r = null,
      a = null,
      s = null;
    typeof e === t(289)
      ? ((r = t(1540)), (a = e))
      : ((r = e[t(1443)] || e.path || ""),
        !r && e[t(1766)] && (r = t(546)),
        (s = e),
        e[t(298)]
          ? (r === "" && (r = "eip-1193:"), (a = N2(e)))
          : e[t(1852)]
          ? (a = ri(e, e[t(1852)][t(1360)](e)))
          : e[t(982)]
          ? (a = ri(e, e.send.bind(e)))
          : ti.throwArgumentError("unsupported provider", t(1362), e),
        !r && (r = t(1540))),
      super(r, x),
      F(this, t(1275), a),
      F(this, t(1362), s);
  }
  send(e, x) {
    var t = c;
    return this[t(1275)](e, x);
  }
}
const ni = new T(bx);
function Us(n, e) {
  var x = c;
  if ((n == null && (n = x(1837)), typeof n == "string")) {
    const r = n[x(354)](/^(ws|http)s?:/i);
    if (r)
      switch (r[1][x(177)]()) {
        case x(1213):
        case x(1552):
          return new De(n);
        case "ws":
        case x(729):
          return new Kr(n);
        default:
          ni[x(1839)](x(1582), "network", n);
      }
  }
  const t = Wn(n);
  return (
    (!t || !t[x(1067)]) &&
      ni[x(304)](x(778), T[x(1169)][x(812)], { operation: x(533), network: n }),
    t[x(1067)](
      {
        FallbackProvider: Is,
        AlchemyProvider: Vn,
        AnkrProvider: Cs,
        CloudflareProvider: Bs,
        EtherscanProvider: Ts,
        InfuraProvider: Yn,
        JsonRpcProvider: De,
        NodesmithProvider: Os,
        PocketProvider: Ds,
        Web3Provider: Fs,
        IpcProvider: Ns,
      },
      e
    )
  );
}
const R2 = Object[c(250)](
    Object[c(782)](
      {
        __proto__: null,
        Provider: Ge,
        BaseProvider: Gr,
        Resolver: wn,
        UrlJsonRpcProvider: Xx,
        FallbackProvider: Is,
        AlchemyProvider: Vn,
        AlchemyWebSocketProvider: Ps,
        AnkrProvider: Cs,
        CloudflareProvider: Bs,
        EtherscanProvider: Ts,
        InfuraProvider: Yn,
        InfuraWebSocketProvider: Rs,
        JsonRpcProvider: De,
        JsonRpcBatchProvider: B2,
        NodesmithProvider: Os,
        PocketProvider: Ds,
        StaticJsonRpcProvider: Ss,
        Web3Provider: Fs,
        WebSocketProvider: Kr,
        IpcProvider: Ns,
        JsonRpcSigner: Qn,
        getDefaultProvider: Us,
        getNetwork: Wn,
        isCommunityResource: yn,
        isCommunityResourcable: As,
        showThrottleMessage: Xt,
        Formatter: X,
      },
      Symbol.toStringTag,
      { value: c(1197) }
    )
  ),
  O2 = "solidity/5.7.0",
  D2 = new RegExp("^bytes([0-9]+)$"),
  F2 = new RegExp(c(363)),
  U2 = new RegExp(c(1929)),
  L2 = c(1578),
  We = new T(O2);
function Ls(n, e, x) {
  var t = c;
  switch (n) {
    case t(1531):
      return x ? Bt(e, 32) : q(e);
    case t(1721):
      return ax(e);
    case t(1592):
      return q(e);
    case "bool":
      return (e = t(e ? 246 : 258)), x ? Bt(e, 32) : q(e);
  }
  let r = n[t(354)](F2);
  if (r) {
    let a = parseInt(r[2] || t(1523));
    return (
      ((r[2] && String(a) !== r[2]) || a % 8 !== 0 || a === 0 || a > 256) &&
        We[t(1839)]("invalid number type", t(577), n),
      x && (a = 256),
      (e = z[t(1180)](e)[t(1810)](a)),
      Bt(e, a / 8)
    );
  }
  if (((r = n[t(354)](D2)), r)) {
    const a = parseInt(r[1]);
    return (
      (String(a) !== r[1] || a === 0 || a > 32) &&
        We[t(1839)](t(1573), "type", n),
      q(e)[t(234)] !== a && We.throwArgumentError(t(1428) + n, "value", e),
      x ? q((e + L2)[t(1329)](0, 66)) : e
    );
  }
  if (((r = n[t(354)](U2)), r && Array[t(1900)](e))) {
    const a = r[1];
    parseInt(r[2] || String(e.length)) != e[t(152)] &&
      We[t(1839)](t(497) + n, t(1204), e);
    const d = [];
    return (
      e[t(1745)](function (l) {
        var v = t;
        d[v(608)](Ls(a, l, !![]));
      }),
      V0(d)
    );
  }
  return We[t(1839)](t(1048), t(577), n);
}
function Xn(n, e) {
  var x = c;
  n[x(152)] != e.length && We[x(1839)](x(1686), x(1293), e);
  const t = [];
  return (
    n[x(1745)](function (r, a) {
      var s = x;
      t[s(608)](Ls(r, e[a]));
    }),
    H(V0(t))
  );
}
function G2(n, e) {
  return Q0(Xn(n, e));
}
function K2(n, e) {
  return Vx(Xn(n, e));
}
const q2 = c(370),
  Gs = new T(q2),
  Ks = ["wei", c(955), "mwei", c(590), c(515), c(338), c(1355)];
function z2(n) {
  var e = c;
  const x = String(n)[e(1418)](".");
  (x.length > 2 ||
    !x[0][e(354)](/^-?[0-9]*$/) ||
    (x[1] && !x[1][e(354)](/^[0-9]*$/)) ||
    n === "." ||
    n === "-.") &&
    Gs[e(1839)](e(1238), e(1204), n);
  let t = x[0],
    r = "";
  for (
    t.substring(0, 1) === "-" && ((r = "-"), (t = t.substring(1)));
    t.substring(0, 1) === "0";

  )
    t = t[e(1329)](1);
  t === "" && (t = "0");
  let a = "";
  for (
    x[e(152)] === 2 && (a = "." + (x[1] || "0"));
    a[e(152)] > 2 && a[a[e(152)] - 1] === "0";

  )
    a = a[e(1329)](0, a[e(152)] - 1);
  const s = [];
  for (; t[e(152)]; )
    if (t[e(152)] <= 3) {
      s.unshift(t);
      break;
    } else {
      const d = t.length - 3;
      s[e(1604)](t.substring(d)), (t = t[e(1329)](0, d));
    }
  return r + s[e(1286)](",") + a;
}
function qs(n, e) {
  var x = c;
  if (typeof e === x(1721)) {
    const t = Ks[x(1532)](e);
    t !== -1 && (e = 3 * t);
  }
  return ur(n, e != null ? e : 18);
}
function zs(n, e) {
  var x = c;
  if (
    (typeof n !== x(1721) && Gs[x(1839)](x(1695), x(1204), n),
    typeof e === x(1721))
  ) {
    const t = Ks.indexOf(e);
    t !== -1 && (e = 3 * t);
  }
  return Fx(n, e != null ? e : 18);
}
function H2(n) {
  return qs(n, 18);
}
function J2(n) {
  return zs(n, 18);
}
const j2 = Object[c(250)](
    Object.defineProperty(
      {
        __proto__: null,
        AbiCoder: Ri,
        defaultAbiCoder: Oi,
        Fragment: Kx,
        ConstructorFragment: Rx,
        ErrorFragment: Qx,
        EventFragment: Gx,
        FunctionFragment: Ox,
        ParamType: ix,
        FormatTypes: H0,
        checkResultErrors: mi,
        Logger: T,
        RLP: of,
        _fetchData: gs,
        fetchJson: nt,
        poll: Te,
        checkProperties: En,
        deepCopy: mx,
        defineReadOnly: F,
        getStatic: ux,
        resolveProperties: xx,
        shallowCopy: X0,
        arrayify: q,
        concat: V0,
        stripZeros: zx,
        zeroPad: Bt,
        isBytes: ie,
        isBytesLike: Wt,
        defaultPath: et,
        HDNode: Mx,
        SigningKey: Ie,
        Interface: un,
        LogDescription: ji,
        TransactionDescription: Wi,
        base58: _e,
        base64: _f,
        hexlify: H,
        isHexString: n0,
        hexConcat: vx,
        hexStripZeros: ci,
        hexValue: Qt,
        hexZeroPad: Y0,
        hexDataLength: Hx,
        hexDataSlice: tx,
        nameprep: Yf,
        _toEscapedUtf8String: Of,
        toUtf8Bytes: ax,
        toUtf8CodePoints: wr,
        toUtf8String: Le,
        Utf8ErrorFuncs: Ii,
        formatBytes32String: Df,
        parseBytes32String: Ff,
        dnsEncode: qi,
        hashMessage: Dn,
        namehash: Nt,
        isValidName: Mc,
        id: re,
        _TypedDataEncoder: ox,
        getAddress: j0,
        getIcapAddress: bf,
        getContractAddress: Ir,
        getCreate2Address: vf,
        isAddress: lf,
        formatEther: H2,
        parseEther: J2,
        formatUnits: qs,
        parseUnits: zs,
        commify: z2,
        computeHmac: Ht,
        keccak256: Q0,
        ripemd160: ss,
        sha256: Vx,
        sha512: bo,
        randomBytes: Ve,
        shuffled: us,
        solidityPack: Xn,
        solidityKeccak256: G2,
        soliditySha256: K2,
        splitSignature: Fe,
        joinSignature: fn,
        accessListify: fe,
        parseTransaction: es,
        serializeTransaction: ln,
        get TransactionTypes() {
          return dn;
        },
        getJsonWalletAddress: Io,
        computeAddress: ne,
        recoverAddress: Yt,
        computePublicKey: Ln,
        recoverPublicKey: Xi,
        verifyMessage: Jo,
        verifyTypedData: jo,
        getAccountPath: ko,
        mnemonicToEntropy: Fr,
        entropyToMnemonic: Ur,
        isValidMnemonic: Eo,
        mnemonicToSeed: os,
        get SupportedAlgorithm() {
          return xt;
        },
        get UnicodeNormalizationForm() {
          return Jx;
        },
        get Utf8ErrorReason() {
          return wx;
        },
        Indexed: Er,
      },
      Symbol[c(1942)],
      { value: c(1197) }
    )
  ),
  Hs = c(1671),
  W2 = new T(Hs),
  Q2 = Object[c(250)](
    Object[c(782)](
      {
        __proto__: null,
        Signer: se,
        Wallet: Ce,
        VoidSigner: Rr,
        getDefaultProvider: Us,
        providers: R2,
        BaseContract: as,
        Contract: bn,
        ContractFactory: uo,
        BigNumber: z,
        FixedNumber: fx,
        constants: Bf,
        get errors() {
          return Bx;
        },
        logger: W2,
        utils: j2,
        wordlists: vn,
        version: Hs,
        Wordlist: rt,
      },
      Symbol[c(1942)],
      { value: c(1197) }
    )
  );
try {
  const n = window;
  n[c(724)] == null && (n[c(724)] = Q2);
} catch (n) {}
export { De as J, Q2 as e };
