# API Endpoints

## HTML API

### Root

- `GET /`
  - loads React web app

## JSON API

### Users

- `GET /api/users`
  - Users index/search
- `POST /api/users`
  - Creates new user
- `GET /api/users/:userId`
  - Fetches single existing user blog
- `PATCH /api/users/:userId`
  - Allows user to update their blog
- `GET /api/users/likes`
  - Get all user likes
- `POST /api/users/likes`
  - Like a post
- `GET /api/users/following`
  - Get blogs users are following
- `POST /api/users/follow`
  - Follow a blog
- `POST /api/users/unfollow`
  - Unfollow a blog

### Posts

- `GET /api/posts`
  - Post index/search
- `POST /api/posts`
  - Create new post
  - Reblog a post
- `GET /api/posts/:postsId`
  - Fetches single posts
- `PATCH /api/posts/:postsId`
  - Allows user to edit a single post
- `DELETE /api/posts/:postsId`
  - Delete a single post
