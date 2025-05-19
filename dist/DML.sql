USE hopi_hari_db;

INSERT INTO users (first_name, last_name, email, password, birth_date, phone)
VALUES  ("lo", "miranda", "lo@gmail.com", "$2b$10$x3TJGwflhcDiiiNYIsdzYOCty4B44tDi2yX3unm4vQtYFUCotp0RO", "2025-05-09", "14887956022"),
		("manu", "pereira", "manu@email.com", "$2b$10$/JZfGZMxAzuOhHupOxm1o.KGvVId4lmLeNDK0cvSXQ.fY04OBv4s6", "2025-02-03", "14995846033"),
		("ju", "wada", "wada@gmail.com", "$2b$10$87ctfPqjQMYIVfWzdW1oWO4RI3H0LvAW/DyINjnYejzLiHIXFDpo6", "2025-10-11", "14997586022");

INSERT INTO rides (name, waiting_time, status, area)
VALUES  ("Trem Fantasma", 5, "aberto", "1"),
        ("Montanha Russa", 2, "aberto", "2"),
        ("Roda Gigante", 3, "aberto", "3");

INSERT INTO `lines` (id_ride, id_user)
VALUES  (8, 10),
        (8, 11),
        (9, 11),
        (9, 12),
        (10, 10),
        (10, 12);

SELECT users.first_name        AS name,
       rides.`name`            AS brinquedo,
       `lines`.*
FROM   `lines`
INNER JOIN   users     ON users.id = `lines`.id_user
INNER JOIN   rides     ON rides.id = `lines`.id_ride
WHERE  rides.area = '1';
