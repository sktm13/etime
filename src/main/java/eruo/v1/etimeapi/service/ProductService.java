package eruo.v1.etimeapi.service;

import org.springframework.transaction.annotation.Transactional;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;

@Transactional
public interface ProductService {
    
    PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);
    
    Long register(ProductDTO productDTO);
    
    ProductDTO get(Long pno);

    void modify(ProductDTO productDTO);

    void remove(Long pno);
}
