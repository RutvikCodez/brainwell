const Progress = ({ bg, label, text, value }: progresProps) => {
  return (
    <div
      className="bg-green-50 rounded-lg p-4 border border-green-200 text-center"
      style={{ backgroundColor: bg }}
    >
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-2xl font-bold" style={{ color: text }}>
        {value}
      </p>
    </div>
  )
}

export default Progress
