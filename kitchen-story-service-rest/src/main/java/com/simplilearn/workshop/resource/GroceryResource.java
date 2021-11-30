package com.simplilearn.workshop.resource;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.simplilearn.workshop.exception.GroceryNotFoundException;
import com.simplilearn.workshop.model.Grocery;
import com.simplilearn.workshop.repository.GroceryRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class GroceryResource {
	@Autowired
	private GroceryRepository groceryRepository;
	
	@GetMapping(path="/grocery")
	public List<Grocery> getGroceries() {
		return groceryRepository.findAll();
	}
	
	@GetMapping(path="/grocery/{theId}")
	public Grocery getGroceryById(Integer theId) {
		Grocery grocery = groceryRepository.findById(theId).get(); 
		return grocery;
	} 
	
	@PostMapping(path = "/grocery")
	public ResponseEntity<Grocery> createProduct(@RequestBody Grocery theGrocery) {
		Grocery savedGrocery = groceryRepository.save(theGrocery);
		URI location = ServletUriComponentsBuilder
				 .fromCurrentRequest()
				 .path("/{theId}")
				 .buildAndExpand(savedGrocery.getId())
				 .toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping(path="/grocery/{theId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void updateProduct(@PathVariable Integer theId, @RequestBody Grocery theGrocery) {
		try {
			Grocery savedGrocery = groceryRepository.findById(theId).get();
			savedGrocery.setName(theGrocery.getName());
			savedGrocery.setDescription(theGrocery.getDescription());
			savedGrocery.setPrice(theGrocery.getPrice());
			groceryRepository.save(savedGrocery);
		} catch (GroceryNotFoundException e) {
			throw new GroceryNotFoundException("id - " + theId);
		}  catch (NoSuchElementException e) {
			throw new GroceryNotFoundException("id - " + theId);
		}
	}
	
	@DeleteMapping(path="/grocery/{theId}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteProduct(@PathVariable Integer theId) {
		try {
		Grocery theGrocery = groceryRepository.findById(theId).get();
		} catch (GroceryNotFoundException e) {
			throw new GroceryNotFoundException("id -" + theId);
		}  catch (NoSuchElementException e) {
			throw new GroceryNotFoundException("id - " + theId);
		}
		groceryRepository.deleteById(theId);
	}

}
