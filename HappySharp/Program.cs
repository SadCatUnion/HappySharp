using Microsoft.ClearScript.V8;
using Serilog;

namespace HappySharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .CreateLogger();
            
            Console.WriteLine("You are now running HappySharp......");
            var jsEnv = new V8ScriptEngine();
            jsEnv.AddHostObject("logger",logger);
            jsEnv.AddHostType("Console",typeof(Console));
            Console.WriteLine();
            if(File.Exists("./js/log.js")){
                var logjsTxt = File.ReadAllText("./js/log.js");
                jsEnv.Execute(logjsTxt);
            }else{
                logger.Error("Could Not Find ./js/log.js");
            }
            
        }
    }
}