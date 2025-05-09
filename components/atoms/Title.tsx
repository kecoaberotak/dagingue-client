const Title = (props: { classname: string; title: string; subTitle: string }) => {
  const { classname, title, subTitle } = props;
  return (
    <section className={classname}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </section>
  );
};

export default Title;
