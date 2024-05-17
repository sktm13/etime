package eruo.v1.etimeapi.service;

import org.springframework.transaction.annotation.Transactional;

import eruo.v1.etimeapi.dto.HomePostDTO;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;

@Transactional
public interface ProductService {
    
    PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);
    PageResponseDTO<HomePostDTO> getPostList(PageRequestDTO pageRequestDTO);
}
