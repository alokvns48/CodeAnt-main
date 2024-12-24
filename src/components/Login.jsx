import biglogo from "../assets/subtract.png";
import smallLogo from "../assets/smallLogo.png";
import lgimage from "../assets/lgimage.png";
import arrow from "../assets/small-right.png";
import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import azure from "../assets/azure.png";
import gitlab from "../assets/gitlab.png";
import key from "../assets/key.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [component, setcomponent] = useState("saas");
  const saasOptions = [
    { imgSrc: github, alt: "Github Icon", text: "Sign in with GitHub" },
    {
      imgSrc: bitbucket,
      alt: "Bitbucket Icon",
      text: "Sign in with Bitbucket",
    },
    { imgSrc: azure, alt: "Azure Icon", text: "Sign in with Azure Devops" },
    { imgSrc: gitlab, alt: "GitLab Icon", text: "Sign in with GitLab" },
  ];

  const selfHostedOptions = [
    { imgSrc: gitlab, alt: "GitLab Icon", text: "Self Hosted GitLab" },
    { imgSrc: key, alt: "SSO Icon", text: "Sign in with SSO" },
  ];

  return (
    <div className="w-full flex h-screen">
      {/* Left Part */}
      <div className="hidden lg:flex-1 lg:flex items-center justify-center bg-white">
        <div className="text-center p-8">
          {/* box-top  */}
          <div className="bg-white shadow-2xl shadow-black/30 p-6 py-6 rounded-3xl w-[447px]">
            <div className="flex justify-between items-start gap-3 border-b border-slate-300 p-2">
              <img src={smallLogo} alt="" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                AI to Detect & Autofix Bad Code
              </h3>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl">30+</h1>
                <p className="text-sm text-gray-500">Language Support</p>
              </div>
              <div>
                <h1 className="font-bold text-xl">10K+</h1>
                <p className="text-sm text-gray-500">Developers</p>
              </div>
              <div>
                <h1 className="font-bold text-xl">100K+</h1>
                <p className="text-sm text-gray-500">Hours Saved</p>
              </div>
            </div>
          </div>

          {/* bottom box */}
          <div className="bg-white shadow-2xl p-4 w-64 rounded-3xl relative left-52 bottom-4">
            <div className="flex items-center justify-between p-1">
              <div className="flex justify-center items-center">
                <img src={lgimage} alt="ellipse" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center gap-1">
                  <img src={arrow} alt="small arrow" />
                  <span className="font-medium text-[#0049C6]">14%</span>
                </div>
                <p className="text-sm text-gray-500">This Week</p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm text-black-600 font-bold">Issues Fixed</p>
              <p className="text-2xl font-bold text-[#081735]">500K+</p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0">
          <img src={biglogo} alt="logo-large" />
        </div>
      </div>
      {/* Right Part */}
      <div className="right w-[100%] lg:w-[50%] right-0 h-full bg-[#FAFAFA]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="box1 w-[93%] md:w-[90%] pb-4 h-[455px] bg-white border flex flex-col  items-center border-[#E9EAEB] rounded-lg">
            <h2 className="flex justify-center items-center gap-3 py-5">
              <img src={smallLogo} alt="small logo" />
              <span className="text-xl md:text-2xl">CodeAnt AI</span>
            </h2>
            <h2 className="text-xl md:text-2xl font-medium">
              Welcome to CodeAnt AI
            </h2>
            <div className="mt-5 font-medium flex justify-center items-center bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg w-[90%] ">
              <div
                className={`w-[50%] left-0 cursor-pointer text-center md:text-lg py-2.5 ${
                  component == "saas"
                    ? "rounded-lg bg-[#1570EF] text-white"
                    : ""
                } `}
                onClick={() => setcomponent("saas")}
              >
                SAAS
              </div>
              <div
                className={`w-[50%] left-0 text-center cursor-pointer md:text-lg py-2.5  ${
                  component == "selfhosted"
                    ? "rounded-lg bg-[#1570EF] text-white"
                    : ""
                }`}
                onClick={() => setcomponent("selfhosted")}
              >
                Self Hosted
              </div>
            </div>
            <hr className="w-full mt-5 mb-4" />
            {component == "saas" ? (
              // SAAS Options
              <div className="flex flex-col w-full gap-2 sm:gap-3">
                {saasOptions.map((option, index) => (
                  <div
                    key={index}
                    className="mx-auto flex gap-3 justify-center text-sm md:text-base items-center border border-[#D8DAE5] hover:bg-[#FAFAFA] rounded-lg w-[85%] sm:w-[60%] font-medium py-2.5 cursor-pointer"
                    onClick={() => navigate("/repositories")}
                  >
                    <img src={option.imgSrc} alt={option.alt} />
                    {option.text}
                  </div>
                ))}
              </div>
            ) : (
              // Self Hosted Options
              <div className="flex flex-col w-full gap-2 sm:gap-3">
                {selfHostedOptions.map((option, index) => (
                  <div
                    key={index}
                    className="mx-auto flex gap-3 justify-center text-sm md:text-base items-center border border-[#D8DAE5] hover:bg-[#FAFAFA] rounded-lg w-[85%] sm:w-[60%] font-medium py-2.5 cursor-pointer"
                    onClick={() => navigate("/repositories")}
                  >
                    <img src={option.imgSrc} alt={option.alt} />
                    {option.text}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4 text-xs md:text-base">
            By signing up you agree to the{" "}
            <span className="font-bold">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
