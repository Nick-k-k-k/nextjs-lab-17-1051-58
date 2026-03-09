import { revalidatePath } from 'next/cache';

export default function Contact() {
  async function action(fd: FormData) {
    'use server';
    console.log(`Submission from ${fd.get('user_email')}: ${fd.get('msg')}`);
    revalidatePath('/contact');
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-black uppercase mb-6">Dispatch Message</h1>
      <form action={action} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase">Identification</label>
          <input name="user_email" type="email" placeholder="email@address.com" className="p-4 border-4 border-black outline-none focus:bg-zinc-100" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase">Transmission Content</label>
          <textarea name="msg" rows={4} className="p-4 border-4 border-black outline-none focus:bg-zinc-100" required />
        </div>
        <button type="submit" className="bg-black text-white p-4 font-black uppercase hover:bg-accent transition">Send Dispatch</button>
      </form>
    </div>
  );
}