package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dao.EmployeeDao;
import com.employee.model.EmployeeData;

@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeDao employeeDao;
	
	@RequestMapping("/insert")
	public String insertRecord() {
		
		EmployeeData empObj = new EmployeeData();
		empObj.setId(101);
		empObj.setName("Ritesh");
		empObj.setDept("ITT");
		empObj.setSalary(30000);
		
		
		EmployeeData empObj1 = new EmployeeData();
		empObj1.setId(102);
		empObj1.setName("Chakri");
		empObj1.setDept("PS");
		empObj1.setSalary(40000);
		
		employeeDao.insertData(empObj);
		employeeDao.insertData(empObj1);
		
		return "Employee records inserted";
		
	}
	
	@RequestMapping ("/delete/{id}")
	public String deleteData(@PathVariable ("id") int id)
	{
		employeeDao.deleteRecord(id);
		return "Employee Record deleted successfully";
	}

	@RequestMapping("/update")
	public String updateRecord()
	{
		EmployeeData empObj = new EmployeeData();
		empObj.setId(102);
		empObj.setName("Chandu");
		empObj.setDept("EG");
		empObj.setSalary(50000);
		
		employeeDao.updateData(empObj);
		return "Record updated succesfully";
	}
	
	@RequestMapping ("/displayAll")
	public List<EmployeeData> displayData() {
		List<EmployeeData> empList = employeeDao.displayAll();
		return empList;
	}
	
	

}
