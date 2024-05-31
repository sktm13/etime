package eruo.v1.etimeapi.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.PostDTO;
import eruo.v1.etimeapi.dto.VerifyDTO;
import eruo.v1.etimeapi.service.PostService;
import eruo.v1.etimeapi.service.VerifyService;
import eruo.v1.etimeapi.util.CustomFileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/verifys")
public class VerifyController {
    
    private final CustomFileUtil fileUtil;

    private final VerifyService verifyService;

    //조회(파일)
    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> viewFileGET(@PathVariable("fileName") String fileName) {

        return fileUtil.getFile(fileName);

    }

    //리스트 조회 (관리자 페이지에서 전체 목록 조회 후 쿼리로 modify)
    @GetMapping("/list")
    public PageResponseDTO<VerifyDTO> list(PageRequestDTO pageRequestDTO) {

        return verifyService.getList(pageRequestDTO);

    }

    //단건 조회
    @GetMapping("/{vid}")
    public VerifyDTO read(@PathVariable("vid") Long vid) {
        return verifyService.get(vid);
    }

    //등록
    @PostMapping("/")
    public Map<String, Long> register(VerifyDTO verifyDTO){

        List<MultipartFile> files = verifyDTO.getFiles();

        List<String> uploadFileNames = fileUtil.saveFiles(files);

        verifyDTO.setUploadFileNames(uploadFileNames);

        log.info(uploadFileNames);

        Long vid = verifyService.register(verifyDTO);

        return Map.of("result", vid);
    }

    //단건 수정 (approval, result만 수정)
    @PutMapping("/{vid}")
    public Map<String, String> modify(@PathVariable Long vid, VerifyDTO verifyDTO) {
        
        verifyService.modify(verifyDTO);

        return Map.of("RESULT", "SUCCESS");
    }

    //단건 삭제
    @DeleteMapping("/{vid}")
    public Map<String, String> remove(@PathVariable Long vid){
        List<String> oldFileNames = verifyService.get(vid).getUploadFileNames();

        verifyService.remove(vid);

        fileUtil.deletesFile(oldFileNames);

        return Map.of("RESULT", "SUCCESS");
    }
}
