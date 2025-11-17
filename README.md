# HobbyHub Forum - Web Development Final Project

**Submitted by:** Surya Varun Kolachana  

**Project Description:**  
HobbyHub Forum is a modern community platform where users can share and discuss their hobbies through posts, comments, and upvotes.

**Time Spent:** 8 hours

---

## 🌐 Live Demo
[View Live Site](https://your-hobbyhub-site.netlify.app)

---

## ✅ Required Features

The following **required** functionality has been implemented:

- **Create Posts**
  - Users can create posts with a title (required).
  - Optional fields include:
    - Additional textual content
    - Image via external URL

- **Home Feed**
  - Displays all previously created posts.
  - Each post shows:
    - Creation time
    - Title
    - Upvotes count
  - Clicking a post navigates to its detailed page.

- **Post Viewing & Interaction**
  - Posts can be sorted by:
    - Creation time
    - Upvotes count
  - Posts can be searched by title.
  - On the post detail page, users can:
    - View content, images, and comments.
    - Add comments.
    - Upvote posts (multiple upvotes allowed per user).

- **Post Management**
  - Users can edit or delete their own posts from the post detail page.

---

## ✨ Optional Features

The following **optional** features are partially implemented or planned:

- [ ] Pseudo-authentication
- [ ] Reposting existing posts
- [ ] Interface customization
- [ ] Adding more post attributes
- [ ] Loading animations for data fetching

---

## ⚡ Additional Features

- Responsive design for mobile and desktop
- Local storage persistence for posts and comments
- Real-time updates on post interactions
- Modern UI/UX design

---

## 🎥 Video Walkthrough

Watch the implemented user stories in action:  
[Video Walkthrough](https://go.screenpal.com/watch/cTXbDvnqnPC)

---

## 🛠 Technologies Used

- **React** - Frontend framework  
- **React Router DOM** - Client-side routing  
- **CSS3** - Styling and responsive design  
- **Local Storage** - Data persistence  
- **Netlify** - Deployment platform  

---

## 💻 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/hobbyhub.git
cd hobbyhub

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build


🚀 Usage


Browse Posts: View all community posts on the home feed


Create Posts: Share hobbies with titles, content, and images


Interact: Upvote posts and leave comments


Search & Sort: Find content quickly


Manage: Edit or delete your own posts


🗂 Project Structure
hobbyhub/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── PostCard.js
│   │   └── Comment.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── CreatePost.js
│   │   └── PostDetail.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json


📦 Deployment


Build project: npm run build


Deploy the build folder to Netlify or connect your GitHub repo for automatic deployments.



📝 Notes
Challenges included state management across components and implementing responsive design. These were solved using centralized state management and CSS Grid/Flexbox.

📄 License
Copyright 2025 Surya Varun Kolachana

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


✅ This is now **entirely in one Markdown code block**, ready to paste into your README file if you want the file to **display as code** instead of formatted Markdown.  

If you want, I can also make a **fully GitHub-ready version with badges and emojis that still stays inside a Markdown code block**, which looks extra professional. Do you want me to do that?
