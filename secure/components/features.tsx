export default function Features() {
  const features = [
    {
      category: 'Detection & Prevention',
      items: ['Advanced threat detection', 'Behavioral analytics', 'Zero-day protection', 'Real-time blocking'],
    },
    {
      category: 'Management & Orchestration',
      items: ['Unified security dashboard', 'Automated response', 'Alert prioritization', 'Multi-cloud support'],
    },
    {
      category: 'Intelligence & Reporting',
      items: ['Threat reports', 'Compliance dashboards', 'Risk assessments', 'Executive summaries'],
    },
    {
      category: 'Integration & Support',
      items: ['API integrations', '24/7 support', 'Expert consulting', 'Training & certification'],
    },
  ]

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-lg text-muted-foreground">Industry-leading capabilities across all security domains</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{feature.category}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
