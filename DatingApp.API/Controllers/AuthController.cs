using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            // validate user
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            var isUserExists = await _authRepository.IsUserExistsAsync(userForRegisterDto.Username);
            if (isUserExists)
                return BadRequest("User already exists");
            
            var user = new User
            {
                Username = userForRegisterDto.Username
            };
            user = await _authRepository.Register(user, userForRegisterDto.Password);
            return StatusCode(201);   
        }
    }
}