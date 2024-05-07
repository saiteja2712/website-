package com.img.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table
public class Imageupload {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Lob
	private byte[] image;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public Imageupload() {
		super();
	}
	public Imageupload(int id, byte[] image) {
		super();
		this.id = id;
		this.image = image;
	}

}
