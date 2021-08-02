const express = require('express');
const app = express();
const axios = require('axios');


//resolving CORS errors during development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('HTTP', 'ok');
    next();
});


// REST api Endpoint
app.use('/api/rates', (req, response) => {

    const { base, currency } = req.query;
    const exchangeApiURL = `https://api.exchangeratesapi.io/latest?base=${base}&symbol=${currency}`;

    newCurr = currency.split(",", 3);
    const [curr1, curr2, curr3] = newCurr;

    axios.get(exchangeApiURL).then((res) => {
        const data = res.data;

        response.send({
            base: data.base,
            date: data.date,
            rates: {
                [curr1]: res.data.rates[curr1],
                [curr2]: res.data.rates[curr2],
                [curr3]: res.data.rates[curr3]
            }
        });
    }).catch((err) => {
        console.warn(err);
    })
});

// 
app.use('/43/trivia', (req, response) => {
    let a = "43 is the total number of cars participating in a nascar race in the cup serires or nation wide series";
    response.send({ 1: a })
})

app.use("/test", (req, res) => {
    res.send("Test was conducted");
});

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    //Express will serve up the index.html file
    //like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesnt recongnize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// else {
// 	app.use( express.static('client/build') );

// 	app.get( '*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
// 	   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT);







/*
const stripe = require('stripe')('sk_test_51JFMDLLi2pL6nFQYZI3nfG47FD9JiMkxLE3jEdxZbrBVegEZL9eL4MXWyjpRoGQj3GhaCFyYa3Mv2T7nhKTYiBpQ00CTDfAzpE');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url)
});

app.listen(4242, () => console.log('Running on port 4242'));


..// CHECKOUT.HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Buy cool new product</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
    <script src="https://js.stripe.com/v3/"></script>
  </head>
  <body>
    <section>
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
    </section>
  </body>
</html>

..// SUCCESS.HTML

<html>
<head>
  <title>Thanks for your order!</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section>
    <p>
      We appreciate your business! If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>
  </section>
</body>
</html>

CANCEL.html
<html>
<head>
  <title>Checkout canceled</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section>
    <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
  </section>
</body>
</html>

*/