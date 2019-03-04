DROP DATABASE IF EXISTS fumblr;
CREATE DATABASE fumblr;

\c fumblr;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS follow;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  profilePic VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) NOT NULL,
  image VARCHAR NOT NULL,
  body VARCHAR NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) NOT NULL,
  users_id INT REFERENCES users(id) NOT NULL
);

CREATE TABLE follow (
  id SERIAL PRIMARY KEY,
  follower_id INT REFERENCES users(id),
  following_id INT REFERENCES users(id)
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) NOT NULL,
  name VARCHAR NOT NULL
);

INSERT INTO users (name, email, password, profilePic)
VALUES ('Corg', 'Cminus@puppers.com', 'pawsword', 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'), ('Link', 'Zeldasman@hercule.gov', 'linky123', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Wakerlink.jpg/170px-Wakerlink.jpg'),('Tom', 'Tommyboy@jerry.com', 'catsrule', 'https://i.pinimg.com/236x/76/65/78/76657870f44b49e13d59cc2fdd52083f--classic-cartoon-characters-classic-cartoons.jpg'),('Jerry', 'Springer@fight.org', 'youdidwhat?', 'https://pixel.nymag.com/imgs/daily/vulture/2018/06/07/14-jerry-springer.w330.h330.jpg'),('Bob', 'Sponge@bikinibot.ocean', 'hahahahahah','https://pmcvariety.files.wordpress.com/2016/05/spongebob-nickelodeon.jpg?w=1000&h=563&crop=1'), ('Zues', 'thunder@light.com', 'lightningthunder', 'https://www.zeusbattlegrounds.com/assets/images/god_white.png');

INSERT INTO posts (users_id, image, body)
VALUES (1, 'https://nutrapooch.com/wp-content/uploads/2016/01/dog-bone-lightly-cooked.jpg', 'Got this as a treat today. How can I attack this thing!?'), (1,'https://www.gannett-cdn.com/-mm-/01ae3bf7aa392470e56465cecf06eeb69deb5886/c=0-2-1596-2130/local/-/media/2014/12/29/USATODAY/USATODAY/635554676633166855-mailman-122914.jpg?width=534&height=712&fit=crop', 'My enemy!! look at him smiling >:('), (2, 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Zelda_%28character%29.png/220px-Zelda_%28character%29.png', 'My badass princess.'),(2, 'https://img.fireden.net/v/image/1456/42/1456428987967.png', 'Just got a new sword. What ya think?'), (4, 'http://deadstate.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-15-at-4.25.36-PM-450x270.png', 'Back when I was on the news in 2016'), (4, 'http://www.love-springer-spaniels.com/images/a-young-jerry-springer-spaniel-21340906.jpg', 'Got a new puppy. Her name is Lily'),(3, 'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png', 'My best bud. I hate him'), (3, 'https://vignette.wikia.nocookie.net/tomandjerry/images/6/62/Toodles_Kitty.png/revision/latest?cb=20140621191019', 'THATS WIFEY!!'), (5, 'https://static.comicvine.com/uploads/square_small/11132/111325030/5880119-spongebob+squarepants+gary+the+snail.jpg', 'My buddy Gary!!'), (5, 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg', '20,000 likes and I will share the secret ingredient'), (6, 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/22/15/lightning.jpg?w968h681', 'Hahahaha I just sneezed'), (6, 'https://cdn-images-1.medium.com/max/1600/0*WUaTGWM2Fk58nT0Q.', 'My sons Hercules and Kratos... Such headaches');

INSERT INTO likes (posts_id, users_id)
VALUES (1, 4), (1, 5), (1, 3), (2, 6), (2, 2), (2, 4), (3, 1), (3, 6), (3, 4), (4, 6), (4, 1), (4, 5), (5, 2), (5, 6), (5, 5), (6, 1), (6, 5), (6, 3), (7, 1), (7, 5), (7, 2), (8, 6), (8, 1), (8, 5), (9, 1), (9, 2), (9, 4), (10, 1), (10, 6), (10, 3), (11, 2), (11, 4), (11, 5), (12, 5), (12, 1), (12, 4);

INSERT INTO tags (posts_id, name)
VALUES (1, '#hungry'), (2, '#myenemy'), (3, '#bae'), (4, '#weapons'), (5, '#politics'), (6, '#cute'), (7, '#frienemies'), (8, '#myheart'), (9, '#meow'), (10, '#fcrabs'), (11, '#oops'), (12, '#onedied');

INSERT INTO follow (follower_id, following_id)
VALUES (1,3), (1,5), (1,4), (2,6), (2,3), (2,1), (3,1), (3,6), (3,5), (4,2), (4,1), (4,6), (5,2), (5,6), (5,1), (6,2), (6,4), (6,3);
