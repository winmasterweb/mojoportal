﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons");Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton=function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton.initializeBase(this,[n]);this._defaultColor="#000000";this._colorDiv=null;this._methodButton=null};Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton.prototype={get_defaultColor:function(){return this._defaultColor},set_defaultColor:function(n){this._defaultColor=n;this._colorDiv!=null&&(this._colorDiv.get_element().style.backgroundColor=n)},get_colorDiv:function(){return this._colorDiv},set_colorDiv:function(n){this._colorDiv=n},get_methodButton:function(){return this._methodButton},set_methodButton:function(n){this._methodButton=n},callMethod:function(){if(!Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton.callBaseMethod(this,"callMethod"))return!1;this.setColor(this.get_defaultColor())},setColor:function(){},initialize:function(){Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton.callBaseMethod(this,"initialize");this._methodButton!=null&&(this._methodButton.callMethod=Function.createDelegate(this,this.callMethod));this._colorDiv!=null&&(this._colorDiv.callMethod=Function.createDelegate(this,this.callMethod))}};Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.FixedColorButton",Sys.Extended.UI.HtmlEditor.ToolbarButtons.DesignModeBoxButton);