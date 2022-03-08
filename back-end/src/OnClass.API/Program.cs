using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using OnClass.API.Setup;
using OnClass.Infra.Context;


#if DEBUG
var root = Directory.GetCurrentDirectory();
var parent = Directory.GetParent(root);
var dotenv = Path.Combine(parent.FullName, @"OnClass.API\configmap-dev.env");
DotEnv.Load(dotenv);
#endif

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => c.SwaggerDoc("v1", new OpenApiInfo { Title = "ROS.API", Version = "v1" }));

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationContext>
    (options => options.UseMySql(ConnectionStringBuilder.Build(), Microsoft.EntityFrameworkCore.ServerVersion.Parse(@"8.0.27-mysql")));

builder.Services.RegisterServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
}

app.UseSwagger(c =>
{
    c.RouteTemplate = "swagger/{documentname}/swagger.json";
});
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "ROS.API v1");
}
);

app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();