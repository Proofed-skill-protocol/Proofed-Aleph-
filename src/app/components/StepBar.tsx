interface StepBarProps {
  current: number; // 1-6
}

export default function StepBar({ current }: StepBarProps) {
  return (
    <div className="steps">
      {Array.from({ length: 6 }, (_, i) => {
        const state =
          i < current - 1 ? 'done' : i === current - 1 ? 'active' : '';
        return <div key={i} className={`seg ${state}`} />;
      })}
    </div>
  );
}
