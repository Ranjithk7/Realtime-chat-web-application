const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({
   origin: ["https://deploy-mern-lwhq.vercel.app"],
   methods: ["POST", "GET"],
   credentials:true
  }));

app.get('/', (req, res) => {
  res.json("Hello!!")
})

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.post(
        'https://api.chatengine.io/users/',
        {username:username, secret:username, first_name:username},
        { headers: {"Private-Key": "b83f5d97-0213-4521-b4d7-2a1f2bc9ffdc" } }
    );
    return res.status(r.status).json(r.data);
  } catch(e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
