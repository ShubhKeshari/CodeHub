import React from "react";

export const Contact = () => {
    const contactDetails = {
        address: "123 Sparkle St, City, Country",
        phone: "+1234567890",
        email: "info@sparkle.com",
        website: "www.sparkle.com"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <div>
                <h3>Contact Details</h3>
                <p><strong>Address:</strong> {contactDetails.address}</p>
                <p><strong>Phone:</strong> {contactDetails.phone}</p>
                <p><strong>Email:</strong> {contactDetails.email}</p>
            </div>
            <div>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

