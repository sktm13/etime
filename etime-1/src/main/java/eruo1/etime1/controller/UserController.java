package eruo1.etime1.controller;

import java.util.List;

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
public class UserController {
    
    private final UserService userService;

    @GetMapping("/users/new")
    public String createForm(Model model) {
        model.addAttribute("userForm", new UserForm());
        return "users/createUserForm";
    }
    
    @PostMapping("/users/new")
    public String create(@Valid UserForm form, BindingResult result) {
        
        if (result.hasErrors()) {
            return "users/createUserForm";
        }

        User user = new User();
        user.setName(form.getName());
        user.setNickName(form.getNickName());
        user.setPassword(form.getPassword());
        
        userService.join(user);
        return "redirect:/";
    }

    @GetMapping("/users")
    public String list(Model model) {
        List<User> users = userService.findUsers();
        model.addAttribute("users", users);
        return "users/userList";
    }
    
    
}
