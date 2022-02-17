using System;
using UnityEngine;
using System.Collections;
using NaughtyAttributes;
using Puerts;
using UnityEngine.UIElements;

public class Entrance : MonoBehaviour
{

    static IEnumerator _WaitForSeconds(float count, Action CallBack)
    {
        yield return new WaitForSeconds(count);
        CallBack();
    }

    delegate void LoaderInit(Entrance levelRunner);
    public string ModName = "";

    private JsEnv env;

    //public Action JsAwake;
    public Action JsStart;
    public Action JsUpdate;

    public Action JsFixedUpdate;
    public Action JsOnDestroy;

    public Action JsOnGUI;

    UIDocument UICanvas;


    private void OnEnable()
    {

    }

    private void OnDisable()
    {
        
    }

    void Awake()
    {

        if (env == null)
        {
            env = GlobalJSEnv.Env;
        }

    }

    void OnLayout(){

    }

    void RunScript()
    {

        //env.WaitDebugger();

        var Init = env.Eval<LoaderInit>("const m = require('" + ModName + "'); m.Init;");
        if (Init != null)
        {
            Init(this);
        }

        if (JsStart != null) JsStart();

    }


    void Start()
    {
        RunScript();

        UIDocument doc = GameObject.Find("UIDocument").GetComponent<UIDocument>();
        var Text = new Label("测试一下");
        Text.style.fontSize = new StyleLength(40);
        doc.rootVisualElement.Add(Text);
    }

    void OnGUI()
    {
        if (JsOnGUI != null)
        {
            JsOnGUI();
        }
    }

    // Update is called once per frame
    void Update()
    {
        env.Tick();
        if (JsUpdate != null) JsUpdate();
    }

    void FixedUpdate()
    {
        if (JsFixedUpdate != null) JsFixedUpdate();
    }

    void OnDestroy()
    {
        if (JsOnDestroy != null) JsOnDestroy();
        //JsAwake = null;
        JsFixedUpdate = null;
        JsStart = null;
        JsUpdate = null;
        JsOnDestroy = null;
        JsOnGUI = null;
    }
}
