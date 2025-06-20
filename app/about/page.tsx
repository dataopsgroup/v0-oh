import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <Image src="/geoff.jpg" alt="Geoff Tucker" width={500} height={600} className="rounded-lg shadow-md" />
        </div>
        <div className="md:order-1">
          <h1 className="text-4xl font-bold mb-6">About Geoff Tucker</h1>
          <p className="text-gray-700 mb-4">
            Geoff Tucker is a seasoned professional with extensive experience in technology and leadership. He has a
            proven track record of driving innovation and delivering results.
          </p>
          <p className="text-gray-700 mb-4">
            With a background in computer science and years of hands-on experience, Geoff brings a wealth of knowledge
            to every project. His expertise spans across various domains, including software development, data
            analytics, and cloud computing.
          </p>
          <p className="text-gray-700">
            Geoff is passionate about leveraging technology to solve complex problems and create meaningful impact. He
            is committed to excellence and dedicated to helping others succeed.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Specializations</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Software Development</li>
          <li>Data Analytics</li>
          <li>Cloud Computing</li>
          <li>Project Management</li>
          <li>Leadership & Strategy</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Certified Scrum Master (CSM)</li>
          <li>AWS Certified Solutions Architect</li>
          <li>Project Management Professional (PMP)</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
