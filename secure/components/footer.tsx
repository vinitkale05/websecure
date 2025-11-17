export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CyberShield Pro</h3>
            <p className="text-sm opacity-80">Enterprise cybersecurity solutions for modern businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Threat Intelligence</a></li>
              <li><a href="#" className="hover:opacity-100">Incident Response</a></li>
              <li><a href="#" className="hover:opacity-100">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">About</a></li>
              <li><a href="#" className="hover:opacity-100">Careers</a></li>
              <li><a href="#" className="hover:opacity-100">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100">Terms</a></li>
              <li><a href="#" className="hover:opacity-100">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 CyberShield Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
