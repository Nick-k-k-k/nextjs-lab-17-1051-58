interface UserProps { 
  name: string; 
  role: string; 
  email?: string;
  status?: string; 
}

export default function UserCard({ name, role, email, status }: UserProps) {
  return (
    <div className="p-6 border-4 border-white bg-black text-white flex flex-col gap-2 neo-border">
      <h2 className="text-2xl font-black uppercase tracking-tighter">{name}</h2>
      <div className="bg-accent text-white px-2 py-1 text-xs inline-block w-fit font-bold">
        {role}
      </div>
      <p className="text-sm italic text-zinc-400 mt-2">
        CONTACT: {email ?? "NO_DATA_LINKED"}
      </p>
      {status && <p className="text-[10px] text-zinc-500 mt-1 uppercase">Log: {status}</p>}
    </div>
  );
}