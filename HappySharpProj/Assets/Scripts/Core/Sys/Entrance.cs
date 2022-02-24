using System;
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
        
        ImGui.Text($"Hello, world {123}");
        if (ImGui.Button("Save"))
        {
            Debug.Log("Save");
        }

        ImGui.InputText("string", ref _inputText, 100);
        ImGui.SliderFloat("float", ref _sliderFloatValue, 0.0f, 1.0f);
    }

    private void OnInitialize(UImGui.UImGui obj)
    {
        // runs after UImGui.OnEnable();
    }

    private void OnDeinitialize(UImGui.UImGui obj)
    {
        // runs after UImGui.OnDisable();
    }

    private void OnDisable()
    {
        UImGuiUtility.Layout -= OnLayout;
        UImGuiUtility.OnInitialize -= OnInitialize;
        UImGuiUtility.OnDeinitialize -= OnDeinitialize;
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


    private void OnEnable()
    {

    }

    void Awake()
    {

        if (env == null)
        {
            env = GlobalJSEnv.Env;
        }

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

        var UIRoot = GameObject.Find("UI").GetComponent<UImGui.UImGui>();
        UIRoot.Layout += OnLayout;
        UIRoot.OnInitialize += OnInitialize;
        UIRoot.OnDeinitialize += OnDeinitialize;
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
