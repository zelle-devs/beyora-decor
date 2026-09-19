import React from 'react'
import './ReturnsAndShippingBeyvora.css'

const lastUpdated = 'September 19, 2026'

function ReturnsAndShippingBeyvora() {
  return (
    <div className="wrapper-ReturnsAndShippingBeyvora">
      <div className="container-ReturnsAndShippingBeyvora">

        {/* Header */}
        <header className="header-ReturnsAndShippingBeyvora">
          <p className="eyebrow-ReturnsAndShippingBeyvora">Beyvora Decor</p>
          <h1 className="title-ReturnsAndShippingBeyvora">Returns &amp; Shipping Policy</h1>
          <p className="updated-ReturnsAndShippingBeyvora">Last Updated: {lastUpdated}</p>
        </header>

        {/* Intro */}
        <section className="section-ReturnsAndShippingBeyvora">
          <p className="paragraph-ReturnsAndShippingBeyvora">
            At Beyvora Decor, we want you to love the way your home looks and feels. This policy
            explains how we ship your orders and how our returns and exchanges process works.
            Please read it carefully before placing an order. By purchasing from us, you agree
            to the terms outlined below.
          </p>
        </section>

        {/* 1. Order Processing */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">1. Order Processing Time</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Orders are typically processed and prepared for dispatch within 1–3 business days of
            purchase. Orders placed on weekends or public holidays will begin processing the next
            business day. During sale periods or promotions, processing may take slightly longer.
          </p>
        </section>

        {/* 2. Shipping Methods & Timeframes */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">2. Shipping Methods &amp; Delivery Times</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            We offer the following shipping options at checkout:
          </p>
          <ul className="list-ReturnsAndShippingBeyvora">
            <li className="listItem-ReturnsAndShippingBeyvora"><strong>Standard Shipping</strong> — 4–7 business days</li>
            <li className="listItem-ReturnsAndShippingBeyvora"><strong>Express Shipping</strong> — 2–3 business days</li>
            <li className="listItem-ReturnsAndShippingBeyvora"><strong>Large/Furniture Items</strong> — 7–14 business days due to freight handling</li>
          </ul>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Delivery times are estimates and are not guaranteed. Delays may occur due to weather,
            customs, carrier disruptions, or high order volume.
          </p>
        </section>

        {/* 3. Shipping Costs */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">3. Shipping Costs</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Shipping costs are calculated at checkout based on your delivery address, order
            weight, and selected shipping method. We occasionally offer free shipping promotions,
            which will be clearly noted on our website.
          </p>
        </section>

        {/* 4. Order Tracking */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">4. Order Tracking</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Once your order has shipped, you will receive a confirmation email with a tracking
            number and carrier details. Please allow 24–48 hours for tracking information to
            update after dispatch.
          </p>
        </section>

        {/* 5. International Shipping */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">5. International Shipping</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            For international orders, please note that customs duties, import taxes, and fees may
            apply and are the responsibility of the customer. Beyvora Decor is not responsible
            for delays caused by customs processing.
          </p>
        </section>

        {/* 6. Returns Eligibility */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">6. Returns Eligibility</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            We accept returns within 30 days of the delivery date, provided that:
          </p>
          <ul className="list-ReturnsAndShippingBeyvora">
            <li className="listItem-ReturnsAndShippingBeyvora">The item is unused, unassembled, and in its original condition</li>
            <li className="listItem-ReturnsAndShippingBeyvora">The item is in its original packaging with all tags and accessories included</li>
            <li className="listItem-ReturnsAndShippingBeyvora">You provide proof of purchase (order number or receipt)</li>
          </ul>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            The following items are <strong>not eligible</strong> for return: clearance/final sale
            items, custom or made-to-order pieces, candles or fragrance products once opened, and
            gift cards.
          </p>
        </section>

        {/* 7. How to Start a Return */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">7. How to Start a Return</h2>
          <ul className="list-ReturnsAndShippingBeyvora">
            <li className="listItem-ReturnsAndShippingBeyvora">Email us at support@beyvora.com with your order number and reason for return</li>
            <li className="listItem-ReturnsAndShippingBeyvora">Our team will confirm eligibility and send you a return authorization and shipping instructions</li>
            <li className="listItem-ReturnsAndShippingBeyvora">Pack the item securely in its original packaging</li>
            <li className="listItem-ReturnsAndShippingBeyvora">Ship the item using the instructions provided</li>
          </ul>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Returns sent without prior authorization may not be accepted.
          </p>
        </section>

        {/* 8. Return Shipping Costs */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">8. Return Shipping Costs</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Customers are responsible for return shipping costs unless the item arrived damaged,
            defective, or incorrect, in which case Beyvora Decor will cover the cost of return
            shipping.
          </p>
        </section>

        {/* 9. Refunds */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">9. Refunds</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Once we receive and inspect your returned item, we will notify you of the approval or
            rejection of your refund. Approved refunds are processed to your original payment
            method within 5–10 business days. Please note that original shipping charges are
            non-refundable, except in cases of our error.
          </p>
        </section>

        {/* 10. Exchanges */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">10. Exchanges</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            If you'd like a different size, color, or product, we recommend returning the
            original item for a refund and placing a new order to ensure fastest availability.
            Direct exchanges may be offered on a case-by-case basis — contact our support team to
            check availability.
          </p>
        </section>

        {/* 11. Damaged, Defective, or Incorrect Items */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">11. Damaged, Defective, or Incorrect Items</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            If your item arrives damaged, defective, or incorrect, please contact us within 48
            hours of delivery with photos of the item and packaging. We will arrange a free
            replacement, exchange, or full refund, depending on availability and your preference.
          </p>
        </section>

        {/* 12. Lost or Stolen Packages */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">12. Lost or Stolen Packages</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            Beyvora Decor is not responsible for packages lost or stolen after being marked as
            delivered by the carrier. If your tracking shows delivered but you have not received
            your order, please contact the carrier directly and notify our support team so we can
            assist you.
          </p>
        </section>

        {/* 13. Contact Us */}
        <section className="section-ReturnsAndShippingBeyvora">
          <h2 className="heading-ReturnsAndShippingBeyvora">13. Contact Us</h2>
          <p className="paragraph-ReturnsAndShippingBeyvora">
            For any questions about shipping, returns, or exchanges, please reach out to us at:
          </p>
          <div className="contactBox-ReturnsAndShippingBeyvora">
            <p className="contactItem-ReturnsAndShippingBeyvora">Beyvora Decor</p>
            <p className="contactItem-ReturnsAndShippingBeyvora">Email: support@beyvora.com</p>
            <p className="contactItem-ReturnsAndShippingBeyvora">Website: www.beyvora.com</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default ReturnsAndShippingBeyvora