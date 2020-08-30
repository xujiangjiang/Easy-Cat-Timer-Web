/* 计时器的[标题栏 界面] */
class TitleBarUi {
    /* 构造函数 */
    constructor() {
        /* 初始化 */
        //初始化[组件]
        this.uiElement = document.querySelector("#titleBarUi");
        this.settingToggleElement = document.querySelector("#titleBarUi .settingToggle");
        this.closeButtonElement = document.querySelector("#titleBarUi .closeButton");
        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onMouseDownButton = this.OnMouseDownButton.bind(this);
        let onClickSettingToggle = this.OnClickSettingToggle.bind(this);
        let onClickCloseButton = this.OnClickCloseButton.bind(this);
        let onContextMenuUi = this.OnContextMenuUi.bind(this);
        /* 注册事件 */
        this.settingToggleElement.onclick = onClickSettingToggle;
        this.closeButtonElement.onclick = onClickCloseButton;
        this.settingToggleElement.onmousedown = onMouseDownButton;
        this.closeButtonElement.onmousedown = onMouseDownButton;
        this.uiElement.oncontextmenu = onContextMenuUi;
    }
    /* 属性 */
    //元素：设置按钮
    get SettingToggleElement() {
        return this.settingToggleElement;
    }
    /* 事件 */
    //当点击[设置]按钮时
    OnClickSettingToggle() {
        //如果[设置界面]是关闭的
        if (TimerApp.Uis.SettingUi.IsShowUi == false) {
            //就打开设置界面
            TimerApp.Uis.SettingUi.OpenOrCloseUi(true);
        }
        //如果[设置界面]是打开的
        else {
            //就关闭设置界面
            TimerApp.Uis.SettingUi.OpenOrCloseUi(false);
        }
    }
    //当点击[关闭]按钮时
    OnClickCloseButton() {
        //警告框的文字
        let _tipString = "";
        if (TimerApp.Datas.language == LanguageType.Chinese) {
            _tipString = "是否要退出？";
        }
        else {
            _tipString = "Do you want to quit?";
        }
        //弹出一个“警告框”
        let _isClose = window.confirm(_tipString);
        //如果确定要关闭窗口
        if (_isClose == true) {
            //关闭窗口
            window.location.href = "about:blank";
        }
    }
    //当按下按钮时（按下所有的按钮时）
    OnMouseDownButton() {
        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);
    }
    //当显示[设置界面]的右键菜单时
    OnContextMenuUi() {
        //不显示右键菜单
        window.event.returnValue = false;
        return false;
    }
}
