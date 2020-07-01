BEGIN;

    DROP TABLE IF EXISTS users,address
    cascade;


-- Add Jerusalem Time Zone
set TIMEZONE
='Asia/Jerusalem';

-- create extension to user uuid_generate_v4 ()
--https://www.postgresql.org/docs/9.4/uuid-ossp.html
-- CREATE EXTENSION
-- IF NOT EXISTS "uuid-ossp";


CREATE TABLE address
(
    id SERIAL PRIMARY KEY NOT NULL,
    gid uuid NOT NULL,
    city VARCHAR(50) NOT NULL,
    town VARCHAR(50) NOT NULL
);

CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    gid uuid NOT NULL,
    --gid uuid NOT NULL DEFAULT uuid_generate_v4 (),
    display_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    personal_status VARCHAR(100) NOT NULL,
    number_of_Individuals INTEGER NOT NULL,
    address_id INTEGER NOT NULL,
    FOREIGN KEY (address_id) REFERENCES address (id),
    numer_of_devices INTEGER NOT NULL,
    password TEXT NOT NULL,
    email_activate boolean,
    rest_password_code VARCHAR(100) NOT NULL
);




COMMIT;
