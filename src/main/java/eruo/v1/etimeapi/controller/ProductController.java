package eruo.v1.etimeapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;
import eruo.v1.etimeapi.service.ProductService;
import eruo.v1.etimeapi.util.CustomFileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    private final CustomFileUtil fileUtil;

    private final ProductService productService;

    //조회(파일)
    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> viewFileGET(@PathVariable("fileName") String fileName) {

        return fileUtil.getFile(fileName);

    }
    
    //리스트 조회
    @GetMapping("/list")
    public PageResponseDTO<ProductDTO> list(PageRequestDTO pageRequestDTO) {

        return productService.getList(pageRequestDTO);

    }
    
    //단건 조회
    @GetMapping("/{pno}")
    public ProductDTO read(@PathVariable("pno") Long pno) {
        return productService.get(pno);
    }

    //등록
    @PostMapping("/")
    public Map<String, Long> register(ProductDTO productDTO){

        List<MultipartFile> files = productDTO.getFiles();

        List<String> uploadFileNames = fileUtil.saveFiles(files);

        productDTO.setUploadFileNames(uploadFileNames);

        log.info(uploadFileNames);

        Long pno = productService.register(productDTO);

        return Map.of("result", pno);
    }

    //단건 수정
    @PutMapping("/{pno}")
    public Map<String, String> modify(@PathVariable Long pno, ProductDTO productDTO) {
        
        productDTO.setPno(pno);
        
        //old product Database saved Product
        ProductDTO oldProductDTO = productService.get(pno);

        //file upload
        List<MultipartFile> files = productDTO.getFiles();
        List<String> currentUploadFileNames = fileUtil.saveFiles(files);

        //keep files String
        List<String> uploadedFileNames = productDTO.getUploadFileNames();

        if(currentUploadFileNames != null && !currentUploadFileNames.isEmpty()){
            uploadedFileNames.addAll(currentUploadFileNames);
        }

        productService.modify(productDTO);

        // A B C - > A B D 완료 but C 삭제해야함 , 원래 잇던것들과 지금 것 비교
        List<String> oldFileNames = oldProductDTO.getUploadFileNames();
        if(oldFileNames != null && oldFileNames.size() > 0){

            List<String> removeFiles = 
                oldFileNames.stream().filter(fileName -> uploadedFileNames.indexOf(fileName) == -1).collect(Collectors.toList());

            fileUtil.deletesFile(removeFiles);
        }

        return Map.of("RESULT", "SUCCESS");
    }

    //단건 삭제
    @DeleteMapping("/{pno}")
    public Map<String, String> remove(@PathVariable Long pno){
        List<String> oldFileNames = productService.get(pno).getUploadFileNames();

        productService.remove(pno);

        fileUtil.deletesFile(oldFileNames);

        return Map.of("RESULT", "SUCCESS");
    }
}
