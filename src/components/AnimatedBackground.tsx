const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-60 blur-[100px]"
        style={{
          background: 'hsl(var(--blob-1))',
          top: '10%',
          left: '15%',
          animation: 'blob-drift-1 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-50 blur-[100px]"
        style={{
          background: 'hsl(var(--blob-2))',
          top: '50%',
          right: '10%',
          animation: 'blob-drift-2 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-50 blur-[100px]"
        style={{
          background: 'hsl(var(--blob-3))',
          bottom: '10%',
          left: '40%',
          animation: 'blob-drift-3 22s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
