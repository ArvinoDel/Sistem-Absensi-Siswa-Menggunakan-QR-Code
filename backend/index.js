import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Scan QR Code
app.get("/scan", (req, res) => {
  const { barcode } = req.body;
  console.log(barcode);
  res.send("Scan sukses");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
