using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using ImGuiNET;
using System.IO;

public class FontInitial : MonoBehaviour
{
    public void AddChineseFont(ImGuiIOPtr io)
    {
        string path = Path.Combine(Application.streamingAssetsPath, "arialuni.ttf").Replace("\\","/");
        io.Fonts.AddFontFromFileTTF(path, 18, null, io.Fonts.GetGlyphRangesChineseSimplifiedCommon());
    }
}
