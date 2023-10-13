function PageContent({ title, children }) {
  return (
    <div className=" text-center mt-20">
      <h1 className=" text-3xl">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
