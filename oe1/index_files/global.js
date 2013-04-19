function getIndex(e, d, c) {
	for ( var b = 0; b < d.length; b++) {
		if (c && c(d[b]) || e == d[b]) {
			return b
		}
	}
	return -1
}
function doChangeLanguage(language) {
	 
	var eval = new RegExp("lang=[A-Za-z]+", "gi");
	var search = window.location.href;
	var match = eval.test(search);
	if (match) {
		search = search.replace(/lang\=[A-Za-z]+/gi, "lang=" + language)
	} else {
		
		var numPosition = search.indexOf('\#');
		if (numPosition == -1) {
			if (window.location.search.length > 0 && window.location.search.charAt(0) == "?") {
				search += "&lang=" + language
			} else {
				search += "?lang=" + language
			}			
		} else {
			
			if (window.location.search.length > 0 && window.location.search.charAt(0) == "?") {
				search = search.substring(0, numPosition) + "&lang=" + language + search.substring(numPosition);
			} else {
				search = search.substring(0, numPosition) + "?lang=" + language + search.substring(numPosition);
			}
			
			
		}

	}
	var inicioPattern = new RegExp("inicio\.do", "gi");
	var brHomePattern = new RegExp("br\-home\.do", "gi");
	var landingPattern = new RegExp("landing\.do", "gi");
	var inicioMatch = inicioPattern.test(search);
	var brHomeMatch = brHomePattern.test(search);
	var landingMatch = landingPattern.test(search);
	var countSlash = search.split("/").length - 1;
	
	if (((language == 'pt' && inicioPattern) || (language == 'pt' && landingPattern)) && countSlash <= 3) {
		search = search.replace(/inicio.do/gi, "br-home.do");
		search = search.replace(/landing.do/gi, "br-home.do");
	} else {
		if ((language != 'pt' && brHomeMatch) || (language != 'pt' && landingPattern)) {
			search = search.replace(/br-home.do/gi, "inicio.do");
		}
	}
	window.location.href = search
}
String.prototype.trim = function() {
	a = this.replace(/^\s+/, "");
	return a.replace(/\s+$/, "")
};
function openWindow(b) {
	open(
			b,
			"window",
			"width=780,height=650,toolbar=no,directories=no,scrollbars=yes,menubar=no,status=no")
}
function alphaOrder(d, c) {
	if (d.text < c.text) {
		return -1
	} else {
		if (d.text == c.text) {
			return 0
		} else {
			return 1
		}
	}
}
function orderSelect(n) {
	var k = document.getElementById(n);
	var d = k.options[k.selectedIndex];
	var l = -1;
	var h;
	var f = -1;
	var g;
	var e = -1;
	var m;
	var b = k.options;
	var c = new Array(b.length);
	for (i = 0; i < b.length; i++) {
		c[i] = b[i];
		m = c[i];
		if (m.text == "Other" || m.text == "Otro" || m.text == "Otros"
				|| m.text == "Others") {
			h = m
		}
		if (m.text == "[Elige uno...]" || m.text == "[Choose one...]") {
			g = m
		}
	}
	c.sort(alphaOrder);
	k.options.length = 0;
	k.options.length = c.length;
	chooseOnePosition = getIndex(g, c);
	if (chooseOnePosition > -1) {
		c.splice(chooseOnePosition, 1);
		c.unshift(g)
	}
	f = getIndex(h, c);
	if (f > -1) {
		c.splice(f, 1);
		c.push(h)
	}
	for (i = 0; i < c.length; i++) {
		m = c[i].text;
		k.options[i] = c[i];
		if (m == d.text) {
			l = i
		}
	}
	k.options[l].selected = d
}
function checkNumbers(d) {
	var f = d.value;
	var e;
	var c = 0;
	var b = "";
	for (c = 0; c < f.length; c++) {
		b = f.charAt(c);
		if ((b >= 0 && b <= 9) && b != " ") {
			e = (e != undefined) ? e + "" + b : b
		}
	}
	e ? d.value = e : d.value = ""
}
var intlCodes = new Array("", "93", "355", "213", "376", "244", "1268", "54",
		"374", "297", "247", "61", "43", "994", "973", "880", "375", "32",
		"501", "229", "975", "591", "387", "267", "55", "673", "359", "226",
		"257", "855", "237", "1", "238", "236", "235", "56", "86", "57", "269",
		"243", "242", "506", "225", "385", "53", "357", "420", "45", "253",
		"1767", "1", "593", "20", "503", "240", "291", "372", "251", "679",
		"358", "33", "241", "220", "995", "49", "233", "30", "1473", "502",
		"224", "245", "592", "509", "504", "36", "354", "91", "62", "98",
		"964", "353", "972", "39", "1876", "81", "962", "7", "254", "686",
		"850", "82", "965", "996", "856", "371", "961", "266", "231", "218",
		"423", "370", "352", "389", "261", "265", "60", "960", "223", "356",
		"692", "222", "230", "52", "691", "373", "377", "976", "382", "212",
		"258", "95", "264", "674", "977", "31", "64", "505", "227", "234",
		"47", "968", "92", "680", "507", "675", "595", "51", "63", "48", "351",
		"974", "40", "7", "250", "1869", "1758", "1784", "685", "378", "239",
		"966", "221", "381", "248", "232", "65", "421", "386", "677", "252",
		"27", "34", "94", "249", "597", "268", "46", "41", "963", "992", "255",
		"66", "670", "228", "676", "1868", "216", "90", "993", "688", "256",
		"380", "971", "44", "001", "598", "998", "678", "39", "58", "84",
		"967", "260", "263", "", "1");
function changeIntlCode(e, d) {
	var b = e.value;
	if (d) {
		document.getElementById(d).value = intlCodes[b]
	} else {
		var c = null;
		if (document.getElementById("countryCode1")) {
			c = document.getElementById("countryCode1");
			if (document.getElementById("countryCode2").type == "hidden") {
				if (b == 0) {
					c.value = ""
				} else {
					c.value = intlCodes[b]
				}
			} else {
				c.value = intlCodes[b]
			}
		}
		if (document.getElementById("countryCode2")) {
			c = document.getElementById("countryCode2");
			c.value = intlCodes[b]
		}
	}
}
function setIntlCode(c) {
	var b = null;
	if (document.getElementById("countryCode1")) {
		b = document.getElementById("countryCode1");
		b.value = intlCodes[c]
	}
	if (document.getElementById("countryCode2")) {
		b = document.getElementById("countryCode2");
		b.value = intlCodes[c]
	}
}
function showTooltip(d) {
	var b = d.getElementsByTagName("*");
	var c = 0;
	for (c = 0; c < b.length; c = c + 1) {
		if (b[c].className == "tooltip") {
			b[c].style.display = "block"
		}
	}
}
function hideTooltip(d) {
	var b = d.getElementsByTagName("*");
	var c = 0;
	for (c = 0; c < b.length; c = c + 1) {
		if (b[c].className == "tooltip") {
			b[c].style.display = "none"
		}
	}
}
if (screen.availWidth < 1000) {
	document.getElementsByTagName("body")[0].style.width = "960px"
}
function changeSite(b) {
	var c = b.options[b.selectedIndex].value;
	if (c == "is") {
		window.location = "/index-int.do"
	}
	if (c == "ve") {
		window.location = "/ve/inicio.do"
	}
}
function hideMe(c, b) {
	c.style.display = "none";
	document.getElementById("" + b + "").style.display = "inline"
}
function formatCurrencyLoad(c) {
	if (c == "") {
		return ""
	}
	c = c.toString().replace(/\$|\,/g, "");
	dblValue = parseFloat(c);
	blnSign = (dblValue == (dblValue = Math.abs(dblValue)));
	dblValue = Math.floor(dblValue * 100 + 0.50000000001);
	intCents = dblValue % 100;
	strCents = intCents.toString();
	dblValue = Math.floor(dblValue / 100).toString();
	if (intCents < 10) {
		strCents = "0" + strCents
	}
	for ( var b = 0; b < Math.floor((dblValue.length - (1 + b)) / 3); b++) {
		dblValue = dblValue.substring(0, dblValue.length - (4 * b + 3)) + "."
				+ dblValue.substring(dblValue.length - (4 * b + 3))
	}
	if (((blnSign) ? "" : "-") + dblValue + "," + strCents == "-NaN,NaN") {
		return ""
	} else {
		return (((blnSign) ? "" : "-") + dblValue + "," + strCents)
	}
}
function currencyFormat(g, f, c, l) {
	var o = 0;
	var n = "";
	var h = j = 0;
	var k = len2 = 0;
	var b = "0123456789";
	var d = aux2 = "";
	var m = (document.all) ? l.keyCode : l.which;
	if (m == 13) {
		return true
	}
	if (m == 8) {
		return true
	}
	n = String.fromCharCode(m);
	if (b.indexOf(n) == -1) {
		if (l.ctrlKey == true && l.charCode == 118) {
			return true
		} else {
			return false
		}
	}
	k = g.value.length;
	for (h = 0; h < k; h++) {
		if ((g.value.charAt(h) != "0") && (g.value.charAt(h) != c)) {
			break
		}
	}
	d = "";
	for (; h < k; h++) {
		if (b.indexOf(g.value.charAt(h)) != -1) {
			d += g.value.charAt(h)
		}
	}
	d += n;
	k = d.length;
	if (k == 0) {
		g.value = ""
	}
	if (k == 1) {
		g.value = "0" + c + "0" + d
	}
	if (k == 2) {
		g.value = "0" + c + d
	}
	if (k > 2) {
		aux2 = "";
		for (j = 0, h = k - 3; h >= 0; h--) {
			if (j == 3) {
				aux2 += f;
				j = 0
			}
			aux2 += d.charAt(h);
			j++
		}
		g.value = "";
		len2 = aux2.length;
		for (h = len2 - 1; h >= 0; h--) {
			g.value += aux2.charAt(h)
		}
		g.value += c + d.substr(k - 2, k)
	}
	return false
}
function convertDecimalPointFormat(c, b) {
	str = c.value;
	do {
		str = str.replace(".", "")
	} while (str.indexOf(".") >= 0);
	do {
		str = str.replace(",", ".")
	} while (str.indexOf(",") >= 0);
	c.value = str;
	if (b != null) {
		b.value = str
	}
}
function makeSublist(b, d) {
	$("body").append(
			"<select style='display:none' id='" + b + d + "'></select>");
	$("#" + b + d).html($("#" + d + " option"));
	var c = $("#" + b).attr("value");
	$("#" + d).html($("#" + b + d + " .sub_" + c).clone());
	$("#" + b).change(function() {
		var e = $("#" + b).attr("value");
		$("#" + d).html($("#" + b + d + " .sub_" + e).clone());
		$("#" + d).focus()
	})
}
var isControlKey = 0;
var ttPosition;
function disableCopyPaste(c, b) {
	c.onkeydown = interceptKeys;
	c.oncontextmenu = function() {
		return false
	}
}
function interceptKeys(b) {
	b = b || window.event;
	var e = b.keyCode;
	var d = b.ctrlKey || b.metaKey;
	if (d && b.altKey) {
		return true
	} else {
		if ((d && e == 67) || (d && e == 86) || (d && e == 88)) {
			isControlKey = 2;
			$("input[alt]").tipsy({
				title : "alt",
				gravity : ttPosition,
				fade : true
			});
			return false
		} else {
			isControlKey = 1;
			$("input[alt]").tipsy({
				title : "alt",
				fade : false
			})
		}
	}
	return true
}
function changeSubMedia(g) {
	var f = $("#media").attr("value");
	var d = $("#country").attr("value");
	var c;
	if (g == "en") {
		c = "Specifically..."
	}
	if (g == "es") {
		c = "Específicamente..."
	}
	if (g == "pt") {
		c = "Especificamente..."
	}
	$("#subMedia option").remove();
	if (d == "194") {
		$("#countryCode1").attr("readonly", false)
	} else {
		$("#countryCode1").attr("readonly", true)
	}
	$("#subMedia option").remove();
	if (f == "2") {
		if (d == "189") {
			$("#subMedia")
					.append(
							'<option value="0">'
									+ c
									+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="8">Globovisi&oacute;n</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option><option value="73">Universal Channel</option><option value="7">Venevisi&oacute;n</option><option value="55">Warner Channel</option>');
			$("#sp-subMedia").css("display", "block")
		} else {
			if (d == "53") {
				$("#subMedia")
						.append(
								'<option value="0">'
										+ c
										+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="54">TNT</option><option value="73">Universal Channel</option>');
				$("#sp-subMedia").css("display", "block")
			} else {
				if (d == "184") {
					$("#subMedia")
							.append(
									'<option value="0">'
											+ c
											+ '</option><option value="16">Discovery Channel</option><option value="24">History Channel</option>');
					$("#sp-subMedia").css("display", "block")
				} else {
					if (d == "51" || d == "136") {
						$("#subMedia")
								.append(
										'<option value="0">'
												+ c
												+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option><option value="73">Universal Channel</option><option value="55">Warner Channel</option>');
						$("#sp-subMedia").css("display", "block")
					} else {
						if (d == "37") {
							$("#subMedia")
									.append(
											'<option value="0">'
													+ c
													+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="81">City TV</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option><option value="73">Universal Channel</option><option value="55">Warner Channel</option>');
							$("#sp-subMedia").css("display", "block")
						} else {
							if (d == "68" || d == "126") {
								$("#subMedia")
										.append(
												'<option value="0">'
														+ c
														+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="25">Sony</option><option value="54">TNT</option><option value="73">Universal Channel</option>');
								$("#sp-subMedia").css("display", "block")
							} else {
								if (d == "41" || d == "73") {
									$("#subMedia")
											.append(
													'<option value="0">'
															+ c
															+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="54">TNT</option><option value="73">Universal Channel</option>');
									$("#sp-subMedia").css("display", "block")
								} else {
									if (d == "50") {
										$("#subMedia")
												.append(
														'<option value="0">'
																+ c
																+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option><option value="73">Universal Channel</option>');
										$("#sp-subMedia").css("display",
												"block")
									} else {
										if (d == "133") {
											$("#subMedia")
													.append(
															'<option value="0">'
																	+ c
																	+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="22">FX</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option><option value="73">Universal Channel</option>');
											$("#sp-subMedia").css("display",
													"block")
										} else {
											if (d == "21") {
												$("#subMedia")
														.append(
																'<option value="0">'
																		+ c
																		+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="19">Fox</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="25">Sony</option><option value="54">TNT</option><option value="74">Studio Universal</option><option value="73">Universal Channel</option>');
												$("#sp-subMedia").css(
														"display", "block")
											} else {
												if (d == "135") {
													$("#subMedia")
															.append(
																	'<option value="0">'
																			+ c
																			+ '</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="14">CNN</option><option value="57">Canal de las Estrellas</option><option value="56">Golden</option><option value="24">History Channel</option><option value="25">Sony</option><option value="54">TNT</option>');
													$("#sp-subMedia").css(
															"display", "block")
												} else {
													if (d == "185") {
														$("#subMedia")
																.append(
																		'<option value="0">'
																				+ c
																				+ '</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="14">CNN</option><option value="57">Canal de las Estrellas</option><option value="56">Golden</option><option value="24">History Channel</option><option value="80">MGM</option><option value="76">NTN 24</option><option value="25">Sony</option><option value="54">TNT</option>');
														$("#sp-subMedia").css(
																"display",
																"block")
													} else {
														if (d == "7") {
															$("#subMedia")
																	.append(
																			'<option value="0">'
																					+ c
																					+ '</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="56">Golden</option><option value="24">History Channel</option><option value="76">NTN 24</option><option value="25">Sony</option>');
															$("#sp-subMedia")
																	.css(
																			"display",
																			"block")
														} else {
															if (d == "112") {
																$("#subMedia")
																		.append(
																				'<option value="0">'
																						+ c
																						+ '</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="22">FX</option><option value="24">History Channel</option><option value="75">Nat Geo</option><option value="80">MGM</option><option value="76">NTN 24</option><option value="25">Sony</option>');
																$(
																		"#sp-subMedia")
																		.css(
																				"display",
																				"block")
															} else {
																if (d == "35") {
																	$(
																			"#subMedia")
																			.append(
																					'<option value="0">'
																							+ c
																							+ '</option><option value="69">Animal Planet</option><option value="11">AXN</option><option value="12">A&amp;E</option><option value="79">Bio</option><option value="57">Canal de las Estrellas</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="56">Golden</option><option value="24">History Channel</option><option value="70">LIV</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option>');
																	$(
																			"#sp-subMedia")
																			.css(
																					"display",
																					"block")
																} else {
																	if (d == "6"
																			|| d == "49") {
																		$(
																				"#subMedia")
																				.append(
																						'<option value="0">'
																								+ c
																								+ '<option value="11">AXN</option><option value="14">CNN</option><option value="25">Sony</option><option value="54">TNT</option>');
																		$(
																				"#sp-subMedia")
																				.css(
																						"display",
																						"block")
																	} else {
																		if (d == "71") {
																			$(
																					"#subMedia")
																					.append(
																							'<option value="0">'
																									+ c
																									+ '<option value="11">AXN</option><option value="14">CNN</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option>');
																			$(
																					"#sp-subMedia")
																					.css(
																							"display",
																							"block")
																		} else {
																			if (d == "15"
																					|| d == "83") {
																				$(
																						"#subMedia")
																						.append(
																								'<option value="0">'
																										+ c
																										+ '<option value="11">AXN</option><option value="79">Bio</option><option value="14">CNN</option><option value="19">Fox</option><option value="22">FX</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="25">Sony</option><option value="74">Studio Universal</option><option value="54">TNT</option>');
																				$(
																						"#sp-subMedia")
																						.css(
																								"display",
																								"block")
																			} else {
																				if (d == "175") {
																					$(
																							"#subMedia")
																							.append(
																									'<option value="0">'
																											+ c
																											+ '<option value="11">AXN</option><option value="79">Bio</option><option value="14">CNN</option><option value="19">Fox</option><option value="22">FX</option><option value="80">MGM</option><option value="75">Nat Geo</option><option value="25">Sony</option><option value="54">TNT</option>');
																					$(
																							"#sp-subMedia")
																							.css(
																									"display",
																									"block")
																				} else {
																					if (d == "72"
																							|| d == "146") {
																						$(
																								"#subMedia")
																								.append(
																										'<option value="0">'
																												+ c
																												+ '<option value="11">AXN</option><option value="25">Sony</option><option value="54">TNT</option>');
																						$(
																								"#sp-subMedia")
																								.css(
																										"display",
																										"block")
																					} else {
																						if (d == "12") {
																							$(
																									"#subMedia")
																									.append(
																											'<option value="0">'
																													+ c
																													+ '<option value="11">AXN</option><option value="14">CNN</option><option value="25">Sony</option><option value="54">TNT</option>');
																							$(
																									"#sp-subMedia")
																									.css(
																											"display",
																											"block")
																						} else {
																							if (d == "18"
																									|| d == "164") {
																								$(
																										"#subMedia")
																										.append(
																												'<option value="0">'
																														+ c
																														+ '<option value="69">Animal Planet</option><option value="11">AXN</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="70">LIV</option><option value="25">Sony</option><option value="54">TNT</option>');
																								$(
																										"#sp-subMedia")
																										.css(
																												"display",
																												"block")
																							} else {
																								if (d == "145") {
																									$(
																											"#subMedia")
																											.append(
																													'<option value="0">'
																															+ c
																															+ '<option value="11">AXN</option><option value="14">CNN</option><option value="16">Discovery Channel</option><option value="25">Sony</option><option value="54">TNT</option>');
																									$(
																											"#sp-subMedia")
																											.css(
																													"display",
																													"block")
																								} else {
																									if (d == "195") {
																										$(
																												"#subMedia")
																												.append(
																														'<option value="0">'
																																+ c
																																+ '<option value="69">Animal Planet</option><option value="16">Discovery Channel</option><option value="68">Discovery Home & Health</option><option value="67">Discovery Kids</option><option value="72">Discovery Travel & Living</option><option value="70">LIV</option>');
																										$(
																												"#sp-subMedia")
																												.css(
																														"display",
																														"block")
																									} else {
																										if (d == "24") {
																											$(
																													"#subMedia")
																													.append(
																															'<option value="0">'
																																	+ c
																																	+ '<option value="72">Discovery Travel & Living</option>');
																											$(
																													"#sp-subMedia")
																													.css(
																															"display",
																															"block")
																										} else {
																											$(
																													"#subMedia")
																													.append(
																															'<option value="1">Otro</option>');
																											$(
																													"#sp-subMedia")
																													.css(
																															"display",
																															"none")
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	} else {
		if (f == "1") {
			$("#subMedia")
					.append(
							'<option value="0">'
									+ c
									+ '</option><option value="53">Redes sociales</option><option value="1">Otro</option>');
			$("#sp-subMedia").css("display", "block")
		} else {
			if (f != "") {
				$("#subMedia").append('<option value="1">Otro</option>');
				$("#sp-subMedia").css("display", "none")
			}
		}
	}
	if (!document.getElementById("start")) {
		var b = new Array("1", "7", "8", "11", "12", "13", "14", "15", "16",
				"17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
				"27", "28", "31", "34", "36", "37", "38", "39", "40", "53",
				"54", "55", "56", "57", "67", "68", "69", "70", "72", "73",
				"74", "75", "76", "79", "80", "81");
		if ($("#subMedia :selected").val() == 0) {
			$("#subMedia").css("color", "#666")
		} else {
			$("#subMedia").css("color", "#000");
			$("#subMedia option[value='0']").css("color", "#666")
		}
		var e = 0;
		for (e; e < b.length; e++) {
			$("#subMedia").find("option[value='" + b[e] + "']").css("color",
					"#000")
		}
	}
};