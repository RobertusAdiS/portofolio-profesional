import {Link,useParams} from 'react-router-dom';
import type {ReactNode} from 'react';
import {ArrowLeft,CheckCircle2,ExternalLink,Link2,AlertCircle,Lightbulb,RefreshCcw} from 'lucide-react';
import {projects} from '../data/projects';
import {Footer} from '../components/layout/Footer';
import {Navbar} from '../components/navigation/Navbar';

const reflection4CSteps = [
  {key:'connection' as const, label:'CONNECTION', icon:Link2, description:'Apa pengetahuan atau pengalaman sebelumnya yang terhubung dengan pembelajaran ini?'},
  {key:'challenge' as const, label:'CHALLENGE', icon:AlertCircle, description:'Tantangan atau kesulitan apa yang muncul dalam proses belajar dan praktik?'},
  {key:'concept' as const, label:'CONCEPT', icon:Lightbulb, description:'Konsep pendidikan penting apa yang dipahami dan dapat menjadi landasan tindakan?'},
  {key:'change' as const, label:'CHANGE', icon:RefreshCcw, description:'Apa yang berubah dalam cara berpikir, merancang, atau melakukan pembelajaran?'},
];

export function ProjectCaseStudy(){
  const {slug}=useParams();
  const p=projects.find(x=>x.slug===slug);

  if(!p) return <>
    <Navbar/>
    <main className="min-h-screen pt-40 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold">Course tidak ditemukan</h1>
      <Link className="text-accent inline-block mt-5" to="/">Kembali ke portofolio</Link>
    </main>
    <Footer/>
  </>;

  return <>
    <Navbar/>
    <main className="pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        <Link to="/#courses" className="inline-flex items-center gap-2 text-sm text-muted">
          <ArrowLeft size={16}/> Kembali ke courses
        </Link>

        <div className="mt-8">
          <span className="tag">{p.category}</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-ink">{p.title}</h1>
          {!p.hideOverview && p.description && (
            <p className="mt-5 text-xl leading-8 text-muted">{p.description}</p>
          )}
        </div>

        <div className="mt-12 grid gap-10">
          {!p.hideOverview && p.description && (
            <Block title="Course overview"><p>{p.description}</p></Block>
          )}
          {p.context && p.context.trim() !== '' && (
            <Block title="Context"><p>{p.context}</p></Block>
          )}
          {p.approach && p.approach.length > 0 && (
            <Block title="Approach">
              <ul>{p.approach.map(x=><li key={x} className="flex gap-3 mt-3"><CheckCircle2 size={18} className="text-accent shrink-0"/>{x}</li>)}</ul>
            </Block>
          )}
          {p.outcomes && p.outcomes.length > 0 && (
            <Block title="Learning outcome">
              <ul>{p.outcomes.map(x=><li key={x} className="flex gap-3 mt-3"><CheckCircle2 size={18} className="text-accent shrink-0"/>{x}</li>)}</ul>
            </Block>
          )}
          {p.skills && p.skills.length > 0 && (
            <Block title="Competencies demonstrated">
              <div className="flex flex-wrap gap-2">{p.skills.map(x=><span className="tag" key={x}>{x}</span>)}</div>
            </Block>
          )}

          {/* Reflection 4C Section */}
          {p.reflection4C && (
            <Block title="Reflection · 4C">
              <p className="mb-6 text-base text-muted">Refleksi menggunakan kerangka 4C: menghubungkan pengalaman, mengidentifikasi tantangan, merumuskan konsep, dan menentukan perubahan.</p>
              <div className="grid gap-4">
                {reflection4CSteps.map((step, index) => {
                  const Icon = step.icon;
                  const text = p.reflection4C![step.key];
                  return (
                    <div key={step.key} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-soft">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-accent shrink-0">
                          <Icon size={20}/>
                        </span>
                        <div>
                          <span className="text-[10px] font-bold tracking-[.16em] text-slate-400">0{index+1}</span>
                          <h3 className="text-sm font-bold uppercase tracking-[.12em] text-accent">{step.label}</h3>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-slate-500 italic mb-2">{step.description}</p>
                      <p className="text-base leading-7 text-ink">{text}</p>
                    </div>
                  );
                })}
              </div>
            </Block>
          )}

          <Block title="Artifact">
            {p.evidenceUrl && p.evidenceUrl !== '#' ? (
              <a href={p.evidenceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                <ExternalLink size={15}/> Lihat Artifact
              </a>
            ) : (
              <>
                <p className="text-muted">Tautan artifact saat ini masih placeholder.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted"><ExternalLink size={15}/> Artifact belum tersedia</span>
              </>
            )}
          </Block>
        </div>
      </div>
    </main>
    <Footer/>
  </>;
}

function Block({title,children}:{title:string;children:ReactNode}){
  return <section className="border-t border-slate-200 pt-7">
    <h2 className="text-2xl font-semibold text-ink">{title}</h2>
    <div className="mt-4 text-lg leading-8 text-muted">{children}</div>
  </section>;
}
