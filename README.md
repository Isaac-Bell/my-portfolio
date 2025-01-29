# 🚀 My Portfolio

Welcome to my personal portfolio! This project showcases my skills, experience, and work in software development and project management. Built with modern web technologies, it delivers a smooth and engaging experience.

## 🌟 Features

- **Sleek & Interactive Design** – Clean UI with smooth transitions  
- **Matrix-Style Background** – Animated matrix effect for a futuristic aesthetic  
- **Career Timeline** – Interactive journey of my professional experience  
- **Skills & Projects** – Showcasing my expertise and past work  
- **Contact Form with PostgreSQL & Nodemailer** – Secure email handling & message storage  
- **Responsive & Fast** – Optimized for all screen sizes  

## 🛠 Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS, Framer Motion  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Email Handling:** Nodemailer with OAuth2 authentication  
- **Animations:** Framer Motion, CSS Scroll Snapping  

## 🚀 Getting Started

### Prerequisites  
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [PostgreSQL](https://www.postgresql.org/) (if using a local database)  
- [Git](https://git-scm.com/)  

### Installation  

```bash
# Clone the repository
git clone https://github.com/yourusername/my-portfolio.git

# Navigate to the project folder
cd my-portfolio

# Install dependencies
npm install


``` 

### Enviroment Variables
Create a .env.local file in the root of the project and add the following variables:

```bash 
DATABASE_URL=your_postgresql_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Running The Project 
```bash
# Start the PostgreSQL database (if running locally)
sudo service postgresql start

# Run database migrations (if needed)
npx prisma migrate dev --name init

# Start the development server
npm run dev

```

The site will now be running at http://localhost:3000.

📬 Contact
Feel free to connect with me via email or LinkedIn! 🚀

Built with ❤️ and passion for coding.