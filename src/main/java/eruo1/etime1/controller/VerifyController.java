package eruo1.etime1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import eruo1.etime1.service.VerifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class VerifyController {
    
    private final VerifyService verifyService;

    @GetMapping("/verify/new")
    public String verifyForm(Model model) {
        return new String();
    }
    
}
