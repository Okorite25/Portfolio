interface Props {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      <p className="mt-2 text-sm font-medium font-display bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{subtitle}</p>
    </div>
  );
}