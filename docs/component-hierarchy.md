# Component Hierarchy

**HomePage**

- Logo
- Search Bar
- Sign Up Button
- Scroll Bar
- Email Input
- Login Button
- Footer
- Site info

**SignUpPage**

- Logo
- Search Bar
- Scroll Bar
- Dialog Box
- Get Started Button
- Login Button
- Footer
- Site info

**GetStartedPage**

- Logo
- Search Bar
- Scroll Bar
- Dialog Box
- Form
- SignUp Button
- Footer
- Site info

**DashBoardPage**

- Logo
- Search Bar
- NavBar
- Profile Picture W/ Link To Blog
- Post Links
- Recommended Box
- Blog Posts From Followed Blogs
- Top Posts Box

**BlogPreviewPage**

- Link To Blog
- Follow/Unfollow Button
- Blog Header
- Users Profile Pictures
- Blog Posts

**UsersBlogPage**

- Blog name
- Follow/Unfollow Button
- Blog Posts
- Users Profile Picture
- Blog Description
- Blog Search Bar
- Footer

# Routes

| **Path**         | **Component**     |
| ---------------- | ----------------- |
| '/'              | 'Homepage'        |
| '/sign-up'       | 'SignUpPage'      |
| '/get-started'   | 'GetStartedPage'  |
| '/dashboard'     | 'DashBoardPage'   |
| '/users'         | 'BlogPreviewPage' |
| '/users/:userId' | 'UsersBlogPage'   |
