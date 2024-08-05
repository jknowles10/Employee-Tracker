INSERT INTO departments (id, name)
VALUES 
(01, 'Human Resources'), 
(02, 'Accounting'), 
(03, 'Marketing'), 
(04, 'Sales'), 
(05, 'IT');
(06, 'Administration');

INSERT INTO role (id, title, salary, department_id)
VALUES
(10, 'CEO', 700000, 06),
(11, 'HR Manager', 200000, 01), 
(12, 'Accounting Manager', 250000, 02),
(13, 'Marketing Manager', 300000, 03),
(14, 'Sales Manager', 350000, 04),
(15, 'IT Manager', 275000, 05),
(16, 'HR Associate', 65000, 01),
(17, 'Accountant', 80000, 02),
(18, 'Marketing Executive', 65000, 03),
(19, 'Sales Representative', 70000, 04),
(20, 'IT Specialist', 80000, 05), 
(21, 'Administrative Assistant', 45000, 06);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(30, 'Luke', 'Cannon', 10, null),
(31, 'Brenda', 'Sewell', 11, 22),
(32, 'Jason', 'Taylor', 12, 22),
(33, 'David', 'Smith', 13, 22),
(34, 'Samantha', 'Johnson', 14, 22), 
(35, 'Jessica', 'Williams', 15, 22), 
(36, 'Michael', 'Thompson', 16, 23),
(37, 'Emily', 'Jackson', 17, 24),
(38, 'Daniel', 'White', 18, 25),
(39, 'Robert', 'Brown', 19, 26),
(40, 'Christopher', 'Davis', 20, 27),
(41, 'Anna', 'Miller', 21, 22);
