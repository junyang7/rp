function initRuler(e)
{
    initRulerX(e);
    initRulerY(e);
}
function initRulerX(e)
{
    for(let i = 1; i < rulerXLength; i ++)
    {
        if(i === 1)
        {
            $("#rulerT").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; left: 0; top: 0; height: 50%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; right: 0; top: 0; height: 20%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 8px; top: 20%; font-size: 8px; color: #808695"></div>
        </div>
        `
            );
            $("#rulerB").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; left: 0; bottom: 0; height: 50%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; right: 0; bottom: 0; height: 20%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 8px; bottom: 20%; font-size: 8px; color: #808695"></div>
        </div>
        `
            );
        }
        else if(i % 10 === 0)
        {
            $("#rulerT").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; right: 0; top: 0; height: 50%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 8px; top: 20%; font-size: 8px; color: #808695;">${ i === 0 ? "" : (5 * ( i < rulerXIndent ? (rulerXIndent - i) : (i - rulerXIndent))) }</div>
        </div>
        `
            );
            $("#rulerB").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; right: 0; bottom: 0; height: 50%; width: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 8px; bottom: 20%; font-size: 8px; color: #808695;">${ i === 0 ? "" : (5 * ( i < rulerXIndent ? (rulerXIndent - i) : (i - rulerXIndent))) }</div>
        </div>
        `
            );
        }
        else
        {
            $("#rulerT").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; right: 0; top: 0; height: 20%; width: 1px; background-color: #dcdee2;"></div>
        </div>
        `
            );
            $("#rulerB").append(
                `
        <div style="height: 50px; width: 5px; position: relative; display: inline-block;">
          <div style="position: absolute; right: 0; bottom: 0; height: 20%; width: 1px; background-color: #dcdee2;"></div>
        </div>
        `
            );
        }
    }
}
function initRulerY(e)
{
    for(let i = 1; i < rulerYLength; i ++)
    {
        if(i === 1)
        {
            $("#rulerL").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; left: 0; top: 0; width: 50%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 0; bottom: 0; width: 20%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 20%; top: 8px; font-size: 8px; color: #808695"></div>
        </div>
        `
            );
            $("#rulerR").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; right: 0; top: 0; width: 50%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; right: 0; bottom: 0; width: 20%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; right: 20%; top: 8px; font-size: 8px; color: #808695"></div>
        </div>
        `
            );
        }
        else if(i % 10 === 0)
        {
            $("#rulerL").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; box-sizing: border-box; left: 0; bottom: 0; width: 50%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; left: 20%; top: 8px; font-size: 8px; color: #808695; writing-mode: vertical-lr;">${ i === 0 ? "" : (5 * ( i < rulerYIndent ? (rulerYIndent - i) : (i - rulerYIndent))) }</div>
        </div>
        `
            );
            $("#rulerR").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; box-sizing: border-box; right: 0; bottom: 0; width: 50%; height: 1px; background-color: #dcdee2;"></div>
          <div style="position: absolute; right: 20%; top: 8px; font-size: 8px; color: #808695; writing-mode: vertical-rl;">${ i === 0 ? "" : (5 * ( i < rulerYIndent ? (rulerYIndent - i) : (i - rulerYIndent))) }</div>
        </div>
        `
            );
        }
        else
        {
            $("#rulerL").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; box-sizing: border-box; left: 0; bottom: 0; width: 20%; height: 1px; background-color: #dcdee2;"></div>
        </div>
        `
            );
            $("#rulerR").append(
                `
        <div style="height: 5px; width: 50px; position: relative;">
          <div style="position: absolute; box-sizing: border-box; right: 0; bottom: 0; width: 20%; height: 1px; background-color: #dcdee2;"></div>
        </div>
        `
            );
        }
    }
}
function initComponentList()
{
    if(!COMPONENT_LIST)
    {
        return;
    }
    $("#component").append(
        `
<div style="height: 10px; width: 100%;"></div>
`
    );
    for(let name in COMPONENT_LIST)
    {
        $("#component").append(
            `
<div class="component" draggable="true" name="${name}" style="height: 80px; width: 80px; position: relative; box-sizing: border-box; padding: 10px; margin-right: 10px; margin-bottom: 10px; border-radius: 2px;">
    <div style="height: 100%; width: 100%;">
        <div style="height: 40px; width: 60px; font-size: 30px; font-weight: lighter; display: flex; align-items: center; justify-content: center; color: #808695;">
            <i class="${COMPONENT_LIST[name].icon}"></i>
        </div>
        <div style="height: 20px; width: 60px; display: flex; align-items: center; justify-content: center; color: #808695; font-size: 8px;">${COMPONENT_LIST[name].describe}</div>
    </div>
</div>
`
        );
    }
}
function onDocumentDragstart(e)
{
    iframeMask.removeAttribute("hidden");
    eOffsetX = e.offsetX;
    eOffsetY = e.offsetY;
    e.target.style.opacity = "0.5";
    e.dataTransfer.setData("text", e.target.getAttribute("name"));
}
function onDocumentDragover(e)
{
    e.preventDefault();
}
function onDocumentDragend(e)
{
    e.target.style.opacity = "1";
    iframeMask.setAttribute("hidden", "hidden");
}
function onDocumentDrop(e)
{
    if(e.target.id === "iframeMask")
    {
        component = JSON.parse(JSON.stringify(COMPONENT_LIST[e.dataTransfer.getData("text")]));
        component.setting["id"].value = (new Date()).getTime() + Math.random().toString().substr(2);
        component.setting["left"].value = `${e.offsetX - eOffsetX}px`;
        component.setting["top"].value = `${e.offsetY - eOffsetY}px`;
        iframe.contentWindow.addComponent(component);
    }
}
function childComponentClick(id, name)
{
    $("#setting").empty();
    component = JSON.parse(JSON.stringify(COMPONENT_LIST[name]));
    for(let name in component.setting)
    {
        if(component.setting[name].category === "attribute")
        {
            if(name === "value")
            {
                component.setting[name].value = $(window.frames["iframe"].document).find(`#${id}`).val();
            }
            else
            {
                component.setting[name].value = $(window.frames["iframe"].document).find(`#${id}`).attr(name);
            }
        }
        else if(component.setting[name].category === "style")
        {
            component.setting[name].value = $(window.frames["iframe"].document).find(`#${id}`).css(name);
        }
        else
        {

        }
        $("#setting").append(
            `
<div style="height: 30px; width: 100%; display: flex; align-items: center; margin-top: 10px;">
    <div style="height: 100%; width: 100px; display: flex; align-items: center; color: #808695;">${ component.setting[name].label }</div>
    <input class="setting" id="${ name }" style="box-sizing: border-box; height: 100%; width: 100%; border: 1px solid #dcdee2;" value="${ component.setting[name].value }"/>
</div>
`
        );
    }
}
function settingUpdate(e)
{
    for(let name in component.setting)
    {
        component.setting[name].value = $(`#${name}.setting`).val();
    }
    document.getElementById("iframe").contentWindow.updateComponent(component);
}


const COMPONENT_LIST = {
    textarea: {
        icon: "ri-emotion-happy-line",
        describe: "???????????????",
        code: `<textarea class="component" style="position: absolute; box-sizing: border-box; resize: none; outline: none;"></textarea>`,
        setting: {
            "id": {
                category: "attribute",
                label: "??????",
                value: "",
            },
            "name": {
                category: "attribute",
                label: "??????",
                value: "textarea",
            },
            "value": {
                category: "attribute",
                label: "?????????",
                value: "?????????????????????",
            },
            "left": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "top": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "width": {
                category: "style",
                label: "???",
                value: "320px",
            },
            "height": {
                category: "style",
                label: "???",
                value: "180px",
            },
            "line-height": {
                category: "style",
                label: "??????",
                value: "16px",
            },
            "border": {
                category: "style",
                label: "??????",
                value: "1px solid #dcdee2",
            },
            "color": {
                category: "style",
                label: "????????????",
                value: "#515a6e",
            },
            "font-size": {
                category: "style",
                label: "????????????",
                value: "12px",
            },
            "background-color": {
                category: "style",
                label: "????????????",
                value: "transparent",
            },
        },
    },
    button: {
        icon: "ri-emotion-happy-line",
        describe: "??????",
        code: `<button class="component" style="position: absolute; box-sizing: border-box;">??????</button>`,
        setting: {
            "id": {
                category: "attribute",
                label: "??????",
                value: "",
            },
            "name": {
                category: "attribute",
                label: "??????",
                value: "button",
            },
            // "value": {
            //     category: "attribute",
            //     label: "?????????",
            //     value: "?????????????????????",
            // },
            "left": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "top": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "width": {
                category: "style",
                label: "???",
                value: "100px",
            },
            "height": {
                category: "style",
                label: "???",
                value: "30px",
            },
            "border": {
                category: "style",
                label: "??????",
                value: "1px solid #2d8cf0",
            },
            "color": {
                category: "style",
                label: "????????????",
                value: "#ffffff",
            },
            "font-size": {
                category: "style",
                label: "????????????",
                value: "12px",
            },
            "background-color": {
                category: "style",
                label: "????????????",
                value: "#2d8cf0",
            },
            "cursor": {
                category: "style",
                label: "????????????",
                value: "pointer",
            },
        },
    },
    input: {
        icon: "ri-emotion-happy-line",
        describe: "????????????",
        code: `<input class="component" style="position: absolute; box-sizing: border-box;"/>`,
        setting: {
            "id": {
                category: "attribute",
                label: "??????",
                value: "",
            },
            "name": {
                category: "attribute",
                label: "??????",
                value: "input",
            },
            "value": {
                category: "attribute",
                label: "?????????",
                value: "??????",
            },
            "type": {
                category: "attribute",
                label: "??????",
                value: "text",
            },
            "left": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "top": {
                category: "style",
                label: "?????????",
                value: "0px",
            },
            "width": {
                category: "style",
                label: "???",
                value: "100px",
            },
            "height": {
                category: "style",
                label: "???",
                value: "30px",
            },
            "padding": {
                category: "style",
                label: "?????????",
                value: "0 4px",
            },
            "border": {
                category: "style",
                label: "??????",
                value: "1px solid #dcdee2",
            },
            "color": {
                category: "style",
                label: "????????????",
                value: "#515a6e",
            },
            "font-size": {
                category: "style",
                label: "????????????",
                value: "12px",
            },
            "background-color": {
                category: "style",
                label: "????????????",
                value: "transparent",
            },
        },
    },
};


let  rulerXLength = 4000 / 5 // ??????????????????
    ,rulerYLength = 3000 / 5 // ??????????????????
    ,rulerXIndent = 1000 / 5 // ??????????????????
    ,rulerYIndent = 1000 / 5 // ??????????????????
    ,eOffsetX = 0
    ,eOffsetY = 0
    ,component = {}
    ,iframe = document.getElementById("iframe")
    ,iframeMask = document.getElementById("iframeMask")
;


$(document).ready(function(e){
    initRuler(e);
    initComponentList(e);
    document.ondragstart = onDocumentDragstart;
    document.ondragover = onDocumentDragover;
    document.ondragend = onDocumentDragend;
    document.ondrop = onDocumentDrop;
    $("#setting").on("input propertychange", ".setting", settingUpdate);
});













