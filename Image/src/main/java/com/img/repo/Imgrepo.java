package com.img.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.img.entity.Imageupload;

@Repository
public interface Imgrepo extends JpaRepository<Imageupload ,Integer> {

}
