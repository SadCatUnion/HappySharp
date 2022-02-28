import { Entrance, ImGUIWrap, System, UnityEngine } from "csharp"
import { ILogicLevel } from "Interface/ILogicLevel";
import { writeFileSync } from "fs"
import { $typeof } from "puerts";
import { type } from "os";

class GUI extends UnityEngine.GUI { }
class Rect extends UnityEngine.Rect { }
class Application extends UnityEngine.Application { }
/**
 * Level Loader Load IGameLevel and Run it
 * LevelLoader 加载 IGameLevel 并且运行关卡
 */

class LevelLoader implements ILogicLevel {

    public bindTo: Entrance;

    public args: string = ""

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
        // ImGUIWrap.Begin("自定义窗口")
        // ImGUIWrap.Text("Hello, DearImGUI");
        // if(ImGUIWrap.Button("Click Me To Log!!!")){
        //     console.warn("Click Click")
        // }
        // ImGUIWrap.End()
        ImGUIWrap.ShowDemoWindow()
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