(this.webpackJsonpemployers = this.webpackJsonpemployers || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        s = a(9),
        c = a.n(s),
        i = (a(16), a(2)),
        o = a(7),
        l = a(10),
        u = a(3),
        d = a(4),
        j = a(6),
        b = a(5),
        m = (a(17), a(0)),
        f = function (e) {
          return Object(m.jsxs)("div", {
            className: "app-info",
            children: [
              Object(m.jsx)("h1", {
                children:
                  "\u0423\u0447\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 N",
              }),
              Object(m.jsxs)("h2", {
                children: [
                  "\u041e\u0431\u0449\u0438\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",
                  e.count,
                ],
              }),
              Object(m.jsxs)("h2", {
                children: [
                  "\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",
                  e.increased,
                ],
              }),
            ],
          });
        },
        h =
          (a(19),
          (function (e) {
            Object(j.a)(a, e);
            var t = Object(b.a)(a);
            function a(e) {
              var n;
              return (
                Object(u.a)(this, a),
                ((n = t.call(this, e)).onUpdataSearch = function (e) {
                  var t = e.target.value;
                  n.setState({ term: t }),
                    n.props.onUpdataSearch(t.toLowerCase());
                }),
                (n.state = { term: "" }),
                n
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(m.jsx)("input", {
                      type: "text",
                      className: "form-control search-input",
                      placeholder:
                        "\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",
                      value: this.state.term,
                      onChange: this.onUpdataSearch,
                    });
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        p =
          (a(20),
          function (e) {
            var t = [
              {
                name: "all",
                label:
                  "\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438",
              },
              {
                name: "rise",
                label:
                  "\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435",
              },
              {
                name: "moreThen1000",
                label:
                  "\u0417/\u041f \u0431\u043e\u043b\u044c\u0448\u0435 1000$",
              },
            ].map(function (t) {
              var a = t.name,
                n = t.label,
                r = e.filter === a ? "btn-light" : "btn-outline-light";
              return Object(m.jsx)(
                "button",
                {
                  className: "btn ".concat(r),
                  type: "button",
                  onClick: function () {
                    return e.onFilterSelect(a);
                  },
                  children: n,
                },
                a
              );
            });
            return Object(m.jsx)("div", {
              className: "btn-group",
              children: t,
            });
          }),
        O = a(11),
        x =
          (a(21),
          function (e) {
            var t = e.name,
              a = e.salary,
              n = e.onDelete,
              r = e.onToggleProp,
              s = "list-group-item d-flex justify-content-between";
            return (
              e.increase && (s += " increase"),
              e.rise && (s += " like"),
              Object(m.jsxs)("li", {
                className: s,
                children: [
                  Object(m.jsx)("span", {
                    onClick: r,
                    className: "list-group-item-label",
                    "data-prop": "rise",
                    children: t,
                  }),
                  Object(m.jsx)("input", {
                    type: "text",
                    className: "list-group-item-input",
                    defaultValue: a + "$",
                  }),
                  Object(m.jsxs)("div", {
                    className:
                      "d-flex justify-content-center align-items-center",
                    children: [
                      Object(m.jsx)("button", {
                        type: "button",
                        "data-prop": "increase",
                        onClick: r,
                        className: "btn-cookie btn-sm ",
                        children: Object(m.jsx)("i", {
                          className: "fas fa-cookie",
                        }),
                      }),
                      Object(m.jsx)("button", {
                        type: "button",
                        className: "btn-trash btn-sm ",
                        onClick: n,
                        children: Object(m.jsx)("i", {
                          className: "fas fa-trash",
                        }),
                      }),
                      Object(m.jsx)("i", { className: "fas fa-star" }),
                    ],
                  }),
                ],
              })
            );
          }),
        g = (a(22), ["id"]),
        v = function (e) {
          var t = e.data,
            a = e.onDelete,
            n = e.onToggleProp,
            r = t.map(function (e) {
              var t = e.id,
                r = Object(O.a)(e, g);
              return Object(m.jsx)(
                x,
                Object(o.a)(
                  Object(o.a)({}, r),
                  {},
                  {
                    onDelete: function () {
                      return a(t);
                    },
                    onToggleProp: function (e) {
                      return n(t, e.currentTarget.getAttribute("data-prop"));
                    },
                  }
                ),
                t
              );
            });
          return Object(m.jsx)("ul", {
            className: "app-list list-group",
            children: r,
          });
        },
        y =
          (a(23),
          (function (e) {
            Object(j.a)(a, e);
            var t = Object(b.a)(a);
            function a(e) {
              var n;
              return (
                Object(u.a)(this, a),
                ((n = t.call(this, e)).onValueChange = function (e) {
                  n.setState(Object(i.a)({}, e.target.name, e.target.value));
                }),
                (n.onSubmit = function (e) {
                  e.preventDefault();
                  var t = n.state,
                    a = t.name,
                    r = t.salary;
                  a && "" !== r && n.props.onAdd(a, r),
                    n.setState({ name: "", salary: "" });
                }),
                (n.state = { name: "", salary: "" }),
                n
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.name,
                      a = e.salary;
                    return Object(m.jsxs)("div", {
                      className: "app-add-form",
                      children: [
                        Object(m.jsx)("h3", {
                          children:
                            "\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",
                        }),
                        Object(m.jsxs)("form", {
                          onSubmit: this.onSubmit,
                          className: "add-form d-flex",
                          children: [
                            Object(m.jsx)("input", {
                              type: "text",
                              className: "form-control new-post-label",
                              placeholder:
                                "\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442?",
                              name: "name",
                              value: t,
                              onChange: this.onValueChange,
                            }),
                            Object(m.jsx)("input", {
                              type: "number",
                              className: "form-control new-post-label",
                              placeholder: "\u0417/\u041f \u0432 $?",
                              name: "salary",
                              value: a,
                              onChange: this.onValueChange,
                            }),
                            Object(m.jsx)("button", {
                              type: "submit",
                              className: "btn btn-outline-light",
                              children:
                                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        S =
          (a(24),
          (function (e) {
            Object(j.a)(a, e);
            var t = Object(b.a)(a);
            function a(e) {
              var n;
              return (
                Object(u.a)(this, a),
                ((n = t.call(this, e)).deleteItem = function (e) {
                  var t = n.state.data;
                  n.setState({
                    data: t.filter(function (t) {
                      return t.id !== e;
                    }),
                  });
                }),
                (n.addItem = function (e, t) {
                  var a = {
                    name: e,
                    salary: t,
                    id: n.maxId++,
                    increase: !1,
                    rise: !1,
                  };
                  n.setState(function (e) {
                    var t = e.data;
                    return { data: [].concat(Object(l.a)(t), [a]) };
                  });
                }),
                (n.onToggleProp = function (e, t) {
                  n.setState(function (a) {
                    return {
                      data: a.data.map(function (a) {
                        return a.id === e
                          ? Object(o.a)(
                              Object(o.a)({}, a),
                              {},
                              Object(i.a)({}, t, !a[t])
                            )
                          : a;
                      }),
                    };
                  });
                }),
                (n.searchEmp = function (e, t) {
                  return 0 === t.length
                    ? e
                    : e.filter(function (e) {
                        return e.name.toLowerCase().indexOf(t) > -1;
                      });
                }),
                (n.onUpdataSearch = function (e) {
                  n.setState({ term: e });
                }),
                (n.filterPost = function (e, t) {
                  switch (t) {
                    case "rise":
                      return e.filter(function (e) {
                        return e.rise;
                      });
                    case "moreThen1000":
                      return e.filter(function (e) {
                        return e.salary > 1e3;
                      });
                    default:
                      return e;
                  }
                }),
                (n.onFilterSelect = function (e) {
                  n.setState({ filter: e });
                }),
                (n.state = {
                  data: [
                    { name: "Max", salary: 3e3, id: 1, increase: !1, rise: !1 },
                    {
                      name: "Alex",
                      salary: 800,
                      id: 2,
                      increase: !1,
                      rise: !1,
                    },
                    {
                      name: "Sasha",
                      salary: 1200,
                      id: 3,
                      increase: !1,
                      rise: !1,
                    },
                  ],
                  filter: "all",
                  term: "",
                }),
                (n.maxId = 4),
                n
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.data,
                      a = e.term,
                      n = e.filter,
                      r = this.state.data.length,
                      s = this.state.data.filter(function (e) {
                        return e.increase;
                      }).length,
                      c = this.filterPost(this.searchEmp(t, a), n);
                    return Object(m.jsxs)("div", {
                      className: "app",
                      children: [
                        Object(m.jsx)(f, { count: r, increased: s }),
                        Object(m.jsxs)("div", {
                          className: "search-panel",
                          children: [
                            Object(m.jsx)(h, {
                              onUpdataSearch: this.onUpdataSearch,
                            }),
                            Object(m.jsx)(p, {
                              filter: n,
                              onFilterSelect: this.onFilterSelect,
                            }),
                          ],
                        }),
                        Object(m.jsx)(v, {
                          data: c,
                          onDelete: this.deleteItem,
                          onToggleProp: this.onToggleProp,
                        }),
                        Object(m.jsx)(y, { onAdd: this.addItem }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(n.Component));
      c.a.render(
        Object(m.jsx)(r.a.StrictMode, { children: Object(m.jsx)(S, {}) }),
        document.getElementById("root")
      );
    },
  ],
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.f05c6a51.chunk.js.map
