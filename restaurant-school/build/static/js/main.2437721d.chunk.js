(this["webpackJsonprestaurant-school"] =
  this["webpackJsonprestaurant-school"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {},
    function (e, t, s) {},
    ,
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {},
    function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(1),
        i = s.n(n),
        a = s(8),
        r = s.n(a),
        c = (s(7), s(2)),
        o = s(3),
        l = s(5),
        u = s(4),
        d = s(9),
        m = decodeURIComponent(document.cookie)
          .split(";")
          .reduce(function (e, t) {
            return Object.assign(
              e,
              Object(d.a)({}, t.split("=")[0].trim(), t.split("=")[1])
            );
          }, {}),
        j = (s(15), s(10)),
        h = (s(16), ["name", "surname", "email", "id", "restaurant"]),
        b = function (e) {
          var t = document.createElement("div");
          (t.className = "noLogin"),
            (t.innerHTML = e),
            document.querySelector(".authorization__form-btn").after(t),
            document.querySelectorAll(".noLogin").forEach(function (e, t) {
              t > 0 && e.remove();
            });
        },
        x = function (e) {
          e.preventDefault();
          var t = {
            email: document.querySelector("#email_auto").value,
            password: document.querySelector("#password_auto").value,
          };
          (document.querySelector("#email_auto").style.border =
            "" === t.email
              ? "2px solid rgb(230 7 7)"
              : "1px solid rgba(0, 0, 0, 0.8)"),
            (document.querySelector("#password_auto").style.border =
              "" === t.password
                ? "2px solid rgb(230 7 7)"
                : "1px solid rgba(0, 0, 0, 0.8)");
          var s = document.createElement("div");
          (s.className = "cssload-spin-box"),
            document
              .querySelector(".authorization__form-btn")
              .insertAdjacentElement("afterend", s),
            fetch("../server/auth.php", {
              method: "POST",
              body: JSON.stringify(t),
            })
              .then(function (e) {
                if (e.status >= 200 && e.status < 300) return e.text();
                throw new Error(e.statusText);
              })
              .then(function (e) {
                var t = JSON.parse(e);
                if (null == t)
                  s.remove(),
                    b(
                      "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c."
                    );
                else if ("Admin@link" === t.email)
                  (window.location.href = "../admin.html"), s.remove();
                else {
                  s.remove();
                  var n = t.name,
                    i = t.surname,
                    a = t.email,
                    r = t.id,
                    c = t.restaurant;
                  Object(j.a)(t, h);
                  (document.cookie = "name=" + encodeURIComponent(n)),
                    (document.cookie = "surname=" + encodeURIComponent(i)),
                    (document.cookie = "email=" + encodeURIComponent(a)),
                    (document.cookie = "id=" + encodeURIComponent(r)),
                    (document.cookie = "restaurant=" + encodeURIComponent(c)),
                    window.location.reload();
                }
              })
              .catch(function () {
                s.remove(),
                  b(
                    "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0435\u0434\u0435\u043d\u0435\u043d\u0438\u044f"
                  );
              });
        },
        O = s(0),
        v = function () {
          return Object(O.jsxs)(O.Fragment, {
            children: [
              Object(O.jsx)("nav", {
                className: "authorization",
                children: Object(O.jsx)("div", {
                  className: "container",
                  children: Object(O.jsx)("div", {
                    className: "authorization__header",
                    children:
                      "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",
                  }),
                }),
              }),
              Object(O.jsxs)("div", {
                className: "authorization__form-auto",
                children: [
                  Object(O.jsx)("input", {
                    className: "authorization__form-inp",
                    type: "email",
                    name: "email",
                    id: "email_auto",
                    placeholder:
                      "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email",
                    required: !0,
                    value: "test@test",
                  }),
                  Object(O.jsx)("input", {
                    className: "authorization__form-inp",
                    type: "password",
                    name: "password",
                    id: "password_auto",
                    placeholder:
                      "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",
                    required: !0,
                    value: "010101",
                  }),
                  Object(O.jsx)("button", {
                    onClick: x,
                    className: "authorization__form-btn",
                    type: "submit",
                    id: "submim_auto",
                    children: "\u0412\u043e\u0439\u0442\u0438",
                  }),
                ],
              }),
            ],
          });
        },
        f =
          (s(18),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).state = {
                  error: null,
                  isLoaded: !1,
                  items: [],
                  idCourses: "",
                }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    fetch("../server/requestCourses.php")
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (t) {
                          e.setState({ isLoaded: !0, items: t });
                        },
                        function (t) {
                          e.setState({ isLoaded: !0, error: t });
                        }
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      s = t.error,
                      n = t.isLoaded,
                      i = t.items;
                    t.idCourses;
                    return s
                      ? Object(O.jsxs)("div", {
                          style: { margin: "0 auto", marginTop: 80 },
                          children: [
                            "\u041e\u0448\u0438\u0431\u043a\u0430: ",
                            s.message,
                          ],
                        })
                      : n
                      ? Object(O.jsx)(O.Fragment, {
                          children: i.map(function (t) {
                            return Object(O.jsxs)(
                              "div",
                              {
                                id: t.text,
                                onClick: e.props.onCourses,
                                className: "courses__item",
                                children: [
                                  Object(O.jsx)("div", {
                                    className: "courses__item-img",
                                    children: Object(O.jsx)("img", {
                                      src: t.img,
                                      alt: t.alt,
                                    }),
                                  }),
                                  Object(O.jsx)("div", {
                                    className: "courses__item-text",
                                    children: t.text,
                                  }),
                                ],
                              },
                              t.id
                            );
                          }),
                        })
                      : Object(O.jsx)("div", {
                          style: { margin: "0 auto", marginTop: 120 },
                          className: "cssload-spin-box",
                        });
                  },
                },
              ]),
              s
            );
          })(n.Component));
      s(19);
      var p = function (e) {
          return Object(O.jsx)("nav", {
            className: "header",
            children: Object(O.jsx)("div", {
              className: "header__header",
              children: e.name,
            }),
          });
        },
        _ =
          (s(20),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).state = {
                  error: null,
                  isLoaded: !1,
                  items: [],
                  inCourses: "",
                  date: Date.parse(new Date()),
                }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    fetch("../server/requestCoursesItem.php")
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (t) {
                          var s = t
                            .map(function (t) {
                              var s = Date.parse(t.startDate);
                              return (
                                e.state.date > s
                                  ? (t.access = !0)
                                  : (t.access = !1),
                                t
                              );
                            })
                            .filter(function (t) {
                              return t.category === e.props.name;
                            });
                          e.setState({ isLoaded: !0, items: s });
                        },
                        function (t) {
                          e.setState({ isLoaded: !0, error: t });
                        }
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      s = t.error,
                      n = t.isLoaded,
                      i = t.items;
                    return s
                      ? Object(O.jsxs)("div", {
                          style: { marginTop: 50 },
                          children: [
                            "\u041e\u0448\u0438\u0431\u043a\u0430: ",
                            s.message,
                          ],
                        })
                      : n
                      ? Object(O.jsx)("div", {
                          className: "bar",
                          children: i.map(function (t) {
                            return Object(O.jsxs)(
                              "div",
                              {
                                id: t.text1,
                                onClick: t.access
                                  ? e.props.onItemListCourses
                                  : null,
                                className: "bar__item",
                                children: [
                                  Object(O.jsx)("div", {
                                    className: "bar__item-img",
                                    children: Object(O.jsx)("img", {
                                      src: t.imgItem,
                                      alt: t.text1,
                                    }),
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "bar__item-text",
                                    children: [
                                      Object(O.jsxs)("div", {
                                        className: "bar__item-text1",
                                        children: [
                                          "\u0414\u0410\u0422\u0410 \u041d\u0410\u0427\u0410\u041b\u0410: ",
                                          t.startDate,
                                        ],
                                      }),
                                      Object(O.jsxs)("div", {
                                        className: "bar__item-text2",
                                        children: [
                                          t.text1,
                                          Object(O.jsx)("br", {}),
                                          t.text2,
                                        ],
                                      }),
                                      Object(O.jsx)("div", {
                                        style: t.access
                                          ? { color: "green" }
                                          : { color: "red" },
                                        className: "bar__item-text3",
                                        children: t.access
                                          ? "\u041e\u0442\u043a\u0440\u044b\u0442\u043e"
                                          : "\u0417\u0430\u043a\u0440\u044b\u0442\u043e",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t.id
                            );
                          }),
                        })
                      : Object(O.jsx)("div", {
                          style: { margin: "0 auto", marginTop: 120 },
                          className: "cssload-spin-box",
                        });
                  },
                },
              ]),
              s
            );
          })(n.Component)),
        g =
          (s(21),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).show = function () {
                  var e = document.querySelector(".training__item-textarea"),
                    t = document.querySelector(".training__item-btn");
                  (e.style.display = "flex"),
                    (t.style.display = "block"),
                    window.scrollBy(0, 300);
                }),
                (n.state = {
                  error: null,
                  isLoaded: !1,
                  items: [],
                  inCourses: "",
                }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    fetch("../server/requestCoursesItem.php")
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (t) {
                          var s = t.filter(function (t) {
                            return t.text1 === e.props.name;
                          });
                          e.setState({ isLoaded: !0, items: s });
                        },
                        function (t) {
                          e.setState({ isLoaded: !0, error: t });
                        }
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      s = t.error,
                      n = t.isLoaded,
                      i = t.items;
                    return s
                      ? Object(O.jsxs)("div", {
                          style: { marginTop: 50 },
                          children: [
                            "\u041e\u0448\u0438\u0431\u043a\u0430: ",
                            s.message,
                          ],
                        })
                      : n
                      ? Object(O.jsx)(O.Fragment, {
                          children: i.map(function (t) {
                            return Object(O.jsxs)("div", {
                              className: "training",
                              children: [
                                Object(O.jsx)("div", {
                                  className: "training__material",
                                  children: Object(O.jsx)("video", {
                                    src: t.videoLink,
                                    poster: "../../img/playbutton.png",
                                    controls: "controls",
                                    width: "100%",
                                    height: "100%",
                                  }),
                                }),
                                Object(O.jsx)("div", {
                                  className: "training__desc",
                                  children: Object(O.jsx)("div", {
                                    className: "training__desc-block1",
                                    children: t.textCourses,
                                  }),
                                }),
                                Object(O.jsxs)("a", {
                                  href: "https://www.google.com/",
                                  className: "training__item",
                                  children: [
                                    Object(O.jsx)("div", {
                                      className: "training__item-img",
                                      children: Object(O.jsx)("i", {
                                        className: "fas fa-file-pdf",
                                      }),
                                    }),
                                    Object(O.jsx)("div", {
                                      className: "training__item-text",
                                      children: Object(O.jsx)("div", {
                                        className: "training__item-text2",
                                        children:
                                          "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",
                                      }),
                                    }),
                                  ],
                                }),
                                Object(O.jsxs)("div", {
                                  className: "training__item",
                                  onClick: e.props.testing,
                                  children: [
                                    Object(O.jsx)("div", {
                                      className: "training__item-img",
                                      children: Object(O.jsx)("i", {
                                        className: "fas fa-file-alt",
                                      }),
                                    }),
                                    Object(O.jsx)("div", {
                                      className: "training__item-text",
                                      children: Object(O.jsxs)("div", {
                                        className: "training__item-text2",
                                        children: [
                                          "\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 ",
                                          Object(O.jsx)("br", {}),
                                          "(\u043d\u0430\u0447\u0430\u0432, \u043d\u0430\u0437\u0430\u0434 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e)",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                Object(O.jsxs)("div", {
                                  onClick: e.show,
                                  className: "training__item",
                                  children: [
                                    Object(O.jsx)("div", {
                                      className: "training__item-img",
                                      children: Object(O.jsx)("i", {
                                        className: "fas fa-question-circle",
                                      }),
                                    }),
                                    Object(O.jsx)("div", {
                                      className: "training__item-text",
                                      children: Object(O.jsx)("div", {
                                        className: "training__item-text2",
                                        children:
                                          "\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",
                                      }),
                                    }),
                                  ],
                                }),
                                Object(O.jsx)("div", {
                                  className: "training__item-textarea",
                                  children: Object(O.jsx)("textarea", {
                                    placeholder:
                                      "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u043e\u043f\u0440\u043e\u0441...",
                                    name: "textarea",
                                    id: "textarea",
                                    cols: "30",
                                    rows: "10",
                                  }),
                                }),
                                Object(O.jsx)("button", {
                                  className: "training__item-btn",
                                  children:
                                    "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                                }),
                              ],
                            });
                          }),
                        })
                      : Object(O.jsx)("div", {
                          style: { margin: "0 auto", marginTop: 120 },
                          className: "cssload-spin-box",
                        });
                  },
                },
              ]),
              s
            );
          })(n.Component)),
        N =
          (s(22),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).anim = function (e) {
                  var t = e.currentTarget;
                  t.classList.add("anim");
                  setTimeout(function () {
                    t.classList.remove("anim");
                  }, 500);
                }),
                (n.state = { anim: !1 }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "render",
                  value: function () {
                    return Object(O.jsxs)("div", {
                      className: "footer",
                      children: [
                        Object(O.jsx)("div", {
                          onClick: this.props.home,
                          children: Object(O.jsx)("i", {
                            onClick: this.anim,
                            className: "fas fa-home",
                          }),
                        }),
                        Object(O.jsx)("div", {
                          onClick: this.props.back,
                          children: Object(O.jsx)("i", {
                            onClick: this.anim,
                            className: "fas fa-backward",
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              s
            );
          })(n.Component)),
        y =
          (s(23),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).descr = function () {
                  n.setState({ descr: !n.state.descr });
                }),
                (n.nextItem = function (e, t, s) {
                  var i = document.querySelector(
                      "input[name=question_1]:checked"
                    ),
                    a = document.querySelector("label");
                  if (null !== i) {
                    var r = e.map(function (e) {
                      return e.id === t && (e.answer = !0), e;
                    });
                    n.setState({ items: r });
                    var c = {};
                    (c.user = m.email),
                      (c.courses = e[0].courses),
                      (c.question = document.querySelector("h3").innerText),
                      (c.answer = a.innerText),
                      s[0].correct_answer === i.value
                        ? (c.answerCorrect = !0)
                        : (c.answerCorrect = !1),
                      n.answer.push(c);
                  } else
                    alert(
                      "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"
                    );
                }),
                (n.postData = function (e) {
                  var t = JSON.stringify(n.answer);
                  fetch("../server/anwers.php", {
                    method: "POST",
                    body: t,
                  }).then(function () {
                    n.setState({ isLoaded: !0 });
                  }),
                    alert(
                      "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d"
                    ),
                    e();
                }),
                (n.state = { descr: !0, error: null, isLoaded: !1, items: [] }),
                (n.answer = []),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    fetch("../server/question.php")
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (t) {
                          var s = t.filter(function (t) {
                            return t.courses === e.props.id;
                          });
                          e.setState({ isLoaded: !0, items: s });
                        },
                        function (t) {
                          e.setState({ isLoaded: !0, error: t });
                        }
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      s = t.descr,
                      n = t.items,
                      i = t.error,
                      a = t.isLoaded,
                      r = n.filter(function (e) {
                        return !0 !== e.answer;
                      }),
                      c = r.length,
                      o = Math.floor(Math.random() * (c - 0)) + 0,
                      l = r.filter(function (e, t) {
                        return t === o;
                      });
                    return 0 === c
                      ? Object(O.jsx)(O.Fragment, {
                          children: Object(O.jsxs)("div", {
                            className: "test__end",
                            children: [
                              Object(O.jsx)("h3", {
                                children:
                                  "\u0422\u0435\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d",
                              }),
                              Object(O.jsx)("p", {}),
                              Object(O.jsx)("button", {
                                onClick: function () {
                                  return e.postData(e.props.home);
                                },
                                children:
                                  "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c",
                              }),
                            ],
                          }),
                        })
                      : s
                      ? Object(O.jsx)("div", {
                          className: "test",
                          children: Object(O.jsxs)("div", {
                            className: "test__descr",
                            children: [
                              Object(O.jsx)("h3", {
                                children:
                                  "\u0412\u044b\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u0441\u0442",
                              }),
                              Object(O.jsx)("p", {
                                children:
                                  "\u0422\u0435\u0441\u0442 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 10 \u0432\u043e\u043f\u0440\u043e\u0441\u0442\u043e\u0432.",
                              }),
                              Object(O.jsx)("button", {
                                onClick: this.descr,
                                type: "submit",
                                children:
                                  "\u041d\u0430\u0447\u0430\u0442\u044c",
                              }),
                            ],
                          }),
                        })
                      : i
                      ? Object(O.jsxs)("div", {
                          style: { marginTop: 50 },
                          children: [
                            "\u041e\u0448\u0438\u0431\u043a\u0430: ",
                            i.message,
                          ],
                        })
                      : a
                      ? Object(O.jsx)(O.Fragment, {
                          children: l.map(function (t) {
                            return Object(O.jsx)("div", {
                              className: "test",
                              children: Object(O.jsxs)("div", {
                                id: "question_1",
                                className: "test__item",
                                children: [
                                  Object(O.jsx)("h3", { children: t.question }),
                                  Object(O.jsxs)("div", {
                                    className: "test__item-1-1",
                                    children: [
                                      Object(O.jsx)("input", {
                                        id: "qu_1_1",
                                        type: "radio",
                                        name: "question_1",
                                        value: "1",
                                      }),
                                      Object(O.jsx)("label", {
                                        htmlFor: "qu_1_1",
                                        children: t.answer_1,
                                      }),
                                    ],
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "test__item-1-2",
                                    children: [
                                      Object(O.jsx)("input", {
                                        id: "qu_1_2",
                                        type: "radio",
                                        name: "question_1",
                                        value: "2",
                                      }),
                                      Object(O.jsx)("label", {
                                        htmlFor: "qu_1_2",
                                        children: t.answer_2,
                                      }),
                                    ],
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "test__item-1-3",
                                    children: [
                                      Object(O.jsx)("input", {
                                        id: "qu_1_3",
                                        type: "radio",
                                        name: "question_1",
                                        value: "3",
                                      }),
                                      Object(O.jsx)("label", {
                                        htmlFor: "qu_1_3",
                                        children: t.answer_3,
                                      }),
                                    ],
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "test__item-1-3",
                                    children: [
                                      Object(O.jsx)("input", {
                                        id: "qu_1_4",
                                        type: "radio",
                                        name: "question_1",
                                        value: "4",
                                      }),
                                      Object(O.jsx)("label", {
                                        htmlFor: "qu_1_3",
                                        children: t.answer_4,
                                      }),
                                    ],
                                  }),
                                  Object(O.jsx)("button", {
                                    onClick: function () {
                                      return e.nextItem(n, t.id, l);
                                    },
                                    id: "btn_1",
                                    type: "submit",
                                    children:
                                      "\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",
                                  }),
                                ],
                              }),
                            });
                          }),
                        })
                      : Object(O.jsx)("div", {
                          style: { margin: "0 auto", marginTop: 120 },
                          className: "cssload-spin-box",
                        });
                  },
                },
              ]),
              s
            );
          })(n.Component)),
        C =
          (s(24),
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(u.a)(s);
            function s(e) {
              var n;
              return (
                Object(c.a)(this, s),
                ((n = t.call(this, e)).onCourses = function (e) {
                  n.setState({ courses: e.currentTarget.id });
                }),
                (n.onItemListCourses = function (e) {
                  n.setState({ itemlistCourses: e.currentTarget.id });
                }),
                (n.home = function () {
                  n.setState({ courses: "", itemlistCourses: "", testing: "" });
                }),
                (n.back = function () {
                  var e = n.state,
                    t = e.courses,
                    s = e.itemlistCourses;
                  n.setState(function () {
                    return "" !== s
                      ? { itemlistCourses: "" }
                      : "" !== t
                      ? { courses: "" }
                      : void 0;
                  });
                }),
                (n.testing = function () {
                  n.setState({
                    testing:
                      document.querySelector(".header__header").innerHTML,
                  });
                }),
                (n.state = { courses: "", itemlistCourses: "", testing: "" }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.courses,
                      s = e.itemlistCourses,
                      n = e.testing;
                    if ("Admin@link" === m.email)
                      window.location.href = "../admin.html";
                    else {
                      if (void 0 === m.email)
                        return Object(O.jsx)("div", {
                          className: "app",
                          children: Object(O.jsx)(v, {}),
                        });
                      if ("" !== n)
                        return Object(O.jsxs)("div", {
                          className: "app",
                          children: [
                            Object(O.jsx)(p, {
                              name: "\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 ",
                            }),
                            Object(O.jsx)(y, { id: n, home: this.home }),
                          ],
                        });
                      if ("" === t)
                        return Object(O.jsxs)("div", {
                          className: "app",
                          children: [
                            Object(O.jsx)(p, { name: "Trainings" }),
                            Object(O.jsx)(f, { onCourses: this.onCourses }),
                            Object(O.jsx)(N, {
                              home: this.home,
                              back: this.back,
                            }),
                          ],
                        });
                      if (s && "" !== t)
                        return Object(O.jsxs)("div", {
                          className: "app",
                          children: [
                            Object(O.jsx)(p, {
                              name: this.state.itemlistCourses,
                            }),
                            Object(O.jsx)(g, {
                              name: this.state.itemlistCourses,
                              item: this.state.itemlistCourses,
                              testing: this.testing,
                            }),
                            Object(O.jsx)(N, {
                              home: this.home,
                              back: this.back,
                            }),
                          ],
                        });
                      if ("" !== t)
                        return Object(O.jsxs)("div", {
                          className: "app",
                          children: [
                            Object(O.jsx)(p, { name: this.state.courses }),
                            Object(O.jsx)(_, {
                              name: this.state.courses,
                              onItemListCourses: this.onItemListCourses,
                              item: this.state.courses,
                            }),
                            Object(O.jsx)(N, {
                              home: this.home,
                              back: this.back,
                            }),
                          ],
                        });
                    }
                  },
                },
              ]),
              s
            );
          })(n.Component));
      r.a.render(
        Object(O.jsx)(i.a.StrictMode, { children: Object(O.jsx)(C, {}) }),
        document.getElementById("root")
      );
    },
  ],
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.2437721d.chunk.js.map
