using Puerts;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using ImGuiNET;


/// <summary>
/// 如果你全ts/js编程，可以参考这份自动化配置
/// </summary>
[Configure]
public class PuertsConfig
{

    [Typing]
    static IEnumerable<Type> Typeing
    {
        get
        {
            return new List<Type>()
            {
                //仅生成ts接口, 不生成C#静态代码
                //typeof(Dictionary<int,int>)
            };
        }
    }
    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
               //直接指定的类型
                typeof(JsEnv),
                typeof(ILoader),
                typeof(GUITool)
            };
        }
    }
    [Binding]
    static IEnumerable<Type> DynamicBindings
    {
        get
        {
            // 在这里添加名字空间
            var namespaces = new List<string>()
            {
                "System",
                "System.IO",
                "System.Security",
                "System.Security.Policy",
                
            };
            var unityTypes = (from assembly in AppDomain.CurrentDomain.GetAssemblies()
                              where !(assembly.ManifestModule is System.Reflection.Emit.ModuleBuilder)
                              from type in assembly.GetExportedTypes()
                              where type.Namespace != null && namespaces.Contains(type.Namespace) && !IsExcluded(type)
                              select type);
            return unityTypes
                .Concat(Bindings)
                .Distinct();
        }
    }
    static bool IsExcluded(Type type)
    {
        if (type == null)
            return false;

        string assemblyName = Path.GetFileName(type.Assembly.Location);
        if (excludeAssemblys.Contains(assemblyName))
            return true;

        string fullname = type.FullName != null ? type.FullName.Replace("+", ".") : "";
        if (excludeTypes.Contains(fullname))
            return true;
        return IsExcluded(type.BaseType);
    }
    //需要排除的程序集
    static List<string> excludeAssemblys = new List<string>{
        "Assembly-CSharp-Editor.dll",
    };
    //需要排除的类型
    static List<string> excludeTypes = new List<string>
    {
        //System
        "System.Tuple",
        "System.Double",
        "System.Single",
        "System.ArgIterator",
        "System.SpanExtensions",
        "System.TypedReference",
        "System.StringBuilderExt",
        "System.IO.Stream",
        "System.Net.HttpListenerTimeoutManager",
        "System.Net.Sockets.SocketAsyncEventArgs",
        "UnityEngine.UIElements.ITransform",
        "System.Version",
        //ImGuiNET
        "ImGuiNET.ImFont",
        "ImGuiNET.ImFontAtlasPtr",
        "ImGuiNET.ImFontConfig",
        
    };

}