import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Frontend Development Certification",
    description: "Completed comprehensive frontend web development course.",
    image: "/certificates/coursera.jpg",
    issuer: "Coursera- IBM",
    issueDate: "April 2024",
    certificateUrl: "#https://coursera.org/share/05c657dadcf77c4515b8f2a1e2cdbb1d",
  },
  {
    id: 2,
    title: "Python Full-Stack Development",
    description: "Mastered python fundamentals and advanced concepts.",
    image: "/certificates/python.jpg",
    issuer: "AICTE - Eduskills",
    issueDate: "Jan - Mar 2025",
    certificateUrl: "#",
  },
  {
    id: 3,
    title: "SQL-Advanced Level",
    description: "Learned SQL with Advanced Level.",
    image: "/certificates/css.png",
    issuer: "HackerRank",
    issueDate: "March 2024",
    certificateUrl: "https://www.hackerrank.com/certificates/40e245ef2557",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These certifications demonstrate my commitment to continuous learning and professional growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {cert.description}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  Issued by {cert.issuer} — {cert.issueDate}
                </p>
                <div className="flex justify-end">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
