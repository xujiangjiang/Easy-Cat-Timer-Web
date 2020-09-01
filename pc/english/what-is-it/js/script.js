/* 当点击观看视频按钮时 */
function OnClickShowVideoButton() {
    //获取 视频面板
    let _vedioPanelElement = document.querySelector("#video");
    //获取 视频
    let _vedioElement = document.querySelector("#video .video");
    //打开视频面板
    _vedioPanelElement.style.visibility = "visible";
    //播放视频
    _vedioElement.play();
}
/* 当点击关闭视频按钮时 */
function OnClickCloseVideoButton() {
    //获取 视频面板
    let _vedioPanelElement = document.querySelector("#video");
    //获取 视频
    let _vedioElement = document.querySelector("#video .video");
    //停止视频
    _vedioElement.pause();
    _vedioElement.currentTime = 0;
    //打开视频面板
    _vedioPanelElement.style.visibility = "hidden";
}
