package com.img.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.img.entity.Imageupload;
import com.img.repo.Imgrepo;

@Service
public class Imgupload {

	    @Autowired
	    private Imgrepo imgrepo;

	    public void saveImage(MultipartFile file) throws IOException {
	        Imageupload image = new Imageupload();
	        image.setImage(file.getBytes());
	        imgrepo.save(image);
	    }
	    public List<Imageupload> getAllImages() {
	        return imgrepo.findAll();
	    }
	}



