BEGIN;

    DROP TABLE IF EXISTS users,address , bill , provider ,type 
    cascade;


DROP EXTENSION
IF EXISTS "uuid-ossp"
    cascade;

-- Add Jerusalem Time Zone
set TIMEZONE
='Asia/Jerusalem';

-- create extension to user uuid_generate_v4 ()
-- https://www.postgresqltutorial.com/postgresql-uuid/

CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";

--------------------------------------------------
CREATE TYPE providerType AS ENUM ('Electricity', 'Water', 'Internet', 'Communication');

CREATE TABLE address
(
    id SERIAL PRIMARY KEY NOT NULL,
    gid uuid DEFAULT uuid_generate_v4 (),
    city VARCHAR(50) NOT NULL,
    town VARCHAR(50) NOT NULL
);

CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    gid uuid DEFAULT uuid_generate_v4 (),
    --gid uuid NOT NULL DEFAULT uuid_generate_v4 (),
    display_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    personal_status VARCHAR(100) NOT NULL,
    number_of_Individuals INTEGER NOT NULL,
    address_id INTEGER NOT NULL,
    FOREIGN KEY (address_id) REFERENCES address (id),
    number_of_devices INTEGER NOT NULL,
    password TEXT NOT NULL,
    email_active boolean,
    reset_password_code VARCHAR(100) 
);

CREATE TABLE provider (
 id SERIAL PRIMARY KEY NOT NULL,
 gid uuid DEFAULT uuid_generate_v4 (),
 Name VARCHAR(100) NOT NULL , 
 type providerType,
 address VARCHAR(100) NOT NULL , 
 email VARCHAR(100) NOT NULL,
 phone1 VARCHAR(30) ,
 phone2 VARCHAR(30) ,
 phone3 VARCHAR(30) ,
 po_Box INTEGER 
);

CREATE TABLE bill 
(
 id SERIAL PRIMARY KEY NOT NULL,
 gid uuid DEFAULT uuid_generate_v4 (),
 users_id INTEGER NOT NULL,
 FOREIGN KEY (users_id) REFERENCES users (id),
 provider_id INTEGER NOT NULL,
 FOREIGN KEY (provider_id) REFERENCES provider(id), 
  total_amount FLOAT NOT NULL,
  bill_DATE TIMESTAMP , 
  due_DATE TIMESTAMP , 
  start_DATE TIMESTAMP ,
  end_DATE  TIMESTAMP,
  bill_Number INTEGER NOT NULL
  );

INSERT INTO address (city, town) VALUES 
( 'Hebron', 'Halhul') ,
('Hebron', 'Dura') , 
( 'Hebron', 'Alshyoukh') , 
( 'Bethlehem', 'Karkafeh'), 
('Bethlehem', 'Doha');

INSERT INTO users ( display_name, email, password, phone, personal_status, number_of_individuals, address_id, number_of_devices, email_active, reset_password_code) 
VALUES 
('Hanan', 'hawawdeh95@gmail.com','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', 0500000000, 'single', 8, 2, 10,  true, null),
('Banan', 'bananohaj7@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', 0500000000, 'married',  3, 1, 7, true,  null),
( 'Kholoud', 'kholoud1996k@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', 0500000000, 'single',  5, 5, 12, true,  null),
( 'Duaa', 'duaa.halayqa@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', 0500000000, 'single',  9, 3, 15,  true,  null),
( 'Yakoub', 'yakoob.hammouri@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', 0500000000, 'single',  8, 1, 14,  true, null);

INSERT INTO provider ( Name , type , address , email , phone1 , phone2, phone3, po_Box) 
VALUES
('Hebron electric power', 'Electricity' , 'Hebron' , 'info@hebo-pal.com', '022292818', '0598144445' ,'022292821' , 818),
('Hebron Municipality' , 'Water' ,'Hebron' ,'pr@hebron-city.ps','022228121' ,'022228293' ,null,  6 ),
('Hadara' , 'Internet' , 'Hebron', 'wecare@hadara.ps','1700100100', '1700100101' , 0 , null),
('Bethlehem electric power' ,'Electricity' ,  'Bethlehem' , 'info@jdeco.net' ,  '2744260' ,'2760810' , '2770905' , null ),
('Bethlehem Municipality' , 'Water', ' Bethlehem', 'info@bethlehem-city.org','022741322' ,'1700660660' ,'022741327', 48);

INSERT INTO bill(users_id, provider_id, total_amount, bill_DATE, due_DATE, start_DATE, end_DATE , bill_Number) 
VALUES
(1 , 1 , 255 , '2020-05-19' , '2020-05-22' , '2020-05-23' , '2020-05-25' ,  306) ,
(2 , 2 , 398.5 ,'2020-03-7' ,'2020-03-8', '2020-03-10', '2020-04-15', 507 ), 
(3, 3 , 255 , '2020-02-8' , ' 2020-02-17'   , '2020-02-20' , '2020-02-25' , 306) ,
(4 , 4 , 574 , '2020-04-20', '2020-04-25','2020-04-28','2020-04-30' , 208 ); 

COMMIT;
