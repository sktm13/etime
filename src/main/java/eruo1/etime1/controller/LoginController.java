package eruo1.etime1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import eruo1.etime1.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;



@Controller
@RequiredArgsConstructor
public class LoginController {
    
    private final UserService userService;

    @GetMapping("/user/login")
    public String login(Model model) {
        model.addAttribute("loginForm", new LoginForm());
        return "user/login/login";
    }

    @PostMapping("/user/login")
    public String verifyLogin(@Valid LoginForm loginForm, BindingResult result) {
        
        if (result.hasErrors()) {
            return "user/register/register";
        }

        return "user/userHome";
    }
    
    
}
