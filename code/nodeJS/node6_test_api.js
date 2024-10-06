// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();

const port = process.env.PORT || 3000;

// Define API
app.get("/", (req, res) => {
  res.send("Hello, Spatial Database!");
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define API
app.get("/", (req, res) => {
    res.send("Hello, World!"); 
  });
  app.get("/test", (req,res)=>{
      res.send('Test my node API'); 
  });

app.get("/inputword/:myword", (req, res) => {
    const inputword = req.params.myword;
    const result = "good job!, your word is    " + inputword;
    res.send(result);
  });

app.get("/grade/:score", (req, res) => {
    const score = req.params.score; 
    let grade = ""; 
    if (score >= 80) { 
      grade = "A"; 
    } else if (score >= 70 && score < 80) { 
      grade = "B"; 
    } else if (score >= 60 && score < 70) { 
      grade = "C"; 
    } else if (score >= 50 && score < 60) {
      grade = "D";  
    } else { 
      grade = "F"; 
    }
    res.send("คุณได้เกรด " + grade);
  });


