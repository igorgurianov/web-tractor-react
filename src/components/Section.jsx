const Section = ({ children, styles }) => {
  return (
    <section className={`px-3 my-10 mx-auto md:px-6 max-w-[1200px] ${styles}`}>
      {children}
    </section>
  );
};

export default Section;

// old className={`px-3 my-10 mx-auto md:px-8 lg:px-[122px] lg:my-20 xl:px-[240px] xl:my-[100px] ${styles}`}
