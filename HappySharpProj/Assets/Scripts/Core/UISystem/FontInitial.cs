using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using ImGuiNET;
using System.IO;
using Puerts;
using System;
public unsafe class FontInitial : MonoBehaviour
{
    public string FontInitName = "FontInit";
    delegate void LoaderInit();
    public void AddUTF8Font(ImGuiIOPtr io)
    {
        FontHelper.io = io;
        var env = new JsEnv(new LevelScriptLoader(""), 4397);
        var Init = env.Eval<LoaderInit>("const m = require('"+FontInitName+"'); m.Init;");

        if (Init != null)
        {
            Init();
        }

    }
}

public static class FontHelper{
    public static ImGuiIOPtr io;
    public enum FontRange{
        ChineseSimple,
        ChineseFull,
        Japanese,
        Korean,
        Thai,
        Vietnamese
    }
    public static void AddFontDefault(ImGuiIOPtr io){
        io.Fonts.AddFontDefault();
    }
    public static void AddFont(string path,int size,FontRange range){
        
        IntPtr glyphRange = io.Fonts.GetGlyphRangesDefault();
        switch(range){
            case FontRange.ChineseFull:
                glyphRange = io.Fonts.GetGlyphRangesChineseFull();
                break;
            case FontRange.ChineseSimple:
                glyphRange = io.Fonts.GetGlyphRangesChineseSimplifiedCommon();
                break;
            case FontRange.Japanese:
                glyphRange = io.Fonts.GetGlyphRangesJapanese();
                break;
            case FontRange.Korean:
                glyphRange = io.Fonts.GetGlyphRangesKorean();
                break;
            case FontRange.Thai:
                glyphRange = io.Fonts.GetGlyphRangesThai();
                break;
            case FontRange.Vietnamese:
                glyphRange = io.Fonts.GetGlyphRangesVietnamese();
                break;
        }
        io.Fonts.AddFontFromFileTTF(path, size, null, glyphRange);
    }

}