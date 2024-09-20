import express from "express"
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;
//Creating a Database
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "NameofyourDatabase",
    password: "YourDatabasepassword",
    port: 5433,
});
db.connect();



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", async (req, res) => {
    const bookname = req.body["bookname"];
    try {
        const response = await axios.get(`https://openlibrary.org/search.json?title=${bookname}`);
        
        const result = response.data;
        console.log(result);

        const respo = await db.query("SELECT * FROM Details  WHERE NameofBook = $1 ; ",
            [title]);

        res.render("index.ejs", {
            data: result,
            booksinfo: respo.rows
        });
    }
    catch (error) {
        console.error(error.message);
        res.render("index.ejs", { error: error.message });
    }
});

app.post("/", async (req, res) => {

    const bookname = req.body["bookname"];

    try {
        //Fetching the Data from API
        const response = await axios.get(`https://openlibrary.org/search.json?title=${bookname}`);
        const result = response.data;
        console.log(result);

        const title = result.docs[0].title_suggest;

        const coverid = result.docs[0].cover_i;

        const value = result.docs[0].cover_i;

        const author = result.docs[0].author_name;

        const respo = await db.query("SELECT * FROM Details WHERE NameofBook = $1; ",
            [title]);

        console.log(respo);


        res.render("index.ejs", {
            title: title,
            value: value,
            authorname: author,
            booksinfo: respo.rows//Passing Data to EJS 

        });
    }
    catch (error) {
        console.error("Failed to make request:", error.message);
    }
});



app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});
