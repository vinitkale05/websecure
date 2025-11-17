export default function Testimonials() {
  const testimonials = [
    {
      text: 'Implemented their security solution and saw a 95% reduction in security incidents within the first month.',
      author: 'Sarah Mitchell',
      role: 'CISO, Fortune 500 Tech Company',
    },
    {
      text: 'Outstanding support team and technology. They helped us achieve full compliance in record time.',
      author: 'James Anderson',
      role: 'Head of Security, Financial Services',
    },
    {
      text: 'Best ROI security investment we\'ve made. The platform is intuitive and results are immediate.',
      author: 'Maria Garcia',
      role: 'Security Director, Healthcare Provider',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by leading organizations worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
