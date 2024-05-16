package eruo.v1.etimeapi.controller;

import eruo.v1.etimeapi.domain.Member;
import eruo.v1.etimeapi.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/api/member")
    public String addMember(@RequestBody Member member) {
        // 해싱 처리
        var hashPassword = passwordEncoder.encode(member.getPw());
        member.setPw(hashPassword);

        memberRepository.save(member);

        return "member 등록 성공";
    }
}
