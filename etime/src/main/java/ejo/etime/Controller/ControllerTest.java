package ejo.etime.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerTest {
    @GetMapping("/")
    String index() {
        return "redirect:/index.html";
    }

    @GetMapping("/members")
    String members(){
        return "redirect:/members.html";
    }

    @GetMapping("/members/new")
    String signUp(){
        return "redirect:/index.html";
    }
}
