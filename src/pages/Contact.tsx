import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import LiquidButton from "@/components/LiquidButton";
import StaggerContainer, { staggerItem } from "@/components/StaggerContainer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen px-4 pt-8 pb-24 md:pt-24 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer className="space-y-8">
          <motion.div variants={staggerItem} className="text-center space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Get in Touch</h1>
            <p className="text-muted-foreground">Need help? We're here for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
            <motion.div variants={staggerItem}>
              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input id="name" required placeholder="Your full name" className="glass border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" className="glass border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea id="message" required rows={5} placeholder="How can we help?" className="glass border-border resize-none" />
                  </div>
                  <LiquidButton type="submit" disabled={sending} className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </LiquidButton>
                </form>
              </GlassCard>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "SREC Campus, Coimbatore" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "support@asphapark.in" },
              ].map((item) => (
                <GlassCard key={item.label} className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">{item.value}</div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Contact;
