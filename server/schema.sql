CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer primary key auto_increment,
  username VARCHAR(50) not null
);

CREATE TABLE rooms (
  id integer primary key auto_increment,
  roomname VARCHAR(50) not null
);

CREATE TABLE messages (
  id integer primary key auto_increment,
  userid integer,
  roomid integer,
  messagetext VARCHAR(300) not null,
  FOREIGN KEY(userid) REFERENCES users(id),
  FOREIGN KEY(roomid) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

