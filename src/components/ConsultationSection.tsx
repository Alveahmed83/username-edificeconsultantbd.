import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationSectionProps {
  prefilledSubject: string;
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  division: string;
  areaScale: string;
  brief: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  brief?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  prefilledSubject,
}) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    division: 'Architectural Consultancy (Commercial / Residential)',
    areaScale: '',
    brief: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledSubject) {
      setForm((prev) => ({
        ...prev,
        brief: `Inquiry regarding: ${prefilledSubject}. `,
      }));
      setSubmittedRef(null);
    }
  }, [prefilledSubject]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^[+\d\s()-]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!form.brief.trim() || form.brief.trim().length < 15) {
      nextErrors.brief =
        'Please provide a brief project or specification overview (at least 15 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = `EC-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setSubmittedRef(refCode);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `[${submittedRef ?? 'New Brief'}] ${form.division} — ${form.fullName}`
    );
    const body = encodeURIComponent(
      `Client Name: ${form.fullName}\nOrganization: ${
        form.organization || 'Individual'
      }\nPhone: ${form.phone}\nEmail: ${form.email}\nDivision: ${
        form.division
      }\nApproximate Scope / Area: ${
        form.areaScale || 'To be discussed'
      }\n\nProject Brief:\n${form.brief}`
    );
    return `mailto:${COMPANY_INFO.office.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 glass-surface border-t border-white/50"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Studio Location & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-3">
                Commission &amp; Studio Desk
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-balance">
                Initiate an architectural or booking consultation
              </h2>
              <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                Visit our Planners Tower studio in Bangla Motor for custom
                architectural commissions, apartment bookings (Edifice Primus &amp;
                Edifice-01), or resort investment inquiries.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin
                  size={18}
                  className="text-[#D94A27] shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-mono text-zinc-500 mb-0.5">
                    CORPORATE STUDIO ADDRESS
                  </p>
                  <p className="text-sm font-semibold text-zinc-950">
                    {COMPANY_INFO.office.floor}, {COMPANY_INFO.office.building}
                  </p>
                  <p className="text-sm text-zinc-600">
                    {COMPANY_INFO.office.area}, {COMPANY_INFO.office.city},{' '}
                    {COMPANY_INFO.office.country}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {COMPANY_INFO.office.coordinates}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-start gap-3.5">
                <Phone size={18} className="text-[#D94A27] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-mono text-zinc-500">
                    DIRECT TELEPHONES
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.principal.phoneRaw}`}
                    className="block font-mono text-sm font-semibold text-zinc-950 hover:text-[#D94A27] transition-colors"
                  >
                    Consultancy: {COMPANY_INFO.principal.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.principal.developmentHotline.replace(/\s+/g, '')}`}
                    className="block font-mono text-xs font-medium text-zinc-700 hover:text-[#D94A27] transition-colors"
                  >
                    Development Hotline: {COMPANY_INFO.principal.developmentHotline}
                  </a>
                  <p className="pt-0.5 text-xs text-zinc-500">
                    {COMPANY_INFO.office.hours}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-start gap-3.5">
                <Mail size={18} className="text-[#D94A27] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-mono text-zinc-500">
                    ELECTRONIC MAIL
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.office.email}`}
                    className="block text-sm font-semibold text-zinc-950 hover:text-[#D94A27] transition-colors"
                  >
                    {COMPANY_INFO.office.email}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.principal.personalEmail}`}
                    className="block text-xs text-zinc-600 hover:text-[#D94A27] transition-colors"
                  >
                    Principal Direct: {COMPANY_INFO.principal.personalEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Consultation Brief Form */}
          <div className="lg:col-span-7 glass-card rounded-xl p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-6 space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-[#D94A27] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-mono text-xs text-[#D94A27] font-semibold">
                      BRIEF LOGGED · REF {submittedRef}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-zinc-950 mt-1">
                      Consultation brief prepared
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      Thank you, {form.fullName}. Your inquiry details for{' '}
                      <span className="font-medium text-zinc-900">
                        {form.division}
                      </span>{' '}
                      are ready. Send this formatted brief directly via your
                      email client to our Planners Tower desk or reach us on{' '}
                      <span className="font-mono font-medium text-zinc-900">
                        {COMPANY_INFO.principal.phoneDisplay}
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-lg p-4 text-xs font-mono text-zinc-700 space-y-1.5">
                  <p>CLIENT: {form.fullName}</p>
                  <p>PHONE: {form.phone}</p>
                  <p>EMAIL: {form.email}</p>
                  <p>SCOPE: {form.areaScale || 'Standard Feasibility'}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors"
                  >
                    <Send size={14} />
                    Dispatch via Email Client
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 border border-zinc-300 rounded-md transition-colors cursor-pointer"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      placeholder="e.g. Tariqul Islam"
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#B83819]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Organization / Landowner (Optional)
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        setForm({ ...form, organization: e.target.value })
                      }
                      placeholder="Company or Private Client"
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#B83819]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#B83819]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="division"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Practice Division / Project
                    </label>
                    <select
                      id="division"
                      value={form.division}
                      onChange={(e) =>
                        setForm({ ...form, division: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    >
                      <option>
                        Architectural Consultancy (Commercial / Residential)
                      </option>
                      <option>
                        Edifice Development Ltd. (Primus / Genesis / Edifice-01 Booking)
                      </option>
                      <option>
                        Buruz Bay Hotel &amp; Resort (Hospitality &amp; Masterplan)
                      </option>
                      <option>
                        Structural, RAJUK Approval &amp; Supervision
                      </option>
                      <option>
                        Edifice Home Appliances (Specification / Supply)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="areaScale"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Site Location / Approximate Area
                    </label>
                    <input
                      id="areaScale"
                      type="text"
                      value={form.areaScale}
                      onChange={(e) =>
                        setForm({ ...form, areaScale: e.target.value })
                      }
                      placeholder="e.g. Shagufta, 5 Katha / 2,800 sq. ft."
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="brief"
                    className="block text-xs font-semibold text-zinc-800 mb-1.5"
                  >
                    Project or Specification Brief *
                  </label>
                  <textarea
                    id="brief"
                    rows={4}
                    value={form.brief}
                    onChange={(e) =>
                      setForm({ ...form, brief: e.target.value })
                    }
                    placeholder="Outline your site context, timeline, unit preference, or appliance requirement..."
                    className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFAFA] border border-zinc-300 rounded-md focus:outline-none focus:border-[#D94A27] focus:ring-1 focus:ring-[#D94A27]"
                  />
                  {errors.brief && (
                    <p className="mt-1 text-xs text-[#B83819]">
                      {errors.brief}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-zinc-500">
                    All project inquiries are reviewed directly by our Dhaka studio.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Prepare Consultation Brief
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
