package eruo.v1.etimeapi.service;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.PostDTO;

public interface PostService {
    
    PageResponseDTO<PostDTO> getList(PageRequestDTO pageRequestDTO);
    
    Long register(PostDTO postDTO);
    
    PostDTO get(Long pid);

    void modify(PostDTO postDTO);

    void remove(Long pid);
}
