INSERT INTO users ( first_name, last_name, email, password, birth_date)
values 
		("emanuel", "pereira","manu@gmail.com","$2b$10$LUtxIFQcq/nOjhp5Q5P0iOW8Q9wCm0.9JyNyXOFkXz2xRF40tAokW", "2008-06-02"),
		("carlos", "santos", "carlos@gmail.com", "$2b$10$UCb9qEh/pr1J6lJmZMu6ueSNCJDSUneR18PQ.DnV0l4Mt59.aKwxq", "2008-05-04"),
		("julia", "wada", "julia@gmail.com", "$2b$10$0F8alDfxfV/AQNPRWA2EaOWTg50ViToHEY495jOFcfE786EoSpl22", "2008-04-15");
        
use hopi_hari_db;

INSERT INTO rides (name, waiting_time, status, area) VALUES
('Montanha Mágica', 35, 'Muito Movimentado', 'ÁREA 1'),
('Carrossel Encantado', 15, 'Normal', 'ÁREA 1'),
('Roda Gigante Celestial', 32, 'Normal', 'ÁREA 2');

use hopi_hari_db;

INSERT INTO `lines` (id_ride, id_user) values 
	(6, 9),
    (7, 9),
    (6, 10),
    (7, 10),
    (6, 11),
    (7, 11);
    
    


