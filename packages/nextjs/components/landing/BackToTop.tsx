import React from "react";

const BackToTopButton: React.FC = () => {
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#" onClick={topFunction} id="back-to-top" className="back-to-top fs-5">
      <i data-feather="arrow-up" className="feather icon-sm icons align-middle" />
    </a>
  );
};

export default BackToTopButton;
