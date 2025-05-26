import krill from "./assets/krill.jpg";
import logo from "./assets/logo.gif";

export function App() {
  return (
    <div class="h-screen flex items-center justify-center">
      <div class="w-[80%]">
        <img src={krill} class="max-w-[320px] w-full pr-4" />
        <img src={logo} class="max-w-[600px] w-full" />
      </div>
    </div>
  );
}
