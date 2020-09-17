/* 计时器的[设置 界面] */
class SettingUi {
    /* 构造函数 */
    constructor() {
        /* 初始化 */
        //初始化[变量]
        this.isShowUi = false;
        this.isShowChooseLanguagePanel = false;
        this.isDragVolumeSliderRound = false;
        //初始化[组件]
        this.uiElement = document.querySelector("#settingUi");
        this.closeButtonElement = document.querySelector("#settingUi .closeButton");
        this.currentLanguageButtonElement = document.querySelector("#settingUi .language .currentLanguage");
        this.chooseLanguagePanelElement = document.querySelector("#settingUi .language .chooseLanguage");
        this.englishButtonElement = document.querySelector("#settingUi .language .chooseLanguage .english");
        this.chineseButtonElement = document.querySelector("#settingUi .language .chooseLanguage .chinese");
        this.staffPanelElement = document.querySelector("#settingUi .staffPanel");
        this.staffButtonElement = document.querySelector("#settingUi .staffButton");
        this.githubButtonElement = document.querySelector("#settingUi .githubButton");
        this.volumeSliderPanelElement = document.querySelector("#settingUi .volumeSlider");
        this.volumeSliderRoundElement = document.querySelector("#settingUi .volumeSlider .round");
        this.volumeNumberPanelElement = document.querySelector("#settingUi .volumeNumber");
        this.volumeNumberTextElement = document.querySelector("#settingUi .volumeNumber .number");
        this.inputVolumeSliderElement = document.querySelector("#settingUi .inputVolumeSlider .input");
        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onMouseDownButton = this.OnMouseDownButton.bind(this);
        let onClickCloseButton = this.OnClickCloseButton.bind(this);
        let onClickCurrentLanguageButton = this.OnClickCurrentLanguageButton.bind(this);
        let onClickEnglishButton = this.OnClickEnglishButton.bind(this);
        let onClickChineseButton = this.OnClickChineseButton.bind(this);
        let onMouseEnterStaffButton = this.OnMouseEnterStaffButton.bind(this);
        let onMouseLeaveStaffButton = this.OnMouseLeaveStaffButton.bind(this);
        let onMouseEnterVolumeSliderPanel = this.OnMouseEnterVolumeSliderPanel.bind(this);
        let onMouseLeaveVolumeSliderPanel = this.OnMouseLeaveVolumeSliderPanel.bind(this);
        let onMouseDownVolumeSliderRound = this.OnMouseDownVolumeSliderRound.bind(this);
        let onMouseMoveVolumeSliderRound = this.OnMouseMoveVolumeSliderRound.bind(this);
        let onMouseUpVolumeSliderRound = this.OnMouseUpVolumeSliderRound.bind(this);
        let onContextMenuUi = this.OnContextMenuUi.bind(this);
        let onDragStartUi = this.OnDragStartUi.bind(this);
        /* 注册事件 */
        this.closeButtonElement.onclick = onClickCloseButton;
        this.currentLanguageButtonElement.onclick = onClickCurrentLanguageButton;
        this.englishButtonElement.onclick = onClickEnglishButton;
        this.chineseButtonElement.onclick = onClickChineseButton;
        this.staffButtonElement.onmouseenter = onMouseEnterStaffButton;
        this.staffButtonElement.onmouseleave = onMouseLeaveStaffButton;
        this.volumeSliderPanelElement.onmouseenter = onMouseEnterVolumeSliderPanel;
        this.volumeSliderPanelElement.onmouseleave = onMouseLeaveVolumeSliderPanel;
        this.volumeSliderRoundElement.onmousedown = onMouseDownVolumeSliderRound;
        this.uiElement.onmousemove = onMouseMoveVolumeSliderRound;
        this.uiElement.onmouseup = onMouseUpVolumeSliderRound;
        this.uiElement.onmouseleave = onMouseUpVolumeSliderRound;
        this.currentLanguageButtonElement.onmousedown = onMouseDownButton;
        this.englishButtonElement.onmousedown = onMouseDownButton;
        this.chineseButtonElement.onmousedown = onMouseDownButton;
        this.closeButtonElement.onmousedown = onMouseDownButton;
        this.staffButtonElement.onmousedown = onMouseDownButton;
        this.githubButtonElement.onmousedown = onMouseDownButton;
        this.uiElement.oncontextmenu = onContextMenuUi;
        this.uiElement.ondragstart = onDragStartUi;
    }
    /* 属性 */
    //变量：是否显示了[设置]界面？
    get IsShowUi() {
        return this.isShowUi;
    }
    //元素：设置界面
    get UiElement() {
        return this.uiElement;
    }
    /* 公开方法 */
    /* [打开/关闭 此界面]
       参数1：true是打开，false是关闭*/
    OpenOrCloseUi(_isOpen) {
        //如果是打开[设置界面]
        if (_isOpen == true) {
            //打开设置界面     
            this.isShowUi = true; //修改标识符
            TimerApp.Uis.TitleBarUi.SettingToggleElement.style.backgroundColor = "#e3e3e3"; //按钮的背景颜色
            this.UiElement.style.display = "block"; //显示
            this.uiElement.parentElement.style.overflow = "visible"; //超出边框的内容 不隐藏
        }
        //如果是关闭[设置界面]
        else {
            //关闭设置界面     
            this.isShowUi = false; //修改标识符
            this.OpenOrCloseChooseLanguagePanel(false); //关闭[选择语言面板]
            TimerApp.Uis.TitleBarUi.SettingToggleElement.style.backgroundColor = "transparent"; //按钮的背景颜色
            this.UiElement.style.display = "none"; //隐藏
            this.uiElement.parentElement.style.overflow = "hidden"; //超出边框的内容 自动隐藏
        }
    }
    /* [更新 音量]
      （更新音量相关的元素）
       参数1：音量的大小（0-100）*/
    UpdateVolume(_volume) {
        /* 修改[音量滑块]位置：
           把整个滑动条，划分为10块，每9像素为1块。
           滑块的滑动范围是4到94，
           每隔9像素，移动一次 */
        //移动位置
        this.volumeSliderRoundElement.style.left = _volume / 10 * 9 + 4 + "px";
        /* 修改input（移动端） */
        this.inputVolumeSliderElement.value = _volume + "";
        /* 修改[音量数字] 的值 */
        this.volumeNumberTextElement.innerText = _volume + "";
    }
    /* 私有方法 */
    /* [打开/关闭 选择语言 的面板]
       参数1：true是打开，false是关闭*/
    OpenOrCloseChooseLanguagePanel(_isOpen) {
        //如果是打开[选择语言 的面板]
        if (_isOpen == true) {
            //打开[选择语言 的面板]     
            this.isShowChooseLanguagePanel = true; //修改标识符
            this.currentLanguageButtonElement.style.backgroundColor = "#e3e3e3"; //按钮的背景颜色
            this.chooseLanguagePanelElement.style.visibility = "visible"; //显示
        }
        //如果是关闭[选择语言 的面板]
        else {
            //关闭[选择语言 的面板]     
            this.isShowChooseLanguagePanel = false; //修改标识符
            this.currentLanguageButtonElement.style.backgroundColor = "transparent"; //按钮的背景颜色
            this.chooseLanguagePanelElement.style.visibility = "hidden"; //隐藏
        }
    }
    /* 事件 */
    //当按下按钮时（按下所有的按钮时）
    OnMouseDownButton() {
        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);
    }
    //当点击[关闭]按钮时
    OnClickCloseButton() {
        //关闭这个设置界面
        this.OpenOrCloseUi(false);
    }
    //当点击[当前语言]按钮时
    OnClickCurrentLanguageButton() {
        //如果[选择语言的面板]是关闭的
        if (this.isShowChooseLanguagePanel == false) {
            //就打开[选择语言的面板]
            this.OpenOrCloseChooseLanguagePanel(true);
        }
        //如果[选择语言的面板]是打开的
        else {
            //就关闭[选择语言的面板]
            this.OpenOrCloseChooseLanguagePanel(false);
        }
    }
    //当点击[英语]按钮时
    OnClickEnglishButton() {
        //关闭[选择语言的面板]
        this.OpenOrCloseChooseLanguagePanel(false);
    }
    //当点击[中文]按钮时
    OnClickChineseButton() {
        //关闭[选择语言的面板]
        this.OpenOrCloseChooseLanguagePanel(false);
    }
    //当鼠标进入[Staff]按钮时
    OnMouseEnterStaffButton() {
        //显示 [Staff按钮]
        this.staffPanelElement.style.opacity = "1";
    }
    //当鼠标移出[Staff]按钮时
    OnMouseLeaveStaffButton() {
        //隐藏 [Staff按钮]
        this.staffPanelElement.style.opacity = "0";
    }
    //当鼠标进入[音量滑动条]面板时
    OnMouseEnterVolumeSliderPanel() {
        //显示 [音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "1";
    }
    //当鼠标移出[音量滑动条]面板时
    OnMouseLeaveVolumeSliderPanel() {
        //隐藏 [Staff按音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "0";
    }
    //当鼠标开始拖到[音量滑动条]块时
    OnMouseDownVolumeSliderRound(e) {
        //如果是左键点击
        if (e.button == 0) {
            //修改标识符
            this.isDragVolumeSliderRound = true;
        }
    }
    //当鼠标正在拖动[音量滑动条]块时
    OnMouseMoveVolumeSliderRound(e) {
        //如果正在拖动
        if (this.isDragVolumeSliderRound == true) {
            //如果鼠标的位置是0，那么就不继续运行啦
            if (e.clientX <= 0)
                return;
            //获取鼠标的位置（鼠标相对于浏览器左上角的位置）
            let _mouseX = e.clientX; //X坐标
            //获取[音量滑动条的面板]的位置（面板的左上角 相对于 浏览器左上角 的位置）
            let _volumeSliderPanelX = this.volumeSliderPanelElement.offsetLeft + this.uiElement.parentElement.offsetLeft + this.uiElement.parentElement.parentElement.offsetLeft;
            //偏移量（"鼠标的位置"和 "音量滑动条面板位置" 的距离）
            let _offsetX = _mouseX - _volumeSliderPanelX;
            //现在滑动到百分之多少了？（音量的大小是多少？）
            let _value = Math.floor((_offsetX - 4) / 9) * 10;
            //音量最多是100，最少是0
            if (_value > 100) {
                _value = 100;
            }
            else if (_value < 0) {
                _value = 0;
            }
            //如果音量没有改变，就不运行下面的代码
            if (TimerApp.Datas.volume == _value)
                return;
            //修改音量
            TimerApp.Datas.volume = _value;
            //修改Ui的显示
            this.UpdateVolume(_value);
        }
    }
    //当鼠标拖动结束[音量滑动条]块时
    OnMouseUpVolumeSliderRound(e) {
        //如果正在拖动
        if (this.isDragVolumeSliderRound == true) {
            //修改标识符
            this.isDragVolumeSliderRound = false;
            //修改音量系统 中的音量
            TimerApp.Systems.AudioSystem.UpdateVolume(TimerApp.Datas.volume);
            //保存数据
            TimerApp.Systems.SaveSystem.Save();
        }
    }
    //当显示[设置界面]的右键菜单时
    OnContextMenuUi() {
        //不显示右键菜单
        window.event.returnValue = false;
        return false;
    }
    //当开始拖拽时
    OnDragStartUi() {
        //禁止拖拽
        return false;
    }
}
