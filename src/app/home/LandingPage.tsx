import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, FileText, Users, Book, ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "İsmail Kaan Özer", role: "Developer" },
  { name: "Rıfat Altaş", role: "Developer" },
  { name: "Tuna Cuma", role: "Developer" },
  { name: "Umut Arda Tuncar", role: "Developer" },
  { name: "Ahmet Faik Utku", role: "Developer" },
];

const supervisors = [
  { name: "Shervin Rahimzadeh Arashloo", role: "Supervisor" },
  { name: "Atakan Erdem", role: "Jury Member" },
  { name: "Mert Bıçakçı", role: "Jury Member" },
  { name: "Erhan Dolak", role: "Innovation Expert" },
];
const LandingPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-600 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-48">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">FieldStats</h1>
          <p className="mb-8 text-xl text-gray-300">
            Advanced Football Analytics Using AI and Computer Vision
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="gap-2">
              <Github className="h-5 w-5" />
              <a
                href="https://github.com/TunaCuma/fieldstats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Repo
              </a>
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="h-5 w-5" />
              <a
                href="https://github.com/rrifat996/CS491"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Models Repo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="border-gray-700 bg-gray-800">
          <CardContent className="p-6">
            <h2 className="mb-4 text-3xl font-bold text-white">
              About the Project
            </h2>
            <p className="text-gray-300">
              FieldStats is an AI-powered system for analyzing recorded football
              matches. Using advanced computer vision techniques, our system
              processes uploaded videos to detect players, track their
              movements, and extract meaningful metrics. The platform provides
              detailed insights into team and player performance, making
              professional-level analytics accessible to clubs at all levels.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">Our Team</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-gray-700 bg-gray-800">
              <CardContent className="p-4">
                <Users className="mb-2 h-8 w-8 text-white" />
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mb-6 mt-12 text-2xl font-bold text-white">
          Supervisors & Jury
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {supervisors.map((supervisor, index) => (
            <Card key={index} className="border-gray-700 bg-gray-800">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {supervisor.name}
                </h3>
                <p className="text-gray-400">{supervisor.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Reports Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">Project Reports</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-gray-700 bg-gray-800">
            <CardContent className="p-6">
              <FileText className="mb-4 h-8 w-8 text-white" />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Project Specification Document
              </h3>
              <Button variant="outline" className="gap-2">
                <Book className="h-4 w-4" />
                <a href="/T2440_Project_Specification_Document.pdf" download>
                  Download PDF
                </a>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-gray-700 bg-gray-800">
            <CardContent className="p-6">
              <FileText className="mb-4 h-8 w-8 text-white" />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Analysis and Requirements Report
              </h3>
              <Button variant="outline" className="gap-2">
                <Book className="h-4 w-4" />
                <a href="/T2440_Analysis_and_Requirements_Report.pdf" download>
                  Download PDF
                </a>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
