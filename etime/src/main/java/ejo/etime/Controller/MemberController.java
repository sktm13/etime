package ejo.etime.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ejo.etime.Model.Member.Member;
import ejo.etime.Service.Member.MemberServiceImpl;
import jakarta.servlet.http.HttpSession;


@Controller
public class MemberController {

    private final MemberServiceImpl memberService = new MemberServiceImpl();
    Member member1 = new Member();
    Member loginMember = new Member();

    @GetMapping("members/joinForm")
    public String joinForm(){
        return "members/joinForm";
    }

    @PostMapping("members/join")
    public String join(@ModelAttribute Member member1){
        memberService.join(member1);
        return "members/join";
    }

    @GetMapping("members/loginForm")
    public String loginForm(){
        return "members/loginForm";
    }

    @PostMapping("members/login")
    public String login(@ModelAttribute Member loginMember, HttpSession session){
        Member result = memberService.login(loginMember);
        if (result != null) {
            session.setAttribute("loginId", result.getId());
            session.setAttribute("loginPwd", result.getPwd());
            return "members/login";
        }
        else return "redirect:loginError";
    }

    @GetMapping("members/loginError")
    public String loginError(){
        return "members/loginError";
    }

    @RequestMapping("loginhome")
    public String loginhome(Model model){
        model.addAttribute("id", loginMember.getId());
        return "loginhome";
    }

}
