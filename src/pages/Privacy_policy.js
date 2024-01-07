import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function PrivacyPolicy() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <div className="container mx-auto">
          <h6 className="text-lg font-bold dark:text-white my-2">
            privacy-policy
          </h6>
          <p>
            At Parentheses, we value your trust &amp; respect your privacy. The
            Privacy Policy covers the practices for handling and securing Your
            Information (both personal and non-personal) by Parentheses.
          </p>
          <p>
            As a User of Parentheses, the person agrees with this Privacy Policy
            mentioned herein and the terms of service uploaded on the website.
          </p>
          <p>
            This privacy statement does not apply to the websites, mobile sites,
            and mobile apps of third parties, even if their websites are linked
            to Parentheses Website. We recommend You review the privacy
            statements of the other parties with whom You interact.
          </p>
          <p>
            IF YOU DO NOT AGREE TO THE TERMS OF THIS POLICY, PLEASE DO NOT USE
            OR ACCESS THE Parentheses WEBSITE.
          </p>
          <p>
            This privacy policy has been created by Parentheses in order to
            demonstrate our company’s commitment to privacy. The following
            discloses the information gathering and dissemination practices for
            the Parentheses Website (“Parentheses”) and aids You in
            understanding how any Personal Identifiable Information collected
            from You is being used by Us.
          </p>
          <p>
            The words “You” or “Your” or “User(s)” as used herein, refer to all
            Freelancers and Consumers and any Person that otherwise accesses/
            browses through Parentheses. The words “We” or “Us” or “Our” as used
            herein, refer to Parentheses/ Parentheses Labs and/or any permitted
            assignees. For the purposes of this Privacy Policy, the term
            “Personal Identifiable Information” shall mean any information that
            may be used to identify You and allow You to have access to
            Parentheses services including, but not limited to:
          </p>
          <p>
            i. Full name, email address, or other contact information (including
            mobile/ landline numbers), whether at work or at home and/ or skype
            id;
          </p>
          <p>
            ii. sensitive personal information such as any financial information
            including bank account details, Aadhar card number, PAN card
            numbers, etc.;
          </p>
          <p>
            iii. any information regarding Your credentials, experience, and
            background; and
          </p>
          <p>
            iv. information contained in the resume sent to Parentheses therein
            (the amount of information you choose to keep confidential is
            entirely up to your discretion; you may enter as much or as little
            information as you choose, except for the information which is
            mandatorily required);
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            How do we collect and store your information?
          </h6>
          <p>
            We collect and store your Personal Identifiable Information when you
            visit and/or use our site. The Personal Identifiable Information
            shared by you is stored to facilitate payments and provide
            information to the Users. We protect your information and ensure a
            safe, efficient, and customized experience by reducing the risks of
            loss, misuse, unauthorized access, disclosure, and alteration of
            your Personal Identifiable Information. We take our obligation to
            safeguard your privacy very seriously and therefore, we collect only
            such Personal Identifiable Information that we consider necessary
            for achieving this purpose.
          </p>
          <p>
            In order to avail of the services provided by Parentheses, it is
            required that the User shall get itself registered with us by
            creating an account. In this process, you may be required to provide
            us with your Personal Identifiable Information as indicated on the
            forms and complete the registration process. Once you give us your
            Personal Identifiable Information and initiate the registration
            process, you are not anonymous to us. Where possible, we indicate
            which fields are mandatorily required and which fields are optional.
            You always have the option to not provide information by choosing
            not to use a particular service or feature on the Website, unless we
            require it so.
          </p>
          <p>
            We may also collect certain non-personally identifiable information
            from your interaction with our sites, services, content, and
            advertising, including, but not limited to, device ID, device type,
            location, geo-location information, computer and connection
            information, statistics on page views, traffic to and from the
            sites, ad data, IP address, and standard web log information when
            you visit many of our web pages such as the type of browser you are
            using (e.g., Chrome, Internet Explorer, etc.), the type of operating
            system you are using, (e.g., Microsoft Windows or Apple iOS) and the
            domain name of your Internet service provider. Such information,
            which is collected passively using various technologies, cannot
            presently be used to specifically identify you. Parentheses may
            store such information itself or such information may be included in
            databases owned and maintained by our affiliates, agents, or service
            providers.
          </p>
          <p>
            We may use such information and pool it with other information to
            track, for example, the total number of visitors to our Site, the
            number of visitors to each page of our Site, and the domain names of
            our visitors' Internet service providers. It is important to note
            that no Personal Data is available or used in this process. We may
            however collect and store, details of how you used our services,
            such as your search queries, telephone log information, such as your
            phone number, calling-party number, forwarding numbers, time and
            date of calls, duration of calls, SMSs routing information and types
            of calls, Internet protocol address, device event information, such
            as crashes, system activity, hardware settings, browser type,
            browser language, the date and time of your request and referral
            URL.
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            Use of the Personal Information
          </h6>
          <p>
            Your name and email address will be used to inform You regarding
            upcoming events. You hereby agree and acknowledge that We may use
            Your Personal Identifiable Information to process and respond to
            Your requests/ inquiries, provide services as per your requirement,
            process and complete your transactions, send you communications,
            show ads that may be of relevance to you, provide customer support,
            to resolve disputes, troubleshoot concerns, help promote safe
            services, detect and protect us against error, fraud, and other
            criminal activity, enforce our terms and conditions, improve the
            content and functionality of the Services, to better understand our
            Users and for any other purpose.{" "}
          </p>
          <p>
            The information you provide is also used for your profiling and
            conducting the need assessments that may suggest other services that
            may be of interest to you or for providing you with information
            regarding relevant services in the future. By accepting the Terms of
            Service and Privacy Policy, you hereby expressly agree to receive
            communications from Parentheses. If you do not wish to receive any
            communication, it is advisable to opt out of the receipt of such
            communications or have your name deleted from our mailing lists. In
            order to do so, please contact us at sourav@parentheses.co.in.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            Disclosure of Personal Information{" "}
          </h6>
          <p>
            You agree and acknowledge that we do not share, sell or rent any
            Personal Identifiable Information to any third party without your
            consent except in the following circumstances:
          </p>
          <p>
            a. the Personal Identifiable Information comes in the public domain
            without breach by Parentheses;{" "}
          </p>
          <p>
            b. Parentheses is directed by any court of competent jurisdiction or
            other governmental authority or otherwise to the extent permitted or
            required by law;{" "}
          </p>
          <p>
            c. in the good faith belief that disclosure is otherwise necessary
            or advisable including, without limitation, to protect the rights or
            properties of Parentheses or any or all of its affiliates,
            associates, employees, directors or officers;{" "}
          </p>
          <p>
            d. when there is a reasonable belief that disclosing the information
            is necessary to identify, contact or bring any legal or criminal
            action against someone who may be causing interference with Our
            rights or properties, whether intentionally or otherwise; and{" "}
          </p>
          <p>
            e. when anyone else could be harmed by such activities. In case of
            any acquisitions or mergers with other entities, in any such events,
            We will notify You about such acquisition or merger, the User
            information will most likely also be transferred in connection with
            such acquisition or merger.
          </p>
          <h6 className="text-lg font-bold dark:text-white">Cookies </h6>
          <p>
            A cookie is a small text file that is stored on the computer that
            enables us to recognize you (for example, as a registered user) when
            you visit our website, store your preferences and settings, enhance
            your experience by delivering content and advertising specific to
            your interests, perform research and analytics, track your use of
            our services, and assist with security and administrative functions.
            Cookies may be persistent or stored only during a single session.
            Most browsers are set to automatically allow cookies. Please note it
            may be possible to disable some (but not all) cookies through your
            device or browser settings, but doing so may interfere with certain
            functionality on the Services. Major browsers provide users with
            various options when it comes to cookies. Users can usually set
            their browsers to block all third-party cookies (which are those set
            by third-party companies collecting information on websites operated
            by other companies), block all cookies or block specific cookies. To
            modify your cookie settings, please visit your browser's help
            settings. You will need to opt-out of each browser and each device
            you use to access the services. Flash cookies operate differently
            than browser cookies and cannot be removed or blocked via web
            browser settings. For the purpose of internet-based advertising, we
            use the Google Analytics Advertising features that collect data of
            Our Users via Google advertising cookies, and identifiers, in
            addition to data collected through a standard Google Analytics
            implementation. By using the website You consent to the storing and
            accessing of cookies or other information on the end User’s device.
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            International Transfers
          </h6>
          <p>
            Your information may be transferred to and maintained on computers
            located outside of Your jurisdiction, where privacy laws may not be
            as protective as in your jurisdiction. Your consent to this Privacy
            Policy represents your consent to any such transfer.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            Other Websites/ External Links{" "}
          </h6>
          <p>
            Our website contains links to other websites. Please note that when
            you click on one of these links, you are entering into the domain of
            any other website for which Parentheses has no responsibility. If
            you use public forums – such as social networking services, internet
            bulletin boards, chat rooms, or blogs, you should be aware that any
            Personal Identifiable Information you disclose can be read,
            collected, or used by others. You hereby further acknowledge and
            agree that we would have no control over the information in such an
            event. We thereby encourage you to read the privacy policies of all
            such sites as these may be materially different from this Privacy
            Policy. You are solely responsible for maintaining the secrecy of
            your passwords, and your membership account information. Please be
            very careful, responsible, and alert with this information,
            especially whenever you're online.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            Changes to the Privacy Policy
          </h6>
          <p>
            We reserve the right to amend, modify or alter this Privacy Policy
            from time to time to reflect changes in the law, the features of our
            services, or advances in technology. The information that we collect
            is subject to the Privacy Policy in effect at the time such
            information is being used. In the event of any changes to this
            Privacy Policy, the changes shall be updated here. Therefore, it is
            advised to bookmark this page and/or periodically review this page
            to make sure you have the latest version. Your continued use of the
            services following the posting of changes to this Privacy Policy
            shall constitute your consent and acceptance of those changes.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">Eligibility </h6>
          <p>
            You must be at least 18 years of age to be able to register with us
            and avail of our Services. We do not knowingly collect Personal
            Identifiable Information from children under 18. We recognize the
            privacy interests of children and we encourage parents and guardians
            to take an active role in their children’s online activities and
            interests.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">Disclaimer </h6>
          <p>
            We have established electronic and administrative safeguards
            designed to secure the information so collected. However, We shall
            not be liable for any loss or damage sustained by reason of any
            disclosure (inadvertent or otherwise) regarding online transactions
            using credit cards/ debit cards and/ or their verification process
            and particulars nor for any error, omission, or inaccuracy with
            respect to any information (personal or non-personal) so disclosed
            and used. Although we strive to keep your Personal Identifiable
            Information secure, no security measures are absolute, and we cannot
            guarantee that your Personal Identifiable Information will never be
            disclosed in a manner inconsistent with this Policy.{" "}
          </p>
          <h6 className="text-lg font-bold dark:text-white">
            Governing Law, Jurisdiction, and Dispute Resolution{" "}
          </h6>
          <p>
            This Privacy Policy is governed in accordance with the laws of India
            without regard to principles of conflict of laws. All disputes,
            difference, controversy, and/or claims arising out of or relating to
            or in connection with this Privacy Policy shall be referred/
            submitted to arbitration and shall be finally settled in accordance
            with the provisions of the Arbitration &amp; Conciliation Act, 1996
            (as amended from time to time) by a sole arbitrator to be mutually
            appointed by the Parties. The seat of arbitration shall be Mumbai
            and the language of the arbitration shall be English. Subject to the
            provisions relating to arbitration herein, the Courts at Mumbai
            shall have sole and exclusive jurisdiction.
          </p>
          <h6 className="text-lg font-bold dark:text-white">Assignment </h6>
          <p>
            We may assign any of Our responsibilities/obligations to any other
            person without notice to the User, at its sole discretion. However,
            You shall not assign, sub-license, or otherwise transfer any of Your
            rights or obligations under this Privacy Policy to any other party.
            Contact Us In order to keep Your Personal Information accurate and
            complete, please Contact Us as specified below. Also, if You have
            any questions or comments about the Privacy Policy, please write to
            Us at sourav@parentheses.co.in. This Privacy Policy is incorporated
            into and subject to the Parentheses’ Terms of Service. Your use of
            the website and any of Our services and the information you provide
            us on the website is subject to the Terms of Service and this
            Privacy Policy. Please note that any capitalized terms used in this
            Privacy Policy document and not defined herein shall have the same
            meaning as defined under the Terms of Service on our Website.
          </p>
          <p className="my-4">Thank You for using the Website!</p>
          <p />
          <p />
        </div>
        <Footer />
      </>
    </React.Fragment>
  );
}
