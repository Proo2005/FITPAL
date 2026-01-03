import express from "express";
import Razorpay from "../lib/razorpay.js";

const router = express.Router();

// Create Razorpay order
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).json({ error: "Amount is required" });

  try {
    const order = await Razorpay.orders.create({
      amount, // in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });
    res.json(order);
  } catch (err) {
    console.error("Razorpay create order error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

export default router;
