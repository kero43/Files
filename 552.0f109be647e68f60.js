"use strict";
(self.webpackChunkvisasys_frontoffice = self.webpackChunkvisasys_frontoffice || []).push([[552], {
    3696: (u,g,_)=>{
        _.d(g, {
            OH: ()=>d
        });
        var d = (()=>{
            return (r = d || (d = {})).MASTERCARD = "MASTERCARD",
            r.APS = "APS",
            r.PAYPAL = "PAYPAL",
            d;
            var r
        }
        )()
    }
    ,
    2552: (u,g,_)=>{
        _.r(g),
        _.d(g, {
            AppointmentModule: ()=>w
        });
        var f = _(2138)
          , c = _(6895)
          , d = _(529)
          , l = _(4006)
          , r = _(9066)
          , A = _(5119)
          , I = _(3275)
          , K = _(2112)
          , M = _(3430)
          , R = _(9116)
          , T = _(590)
          , D = _(8505)
          , v = _(262)
          , F = _(2843)
          , W = _(5237)
          , L = _(7902)
          , O = _(5962)
          , E = _(3071)
          , e = _(4650)
          , x = _(9653)
          , Ie = _(457)
          , Re = _(4004)
          , Le = _(8094)
          , be = _(7937)
          , le = _(4523)
          , ye = _(3222);
        class b extends be.b {
            constructor(n, t, o, a, s) {
                super(n, t, o, a),
                this.http = s
            }
            completePayment(n) {
                const [t,o] = this.getReservationManagerUrl(`/api/visa-applications/v1/${n}/complete-payment`);
                return (0,
                Ie.D)(this.api.post(t, {})).pipe((0,
                Re.U)(a=>JSON.parse(JSON.stringify({
                    data: a
                }))))
            }
            getReservationManagerUrl(n) {
                return [this.buidReservationManagerUrl(n), (0,
                Le.m6)()]
            }
            checkCanCreateAppointment() {
                const n = this.buidReservationManagerUrl("/api/visa-applications/v1/check-can-create");
                return this.http.get(n)
            }
        }
        b.\u0275fac = function(n) {
            return new (n || b)(e.LFG(le.e),e.LFG(ye.o),e.LFG(x.yh),e.LFG(d.jN),e.LFG(d.eN))
        }
        ,
        b.\u0275prov = e.Yz7({
            token: b,
            factory: b.\u0275fac,
            providedIn: "root"
        });
        var S = _(9830)
          , Se = _(5073)
          , y = _(7392)
          , ue = _(8425)
          , qe = _(5439)
          , Be = _.n(qe)
          , U = _(9646)
          , Ne = _(5577)
          , he = _(4128)
          , q = (()=>{
            return (i = q || (q = {})).it = "it-IT",
            i.en = "en-GB",
            i.ar = "ar-AR",
            q;
            var i
        }
        )()
          , k = _(71)
          , Y = _(3238)
          , J = _(2359)
          , Ae = _(4700);
        const ve = function(i) {
            return {
                invisible: i
            }
        };
        class Q {
            constructor() {
                this.value = 1,
                this.min = 0,
                this.max = 32e3,
                this.onValueIncreased = new e.vpe,
                this.onValueDecreased = new e.vpe,
                this.valueChange = new e.vpe
            }
            decrement() {
                this.value > this.min && this.value--,
                this.onValueDecreased.emit(this.value),
                this.valueChange.emit(this.value)
            }
            increment() {
                this.value < this.max && this.value++,
                this.onValueIncreased.emit(this.value),
                this.valueChange.emit(this.value)
            }
        }
        function we(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 2),
                e.NdJ("click", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.hide(a))
                }),
                e.qZA()
            }
        }
        function Ke(i, n) {
            1 & i && (e.TgZ(0, "div"),
            e.O4$(),
            e.TgZ(1, "svg", 10),
            e._UZ(2, "path", 11),
            e.qZA()())
        }
        function Fe(i, n) {
            1 & i && (e.TgZ(0, "div"),
            e.O4$(),
            e.TgZ(1, "svg", 12),
            e._UZ(2, "path", 13),
            e.qZA()())
        }
        function We(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 3),
                e.YNc(1, Ke, 3, 0, "div", 4),
                e.YNc(2, Fe, 3, 0, "div", 4),
                e.TgZ(3, "div", 5),
                e._UZ(4, "p", 6),
                e.TgZ(5, "p", 7),
                e._uU(6),
                e.qZA()(),
                e.TgZ(7, "div", 8),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.getAppointment())
                }),
                e.TgZ(8, "button", 9),
                e._uU(9),
                e.qZA()()()
            }
            if (2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("ngIf", t.positive),
                e.xp6(1),
                e.Q6J("ngIf", !t.positive),
                e.xp6(2),
                e.Q6J("innerHTML", t.title, e.oJD),
                e.xp6(2),
                e.Oqu(t.description),
                e.xp6(3),
                e.Oqu(t.btnText)
            }
        }
        Q.\u0275fac = function(n) {
            return new (n || Q)
        }
        ,
        Q.\u0275cmp = e.Xpm({
            type: Q,
            selectors: [["app-visasys-incrementer"]],
            inputs: {
                value: "value",
                min: "min",
                max: "max"
            },
            outputs: {
                onValueIncreased: "onValueIncreased",
                onValueDecreased: "onValueDecreased",
                valueChange: "valueChange"
            },
            decls: 9,
            vars: 7,
            consts: [[1, "flex", "flex-row", "gap-1", "justify-center", "items-center", "w-full"], [1, "mt-1", "p-0", 3, "ngClass"], [1, "material-symbols-rounded", "text-visa-primary-500", "text-md", 3, "click"], [1, "bg-visa-primary-50", "px-8", "py-2", "text-black", "rounded-md"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0)(1, "button", 1)(2, "span", 2),
                e.NdJ("click", function() {
                    return t.decrement()
                }),
                e._uU(3, " do_not_disturb_on "),
                e.qZA()(),
                e.TgZ(4, "span", 3),
                e._uU(5),
                e.qZA(),
                e.TgZ(6, "button", 1)(7, "span", 2),
                e.NdJ("click", function() {
                    return t.increment()
                }),
                e._uU(8, " add_circle "),
                e.qZA()()()),
                2 & n && (e.xp6(1),
                e.Q6J("ngClass", e.VKq(3, ve, t.value <= t.min)),
                e.xp6(4),
                e.hij(" ", t.value, " "),
                e.xp6(1),
                e.Q6J("ngClass", e.VKq(5, ve, t.value >= t.max)))
            },
            dependencies: [c.mk]
        });
        class V {
            constructor() {
                this.title = "Abbiamo disponibilit&agrave; di appuntamenti",
                this.description = "Procedi nell'inserimento dei dati di ogni richiedente in modo che riuscirai ad avere i visti entro la data del tuo viaggio",
                this.btnText = "Procedi con l'appunamento",
                this.positive = !0,
                this.displayed = !1,
                this.getAppointments = new e.vpe
            }
            hide(n) {
                n.preventDefault(),
                n.stopImmediatePropagation(),
                this.displayed = !1,
                this.getAppointments.emit(!1)
            }
            getAppointment() {
                this.getAppointments.emit(!0)
            }
        }
        V.\u0275fac = function(n) {
            return new (n || V)
        }
        ,
        V.\u0275cmp = e.Xpm({
            type: V,
            selectors: [["app-visasys-allert-card"]],
            inputs: {
                title: "title",
                description: "description",
                btnText: "btnText",
                positive: "positive",
                displayed: "displayed"
            },
            outputs: {
                getAppointments: "getAppointments"
            },
            decls: 2,
            vars: 2,
            consts: [["class", "background", 3, "click", 4, "ngIf"], ["class", "allert-card", 4, "ngIf"], [1, "background", 3, "click"], [1, "allert-card"], [4, "ngIf"], [1, "flex", "flex-col", "gap-3"], [1, "font-bold", "text-center", "text-lg", 3, "innerHTML"], [1, "font-thin", "text-center", "text-sm"], [1, "visasys-button", "w-72", "mt-6", 3, "click"], [1, "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "height", "60", "viewBox", "0 -960 960 960", "width", "60", "fill", "#2F55D4", "fill-opacity", "1"], ["d", "m433-313 163-163q9-9 21-8.5t21 9.5q9 9 9 21.196 0 12.195-9 20.804L454-249q-9 9-21 9t-21-9l-96-95q-9-8.609-9-20.804Q307-377 316-386q9-9 21-8.5t21 8.5l75 73ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310-861.6 310-848v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715-861.6 715-848v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "60", "viewBox", "0 -960 960 960", "width", "60", "fill", "#990f0f", "fill-opacity", "1"], ["d", "m480-318-78 79q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l78-78-79-78q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l78 78 78-79q9-9 21-9t21 9q9 9 9 21.5t-9 21.5l-78 78 79 78q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-78-78ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310-861.6 310-848v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715-861.6 715-848v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z"]],
            template: function(n, t) {
                1 & n && (e.YNc(0, we, 1, 0, "div", 0),
                e.YNc(1, We, 10, 5, "div", 1)),
                2 & n && (e.Q6J("ngIf", t.displayed),
                e.xp6(1),
                e.Q6J("ngIf", t.displayed))
            },
            dependencies: [c.O5],
            styles: [".allert-card[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:center;padding:2em;gap:1.5em;z-index:9999;max-width:40%;border-radius:.5em}@media (min-width: 1024px){.allert-card[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}}@media (min-width: 124px){.allert-card[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:100%}}.background[_ngcontent-%COMP%]{position:fixed;width:100%;inset:0;background-color:#4e4646ec;z-index:9999}"]
        });
        var de = _(4385);
        function ke(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 3),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit;
                e.Q6J("value", t.id),
                e.xp6(1),
                e.Oqu(t.title)
            }
        }
        class H {
            constructor() {
                this.datasource = [],
                this.datasourceFiltered = []
            }
            ngOnInit() {
                this.parentForm.valueChanges.subscribe(n=>{
                    this.populateChangedDatasource(n.visas)
                }
                )
            }
            ngOnChanges(n) {
                if (n.datasource?.currentValue)
                    if (0 == this.datasourceFiltered.length) {
                        const t = this.parentForm.controls.visas.value;
                        this.datasourceFiltered = this.datasource.filter(o=>!t.some(a=>a.visaId == o.id))
                    } else
                        this.populateChangedDatasource(this.parentForm.controls.visas.value);
                n.form?.currentValue && 0 !== this.datasourceFiltered.length && this.populateChangedDatasource(this.parentForm.controls.visas.value)
            }
            populateChangedDatasource(n) {
                const t = this.form.value.visaId;
                this.datasourceFiltered = this.datasource.filter(o=>!n.some(a=>a.visaId == o.id && a.visaId != t))
            }
        }
        H.\u0275fac = function(n) {
            return new (n || H)
        }
        ,
        H.\u0275cmp = e.Xpm({
            type: H,
            selectors: [["single-select"]],
            inputs: {
                datasource: "datasource",
                parentForm: "parentForm",
                controlName: "controlName",
                form: "form"
            },
            features: [e.TTD],
            decls: 4,
            vars: 6,
            consts: [[3, "formGroup"], [1, "col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "form", 0)(1, "mat-select", 1),
                e.ALo(2, "translate"),
                e.YNc(3, ke, 2, 2, "mat-option", 2),
                e.qZA()()),
                2 & n && (e.Q6J("formGroup", t.form),
                e.xp6(1),
                e.s9C("placeholder", e.lcZ(2, 4, "MEMBERS_NUMBER.VISA_SELECTOR")),
                e.Q6J("formControlName", t.controlName),
                e.xp6(2),
                e.Q6J("ngForOf", t.datasourceFiltered))
            },
            dependencies: [de.gD, Y.ey, c.sg, l._Y, l.JJ, l.JL, l.sg, l.u, r.X$]
        });
        var G = _(445)
          , Te = _(6709)
          , Oe = _(9549)
          , Me = _(4144)
          , Z = _(9602);
        function Ye(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 48),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit;
                e.Q6J("value", t.id),
                e.xp6(1),
                e.Oqu(t.name)
            }
        }
        function Je(i, n) {
            1 & i && (e.TgZ(0, "span", 49),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "MEMBERS_NUMBER.MANDATORY_FIELD")))
        }
        function Qe(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 48),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit
                  , o = e.oxw(3);
                e.Q6J("value", t),
                e.xp6(1),
                e.lnq("", t.serviceLevelTitle, " - ", o.currency, " ", t.serviceFee, "")
            }
        }
        function Ve(i, n) {
            if (1 & i && (e.TgZ(0, "div", 20)(1, "mat-select", 50),
            e.ALo(2, "translate"),
            e.YNc(3, Qe, 2, 4, "mat-option", 22),
            e.qZA()()),
            2 & i) {
                const t = e.oxw(2);
                e.xp6(1),
                e.s9C("placeholder", e.lcZ(2, 2, "MEMBERS_NUMBER.SERVICE_LEVEL_SELECTOR")),
                e.xp6(2),
                e.Q6J("ngForOf", t.selectedOffice.serviceLevels)
            }
        }
        function He(i, n) {
            1 & i && (e.TgZ(0, "span", 49),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "MEMBERS_NUMBER.MANDATORY_FIELD")))
        }
        function Ge(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "button", 57),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw().index
                      , s = e.oxw(2);
                    return e.KtG(s.removeVisa(a))
                }),
                e.TgZ(2, "mat-icon"),
                e._uU(3, "close"),
                e.qZA()()()
            }
        }
        function je(i, n) {
            1 & i && (e.TgZ(0, "span", 49),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "MEMBERS_NUMBER.MANDATORY_FIELD")))
        }
        function ze(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "div", 51)(2, "div", 52)(3, "div", 53),
                e._UZ(4, "single-select", 54),
                e.qZA(),
                e.YNc(5, Ge, 4, 0, "div", 55),
                e.qZA(),
                e.TgZ(6, "app-visasys-incrementer", 56),
                e.NdJ("onValueIncreased", function(a) {
                    const p = e.CHM(t).index
                      , m = e.oxw(2);
                    return e.KtG(m.decreaseRemaining(a, p))
                })("onValueDecreased", function(a) {
                    const p = e.CHM(t).index
                      , m = e.oxw(2);
                    return e.KtG(m.increaseRemaining(a, p))
                }),
                e.qZA()(),
                e.YNc(7, je, 3, 3, "span", 23),
                e.qZA()
            }
            if (2 & i) {
                const t = n.$implicit
                  , o = n.index
                  , a = e.oxw(2);
                e.xp6(4),
                e.Q6J("datasource", a.visaList)("form", a.visasAt(o))("parentForm", a.appointmentForm[0]),
                e.xp6(1),
                e.Q6J("ngIf", 0 !== o),
                e.xp6(1),
                e.Q6J("min", 1)("max", t.quantity + a.getAvailableVisa(o)),
                e.xp6(1),
                e.Q6J("ngIf", !a.visasAt(o).get("visaId").valid && a.visasAt(o).get("visaId").touched)
            }
        }
        function $e(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 58),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw(2);
                    return e.KtG(a.addRow())
                }),
                e.O4$(),
                e.TgZ(1, "svg", 59),
                e._UZ(2, "path", 60),
                e.qZA(),
                e.kcU(),
                e.TgZ(3, "span", 61),
                e._uU(4),
                e.ALo(5, "translate"),
                e.qZA()()
            }
            2 & i && (e.xp6(4),
            e.Oqu(e.lcZ(5, 1, "MEMBERS_NUMBER.ADD_VISA")))
        }
        function Xe(i, n) {
            1 & i && (e.O4$(),
            e.kcU(),
            e.TgZ(0, "span", 49),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "MEMBERS_NUMBER.MANDATORY_FIELD")))
        }
        function et(i, n) {
            1 & i && (e.TgZ(0, "span", 49),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "MEMBERS_NUMBER.MANDATORY_FIELD")))
        }
        const tt = function() {
            return {
                members: 5
            }
        };
        function nt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "form", 7)(1, "div", 8)(2, "h3", 9),
                e._uU(3),
                e.ALo(4, "translate"),
                e.qZA(),
                e.TgZ(5, "h2", 10),
                e._uU(6),
                e.ALo(7, "translate"),
                e.qZA(),
                e.TgZ(8, "div", 11)(9, "app-visasys-incrementer", 12),
                e.NdJ("onValueIncreased", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.addMember(a))
                })("onValueDecreased", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.removeMember(a))
                }),
                e.qZA()(),
                e.TgZ(10, "div", 13)(11, "div", 14),
                e._UZ(12, "img", 15),
                e.TgZ(13, "div", 16)(14, "div", 17),
                e._uU(15),
                e.ALo(16, "translate"),
                e.qZA(),
                e.TgZ(17, "a", 18),
                e._uU(18),
                e.qZA()()()(),
                e.TgZ(19, "h3", 19),
                e._uU(20),
                e.ALo(21, "translate"),
                e.qZA(),
                e.TgZ(22, "div", 20)(23, "mat-select", 21),
                e.NdJ("valueChange", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.onOfficeUpdate(a))
                }),
                e.ALo(24, "translate"),
                e.YNc(25, Ye, 2, 2, "mat-option", 22),
                e.qZA()(),
                e.YNc(26, Je, 3, 3, "span", 23),
                e.YNc(27, Ve, 4, 4, "div", 24),
                e.YNc(28, He, 3, 3, "span", 23),
                e.TgZ(29, "h3", 19),
                e._uU(30),
                e.ALo(31, "translate"),
                e.qZA(),
                e.TgZ(32, "div", 25),
                e.YNc(33, ze, 8, 7, "div", 26),
                e.qZA(),
                e.YNc(34, $e, 6, 3, "div", 27),
                e.TgZ(35, "h3", 28),
                e._uU(36),
                e.ALo(37, "translate"),
                e.qZA(),
                e.TgZ(38, "div", 29)(39, "span", 30),
                e._uU(40),
                e.ALo(41, "translate"),
                e.qZA(),
                e.TgZ(42, "div", 31)(43, "div", 32)(44, "input", 33),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.MAs(47);
                    return e.KtG(a.open())
                }),
                e.ALo(45, "translate"),
                e.qZA(),
                e._UZ(46, "mat-datepicker", 34, 35),
                e.TgZ(48, "div", 36)(49, "mat-datepicker-toggle", 37)(50, "mat-icon", 38),
                e.O4$(),
                e.TgZ(51, "svg", 39),
                e._UZ(52, "path", 40),
                e.qZA()()()()(),
                e.YNc(53, Xe, 3, 3, "span", 23),
                e.qZA()(),
                e.kcU(),
                e.TgZ(54, "div", 41)(55, "span", 30),
                e._uU(56),
                e.ALo(57, "translate"),
                e.qZA(),
                e.TgZ(58, "div", 42),
                e._UZ(59, "input", 43),
                e.ALo(60, "translate"),
                e.YNc(61, et, 3, 3, "span", 23),
                e.qZA()(),
                e.TgZ(62, "p", 44),
                e._uU(63),
                e.ALo(64, "translate"),
                e.qZA(),
                e.TgZ(65, "div", 45),
                e._UZ(66, "mat-checkbox", 46),
                e.TgZ(67, "a", 47)(68, "span")(69, "u"),
                e._uU(70),
                e.ALo(71, "translate"),
                e.qZA()()()(),
                e._UZ(72, "div", 1),
                e.qZA()()
            }
            if (2 & i) {
                const t = e.MAs(47)
                  , o = e.oxw();
                e.Q6J("formGroup", o.appointmentForm[0])("dir", o.currentDirection),
                e.xp6(3),
                e.Oqu(e.lcZ(4, 31, "MEMBERS_NUMBER.PERSONS_REQUESTING")),
                e.xp6(3),
                e.Oqu(e.lcZ(7, 33, "MEMBERS_NUMBER.PERSONS_NUMBER")),
                e.xp6(3),
                e.Q6J("min", o.visasSelected)("max", o.maxNumberOfPersons),
                e.xp6(6),
                e.Oqu(e.xi3(16, 35, "MEMBERS_NUMBER.BIG_GROUP", e.DdM(58, tt))),
                e.xp6(2),
                e.MGl("href", "mailto:", o.emailGroups, "", e.LSH),
                e.xp6(1),
                e.Oqu(o.emailGroups),
                e.xp6(2),
                e.Oqu(e.lcZ(21, 38, "MEMBERS_NUMBER.SELECT_CENTER")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(24, 40, "MEMBERS_NUMBER.CENTER_SELECTOR")),
                e.xp6(2),
                e.Q6J("ngForOf", o.centerList),
                e.xp6(1),
                e.Q6J("ngIf", !o.appointmentForm[0].get("officeId").valid && o.appointmentForm[0].get("officeId").touched),
                e.xp6(1),
                e.Q6J("ngIf", o.selectedOffice),
                e.xp6(1),
                e.Q6J("ngIf", !o.appointmentForm[0].get("idServiceLevel").valid && o.appointmentForm[0].get("idServiceLevel").touched),
                e.xp6(2),
                e.Oqu(e.lcZ(31, 42, "MEMBERS_NUMBER.SELECT_VISA")),
                e.xp6(3),
                e.Q6J("ngForOf", o.visaPrenotations)("ngForTrackBy", o.trackByChange),
                e.xp6(1),
                e.Q6J("ngIf", o.availableSlots && o.areVisasAvailabe),
                e.xp6(2),
                e.Oqu(e.lcZ(37, 44, "MEMBERS_NUMBER.TRIP_DATE")),
                e.xp6(4),
                e.Oqu(e.lcZ(41, 46, "MEMBERS_NUMBER.TRIP_DATE_PROMPT")),
                e.xp6(4),
                e.s9C("placeholder", e.lcZ(45, 48, "GLOBAL.DATE_FORMAT")),
                e.Q6J("matDatepicker", t)("min", o.today),
                e.xp6(5),
                e.Q6J("for", t),
                e.xp6(4),
                e.Q6J("ngIf", !o.appointmentForm[0].get("tripDate").valid && o.appointmentForm[0].get("tripDate").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(57, 50, "MEMBERS_NUMBER.DESTINATION_PROMPT")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(60, 52, "MEMBERS_NUMBER.DESTINATION_PLACEHOLDER")),
                e.xp6(2),
                e.Q6J("ngIf", !o.appointmentForm[0].get("tripDestination").valid && o.appointmentForm[0].get("tripDestination").touched),
                e.xp6(2),
                e.Oqu(e.lcZ(64, 54, "MEMBERS_NUMBER.TRIP_SECTION_TEXT")),
                e.xp6(7),
                e.Oqu(e.lcZ(71, 56, "MEMBERS_NUMBER.TERMS_AND_CONDS"))
            }
        }
        class j extends E.k {
            get minDate() {
                const n = new Date;
                return n.setDate(n.getDate() + this.dateOffset),
                n
            }
            get visas() {
                return this.appointmentForm[0].get("visas")
            }
            get visaPrenotations() {
                return this.visas.value
            }
            get visasSelected() {
                let n = 0;
                return this.visaPrenotations.forEach(t=>n += t.quantity),
                n
            }
            get areVisasAvailabe() {
                return this.visaPrenotations.length - this.visaList.length != 0
            }
            get availableSlots() {
                return this.calculateRemainingSlots() > 0
            }
            get slotsFilled() {
                return this.numberOfMembers === this.visasSelected
            }
            constructor(n, t, o, a, s, p, m, P, fe) {
                super(n),
                this.fb = t,
                this.dateAdapter = o,
                this.toaster = a,
                this.visaService = s,
                this.officeService = p,
                this.translateService = m,
                this.configurationService = P,
                this.recaptchaV3Service = fe,
                this.CHECKS_CAPTCHA_ACTION = "checks",
                this.maxNumberOfPersons = 1,
                this.isUserLoggedIn = !1,
                this.numberOfMembers = 1,
                this.showCard = !1,
                this.visaList = null,
                this.centerList = null,
                this.popupTitle = "",
                this.popupDescription = "",
                this.btnText = "",
                this.availableCenter = !1,
                this.dateOffset = 15,
                this.okTextTitle = "MEMBERS_NUMBER.MESSAGES.OK_TITLE",
                this.okTextDescription = "MEMBERS_NUMBER.MESSAGES.OK_DESCRIPTION",
                this.okButtonText = "MEMBERS_NUMBER.MESSAGES.OK_BUTTON",
                this.failNumberTitle = "MEMBERS_NUMBER.MESSAGES.FAIL_NUMBER",
                this.failTypologyTitle = "",
                this.failDescription = "MEMBERS_NUMBER.MESSAGES.FAIL_DESCRIPTION",
                this.failButton = "MEMBERS_NUMBER.MESSAGES.FAIL_BUTTON",
                this.today = new Date,
                this.selectedOffice = void 0,
                this.currency = "",
                this.captcha = null
            }
            onLanguageChange(n) {
                !this.visaService || !this.officeService || (this.setCalendarLocale(n),
                this.populateSelect())
            }
            ngOnInit() {
                const t = this.configurationService.getConfiguration().environment;
                this.createForm(),
                this.populateSelect(),
                this.lang$.subscribe(o=>{
                    this.setCalendarLocale(o)
                }
                ),
                this.subscriptions.push(this.store.select(k.G).subscribe(o=>{
                    this.currency = o.currency,
                    this.maxNumberOfPersons = o.maxWebGroupSize,
                    this.dateOffset = o.minDaysVisa
                }
                )),
                this.emailGroups = this.configurationService.getEmailGroups(),
                grecaptcha.ready(()=>{
                    try {
                        this.captcha = grecaptcha.render("html_element", {
                            sitekey: t.sitekey,
                            action: this.CHECKS_CAPTCHA_ACTION,
                            callback: ()=>{
                                const o = grecaptcha.getResponse();
                                "" !== o && (this.token = o)
                            }
                        })
                    } catch (o) {
                        console.log("error", o)
                    }
                }
                )
            }
            setCalendarLocale(n) {
                switch (n.id) {
                case "it":
                    this.dateAdapter.setLocale(q.it);
                    break;
                case "en":
                    this.dateAdapter.setLocale(q.en);
                    break;
                case "ar":
                    this.dateAdapter.setLocale(q.ar)
                }
            }
            createForm() {
                this.appointmentForm[0] = this.fb.group({
                    personNumber: [1, l.kI.required],
                    officeId: [null, l.kI.required],
                    idServiceLevel: [null, l.kI.required],
                    visas: this.fb.array([this.fb.group({
                        visaId: [null, l.kI.required],
                        quantity: [1, l.kI.required]
                    })]),
                    tripDate: [null, l.kI.required],
                    tripDestination: [null, l.kI.compose([l.kI.required])],
                    termandcond: [!1, l.kI.required]
                })
            }
            visasAt(n) {
                return this.visas.at(n)
            }
            getAvailableVisa(n) {
                const t = this.appointmentForm[0].controls.visas.value.at(n)
                  , o = 0 === n ? 5 : 4;
                return t.quantity >= o ? 0 : Math.min(o - t.quantity, this.numberOfMembers - this.visasSelected)
            }
            addMember(n) {
                this.numberOfMembers !== n && (this.numberOfMembers = n,
                this.appointmentForm[0].controls.personNumber.setValue(this.numberOfMembers))
            }
            removeMember(n) {
                this.numberOfMembers > 1 && this.visasSelected === this.numberOfMembers ? this.toaster.error(this.translateService.instant("ERRORS.MORE_VISAS_THAN_MEMBERS")) : this.numberOfMembers !== n && (this.numberOfMembers = n,
                this.appointmentForm[0].controls.personNumber.setValue(this.numberOfMembers))
            }
            increaseRemaining(n, t) {
                this.visas.at(t).get("quantity").setValue(n)
            }
            decreaseRemaining(n, t) {
                this.visas.at(t).get("quantity").setValue(n)
            }
            nextStep() {
				console.log('kkkkk' , this.recaptchaV3Service);
                this.appointmentForm[0].markAllAsTouched();
                const n = this.appointmentForm[0].controls.tripDate.value
                  , t = this.appointmentForm[0].controls.officeId.value
                  , o = this.appointmentForm[0].controls.idServiceLevel.value.serviceLevelId;
                Be()(n).format("YYYY-MM-DD");
                let p = [];
				console.log('ddddddd');
                for (let m = 0; m < this.visas.length; m++){
				for (let P = 0; P < this.visasAt(m).value.quantity; P++){
				p.push(this.visasAt(m).value.visaId);}}
				console.log('hhhhhh');
                this.recaptchaV3Service.execute(this.CHECKS_CAPTCHA_ACTION).pipe((0,
                T.P)(), (0,
                Ne.z)(m=>p.length > 1 ? this.officeService.checkSlotAvailableGroup(t, p, o, m) : this.officeService.checkSlotAvailable(t, this.visasAt(0).value.visaId, o, m)), (0,
                D.b)(m=>{
                    m instanceof d.UA || !m ? (this.popupTitle = this.failNumberTitle,
                    this.popupDescription = this.failDescription,
                    this.availableCenter = !1,
                    this.btnText = this.failButton,
                    this.showCard = !0) : (this.popupTitle = this.okTextTitle,
                    this.popupDescription = this.okTextDescription,
                    this.availableCenter = !0,
                    this.btnText = this.okButtonText,
                    this.showCard = !0)
                }
                ), (0,
                v.K)(m=>(m.error?.message && this.toaster.warning(m.error.message),
                (0,
                U.of)(m)))).subscribe()
            }
            checkQuotaDisponibility(n) {
                const t = n.filter(o=>!1 === o.check);
                return t && this.updateFailTypologyTitle(t),
                !!t && t.length > 0
            }
            updateFailTypologyTitle(n) {
                this.failTypologyTitle = "";
                const t = n.map(s=>this.visaList.find(p=>p.id === s.visaId));
                let o = "";
                t.forEach((s,p)=>{
                    o += p < t.length - 2 ? '"' + s.title + '", ' : p === t.length - 2 ? '"' + s.title + '" ' + this.translateService.instant("MEMBERS_NUMBER.AND") : ' "' + s.title + '"'
                }
                );
                let a = this.translateService.instant("MEMBERS_NUMBER.MESSAGES.FAIL_TYPOLOGY");
                a += o,
                this.failTypologyTitle = a
            }
            addRow() {
                this.visaPrenotations.push(1),
                this.visas.push(this.fb.group({
                    visaId: [null, l.kI.required],
                    quantity: [1, l.kI.required]
                }))
            }
            trackByChange(n) {
                return n
            }
            getAppointments(n) {
                this.showCard = !1,
                this.availableCenter && this.stepper.next()
            }
            onOfficeUpdate(n) {
                this.selectedOffice = this.centerList.find(t=>t.id === n)
            }
            calculateRemainingSlots() {
                return this.numberOfMembers - this.visasSelected
            }
            getAllVisas() {
                return this.visaService.getAllVisas().pipe((0,
                v.K)(n=>(this.visaList = [],
                this.toaster.error(this.translateService.instant("ERRORS.NO_VISAS")),
                (0,
                U.of)(n))))
            }
            getAllOffices() {
                return this.officeService.getOfficeList().pipe((0,
                v.K)(n=>(this.centerList = [],
                this.toaster.error(this.translateService.instant("ERRORS.NO_OFFICES")),
                (0,
                U.of)(n))))
            }
            populateSelect() {
                this.subscriptions.push((0,
                he.D)([this.getAllOffices(), this.getAllVisas()]).subscribe(n=>{
                    n[0]instanceof d.UA || (this.centerList = n[0],
                    this.store.dispatch((0,
                    W.U)({
                        offices: this.centerList
                    }))),
                    n[1]instanceof d.UA || (this.visaList = n[1],
                    this.store.dispatch((0,
                    W.v)({
                        visas: this.visaList
                    })))
                }
                ))
            }
            removeVisa(n) {
                this.visas.removeAt(n)
            }
        }
        j.\u0275fac = function(n) {
            return new (n || j)(e.Y36(x.yh),e.Y36(l.qu),e.Y36(Y._A),e.Y36(S.g),e.Y36(M.$),e.Y36(J.c),e.Y36(r.sK),e.Y36(le.e),e.Y36(Ae.YC))
        }
        ,
        j.\u0275cmp = e.Xpm({
            type: j,
            selectors: [["app-memebers-number"]],
            inputs: {
                stepper: "stepper",
                appointmentForm: "appointmentForm"
            },
            features: [e.qOj],
            decls: 13,
            vars: 16,
            consts: [[3, "formGroup", "dir", 4, "ngIf"], ["id", "html_element", 1, "flex", "justify-center", "px-3", "my-5"], [1, "flex", "flex-col", "lg:flex-row", "lg:justify-end"], [1, "next-container"], [1, "visasys-button", "w-72", "mt-6", 3, "disabled", "click"], [1, "right-image"], [3, "displayed", "title", "description", "btnText", "positive", "getAppointments"], [3, "formGroup", "dir"], [1, "grid", "grid-rows-auto", "md:border-visa-primary-200", "md:border-solid", "md:p-8", "md:border", "rounded-lg"], [1, "font-bold", "text-2xl", "text-visa-primary-500"], [1, "text-lg"], [1, "grid", "grid-cols-8", "items-center", "py-5", "pl-5"], [3, "min", "max", "onValueIncreased", "onValueDecreased"], [1, "flex", "flex-col", "w-full", "items-center", "py-6", "bg-sky-100", "ml-auto", "mr-auto", "rounded-lg", "px-4"], [1, "flex", "flex-row", "items-start", "gap-6", "lg:w-3/5"], ["src", "assets/images/info-exclamation.svg", 1, "w-10"], [1, "flex", "gap-2", "flex-col"], [1, "text-sm"], [1, "text-blue-500", "font-bold", "text-start", "w-full", 3, "href"], [1, "font-bold", "text-2xl", "text-visa-primary-500", "mt-10"], [1, "lg:w-2/3", "bg-visa-primary-50", "rounded-lg", "my-2"], ["formControlName", "officeId", 1, "col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs text-red-500", 4, "ngIf"], ["class", "lg:w-2/3 bg-visa-primary-50 rounded-lg my-2", 4, "ngIf"], ["formArrayName", "visas"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "flex flex-row items-center gap-3", 3, "click", 4, "ngIf"], [1, "font-bold", "text-2xl", "text-visa-primary-500", "mt-10", "mb-2"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "items-center", "mt-2"], [1, "col-span-3", "text-lg", "text-visa-primary-500", "font-bold"], [1, "col-span-5"], [1, "flex", "flex-row", "items-center"], ["matInput", "", "formControlName", "tripDate", "id", "pickerInput", "readonly", "", 1, "bg-visa-primary-50", "p-3", "rounded-lg", "w-full", 3, "placeholder", "matDatepicker", "min", "click"], [1, "bg-visa-primary-50"], ["picker", ""], [1, "mb-2"], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["width", "36", "height", "40", "viewBox", "0 0 36 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V6C0 5.2 0.3 4.5 0.9 3.9C1.5 3.3 2.2 3 3 3H6.25V0H9.5V3H26.5V0H29.75V3H33C33.8 3 34.5 3.3 35.1 3.9C35.7 4.5 36 5.2 36 6V37C36 37.8 35.7 38.5 35.1 39.1C34.5 39.7 33.8 40 33 40H3ZM3 37H33V15.5H3V37ZM3 12.5H33V6H3V12.5ZM18 24C17.4333 24 16.9583 23.8083 16.575 23.425C16.1917 23.0417 16 22.5667 16 22C16 21.4333 16.1917 20.9583 16.575 20.575C16.9583 20.1917 17.4333 20 18 20C18.5667 20 19.0417 20.1917 19.425 20.575C19.8083 20.9583 20 21.4333 20 22C20 22.5667 19.8083 23.0417 19.425 23.425C19.0417 23.8083 18.5667 24 18 24ZM10 24C9.43333 24 8.95833 23.8083 8.575 23.425C8.19167 23.0417 8 22.5667 8 22C8 21.4333 8.19167 20.9583 8.575 20.575C8.95833 20.1917 9.43333 20 10 20C10.5667 20 11.0417 20.1917 11.425 20.575C11.8083 20.9583 12 21.4333 12 22C12 22.5667 11.8083 23.0417 11.425 23.425C11.0417 23.8083 10.5667 24 10 24ZM26 24C25.4333 24 24.9583 23.8083 24.575 23.425C24.1917 23.0417 24 22.5667 24 22C24 21.4333 24.1917 20.9583 24.575 20.575C24.9583 20.1917 25.4333 20 26 20C26.5667 20 27.0417 20.1917 27.425 20.575C27.8083 20.9583 28 21.4333 28 22C28 22.5667 27.8083 23.0417 27.425 23.425C27.0417 23.8083 26.5667 24 26 24ZM18 32C17.4333 32 16.9583 31.8083 16.575 31.425C16.1917 31.0417 16 30.5667 16 30C16 29.4333 16.1917 28.9583 16.575 28.575C16.9583 28.1917 17.4333 28 18 28C18.5667 28 19.0417 28.1917 19.425 28.575C19.8083 28.9583 20 29.4333 20 30C20 30.5667 19.8083 31.0417 19.425 31.425C19.0417 31.8083 18.5667 32 18 32ZM10 32C9.43333 32 8.95833 31.8083 8.575 31.425C8.19167 31.0417 8 30.5667 8 30C8 29.4333 8.19167 28.9583 8.575 28.575C8.95833 28.1917 9.43333 28 10 28C10.5667 28 11.0417 28.1917 11.425 28.575C11.8083 28.9583 12 29.4333 12 30C12 30.5667 11.8083 31.0417 11.425 31.425C11.0417 31.8083 10.5667 32 10 32ZM26 32C25.4333 32 24.9583 31.8083 24.575 31.425C24.1917 31.0417 24 30.5667 24 30C24 29.4333 24.1917 28.9583 24.575 28.575C24.9583 28.1917 25.4333 28 26 28C26.5667 28 27.0417 28.1917 27.425 28.575C27.8083 28.9583 28 29.4333 28 30C28 30.5667 27.8083 31.0417 27.425 31.425C27.0417 31.8083 26.5667 32 26 32Z", "fill", "#2F55D4"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "items-center", "mt-4"], [1, "col-span-8", "flex", "flex-col"], ["formControlName", "tripDestination", "pattern", "^[a-zA-Z]+( [a-zA-Z]+)*$", "maxlength", "50", 1, "col-span-8", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder"], [1, "text-sm", "mt-10"], [1, "flex", "items-center", "mt-4"], ["formControlName", "termandcond", "type", "checkbox", 1, "col-1", "mr-4"], ["href", "/terms-conditions", "target", "_blank", "rel", "noopener noreferrer", 1, "col-2", "text-md", "text-visa-primary-500", "font-bold"], [3, "value"], [1, "text-xs", "text-red-500"], ["formControlName", "idServiceLevel", 1, "col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder"], [1, "flex", "flex-col", "lg:flex-row", "justify-between", "items-start", "lg:items-center"], [1, "flex", "items-center", "w-full", "gap-2"], [1, "w-full", "lg:w-2/3", "bg-visa-primary-50", "rounded-lg", "my-2"], ["controlName", "visaId", 3, "datasource", "form", "parentForm"], [4, "ngIf"], [1, "my-2", 3, "min", "max", "onValueIncreased", "onValueDecreased"], [3, "click"], [1, "flex", "flex-row", "items-center", "gap-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "32", "viewBox", "0 -960 960 960", "width", "40", "fill", "#2F55D4", "fill-opacity", "1"], ["d", "M600.175-320q12.825 0 21.325-8.625T630-350v-60h60q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-470h-60v-60q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T570-530v60h-60q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T510-410h60v60q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625ZM141-160q-24 0-42-18.5T81-220v-520q0-23 18-41.5t42-18.5h255q12.444 0 23.722 5t19.366 13.088L481-740h340q23 0 41.5 18.5T881-680v460q0 23-18.5 41.5T821-160H141Zm0-580v520h680v-460H456l-60-60H141Zm0 0v520-520Z"], [1, "text-visa-primary-500", "cursor-default", "text-sm", "font-bold"]],
            template: function(n, t) {
                1 & n && (e.YNc(0, nt, 73, 59, "form", 0),
                e._UZ(1, "div", 1),
                e.TgZ(2, "div", 2)(3, "div", 3)(4, "button", 4),
                e.NdJ("click", function() {
                    return t.nextStep()
                }),
                e._uU(5),
                e.ALo(6, "translate"),
                e.TgZ(7, "mat-icon", 5),
                e._uU(8, "chevron_right"),
                e.qZA()()()(),
                e.TgZ(9, "app-visasys-allert-card", 6),
                e.NdJ("getAppointments", function(a) {
                    return t.getAppointments(a)
                }),
                e.ALo(10, "translate"),
                e.ALo(11, "translate"),
                e.ALo(12, "translate"),
                e.qZA()),
                2 & n && (e.Q6J("ngIf", t.appointmentForm),
                e.xp6(4),
                e.Q6J("disabled", !t.appointmentForm[0].valid || !t.slotsFilled || !t.appointmentForm[0].get("termandcond").value),
                e.xp6(1),
                e.hij(" ", e.lcZ(6, 8, "MEMBERS_NUMBER.CHECK_AVAILABLE"), " "),
                e.xp6(4),
                e.Q6J("displayed", t.showCard)("title", e.lcZ(10, 10, t.popupTitle))("description", e.lcZ(11, 12, t.popupDescription))("btnText", e.lcZ(12, 14, t.btnText))("positive", t.availableCenter))
            },
            dependencies: [c.sg, c.O5, Q, V, H, G.Lv, y.Hw, Te.oG, Oe.R9, Me.Nt, de.gD, Y.ey, Z.Mq, Z.hl, Z.nW, Z.Q0, l._Y, l.Fj, l.JJ, l.JL, l.nD, l.c5, l.sg, l.u, l.CE, r.X$],
            styles: [".mat-mdc-text-field-wrapper{background-color:#e8ebfa;height:48px;display:flex;align-items:center;border-radius:.375rem}"]
        });
        var ce = _(5412)
          , ge = _(8899)
          , xe = _(266)
          , it = _(6323);
        function ot(i, n) {
            if (1 & i && (e.TgZ(0, "div", 12),
            e._UZ(1, "i-feather", 13),
            e.TgZ(2, "span", 6)(3, "p"),
            e._uU(4),
            e.qZA()()()),
            2 & i) {
                const t = e.oxw(3);
                e.xp6(4),
                e.hij(" ", t.file.name + " " + t.displayByteSize(t.file.size), " ")
            }
        }
        function rt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 3)(1, "div", 4),
                e._UZ(2, "i-feather", 5),
                e.TgZ(3, "span", 6)(4, "p", 7),
                e._uU(5),
                e.ALo(6, "translate"),
                e.qZA(),
                e._uU(7, " \xa0 "),
                e.TgZ(8, "div", 8)(9, "label", 9),
                e._uU(10),
                e.ALo(11, "translate"),
                e.qZA(),
                e.TgZ(12, "input", 10),
                e.NdJ("change", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.onUploadFileChange(a))
                }),
                e.qZA()()()(),
                e.YNc(13, ot, 5, 1, "div", 11),
                e.qZA()
            }
            if (2 & i) {
                const t = e.oxw(2);
                e.xp6(2),
                e.s9C("name", t.file ? "refresh-ccw" : "upload-cloud"),
                e.Q6J("ngClass", t.file ? "spin-animation" : ""),
                e.xp6(3),
                e.Oqu(e.lcZ(6, 7, "DOCUMENTS.UPLOAD_FILE")),
                e.xp6(4),
                e.Q6J("for", t.id),
                e.xp6(1),
                e.Oqu(e.lcZ(11, 9, "DOCUMENTS.BROWSE")),
                e.xp6(2),
                e.Q6J("id", t.id),
                e.xp6(1),
                e.Q6J("ngIf", t.file)
            }
        }
        function at(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 14)(1, "div", 15),
                e._UZ(2, "i-feather", 16),
                e.TgZ(3, "span", 17)(4, "a", 18),
                e._uU(5),
                e.qZA()(),
                e.TgZ(6, "i-feather", 19),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw(2);
                    return e.KtG(a.onFileDelete())
                }),
                e.qZA()()()
            }
            if (2 & i) {
                const t = e.oxw(2);
                e.xp6(4),
                e.Q6J("href", t.fileUploaded, e.LSH),
                e.xp6(1),
                e.hij(" ", t.fileName + " " + t.displayByteSize(t.fileSize || 0), " ")
            }
        }
        function st(i, n) {
            if (1 & i && (e.TgZ(0, "div"),
            e.YNc(1, rt, 14, 11, "div", 1),
            e.YNc(2, at, 7, 2, "div", 2),
            e.qZA()),
            2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("ngIf", !t.fileUploaded),
                e.xp6(1),
                e.Q6J("ngIf", t.fileUploaded)
            }
        }
        function _t(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "div", 4)(2, "div", 8)(3, "label", 9),
                e._UZ(4, "i-feather", 20),
                e.ALo(5, "translate"),
                e.qZA(),
                e.TgZ(6, "input", 10),
                e.NdJ("change", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.onUploadFileChange(a))
                }),
                e.qZA()()()()
            }
            if (2 & i) {
                const t = e.oxw(2);
                e.xp6(3),
                e.Q6J("for", t.id),
                e.xp6(1),
                e.s9C("name", t.file ? "refresh-ccw" : "upload-cloud"),
                e.Q6J("matTooltip", e.lcZ(5, 5, "DOCUMENTS.FILE_UPLOAD"))("ngClass", t.file ? "spin-animation" : ""),
                e.xp6(2),
                e.Q6J("id", t.id)
            }
        }
        function lt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "div", 21),
                e._UZ(2, "i-feather", 22),
                e.ALo(3, "translate"),
                e.TgZ(4, "i-feather", 23),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw(2);
                    return e.KtG(a.onFileDelete())
                }),
                e.ALo(5, "translate"),
                e.qZA()()()
            }
            2 & i && (e.xp6(2),
            e.Q6J("matTooltip", e.lcZ(3, 2, "DOCUMENTS.FILE_UPLOADED")),
            e.xp6(2),
            e.Q6J("matTooltip", e.lcZ(5, 4, "DOCUMENTS.FILE_DELETE")))
        }
        function ct(i, n) {
            if (1 & i && (e.TgZ(0, "div"),
            e.YNc(1, _t, 7, 7, "div", 0),
            e.YNc(2, lt, 6, 6, "div", 0),
            e.qZA()),
            2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("ngIf", !t.fileUploaded),
                e.xp6(1),
                e.Q6J("ngIf", t.fileUploaded)
            }
        }
        class z {
            constructor(n, t) {
                this.notificationService = n,
                this.translate = t,
                this.iconOnly = !1,
                this.callback = new e.vpe,
                this.delete = new e.vpe
            }
            ngOnInit() {}
            onFileDelete() {
                this.file = void 0,
                this.delete.emit(this.fileUploaded)
            }
            onUploadFileChange(n) {
                const t = n.target.files[0];
                t.size <= this.maxSize ? (this.file = t,
                this.callback.emit(this.file)) : this.notificationService.error(this.translate.instant("ALERT.SUCCESSFUL"))
            }
            displayByteSize(n) {
                let t;
                return t = Number(n) > 1048576 ? `${(Number(n) / 1048576).toFixed(2)}MB` : `${(Number(n) / 1024).toFixed(2)}KB`,
                t
            }
        }
        z.\u0275fac = function(n) {
            return new (n || z)(e.Y36(S.g),e.Y36(r.sK))
        }
        ,
        z.\u0275cmp = e.Xpm({
            type: z,
            selectors: [["file-upload"]],
            inputs: {
                fileUploaded: "fileUploaded",
                fileName: "fileName",
                fileSize: "fileSize",
                maxSize: "maxSize",
                id: "id",
                delivered: "delivered",
                iconOnly: "iconOnly"
            },
            outputs: {
                callback: "callback",
                delete: "delete"
            },
            decls: 2,
            vars: 2,
            consts: [[4, "ngIf"], ["class", "border-2 border-blue-500 rounded border-dotted p-4", 4, "ngIf"], ["class", "border-2 border-blue-500 rounded p-4", 4, "ngIf"], [1, "border-2", "border-blue-500", "rounded", "border-dotted", "p-4"], [1, "flex", "justify-center"], [1, "w-5", "h-5", "text-blue-500", "group-hover:text-blue-500", "dark:text-blue-500", "dark:group-hover:text-blue-500", "align-middle", "mr-3", 3, "name", "ngClass"], [1, "flex"], [1, "whitespace-nowrap"], [1, "form-group"], [1, "text-blue-500", "font-bold", "cursor-pointer", 3, "for"], ["type", "file", "accept", ".pdf, .png, .jpg, .jpeg", 3, "id", "change"], ["class", "flex justify-center text-blue-400 mt-3", 4, "ngIf"], [1, "flex", "justify-center", "text-blue-400", "mt-3"], ["name", "file", 1, "w-5", "h-5", "text-blue-400", "group-hover:text-blue-400", "dark:text-blue-400", "dark:group-hover:text-blue-400", "align-middle", "mr-3"], [1, "border-2", "border-blue-500", "rounded", "p-4"], [1, "flex", "justify-between", "items-center", "mx-3"], ["name", "check-circle", 1, "w-5", "h-5", "text-blue-500", "group-hover:text-blue-500", "dark:text-blue-500", "dark:group-hover:text-blue-500", "align-middle", "mr-3"], [1, "flex", "cursor-pointer"], ["download", "", 1, "text-blue-500", "font-bold", 3, "href"], ["name", "trash-2", 1, "cursor-pointer", "w-5", "h-5", "text-red-600", "group-hover:text-red-600", "dark:text-red-600", "dark:group-hover:text-red-600", "align-middle", "mr-3", 3, "click"], [1, "w-5", "h-5", "text-blue-500", "group-hover:text-blue-500", "dark:text-blue-500", "dark:group-hover:text-blue-500", "align-middle", "mr-3", 3, "matTooltip", "name", "ngClass"], [1, "flex", "justify-between"], ["name", "check-circle", 1, "w-5", "h-5", "text-blue-500", "group-hover:text-blue-500", "dark:text-blue-500", "dark:group-hover:text-blue-500", "align-middle", "mr-3", 3, "matTooltip"], ["name", "trash-2", 1, "cursor-pointer", "w-5", "h-5", "text-red-600", "group-hover:text-red-600", "dark:text-red-600", "dark:group-hover:text-red-600", "align-middle", "mr-3", 3, "matTooltip", "click"]],
            template: function(n, t) {
                1 & n && (e.YNc(0, st, 3, 2, "div", 0),
                e.YNc(1, ct, 3, 2, "div", 0)),
                2 & n && (e.Q6J("ngIf", !t.iconOnly),
                e.xp6(1),
                e.Q6J("ngIf", t.iconOnly))
            },
            dependencies: [xe.gM, c.mk, c.O5, it.u, r.X$],
            styles: ["input[type=file][_ngcontent-%COMP%]{display:none}.spin-animation[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(360deg)}to{transform:rotate(0)}}"]
        });
        class $ {
            constructor(n, t, o) {
                this.documentProvider = n,
                this.notificationService = t,
                this.store = o,
                this.onFileUploadedResult = new e.vpe,
                this.onFileDeletedResult = new e.vpe,
                this.maxFileSizeEmitter = new e.vpe
            }
            ngOnInit() {
                this.store.select(k.G).pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    this.maxFileSize = n.maxByteFileSize,
                    this.maxFileSize && this.maxFileSizeEmitter.emit(this.maxFileSize)
                }
                )).subscribe()
            }
            onDelete(n) {
                this.onFileDeletedResult.emit(n)
            }
            onCallback(n) {
                this.documentProvider.uploadPresignedUrl(n).pipe((0,
                T.P)(), (0,
                D.b)(o=>{
                    o && o.data.presignedUrl && this.uploadToS3(o.data, n)
                }
                ), (0,
                v.K)(o=>(0,
                F._)(()=>this.notificationService.error(o.error.message)))).subscribe()
            }
            uploadToS3(n, t) {
                const o = new XMLHttpRequest;
                o.open("PUT", n.presignedUrl, !1),
                o.setRequestHeader("Content-type", t.type),
                o.onload = ()=>{
                    200 === o.status && this.insertDocument(t, n.temporaryKey)
                }
                ,
                o.onerror = ()=>{}
                ,
                o.send(t)
            }
            insertDocument(n, t) {
                n && t && (this.onFileUploadedResult.emit({
                    documentTypeId: this.id,
                    temporaryKey: t,
                    fileName: n.name,
                    fileSize: n.size,
                    mimeType: n.type
                }),
                this.fileUploaded = t,
                this.fileName = n.name,
                this.fileSize = n.size)
            }
        }
        function pt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.hij("", e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY"), " "))
        }
        function mt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.hij("", e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY"), " "))
        }
        function ut(i, n) {
            1 & i && (e.O4$(),
            e.kcU(),
            e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function dt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function gt(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 35),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit;
                e.Q6J("value", t.codeISOAlpha3),
                e.xp6(1),
                e.Oqu(t.nationality)
            }
        }
        function ft(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function Et(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.hij("", e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY"), " "))
        }
        function ht(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 35),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit;
                e.Q6J("value", t.codeISOAlpha3),
                e.xp6(1),
                e.Oqu(t.country)
            }
        }
        function At(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function vt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.hij("", e.lcZ(2, 1, "USER_DATA.ERRORS.PASSPORT"), " "))
        }
        function Tt(i, n) {
            1 & i && (e.O4$(),
            e.kcU(),
            e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function Ot(i, n) {
            1 & i && (e.O4$(),
            e.kcU(),
            e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.ISSUE_VS_BIRTHDAY")))
        }
        function Mt(i, n) {
            if (1 & i && (e.TgZ(0, "mat-option", 35),
            e._uU(1),
            e.qZA()),
            2 & i) {
                const t = n.$implicit;
                e.Q6J("value", t.codeISOAlpha3),
                e.xp6(1),
                e.Oqu(t.country)
            }
        }
        function xt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function Dt(i, n) {
            1 & i && (e.O4$(),
            e.kcU(),
            e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.MANDATORY")))
        }
        function Ct(i, n) {
            if (1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i) {
                const t = e.oxw(3);
                e.xp6(1),
                e.Oqu(e.xi3(2, 1, "USER_DATA.ERRORS.PREFIX", t.prefixError))
            }
        }
        function Pt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.PHONE")))
        }
        function Ut(i, n) {
            if (1 & i && (e.TgZ(0, "div"),
            e.YNc(1, Ct, 3, 4, "span", 25),
            e.YNc(2, Pt, 3, 3, "span", 25),
            e.qZA()),
            2 & i) {
                const t = e.oxw(2);
                e.xp6(1),
                e.Q6J("ngIf", null == t.form.get("phoneNumber").errors ? null : t.form.get("phoneNumber").errors.invalidPrefix),
                e.xp6(1),
                e.Q6J("ngIf", !(null != t.form.get("phoneNumber").errors && t.form.get("phoneNumber").errors.invalidPrefix))
            }
        }
        function Zt(i, n) {
            1 & i && (e.TgZ(0, "span", 56),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.Oqu(e.lcZ(2, 1, "USER_DATA.ERRORS.EMAIL")))
        }
        function It(i, n) {
            1 & i && (e.TgZ(0, "h3", 57),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i && (e.xp6(1),
            e.hij(" ", e.lcZ(2, 1, "USER_DATA.SECTIONS.DOCUMENTS"), ""))
        }
        function Rt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "document-stripe", 58),
                e.NdJ("onFileUploadedResult", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.uploadCallback(a))
                })("onFileDeletedResult", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.deleteCallback(a))
                })("maxFileSizeEmitter", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.setMaxFileSize(a))
                }),
                e.qZA()
            }
            if (2 & i) {
                const t = n.$implicit;
                e.Q6J("id", t.id)("title", t.title)("desc", t.description)("fileUploaded", null == t ? null : t.temporaryKey)("fileName", null == t ? null : t.fileName)("fileSize", null == t ? null : t.fileSize)
            }
        }
        function Lt(i, n) {
            if (1 & i && (e.TgZ(0, "p", 59),
            e._uU(1),
            e.ALo(2, "translate"),
            e.qZA()),
            2 & i) {
                const t = e.oxw(2);
                e.xp6(1),
                e.AsE("", e.lcZ(2, 2, "USER_DATA.SECTIONS.DOCUMENT_INFO"), "", t.maxFileSize, "")
            }
        }
        $.\u0275fac = function(n) {
            return new (n || $)(e.Y36(M.$),e.Y36(S.g),e.Y36(x.yh))
        }
        ,
        $.\u0275cmp = e.Xpm({
            type: $,
            selectors: [["document-stripe"]],
            inputs: {
                title: "title",
                desc: "desc",
                fileUploaded: "fileUploaded",
                fileName: "fileName",
                fileSize: "fileSize",
                id: "id",
                visa: "visa",
                delivered: "delivered"
            },
            outputs: {
                onFileUploadedResult: "onFileUploadedResult",
                onFileDeletedResult: "onFileDeletedResult",
                maxFileSizeEmitter: "maxFileSizeEmitter"
            },
            decls: 9,
            vars: 12,
            consts: [[1, "items-center", "grid", "grid-cols-2", "gap-4", "mx-4", "my-8"], ["for", "inline-full-name", 1, "block", "text-black", "font-bold", "mb-4", "pr-4"], [3, "fileUploaded", "fileName", "fileSize", "maxSize", "delivered", "id", "callback", "delete"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0)(1, "div")(2, "label", 1),
                e._uU(3),
                e.ALo(4, "translate"),
                e.qZA(),
                e.TgZ(5, "p"),
                e._uU(6),
                e.ALo(7, "translate"),
                e.qZA()(),
                e.TgZ(8, "file-upload", 2),
                e.NdJ("callback", function(a) {
                    return t.onCallback(a)
                })("delete", function(a) {
                    return t.onDelete(a)
                }),
                e.qZA()()),
                2 & n && (e.xp6(3),
                e.Oqu(e.lcZ(4, 8, t.title)),
                e.xp6(3),
                e.hij(" ", e.lcZ(7, 10, t.desc), " "),
                e.xp6(2),
                e.Q6J("fileUploaded", t.fileUploaded)("fileName", t.fileName)("fileSize", t.fileSize)("maxSize", t.maxFileSize)("delivered", t.delivered)("id", t.id.toString()))
            },
            dependencies: [z, r.X$],
            styles: ["[_nghost-%COMP%]     .mat-mdc-radio-button.mat-primary~.mat-mdc-radio-button .mdc-form-field{color:var(--mdc-radio-selected-icon-color, #6200ee)!important}"]
        });
        const bt = function(i) {
            return {
                "ng-invalid": i
            }
        };
        function yt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "form", 7)(1, "mat-dialog-content")(2, "div", 8)(3, "h3", 9),
                e._uU(4),
                e.ALo(5, "translate"),
                e.qZA(),
                e.TgZ(6, "div", 10)(7, "span", 11),
                e._uU(8),
                e.ALo(9, "translate"),
                e.qZA(),
                e.TgZ(10, "div", 12)(11, "div", 13)(12, "span", 14),
                e._uU(13),
                e.qZA(),
                e.O4$(),
                e.TgZ(14, "svg", 15),
                e._UZ(15, "path", 16),
                e.qZA()()()(),
                e.kcU(),
                e.TgZ(16, "div", 17)(17, "span", 18),
                e._uU(18),
                e.ALo(19, "translate"),
                e.qZA(),
                e.TgZ(20, "div", 19)(21, "span", 20),
                e._uU(22),
                e.qZA()()(),
                e.TgZ(23, "h3", 21),
                e._uU(24),
                e.ALo(25, "translate"),
                e.qZA(),
                e.TgZ(26, "div", 22)(27, "span", 23),
                e._uU(28),
                e.ALo(29, "translate"),
                e.qZA(),
                e.TgZ(30, "div", 19),
                e._UZ(31, "input", 24),
                e.ALo(32, "translate"),
                e.YNc(33, pt, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(34, "div", 17)(35, "span", 23),
                e._uU(36),
                e.ALo(37, "translate"),
                e.qZA(),
                e.TgZ(38, "div", 19),
                e._UZ(39, "input", 26),
                e.ALo(40, "translate"),
                e.YNc(41, mt, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(42, "div", 17)(43, "span", 23),
                e._uU(44),
                e.ALo(45, "translate"),
                e.qZA(),
                e.TgZ(46, "div", 27)(47, "div", 28)(48, "input", 29),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.MAs(51);
                    return e.KtG(a.open())
                }),
                e.ALo(49, "translate"),
                e.qZA(),
                e._UZ(50, "mat-datepicker", null, 30),
                e.TgZ(52, "mat-datepicker-toggle", 31)(53, "mat-icon", 32),
                e.O4$(),
                e.TgZ(54, "svg", 33),
                e._UZ(55, "path", 16),
                e.qZA()()()(),
                e.YNc(56, ut, 3, 3, "span", 25),
                e.qZA()(),
                e.kcU(),
                e.TgZ(57, "div", 17)(58, "span", 23),
                e._uU(59),
                e.ALo(60, "translate"),
                e.qZA(),
                e.TgZ(61, "div", 19)(62, "mat-select", 34),
                e.ALo(63, "translate"),
                e.TgZ(64, "mat-option", 35),
                e._uU(65, "M"),
                e.qZA(),
                e.TgZ(66, "mat-option", 35),
                e._uU(67, "F"),
                e.qZA()(),
                e.YNc(68, dt, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(69, "div", 17)(70, "span", 23),
                e._uU(71),
                e.ALo(72, "translate"),
                e.qZA(),
                e.TgZ(73, "div", 19)(74, "mat-select", 36),
                e.ALo(75, "translate"),
                e.YNc(76, gt, 2, 2, "mat-option", 37),
                e.qZA(),
                e.YNc(77, ft, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(78, "div", 17)(79, "span", 23),
                e._uU(80),
                e.ALo(81, "translate"),
                e.qZA(),
                e.TgZ(82, "div", 19),
                e._UZ(83, "input", 38),
                e.ALo(84, "translate"),
                e.YNc(85, Et, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(86, "div", 17)(87, "span", 23),
                e._uU(88),
                e.ALo(89, "translate"),
                e.qZA(),
                e.TgZ(90, "div", 19)(91, "mat-select", 39),
                e.ALo(92, "translate"),
                e.YNc(93, ht, 2, 2, "mat-option", 37),
                e.qZA(),
                e.YNc(94, At, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(95, "h3", 21),
                e._uU(96),
                e.ALo(97, "translate"),
                e.qZA(),
                e.TgZ(98, "div", 40)(99, "div", 22)(100, "span", 23),
                e._uU(101),
                e.ALo(102, "translate"),
                e.qZA(),
                e.TgZ(103, "div", 19),
                e._UZ(104, "input", 41),
                e.ALo(105, "translate"),
                e.YNc(106, vt, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(107, "div", 22)(108, "span", 23),
                e._uU(109),
                e.ALo(110, "translate"),
                e.qZA(),
                e.TgZ(111, "div", 27)(112, "div", 28)(113, "input", 42),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.MAs(116);
                    return e.KtG(a.open())
                }),
                e.ALo(114, "translate"),
                e.qZA(),
                e._UZ(115, "mat-datepicker", null, 43),
                e.TgZ(117, "mat-datepicker-toggle", 31)(118, "mat-icon", 32),
                e.O4$(),
                e.TgZ(119, "svg", 33),
                e._UZ(120, "path", 16),
                e.qZA()()()(),
                e.YNc(121, Tt, 3, 3, "span", 25),
                e.YNc(122, Ot, 3, 3, "span", 25),
                e.qZA()(),
                e.kcU(),
                e.TgZ(123, "div", 22)(124, "span", 23),
                e._uU(125),
                e.ALo(126, "translate"),
                e.qZA(),
                e.TgZ(127, "div", 19)(128, "mat-select", 44),
                e.ALo(129, "translate"),
                e.YNc(130, Mt, 2, 2, "mat-option", 37),
                e.qZA(),
                e.YNc(131, xt, 3, 3, "span", 25),
                e.qZA()(),
                e.TgZ(132, "div", 22)(133, "span", 23),
                e._uU(134),
                e.ALo(135, "translate"),
                e.qZA(),
                e.TgZ(136, "div", 27)(137, "div", 28)(138, "input", 45),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.MAs(141);
                    return e.KtG(a.open())
                }),
                e.ALo(139, "translate"),
                e.qZA(),
                e._UZ(140, "mat-datepicker", null, 46),
                e.TgZ(142, "mat-datepicker-toggle", 31)(143, "mat-icon", 32),
                e.O4$(),
                e.TgZ(144, "svg", 33),
                e._UZ(145, "path", 16),
                e.qZA()()()(),
                e.YNc(146, Dt, 3, 3, "span", 25),
                e.qZA()()(),
                e.kcU(),
                e.TgZ(147, "h3", 21),
                e._uU(148),
                e.ALo(149, "translate"),
                e.qZA(),
                e.TgZ(150, "div", 22)(151, "span", 23),
                e._uU(152),
                e.ALo(153, "translate"),
                e.qZA(),
                e.TgZ(154, "div", 19)(155, "div", 47)(156, "input", 48),
                e.NdJ("change", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.filterNumber(a))
                }),
                e.ALo(157, "translate"),
                e.qZA()(),
                e.YNc(158, Ut, 3, 2, "div", 49),
                e.qZA()(),
                e.TgZ(159, "div", 22)(160, "span", 23),
                e._uU(161),
                e.ALo(162, "translate"),
                e.qZA(),
                e.TgZ(163, "div", 19),
                e._UZ(164, "input", 50),
                e.ALo(165, "translate"),
                e.YNc(166, Zt, 3, 3, "span", 25),
                e.qZA()(),
                e.YNc(167, It, 3, 3, "h3", 51),
                e.YNc(168, Rt, 1, 6, "document-stripe", 52),
                e.YNc(169, Lt, 3, 4, "p", 53),
                e.qZA(),
                e.TgZ(170, "div", 54)(171, "button", 55),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.close())
                }),
                e._uU(172),
                e.ALo(173, "translate"),
                e.qZA()()()()
            }
            if (2 & i) {
                const t = e.MAs(51)
                  , o = e.MAs(116)
                  , a = e.MAs(141)
                  , s = e.oxw();
                e.Q6J("formGroup", s.form)("dir", s.currentDirection),
                e.xp6(4),
                e.hij(" ", e.lcZ(5, 74, "USER_DATA.SECTIONS.TRIP_DATE"), ""),
                e.xp6(4),
                e.Oqu(e.lcZ(9, 76, "USER_DATA.PROMPTS.TRIP_DATE")),
                e.xp6(5),
                e.Oqu(s.date),
                e.xp6(5),
                e.Oqu(e.lcZ(19, 78, "USER_DATA.PROMPTS.DESTINATION")),
                e.xp6(4),
                e.Oqu(s.destination),
                e.xp6(2),
                e.hij(" ", e.lcZ(25, 80, "USER_DATA.SECTIONS.INFO"), ""),
                e.xp6(4),
                e.Oqu(e.lcZ(29, 82, "USER_DATA.PROMPTS.NAME")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(32, 84, "USER_DATA.PLACEHOLDERS.NAME")),
                e.Q6J("readOnly", 0 === s.index),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("name").valid && s.form.get("name").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(37, 86, "USER_DATA.PROMPTS.SURNAME")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(40, 88, "USER_DATA.PLACEHOLDERS.SURNAME")),
                e.Q6J("readOnly", 0 === s.index),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("surname").valid && s.form.get("surname").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(45, 90, "USER_DATA.PROMPTS.BIRTH_DATE")),
                e.xp6(4),
                e.s9C("placeholder", e.lcZ(49, 92, "GLOBAL.DATE_FORMAT")),
                e.Q6J("matDatepicker", t)("max", s.todayDate),
                e.xp6(4),
                e.Q6J("for", t),
                e.xp6(4),
                e.Q6J("ngIf", !s.form.get("birthDate").valid && s.form.get("birthDate").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(60, 94, "USER_DATA.PROMPTS.GENDER")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(63, 96, "USER_DATA.PLACEHOLDERS.GENDER")),
                e.xp6(2),
                e.Q6J("value", "M"),
                e.xp6(2),
                e.Q6J("value", "F"),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("gender").valid && s.form.get("gender").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(72, 98, "USER_DATA.PROMPTS.NATIONALITY")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(75, 100, "USER_DATA.PLACEHOLDERS.NATIONALITY")),
                e.xp6(2),
                e.Q6J("ngForOf", s.nationalityList),
                e.xp6(1),
                e.Q6J("ngIf", !s.form.get("nationality").valid && s.form.get("nationality").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(81, 102, "USER_DATA.PROMPTS.RESIDENCE_ADDRESS")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(84, 104, "USER_DATA.PLACEHOLDERS.RESIDENCE_ADDRESS")),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("residenceAddress").valid && s.form.get("residenceAddress").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(89, 106, "USER_DATA.PROMPTS.RESIDENCE_STATE")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(92, 108, "USER_DATA.PLACEHOLDERS.RESIDENCE_STATE")),
                e.xp6(2),
                e.Q6J("ngForOf", s.countryList),
                e.xp6(1),
                e.Q6J("ngIf", !s.form.get("residenceCountry").valid && s.form.get("residenceCountry").touched),
                e.xp6(2),
                e.hij(" ", e.lcZ(97, 110, "USER_DATA.SECTIONS.PASSPORT"), ""),
                e.xp6(5),
                e.Oqu(e.lcZ(102, 112, "USER_DATA.PROMPTS.PASSPORT_NUMBER")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(105, 114, "USER_DATA.PLACEHOLDERS.PASSPORT_NUMBER")),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("passport").get("number").valid && s.form.get("passport").get("number").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(110, 116, "USER_DATA.PROMPTS.PASSPORT_ISSUED")),
                e.xp6(4),
                e.s9C("placeholder", e.lcZ(114, 118, "GLOBAL.DATE_FORMAT")),
                e.Q6J("matDatepicker", o)("max", s.todayDate)("ngClass", e.VKq(140, bt, null == s.form.errors ? null : s.form.errors.passportEarlier)),
                e.xp6(4),
                e.Q6J("for", o),
                e.xp6(4),
                e.Q6J("ngIf", !s.form.get("passport").get("issueDate").valid && !(null != s.form.errors && s.form.errors.passportEarlier) && s.form.get("passport").get("issueDate").touched),
                e.xp6(1),
                e.Q6J("ngIf", null == s.form.errors ? null : s.form.errors.passportEarlier),
                e.xp6(3),
                e.Oqu(e.lcZ(126, 120, "USER_DATA.PROMPTS.PASSPORT_COUNTRY")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(129, 122, "USER_DATA.PLACEHOLDERS.PASSPORT_COUNTRY")),
                e.xp6(2),
                e.Q6J("ngForOf", s.countryList),
                e.xp6(1),
                e.Q6J("ngIf", !s.form.get("passport").get("state").valid && s.form.get("passport").get("state").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(135, 124, "USER_DATA.PROMPTS.PASSPORT_EXPIRE")),
                e.xp6(4),
                e.s9C("placeholder", e.lcZ(139, 126, "GLOBAL.DATE_FORMAT")),
                e.Q6J("matDatepicker", a)("min", s.todayDate),
                e.xp6(4),
                e.Q6J("for", a),
                e.xp6(4),
                e.Q6J("ngIf", !s.form.get("passport").get("expirationDate").valid && s.form.get("passport").get("expirationDate").touched),
                e.xp6(2),
                e.hij(" ", e.lcZ(149, 128, "USER_DATA.SECTIONS.CONTACTS"), ""),
                e.xp6(4),
                e.Oqu(e.lcZ(153, 130, "USER_DATA.PROMPTS.PHONE")),
                e.xp6(4),
                e.s9C("placeholder", e.lcZ(157, 132, "USER_DATA.PLACEHOLDERS.PHONE")),
                e.Q6J("maxlength", s.phoneMaxLength)("readOnly", 0 === s.data.index),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("phoneNumber").valid && s.form.get("phoneNumber").touched),
                e.xp6(3),
                e.Oqu(e.lcZ(162, 134, "USER_DATA.PROMPTS.EMAIL")),
                e.xp6(3),
                e.s9C("placeholder", e.lcZ(165, 136, "USER_DATA.PLACEHOLDERS.EMAIL")),
                e.Q6J("readOnly", 0 === s.index),
                e.xp6(2),
                e.Q6J("ngIf", !s.form.get("email").valid && s.form.get("email").touched),
                e.xp6(1),
                e.Q6J("ngIf", s.documents && s.documents.length > 0),
                e.xp6(1),
                e.Q6J("ngForOf", s.documents),
                e.xp6(1),
                e.Q6J("ngIf", s.maxFileSize),
                e.xp6(3),
                e.hij(" ", e.lcZ(173, 138, "USER_DATA.CONFIRM_BUTTON"), " ")
            }
        }
        class X extends E.k {
            onLanguageChange(n) {}
            constructor(n, t, o, a, s) {
                super(s),
                this.documentProvider = n,
                this.dialogRef = t,
                this.dateAdapter = o,
                this.data = a,
                this.phoneMaxLength = 15,
                this.index = 0,
                this.visa = "",
                this.codeISOAlpha3 = ""
            }
            ngOnInit() {
                this.form = this.data.form,
                this.date = this.data.date,
                this.index = this.data.index,
                this.destination = this.data.destination,
                this.visa = this.data.visa,
                this.countryList = this.data.countrie,
                this.nationalityList = this.data.nationalities,
                this.phonePrefixes = this.data.phonePrefixes,
                this.form.markAllAsTouched();
                const n = this.form.get("documents")?.value || [];
                this.uploadedDocuments = n,
                this.getDocuments()
            }
            get todayDate() {
                return new Date
            }
            get name() {
                const n = this.form.controls.name.value
                  , t = this.form.controls.surname.value;
                return n || t ? n + " " + t : "Richiedente " + this.index
            }
            filterNumber(n) {
                const a = this.form.controls.phoneNumber.value.match(/[+]{1}[0-9]+/i);
                this.form.controls.phoneNumber.setValue(a ? a[0] : null)
            }
            close() {
                this.form.markAllAsTouched(),
                this.dialogRef.close()
            }
            getDocuments() {
                this.documentProvider.getVisaDocuments(this.form.value.visaId).pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    const t = n.filter(o=>!0 === o.requiredUpload);
                    this.requiredDocuments = t,
                    this.documentsHandler()
                }
                ), (0,
                v.K)(n=>(0,
                U.of)(n))).subscribe()
            }
            uploadCallback(n) {
                this.uploadedDocuments.push(n),
                this.form.get("documents")?.setValue(this.uploadedDocuments),
                this.documentsHandler()
            }
            deleteCallback(n) {
                this.uploadedDocuments = this.uploadedDocuments.filter(t=>t.temporaryKey !== n),
                this.form.get("documents")?.setValue(this.uploadedDocuments),
                this.documentsHandler()
            }
            documentsHandler() {
                if (this.uploadedDocuments && this.uploadedDocuments.length > 0) {
                    const n = {};
                    this.uploadedDocuments.forEach(o=>{
                        n[o.documentTypeId] = o
                    }
                    );
                    const t = this.requiredDocuments.map(o=>{
                        const a = n[o.id];
                        return a ? {
                            id: o.id,
                            title: o.title,
                            description: o.description,
                            required: o.required,
                            temporaryKey: a.temporaryKey,
                            fileName: a.fileName,
                            fileSize: a.fileSize
                        } : o
                    }
                    );
                    this.documents = t
                } else
                    this.documents = this.requiredDocuments;
                this.requiredDocuments.length === this.uploadedDocuments.length ? this.form.get("documents").setErrors(null) : this.form.get("documents").setErrors({
                    customError: !0
                })
            }
            setMaxFileSize(n) {
                this.maxFileSize = Number(n) / 1048576 + "MB"
            }
            get prefixError() {
                return `{prefixes: '${this.phonePrefixes.join(", ")}'}`
            }
        }
        X.\u0275fac = function(n) {
            return new (n || X)(e.Y36(M.$),e.Y36(ce.so),e.Y36(Y._A),e.Y36(ce.WI),e.Y36(x.yh))
        }
        ,
        X.\u0275cmp = e.Xpm({
            type: X,
            selectors: [["app-user-data"]],
            features: [e.qOj],
            decls: 10,
            vars: 5,
            consts: [[1, "bg-sky-100", 3, "dir"], [1, "flex", "flex-row", "items-center", "ml-5", "p-4", "gap-6", "text-visa-primary-500"], [1, "w-8", "h-8", "md:w-10", "md:h-10"], [1, "flex", "flex-col"], [1, "text-visa-primary-500", "font-bold"], [1, "text-visa-primary-500", "text-sm"], [3, "formGroup", "dir", 4, "ngIf"], [3, "formGroup", "dir"], [1, "grid", "grid-rows-auto", "border-visa-primary-200", "border-solid"], [1, "text-center", "md:text-start", "font-bold", "text-2xl", "text-visa-primary-500"], [1, "flex", "flex-col", "gap-2", "md:grid", "md:grid-cols-8", "items-center", "mt-4"], [1, "text-md", "md:col-span-3"], [1, "w-full", "md:col-span-5"], [1, "flex", "flex-row", "w-full", "justify-start", "items-center", "gap-3"], [1, "w-full", "md:w-3/6", "bg-visa-primary-50", "rounded-md", "p-3"], ["width", "24", "height", "24", "viewBox", "0 0 36 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V6C0 5.2 0.3 4.5 0.9 3.9C1.5 3.3 2.2 3 3 3H6.25V0H9.5V3H26.5V0H29.75V3H33C33.8 3 34.5 3.3 35.1 3.9C35.7 4.5 36 5.2 36 6V37C36 37.8 35.7 38.5 35.1 39.1C34.5 39.7 33.8 40 33 40H3ZM3 37H33V15.5H3V37ZM3 12.5H33V6H3V12.5ZM18 24C17.4333 24 16.9583 23.8083 16.575 23.425C16.1917 23.0417 16 22.5667 16 22C16 21.4333 16.1917 20.9583 16.575 20.575C16.9583 20.1917 17.4333 20 18 20C18.5667 20 19.0417 20.1917 19.425 20.575C19.8083 20.9583 20 21.4333 20 22C20 22.5667 19.8083 23.0417 19.425 23.425C19.0417 23.8083 18.5667 24 18 24ZM10 24C9.43333 24 8.95833 23.8083 8.575 23.425C8.19167 23.0417 8 22.5667 8 22C8 21.4333 8.19167 20.9583 8.575 20.575C8.95833 20.1917 9.43333 20 10 20C10.5667 20 11.0417 20.1917 11.425 20.575C11.8083 20.9583 12 21.4333 12 22C12 22.5667 11.8083 23.0417 11.425 23.425C11.0417 23.8083 10.5667 24 10 24ZM26 24C25.4333 24 24.9583 23.8083 24.575 23.425C24.1917 23.0417 24 22.5667 24 22C24 21.4333 24.1917 20.9583 24.575 20.575C24.9583 20.1917 25.4333 20 26 20C26.5667 20 27.0417 20.1917 27.425 20.575C27.8083 20.9583 28 21.4333 28 22C28 22.5667 27.8083 23.0417 27.425 23.425C27.0417 23.8083 26.5667 24 26 24ZM18 32C17.4333 32 16.9583 31.8083 16.575 31.425C16.1917 31.0417 16 30.5667 16 30C16 29.4333 16.1917 28.9583 16.575 28.575C16.9583 28.1917 17.4333 28 18 28C18.5667 28 19.0417 28.1917 19.425 28.575C19.8083 28.9583 20 29.4333 20 30C20 30.5667 19.8083 31.0417 19.425 31.425C19.0417 31.8083 18.5667 32 18 32ZM10 32C9.43333 32 8.95833 31.8083 8.575 31.425C8.19167 31.0417 8 30.5667 8 30C8 29.4333 8.19167 28.9583 8.575 28.575C8.95833 28.1917 9.43333 28 10 28C10.5667 28 11.0417 28.1917 11.425 28.575C11.8083 28.9583 12 29.4333 12 30C12 30.5667 11.8083 31.0417 11.425 31.425C11.0417 31.8083 10.5667 32 10 32ZM26 32C25.4333 32 24.9583 31.8083 24.575 31.425C24.1917 31.0417 24 30.5667 24 30C24 29.4333 24.1917 28.9583 24.575 28.575C24.9583 28.1917 25.4333 28 26 28C26.5667 28 27.0417 28.1917 27.425 28.575C27.8083 28.9583 28 29.4333 28 30C28 30.5667 27.8083 31.0417 27.425 31.425C27.0417 31.8083 26.5667 32 26 32Z", "fill", "#2F55D4"], [1, "md:grid", "md:grid-cols-8", "flex", "flex-col", "gap-2", "mt-4", "items-center"], [1, "md:col-span-3", "text-md"], [1, "w-full", "md:col-span-5", "flex", "flex-col"], [1, "w-full", "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3"], [1, "text-center", "md:text-start", "font-bold", "text-2xl", "mt-10", "text-visa-primary-500"], [1, "md:grid", "md:grid-cols-8", "flex", "flex-col", "gap-2", "mt-2", "items-center"], [1, "md:col-span-3", "text-md", "text-black", "font-bold"], ["formControlName", "name", 1, "w-full", "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder", "readOnly"], ["class", "text-xs text-red-500", 4, "ngIf"], ["formControlName", "surname", 1, "w-full", "md:2col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder", "readOnly"], [1, "w-full", "md:col-span-5", "items-center"], [1, "flex", "flex-row", "items-center"], ["matInput", "", "formControlName", "birthDate", "readonly", "", 1, "bg-visa-primary-50", "p-3", "rounded-md", 3, "placeholder", "matDatepicker", "max", "click"], ["birthDate", ""], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["width", "36", "height", "40", "viewBox", "0 0 36 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["formControlName", "gender", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-2", 3, "placeholder"], [3, "value"], ["formControlName", "nationality", 1, "w-full", "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-2", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "residenceAddress", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder"], ["formControlName", "residenceCountry", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-2", 3, "placeholder"], ["formGroupName", "passport"], ["maxlength", "10", "formControlName", "number", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder"], ["matInput", "", "formControlName", "issueDate", "readonly", "", 1, "bg-visa-primary-50", "p-3", "rounded-md", 3, "placeholder", "matDatepicker", "max", "ngClass", "click"], ["passportReleaseDate", ""], ["formControlName", "state", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-2", 3, "placeholder"], ["matInput", "", "formControlName", "expirationDate", "readonly", "", 1, "bg-visa-primary-50", "p-3", "rounded-md", 3, "placeholder", "matDatepicker", "min", "click"], ["passportExpireDate", ""], [1, "flex", "flex-row", "items-center", "gap-0"], ["type", "text", "formControlName", "phoneNumber", 1, "md:col-span-5", "bg-visa-primary-50", "p-3", "rounded-md", 3, "maxlength", "placeholder", "readOnly", "change"], [4, "ngIf"], ["formControlName", "email", 1, "md:col-span-5", "bg-visa-primary-50", "rounded-lg", "p-3", 3, "placeholder", "readOnly"], ["class", "text-center md:text-start font-bold text-2xl mt-10 text-visa-primary-500 mb-5", 4, "ngIf"], [3, "id", "title", "desc", "fileUploaded", "fileName", "fileSize", "onFileUploadedResult", "onFileDeletedResult", "maxFileSizeEmitter", 4, "ngFor", "ngForOf"], ["class", "text-red-500 italic mt-3", 4, "ngIf"], [1, "flex", "justify-center", "mt-5", "next-container"], [1, "visasys-button", "w-72", "mt-6", 3, "click"], [1, "text-xs", "text-red-500"], [1, "text-center", "md:text-start", "font-bold", "text-2xl", "mt-10", "text-visa-primary-500", "mb-5"], [3, "id", "title", "desc", "fileUploaded", "fileName", "fileSize", "onFileUploadedResult", "onFileDeletedResult", "maxFileSizeEmitter"], [1, "text-red-500", "italic", "mt-3"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "circle-counter", 2),
                e._uU(3),
                e.qZA(),
                e.TgZ(4, "div", 3)(5, "span", 4),
                e._uU(6),
                e.qZA(),
                e.TgZ(7, "span", 5),
                e._uU(8),
                e.qZA()()()(),
                e.YNc(9, yt, 174, 142, "form", 6)),
                2 & n && (e.Q6J("dir", t.currentDirection),
                e.xp6(3),
                e.Oqu(t.data.index + 1),
                e.xp6(3),
                e.Oqu(t.name),
                e.xp6(2),
                e.Oqu(t.visa),
                e.xp6(1),
                e.Q6J("ngIf", t.form))
            },
            dependencies: [c.mk, c.sg, c.O5, ge.h, G.Lv, y.Hw, Oe.R9, Me.Nt, de.gD, Y.ey, ce.xY, Z.Mq, Z.hl, Z.nW, Z.Q0, l._Y, l.Fj, l.JJ, l.JL, l.nD, l.sg, l.u, l.x0, $, r.X$],
            styles: [".mat-mdc-dialog-container .mdc-dialog__surface{overflow:hidden;border-radius:.475em;height:auto}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"]
        });
        const St = i=>{
            const n = i.get("passport").get("issueDate")
              , t = i.get("birthDate");
            return null === t.value || null === n.value ? null : n.value < t.value ? (n.setErrors({
                incorrect: !0
            }),
            {
                passportEarlier: !0
            }) : null
        }
        ;
        var De = _(9252);
        function qt(i, n) {
            if (1 & i && (e.TgZ(0, "div", 7),
            e._UZ(1, "img", 8),
            e.TgZ(2, "label", 9),
            e._uU(3),
            e.ALo(4, "translate"),
            e.qZA()()),
            2 & i) {
                const t = e.oxw();
                e.Q6J("dir", t.currentDirection),
                e.xp6(3),
                e.Oqu(e.lcZ(4, 2, "MEMBER_LIST.DATA_INCOMPLETE"))
            }
        }
        function Bt(i, n) {
            if (1 & i && (e.TgZ(0, "div", 7),
            e._UZ(1, "img", 10),
            e.TgZ(2, "label", 9),
            e._uU(3),
            e.ALo(4, "translate"),
            e.qZA()()),
            2 & i) {
                const t = e.oxw();
                e.Q6J("dir", t.currentDirection),
                e.xp6(3),
                e.Oqu(e.lcZ(4, 2, "MEMBER_LIST.DATA_COMPLETE"))
            }
        }
        const Nt = function(i) {
            return {
                "container--incomplete": i
            }
        }
          , wt = function(i) {
            return {
                "mr-2 lg:mr-6": i
            }
        };
        class ee {
            constructor() {
                this.incomplete = !0
            }
            get name() {
                return `${this.form.controls.name.value ? this.form.controls.name.value : "Richiedente"} ${this.form.controls.surname.value ? this.form.controls.surname.value : this.index + 1}`
            }
        }
        function Kt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 11)(1, "member-list-item", 12),
                e.NdJ("click", function() {
                    const s = e.CHM(t).index
                      , p = e.oxw(2);
                    return e.KtG(p.openDialog(s))
                }),
                e.qZA()()
            }
            if (2 & i) {
                const t = n.index
                  , o = e.oxw(2);
                e.xp6(1),
                e.Q6J("currentDirection", o.currentDirection)("index", t)("incomplete", !o.getPartecipantForm(t).valid)("form", o.getPartecipantForm(t))("visa", o.getVisa(t))
            }
        }
        function Ft(i, n) {
            if (1 & i && (e.TgZ(0, "div"),
            e.YNc(1, Kt, 2, 5, "div", 10),
            e.qZA()),
            2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("ngForOf", t.applicants.controls)
            }
        }
        ee.\u0275fac = function(n) {
            return new (n || ee)
        }
        ,
        ee.\u0275cmp = e.Xpm({
            type: ee,
            selectors: [["member-list-item"]],
            inputs: {
                index: "index",
                incomplete: "incomplete",
                form: "form",
                visa: "visa",
                currentDirection: "currentDirection"
            },
            decls: 11,
            vars: 12,
            consts: [[1, "flex", "items-center", "bg-hue", "text-white", "px-1", "md:px-6", "container", "justify-between", 3, "ngClass", "dir"], [1, "flex", "items-center"], [1, "w-8", "h-8", "md:w-10", "md:h-10"], [1, "ml-2", "lg:ml-6", 3, "ngClass"], [1, "text-lg", "md:text-xl", "font-bold"], [1, "text-xs", "font-bold"], ["class", "flex fle-row gap-1 md:gap-2 items-center", 3, "dir", 4, "ngIf"], [1, "flex", "fle-row", "gap-1", "md:gap-2", "items-center", 3, "dir"], ["src", "assets/images/incomplete-list.svg", 1, "2-4", "md:w-6"], [1, "text-xs"], ["src", "assets/images/completed-check.svg", 1, "w-4", "md:w-6"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "circle-counter", 2),
                e._uU(3),
                e.qZA(),
                e.TgZ(4, "div", 3)(5, "div", 4),
                e._uU(6),
                e.qZA(),
                e.TgZ(7, "div", 5),
                e._uU(8),
                e.qZA()()(),
                e.YNc(9, qt, 5, 4, "div", 6),
                e.YNc(10, Bt, 5, 4, "div", 6),
                e.qZA()),
                2 & n && (e.Q6J("ngClass", e.VKq(8, Nt, t.incomplete))("dir", t.currentDirection),
                e.xp6(3),
                e.hij("", t.index + 1, " "),
                e.xp6(1),
                e.Q6J("ngClass", e.VKq(10, wt, "rtl" === t.currentDirection)),
                e.xp6(2),
                e.Oqu(t.name),
                e.xp6(2),
                e.Oqu(t.visa.title),
                e.xp6(1),
                e.Q6J("ngIf", t.incomplete),
                e.xp6(1),
                e.Q6J("ngIf", !t.incomplete))
            },
            dependencies: [c.mk, c.O5, ge.h, G.Lv, r.X$],
            styles: [".container[_ngcontent-%COMP%]{border-radius:10px;height:85px}.container--incomplete[_ngcontent-%COMP%]{background-color:#d42f2f}.circle-indicator[_ngcontent-%COMP%]{border:3px solid;border-radius:100%;height:100%;width:100%;display:flex;align-items:center;justify-content:center}"]
        });
        class te extends E.k {
            onLanguageChange(n) {
                this.service && this.populateSelect()
            }
            constructor(n, t, o, a, s, p) {
                super(o),
                this.matDialog = n,
                this.fb = t,
                this.auth = a,
                this.service = s,
                this.configurationService = p,
                this.loggedPerson = null,
                this.visaIds = [],
                this.visaList = [],
                this.countryList = [],
                this.nationalityList = [],
                this.codeISOAlpha3 = "EGY"
            }
            ngOnInit() {
                const t = this.configurationService.getConfiguration().environment;
                this.codeISOAlpha3 = t.codeISOAlpha3,
                this.populateSelect(),
                this.store.select(L.cS).subscribe(o=>this.visaList = o),
                this.stepper.selectionChange.subscribe(o=>{
                    if (1 == o.selectedIndex && o.previouslySelectedIndex < o.selectedIndex) {
                        const a = this.appointmentForm[0].controls.personNumber.value;
                        this.spreadVisas(),
                        this.appointmentForm[1] = this.fb.group({
                            applicants: this.fb.array([]),
                            recaptcha: new l.NI(null)
                        });
                        const s = this.appointmentForm[1].controls.applicants;
                        for (let p = 0; p < a; p++)
                            s.push(this.fb.group({
                                owner: [0 === p],
                                visaId: [this.visaIds[p]],
                                name: [null, l.kI.compose([l.kI.required, l.kI.maxLength(100)])],
                                surname: ["", l.kI.compose([l.kI.required, l.kI.maxLength(100), l.kI.minLength(1)])],
                                birthDate: [null, l.kI.required],
                                gender: [null, l.kI.required],
                                nationality: [this.codeISOAlpha3, l.kI.required],
                                residenceAddress: [null, l.kI.required],
                                residenceCountry: [this.codeISOAlpha3, l.kI.required],
                                documents: [null, l.kI.required],
                                passport: this.fb.group({
                                    number: [null, l.kI.compose([l.kI.pattern("[a-zA-Z0-9]*"), l.kI.maxLength(10), l.kI.required])],
                                    issueDate: [null, l.kI.required],
                                    state: [this.codeISOAlpha3, l.kI.required],
                                    expirationDate: [null, l.kI.required]
                                }),
                                phoneNumber: [null, l.kI.compose([l.kI.minLength(8), l.kI.required, Wt(this.phonePrefixes)])],
                                email: [null, l.kI.compose([l.kI.required, l.kI.email])]
                            }, {
                                validators: [St]
                            }));
                        this.setFirstApplicantInfo()
                    }
                }
                ),
                this.subscriptions.push(this.store.select(k.G).subscribe(o=>{
                    this.phonePrefixes = o.areaCode
                }
                ))
            }
            setFirstApplicantInfo() {
                if (!this.auth.isAuthenticated$)
                    return;
                this.loggedPerson = this.auth.userInfo;
                const n = this.getPartecipantForm(0);
                n.controls.name.setValue(this.loggedPerson.info.given_name),
                n.controls.surname.setValue(this.loggedPerson.info.family_name),
                n.controls.email.setValue(this.loggedPerson.info.email),
                n.controls.phoneNumber.setValue(this.loggedPerson.info.phone_number)
            }
            get applicants() {
                return this.appointmentForm[1].get("applicants")
            }
            getPartecipantForm(n) {
                return this.applicants.at(n)
            }
            getVisa(n) {
                const t = this.visaIds[n];
                return this.visaList.filter(o=>o.id === t).at(0)
            }
            spreadVisas() {
                this.visaIds = [];
                const n = this.appointmentForm[0].get("visas");
                for (let t of n.controls)
                    for (let o = 0; o < t.value.quantity; o++)
                        this.visaIds.push(t.value.visaId)
            }
            nextStep() {
                this.stepper.steps.toArray().at(1).completed = !0,
                this.stepper.next()
            }
            getDate() {
                return new Date(this.appointmentForm[0].controls.tripDate.value).toLocaleDateString()
            }
            getDestination() {
                return this.appointmentForm[0].controls.tripDestination.value
            }
            openDialog(n) {
                this.matDialog.open(X, {
                    panelClass: "responsive-dialog",
                    disableClose: !0,
                    data: {
                        form: this.applicants.at(n),
                        index: n,
                        date: this.getDate(),
                        destination: this.getDestination(),
                        visa: this.getVisa(n).title,
                        nationalities: this.nationalityList,
                        countrie: this.countryList,
                        phonePrefixes: this.phonePrefixes,
                        codeISOAlpha3: this.codeISOAlpha3
                    }
                })
            }
            prevStep() {
                this.stepper.steps.toArray().at(1).completed = !1,
                this.stepper.previous()
            }
            deleteUser(n) {}
            getAllCountries() {
                return this.service.getCountryList().pipe((0,
                v.K)(n=>(0,
                U.of)(n)))
            }
            getAllNationalities() {
                return this.service.getNationalityList().pipe((0,
                v.K)(n=>(0,
                U.of)(n)))
            }
            populateSelect() {
                this.subscriptions.push((0,
                he.D)([this.getAllCountries(), this.getAllNationalities()]).subscribe(n=>{
                    n[0]instanceof d.UA || (this.countryList = n[0]),
                    n[1]instanceof d.UA || (this.nationalityList = n[1])
                }
                ))
            }
        }
        function Wt(i) {
            return n=>i.some(o=>n.value?.startsWith(o)) ? null : {
                invalidPrefix: {
                    value: n.value
                }
            }
        }
        te.\u0275fac = function(n) {
            return new (n || te)(e.Y36(ce.uw),e.Y36(l.qu),e.Y36(x.yh),e.Y36(De.e),e.Y36(J.c),e.Y36(le.e))
        }
        ,
        te.\u0275cmp = e.Xpm({
            type: te,
            selectors: [["app-members-list"]],
            inputs: {
                stepper: "stepper",
                appointmentForm: "appointmentForm"
            },
            features: [e.qOj],
            decls: 22,
            vars: 16,
            consts: [[1, "grid", "grid-rows-auto", "lg:border-alert-background", "border-solid", "lg:p-8", "lg:border", "lg:rounded-lg", 3, "dir"], [1, "text-2xl", "text-hue", "font-bold"], [1, "text-base", "font-light", "my-4"], [4, "ngIf"], [1, "items-center", "flex", "flex-col", "lg:flex-row", "lg:justify-between", 3, "dir"], [1, "next-container"], [1, "visasys-button", "white", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "click"], [1, "left-image"], [1, "visasys-button", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "disabled", "click"], [1, "right-image"], ["class", "my-4", 4, "ngFor", "ngForOf"], [1, "my-4"], [3, "currentDirection", "index", "incomplete", "form", "visa", "click"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0)(1, "div")(2, "div", 1),
                e._uU(3),
                e.ALo(4, "translate"),
                e.qZA(),
                e.TgZ(5, "div", 2),
                e._uU(6),
                e.ALo(7, "translate"),
                e.qZA(),
                e.YNc(8, Ft, 2, 1, "div", 3),
                e.qZA()(),
                e.TgZ(9, "div", 4)(10, "div", 5)(11, "button", 6),
                e.NdJ("click", function() {
                    return t.prevStep()
                }),
                e.TgZ(12, "mat-icon", 7),
                e._uU(13, "chevron_left"),
                e.qZA(),
                e._uU(14),
                e.ALo(15, "translate"),
                e.qZA()(),
                e.TgZ(16, "div", 5)(17, "button", 8),
                e.NdJ("click", function() {
                    return t.nextStep()
                }),
                e._uU(18),
                e.ALo(19, "translate"),
                e.TgZ(20, "mat-icon", 9),
                e._uU(21, "chevron_right"),
                e.qZA()()()()),
                2 & n && (e.Q6J("dir", t.currentDirection),
                e.xp6(3),
                e.Oqu(e.lcZ(4, 8, "MEMBER_LIST.APPLICANTS_LIST")),
                e.xp6(3),
                e.Oqu(e.lcZ(7, 10, "MEMBER_LIST.LIST_PROMPT")),
                e.xp6(2),
                e.Q6J("ngIf", t.applicants),
                e.xp6(1),
                e.Q6J("dir", t.currentDirection),
                e.xp6(5),
                e.hij(" ", e.lcZ(15, 12, "MEMBER_LIST.BACK_BUTTON"), " "),
                e.xp6(3),
                e.Q6J("disabled", !t.appointmentForm[1].valid),
                e.xp6(1),
                e.hij(" ", e.lcZ(19, 14, "MEMBER_LIST.FORWARD_BUTTON"), " "))
            },
            dependencies: [c.sg, c.O5, G.Lv, y.Hw, ee, r.X$]
        });
        var kt = _(1158)
          , C = _.n(kt)
          , Yt = _(3546)
          , Ce = _(7331);
        const Jt = ["calendar"]
          , Qt = function(i) {
            return {
                selectedChip: i
            }
        };
        function Vt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "mat-chip", 19),
                e.NdJ("click", function() {
                    const s = e.CHM(t).index
                      , p = e.oxw(3);
                    return e.KtG(p.onSelectedChip(s))
                }),
                e._uU(1),
                e.qZA()
            }
            if (2 & i) {
                const t = n.$implicit;
                e.Q6J("ngClass", e.VKq(2, Qt, t.checked)),
                e.xp6(1),
                e.Oqu(t.name)
            }
        }
        function Ht(i, n) {
            if (1 & i && (e.TgZ(0, "div", 9)(1, "h3", 16),
            e._uU(2),
            e.ALo(3, "translate"),
            e.qZA(),
            e.TgZ(4, "p", 11),
            e._uU(5),
            e.ALo(6, "translate"),
            e.qZA(),
            e.TgZ(7, "div", 17)(8, "mat-chip-set"),
            e.YNc(9, Vt, 2, 4, "mat-chip", 18),
            e.qZA()()()),
            2 & i) {
                const t = e.oxw(2);
                e.xp6(2),
                e.Oqu(e.lcZ(3, 3, "APPOINTMENT_DATE.CHOOSE_SCHEDULE")),
                e.xp6(3),
                e.Oqu(e.lcZ(6, 5, "APPOINTMENT_DATE.TIMEZONE")),
                e.xp6(4),
                e.Q6J("ngForOf", t.appointmentSlot)
            }
        }
        function Gt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "form", 7)(1, "div", 8)(2, "div", 9)(3, "h3", 10),
                e._uU(4),
                e.ALo(5, "translate"),
                e.qZA(),
                e.TgZ(6, "p", 11),
                e._uU(7),
                e.ALo(8, "translate"),
                e.qZA(),
                e.TgZ(9, "mat-card", 12)(10, "mat-calendar", 13, 14),
                e.NdJ("selectedChange", function(a) {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.updateFormDate(a))
                }),
                e.qZA()()(),
                e.YNc(12, Ht, 10, 7, "div", 15),
                e.qZA()()
            }
            if (2 & i) {
                const t = e.oxw();
                e.Q6J("formGroup", t.appointmentForm[2])("dir", t.currentDirection),
                e.xp6(4),
                e.Oqu(e.lcZ(5, 9, "APPOINTMENT_DATE.CHOOSE_DAY")),
                e.xp6(3),
                e.Oqu(e.lcZ(8, 11, "APPOINTMENT_DATE.CHOOSE_DAY_DISCLAIMER")),
                e.xp6(3),
                e.Q6J("minDate", t.minDate)("maxDate", t.maxDate)("dateFilter", t.slotFilter)("selected", t.appointmentForm[2].get("selectedDate").value),
                e.xp6(2),
                e.Q6J("ngIf", t.appointmentForm[2].get("selectedDate").value)
            }
        }
        class ne extends E.k {
            onLanguageChange(n) {}
            constructor(n, t, o, a) {
                super(a),
                this.fb = n,
                this.toaster = t,
                this.service = o,
                this.slots = {},
                this.selectable = !0,
                this.minDate = new Date,
                this.slotFilter = s=>{
                    const p = C()(s).format("YYYY-MM-DD");
                    return Object.keys(this.slots).includes(p)
                }
            }
            ngOnInit() {
                this.maxDate = new Date,
                this.maxDate.setMonth(this.maxDate.getMonth() + 1),
                this.setForm(),
                this.stepper.selectionChange.subscribe(n=>{
                    3 == n.selectedIndex && n.previouslySelectedIndex < n.selectedIndex && this.getSlots()
                }
                )
            }
            setForm() {
                this.appointmentForm[2] = this.fb.group({
                    selectedDate: ["", l.kI.required],
                    slotStartDate: ["", l.kI.required]
                })
            }
            updateFormDate(n) {
                this.appointmentSlot = [],
                this.slots[C().tz(n, this.timezone).format("YYYY-MM-DD")].forEach((t,o)=>{
                    this.appointmentSlot.push({
                        name: t,
                        checked: !1,
                        id: o
                    })
                }
                ),
                this.uncheckChips(),
                this.appointmentForm[2].get("selectedDate").patchValue(n),
                this.calendar.activeDate = C().tz(n, this.timezone).toDate(),
                this.calendar.updateTodaysDate(),
                this.appointmentSlot.length > 0 && this.onSelectedChip(0)
            }
            uncheckChips() {
                this.appointmentSlot.forEach(n=>{
                    n.checked = !1
                }
                )
            }
            onSelectedChip(n) {
                this.uncheckChips(),
                this.appointmentSlot.at(n).checked = !0;
                const t = C()().tz(this.timezone).format("Z")
                  , o = this.appointmentSlot.at(n).name + ":00" + t
                  , a = this.appointmentForm[2].controls.selectedDate.value
                  , s = C().tz(a, this.timezone).format("YYYY-MM-DD");
                this.appointmentForm[2].get("slotStartDate").patchValue(`${s}T${o}`)
            }
            nextStep() {
                this.appointmentForm[2].valid ? (this.stepper.steps.toArray().at(2).completed = !0,
                this.stepper.next()) : this.toaster.error("Verifica di aver selezionato la data e lo slot!")
            }
            prevStep() {
                this.stepper.steps.toArray().at(2).completed = !1,
                this.setForm(),
                this.stepper.previous()
            }
            getSlots() {
                this.slots = {};
                const n = this.appointmentForm[0].controls.tripDate.value
                  , t = this.appointmentForm[0].controls.officeId.value
                  , o = this.appointmentForm[0].controls.personNumber.value
                  , a = C().tz(n, this.timezone).format("YYYY-MM-DD")
                  , s = this.service.checkFreeSlots(t, o, a);
                this.subscriptions.push(s.pipe((0,
                v.K)(p=>(0,
                F._)(()=>new Error(p)))).subscribe(p=>{
                    const m = C()()
                      , P = p.filter(_e=>C().tz(_e, this.timezone).isSameOrAfter(m, "day"));
                    let fe = C().tz(P[0], this.timezone).toISOString() || "";
                    P.forEach(_e=>{
                        const me = C().tz(_e, this.timezone)
                          , Ee = me.format("YYYY-MM-DD")
                          , En = me.format("HH:mm");
                        this.slots[Ee] || (this.slots[Ee] = []),
                        this.slots[Ee].push(En)
                    }
                    ),
                    this.slotFilter = _e=>{
                        const me = C()(_e).format("YYYY-MM-DD");
                        return Object.keys(this.slots).includes(me)
                    }
                    ,
                    this.updateFormDate(fe)
                }
                ))
            }
            getTimezone(n) {
                const t = n._d.toString().split(" ");
                this.timezone = t[5]
            }
        }
        ne.\u0275fac = function(n) {
            return new (n || ne)(e.Y36(l.qu),e.Y36(S.g),e.Y36(J.c),e.Y36(x.yh))
        }
        ,
        ne.\u0275cmp = e.Xpm({
            type: ne,
            selectors: [["app-appointment-date"]],
            viewQuery: function(n, t) {
                if (1 & n && (e.Gf(Z._H, 5),
                e.Gf(Jt, 5)),
                2 & n) {
                    let o;
                    e.iGM(o = e.CRH()) && (t.calendar = o.first),
                    e.iGM(o = e.CRH()) && (t.monthView = o.first)
                }
            },
            inputs: {
                stepper: "stepper",
                appointmentForm: "appointmentForm",
                timezone: "timezone"
            },
            features: [e.qOj],
            decls: 14,
            vars: 9,
            consts: [[3, "formGroup", "dir", 4, "ngIf"], [1, "items-center", "flex", "flex-col", "lg:flex-row", "lg:justify-between", 3, "dir"], [1, "next-container"], [1, "visasys-button", "white", "w-72", "mt-6", 3, "click"], [1, "left-image"], [1, "visasys-button", "w-72", "mt-6", 3, "disabled", "click"], [1, "right-image"], [3, "formGroup", "dir"], [1, "flex", "lg:flex-row", "flex-col", "gap-8", "light_blue", "md:border-solid", "lg:p-8", "md:border", "md:rounded-lg"], [1, "lg:w-50"], [1, "font-bold", "text-hue", "text-2xl", "pt-8", "text-left"], [1, "pt-8", "text-left"], [1, "w-60", "lg:w-80"], [3, "minDate", "maxDate", "dateFilter", "selected", "selectedChange"], ["calendar", ""], ["class", "lg:w-50", 4, "ngIf"], [1, "font-bold", "text-2xl", "text-hue", "pt-8", "text-left"], [1, "flex", "flex-wrap", "flex-row", "justify-start"], ["class", "mr-6 mt-3 light_blue text-white", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mr-6", "mt-3", "light_blue", "text-white", 3, "ngClass", "click"]],
            template: function(n, t) {
                1 & n && (e.YNc(0, Gt, 13, 13, "form", 0),
                e.TgZ(1, "div", 1)(2, "div", 2)(3, "button", 3),
                e.NdJ("click", function() {
                    return t.prevStep()
                }),
                e._uU(4),
                e.ALo(5, "translate"),
                e.TgZ(6, "mat-icon", 4),
                e._uU(7, "chevron_left"),
                e.qZA()()(),
                e.TgZ(8, "div", 2)(9, "button", 5),
                e.NdJ("click", function() {
                    return t.nextStep()
                }),
                e._uU(10),
                e.ALo(11, "translate"),
                e.TgZ(12, "mat-icon", 6),
                e._uU(13, "chevron_right"),
                e.qZA()()()()),
                2 & n && (e.Q6J("ngIf", t.appointmentForm[2]),
                e.xp6(1),
                e.Q6J("dir", t.currentDirection),
                e.xp6(3),
                e.hij(" ", e.lcZ(5, 5, "APPOINTMENT_DATE.BACK_BUTTON"), " "),
                e.xp6(5),
                e.Q6J("disabled", !t.appointmentForm[2].valid),
                e.xp6(1),
                e.hij(" ", e.lcZ(11, 7, "APPOINTMENT_DATE.FORWARD_BUTTON"), " "))
            },
            dependencies: [c.mk, c.sg, c.O5, G.Lv, y.Hw, Yt.a8, Z._H, Ce.HS, Ce.J4, l._Y, l.JL, l.sg, r.X$],
            styles: [".mat-mdc-standard-chip[_ngcontent-%COMP%]:not(.mdc-evolution-chip--disabled){background-color:#e5f2ff;--mdc-chip-label-text-color: #2F55D4 }  .mat-mdc-standard-chip .mdc-evolution-chip__action--primary{min-width:50px!important}  .selectedChip{--mdc-chip-label-text-color: #fff !important;background-color:#2f55d4!important}  .mat-calendar-body-selected{background-color:#2f55d4!important;color:#fff!important}"]
        });
        var pe = _(7084)
          , jt = _(138);
        function zt(i, n) {
            if (1 & i && (e.TgZ(0, "div", 8)(1, "div", 9),
            e._uU(2),
            e.qZA()()),
            2 & i) {
                const t = e.oxw();
                e.xp6(2),
                e.AsE("", t.summary[1].get("applicants").value[t.index].name, " ", t.summary[1].get("applicants").value[t.index].surname, "")
            }
        }
        function $t(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "div", 13)(2, "div", 14)(3, "mat-checkbox", 15),
                e.NdJ("change", function(a) {
                    const p = e.CHM(t).$implicit
                      , m = e.oxw(2);
                    return e.KtG(m.onChange(p.id, a))
                }),
                e.qZA()(),
                e.TgZ(4, "div", 16)(5, "span", 17),
                e._uU(6),
                e.qZA()(),
                e.TgZ(7, "div", 18)(8, "span", 19),
                e._uU(9),
                e.qZA()()()()
            }
            if (2 & i) {
                const t = n.$implicit
                  , o = e.oxw(2);
                e.xp6(3),
                e.Q6J("checked", !0),
                e.xp6(2),
                e.Q6J("matTooltip", t.description),
                e.xp6(1),
                e.Oqu(t.name),
                e.xp6(3),
                e.AsE("", o.currency, " ", t.price, "")
            }
        }
        function Xt(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div")(1, "div", 20)(2, "div", 14)(3, "mat-checkbox", 21),
                e.NdJ("change", function(a) {
                    const p = e.CHM(t).$implicit
                      , m = e.oxw(2);
                    return e.KtG(m.onChange(p.id, a))
                }),
                e.qZA()(),
                e.TgZ(4, "div", 16)(5, "span", 17),
                e._uU(6),
                e.qZA()(),
                e.TgZ(7, "div", 18)(8, "span", 19),
                e._uU(9),
                e.qZA()()()()
            }
            if (2 & i) {
                const t = n.$implicit
                  , o = e.oxw(2);
                e.xp6(3),
                e.Q6J("checked", t.selected),
                e.xp6(2),
                e.Q6J("matTooltip", t.description),
                e.xp6(1),
                e.Oqu(t.name),
                e.xp6(3),
                e.AsE("", o.currency, " ", t.price, "")
            }
        }
        function en(i, n) {
            if (1 & i && (e.TgZ(0, "div", 10)(1, "div", 11),
            e._uU(2),
            e.ALo(3, "translate"),
            e.qZA(),
            e.YNc(4, $t, 10, 5, "div", 12),
            e.TgZ(5, "div", 11),
            e._uU(6),
            e.ALo(7, "translate"),
            e.qZA(),
            e.YNc(8, Xt, 10, 5, "div", 12),
            e.qZA()),
            2 & i) {
                const t = e.oxw();
                e.xp6(2),
                e.Oqu(e.lcZ(3, 4, "SERVICE_TYPE.MANDATORY_SERVICES")),
                e.xp6(2),
                e.Q6J("ngForOf", t.mandatoryServices),
                e.xp6(2),
                e.Oqu(e.lcZ(7, 6, "SERVICE_TYPE.ADDITIONAL_SERVICES")),
                e.xp6(2),
                e.Q6J("ngForOf", t.additionalServices)
            }
        }
        class ie {
            constructor() {}
            ngOnInit() {}
            onChange(n, t) {
                console.log("on Change");
                let o = this.services.find(a=>a.id === n);
                void 0 !== o && (o.selected = t.checked)
            }
            getTotal() {
                let n = 0;
                return this.services?.forEach(t=>{
                    t.selected && (n += t.price)
                }
                ),
                n
            }
            get mandatoryServices() {
                return this.services?.filter(n=>n.mandatory)
            }
            get additionalServices() {
                return this.services?.filter(n=>!n.mandatory)
            }
        }
        function tn(i, n) {
            if (1 & i && e._UZ(0, "member-list-services", 10),
            2 & i) {
                const t = n.$implicit
                  , o = n.index
                  , a = e.oxw(2);
                e.Q6J("currency", a.currency)("services", t.services)("summary", a.appointmentForm)("index", o)
            }
        }
        function nn(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "form", 1)(1, "div", 2),
                e.YNc(2, tn, 1, 4, "member-list-services", 3),
                e.qZA(),
                e.TgZ(3, "div", 4)(4, "div", 5)(5, "button", 6),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.prevStep())
                }),
                e._uU(6),
                e.ALo(7, "translate"),
                e.TgZ(8, "mat-icon", 7),
                e._uU(9, "chevron_left"),
                e.qZA()()(),
                e.TgZ(10, "div", 5)(11, "button", 8),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.nextStep())
                }),
                e._uU(12),
                e.ALo(13, "translate"),
                e.TgZ(14, "mat-icon", 9),
                e._uU(15, "chevron_right"),
                e.qZA()()()()()
            }
            if (2 & i) {
                const t = e.oxw();
                e.Q6J("formGroup", t.appointmentForm[3]),
                e.xp6(2),
                e.Q6J("ngForOf", null == t.applicants ? null : t.applicants.value),
                e.xp6(4),
                e.hij(" ", e.lcZ(7, 5, "SERVICE_TYPE.BACK_BUTTON"), " "),
                e.xp6(5),
                e.Q6J("disabled", !t.appointmentForm[3].valid),
                e.xp6(1),
                e.hij(" ", e.lcZ(13, 7, "SERVICE_TYPE.FORWARD_BUTTON"), " ")
            }
        }
        ie.\u0275fac = function(n) {
            return new (n || ie)
        }
        ,
        ie.\u0275cmp = e.Xpm({
            type: ie,
            selectors: [["member-list-services"]],
            inputs: {
                summary: "summary",
                index: "index",
                currency: "currency",
                services: "services"
            },
            decls: 12,
            vars: 11,
            consts: [[1, "visasys-accordion", "bg-[#e5f2ff]", 3, "expanded"], [1, "bg-hue"], [1, "text-white"], [1, "flex", "items-center"], [1, "w-8", "h-8", "md:w-10", "md:h-10"], ["class", "ml-2 lg:ml-6", 4, "ngIf"], [1, "justify-end", "pr-6", "text-white", "uppercase", "text-md", "lg:text-lg", "font-bold"], ["class", "py-6", 4, "ngIf"], [1, "ml-2", "lg:ml-6"], [1, "text:md", "lg:text-xl", "font-bold"], [1, "py-6"], [1, "text-xl", "p-2", "text-hue", "font-bold"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-12", "grid-rows-1", "align-items-center"], [1, "col-span-1", "flex", "flex-wrap", "-mx-3", "items-center", "justify-start", "-my-1"], ["disabled", "", 3, "checked", "change"], [1, "col-span-8", "div-vertical-align"], [1, "font-bold", 3, "matTooltip"], [1, "col-span-3", "flex", "justify-end", "div-vertical-align"], [1, ""], [1, "grid", "grid-cols-12", "grid-rows-1"], [3, "checked", "change"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "mat-expansion-panel", 0)(1, "mat-expansion-panel-header", 1)(2, "mat-panel-title", 2)(3, "div", 3)(4, "circle-counter", 4),
                e._uU(5),
                e.qZA(),
                e.YNc(6, zt, 3, 2, "div", 5),
                e.qZA()(),
                e.TgZ(7, "mat-panel-description", 6),
                e._uU(8),
                e.ALo(9, "translate"),
                e.ALo(10, "numberFormat"),
                e.qZA()(),
                e.YNc(11, en, 9, 8, "div", 7),
                e.qZA()),
                2 & n && (e.Q6J("expanded", 0 === t.index),
                e.xp6(5),
                e.Oqu(t.index + 1),
                e.xp6(1),
                e.Q6J("ngIf", null != t.summary[1].get("applicants").value[t.index]),
                e.xp6(2),
                e.lnq(" ", e.lcZ(9, 7, "SUMMARY.TOT"), " ", e.lcZ(10, 9, t.getTotal()), " ", t.currency, " "),
                e.xp6(3),
                e.Q6J("ngIf", null != t.summary[1].get("applicants").value && null != t.summary[1].get("applicants").value[t.index]))
            },
            dependencies: [c.sg, c.O5, ge.h, Te.oG, pe.ib, pe.yz, pe.yK, pe.u4, xe.gM, jt.p, r.X$],
            styles: ['.visasys-accordion.mat-expansion-panel{border-radius:10px}  .visasys-accordion .mat-expansion-panel-header{height:85px}  .visasys-accordion .mat-expansion-panel-header.mat-expanded{background-color:#2f55d4!important;height:85px}  .visasys-accordion .mat-expansion-panel-header:hover{background-color:#2f55d4!important}  .visasys-accordion .mat-expansion-indicator:after{border-style:solid;border-width:0 3px 3px 0!important;width:15px;height:15px;content:""!important}.div-vertical-align[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.circle-indicator[_ngcontent-%COMP%]{border:3px solid;border-radius:100%;height:40px;width:40px;display:flex;align-items:center;justify-content:center}']
        });
        class oe extends E.k {
            onLanguageChange(n) {}
            constructor(n, t, o) {
                super(o),
                this.fb = n,
                this.service = t,
                this.currency = "",
                this.sum = 0,
                this.servicePrice = 0,
                this.max = 0,
                this.services = []
            }
            ngOnInit() {
                this.appointmentForm[3] = this.fb.group({
                    selectedSlot: this.fb.array([]),
                    isVip: [!1, l.kI.required],
                    services: this.fb.array([])
                }),
                this.stepper.selectionChange.subscribe(n=>{
                    3 == n.selectedIndex && n.previouslySelectedIndex < n.selectedIndex && this.subscriptions.push(this.service.getAppointmentServices().pipe((0,
                    T.P)(), (0,
                    D.b)(t=>{
                        let o = [];
                        t.forEach(a=>{
                            o.push({
                                name: a.title,
                                description: a.description,
                                selected: a.required,
                                price: a.price,
                                id: a.id,
                                mandatory: a.required
                            })
                        }
                        ),
                        this.applicants.value.forEach(a=>{
                            a.services = [],
                            o.forEach(s=>a.services.push(Object.assign({}, s)))
                        }
                        )
                    }
                    ), (0,
                    v.K)(t=>(0,
                    U.of)(t))).subscribe())
                }
                ),
                this.store.select(k.G).pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    this.currency = n.currency
                }
                )).subscribe()
            }
            nextStep() {
                this.stepper.steps.toArray().at(3).completed = !0,
                console.log("### FORM ###", this.appointmentForm),
                this.stepper.next()
            }
            prevStep() {
                this.additionalServices.clear(),
                this.stepper.steps.toArray().at(3).completed = !1,
                this.stepper.previous()
            }
            get additionalServices() {
                return this.appointmentForm[3].get("services")
            }
            get selectedSlot() {
                return this.appointmentForm[3].get("selectedSlot")
            }
            get applicants() {
                return this.appointmentForm[1].get("applicants")
            }
        }
        oe.\u0275fac = function(n) {
            return new (n || oe)(e.Y36(l.qu),e.Y36(J.c),e.Y36(x.yh))
        }
        ,
        oe.\u0275cmp = e.Xpm({
            type: oe,
            selectors: [["app-service-type"]],
            inputs: {
                appointmentForm: "appointmentForm",
                stepper: "stepper"
            },
            features: [e.qOj],
            decls: 1,
            vars: 1,
            consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "grid", "grid-rows-auto", "2xl:border-alert-background", "2xl:border-solid", "2xl:p-8", "2xl:border", "2xl:rounded-lg"], [3, "currency", "services", "summary", "index", 4, "ngFor", "ngForOf"], [1, "items-center", "flex", "flex-col", "lg:flex-row", "lg:justify-between"], [1, "next-container"], [1, "visasys-button", "white", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "click"], [1, "left-image"], [1, "visasys-button", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "disabled", "click"], [1, "right-image"], [3, "currency", "services", "summary", "index"]],
            template: function(n, t) {
                1 & n && e.YNc(0, nn, 16, 9, "form", 0),
                2 & n && e.Q6J("ngIf", t.appointmentForm[3])
            },
            dependencies: [c.sg, c.O5, y.Hw, l._Y, l.JL, l.sg, ie, r.X$],
            styles: [".service-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;margin:15px 0}  .mdc-form-field{width:100%}  .mdc-form-field>label{width:100%}.service-radio-button[_ngcontent-%COMP%]{margin:5px}  .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#2f55d4!important}  .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#2f55d4!important}  .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#2f55d4!important}  .selectedRadio{background-color:#e5f2ff!important}  .deSelectedRadio{background-color:#fff!important}"]
        });
        var on = _(255);
        function rn(i, n) {
            if (1 & i && (e.ynx(0),
            e._UZ(1, "span", 2),
            e.BQk()),
            2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("innerHTML", t.i.text, e.oJD)
            }
        }
        function an(i, n) {
            1 & i && e.GkF(0)
        }
        const sn = function(i) {
            return {
                $implicit: i
            }
        };
        var h = (()=>{
            return (i = h || (h = {}))[i.ing = 0] = "ing",
            i[i.pause = 1] = "pause",
            i[i.stop = 2] = "stop",
            i[i.done = 3] = "done",
            h;
            var i
        }
        )();
        let Pe = (()=>{
            class i {
                constructor(t) {
                    this.ngZone = t,
                    this.fns = [],
                    this.commands = [],
                    this.nextTime = 0,
                    this.ing = !1
                }
                start() {
                    !0 !== this.ing && (this.ing = !0,
                    this.nextTime = +new Date,
                    this.ngZone.runOutsideAngular(()=>{
                        this.process()
                    }
                    ))
                }
                process() {
                    for (; this.commands.length; )
                        this.commands.shift()();
                    let t = +new Date - this.nextTime;
                    const o = 1 + Math.floor(t / 100);
                    t = 100 - t % 100,
                    this.nextTime += 100 * o;
                    for (let a = 0, s = this.fns.length; a < s; a += 2) {
                        let p = this.fns[a + 1];
                        if (0 === p)
                            this.fns[a](o);
                        else {
                            p += 2 * o - 1;
                            const m = Math.floor(p / 20);
                            m > 0 && this.fns[a](m),
                            this.fns[a + 1] = p % 20 + 1
                        }
                    }
                    this.ing && setTimeout(()=>this.process(), t)
                }
                add(t, o) {
                    return this.commands.push(()=>{
                        this.fns.push(t),
                        this.fns.push(1e3 === o ? 1 : 0),
                        this.ing = !0
                    }
                    ),
                    this
                }
                remove(t) {
                    return this.commands.push(()=>{
                        const o = this.fns.indexOf(t);
                        -1 !== o && this.fns.splice(o, 2),
                        this.ing = this.fns.length > 0
                    }
                    ),
                    this
                }
            }
            return i.\u0275fac = function(t) {
                return new (t || i)(e.LFG(e.R0b))
            }
            ,
            i.\u0275prov = e.Yz7({
                token: i,
                factory: i.\u0275fac
            }),
            i
        }
        )()
          , Ue = (()=>{
            class i {
                constructor(t) {
                    this.locale = t,
                    this.demand = !1,
                    this.leftTime = 0,
                    this.format = "HH:mm:ss",
                    this.timezone = "+0000",
                    this.formatDate = ({date: o, formatStr: a, timezone: s})=>(0,
                    c.p6)(new Date(o), a, this.locale, s || this.timezone || "+0000")
                }
            }
            return i.\u0275fac = function(t) {
                return new (t || i)(e.LFG(e.soG))
            }
            ,
            i.\u0275prov = e.Yz7({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            }),
            i
        }
        )()
          , Ze = (()=>{
            class i {
                constructor(t, o, a, s, p) {
                    this.locale = t,
                    this.timer = o,
                    this.defCog = a,
                    this.cdr = s,
                    this.ngZone = p,
                    this.frequency = 1e3,
                    this._notify = {},
                    this.status = h.ing,
                    this.isDestroy = !1,
                    this.i = {},
                    this.left = 0,
                    this.event = new e.vpe
                }
                set config(t) {
                    null != t.notify && !Array.isArray(t.notify) && t.notify > 0 && (t.notify = [t.notify]),
                    this._config = t
                }
                get config() {
                    return this._config
                }
                begin() {
                    this.status = h.ing,
                    this.callEvent("start")
                }
                restart() {
                    this.status !== h.stop && this.destroy(),
                    this.init(),
                    this.callEvent("restart")
                }
                stop() {
                    this.status !== h.stop && (this.status = h.stop,
                    this.destroy(),
                    this.callEvent("stop"))
                }
                pause() {
                    this.status === h.stop || this.status === h.pause || (this.status = h.pause,
                    this.callEvent("pause"))
                }
                resume() {
                    this.status === h.stop || this.status !== h.pause || (this.status = h.ing,
                    this.callEvent("resume"))
                }
                callEvent(t) {
                    this.event.emit({
                        action: t,
                        left: this.left,
                        status: this.status,
                        text: this.i.text
                    })
                }
                init() {
                    const {locale: t, defCog: o} = this
                      , a = this.config = {
                        ...new Ue(t),
                        ...o,
                        ...this.config
                    }
                      , s = this.frequency = ~a.format.indexOf("S") ? 100 : 1e3;
                    this.status = a.demand ? h.pause : h.ing,
                    this.getLeft();
                    const p = this.reflow;
                    this.reflow = (m=0,P=!1)=>p.apply(this, [m, P]),
                    Array.isArray(a.notify) && a.notify.forEach(m=>{
                        if (m < 1)
                            throw new Error("The notify config must be a positive integer.");
                        m *= 1e3,
                        this._notify[m -= m % s] = !0
                    }
                    ),
                    this.timer.add(this.reflow, s).start(),
                    this.reflow(0, !0)
                }
                destroy() {
                    return this.timer.remove(this.reflow),
                    this
                }
                reflow(t=0, o=!1) {
                    if (this.isDestroy)
                        return;
                    const {status: a, config: s, _notify: p} = this;
                    if (!o && a !== h.ing)
                        return;
                    let m = this.left = this.left - this.frequency * t;
                    m < 1 && (m = 0),
                    this.i = {
                        value: m,
                        text: s.formatDate({
                            date: m,
                            formatStr: s.format,
                            timezone: s.timezone
                        })
                    },
                    "function" == typeof s.prettyText && (this.i.text = s.prettyText(this.i.text)),
                    this.cdr.detectChanges(),
                    (0 === s.notify || p[m]) && this.ngZone.run(()=>{
                        this.callEvent("notify")
                    }
                    ),
                    0 === m && this.ngZone.run(()=>{
                        this.status = h.done,
                        this.destroy(),
                        this.callEvent("done")
                    }
                    )
                }
                getLeft() {
                    const {config: t, frequency: o} = this;
                    let a = 1e3 * t.leftTime;
                    const s = t.stopTime;
                    !a && s && (a = s - (new Date).getTime()),
                    this.left = a - a % o
                }
                ngOnInit() {
                    this.init(),
                    this.config.demand || this.begin()
                }
                ngOnDestroy() {
                    this.isDestroy = !0,
                    this.destroy()
                }
                ngOnChanges(t) {
                    t.config.firstChange || this.restart()
                }
            }
            return i.\u0275fac = function(t) {
                return new (t || i)(e.Y36(e.soG),e.Y36(Pe),e.Y36(Ue),e.Y36(e.sBO),e.Y36(e.R0b))
            }
            ,
            i.\u0275cmp = e.Xpm({
                type: i,
                selectors: [["countdown"]],
                hostVars: 2,
                hostBindings: function(t, o) {
                    2 & t && e.ekj("count-down", !0)
                },
                inputs: {
                    config: "config",
                    render: "render"
                },
                outputs: {
                    event: "event"
                },
                standalone: !0,
                features: [e._Bn([Pe]), e.TTD, e.jDz],
                decls: 2,
                vars: 5,
                consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
                template: function(t, o) {
                    1 & t && (e.YNc(0, rn, 2, 1, "ng-container", 0),
                    e.YNc(1, an, 1, 0, "ng-container", 1)),
                    2 & t && (e.Q6J("ngIf", !o.render),
                    e.xp6(1),
                    e.Q6J("ngTemplateOutlet", o.render)("ngTemplateOutletContext", e.VKq(3, sn, o.i)))
                },
                dependencies: [c.ez, c.O5, c.tP],
                encapsulation: 2,
                changeDetection: 0
            }),
            i
        }
        )();
        class B {
            constructor(n, t) {
                this.configurationService = n,
                this.http = t,
                this.v1 = "v1",
                this.otp = "/api/otp",
                this.API_ROUTES = {
                    request: ()=>`${this.configurationService.getReservationManagerApi()}${this.otp}/${this.v1}`,
                    validate: o=>`${this.configurationService.getReservationManagerApi()}${this.otp}/${this.v1}/${o}`
                }
            }
            request() {
                return this.http.post(this.API_ROUTES.request(), {})
            }
            validate(n) {
                return this.http.post(this.API_ROUTES.validate(n), {})
            }
        }
        B.\u0275fac = function(n) {
            return new (n || B)(e.LFG(le.e),e.LFG(d.eN))
        }
        ,
        B.\u0275prov = e.Yz7({
            token: B,
            factory: B.\u0275fac,
            providedIn: "root"
        });
        const _n = ["cd"];
        function ln(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "countdown", 20, 21),
                e.NdJ("event", function(a) {
                    e.CHM(t);
                    const s = e.oxw(2);
                    return e.KtG(s.handleCountdown(a))
                }),
                e.qZA()
            }
            if (2 & i) {
                const t = e.oxw(2);
                e.Q6J("config", t.countDownConfig)
            }
        }
        function cn(i, n) {
            if (1 & i && (e.TgZ(0, "div", 22),
            e._UZ(1, "img", 4),
            e.TgZ(2, "span", 5),
            e._uU(3),
            e.qZA()()),
            2 & i) {
                const t = e.oxw(2);
                e.xp6(3),
                e.Oqu(t.message)
            }
        }
        function pn(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 12)(1, "div", 13)(2, "button", 14),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.requestOtp())
                }),
                e._uU(3),
                e.ALo(4, "translate"),
                e.qZA(),
                e.YNc(5, ln, 2, 1, "countdown", 15),
                e.qZA(),
                e.TgZ(6, "div", 16)(7, "span"),
                e._uU(8),
                e.ALo(9, "translate"),
                e.qZA(),
                e._UZ(10, "input", 17),
                e.qZA(),
                e.YNc(11, cn, 4, 1, "div", 18),
                e.TgZ(12, "button", 19),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.validateOtp())
                }),
                e._uU(13),
                e.ALo(14, "translate"),
                e.qZA()()
            }
            if (2 & i) {
                const t = e.oxw();
                e.xp6(2),
                e.Q6J("disabled", t.countdownGoing),
                e.xp6(1),
                e.Oqu(e.lcZ(4, 6, "OTP.REQUEST")),
                e.xp6(2),
                e.Q6J("ngIf", t.countdownGoing),
                e.xp6(3),
                e.Oqu(e.lcZ(9, 8, "OTP.INSERT")),
                e.xp6(3),
                e.Q6J("ngIf", t.message),
                e.xp6(2),
                e.Oqu(e.lcZ(14, 10, "OTP.VALIDATE"))
            }
        }
        function mn(i, n) {
            1 & i && (e.TgZ(0, "div", 12)(1, "h5"),
            e._uU(2),
            e.ALo(3, "translate"),
            e.qZA()()),
            2 & i && (e.xp6(2),
            e.Oqu(e.lcZ(3, 1, "OTP.VALIDATED")))
        }
        function un(i, n) {
            if (1 & i) {
                const t = e.EpF();
                e.TgZ(0, "div", 8)(1, "button", 23),
                e.NdJ("click", function() {
                    e.CHM(t);
                    const a = e.oxw();
                    return e.KtG(a.nextStep())
                }),
                e._uU(2),
                e.ALo(3, "translate"),
                e.TgZ(4, "mat-icon", 24),
                e._uU(5, "chevron_right"),
                e.qZA()()()
            }
            if (2 & i) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("disabled", !t.otp),
                e.xp6(1),
                e.hij(" ", e.lcZ(3, 2, "OTP.FORWARD_BUTTON"), " ")
            }
        }
        class re {
            constructor(n, t, o, a, s) {
                this.store = n,
                this.translate = t,
                this.toaster = o,
                this.otpService = a,
                this.$auth = s,
                this.otp = void 0,
                this.message = void 0,
                this.countdownGoing = !1
            }
            ngOnInit() {
                this.store.select(k.G).pipe((0,
                T.P)()).subscribe(n=>{
                    this.countDownConfig = {
                        demand: !1,
                        format: "mm:ss",
                        leftTime: 60 * n.otpDuration
                    }
                }
                )
            }
            prevStep() {
                this.stepper.steps.toArray().at(2).completed = !1,
                this.stepper.previous()
            }
            nextStep() {
                this.appointmentForm.valid && (this.stepper.steps.toArray().at(2).completed = !0,
                this.stepper.next())
            }
            requestOtp() {
                this.countdownGoing || (this.message = void 0,
                this.otpService.request().pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    n.success ? this.countdownGoing = !0 : (this.toaster.warning(n.message),
                    this.logout())
                }
                ), (0,
                v.K)(n=>(this.toaster.error(n.error.message),
                (0,
                U.of)(null)))).subscribe())
            }
            handleCountdown(n) {
                n.status === h.done && (this.countdownGoing = !1)
            }
            logout() {
                this.$auth.logout()
            }
            validateOtp() {
                this.otpService.validate(this.appointmentForm.get("otp").value).pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    n ? (this.otp = this.appointmentForm.get("otp").value,
                    this.nextStep()) : this.message = this.translate.instant("OTP.INVALID")
                }
                ), (0,
                v.K)(n=>(this.toaster.error(n.error.message),
                (0,
                U.of)(null)))).subscribe()
            }
        }
        function dn(i, n) {
            1 & i && (e.TgZ(0, "mat-icon"),
            e._uU(1, "check"),
            e.qZA())
        }
        re.\u0275fac = function(n) {
            return new (n || re)(e.Y36(x.yh),e.Y36(r.sK),e.Y36(S.g),e.Y36(B),e.Y36(De.e))
        }
        ,
        re.\u0275cmp = e.Xpm({
            type: re,
            selectors: [["app-otp"]],
            viewQuery: function(n, t) {
                if (1 & n && e.Gf(_n, 5),
                2 & n) {
                    let o;
                    e.iGM(o = e.CRH()) && (t.countdown = o.first)
                }
            },
            inputs: {
                appointmentForm: "appointmentForm",
                stepper: "stepper"
            },
            decls: 20,
            vars: 13,
            consts: [[3, "formGroup"], [1, "grid", "grid-rows-auto", "md:border-visa-primary-200", "md:border-solid", "md:p-8", "md:border", "rounded-lg"], [1, "font-bold", "text-2xl", "text-visa-primary-500"], [1, "col-span-8", "flex-row", "flex", "items-center", "mt-3"], ["src", "assets/images/warning-red.svg"], [1, "text-red-500", "text-sm"], ["class", "grid grid-cols-8 items-center py-5 pl-5", 4, "ngIf"], [1, "items-center", "flex", "flex-col", "lg:flex-row", "lg:justify-between"], [1, "next-container"], [1, "visasys-button", "white", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "click"], [1, "left-image"], ["class", "next-container", 4, "ngIf"], [1, "grid", "grid-cols-8", "items-center", "py-5", "pl-5"], [1, "col-span-8", "flex-row", "flex", "items-center"], [1, "visasys-button", "w-72", 3, "disabled", "click"], ["class", "ml-5", 3, "config", "event", 4, "ngIf"], [1, "col-span-8", "mt-3"], ["formControlName", "otp", "type", "text", "pattern", "[0-9]*", "maxlength", "6", 1, "bg-visa-primary-50", "rounded-lg", "p-3", "ml-5"], ["class", "col-span-4 justify-center flex-row flex gap-2 mt-1 items-center", 4, "ngIf"], [1, "col-span-8", "visasys-button", "w-72", "mt-3", 3, "click"], [1, "ml-5", 3, "config", "event"], ["cd", ""], [1, "col-span-4", "justify-center", "flex-row", "flex", "gap-2", "mt-1", "items-center"], [1, "visasys-button", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "disabled", "click"], [1, "right-image"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "form", 0)(1, "div", 1)(2, "h3", 2),
                e._uU(3),
                e.ALo(4, "translate"),
                e.qZA(),
                e.TgZ(5, "div", 3),
                e._UZ(6, "img", 4),
                e.TgZ(7, "span", 5),
                e._uU(8),
                e.ALo(9, "translate"),
                e.qZA()(),
                e.YNc(10, pn, 15, 12, "div", 6),
                e.YNc(11, mn, 4, 3, "div", 6),
                e.qZA()(),
                e.TgZ(12, "div", 7)(13, "div", 8)(14, "button", 9),
                e.NdJ("click", function() {
                    return t.prevStep()
                }),
                e.TgZ(15, "mat-icon", 10),
                e._uU(16, "chevron_left"),
                e.qZA(),
                e._uU(17),
                e.ALo(18, "translate"),
                e.qZA()(),
                e.YNc(19, un, 6, 4, "div", 11),
                e.qZA()),
                2 & n && (e.Q6J("formGroup", t.appointmentForm),
                e.xp6(3),
                e.Oqu(e.lcZ(4, 7, "OTP.TITLE")),
                e.xp6(5),
                e.Oqu(e.lcZ(9, 9, "OTP.WARNING")),
                e.xp6(2),
                e.Q6J("ngIf", !t.otp),
                e.xp6(1),
                e.Q6J("ngIf", t.otp),
                e.xp6(6),
                e.hij(" ", e.lcZ(18, 11, "OTP.BACK_BUTTON"), " "),
                e.xp6(2),
                e.Q6J("ngIf", t.otp))
            },
            dependencies: [c.O5, y.Hw, l._Y, l.Fj, l.JJ, l.JL, l.nD, l.c5, l.sg, l.u, Ze, r.X$],
            styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"]
        });
        class ae extends E.k {
            onLanguageChange(n) {}
            constructor(n, t, o, a, s, p, m) {
                super(n),
                this.fb = t,
                this.visaService = o,
                this.appointmentProvider = a,
                this.notification = s,
                this.translateService = p,
                this.router = m,
                this.isUserLoggedIn = !1,
                this.selectedCategoryId = -1,
                this.subscriptions.push(this.store.select(O.Pc).subscribe(P=>{
                    this.isUserLoggedIn = P
                }
                ))
            }
            ngOnInit() {
                this.appointmentProvider.checkCanCreateAppointment().pipe((0,
                T.P)(), (0,
                D.b)(n=>{
                    n || (this.notification.warning(this.translateService.instant("WARNING.APPOINTMENT_PRESENT")),
                    this.router.navigate(["/profile"]))
                }
                )).subscribe(),
                this.otp = this.fb.group({
                    otp: new l.NI(null,l.kI.required)
                }),
                this.appointmentForm = [this.fb.group({}), this.fb.group({}), this.fb.group({}), this.fb.group({}), this.otp],
                this.updateSelectedOffices(),
                console.log(this.appointmentForm)
            }
            getAllVisas() {
                const n = this.visaService.getAllVisas();
                this.subscriptions.push(n.pipe((0,
                v.K)(t=>(this.visaList = [],
                (0,
                F._)(()=>new Error(t))))).subscribe(t=>{
                    this.visaList = t,
                    this.store.dispatch((0,
                    W.v)({
                        visas: t
                    }))
                }
                ))
            }
            updateSelectedOffices() {
                const n = this.store.select(L.$1);
                this.subscriptions.push(n.subscribe(t=>{
                    this.officeList = t
                }
                ))
            }
            getOfficeTimezone() {
                return null !== this.appointmentForm[0].controls.officeId.value ? this.officeList?.find(n=>n.id === this.appointmentForm[0].controls.officeId.value).timezone : ""
            }
        }
        ae.\u0275fac = function(n) {
            return new (n || ae)(e.Y36(x.yh),e.Y36(l.qu),e.Y36(M.$),e.Y36(b),e.Y36(S.g),e.Y36(r.sK),e.Y36(R.F0))
        }
        ,
        ae.\u0275cmp = e.Xpm({
            type: ae,
            selectors: [["app-appointment-page"]],
            features: [e.qOj],
            decls: 16,
            vars: 20,
            consts: [[1, "m-0", "lg:px-10", "md:w-full", "md:flex", "md:justify-center", "pt-3"], ["labelPosition", "bottom", 1, "lg:w-8/12", 3, "linear", "appLoader"], ["stepper", ""], ["matStepperIcon", "edit"], [3, "stepControl"], [3, "stepper", "appointmentForm"], [3, "stepper", "appointmentForm", "timezone"]],
            template: function(n, t) {
                if (1 & n && (e.TgZ(0, "div", 0)(1, "mat-stepper", 1, 2),
                e.YNc(3, dn, 2, 0, "ng-template", 3),
                e.TgZ(4, "mat-step", 4),
                e._UZ(5, "app-memebers-number", 5),
                e.qZA(),
                e.TgZ(6, "mat-step", 4),
                e._UZ(7, "app-members-list", 5),
                e.qZA(),
                e.TgZ(8, "mat-step", 4),
                e._UZ(9, "app-otp", 5),
                e.qZA(),
                e.TgZ(10, "mat-step", 4),
                e._UZ(11, "app-appointment-date", 6),
                e.qZA(),
                e.TgZ(12, "mat-step", 4),
                e._UZ(13, "app-service-type", 5),
                e.qZA(),
                e.TgZ(14, "mat-step"),
                e._UZ(15, "app-appointment-summary", 5),
                e.qZA()()()),
                2 & n) {
                    const o = e.MAs(2);
                    e.xp6(1),
                    e.Q6J("linear", !0)("appLoader", "fit-parent"),
                    e.xp6(3),
                    e.Q6J("stepControl", t.appointmentForm[0]),
                    e.xp6(1),
                    e.Q6J("stepper", o)("appointmentForm", t.appointmentForm),
                    e.xp6(1),
                    e.Q6J("stepControl", t.appointmentForm[1]),
                    e.xp6(1),
                    e.Q6J("stepper", o)("appointmentForm", t.appointmentForm),
                    e.xp6(1),
                    e.Q6J("stepControl", t.otp),
                    e.xp6(1),
                    e.Q6J("stepper", o)("appointmentForm", t.otp),
                    e.xp6(1),
                    e.Q6J("stepControl", t.appointmentForm[2]),
                    e.xp6(1),
                    e.Q6J("stepper", o)("appointmentForm", t.appointmentForm)("timezone", t.getOfficeTimezone()),
                    e.xp6(1),
                    e.Q6J("stepControl", t.appointmentForm[3]),
                    e.xp6(1),
                    e.Q6J("stepper", o)("appointmentForm", t.appointmentForm),
                    e.xp6(2),
                    e.Q6J("stepper", o)("appointmentForm", t.appointmentForm)
                }
            },
            dependencies: [Se.e, y.Hw, ue.C0, ue.Vq, ue.z9, j, te, ne, oe, on.R, re],
            styles: [".mat-horizontal-stepper-header{pointer-events:none!important}"]
        });
        var gn = _(8924);
        class se {
            constructor(n, t, o) {
                this.router = n,
                this.appointmentProvider = t,
                this.store = o
            }
            ngOnInit() {
                this.appointmentProvider.completePayment(Number(localStorage.getItem("visaPaymentId"))).pipe((0,
                T.P)()).subscribe(()=>localStorage.removeItem("visaPaymentId"))
            }
            goToAppointment() {
                this.router.navigate(["profile"])
            }
        }
        se.\u0275fac = function(n) {
            return new (n || se)(e.Y36(R.F0),e.Y36(b),e.Y36(x.yh))
        }
        ,
        se.\u0275cmp = e.Xpm({
            type: se,
            selectors: [["app-payment-success"]],
            decls: 24,
            vars: 18,
            consts: [[1, "flex", "flex-col", "gap-5", "border-visa-primary-200", "border-solid", "p-8", "border", "rounded-md", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "height", "64", "viewBox", "0 -960 960 960", "width", "64", "fill", "#3CD42F"], ["d", "M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q60 0 117 17.5T704-811q11 7 13.5 19t-5.5 22q-8 10-20 11t-23-6q-42-27-90-41t-99-14q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140q145 0 242.5-97.5T820-480q0-19-1.5-37t-5.5-35q-2-13 4-24t18-13q13-3 24 4.5t13 20.5q4 20 6 41t2 43q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm-59-309 392-392q9-9 22-9t23 9q10 10 10 23t-10 23L442-319q-9 9-21 9t-21-9L278-442q-9-9-8.5-22.5T279-487q9-9 22.5-9t22.5 9l97 98Z"], [1, "text-visa-primary-500", "text-2xl"], [1, "text-center", "w-2/3", "text-sm"], [1, "bg-visa-primary-500", "text-white", "w-full", "py-2", "px-5", "rounded-lg", "text-sm", 3, "click"]],
            template: function(n, t) {
                1 & n && (e.TgZ(0, "div", 0),
                e.O4$(),
                e.TgZ(1, "svg", 1),
                e._UZ(2, "path", 2),
                e.qZA(),
                e.kcU(),
                e.TgZ(3, "div", 3),
                e._uU(4),
                e.ALo(5, "translate"),
                e.qZA(),
                e.TgZ(6, "div", 4)(7, "p"),
                e._uU(8),
                e.ALo(9, "translate"),
                e.qZA(),
                e.TgZ(10, "p"),
                e._uU(11),
                e.ALo(12, "translate"),
                e.qZA(),
                e.TgZ(13, "p"),
                e._uU(14),
                e.ALo(15, "translate"),
                e.qZA()(),
                e.TgZ(16, "div", 4)(17, "p"),
                e._uU(18),
                e.ALo(19, "translate"),
                e.qZA()(),
                e.TgZ(20, "div")(21, "button", 5),
                e.NdJ("click", function() {
                    return t.goToAppointment()
                }),
                e._uU(22),
                e.ALo(23, "translate"),
                e.qZA()()()),
                2 & n && (e.xp6(4),
                e.Oqu(e.lcZ(5, 6, "PAYMENT.SUCCESS.TITLE")),
                e.xp6(4),
                e.Oqu(e.lcZ(9, 8, "PAYMENT.SUCCESS.SUCCESS_INFO")),
                e.xp6(3),
                e.Oqu(e.lcZ(12, 10, "PAYMENT.SUCCESS.SOON")),
                e.xp6(3),
                e.Oqu(e.lcZ(15, 12, "PAYMENT.SUCCESS.RECEIPT")),
                e.xp6(4),
                e.Oqu(e.lcZ(19, 14, "PAYMENT.SUCCESS.REMINDER")),
                e.xp6(4),
                e.Oqu(e.lcZ(23, 16, "PAYMENT.SUCCESS.BUTTON")))
            },
            dependencies: [r.X$]
        });
        const fn = [{
            path: "",
            component: ae,
            resolve: {
                auth: gn.Z
            }
        }, {
            path: "payment/success",
            component: se
        }];
        class N {
        }
        N.\u0275fac = function(n) {
            return new (n || N)
        }
        ,
        N.\u0275mod = e.oAB({
            type: N
        }),
        N.\u0275inj = e.cJS({
            imports: [c.ez, R.Bz.forChild(fn), R.Bz]
        });
        class w {
        }
        w.\u0275fac = function(n) {
            return new (n || w)
        }
        ,
        w.\u0275mod = e.oAB({
            type: w
        }),
        w.\u0275inj = e.cJS({
            providers: [M.$, J.c, f.B8],
            imports: [c.ez, I.m, K.T, N, l.UX, Ze, Ae.a, r.aw.forChild({
                loader: {
                    provide: r.Zw,
                    useFactory: A.gS,
                    deps: [d.eN]
                },
                extend: !0
            })]
        })
    }
    ,
    255: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.d(__webpack_exports__, {
            R: ()=>AppointmentSummaryComponent
        });
        var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439)
          , moment__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__)
          , rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(590)
          , rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(262)
          , rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9646)
          , rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8505)
          , rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5577)
          , _store_settings_store_settings_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71)
          , _shared_components_base_components_base_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3071)
          , _models_appointment_models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3696)
          , _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4650)
          , _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9653)
          , _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2359)
          , _shared_services_visa_application_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5211)
          , _core_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4523)
          , _shared_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9830)
          , _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9116)
          , _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9066)
          , ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4700)
          , _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6895)
          , _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7392)
          , _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4850)
          , _components_summary_accordion_summary_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6015)
          , _shared_pipe_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(138);
        function AppointmentSummaryComponent_div_2_div_7_Template(u, g) {
            if (1 & u && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0, "div", 28),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(1, "summary-accordion", 29),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()),
            2 & u) {
                const _ = g.index
                  , f = _angular_core__WEBPACK_IMPORTED_MODULE_9__.oxw(2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("summary", f.appointmentForm)("index", _)("currency", f.currency)("fee", f.visaFee)
            }
        }
        function AppointmentSummaryComponent_div_2_Template(u, g) {
            if (1 & u && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0, "div")(1, "div", 25),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(2),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(3, "translate"),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(4, "div", 26),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(5),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(6, "translate"),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(7, AppointmentSummaryComponent_div_2_div_7_Template, 2, 4, "div", 27),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()),
            2 & u) {
                const _ = _angular_core__WEBPACK_IMPORTED_MODULE_9__.oxw();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(3, 3, "SUMMARY._SELF")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(6, 5, "SUMMARY.CHECK_DATA")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngForOf", _.appointmentForm[1].get("applicants").value)
            }
        }
        function AppointmentSummaryComponent_button_93_Template(u, g) {
            if (1 & u) {
                const _ = _angular_core__WEBPACK_IMPORTED_MODULE_9__.EpF();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0, "button", 30),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.NdJ("click", function() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_9__.CHM(_);
                    const c = _angular_core__WEBPACK_IMPORTED_MODULE_9__.oxw();
                    return _angular_core__WEBPACK_IMPORTED_MODULE_9__.KtG(c.nextStep())
                }),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(1),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(2, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(3, "mat-icon", 31),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(4, "chevron_right"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()
            }
            2 & u && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(2, 1, "BUTTON.PAY_NOW"), " "))
        }
        function AppointmentSummaryComponent_button_94_Template(u, g) {
            if (1 & u) {
                const _ = _angular_core__WEBPACK_IMPORTED_MODULE_9__.EpF();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0, "button", 30),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.NdJ("click", function() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_9__.CHM(_);
                    const c = _angular_core__WEBPACK_IMPORTED_MODULE_9__.oxw();
                    return _angular_core__WEBPACK_IMPORTED_MODULE_9__.KtG(c.nextStep())
                }),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(1),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(2, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(3, "mat-icon", 31),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(4, "chevron_right"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()
            }
            2 & u && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),
            _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(2, 1, "BUTTON.SUMMARY"), " "))
        }
        class AppointmentSummaryComponent extends _shared_components_base_components_base_components_component__WEBPACK_IMPORTED_MODULE_2__.k {
            onLanguageChange(u) {}
            constructor(u, g, _, f, c, d, l, r) {
                super(u),
                this.service = g,
                this.visaApplicationApiService = _,
                this.configurationService = f,
                this.notification = c,
                this.router = d,
                this.translateService = l,
                this.recaptchaV3Service = r,
                this.CHECKOUT_CAPTCHA_ACTION = "checkout",
                this.currency = "",
                this.shouldPay = !1,
                this.visaFee = 0
            }
            ngOnInit() {
                this.configurationService.getConfiguration(),
                this.subscriptions.push(this.store.select(_store_settings_store_settings_store_reducer__WEBPACK_IMPORTED_MODULE_1__.G).subscribe(_=>{
                    this.currency = _.currency,
                    this.shouldPay = !_.skipPayment
                }
                )),
                this.stepper.selectionChange.subscribe(_=>{
                    4 == _.selectedIndex && this.getVisaFee()
                }
                )
            }
            getTotal() {
                return this.appointmentForm[0].get("idServiceLevel")?.value?.serviceFee * this.appointmentForm[1].value?.applicants?.length
            }
            getTotalVAC() {
                let u = this.visaFee;
                return this.appointmentForm[1].get("applicants")?.value?.forEach(g=>{
                    g.services?.forEach(_=>{
                        u += _.selected ? _.price : 0
                    }
                    )
                }
                ),
                u
            }
            getVisaFee() {
                const u = this.appointmentForm[0].get("visas").value[0].visaId
                  , g = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.appointmentForm[2].get("selectedDate").value).format("YYYY-MM-DD")
                  , _ = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.appointmentForm[1].get("applicants").value[0].birthDate).format("YYYY-MM-DD");
                this.service.getVisaFee(u, {
                    appointmentDate: g,
                    applicantBirthdate: _
                }).pipe((0,
                rxjs__WEBPACK_IMPORTED_MODULE_10__.P)(), (0,
                rxjs__WEBPACK_IMPORTED_MODULE_11__.K)(c=>(0,
                rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(c)), (0,
                rxjs__WEBPACK_IMPORTED_MODULE_13__.b)(c=>{
                    c && (this.visaFee = c)
                }
                )).subscribe()
            }
            nextStep() {
                this.recaptchaV3Service.execute(this.CHECKOUT_CAPTCHA_ACTION).pipe((0,
                rxjs__WEBPACK_IMPORTED_MODULE_10__.P)(), (0,
                rxjs__WEBPACK_IMPORTED_MODULE_14__.z)(u=>{
                    const g = this.buildFormForBE();
                    return this.visaApplicationApiService.checkout(g, this.configurationService.getPaymentProvider(), u)
                }
                ), (0,
                rxjs__WEBPACK_IMPORTED_MODULE_13__.b)(u=>{
                    if (this.shouldPay)
                        switch (localStorage.setItem("visaPaymentId", String(u.visaApplicationId)),
                        this.configurationService.getPaymentProvider()) {
                        case _models_appointment_models__WEBPACK_IMPORTED_MODULE_15__.OH.MASTERCARD:
                            this.gatewayMastercard(u);
                            break;
                        case _models_appointment_models__WEBPACK_IMPORTED_MODULE_15__.OH.APS:
                            this.gatewayAps(u);
                            break;
                        case _models_appointment_models__WEBPACK_IMPORTED_MODULE_15__.OH.PAYPAL:
                            this.gatewayPaypal(u)
                        }
                    else
                        this.notification.success(this.translateService.instant("SUMMARY.CREATION_SUCCESSFUL")),
                        this.router.navigate(["/profile"])
                }
                ), (0,
                rxjs__WEBPACK_IMPORTED_MODULE_11__.K)(u=>(this.notification.error(u.error?.message),
                (0,
                rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(u)))).subscribe()
            }
            gatewayMastercard(checkoutResponse) {
                eval(`Checkout.configure({\n      session: {\n        id: '${checkoutResponse.sessionId}'\n      }\n    });`),
                eval("Checkout.showPaymentPage()")
            }
            gatewayAps(u) {
                window.location.href = u.sessionId
            }
            gatewayPaypal(u) {
                window.location.href = u.redirectUrl
            }
            prevStep() {
                this.stepper.steps.toArray().at(4).completed = !1,
                this.stepper.previous()
            }
            get applicants() {
                return this.appointmentForm[1].get("applicants")
            }
            buildFormForBE() {
                let u = this.appointmentForm[3].get("services").value.map(c=>({
                    ...c
                }));
                u = u.map(({id: c, quantity: d})=>({
                    id: c,
                    quantity: d
                }));
                let g = this.appointmentForm[1].value.applicants.map(c=>({
                    owner: c.owner,
                    visaId: c.visaId,
                    name: c.name,
                    surname: c.surname,
                    birthDate: moment__WEBPACK_IMPORTED_MODULE_0___default()(c.birthDate).format("YYYY-MM-DD"),
                    gender: c.gender,
                    nationality: c.nationality,
                    residenceAddress: c.residenceAddress,
                    residenceCountry: c.residenceCountry,
                    passportNumber: c.passport.number,
                    passportIssuingState: c.passport.state,
                    passportDateOfIssue: moment__WEBPACK_IMPORTED_MODULE_0___default()(c.passport.issueDate).format("YYYY-MM-DD"),
                    passportDateOfExpiry: moment__WEBPACK_IMPORTED_MODULE_0___default()(c.passport.expirationDate).format("YYYY-MM-DD"),
                    phoneNumber: c.phoneNumber,
                    email: c.email,
                    documents: c.documents,
                    services: c.services.filter(d=>d.selected).map(d=>({
                        id: d.id,
                        quantity: 1
                    }))
                }))
                  , _ = {
                    ...this.appointmentForm[0].value
                };
                return _ = (({officeId: c, tripDate: d, tripDestination: l, termandcond: r})=>({
                    officeId: c,
                    tripDate: d = moment__WEBPACK_IMPORTED_MODULE_0___default()(d).format("YYYY-MM-DD"),
                    tripDestination: l,
                    termandcond: r
                }))(_),
                {
                    ..._,
                    idServiceLevel: this.appointmentForm[0].get("idServiceLevel").value.serviceLevelId,
                    applicants: g,
                    slotStartDate: this.appointmentForm[2].get("slotStartDate").value,
                    source: "WEB",
                    otp: this.appointmentForm[4].get("otp").value
                }
            }
        }
        AppointmentSummaryComponent.\u0275fac = function u(g) {
            return new (g || AppointmentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.yh),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_services_office_service__WEBPACK_IMPORTED_MODULE_3__.c),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_shared_services_visa_application_api_service__WEBPACK_IMPORTED_MODULE_4__.s),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_core_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__.e),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_shared_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__.g),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_17__.F0),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.sK),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.YC))
        }
        ,
        AppointmentSummaryComponent.\u0275cmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__.Xpm({
            type: AppointmentSummaryComponent,
            selectors: [["app-appointment-summary"]],
            inputs: {
                stepper: "stepper",
                appointmentForm: "appointmentForm"
            },
            features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.qOj],
            decls: 95,
            vars: 72,
            consts: [[1, "xl:grid", "xl:grid-rows-auto", "xl:border-alert-background", "xl:border-solid", "xl:p-8", "md:border", "xl:rounded-lg"], [4, "ngIf"], [1, "flex", "flex-col", "w-full", "xl:items-center", "py-6", "bg-sky-100", "ml-auto", "mr-auto", "rounded-lg", "my-10"], [1, "flex", "flex-row", "items-center", "xl:items-start", "gap-6", "w-3/5"], ["src", "assets/images/info-exclamation.svg", 1, "w-8"], [1, "flex", "flex-col", "text-sm", "gap-2"], [1, "mx-8", "list-disc"], [1, "gap-2"], [1, "mb-6"], [1, "text:lg", "xl:text-2xl", "text-hue", "font-bold", "flex", "flex-row", "justify-between"], [1, "mb-2", "mt-4"], [1, "mb-4"], [1, "flex", "justify-between", "text-xs", "lg:text-sm", "font-bold"], [1, "uppercase"], [1, "flex", "justify-between", "text-xs", "xl:text-sm", "font-bold"], [1, "flex", "justify-between", "text-xs", "xl:text-sm", "font-bold", "text-gray-400"], [1, "mt-6"], [1, "text-lg", "lg:text-2xl", "text-hue", "font-bold", "flex", "justify-between"], [1, "flex", "flex-col"], [1, "text-xs", "font-light", "mt-2", "text-black"], [1, "items-center", "flex", "flex-col", "lg:flex-row", "lg:justify-between"], [1, "next-container"], [1, "visasys-button", "white", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "click"], [1, "left-image"], ["class", "visasys-button w-72 lg:w-64 xl:w-72 mt-6", 3, "click", 4, "ngIf"], [1, "text-2xl", "text-hue", "font-bold"], [1, "text-base", "font-light", "my-4"], ["class", "my-4", 4, "ngFor", "ngForOf"], [1, "my-4"], [3, "summary", "index", "currency", "fee"], [1, "visasys-button", "w-72", "lg:w-64", "xl:w-72", "mt-6", 3, "click"], [1, "right-image"]],
            template: function u(g, _) {
                1 & g && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.ynx(0),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(1, "div", 0),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(2, AppointmentSummaryComponent_div_2_Template, 8, 7, "div", 1),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(3, "div", 2)(4, "div", 3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(5, "img", 4),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(6, "div", 5)(7, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(8),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(9, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(10, "ul", 6)(11, "li", 7)(12, "b"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(14, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(15),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(16, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(17, "li")(18, "b"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(19),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(20, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(21),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(22, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(23, "div", 8)(24, "div", 9)(25, "span"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(26),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(27, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(28, "span"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(29),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(30, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(31, "ul", 10)(32, "li", 11)(33, "div", 12)(34, "div")(35, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(36),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(37, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(38, "label", 13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(39),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(40, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(41, "li")(42, "div", 14)(43, "div")(44, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(45),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(46, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(47, "label", 13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(48),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(49, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(50, "li")(51, "div", 15)(52, "div")(53, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(54),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(55, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(56, "label", 13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(57),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(58, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(59, "li")(60, "div", 15)(61, "div")(62, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(63),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(64, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(65, "label", 13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(66),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(67, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(68, "mat-divider"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(69, "div", 16)(70, "div", 17)(71, "div", 18)(72, "label", 13),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(73),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(74, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(75, "div", 19),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(76),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(77, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(78, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(79, "br"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(80),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(81, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(82, "label"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(83),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(84, "numberFormat"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(85, "div", 20)(86, "div", 21)(87, "button", 22),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.NdJ("click", function() {
                    return _.prevStep()
                }),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(88),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(89, "translate"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(90, "mat-icon", 23),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(91, "chevron_left"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(92, "div", 21),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(93, AppointmentSummaryComponent_button_93_Template, 5, 3, "button", 24),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(94, AppointmentSummaryComponent_button_94_Template, 5, 3, "button", 24),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.BQk()),
                2 & g && (_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf", null != _.appointmentForm[1].get("applicants")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(6),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(9, 30, "SUMMARY.TOTAL_PAYMENT_MESSAGE"), ":"),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(5),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(14, 32, "SUMMARY.APPOINTMENT_ONLINE"), ": "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(16, 34, "SUMMARY.ONLINE_MESSAGE"), ""),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(4),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(20, 36, "SUMMARY.APPOINTMENT_VAC"), ": "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(22, 38, "SUMMARY.SERVICES_REQUESTED"), ""),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(5),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(27, 40, "SUMMARY.TOTAL_FULL")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(30, 42, _.getTotal() + _.getTotalVAC()), " ", _.currency, ""),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(7),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(37, 44, "SUMMARY.TOTAL_ONLINE")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(40, 46, _.getTotal()), " ", _.currency, " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(6),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(46, 48, "SUMMARY.TOTAL_VAC")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(49, 50, _.getTotalVAC()), " ", _.currency, " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(6),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(55, 52, "SUMMARY.VISA_FEE")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(58, 54, _.visaFee), " ", _.currency, " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(6),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(64, 56, "SUMMARY.TOTAL_ADDITIONAL_SERVICES")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(67, 58, _.getTotalVAC() - _.visaFee), " ", _.currency, " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(7),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(74, 60, "SUMMARY.PAY_NOW")),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(77, 62, "SUMMARY.NOTICE"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(78, 64, "SUMMARY.PAYMENT_SERVICE_FEE"), ""),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(4),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(81, 66, "SUMMARY.PAYMENT_SERVICE_FEE_1"), " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(84, 68, _.getTotal()), " ", _.currency, ""),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(5),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(89, 70, "BUTTON.BACK"), " "),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(5),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf", _.shouldPay),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),
                _angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf", !_.shouldPay))
            },
            dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.sg, _angular_common__WEBPACK_IMPORTED_MODULE_20__.O5, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.Hw, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.d, _components_summary_accordion_summary_accordion_component__WEBPACK_IMPORTED_MODULE_7__.I, _shared_pipe_number_pipe__WEBPACK_IMPORTED_MODULE_8__.p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.X$]
        })
    }
    ,
    6015: (u,g,_)=>{
        _.d(g, {
            I: ()=>L
        });
        var f = _(5439)
          , c = _.n(f)
          , d = _(7902)
          , l = _(71)
          , r = _(4650)
          , A = _(9653)
          , I = _(6895)
          , K = _(8899)
          , M = _(7084)
          , R = _(4850)
          , T = _(138)
          , D = _(9066);
        function v(O, E) {
            if (1 & O && (r.TgZ(0, "div", 11),
            r._uU(1),
            r.ALo(2, "numberFormat"),
            r.qZA()),
            2 & O) {
                const e = r.oxw(2);
                r.xp6(1),
                r.lnq("", e.getVisa(), " ", r.lcZ(2, 3, e.fee), " ", e.currency, "")
            }
        }
        function F(O, E) {
            if (1 & O && (r.TgZ(0, "div", 8)(1, "div", 9),
            r._uU(2),
            r.qZA(),
            r.YNc(3, v, 3, 5, "div", 10),
            r.qZA()),
            2 & O) {
                const e = r.oxw();
                r.xp6(2),
                r.AsE("", e.summary[1].get("applicants").value[e.index].name, " ", e.summary[1].get("applicants").value[e.index].surname, ""),
                r.xp6(1),
                r.Q6J("ngIf", null != e.summary[0].get("visas").value[e.index])
            }
        }
        function W(O, E) {
            if (1 & O && (r.TgZ(0, "div", 12)(1, "div", 13)(2, "div")(3, "div", 14),
            r._uU(4),
            r.ALo(5, "translate"),
            r.qZA(),
            r.TgZ(6, "div", 15),
            r._uU(7),
            r.qZA()(),
            r.TgZ(8, "div")(9, "div", 14),
            r._uU(10),
            r.ALo(11, "translate"),
            r.qZA(),
            r.TgZ(12, "div", 15),
            r._uU(13),
            r.qZA()()(),
            r._UZ(14, "mat-divider"),
            r.TgZ(15, "div", 16),
            r._uU(16),
            r.ALo(17, "translate"),
            r.qZA(),
            r.TgZ(18, "div", 17)(19, "div")(20, "div", 18),
            r._uU(21),
            r.ALo(22, "translate"),
            r.qZA(),
            r.TgZ(23, "div", 15),
            r._uU(24),
            r.ALo(25, "date"),
            r.qZA()(),
            r.TgZ(26, "div")(27, "div", 18),
            r._uU(28, "Email"),
            r.qZA(),
            r.TgZ(29, "div", 15),
            r._uU(30),
            r.qZA()(),
            r.TgZ(31, "div")(32, "div", 18),
            r._uU(33),
            r.ALo(34, "translate"),
            r.qZA(),
            r.TgZ(35, "div", 15),
            r._uU(36),
            r.qZA()(),
            r.TgZ(37, "div")(38, "div", 18),
            r._uU(39),
            r.ALo(40, "translate"),
            r.qZA(),
            r.TgZ(41, "div", 15),
            r._uU(42),
            r.qZA()(),
            r.TgZ(43, "div")(44, "div", 18),
            r._uU(45),
            r.ALo(46, "translate"),
            r.qZA(),
            r.TgZ(47, "div", 15),
            r._uU(48),
            r.ALo(49, "date"),
            r.qZA()(),
            r.TgZ(50, "div")(51, "div", 18),
            r._uU(52),
            r.ALo(53, "translate"),
            r.qZA(),
            r.TgZ(54, "div", 15),
            r._uU(55),
            r.ALo(56, "date"),
            r.qZA()(),
            r.TgZ(57, "div")(58, "div", 18),
            r._uU(59),
            r.ALo(60, "translate"),
            r.qZA(),
            r.TgZ(61, "div", 15),
            r._uU(62),
            r.ALo(63, "date"),
            r.qZA()()()()),
            2 & O) {
                const e = r.oxw();
                r.xp6(4),
                r.Oqu(r.lcZ(5, 18, "SUMMARY.WHERE")),
                r.xp6(3),
                r.hij(" ", e.getPlace(), " "),
                r.xp6(3),
                r.Oqu(r.lcZ(11, 20, "SUMMARY.WHEN")),
                r.xp6(3),
                r.hij(" ", e.date, " "),
                r.xp6(3),
                r.Oqu(r.lcZ(17, 22, "SUMMARY.APPLICANT_DATA")),
                r.xp6(5),
                r.Oqu(r.lcZ(22, 24, "SUMMARY.BIRTH")),
                r.xp6(3),
                r.hij(" ", r.xi3(25, 26, e.summary[1].get("applicants").value[e.index].birthDate, "dd/MM/yyyy"), " "),
                r.xp6(6),
                r.hij(" ", e.summary[1].get("applicants").value[e.index].email, " "),
                r.xp6(3),
                r.Oqu(r.lcZ(34, 29, "SUMMARY.PASSPORT_NUMBER")),
                r.xp6(3),
                r.hij(" ", e.summary[1].get("applicants").value[e.index].passport.number, " "),
                r.xp6(3),
                r.Oqu(r.lcZ(40, 31, "SUMMARY.MOBILE_NUMBER")),
                r.xp6(3),
                r.hij(" ", e.summary[1].get("applicants").value[e.index].phoneNumber, " "),
                r.xp6(3),
                r.Oqu(r.lcZ(46, 33, "SUMMARY.RELEASE_DATE")),
                r.xp6(3),
                r.hij(" ", r.xi3(49, 35, e.summary[1].get("applicants").value[e.index].passport.issueDate, "dd/MM/yyyy"), " "),
                r.xp6(4),
                r.Oqu(r.lcZ(53, 38, "SUMMARY.EXPECTED_DATE")),
                r.xp6(3),
                r.hij(" ", r.xi3(56, 40, e.summary[0].get("tripDate").value, "dd/MM/yyyy"), " "),
                r.xp6(4),
                r.Oqu(r.lcZ(60, 43, "SUMMARY.EXPIRY_DATE")),
                r.xp6(3),
                r.hij(" ", r.xi3(63, 45, e.summary[1].get("applicants").value[e.index].passport.expirationDate, "dd/MM/yyyy"), " ")
            }
        }
        class L {
            constructor(E) {
                this.store = E,
                this.visaList = null,
                this.centerList = null
            }
            ngOnInit() {
                this.store.select(d.cS).subscribe(E=>this.visaList = E),
                this.store.select(d.$1).subscribe(E=>this.centerList = E),
                this.store.select(l.G).subscribe(E=>{
                    this.currency = E.currency
                }
                )
            }
            getVisa() {
                const E = this.summary[1].get("applicants").value[this.index].visaId;
                return this.visaList.find(e=>e.id === E).title
            }
            getPlace() {
                const E = this.summary[0].get("officeId").value;
                return this.centerList.find(x=>x.id === E).name
            }
            get date() {
                return c().parseZone(this.summary[2].get("slotStartDate").value).format("DD/MM/yyyy - HH:mm (Z)")
            }
        }
        L.\u0275fac = function(E) {
            return new (E || L)(r.Y36(A.yh))
        }
        ,
        L.\u0275cmp = r.Xpm({
            type: L,
            selectors: [["summary-accordion"]],
            inputs: {
                summary: "summary",
                index: "index",
                currency: "currency",
                fee: "fee"
            },
            decls: 12,
            vars: 10,
            consts: [[1, "visasys-accordion", "bg-[#e5f2ff]"], [1, "bg-hue"], [1, "text-white"], [1, "flex", "items-center"], [1, "w-8", "h-8", "md:w-10", "md:h-10"], ["class", "ml-2 lg:ml-6", 4, "ngIf"], [1, "justify-end", "pr-6", "text-white", "uppercase", "text-md", "lg:text-lg", "font-bold"], ["class", "py-6", 4, "ngIf"], [1, "ml-2", "lg:ml-6"], [1, "text:md", "lg:text-xl", "font-bold"], ["class", "text-xs font-bold", 4, "ngIf"], [1, "text-xs", "font-bold"], [1, "py-6"], [1, "lg:grid", "lg:grid-rows-1", "lg:grid-flow-col", "lg:mb-8", "flex", "flex-col", "gap-4"], [1, "text-lg", "text-hue", "font-bold"], [1, "text-base", "text-black", "font-bold"], [1, "text-lg", "text-hue", "font-bold", "my-4"], [1, "lg:grid", "lg:grid-rows-2", "lg:grid-flow-col", "lg:gap-8", "flex", "flex-col", "gap-4"], [1, "text-xs", "text-black", "font-bold"]],
            template: function(E, e) {
                1 & E && (r.TgZ(0, "mat-expansion-panel", 0)(1, "mat-expansion-panel-header", 1)(2, "mat-panel-title", 2)(3, "div", 3)(4, "circle-counter", 4),
                r._uU(5),
                r.qZA(),
                r.YNc(6, F, 4, 3, "div", 5),
                r.qZA()(),
                r.TgZ(7, "mat-panel-description", 6),
                r._uU(8),
                r.ALo(9, "translate"),
                r.ALo(10, "numberFormat"),
                r.qZA()(),
                r.YNc(11, W, 64, 48, "div", 7),
                r.qZA()),
                2 & E && (r.xp6(5),
                r.Oqu(e.index + 1),
                r.xp6(1),
                r.Q6J("ngIf", null != e.summary[1].get("applicants").value[e.index]),
                r.xp6(2),
                r.lnq(" ", r.lcZ(9, 6, "SUMMARY.TOT"), " ", r.lcZ(10, 8, e.summary[0].get("idServiceLevel").value.serviceFee), " ", e.currency, " "),
                r.xp6(3),
                r.Q6J("ngIf", null != e.summary[1].get("applicants").value && null != e.summary[1].get("applicants").value[e.index]))
            },
            dependencies: [I.O5, K.h, M.ib, M.yz, M.yK, M.u4, R.d, I.uU, T.p, D.X$],
            styles: ['.visasys-accordion.mat-expansion-panel{border-radius:10px}  .visasys-accordion .mat-expansion-panel-header{height:85px}  .visasys-accordion .mat-expansion-panel-header.mat-expanded{background-color:#2f55d4!important;height:75px}  .visasys-accordion .mat-expansion-panel-header:hover{background-color:#2f55d4!important}  .visasys-accordion .mat-expansion-indicator:after{border-style:solid;border-width:0 3px 3px 0!important;width:15px;height:15px;content:""!important}.circle-indicator[_ngcontent-%COMP%]{border:3px solid;border-radius:100%;height:40px;width:40px;display:flex;align-items:center;justify-content:center}']
        })
    }
    ,
    8899: (u,g,_)=>{
        _.d(g, {
            h: ()=>d
        });
        var f = _(4650);
        class d {
        }
        d.\u0275fac = function(r) {
            return new (r || d)
        }
        ,
        d.\u0275cmp = f.Xpm({
            type: d,
            selectors: [["circle-counter"]],
            ngContentSelectors: ["*"],
            decls: 2,
            vars: 0,
            consts: [[1, "circle-indicator", "text-xl", "font-bold"]],
            template: function(r, A) {
                1 & r && (f.F$t(),
                f.TgZ(0, "div", 0),
                f.Hsn(1),
                f.qZA())
            },
            styles: [".circle-indicator[_ngcontent-%COMP%]{border:3px solid;border-radius:100%;height:100%;width:100%;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]{display:block}"]
        })
    }
    ,
    5211: (u,g,_)=>{
        _.d(g, {
            s: ()=>l
        });
        var f = _(529)
          , c = _(4650)
          , d = _(4523);
        class l {
            constructor(A, I) {
                this.configurationService = A,
                this.http = I,
                this.v1 = "v1",
                this.visaApplications = "/api/visa-applications",
                this.API_ROUTES = {
                    checkout: ()=>`${this.configurationService.getReservationManagerApi()}${this.visaApplications}/${this.v1}/checkout`
                }
            }
            checkout(A, I, K) {
                const M = (new f.LE).set("paymentProvider", I);
                let R = new f.WM({
                    Recaptcha: K,
                    DeviceOperatingSystem: "web"
                });
                return this.http.post(this.API_ROUTES.checkout(), A, {
                    headers: R,
                    params: M
                })
            }
        }
        l.\u0275fac = function(A) {
            return new (A || l)(c.LFG(d.e),c.LFG(f.eN))
        }
        ,
        l.\u0275prov = c.Yz7({
            token: l,
            factory: l.\u0275fac,
            providedIn: "root"
        })
    }
}]);
