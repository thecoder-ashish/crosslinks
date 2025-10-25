function About() {
  return (
    <section id="about" className="py-20 px-8 bg-black relative">
      <div className="absolute top-20 right-20 w-24 h-24 bg-green-500/15 static-blob-6"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-green-500/8 static-blob-7"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-green-400 mb-8">
          WHO ARE WE?
        </h2>
        <p className="text-lg text-white mb-8 leading-relaxed">
          Crosslinks is the Student & Public Relations Society of NSUT. We
          serve as the bridge between students and authorities, promoting our
          college through various events and initiatives. Our mission is to
          foster connections, build industry knowledge, and create
          opportunities for students to showcase their talents and develop
          leadership skills.
        </p>
      </div>
    </section>
  );
}

export default About;
