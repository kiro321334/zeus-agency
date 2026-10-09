export default function Heading({ eyebrow, title, sub }) {
  return (<div className="reveal"><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2>{sub && <p className="sub">{sub}</p>}</div>);
}
