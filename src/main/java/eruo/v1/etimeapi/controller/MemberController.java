package eruo.v1.etimeapi.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import eruo.v1.etimeapi.domain.Member;
import eruo.v1.etimeapi.dto.MemberDTO;
import eruo.v1.etimeapi.dto.PostDTO;
import eruo.v1.etimeapi.service.MemberService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;





@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {
    
    private final MemberService memberService;
    
    //단건 조회 (필요없음, 헤더에 토큰 넣으면 json으로 나옴)
    // @GetMapping("/{email}")
    // public Member findOne(@PathVariable("email") String email) {
    //     return memberService.findByEmail(email);
    // }

    //수정
    //단건 수정
    @PutMapping("/grade/{email}")
    public Map<String, String> modifyGrade(@PathVariable String email, @RequestBody GradeRequest request) {

        memberService.modifyGrade(email, request.getGrade());

        return Map.of("RESULT", "SUCCESS");
    }

    @Data
    static class GradeRequest{

        private String email;
        private int grade;
    }

    @PutMapping("/pgrade/{email}")
    public Map<String, String> modifyPrimitiveGrade(@PathVariable String email, @RequestBody PrimitiveGradeRequest request) {

        memberService.modifyPrimitiveGrade(email, request.getPrimitiveGrade());

        return Map.of("RESULT", "SUCCESS");
    }

    @Data
    static class PrimitiveGradeRequest{

        private String email;
        private int primitiveGrade;
    }
}
