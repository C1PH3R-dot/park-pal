import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import LiquidButton from "@/components/LiquidButton";
import StaggerContainer, { staggerItem } from "@/components/StaggerContainer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const locations = [
  { id: "srec", name: "SREC Campus", sub: "EIE Block" },
  { id: "brookefields", name: "Brookefields Mall", sub: "Level B1-B3" },
  { id: "prozone", name: "Prozone Mall", sub: "Basement Parking" },
  { id: "funrepublic", name: "Fun Republic", sub: "Open Lot" },
];

// Generate 32 slots with random occupancy
const generateSlots = () =>
  Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    label: `${String.fromCharCode(65 + Math.floor(i / 8))}${(i % 8) + 1}`,
    occupied: Math.random() > 0.55,
  }));

const Booking = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [slots] = useState(generateSlots);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [booked, setBooked] = useState(false);

  const handleSlotClick = (slotId: number, occupied: boolean) => {
    if (occupied) return;
    setSelectedSlot(slotId);
    setShowConfirm(true);
    setBooked(false);
  };

  const handleConfirm = () => {
    setBooked(true);
  };

  const currentLocation = locations.find((l) => l.id === selectedLocation)!;
  const selectedSlotData = slots.find((s) => s.id === selectedSlot);

  return (
    <div className="min-h-screen px-4 pt-8 pb-24 md:pt-24 md:pb-8">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="space-y-6">
          <motion.div variants={staggerItem} className="text-center space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Book a Spot</h1>
            <p className="text-muted-foreground">Select a location and pick your parking slot</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
            {/* Location Selector */}
            <motion.div variants={staggerItem} className="space-y-3">
              {locations.map((loc) => (
                <GlassCard
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer flex items-center gap-3 p-4 transition-all duration-200 ${
                    selectedLocation === loc.id
                      ? "ring-2 ring-primary shadow-lg shadow-primary/10"
                      : ""
                  }`}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{loc.name}</div>
                    <div className="text-xs text-muted-foreground">{loc.sub}</div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-sm bg-emerald" /> Available
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-sm bg-rose" /> Occupied
                </div>
              </GlassCard>
            </motion.div>

            {/* Parking Grid */}
            <motion.div variants={staggerItem}>
              <GlassCard className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-bold text-foreground">{currentLocation.name}</h2>
                  <span className="text-xs text-muted-foreground">
                    {slots.filter((s) => !s.occupied).length} slots free
                  </span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {slots.map((slot) => (
                    <motion.button
                      key={slot.id}
                      onClick={() => handleSlotClick(slot.id, slot.occupied)}
                      whileHover={!slot.occupied ? { scale: 1.1 } : {}}
                      whileTap={!slot.occupied ? { scale: 0.95 } : {}}
                      className={`aspect-square rounded-xl text-xs font-bold flex items-center justify-center transition-all duration-200 ${
                        slot.occupied
                          ? "bg-rose/20 text-rose cursor-not-allowed opacity-60"
                          : "bg-emerald/15 text-emerald cursor-pointer slot-available hover:bg-emerald/25"
                      }`}
                    >
                      {slot.label}
                    </motion.button>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </StaggerContainer>
      </div>

      {/* Booking Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="glass border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {booked ? "Booking Confirmed!" : "Confirm Booking"}
            </DialogTitle>
            <DialogDescription>
              {booked
                ? "Your parking slot has been reserved successfully."
                : `Reserve slot ${selectedSlotData?.label} at ${currentLocation.name}?`}
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {booked ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center py-6 gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center">
                  <Check className="h-8 w-8 text-emerald" />
                </div>
                <p className="font-bold text-lg text-foreground">Slot {selectedSlotData?.label}</p>
                <p className="text-sm text-muted-foreground">{currentLocation.name} — {currentLocation.sub}</p>
              </motion.div>
            ) : (
              <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2">
                <div className="glass rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground">Slot {selectedSlotData?.label}</div>
                    <div className="text-xs text-muted-foreground">{currentLocation.sub}</div>
                  </div>
                  <div className="text-2xl font-bold text-emerald">₹40/hr</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <DialogFooter>
            {booked ? (
              <LiquidButton onClick={() => setShowConfirm(false)} className="w-full">
                Done
              </LiquidButton>
            ) : (
              <LiquidButton onClick={handleConfirm} className="w-full">
                Confirm Booking
              </LiquidButton>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;
