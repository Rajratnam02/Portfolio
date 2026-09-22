const About = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <p className="text-3xl">About Me</p>
      <p className="max-w-3xl text-gray-300 leading-relaxed">
        Hey, I&apos;m <span className="text-foreground">Raj Ratnam</span>, a Computer
        Science & Engineering student at{" "}
        <span className="text-foreground">IIIT Ranchi</span> and a
        <span className="text-foreground"> Full-Stack Developer</span> focused
        on building thoughtful, reliable software.
      </p>
      <p className="max-w-3xl text-gray-300 leading-relaxed">
        I enjoy solving{" "}
        <span className="text-foreground">complex problems</span>, designing{" "}
        <span className="text-foreground">scalable system architectures</span>,
        and building{" "}
        <span className="text-foreground">real-time web applications</span>. I
        care about turning ideas into products that are simple, performant, and
        built to last.
      </p>{" "}
    </div>
  );
};

export default About;
