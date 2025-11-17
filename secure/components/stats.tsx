export default function Stats() {
  const stats = [
    { label: 'Threats Blocked Daily', value: '2.3M+' },
    { label: 'Security Experts', value: '500+' },
    { label: 'Enterprise Clients', value: '1,000+' },
    { label: 'Uptime Guarantee', value: '99.99%' },
  ]

  return (
    <section className="py-16 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
