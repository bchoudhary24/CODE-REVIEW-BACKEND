const express = require("express");
const cors = require("cors");
const aiRoutes = require("./aiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow only your final frontend domain
app.use(cors({
  origin: "https://code-review-frontend.pages.dev"
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/ai", aiRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


