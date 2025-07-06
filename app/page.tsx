"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NeuralNetworkBackground } from "@/components/ui/neural-network-background";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaGraduationCap, 
  FaCode, 
  FaGlobe, 
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaBrain,
  FaRobot,
  FaCloud,
  FaDatabase
} from "react-icons/fa";

export default function CurriculoInterativo() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <NeuralNetworkBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
        <motion.section 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 glow-text font-mono"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Melissa de Castro Fernandes
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 text-blue-300 mb-6 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <FaPhone className="text-purple-400" />
              <span>(91) 98456-4441</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>melfernandes1504@gmail.com</span>
            </div>
            <motion.a 
              href="https://linkedin.com/in/melissa-fernandes" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/AElise08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button>
                <FaGithub className="mr-2" />
                GitHub
              </Button>
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <FaRocket className="text-2xl text-purple-400" />
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-mono">
                    Objetivo
                  </h2>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Atuar em projetos inovadores e desafiadores, especialmente em startups ou áreas de tecnologia,
                  onde possa aplicar meus conhecimentos em programação, engenharia e inteligência artificial.
                  Busco oportunidades que estimulem o aprendizado contínuo e permitam o desenvolvimento
                  prático de soluções tecnológicas com impacto real.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="text-2xl text-blue-400" />
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-mono">
                    Educação
                  </h2>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span>Graduanda em Engenharia Mecânica | 2025 - 2030 | UFPA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span>Ensino Médio | Dezembro 2024 | Colégio Paulista</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-2xl text-cyan-400" />
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-mono">
                    Habilidades
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="text-lg text-purple-400" />
                      <p className="font-bold text-purple-300">Programação e Desenvolvimento Web</p>
                    </div>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        TypeScript, C++, Python, JavaScript, HTML, CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        React (Hooks, Context API), Next.js (App Router, API Routes, Server Components)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBrain className="text-lg text-blue-400" />
                      <p className="font-bold text-blue-300">Ferramentas de IA e Automação</p>
                    </div>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        ChatGPT, Gemini, Claude, Manus, Perplexity
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        Criação de prompts, automação de fluxos e APIs de IA generativa
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaCloud className="text-lg text-cyan-400" />
                      <p className="font-bold text-cyan-300">Cloud & DevTools</p>
                    </div>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        Google Cloud Platform (básico), Firebase (Firestore, Auth, regras de segurança)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        Git e GitHub
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaRobot className="text-lg text-purple-400" />
                      <p className="font-bold text-purple-300">Ferramentas Vibe Coding</p>
                    </div>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        Lovable, Replit, Firebase Studio, Cursor, Copilot
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaDatabase className="text-lg text-blue-400" />
                    <p className="font-bold text-blue-300">Outras Competências</p>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-100 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Campanhas publicitárias digitais, Canva, Figma
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Escrita criativa, conteúdo digital estratégico
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Análise de dados e métricas de engajamento
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <FaGlobe className="text-2xl text-blue-400" />
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-mono">
                    Idiomas
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-300">Inglês</div>
                    <div className="text-blue-200">Avançado</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-300">Espanhol</div>
                    <div className="text-blue-200">Intermediário</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-300">Italiano</div>
                    <div className="text-blue-200">Iniciante</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} id="projetos">
            <Card>
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className="text-2xl text-purple-400" />
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-mono">
                    Experiência e Projetos
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-gradient-to-b from-purple-500 to-blue-500 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -left-2 top-0"></div>
                    <motion.div 
                      className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-6 rounded-lg border border-purple-500/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <FaRocket className="text-purple-400" />
                        <p className="font-bold text-xl text-purple-300">
                          MapMed – <a 
                            href="https://mapmed.com.br" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline transition-colors"
                          >
                            mapmed.com.br
                          </a>
                        </p>
                      </div>
                      <p className="italic text-blue-200 mb-4">Fundadora e Desenvolvedora Full-Stack | 2024 – Atual</p>
                      <ul className="space-y-2 text-blue-100">
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mt-2"></div>
                          <span>Plataforma para geração de mapas mentais automáticos com IA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                          <span>Stack: Next.js, React, TypeScript, Tailwind CSS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2"></div>
                          <span>Integrações com Google Cloud Speech-to-Text, Firebase, Stripe, Zod</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mt-2"></div>
                          <span>Funcionalidades: resumos, flashcards, transcrição, autenticação, PWA</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  <div className="border-l-2 border-gradient-to-b from-blue-500 to-cyan-500 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -left-2 top-0"></div>
                    <motion.div 
                      className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <FaBrain className="text-blue-400" />
                        <p className="font-bold text-xl text-blue-300">Social Media Voluntária | Missão com Adolescentes (@missaoac)</p>
                      </div>
                      <p className="italic text-blue-200 mb-4">Belém – PA | 2023 – Atual</p>
                      <ul className="space-y-2 text-blue-100">
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                          <span>Gestão do Instagram com foco no público adolescente (1,9 mil seguidores)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2"></div>
                          <span>Alcance de 27 mil visualizações e 500 interações em junho de 2025</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                          <span>Criação, captura, edição e publicação de conteúdos (vídeo/foto)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2"></div>
                          <span>Trabalho colaborativo em equipe de mídia</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.footer 
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-blue-300 text-sm">
            © 2025 Melissa de Castro Fernandes - Currículo Interativo Desenvolvido com ❤️
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
