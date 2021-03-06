Bridge.assembly("ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("manu.toolpageapp.fv.Component", {
        inherits: [sap.ui.core.UIComponent],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String,System.Object],"pi":[{"n":"sId","pt":System.String,"ps":0},{"n":"mSettings","pt":System.Object,"ps":1}],"sn":"ctor"},{"a":2,"n":"DefineScript","is":true,"t":8,"sn":"DefineScript","rt":System.Void},{"v":true,"a":2,"n":"getContentDensityClass","t":8,"sn":"getContentDensityClass","rt":System.String},{"ov":true,"a":2,"n":"init","t":8,"sn":"init","rt":System.Void},{"v":true,"a":2,"n":"myNavBack","t":8,"sn":"myNavBack","rt":System.Void},{"a":2,"n":"_sContentDensityClass","t":4,"rt":System.String,"sn":"_sContentDensityClass"},{"a":2,"n":"metadata","is":true,"t":4,"rt":System.Object,"sn":"metadata"}]}; },
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
            _sContentDensityClass: null
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

                // create the views based on the url/hash
                this.getRouter().initialize();

                // set the device model
                this.setModel(new manu.toolpageapp.fv.model.Models().createDeviceModel(), "device");
            },
            myNavBack: function () {
                var oHistory = sap.ui.core.routing.History.getInstance();
                var oPrevHash = oHistory.getPreviousHash();
                if (oPrevHash != null) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("masterSettings", { }, true);
                }
            },
            getContentDensityClass: function () {
                if (this._sContentDensityClass == null) {
                    if (!sap.ui.Device.support.touch) {
                        this._sContentDensityClass = "sapUiSizeCompact";
                    } else {
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }
                }
                return this._sContentDensityClass;
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/UIComponent", "manu/toolpageapp/fv/model/models", "sap/ui/model/resource/ResourceModel"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(manu.toolpageapp.fv.Component);
    return sap.ui.core.UIComponent.extend("manu.toolpageapp.fv.Component", newObj);
});
