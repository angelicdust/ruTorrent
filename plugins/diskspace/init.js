plugin.loadLang();
plugin.loadMainCSS();

plugin.prgStartColor = new RGBackground("#26a0da");
plugin.prgEndColor = new RGBackground("#da2626");

plugin.setValue = function( full, free )
{
	var percent = iv(full ? (full-free)/full*100 : 0);
	let color = plugin.prgStartColor;
	if (percent > 90)
		color = plugin.prgEndColor;
	if(percent>100)
		percent = 100;
	$("#meter-disk-holder").prop("title", theConverter.bytes(free)+"/"+theConverter.bytes(full));
	$("#meter-disk-value-outer").css( { visibility: !percent ? "hidden" : "visible" } );
	$("#meter-disk-value").width( percent+"%" ).css( { "background-color": color.getColor(), visibility: !percent ? "hidden" : "visible" } );
	$("#meter-disk-text").text(percent+'%');
	$("#meter-disk-detail").text(theConverter.bytes(free)+" / "+theConverter.bytes(full));

	if($.noty && plugin.allStuffLoaded)
	{
		if((free<plugin.notifySpaceLimit) && !plugin.noty)
			plugin.noty = $.noty(
				{
					text: theUILang.diskNotification,
					layout : 'bottomLeft',
					type: 'error',
					timeout : false,
					closeOnSelfClick: false
				});
		if((free>plugin.notifySpaceLimit) && plugin.noty)
		{
			$.noty.close(plugin.noty);
			plugin.noty = null;
		}
	}
};

plugin.init = function()
{
	if(getCSSRule("#meter-disk-holder"))
	{
		plugin.addPaneToStatusbar(
			"meter-disk-pane",
			$("<table>").append(
				$("<tbody>").append(
					$("<tr>").append(
						$("<td>").attr("id", "meter-disk-td"), $("<td>").append($("<div>").attr("id", "meter-disk-holder").append(
							$("<div>").attr("id","meter-disk-value-outer").css({ visibility: "hidden", float: "left" }).append(
								$("<span></span>").attr("id","meter-disk-text").css({overflow: "visible"}) ).append(
								$("<div>").attr("id","meter-disk-value").css({ visibility: "hidden", float: "left" }).width(0).html("&nbsp;") ).get(0))
						), $("<td>").append($("<div>").attr("id","meter-disk-detail"))
					)
				)
			)
				.get(0)
		);

		plugin.check = function()
		{
			var AjaxReq = jQuery.ajax(
				{
					type: "GET",
					timeout: theWebUI.settings["webui.reqtimeout"],
					async : true,
					cache: false,
					url : "plugins/diskspace/action.php",
					dataType : "json",
					cache: false,
					success : function(data)
					{
						plugin.setValue( data.total, data.free );
					},
					complete : function(jqXHR, textStatus)
					{
						plugin.diskTimeout = window.setTimeout(plugin.check,plugin.interval*1000);
					}
				});
		};
		plugin.check();
		plugin.markLoaded();
	}
	else
		window.setTimeout(arguments.callee,500);
};

plugin.onRemove = function()
{
	plugin.removePaneFromStatusbar("meter-disk-td");
	if(plugin.diskTimeout)
	{
		window.clearTimeout(plugin.diskTimeout);
		plugin.diskTimeout = null;
	}
};

plugin.init();