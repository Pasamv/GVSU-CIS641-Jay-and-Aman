import React from "react";

function BottomInfo() {
    return (
        <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4", borderTop: "1px solid #ccc" }}>
            <h4>About Our Website</h4>
            <p>
                This website provides a vibrant space where users can post, search, and interact with recipes.
                Share your creations, explore diverse cuisines, and join a supportive community of food enthusiasts.
                Our platform encourages exploration, knowledge sharing, and interaction, making every visit exciting and engaging!
            </p>

            <h4>Contact Us</h4>
            <p>
                Email us at: 
                <a href="mailto:prajapam@mail.gvsu.edu" style={{ margin: "0 10px" }}>Aman Prajapati</a> |
                <a href="mailto:pasamv@mail.gvsu.edu" style={{ margin: "0 10px" }}>Venkata Jayanth Pasam</a>
            </p>
            <p>
                Visit our GitHub: 
                <a href="https://github.com/Amanrsp" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>Aman Prajapati</a> |
                <a href="https://github.com/Pasamv" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>Venkata Jayanth Pasam</a>
            </p>

            <p style={{ fontSize: "12px", color: "#777" }}>
                &copy; 2024 Food Enthusiasts' Community. All Rights Reserved.
            </p>
        </footer>
    );
}

export default BottomInfo;
