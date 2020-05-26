(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{367:function(e,t,o){"use strict";o.r(t);var r=o(25),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"further-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-steps"}},[e._v("#")]),e._v(" Further Steps")]),e._v(" "),o("p",[e._v("If you are lucky enough, you may now be able to surf the Internet freely. Here are some optional steps that you can follow, to make your experience with Qv2ray better.")]),e._v(" "),o("h2",{attrs:{id:"joining-qv2ray-user-group"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joining-qv2ray-user-group"}},[e._v("#")]),e._v(" Joining Qv2ray User Group")]),e._v(" "),o("p",[e._v("We suggest you join our "),o("a",{attrs:{href:"https://t.me/qv2ray",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray User Group"),o("OutboundLink")],1),e._v(" at "),o("a",{attrs:{href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram"),o("OutboundLink")],1),e._v(". Here you can chat directly with Qv2ray developers, and also the great Qv2ray users. For usage problems, it is always more efficient to discuss them in the group, than opening up one issue on GitHub.")]),e._v(" "),o("p",[e._v("Also, optionally, you may subscribe "),o("a",{attrs:{href:"https://t.me/qv2ray_outpost",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray Outpost"),o("OutboundLink")],1),e._v(" channel at Telegram, if you don't like to talk too much or even show up. We will push news updates of Qv2ray, and even send polls that maybe decides Qv2ray's fate! Make sure you don't miss it.")]),e._v(" "),o("h2",{attrs:{id:"tweaking-ui-languages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tweaking-ui-languages"}},[e._v("#")]),e._v(" Tweaking UI & Languages")]),e._v(" "),o("p",[e._v("Despite Qv2ray's best efforts to detect the UI style of your platform, you may still see offending UI details on Qv2ray. For example, the tray icon color is too light to see, the icon color on the button is incongruous, etc.")]),e._v(" "),o("p",[e._v("In this case, please turn to "),o("strong",[e._v("Preference Window")]),e._v(". In "),o("strong",[e._v("General Settings")]),e._v(" Tab, please adjust the following items according to your real situation:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Darkmode Tray Icons")]),e._v(": when enabled, the tray icon turns light-colored to adjust to darkmode themes. if the region of your tray is light-colored, disabling this is recommended.")]),e._v(" "),o("li",[o("strong",[e._v("Darkmode UI Icons")]),e._v(": when enabled, the icons on buttons turn light-colored. if you are using a light-colored window theme, please turn this off.")])]),e._v(" "),o("p",[e._v("Similarly, Qv2ray will do its best to detect the display language of your system and set it to Qv2ray's interface language when it first starts. If the results of automatic detection are not satisfactory, or if you just want to try Qv2ray in another language, you can adjust that in "),o("strong",[e._v("Preference Window")]),e._v(" -> "),o("strong",[e._v("General Settings")]),e._v(" -> "),o("strong",[e._v("Language")]),e._v(".")]),e._v(" "),o("p",[e._v("Choose according to ISO-639/ISO-3166 codes. For example, "),o("code",[e._v("zh_CN")]),e._v(" for "),o("strong",[e._v("Chinese Simplified")]),e._v(", "),o("code",[e._v("ja_JP")]),e._v(" for "),o("strong",[e._v("Japanese")]),e._v(", "),o("code",[e._v("en_US")]),e._v(" for "),o("strong",[e._v("American English")]),e._v(", etc. Most of the user interface can be retranslated immediately after a change, but a complete restart of Qv2ray is recommended to make the changes take effect.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Restart After Change")]),e._v(" "),o("p",[e._v("If changes don't seems to apply, you could try restarting Qv2ray.")])]),e._v(" "),o("h2",{attrs:{id:"tweaking-routing-schemes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tweaking-routing-schemes"}},[e._v("#")]),e._v(" Tweaking Routing Schemes")]),e._v(" "),o("p",[e._v("By default, Qv2ray will be set to "),o("strong",[e._v("bypass the traffic of China mainland")]),e._v(", according to "),o("code",[e._v("geosite.dat")]),e._v(" and "),o("code",[e._v("geoip.dat")]),e._v(" from V2Ray core, thus it it not necessary to configure some awkward PAC rules. You can override this default setting in the "),o("strong",[e._v("Preference Window")]),e._v(", by simply turning off this function in tab "),o("strong",[e._v("Connection Settings")]),e._v(".")]),e._v(" "),o("p",[e._v("However, sometimes, these rules won't always apply. For example, you have a special proxy for "),o("a",{attrs:{href:"https://bilibili.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bilibili"),o("OutboundLink")],1),e._v(" that unlocks the Hong Kong/Macau/Taiwan episodes. Since bilibili is a China mainland website, by default, the traffic won't go through the proxy, and that causes you problem. The solution is using our "),o("strong",[e._v("Advanced Route Settings")]),e._v(" in the "),o("strong",[e._v("Preference Window")]),e._v(".")]),e._v(" "),o("p",[e._v("A valid route setting scheme is basically a 2x3 routing rule matrix. Syntax for the rules can be found in "),o("a",{attrs:{href:"https://v2ray.com/chapter_02/03_routing.html#ruleobject",target:"_blank",rel:"noopener noreferrer"}},[e._v("RuleObject Documentation"),o("OutboundLink")],1),e._v(" from V2Ray Official Website. Here, if we want to force bilibili go through proxy, we just write a rule "),o("code",[e._v("geosite:bilibili")]),e._v(" at "),o("code",[e._v("(Domain, Proxy)")]),e._v(" position.")]),e._v(" "),o("p",[e._v("There are other advanced usages of routing schemes. If you are interested, try explore more into it.")]),e._v(" "),o("h2",{attrs:{id:"sharing-proxy-over-local-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sharing-proxy-over-local-network"}},[e._v("#")]),e._v(" Sharing Proxy over Local Network")]),e._v(" "),o("p",[e._v("For the sake of safety, by default, Qv2ray will only listen on "),o("code",[e._v("127.0.0.1")]),e._v(", that is to say, only your own machine is allowed to use the proxy. If you want to share your proxy over your local network, there are changes to be made.")]),e._v(" "),o("p",[e._v("The most simple and overkill method is to change the listen address from "),o("code",[e._v("127.0.0.1")]),e._v(" to "),o("code",[e._v("0.0.0.0")]),e._v(", which will allow all incoming connections to your little proxy.")]),e._v(" "),o("p",[e._v("However, this is "),o("strong",[e._v("not as safe")]),e._v(", since your proxy can be easily abused and attacked by others. To prevent this, you have to either shield yourself under NAT (for example, using a trusted router and don't expose your proxy ports), or setup a firewall to block the unwanted addresses (iptables, and etc).")]),e._v(" "),o("p",[e._v("You may encounter connectivity problems when sharing proxy. Here are some troubleshooting tips:")]),e._v(" "),o("ul",[o("li",[e._v("allow V2Ray core to listen on "),o("code",[e._v("0.0.0.0")]),e._v(" in Windows Firewall")]),e._v(" "),o("li",[e._v("disable Intranet Isolation / AP Isolation on your router")])])])}),[],!1,null,null,null);t.default=a.exports}}]);