/* 其他功能 */
/* （网页中的其他逻辑） */
class OtherApp {
    /* 静态属性 */
    static get SupportIosTool() {
        return this.supportIosTool;
    }
    /* 静态方法 */
    //[入口方法]：初始化
    static Start() {
        //初始化
        this.otherUi = new OtherUi();
        this.supportIosTool = new SupportIosTool();
        this.supportMobileTool = new SupportMobileTool();
        //判断是否是Ios系统，如果是的话，就做下适配
        this.supportIosTool.SupportIos();
        //判断是否是移动端，如果是的话，就做下适配（如果用户用手指触碰了屏幕，那么就是移动端）
        let _bodyElement = document.querySelector("body"); //获取<body>标签
        let _onTouchStartBody = this.supportMobileTool.SupportMobile.bind(this.supportMobileTool); //改变this的指向（指向当前这个SupportMobileTool的对象）
        _bodyElement.ontouchstart = _onTouchStartBody; //注册<body>标签的onTouch事件
    }
}
