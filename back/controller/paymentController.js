import razorpay from "../lib/razorpay.js";

export const createOrder = async (req, res) => {
  const { amount, plan } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees → paise
      currency: "INR",
      receipt: `receipt_${plan}_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Order creation failed" });
  }
};
