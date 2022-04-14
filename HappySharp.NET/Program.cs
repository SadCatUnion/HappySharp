using Puerts;
namespace HappySharp
{
    public static class Program
    {
        public static void Main(string[] args)
        {

            var Env = new JsEnv(new TxtLoader());
            Env.Eval(
            @"
                const CS = require('csharp');
                CS.System.Console.WriteLine('hello world');
            ");
            
            using (var game = new APP()) game.Run();
        }
    }
}