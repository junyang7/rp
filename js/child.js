function initZoomHelper()
{
    zoomHelper = $("#zoomHelper");
    zoomHelperPointTL = $("#zoomHelperPointTL");
    zoomHelperPointTR = $("#zoomHelperPointTR");
    zoomHelperPointBL = $("#zoomHelperPointBL");
    zoomHelperPointBR = $("#zoomHelperPointBR");
    zoomHelperLineT = $("#zoomHelperLineT");
    zoomHelperLineB = $("#zoomHelperLineB");
    zoomHelperLineL = $("#zoomHelperLineL");
    zoomHelperLineR = $("#zoomHelperLineR");
}
function updateZoomHelperPoint(dragTarget)
{
    // 拖动点↖
    zoomHelperPointTL.css(
        {
            "left"      : `${ dragTarget.offset().left - 2 }px`,
            "top"       : `${ dragTarget.offset().top - 2 }px`,
        }
    );
    // 拖动点↗
    zoomHelperPointTR.css(
        {
            "left"      : `${ dragTarget.offset().left + dragTarget.outerWidth() - 1 - 2 }px`,
            "top"       : `${ dragTarget.offset().top - 2 }px`,
        }
    );
    // 拖动点↙
    zoomHelperPointBL.css(
        {
            "left"      : `${ dragTarget.offset().left - 2 }px`,
            "top"       : `${ dragTarget.offset().top + dragTarget.outerHeight() - 1 - 2 }px`,
        }
    );
    // 拖动点↘
    zoomHelperPointBR.css(
        {
            "left"      : `${ dragTarget.offset().left + dragTarget.outerWidth() - 1 - 2 }px`,
            "top"       : `${ dragTarget.offset().top + dragTarget.outerHeight() - 1 - 2 }px`,
        }
    );
    // 拖动线↑
    zoomHelperLineT.css(
        {
            "left"      : `${ dragTarget.offset().left }px`,
            "top"       : `${ dragTarget.offset().top }px`,
            "width"     : `${ dragTarget.outerWidth() }px`,
            "height"    : `1px`,
        }
    );
    // 拖动线←
    zoomHelperLineL.css(
        {
            "left"      : `${ dragTarget.offset().left }px`,
            "top"       : `${ dragTarget.offset().top }px`,
            "width"     : `1px`,
            "height"    : `${ dragTarget.outerHeight() }px`,
        }
    );
    // 拖动线↓
    zoomHelperLineB.css(
        {
            "left"      : `${ dragTarget.offset().left }px`,
            "top"       : `${ dragTarget.offset().top + dragTarget.outerHeight() - 1 }px`,
            "width"     : `${ dragTarget.outerWidth() }px`,
            "height"    : `1px`,
        }
    );
    // 拖动线→
    zoomHelperLineR.css(
        {
            "left"      : `${ dragTarget.offset().left + dragTarget.outerWidth() - 1 }px`,
            "top"       : `${ dragTarget.offset().top }px`,
            "width"     : `1px`,
            "height"    : `${ dragTarget.outerHeight() }px`,
        }
    );
}
function onComponentMousedown(e)
{
    isMouseDown = true;
    canDrag = true;
    dragTarget = $(this);
    EX = e.pageX;
    EY = e.pageY;
    DX = EX - dragTarget.position().left;
    DY = EY - dragTarget.position().top;
    updateZoomHelperPoint(dragTarget);
    zoomHelper.show();
    e.stopPropagation();
}
function onZoomHelperPointMousedown(e)
{
    isMouseDown = true;
    canZoom = true;
    zoomHelperPoint = $(this);
    dragTargetWidth = dragTarget.width();
    dragTargetHeight = dragTarget.height();
    EX = e.pageX;
    EY = e.pageY;
    DX = EX - dragTarget.position().left;
    DY = EY - dragTarget.position().top;
    zoomHelper.show();
    e.stopPropagation();
}
function onDocumentMouseup(e)
{
    isMouseDown = false;
    canZoom = false;
    canDrag = false;
}
function onDocumentMousedown(e)
{
    zoomHelper.hide();
    e.stopPropagation();
}
function onDocumentMousemove(e)
{
    if(isMouseDown)
    {
        if(canDrag)
        {
            drag(e);
        }
        if(canZoom)
        {
            zoom(e);
        }
    }
}
function drag(e)
{
    dragTarget.css(
        {
            "left"  : `${e.pageX - DX}px`,
            "top"   : `${e.pageY - DY}px`,
        }
    );
    updateZoomHelperPoint(dragTarget);
}
function zoom(e)
{
    if(zoomHelperPoint.attr("id") === "zoomHelperPointTL")
    {
        if(dragTargetWidth - (e.pageX - EX) >= 0 && dragTargetHeight - (e.pageY -EY) >= 0)
        {
            dragTarget.css(
                {
                    "left"      : `${ (e.pageX - DX) }px`,
                    "width"     : `${ dragTargetWidth - (e.pageX - EX) }px`,
                    "height"    : `${ dragTargetHeight - (e.pageY - EY) }px`,
                    "top"       : `${ (e.pageY - DY) }px`,
                }
            );
            updateZoomHelperPoint(dragTarget);
        }
    }
    if(zoomHelperPoint.attr("id") === "zoomHelperPointTR")
    {
        if(dragTargetWidth + e.pageX -EX >= 0 && dragTargetHeight - (e.pageY -EY) >= 0)
        {
            dragTarget.css(
                {
                    "width"     : `${ dragTargetWidth + e.pageX - EX }px`,
                    "height"    : `${ dragTargetHeight - (e.pageY - EY) }px`,
                    "top"       : `${ (e.pageY - DY) }px`,
                }
            );
            updateZoomHelperPoint(dragTarget);
        }
    }
    if(zoomHelperPoint.attr("id") === "zoomHelperPointBL")
    {
        if(dragTargetWidth - (e.pageX - EX) >= 0 && dragTargetHeight + e.pageY - EY >= 0)
        {
            dragTarget.css(
                {
                    "left"      : `${ (e.pageX - DX) }px`,
                    "width"     : `${ dragTargetWidth - (e.pageX - EX) }px`,
                    "height"    : `${ dragTargetHeight + e.pageY - EY }px`,
                }
            );
            updateZoomHelperPoint(dragTarget);
        }
    }
    if(zoomHelperPoint.attr("id") === "zoomHelperPointBR")
    {
        if(dragTargetWidth + e.pageX -EX >= 0 && dragTargetHeight + e.pageY - EY >= 0)
        {
            dragTarget.css(
                {
                    "width"     : `${ dragTargetWidth + e.pageX - EX }px`,
                    "height"    : `${ dragTargetHeight + e.pageY - EY }px`,
                }
            );
            updateZoomHelperPoint(dragTarget);
        }

    }
}
function addComponent(component)
{
    let $component = $(component.code);
    for(let name in component.setting)
    {
        if(component.setting[name].category === "attribute")
        {
            if(name === "value")
            {
                $($component).val(component.setting[name].value);
            }
            else
            {
                $($component).attr(name, component.setting[name].value);
            }
        }
        else if(component.setting[name].category === "style")
        {
            $($component).css(name, component.setting[name].value);
        }
        else
        {

        }
    }
    $("#container").append($component);
}
function updateComponent(component)
{
    let $component = $(`#${component.setting.id.value}`)
    for(let name in component.setting)
    {
        if(component.setting[name].category === "attribute")
        {
            if(name === "value")
            {
                $($component).val(component.setting[name].value);
            }
            else
            {
                $($component).attr(name, component.setting[name].value);
            }
        }
        else if(component.setting[name].category === "style")
        {
            $($component).css(name, component.setting[name].value);
        }
        else
        {

        }
    }
    updateZoomHelperPoint(dragTarget);
}
function onComponentUpdated(e)
{
    window.parent.childComponentClick($(this).attr("id"), $(this).attr("name"));
}


let  zoomHelper // 缩放辅助根节点
    ,zoomHelperPoint // 缩放辅助点
    ,zoomHelperPointTL // 缩放辅助点-上左
    ,zoomHelperPointTR // 缩放辅助点-上右
    ,zoomHelperPointBL // 缩放辅助点-下左
    ,zoomHelperPointBR // 缩放辅助点-下右
    ,isMouseDown // 鼠标是否按下
    ,canZoom // 是否可缩放
    ,canDrag // 是否可拖动
    ,dragTarget // 拖动对象
    ,EX // 鼠标按下位置x轴坐标
    ,EY // 鼠标按下位置y轴坐标
    ,DX // 鼠标按下位置与拖动对象x轴坐标差值（鼠标-拖动）
    ,DY // 鼠标按下位置与拖动对象y轴坐标差值（鼠标-拖动）
    ,dragTargetWidth // 拖动对象宽度
    ,dragTargetHeight // 拖动对象高度
    ,zoomHelperLineT
    ,zoomHelperLineB
    ,zoomHelperLineL
    ,zoomHelperLineR

;


$(document).ready(function(){
    initZoomHelper();
    $(document).on("mousedown", ".component", onComponentMousedown);
    $(document).on("mousedown", ".zoomHelperPoint", onZoomHelperPointMousedown);
    $(document).mousemove(onDocumentMousemove);
    $(document).mousedown(onDocumentMousedown);
    $(document).mouseup(onDocumentMouseup);
    $(document).on("click", ".component", onComponentUpdated);
    $(document).on("input propertychange", ".component", onComponentUpdated);
});
