import { SectionWrapper } from "../hoc";

const Privacy = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-extrabold ">Privacy Policy for shawnyshogz.com</h1>
        <br />
        <h1 className="font-extrabold">Effective Date: 1st January 2024</h1>
        <p>
          Thank you for visiting shawnyshogz.com. This privacy policy outlines
          how we collect, use, disclose, and protect your personal information
          when you use our website.
        </p>
      </div>
      <h1 className="font-extrabold pt-5 ">Information We Collect:</h1>
      <div className="ml-5">
        <ol className="list-decimal list-outside">
          <li className="mt-5">
            <h3> Personal Information:</h3>
            <p>
              We may collect personal information, such as your name and email
              address, when you voluntarily provide it to us through forms on
              the website or when contacting us.
            </p>
          </li>

          <li className="mt-5">
            <h3> Usage Information:</h3>
            <p>
              We automatically collect certain information about your visit,
              such as your IP address, browser type, and operating system. This
              information is used to analyze trends, administer the site, and
              track user movements.
            </p>
          </li>
        </ol>
      </div>

      <h1 className="font-extrabold pt-5 ">How We Use Your Information:</h1>
      <div className="ml-5">
        <ol className="list-decimal list-outside">
          <li className="mt-5">
            <h3> To Provide and Improve Our Services:</h3>
            <p>
              We use the information collected to provide and personalize our
              services, respond to inquiries, and enhance user experience.
            </p>
          </li>

          <li className="mt-5">
            <h3> To Communicate with You:</h3>
            <p>
              We may use your email address to communicate with you about our
              services, respond to your inquiries, and provide updates.
            </p>
          </li>

          <li className="mt-5">
            <h3>Analytics and Aggregated Data:</h3>
            <p>
              We may use aggregated and anonymized data for statistical and
              analytical purposes to improve our website and services.
            </p>
          </li>
        </ol>
      </div>

      <h1 className="font-extrabold pt-5 ">Disclosure of Your Information:</h1>
      <div className="ml-5">
        <ol className="list-decimal list-outside">
          <li className="mt-5">
            <h3> Third-Party Service Providers:</h3>
            <p>
              We may share your information with third-party service providers
              who assist us in operating our website or conducting our business.
            </p>
          </li>

          <li className="mt-5">
            <h3> Legal Requirements:</h3>
            <p>
              We may disclose your information if required by law or in response
              to a valid legal request.
            </p>
          </li>
        </ol>
      </div>

      <h1 className="font-extrabold pt-5 ">Your Choices:</h1>
      <div className="ml-5">
        <ol className="list-decimal list-outside">
          <li className="mt-5">
            <h3> Opt-Out:</h3>
            <p>
              You may opt-out of receiving promotional communications from us by
              following the instructions provided in the emails or contacting us
              directly.
            </p>
          </li>

          <li className="mt-5">
            <h3>Cookies:</h3>
            <p>
              You can set your browser to refuse all or some browser cookies.
              However, this may affect your experience on our website.
            </p>
          </li>
        </ol>
      </div>

      <h1 className="font-extrabold pt-5 ">Security:</h1>
      <div className="ml-5">
        <p>
          We take reasonable measures to protect your information from loss,
          theft, misuse, and unauthorized access, disclosure, alteration, and
          destruction.
        </p>
      </div>

      <h1 className="font-extrabold pt-5 ">Changes to this Privacy Policy:</h1>
      <div className="ml-5">
        <p>
          We reserve the right to update or change this privacy policy at any
          time. The effective date will be revised accordingly.
        </p>
      </div>

      <h1 className="font-extrabold pt-5 ">Contact Information:</h1>
      <div className="ml-5">
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us at{" "}
          <a
            href="mailto:shawndales.ss@gmail.com"
            className="underline text-blue-400"
          >
            shawndales.ss@gmail.com.
          </a>
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Privacy, "privacy");
