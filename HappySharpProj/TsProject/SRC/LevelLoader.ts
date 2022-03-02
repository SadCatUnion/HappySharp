import { Entrance, GUITool, ImGuiNET, System, UnityEngine } from "csharp"
import { ILogicLevel } from "Interface/ILogicLevel";
import { fstat, writeFileSync } from "fs"
import { $ref, $typeof, $unref } from "puerts";
import { type } from "os";
import { debug } from "console";

class GUI extends UnityEngine.GUI { }
class Rect extends UnityEngine.Rect { }
class Application extends UnityEngine.Application { }
/**
 * Level Loader Load IGameLevel and Run it
 * LevelLoader 加载 IGameLevel 并且运行关卡
 */
enum Style {
    dark,
    light,
    classic
}

class LevelLoader implements ILogicLevel {

    public bindTo: Entrance;

    public args: string = ""

    style = Style.dark

    inputTxt = $ref("这里输入文本")
    inputPath = $ref("这里输入路径")

    constructor(bindTo: Entrance) {
        this.bindTo = bindTo;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.OnUpdate();
        this.bindTo.JsOnDestroy = () => this.OnDestroy();
        this.bindTo.JsFixedUpdate = () => this.OnFixedUpdate();
        this.bindTo.JsOnGUI = () => this.OnGUI();

        this.bindTo.JsImLayout = ()=>this.ImGUILayout()
        this.bindTo.JsImInit = ()=>this.ImGUIInit()
        this.bindTo.JsImDeinit = ()=>this.ImGUIDeInit()
    }
    ImGUILayout(): void {
        //GUITool.ShowDemoWindow()
        switch(this.style){
            case Style.dark:
                GUITool.StyleColorsDark()
                break;
            case Style.light:
                GUITool.StyleColorsLight()
                break;
            case Style.classic:
                GUITool.StyleColorsClassic()
                break;
        }
        
        GUITool.Begin("主题设置",ImGuiNET.ImGuiWindowFlags.NoCollapse|ImGuiNET.ImGuiWindowFlags.NoMove)
        {
            if (GUITool.Button("主题 dark")){
                this.style = Style.dark
            }
    
            GUITool.Spacing()
    
            if (GUITool.Button("主题 light")){
                this.style = Style.light
            }
    
            GUITool.Spacing()
    
            if (GUITool.Button("主题 classic")){
                this.style = Style.classic
            }
    
            GUITool.Spacing()
        }
        GUITool.End()

        GUITool.Begin("功能测试")
        {
            let u_color = UnityEngine.Color.magenta
            let color = UnityEngine.Vector4.zero;
            color.Set(u_color.r,u_color.g,u_color.b,u_color.a)
            GUITool.TextColored(color,"下面是功能")
            GUITool.Spacing()

            let size = UnityEngine.Vector2.zero;
            size.Set(500,200)
            if(GUITool.InputTextMultiline("文本",this.inputTxt,100,size)){
                
            }

            if(GUITool.Button("清空")){
                this.inputTxt.value = ""
            }
            GUITool.Separator()
            GUITool.TextColored(color,"会保存到 ./测试文本.txt")
            if(GUITool.Button("保存")){
                let text = $unref(this.inputPath)
                writeFileSync("./测试文本.txt",text,{
                    encoding:"utf-8"
                })

            }

        }
        GUITool.End()

    }
    ImGUIInit(): void {
        
    }
    ImGUIDeInit(): void {
        
    }

    public OnGUI() {
        
    }

    public OnStart() {

        console.warn("Start Load Level ");

        this.args = System.Environment.CommandLine

    }

    public OnFixedUpdate() {

    }

    public OnUpdate() {

    }

    public OnDestroy() {
        console.warn('Destroy...');
    }
}

/**
 * Make A LevelLoader Run
 * @param bindTo A C# LevelRunner
 */
function Init(bindTo: Entrance) {
    new LevelLoader(bindTo);
}

export {
    Init
}