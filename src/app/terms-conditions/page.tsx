import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions for Well Read</h1>
        <p className="text-gray-600 mb-8"><strong>Effective Date: March 26, 2025</strong></p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Thank you for choosing Well Read. These Terms and Conditions constitute a legally binding agreement between you ("User," "you," or "your") and the owner and operator of the Well Read mobile application ("Company," "we," "us," or "our") governing your use of the Well Read mobile application ("App").
        </p>
        <p className="mb-4">
          By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
        </p>
        <p className="mb-4">
          You must be at least 18 years of age to download, install, or use the App. By using the App, you represent and warrant that you are at least 18 years old. If you are under 18 years of age, you are not permitted to use the App under any circumstances.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Definitions</h2>
        <p className="mb-4">In these Terms and Conditions:</p>
        <p className="mb-4">"Well Read" or "App" refers to our speed reading mobile application available on iOS devices.</p>
        <p className="mb-4">"AI Tools" refers to the artificial intelligence features within the App that provide text summarization and question generation capabilities.</p>
        <p className="mb-4">"Content" means any text, documents, or other materials you upload, create, or access within the App.</p>
        <p className="mb-4">"Subscription" refers to the paid service that provides full access to all features of the App.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. App Usage and Content</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">2.1 Local Storage</h3>
        <p className="mb-4">All Content you upload or create in the App is stored locally on your device. We do not upload or store your reading materials on our servers except as temporarily needed to process AI Tool requests.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">2.2 AI Tools</h3>
        <p className="mb-4">Our App includes AI-powered tools that can summarize text and generate questions based on your Content. Please note:</p>
        <p className="mb-2">a) Limited Free Access: Each user receives one complimentary summary generation and one complimentary quiz generation. Additional usage requires a Subscription.</p>
        <p className="mb-2">b) Processing: When you use these AI Tools, your Content is temporarily transmitted to our third-party AI service provider for processing.</p>
        <p className="mb-2">c) Data Handling: We do not permanently store your Content after processing is complete.</p>
        <p className="mb-2">d) Usage Restrictions: You agree not to use the AI Tools for processing Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or violates intellectual property rights.</p>
        <p className="mb-2">e) No Guarantee: AI-generated summaries and questions are provided "as is" without warranties of accuracy, completeness, or fitness for any particular purpose.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Subscriptions and Payments</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">3.1 Subscription Model</h3>
        <p className="mb-4">Access to the full features of the App, including unlimited use of AI Tools, requires a paid Subscription. Subscription details, including pricing and billing frequency, will be clearly displayed before purchase.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">3.2 Automatic Renewal</h3>
        <p className="mb-4">Subscriptions automatically renew at the end of each billing period unless canceled by you through your Apple ID settings at least 24 hours before the end of the current period.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">3.3 Payment Processing</h3>
        <p className="mb-4">All payments are processed through the App Store. We do not directly collect or store your payment information.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">3.4 Price Changes</h3>
        <p className="mb-4">We reserve the right to modify Subscription prices. Any price changes will apply to the next billing cycle after notice has been provided to you.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">3.5 Refunds</h3>
        <p className="mb-4">All purchases are final and non-refundable except as required by applicable law. Refund requests must be submitted through the App Store according to Apple's refund policies.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">4.1 App Ownership</h3>
        <p className="mb-4">The App, including all designs, text, graphics, pictures, information, data, software, and other files, are the property of the Company or its licensors and are protected by international intellectual property laws.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">4.2 User Content</h3>
        <p className="mb-4">You retain all rights to the Content you create, upload, or process through the App. By using the AI Tools, you grant us a limited license to temporarily process your Content solely for the purpose of providing the requested service.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Prohibited Activities</h2>
        <p className="mb-4">You agree not to:</p>
        <p className="mb-2">a) Use the App for any illegal purpose or in violation of any local, state, national, or international law.</p>
        <p className="mb-2">b) Interfere with or disrupt the operation of the App or servers or networks connected to the App.</p>
        <p className="mb-2">c) Distribute viruses or any other technologies that may harm the App or the interests of other users.</p>
        <p className="mb-2">d) Attempt to gain unauthorized access to any portion of the App or any other systems or networks connected to the App.</p>
        <p className="mb-2">e) Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the App.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Disclaimer of Warranties</h2>
        <p className="mb-4 uppercase">THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        <p className="mb-4 uppercase">WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE APP OR SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
        <p className="mb-4 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE APP.</p>
        <p className="mb-4 uppercase">OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR THE APP DURING THE TERM OF YOUR SUBSCRIPTION.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Force Majeure</h2>
        <p className="mb-4">Neither party shall be liable for any failure or delay in performance under these Terms resulting from causes beyond the reasonable control of that party, including but not limited to acts of God, natural disasters, pandemic, epidemic, war, terrorism, riots, civil unrest, government actions, power failures, internet or telecommunications disruptions, or other events that could not have been prevented by reasonable precautions.</p>
        <p className="mb-4">If our ability to provide the App is affected by such events, we will make reasonable efforts to notify you and resume performance as soon as practicable. During such events, your obligations under these Terms will also be paused to the extent that they are affected by the force majeure event.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
        <p className="mb-4">You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Term and Termination</h2>
        <p className="mb-4">These Terms remain in full force and effect while you use the App. We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
        <p className="mb-4">Upon termination, your right to use the App will immediately cease.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
        <p className="mb-4">We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice in the App prior to the changes becoming effective. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
        <p className="mb-4">These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. You agree that any legal action or proceeding between you and the Company shall be brought exclusively in a court of competent jurisdiction.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">13. Dispute Resolution</h2>
        <p className="mb-4">Any dispute arising from or relating to these Terms or your use of the App shall first be resolved through good faith negotiations. If such efforts fail, either party may initiate legal proceedings in a court of competent jurisdiction.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">14. Severability</h2>
        <p className="mb-4">If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Information</h2>
        <p className="mb-4">If you have any questions about these Terms, please contact us at: Contact@well-read.io</p>
        
        <div className="mt-12 mb-8">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
} 