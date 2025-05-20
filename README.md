# GlobalNomad
<p align="center">
   <a href="https://globalnomad-t2.vercel.app/">
  <img src="https://raw.githubusercontent.com/T2-GlobalNomad/GlobalNomad/main/public/images/auth_logo.svg" width="30%" />
</p>

<br/>
<br/>

# 0. Getting Started

```bash
$ npm run dev
$ npm run build
$ npm run
```

<br/>
<br/>

# 1. Project Overview

- Project Name: GlobalNomad
- Project Duration: 2025.03.10 ~ 2025.04.17
- Poject Description: A service that allows users to join or host various hobby-based activities and events.

<br/>
<br/>

# 2. Team Members

| **Nam Giyeon** | **Park Junhwan** | **Lee Seunghwan** | **Yoon Hyerim** | **Jang Bobae(Kate)** | **Jung Hyeyeon** |
| :------------: | :--------------: | :----------------: | :-------------: | :------------: | :--------------: |
| <img src="https://avatars.githubusercontent.com/u/119279127?v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/185324327?v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/184628834?v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/71241364?s=64&v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/185046983?s=64&v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/185165581?v=4" width="150"> |
| **FE** | **FE** | **FE** | **FE** | **FE** | **FE** |
| [GitHub](https://github.com/Namgyeon) | [GitHub](https://github.com/park521) | [GitHub](https://github.com/mynameishwan) | [GitHub](https://github.com/y5037) | [GitHub](https://github.com/katej0320) | [GitHub](https://github.com/yeon0036) |
| Login / Logout | Experience Detail Page | Main Page | My Profile – Booked Experiences | My Profile – Hosted Experiences | My Profile – Personal Info / Bookings / Notifications |


<br/>
<br/>

# 3. My Contributions 

- **Built Multi-Step Activity Creation & Editing Flow**  
  Implemented a multi-step form for posting and editing activities using **Zustand** for persistent global state and **React Query** for seamless server communication.  
  Used `setQueryData` to optimistically update the UI without waiting for API responses, ensuring smooth user experience and data continuity across steps.

- **Implemented Infinite Scrolling with React Query**  
  Developed infinite scroll functionality using `useInfiniteQuery` and **IntersectionObserver**.  
  Pagination was managed with a `nextCursor` approach, and redundant requests were avoided using `hasNextPage`.  
  Scroll detection and fetch logic were encapsulated in a reusable custom hook for maintainability.

- **Image Upload & Preview System**  
  Built a real-time image upload and preview feature using **Zustand** and `URL.createObjectURL()`.  
  On edit, server-stored images were preloaded and normalized into `File` objects to ensure state consistency.  
  Addressed SSR issues with `next/image` by deferring rendering logic into `useEffect`, maintaining stability during hydration.

---

# Demo Videos
![1-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d52c11b1-5a62-4b5d-8f56-f6e6fd7d01ba)

![2-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e125d967-39ec-45cf-b47b-b2e87e284c61)

![4-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/925e0c57-689f-4017-a3ea-a6a83a94966f)

![5-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/de95bada-df4b-4794-bd1a-43dfd4b889b8)


---

# 4. Key Features

### 🔐 User Authentication

- **Sign Up**  
  - User information is stored in the database upon registration.

- **Login**  
  - Users can log in using their authentication credentials.

---

### 🌟 Experience Features

- **Experience List Page**  
  - View a list of experiences registered by users.  
  - Clicking on an experience navigates to its detail page.

- **Experience Detail Page**  
  - Check detailed information and reviews about the experience.  
  - Apply for the experience based on available date, time, and number of participants.

---

### 👤 My Profile

- **My Info**  
  - Edit and update your personal profile.

- **My Bookings**  
  - View your applied experiences.  
  - Check updates on application status (approved, completed, or rejected).

- **My Experiences**  
  - View experiences you have registered.  
  - Edit or delete registered experiences.

- **Experience Management**  
  - Manage your hosted experiences using a calendar view.  
  - Handle received applications per experience.



<br/>
<br/>

# 5. Technology Stack

- **Language**

|            |                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML5      | <img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100">                                       |
| CSS3       | <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="100">                                        |
| Javascript | <img src="https://github.com/user-attachments/assets/4a7d7074-8c71-48b4-8652-7431477669d1" alt="Javascript" width="100">                                  |
| Typescript | <img src="https://i.namu.wiki/i/EY559r31H-um8uTtptPIbCZoBGxsumSlwEH0T_rA6WmxQq1UwqyAf3cJQJXN7Fv5CoEz0kv5CBXzjkkPU_XWig.svg" alt="Typescript" width="100">                                  |

<br/>

- **Library & Framework**

|                  |                                                                                                                                |         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| React            | <img src="https://github.com/user-attachments/assets/e3b49dbb-981b-4804-acf9-012c854a2fd2" alt="React" width="100">            | 19.0.0  |
| Next.js          | <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="Next.js" width="100">  | 15.2.11 |
| Css_modules      | <img src="https://github.com/user-attachments/assets/c9b26078-5d79-40cc-b120-69d9b3882786" alt="StyledComponents" width="100"> | 6.7.1  |
| React-query | <img src="https://images.velog.io/images/hyunjoong/post/c534bf30-87d9-4f5d-a600-71e3a09e3b75/image.png" alt="React query" width="100"> | 5.67.3  |
| Vervel      | <img src="https://pipedream.com/s.v0/app_XaLh2x/logo/orig" alt="Vercel" width="100"> | 41.4.0  |

<br/>

- **Collaboration Tools**

|            |                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prittier | <img src="https://blog.kakaocdn.net/dn/cQhnse/btrE8TmCLle/slobwSEwi4nnMvfnGTQp4k/img.png" alt="Prittier" width="100"> |
| ESLint | <img src="https://blog.kakaocdn.net/dn/XR8jF/btrILfAQFWT/1jLpQkYysDaqHj8OzOlZFk/img.png" alt="ESLint" width="100"> |
| Storybook | <img src="https://blog.kakaocdn.net/dn/997rV/btsIkARkTej/PdtiBI82EnMzFQjgHkbuI1/img.png" alt="ESLint" width="100"> |
| JSDoc | <img src="https://velog.velcdn.com/images/zaixu/post/67d77203-8ee7-445e-bb95-4e2bed365c57/image.jpg" alt="JSDoc" width="100"> |

|         |                                                                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git     | <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="git" width="100">                                    |
| Notion  | <img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" alt="Notion" width="100">                                 |
| Figma   | <img src="https://i.namu.wiki/i/cAYebt8RyZGac7cdIFcRTJoLftLkBbmXEk0hqRx8V0koKfyQRfxleyZEvOQN_iQ6lrhf44NIA5btYUpb13P8jw.svg" alt="Figma" width="100"> |
| Discord | <img src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ" alt="Discord" width="100">       |

<br/>

# 6. Project Structure 

```plaintext
GLOBALNOMAD/
├── .github/                    # GitHub workflows and issue templates
├── .next/                      # Next.js build output
├── .storybook/                 # Storybook configuration
├── node_modules/               # Installed npm packages
├── public/                     # Static assets (images, fonts, etc.)
├── src/                        # Main source code
│   ├── api/                    # API request functions
│   ├── app/                    # Next.js App Router structure
│   │   ├── (auth)/             # Auth-related pages and features
│   │   ├── activities/         # Activity detail pages
│   │   │   └── [id]/           # Dynamic route for individual activity
│   │   ├── landingComponents/  # Components used on the landing page
│   │   ├── myactivities/       # My activities page
│   │   ├── mynotification/     # Notification page
│   │   ├── mypage/             # My profile page
│   │   ├── myreservation/      # Reservation page
│   │   └── postMyActivity/     # Activity posting page
│   ├── utils/                  # Common utility functions
│   ├── ClientLayout.tsx        # Layout for client-only components
│   ├── layout.tsx              # Root layout
│   ├── not-found.module.css    # Styles for 404 page
│   ├── not-found.tsx           # 404 Not Found component
│   └── page.tsx                # Main landing page
├── components/                 # Reusable UI components
├── constants/                  # App-wide constant values
├── hooks/                      # Custom React hooks
├── lib/                        # External libraries and helpers
├── stores/                     # Global state management (e.g., Zustand)
├── stories/                    # Storybook stories
├── styles/                     # Global styles
├── types/                      # TypeScript type definitions
├── utils/                      # Shared utility functions
├── .env.local                  # Local environment variables
├── .gitignore                  # Files to ignore in Git
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs           # ESLint configuration
├── next-env.d.ts               # Next.js types
├── next.config.ts              # Next.js configuration
├── package-lock.json           # Locked dependency versions
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # Project overview and setup
├── tsconfig.json               # TypeScript configuration
└── vitest.config.ts            # Vitest test configuration


```

<br/>
<br/>

# 7. Development Workflow
## Branch Strategy

- **`main` branch**
  - Always maintains code in a deployable state.
  - All production deployments are made from this branch.

- **`features` branch**
  - Final staging branch before merging into `main`.
  - Resolve conflicts and finalize testing here.

- **`[page]/[issue-number]/[task-details]`** (e.g., `signin/30/validation`)
  - Feature-level development branches.
  - All new features or bug fixes are implemented in these branches.

---

## Commit Message Convention

| Tag       | Description                                                              | Example                                      |
|-----------|--------------------------------------------------------------------------|----------------------------------------------|
| `feat`    | Add a new feature.                                                       | `feat: add login functionality`              |
| `fix`     | Fix a bug.                                                               | `fix: correct issue with user registration`  |
| `docs`    | Documentation-only changes (e.g., README, API docs).                     | `docs: update API documentation`             |
| `style`   | Code style changes without affecting functionality.                      | `style: format code to improve readability`  |
| `refactor`| Code refactoring without behavior change.                                | `refactor: simplify user validation logic`   |
| `test`    | Add or update tests.                                                     | `test: add tests for authentication module`  |
| `chore`   | Miscellaneous tasks like dependency updates or config changes.           | `chore: update dependencies`                 |
| `perf`    | Performance improvements.                                                | `perf: optimize database query performance`  |
| `build`   | Changes to build system or external dependencies.                        | `build: update webpack configuration`        |
| `revert`  | Revert a previous commit.                                                | `revert: revert commit abc123`               |
| `hotfix`  | Emergency bug fix.                                                       | `hotfix: fix critical login issue`           |


<br/>
<br/>
