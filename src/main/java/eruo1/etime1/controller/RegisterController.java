package eruo1.etime1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;



@Controller
@RequiredArgsConstructor
public class RegisterController {
    
    private final UserService userService;

    @GetMapping("/user/new")
    public String register(Model model) {
        model.addAttribute("registerForm", new RegisterForm());
        return "user/register/register";
    }

    @PostMapping("/user/new")
    public String create(@Valid RegisterForm form, BindingResult result) {
        
        if (result.hasErrors()) {
            return "user/register/register";
        }

        User user = new User();
        
        user.setLoginId(form.getLoginId());
        user.setPassword(form.getPassword());
        user.setName(form.getName());
        
        //초기 nickName <- name
        user.setNickName(form.getName());
        
        userService.join(user);
        return "redirect:/";
    }
    
    
}
