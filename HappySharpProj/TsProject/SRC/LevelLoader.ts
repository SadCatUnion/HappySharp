import { Entrance, System, UnityEngine } from "csharp"
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
    }

    public OnGUI() {
        // GUI.Box(new UnityEngine.Rect(10, 10, 100, 120), "Test Menu");
        // if (GUI.Button(new Rect(20, 40, 80, 20), "1280x720")) {
            
        // }

        // // 创建第二个按钮。
        // if(GUI.Button(new Rect(20,70,80,20),"Create File")) 
        // {
        //     writeFileSync("CreateByNodejs.txt","Hello HappySharp: "+this.args,{
        //         encoding:"utf-8"
        //     })
        // }

        // if(GUI.Button(new Rect(20,100,80,20),"Quit")) 
        // {
        //     Application.Quit()
        // }

        // GUI.Box(new UnityEngine.Rect(110,10,300,200), "State");
        // if(this.args != ""){
        //     GUI.Label(new Rect (125, 25, 300, 80), this.args);
        // }
    }

    public OnStart() {

        console.warn("Start Load Level ");

        this.args = System.Environment.CommandLine

        //UnityEngine.Screen.SetResolution(800,600,UnityEngine.FullScreenMode.Windowed)


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