package com.course.my_repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.course.entity.MyCourse;

@Repository
public interface MyRepository extends JpaRepository<MyCourse,Integer> {

}
