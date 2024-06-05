package eruo.v1.etimeapi.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.PostDTO;
import eruo.v1.etimeapi.service.PostService;
import eruo.v1.etimeapi.util.CustomFileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/posts")
public class PostController {
    
    private final CustomFileUtil fileUtil;

    private final PostService postService;

    //조회(파일)
    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> viewFileGET(@PathVariable("fileName") String fileName) {

        return fileUtil.getFile(fileName);

    }
    
    //리스트 조회
    @GetMapping("/list")
    public PageResponseDTO<PostDTO> list(PageRequestDTO pageRequestDTO) {

        return postService.getList(pageRequestDTO);

    }
    
    //단건 조회
    @GetMapping("/{pid}")
    public PostDTO read(@PathVariable("pid") Long pid) {
        return postService.get(pid);
    }

    //등록
    @PostMapping("/")
    public Map<String, Long> register(@RequestBody PostDTO postDTO){

        List<MultipartFile> files = postDTO.getFiles();

        List<String> uploadFileNames = fileUtil.saveFiles(files);

        postDTO.setUploadFileNames(uploadFileNames);

        log.info(uploadFileNames);

        Long pid = postService.register(postDTO);

        return Map.of("result", pid);
    }

    //단건 수정
    @PutMapping("/{pid}")
    public Map<String, String> modify(@PathVariable Long pid, PostDTO postDTO) {
        
        postDTO.setPid(pid);
        
        //old product Database saved Product
        PostDTO oldPostDTO = postService.get(pid);

        //file upload
        List<MultipartFile> files = postDTO.getFiles();
        List<String> currentUploadFileNames = fileUtil.saveFiles(files);

        //keep files String
        List<String> uploadedFileNames = postDTO.getUploadFileNames();

        if(currentUploadFileNames != null && !currentUploadFileNames.isEmpty()){
            uploadedFileNames.addAll(currentUploadFileNames);
        }

        postService.modify(postDTO);

        // A B C - > A B D 완료 but C 삭제해야함 , 원래 잇던것들과 지금 것 비교
        List<String> oldFileNames = oldPostDTO.getUploadFileNames();
        if(oldFileNames != null && oldFileNames.size() > 0){

            List<String> removeFiles = 
                oldFileNames.stream().filter(fileName -> uploadedFileNames.indexOf(fileName) == -1).collect(Collectors.toList());

            fileUtil.deletesFile(removeFiles);
        }

        return Map.of("RESULT", "SUCCESS");
    }

    //단건 삭제
    @DeleteMapping("/{pid}")
    public Map<String, String> remove(@PathVariable Long pid){
        List<String> oldFileNames = postService.get(pid).getUploadFileNames();

        postService.remove(pid);

        fileUtil.deletesFile(oldFileNames);

        return Map.of("RESULT", "SUCCESS");
    }
}
