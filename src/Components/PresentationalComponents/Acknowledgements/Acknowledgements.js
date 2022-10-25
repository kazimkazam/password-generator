import React from "react";

class Acknowledgements extends React.Component {
    render() {
        return(
            <div className="generator">
                <h2>Acknowledgements</h2>
                <ul>
                    <li><a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://random-word-api.herokuapp.com/home" title="random word fetch">Random Word API</a></li>
                </ul>

                <br></br>
                <h2>Terms of Service</h2>
                <p>By accessing the present website you agree to the Terms of Service as outlined below.</p>
                <p>Passwords Generator may revise these conditions of use at any time by updating this posting.
This page should be visited periodically to review the conditions of use stated here, because they are binding on you.
If you do not accept the conditions of use, this website should not be used by you.</p>

                <h3>Use of Material</h3>
                <p>The contents of this website, such as text, images, graphics are protected by laws. Unauthorized use may violate copyright laws.</p>

                <h3>Accuracy of Information</h3>
                <p>The material may contain inaccuracies or typographical errors. All items listed for sale are considered an invitation to treat.
Passwords Generator makes no claims, warranties or liabilities of the use of the information on this website. Changes are periodically made to
this website and may be made at any time.</p>

                <h3>No Warranties</h3>
                <p>All the information on this website is published in good faith and for information purpose only.
Passwords Generator does not make any warranties about the completeness, reliability and accuracy of this information.
Any action you take upon the information you find on this website, is strictly at your own risk.
We will not be liable for any losses and/or damages in connection with the use of our website.</p>

                <h3>Links to Other Sites</h3>
                <p>We includes links to other third party websites. While we strive to provide only quality links to useful and ethical websites,
we have no control over the content and nature of these sites. Inclusion of web sites linked to via links in our site does not imply
approval or endorsement of the linked web site by us. Use of any such linked website is at the user's own risk.</p>

                <h3>Consent</h3>
                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                <h3>Update</h3>
                <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

                <br></br>

                <h2>Author</h2>
                <p>@kazimkazam</p>
                <p>Repository can be found by clicking on the link below.</p>
                <a href="https://github.com/kazimkazam/password-generator">kazimkazam/password-generator</a>
            </div>
        );
    };
};

export { Acknowledgements };