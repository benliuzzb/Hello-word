var provinceCtrl = document.querySelector('#province');
var arrProvince = [{ id: "0", name: "请选择" },
    { id: "1", name: "河北" },
    { id: "2", name: "河南" }];

var cityCtrl = document.querySelector('#city');
var arrCity = [{ id: "1-1", name: "保定", fid: "1" },
    { id: "1-2", name: "石家庄", fid: "1" },
    { id: "2-1", name: "郑州", fid: "2" },
    { id: "2-2", name: "开封", fid: "2" }];

var arrCounty = [{id:"1-1-1",name:"定兴县",fid:"1-1"},
{id:"1-1-2",name:"定州县",fid:"1-1"},
{id:"1-2-1",name:"长安区",fid:"1-2"},
{id:"1-2-2",name:"裕华区",fid:"1-2"},
{id:"2-1-1",name:"中原区",fid:"2-1"},
{id:"2-1-2",name:"金水区",fid:"2-1"},
{id:"2-2-1",name:"开封县",fid:"2-2"},
{id:"2-2-2",name:"兰考县",fid:"2-2"}];

initCtrlProvince();

function initCtrlProvince() {
    var strHtml = '';
    arrProvince.forEach(function (item) {
        strHtml += '<option value=' + item.id + '>'
            + item.name
            + '</option>';
    })
    provinceCtrl.innerHTML = strHtml;
}

function selZYChange() {
    //控制台
    console.log(provinceCtrl.value);
    var result = arrCity.filter(function (item) {
        if (item.fid == provinceCtrl.value) {
            return item;
        }
    })
    initCtrlCity(result);
    ////////////////////////////////////////
    console.log(cityCtrl.value);
    var result = arrCounty.filter(function (item) {
        if (item.fid == cityCtrl.value) {
            return item;
        }
    })
    initCtrlCounty(result);
}


var cityCtrl = document.querySelector('#city');

function initCtrlCity(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({ id: "0", name: "请选择" });
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">'
            + item.name
            + '</option>';
    })
    cityCtrl.innerHTML = strHtml;
}

////////////////////////////////////////////////////////
function selChange() {
    console.log(cityCtrl.value);
    var result = arrCounty.filter(function (item) {
        if (item.fid == cityCtrl.value) {
            return item;
        }
    })
    initCtrlCounty(result);
}




var countyCtrl = document.querySelector('#county');
function initCtrlCounty(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({ id: "0", name: "请选择" });
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">'
            + item.name
            + '</option>';
    })
    countyCtrl.innerHTML = strHtml;
}
////////////////////////////////////////////////////////
