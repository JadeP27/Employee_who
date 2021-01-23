use employee;

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
    ('Creative Director', 150000, 2),
    ('Model', 60000, 2),
    ('Marketing Director', 120000, 3),
    ('Marketing Lead', 90000, 3),
    ('Brand Ambassador', 75000, 3),
    ('Manager', 90000, 4),
    ('Administrative Assistant', 60000, 4);

INSERT INTO people
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alexander', 'McQueen', 1, 134),
    ('Christian', 'Louboutin', 3, NULL),
    ('Christian', 'Dior', 4, 135),
    ('Ralph', 'Lauren', 5, NULL),
    ('Saint', 'Laurent', 6, 136),
    ('Robin', 'Fenty', 7, NULL),
    ('Vivian', 'Westwood', 8, 137),
    ('Louis', 'Vuitton', 9, 138),
    ('Tom', 'Ford', 10, NULL);