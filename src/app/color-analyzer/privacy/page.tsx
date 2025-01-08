
const PrivacyPolicy = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="privacy-policy space-y-5">
                    <h1>Privacy Policy for Color Analyzer Chrome Extension</h1>

                    <p><strong>Effective Date: 26th September, 2024</strong></p>

                    <h2>1. Introduction</h2>
                    <p>Welcome to Color Analyzer. We respect your privacy and are committed to protecting it through our compliance with this policy.</p>

                    <h2>2. Information We Don&apos;t Collect</h2>
                    <p>Color Analyzer is designed to analyze colors on web pages without collecting or storing any personal information. We do not:</p>
                    <ul>
                        <li>Collect personal information such as names, email addresses, or IP addresses</li>
                        <li>Track your browsing history</li>
                        <li>Store any data about the websites you visit</li>
                    </ul>

                    <h2>3. How Color Analyzer Works</h2>
                    <p>Our extension operates entirely within your browser. When activated, it:</p>
                    <ul>
                        <li>Analyzes the colors present on the current web page</li>
                        <li>Displays color information within the extension popup</li>
                        <li>Allows you to interact with this information (e.g., copying color codes)</li>
                    </ul>
                    <p>All of these operations occur locally on your device and are not transmitted to any external servers.</p>

                    <h2>4. Data Storage</h2>
                    <p>Color Analyzer does not store any data outside of your browser&apos;s local storage. Any preferences or settings you may set within the extension are stored locally on your device and can be cleared by uninstalling the extension.</p>

                    <h2>5. Third-Party Access</h2>
                    <p>We do not share any information with third parties because we do not collect any data.</p>

                    <h2>6. Changes to Our Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top.</p>

                    <h2>7. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p>[Your Contact Email or Website]</p>

                    <h2>8. Consent</h2>
                    <p>By using Color Analyzer, you consent to our Privacy Policy.</p>
                </div>
            </div>
        </main>

    );
};

export default PrivacyPolicy;