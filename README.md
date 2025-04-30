# Library
This is Capstone Project of Library where we can get information of books such as Authorname, Description(for certain books) and Rating. 

# How to start server
There  are folowing steps
$ npm init
$ npm i
$ npm i express
$ npm i axios
$ npm i body-parser
$ npm i pg

Then 
$ nodemon index.js


# 🏨 Getting Book's info  – Full Stack App

A full-stack web application built with **Node.js**, **Express**, **PostgreSQL**, and **EJS**. The app displays a list of hotels near Kanha National Park with images, descriptions, and locations.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: PostgreSQL
- **Styling**: CSS (via `public/`)
- **Environment Variables**: `dotenv`

---

## 🚀 Features

- List books with descriptions, authors, and images
- Serve dynamic HTML using EJS
- Connect and query PostgreSQL
- MVC-style project structure

---
## Clone the repository

```bash
git clone https://github.com/your-username/Library.git
cd Library

## 🛠️ Setup Instructions
# 1. Install dependencies
bash
npm install

# 2. Set up the PostgreSQL database
Create the database:
bash
createdb your_database


# 3.Create the kanha_hotels table and seed data:

sql

-- Connect using psql
psql -d your_database

-- Paste the schema and insert data
CREATE TABLE Details (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
   rating number
);

-- Insert sample data (example):

INSERT INTO Details(1,'The Alchemist,PAULO COELHO,The Alchemist is a novel published in 1988 and written by Brazilian author Paulo Coelho. The novel was originally published in Portuguese but was later translated into other languages as it gained popularity worldwide. There is also a short story within American literature by the same name; however\, The Alchemist short story was written by American author H.P. Lovecraft and published in 1916. Although some readers may think of Coelhos The Alchemist as a short story\, it is considered a novel because of the length of the work—nearly 200 pages. The novel is a modern classic that spans the genres of literary fiction\, fantasy fiction\, and adventure fiction.3What is the book The Alchemist about? The main character is a Spanish shepherd boy named Santiago who travels from his home in Andalusia to the pyramids in Egypt in search of the treasure of his dreams and his own Personal Legend. Throughout his journey across the Saharan Desert\, Santiago meets several characters who help guide him and give him advice. Santiago eventually realizes that the treasure he seeks is not buried at the Egyptian pyramids but in his very own hometown in Spain\, where he then returns and finds the hidden treasure.','4/5'),
(2,'Ikigai', 'Hector Garcia', 'Francesc Miralles,"Iikigai: The Japanese Secret to a Long and Happy Life" explores the concept of ikigai\, which means "a reason for being." The book emphasizes finding purpose by balancing four elements: what you love\, what you are good at\, what the world needs\, and what you can be paid for. It highlights the lifestyles of centenarians in Okinawa\, focusing on community\, healthy living\, and mindfulness. By pursuing ikigai\, individuals can cultivate happiness\, longevity\, and fulfillment. The authors encourage readers to discover their own ikigai through self-reflection\, passion\, and embracing lifes simple joys.,4/5
(3, 'Rich Dad Poor Dad','Robert T Kiyosaki\,Sharon L. Lechter,Rich Dad Poor Dad by Robert Kiyosaki contrasts two father figures: his biological father (Poor Dad) and the father of his best friend (Rich Dad). Poor Dad emphasizes traditional education and job security\, promoting the idea of working for money. In contrast\, Rich Dad teaches financial literacy\, investing\, and the importance of assets over liabilities. The book advocates for entrepreneurial thinking\, financial independence\, and the mindset that wealth can be built through smart financial decisions rather than just earning a paycheck. Ultimately\, it encourages readers to rethink their views on money and financial success','5/5');


# Start server
bash
npm start



