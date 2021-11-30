package com.simplilearn.workshop.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer Id;
	private String name;
	private String address;
	private Boolean adminstatus;
	
	public User() {
		super();
	}

	public User(String name, String address, Boolean adminStatus) {
		super();
		this.name = name;
		this.address = address;
		this.adminstatus = adminStatus;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Boolean getAdminStatus() {
		return adminstatus;
	}

	public void setAdminStatus(Boolean adminStatus) {
		this.adminstatus = adminStatus;
	}

	@Override
	public String toString() {
		return "User [Id=" + Id + ", name=" + name + ", address=" + address + ", adminStatus=" + adminstatus + "]";
	}
}
