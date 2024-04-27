
export const About= () => {
   
    const companyDetails = {
        name: "Sparkle",
        description: "Sparkle is a leading provider of innovative solutions for...",
        address: "123 Sparkle St, City, Country",
        phone: "+1234567890",
        email: "info@sparkle.com"
 }
    return (
        <div>
            <h2>About {companyDetails.name}</h2>
            <p>{companyDetails.description}</p>
            <p><strong>Address:</strong> {companyDetails.address}</p>
            <p><strong>Phone:</strong> {companyDetails.phone}</p>
            <p><strong>Email:</strong> {companyDetails.email}</p>
        </div>
    );
};


