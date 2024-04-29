package eruo1.etime1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class JoinController {

    private final UserService userService;

    @GetMapping("/join")
    public String addForm(@ModelAttribute("user") User User) {
        return "joinForm";
    }

    @PostMapping("/join")
    public String save(@Valid @ModelAttribute User user, BindingResult result) {
        if (result.hasErrors()) {
            return "joinForm";
        }
        userService.join(user);
        return "redirect:/";
    }
}

