const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employee");
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
