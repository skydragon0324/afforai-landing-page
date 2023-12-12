import React from "react";
import labtopLanding17 from "../../assets/image/laptop-landing-17.png";
import labtopLanding18 from "../../assets/image/laptop-landing-18.png";
import labtopLanding19 from "../../assets/image/laptop-landing-19.png";


const ImageBox = (props) => {
  return (
    <div className="col-lg-4 col-md-12 px-md-2 mb-4">
      <div className="d-flex flex-column rounded-4 h-100 border overflow-hidden boder">
        <div className="bg-light border-bottom">
          <img src={props.image} className="img-lg-fluid w-100" alt={props.alt} />
        </div>
        <div className="d-flex flex-column px-3 pt-2 pb-4">
          <div className="d-inline-flex align-items-center gap-2">
            <span className="fs-5 fw500 text-dark">Trusted by users all over the World</span>
          </div>
          <div className="fs-6 text-secondary">Afforai is used all around the World, saving thousands of people time and money with our speed &amp; accuracy.</div>
        </div>
      </div>
    </div>
  );
}

export const Unquestionable = () => {
  return (
    <div className="container-fuild m-160-auto max-w-1600">
      <div className="row mb-4">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="text-center text-dark fw-600 fs-36">Unquestionable accuracy & reliability</div>
            <div className="text-center text-muted fw-normal fs-6 lh-1.3 max-w-500">
              We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
            </div>
          </div>
        </div>
      </div>
    
    <div className="row px-3">
      <ImageBox image={labtopLanding17} alt="Security, Reliable, and Trustworthy" />
      <ImageBox image={labtopLanding18} alt="Afforai gives out the best answer with most accurate citations" />
      <ImageBox image={labtopLanding19} alt="Afforai AI comprehends documents, not repeating them" />
    </div>
  </div>
  );
};
