package com.simplilearn.workshop.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Grocery {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer Id;
	private String name;
	private String description;
	private String imgurl;
	private Double price;
	
	public Grocery() {
		super();
	}
	
	public Grocery(String name, String description, String imgurl, Double price) {
		super();
		this.name = name;
		this.description = description;
		this.imgurl = imgurl;
		this.price = price;
	}
	
	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Grocery [Id=" + Id + ", name=" + name + ", description=" + description + ", price=" + price + "]";
	}
	
	

}
