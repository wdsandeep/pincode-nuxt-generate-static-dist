(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{301:function(t,n,e){"use strict";e.r(n);e(68);var d={props:["pincode"],computed:{pincodeAt1:function(){return this.pincode[0]},pincodeAt12:function(){return this.pincode[0]+this.pincode[1]},pincodeAt123:function(){return this.pincode[0]+this.pincode[1]+this.pincode[2]},region:function(){var t="";return["1","2"].includes(this.pincodeAt1)?t="Northern":["3","4"].includes(this.pincodeAt1)?t="Western":["5","6"].includes(this.pincodeAt1)?t="Southern":["7","8"].includes(this.pincodeAt1)?t="Eestern":["9"].includes(this.pincodeAt1)&&(t="APS"),t},state:function(){var t="N/A";return["11"].includes(this.pincodeAt12)?t="Delhi":["12","13"].includes(this.pincodeAt12)?t="Haryana":["14","15","16"].includes(this.pincodeAt12)?t="Punjab":["17"].includes(this.pincodeAt12)?t="Himachal Pradesh":["18","19"].includes(this.pincodeAt12)?t="Jammu & Kashmir":["20","21","22","23","24","25","26","27","28"].includes(this.pincodeAt12)?t="Uttar Pradesh, Uttarakhand":["30","31","32","33","34"].includes(this.pincodeAt12)?t="Rajasthan":["36","37","38","39"].includes(this.pincodeAt12)?t="Gujarat":["40","41","42","43","44"].includes(this.pincodeAt12)?t="Maharashtra":["45","46","47","48"].includes(this.pincodeAt12)?t="Madhya Pradesh":["49"].includes(this.pincodeAt12)?t="Chhattisgarh":["50"].includes(this.pincodeAt12)?t="Telangana":["51","52","53"].includes(this.pincodeAt12)?t="Andhra Pradesh":["56","57","58","59"].includes(this.pincodeAt12)?t="Karnataka":["60","61","62","63","64","65","66"].includes(this.pincodeAt12)?t="Tamil Nadu":["67","68","69"].includes(this.pincodeAt12)?t="Kerala":["70","71","72","73","74"].includes(this.pincodeAt12)?t="West Bengal":["75","76","77"].includes(this.pincodeAt12)?t="Odisha":["78"].includes(this.pincodeAt12)?t="Assam":["80","81","82","83","84","85"].includes(this.pincodeAt12)?t="Bihar, Jharkhand":["90","91","92","93","94","95","96","97","98","99"].includes(this.pincodeAt12)?t="Army Postal Service":["396"].includes(this.pincodeAt123)?t="Dadra and Nagar Haveli":["403"].includes(this.pincodeAt123)?t="Goa":["605"].includes(this.pincodeAt123)?t="Puducherry":["682"].includes(this.pincodeAt123)?t="Lakshadweep":["737"].includes(this.pincodeAt123)?t="Sikkim":["744"].includes(this.pincodeAt123)?t="Andaman and Nicobar Islands":["790","791","792"].includes(this.pincodeAt123)?t="Arunachal Pradesh":["793","794"].includes(this.pincodeAt123)?t="Meghalaya":["795"].includes(this.pincodeAt123)?t="Manipur":["796"].includes(this.pincodeAt123)?t="Mizoram":["797","798"].includes(this.pincodeAt123)?t="Nagaland":["799"].includes(this.pincodeAt123)?t="Tripura":["396210"].includes(this.pincode)&&(t="Daman and Diu"),t}}},c=e(66),component=Object(c.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{staticClass:"col-md-4 blog-sidebar"},[e("div",{staticClass:"p-4 mb-3 bg-light rounded"},[e("h4",{staticClass:"font-italic"},[t._v("About Pincode "+t._s(t.pincode))]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\r\n      PIN code "+t._s(t.pincode)+" consisits of 6 digit code which is used to find out post\r\n      offices in district in India. The first digit of a PIN indicates the zone\r\n      (Northern/ Western/ Southern/ Eestern). For the pincode "+t._s(t.pincode)+', first\r\n      digit is "'+t._s(t.pincodeAt1)+'" so zone is '+t._s(t.region)+'. The second digit indicates the\r\n      sub-zone. Here combination of first two digit is "'+t._s(t.pincodeAt12)+'" So this denotes to\r\n      the state '+t._s(t.state)+", and the third, combined with the first two,\r\n      indicates the sorting district within that zone. The final three digits\r\n      are assigned to individual post offices within the sorting district.\r\n    ")])]),t._v(" "),e("div",{staticClass:"p-4 mb-3 bg-light rounded"},[e("div",{staticClass:"gmap_canvas"},[e("iframe",{attrs:{width:"300",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?&q="+t.pincode+"&t=&z=11&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])])}),[],!1,null,null,null);n.default=component.exports}}]);