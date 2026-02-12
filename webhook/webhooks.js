import express from "express";

const router = express.Router();

router.post("/test", (req,res)=>{
    console.log("Github Webhook Received");
    console.log(req.body);

    res.status(200).json({received: true});
    res.json({received: true});
})

export default router;