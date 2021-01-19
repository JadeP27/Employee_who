use employees;

INSERT INTO department
    (name)
VALUES
    ('Design'),
    ('Production'),
    ('Marketing'),
    ('Administration');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Design Lead', 100000, 1),
    ('Designer', 80000, 1),
    ('Creative Director', 150000, 2,
    ('Model', 60000, 2),
    ('Marketing Director', 120000, 3),
    ('Marketing Lead', 90000, 3),
    ('Brand Ambassador', 75000, 3),
    ('Manager', 90000, 4),
    ('Administrative Assistant', 60000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alexander', 'McQueen', 1, NULL),
    ('Christian', 'Louboutin', 2, 1),
    ('Christian', 'Dior', 3, NULL),
    ('Ralph', 'Lauren', 4, 2),
    ('Robin', 'Fenty', 5, 3),
    ('Vivian', 'Westwood', 6, NULL),
    ('Louis', 'Vuitton', 7, NULL),
    ('Tom', 'Ford', 8, 4);