/* 计时器的[倒计时 界面] */
class CountdownUi{

    /* 变量 */
    //是否打开了[完成提示]？
    private isOpenCompleteTip:boolean;
    //是否显示[时间到了]面板？
    private isShowTimeIsUpPanel:boolean;
    //显示[时间到了]的循环id（循环调用的id）(-1代表没有调用)
    private showTimeIsUpPanelIntervalId:number;
    //显示[时间到了]的调用id（延时调用的id）(-1代表没有调用)
    private showTimeIsUpPanelTimeoutId:number;

    

    /* 元素 */
    //倒计时界面
    private uiElement:HTMLElement;

    //[黑猫]的面板
    private blackCatPanelElement:HTMLElement;
    //[黑猫]的绳子
    private blackCatRopeElement:HTMLElement;
    //[黑猫]的嘴巴
    private blackCatOpenMouthElement:HTMLElement;
    //[黑猫]的闭嘴
    private blackCatCloseMouthElement:HTMLElement;

    //[黄猫]的面板
    private yellowCatPanelElement:HTMLElement;
    //[黄猫]的绳子
    private yellowCatRopeElement:HTMLElement;
    //[黄猫]的嘴巴
    private yellowCatOpenMouthElement:HTMLElement;
    //[黄猫]的闭嘴
    private yellowCatCloseMouthElement:HTMLElement;
    //[黄猫]的暂停 文字
    private yellowCatPauseTextElement:HTMLElement;
    //[黄猫]的恢复 文字
    private yellowCatResumeTextElement:HTMLElement;

    //[时间]的文字
    private timeTextElement:HTMLElement;

    //[暂停]的面板
    private pausedPanelElement:HTMLElement;
    //[暂停]时 的时间文字
    private pausedTimeTextElement:HTMLElement;

    //[时间到了]的面板
    private timeIsUpPanelElement:HTMLElement;


  
    /* 属性 */
    //元素：倒计时界面
    public get UiElement():HTMLElement{
        return this.uiElement;
    }



    /* 构造函数 */
    constructor(){

        /* 初始化 */
        //初始化[变量]
        this.isOpenCompleteTip = false;
        this.isShowTimeIsUpPanel = false;
        this.showTimeIsUpPanelIntervalId = -1;
        this.showTimeIsUpPanelTimeoutId = -1;

        //初始化[组件]
        this.uiElement = document.querySelector("#countdownUi");
        this.blackCatPanelElement = document.querySelector("#countdownUi .blackCat .cat");
        this.blackCatRopeElement = document.querySelector("#countdownUi .blackCat .rope");
        this.blackCatOpenMouthElement = document.querySelector("#countdownUi .blackCat .cat .mouth");
        this.blackCatCloseMouthElement = document.querySelector("#countdownUi .blackCat .cat .close");
        this.yellowCatPanelElement = document.querySelector("#countdownUi .yellowCat .cat");
        this.yellowCatRopeElement = document.querySelector("#countdownUi .yellowCat .rope");
        this.yellowCatOpenMouthElement = document.querySelector("#countdownUi .yellowCat .cat .mouth");
        this.yellowCatCloseMouthElement = document.querySelector("#countdownUi .yellowCat .cat .close");
        this.yellowCatPauseTextElement = document.querySelector("#countdownUi .yellowCat .rope .text .pause");
        this.yellowCatResumeTextElement = document.querySelector("#countdownUi .yellowCat .rope .text .resume");
        this.timeTextElement = document.querySelector("#countdownUi .time .timeText");
        this.pausedPanelElement = document.querySelector("#countdownUi .paused");
        this.pausedTimeTextElement = document.querySelector("#countdownUi .paused .timeText");
        this.timeIsUpPanelElement = document.querySelector("#countdownUi .timeIsUp");

        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onMouseEnterBlackCatPanel = this.OnMouseEnterBlackCatPanel.bind(this);
        let onMouseLeaveBlackCatPanel = this.OnMouseLeaveBlackCatPanel.bind(this);
        let onMouseDownBlackCatMouthButton = this.OnMouseDownBlackCatMouthButton.bind(this);
        let onMouseUpBlackCatPanel = this.OnMouseUpBlackCatPanel.bind(this);
        let onClickBlackCatMouthButton = this.OnClickBlackCatMouthButton.bind(this);
        let onMouseEnterYellowCatPanel = this.OnMouseEnterYellowCatPanel.bind(this);
        let onMouseLeaveYellowCatPanel = this.OnMouseLeaveYellowCatPanel.bind(this);
        let onMouseDownYellowCatMouthButton = this.OnMouseDownYellowCatMouthButton.bind(this);
        let onClickYellowCatMouthButton = this.OnClickYellowCatMouthButton.bind(this);
        let onMouseUpYellowCatPanel = this.OnMouseUpYellowCatPanel.bind(this);
        let onContextMenuUi = this.OnContextMenuUi.bind(this);
        let onMouseDownBody = this.OnMouseDownBody.bind(this);
        let onDragStartUi = this.OnDragStartUi.bind(this);
        

        /* 注册事件 */
        this.blackCatPanelElement.onmouseenter = onMouseEnterBlackCatPanel;
        this.blackCatPanelElement.onmouseleave = onMouseLeaveBlackCatPanel;
        this.blackCatPanelElement.onmouseup = onMouseUpBlackCatPanel;
        this.blackCatOpenMouthElement.onmousedown = onMouseDownBlackCatMouthButton;
        this.blackCatOpenMouthElement.onclick = onClickBlackCatMouthButton;

        this.yellowCatPanelElement.onmouseenter = onMouseEnterYellowCatPanel;
        this.yellowCatPanelElement.onmouseleave = onMouseLeaveYellowCatPanel;
        this.yellowCatPanelElement.onmouseup = onMouseUpYellowCatPanel;
        this.yellowCatOpenMouthElement.onmousedown = onMouseDownYellowCatMouthButton;
        this.yellowCatOpenMouthElement.onclick = onClickYellowCatMouthButton;

        this.uiElement.oncontextmenu = onContextMenuUi;
        this.uiElement.ondragstart = onDragStartUi;
        this.uiElement.parentElement.parentElement.onmousedown = onMouseDownBody;

    }



    /* 公开方法 */
    /* [打开/关闭 此界面] 
       参数1：true是打开，false是关闭*/
    public OpenOrCloseUi(_isOpen:boolean){

        //如果是打开[设置界面]
        if(_isOpen == true){

            //显示
            this.UiElement.style.display = "block";

        }

        //如果是关闭[设置界面]
        else{

            //关闭暂停面板
            this.pausedPanelElement.style.visibility = "hidden";

            //重置黄猫的文字（把恢复的图片，换成暂停的图片）
            this.yellowCatPauseTextElement.style.opacity = "1";
            this.yellowCatResumeTextElement.style.opacity = "0";
            
            //关闭完成的提示
            this.OpenOrCloseCompleteTip(false);

            //隐藏
            this.UiElement.style.display = "none";

        }

    }

    /* [更新时间] 
        参数1：时间*/
    public UpdateTimeText(_time:string){

        this.timeTextElement.innerText = _time;

    }

    /* [打开/关闭 完成的提示] 
       参数1：true是打开，false是关闭 */
    public OpenOrCloseCompleteTip(_isOpen:boolean){

        //如果要打开提示
        if(_isOpen == true){
            //修改标识符
            this.isOpenCompleteTip = true;

            //播放声音
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.Complete);

            //显示[时间到了]的图片
            this.isShowTimeIsUpPanel = true;
            this.timeIsUpPanelElement.style.opacity = "1";

            //循环：显示[时间到了]的图片
            this.showTimeIsUpPanelIntervalId = window.setInterval(()=>{

                //如果没有显示[时间到了]
                if(this.isShowTimeIsUpPanel == false){
                    //修改标识符
                    this.isShowTimeIsUpPanel = true;                 
                    //显示
                    this.timeIsUpPanelElement.style.opacity = "1";
                }
                //如果显示[时间到了]
                else{
                    //修改标识符
                    this.isShowTimeIsUpPanel = false;
                    //隐藏
                    this.timeIsUpPanelElement.style.opacity = "0";
                }

            },830);

            //13秒后，停止闪烁
            this.showTimeIsUpPanelTimeoutId = window.setTimeout(()=>{

                //关闭提示
                this.OpenOrCloseCompleteTip(false);

                //修改标识符
                this.showTimeIsUpPanelTimeoutId = -1;

            },11000);
        }

        //如果要关闭提示
        else{
            //修改标识符
            this.isOpenCompleteTip = false;

            //停止声音
            TimerApp.Systems.AudioSystem.StopAudio(AudioType.Complete);

            //修改标题
            document.title = "Easy Cat Timer";

            //如果有循环调用
            if(this.showTimeIsUpPanelIntervalId != -1){

                //停止延时调用
                window.clearTimeout(this.showTimeIsUpPanelTimeoutId);
                //修改标识符
                this.showTimeIsUpPanelTimeoutId = -1;

                //停止循环调用
                window.clearInterval(this.showTimeIsUpPanelIntervalId);
                //修改标识符
                this.isShowTimeIsUpPanel = false;

                //隐藏
                this.timeIsUpPanelElement.style.opacity = "0";

            }
        }

    }



    /* 事件 */
    //当鼠标进入[黑猫]时
    private OnMouseEnterBlackCatPanel():void{

        //把绳子放下来
        this.blackCatRopeElement.style.top = "-40px";

        //播放绳子自由摆动的动画
        this.blackCatRopeElement.style.animation = "blackCatRopeSwingAnimation 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate backwards";

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.CatUp);

        //关闭完成提示
        this.OnMouseDownBody();

    }
    //当鼠标离开[黑猫]时
    private OnMouseLeaveBlackCatPanel():void{

        //把绳子收上去
        this.blackCatRopeElement.style.top = "-341px";

        //停止绳子自由摆动的动画
        this.blackCatRopeElement.style.animation = "";

        //播放音效
        if(this.uiElement.style.display != "none"){
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.CatDown);
        }
        
        //隐藏猫的闭嘴
        this.OnMouseUpBlackCatPanel();

    }
    //当鼠标在[黑猫]上抬起时
    private OnMouseUpBlackCatPanel():void{

        //把猫的嘴巴变大
        this.blackCatOpenMouthElement.style.transform = "scale(1)";

        //隐藏猫的闭嘴
        this.blackCatCloseMouthElement.style.opacity = "0";
        this.blackCatCloseMouthElement.style.transform = "scale(1,0.8)";

        //继续播放 绳子的动画
        this.blackCatRopeElement.style.animationPlayState = "running";

    }
    //当鼠标在[黑猫的嘴巴]上按下时
    private OnMouseDownBlackCatMouthButton(e:MouseEvent):void{

        //如果是左键
        if(e.button == 0){

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

    }
    //当鼠标点击[黑猫的嘴巴]时
    private OnClickBlackCatMouthButton():void{

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


    //当鼠标进入[黄猫]时
    private OnMouseEnterYellowCatPanel():void{

        //把绳子放下来
        this.yellowCatRopeElement.style.top = "-30px";

        //播放绳子自由摆动的动画
        this.yellowCatRopeElement.style.animation = "yellowCatRopeSwingAnimation 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate backwards";

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.CatUp);

        //关闭完成提示
        this.OnMouseDownBody();

    }
    //当鼠标离开[黄猫]时
    private OnMouseLeaveYellowCatPanel():void{

        //把绳子收上去
        this.yellowCatRopeElement.style.top = "-369px";

        //停止绳子自由摆动的动画
        this.yellowCatRopeElement.style.animation = "";

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.CatDown);
        
        //隐藏猫的闭嘴
        this.OnMouseUpYellowCatPanel();

    }
    //当鼠标在[黄猫]上抬起时
    private OnMouseUpYellowCatPanel():void{

        //把猫的嘴巴变小
        this.yellowCatOpenMouthElement.style.transform = "scale(1)";

        //隐藏猫的闭嘴
        this.yellowCatCloseMouthElement.style.opacity = "0";
        this.yellowCatCloseMouthElement.style.transform = "scale(1,0.8)";

        //继续播放 绳子的动画
        this.yellowCatRopeElement.style.animationPlayState = "running";

    }
    //当鼠标在[黄猫的嘴巴]上按下时
    private OnMouseDownYellowCatMouthButton(e:MouseEvent):void{

        //如果是左键
        if(e.button == 0){

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

    }
    //当鼠标点击[黄猫的嘴巴]时
    private OnClickYellowCatMouthButton():void{

        //如果按下的是[暂停按钮]
        if(this.pausedPanelElement.style.visibility != "visible"){

            //那么就暂停
            if(TimerApp.Datas.currentState == StateType.Run){
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
            if(TimerApp.Datas.currentState == StateType.Pause){
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


    //当显示[设置界面]的右键菜单时
    private OnContextMenuUi():boolean{

        //不显示右键菜单
        window.event.returnValue=false;  
        return false; 

    }


    //当鼠标按下[页面]时
    private OnMouseDownBody():void{

        //如果提示界面是打开的
        if(this.isOpenCompleteTip == true){

            // //停止声音
            this.OpenOrCloseCompleteTip(false);

        }

    }


    //当开始拖拽时
    private OnDragStartUi():boolean{

        //禁止拖拽
        return false;

    }

}