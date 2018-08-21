using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IEProject.Startup))]
namespace IEProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
