import type { Route } from "./+types/home";
import Navbar from "~/(components)/Navbar";
import {resumes } from  "../../constants"
import ResumeCard from "~/(components)/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyser" },
    { name: "description", content: "Feedback for your resume" },
  ];
}

export default function Home() {



  const {  auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])




  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading " >
          <h1>Track your Appliations & resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered Feedback.</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resume-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume}    />
          ))}
        </div>
      )}
    </section>

  </main>;
}
