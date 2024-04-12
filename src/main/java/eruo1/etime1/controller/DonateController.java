package eruo1.etime1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import eruo1.etime1.domain.user.Donate;
import eruo1.etime1.service.DonateService;
import eruo1.etime1.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;



@Controller
@RequiredArgsConstructor
public class DonateController {
    
    private final UserService userService;
    private final DonateService donateService;

    @GetMapping("/donate/new")
    public String donateForm(Model model) {
        model.addAttribute("form", new DonateForm());

        return "donate/donate";
    }

    @PostMapping("/donate/new")
    public String donate(DonateForm form, String nickName) {
        
        Donate donate = new Donate();

        donate.setDonator(userService.findOneByNickName(nickName));
        donate.setMoney(form.getMoney());

        donateService.saveDonate(donate);

        return "redirect:/";
    }
    
    
}
