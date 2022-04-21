using System.Collections;
using System.Collections.Generic;
using Puerts;
using System.IO;

public class GlobalJSEnv
{
    private static JsEnv _Env;
    public static JsEnv Env
    {
        get
        {
            if (_Env == null)
            {
                _Env = new JsEnv(new TxtLoader());
            }

            return _Env;
        }
    }

}
