package eruo.v1.etimeapi.service;

import org.springframework.transaction.annotation.Transactional;

import eruo.v1.etimeapi.domain.Member;
import eruo.v1.etimeapi.dto.MemberDTO;
import eruo.v1.etimeapi.dto.PostDTO;

@Transactional
public interface MemberService {

	// get / One by email
    Member findByEmail(String email);
    
    //등록
    // Long register(MemberDTO memberDTO);
    
    //단건조회
    // MemberDTO get(String email);
    
    //단건 수정 (grade 변경 위함)
    void modifyGrade(String email, int grade);
    void modifyPrimitiveGrade(String email, int primitiveGraderade);

    //단건 수정 (point 변경)
    // void modifyGrade(int point);
    
}
