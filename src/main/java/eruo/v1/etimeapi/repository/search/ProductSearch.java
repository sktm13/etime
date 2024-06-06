package eruo.v1.etimeapi.repository.search;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;

public interface ProductSearch {
    
    PageResponseDTO<ProductDTO> searchList (PageRequestDTO pageRequestDTO);
}
