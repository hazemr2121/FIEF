import React from "react";

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="cta"
      style={{
        paddingTop: "0px",
        marginRight: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        color: "rgba(255, 255, 255, 1)",
        backgroundImage:
          "url(https://www.fayoum.edu.eg/images/homeimages/6.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 16px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 9, 9, 0.80)",
          marginBottom: "-80px",
        }}
      >
        <div className="container p-5">
          <div className="sec-title mb-50 text-center">
            <h2>رؤية ورسالة الجامعه</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 cta-btn-container text-center">
              <div className="about-img rs-animation-hover">
                <img
                  src="intro1.jpg"
                  alt="ASU"
                  className="rounded-pill"
                  style={{ width: "100%" }}
                />
                <a
                  className="popup-youtube rs-animation-fade"
                  data-toggle="modal"
                  data-target="#youTubeModal"
                  title="Video Icon"
                  style={{ cursor: "pointer" }}
                ></a>
                <div className="overly-border"></div>
              </div>
            </div>
            <div className="col-lg-6 text-right text-lg-right">
              <p className="fs-5" style={{ color: "#268066" }}>
                :الرؤية
              </p>
              <p
                style={{
                  padding: "10px",
                  fontSize: "initial",
                  direction: "rtl",
                }}
              >
                الابتِكارُ وَالرِّيادةُ في التَّعليمِ والبَحثِ العِلميِّ
                وَتَنميةِ المُجتَمَع مَحليًّا وإقليميًّا وَدوليًّا.
              </p>
              <br />
              <p className="fs-5 text-right" style={{ color: "#268066" }}>
                :الرسالة
              </p>
              <p
                style={{
                  padding: "10px",
                  fontSize: "initial",
                  direction: "rtl",
                }}
              >
                تُعِــدُّ جامعةُ الفيوم خِرِّيجًا مُتميِّـزًا قادرًا على
                المُنافسة في سوقِ العَمل مِن خَلالِ برامجَ تعليميةٍ وبحوثٍ
                علميَّةٍ تُنمِّي الفكرَ والإبداعَ، وَتُسهمُ في إنتاج المَعرفة
                وتطبيقِها؛ لتحقيق أهدافِ التَّنميةِ المُستَدامةِ في إطارٍ مِنَ
                القِيَمِ الأخلاقيَّةِ وَمَعاييرِ الجَودة والتَّحوُّل الرَّقميّ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
