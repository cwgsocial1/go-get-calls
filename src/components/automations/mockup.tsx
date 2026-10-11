import { useEffect, useState } from "react";
import {
  BarChart3,
  Check,
  ChevronDown,
  LayoutDashboard,
  Users,
  Workflow,
  Zap,
  Star,
  ArrowUpRight,
} from "lucide-react";
const SAMPLE_LEADS = [
  "Sample lead A",
  "Sample lead B",
  "Sample lead C",
  "Sample lead D",
  "Sample lead E",
];

/** Live-demo ticker: makes the sample dashboard update in real time. */
function useLiveDemo(active: boolean) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 3200);
    return () => window.clearInterval(id);
  }, [active]);
  const leads = 12 + tick;
  const booked = 6 + Math.floor(tick / 2);
  const rotation = [
    SAMPLE_LEADS[tick % SAMPLE_LEADS.length],
    SAMPLE_LEADS[(tick + 1) % SAMPLE_LEADS.length],
  ];
  return { tick, leads, booked, rotation };
}

export function Mockup({
  type = "pipeline",
  compact = false,
}: {
  type?: string;
  compact?: boolean;
}) {
  const live = useLiveDemo(type === "pipeline" || type === "calendar");
  return (
    <div
      className={`dashboard-mockup ${compact ? "compact" : ""}`}
      aria-label={`${type} automation system mockup`}
    >
      <div className="mockup-bar">
        <span className="flex gap-1">
          <i />
          <i />
          <i />
        </span>
        <span>
          CyberWorld /{" "}
          {type === "reviews"
            ? "Reputation"
            : type === "calendar"
              ? "Appointments"
              : type === "funnel"
                ? "Funnels"
                : type === "workflow"
                  ? "Workflows"
                  : "Sales pipeline"}
        </span>
        <span className="text-success live-dot">● Live demo</span>
      </div>
      <div className="mockup-inner">
        <aside>
          <Zap className="text-primary" size={16} />
          <LayoutDashboard size={14} />
          <Users size={14} />
          <Workflow size={14} />
          <BarChart3 size={14} />
        </aside>
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold">
              {type === "reviews"
                ? "Your reputation, growing."
                : type === "workflow"
                  ? "Lead nurture workflow"
                  : type === "calendar"
                    ? "Your calendar, filled."
                    : type === "funnel"
                      ? "From click to client."
                      : "Every lead. One pipeline."}
            </span>
            <span className="mockup-chip">
              This month <ChevronDown size={8} />
            </span>
          </div>
          {type === "workflow" ? (
            <div className="workflow-preview">
              {["New lead captured", "Instant SMS + email", "Appointment booked"].map((s, i) => (
                <div key={s}>
                  <span className="workflow-node">
                    <span className="text-primary">
                      {i === 2 ? <Check size={13} /> : <Zap size={13} />}
                    </span>
                    {s}
                    <Check size={10} className="ml-auto text-success" />
                  </span>
                  {i < 2 && <span className="connector" />}
                </div>
              ))}
            </div>
          ) : type === "reviews" ? (
            <>
              <div className="flex items-center gap-4 py-3">
                <span className="text-4xl font-bold">—</span>
                <span className="text-success">
                  ★★★★★
                  <br />
                  <small className="text-muted-foreground">Sample reviews</small>
                </span>
              </div>
              {[
                "Excellent service. Highly recommend!",
                "Quick, professional and reliable.",
                "Five stars from start to finish.",
              ].map((t) => (
                <div className="mockup-review" key={t}>
                  <Star size={10} className="text-success" />
                  {t}
                  <Check size={10} className="ml-auto text-success" />
                </div>
              ))}
            </>
          ) : type === "calendar" ? (
            <>
              <div className="calendar-preview">
                {Array.from({ length: 21 }, (_, i) => (
                  <span className={(i + live.tick) % 4 === 0 ? "booked" : ""} key={i}>
                    {i + 1}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-success">✓ All appointment reminders sent</p>
            </>
          ) : type === "funnel" ? (
            <div className="funnel-preview">
              {["Sample visitors", "Sample leads", "Sample calls"].map((t, i) => (
                <div key={t} className={`funnel-step funnel-${i}`}>
                  {t}
                  <ArrowUpRight size={12} />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mockup-metrics">
                <div>
                  <small>Total leads</small>
                  <strong>
                    {live.leads} <span>sample</span>
                  </strong>
                </div>
                <div>
                  <small>Appointments</small>
                  <strong>
                    {live.booked} <span>sample</span>
                  </strong>
                </div>
                <div>
                  <small>Response time</small>
                  <strong>
                    — <span>sample</span>
                  </strong>
                </div>
              </div>
              <div className="pipeline-preview">
                {["New leads", "In conversation", "Booked"].map((s, i) => (
                  <div key={s}>
                    <div className="pipeline-label">
                      <span className={i === 2 ? "text-success" : "text-primary"}>●</span> {s}{" "}
                      <span className="ml-auto">
                        {[live.leads, 8 + Math.floor(live.tick / 3), live.booked][i]}
                      </span>
                    </div>
                    {live.rotation.map((n, j) => (
                      <div className="lead-preview" key={n}>
                        <span className="lead-avatar">{n.slice(0, 1)}</span>
                        <span>
                          {n}
                          <small>
                            {["Property inquiry", "Follow-up scheduled", "Showing confirmed"][i]}
                          </small>
                        </span>
                        <span className="ml-auto text-success">
                          <Check size={9} />
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="mockup-status">
            <span className="text-success">●</span> Automations active{" "}
            <span className="ml-auto text-muted-foreground">Powered by GoHighLevel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
