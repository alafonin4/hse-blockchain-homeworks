// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract StudentContract {
    struct Student {
        string name;
        uint16 groupNumber;
        uint8 age;
        bool isForeignStudent;
    }

    uint256 public lastId;
    mapping (uint => Student) students;
    

    constructor(){
        lastId = 0;
    }

    event StudentAdded(uint256 Id, string name, uint16 groupNumber, uint8 age, bool isForeignStudent);
    event StudentRemoved(uint256 Id);

    function addStudent(string memory _name, uint16 _groupNumber, uint8 _age, bool _isForeignStudent) public {
        Student memory newStudent = Student(_name, _groupNumber, _age, _isForeignStudent);
        lastId++;
        students[lastId] = newStudent;
        emit StudentAdded(lastId, _name, _groupNumber, _age, _isForeignStudent);
    }

    function removeStudent(uint256 Id) public {
        require(lastId >= Id, "There is no student with this ID");

        delete students[Id];
        emit StudentRemoved(Id);
    }
}