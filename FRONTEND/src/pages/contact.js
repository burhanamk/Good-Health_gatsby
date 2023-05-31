import React from "react";
import Layout from "../components/layout";
import "../styles/contact-module.css"

export default function Contact() {
    return (
        <Layout>

            <div className="contact_frame">
                <div className="contact_module">
                    <div className="contact">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="main-heading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="sub-heading">
                        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                    </div>

                    <div className="form">
                        <form>
                            <input type="text" name="First Name" placeholder="First Name" required="true"/>
                            <input type="text" name="Last Name" placeholder="Last Name" required="true"/>
                            <input type="text" name="Email" placeholder="Email" required="true"/>
                            <input type="text" name="Subject" placeholder="Subject" />
                            <textarea placeholder="Message" />

                            <button type="submit" className="contact-btn">SEND</button>
                        </form>

                        <div className="contact-details">

                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                <h4>Nagpur Maharashtra, 440002,</h4>
                                <h4>INDIA</h4>
                            </div>

                            <div className="mobile-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <h4>+91 1234567890</h4>
                            </div>

                            <div className="email-detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                                </svg>
                                <h4>test@test.com</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}