import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";



export function ConsultationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    preferredCountry: "",
    preferredStudyLevel: "",
    counselingMode: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          service_type: formData.serviceType,
          preferred_country: formData.preferredCountry || null,
          preferred_study_level: formData.preferredStudyLevel || null,
          counseling_mode: formData.counselingMode || null,
          message: formData.message.trim() || null,
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        preferredCountry: "",
        preferredStudyLevel: "",
        counselingMode: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Get Free Consultation</h2>
        <p className="text-muted-foreground">Fill in the form below and we'll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+92 300 1234567"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address (Optional)
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
            What are you looking for? *
          </label>
          <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)} required>
            <SelectTrigger id="serviceType">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ielts">IELTS Preparation</SelectItem>
              <SelectItem value="pte">PTE Preparation</SelectItem>
              <SelectItem value="study-uk">Study in UK</SelectItem>
              <SelectItem value="study-china">Study in China (MBBS/BDS)</SelectItem>
              <SelectItem value="study-kyrgyzstan">Study in Kyrgyzstan</SelectItem>
              <SelectItem value="chinese-language">Chinese Language Program</SelectItem>
              <SelectItem value="general">General Guidance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredStudyLevel" className="block text-sm font-medium mb-2">
              Preferred Study Level
            </label>
            <Select value={formData.preferredStudyLevel} onValueChange={(value) => handleChange("preferredStudyLevel", value)}>
              <SelectTrigger id="preferredStudyLevel">
                <SelectValue placeholder="Select study level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                <SelectItem value="research">Postgraduate by Research</SelectItem>
                <SelectItem value="language">Language Course</SelectItem>
                <SelectItem value="foundation">Foundation/Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="preferredCountry" className="block text-sm font-medium mb-2">
              Preferred Country
            </label>
            <Select value={formData.preferredCountry} onValueChange={(value) => handleChange("preferredCountry", value)}>
              <SelectTrigger id="preferredCountry">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="counselingMode" className="block text-sm font-medium mb-2">
            Preferred Mode of Counseling
          </label>
          <Select value={formData.counselingMode} onValueChange={(value) => handleChange("counselingMode", value)}>
            <SelectTrigger id="counselingMode">
              <SelectValue placeholder="How would you like to be counseled?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="in-person">In-Person</SelectItem>
              <SelectItem value="phone">Phone Call</SelectItem>

              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Additional Message (Optional)
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Tell us more about your study plans..."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full cta-button" disabled={isSubmitting}>
          <Send className="mr-2 h-5 w-5" />
          {isSubmitting ? "Submitting..." : "Get Free Consultation"}
        </Button>
      </form>
    </Card>
  );
}