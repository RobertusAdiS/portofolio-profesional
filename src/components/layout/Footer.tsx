import { profile } from "../../config/profile";
export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="flex flex-col justify-between max-w-6xl gap-4 px-5 py-10 mx-auto md:flex-row">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · Portofolio PPG
          </p>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} · Robertis Ado Setyawan
        </p>
      </div>
    </footer>
  );
}
