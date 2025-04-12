import { FaGithub, FaLinkedin } from "react-icons/fa";

import PageTitle from "../reusable/PageTitle";
import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
    <PageTitle title="Al-FWZ Furniture Trading & Contracting | Terms & Condition" />
      <div className="container mx-auto px-4 py-8">
    
    <motion.div
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to <strong>mhkm-programmer</strong>! By accessing and using this website, you agree to comply with the following terms and conditions:
      </p>
      <ol className="list-decimal ml-6 mb-6">
        <li className="mb-2">
          <strong>Intellectual Property:</strong> All content on this website, including but not limited to text, images, graphics, logos, and design elements, is the property of Md Humayun Kabir Miazee (referred to as "the Owner") and is protected by intellectual property laws. Unauthorized use, reproduction, or distribution of the content is strictly prohibited.
        </li>
        <li className="mb-2">
          <strong>Accuracy of Information:</strong> While me strives to provide accurate and up-to-date information on this website, they make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk.
        </li>
        <li className="mb-2">
          <strong>Use of Website:</strong>Your use of this website is subject to the following restrictions:
a. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. <br />
b. You must not engage in any unauthorized use, including but not limited to hacking, introducing viruses or other malicious code, or attempting to gain unauthorized access to the website or its server.</li>
        <li className="mb-2">
          <strong>User-Generated Content:</strong> Any content you submit or contribute to the website, such as comments, feedback, testimonials, or creative works, must be your original creation and must not infringe upon the rights of any third party. By submitting content, you grant me a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, adapt, publish, translate, and distribute the content in any media.
        </li>
     
        <li className="mb-2">
          <strong>Privacy Policy:</strong> I respects your privacy and handles your personal information in accordance with their Privacy Policy. Please review the Privacy Policy to understand how they collect, use, and protect your information.
        </li>
        <li className="mb-2">
          <strong>Limitation of Liability: </strong> I shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use or inability to use the website or any information contained therein. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if I has been advised of the possibility of such damages.
        </li>
        <li className="mb-2">
          <strong>Indemnification:</strong> You agree to indemnify and hold me harmless from any claims, losses, damages, liabilities, costs, and expenses, including legal fees, arising out of or related to your use of the website or any violation of these terms and conditions.
        </li>
        <li className="mb-2">
          <strong>Modifications: </strong> I reserves the right to modify or update these terms and conditions at any time without prior notice. Your continued use of the website after any changes indicates your acceptance of the modified terms and conditions.
        </li>
        <li className="mb-2">
          <strong>Payment:</strong> Payment for any services or products offered on this website is subject to the agreed-upon terms. I reserves the right to refuse or cancel any order or transaction at their discretion.
        </li>
        <li className="mb-2">
          <strong>Refund:</strong> Refunds for services or products are handled on a case-by-case basis. Please contact me at <a href="mailto:mhkm.programmer@gmail.com" className="text-blue-500">mhkm.programmer@gmail.com</a> for any refund inquiries or concerns.
        </li>
        <li className="mb-2">
          <strong>Governing Law: </strong> These terms and conditions shall be governed by and construed in accordance with the laws of Dhaka, Bangladesh. Any disputes arising from or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
        </li>
        {/* Add more terms and conditions here */}
      </ol>
      <div className="mb-5">
      <div>
      <p className="mb-2">
        If you have any questions or concerns regarding these terms and conditions, please contact me at <a href="mailto:mhkm.programmer@gmail.com" className="text-blue-500">mhkm.programmer@gmail.com</a>. 
      </p>
      </div>
      <p className="mb-2"><strong>Or</strong> </p>
      <div className="flex items-center gap-4">
        <a href="https:linkedin.com/in/mhkm-programmer/" className="text-gray-900 hover:text-blue-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https:github.com/mhkm-programmer" className="text-gray-900 hover:text-blue-500">
          <FaGithub size={24} />
        </a>
      </div>
      </div>

      Thank you for visiting <strong>mhkm-programmer</strong>!
    </motion.div>
  </div>
    </div>
  );
};

export default Terms;
