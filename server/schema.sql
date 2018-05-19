CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer primary key auto_increment,
  userName VARCHAR(50) not null
);

CREATE TABLE rooms (
  id integer primary key auto_increment,
  roomName VARCHAR(50) not null
);

CREATE TABLE messages (
  id integer primary key auto_increment,
  userId integer,
  roomId integer,
  messageText VARCHAR(300) not null,
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(roomId) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

