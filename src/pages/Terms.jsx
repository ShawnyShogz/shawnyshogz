import React from "react";
import { SectionWrapper } from "../hoc";

const Terms = () => {
  return (
    <>
      <h1 className="font-extrabold text-center">
        Terms and Conditions of Use for shawnyshogz.com
      </h1>
      <div className="pt-10">
        <ol className="list-decimal list-outside">
          <li className="mt-5">
            <h3> Acceptance of Terms</h3>
            <p>
              By accessing and using shawnyshogz.com (the "Website"), you agree
              to comply with and be bound by these terms and conditions of use.
              If you do not agree to these terms, please refrain from using the
              Website.
            </p>
          </li>

          <li className="mt-5">
            <h3> Intellectual Property</h3>
            <p>
              All content and materials on shawnyshogz.com, including but not
              limited to text, images, graphics, logos, and design elements, are
              the property of shawnyshogz.com or its content suppliers and are
              protected by copyright, trademark, and other intellectual property
              laws.
            </p>
          </li>

          <li className="mt-5">
            <h3> Use of Content</h3>
            <p>
              You may view, download, and print content from the Website for
              personal, non-commercial use only. Any other use, including
              reproduction, modification, distribution, or republication,
              without the prior written consent of shawnyshogz.com, is strictly
              prohibited.
            </p>
          </li>

          <li className="mt-5">
            <h3>User Conduct</h3>
            <p>
              When using shawnyshogz.com, you agree not to engage in any
              activities that may: <br /> a. Violate any applicable laws or
              regulations. <br />
              b. Infringe upon the rights of others. c. Interfere with the
              proper functioning of the Website.
            </p>
          </li>

          <li className="mt-5">
            <h3> Privacy Policy</h3>
            <p>
              Your use of shawnyshogz.com is also governed by our Privacy
              Policy, which can be found [here](link to privacy policy). By
              using the Website, you consent to the collection, use, and
              disclosure of information as described in the Privacy Policy.
            </p>
          </li>

          <li className="mt-5">
            <h3> Links to Third-Party Websites</h3>
            <p>
              Shawnyshogz.com may contain links to third-party websites. These
              links are provided for convenience only, and shawnyshogz.com does
              not endorse or assume any responsibility for the content or
              practices of linked websites.
            </p>
          </li>

          <li className="mt-5">
            <h3> Disclaimer of Warranties</h3>
            <p>
              Shawnyshogz.com is provided "as is" without any warranties,
              express or implied. We do not guarantee the accuracy,
              completeness, or reliability of the Website's content.
            </p>
          </li>

          <li className="mt-5">
            <h3> Limitation of Liability</h3>
            <p>
              Shawnyshogz.com and its affiliates shall not be liable for any
              direct, indirect, incidental, consequential, or punitive damages
              arising out of your use or inability to use the Website.
            </p>
          </li>

          <li className="mt-5">
            <h3> Changes to Terms and Conditions</h3>
            <p>
              Shawnyshogz.com reserves the right to update or modify these terms
              and conditions at any time without prior notice. Your continued
              use of the Website after any changes constitutes acceptance of the
              updated terms.
            </p>
          </li>

          <li className="mt-5">
            <h3> Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of The United Kingdom, without regard to
              its conflict of law principles.
            </p>
          </li>
        </ol>

        <p className="mt-10 text-center">
          If you have any questions or concerns regarding these terms and
          conditions, please contact us at{" "}
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

export default SectionWrapper(Terms, "terms");
