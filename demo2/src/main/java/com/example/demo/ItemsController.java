package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemsController {
	@Autowired
	ItemsRepository repo;
	
	
	@GetMapping("/items")
	public List<Items> getAllItems() {
		return (List<Items>) repo.findAll();
	}
	@CrossOrigin
	@PostMapping("/items/addItem")
	public String addItems(@RequestBody Items item ) {
		Items first = new Items(item.name,item.phoneNum);
		repo.save(first);
		return "success";
	}
	
//	@PutMapping("/items/{id}")
//	public ResponseEntity<Object> updateStudent(@RequestBody Student student, @PathVariable long id) {
//
//		Optional<Student> studentOptional = studentRepository.findById(id);
//
//		if (!studentOptional.isPresent())
//			return ResponseEntity.notFound().build();
//
//		student.setId(id);
//		
//		studentRepository.save(student);
//
//		return ResponseEntity.noContent().build();
//	}
	
	@GetMapping("/items/{id}")
	public Items getItem(@PathVariable int id) throws Exception {
		Optional<Items> item = repo.findById(id);
		if(!item.isPresent()) throw new Exception("item not exist");
		return item.get();
	}
	@CrossOrigin
	@DeleteMapping("/items/{id}")
	public String deleteStudent(@PathVariable int id) {
		repo.deleteById(id);
		return "succees";
	}
	@RequestMapping(value= "/items/**", method=RequestMethod.OPTIONS)
	public void corsHeaders(HttpServletResponse response) {
	    response.addHeader("Access-Control-Allow-Origin", "*");
	    response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	    response.addHeader("Access-Control-Allow-Headers", "origin, content-type, accept, x-requested-with");
	    response.addHeader("Access-Control-Max-Age", "3600");
	}
}
