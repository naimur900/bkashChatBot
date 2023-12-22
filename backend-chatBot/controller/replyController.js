const reply = (req,res)=>{
    const {message} = req.body
    if(message === "Know about MIP"){
        res.json("Bkash MIP (Merchant Integration Portal) for checkout URL payment gateway integration is a technical platform that enables online merchants in Bangladesh to seamlessly integrate Bkash payment options into their websites or mobile apps. This integration allows customers to make secure payments directly from the merchant's checkout page using their Bkash mobile wallet, without having to leave the merchant's site.")
    }
    else if(message == "MIP integration guidelines"){
        res.json(`Imagine customers seamlessly paying for online purchases without leaving your website, all thanks to Bkash's Merchant Integration Portal (MIP). But to build this frictionless bridge, merchants need to follow specific guidelines.
        Security First: Buckle up with SSL encryption to shield sensitive data. PCI DSS compliance becomes your armor if you accept cards. Always seek customer consent before storing their information.API Handshake: Treat the provided API keys like precious gems. Use them to connect with Bkash securely. Send accurate order details and pricing like a well-rehearsed dance, ensuring transparency. Don't forget timely confirmation notifications, like a reassuring pat on the back after a successful transaction.Customer-Centric Checkout: Design a checkout page that feels like a warm hug, seamlessly integrating Bkash payment. Clear instructions and information become your guiding light. Be upfront about transaction fees, like a good friend sharing the bill fairly.Fraud Fighters: Be a vigilant guardian against unauthorized transactions. Establish a dispute resolution process, ready to tackle chargebacks like a seasoned warrior. Remember, cooperation with Bkash is key to vanquishing fraudulent activities.Beyond the Basics: Keep your business information on the MIP portal updated, like a well-maintained address book. Licenses and permits are your essential tools, and obeying online payment and data privacy laws is your code of conduct.Following these MIP guidelines is like building a sturdy bridge for a thriving e-commerce journey. Security forms the strong foundation, convenience paves the way, and customer focus acts as the guiding rails. Remember, these guidelines are not just rules, but stepping stones to building trust and a successful partnership with both Bkash and your customers. So, embrace the MIP guidelines and watch your online business flourish!`)
    }
    else if(message == "MIP user manual"){
        res.json("Please access the below link for MIP user manual")
    }
}

module.exports = {reply}