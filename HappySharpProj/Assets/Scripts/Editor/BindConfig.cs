using System.IO;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System;
using UnityEngine.Playables;
using UnityEngine.UI;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[Configure]
public class BindConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(Application),
                typeof(Entrance),
                typeof(Environment),
                typeof(GUI),
                typeof(Rect),
                typeof(Screen)
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

    [Filter]
    static bool Filter(System.Reflection.MemberInfo memberInfo)
    {
        return (memberInfo.DeclaringType.Name == "Flowchart" && memberInfo.Name == "SelectedCommandsStale") ||
        (memberInfo.DeclaringType.Name == "Input" && memberInfo.Name == "IsJoystickPreconfigured")||
        (memberInfo.DeclaringType.Name == "MonoBehaviour" && memberInfo.Name == "runInEditMode")||
        (memberInfo.DeclaringType.Name == "Text" && memberInfo.Name == "OnRebuildRequested");
    }

}
