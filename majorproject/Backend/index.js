import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'

const app = express();


const stripe = new Stripe
('sk_test_51PglnE2KKjnI0TXHdrY1hkbTRtgXTlao1f3erzmz91Jrg2UjchKin9ktPht8rPLVBhpJffMei4jYwecM8dQPZS2L00zfFcWyRT');

app.use(cors());
app.use(express.json());

//http://localhost:1000/crearte-paymnet-intent
app.post("/create-payment-intent", async (req, res) => {
  const { totalAmount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount*100,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

//http://localhost:1000
app.get('/',(req,res)=>{
  res.send({msg:"Hello from server"})
})  


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "gauravnayi1994@gmail.com",
    pass: "yndp eonl pdsb wctb",
  },
});

app.post('/mail',async(req,res)=>{
  console.log(req.body)
  const {status,email,name,amount,payment}=req.body
  const info = await transporter.sendMail({
    from: '"Admin" <gauravnayi1994@gmail.com>', 
    to: email, 
    subject: `your order has been ${status}`,
    text: `Hello ${name}`,
    html :`<br>Hello ${name}<br/><b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
            Order status : ${status}<br/>
            Payment : ${payment}<br/>
            Thank You<br/>Admin`,
  });

  res.send({msg:"Mail sent"})

})

let PORT=1000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

