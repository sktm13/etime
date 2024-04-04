package ejo.etime.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ejo.etime.Model.Member.Member;
import ejo.etime.Service.Member.MemberServiceImpl;
import jakarta.servlet.http.HttpSession;

@Controller

public class MypageController {

    private final MemberServiceImpl memberService = new MemberServiceImpl();

    @GetMapping("mypage/main")
    public String mypage(){
        return "mypage/main";
    }

    @GetMapping("mypage/logout")
    public String logout(HttpSession session){
        session.invalidate();
        return "home";
    }

    @GetMapping("mypage/update")
    public String updateForm(HttpSession session, Model model){
        Long myId = (Long)session.getAttribute("loginId");
        Member member = memberService.updateForm(myId);
        model.addAttribute("updateMember", member);
        return "mypage/update";
    }

    @PostMapping("mypage/update")
    public String update(@ModelAttribute Member member, HttpSession session){
        memberService.update(member);
        session.setAttribute("loginId", member.getId());
        session.setAttribute("loginPwd", member.getPwd());

        return "mypage/main";
    }
}
