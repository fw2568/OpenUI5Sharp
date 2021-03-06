Bridge.assembly("ODatav4ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.core.tutorial.odatav4.Component", {
        inherits: [sap.ui.core.UIComponent],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String,System.Object],"pi":[{"n":"sId","pt":System.String,"ps":0},{"n":"mSettings","pt":System.Object,"ps":1}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"ov":true,"a":2,"n":"init","t":8,"sn":"init","rt":System.Void},{"a":2,"n":"metadata","is":true,"t":4,"rt":System.Object,"sn":"metadata"},{"a":2,"n":"models","t":4,"rt":sap.ui.core.tutorial.odata4.model.Models,"sn":"models"}]}; },
        statics: {
            fields: {
                metadata: null
            },
            ctors: {
                init: function () {
                    this.metadata = { manifest: "json" };
                }
            }
        },
        fields: {
            models: null
        },
        ctors: {
            ctor: function (sId, mSettings) {
                this.$initialize();
                sap.ui.core.UIComponent.call(this, sId, mSettings);
            }
        },
        methods: {
            init: function () {
                // call the init function of the parent
                sap.ui.core.UIComponent.prototype.init.call(this);

                // set the device model
                this.setModel(this.models.createDeviceModel(), "device");
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/UIComponent", "sap/ui/core/tutorial/odatav4/model/models"], System.String), function (UIComponent, models) {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.core.tutorial.odatav4.Component);
    newObj.models = models;
    return sap.ui.core.UIComponent.extend("sap.ui.core.tutorial.odatav4.Component", newObj);
});
