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

export default function RefundAndCancellation() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <div>
          <Navbar />
          <div className="container mx-2">
            <h2 className="mb-16 text-6xl md:text-8xl xl:text-5xl font-bold font-heading tracking-px-n leading-none my-2">
              Refund Policy
            </h2>
            <h3 className="text-lg font-semibold leading-normal">Returns</h3>
            <p className="font-sans text-gray-600 leading-normal">
              Since parentheses offers non-tangible and non-returnable goods, we
              do not issue returns.
            </p>
            <h4 className="text-lg font-semibold leading-normal my-1">
              Cancellations
            </h4>
            <p className="font-sans text-gray-600 leading-relaxed">
              Since parentheses offers non-tangible and non-returnable goods, we
              do not allow cancellations once the development has started.
            </p>
            <h3 className="text-lg font-semibold leading-normal">Refunds</h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              Since parentheses offers non-tangible and non-returnable goods, we
              do not issue refunds once the development has started. Refunds on
              the grounds of customers’ belief that the product does not meet
              their expectations will not be issued. Open source products shall
              not be reimbursable or exchanged. Please consider your purchase
              carefully.
            </p>
            <h3 className="text-lg font-semibold leading-normal my-1">
              Product Services
            </h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              Our offered services related to products cover Installation
              Service, Template Integration and Priority Support, and Web
              development services. Since such services are non-tangible and
              non-returnable, we do not issue refunds once we start the work.
              Nevertheless, we assure you of the highest service quality and
              guarantee to try our hardest to meet your expectations. We highly
              encourage our customers to take advantage of our 7 days of free
              customer support from the date of delivery.
            </p>
            <div className="container mx-auto my-4">
              Any questions concerning this Refund Policy may be directed to
              hello@parentheses.co.in
            </div>
          </div>
        </div>
        <Footer />
      </>
    </React.Fragment>
  );
}
