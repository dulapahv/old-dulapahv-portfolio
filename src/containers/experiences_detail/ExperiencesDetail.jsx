import React from "react";
import ImgAssets from "./imports";
import "./experiences_detail.css";

const ExperiencesDetail = () => {
    return (
        <>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__image img--left">
                    <img src={ImgAssets.TA1} alt="Rust TA 1" />
                    <img src={ImgAssets.TA2} alt="Rust TA 2" />
                </div>
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Official Teaching Assistance of KMITL in Rust and C/C++
                        programming languages
                    </h1>
                    <p>
                        I am the official Teaching Assistance of KMITL in Rust
                        and C/C++ programming languages for the KMITL freshmen.
                        <br />I also helped create the Rust programming language
                        summary, which proved to be highly beneficial to the
                        students and resulted in more students understanding the
                        Rust programming language.
                    </p>
                    <h4>
                        <a
                            href="https://dulapahv.notion.site/Rust-Language-Summary-baeec62c57554c3b85e8602d6cab3100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my Rust Programming language summary {">"}
                        </a>
                    </h4>
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Qualified and currently a cadet at 42 Bangkok
                    </h1>
                    <p>
                        I am qualified and am currently a cadet at 42 Bangkok, a
                        global computer science school from France. This greatly
                        improved my C programming language skills and my
                        algorithmic thinking skills.
                    </p>
                    <h4>
                        <a
                            href="https://github.com/dulapahv/ProblemSet/tree/main/42_Bangkok"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my work on GitHub {">"}
                        </a>
                    </h4>
                </div>
                <div className="experiences-detail__image img--right">
                    <img src={ImgAssets.Bangkok1} alt="Rust TA 1" />
                    <img src={ImgAssets.Bangkok2} alt="Rust TA 2" />
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__image img--left">
                    <img src={ImgAssets.PreSession1} alt="Rust TA 1" />
                    <img src={ImgAssets.PreSession2} alt="Rust TA 2" />
                </div>
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Initiated and mentored KMITL freshmen in Python
                        programming language
                    </h1>
                    <p>
                        I initiated and mentored KMITL freshmen in Python
                        programming languages in the SE14 Pre-Session activity.
                        This proves to be very helpful to students who are new
                        to programming.
                        <br />
                        The activity is held in virtual reality, which really
                        demonstrates that I'm able to utilize new technologies
                        effectively and creatively.
                    </p>
                    <h4>
                        <a
                            href="https://drive.google.com/drive/folders/14BCfxJar_hCvvEk43tZPnUJRn_SHGY4Z?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View SE#14 Pre-Session Slides and Activities
                            documents {">"}
                        </a>
                    </h4>
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Teach coding to friends at KMITL and other universities
                    </h1>
                    <p>
                        I teach coding to friends at KMITL and other
                        universities such as Chulalongkorn University, Thammasat
                        University, Mahidol University, Kasetsart University,
                        King Mongkut's University of Technology North Bangkok,
                        etc. They found themselves doing better in the
                        university and performing better in the exam.
                    </p>
                </div>
                <div className="experiences-detail__image--uni img--right">
                    <img src={ImgAssets.KMITL} alt="KMITL" />
                    <img src={ImgAssets.CU} alt="CU" />
                    <img src={ImgAssets.TU} alt="TU" />
                    <img src={ImgAssets.MU} alt="MU" />
                    <img src={ImgAssets.KU} alt="KU" />
                    <img src={ImgAssets.KMUTNB} alt="KMUTNB" />
                </div>
            </div>
        </>
    );
};

export default ExperiencesDetail;
