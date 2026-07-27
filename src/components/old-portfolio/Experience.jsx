import { motion } from 'framer-motion';

const MotionH2 = motion.h2;
const MotionDiv = motion.div;

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Lumen Technologies",
      date: "May 2026 - August 2026",
      details: [
        "Built a Terraform-based Datadog monitoring framework across 18+ services with reusable modules and a Python CLI, reducing monitor setup from 30-120 minutes to about 2 minutes per service.",
        "Designed multi-cloud secret-rotation automation across AWS, Azure, GCP, and Oracle to standardize security workflows and reduce credential-related downtime risk."
      ]
    },
    {
      title: "Research Assistant",
      company: "University of Massachusetts Boston",
      date: "January 2025 - Present",
      details: [
        "Developing an end-to-end FEM head-modeling pipeline that corrects MRI partial-volume loss using SPHARM-based gyral-width scaling to produce anatomically accurate tetrahedral meshes for transcranial current stimulation.",
        <>
          Building surface-repair and volume-meshing stages by reconstructing self-intersecting SPHARM surfaces and stacking corrected GM/WM layers with other head tissues into TetGen-ready meshes for{' '}
          <a
            href="https://github.com/SCIInstitute/SCIRun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-pink)', textDecoration: 'underline' }}
          >
            SCIRun
          </a>{' '}
          field simulation.
        </>,
        <>
          Improving{' '}
          <a
            href="https://github.com/kenichi-maeda/fixmesh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-pink)', textDecoration: 'underline' }}
          >
            fixmesh
          </a>
          , a Python mesh-repair library wrapping PyMesh, PyMeshFix, and MeshLib, to resolve self-intersections through cutting, detaching, and local remeshing strategies.
        </>
      ]
    },
    {
      title: "Undergraduate Student",
      company: "University of Massachusetts Boston",
      date: "January 2024 - May 2027",
      details: [
        "On track to recieve a Bachelor of Science in Computer Science.",
        "Taken classes consisting of a variety of CS courses, Calculus 1 & 2, Physics 1 & 2, Discrete Math, and Introduction to Electrical & Computer Engineering."
      ]
    }
  ];

  return (
    <section id="experience" style={{
      padding: '100px 20px',
      background: 'var(--bg-color)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <MotionH2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px', color: 'var(--accent-pink-dark)' }}
        >
          Work Experience
        </MotionH2>

        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--accent-pink)',
            opacity: 0.3
          }}></div>

          {experiences.map((exp, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                marginBottom: '50px',
                position: 'relative',
                paddingLeft: '40px'
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '0',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-pink)',
                border: '4px solid var(--bg-color)',
                boxShadow: '0 0 0 2px var(--accent-pink)'
              }}></div>

              <div style={{
                background: '#2a2a2a',
                padding: '30px',
                borderRadius: '10px',
                border: '1px solid #333'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{exp.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px', color: '#aaa' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--accent-pink)' }}>{exp.company}</span>
                  <span>{exp.date}</span>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
                  {exp.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>{detail}</li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
