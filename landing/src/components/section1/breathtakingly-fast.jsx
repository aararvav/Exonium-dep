import Bolt from "@/lib/svgs/bolt";
import Card from "./card";

const BreathtakinglyFast = () => {
  return (
    <Card className="col-[auto/span_4] lg:col-[auto/span_2] relative overflow-hidden">
      <div className="absolute inset-0 flex items-start justify-center pt-8 opacity-60">
        <div className="w-24 h-24 scale-150">
          <Bolt />
        </div>
      </div>
      <div className="relative z-10 pt-20">
        <h3 className="text-center text-[26px] leading-[1.2] tracking-[-0.01em]">
          Breathtakingly fast
        </h3>
        <p className="mt-4 max-w-[480px] text-balance text-center leading-[1.3] text-[#b4bcd0]">
          Built for speed with 50ms interactions and real-time sync.
        </p>
      </div>
    </Card>
  );
};

export default BreathtakinglyFast;
