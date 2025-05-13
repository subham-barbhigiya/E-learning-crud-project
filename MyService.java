package com.course.my_service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.entity.MyCourse;
import com.course.my_repository.MyRepository;

@Service
public class MyService {
	
	@Autowired
	private MyRepository myrepository;
	
//	--------------------------------------------------
	public List<MyCourse> getAllcourse() {
		List<MyCourse> list= myrepository.findAll();
		return list;
	}
//	--------------------------------------------------
	public boolean addAllcourse(MyCourse mycourse) {
		boolean status=false;
		
		try {
			myrepository.save(mycourse);
			status=true;
			return status;
		}
		catch(Exception e) {
			e.printStackTrace();
			return status;
		}
	}
//	--------------------------------------------------
	public MyCourse getById(int id) {
		Optional<MyCourse> mycourse=myrepository.findById(id);
		if(mycourse.isPresent()) {
			return  mycourse.get();
		}
		else {
			return getById(0);
		}
	}
	
//	-------------------------------------------------------------
	public boolean deletecourse(int id) {
		boolean status=false;
		
		try {
			myrepository.deleteById(id);
			status=true;
		}
		catch(Exception e) {
			e.printStackTrace();
			status=false;
		}
		return status;
		
	}
}
