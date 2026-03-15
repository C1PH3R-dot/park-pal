import { motion } from "framer-motion";
import { Brain, Timer, ParkingSquare, Users } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import StaggerContainer, { staggerItem } from "@/components/StaggerContainer";

const metrics = [
  { label: "AI Detection Accuracy", value: "99.2%", icon: Brain, color: "text-primary" },
  { label: "System Latency", value: "12ms", icon: Timer, color: "text-accent" },
  { label: "Total Slots", value: "120", icon: ParkingSquare, color: "text-emerald" },
  { label: "Current Occupancy", value: "84%", icon: Users, color: "text-rose" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen px-4 pt-8 pb-24 md:pt-24 md:pb-8">
      <div className="max-w-5xl mx-auto">
        <StaggerContainer className="space-y-8">
          <motion.div variants={staggerItem} className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              ASPHA PARK ASSISTANT
            </h1>
            <p className="text-muted-foreground text-lg">
              Intelligent Parking Management System
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <GlassCard
                key={m.label}
                variants={staggerItem}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center space-y-3 cursor-default"
              >
                <div className={`p-3 rounded-xl bg-foreground/5 ${m.color}`}>
                  <m.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-bold tabular-nums text-foreground">
                  {m.value}
                </span>
                <span className="text-sm text-muted-foreground">{m.label}</span>
              </GlassCard>
            ))}
          </motion.div>

          <motion.div variants={staggerItem}>
            <GlassCard className="p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">System Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Zones Active", value: "4" },
                  { label: "Avg. Duration", value: "2.4h" },
                  { label: "Revenue Today", value: "₹12,480" },
                  { label: "Uptime", value: "99.9%" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold tabular-nums text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Dashboard;
