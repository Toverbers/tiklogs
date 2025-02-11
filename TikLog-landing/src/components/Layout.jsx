import { AppFooter } from "./Footer";
import AppHeader from "./Header";

export function Layout({ children }) {
  return (
    <div className="flex flex-col px-8 min-h-screen screen-[100%]">
      <AppHeader  />
      <main className="flex-1 h-[80%] overflow-auto scrollbar-hide">
        {children}
      </main>
      <AppFooter  />
    </div>
  )
}

