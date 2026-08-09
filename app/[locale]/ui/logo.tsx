export function Logo() {
  return (
    <div className="flex flex-col leading-none select-none w-fit">
      <div className="relative inline-block">
        <svg
          viewBox="0 0 350 60"
          className="absolute -top-6 left-[26%] w-[55%] h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C55 42 100 40 205 12"
            stroke="#D5B050"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M175 3L235 15L200 55L175 3Z" fill="#D5B050" />
        </svg>

        <span
          className="text-3xl font-extrabold tracking-tight"
          style={{ color: "#fff", fontFamily: "Arial, sans-serif" }}
        >
          Benchmark
        </span>
      </div>

      
    </div>
  );
}
