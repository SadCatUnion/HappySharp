import { AppConfig } from "config";
import { UnityEngine,System ,FontHelper} from "csharp";


function Init() {
    let path = System.IO.Path.Combine(UnityEngine.Application.streamingAssetsPath, AppConfig.font)
    
    FontHelper.AddFont(path,AppConfig.fontSize,FontHelper.FontRange.ChineseFull)
    FontHelper.AddFont(path,AppConfig.fontSize,FontHelper.FontRange.Japanese)
    FontHelper.AddFont(path,AppConfig.fontSize,FontHelper.FontRange.Korean)
    FontHelper.AddFont(path,AppConfig.fontSize,FontHelper.FontRange.Thai)
    FontHelper.AddFont(path,AppConfig.fontSize,FontHelper.FontRange.Vietnamese)
}

export {
    Init
}