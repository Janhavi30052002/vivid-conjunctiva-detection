
import React from 'react';
import { Card } from "@/components/ui/card";
import { UsersRound } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
            <p className="text-xl text-gray-600">
              Revolutionizing anemia detection through non-invasive image analysis of the conjunctiva.
            </p>
          </div>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Anemia affects over 1.6 billion people globally, yet traditional detection methods require blood samples 
              and laboratory equipment, limiting accessibility in resource-constrained settings. Our project was 
              born from the need to develop a non-invasive, accessible, and accurate method for anemia detection.
            </p>
            <p className="text-gray-700 mb-6">
              By leveraging image processing and machine learning technologies, we've developed a system that can 
              analyze the pallor of the conjunctiva (the mucous membrane that covers the front of the eye and lines 
              the inside of the eyelids) to detect anemia with high accuracy.
            </p>
            <p className="text-gray-700">
              This technology has the potential to dramatically improve anemia screening in remote and underserved 
              communities, enabling earlier intervention and better health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Avatar className="w-full h-full">
                  <AvatarImage src="/lovable-uploads/51cba85d-503d-4bd3-96c7-99051b46e4b3.png" alt="Janhavi Belnekar" className="object-cover" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold mb-1">Janhavi Belnekar</h3>
              <p className="text-gray-600 mb-2">Student</p>
              <p className="text-gray-600 text-sm">
                Contributing to research, development, and implementation of the anemia detection system.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UsersRound className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Anuj Dube</h3>
              <p className="text-gray-600 mb-2">Student</p>
              <p className="text-gray-600 text-sm">
                Working on algorithm development and system integration for the anemia detection project.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UsersRound className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Moksha Kothari</h3>
              <p className="text-gray-600 mb-2">Student</p>
              <p className="text-gray-600 text-sm">
                Focused on data analysis and machine learning model training for accurate anemia detection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Research Process</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Problem Identification</h3>
                <p className="text-gray-700">
                  We began by researching the global impact of anemia and the limitations of current detection methods,
                  especially in resource-limited settings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Literature Review</h3>
                <p className="text-gray-700">
                  We analyzed existing research on clinical signs of anemia, focusing on the relationship between
                  conjunctival pallor and hemoglobin levels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-gray-700">
                  We collected a diverse dataset of conjunctival images along with corresponding hemoglobin measurements
                  for training and validation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Algorithm Development</h3>
                <p className="text-gray-700">
                  We developed and refined our image processing algorithms and machine learning models to accurately
                  analyze conjunctival pallor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Validation</h3>
                <p className="text-gray-700">
                  We validated our system against standard hemoglobin measurement methods to ensure accuracy and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
