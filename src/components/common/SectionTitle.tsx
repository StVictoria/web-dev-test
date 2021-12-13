import "./SectionTitle.scss";

interface ISectionTitle {
  title: string;
}

function SectionTitle({ title }: ISectionTitle) {
  return (
    <div className="SectionTitle">
      <div className="SectionTitle-Block" />
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
