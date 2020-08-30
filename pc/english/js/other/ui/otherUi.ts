/* 网页的[其他界面] */
class OtherUi{

    /* 元素 */
    //上方菜单栏 面板
    private topMenuPanelElement:HTMLElement;
    //打开菜单栏 按钮
    private openTopMenuButtonElement:HTMLElement;
    //关闭菜单栏 按钮
    private closeTopMenuButtonElement:HTMLElement;



    /* 构造函数 */
    constructor(){

        /* 初始化 */
        //初始化[组件]
        this.topMenuPanelElement = document.querySelector("#topMenu .menu");
        this.openTopMenuButtonElement = document.querySelector("#topMenu .openButton");
        this.closeTopMenuButtonElement = document.querySelector("#topMenu .menu .buttons .close");

        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onClickOpenTopMenuButton = this.OnClickOpenTopMenuButton.bind(this);
        let onClickCloseTopMenuButton = this.OnClickCloseTopMenuButton.bind(this);

        /* 注册事件 */
        this.openTopMenuButtonElement.onclick = onClickOpenTopMenuButton;
        this.closeTopMenuButtonElement.onclick = onClickCloseTopMenuButton;

    }



    /* 事件 */
    //当鼠标点击[打开菜单栏 按钮]时
    private OnClickOpenTopMenuButton():void{

        //打开菜单栏
        this.topMenuPanelElement.style.top = "0px";

    }
    //当鼠标点击[关闭菜单栏 按钮]时
    private OnClickCloseTopMenuButton():void{

        //打开菜单栏
        this.topMenuPanelElement.style.top = "-115px";

    }

}