package eruo.v1.etimeapi.service;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.VerifyDTO;

public interface VerifyService {
    
    PageResponseDTO<VerifyDTO> getList(PageRequestDTO pageRequestDTO);
    
    Long register(VerifyDTO verifyDTO);
    
    VerifyDTO get(Long vid);

    void modify(VerifyDTO verifyDTO);

    void remove(Long vid);

}
