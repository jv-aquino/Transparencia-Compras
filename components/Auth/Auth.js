import { supabase } from "lib/supabaseClient";

export default function Auth() {
  return (
    <div className="">
      <form action="" className="flex flex-row gap-2">
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
        <input type="submit" value="Logar" />
      </form>
    </div>
  )
}