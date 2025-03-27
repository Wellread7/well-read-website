import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="mb-6">This policy applies to all information collected when you use Well Read.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What We Collect</h2>
        <p className="mb-4">We collect only the information necessary to provide our services, communicate with you, and improve our application.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Usage Information</h2>
        <p className="mb-4">We collect anonymous, aggregated statistics about feature usage to enhance Well Read. We utilise Google Firebase for this data collection.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">AI Tools</h2>
        <p className="mb-4">When using our AI tools for text summarisation or question generation:</p>
        <ul className="list-disc ml-8 mb-6">
          <li className="mb-2">Your text is temporarily processed to deliver the requested functionality</li>
          <li className="mb-2">The text you submit is used solely to generate summaries or questions as requested</li>
          <li className="mb-2">We do not retain or store your text content</li>
          <li className="mb-2">Your submitted content is not used for AI model training</li>
        </ul>
        
        <p className="mb-6">We implement industry-standard best practices to protect data during transmission.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Local Storage</h2>
        <p className="mb-6">All content you upload, create, or save in the app is stored locally on your device. We do not upload or store your reading materials on our servers.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
        <p className="mb-6">We do not sell our users' information under any circumstances.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Consent</h2>
        <p className="mb-6">By using our application, you consent to this privacy policy.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <p className="mb-6">If you have questions regarding this Privacy Policy or would like to inquire about Well Read, please contact us at: Contact@well-read.io</p>
        
        <div className="mt-12 mb-8">
          <Link href="/" className="text-primary hover:text-primary-dark">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
} 