DROP DATABASE IF EXISTS "project3";

CREATE DATABASE project3;

USE project3;

CREATE TABLE state_parks
(
	id int NOT NULL AUTO_INCREMENT,
	site_name varchar (255) NOT NULL,
	address varchar (255) NOT NULL,
	lat DECIMAL (2,6) NOT NULL,
	long DECIMAL (2,6) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE national_parks
(
	id int NOT NULL AUTO_INCREMENT,
	site_name varchar (255) NOT NULL,
	address varchar (255) NOT NULL,
	lat DECIMAL (2,6) NOT NULL,
	long DECIMAL (2,6) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE beach
(
	id int NOT NULL AUTO_INCREMENT,
	site_name varchar (255) NOT NULL,
	lat DECIMAL (2,6) NOT NULL,
	long DECIMAL (2,6) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE weed
(
	id int NOT NULL AUTO_INCREMENT,
	city varchar (255) NOT NULL,
	address varchar (255) NOT NULL,
	phone VARCHAR (255) NOT NULL,
	lat DECIMAL (2,6) NOT NULL,
	long DECIMAL (2,6) NOT NULL,
	PRIMARY KEY (id)
);

