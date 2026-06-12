# College_Management_System
🏛️ Advanced College Management System
A robust, enterprise-grade Database Management System (DBMS) mini-project built utilizing MySQL, Python, and Streamlit. The application provides a highly modular, interactive dashboard for administrators, faculty, and students to manage academic profiles, course registrations, department allocations, timetables, and performance tracking.
This project showcases the practical deployment of relational database architectures, implementing multi-table joins, subqueries, database automation via triggers, and procedural transactional integrity through stored procedures—all wrapped in a clean, modern web application interface.

🚀 Features

👤 User Profile Management
Role-Based Separation: Distinct dashboards and operational permissions for Administrators, Faculty, and Students.
Student Onboarding: Automated student registration generating unique, structured institutional identification numbers.
Faculty Directory: Comprehensive tracking of professor profiles, contact information, and specific departmental tenures.

📚 Course & Curriculum Control
Dynamic Cataloging: Easily inject, modify, and assign academic courses to corresponding departments.
Prerequisite Mapping: Relational enforcement of course requirements and specific semester credit limits.

📅 Class Scheduling & Enrolment
Real-time Enrollment: Seamless student course registration while strictly validating classroom and section capacities.
Timetable Generation: Interactive schedule mapping connecting subjects, assigned professors, physical classrooms, and time blocks.

📊 Performance & Attendance Analytics
Automated Ledger: Core database tracking for semester-wise marks, generating immediate GPA and CGPA calculations.
Attendance Matrix: Real-time logging of student classroom attendance with automated flags for low-percentage thresholds.

🗄️ Database Relational Schema
Based on the system's Entity-Relationship architecture, the project maps perfectly to five core normalized tables:
1. DEPARTMENT Table
department_id (INT, Primary Key): Unique identifier for each academic department.
dept_name (VARCHAR, Not Null): Official name of the department (e.g., Computer Science).
office_location (VARCHAR): Physical campus building or block location.
2. FACULTY Table
faculty_id (INT, Primary Key): Unique identification number for instructors.
name (VARCHAR, Not Null): Full name of the faculty member.
email (VARCHAR, Unique): Institutional communication address.
department_id (INT, Foreign Key): Link establishing the instructor's primary home department.
3. COURSE Table
course_id (INT, Primary Key): Alpha-numeric or numeric unique structural code.
title (VARCHAR, Not Null): Structural name of the academic subject.
credits (INT): Academic weight/credits assigned to the course.
department_id (INT, Foreign Key): Link referencing the hosting department.
4. STUDENT Table
student_id (INT, Primary Key): Unique institutional roll/registration number.
name (VARCHAR, Not Null): Full name of the enrolled student.
email (VARCHAR, Unique): Primary student contact address.
department_id (INT, Foreign Key): Link identifying the student's declared major/branch.
5. ENROLLMENT Table
enrollment_id (INT, Primary Key): Unique transaction log tracking number.
student_id (INT, Foreign Key): Link connecting the specific student.
course_id (INT, Foreign Key): Link connecting the specific registered course.
semester (VARCHAR): Active academic term identifier.
grade (VARCHAR): Final earned grade notation (e.g., A, B, F) default-set to pending.

🛠️ DBMS Concepts Implemented
Entity Relationship (ER) Modeling: Structured using explicit foreign keys to guarantee transactional integrity between students, faculty, and departments.
Referential Integrity Constraints: Strict execution of cascading operations to prevent orphaned student or course records upon system updates.
Database Automation: High-overhead operations like updating section capacities upon student enrollment or flag notifications for failing grades are pushed directly onto fast database engine TRIGGERS.
Procedural Transactions: Complex multi-table student grade calculations and GPA rollups are executed efficiently via native database STORED PROCEDURES.

🧠 Learning Outcomes
Data Consistency & Integrity: Mastery over database synchronization strategies, ensuring academic records remain consistent even during peak heavy-load course registration windows.
Engine-Level Optimization: Offloaded heavy computational logic (GPA auditing, enrollment caps) directly down to MySQL triggers, reducing overhead processing delays within the Python application threads.
Decoupled Architecture: Designed a highly scalable split layer between the persistent SQL data structures and the real-time Streamlit presentation user interface

📁 Project Structure

College_Management_System/

│

├── README.md        # System documentation & project overview

├── index.html       # Main user interface layout (Login, Admin, Faculty, & Student views)

├── app.js           # Client-side JavaScript (Handles button clicks & browser UI logic)

├── server.js        # Node.js backend server (Connects to MySQL & runs database queries)

├── package.json     # Project configuration configuration and backend dependencies

└── package-lock.json# Locked version history of installed npm modules
