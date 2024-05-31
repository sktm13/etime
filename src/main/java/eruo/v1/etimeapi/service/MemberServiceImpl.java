package eruo.v1.etimeapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo.v1.etimeapi.domain.Member;
import eruo.v1.etimeapi.domain.Post;
import eruo.v1.etimeapi.domain.Product;
import eruo.v1.etimeapi.domain.ProductImage;
import eruo.v1.etimeapi.domain.Todo;
import eruo.v1.etimeapi.dto.MemberDTO;
import eruo.v1.etimeapi.dto.PostDTO;
import eruo.v1.etimeapi.dto.ProductDTO;
import eruo.v1.etimeapi.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    //단건 조회
    @Override
    public Member findByEmail(String email) {

        Optional<Member> result = memberRepository.findById(email);

        return result.orElseThrow();

    }

    @Override
    public void modifyGrade(String email, int grade) {
        // 조회
        Optional<Member> result = memberRepository.findById(email);

        Member member = result.orElseThrow();
        // 변경내용 반영
        member.changeGrade(grade);

        // 저장
        memberRepository.save(member);
    }

    @Override
    public void modifyPrimitiveGrade(String email, int primitiveGraderade) {
        
         // 조회
         Optional<Member> result = memberRepository.findById(email);

         Member member = result.orElseThrow();
         // 변경내용 반영
         member.changePrimitiveGrade(primitiveGraderade);
 
         // 저장
         memberRepository.save(member);
    }

    
}
