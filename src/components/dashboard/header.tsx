import Image from "next/image"

type User = { id: string; name?: string; avatar?: string }

export function Header({ user }: { user: User | null }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10">
          <span className="text-sm font-semibold text-white/95">Finance</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-slate-100/90">Good morning</span>
          <span className="text-lg font-semibold text-white">{user?.name ?? "User"}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-white/90 hidden md:block">March 2025</div>

        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 border border-white/10 backdrop-blur-md">
          {user?.avatar ? (
            // Keep Image optional — ensure /public/avatar.png exists or use placeholder
            <Image src={user.avatar} alt="avatar" width={40} height={40} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-white/90">
              {user?.name ? user.name[0] : "U"}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
