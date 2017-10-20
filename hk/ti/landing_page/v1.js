/* CUSTOM CODE */
(function() {
  var lang = ciabConstants.fullLocale;
  var translation = {
    'en-HK': {
      annualPlan: 'I want an Annual Plan',
      chinaPlan: 'I want to travel around China',
      singleDestination: 'Single trip destination',
      dropdownLabel: 'Start now and choose your destination',
      btnText: 'Find a travel insurance'
    },
    'zh-HK': {
      annualPlan: '我想選購全年旅遊計劃',
      chinaPlan: '我想到中國旅遊',
      singleDestination: '單次旅遊目的地',
      dropdownLabel: '選擇目的地開始比較',
      btnText: '立即比較並購買'
    }
  };
  var content = translation[lang];
  var categoryList = [{
    id: 'annualPlan',
    text: content.annualPlan,
    category: 'annual'
  }, {
    id: 'chinaPlan',
    text: content.chinaPlan,
    category: 'china'
  }];
  var countries = {
    "en-HK": [
      "Japan",
      "Taiwan",
      "Thailand",
      "Republic of Korea",
      "China",
      "United Kingdom",
      "Australia",
      "Canada",
      "United States",
      "Singapore",
      "Afghanistan",
      "Åland",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "British Indian Ocean Territory",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "Christmas Island",
      "Cocos [Keeling] Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Federated States of Micronesia",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Hashemite Kingdom of Jordan",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Ivory Coast",
      "Jamaica",
      "Jersey",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar [Burma]",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "North Korea",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn Islands",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of Lithuania",
      "Republic of Moldova",
      "Republic of the Congo",
      "Réunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Helena",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Saint-Barthélemy",
      "Samoa",
      "San Marino",
      "São Tomé and Príncipe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Sint Maarten",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Tajikistan",
      "Tanzania",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "U.S. Minor Outlying Islands",
      "U.S. Virgin Islands",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Wallis and Futuna",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ],
    "zh-HK": [
      "Japan / 日本",
      "Taiwan / 台灣",
      "Thailand / 泰國",
      "Republic of Korea / 韓國",
      "China / 中國",
      "United Kingdom / 英國",
      "Australia / 澳大利亞",
      "Canada / 加拿大",
      "United States / 美國",
      "Singapore / 新加坡",
      "Afghanistan / 阿富汗",
      "Åland / 奧蘭群島",
      "Albania / 阿爾巴尼亞",
      "Algeria / 阿爾及利亞",
      "American Samoa / 美屬薩摩亞",
      "Andorra / 安道爾",
      "Angola / 安哥拉",
      "Anguilla / 安圭拉",
      "Antarctica / 南極洲",
      "Antigua and Barbuda / 安地卡及巴布達",
      "Argentina / 阿根廷",
      "Armenia / 亞美尼亞",
      "Aruba / 阿魯巴",
      "Austria / 奧地利",
      "Azerbaijan / 亞塞拜然",
      "Bahamas / 巴哈馬",
      "Bahrain / 巴林",
      "Bangladesh / 孟加拉",
      "Barbados / 巴貝多",
      "Belarus / 白俄羅斯",
      "Belgium / 比利時",
      "Belize / 貝里斯",
      "Benin / 貝南",
      "Bermuda / 百慕大",
      "Bhutan / 不丹",
      "Bolivia / 玻利維亞",
      "Bosnia and Herzegovina / 波士尼亞和黑山共和國",
      "Botswana / 波札那",
      "Brazil / 巴西",
      "British Indian Ocean Territory / 英屬印度洋領地",
      "British Virgin Islands / 英屬維爾京群島",
      "Brunei / 汶萊",
      "Bulgaria / 保加利亞",
      "Burkina Faso / 布吉納法索",
      "Burundi / 布隆迪",
      "Cambodia / 柬埔寨",
      "Cameroon / 喀麥隆",
      "Cape Verde / 維德角",
      "Cayman Islands / 開曼群島",
      "Central African Republic / 中非共和國",
      "Chad / 查德",
      "Chile / 智利",
      "Christmas Island / 聖誕島",
      "Cocos [Keeling] Islands / 科科斯群島",
      "Colombia / 哥倫比亞",
      "Comoros / 科摩羅",
      "Congo / 薩伊",
      "Cook Islands / 科克群島",
      "Costa Rica / 哥斯大黎加",
      "Croatia / 克羅埃西亞",
      "Cuba / 古巴",
      "Curaçao / 庫拉索",
      "Cyprus / 賽普勒斯",
      "Czech Republic / 捷克共和國",
      "Denmark / 丹麥",
      "Djibouti / 吉布地",
      "Dominica / 多明尼加",
      "Dominican Republic / 多明尼加共和國",
      "East Timor / 東帝汶",
      "Ecuador / 厄瓜多爾",
      "Egypt / 埃及",
      "El Salvador / 薩爾瓦多",
      "Equatorial Guinea / 赤道幾內亞",
      "Eritrea / 厄立特里亞",
      "Estonia / 愛沙尼亞",
      "Ethiopia / 衣索比亞",
      "Falkland Islands / 福克蘭群島",
      "Faroe Islands / 法羅群島",
      "Federated States of Micronesia / 密克羅尼西亞",
      "Fiji / 斐濟",
      "Finland / 芬蘭",
      "France / 法國",
      "French Guiana / 法屬圭亞那",
      "French Polynesia / 法屬波利尼西亞",
      "French Southern Territories / 法屬南部領土",
      "Gabon / 加蓬",
      "Gambia / 甘比亞",
      "Georgia / 格魯吉亞",
      "Germany / 德國",
      "Ghana / 迦納",
      "Gibraltar / 直布羅陀",
      "Greece / 希臘",
      "Greenland / 格陵蘭",
      "Grenada / 格瑞那達",
      "Guadeloupe / 瓜德羅普島",
      "Guam / 關島",
      "Guatemala / 瓜地馬拉",
      "Guernsey / 格恩西島",
      "Guinea / 幾內亞",
      "Guinea-Bissau / 幾內亞比索",
      "Guyana / 圭亞那",
      "Haiti / 海地",
      "Hashemite Kingdom of Jordan / 約旦",
      "Honduras / 洪都拉斯",
      "Hungary / 匈牙利",
      "Iceland / 冰島",
      "India / 印度",
      "Indonesia / 印尼",
      "Iran / 伊朗伊斯蘭共和國",
      "Iraq / 伊拉克",
      "Ireland / 愛爾蘭",
      "Isle of Man / 曼島",
      "Israel / 以色列",
      "Italy / 義大利",
      "Ivory Coast / 象牙海岸",
      "Jamaica / 牙買加",
      "Jersey / 澤西島",
      "Kazakhstan / 哈薩克",
      "Kenya / 肯亞",
      "Kiribati / 吉里巴斯",
      "Kosovo / 科索沃",
      "Kuwait / 科威特",
      "Kyrgyzstan / 吉爾吉克斯坦",
      "Laos / 老撾人民民主共和國",
      "Latvia / 拉脫維亞",
      "Lebanon / 黎巴嫩",
      "Lesotho / 賴索托",
      "Liberia / 賴比瑞亞",
      "Libya / 阿拉伯利比亞民眾國",
      "Liechtenstein / 列支敦士登",
      "Luxembourg / 盧森堡",
      "Macau / 澳門",
      "Macedonia / 前南斯拉夫馬其頓共和國",
      "Madagascar / 馬達加斯加",
      "Malawi / 馬拉威",
      "Malaysia / 馬來西亞",
      "Maldives / 馬爾地夫",
      "Mali / 馬里",
      "Malta / 馬爾他",
      "Marshall Islands / 馬紹爾群島",
      "Martinique / 法屬馬丁尼克群島",
      "Mauritania / 茅利塔尼亞",
      "Mauritius / 模里西斯",
      "Mayotte / 馬約特",
      "Mexico / 墨西哥",
      "Monaco / 摩納哥",
      "Mongolia / 蒙古",
      "Montenegro / 黑山共和國",
      "Montserrat / 蒙塞拉特群島",
      "Morocco / 摩洛哥",
      "Mozambique / 莫三比克",
      "Myanmar [Burma] / 緬甸",
      "Namibia / 納米比亞",
      "Nauru / 諾魯",
      "Nepal / 尼泊爾",
      "Netherlands / 荷蘭",
      "New Caledonia / 新赫里多尼亞",
      "New Zealand / 紐西蘭",
      "Nicaragua / 尼加拉瓜",
      "Niger / 尼日爾",
      "Nigeria / 奈及利亞",
      "Niue / 紐埃",
      "Norfolk Island / 諾福克島",
      "North Korea / 北韓",
      "Northern Mariana Islands / 北馬里安納群島",
      "Norway / 挪威",
      "Oman / 阿曼",
      "Pakistan / 巴基斯坦",
      "Palau / 帛琉",
      "Palestine / 巴勒斯坦領土",
      "Panama / 巴拿馬",
      "Papua New Guinea / 巴布亞紐幾內亞",
      "Paraguay / 巴拉圭",
      "Peru / 秘魯",
      "Philippines / 菲律賓",
      "Pitcairn Islands / 皮特凱恩群島",
      "Poland / 波蘭",
      "Portugal / 葡萄牙",
      "Puerto Rico / 波多黎各",
      "Qatar / 卡達",
      "Republic of Lithuania / 立陶宛",
      "Republic of Moldova / 莫爾達瓦共和國",
      "Republic of the Congo / 剛果",
      "Réunion / 留尼旺",
      "Romania / 羅馬尼亞",
      "Russia / 俄羅斯",
      "Rwanda / 盧旺達",
      "Saint Helena / 聖赫勒拿",
      "Saint Kitts and Nevis / 聖基茨和尼維斯",
      "Saint Lucia / 聖露西亞",
      "Saint Martin / 聖馬丁",
      "Saint Pierre and Miquelon / 聖皮爾和密克隆",
      "Saint Vincent and the Grenadines / 聖文森特和格林納丁斯群島",
      "Saint-Barthélemy / 聖巴泰勒米",
      "Samoa / 薩摩亞",
      "San Marino / 聖馬利諾",
      "São Tomé and Príncipe / 聖多美及普林西比島",
      "Saudi Arabia / 沙烏地阿拉伯",
      "Senegal / 塞內加爾",
      "Serbia / 塞爾維亞",
      "Seychelles / 塞席爾群島",
      "Sierra Leone / 獅子山",
      "Sint Maarten / 聖馬丁島",
      "Slovakia / 斯洛伐克共和國",
      "Slovenia / 斯洛維尼亞",
      "Solomon Islands / 所羅門群島",
      "Somalia / 索馬里",
      "South Africa / 南非",
      "South Georgia and the South Sandwich Islands / 南喬治亞島和南桑威齊群島",
      "South Sudan / 南蘇丹",
      "Spain / 西班牙",
      "Sri Lanka / 斯里蘭卡",
      "Sudan / 蘇丹",
      "Suriname / 蘇利南",
      "Svalbard and Jan Mayen / 斯瓦爾巴特和揚馬延",
      "Swaziland / 史瓦濟蘭",
      "Sweden / 瑞典",
      "Switzerland / 瑞士",
      "Syria / 敘利亞",
      "Tajikistan / 塔吉克斯坦",
      "Tanzania / 坦尚尼亞",
      "Togo / 多哥",
      "Tokelau / 托克勞",
      "Tonga / 東加",
      "Trinidad and Tobago / 千里達和多巴哥",
      "Tunisia / 突尼斯",
      "Turkey / 土耳其",
      "Turkmenistan / 土庫曼斯坦",
      "Turks and Caicos Islands / 特克斯和凱科斯群島",
      "Tuvalu / 吐瓦魯",
      "U.S. Minor Outlying Islands / 美國邊遠小島",
      "U.S. Virgin Islands / 美屬維爾京群島",
      "Uganda / 烏干達",
      "Ukraine / 烏克蘭",
      "United Arab Emirates / 阿拉伯聯合大公國",
      "Uruguay / 烏拉圭",
      "Uzbekistan / 烏茲別克斯坦",
      "Vanuatu / 瓦努阿圖",
      "Vatican City / 聖座（梵蒂岡）",
      "Venezuela / 委內瑞拉",
      "Vietnam / 越南",
      "Wallis and Futuna / 瓦利斯和富圖納",
      "Yemen / 葉門",
      "Zambia / 尚比亞",
      "Zimbabwe / 辛巴威"
    ]
  };
  var countryList = countries[lang].map(function(item) {
    return {
      id: item,
      text: item,
      category: 'single'
    };
  });
  var list = categoryList.concat(countryList);
  var listHtml = getListHtml(list);
// need timeout here otherwise jquery selector can not select the element
  setTimeout(function() {
    var $dropdown = vwo_$('#goToFunnelSelectBox');
    var $label = vwo_$('.funnel-button__description');
    var $btn = vwo_$('#goToFunnelBtn');

    var url = location.pathname;
    $dropdown.append(listHtml);
    $dropdown.find('option').eq(1).after('<option disabled>------ ' + content.singleDestination + '------ </option>');
    $label.text(content.dropdownLabel);
    $btn.text(content.btnText);

    $btn.click(function() {
      var id = $dropdown.val();
      var item = getItemById(list, id);

      var query = '?fromLandingPage=true&category=' + item.category;
      if (item.category === 'single') {
        query = query + '&destination=' + item.text;
      }
      location.href = url + '/get-quote#/step/2' + query;
    });
  }, 100);

  function getListHtml(list) {
    return list.map(function(item) {
      return '<option value="' + item.id + '">' + item.text + '</option>';
    }).join('');
  }

  function getItemById(list, id) {
    return list.filter(function(o) {
      return o.id === id;
    })[0] || {};
  }
})();
