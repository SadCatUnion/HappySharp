using System;
using System.IO;
using UnityEngine;
using System.Collections;
using NaughtyAttributes;
using Puerts;
using UnityEngine.UIElements;
using UImGui;
using ImGuiNET;

public class Entrance : MonoBehaviour
{
    [SerializeField]
    private float _sliderFloatValue = 1;

    [SerializeField]
    private string _inputText;
    private void OnLayout(UImGui.UImGui obj)
    {
        JsImLayout?.Invoke();
    }

    private void OnInitialize(UImGui.UImGui obj)
    {
        // runs after UImGui.OnEnable();
        JsImInit?.Invoke();
    }

    private void OnDeinitialize(UImGui.UImGui obj)
    {
        // runs after UImGui.OnDisable();
        JsImDeinit?.Invoke();
    }

    private void OnDisable()
    {
        UIRoot.Layout -= OnLayout;
        UIRoot.OnInitialize -= OnInitialize;
        UIRoot.OnDeinitialize -= OnDeinitialize;
    }

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

    public Action JsImInit;
    public Action JsImLayout;
    public Action JsImDeinit;

    private UImGui.UImGui UIRoot;
    private void OnEnable()
    {

    }

    void Awake()
    {

        if (env == null)
        {
            env = GlobalJSEnv.Env;
        }

        //ImGui.GetIO().Fonts.AddFontDefault();
        
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

        UIRoot = GameObject.Find("UI").GetComponent<UImGui.UImGui>();
        UIRoot.OnInitialize += OnInitialize;
        UIRoot.Layout += OnLayout;
        UIRoot.OnDeinitialize += OnDeinitialize;
        
    }


    void Start()
    {
        RunScript();
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
