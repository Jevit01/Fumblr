DROP DATABASE IF EXISTS fumblr;
CREATE DATABASE fumblr;

\c fumblr;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  profilePic VARCHAR NOT NULL
);

INSERT INTO users (name, email, password, profilePic)
VALUES ('Corg', 'Cminus@puppers.com', 'pawsword', 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'), ('Link', 'Zeldasman@hercule.gov', 'linky123', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Wakerlink.jpg/170px-Wakerlink.jpg');
