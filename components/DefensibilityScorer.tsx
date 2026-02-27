import React, { useState } from 'react';
    import { analyzeInnovation, StrategicAssessment } from '../services/geminiService';
    import { AnalysisStatus } from '../types';
    import { Button } from './Button';
    import { Sparkles, ArrowRight, Loader2, ShieldCheck, Zap } from 'lucide-react';
    
    export const DefensibilityScorer: React.FC = () => {
      const [input, setInput] = useState('');
      const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
      const [result, setResult] = useState<StrategicAssessment | null>(null);
    
      const handleAnalyze = async () => {
        if (!input.trim()) return;
        setStatus(AnalysisStatus.ANALYZING);
        try {
          const data = await analyzeInnovation(input);
          setResult(data);
          setStatus(AnalysisStatus.COMPLETE);
        } catch (e) {
          setStatus(AnalysisStatus.ERROR);
        }
      };
    
      return (
        <section className="py-24 bg-brand-light dark:bg-brand-black relative border-t border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#1A1A1A] border border-brand-border dark:border-brand-darkBorder rounded-full mb-6 transition-colors duration-300">
                <Zap className="w-4 h-4 text-brand-red fill-brand-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-black dark:text-white">AI Strategy Engine</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black dark:text-white mb-6 tracking-tight transition-colors duration-300">Check Your Strategic Advantage</h2>
              <p className="text-brand-gray text-lg font-light max-w-2xl mx-auto">
                Describe what you are building. Our AI will identify your strategic defensibility points instantly.
              </p>
            </div>
    
            {status === AnalysisStatus.IDLE || status === AnalysisStatus.ANALYZING ? (
              <div className="bg-white dark:bg-[#1A1A1A] border border-brand-border dark:border-brand-darkBorder p-8 shadow-xl shadow-black/5 transition-colors duration-300">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. A decentralized autonomous drone delivery network optimizing specifically for organ transport..."
                  className="w-full bg-brand-light dark:bg-brand-black text-brand-black dark:text-white p-6 border-0 focus:ring-2 focus:ring-brand-red/10 outline-none transition-colors min-h-[160px] font-sans text-lg placeholder:text-brand-gray/50 resize-none"
                />
                <div className="mt-6 flex justify-between items-center">
                   <p className="text-xs text-brand-gray uppercase tracking-widest font-semibold hidden md:block">Powered by Gemini 2.5</p>
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={status === AnalysisStatus.ANALYZING || !input.trim()}
                    className="flex items-center gap-2"
                  >
                    {status === AnalysisStatus.ANALYZING ? (
                      <><Loader2 className="animate-spin w-4 h-4" /> Analyzing Strategy...</>
                    ) : (
                      <>Analyze Defensibility <ArrowRight className="w-4 h-4" /></>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-[#1A1A1A] border border-brand-border dark:border-brand-darkBorder p-10 shadow-xl shadow-black/5 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-brand-border dark:border-brand-darkBorder pb-8 gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-3">Strategic Assessment</h3>
                    <p className="text-2xl md:text-3xl font-bold text-brand-black dark:text-white leading-tight">"{result?.hook}"</p>
                  </div>
                  <Button variant="outline" onClick={() => setStatus(AnalysisStatus.IDLE)} className="text-xs py-3 px-6 shrink-0 dark:border-brand-darkBorder dark:text-white">
                    Analyze Another
                  </Button>
                </div>
    
                <div className="grid md:grid-cols-3 gap-8">
                  {result?.strategies.map((strat, idx) => (
                    <div key={idx} className="group">
                      <div className="w-10 h-10 bg-brand-light dark:bg-brand-black dark:text-white flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        <span className="font-bold">0{idx + 1}</span>
                      </div>
                      <h4 className="text-brand-black dark:text-white font-bold text-lg mb-2">{strat.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{strat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      );
    };