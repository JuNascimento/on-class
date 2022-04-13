using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using OnClass.API.Controllers;
using OnClass.API.Hubs;
using OnClass.API.Setup;
using OnClass.API.VideoHub;
using OnClass.Infra.Context;
using System.Text;



#if DEBUG
var root = Directory.GetCurrentDirectory();
var parent = Directory.GetParent(root);
var dotenv = Path.Combine(parent.FullName, @"OnClass.API\configmap-local.env");
DotEnv.Load(dotenv);
#endif

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("OnClass",
                      builder =>
                      {
                          builder
                            .WithOrigins(new string[] { @"http://localhost:3000", @"http://localhost:5135" })
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                      });
});

builder.Services.AddSignalR(o => {
    o.EnableDetailedErrors = true;
    o.MaximumReceiveMessageSize = 655360;
    o.MaximumParallelInvocationsPerClient = 1000;
});

// Add services to the container.

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "OnClass.API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = @"A API � protegida por tokens JWT"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                          {
                              Reference = new OpenApiReference
                              {
                                  Type = ReferenceType.SecurityScheme,
                                  Id = "Bearer"
                              },
                          },
                         Array.Empty<string>()
                    }
                });
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}
            ).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable($"JWT_API_KEY").ToString())),
                    ClockSkew = TimeSpan.FromMinutes(5),
                    ValidIssuer = "Onclass.API",
                    ValidAudience = "onclass"
                };
            });


builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationContext>
    (options => options.UseMySql(ConnectionStringBuilder.Build(), Microsoft.EntityFrameworkCore.ServerVersion.Parse(@"8.0.27-mysql")), ServiceLifetime.Transient);

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
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "OnClass.API v1");
}
);

app.UseRouting();

app.UseCors("OnClass");

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    app.MapHub<ChatHub>("/chat");
    app.MapHub<VideoHub>("/videohub");
});

app.Run();