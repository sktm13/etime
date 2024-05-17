package eruo.v1.etimeapi.controller;

import eruo.v1.etimeapi.domain.Member;
import eruo.v1.etimeapi.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/api/member")
    public String addMember(@RequestBody Member member) {
        Optional<Member> memberFindById = memberRepository.findById(member.getEmail());
        if (memberFindById.isPresent()) {
            return "이미 존재하는 이메일임";
        }
        else {
            // 해싱 처리
            var hash = passwordEncoder.encode(member.getPw());
            member.setPw(hash);
            memberRepository.save(member);

            return "회원가입 성공";
        }
    }
}
