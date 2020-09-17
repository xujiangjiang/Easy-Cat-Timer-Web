/* 支持移动端
   (让网页可以支持Touch事件) */
class SupportMobileTool{
    /* 变量 */
    private isMobile:boolean;//是否是移动端？

    private isTouchStartBlackCatOpenMouth:boolean;//是否用手指按下了黑色猫咪的嘴巴
    private isTouchStartYellowCatOpenMouth:boolean;//是否用手指按下了黄色猫咪的嘴巴


    /* 组件 */
    //SettingUi
    private inputVolumeSliderPanelElement:HTMLElement;//音量滑动条的面板（input的滑动条的面板）(如果是手机端，就用这个滑动条)
    private inputVolumeSliderElement:HTMLInputElement;//音量滑动条（input的滑动条）(如果是手机端，就用这个滑动条)
    private volumeNumberPanelElement:HTMLElement;//音量数字的面板
    private volumeNumberTextElement:HTMLElement;//音量数字的文字

    //CountdownUi
    private blackCatRopeElement:HTMLElement;//[黑猫]的绳子  
    private blackCatOpenMouthElement:HTMLElement;//[黑猫]的嘴巴 
    private blackCatCloseMouthElement:HTMLElement;//[黑猫]的闭嘴

    private yellowCatRopeElement:HTMLElement;//[黄猫]的绳子
    private yellowCatOpenMouthElement:HTMLElement;//[黄猫]的嘴巴   
    private yellowCatCloseMouthElement:HTMLElement;//[黄猫]的闭嘴  
    private yellowCatPauseTextElement:HTMLElement;//[黄猫]的暂停 文字
    private yellowCatResumeTextElement:HTMLElement;//[黄猫]的恢复 文字
        
    private pausedPanelElement:HTMLElement;//[暂停]的面板
    private pausedTimeTextElement:HTMLElement;//[暂停]时 的时间文字


    /* 属性 */
    //是否是移动端？
    public get IsMobile():boolean{
        return this.isMobile;
    }
        

    /* 构造函数 */
    constructor(){
        //初始化变量
        this.isMobile = false;
        this.isTouchStartBlackCatOpenMouth = false;
        this.isTouchStartYellowCatOpenMouth = false;
        
        //初始化组件
        this.inputVolumeSliderPanelElement = document.querySelector("#settingUi .inputVolumeSlider");
        this.inputVolumeSliderElement = document.querySelector("#settingUi .inputVolumeSlider .input") as HTMLInputElement;
        this.volumeNumberPanelElement = document.querySelector("#settingUi .volumeNumber");
        this.volumeNumberTextElement = document.querySelector("#settingUi .volumeNumber .number");

        this.blackCatRopeElement = document.querySelector("#countdownUi .blackCat .rope");
        this.blackCatOpenMouthElement = document.querySelector("#countdownUi .blackCat .cat .mouth");
        this.blackCatCloseMouthElement = document.querySelector("#countdownUi .blackCat .cat .close");
        this.yellowCatRopeElement = document.querySelector("#countdownUi .yellowCat .rope");
        this.yellowCatOpenMouthElement = document.querySelector("#countdownUi .yellowCat .cat .mouth");
        this.yellowCatCloseMouthElement = document.querySelector("#countdownUi .yellowCat .cat .close");
        this.yellowCatPauseTextElement = document.querySelector("#countdownUi .yellowCat .rope .text .pause");
        this.yellowCatResumeTextElement = document.querySelector("#countdownUi .yellowCat .rope .text .resume");
        this.pausedPanelElement = document.querySelector("#countdownUi .paused");
        this.pausedTimeTextElement = document.querySelector("#countdownUi .paused .timeText");
    }


    /* 公开方法 */
    //支持移动端
    public SupportMobile():void{

        if(this.isMobile == true)return;

        /* 修改标识符 */
        this.isMobile = true;

        /* 显示和隐藏 */
        //隐藏自己做的滑动条，打开input的滑动条
        let _volumeSliderPanelElement:HTMLElement = document.querySelector("#settingUi .volumeSlider");
        _volumeSliderPanelElement.style.display = "none";
        this.inputVolumeSliderPanelElement.style.display = "block";

        /* 注册事件 */
        //SettingUi
        //改变this的指向（指向当前这个SupportMobileTool的对象）
        let onTouchStartInputVolumeSliderPanel = this.OnTouchStartInputVolumeSliderPanel.bind(this);
        let onTouchEndInputVolumeSliderPanel = this.OnTouchEndInputVolumeSliderPanel.bind(this);   
        let onValueChangeInputVolumeSlider = this.OnValueChangeInputVolumeSlider.bind(this);  
        //注册事件
        this.inputVolumeSliderPanelElement.ontouchstart = onTouchStartInputVolumeSliderPanel;
        this.inputVolumeSliderPanelElement.ontouchend = onTouchEndInputVolumeSliderPanel;
        this.inputVolumeSliderElement.onchange = onValueChangeInputVolumeSlider;

        //CountdownUi
        //改变this的指向（指向当前这个SupportMobileTool的对象）
        let onTouchStartYellowCatMouthButton = this.OnTouchStartYellowCatMouthButton.bind(this);
        let onTouchEndYellowCatMouthButton = this.OnTouchEndYellowCatMouthButton.bind(this);
        let onTouchStartBlackCatMouthButton = this.OnTouchStartBlackCatMouthButton.bind(this);
        let onTouchEndBlackCatMouthButton = this.OnTouchEndBlackCatMouthButton.bind(this);
        //注册事件
        this.yellowCatOpenMouthElement.ontouchstart = onTouchStartYellowCatMouthButton;
        this.yellowCatOpenMouthElement.ontouchend = onTouchEndYellowCatMouthButton;
        this.yellowCatOpenMouthElement.onclick = this.OnClickYellowCatMouthButton;
        this.yellowCatOpenMouthElement.onmousedown = this.OnMouseDownYellowCatMouthButton;
        this.blackCatOpenMouthElement.ontouchstart = onTouchStartBlackCatMouthButton;
        this.blackCatOpenMouthElement.ontouchend = onTouchEndBlackCatMouthButton;
        this.blackCatOpenMouthElement.onclick = this.OnClickBlackCatMouthButton;
        this.blackCatOpenMouthElement.onmousedown = this.OnMouseDownBlackCatMouthButton;

    }



    /* 事件 */
    /* 以下是SettingUi中的 移动端（触摸）的事件 */
    //当手指开始触碰[音量滑动条]面板时
    private OnTouchStartInputVolumeSliderPanel():void{
        //显示 [音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "1";
    }
    //当手指结束触碰[音量滑动条]面板时
    private OnTouchEndInputVolumeSliderPanel():void{
        //显示 [音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "0";
    }
    //当[音量滑动条]的值改变时
    private OnValueChangeInputVolumeSlider():void{
        //获取滑动条的值
        let _value:number = window.parseInt(this.inputVolumeSliderElement.value);

        //如果音量没有改变，就不运行下面的代码
        if(TimerApp.Datas.volume == _value)return;

        //修改音量
        TimerApp.Datas.volume = _value;

        //修改Ui的显示
        this.volumeNumberTextElement.innerText = _value+"";

        //修改音量系统 中的音量
        TimerApp.Systems.AudioSystem.UpdateVolume(TimerApp.Datas.volume);

        //保存数据
        TimerApp.Systems.SaveSystem.Save();
    }


    /* 以下是CountdownUi中的 移动端（触摸）的事件 */
    //当手指在[黄猫的嘴巴]上按下时
    private OnTouchStartYellowCatMouthButton():void{
        //修改标识符
        this.isTouchStartYellowCatOpenMouth = true;

        //把猫的嘴巴变小
        this.yellowCatOpenMouthElement.style.transform = "scale(0.75)";

        //显示猫的闭嘴
        this.yellowCatCloseMouthElement.style.opacity = "1";
        this.yellowCatCloseMouthElement.style.transform = "scale(1,1)";

        //暂停绳子的动画
        this.yellowCatRopeElement.style.animationPlayState = "paused";

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

    }
    //当手指在[黄猫的嘴巴]上抬起时
    private OnTouchEndYellowCatMouthButton(e:TouchEvent):void{

        //把猫的嘴巴变小
        this.yellowCatOpenMouthElement.style.transform = "scale(1)";

        //隐藏猫的闭嘴
        this.yellowCatCloseMouthElement.style.opacity = "0";
        this.yellowCatCloseMouthElement.style.transform = "scale(1,0.8)";

        //继续播放 绳子的动画
        this.yellowCatRopeElement.style.animationPlayState = "running";

        /* 点击 (如果按下了黄色嘴巴) */
        if(this.isTouchStartYellowCatOpenMouth == true){
            //如果按下的是[暂停按钮]
            if(this.pausedPanelElement.style.visibility != "visible"){
                //那么就暂停
                if (TimerApp.Datas.currentState == StateType.Run){
                    TimerApp.Datas.currentState = StateType.Pause;
                }
                //把暂停的图片，换成恢复的图片
                this.yellowCatPauseTextElement.style.opacity = "0";
                this.yellowCatResumeTextElement.style.opacity = "1";
                //更改暂停的时间
                this.pausedTimeTextElement.innerText = TimerApp.Datas.currentTime.ToString();
                //打开暂停的界面
                this.pausedPanelElement.style.visibility = "visible";
            }
            //如果按下的是[恢复按钮]
            else{
                //那么就恢复
                if (TimerApp.Datas.currentState == StateType.Pause){
                    TimerApp.Datas.currentState = StateType.Run;
                }
                //把恢复的图片，换成暂停的图片
                this.yellowCatPauseTextElement.style.opacity = "1";
                this.yellowCatResumeTextElement.style.opacity = "0";
                //关闭暂停的界面
                this.pausedPanelElement.style.visibility = "hidden";
            }
            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonUp);
        }

        //修改标识符
        this.isTouchStartYellowCatOpenMouth = false;

        /* 停止冒泡 */
        e.preventDefault();

    }
    //当点击[黄猫的嘴巴]时
    private OnClickYellowCatMouthButton():void{
        //什么都不做
    }
    //当鼠标在[黄猫的嘴巴]上按下时
    private OnMouseDownYellowCatMouthButton():void{
        //什么都不做
    }

    //当手指在[黑猫的嘴巴]上按下时
    private OnTouchStartBlackCatMouthButton():void{
        //修改标识符
        this.isTouchStartBlackCatOpenMouth = true;

        //把猫的嘴巴变小
        this.blackCatOpenMouthElement.style.transform = "scale(0.75)";

        //显示猫的闭嘴
        this.blackCatCloseMouthElement.style.opacity = "1";
        this.blackCatCloseMouthElement.style.transform = "scale(1,1)";

        //暂停绳子的动画
        this.blackCatRopeElement.style.animationPlayState = "paused";

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);
    }
    //当手指在[黑猫的嘴巴]上抬起时
    private OnTouchEndBlackCatMouthButton(e:TouchEvent):void{
        //把猫的嘴巴变大
        this.blackCatOpenMouthElement.style.transform = "scale(1)";

        //隐藏猫的闭嘴
        this.blackCatCloseMouthElement.style.opacity = "0";
        this.blackCatCloseMouthElement.style.transform = "scale(1,0.8)";

        //继续播放 绳子的动画
        this.blackCatRopeElement.style.animationPlayState = "running";

        /* 点击 (如果按下了黑色嘴巴) */
        if(this.isTouchStartBlackCatOpenMouth == true){
            //修改状态
            TimerApp.Datas.currentState = StateType.Stop;
            //关闭[倒计时界面]
            TimerApp.Uis.CountdownUi.OpenOrCloseUi(false);
            //打开[计时界面]
            TimerApp.Uis.TimingUi.OpenOrCloseUi(true);
            //让鼠标离开黑猫
            this.blackCatRopeElement.style.top = "-341px";//把绳子收上去
            this.blackCatRopeElement.style.animation = "";
            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonUp);
        }

        //修改标识符
        this.isTouchStartBlackCatOpenMouth = false;

        /* 停止冒泡 */
        e.preventDefault();
    }
    //当点击[黑猫的嘴巴]时
    private OnClickBlackCatMouthButton():void{
        //什么都不做
    }
    //当鼠标在[黑猫的嘴巴]上按下时
    private OnMouseDownBlackCatMouthButton():void{
        //什么都不做
    }

}
