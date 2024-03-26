import { Today } from "./Today";
import { Name } from "./Name";

export function Logo() {
  return (
    <div className="logoholder">
      <Name />
      <Today />
    </div>
  );
}
