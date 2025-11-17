export default function Services() {
  const services = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time monitoring and analysis of emerging threats across your infrastructure.',
      icon: '🎯',
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      icon: '🔍',
    },
    {
      title: 'Incident Response',
      description: '24/7 rapid response team to contain and remediate security breaches.',
      icon: '🚨',
    },
    {
      title: 'Security Compliance',
      description: 'Expert guidance on GDPR, HIPAA, PCI-DSS, and other compliance frameworks.',
      icon: '✓',
    },
    {
      title: 'Identity & Access',
      description: 'Advanced IAM solutions with multi-factor authentication and zero-trust architecture.',
      icon: '🔐',
    },
    {
      title: 'Data Protection',
      description: 'Encryption, DLP, and backup solutions to safeguard your critical data assets.',
      icon: '💾',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Cybersecurity Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive protection tailored to your organization's needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border hover:border-blue-500/50 hover:bg-card/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
