package com.example.demo;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="ITEMS")
public class Items {
	
	@Id
	int phoneNum;
	
	@Column(name="NAME",nullable=false)
	String name;
	
	
	public Items() {
		super();
	}
	public Items(String name, int phoneNum ) {
		super();
		this.name = name;
		this.phoneNum = phoneNum;
	}
	public int getPhoneNum() {
		return phoneNum;
	}
	public String getName() {
		return name;
	}


	@Override
	public String toString() {
		return "items [name=" + name + ", phoneNum=" + phoneNum + "]";
	}
	
}
