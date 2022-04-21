using Puerts;
namespace HappySharp
{
    public static class Program
    {
        public static void Main(string[] args)
        {  
            using (var game = new APP()) game.Run();
        }
    }
}