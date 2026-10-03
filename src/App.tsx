import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Globe,
  Terminal,
  ExternalLink,
  Github,
  Send,
  Mail,
  Phone,
  CheckCircle2,
  Copy,
  Layers,
  Sparkles,
  Server,
  Workflow,
  BookOpen,
  ChevronRight,
  Menu,
  X,
  Play,
  RotateCcw,
  Flame,
  Check,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'ecommerce' | 'mobile'>('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Terminal Runner State
  const [terminalTab, setTerminalTab] = useState<'main' | 'models' | 'api'>('main');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[] | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse spotlight positioning for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  // Copy helper with feedback
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Run code simulation in Terminal
  const runCodeExecution = () => {
    setIsRunningCode(true);
    setTerminalOutput(null);

    setTimeout(() => {
      setTerminalOutput([
        '⚡ [200 OK] Django REST framework engine initialized...',
        '📦 [PostgreSQL] Connected to Neon Cloud database (latency: 14ms)',
        '☁️ [Cloudflare] D1 read replica synchronized successfully',
        '🚀 [Worker API] Microservice route /api/v1/profile active',
        '✅ Developer: Hojiakbar Hoshimjonov',
        '⭐ Role: Python Backend Developer · Web · Mobile · AI',
        '>>> Ready for production deployments & interviews!'
      ]);
      setIsRunningCode(false);
    }, 700);
  };

  const resetTerminal = () => {
    setTerminalOutput(null);
    setIsRunningCode(false);
  };

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 143, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(91, 110, 245, ${0.1 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05050f] text-[#f8fafc] font-body overflow-x-hidden selection:bg-[#5b6ef5] selection:text-white">
      {/* Scroll Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100]">
        <div
          className="h-full bg-gradient-to-r from-[#5b6ef5] via-[#00d4ff] to-[#00e5a0] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(0,212,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Dynamic Ambient Glows */}
      <div className="fixed -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-radial from-[#5b6ef5]/18 to-transparent pointer-events-none z-0 blur-3xl animate-pulse-glow" />
      <div className="fixed top-1/2 -right-40 w-[550px] h-[550px] rounded-full bg-radial from-[#00d4ff]/12 to-transparent pointer-events-none z-0 blur-3xl" />
      <div className="fixed -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-radial from-[#9d6fff]/15 to-transparent pointer-events-none z-0 blur-3xl" />

      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05050f]/85 backdrop-blur-2xl border-b border-[#7882ff]/15 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg font-extrabold tracking-tight font-display hover:opacity-95 transition-opacity"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5b6ef5] via-[#7c8fff] to-[#00d4ff] flex items-center justify-center text-white text-sm font-mono font-bold shadow-lg shadow-[#5b6ef5]/30 group-hover:scale-105 transition-transform">
              HH
            </span>
            <span className="bg-gradient-to-r from-[#f8fafc] via-[#cbd5e1] to-[#7c8fff] bg-clip-text text-transparent text-xl font-bold tracking-tight">
              Hojiakbar.dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#cbd5e1]">
            <a href="#about" className="hover:text-white transition-colors py-1">
              Haqimda
            </a>
            <a href="#skills" className="hover:text-white transition-colors py-1">
              Ko'nikmalar
            </a>
            <a href="#experience" className="hover:text-white transition-colors py-1">
              Tajriba
            </a>
            <a href="#projects" className="hover:text-white transition-colors py-1 flex items-center gap-1.5">
              <span>Loyihalar</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#00e5a0]/15 text-[#00e5a0] text-[10px] font-mono font-semibold">
                Live
              </span>
            </a>
            <a href="#education" className="hover:text-white transition-colors py-1">
              Ta'lim &amp; Tillar
            </a>
            <a
              href="#contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5b6ef5] to-[#9d6fff] text-white hover:shadow-xl hover:shadow-[#5b6ef5]/40 hover:-translate-y-0.5 transition-all text-xs font-semibold uppercase tracking-wider"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Bog'lanish</span>
                <ArrowUpRight size={14} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7c8fff] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#0f1026] border border-[#7882ff]/20 text-[#cbd5e1] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0b18]/95 backdrop-blur-2xl border-b border-[#7882ff]/20 px-6 py-6 space-y-4 shadow-2xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#cbd5e1] hover:text-white py-1"
            >
              Haqimda
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#cbd5e1] hover:text-white py-1"
            >
              Ko'nikmalar
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#cbd5e1] hover:text-white py-1"
            >
              Tajriba
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#cbd5e1] hover:text-white py-1"
            >
              Loyihalar (Production)
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#cbd5e1] hover:text-white py-1"
            >
              Ta'lim &amp; Tillar
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5b6ef5] to-[#9d6fff] text-white text-xs font-semibold"
            >
              <span>Bog'lanish</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#5b6ef5]/10 border border-[#5b6ef5]/30 text-[#7c8fff] text-xs font-mono shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse-dot" />
              <span className="font-medium text-slate-200">
                Python Backend Developer · Ishga tayyor · Open to work
              </span>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.06]">
                <span className="block text-white">HOJIAKBAR</span>
                <span className="block bg-gradient-to-r from-[#7c8fff] via-[#00d4ff] to-[#9d6fff] bg-clip-text text-transparent">
                  HOSHIMJONOV
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#7c8fff] pt-1">
                Python Backend Developer · Web · Mobile · AI
              </p>
            </div>

            {/* Readable Description */}
            <p className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Python va Django asosida backend tizimlar, REST API'lar va web loyihalar ishlab
              chiqaman. E-commerce, mobil ilovalar, database, cloud deployment va AI
              integratsiyalar bilan ishlayman.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5b6ef5] to-[#9d6fff] text-white font-medium text-sm shadow-xl shadow-[#5b6ef5]/30 hover:shadow-[#5b6ef5]/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Loyihalarni ko'rish</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/hojiakbarh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#0f1026] border border-[#7882ff]/25 text-white font-medium text-sm hover:border-[#7c8fff]/60 hover:bg-[#15163a] transition-all flex items-center gap-2 shadow-sm"
              >
                <Github size={17} />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://t.me/hjkbrsvnch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#0f1026] border border-[#7882ff]/25 text-[#00d4ff] font-medium text-sm hover:border-[#00d4ff]/60 hover:bg-[#15163a] transition-all flex items-center gap-2 shadow-sm"
              >
                <Send size={16} />
                <span>Telegram: @hjkbrsvnch</span>
              </a>
            </div>

            {/* Live Link Chips */}
            <div className="pt-2 flex flex-wrap gap-2.5 font-mono text-xs">
              <a
                href="https://termopanel-facade-shop.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/20 hover:scale-[1.02] transition-all flex items-center gap-1.5"
              >
                <Globe size={13} />
                <span>🌐 TermoPanel Live Demo</span>
              </a>

              <a
                href="https://play.google.com/store/apps/developer?id=Hojiakbar+Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#00e5a0]/10 border border-[#00e5a0]/30 text-[#00e5a0] hover:bg-[#00e5a0]/20 hover:scale-[1.02] transition-all flex items-center gap-1.5"
              >
                <Smartphone size={13} />
                <span>📱 Google Play Developer</span>
              </a>

              <a
                href="https://github.com/hojiakbarh/hojiakbar-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#5b6ef5]/10 border border-[#5b6ef5]/30 text-[#7c8fff] hover:bg-[#5b6ef5]/20 hover:scale-[1.02] transition-all flex items-center gap-1.5"
              >
                <Code2 size={13} />
                <span>💻 Portfolio Repo</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-[#7882ff]/15 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold font-display text-white">
                  2<span className="text-[#7c8fff]">+</span>
                </div>
                <div className="text-xs text-[#cbd5e1] mt-1 font-medium">
                  Yil mustaqil ishlab chiqish
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-display text-white">
                  4<span className="text-[#00e5a0]">+</span>
                </div>
                <div className="text-xs text-[#cbd5e1] mt-1 font-medium">
                  Real production loyihalar
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-display text-white">
                  4
                </div>
                <div className="text-xs text-[#cbd5e1] mt-1 font-medium">
                  Asosiy yo'nalish
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Python Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 shadow-2xl shadow-black/90 overflow-hidden font-mono text-xs sm:text-sm animate-float">
              {/* Header with Run Button */}
              <div className="px-4 py-3 bg-[#0f1026] border-b border-[#7882ff]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="ml-2 flex items-center gap-2">
                    <button
                      onClick={() => setTerminalTab('main')}
                      className={`text-[11px] px-2 py-0.5 rounded transition-colors ${
                        terminalTab === 'main'
                          ? 'bg-[#5b6ef5]/25 text-white font-semibold'
                          : 'text-[#8c92b8] hover:text-white'
                      }`}
                    >
                      portfolio.py
                    </button>
                    <button
                      onClick={() => setTerminalTab('models')}
                      className={`text-[11px] px-2 py-0.5 rounded transition-colors ${
                        terminalTab === 'models'
                          ? 'bg-[#5b6ef5]/25 text-white font-semibold'
                          : 'text-[#8c92b8] hover:text-white'
                      }`}
                    >
                      models.py
                    </button>
                  </div>
                </div>

                {/* Run code trigger */}
                <div className="flex items-center gap-2">
                  {terminalOutput ? (
                    <button
                      onClick={resetTerminal}
                      className="px-2.5 py-1 rounded bg-[#1f2142] hover:bg-[#2b2e5a] text-[#cbd5e1] text-[11px] flex items-center gap-1 transition-colors"
                      title="Qayta tiklash"
                    >
                      <RotateCcw size={11} />
                      <span>Reset</span>
                    </button>
                  ) : (
                    <button
                      onClick={runCodeExecution}
                      disabled={isRunningCode}
                      className="px-3 py-1 rounded-full bg-[#00e5a0] hover:bg-[#00e5a0]/90 text-[#05050f] font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-md shadow-[#00e5a0]/20 hover:scale-105 active:scale-95"
                    >
                      <Play size={11} fill="currentColor" />
                      <span>{isRunningCode ? 'Yuklanmoqda...' : 'Run Code'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 sm:p-6 space-y-2 text-[#f8fafc] leading-relaxed max-h-[380px] overflow-y-auto">
                {terminalTab === 'main' && !terminalOutput && (
                  <>
                    <div>
                      <span className="text-[#64748b]"># hojiakbar.py — Python Backend Developer</span>
                    </div>
                    <div>
                      <span className="text-[#9d6fff]">class</span>{' '}
                      <span className="text-[#7c8fff] font-bold">HojiakbarHoshimjonov</span>:
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9d6fff]">def</span>{' '}
                      <span className="text-[#00d4ff]">__init__</span>(self):
                    </div>
                    <div className="pl-8 text-[#cbd5e1]">
                      self.title = <span className="text-[#00e5a0]">"Python Backend Developer"</span>
                    </div>
                    <div className="pl-8 text-[#cbd5e1]">
                      self.stack = &#123;
                    </div>
                    <div className="pl-12 text-[#cbd5e1]">
                      <span className="text-[#7c8fff]">"backend"</span>: [<span className="text-[#00e5a0]">"Python"</span>, <span className="text-[#00e5a0]">"Django"</span>, <span className="text-[#00e5a0]">"DRF"</span>],
                    </div>
                    <div className="pl-12 text-[#cbd5e1]">
                      <span className="text-[#7c8fff]">"database"</span>: [<span className="text-[#00e5a0]">"PostgreSQL"</span>, <span className="text-[#00e5a0]">"Neon"</span>, <span className="text-[#00e5a0]">"D1"</span>],
                    </div>
                    <div className="pl-12 text-[#cbd5e1]">
                      <span className="text-[#7c8fff]">"cloud"</span>: [<span className="text-[#00e5a0]">"Cloudflare"</span>, <span className="text-[#00e5a0]">"Supabase"</span>, <span className="text-[#00e5a0]">"Render"</span>],
                    </div>
                    <div className="pl-12 text-[#cbd5e1]">
                      <span className="text-[#7c8fff]">"mobile"</span>: [<span className="text-[#00e5a0]">"Flutter"</span>, <span className="text-[#00e5a0]">"Kotlin"</span>, <span className="text-[#00e5a0]">"Android"</span>]
                    </div>
                    <div className="pl-8 text-[#cbd5e1]">&#125;</div>
                    <div className="pt-2">
                      <span className="text-[#9d6fff]">print</span>(
                      <span className="text-[#00d4ff]">HojiakbarHoshimjonov</span>().title
                      )
                    </div>
                    <div className="pt-1 text-[#00e5a0] flex items-center gap-1">
                      <span>&gt;&gt;&gt; "Python Backend Developer · Web · Mobile · AI" 🚀</span>
                      <span className="cursor-blink" />
                    </div>
                  </>
                )}

                {terminalTab === 'models' && !terminalOutput && (
                  <div className="space-y-1 text-[#cbd5e1]">
                    <div className="text-[#64748b]"># models.py — TermoPanel &amp; Core Schema</div>
                    <div><span className="text-[#9d6fff]">from</span> django.db <span className="text-[#9d6fff]">import</span> models</div>
                    <div className="pt-2"><span className="text-[#9d6fff]">class</span> <span className="text-[#7c8fff] font-bold">Product</span>(models.Model):</div>
                    <div className="pl-4">title = models.CharField(max_length=200)</div>
                    <div className="pl-4">price_sqm = models.DecimalField(max_digits=10, decimal_places=2)</div>
                    <div className="pl-4">stock_status = models.BooleanField(default=<span className="text-[#00e5a0]">True</span>)</div>
                    <div className="pl-4">category = models.CharField(max_length=100)</div>
                    <div className="pt-1 text-[#00e5a0]">&gt;&gt;&gt; Database tables synced with PostgreSQL ✅</div>
                  </div>
                )}

                {/* Simulated Output after clicking Run Code */}
                {terminalOutput && (
                  <div className="space-y-2 py-1">
                    <div className="text-[#7c8fff] font-semibold flex items-center gap-1.5 pb-2 border-b border-[#7882ff]/20">
                      <CheckCircle2 size={15} className="text-[#00e5a0]" />
                      <span>Console Output (Execution Result):</span>
                    </div>
                    {terminalOutput.map((line, idx) => (
                      <div key={idx} className="text-[#f8fafc] flex items-start gap-2">
                        <span className="text-[#00d4ff] select-none">&gt;</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-24 px-6 border-t border-[#7882ff]/15 bg-[#0a0b1a]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
              <span>Haqimda</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Professional positioning &amp; Tajriba
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-7 space-y-5 text-[#cbd5e1] text-base leading-relaxed font-normal"
            >
              <p>
                Men <strong className="text-white font-semibold">Hojiakbar Hoshimjonov</strong> — Python
                va Django asosida barqaror backend tizimlar, REST API arxitekturalari,
                ma'lumotlar bazasi loyihalari va zamonaviy web mahsulotlar ishlab chiquvchi dasturchiman.
              </p>
              <p>
                2022-yildan buyon mustaqil dasturiy loyihalar ustida ishlab kelmoqdaman. Real e-commerce
                platformasi (<strong className="text-[#00e5a0] font-semibold">TermoPanel Facade Shop</strong>),
                Telegram bot va Mini App ekotizimlari, Google Play Store'da nashr etilgan Android ilovalar
                hamda xavfsiz JWT autentifikatsiyali REST API tizimlarini noldan boshlab production bosqichigacha
                muvaffaqiyatli yetkazdim.
              </p>
              <p>
                Loyiha talablariga mos ravishda Cloudflare (Pages, Workers, D1 database), Supabase,
                Neon PostgreSQL, Render va Docker kabi zamonaviy cloud &amp; infrastructure vositalaridan
                faol foydalanaman. Shuningdek, jarayonlarni tezlashtirish va imkoniyatlarni kengaytirish
                maqsadida Generative AI va API avtomatlashtirishlarini muvaffaqiyatli integratsiya qilaman.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card p-4 rounded-xl bg-[#0f1026] border border-[#7882ff]/20"
                >
                  <div className="text-xs font-mono text-[#7c8fff] mb-1 font-semibold">Tajriba davri</div>
                  <div className="text-base font-bold text-white">2022 — Hozir</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card p-4 rounded-xl bg-[#0f1026] border border-[#7882ff]/20"
                >
                  <div className="text-xs font-mono text-[#00d4ff] mb-1 font-semibold">Yo'nalish</div>
                  <div className="text-base font-bold text-white">Backend-First</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card p-4 rounded-xl bg-[#0f1026] border border-[#7882ff]/20 col-span-2 sm:col-span-1"
                >
                  <div className="text-xs font-mono text-[#00e5a0] mb-1 font-semibold">Tayyorgarlik</div>
                  <div className="text-base font-bold text-white">Production Ready</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Core Pillars Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.2 }}
              whileHover={{ y: -6 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card lg:col-span-5 p-7 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 space-y-5"
            >
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2.5">
                <Sparkles size={18} className="text-[#7c8fff]" />
                <span>Asosiy ustunliklar</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#5b6ef5]/20 flex items-center justify-center text-[#7c8fff] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="text-white font-semibold">Kuchli Backend &amp; API:</span>
                    <span className="text-[#cbd5e1] ml-1">Django, DRF, xavfsiz JWT autentifikatsiya, optimallashtirilgan CRUD va ORM so'rovlari.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="text-white font-semibold">Real E-commerce &amp; Botlar:</span>
                    <span className="text-[#cbd5e1] ml-1">TermoPanel do'koni, fasad kalkulyatori, savat va Telegram Admin Mini App integratsiyasi.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#00e5a0]/20 flex items-center justify-center text-[#00e5a0] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="text-white font-semibold">Cloud &amp; Database:</span>
                    <span className="text-[#cbd5e1] ml-1">PostgreSQL, Neon, Cloudflare D1, Supabase Storage, Render va Docker deployment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#9d6fff]/20 flex items-center justify-center text-[#9d6fff] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="text-white font-semibold">Cross-platform &amp; AI:</span>
                    <span className="text-[#cbd5e1] ml-1">Flutter/Android orqali mobil ilovalar, zamonaviy AI API va prompt muhandisligi.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#7882ff]/15 flex items-center justify-between text-xs font-mono text-[#cbd5e1]">
                <span>Tillar: O'zbek, English, Русский</span>
                <span className="text-[#00e5a0] font-semibold">● Faol ishlab chiqish</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION WITH ASSEMBLE ANIMATION */}
      <section id="skills" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
              <span>Texnik Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Ko'nikmalar va Texnologiyalar
            </h2>
            <p className="text-[#cbd5e1] text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Faqat mustaqil loyihalar va ishlab chiqarish muhitida real qo'llanilgan, tasdiqlangan texnologiyalar to'plami.
            </p>
          </motion.div>

          {/* Grid of Assemble Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Server size={24} />,
                color: '#5b6ef5',
                title: 'Backend',
                desc: 'Python va Django asosida backend tizimlar, REST API\'lar va autentifikatsiya tizimlari.',
                tags: ['Python', 'Django', 'Django REST Framework', 'REST API', 'JWT', 'CRUD', 'ORM']
              },
              {
                icon: <Database size={24} />,
                color: '#00d4ff',
                title: 'Database & Storage',
                desc: 'Relational ma\'lumotlar bazalari, cloud storage va query optimizatsiyasi.',
                tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Neon PostgreSQL', 'Supabase', 'Supabase Storage']
              },
              {
                icon: <Cloud size={24} />,
                color: '#00e5a0',
                title: 'Cloud & Deployment',
                desc: 'Cloudflare ekotizimi, serverless ma\'lumotlar ombori va production hosting.',
                tags: ['Cloudflare', 'Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare D1', 'Render', 'Cloud deployment']
              },
              {
                icon: <Cpu size={24} />,
                color: '#9d6fff',
                title: 'AI & Automation',
                desc: 'Generativ modellar va API integratsiyasi orqali tizimlarni avtomatlashtirish.',
                tags: ['Generative AI', 'AI API', 'Prompt Engineering', 'Automation', 'AI Integration']
              },
              {
                icon: <Globe size={24} />,
                color: '#ffbc2e',
                title: 'Web Frontend',
                desc: 'Interaktiv komponentlar, moslashuvchan dizayn va zamonaviy foydalanuvchi interfeyslari.',
                tags: ['JavaScript', 'React', 'HTML', 'CSS', 'Responsive UI']
              },
              {
                icon: <Smartphone size={24} />,
                color: '#ff5f57',
                title: 'Mobile & DevOps',
                desc: 'Android ilovalar, Google Play Store release, konteynerlar va versiya nazorati.',
                tags: ['Flutter', 'Kotlin', 'Android', 'Git', 'GitHub', 'Docker', 'Linux', 'Env Variables']
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-7 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 hover:border-[#5b6ef5]/60 transition-all space-y-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">{skill.title}</h3>
                  <p className="text-xs text-[#cbd5e1] mt-1 font-normal leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border font-medium"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        borderColor: `${skill.color}35`,
                        color: skill.color
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION WITH ASSEMBLE ANIMATION */}
      <section id="experience" className="relative z-10 py-24 px-6 border-t border-[#7882ff]/15 bg-[#0a0b1a]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
              <span>Tajriba</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Professional faoliyat
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onMouseMove={handleMouseMove}
            className="spotlight-card rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#5b6ef5] via-[#00d4ff] to-[#9d6fff]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#7882ff]/15 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Independent Software Developer
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#00e5a0]/15 border border-[#00e5a0]/30 text-[#00e5a0] text-xs font-mono font-medium">
                    2+ yil mustaqil
                  </span>
                </div>
                <p className="text-sm text-[#7c8fff] mt-1 font-mono font-medium">
                  Python Backend Developer · Web · Mobile · AI
                </p>
              </div>

              <div className="text-sm font-mono text-[#cbd5e1] shrink-0 font-medium">
                🗓️ 2022 — Hozirgacha
              </div>
            </div>

            {/* Bullet Points Assemble */}
            <div className="pt-6 space-y-4 text-sm sm:text-base text-[#cbd5e1] font-normal leading-relaxed">
              <p>
                Mustaqil ravishda real ishlab chiqarish darajasidagi tizimlarni rejalashtirish,
                kodlash, ma'lumotlar bazasini modellashtirish va cloud muhitlariga deploy qilish bilan
                shug'ullanganman:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  'Python va Django asosida backend tizimlar ishlab chiqish.',
                  'Django REST Framework orqali REST API\'lar yaratish.',
                  'PostgreSQL, MySQL va SQLite bilan ishlash.',
                  'E-commerce platformalar va to\'liq savdo tizimlari ishlab chiqish.',
                  'Web va mobile application development (Flutter, Kotlin, Android).',
                  'AI API va automation integratsiyalaridan foydalanish.',
                  'Cloud deployment va production loyihalarni qo‘llab-quvvatlash.',
                  'Git, Docker va Linux bilan ishlash.',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1026] border border-[#7882ff]/15 hover:border-[#7c8fff]/35 transition-colors"
                  >
                    <span className="text-[#00e5a0] font-mono text-sm font-bold">→</span>
                    <span className="text-[#f8fafc] text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION WITH ASSEMBLE ANIMATIONS */}
      <section id="projects" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest mb-3">
                <span className="w-6 h-[1px] bg-[#7c8fff]" />
                <span>Loyihalar</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                Ishlab chiqilgan loyihalar
              </h2>
              <p className="text-[#cbd5e1] text-sm sm:text-base mt-2 font-normal">
                Problem, Solution, Key Features va Tech Stack asosida professional taqdimot.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#0a0b18] border border-[#7882ff]/25 font-mono text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#5b6ef5] text-white font-semibold'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                Barchasi (4)
              </button>
              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'ecommerce'
                    ? 'bg-[#5b6ef5] text-white font-semibold'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                E-Commerce
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'backend'
                    ? 'bg-[#5b6ef5] text-white font-semibold'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                Backend &amp; API
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'mobile'
                    ? 'bg-[#5b6ef5] text-white font-semibold'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. FEATURED: TERMOPANEL FACADE SHOP ASSEMBLE CARD */}
            <AnimatePresence>
              {(activeTab === 'all' || activeTab === 'ecommerce') && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card rounded-3xl bg-gradient-to-br from-[#0a1915] via-[#090b1c] to-[#0f1026] border border-[#00e5a0]/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-black/80"
                >
                  <div className="absolute top-0 right-0 px-6 py-2 bg-[#00e5a0]/15 border-b border-l border-[#00e5a0]/35 rounded-bl-2xl text-[11px] font-mono text-[#00e5a0] flex items-center gap-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse-dot" />
                    <span>001 · FEATURED · PRODUCTION LIVE</span>
                  </div>

                  <div className="max-w-4xl space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-13 h-13 rounded-2xl bg-[#00e5a0]/15 text-[#00e5a0] flex items-center justify-center text-3xl">
                        🏗️
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                          TermoPanel Facade Shop
                        </h3>
                        <div className="text-xs font-mono text-[#00e5a0] mt-0.5 font-semibold">
                          E-commerce platforma &amp; Telegram Bot Ekotizimi
                        </div>
                      </div>
                    </div>

                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="p-4 rounded-xl bg-[#05050f]/80 border border-[#7882ff]/20">
                        <div className="font-mono text-[#ff5f57] font-bold mb-1 uppercase tracking-wider text-[11px]">
                          PROBLEM
                        </div>
                        <div className="text-[#cbd5e1] leading-relaxed">
                          Fasad panellari sotuvida mijozlar uchun maydon bo'yicha narxni avtomat hisoblash,
                          katalogdagi parametrlarni qulay tanlash va buyurtmalarni tezkor qabul qilishda
                          avtomatlashgan platforma zarur edi.
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#05050f]/80 border border-[#00e5a0]/30">
                        <div className="font-mono text-[#00e5a0] font-bold mb-1 uppercase tracking-wider text-[11px]">
                          SOLUTION
                        </div>
                        <div className="text-[#cbd5e1] leading-relaxed">
                          To'liq ishlaydigan zamonaviy e-commerce veb platformasi ishlab chiqildi: interaktiv
                          fasad kalkulyatori, tovarlar katalogi, media galereya, savat, checkout oqimi va
                          buyurtmalarni yuboruvchi Telegram mijoz/admin boti.
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#7c8fff] font-semibold">
                        KEY FEATURES:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-[#f8fafc]">
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Product catalog &amp; detail gallery</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Interactive Facade square-meter calculator</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Cart &amp; checkout order flow</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Telegram customer bot &amp; Admin App</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Inventory &amp; customer management</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0f1026] border border-[#7882ff]/15">
                          <span className="text-[#00e5a0]">✓</span>
                          <span>Fast Cloudflare &amp; D1 serverless backend</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-semibold">
                        TECH STACK &amp; DEPLOYMENT:
                      </div>
                      <div className="flex flex-wrap gap-2 font-mono text-xs">
                        {[
                          'Python',
                          'Django',
                          'REST API',
                          'Cloudflare Pages',
                          'Cloudflare D1',
                          'Supabase Storage',
                          'Telegram Bot API',
                          'E-commerce',
                        ].map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-[#00e5a0]/15 border border-[#00e5a0]/30 text-[#00e5a0] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href="https://termopanel-facade-shop.pages.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#00e5a0] text-[#05050f] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#00e5a0]/90 transition-all shadow-lg shadow-[#00e5a0]/25 hover:scale-105"
                      >
                        <Globe size={15} />
                        <span>Live Platformani Ko'rish</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href="https://t.me/termopanelluz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#0f1026] border border-[#00d4ff]/40 text-[#00d4ff] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#16183a] transition-all hover:scale-105"
                      >
                        <Send size={15} />
                        <span>TermoPanel Telegram: @termopanelluz</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2, 3, 4 PROJECT CARDS WITH ASSEMBLE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 2. ANDROID APPS */}
              <AnimatePresence>
                {(activeTab === 'all' || activeTab === 'mobile') && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 p-7 flex flex-col justify-between hover:border-[#7c8fff]/50 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="w-12 h-12 rounded-xl bg-[#5b6ef5]/15 text-[#7c8fff] flex items-center justify-center text-xl">
                          📱
                        </span>
                        <span className="text-xs font-mono text-[#cbd5e1]">002</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold font-display text-white">
                          Android Ilovalar (Google Play)
                        </h3>
                        <div className="text-xs font-mono text-[#00e5a0] mt-1 font-semibold">
                          Google Play Store nashrlari
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-[#cbd5e1] font-normal leading-relaxed">
                        <div>
                          <strong className="text-white font-semibold">Problem:</strong> Foydalanuvchilar
                          uchun qulay va barqaror ishlaydigan mobil ilovalar yaratish.
                        </div>
                        <div>
                          <strong className="text-white font-semibold">Solution:</strong> Flutter va Kotlin
                          vositalarida mobil interfeyslar, API ulanishlari va Google Play Store nashri.
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-2">
                        {['Flutter', 'Kotlin', 'Android', 'Google Play', 'Mobile UI'].map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md bg-[#0f1026] border border-[#7882ff]/20 text-[#cbd5e1]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#7882ff]/15">
                      <a
                        href="https://play.google.com/store/apps/developer?id=Hojiakbar+Dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00e5a0] hover:underline"
                      >
                        <span>Google Play Store'da ko'rish</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 3. TODO LIST API */}
              <AnimatePresence>
                {(activeTab === 'all' || activeTab === 'backend') && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 p-7 flex flex-col justify-between hover:border-[#7c8fff]/50 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="w-12 h-12 rounded-xl bg-[#00d4ff]/15 text-[#00d4ff] flex items-center justify-center text-xl">
                          ✅
                        </span>
                        <span className="text-xs font-mono text-[#cbd5e1]">003</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold font-display text-white">
                          ToDo List REST API
                        </h3>
                        <div className="text-xs font-mono text-[#00d4ff] mt-1 font-semibold">
                          DRF &amp; PostgreSQL Backend
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-[#cbd5e1] font-normal leading-relaxed">
                        <div>
                          <strong className="text-white font-semibold">Problem:</strong> Xavfsiz, foydalanuvchilar
                          bo'yicha ajratilgan va tezkor vazifalar menejmenti API tizimi.
                        </div>
                        <div>
                          <strong className="text-white font-semibold">Solution:</strong> Django REST Framework
                          va PostgreSQL asosida JWT autentifikatsiya, to'liq CRUD, permissions va pagination.
                        </div>
                      </div>

                    <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-2">
                      {['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'REST API'].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-[#0f1026] border border-[#7882ff]/20 text-[#cbd5e1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#7882ff]/15">
                    <a
                      href="https://github.com/hojiakbarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#7c8fff] hover:underline"
                    >
                      <Github size={13} />
                      <span>GitHub'da ko'rish</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>

              {/* 4. E-COMMERCE BACKEND */}
              <AnimatePresence>
                {(activeTab === 'all' || activeTab === 'backend' || activeTab === 'ecommerce') && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 p-7 flex flex-col justify-between hover:border-[#7c8fff]/50 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="w-12 h-12 rounded-xl bg-[#9d6fff]/15 text-[#9d6fff] flex items-center justify-center text-xl">
                          🛒
                        </span>
                        <span className="text-xs font-mono text-[#cbd5e1]">004</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold font-display text-white">
                          E-commerce Backend Service
                        </h3>
                        <div className="text-xs font-mono text-[#9d6fff] mt-1 font-semibold">
                          Django &amp; Relational Database
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-[#cbd5e1] font-normal leading-relaxed">
                        <div>
                          <strong className="text-white font-semibold">Problem:</strong> Mahsulotlar katalogi,
                          savat kalkulyatsiyasi va buyurtma holatlarini boshqaruvchi mustahkam backend.
                        </div>
                        <div>
                          <strong className="text-white font-semibold">Solution:</strong> Django ORM,
                          Admin panel moslashtirish, qidiruv/filterlash va buyurtma statuslari monitoringi.
                        </div>
                      </div>

                    <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-2">
                      {['Python', 'Django', 'REST API', 'PostgreSQL', 'SQLite', 'Admin Panel'].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-[#0f1026] border border-[#7882ff]/20 text-[#cbd5e1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#7882ff]/15">
                    <a
                      href="https://github.com/hojiakbarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#9d6fff] hover:underline"
                    >
                      <Github size={13} />
                      <span>GitHub'da ko'rish</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & LANGUAGES WITH ASSEMBLE ANIMATIONS */}
      <section id="education" className="relative z-10 py-24 px-6 border-t border-[#7882ff]/15 bg-[#0a0b1a]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
              <span>Ta'lim &amp; Tillar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Akademik poydevor va muloqot
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card lg:col-span-7 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5b6ef5]/15 text-[#7c8fff] flex items-center justify-center">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display text-white">PDP Academy</h3>
                      <div className="text-xs font-mono text-[#7c8fff] font-semibold">Backend Development Kursi</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#5b6ef5]/15 border border-[#5b6ef5]/30 text-[#7c8fff] text-xs font-mono font-semibold">
                    🎓 Sertifikat
                  </span>
                </div>

                <p className="text-sm text-[#cbd5e1] font-normal leading-relaxed">
                  Python va Django backend asoslaridan tortib to to'liq RESTful API ishlab chiqish,
                  relational ma'lumotlar bazasi bilan ishlash va dasturiy arxitekturagacha chuqur
                  nazariy hamda amaliy bilimlar egallangan.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Architecture'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-[#0f1026] border border-[#7882ff]/20 text-[#cbd5e1] font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Languages Grid */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { flag: '🇺🇿', name: "O'zbek tili", desc: 'Ona tili (Native)', badge: 'Ona tili', color: '#00e5a0' },
                { flag: '🇺🇸', name: 'English', desc: 'Professional communication', badge: 'B1 · Intermediate', color: '#7c8fff' },
                { flag: '🇷🇺', name: 'Русский', desc: 'Technical understanding', badge: 'A2 · Elementary', color: '#ffbc2e' },
              ].map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 25, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card p-5 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <div className="text-base font-bold font-display text-white">{lang.name}</div>
                      <div className="text-xs font-mono text-[#cbd5e1]">{lang.desc}</div>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: `${lang.color}15`,
                      borderColor: `${lang.color}35`,
                      color: lang.color,
                      borderWidth: 1
                    }}
                  >
                    {lang.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH ASSEMBLE ANIMATIONS */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8fff] uppercase tracking-widest">
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
              <span>Bog'lanish</span>
              <span className="w-6 h-[1px] bg-[#7c8fff]" />
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white">
              Keling, birga{' '}
              <span className="bg-gradient-to-r from-[#7c8fff] via-[#00d4ff] to-[#9d6fff] bg-clip-text text-transparent">
                ishlaylik
              </span>
            </h2>

            <p className="text-[#cbd5e1] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Backend tizimlar, REST API, web, mobile va AI integratsiyalari bo'yicha loyihalar
              hamda professional ish takliflari uchun ochiqman.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card p-6 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 hover:border-[#7c8fff]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5b6ef5]/15 text-[#7c8fff] flex items-center justify-center mb-4">
                  <Mail size={20} />
                </div>
                <div className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider font-semibold">Email</div>
                <div className="text-sm font-bold text-white mt-1 break-all">
                  hojiakbarpy@gmail.com
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <a
                  href="mailto:hojiakbarpy@gmail.com"
                  className="text-xs font-mono text-[#7c8fff] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Yozish</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => copyToClipboard('hojiakbarpy@gmail.com', 'email')}
                  className="text-xs font-mono text-[#cbd5e1] hover:text-white flex items-center gap-1 font-medium"
                >
                  {copiedField === 'email' ? (
                    <span className="text-[#00e5a0] font-bold">Nusxalandi!</span>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Nusxa</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card p-6 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 hover:border-[#00e5a0]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00e5a0]/15 text-[#00e5a0] flex items-center justify-center mb-4">
                  <Phone size={20} />
                </div>
                <div className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider font-semibold">Telefon</div>
                <div className="text-base font-bold text-white mt-1 font-mono">
                  +998 93 411 96 33
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <a
                  href="tel:+998934119633"
                  className="text-xs font-mono text-[#00e5a0] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Qo'ng'iroq</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => copyToClipboard('+998934119633', 'phone')}
                  className="text-xs font-mono text-[#cbd5e1] hover:text-white flex items-center gap-1 font-medium"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-[#00e5a0] font-bold">Nusxalandi!</span>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Nusxa</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Personal Telegram */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card p-6 rounded-2xl bg-[#0a0b18] border border-[#7882ff]/25 hover:border-[#00d4ff]/50 transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/15 text-[#00d4ff] flex items-center justify-center mb-4">
                  <Send size={20} />
                </div>
                <div className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider font-semibold">
                  Shaxsiy Telegram
                </div>
                <div className="text-base font-bold text-white mt-1 font-mono">
                  @hjkbrsvnch
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <a
                  href="https://t.me/hjkbrsvnch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#00d4ff] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Telegramda ochish</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => copyToClipboard('@hjkbrsvnch', 'telegram')}
                  className="text-xs font-mono text-[#cbd5e1] hover:text-white flex items-center gap-1 font-medium"
                >
                  {copiedField === 'telegram' ? (
                    <span className="text-[#00e5a0] font-bold">Nusxalandi!</span>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Nusxa</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Social Profiles Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/hojiakbarh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0a0b18] border border-[#7882ff]/25 text-white hover:border-[#7c8fff] transition-all flex items-center gap-2.5 text-sm font-semibold hover:-translate-y-0.5 shadow-sm"
            >
              <Github size={18} />
              <span>GitHub: hojiakbarh</span>
            </a>

            <a
              href="https://github.com/hojiakbarh/hojiakbar-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0a0b18] border border-[#7882ff]/25 text-[#7c8fff] hover:border-[#7c8fff] transition-all flex items-center gap-2.5 text-sm font-semibold hover:-translate-y-0.5 shadow-sm"
            >
              <Code2 size={18} />
              <span>Portfolio Repo</span>
            </a>

            <a
              href="https://t.me/hjkbrsvnch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0a0b18] border border-[#00d4ff]/35 text-[#00d4ff] hover:border-[#00d4ff] transition-all flex items-center gap-2.5 text-sm font-semibold hover:-translate-y-0.5 shadow-sm"
            >
              <Send size={18} />
              <span>Telegram: @hjkbrsvnch</span>
            </a>

            <a
              href="mailto:hojiakbarpy@gmail.com"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#5b6ef5] to-[#9d6fff] text-white hover:shadow-xl hover:shadow-[#5b6ef5]/40 transition-all flex items-center gap-2 text-sm font-bold hover:-translate-y-0.5"
            >
              <Mail size={18} />
              <span>Xabar yuborish</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 px-6 border-t border-[#7882ff]/15 bg-[#04040d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#cbd5e1] font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white font-display text-sm tracking-tight">
              Hojiakbar Hoshimjonov
            </span>
            <span className="text-[#3a3d5c]">|</span>
            <span className="text-slate-300">Python Backend Developer · Web · Mobile · AI</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a
              href="https://github.com/hojiakbarh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://t.me/hjkbrsvnch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a
              href="mailto:hojiakbarpy@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://hojikabar-portfolio.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d4ff] transition-colors"
            >
              Live Portfolio
            </a>
          </div>

          <div>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</div>
        </div>
      </footer>
    </div>
  );
}
