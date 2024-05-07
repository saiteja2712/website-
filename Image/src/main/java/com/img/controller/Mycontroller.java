package com.img.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.img.entity.Imageupload;
import com.img.repo.Imgrepo;
import com.img.service.Imgupload;

@RestController
@CrossOrigin
@RequestMapping("/upload")
public class Mycontroller {
	@Autowired
	private Imgrepo imgrepo;
	@Autowired
	private Imgupload imgupload;
	

	 @PostMapping("/uploads")
	    public ResponseEntity<String> uploadImages(@RequestParam("files") MultipartFile[] files) {
	        if (files == null || files.length > 2) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please select exactly two images.");
	        }
	        
	        try {
	            for (MultipartFile file : files) {
	                if (file == null || file.isEmpty()) {
	                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("One of the selected images is empty.");
	                }
	                
	                if (!file.getContentType().startsWith("image")) {
	                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid file format. Please upload images only.");
	                }
	            }
	            
	            
	            for (MultipartFile file : files) {
	                imgupload.saveImage(file);
	            }
	            return ResponseEntity.ok("Images uploaded successfully.");
	        } catch (IOException e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload images.");
	        }
	    }
	 @GetMapping("/all")
	    public ResponseEntity<List<Imageupload>> getAllImages() {
	        List<Imageupload> images = imgupload.getAllImages();
	        if (images.isEmpty()) {
	            return ResponseEntity.noContent().build();
	        }
	        return ResponseEntity.ok(images);
	    }
	
//@GetMapping("/get")
//public List<Imageupload>getall()
//{
//	return imgrepo.findAll();
//}
	//@PostMapping("/img")
	//public Imageupload  image(@RequestParam("image")MultipartFile image) throws IOException
	//{
//		Imageupload i=new Imageupload();
//		i.setImage((image.getBytes()));
//		return imgrepo.save(i);
	//}
	

}
