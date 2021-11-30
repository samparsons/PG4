package com.simplilearn.workshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.workshop.model.Grocery;

public interface GroceryRepository extends JpaRepository<Grocery,Integer>{

}
