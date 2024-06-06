package eruo.v1.etimeapi.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;

@Component
@Log4j2
@RequiredArgsConstructor
public class CustomFileUtil {
    
    @Value("${eruo.v1.upload.path}")
    private String uploadPath;

    @PostConstruct
    public void init(){

        File tempFolder = new File(uploadPath);

        if(tempFolder.exists() == false){
            tempFolder.mkdir();
        }

        uploadPath = tempFolder.getAbsolutePath();

        log.info("-------------------------");
        log.info(uploadPath);

    }

    public List<String> saveFiles(List<MultipartFile> files) throws RuntimeException{

        if(files == null || files.size() == 0){
            return null;
        }
        List<String> uploadNames = new ArrayList<>();

        for(MultipartFile file: files){

            String savedName = UUID.randomUUID().toString()+"-"+file.getOriginalFilename();

            Path savePath = Paths.get(uploadPath, savedName);

            try{

                Files.copy(file.getInputStream(), savePath); // 원본파일 업로드

                String contentType = file.getContentType(); //Mime type

                //이미지 파일이라면 썸네일 화
                if(contentType != null || contentType.startsWith("image")){

                    Path thumbnailPath = Paths.get(uploadPath, "s_" + savedName);

                    Thumbnails.of(savePath.toFile()).size(200,200).toFile(thumbnailPath.toFile());

                }

                uploadNames.add(savedName);

            } catch(IOException e){

                throw new RuntimeException(e);

            }
        }
        return uploadNames;

    }

    public ResponseEntity<Resource> getFile(String fileName){

        Resource resource = new FileSystemResource(uploadPath+File.separator+fileName);

        if(!resource.isReadable()){
            resource = new FileSystemResource(uploadPath+File.separator+"default.jpeg");
        }

        HttpHeaders headers = new HttpHeaders();

        try{
            headers.add("Contest-Type", Files.probeContentType(resource.getFile().toPath()));
        } catch(IOException e){
            throw new RuntimeException(e);
        }

        return ResponseEntity.ok().headers(headers).body(resource);
        
    }

    public void deletesFile(List<String> fileNames){
        if(fileNames == null || fileNames.size() == 0){return;}

        fileNames.forEach(fileName -> {
            //썸네일 삭제
            String thumbnailFileName = "s_"+fileName;

            Path thumbnailPath = Paths.get(uploadPath, thumbnailFileName);
            Path filePath = Paths.get(uploadPath, fileName);

            try {
                Files.deleteIfExists(filePath);
                Files.deleteIfExists(thumbnailPath);    
            } catch (IOException e) {
                throw new RuntimeException(e.getMessage());
            }
            
        });
    }
}
