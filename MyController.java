package com.course.my_controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.entity.MyCourse;
import com.course.my_service.MyService;

@RestController
public class MyController {
	@Autowired
	private MyService myservice;
//	-------------------------------------------------------
	@GetMapping("/getallcourse")
	public List<MyCourse> getAllcourse() {
		List<MyCourse> list=myservice.getAllcourse();
		return list;
	}
//	-------------------------------------------------------
	@PostMapping("/addrecord")
	public String addAllcourse(@RequestBody MyCourse mycourse) {
		System.out.println(mycourse.getCourseId()+" "+mycourse.getCourseTitle());
		boolean message=myservice.addAllcourse(mycourse); 
		if(message==true) {
			String success="Course Inserted Successfully";
			return success;
		}
		else {
			String faild="Course Not Inserted ";
			return faild;
		}
	}
//	-----------------------------------------------------------------
	
	@GetMapping("/getcourse/{id}")
	public MyCourse getAllcourse(@PathVariable int id) {
		return myservice.getById(id);
		
	}
	
//	------------------------------------------------------------------
	@DeleteMapping("/deletecourse/{id}")
	public String deletecourse(@PathVariable int id) {
		String message;
		boolean status=myservice.deletecourse(id);
		if(status==true) {
			message="Course Deleted Successfilly";
		}
		else {
		 message="Internal Error ! Course Not Deleted Successfully";
		}
		return message ;
		
		
	}
	
	

}
